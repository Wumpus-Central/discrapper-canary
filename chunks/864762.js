t.d(a, { k: () => o }), t(388685);
var n = t(473749),
    r = t(110924),
    s = t(626135),
    l = t(798930),
    i = t(981631);
function o(e, a) {
    let [t, o] = n.useState(l.O.LANDING),
        c = (0, r.Z)(t),
        [d, x] = n.useState(null),
        [u, h] = n.useState(null),
        [m, N] = n.useState(void 0),
        C = n.useCallback(() => {
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
        j = n.useCallback((e) => {
            x(null), N(e), o(l.O.ERROR);
        }, []),
        p = n.useCallback((e) => {
            x(e), o(l.O.PRE_CONNECT_WAITING);
        }, []),
        v = n.useCallback((e) => {
            x(null), h(e), o(l.O.DISCORD_CONSENT);
        }, []);
    return (
        n.useEffect(() => {
            t !== c &&
                s.default.track(i.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: c,
                    current_step: t,
                    platform_type: a,
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
            errorCode: m,
        }
    );
}
