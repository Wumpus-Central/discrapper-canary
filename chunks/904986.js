"use strict";
n.d(t, { A: () => _, y: () => l.y });
var r = n(415955),
    i = n.n(r),
    s = n(241899),
    a = n.n(s),
    o = n(972347),
    l = n(935172),
    u = n(466376),
    c = n(731854);
let d = 0;
class _ extends o.A {
    mediaEngineConnectionId = `WebRTC-${d++}`;
    context;
    userId;
    streamUserId;
    destroyed = !1;
    audioSSRC = 0;
    videoSSRC = 0;
    selfDeaf = !1;
    selfMute = !1;
    localMutes = {};
    disabledLocalVideos = {};
    localVolumes = {};
    isActiveOutputSinksEnabled = !1;
    activeOutputSinks = new Map();
    videoSupported = !1;
    useElectronVideo = !1;
    voiceBitrate = c.PR;
    remoteSinkWantsMaxFramerate = c.sG;
    videoQualityManager;
    wantsPriority = new Set();
    localSpeakingFlags = {};
    videoReady = !1;
    videoStreamParameters = [];
    remoteVideoSinkWants = { any: 100 };
    localVideoSinkWants = { any: 100 };
    connectionState = c.$I.CONNECTING;
    stats;
    onDesktopEncodingOptionsSet = (e, t, n) => {};
    experimentFlags = new Set();
    framerateReducer;
    constructor(e, t) {
        super(), (this.context = e), (this.userId = t), (this.videoQualityManager = new u.k7(e, this));
        const r = n(429430).A;
        this.framerateReducer = new r(this, this.videoQualityManager);
    }
    destroy() {
        (this.destroyed = !0),
            this.framerateReducer.destroy(),
            this.setConnectionState(c.$I.DISCONNECTED),
            this.emit(l.y.Destroy, this),
            this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        return this.disabledLocalVideos[e] ?? !1;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(l.y.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        return this.activeOutputSinks.has(e) && this.activeOutputSinks.get(e).size > 0;
    }
    setHasActiveVideoOutputSink(e, t, n) {
        let r = this.getHasActiveVideoOutputSink(e),
            i = this.activeOutputSinks.get(e) ?? new Set();
        t ? i.add(n) : i.delete(n), this.activeOutputSinks.set(e, i);
        let s = this.getHasActiveVideoOutputSink(e);
        (this.isActiveOutputSinksEnabled = !0), r !== s && this.emit(l.y.ActiveSinksChange, e, s);
    }
    getActiveOutputSinkTrackingEnabled() {
        return this.isActiveOutputSinksEnabled;
    }
    setUseElectronVideo(e) {
        this.useElectronVideo = e;
    }
    setClipRecordUser(e, t, n) {}
    setViewerSideClip(e) {}
    setRemoteAudioHistory(e) {}
    setClipsKeyFrameInterval(e) {}
    setQualityDecoupling(e) {}
    presentDesktopSourcePicker(e) {}
    getStreamParameters() {
        return i()(this.videoStreamParameters);
    }
    setExperimentFlag(e, t) {
        t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e);
    }
    setConnectionState(e) {
        this.logger.info(`Connection state change: ${this.connectionState} => ${e}`),
            (this.connectionState = e),
            this.emit(l.y.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        let t = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
        -1 === t && (t = 0);
        let { quality: n, constraints: r } = this.applyQualityConstraints({}, this.videoStreamParameters[t].ssrc),
            s = i()(this.videoStreamParameters);
        null != n &&
            ((s[t].maxBitrate = n.bitrateMax),
            (s[t].minBitrate = n.bitrateMin),
            (s[t].targetBitrate = n.bitrateTarget ?? 0),
            null != n.encode && ((s[t].maxPixelCount = n.encode.pixelCount), (s[t].maxFrameRate = n.encode.framerate))),
            (this.videoStreamParameters = s);
        for (let e = 0; e < this.videoStreamParameters.length; e++) {
            if (e === t) continue;
            let { quality: i, constraints: s } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != i &&
                ((this.videoStreamParameters[e].maxBitrate = i.bitrateMax),
                (this.videoStreamParameters[e].minBitrate = i.bitrateMin),
                (this.videoStreamParameters[e].targetBitrate = i.bitrateTarget ?? 0),
                null != i.encode &&
                    ((this.videoStreamParameters[e].maxPixelCount = i.encode.pixelCount),
                    (this.videoStreamParameters[e].maxFrameRate = i.encode.framerate))),
                100 === this.videoStreamParameters[e].quality && ((r = s), (n = i));
        }
        (r.streamParameters = i()(this.videoStreamParameters)),
            (r.remoteSinkWantsPixelCount = Math.max(...this.videoStreamParameters.map((e) => e.maxPixelCount ?? 0)));
        let o = null != e ? a()(r, e) : { ...r };
        this.logger.verbose(`updateVideoQuality: ${JSON.stringify(o)}`), this.updateVideoQualityCore(o, n);
    }
    applyVideoQualityMode(e) {
        if (this.context !== c.x.DEFAULT) return;
        let t = u.Cx[e];
        this.videoQualityManager.setQualityOverwrite(t), this.updateVideoQuality();
    }
    overwriteQualityForTesting(e) {
        this.videoQualityManager.setQualityOverwrite(e), this.updateVideoQuality();
    }
    applyQualityConstraints() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.videoQualityManager.applyQualityConstraints(e, t);
    }
    initializeStreamParameters(e) {
        this.videoStreamParameters = e
            .filter((e) => (e.type === c.mI.VIDEO || e.type === c.mI.SCREEN) && "string" == typeof e.rid)
            .map((e) => {
                let t = this.videoQualityManager.getQuality(e.ssrc);
                return {
                    type: e.type,
                    active: e.active,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    maxBitrate: (e.quality ?? 100) < 100 ? t.bitrateMax / 4 : t.bitrateMax,
                    maxFrameRate: t.capture?.framerate,
                    maxResolution: { type: c.ei.FIXED, width: t.capture?.width, height: t.capture?.height },
                };
            });
    }
    getLocalWant(e) {
        let t = this.videoStreamParameters.some((t) => t.ssrc === e && t.quality === c.Y4) || void 0 === e,
            n = this.context === c.x.DEFAULT || t,
            r = this.remoteVideoSinkWants[e ?? this.videoStreamParameters[0]?.ssrc ?? 0];
        if (null != r && r > 0) return r;
        let i = this.remoteVideoSinkWants.any;
        return null != i && i > 0 && n ? i : 100 * !!n;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    getRemoteVideoSinkPixelCount(e) {
        return void 0 === e ? 0 : (this.remoteVideoSinkWants.pixelCounts?.[e] ?? 0);
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(l.y.Stats, e), e;
    }
}
