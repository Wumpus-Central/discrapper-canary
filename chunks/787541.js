var i = n(620632),
    l = n(73153),
    r = n(652215);
n.d(
    t,
    {},
    {
        WU: function (e, t) {
            l.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
        },
        X8: function (e) {
            (l.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
                i.Bo.put({ url: r.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 }));
        },
        jD: function (e) {
            l.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
        },
        n7: function () {
            (l.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
                i.Bo.post({ url: r.Rsh.TUTORIAL_INDICATORS_SUPPRESS, oldFormErrors: !0, rejectWithError: !0 }));
        },
    },
);
