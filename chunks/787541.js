n.d(t, { WU: () => s, X8: () => o, jD: () => a, n7: () => u });
var i = n(636537),
    l = n(73153),
    r = n(652215);
function s(e, t) {
    l.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
}
function a(e) {
    l.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
}
function o(e) {
    (l.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
        i.Bo.put({ url: r.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 }));
}
function u() {
    (l.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
        i.Bo.post({ url: r.Rsh.TUTORIAL_INDICATORS_SUPPRESS, oldFormErrors: !0, rejectWithError: !0 }));
}
