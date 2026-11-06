var t = n(477900),
    r = n(582128),
    s = n(284009),
    i = n.n(s),
    l = n(935462),
    c = n(834730),
    o = n(821609),
    d = n(77468),
    m = n(235986),
    u = n(626584),
    N = n(610056),
    x = n(936525),
    h = n(792996),
    p = n(844768);
let j = new u.A("TwoWayLinkDiscordConsentWeb");
n.d(
    e,
    {},
    {
        W: function (a) {
            let {
                    platformType: e,
                    clientId: n,
                    scopes: s,
                    authToken: u,
                    onContinue: C,
                    onError: g,
                    onClose: b,
                    redirectUri: v,
                } = a,
                [E, k] = r.useState(!1),
                f = r.useCallback(
                    async (a) => {
                        let n,
                            t,
                            { location: r } = a,
                            { callbackCode: s, callbackState: i } = u;
                        try {
                            n = await d.A.completeTwoWayLink(e, r, s, i);
                        } catch (a) {
                            (j.error(`${e} link error:`, a), (t = a.body?.code));
                        }
                        null != n ? C() : g(t);
                    },
                    [e, u, C, g],
                ),
                {
                    header: A,
                    body: w,
                    appDetails: _,
                    sendAuthorize: y,
                } = (0, N.A)({
                    clientId: n,
                    scopes: s,
                    responseType: "code",
                    callback: f,
                    isTrustedName: !0,
                    isEmbeddedFlow: !0,
                    redirectUri: v,
                    isTwoWayLinkDiscordConsent: !0,
                }),
                D = r.useCallback(() => {
                    (i()(null != y, "sendAuthorize not available"), k(!0), y(!0));
                }, [y]);
            return (0, t.jsxs)(x.A, {
                children: [
                    (0, t.jsxs)(l.rQ, {
                        "data-migration-pending": !0,
                        direction: m.A.Direction.VERTICAL,
                        className: p.wx,
                        separator: !1,
                        children: [
                            (0, t.jsx)(c.E, {
                                className: p.u1,
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: h.intl.format(h.t.fHz6eR, { number: 2, total: 2 }),
                            }),
                            null != b && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: p.b, onClick: b }),
                        ],
                    }),
                    (0, t.jsxs)(l.$m, {
                        "data-migration-pending": !0,
                        className: p.mB,
                        scrollbarGutter: !1,
                        children: [(0, t.jsx)("div", { className: p.a8, children: A }), w, _],
                    }),
                    (0, t.jsx)(l.jl, {
                        "data-migration-pending": !0,
                        className: p.qr,
                        children: (0, t.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.wC,
                            children: (0, t.jsx)(o.$, {
                                variant: "primary",
                                text: h.intl.string(h.t.ZN4hkc),
                                loading: E,
                                onClick: D,
                            }),
                        }),
                    }),
                ],
            });
        },
    },
);
