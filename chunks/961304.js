n.d(t, {
    X: () => u,
    Z: () => d
});
var r = n(259443),
    i = n(47770),
    o = n(740197),
    a = n(376398),
    s = n(65154);
function l(e, t, n) {
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
let c = new r.Yd('Output');
var u = (function (e) {
    return (e.InteractionRequired = 'interactionrequired'), (e.Speaking = 'speaking'), (e.Video = 'video'), e;
})({});
class d extends i.Z {
    play() {
        var e;
        null == (e = this.audioElement) || e.play();
    }
    destroy() {
        var e;
        null == (e = this.audioElement) || e.pause(), null != this.videoStreamId && (0, a.jC)(this.videoStreamId), null != this.streamSourceNode && (this.streamSourceNode.disconnect(), (this.streamSourceNode = null)), null != this.levelNode && (this.levelNode.disconnect(), this.levelNode.port.postMessage('close'), (this.levelNode = null)), this.setSpeakingFlags(s.Dg.NONE), this.removeAllListeners();
    }
    addTrack(e) {
        if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
        if ((this.stream.addTrack(e), null == this.audioElement)) {
            let e = document.createElement('audio');
            e.srcObject = this.stream;
            let t = e.play();
            null != t && t.catch(() => this.emit('interactionrequired', !0)), (this.audioElement = e), this.updateAudioElement();
        }
        if (null == this.levelNode && this.stream.getAudioTracks().length > 0) {
            this.streamSourceNode = this.audioContext.createMediaStreamSource(this.stream);
            try {
                (this.levelNode = new AudioWorkletNode(this.audioContext, 'level-processor')),
                    (this.levelNode.port.onmessage = (e) => {
                        this.emit('speaking', e.data);
                    }),
                    null != this.streamSourceNode && this.streamSourceNode.connect(this.levelNode);
            } catch (e) {
                c.warn('Output#Failed to setup speaking indicator: '.concat(e));
            }
        }
        return (
            'video' === e.kind &&
                (null != this.videoStreamId && (0, a.jC)(this.videoStreamId),
                this.stream.getVideoTracks().forEach((t) => {
                    e !== t && ((t.discordIsTearingDown = !0), this.stream.removeTrack(t));
                }),
                (this.videoStreamId = (0, a.N7)(this.stream)),
                this.emit('video', this.videoStreamId)),
            'audio' === e.kind &&
                this.stream.getAudioTracks().forEach((t) => {
                    e !== t && ((t.discordIsTearingDown = !0), this.stream.removeTrack(t));
                }),
            this.stream.getTracks().length
        );
    }
    removeTrack(e) {
        return this.stream.removeTrack(e), 'video' === e.kind && (null != this.videoStreamId && (0, a.jC)(this.videoStreamId), this.emit('video', null)), this.stream.getTracks().length;
    }
    setSinkId(e) {
        (this.sinkId = e), this.updateAudioElement();
    }
    get mute() {
        return this._mute;
    }
    set mute(e) {
        (this._mute = e || !1), this.updateAudioElement();
    }
    get priority() {
        return (this._speakingFlags & s.Dg.PRIORITY) === s.Dg.PRIORITY;
    }
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = Math.max(0, Math.min(Math.round(e), s.Qx))), this.updateAudioElement();
    }
    get speakingFlags() {
        return this._speakingFlags;
    }
    setSpeakingFlags(e) {
        this._speakingFlags !== e && ((this._speakingFlags = e), this.updateAudioElement());
    }
    updateAudioElement() {
        let e = this.audioElement;
        if (null != e) {
            (e.muted = this._mute), (e.volume = this._volume / 100);
            let t = this.sinkId;
            null != t && o.ZA && e.setSinkId(t);
        }
    }
    constructor(e, t) {
        super(), l(this, 'id', void 0), l(this, '_speakingFlags', s.Dg.NONE), l(this, '_mute', !1), l(this, '_volume', s.Qx), l(this, 'sinkId', null), l(this, 'audioElement', null), l(this, 'stream', new MediaStream()), l(this, 'videoStreamId', null), l(this, 'levelNode', null), l(this, 'streamSourceNode', null), l(this, 'audioContext', void 0), (this.id = e), (this.audioContext = t);
    }
}
