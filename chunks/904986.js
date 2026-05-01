n.d(t, { A: () => E, y: () => o.y });
var i = n(415955),
    a = n.n(i),
    r = n(241899),
    s = n.n(r),
    l = n(972347),
    o = n(935172),
    d = n(466376),
    c = n(731854);
let _ = 0;
class E extends l.A {
    mediaEngineConnectionId = `WebRTC-${_++}`;
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
        super(), (this.context = e), (this.userId = t), (this.videoQualityManager = new d.k7(e, this));
        const i = n(429430).A;
        this.framerateReducer = new i(this, this.videoQualityManager);
    }
    destroy() {
        (this.destroyed = !0),
            this.framerateReducer.destroy(),
            this.setConnectionState(c.$I.DISCONNECTED),
            this.emit(o.y.Destroy, this),
            this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        return this.disabledLocalVideos[e] ?? !1;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(o.y.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        return this.activeOutputSinks.has(e) && this.activeOutputSinks.get(e).size > 0;
    }
    setHasActiveVideoOutputSink(e, t, n) {
        let i = this.getHasActiveVideoOutputSink(e),
            a = this.activeOutputSinks.get(e) ?? new Set();
        t ? a.add(n) : a.delete(n), this.activeOutputSinks.set(e, a);
        let r = this.getHasActiveVideoOutputSink(e);
        (this.isActiveOutputSinksEnabled = !0), i !== r && this.emit(o.y.ActiveSinksChange, e, r);
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
        return a()(this.videoStreamParameters);
    }
    setExperimentFlag(e, t) {
        t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e);
    }
    setConnectionState(e) {
        this.logger.info(`Connection state change: ${this.connectionState} => ${e}`),
            (this.connectionState = e),
            this.emit(o.y.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        let t = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
        -1 === t && (t = 0);
        let { quality: n, constraints: i } = this.applyQualityConstraints({}, this.videoStreamParameters[t].ssrc),
            r = a()(this.videoStreamParameters);
        null != n &&
            ((r[t].maxBitrate = n.bitrateMax),
            (r[t].minBitrate = n.bitrateMin),
            (r[t].targetBitrate = n.bitrateTarget ?? 0),
            null != n.encode && ((r[t].maxPixelCount = n.encode.pixelCount), (r[t].maxFrameRate = n.encode.framerate))),
            (this.videoStreamParameters = r);
        for (let e = 0; e < this.videoStreamParameters.length; e++) {
            if (e === t) continue;
            let { quality: a, constraints: r } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != a &&
                ((this.videoStreamParameters[e].maxBitrate = a.bitrateMax),
                (this.videoStreamParameters[e].minBitrate = a.bitrateMin),
                (this.videoStreamParameters[e].targetBitrate = a.bitrateTarget ?? 0),
                null != a.encode &&
                    ((this.videoStreamParameters[e].maxPixelCount = a.encode.pixelCount),
                    (this.videoStreamParameters[e].maxFrameRate = a.encode.framerate))),
                100 === this.videoStreamParameters[e].quality && ((i = r), (n = a));
        }
        (i.streamParameters = a()(this.videoStreamParameters)),
            (i.remoteSinkWantsPixelCount = Math.max(...this.videoStreamParameters.map((e) => e.maxPixelCount ?? 0)));
        let l = null != e ? s()(i, e) : { ...i };
        this.logger.verbose(`updateVideoQuality: ${JSON.stringify(l)}`), this.updateVideoQualityCore(l, n);
    }
    applyVideoQualityMode(e) {
        if (this.context !== c.x.DEFAULT) return;
        let t = d.Cx[e];
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
            i = this.remoteVideoSinkWants[e ?? this.videoStreamParameters[0]?.ssrc ?? 0];
        if (null != i && i > 0) return i;
        let a = this.remoteVideoSinkWants.any;
        return null != a && a > 0 && n ? a : 100 * !!n;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    getRemoteVideoSinkPixelCount(e) {
        return void 0 === e ? 0 : (this.remoteVideoSinkWants.pixelCounts?.[e] ?? 0);
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(o.y.Stats, e), e;
    }
}
