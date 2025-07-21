(t.d(a, { k: () => o }), t(388685));
var r = t(73800),
    s = t(110924),
    n = t(626135),
    l = t(798930),
    i = t(981631);
function o(e, a) {
    let [t, o] = r.useState(l.O.LANDING),
        c = (0, s.Z)(t),
        [d, x] = r.useState(null),
        [u, h] = r.useState(null),
        [m, N] = r.useState(void 0),
        C = r.useCallback(() => {
            switch (t) {
                case l.O.LANDING:
                    o(l.O.PRE_CONNECT);
                    break;
                case l.O.DISCORD_CONSENT:
                    o(l.O.SUCCESS);
                    break;
                case l.O.ERROR:
                    o(l.O.PRE_CONNECT);
            }
        }, [t]),
        j = r.useCallback((e) => {
            (x(null), N(e), o(l.O.ERROR));
        }, []),
        p = r.useCallback((e) => {
            (x(e), o(l.O.PRE_CONNECT_WAITING));
        }, []),
        v = r.useCallback((e) => {
            (x(null), h(e), o(l.O.DISCORD_CONSENT));
        }, []);
    return (
        r.useEffect(() => {
            t !== c &&
                n.default.track(i.rMx.ACCOUNT_LINK_STEP, {
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
