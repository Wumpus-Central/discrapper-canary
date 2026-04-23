"use strict";
n.d(t, { default: () => k });
var s = n(627968),
    o = n(64700),
    r = n(935462),
    i = n(430690),
    a = n(71448),
    l = n(333748),
    c = n(693576),
    d = n(652215),
    p = n(544105);
function _(e) {
    let { authToken: t, onContinue: n, onError: o, onClose: r } = e;
    return (0, s.jsx)(c.W, {
        platformType: d.fg2.XBOX,
        clientId: l.i.XBOX_APPLICATION_ID,
        scopes: p.sS,
        authToken: t,
        onContinue: n,
        onError: o,
        onClose: r,
    });
}
var h = n(723054),
    C = n(985018);
function f(e) {
    let { onContinue: t, onClose: n } = e;
    return (0, s.jsx)(h.s, {
        title: C.intl.string(C.t.INwPCV),
        body: C.intl.string(C.t.GyXRRz),
        onClose: n,
        onContinue: t,
    });
}
var u = n(983851),
    g = n(500060),
    b = n(177953),
    x = n(687966),
    m = n(975571),
    v = n(944995);
function N(e) {
    let { onContinue: t, onClose: n } = e,
        r = m.A.getArticleURL(d.MVz.XBOX_CONNECTION),
        i = C.intl.format(C.t.CIc3IN, { helpdeskArticleUrl: r }),
        a = o.useMemo(
            () => [
                { label: C.intl.string(C.t.ihQXsb), icon: u.H },
                { label: C.intl.string(C.t.Xt1n4P), icon: g.o },
                { label: C.intl.string(C.t.xqVY3p), icon: b.n },
                { label: C.intl.string(C.t.iQsKVW), icon: x._ },
            ],
            [],
        );
    return (0, s.jsx)(v.B, {
        platformType: d.fg2.XBOX,
        headerConnect: C.intl.string(C.t.m8aahn),
        headerReconnect: C.intl.string(C.t.z3rAhq),
        body: i,
        onClose: n,
        onContinue: t,
        img: (0, s.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/87626cb25be78ee682ab4ee85e63b0680a5d90f8a5e6f8d469ffb6889d7959e3.png",
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: a,
    });
}
var j = n(226377);
function I(e) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: o,
            onAuthToken: r,
            onError: i,
            onClose: a,
        } = e,
        l = t
            ? (0, s.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/2cf087a7f12e3d1d09c0c9416169f2b67f08a27a8642aef5635519900f3e904b.png",
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, s.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/abb7826c12c091e08c0ad121b2a6ab48fce6ffd2123f1219b8ef58399908f3ff.png",
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        c = t ? C.intl.string(C.t.EuwcxO) : C.intl.string(C.t["e/z3na"]),
        p = t ? C.intl.string(C.t["1GjS/W"]) : C.intl.string(C.t["7tXu0i"]);
    return (0, s.jsx)(j.b, {
        platformType: d.fg2.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: o,
        onAuthToken: r,
        onError: i,
        onClose: a,
        img: l,
        title: c,
        body: p,
    });
}
var O = n(534514),
    A = n(834730),
    T = n(349288),
    y = n(573648),
    E = n(414121),
    P = n(61917),
    S = n(822379),
    X = n(326513);
function w() {
    return (0, s.jsxs)("div", {
        className: S.rV,
        children: [
            (0, s.jsxs)("div", {
                className: S.bF,
                children: [
                    (0, s.jsxs)(O.D, {
                        className: S.n5,
                        variant: "text-lg/semibold",
                        children: [
                            (0, s.jsx)("div", {
                                className: S.YD,
                                children: (0, s.jsx)("img", { src: y.A.get(d.fg2.XBOX).icon.whiteSVG, alt: "" }),
                            }),
                            C.intl.string(C.t["12Kx2v"]),
                        ],
                    }),
                    (0, s.jsx)(A.E, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: C.intl.string(C.t.M5yEcb),
                    }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(T.Anchor, {
                            href: m.A.getArticleURL(d.MVz.XBOX_CONNECTION),
                            children: C.intl.string(C.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)(E.Ay, { className: S.C9, text: p.EY, size: 90 }),
        ],
    });
}
function L(e) {
    let { onClose: t } = e;
    return (0, s.jsx)(P.b, {
        img: (0, s.jsx)("img", { src: X.A, width: "124", height: "160", alt: "" }),
        title: C.intl.string(C.t["7QsHmh"]),
        body: C.intl.string(C.t.byYNPX),
        content: (0, s.jsx)(w, {}),
        onClose: t,
    });
}
var R = n(690095),
    q = n(974651);
function k(e) {
    let { transitionState: t, onClose: n, analyticsLocation: o } = e,
        {
            slide: l,
            gotoNext: c,
            gotoError: p,
            handleWaitingForConnection: h,
            handleAuthToken: C,
            expectedCallbackState: u,
            callbackData: g,
        } = (0, a.m)(o, d.fg2.XBOX);
    return (0, s.jsx)(r.EO, {
        "data-migration-pending": !0,
        className: q.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, s.jsxs)(i.t, {
            activeSlide: l,
            width: 408,
            children: [
                (0, s.jsx)(i.q, { id: R.N.LANDING, children: (0, s.jsx)(N, { onContinue: c, onClose: n }) }),
                (0, s.jsx)(i.q, {
                    id: R.N.PRE_CONNECT,
                    children: (0, s.jsx)(I, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: C,
                        onError: p,
                        onClose: n,
                    }),
                }),
                (0, s.jsx)(i.q, {
                    id: R.N.PRE_CONNECT_WAITING,
                    children: (0, s.jsx)(I, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: u,
                        onAuthToken: C,
                        onError: p,
                        onClose: n,
                    }),
                }),
                (0, s.jsx)(i.q, {
                    id: R.N.DISCORD_CONSENT,
                    children: (0, s.jsx)(_, { authToken: g, onContinue: c, onError: p, onClose: n }),
                }),
                (0, s.jsx)(i.q, { id: R.N.ERROR, children: (0, s.jsx)(f, { onContinue: c, onClose: n }) }),
                (0, s.jsx)(i.q, { id: R.N.SUCCESS, children: (0, s.jsx)(L, { onClose: n }) }),
            ],
        }),
    });
}
