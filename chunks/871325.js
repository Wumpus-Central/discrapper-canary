n.d(t, { default: () => b });
var o = n(627968);
n(64700);
var i = n(397927),
    r = n(71448),
    s = n(158594),
    a = n(336384),
    c = n(656591),
    l = n(900663),
    d = n(554011),
    _ = n(690095),
    p = n(376978);
function b(e) {
    let { transitionState: t, onClose: n, analyticsLocation: b, platformType: C } = e,
        {
            slide: A,
            gotoNext: T,
            gotoError: h,
            handleWaitingForConnection: g,
            handleAuthToken: u,
            expectedCallbackState: N,
            callbackData: f,
            errorCode: I,
        } = (0, r.m)(b, C);
    return (0, o.jsx)(i.EOs, {
        "data-migration-pending": !0,
        className: p.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "PlayStationLinkModal",
        children: (0, o.jsxs)(i.tN_, {
            activeSlide: A,
            width: 408,
            children: [
                (0, o.jsx)(i.q7S, {
                    id: _.N.LANDING,
                    children: (0, o.jsx)(c.g, { platformType: C, onContinue: T, onClose: n }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: _.N.PRE_CONNECT,
                    children: (0, o.jsx)(l.o, {
                        platformType: C,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: g,
                        onAuthToken: u,
                        onError: h,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: _.N.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(l.o, {
                        platformType: C,
                        isWaitingForConnection: !0,
                        expectedCallbackState: N,
                        onAuthToken: u,
                        onError: h,
                        onClose: n,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: _.N.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.V, { platformType: C, authToken: f, onContinue: T, onError: h, onClose: n }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: _.N.ERROR,
                    children: (0, o.jsx)(a.B, { onContinue: T, onClose: n, errorCode: I }),
                }),
                (0, o.jsx)(i.q7S, { id: _.N.SUCCESS, children: (0, o.jsx)(d.c, { onClose: n }) }),
            ],
        }),
    });
}
