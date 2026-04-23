"use strict";
n.d(t, { a: () => _ });
var r = n(73153),
    i = n(365971),
    s = n(318093),
    a = n(936674),
    o = n(354382);
let l =
        window.requestIdleCallback ??
        ((e) => {
            let t = Date.now();
            return setTimeout(() => {
                e({ didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) });
            }, 1);
        }),
    u = window.cancelIdleCallback ?? clearTimeout;
function c(e) {
    return null == e ? new o.oS(o.vr, !0) : new o.oS(e.timeRemaining(), e.didTimeout);
}
class d extends s.f {
    _flushIdleMaxTimeoutHandler = null;
    constructor() {
        super(),
            r.h.subscribe("WINDOW_VISIBILITY_CHANGE", (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, i.Xg)() && this._trackAppBackgrounded(!t);
            });
    }
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(a.YE.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    if (e?.didTimeout) {
                        this.telemetry.track(a.KQ.FIRED_DUE_TO_MAX_TIMEOUT),
                            this.telemetry.clearTime(a.YE.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._processWorkCallback();
                        return;
                    }
                    if ((this.telemetry.timeEnd(a.YE.TIME_TO_FIRE_IDLE_CALLBACK), (e?.timeRemaining() ?? o.vr) < o.vr))
                        this.telemetry.time(a.YE.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(a.YE.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = c(e),
                                        n = t?.timeRemaining();
                                    null != n && this.telemetry.timeTrack(a.YE.DEADLINE_INITIAL_TIME_REMAINING, n),
                                        this._processWorkCallback(t);
                                },
                                { timeout: 200 },
                            );
                    else {
                        this.telemetry.timeEnd(a.YE.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = c(e),
                            n = t?.timeRemaining();
                        null != n && this.telemetry.timeTrack(a.YE.DEADLINE_INITIAL_TIME_REMAINING, n),
                            this._processWorkCallback(t);
                    }
                },
                { timeout: 1e3 },
            );
    }
    _scheduleRequestIdleCallback(e, t) {
        (this._flushIdleHandler = l((t) => {
            this._clearIdleCallback(), e(t);
        })),
            t?.timeout != null && this._scheduleMaxIdleCallback(t.timeout);
    }
    _scheduleMaxIdleCallback(e) {
        null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler),
            (this._flushIdleMaxTimeoutHandler = setTimeout(() => {
                this._clearIdleCallback(), this._processWorkCallback();
            }, e));
    }
    _clearIdleCallback() {
        null != this._flushIdleHandler && (u(this._flushIdleHandler), (this._flushIdleHandler = null)),
            null != this._flushIdleMaxTimeoutHandler &&
                (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null));
    }
}
function _() {
    return new d();
}
