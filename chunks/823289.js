n.d(t, { Z: () => d });
var r = n(286379),
    i = n(797614),
    a = n(446276),
    o = n(46140);
function s(e, t, n) {
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
let l = 30000,
    c = 0.1;
class u {
    isEligible() {
        return (0, a.M)(o.dr.QUESTS_BAR);
    }
    clearTimeoutTimer() {
        null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n) {
        Math.random() > c ||
            i.Z.distribution(
                {
                    name: r.V.QUEST_BAR_RENDER_DELAY,
                    tags: ['quest_id:'.concat(e), 'timeout:'.concat(t)]
                },
                n
            );
    }
    startTracking(e) {
        this.isEligible() &&
            (this.clearTracking(),
            (this.startTime = performance.now()),
            (this.questId = e),
            (this.timeoutTimer = setTimeout(() => {
                this.stopTracking(e, !0);
            }, l)));
    }
    stopTracking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.isEligible() || null === this.startTime || this.questId !== e) return;
        let n = t ? l : Math.round(performance.now() - this.startTime);
        (this.clearTracking(), this.sendMetric(e, t, n));
    }
    clearTracking() {
        (this.clearTimeoutTimer(), (this.startTime = null), (this.questId = null));
    }
    constructor() {
        (s(this, 'startTime', null), s(this, 'questId', null), s(this, 'timeoutTimer', null));
    }
}
let d = new u();
