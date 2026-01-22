n.d(t, { a: () => h });
var r,
    i,
    a = n(73153),
    s = n(365971),
    o = n(318093),
    l = n(936674),
    c = n(354382);
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
let d =
        null != (r = window.requestIdleCallback)
            ? r
            : (e) => {
                  let t = Date.now();
                  return setTimeout(() => {
                      e({
                          didTimeout: !1,
                          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
                      });
                  }, 1);
              },
    f = null != (i = window.cancelIdleCallback) ? i : clearTimeout;
function p(e) {
    return null == e ? new c.oS(c.vr, !0) : new c.oS(e.timeRemaining(), e.didTimeout);
}
class _ extends o.f {
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(l.YE.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    var t;
                    if (null == e ? void 0 : e.didTimeout) {
                        this.telemetry.track(l.KQ.FIRED_DUE_TO_MAX_TIMEOUT),
                            this.telemetry.clearTime(l.YE.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._processWorkCallback();
                        return;
                    }
                    if (
                        (this.telemetry.timeEnd(l.YE.TIME_TO_FIRE_IDLE_CALLBACK),
                        (null != (t = null == e ? void 0 : e.timeRemaining()) ? t : c.vr) < c.vr)
                    )
                        this.telemetry.time(l.YE.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(l.YE.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = p(e),
                                        n = null == t ? void 0 : t.timeRemaining();
                                    null != n && this.telemetry.timeTrack(l.YE.DEADLINE_INITIAL_TIME_REMAINING, n),
                                        this._processWorkCallback(t);
                                },
                                { timeout: 200 },
                            );
                    else {
                        this.telemetry.timeEnd(l.YE.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = p(e),
                            n = null == t ? void 0 : t.timeRemaining();
                        null != n && this.telemetry.timeTrack(l.YE.DEADLINE_INITIAL_TIME_REMAINING, n),
                            this._processWorkCallback(t);
                    }
                },
                { timeout: 1000 },
            );
    }
    _scheduleRequestIdleCallback(e, t) {
        (this._flushIdleHandler = d((t) => {
            this._clearIdleCallback(), e(t);
        })),
            (null == t ? void 0 : t.timeout) != null && this._scheduleMaxIdleCallback(t.timeout);
    }
    _scheduleMaxIdleCallback(e) {
        null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler),
            (this._flushIdleMaxTimeoutHandler = setTimeout(() => {
                this._clearIdleCallback(), this._processWorkCallback();
            }, e));
    }
    _clearIdleCallback() {
        null != this._flushIdleHandler && (f(this._flushIdleHandler), (this._flushIdleHandler = null)),
            null != this._flushIdleMaxTimeoutHandler &&
                (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null));
    }
    constructor() {
        super(),
            u(this, "_flushIdleMaxTimeoutHandler", null),
            a.h.subscribe("WINDOW_VISIBILITY_CHANGE", (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, s.Xg)() && this._trackAppBackgrounded(!t);
            });
    }
}
function h() {
    return new _();
}
