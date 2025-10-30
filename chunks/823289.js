n.d(t, { Z: () => f });
var r = n(286379),
    i = n(15624),
    a = n(797614),
    o = n(626135),
    s = n(981631);
function l(e, t, n) {
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
let c = 30000,
    u = 0.1;
class d {
    clearTimeoutTimer() {
        null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    sendMetric(e, t, n) {
        Math.random() > u ||
            (a.Z.distribution(
                {
                    name: r.V.QUEST_BAR_RENDER_DELAY,
                    tags: ["quest_id:".concat(e), "timeout:".concat(t)],
                },
                n,
            ),
            o.default.track(s.rMx.QUEST_BAR_RENDER_DELAY, {
                quest_id: e,
                timeout: t,
                duration: n,
            }));
    }
    startTracking(e) {
        this.clearTracking(),
            (this.startTime = performance.now()),
            (this.questId = e),
            (this.timeoutTimer = setTimeout(() => {
                this.stopTracking(e, !0);
            }, c));
    }
    stopTracking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null !== this.startTime && this.questId === e) {
            if ("focused" === i.Z.getState()) {
                let n = Math.min(t ? c : Math.round(performance.now() - this.startTime), c);
                this.sendMetric(e, t, n);
            }
            this.clearTracking();
        }
    }
    clearTracking() {
        this.clearTimeoutTimer(), (this.startTime = null), (this.questId = null);
    }
    constructor() {
        l(this, "startTime", null), l(this, "questId", null), l(this, "timeoutTimer", null);
    }
}
let f = new d();
