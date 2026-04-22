"use strict";
n.d(t, { KQ: () => o, Kw: () => E, Wg: () => u, YE: () => l });
var r,
    i,
    s,
    a = n(735438),
    o =
        (((r = {}).LONGER_DISPATCH = "longer_dispatch"),
        (r.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = "exceeded_max_consecutive_flushes"),
        (r.FIRED_DUE_TO_MAX_TIMEOUT = "fired_due_to_max_timeout"),
        (r.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = "skip_idle_callback_due_to_backgrounded"),
        r),
    l =
        (((i = {}).TIME_TO_FIRE_IDLE_CALLBACK = "time_to_fire_idle_callback"),
        (i.TIME_TO_QUEUE_EMPTY = "time_to_flush_all_work"),
        (i.TIME_OVER_DEADLINE = "time_over_deadline"),
        (i.DEADLINE_INITIAL_TIME_REMAINING = "initial_time_of_deadline"),
        i),
    u =
        (((s = {}).COUNT_DISPATCHES_LEFT_AFTER_YIELD = "count_dispatches_left_after_yield"),
        (s.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = "count_flush_before_queue_empty"),
        (s.COUNT_INITIAL_DISPATCHS_LENGTH = "count_initial_dispatches_length"),
        s);
let d = Object.freeze({
        time_to_fire_idle_callback: null,
        time_to_flush_all_work: null,
        time_over_deadline: null,
        initial_time_of_deadline: null,
    }),
    c = Object.freeze({
        time_to_fire_idle_callback: [0, 0],
        time_to_flush_all_work: [0, 0],
        time_over_deadline: [0, 0],
        initial_time_of_deadline: [0, 0],
    }),
    _ = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0],
    }),
    f = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0,
    });
class E {
    _timeTracking = (0, a.cloneDeep)(d);
    _timingStats = (0, a.cloneDeep)(c);
    _measurements = (0, a.cloneDeep)(_);
    _eventCounts = (0, a.cloneDeep)(f);
    _enabled = !1;
    reset() {
        (this._timeTracking = (0, a.cloneDeep)(d)),
            (this._timingStats = (0, a.cloneDeep)(c)),
            (this._measurements = (0, a.cloneDeep)(_)),
            (this._eventCounts = (0, a.cloneDeep)(f));
    }
    clearTime(e) {
        this._timeTracking[e] = null;
    }
    _storeTimeValue(e, t) {
        let [n, r] = this._timingStats[e];
        this._timingStats[e] = [(n * r + t) / (r + 1), r + 1];
    }
    time(e) {
        this._enabled && (this._timeTracking[e] = performance.now());
    }
    timeEnd(e) {
        if (!this._enabled) return;
        let t = this._timeTracking[e];
        if (null == t) return;
        let n = performance.now() - t;
        this._storeTimeValue(e, n), (this._timeTracking[e] = null);
    }
    timeTrack(e, t) {
        this._enabled && this._storeTimeValue(e, t);
    }
    measure(e, t) {
        if (!this._enabled) return;
        let [n, r] = this._measurements[e];
        this._measurements[e] = [(n * r + t) / (r + 1), r + 1];
    }
    track(e) {
        this._enabled && (this._eventCounts[e] += 1);
    }
    toggleTelemetry(e) {
        this._enabled = e;
    }
    get isTelemetryEnabled() {
        return this._enabled;
    }
    generateTelemetry() {
        let e = Object.entries(this._timingStats).reduce((e, t) => {
                let [n, [r]] = t;
                return (e[`avg_${n}`] = `${r.toFixed(2)}ms`), e;
            }, {}),
            t = Object.entries(this._measurements).reduce((e, t) => {
                let [n, [r]] = t;
                return (e[`avg_${n}`] = `${r.toFixed(2)}`), e;
            }, {});
        return {
            ...Object.entries(this._eventCounts).reduce((e, t) => {
                let [n, r] = t;
                return (e[`count_${n}`] = `${r}`), e;
            }, {}),
            ...e,
            ...t,
        };
    }
}
