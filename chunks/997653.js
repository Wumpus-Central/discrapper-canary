r.d(n, {
    Q: function () {
        return v;
    }
});
var i = r(264344),
    a = r.n(i),
    o = r(259443),
    s = r(46973),
    l = r(912095),
    u = r(912978),
    c = r(886848),
    d = r(236842),
    f = r(649318),
    p = r(199857),
    h = r(65154),
    _ = r(436620);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function g(e) {
    return e.split('-')[0];
}
class E extends l.Z {
    destroy() {
        super.destroy(), this.pc.close();
    }
    setCodecs(e, n, r) {
        var i, a, o;
        let s;
        if (this.fpc.audioCodec !== e || this.fpc.videoCodec !== n) (s = this.codecs.find((n) => n.name === e)), (this.fpc.audioCodec = e), (this.fpc.audioPayloadType = null !== (i = null == s ? void 0 : s.payloadType) && void 0 !== i ? i : 0), (s = this.codecs.find((e) => e.name === n)), (this.fpc.videoCodec = n), (this.fpc.videoPayloadType = null !== (a = null == s ? void 0 : s.payloadType) && void 0 !== a ? a : 0), (this.fpc.rtxPayloadType = null !== (o = null == s ? void 0 : s.rtxPayloadType) && void 0 !== o ? o : 0), this.pc.negotiationNeeded();
    }
    setStream(e) {
        (this.fpc.direction = null != e ? f.Ns.SENDRECV : f.Ns.SENDONLY), this.pc.setStream(null != e ? e : null);
    }
    createUser(e, n, r) {
        var i;
        if (0 === n) {
            this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        this.logger.info(
            'Creating user: '
                .concat(e, ' with audio SSRC: ')
                .concat(n, ' and video SSRCs: ')
                .concat(null !== (i = null == r ? void 0 : r.join(',')) && void 0 !== i ? i : 0)
        );
        let a = null != r && r.length > 0 ? r[0] : 0;
        this.fpc.addStream(e, n, a);
    }
    destroyUser(e) {
        this.fpc.removeStream(e);
    }
    setBitRate(e) {
        this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e));
    }
    setSDP(e) {
        this.pc.on('offer', () => this.fpc.createAnswer()), (this.fpc.sdp = e);
    }
    getUserIdBySsrc(e) {}
    getRawStats() {
        return this.pc.getStats();
    }
    setVideoEncoderParameters(e) {}
    constructor(e, n, r, i) {
        super(e, n, r, i), m(this, 'pc', void 0), m(this, 'fpc', void 0), m(this, 'codecs', []), m(this, 'logger', void 0), (this.logger = new o.Yd('Connection('.concat(e, ')')));
        let a = new u.Z();
        a.on('answer', (e) => this.pc.setRemoteDescription(e).catch((e) => this.logger.error('Failed to set remote description (answer): '.concat(e)))),
            a.on('offer', (e) => {
                this.pc
                    .setRemoteDescription(e)
                    .then(() => this.pc.createAnswer())
                    .then((e) => this.fpc.setRemoteDescription(e))
                    .catch((e) => this.logger.error('Failed to set remote description (offer): '.concat(e)));
            }),
            (a.direction = null != this.input.stream ? f.Ns.SENDRECV : f.Ns.SENDONLY),
            (this.fpc = a);
        let l = new d.Z(this.voiceBitrate);
        l.on('addtrack', (e, n) => this.createOutput(g(e), n)),
            l.on('removetrack', (e, n) => this.destroyOutput(g(e), n)),
            l.once('connected', () => {
                this.input.reset(), this.setConnectionState(h.$j.CONNECTED), this.on(s.Sh.Stats, this.handleStats), this.input.on(c.G.VoiceActivity, this.handleVoiceActivity);
            }),
            l.on('connecting', () => this.setConnectionState(h.$j.DTLS_CONNECTING)),
            l.on('checking', () => this.setConnectionState(h.$j.ICE_CHECKING)),
            l.on('failed', () => this.setConnectionState(h.$j.NO_ROUTE)),
            l.on('disconnected', () => this.setConnectionState(h.$j.DISCONNECTED)),
            l.on('closed', () => this.setConnectionState(h.$j.DISCONNECTED)),
            l.on('offer', (e) => {
                let { sdp: n } = e,
                    { outboundStreams: r, codecs: i, audioSSRC: o, videoSSRC: l, rtxSSRC: u } = (0, f.Nl)(n);
                this.codecs = i;
                let c = (0, f.nX)(n);
                (a.outboundStreams = r), (this.audioSSRC = o), (a.extensions = c), (this.videoStreamParameters[0].ssrc !== l || this.videoStreamParameters[0].rtxSsrc !== u || !this.videoReady) && ((this.videoStreamParameters[0].ssrc = l), (this.videoStreamParameters[0].rtxSsrc = u), this.emit(s.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, this.videoStreamParameters[0].ssrc, this.videoStreamParameters[0].rtxSsrc, this.videoStreamParameters), (this.videoReady = !0));
            }),
            l.once('offer', (e) => {
                let { sdp: n } = e;
                this.emit(s.Sh.Connected, 'webrtc', (0, f.sc)(n));
            }),
            null != this.input.stream ? l.setStream(this.input.stream) : l.negotiationNeeded(),
            (this.pc = l);
    }
}
function v(e, n, r, i) {
    let s = ''.concat(null != a().name && '' !== a().name ? a().name : 'unknown', ' ').concat(null != a().version && '' !== a().version ? a().version : 'unknown'),
        l = new o.Yd('Connection('.concat(e, ')'));
    return _.WS ? (l.info('Using Unified Plan ('.concat(s, ')')), new p.Z(e, n, r, i)) : (l.info('Using Plan B ('.concat(s, ')')), new E(e, n, r, i));
}
