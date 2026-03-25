"use strict";
n.d(t, { A: () => _, j: () => u });
var r = n(972347),
    i = n(451988),
    s = n(626584),
    a = n(94902),
    o = n(723702);
let l = 500;
var u = (function (e) {
    return (
        (e.RequestedSSRCsUpdate = "requested-ssrcs-update"), (e.RequestedStreamsUpdate = "requested-streams-update"), e
    );
})({});
let c = 100,
    d = 0;
class _ extends r.A {
    logger;
    userId;
    streamId = null;
    resolutionWidth = 0;
    resolutionHeight = 0;
    zoom = 1;
    videoStream;
    audioSSRC = 0;
    incomingVideoEnabled = !0;
    delayedCall;
    constructor() {
        super(),
            (this.logger = new s.A("GoLiveQualityManager")),
            this.logger.enableNativeLogger(!0),
            (this.delayedCall = new i.J_(l, () => {
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
        this.audioSSRC = e;
        let n = t.find((e) => e.active);
        (this.videoStream = n), this.update();
    }
    onIncomingVideoEnabled(e) {
        this.incomingVideoEnabled !== e &&
            (this.logger.info("onIncomingVideoEnabled", e), (this.incomingVideoEnabled = e), this.update());
    }
    update() {
        null != this.userId &&
            null != this.videoStream &&
            (this.incomingVideoEnabled ? this.requestStream() : this.stopStream());
    }
    requestStream() {
        null != this.videoStream && this.request({ [this.videoStream.ssrc]: c }, [this.videoStream.ssrc]);
    }
    stopStream() {
        null != this.videoStream && this.request({ [this.videoStream.ssrc]: d }, []);
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
    setVideoSize(e, t, n) {
        this.streamId === e &&
            (!((0, o.isAndroid)() || (0, o.isIOS)()) || a.A.getConfig({ location: "GoLiveQualityManager" }).enabled) &&
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
