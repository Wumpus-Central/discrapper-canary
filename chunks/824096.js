n.d(t, { y: () => p }), n(539854), n(388685);
var r = n(259443),
    i = n(873546),
    o = n(379649),
    a = n(147063),
    s = n(70956),
    l = n(981631);
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
let u = 16,
    d = 600,
    f = 900,
    _ = !1;
class p {
    calculateFps(e, t, n) {
        if (-1 === this.prevFramesCodec[e] || t < this.prevFramesCodec[e] || n < this.prevTimestamp[e] || n > this.prevTimestamp[e] + 1000 * this.windowLength) return (this.prevFramesCodec[e] = t), (this.prevTimestamp[e] = n), (this.perUserFpsWindow[e] = []), NaN;
        if (n < this.prevTimestamp[e] + f) return NaN;
        let r = this.elapsedSeconds(n, this.prevTimestamp[e]);
        this.prevTimestamp[e] = n;
        let i = (t - this.prevFramesCodec[e]) / r;
        return (this.prevFramesCodec[e] = t), i;
    }
    updateFps(e, t, n) {
        if (!this.disabled && !this.streamDisabledUsers.has(e)) {
            let r = this.calculateFps(e, t, n);
            if ((_ && this.logger.info('frames='.concat(t, ', timestamp=').concat(n, ' fps=').concat(r)), !(r < 0) && Number.isFinite(r))) this.perUserFpsWindow[e].push(r), this.perUserFpsWindow[e].length < this.windowLength || (this.perUserFpsWindow[e].length > this.windowLength && this.perUserFpsWindow[e].shift(), this.perUserFpsWindow[e].filter((e) => e < this.fpsThreshold).length >= this.fpsWindowBorderlineCount ? (this.logger.info(''.concat(e, ': detected poor network quality, turning off video')), this.streamDisabledUsers.add(e), (this.currentVideoAutoToggleState[e] = l.ZUi.DISABLED), (0, a.Z)(e, l.ZUi.DISABLED), this.startReenableBackoffTimer(e)) : this.currentVideoAutoToggleState[e] === l.ZUi.AUTO_PROBING && ((this.currentVideoAutoToggleState[e] = l.ZUi.AUTO_ENABLED), this.logger.info('acceptable conditions reached, will reset and send a AUTO_ENABLED for user '.concat(e)), (0, a.Z)(e, l.ZUi.AUTO_ENABLED)), this.probingUserId === e && ((this.probingUserId = void 0), this.tryReenableQueue()));
        }
    }
    startReenableBackoffTimer(e) {
        if (this.disabled) return;
        this.logger.info('startReenableBackoffTimer for user '.concat(e));
        let { lastBackoffTime: t, expBackoffFactor: n } = this.retryBackoffCache[e];
        null === t || n > u || this.elapsedSeconds((0, o.zO)(), t) > d ? (n = 1) : (n *= 2),
            (this.retryBackoffCache[e] = {
                lastBackoffTime: (0, o.zO)(),
                expBackoffFactor: n
            });
        let r = n * this.backoffTimeSec * s.Z.Millis.SECOND;
        this.logger.info('starting backoff timer with time = '.concat(r, ' milliseconds')),
            (this.timeoutIdCache[e] = setTimeout(() => {
                this.queueReenable(e);
            }, r));
    }
    queueReenable(e) {
        this.enableQueue.push(e), this.tryReenableQueue();
    }
    tryReenableQueue() {
        if (!this.disabled && (null == this.probingUserId || !(this.probingUserId in this.perUserFpsWindow))) for (let e = this.enableQueue.shift(); null != e && !this.reenableVideo(e); );
    }
    reenableVideo(e) {
        return e in this.perUserFpsWindow && (this.logger.info('reenableVideo called for user '.concat(e, ' - time = ').concat((0, o.zO)())), this.stateCleanupBeforeEnable(e), (this.currentVideoAutoToggleState[e] = l.ZUi.AUTO_PROBING), (this.probingUserId = e), (0, a.Z)(e, l.ZUi.AUTO_PROBING), !0);
    }
    elapsedSeconds(e, t) {
        return (e - t) / 1000;
    }
    stateCleanupBeforeEnable(e) {
        this.logger.info('VideoHealthManager::stateCleanupBeforeEnable'), (this.perUserFpsWindow[e] = []), (this.prevFramesCodec[e] = -1), this.streamDisabledUsers.delete(e);
    }
    getCurrentVideoToggleState(e) {
        return this.currentVideoAutoToggleState[e];
    }
    createUser(e) {
        this.logger.info('VideoHealthManager::createUser '.concat(e)),
            e in this.perUserFpsWindow ||
                ((this.perUserFpsWindow[e] = []),
                (this.prevFramesCodec[e] = -1),
                (this.currentVideoAutoToggleState[e] = l.ZUi.NONE),
                (this.retryBackoffCache[e] = {
                    lastBackoffTime: null,
                    expBackoffFactor: 1
                }));
    }
    deleteUser(e) {
        this.logger.info('VideoHealthManager::deleteUser '.concat(e)), delete this.perUserFpsWindow[e], delete this.prevFramesCodec[e], delete this.retryBackoffCache[e], delete this.currentVideoAutoToggleState[e], this.streamDisabledUsers.delete(e), e === this.probingUserId && ((this.probingUserId = void 0), this.tryReenableQueue()), clearTimeout(this.timeoutIdCache[e]), delete this.timeoutIdCache[e];
    }
    disable() {
        for (let e in ((this.disabled = !0), this.perUserFpsWindow)) this.deleteUser(e);
    }
    constructor(e, t, n, i) {
        c(this, 'logger', new r.Yd('VideoHealthManager')), c(this, 'windowLength', void 0), c(this, 'fpsThreshold', void 0), c(this, 'fpsWindowBorderlineCount', void 0), c(this, 'backoffTimeSec', void 0), c(this, 'disabled', !1), c(this, 'perUserFpsWindow', {}), c(this, 'prevFramesCodec', {}), c(this, 'prevTimestamp', {}), c(this, 'streamDisabledUsers', new Set()), c(this, 'retryBackoffCache', {}), c(this, 'timeoutIdCache', {}), c(this, 'currentVideoAutoToggleState', {}), c(this, 'probingUserId', void 0), c(this, 'enableQueue', []), (this.windowLength = e), (this.fpsThreshold = n), (this.fpsWindowBorderlineCount = Math.ceil(e * t)), (this.backoffTimeSec = i), this.logger.info('constructor with windowLength = '.concat(this.windowLength, ',\n      fpsWindowBorderlineCount = ').concat(this.fpsWindowBorderlineCount, ',\n      fpsThreshold = ').concat(this.fpsThreshold, ',\n      backoffTimeSec = ').concat(i));
    }
}
c(p, 'defaultConfig', {
    featureEnabled: i.tq,
    windowLength: 5,
    allowedPoorFpsRatio: 1,
    fpsThreshold: 5,
    backoffTimeSec: 15
});
