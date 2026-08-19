"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = !1;
function s() {
    a = !1;
}
class l extends i.Ay.Store {
    static displayName = "ThreadSummaryStore";
    summaryInProgress = !1;
    initialize() {
        a = !1;
    }
    isInProgress() {
        return a;
    }
}
let o = new l(r.h, {
    SUMMARIZE_THREAD_START: function () {
        a = !0;
    },
    SUMMARIZE_THREAD_SUCCESS: s,
    SUMMARIZE_THREAD_FAILURE: s,
});
