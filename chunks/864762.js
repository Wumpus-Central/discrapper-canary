(t.d(a, { k: () => o }), t(388685));
var r = t(73800),
    s = t(110924),
    l = t(626135),
    n = t(798930),
    i = t(981631);
function o(e, a) {
    let [t, o] = r.useState(n.O.LANDING),
        c = (0, s.Z)(t),
        [d, x] = r.useState(null),
        [u, h] = r.useState(null),
        [m, N] = r.useState(void 0),
        C = r.useCallback(() => {
            switch (t) {
                case n.O.LANDING:
                    o(n.O.PRE_CONNECT);
                    break;
                case n.O.DISCORD_CONSENT:
                    o(n.O.SUCCESS);
                    break;
                case n.O.ERROR:
                    o(n.O.PRE_CONNECT);
            }
        }, [t]),
        j = r.useCallback((e) => {
            (x(null), N(e), o(n.O.ERROR));
        }, []),
        p = r.useCallback((e) => {
            (x(e), o(n.O.PRE_CONNECT_WAITING));
        }, []),
        v = r.useCallback((e) => {
            (x(null), h(e), o(n.O.DISCORD_CONSENT));
        }, []);
    return (
        r.useEffect(() => {
            t !== c &&
                l.default.track(i.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: c,
                    current_step: t,
                    platform_type: a
                });
        }, [t, c, e, a]),
        {
            slide: t,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: p,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: u,
            errorCode: m
        }
    );
}
