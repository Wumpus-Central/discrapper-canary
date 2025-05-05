a.d(t, { k: () => c }), a(388685);
var r = a(73800),
    l = a(110924),
    s = a(626135),
    n = a(798930),
    o = a(981631);
function c(e, t) {
    let [a, c] = r.useState(n.O.LANDING),
        i = (0, l.Z)(a),
        [d, x] = r.useState(null),
        [u, h] = r.useState(null),
        [m, N] = r.useState(void 0),
        C = r.useCallback(() => {
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
        j = r.useCallback((e) => {
            x(null), N(e), c(n.O.ERROR);
        }, []),
        k = r.useCallback((e) => {
            x(e), c(n.O.PRE_CONNECT_WAITING);
        }, []),
        v = r.useCallback((e) => {
            x(null), h(e), c(n.O.DISCORD_CONSENT);
        }, []);
    return (
        r.useEffect(() => {
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
