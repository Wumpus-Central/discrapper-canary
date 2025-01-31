n.d(t, {
    S: () => s.S,
    Z: () => d
}),
    n(47120);
var i = n(117806),
    r = n.n(i),
    a = n(47770),
    s = n(445686),
    o = n(701597),
    l = n(65154);
function u(e, t, n) {
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
let c = 0;
class d extends a.Z {
    destroy() {
        (this.destroyed = !0), this.framerateReducer.destroy(), this.setConnectionState(l.$j.DISCONNECTED), this.emit(s.S.Destroy, this), this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        var t;
        return null !== (t = this.disabledLocalVideos[e]) && void 0 !== t && t;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(s.S.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        return this.activeOutputSinks.has(e) && this.activeOutputSinks.get(e).size > 0;
    }
    setHasActiveVideoOutputSink(e, t, n) {
        var i;
        let r = this.getHasActiveVideoOutputSink(e),
            a = null !== (i = this.activeOutputSinks.get(e)) && void 0 !== i ? i : new Set();
        t ? a.add(n) : a.delete(n), this.activeOutputSinks.set(e, a);
        let o = this.getHasActiveVideoOutputSink(e);
        (this.isActiveOutputSinksEnabled = !0), r !== o && this.emit(s.S.ActiveSinksChange, e, o);
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
        return r()(this.videoStreamParameters);
    }
    setExperimentFlag(e, t) {
        t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e);
    }
    setConnectionState(e) {
        this.logger.info('Connection state change: '.concat(this.connectionState, ' => ').concat(e)), (this.connectionState = e), this.emit(s.S.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        var t, n;
        let i = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
        -1 === i && (i = 0);
        let { quality: a, constraints: s } = this.applyQualityConstraints({}, this.videoStreamParameters[i].ssrc),
            o = r()(this.videoStreamParameters);
        null != a && ((o[i].maxBitrate = a.bitrateMax), (o[i].minBitrate = a.bitrateMin), (o[i].targetBitrate = null !== (t = a.bitrateTarget) && void 0 !== t ? t : 0), null != a.encode && ((o[i].maxPixelCount = a.encode.pixelCount), (o[i].maxFrameRate = a.encode.framerate))), (this.videoStreamParameters = o);
        for (let e = 0; e < this.videoStreamParameters.length; e++) {
            if (e === i) continue;
            let { quality: t, constraints: r } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != t && ((this.videoStreamParameters[e].maxBitrate = t.bitrateMax), (this.videoStreamParameters[e].minBitrate = t.bitrateMin), (this.videoStreamParameters[e].targetBitrate = null !== (n = t.bitrateTarget) && void 0 !== n ? n : 0), null != t.encode && ((this.videoStreamParameters[e].maxPixelCount = t.encode.pixelCount), (this.videoStreamParameters[e].maxFrameRate = t.encode.framerate))), 100 === this.videoStreamParameters[e].quality && ((s = r), (a = t));
        }
        (s.streamParameters = r()(this.videoStreamParameters)),
            (s.remoteSinkWantsPixelCount = Math.max(
                ...this.videoStreamParameters.map((e) => {
                    var t;
                    return null !== (t = e.maxPixelCount) && void 0 !== t ? t : 0;
                })
            ));
        let l = this.pickProperties(s, e);
        this.logger.info('updateVideoQuality: '.concat(JSON.stringify(l, void 0, 4))), this.updateVideoQualityCore(l, a);
    }
    applyVideoQualityMode(e) {
        if (this.context !== l.Yn.DEFAULT) return;
        let t = o.DM[e];
        this.videoQualityManager.setQualityOverwrite(t), this.updateVideoQuality();
    }
    overwriteQualityForTesting(e) {
        this.videoQualityManager.setQualityOverwrite(e), this.updateVideoQuality();
    }
    configureGoLiveSimulcast(e, t) {
        this.videoQualityManager.configGoLiveSimulcast(e, t);
    }
    applyQualityConstraints() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.videoQualityManager.applyQualityConstraints(e, t);
    }
    pickProperties(e, t) {
        if (null == t || null == e) return e;
        let n = {};
        for (let i of t) n[i] = e[i];
        return n;
    }
    initializeStreamParameters(e) {
        this.videoStreamParameters = e
            .filter((e) => (e.type === l.Tr.VIDEO || e.type === l.Tr.SCREEN) && 'string' == typeof e.rid)
            .map((e) => {
                var t, n, i, r;
                let a = this.videoQualityManager.getQuality(e.ssrc);
                return {
                    type: e.type,
                    active: e.active,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    maxBitrate: (null !== (r = e.quality) && void 0 !== r ? r : 100) < 100 ? a.bitrateMax / 4 : a.bitrateMax,
                    maxFrameRate: null === (t = a.capture) || void 0 === t ? void 0 : t.framerate,
                    maxResolution: {
                        type: l.uA.FIXED,
                        width: null === (n = a.capture) || void 0 === n ? void 0 : n.width,
                        height: null === (i = a.capture) || void 0 === i ? void 0 : i.height
                    }
                };
            });
    }
    getLocalWant(e) {
        var t, n;
        let i = this.videoStreamParameters.some((t) => t.ssrc === e && t.quality === l.y7) || void 0 === e,
            r = this.context === l.Yn.DEFAULT || i,
            a = this.remoteVideoSinkWants[null !== (n = null != e ? e : null === (t = this.videoStreamParameters[0]) || void 0 === t ? void 0 : t.ssrc) && void 0 !== n ? n : 0];
        if (null != a && a > 0) return a;
        let s = this.remoteVideoSinkWants.any;
        return null != s && s > 0 && r ? s : r ? 100 : 0;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(s.S.Stats, e), e;
    }
    constructor(e, t) {
        super(), u(this, 'mediaEngineConnectionId', 'WebRTC-'.concat(c++)), u(this, 'context', void 0), u(this, 'userId', void 0), u(this, 'streamUserId', void 0), u(this, 'destroyed', !1), u(this, 'audioSSRC', 0), u(this, 'selfDeaf', !1), u(this, 'selfMute', !1), u(this, 'localMutes', {}), u(this, 'disabledLocalVideos', {}), u(this, 'localVolumes', {}), u(this, 'isActiveOutputSinksEnabled', !1), u(this, 'activeOutputSinks', new Map()), u(this, 'videoSupported', !1), u(this, 'useElectronVideo', !1), u(this, 'voiceBitrate', l.dX), u(this, 'remoteSinkWantsMaxFramerate', l.Gs), u(this, 'videoQualityManager', void 0), u(this, 'wantsPriority', new Set()), u(this, 'localSpeakingFlags', {}), u(this, 'videoReady', !1), u(this, 'videoStreamParameters', []), u(this, 'remoteVideoSinkWants', { any: 100 }), u(this, 'localVideoSinkWants', { any: 100 }), u(this, 'connectionState', l.$j.CONNECTING), u(this, 'stats', void 0), u(this, 'onDesktopEncodingOptionsSet', (e, t, n) => {}), u(this, 'experimentFlags', new Set()), u(this, 'framerateReducer', void 0), (this.context = e), (this.userId = t), (this.videoQualityManager = new o.iY(e, this));
        let i = n(988746).Z;
        this.framerateReducer = new i(this, this.videoQualityManager);
    }
}
