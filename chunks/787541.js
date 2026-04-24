"use strict";
n.d(t, { WU: () => a, X8: () => o, jD: () => r, n7: () => c });
var l = n(636537),
    i = n(228366),
    s = n(652215);
function a(e, t) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
}
function r(e) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
}
function o(e) {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
        l.Bo.put({ url: s.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 });
}
function c() {
    i.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
        l.Bo.post({ url: s.Rsh.TUTORIAL_INDICATORS_SUPPRESS, oldFormErrors: !0, rejectWithError: !0 });
}
