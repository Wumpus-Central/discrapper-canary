r.d(n, {
    S: function () {
        return l.S;
    },
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(117806),
    o = r.n(a),
    s = r(47770),
    l = r(445686),
    u = r(701597),
    c = r(65154);
function d(e, n, r) {
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
let f = 0;
class p extends s.Z {
    destroy() {
        (this.destroyed = !0), this.framerateReducer.destroy(), this.setConnectionState(c.$j.DISCONNECTED), this.emit(l.S.Destroy, this), this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        var n;
        return null !== (n = this.disabledLocalVideos[e]) && void 0 !== n && n;
    }
    setLocalVideoDisabled(e, n) {
        (this.disabledLocalVideos[e] = n), this.emit(l.S.LocalVideoDisabled, e, n);
    }
    getHasActiveVideoOutputSink(e) {
        return this.activeOutputSinks.has(e) && this.activeOutputSinks.get(e).size > 0;
    }
    setHasActiveVideoOutputSink(e, n, r) {
        var i;
        let a = this.getHasActiveVideoOutputSink(e),
            o = null !== (i = this.activeOutputSinks.get(e)) && void 0 !== i ? i : new Set();
        n ? o.add(r) : o.delete(r), this.activeOutputSinks.set(e, o);
        let s = this.getHasActiveVideoOutputSink(e);
        (this.isActiveOutputSinksEnabled = !0), a !== s && this.emit(l.S.ActiveSinksChange, e, s);
    }
    getActiveOutputSinkTrackingEnabled() {
        return this.isActiveOutputSinksEnabled;
    }
    setUseElectronVideo(e) {
        this.useElectronVideo = e;
    }
    setClipRecordUser(e, n, r) {}
    setViewerSideClip(e) {}
    setRemoteAudioHistory(e) {}
    setClipsKeyFrameInterval(e) {}
    setQualityDecoupling(e) {}
    presentDesktopSourcePicker(e) {}
    getStreamParameters() {
        return o()(this.videoStreamParameters);
    }
    setExperimentFlag(e, n) {
        n ? this.experimentFlags.add(e) : this.experimentFlags.delete(e);
    }
    setConnectionState(e) {
        this.logger.info('Connection state change: '.concat(this.connectionState, ' => ').concat(e)), (this.connectionState = e), this.emit(l.S.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        var n, r;
        let i = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
        -1 === i && (i = 0);
        let { quality: a, constraints: s } = this.applyQualityConstraints({}, this.videoStreamParameters[i].ssrc),
            l = o()(this.videoStreamParameters);
        null != a && ((l[i].maxBitrate = a.bitrateMax), (l[i].minBitrate = a.bitrateMin), (l[i].targetBitrate = null !== (n = a.bitrateTarget) && void 0 !== n ? n : 0), null != a.encode && ((l[i].maxPixelCount = a.encode.pixelCount), (l[i].maxFrameRate = a.encode.framerate))), (this.videoStreamParameters = l);
        for (let e = 0; e < this.videoStreamParameters.length; e++) {
            if (e === i) continue;
            let { quality: n, constraints: o } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != n && ((this.videoStreamParameters[e].maxBitrate = n.bitrateMax), (this.videoStreamParameters[e].minBitrate = n.bitrateMin), (this.videoStreamParameters[e].targetBitrate = null !== (r = n.bitrateTarget) && void 0 !== r ? r : 0), null != n.encode && ((this.videoStreamParameters[e].maxPixelCount = n.encode.pixelCount), (this.videoStreamParameters[e].maxFrameRate = n.encode.framerate))), 100 === this.videoStreamParameters[e].quality && ((s = o), (a = n));
        }
        (s.streamParameters = o()(this.videoStreamParameters)),
            (s.remoteSinkWantsPixelCount = Math.max(
                ...this.videoStreamParameters.map((e) => {
                    var n;
                    return null !== (n = e.maxPixelCount) && void 0 !== n ? n : 0;
                })
            ));
        let u = this.pickProperties(s, e);
        this.logger.info('updateVideoQuality: '.concat(JSON.stringify(u, void 0, 4))), this.updateVideoQualityCore(u, a);
    }
    applyVideoQualityMode(e) {
        if (this.context !== c.Yn.DEFAULT) return;
        let n = u.DM[e];
        this.videoQualityManager.setQualityOverwrite(n), this.updateVideoQuality();
    }
    overwriteQualityForTesting(e) {
        this.videoQualityManager.setQualityOverwrite(e), this.updateVideoQuality();
    }
    configureGoLiveSimulcast(e, n) {
        this.videoQualityManager.configGoLiveSimulcast(e, n);
    }
    applyQualityConstraints() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        return this.videoQualityManager.applyQualityConstraints(e, n);
    }
    pickProperties(e, n) {
        if (null == n || null == e) return e;
        let r = {};
        for (let i of n) r[i] = e[i];
        return r;
    }
    initializeStreamParameters(e) {
        this.videoStreamParameters = e
            .filter((e) => (e.type === c.Tr.VIDEO || e.type === c.Tr.SCREEN) && 'string' == typeof e.rid)
            .map((e) => {
                var n, r, i, a;
                let o = this.videoQualityManager.getQuality(e.ssrc);
                return {
                    type: e.type,
                    active: e.active,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    maxBitrate: (null !== (a = e.quality) && void 0 !== a ? a : 100) < 100 ? o.bitrateMax / 4 : o.bitrateMax,
                    maxFrameRate: null === (n = o.capture) || void 0 === n ? void 0 : n.framerate,
                    maxResolution: {
                        type: c.uA.FIXED,
                        width: null === (r = o.capture) || void 0 === r ? void 0 : r.width,
                        height: null === (i = o.capture) || void 0 === i ? void 0 : i.height
                    }
                };
            });
    }
    getLocalWant(e) {
        var n, r;
        let i = this.videoStreamParameters.some((n) => n.ssrc === e && n.quality === c.y7) || void 0 === e,
            a = this.context === c.Yn.DEFAULT || i,
            o = this.remoteVideoSinkWants[null !== (r = null != e ? e : null === (n = this.videoStreamParameters[0]) || void 0 === n ? void 0 : n.ssrc) && void 0 !== r ? r : 0];
        if (null != o && o > 0) return o;
        let s = this.remoteVideoSinkWants.any;
        return null != s && s > 0 && a ? s : a ? 100 : 0;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(l.S.Stats, e), e;
    }
    constructor(e, n) {
        super(), d(this, 'mediaEngineConnectionId', 'WebRTC-'.concat(f++)), d(this, 'context', void 0), d(this, 'userId', void 0), d(this, 'streamUserId', void 0), d(this, 'destroyed', !1), d(this, 'audioSSRC', 0), d(this, 'selfDeaf', !1), d(this, 'selfMute', !1), d(this, 'localMutes', {}), d(this, 'disabledLocalVideos', {}), d(this, 'localVolumes', {}), d(this, 'isActiveOutputSinksEnabled', !1), d(this, 'activeOutputSinks', new Map()), d(this, 'videoSupported', !1), d(this, 'useElectronVideo', !1), d(this, 'voiceBitrate', c.dX), d(this, 'remoteSinkWantsMaxFramerate', c.Gs), d(this, 'videoQualityManager', void 0), d(this, 'wantsPriority', new Set()), d(this, 'localSpeakingFlags', {}), d(this, 'videoReady', !1), d(this, 'videoStreamParameters', []), d(this, 'remoteVideoSinkWants', { any: 100 }), d(this, 'localVideoSinkWants', { any: 100 }), d(this, 'connectionState', c.$j.CONNECTING), d(this, 'stats', void 0), d(this, 'onDesktopEncodingOptionsSet', (e, n, r) => {}), d(this, 'experimentFlags', new Set()), d(this, 'framerateReducer', void 0), (this.context = e), (this.userId = n), (this.videoQualityManager = new u.iY(e, this));
        let i = r(988746).Z;
        this.framerateReducer = new i(this, this.videoQualityManager);
    }
}
