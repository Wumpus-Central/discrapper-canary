r.d(a, { k: () => c }), r(47120);
var s = r(192379),
    t = r(110924),
    l = r(626135),
    n = r(798930),
    o = r(981631);
function c(e, a) {
    let [r, c] = s.useState(n.O.LANDING),
        i = (0, t.Z)(r),
        [d, x] = s.useState(null),
        [u, h] = s.useState(null),
        [N, m] = s.useState(void 0),
        C = s.useCallback(() => {
            switch (r) {
                case n.O.LANDING:
                    c(n.O.PRE_CONNECT);
                    break;
                case n.O.DISCORD_CONSENT:
                    c(n.O.SUCCESS);
                    break;
                case n.O.ERROR:
                    c(n.O.PRE_CONNECT);
            }
        }, [r]),
        j = s.useCallback((e) => {
            x(null), m(e), c(n.O.ERROR);
        }, []),
        k = s.useCallback((e) => {
            x(e), c(n.O.PRE_CONNECT_WAITING);
        }, []),
        v = s.useCallback((e) => {
            x(null), h(e), c(n.O.DISCORD_CONSENT);
        }, []);
    return (
        s.useEffect(() => {
            r !== i &&
                l.default.track(o.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: i,
                    current_step: r,
                    platform_type: a
                });
        }, [r, i, e, a]),
        {
            slide: r,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: k,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: u,
            errorCode: N
        }
    );
}
