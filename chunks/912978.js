n.d(t, { Z: () => d }), n(653041), n(411104), n(47120);
var r = n(836560),
    i = n(264344),
    o = n.n(i),
    a = n(649318);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class d extends r.EventEmitter {
    addStream(e, t, n) {
        let r = !1;
        this.streams.some((e) => e.ssrc === t) ||
            this.streams.push({
                ssrc: t,
                cname: e,
                type: 'audio'
            }),
            this.activeAudioSSRCs[e] !== t && ((this.activeAudioSSRCs = u(l({}, this.activeAudioSSRCs), { [e]: t })), (r = !0)),
            null != n &&
                (n > 0
                    ? (this.streams.some((e) => e.ssrc === n) ||
                          this.streams.push({
                              ssrc: n,
                              cname: e,
                              type: 'video'
                          }),
                      this.activeVideoSSRCs[e] !== n && ((this.activeVideoSSRCs = u(l({}, this.activeVideoSSRCs), { [e]: n })), (r = !0)))
                    : null != this.activeVideoSSRCs[e] && ((r = !0), (this.activeVideoSSRCs = l({}, this.activeVideoSSRCs)), delete this.activeVideoSSRCs[e])),
            r && this.negotiationNeeded();
    }
    removeStream(e) {
        let t = !1;
        null != this.activeAudioSSRCs[e] && ((t = !0), (this.activeAudioSSRCs = l({}, this.activeAudioSSRCs)), delete this.activeAudioSSRCs[e]), null != this.activeVideoSSRCs[e] && ((t = !0), (this.activeVideoSSRCs = l({}, this.activeVideoSSRCs)), delete this.activeVideoSSRCs[e]), t && this.negotiationNeeded();
    }
    get sdp() {
        if (null == this._sdp) throw Error('sdp is not set');
        return this._sdp;
    }
    set sdp(e) {
        if (!(0, a.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
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
            let { cname: n, ssrc: r, type: i } = e,
                o = this.activeAudioSSRCs[n],
                s = this.activeVideoSSRCs[n],
                l = ''.concat(i, '_inbound_').concat(t);
            return [r, n, i, o === r || s === r ? this.direction : a.Ns.INACTIVE, l];
        });
        if ('Firefox' !== o().name) return this.connected ? t : [];
        let n = this.outboundStreams.map((e, t) => [0, 'outbound', e.type, (0, a.Mg)(e.direction), ''.concat(e.type, '_outbound_').concat(t)]);
        if ('answer' !== e) return n.concat(t);
        {
            let e = n.length - t.length;
            return n
                .slice(0, e)
                .concat(t)
                .slice(0, n.length)
                .map((e, t) => {
                    let [n, r, i, o, s] = e;
                    return [n, r, i, (0, a.Mg)(this.outboundStreams[t].direction), this.outboundStreams[t].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let t = this.audioCodec,
            n = this.audioPayloadType,
            r = this.videoCodec,
            i = this.videoPayloadType,
            o = this.rtxPayloadType,
            s = this.sdp;
        if (null == t || null == n || null == r || null == i || null == o || null == s || null == this.direction)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(t, ', audioPayloadType: ')
                    .concat(null == n ? 'null' : n, ', videoCodec: ')
                    .concat(r, ', videoCodecPayloadType: ')
                    .concat(null == i ? 'null' : i, ', rtxPayloadType: ')
                    .concat(null == o ? 'null' : o, ', sdp: ')
                    .concat(s)
            );
        let l = (0, a.MP)({
            type: e,
            baseSDP: s,
            direction: this.direction,
            audioCodec: t,
            audioPayloadType: n,
            audioBitRate: 40,
            videoCodec: r,
            videoPayloadType: i,
            videoBitRate: 2500,
            rtxPayloadType: o,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions
        });
        return this.emit(e, l), Promise.resolve(l);
    }
    constructor(...e) {
        super(...e), s(this, 'audioCodec', null), s(this, 'audioPayloadType', null), s(this, 'videoCodec', null), s(this, 'videoPayloadType', null), s(this, 'rtxPayloadType', null), s(this, 'direction', null), s(this, 'outboundStreams', []), s(this, 'extensions', []), s(this, 'streams', []), s(this, 'activeAudioSSRCs', {}), s(this, 'activeVideoSSRCs', {}), s(this, '_sdp', null), s(this, 'connected', !1), s(this, 'negotiating', !1), s(this, '_negotiationNeeded', !1);
    }
}
