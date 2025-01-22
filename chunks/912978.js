r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(653041);
var a = r(411104);
var o = r(47120);
var s = r(836560);
var l = r(264344),
    u = r.n(l),
    c = r(649318);
function d(e, n, r) {
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
class f extends s.EventEmitter {
    addStream(e, n, r) {
        let i = !1;
        !this.streams.some((e) => e.ssrc === n) &&
            this.streams.push({
                ssrc: n,
                cname: e,
                type: 'audio'
            }),
            this.activeAudioSSRCs[e] !== n &&
                ((this.activeAudioSSRCs = {
                    ...this.activeAudioSSRCs,
                    [e]: n
                }),
                (i = !0)),
            null != r &&
                (r > 0
                    ? (!this.streams.some((e) => e.ssrc === r) &&
                          this.streams.push({
                              ssrc: r,
                              cname: e,
                              type: 'video'
                          }),
                      this.activeVideoSSRCs[e] !== r &&
                          ((this.activeVideoSSRCs = {
                              ...this.activeVideoSSRCs,
                              [e]: r
                          }),
                          (i = !0)))
                    : null != this.activeVideoSSRCs[e] && ((i = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e])),
            i && this.negotiationNeeded();
    }
    removeStream(e) {
        let n = !1;
        null != this.activeAudioSSRCs[e] && ((n = !0), (this.activeAudioSSRCs = { ...this.activeAudioSSRCs }), delete this.activeAudioSSRCs[e]), null != this.activeVideoSSRCs[e] && ((n = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e]), n && this.negotiationNeeded();
    }
    get sdp() {
        if (null == this._sdp) throw Error('sdp is not set');
        return this._sdp;
    }
    set sdp(e) {
        if (!(0, c.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
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
        let n = this.streams.map((e, n) => {
            let { cname: r, ssrc: i, type: a } = e,
                o = this.activeAudioSSRCs[r],
                s = this.activeVideoSSRCs[r],
                l = ''.concat(a, '_inbound_').concat(n);
            return [i, r, a, o === i || s === i ? this.direction : c.Ns.INACTIVE, l];
        });
        if ('Firefox' !== u().name) return this.connected ? n : [];
        let r = this.outboundStreams.map((e, n) => [0, 'outbound', e.type, (0, c.Mg)(e.direction), ''.concat(e.type, '_outbound_').concat(n)]);
        if ('answer' !== e) return r.concat(n);
        {
            let e = r.length - n.length;
            return r
                .slice(0, e)
                .concat(n)
                .slice(0, r.length)
                .map((e, n) => {
                    let [r, i, a, o, s] = e;
                    return [r, i, a, (0, c.Mg)(this.outboundStreams[n].direction), this.outboundStreams[n].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let n = this.audioCodec,
            r = this.audioPayloadType,
            i = this.videoCodec,
            a = this.videoPayloadType,
            o = this.rtxPayloadType,
            s = this.sdp;
        if (null == n || null == r || null == i || null == a || null == o || null == s || null == this.direction)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(n, ', audioPayloadType: ')
                    .concat(null == r ? 'null' : r, ', videoCodec: ')
                    .concat(i, ', videoCodecPayloadType: ')
                    .concat(null == a ? 'null' : a, ', rtxPayloadType: ')
                    .concat(null == o ? 'null' : o, ', sdp: ')
                    .concat(s)
            );
        let l = (0, c.MP)({
            type: e,
            baseSDP: s,
            direction: this.direction,
            audioCodec: n,
            audioPayloadType: r,
            audioBitRate: 40,
            videoCodec: i,
            videoPayloadType: a,
            videoBitRate: 2500,
            rtxPayloadType: o,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions
        });
        return this.emit(e, l), Promise.resolve(l);
    }
    constructor(...e) {
        super(...e), d(this, 'audioCodec', null), d(this, 'audioPayloadType', null), d(this, 'videoCodec', null), d(this, 'videoPayloadType', null), d(this, 'rtxPayloadType', null), d(this, 'direction', null), d(this, 'outboundStreams', []), d(this, 'extensions', []), d(this, 'streams', []), d(this, 'activeAudioSSRCs', {}), d(this, 'activeVideoSSRCs', {}), d(this, '_sdp', null), d(this, 'connected', !1), d(this, 'negotiating', !1), d(this, '_negotiationNeeded', !1);
    }
}
