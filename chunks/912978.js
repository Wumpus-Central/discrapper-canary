n.d(t, { Z: () => l }), n(653041), n(411104), n(47120);
var i = n(836560),
    r = n(264344),
    a = n.n(r),
    s = n(649318);
function o(e, t, n) {
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
class l extends i.EventEmitter {
    addStream(e, t, n) {
        let i = !1;
        this.streams.some((e) => e.ssrc === t) ||
            this.streams.push({
                ssrc: t,
                cname: e,
                type: 'audio'
            }),
            this.activeAudioSSRCs[e] !== t &&
                ((this.activeAudioSSRCs = {
                    ...this.activeAudioSSRCs,
                    [e]: t
                }),
                (i = !0)),
            null != n &&
                (n > 0
                    ? (this.streams.some((e) => e.ssrc === n) ||
                          this.streams.push({
                              ssrc: n,
                              cname: e,
                              type: 'video'
                          }),
                      this.activeVideoSSRCs[e] !== n &&
                          ((this.activeVideoSSRCs = {
                              ...this.activeVideoSSRCs,
                              [e]: n
                          }),
                          (i = !0)))
                    : null != this.activeVideoSSRCs[e] && ((i = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e])),
            i && this.negotiationNeeded();
    }
    removeStream(e) {
        let t = !1;
        null != this.activeAudioSSRCs[e] && ((t = !0), (this.activeAudioSSRCs = { ...this.activeAudioSSRCs }), delete this.activeAudioSSRCs[e]), null != this.activeVideoSSRCs[e] && ((t = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e]), t && this.negotiationNeeded();
    }
    get sdp() {
        if (null == this._sdp) throw Error('sdp is not set');
        return this._sdp;
    }
    set sdp(e) {
        if (!(0, s.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
        (this._sdp = e), this.createAnswer(), (this.connected = !0), this._negotiationNeeded && this.negotiationNeeded();
    }
    negotiationNeeded() {
        if (this.negotiating) {
            this._negotiationNeeded = !0;
            return;
        }
        null != this._sdp ? ((this.negotiating = !0), (this._negotiationNeeded = !1), this.generateSessionDescription('offer')) : (this._negotiationNeeded = !0);
    }
    setRemoteDescription(e) {
        return (this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded(), Promise.resolve();
    }
    createAnswer() {
        return this.generateSessionDescription('answer');
    }
    getSSRCs(e) {
        let t = this.streams.map((e, t) => {
            let { cname: n, ssrc: i, type: r } = e,
                a = this.activeAudioSSRCs[n],
                o = this.activeVideoSSRCs[n],
                l = ''.concat(r, '_inbound_').concat(t);
            return [i, n, r, a === i || o === i ? this.direction : s.Ns.INACTIVE, l];
        });
        if ('Firefox' !== a().name) return this.connected ? t : [];
        let n = this.outboundStreams.map((e, t) => [0, 'outbound', e.type, (0, s.Mg)(e.direction), ''.concat(e.type, '_outbound_').concat(t)]);
        if ('answer' !== e) return n.concat(t);
        {
            let e = n.length - t.length;
            return n
                .slice(0, e)
                .concat(t)
                .slice(0, n.length)
                .map((e, t) => {
                    let [n, i, r, a, o] = e;
                    return [n, i, r, (0, s.Mg)(this.outboundStreams[t].direction), this.outboundStreams[t].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let t = this.audioCodec,
            n = this.audioPayloadType,
            i = this.videoCodec,
            r = this.videoPayloadType,
            a = this.rtxPayloadType,
            o = this.sdp;
        if (null == t || null == n || null == i || null == r || null == a || null == o || null == this.direction)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(t, ', audioPayloadType: ')
                    .concat(null == n ? 'null' : n, ', videoCodec: ')
                    .concat(i, ', videoCodecPayloadType: ')
                    .concat(null == r ? 'null' : r, ', rtxPayloadType: ')
                    .concat(null == a ? 'null' : a, ', sdp: ')
                    .concat(o)
            );
        let l = (0, s.MP)({
            type: e,
            baseSDP: o,
            direction: this.direction,
            audioCodec: t,
            audioPayloadType: n,
            audioBitRate: 40,
            videoCodec: i,
            videoPayloadType: r,
            videoBitRate: 2500,
            rtxPayloadType: a,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions
        });
        return this.emit(e, l), Promise.resolve(l);
    }
    constructor(...e) {
        super(...e), o(this, 'audioCodec', null), o(this, 'audioPayloadType', null), o(this, 'videoCodec', null), o(this, 'videoPayloadType', null), o(this, 'rtxPayloadType', null), o(this, 'direction', null), o(this, 'outboundStreams', []), o(this, 'extensions', []), o(this, 'streams', []), o(this, 'activeAudioSSRCs', {}), o(this, 'activeVideoSSRCs', {}), o(this, '_sdp', null), o(this, 'connected', !1), o(this, 'negotiating', !1), o(this, '_negotiationNeeded', !1);
    }
}
