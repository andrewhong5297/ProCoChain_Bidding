import {DataSourceTemplate, log } from "@graphprotocol/graph-ts" 
import { currentTermsApproved, newBidSent } from '../generated/templates/BidTracker/BidTracker' //event
import { NewProject } from '../generated/BidTrackerFactory/BidTrackerFactory' //event
import { Bids, Project, Approval } from '../generated/schema' //entities
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
  newProject.wifiSpeed = event.params.wifiSpeedTarget
  newProject.streamRate = event.params.streamRate
  newProject.createdAt = event.params.createdAt
  newProject.save()

  newProjectBids.create(event.params.project) //tracks based on address
}

export function handleNewBid(event: newBidSent): void {
  //we need to connect it here
  let projectID = event.address.toHexString() //should be called from project address
  let project = Project.load(projectID)

  let newBid = new Bids(event.params.Bidder.toHex())
  log.info("New bidder at address: {}", [event.params.Bidder.toHex()])
  newBid.bidderAddress = event.params.Bidder.toHex()
  newBid.bidDate = event.block.timestamp.toI32()
  newBid.project = project.id
  newBid.speedTargetsBidder = event.params.bountySpeedTargets
  newBid.bountiesBidder = event.params.bounties
  newBid.speedTarget = event.params.wifiSpeedBidder
  newBid.streamRate = event.params.streamRateBidder
  newBid.createdAt = event.params.createdAt
  newBid.save() 
}

export function handleApproval(event: currentTermsApproved): void {
  //we need to connect it here
  let projectID = event.address.toHexString() //should be called from project address
  let project = Project.load(projectID)

  let approval = new Approval(event.address.toHex())
  log.info("approval of project at address: {}", [event.params.approvedBidder.toHexString()])
  approval.project = project.id
  approval.winningBidder = event.params.approvedBidder.toHex()
  approval.finalWifiSpeed = event.params.finalWifiSpeed
  approval.finalStreamSpeed = event.params.finalStreamRate
  approval.finalSpeedTargets = event.params.finalTargetSpeeds
  approval.finalBounties = event.params.finalBounties
  approval.createdAt = event.params.createdAt
  approval.save() 
}