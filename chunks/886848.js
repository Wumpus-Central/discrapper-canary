r.d(n, {
    G: function () {
        return i;
    },
    Z: function () {
        return u;
    }
});
var i,
    a = r(47770),
    o = r(68721),
    s = r(591218);
function l(e, n, r) {
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
!(function (e) {
    (e.Stream = 'stream'), (e.Video = 'video'), (e.Mute = 'mute'), (e.VoiceActivity = 'voiceactivity'), (e.DesktopSourceEnd = 'desktopsourceend'), (e.Speaking = 'speaking'), (e.AudioPermission = 'audio-permission'), (e.VideoPermission = 'video-permission'), (e.AddVideoTrack = 'add-video-track');
})(i || (i = {}));
class u extends a.Z {
    destroy() {
        this.removeAllListeners(), this.destroyStreams();
    }
    destroyStreams() {
        var e;
        this.audio.destroy(), this.video.destroy(), null === (e = this.desktop) || void 0 === e || e.destroy();
    }
    setDesktop(e) {
        this.destroyStreams(), null == e || e.addListener('desktopsourceend', this.handleDesktopSourceEnd), null == e || e.addListener('speaking', this.handleSpeaking), (this.desktop = e), this.mergeStreams();
    }
    reset() {
        var e;
        this.audio.reset(), null === (e = this.desktop) || void 0 === e || e.reset();
    }
    getVideoStream() {
        return null != this.desktop ? this.desktop.stream : this.video.stream;
    }
    getVideoStreamId() {
        return null != this.desktop ? this.desktop.getStreamId() : this.video.getStreamId();
    }
    enableAudioInput() {
        this.audio.enable();
    }
    setAudioMode(e, n) {
        this.audio.setMode(e, n);
    }
    setMute(e) {
        (this.audio.mute = e), this.emit('mute', e);
    }
    setEchoCancellation(e) {
        this.audio.echoCancellation = e;
    }
    setNoiseSuppression(e) {
        this.audio.noiseSuppression = e;
    }
    setNoiseCancellation(e) {
        this.audio.noiseCancellation = e;
    }
    setAutomaticGainControl(e) {
        this.audio.automaticGainControl = e;
    }
    setPTTActive(e) {
        this.audio.setPTTActive(e);
    }
    setAudioSource(e) {
        this.audio.setSource(e);
    }
    setVideoSource(e) {
        this.video.setSource(e);
    }
    mute() {
        return this.audio.mute;
    }
    resumeAudio() {
        this.audio.resume();
    }
    getAudioState() {
        return this.audio.state;
    }
    hasDesktopSource() {
        return null != this.desktop;
    }
    constructor(e) {
        super(),
            l(this, 'audio', void 0),
            l(this, 'video', new s.Z()),
            l(this, 'desktop', null),
            l(this, 'stream', void 0),
            l(this, 'mergeStreams', () => {
                var e, n, r;
                let i = new MediaStream();
                return null != this.desktop ? (null === (e = this.desktop.stream) || void 0 === e || e.getTracks().forEach((e) => i.addTrack(e)), this.desktop.refreshSpeaking()) : (null === (n = this.audio.stream) || void 0 === n || n.getAudioTracks().forEach((e) => i.addTrack(e)), null === (r = this.video.stream) || void 0 === r || r.getVideoTracks().forEach((e) => i.addTrack(e))), (this.stream = i), this.emit('stream', i), this.emit('video', this.getVideoStreamId()), i;
            }),
            l(this, 'handleVoiceActivity', (e) => {
                this.emit('voiceactivity', e);
            }),
            l(this, 'handleDesktopSourceEnd', () => {
                this.emit('desktopsourceend');
            }),
            l(this, 'handleSpeaking', (e) => {
                this.emit('speaking', e);
            }),
            l(this, 'handleAudioPermission', (e) => {
                this.emit('audio-permission', e);
            }),
            l(this, 'handleVideoPermission', (e) => {
                this.emit('video-permission', e);
            }),
            (this.audio = new o.Z(e)),
            this.audio.addListener('voiceactivity', this.handleVoiceActivity),
            this.audio.addListener('speaking', this.handleSpeaking),
            this.audio.addListener('stream', this.mergeStreams),
            this.audio.addListener('permission', this.handleAudioPermission),
            this.video.addListener('stream', this.mergeStreams),
            this.video.addListener('permission', this.handleVideoPermission),
            this.video.addListener('add-video-track', (e) => this.emit('add-video-track', e));
    }
}
