import {DataSourceTemplate, log } from "@graphprotocol/graph-ts" 
import { newBidSent } from '../generated/templates/BidTracker/BidTracker' //event
import { NewProject } from '../generated/BidTrackerFactory/BidTrackerFactory' //event
import { Bids, Project } from '../generated/schema' //entities
import { BidTracker as newProjectBids } from '../generated/templates' //templates

export function handleNewProject(event: NewProject): void {
  let newProject = new Project(event.params.project.toHex())
  log.info("New project at address: {}", [event.params.project.toHex()])
  // newProject.id = event.params.project.toHex() // save project address
  newProject.projectAddress = event.params.project.toHex()
  newProject.name = event.params.name
  newProject.ownerAddress = event.params.owner.toHex()
  newProject.originalSpeedTargets = event.params.bountySpeedTargets
  newProject.originalBounties = event.params.targeBounties
  newProject.speedTarget = event.params.streamSpeedTarget
  newProject.streamRate = event.params.streamRate
  newProject.save()

  newProjectBids.create(event.params.project) //tracks based on address
}

export function handleNewBid(event: newBidSent): void {
  //we need to connect it here
  let projectID = event.address.toHexString() //should be called from project address?
  let project = Project.load(projectID)

  let newBid = new Bids(event.params.Bidder.toHex())
  log.info("New bidder at address: {}", [event.params.Bidder.toHex()])
  newBid.bidderAddress = event.params.Bidder.toHex()
  newBid.bidDate = event.block.timestamp.toI32()
  newBid.project = project.id
  newBid.speedTargetsBidder = event.params.bountySpeedTargets
  newBid.bountiesBidder = event.params.bounties
  newBid.speedTarget = event.params.speedTargetBidder
  newBid.save() //still save in case we want to query all tokens for something
}