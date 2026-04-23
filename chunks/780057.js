"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = !1;
function a() {
    s = !1;
}
class o extends i.Ay.Store {
    static displayName = "ThreadSummaryStore";
    summaryInProgress = !1;
    initialize() {
        s = !1;
    }
    isInProgress() {
        return s;
    }
}
let l = new o(r.h, {
    SUMMARIZE_THREAD_START: function () {
        s = !0;
    },
    SUMMARIZE_THREAD_SUCCESS: a,
    SUMMARIZE_THREAD_FAILURE: a,
});
