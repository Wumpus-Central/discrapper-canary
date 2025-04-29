n.d(t, {
    G: () => s,
    Z: () => l
});
var r = n(47770),
    i = n(68721),
    o = n(591218);
function a(e, t, n) {
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
var s = (function (e) {
    return (e.Stream = 'stream'), (e.Video = 'video'), (e.Mute = 'mute'), (e.VoiceActivity = 'voiceactivity'), (e.DesktopSourceEnd = 'desktopsourceend'), (e.Speaking = 'speaking'), (e.AudioPermission = 'audio-permission'), (e.VideoPermission = 'video-permission'), (e.AddVideoTrack = 'add-video-track'), e;
})({});
class l extends r.Z {
    destroy() {
        this.removeAllListeners(), this.destroyStreams();
    }
    destroyStreams() {
        var e;
        this.audio.destroy(), this.video.destroy(), null == (e = this.desktop) || e.destroy();
    }
    setDesktop(e) {
        this.destroyStreams(), null == e || e.addListener('desktopsourceend', this.handleDesktopSourceEnd), null == e || e.addListener('speaking', this.handleSpeaking), (this.desktop = e), this.mergeStreams();
    }
    reset() {
        var e;
        this.audio.reset(), null == (e = this.desktop) || e.reset();
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
    setAudioMode(e, t) {
        this.audio.setMode(e, t);
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
            a(this, 'audio', void 0),
            a(this, 'video', new o.Z()),
            a(this, 'desktop', null),
            a(this, 'stream', void 0),
            a(this, 'mergeStreams', () => {
                var e, t, n;
                let r = new MediaStream();
                return null != this.desktop ? (null == (e = this.desktop.stream) || e.getTracks().forEach((e) => r.addTrack(e)), this.desktop.refreshSpeaking()) : (null == (t = this.audio.stream) || t.getAudioTracks().forEach((e) => r.addTrack(e)), null == (n = this.video.stream) || n.getVideoTracks().forEach((e) => r.addTrack(e))), (this.stream = r), this.emit('stream', r), this.emit('video', this.getVideoStreamId()), r;
            }),
            a(this, 'handleVoiceActivity', (e) => {
                this.emit('voiceactivity', e);
            }),
            a(this, 'handleDesktopSourceEnd', () => {
                this.emit('desktopsourceend');
            }),
            a(this, 'handleSpeaking', (e) => {
                this.emit('speaking', e);
            }),
            a(this, 'handleAudioPermission', (e) => {
                this.emit('audio-permission', e);
            }),
            a(this, 'handleVideoPermission', (e) => {
                this.emit('video-permission', e);
            }),
            (this.audio = new i.Z(e)),
            this.audio.addListener('voiceactivity', this.handleVoiceActivity),
            this.audio.addListener('speaking', this.handleSpeaking),
            this.audio.addListener('stream', this.mergeStreams),
            this.audio.addListener('permission', this.handleAudioPermission),
            this.video.addListener('stream', this.mergeStreams),
            this.video.addListener('permission', this.handleVideoPermission),
            this.video.addListener('add-video-track', (e) => this.emit('add-video-track', e));
    }
}
