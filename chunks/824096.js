r.d(n, {
    y: function () {
        return m;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(259443),
    s = r(379649),
    l = r(147063),
    u = r(70956),
    c = r(981631);
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
let f = 16,
    p = 600,
    h = 900,
    _ = !1;
class m {
    calculateFps(e, n, r) {
        if (-1 === this.prevFramesCodec[e] || n < this.prevFramesCodec[e] || r < this.prevTimestamp[e] || r > this.prevTimestamp[e] + 1000 * this.windowLength) return (this.prevFramesCodec[e] = n), (this.prevTimestamp[e] = r), (this.perUserFpsWindow[e] = []), NaN;
        if (r < this.prevTimestamp[e] + h) return NaN;
        let i = this.elapsedSeconds(r, this.prevTimestamp[e]);
        this.prevTimestamp[e] = r;
        let a = (n - this.prevFramesCodec[e]) / i;
        return (this.prevFramesCodec[e] = n), a;
    }
    updateFps(e, n, r) {
        if (!this.disabled) {
            if (!this.streamDisabledUsers.has(e)) {
                let i = this.calculateFps(e, n, r);
                if ((_ && this.logger.info('frames='.concat(n, ', timestamp=').concat(r, ' fps=').concat(i)), i < 0 || !Number.isFinite(i))) return;
                if ((this.perUserFpsWindow[e].push(i), this.perUserFpsWindow[e].length < this.windowLength)) return;
                this.perUserFpsWindow[e].length > this.windowLength && this.perUserFpsWindow[e].shift(), this.perUserFpsWindow[e].filter((e) => e < this.fpsThreshold).length >= this.fpsWindowBorderlineCount ? (this.logger.info(''.concat(e, ': detected poor network quality, turning off video')), this.streamDisabledUsers.add(e), (this.currentVideoAutoToggleState[e] = c.ZUi.DISABLED), (0, l.Z)(e, c.ZUi.DISABLED), this.startReenableBackoffTimer(e)) : this.currentVideoAutoToggleState[e] === c.ZUi.AUTO_PROBING && ((this.currentVideoAutoToggleState[e] = c.ZUi.AUTO_ENABLED), this.logger.info('acceptable conditions reached, will reset and send a AUTO_ENABLED for user '.concat(e)), (0, l.Z)(e, c.ZUi.AUTO_ENABLED)), this.probingUserId === e && ((this.probingUserId = void 0), this.tryReenableQueue());
            }
        }
    }
    startReenableBackoffTimer(e) {
        if (this.disabled) return;
        this.logger.info('startReenableBackoffTimer for user '.concat(e));
        let { lastBackoffTime: n, expBackoffFactor: r } = this.retryBackoffCache[e];
        null === n || r > f || this.elapsedSeconds((0, s.zO)(), n) > p ? (r = 1) : (r *= 2),
            (this.retryBackoffCache[e] = {
                lastBackoffTime: (0, s.zO)(),
                expBackoffFactor: r
            });
        let i = r * this.backoffTimeSec * u.Z.Millis.SECOND;
        this.logger.info('starting backoff timer with time = '.concat(i, ' milliseconds')),
            (this.timeoutIdCache[e] = setTimeout(() => {
                this.queueReenable(e);
            }, i));
    }
    queueReenable(e) {
        this.enableQueue.push(e), this.tryReenableQueue();
    }
    tryReenableQueue() {
        if (!this.disabled && (null == this.probingUserId || !(this.probingUserId in this.perUserFpsWindow))) for (let e = this.enableQueue.shift(); null != e && !this.reenableVideo(e); );
    }
    reenableVideo(e) {
        return e in this.perUserFpsWindow && (this.logger.info('reenableVideo called for user '.concat(e, ' - time = ').concat((0, s.zO)())), this.stateCleanupBeforeEnable(e), (this.currentVideoAutoToggleState[e] = c.ZUi.AUTO_PROBING), (this.probingUserId = e), (0, l.Z)(e, c.ZUi.AUTO_PROBING), !0);
    }
    elapsedSeconds(e, n) {
        return (e - n) / 1000;
    }
    stateCleanupBeforeEnable(e) {
        this.logger.info('VideoHealthManager::stateCleanupBeforeEnable'), (this.perUserFpsWindow[e] = []), (this.prevFramesCodec[e] = -1), this.streamDisabledUsers.delete(e);
    }
    getCurrentVideoToggleState(e) {
        return this.currentVideoAutoToggleState[e];
    }
    createUser(e) {
        this.logger.info('VideoHealthManager::createUser '.concat(e)),
            !(e in this.perUserFpsWindow) &&
                ((this.perUserFpsWindow[e] = []),
                (this.prevFramesCodec[e] = -1),
                (this.currentVideoAutoToggleState[e] = c.ZUi.NONE),
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
    constructor(e, n, r, i) {
        d(this, 'logger', new o.Yd('VideoHealthManager')), d(this, 'windowLength', void 0), d(this, 'fpsThreshold', void 0), d(this, 'fpsWindowBorderlineCount', void 0), d(this, 'backoffTimeSec', void 0), d(this, 'disabled', !1), d(this, 'perUserFpsWindow', {}), d(this, 'prevFramesCodec', {}), d(this, 'prevTimestamp', {}), d(this, 'streamDisabledUsers', new Set()), d(this, 'retryBackoffCache', {}), d(this, 'timeoutIdCache', {}), d(this, 'currentVideoAutoToggleState', {}), d(this, 'probingUserId', void 0), d(this, 'enableQueue', []), (this.windowLength = e), (this.fpsThreshold = r), (this.fpsWindowBorderlineCount = Math.ceil(e * n)), (this.backoffTimeSec = i), this.logger.info('constructor with windowLength = '.concat(this.windowLength, ',\n      fpsWindowBorderlineCount = ').concat(this.fpsWindowBorderlineCount, ',\n      fpsThreshold = ').concat(this.fpsThreshold, ',\n      backoffTimeSec = ').concat(i));
    }
}
