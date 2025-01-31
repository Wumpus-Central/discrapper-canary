n.d(t, { Q: () => E });
var i = n(264344),
    r = n.n(i),
    a = n(259443),
    s = n(46973),
    o = n(912095),
    l = n(912978),
    u = n(886848),
    c = n(236842),
    d = n(649318),
    f = n(199857),
    _ = n(65154),
    p = n(436620);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    return e.split('-')[0];
}
class g extends o.Z {
    destroy() {
        super.destroy(), this.pc.close();
    }
    setCodecs(e, t, n) {
        var i, r, a;
        let s;
        (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) && ((s = this.codecs.find((t) => t.name === e)), (this.fpc.audioCodec = e), (this.fpc.audioPayloadType = null !== (i = null == s ? void 0 : s.payloadType) && void 0 !== i ? i : 0), (s = this.codecs.find((e) => e.name === t)), (this.fpc.videoCodec = t), (this.fpc.videoPayloadType = null !== (r = null == s ? void 0 : s.payloadType) && void 0 !== r ? r : 0), (this.fpc.rtxPayloadType = null !== (a = null == s ? void 0 : s.rtxPayloadType) && void 0 !== a ? a : 0), this.pc.negotiationNeeded());
    }
    setStream(e) {
        (this.fpc.direction = null != e ? d.Ns.SENDRECV : d.Ns.SENDONLY), this.pc.setStream(null != e ? e : null);
    }
    createUser(e, t, n) {
        var i;
        if (0 === t) {
            this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        this.logger.info(
            'Creating user: '
                .concat(e, ' with audio SSRC: ')
                .concat(t, ' and video SSRCs: ')
                .concat(null !== (i = null == n ? void 0 : n.join(',')) && void 0 !== i ? i : 0)
        );
        let r = null != n && n.length > 0 ? n[0] : 0;
        this.fpc.addStream(e, t, r);
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
    constructor(e, t, n, i) {
        super(e, t, n, i), h(this, 'pc', void 0), h(this, 'fpc', void 0), h(this, 'codecs', []), h(this, 'logger', void 0), (this.logger = new a.Yd('Connection('.concat(e, ')')));
        let r = new l.Z();
        r.on('answer', (e) => this.pc.setRemoteDescription(e).catch((e) => this.logger.error('Failed to set remote description (answer): '.concat(e)))),
            r.on('offer', (e) => {
                this.pc
                    .setRemoteDescription(e)
                    .then(() => this.pc.createAnswer())
                    .then((e) => this.fpc.setRemoteDescription(e))
                    .catch((e) => this.logger.error('Failed to set remote description (offer): '.concat(e)));
            }),
            (r.direction = null != this.input.stream ? d.Ns.SENDRECV : d.Ns.SENDONLY),
            (this.fpc = r);
        let o = new c.Z(this.voiceBitrate);
        o.on('addtrack', (e, t) => this.createOutput(m(e), t)),
            o.on('removetrack', (e, t) => this.destroyOutput(m(e), t)),
            o.once('connected', () => {
                this.input.reset(), this.setConnectionState(_.$j.CONNECTED), this.on(s.Sh.Stats, this.handleStats), this.input.on(u.G.VoiceActivity, this.handleVoiceActivity);
            }),
            o.on('connecting', () => this.setConnectionState(_.$j.DTLS_CONNECTING)),
            o.on('checking', () => this.setConnectionState(_.$j.ICE_CHECKING)),
            o.on('failed', () => this.setConnectionState(_.$j.NO_ROUTE)),
            o.on('disconnected', () => this.setConnectionState(_.$j.DISCONNECTED)),
            o.on('closed', () => this.setConnectionState(_.$j.DISCONNECTED)),
            o.on('offer', (e) => {
                let { sdp: t } = e,
                    { outboundStreams: n, codecs: i, audioSSRC: a, videoSSRC: o, rtxSSRC: l } = (0, d.Nl)(t);
                this.codecs = i;
                let u = (0, d.nX)(t);
                (r.outboundStreams = n), (this.audioSSRC = a), (r.extensions = u), (this.videoStreamParameters[0].ssrc === o && this.videoStreamParameters[0].rtxSsrc === l && this.videoReady) || ((this.videoStreamParameters[0].ssrc = o), (this.videoStreamParameters[0].rtxSsrc = l), this.emit(s.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, this.videoStreamParameters[0].ssrc, this.videoStreamParameters[0].rtxSsrc, this.videoStreamParameters), (this.videoReady = !0));
            }),
            o.once('offer', (e) => {
                let { sdp: t } = e;
                this.emit(s.Sh.Connected, 'webrtc', (0, d.sc)(t));
            }),
            null != this.input.stream ? o.setStream(this.input.stream) : o.negotiationNeeded(),
            (this.pc = o);
    }
}
function E(e, t, n, i) {
    let s = ''.concat(null != r().name && '' !== r().name ? r().name : 'unknown', ' ').concat(null != r().version && '' !== r().version ? r().version : 'unknown'),
        o = new a.Yd('Connection('.concat(e, ')'));
    return p.WS ? (o.info('Using Unified Plan ('.concat(s, ')')), new f.Z(e, t, n, i)) : (o.info('Using Plan B ('.concat(s, ')')), new g(e, t, n, i));
}
