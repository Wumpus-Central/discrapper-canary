n.d(t, { Q: () => E }), n(35282);
var r = n(264344),
    i = n.n(r),
    a = n(579092),
    o = n(46973),
    s = n(912095),
    l = n(912978),
    c = n(886848),
    u = n(236842),
    d = n(649318),
    f = n(199857),
    p = n(65154),
    _ = n(436620);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    return e.split("-")[0];
}
class g extends s.Z {
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.destroy(e), this.pc.close();
    }
    setCodecs(e, t, n) {
        var r, i, a;
        let o;
        (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) &&
            ((o = this.codecs.find((t) => t.name === e)),
            (this.fpc.audioCodec = e),
            (this.fpc.audioPayloadType = null != (r = null == o ? void 0 : o.payloadType) ? r : 0),
            (o = this.codecs.find((e) => e.name === t)),
            (this.fpc.videoCodec = t),
            (this.fpc.videoPayloadType = null != (i = null == o ? void 0 : o.payloadType) ? i : 0),
            (this.fpc.rtxPayloadType = null != (a = null == o ? void 0 : o.rtxPayloadType) ? a : 0),
            this.pc.negotiationNeeded());
    }
    setStream(e) {
        (this.fpc.direction = null != e ? d.Ns.SENDRECV : d.Ns.SENDONLY), this.pc.setStream(null != e ? e : null);
    }
    createUser(e, t, n) {
        var r;
        if (0 === t) return void this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
        this.logger.info(
            "Creating user: "
                .concat(e, " with audio SSRC: ")
                .concat(t, " and video SSRCs: ")
                .concat(null != (r = null == n ? void 0 : n.join(",")) ? r : 0),
        );
        let i = null != n && n.length > 0 ? n[0] : 0;
        this.fpc.addStream(e, t, i);
    }
    destroyUser(e) {
        this.fpc.removeStream(e);
    }
    setBitRate(e) {
        this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e));
    }
    setSDP(e) {
        this.pc.on("offer", () => this.fpc.createAnswer()), (this.fpc.sdp = e);
    }
    getUserIdBySsrc(e) {}
    getRawStats() {
        return this.pc.getStats();
    }
    setVideoEncoderParameters(e) {}
    constructor(e) {
        super(e),
            m(this, "pc", void 0),
            m(this, "fpc", void 0),
            m(this, "codecs", []),
            m(this, "logger", void 0),
            (this.logger = new a.Yd("Connection(".concat(e.context, ")")));
        let t = new l.Z();
        t.on("answer", (e) =>
            this.pc
                .setRemoteDescription(e)
                .catch((e) => this.logger.error("Failed to set remote description (answer): ".concat(e))),
        ),
            t.on("offer", (e) => {
                this.pc
                    .setRemoteDescription(e)
                    .then(() => this.pc.createAnswer())
                    .then((e) => this.fpc.setRemoteDescription(e))
                    .catch((e) => this.logger.error("Failed to set remote description (offer): ".concat(e)));
            }),
            (t.direction = null != this.input.stream ? d.Ns.SENDRECV : d.Ns.SENDONLY),
            (this.fpc = t);
        let n = new u.Z(this.voiceBitrate);
        n.on("addtrack", (e, t) => this.createOutput(h(e), t)),
            n.on("removetrack", (e, t) => this.destroyOutput(h(e), t)),
            n.once("connected", () => {
                this.input.reset(),
                    this.setConnectionState(p.$j.CONNECTED),
                    this.on(o.Sh.Stats, this.handleStats),
                    this.input.on(c.G.VoiceActivity, this.handleVoiceActivity);
            }),
            n.on("connecting", () => this.setConnectionState(p.$j.DTLS_CONNECTING)),
            n.on("checking", () => this.setConnectionState(p.$j.ICE_CHECKING)),
            n.on("failed", () => this.setConnectionState(p.$j.NO_ROUTE)),
            n.on("disconnected", () => this.setConnectionState(p.$j.DISCONNECTED)),
            n.on("closed", () => this.setConnectionState(p.$j.DISCONNECTED)),
            n.on("offer", (e) => {
                let { sdp: n } = e,
                    { outboundStreams: r, codecs: i, audioSSRC: a, videoSSRC: s, rtxSSRC: l } = (0, d.Nl)(n, !1);
                this.codecs = i;
                let c = (0, d.nX)(n);
                (t.outboundStreams = r),
                    (this.audioSSRC = a),
                    (t.extensions = c),
                    (this.videoStreamParameters[0].ssrc === s &&
                        this.videoStreamParameters[0].rtxSsrc === l &&
                        this.videoReady) ||
                        ((this.videoStreamParameters[0].ssrc = s),
                        (this.videoStreamParameters[0].rtxSsrc = l),
                        this.emit(
                            o.Sh.Video,
                            this.userId,
                            this.input.getVideoStreamId(),
                            this.audioSSRC,
                            this.videoStreamParameters[0].ssrc,
                            this.videoStreamParameters[0].rtxSsrc,
                            this.videoStreamParameters,
                        ),
                        (this.videoReady = !0));
            }),
            n.once("offer", (e) => {
                let { sdp: t } = e;
                this.emit(o.Sh.Connected, "webrtc", (0, d.sc)(t, !1));
            }),
            null != this.input.stream ? n.setStream(this.input.stream) : n.negotiationNeeded(),
            (this.pc = n);
    }
}
function E(e) {
    let t = ""
            .concat(null != i().name && "" !== i().name ? i().name : "unknown", " ")
            .concat(null != i().version && "" !== i().version ? i().version : "unknown"),
        n = new a.Yd("Connection(".concat(e.context, ")"));
    return _.WS
        ? (n.info("Using Unified Plan (".concat(t, ")")), new f.Z(e))
        : (n.info("Using Plan B (".concat(t, ")")), new g(e));
}
