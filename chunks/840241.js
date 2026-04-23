t.d(n, { default: () => O });
var i = t(627968),
    o = t(64700),
    r = t(935462),
    s = t(430690),
    l = t(71448),
    a = t(693576),
    c = t(652215),
    d = t(539170);
function C(e) {
    let { authToken: n, onContinue: t, onError: o, onClose: r } = e;
    return (0, i.jsx)(a.W, {
        platformType: c.fg2.CRUNCHYROLL,
        clientId: d.ex,
        scopes: d._B,
        authToken: n,
        onContinue: t,
        onError: o,
        onClose: r,
    });
}
var _ = t(723054),
    u = t(985018);
function g(e) {
    let { onContinue: n, onClose: t } = e;
    return (0, i.jsx)(_.s, {
        title: u.intl.string(u.t["8YK70c"]),
        body: u.intl.string(u.t.moyYLf),
        onClose: t,
        onContinue: n,
    });
}
var h = t(526181),
    b = t(975571),
    p = t(944995);
function x(e) {
    let { onContinue: n, onClose: t } = e,
        r = b.A.getArticleURL(c.MVz.CRUNCHYROLL_CONNECTION),
        s = o.useMemo(() => [{ label: u.intl.string(u.t["2TXHQd"]), icon: h.U }], []);
    return (0, i.jsx)(p.B, {
        platformType: c.fg2.CRUNCHYROLL,
        headerConnect: u.intl.string(u.t["Da+3NJ"]),
        body: u.intl.string(u.t.MaPpPL),
        learnMoreLink: r,
        onClose: t,
        onContinue: n,
        img: (0, i.jsx)("img", { src: "/assets/bb42d0ee2b7d1545.png", width: 234, height: 152, alt: "" }),
        valueProps: s,
    });
}
var N = t(226377);
function j(e) {
    let {
            isWaitingForConnection: n,
            onWaitingForConnection: t,
            expectedCallbackState: o,
            onAuthToken: r,
            onError: s,
            onClose: l,
        } = e,
        a = n
            ? (0, i.jsx)("img", { src: "/assets/bc91209df760be4e.png", width: "168", height: "124", alt: "" })
            : (0, i.jsx)("img", { src: "/assets/8bd88f3ff4b731d0.png", width: "152", height: "123", alt: "" }),
        C = n ? u.intl.string(u.t.tZ6ze7) : u.intl.string(u.t.siPkNp),
        _ = n ? u.intl.string(u.t.VgWnwP) : u.intl.string(u.t.oS4NEH);
    return (0, i.jsx)(N.b, {
        platformType: c.fg2.CRUNCHYROLL,
        isWaitingForConnection: n,
        onWaitingForConnection: t,
        expectedCallbackState: o,
        onAuthToken: r,
        onError: s,
        onClose: l,
        img: a,
        title: C,
        body: _,
        redirectDestination: d.v7,
    });
}
var f = t(834730),
    m = t(349288),
    v = t(61917),
    L = t(716867);
function R() {
    return (0, i.jsx)("div", {
        className: L.__invalid_getCrunchyrollApp,
        children: (0, i.jsx)("div", {
            className: L.__invalid_getCrunchyrollAppBody,
            children: (0, i.jsx)(f.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: (0, i.jsx)(m.Anchor, {
                    href: b.A.getArticleURL(c.MVz.CRUNCHYROLL_CONNECTION),
                    children: u.intl.string(u.t.hvVgAZ),
                }),
            }),
        }),
    });
}
function E(e) {
    let { onClose: n } = e;
    return (0, i.jsx)(v.b, {
        img: (0, i.jsx)("img", { src: "/assets/f57d187b12fee97a.png", width: "224", height: "104", alt: "" }),
        title: u.intl.string(u.t.Fnvxvk),
        body: u.intl.string(u.t.YwXceg),
        content: (0, i.jsx)(R, {}),
        onClose: n,
    });
}
var T = t(690095),
    k = t(974651);
function O(e) {
    let { transitionState: n, onClose: t, analyticsLocation: o } = e,
        {
            slide: a,
            gotoNext: d,
            gotoError: _,
            handleWaitingForConnection: u,
            handleAuthToken: h,
            expectedCallbackState: b,
            callbackData: p,
        } = (0, l.m)(o, c.fg2.CRUNCHYROLL);
    return (0, i.jsx)(r.EO, {
        "data-migration-pending": !0,
        className: k.yl,
        transitionState: n,
        disableTrack: !0,
        parentComponent: "CrunchyrollLinkModal",
        children: (0, i.jsxs)(s.t, {
            activeSlide: a,
            width: 408,
            children: [
                (0, i.jsx)(s.q, { id: T.N.LANDING, children: (0, i.jsx)(x, { onContinue: d, onClose: t }) }),
                (0, i.jsx)(s.q, {
                    id: T.N.PRE_CONNECT,
                    children: (0, i.jsx)(j, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: u,
                        onAuthToken: h,
                        onError: _,
                        onClose: t,
                    }),
                }),
                (0, i.jsx)(s.q, {
                    id: T.N.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(j, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: b,
                        onAuthToken: h,
                        onError: _,
                        onClose: t,
                    }),
                }),
                (0, i.jsx)(s.q, {
                    id: T.N.DISCORD_CONSENT,
                    children: (0, i.jsx)(C, { authToken: p, onContinue: d, onError: _, onClose: t }),
                }),
                (0, i.jsx)(s.q, { id: T.N.ERROR, children: (0, i.jsx)(g, { onContinue: d, onClose: t }) }),
                (0, i.jsx)(s.q, { id: T.N.SUCCESS, children: (0, i.jsx)(E, { onClose: t }) }),
            ],
        }),
    });
}
