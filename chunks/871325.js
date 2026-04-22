n.d(t, { default: () => p });
var o = n(627968);
n(64700);
var i = n(935462),
    r = n(430690),
    s = n(71448),
    a = n(158594),
    l = n(336384),
    c = n(656591),
    d = n(900663),
    _ = n(554011),
    A = n(690095),
    T = n(974651);
function p(e) {
    let { transitionState: t, onClose: n, analyticsLocation: p, platformType: b } = e,
        {
            slide: C,
            gotoNext: I,
            gotoError: N,
            handleWaitingForConnection: h,
            handleAuthToken: g,
            expectedCallbackState: u,
            callbackData: P,
            errorCode: f,
        } = (0, s.m)(p, b);
    return (0, o.jsx)(i.EO, {
        "data-migration-pending": !0,
        className: T.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "PlayStationLinkModal",
        children: (0, o.jsxs)(r.t, {
            activeSlide: C,
            width: 408,
            children: [
                (0, o.jsx)(r.q, {
                    id: A.N.LANDING,
                    children: (0, o.jsx)(c.g, { platformType: b, onContinue: I, onClose: n }),
                }),
                (0, o.jsx)(r.q, {
                    id: A.N.PRE_CONNECT,
                    children: (0, o.jsx)(d.o, {
                        platformType: b,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: g,
                        onError: N,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.q, {
                    id: A.N.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(d.o, {
                        platformType: b,
                        isWaitingForConnection: !0,
                        expectedCallbackState: u,
                        onAuthToken: g,
                        onError: N,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(r.q, {
                    id: A.N.DISCORD_CONSENT,
                    children: (0, o.jsx)(a.V, { platformType: b, authToken: P, onContinue: I, onError: N, onClose: n }),
                }),
                (0, o.jsx)(r.q, {
                    id: A.N.ERROR,
                    children: (0, o.jsx)(l.B, { onContinue: I, onClose: n, errorCode: f }),
                }),
                (0, o.jsx)(r.q, { id: A.N.SUCCESS, children: (0, o.jsx)(_.c, { onClose: n }) }),
            ],
        }),
    });
}
