n.d(t, {
    A: () => f,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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
let o = !1;

function l() {
    o = !1;
}

function c() {
    o = !0;
}

function u() {
    o = !1;
}
class d extends (r = i.Ay.Store) {
    initialize() {
        l();
    }
    isInProgress() {
        return o;
    }
    constructor(...e) {
        super(...e), s(this, "summaryInProgress", !1);
    }
}
s(d, "displayName", "ThreadSummaryStore");
let f = new d(a.h, {
    SUMMARIZE_THREAD_START: c,
    SUMMARIZE_THREAD_SUCCESS: u,
    SUMMARIZE_THREAD_FAILURE: u,
});
