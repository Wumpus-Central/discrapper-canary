"use strict";
n.d(t, { WU: () => s, X8: () => l, jD: () => o, n7: () => u });
var r = n(562465),
    i = n(73153),
    a = n(652215);
function s(e, t) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
}
function o(e) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
}
function l(e) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
        r.Bo.put({ url: a.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 });
}
function u() {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
        r.Bo.post({ url: a.Rsh.TUTORIAL_INDICATORS_SUPPRESS, oldFormErrors: !0, rejectWithError: !0 });
}
