a.d(t, { k: () => o }), a(388685);
var n = a(473749),
    i = a(110924),
    r = a(626135),
    l = a(798930),
    s = a(981631);
function o(e, t) {
    let [a, o] = n.useState(l.O.LANDING),
        c = (0, i.Z)(a),
        [d, u] = n.useState(null),
        [x, m] = n.useState(null),
        [h, p] = n.useState(void 0),
        N = n.useCallback(() => {
            switch (a) {
                case l.O.LANDING:
                    o(l.O.PRE_CONNECT);
                    break;
                case l.O.DISCORD_CONSENT:
                    o(l.O.SUCCESS);
                    break;
                case l.O.ERROR:
                    o(l.O.PRE_CONNECT);
            }
        }, [a]),
        g = n.useCallback((e) => {
            u(null), p(e), o(l.O.ERROR);
        }, []),
        C = n.useCallback((e) => {
            u(e), o(l.O.PRE_CONNECT_WAITING);
        }, []),
        j = n.useCallback((e) => {
            u(null), m(e), o(l.O.DISCORD_CONSENT);
        }, []);
    return (
        n.useEffect(() => {
            a !== c &&
                r.default.track(s.rMx.ACCOUNT_LINK_STEP, {
                    location_stack: e,
                    previous_step: c,
                    current_step: a,
                    platform_type: t,
                });
        }, [a, c, e, t]),
        {
            slide: a,
            gotoNext: N,
            gotoError: g,
            handleWaitingForConnection: C,
            handleAuthToken: j,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: h,
        }
    );
}
