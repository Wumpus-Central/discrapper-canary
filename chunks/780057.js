"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let a = !1;
function s() {
    a = !1;
}
function o() {
    a = !0;
}
function l() {
    a = !1;
}
class u extends r.Ay.Store {
    static displayName = "ThreadSummaryStore";
    summaryInProgress = !1;
    initialize() {
        s();
    }
    isInProgress() {
        return a;
    }
}
let c = new u(i.h, { SUMMARIZE_THREAD_START: o, SUMMARIZE_THREAD_SUCCESS: l, SUMMARIZE_THREAD_FAILURE: l });
