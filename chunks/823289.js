n.d(t, { Z: () => p });
var r = n(286379),
    i = n(15624),
    a = n(797614),
    o = n(626135),
    s = n(446276),
    l = n(46140),
    c = n(981631);
function u(e, t, n) {
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
let d = 30000,
    f = 0.1;
class _ {
    isEligible() {
        return (0, s.M)(l.dr.QUESTS_BAR);
    }
    clearTimeoutTimer() {
        null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n) {
        Math.random() > f ||
            (a.Z.distribution(
                {
                    name: r.V.QUEST_BAR_RENDER_DELAY,
                    tags: ["quest_id:".concat(e), "timeout:".concat(t)],
                },
                n,
            ),
            o.default.track(c.rMx.QUEST_BAR_RENDER_DELAY, {
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
            }, d)));
    }
    stopTracking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.isEligible() && null !== this.startTime && this.questId === e) {
            if ("focused" === i.Z.getState()) {
                let n = Math.min(t ? d : Math.round(performance.now() - this.startTime), d);
                this.sendMetric(e, t, n);
            }
            this.clearTracking();
        }
    }
    clearTracking() {
        this.clearTimeoutTimer(), (this.startTime = null), (this.questId = null);
    }
    constructor() {
        u(this, "startTime", null), u(this, "questId", null), u(this, "timeoutTimer", null);
    }
}
let p = new _();
