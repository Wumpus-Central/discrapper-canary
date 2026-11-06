var t = n(477900),
    r = n(582128),
    s = n(935462),
    i = n(834730),
    l = n(534514),
    c = n(821609),
    o = n(811893),
    d = n(73153),
    m = n(235986),
    u = n(626584),
    N = n(936525),
    x = n(277657),
    h = n(792996),
    p = n(844768);
let j = new u.A("TwoWayLink");
n.d(
    e,
    {},
    {
        b: function (a) {
            let {
                    platformType: e,
                    isWaitingForConnection: n,
                    onWaitingForConnection: u,
                    expectedCallbackState: C,
                    onAuthToken: g,
                    onError: b,
                    onClose: v,
                    img: E,
                    title: k,
                    body: f,
                    redirectDestination: A,
                } = a,
                w = r.useCallback(async () => {
                    let a;
                    try {
                        a = await (0, x.V)(e);
                    } catch (a) {
                        (j.error("Error opening provider authorize page", a), b());
                        return;
                    }
                    u?.(a);
                }, [e, b, u]),
                _ = r.useCallback(
                    (a) => {
                        let { callbackCode: n, callbackState: t } = a;
                        t !== C
                            ? j.warn(`${e} link: received mismatching callback state!`)
                            : g({ callbackCode: n, callbackState: t });
                    },
                    [e, C, g],
                );
            return (
                r.useEffect(
                    () => (
                        d.h.subscribe("USER_CONNECTIONS_LINK_CALLBACK", _),
                        () => {
                            d.h.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", _);
                        }
                    ),
                    [_],
                ),
                (0, t.jsxs)(N.A, {
                    children: [
                        (0, t.jsxs)(s.rQ, {
                            "data-migration-pending": !0,
                            direction: m.A.Direction.VERTICAL,
                            className: p.wx,
                            separator: !1,
                            children: [
                                (0, t.jsx)(i.E, {
                                    className: p.u1,
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    children: h.intl.format(h.t.fHz6eR, { number: 1, total: 2 }),
                                }),
                                (0, t.jsxs)("div", { className: p.bm, children: [E, " "] }),
                                (0, t.jsx)(l.D, { className: p.DD, variant: "heading-xl/semibold", children: k }),
                                null != v &&
                                    (0, t.jsx)(s.s_, { "data-migration-pending": !0, className: p.b, onClick: v }),
                            ],
                        }),
                        (0, t.jsxs)(s.$m, {
                            "data-migration-pending": !0,
                            className: p.rf,
                            scrollbarGutter: !1,
                            children: [
                                (0, t.jsx)(i.E, {
                                    tag: "p",
                                    variant: "body-md/normal",
                                    color: "text-default",
                                    children: f,
                                }),
                                !n &&
                                    null != A &&
                                    (0, t.jsx)(i.E, {
                                        tag: "p",
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        children: h.intl.format(h.t.XhlYYn, { redirectUrl: A }),
                                    }),
                            ],
                        }),
                        (0, t.jsx)(s.jl, {
                            "data-migration-pending": !0,
                            className: p.qr,
                            children: (0, t.jsx)(c.$, {
                                variant: n ? "secondary" : "primary",
                                text: h.intl.format(n ? h.t["8Laby+"] : h.t["6623tt"], {
                                    popoutWindowIcon: {},
                                    popoutWindowIconHook: () =>
                                        (0, t.jsx)(o.WindowLaunchIcon, {
                                            color: "currentColor",
                                            className: p.LE,
                                            size: "xs",
                                        }),
                                }),
                                onClick: w,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                })
            );
        },
    },
);
