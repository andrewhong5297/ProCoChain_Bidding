// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class currentTermsApproved extends ethereum.Event {
  get params(): currentTermsApproved__Params {
    return new currentTermsApproved__Params(this);
  }
}

export class currentTermsApproved__Params {
  _event: currentTermsApproved;

  constructor(event: currentTermsApproved) {
    this._event = event;
  }

  get approvedBidder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get finalWifiSpeed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get finalStreamRate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get finalTargetSpeeds(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get finalBounties(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get createdAt(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class newBidSent extends ethereum.Event {
  get params(): newBidSent__Params {
    return new newBidSent__Params(this);
  }
}

export class newBidSent__Params {
  _event: newBidSent;

  constructor(event: newBidSent) {
    this._event = event;
  }

  get Bidder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get streamRateBidder(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get wifiSpeedBidder(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get bountySpeedTargets(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get bounties(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get createdAt(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class BidTracker__loadBidderTermsResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Array<BigInt>,
    value1: Array<BigInt>,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromSignedBigInt(this.value3));
    return map;
  }
}

export class BidTracker__loadOwnerTermsResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Array<BigInt>,
    value1: Array<BigInt>,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromSignedBigInt(this.value3));
    return map;
  }
}

export class BidTracker extends ethereum.SmartContract {
  static bind(address: Address): BidTracker {
    return new BidTracker("BidTracker", address);
  }

  all_bidders(param0: BigInt): Address {
    let result = super.call("all_bidders", "all_bidders(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_all_bidders(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "all_bidders",
      "all_bidders(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bountySpeedTargetOwner(param0: BigInt): BigInt {
    let result = super.call(
      "bountySpeedTargetOwner",
      "bountySpeedTargetOwner(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_bountySpeedTargetOwner(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bountySpeedTargetOwner",
      "bountySpeedTargetOwner(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cast(number: BigInt): BigInt {
    let result = super.call("cast", "cast(uint256):(int96)", [
      ethereum.Value.fromUnsignedBigInt(number)
    ]);

    return result[0].toBigInt();
  }

  try_cast(number: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cast", "cast(uint256):(int96)", [
      ethereum.Value.fromUnsignedBigInt(number)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  loadBidderTerms(_bidder: Address): BidTracker__loadBidderTermsResult {
    let result = super.call(
      "loadBidderTerms",
      "loadBidderTerms(address):(uint256[],uint256[],uint256,int96)",
      [ethereum.Value.fromAddress(_bidder)]
    );

    return new BidTracker__loadBidderTermsResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_loadBidderTerms(
    _bidder: Address
  ): ethereum.CallResult<BidTracker__loadBidderTermsResult> {
    let result = super.tryCall(
      "loadBidderTerms",
      "loadBidderTerms(address):(uint256[],uint256[],uint256,int96)",
      [ethereum.Value.fromAddress(_bidder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BidTracker__loadBidderTermsResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  loadOwnerTerms(): BidTracker__loadOwnerTermsResult {
    let result = super.call(
      "loadOwnerTerms",
      "loadOwnerTerms():(uint256[],uint256[],uint256,int96)",
      []
    );

    return new BidTracker__loadOwnerTermsResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_loadOwnerTerms(): ethereum.CallResult<BidTracker__loadOwnerTermsResult> {
    let result = super.tryCall(
      "loadOwnerTerms",
      "loadOwnerTerms():(uint256[],uint256[],uint256,int96)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BidTracker__loadOwnerTermsResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  noncompliant(): boolean {
    let result = super.call("noncompliant", "noncompliant():(bool)", []);

    return result[0].toBoolean();
  }

  try_noncompliant(): ethereum.CallResult<boolean> {
    let result = super.tryCall("noncompliant", "noncompliant():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  oracleAddress(): Address {
    let result = super.call("oracleAddress", "oracleAddress():(address)", []);

    return result[0].toAddress();
  }

  try_oracleAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "oracleAddress",
      "oracleAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerApproval(): boolean {
    let result = super.call("ownerApproval", "ownerApproval():(bool)", []);

    return result[0].toBoolean();
  }

  try_ownerApproval(): ethereum.CallResult<boolean> {
    let result = super.tryCall("ownerApproval", "ownerApproval():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  projectName(): string {
    let result = super.call("projectName", "projectName():(string)", []);

    return result[0].toString();
  }

  try_projectName(): ethereum.CallResult<string> {
    let result = super.tryCall("projectName", "projectName():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  securityDeposit(): BigInt {
    let result = super.call(
      "securityDeposit",
      "securityDeposit():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_securityDeposit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "securityDeposit",
      "securityDeposit():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  streamRateOwner(): BigInt {
    let result = super.call("streamRateOwner", "streamRateOwner():(int96)", []);

    return result[0].toBigInt();
  }

  try_streamRateOwner(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "streamRateOwner",
      "streamRateOwner():(int96)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  targetBountyOwner(param0: BigInt): BigInt {
    let result = super.call(
      "targetBountyOwner",
      "targetBountyOwner(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_targetBountyOwner(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "targetBountyOwner",
      "targetBountyOwner(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wifiSpeedOwner(): BigInt {
    let result = super.call("wifiSpeedOwner", "wifiSpeedOwner():(uint256)", []);

    return result[0].toBigInt();
  }

  try_wifiSpeedOwner(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "wifiSpeedOwner",
      "wifiSpeedOwner():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  winningBidder(): Address {
    let result = super.call("winningBidder", "winningBidder():(address)", []);

    return result[0].toAddress();
  }

  try_winningBidder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "winningBidder",
      "winningBidder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ConditionalToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _Superfluid(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _CFA(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _ERC20(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _bountySpeedTargets(): Array<BigInt> {
    return this._call.inputValues[6].value.toBigIntArray();
  }

  get _bounties(): Array<BigInt> {
    return this._call.inputValues[7].value.toBigIntArray();
  }

  get _wifiSpeedTarget(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _streamRate(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveBidderTermsCall extends ethereum.Call {
  get inputs(): ApproveBidderTermsCall__Inputs {
    return new ApproveBidderTermsCall__Inputs(this);
  }

  get outputs(): ApproveBidderTermsCall__Outputs {
    return new ApproveBidderTermsCall__Outputs(this);
  }
}

export class ApproveBidderTermsCall__Inputs {
  _call: ApproveBidderTermsCall;

  constructor(call: ApproveBidderTermsCall) {
    this._call = call;
  }

  get _bidder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ApproveBidderTermsCall__Outputs {
  _call: ApproveBidderTermsCall;

  constructor(call: ApproveBidderTermsCall) {
    this._call = call;
  }
}

export class CallReportPayoutsCall extends ethereum.Call {
  get inputs(): CallReportPayoutsCall__Inputs {
    return new CallReportPayoutsCall__Inputs(this);
  }

  get outputs(): CallReportPayoutsCall__Outputs {
    return new CallReportPayoutsCall__Outputs(this);
  }
}

export class CallReportPayoutsCall__Inputs {
  _call: CallReportPayoutsCall;

  constructor(call: CallReportPayoutsCall) {
    this._call = call;
  }

  get questionID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get outcome(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class CallReportPayoutsCall__Outputs {
  _call: CallReportPayoutsCall;

  constructor(call: CallReportPayoutsCall) {
    this._call = call;
  }
}

export class CallSplitPositionCall extends ethereum.Call {
  get inputs(): CallSplitPositionCall__Inputs {
    return new CallSplitPositionCall__Inputs(this);
  }

  get outputs(): CallSplitPositionCall__Outputs {
    return new CallSplitPositionCall__Outputs(this);
  }
}

export class CallSplitPositionCall__Inputs {
  _call: CallSplitPositionCall;

  constructor(call: CallSplitPositionCall) {
    this._call = call;
  }

  get tokenaddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get parent(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get conditionId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get partition(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CallSplitPositionCall__Outputs {
  _call: CallSplitPositionCall;

  constructor(call: CallSplitPositionCall) {
    this._call = call;
  }
}

export class EndFlowCall extends ethereum.Call {
  get inputs(): EndFlowCall__Inputs {
    return new EndFlowCall__Inputs(this);
  }

  get outputs(): EndFlowCall__Outputs {
    return new EndFlowCall__Outputs(this);
  }
}

export class EndFlowCall__Inputs {
  _call: EndFlowCall;

  constructor(call: EndFlowCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class EndFlowCall__Outputs {
  _call: EndFlowCall;

  constructor(call: EndFlowCall) {
    this._call = call;
  }
}

export class NewBidderTermsCall extends ethereum.Call {
  get inputs(): NewBidderTermsCall__Inputs {
    return new NewBidderTermsCall__Inputs(this);
  }

  get outputs(): NewBidderTermsCall__Outputs {
    return new NewBidderTermsCall__Outputs(this);
  }
}

export class NewBidderTermsCall__Inputs {
  _call: NewBidderTermsCall;

  constructor(call: NewBidderTermsCall) {
    this._call = call;
  }

  get _bountySpeedTargets(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _bounties(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _wifiSpeedTarget(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _streamRate(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class NewBidderTermsCall__Outputs {
  _call: NewBidderTermsCall;

  constructor(call: NewBidderTermsCall) {
    this._call = call;
  }
}

export class RecieveERC20Call extends ethereum.Call {
  get inputs(): RecieveERC20Call__Inputs {
    return new RecieveERC20Call__Inputs(this);
  }

  get outputs(): RecieveERC20Call__Outputs {
    return new RecieveERC20Call__Outputs(this);
  }
}

export class RecieveERC20Call__Inputs {
  _call: RecieveERC20Call;

  constructor(call: RecieveERC20Call) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RecieveERC20Call__Outputs {
  _call: RecieveERC20Call;

  constructor(call: RecieveERC20Call) {
    this._call = call;
  }
}

export class TransferCTCall extends ethereum.Call {
  get inputs(): TransferCTCall__Inputs {
    return new TransferCTCall__Inputs(this);
  }

  get outputs(): TransferCTCall__Outputs {
    return new TransferCTCall__Outputs(this);
  }
}

export class TransferCTCall__Inputs {
  _call: TransferCTCall;

  constructor(call: TransferCTCall) {
    this._call = call;
  }

  get positionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TransferCTCall__Outputs {
  _call: TransferCTCall;

  constructor(call: TransferCTCall) {
    this._call = call;
  }
}

export class UpdateOracleCall extends ethereum.Call {
  get inputs(): UpdateOracleCall__Inputs {
    return new UpdateOracleCall__Inputs(this);
  }

  get outputs(): UpdateOracleCall__Outputs {
    return new UpdateOracleCall__Outputs(this);
  }
}

export class UpdateOracleCall__Inputs {
  _call: UpdateOracleCall;

  constructor(call: UpdateOracleCall) {
    this._call = call;
  }

  get newOracleAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateOracleCall__Outputs {
  _call: UpdateOracleCall;

  constructor(call: UpdateOracleCall) {
    this._call = call;
  }
}
