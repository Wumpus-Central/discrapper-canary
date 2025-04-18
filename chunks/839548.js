n.d(t, {
    S: () => o.S,
    Z: () => d
}),
    n(388685),
    n(49124);
var r = n(117806),
    i = n.n(r),
    a = n(47770),
    o = n(445686),
    s = n(701597),
    l = n(65154);
function c(e, t, n) {
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
let u = 0;
class d extends a.Z {
    destroy() {
        (this.destroyed = !0), this.framerateReducer.destroy(), this.setConnectionState(l.$j.DISCONNECTED), this.emit(o.S.Destroy, this), this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        var t;
        return null != (t = this.disabledLocalVideos[e]) && t;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(o.S.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        return this.activeOutputSinks.has(e) && this.activeOutputSinks.get(e).size > 0;
    }
    setHasActiveVideoOutputSink(e, t, n) {
        var r;
        let i = this.getHasActiveVideoOutputSink(e),
            a = null != (r = this.activeOutputSinks.get(e)) ? r : new Set();
        t ? a.add(n) : a.delete(n), this.activeOutputSinks.set(e, a);
        let s = this.getHasActiveVideoOutputSink(e);
        (this.isActiveOutputSinksEnabled = !0), i !== s && this.emit(o.S.ActiveSinksChange, e, s);
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
        this.logger.info('Connection state change: '.concat(this.connectionState, ' => ').concat(e)), (this.connectionState = e), this.emit(o.S.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        var t, n;
        let r = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
        -1 === r && (r = 0);
        let { quality: a, constraints: o } = this.applyQualityConstraints({}, this.videoStreamParameters[r].ssrc),
            s = i()(this.videoStreamParameters);
        null != a && ((s[r].maxBitrate = a.bitrateMax), (s[r].minBitrate = a.bitrateMin), (s[r].targetBitrate = null != (t = a.bitrateTarget) ? t : 0), null != a.encode && ((s[r].maxPixelCount = a.encode.pixelCount), (s[r].maxFrameRate = a.encode.framerate))), (this.videoStreamParameters = s);
        for (let e = 0; e < this.videoStreamParameters.length; e++) {
            if (e === r) continue;
            let { quality: t, constraints: i } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != t && ((this.videoStreamParameters[e].maxBitrate = t.bitrateMax), (this.videoStreamParameters[e].minBitrate = t.bitrateMin), (this.videoStreamParameters[e].targetBitrate = null != (n = t.bitrateTarget) ? n : 0), null != t.encode && ((this.videoStreamParameters[e].maxPixelCount = t.encode.pixelCount), (this.videoStreamParameters[e].maxFrameRate = t.encode.framerate))), 100 === this.videoStreamParameters[e].quality && ((o = i), (a = t));
        }
        (o.streamParameters = i()(this.videoStreamParameters)),
            (o.remoteSinkWantsPixelCount = Math.max(
                ...this.videoStreamParameters.map((e) => {
                    var t;
                    return null != (t = e.maxPixelCount) ? t : 0;
                })
            ));
        let l = this.pickProperties(o, e);
        this.logger.verbose('updateVideoQuality: '.concat(JSON.stringify(l))), this.updateVideoQualityCore(l, a);
    }
    applyVideoQualityMode(e) {
        if (this.context !== l.Yn.DEFAULT) return;
        let t = s.DM[e];
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
        for (let r of t) n[r] = e[r];
        return n;
    }
    initializeStreamParameters(e) {
        this.videoStreamParameters = e
            .filter((e) => (e.type === l.Tr.VIDEO || e.type === l.Tr.SCREEN) && 'string' == typeof e.rid)
            .map((e) => {
                var t, n, r, i;
                let a = this.videoQualityManager.getQuality(e.ssrc);
                return {
                    type: e.type,
                    active: e.active,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    maxBitrate: (null != (i = e.quality) ? i : 100) < 100 ? a.bitrateMax / 4 : a.bitrateMax,
                    maxFrameRate: null == (t = a.capture) ? void 0 : t.framerate,
                    maxResolution: {
                        type: l.uA.FIXED,
                        width: null == (n = a.capture) ? void 0 : n.width,
                        height: null == (r = a.capture) ? void 0 : r.height
                    }
                };
            });
    }
    getLocalWant(e) {
        var t, n;
        let r = this.videoStreamParameters.some((t) => t.ssrc === e && t.quality === l.y7) || void 0 === e,
            i = this.context === l.Yn.DEFAULT || r,
            a = this.remoteVideoSinkWants[null != (n = null != e ? e : null == (t = this.videoStreamParameters[0]) ? void 0 : t.ssrc) ? n : 0];
        if (null != a && a > 0) return a;
        let o = this.remoteVideoSinkWants.any;
        return null != o && o > 0 && i ? o : 100 * !!i;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(o.S.Stats, e), e;
    }
    constructor(e, t) {
        super(), c(this, 'mediaEngineConnectionId', 'WebRTC-'.concat(u++)), c(this, 'context', void 0), c(this, 'userId', void 0), c(this, 'streamUserId', void 0), c(this, 'destroyed', !1), c(this, 'audioSSRC', 0), c(this, 'selfDeaf', !1), c(this, 'selfMute', !1), c(this, 'localMutes', {}), c(this, 'disabledLocalVideos', {}), c(this, 'localVolumes', {}), c(this, 'isActiveOutputSinksEnabled', !1), c(this, 'activeOutputSinks', new Map()), c(this, 'videoSupported', !1), c(this, 'useElectronVideo', !1), c(this, 'voiceBitrate', l.dX), c(this, 'remoteSinkWantsMaxFramerate', l.Gs), c(this, 'videoQualityManager', void 0), c(this, 'wantsPriority', new Set()), c(this, 'localSpeakingFlags', {}), c(this, 'videoReady', !1), c(this, 'videoStreamParameters', []), c(this, 'remoteVideoSinkWants', { any: 100 }), c(this, 'localVideoSinkWants', { any: 100 }), c(this, 'connectionState', l.$j.CONNECTING), c(this, 'stats', void 0), c(this, 'onDesktopEncodingOptionsSet', (e, t, n) => {}), c(this, 'experimentFlags', new Set()), c(this, 'framerateReducer', void 0), (this.context = e), (this.userId = t), (this.videoQualityManager = new s.iY(e, this));
        let r = n(988746).Z;
        this.framerateReducer = new r(this, this.videoQualityManager);
    }
}
