a.d(t, { k: () => c }), a(388685);
var l = a(73800),
    r = a(110924),
    s = a(626135),
    n = a(798930),
    o = a(981631);
function c(e, t) {
    let [a, c] = l.useState(n.O.LANDING),
        i = (0, r.Z)(a),
        [d, x] = l.useState(null),
        [u, h] = l.useState(null),
        [m, N] = l.useState(void 0),
        C = l.useCallback(() => {
            switch (a) {
                case n.O.LANDING:
                    c(n.O.PRE_CONNECT);
                    break;
                case n.O.DISCORD_CONSENT:
                    c(n.O.SUCCESS);
                    break;
                case n.O.ERROR:
                    c(n.O.PRE_CONNECT);
            }
        }, [a]),
        j = l.useCallback((e) => {
            x(null), N(e), c(n.O.ERROR);
        }, []),
        k = l.useCallback((e) => {
            x(e), c(n.O.PRE_CONNECT_WAITING);
        }, []),
        v = l.useCallback((e) => {
            x(null), h(e), c(n.O.DISCORD_CONSENT);
        }, []);
    return (
        l.useEffect(() => {
            a !== i &&
                s.default.track(o.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: i,
                    current_step: a,
                    platform_type: t
                });
        }, [a, i, e, t]),
        {
            slide: a,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: k,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: u,
            errorCode: m
        }
    );
}
