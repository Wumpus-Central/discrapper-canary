i.d(t, { default: () => _ });
var e = i(477900),
    o = i(582128),
    r = i(935462),
    s = i(430690),
    l = i(670404),
    a = i(910316),
    c = i(652215),
    d = i(539170);
function C(n) {
    let { authToken: t, onContinue: i, onError: o, onClose: r } = n;
    return (0, e.jsx)(a.W, {
        platformType: c.fg2.CRUNCHYROLL,
        clientId: d.ex,
        scopes: d._B,
        authToken: t,
        onContinue: i,
        onError: o,
        onClose: r,
    });
}
var g = i(478474),
    h = i(792996);
function u(n) {
    let { onContinue: t, onClose: i } = n;
    return (0, e.jsx)(g.s, {
        title: h.intl.string(h.t["8YK70c"]),
        body: h.intl.string(h.t.moyYLf),
        onClose: i,
        onContinue: t,
    });
}
var x = i(748562),
    N = i(975571),
    p = i(458172);
function j(n) {
    let { onContinue: t, onClose: i } = n,
        r = N.A.getArticleURL(c.MVz.CRUNCHYROLL_CONNECTION),
        s = o.useMemo(() => [{ label: h.intl.string(h.t["2TXHQd"]), icon: x.TvIcon }], []);
    return (0, e.jsx)(p.B, {
        platformType: c.fg2.CRUNCHYROLL,
        headerConnect: h.intl.string(h.t["Da+3NJ"]),
        body: h.intl.string(h.t.MaPpPL),
        learnMoreLink: r,
        onClose: i,
        onContinue: t,
        img: (0, e.jsx)("img", { src: "/assets/bb42d0ee2b7d1545.png", width: 234, height: 152, alt: "" }),
        valueProps: s,
    });
}
var f = i(873885);
function b(n) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: i,
            expectedCallbackState: o,
            onAuthToken: r,
            onError: s,
            onClose: l,
        } = n,
        a = t
            ? (0, e.jsx)("img", { src: "/assets/bc91209df760be4e.png", width: "168", height: "124", alt: "" })
            : (0, e.jsx)("img", { src: "/assets/8bd88f3ff4b731d0.png", width: "152", height: "123", alt: "" }),
        C = t ? h.intl.string(h.t.tZ6ze7) : h.intl.string(h.t.siPkNp),
        g = t ? h.intl.string(h.t.VgWnwP) : h.intl.string(h.t.oS4NEH);
    return (0, e.jsx)(f.b, {
        platformType: c.fg2.CRUNCHYROLL,
        isWaitingForConnection: t,
        onWaitingForConnection: i,
        expectedCallbackState: o,
        onAuthToken: r,
        onError: s,
        onClose: l,
        img: a,
        title: C,
        body: g,
        redirectDestination: d.v7,
    });
}
var m = i(834730),
    R = i(28863),
    L = i(162185),
    v = i(804522);
function E() {
    return (0, e.jsx)("div", {
        className: v.__invalid_getCrunchyrollApp,
        children: (0, e.jsx)("div", {
            className: v.__invalid_getCrunchyrollAppBody,
            children: (0, e.jsx)(m.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: (0, e.jsx)(R.Anchor, {
                    href: N.A.getArticleURL(c.MVz.CRUNCHYROLL_CONNECTION),
                    children: h.intl.string(h.t.hvVgAZ),
                }),
            }),
        }),
    });
}
function T(n) {
    let { onClose: t } = n;
    return (0, e.jsx)(L.b, {
        img: (0, e.jsx)("img", { src: "/assets/f57d187b12fee97a.png", width: "224", height: "104", alt: "" }),
        title: h.intl.string(h.t.Fnvxvk),
        body: h.intl.string(h.t.YwXceg),
        content: (0, e.jsx)(E, {}),
        onClose: t,
    });
}
var k = i(52643),
    O = i(844768);
function _(n) {
    let { transitionState: t, onClose: i, analyticsLocation: o } = n,
        {
            slide: a,
            gotoNext: d,
            gotoError: g,
            handleWaitingForConnection: h,
            handleAuthToken: x,
            expectedCallbackState: N,
            callbackData: p,
        } = (0, l.m)(o, c.fg2.CRUNCHYROLL);
    return (0, e.jsx)(r.EO, {
        "data-migration-pending": !0,
        className: O.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, e.jsxs)(s.t, {
            activeSlide: a,
            width: 408,
            children: [
                (0, e.jsx)(s.q, { id: k.N.LANDING, children: (0, e.jsx)(j, { onContinue: d, onClose: i }) }),
                (0, e.jsx)(s.q, {
                    id: k.N.PRE_CONNECT,
                    children: (0, e.jsx)(b, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: h,
                        onAuthToken: x,
                        onError: g,
                        onClose: i,
                    }),
                }),
                (0, e.jsx)(s.q, {
                    id: k.N.PRE_CONNECT_WAITING,
                    children: (0, e.jsx)(b, {
                        isWaitingForConnection: !0,
                        onWaitingForConnection: h,
                        expectedCallbackState: N,
                        onAuthToken: x,
                        onError: g,
                        onClose: i,
                    }),
                }),
                (0, e.jsx)(s.q, {
                    id: k.N.DISCORD_CONSENT,
                    children: (0, e.jsx)(C, { authToken: p, onContinue: d, onError: g, onClose: i }),
                }),
                (0, e.jsx)(s.q, { id: k.N.ERROR, children: (0, e.jsx)(u, { onContinue: d, onClose: i }) }),
                (0, e.jsx)(s.q, { id: k.N.SUCCESS, children: (0, e.jsx)(T, { onClose: i }) }),
            ],
        }),
    });
}
