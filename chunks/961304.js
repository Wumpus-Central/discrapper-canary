r.d(n, {
    X: function () {
        return i;
    },
    Z: function () {
        return f;
    }
});
var i,
    a = r(259443),
    o = r(47770),
    s = r(740197),
    l = r(376398),
    u = r(65154);
function c(e, n, r) {
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
let d = new a.Yd('Output');
!(function (e) {
    (e.InteractionRequired = 'interactionrequired'), (e.Speaking = 'speaking'), (e.Video = 'video');
})(i || (i = {}));
class f extends o.Z {
    play() {
        var e;
        null === (e = this.audioElement) || void 0 === e || e.play();
    }
    destroy() {
        var e;
        null === (e = this.audioElement) || void 0 === e || e.pause(), null != this.videoStreamId && (0, l.jC)(this.videoStreamId), null != this.streamSourceNode && (this.streamSourceNode.disconnect(), (this.streamSourceNode = null)), null != this.levelNode && (this.levelNode.disconnect(), this.levelNode.port.postMessage('close'), (this.levelNode = null)), this.setSpeakingFlags(u.Dg.NONE), this.removeAllListeners();
    }
    addTrack(e) {
        if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
        if ((this.stream.addTrack(e), null == this.audioElement)) {
            let e = document.createElement('audio');
            e.srcObject = this.stream;
            let n = e.play();
            null != n && n.catch(() => this.emit('interactionrequired', !0)), (this.audioElement = e), this.updateAudioElement();
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
                d.warn('Output#Failed to setup speaking indicator: '.concat(e));
            }
        }
        return (
            'video' === e.kind &&
                (null != this.videoStreamId && (0, l.jC)(this.videoStreamId),
                this.stream.getVideoTracks().forEach((n) => {
                    e !== n && ((n.discordIsTearingDown = !0), this.stream.removeTrack(n));
                }),
                (this.videoStreamId = (0, l.N7)(this.stream)),
                this.emit('video', this.videoStreamId)),
            'audio' === e.kind &&
                this.stream.getAudioTracks().forEach((n) => {
                    e !== n && ((n.discordIsTearingDown = !0), this.stream.removeTrack(n));
                }),
            this.stream.getTracks().length
        );
    }
    removeTrack(e) {
        return this.stream.removeTrack(e), 'video' === e.kind && (null != this.videoStreamId && (0, l.jC)(this.videoStreamId), this.emit('video', null)), this.stream.getTracks().length;
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
        return (this._speakingFlags & u.Dg.PRIORITY) === u.Dg.PRIORITY;
    }
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = Math.max(0, Math.min(Math.round(e), u.Qx))), this.updateAudioElement();
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
            let n = this.sinkId;
            null != n && s.ZA && e.setSinkId(n);
        }
    }
    constructor(e, n) {
        super(), c(this, 'id', void 0), c(this, '_speakingFlags', u.Dg.NONE), c(this, '_mute', !1), c(this, '_volume', u.Qx), c(this, 'sinkId', null), c(this, 'audioElement', null), c(this, 'stream', new MediaStream()), c(this, 'videoStreamId', null), c(this, 'levelNode', null), c(this, 'streamSourceNode', null), c(this, 'audioContext', void 0), (this.id = e), (this.audioContext = n);
    }
}
