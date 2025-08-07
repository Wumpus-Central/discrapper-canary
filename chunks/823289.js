n.d(t, { Z: () => _ });
var r = n(286379),
    i = n(797614),
    o = n(626135),
    a = n(446276),
    s = n(46140),
    l = n(981631);
function c(e, t, n) {
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
let u = 30000,
    d = 0.1;
class f {
    isEligible() {
        return (0, a.M)(s.dr.QUESTS_BAR);
    }
    clearTimeoutTimer() {
        null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n) {
        Math.random() > d ||
            (i.Z.distribution(
                {
                    name: r.V.QUEST_BAR_RENDER_DELAY,
                    tags: ["quest_id:".concat(e), "timeout:".concat(t)],
                },
                n,
            ),
            o.default.track(l.rMx.QUEST_BAR_RENDER_DELAY, {
                quest_id: e,
                timeout: t,
                duration: n,
            }));
    }
    startTracking(e) {
        this.isEligible() &&
            (this.clearTracking(),
            (this.startTime = performance.now()),
            (this.questId = e),
            (this.timeoutTimer = setTimeout(() => {
                this.stopTracking(e, !0);
            }, u)));
    }
    stopTracking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.isEligible() || null === this.startTime || this.questId !== e) return;
        let n = t ? u : Math.round(performance.now() - this.startTime);
        this.clearTracking(), this.sendMetric(e, t, n);
    }
    clearTracking() {
        this.clearTimeoutTimer(), (this.startTime = null), (this.questId = null);
    }
    constructor() {
        c(this, "startTime", null), c(this, "questId", null), c(this, "timeoutTimer", null);
    }
}
let _ = new f();
