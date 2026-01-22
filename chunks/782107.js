e.d(n, {
    default: () => f,
});
var o = e(627968);
e(64700);
var i = e(397927),
    a = e(889058),
    s = e(441124),
    d = e(280978),
    r = e(318085),
    c = e(995605),
    l = e(711905),
    b = e(25765),
    p = e(689588);

function f(t) {
    let { transitionState: n, onClose: e, analyticsLocation: f, platformType: A } = t,
        {
            slide: T,
            gotoNext: g,
            gotoError: C,
            handleWaitingForConnection: h,
            handleAuthToken: N,
            expectedCallbackState: _,
            callbackData: u,
            errorCode: I,
        } = (0, a.m)(f, A);
    return (0, o.jsx)(i.EOs, {
        "data-migration-pending": !0,
        className: p.yl,
        transitionState: n,
        disableTrack: !0,
        parentComponent: "PlayStationLinkModal",
        children: (0, o.jsxs)(i.tN_, {
            activeSlide: T,
            width: 408,
            children: [
                (0, o.jsx)(i.q7S, {
                    id: b.N.LANDING,
                    children: (0, o.jsx)(r.g, {
                        platformType: A,
                        onContinue: g,
                        onClose: e,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: b.N.PRE_CONNECT,
                    children: (0, o.jsx)(c.o, {
                        platformType: A,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: N,
                        onError: C,
                        onClose: e,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: b.N.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(c.o, {
                        platformType: A,
                        isWaitingForConnection: !0,
                        expectedCallbackState: _,
                        onAuthToken: N,
                        onError: C,
                        onClose: e,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: b.N.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.V, {
                        platformType: A,
                        authToken: u,
                        onContinue: g,
                        onError: C,
                        onClose: e,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: b.N.ERROR,
                    children: (0, o.jsx)(d.B, {
                        onContinue: g,
                        onClose: e,
                        errorCode: I,
                    }),
                }),
                (0, o.jsx)(i.q7S, {
                    id: b.N.SUCCESS,
                    children: (0, o.jsx)(l.c, {
                        onClose: e,
                    }),
                }),
            ],
        }),
    });
}
