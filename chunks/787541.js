"use strict";
n.d(t, { WU: () => r, X8: () => o, jD: () => a, n7: () => u });
var l = n(636537),
    i = n(228366),
    s = n(652215);
function r(e, t) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
}
function a(e) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
}
function o(e) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
        l.Bo.put({ url: s.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 });
}
function u() {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
        l.Bo.post({ url: s.Rsh.TUTORIAL_INDICATORS_SUPPRESS, oldFormErrors: !0, rejectWithError: !0 });
}
