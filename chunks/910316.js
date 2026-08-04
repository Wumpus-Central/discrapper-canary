t.d(e, { W: () => g });
var r = t(477900),
    n = t(582128),
    s = t(284009),
    l = t.n(s),
    i = t(935462),
    c = t(834730),
    o = t(821609),
    d = t(77468),
    m = t(235986),
    x = t(626584),
    u = t(887909),
    N = t(936525),
    h = t(375708),
    p = t(952052);
let j = new x.A("TwoWayLinkDiscordConsentWeb");
function g(a) {
    let {
            platformType: e,
            clientId: t,
            scopes: s,
            authToken: x,
            onContinue: g,
            onError: C,
            onClose: b,
            redirectUri: v,
        } = a,
        [E, k] = n.useState(!1),
        A = n.useCallback(
            async (a) => {
                let t,
                    r,
                    { location: n } = a,
                    { callbackCode: s, callbackState: l } = x;
                try {
                    t = await d.A.completeTwoWayLink(e, n, s, l);
                } catch (a) {
                    j.error(`${e} link error:`, a), (r = a.body?.code);
                }
                null != t ? g() : C(r);
            },
            [e, x, g, C],
        ),
        {
            header: f,
            body: w,
            appDetails: D,
            sendAuthorize: L,
        } = (0, u.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: s,
            responseType: "code",
            callback: A,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v,
            isTwoWayLinkDiscordConsent: !0,
        }),
        R = n.useCallback(() => {
            l()(null != L, "sendAuthorize not available"), k(!0), L(!0);
        }, [L]);
    return (0, r.jsxs)(N.A, {
        children: [
            (0, r.jsxs)(i.rQ, {
                "data-migration-pending": !0,
                direction: m.A.Direction.VERTICAL,
                className: p.wx,
                separator: !1,
                children: [
                    (0, r.jsx)(c.E, {
                        className: p.u1,
                        variant: "text-xs/bold",
                        color: "text-default",
                        children: h.intl.format(h.t.fHz6eR, { number: 2, total: 2 }),
                    }),
                    null != b && (0, r.jsx)(i.s_, { "data-migration-pending": !0, className: p.b, onClick: b }),
                ],
            }),
            (0, r.jsxs)(i.$m, {
                "data-migration-pending": !0,
                className: p.mB,
                scrollbarGutter: !1,
                children: [(0, r.jsx)("div", { className: p.a8, children: f }), w, D],
            }),
            (0, r.jsx)(i.jl, {
                "data-migration-pending": !0,
                className: p.qr,
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: p.wC,
                    children: (0, r.jsx)(o.$, {
                        variant: "primary",
                        text: h.intl.string(h.t.ZN4hkc),
                        loading: E,
                        onClick: R,
                    }),
                }),
            }),
        ],
    });
}
