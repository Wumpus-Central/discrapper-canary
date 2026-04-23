"use strict";
n.d(t, { WU: () => a, X8: () => l, jD: () => o, n7: () => d });
var i = n(636537),
    r = n(228366),
    s = n(652215);
function a(e, t) {
    r.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
}
function o(e) {
    r.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
}
function l(e) {
    r.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
        i.Bo.put({ url: s.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 });
}
function d() {
    r.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
        i.Bo.post({ url: s.Rsh.TUTORIAL_INDICATORS_SUPPRESS, oldFormErrors: !0, rejectWithError: !0 });
}
