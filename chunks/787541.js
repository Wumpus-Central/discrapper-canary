var i = n(620632),
    r = n(73153),
    l = n(652215);
n.d(
    t,
    {},
    {
        WU: function (e, t) {
            r.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
        },
        X8: function (e) {
            (r.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
                i.Bo.put({ url: l.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 }));
        },
        jD: function (e) {
            r.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
        },
        n7: function () {
            (r.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
                i.Bo.post({ url: l.Rsh.TUTORIAL_INDICATORS_SUPPRESS, oldFormErrors: !0, rejectWithError: !0 }));
        },
    },
);
