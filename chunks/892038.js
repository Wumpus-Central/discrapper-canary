"use strict";
n.d(t, { A: () => A, j: () => E });
var r = n(735438),
    i = n.n(r),
    s = n(972347),
    a = n(451988),
    o = n(626584),
    l = n(94902),
    u = n(961350),
    c = n(927813),
    d = n(723702),
    _ = n(728458),
    f = n(731854);
let p = 10 * c.A.Millis.SECOND,
    h = 10 * c.A.Millis.SECOND,
    m = 500;
var E = (function (e) {
    return (
        (e.RequestedSSRCsUpdate = "requested-ssrcs-update"), (e.RequestedStreamsUpdate = "requested-streams-update"), e
    );
})({});
function g(e, t) {
    e || _.A.captureMessage("Assert failed in GoLiveQualityManager: " + t);
}
class A extends s.A {
    supportsSeamless;
    logger;
    userId;
    streamId = null;
    resolutionWidth = 0;
    resolutionHeight = 0;
    zoom = 1;
    videoStreams = [];
    audioSSRC = 0;
    hqSSRC = 0;
    lqSSRC = 0;
    switchState = 0;
    pendingSSRC = -1;
    currentSSRC = -1;
    downgraded = !1;
    throttleDowngradeChanges = !0;
    lastDowngradeChangeTime = void 0;
    otherUsers = new Set();
    debugQualityOverride = f.r8.NO_OVERRIDE;
    incomingVideoEnabled = !0;
    delayedCall;
    constructor(e) {
        super(),
            (this.supportsSeamless = e),
            (this.logger = new o.A("GoLiveQualityManager")),
            this.logger.enableNativeLogger(!0),
            (this.delayedCall = new a.J_(m, () => {
                this.update();
            }));
    }
    delayedUpdate = () => {
        this.delayedCall.delay();
    };
    setUserID(e) {
        this.userId = e;
    }
    getUserID() {
        return this.userId;
    }
    updateAudioAndVideoStreamInfo(e, t) {
        let n = t.filter((e) => e.active),
            r = this.videoStreams.length !== n.length;
        if (((this.audioSSRC = e), (this.videoStreams = n), this.videoStreams.length > 1)) {
            let e = i().minBy(this.videoStreams, (e) => e.quality)?.ssrc ?? 0,
                t = i().maxBy(this.videoStreams, (e) => e.quality)?.ssrc ?? 0;
            (e !== this.lqSSRC || t !== this.hqSSRC || r) &&
                ((this.lqSSRC = e), (this.hqSSRC = t), this.reset(), this.update());
        } else r && this.reset(), this.update();
    }
    setGoLiveStreamDowngraded(e) {
        !this.senderSupportsSimulcast() ||
            this.isOneToOneCall() ||
            this.debugQualityOverride !== f.r8.NO_OVERRIDE ||
            (e !== this.downgraded &&
                this.isDowngradeChangeAllowed(e) &&
                (this.logger.info(`Setting downgraded to ${e}`),
                (this.downgraded = e),
                (this.lastDowngradeChangeTime = Date.now()),
                this.update()));
    }
    isDowngraded() {
        return this.downgraded;
    }
    setSimulcastDebugOverride(e) {
        this.senderSupportsSimulcast() &&
            e !== this.debugQualityOverride &&
            ((this.debugQualityOverride = e), this.update());
    }
    setFirstFrameReceived(e) {
        if (((this.currentSSRC = e), this.senderSupportsSimulcast())) {
            if (1 !== this.switchState && 2 !== this.switchState)
                return void this.logger.warn(
                    `Received the first frame of ssrc ${e} while switchState is ${this.switchState}`,
                );
            this.pendingSSRC === e
                ? ((this.pendingSSRC = -1),
                  2 === this.switchState ? ((this.switchState = 3), this.update()) : (this.switchState = 0))
                : this.logger.warn(
                      `Pending to switch to ssrc: ${this.pendingSSRC} but received the first frame of ${e}, noop`,
                  );
        }
    }
    setThrottleStreamDowngradeChanges(e) {
        this.throttleDowngradeChanges = e;
    }
    senderSupportsSimulcast() {
        return this.videoStreams.length > 1;
    }
    updateCallUserIds(e) {
        (this.otherUsers = new Set(e)), this.otherUsers.delete(u.default.getId()), this.update();
    }
    onIncomingVideoEnabled(e) {
        this.incomingVideoEnabled !== e && ((this.incomingVideoEnabled = e), this.update());
    }
    update() {
        void 0 !== this.userId &&
            null !== this.userId &&
            0 !== this.videoStreams.length &&
            (this.senderSupportsSimulcast()
                ? this.supportsSeamless
                    ? this.seamlessUpdate()
                    : this.directUpdate()
                : this.singleCastUpdate());
    }
    seamlessUpdate() {
        let e = this.getQuality();
        if (0 === e && this.isReceiving()) {
            this.reset(), this.stopStreams();
            return;
        }
        switch (this.switchState) {
            case 0:
                g(-1 === this.pendingSSRC, "Ready state should not have a pendingSSRC"),
                    this.shouldSeamlessTransition(e)
                        ? (this.logger.info(
                              `Starting seamless transition to ${100 === e ? "HQ" : "LQ"} (ssrc ${100 === e ? this.hqSSRC : this.lqSSRC})`,
                          ),
                          (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC),
                          (this.switchState = 2),
                          this.requestBoth())
                        : (this.logger.info(
                              `Starting non-seamless transition to ${100 === e ? "HQ" : "LQ"} (ssrc ${100 === e ? this.hqSSRC : this.lqSSRC})`,
                          ),
                          (this.pendingSSRC = 100 === e ? this.hqSSRC : this.lqSSRC),
                          (this.switchState = 1),
                          100 === e ? this.requestHQ() : this.requestLQ());
                break;
            case 2:
                g(-1 !== this.pendingSSRC, "PendingSeamless state should have a pendingSSRC"),
                    60 === e && this.pendingHQ()
                        ? (this.logger.info(
                              `Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ${this.lqSSRC})`,
                          ),
                          (this.switchState = 0),
                          (this.pendingSSRC = -1),
                          this.requestLQ())
                        : 100 === e &&
                          this.pendingLQ() &&
                          (this.logger.info(
                              `Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ${this.hqSSRC})`,
                          ),
                          (this.switchState = 0),
                          (this.pendingSSRC = -1),
                          this.requestHQ());
                break;
            case 1:
                g(-1 !== this.pendingSSRC, "Pending state should have a pendingSSRC"),
                    60 === e && this.pendingHQ()
                        ? (this.logger.info(
                              `Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ${this.lqSSRC})`,
                          ),
                          (this.pendingSSRC = this.lqSSRC),
                          this.requestLQ())
                        : 100 === e &&
                          this.pendingLQ() &&
                          (this.logger.info(
                              `Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ${this.hqSSRC})`,
                          ),
                          (this.pendingSSRC = this.hqSSRC),
                          this.requestHQ());
                break;
            case 3:
                g(this.isReceiving(), "Should be receiving a stream in Finalizing state"),
                    this.logger.info(`Finalizing seamless transition to ${100 === e ? "HQ" : "LQ"}`),
                    100 === e ? this.requestHQ() : 60 === e && this.requestLQ(),
                    (this.switchState = 0),
                    (this.pendingSSRC = -1);
        }
    }
    directUpdate() {
        let e = this.getQuality();
        if (0 === e && this.isReceiving()) {
            this.reset(), this.stopStreams();
            return;
        }
        this.logger.info(
            `Starting direct transition to ${100 === e ? "HQ" : "LQ"} (ssrc ${100 === e ? this.hqSSRC : this.lqSSRC})`,
        ),
            60 === e ? this.requestLQ() : this.requestHQ();
    }
    singleCastUpdate() {
        g(
            1 === this.videoStreams.length,
            "singleCastUpdate should only be called when there is exactly one video stream",
        ),
            g(0 === this.switchState, "Switch state should not be set for non-simulcast streams"),
            g(-1 === this.pendingSSRC, "Pending SSRC should not be set for non-simulcast streams"),
            this.incomingVideoEnabled ? this.requestDefaultStream() : this.stopDefaultStream();
    }
    pendingHQ() {
        return 1 === this.switchState && this.pendingSSRC === this.hqSSRC;
    }
    pendingLQ() {
        return 1 === this.switchState && this.pendingSSRC === this.lqSSRC;
    }
    receivingHQ() {
        return this.currentSSRC === this.hqSSRC;
    }
    receivingLQ() {
        return this.currentSSRC === this.lqSSRC;
    }
    isReceiving() {
        return -1 !== this.currentSSRC;
    }
    isDowngradeChangeAllowed(e) {
        return (
            !this.throttleDowngradeChanges ||
            void 0 === this.lastDowngradeChangeTime ||
            (e ? Date.now() - this.lastDowngradeChangeTime >= h : Date.now() - this.lastDowngradeChangeTime >= p)
        );
    }
    shouldSeamlessTransition(e) {
        if (!this.supportsSeamless || !this.isReceiving()) return !1;
        if ((this.receivingHQ() && 100 === e) || (this.receivingLQ() && 60 === e)) return !1;
        if (60 === e) return !1;
        if (this.receivingLQ() && 100 === e && this.isOneToOneCall()) return !1;
        return !0;
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    reset() {
        (this.pendingSSRC = -1),
            (this.currentSSRC = -1),
            (this.lastDowngradeChangeTime = void 0),
            (this.switchState = 0),
            (this.streamId = null),
            (this.resolutionWidth = 0),
            (this.resolutionHeight = 0),
            (this.zoom = 1);
    }
    request(e, t) {
        if (void 0 !== this.userId) {
            let n = e;
            t.forEach((e) => {
                null == n.pixelCounts && (n.pixelCounts = {}),
                    n[e] > 0 &&
                        (n.pixelCounts[e] = Math.floor(
                            this.resolutionWidth * this.resolutionHeight * this.zoom * this.zoom,
                        ));
            }),
                this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, t),
                this.emit("requested-streams-update", n);
        }
    }
    requestDefaultStream() {
        g(
            1 === this.videoStreams.length,
            "requestDefaultStream should only be called when there is exactly one video stream",
        );
        let e = {};
        e[this.videoStreams[0].ssrc] = 100;
        let t = [this.videoStreams[0].ssrc];
        this.request(e, t);
    }
    stopDefaultStream() {
        g(
            1 === this.videoStreams.length,
            "stopDefaultStream should only be called when there is exactly one video stream",
        );
        let e = {};
        e[this.videoStreams[0].ssrc] = 0;
        let t = [];
        this.request(e, t);
    }
    requestBoth() {
        g(2 === this.videoStreams.length, "requestBoth should only be called when there are two video streams"),
            g(
                void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC),
                "requestBoth called with invalid hqSSRC",
            ),
            g(
                void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC),
                "requestBoth called with invalid lqSSRC",
            );
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 100);
        let t = [this.lqSSRC, this.hqSSRC];
        this.request(e, t),
            setTimeout(() => {
                2 === this.switchState &&
                    (this.logger.warn("Seamless transition timeout, forcing switch"), this.reset(), this.update());
            }, 2e3);
    }
    requestHQ() {
        g(2 === this.videoStreams.length, "requestHQ should only be called when there are two video streams"),
            g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), "requestHQ called with invalid hqSSRC"),
            g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), "requestHQ called with invalid lqSSRC");
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 100);
        let t = [this.hqSSRC];
        this.request(e, t);
    }
    requestLQ() {
        g(2 === this.videoStreams.length, "requestLQ should only be called when there are two video streams"),
            g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC), "requestLQ called with invalid hqSSRC"),
            g(void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC), "requestLQ called with invalid lqSSRC");
        let e = {};
        (e[this.lqSSRC] = 60), (e[this.hqSSRC] = 0);
        let t = [this.lqSSRC];
        this.request(e, t);
    }
    stopStreams() {
        g(2 === this.videoStreams.length, "stopStreams should only be called when there are two video streams"),
            g(
                void 0 !== this.videoStreams.find((e) => e.ssrc === this.hqSSRC),
                "stopStreams called with invalid hqSSRC",
            ),
            g(
                void 0 !== this.videoStreams.find((e) => e.ssrc === this.lqSSRC),
                "stopStreams called with invalid lqSSRC",
            ),
            g(-1 === this.pendingSSRC, "pendingSSRC should be reset before stopping streams");
        let e = {};
        (e[this.lqSSRC] = 0), (e[this.hqSSRC] = 0);
        let t = [];
        this.request(e, t);
    }
    getQuality() {
        return this.incomingVideoEnabled
            ? this.debugQualityOverride === f.r8.LOW
                ? 60
                : this.debugQualityOverride === f.r8.HIGH || this.isOneToOneCall()
                  ? 100
                  : this.downgraded && this.senderSupportsSimulcast()
                    ? 60
                    : 100
            : 0;
    }
    setVideoSize(e, t, n) {
        this.streamId === e &&
            (!((0, d.isAndroid)() || (0, d.isIOS)()) || (0, l.H)("GoLiveQualityManager").enabled) &&
            (null != t && ((this.resolutionWidth = t.width), (this.resolutionHeight = t.height)),
            null != n && (this.zoom = n),
            this.delayedUpdate());
    }
    setStreamId(e) {
        this.streamId !== e &&
            ((this.streamId = e),
            (this.resolutionWidth = 0),
            (this.resolutionHeight = 0),
            (this.zoom = 1),
            this.delayedUpdate());
    }
}
