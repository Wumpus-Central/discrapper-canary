n.d(t, {
    S: () => l.S,
    Z: () => _,
}),
    n(388685),
    n(49124);
var r = n(117806),
    i = n.n(r),
    a = n(679364),
    o = n.n(a),
    s = n(47770),
    l = n(445686),
    c = n(701597),
    u = n(65154);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = 0;
class _ extends s.Z {
    destroy() {
        (this.destroyed = !0),
            this.framerateReducer.destroy(),
            this.setConnectionState(u.$j.DISCONNECTED),
            this.emit(l.S.Destroy, this),
            this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        var t;
        return null != (t = this.disabledLocalVideos[e]) && t;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(l.S.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        return this.activeOutputSinks.has(e) && this.activeOutputSinks.get(e).size > 0;
    }
    setHasActiveVideoOutputSink(e, t, n) {
        var r;
        let i = this.getHasActiveVideoOutputSink(e),
            a = null != (r = this.activeOutputSinks.get(e)) ? r : new Set();
        t ? a.add(n) : a.delete(n), this.activeOutputSinks.set(e, a);
        let o = this.getHasActiveVideoOutputSink(e);
        (this.isActiveOutputSinksEnabled = !0), i !== o && this.emit(l.S.ActiveSinksChange, e, o);
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
        this.logger.info("Connection state change: ".concat(this.connectionState, " => ").concat(e)),
            (this.connectionState = e),
            this.emit(l.S.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        var t, n;
        let r = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
        -1 === r && (r = 0);
        let { quality: a, constraints: s } = this.applyQualityConstraints({}, this.videoStreamParameters[r].ssrc),
            l = i()(this.videoStreamParameters);
        null != a &&
            ((l[r].maxBitrate = a.bitrateMax),
            (l[r].minBitrate = a.bitrateMin),
            (l[r].targetBitrate = null != (t = a.bitrateTarget) ? t : 0),
            null != a.encode && ((l[r].maxPixelCount = a.encode.pixelCount), (l[r].maxFrameRate = a.encode.framerate))),
            (this.videoStreamParameters = l);
        for (let e = 0; e < this.videoStreamParameters.length; e++) {
            if (e === r) continue;
            let { quality: t, constraints: i } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != t &&
                ((this.videoStreamParameters[e].maxBitrate = t.bitrateMax),
                (this.videoStreamParameters[e].minBitrate = t.bitrateMin),
                (this.videoStreamParameters[e].targetBitrate = null != (n = t.bitrateTarget) ? n : 0),
                null != t.encode &&
                    ((this.videoStreamParameters[e].maxPixelCount = t.encode.pixelCount),
                    (this.videoStreamParameters[e].maxFrameRate = t.encode.framerate))),
                100 === this.videoStreamParameters[e].quality && ((s = i), (a = t));
        }
        (s.streamParameters = i()(this.videoStreamParameters)),
            (s.remoteSinkWantsPixelCount = Math.max(
                ...this.videoStreamParameters.map((e) => {
                    var t;
                    return null != (t = e.maxPixelCount) ? t : 0;
                }),
            ));
        let c = null != e ? o()(s, e) : f({}, s);
        this.logger.verbose("updateVideoQuality: ".concat(JSON.stringify(c))), this.updateVideoQualityCore(c, a);
    }
    applyVideoQualityMode(e) {
        if (this.context !== u.Yn.DEFAULT) return;
        let t = c.DM[e];
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
    initializeStreamParameters(e) {
        this.videoStreamParameters = e
            .filter((e) => (e.type === u.Tr.VIDEO || e.type === u.Tr.SCREEN) && "string" == typeof e.rid)
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
                        type: u.uA.FIXED,
                        width: null == (n = a.capture) ? void 0 : n.width,
                        height: null == (r = a.capture) ? void 0 : r.height,
                    },
                };
            });
    }
    getLocalWant(e) {
        var t, n;
        let r = this.videoStreamParameters.some((t) => t.ssrc === e && t.quality === u.y7) || void 0 === e,
            i = this.context === u.Yn.DEFAULT || r,
            a =
                this.remoteVideoSinkWants[
                    null != (n = null != e ? e : null == (t = this.videoStreamParameters[0]) ? void 0 : t.ssrc) ? n : 0
                ];
        if (null != a && a > 0) return a;
        let o = this.remoteVideoSinkWants.any;
        return null != o && o > 0 && i ? o : 100 * !!i;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    getRemoteVideoSinkPixelCount(e) {
        var t, n;
        return void 0 === e
            ? 0
            : null != (n = null == (t = this.remoteVideoSinkWants.pixelCounts) ? void 0 : t[e])
              ? n
              : 0;
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(l.S.Stats, e), e;
    }
    constructor(e, t) {
        super(),
            d(this, "mediaEngineConnectionId", "WebRTC-".concat(p++)),
            d(this, "context", void 0),
            d(this, "userId", void 0),
            d(this, "streamUserId", void 0),
            d(this, "destroyed", !1),
            d(this, "audioSSRC", 0),
            d(this, "videoSSRC", 0),
            d(this, "selfDeaf", !1),
            d(this, "selfMute", !1),
            d(this, "localMutes", {}),
            d(this, "disabledLocalVideos", {}),
            d(this, "localVolumes", {}),
            d(this, "isActiveOutputSinksEnabled", !1),
            d(this, "activeOutputSinks", new Map()),
            d(this, "videoSupported", !1),
            d(this, "useElectronVideo", !1),
            d(this, "voiceBitrate", u.dX),
            d(this, "remoteSinkWantsMaxFramerate", u.Gs),
            d(this, "videoQualityManager", void 0),
            d(this, "wantsPriority", new Set()),
            d(this, "localSpeakingFlags", {}),
            d(this, "videoReady", !1),
            d(this, "videoStreamParameters", []),
            d(this, "remoteVideoSinkWants", { any: 100 }),
            d(this, "localVideoSinkWants", { any: 100 }),
            d(this, "connectionState", u.$j.CONNECTING),
            d(this, "stats", void 0),
            d(this, "onDesktopEncodingOptionsSet", (e, t, n) => {}),
            d(this, "experimentFlags", new Set()),
            d(this, "framerateReducer", void 0),
            (this.context = e),
            (this.userId = t),
            (this.videoQualityManager = new c.iY(e, this));
        let r = n(988746).Z;
        this.framerateReducer = new r(this, this.videoQualityManager);
    }
}
