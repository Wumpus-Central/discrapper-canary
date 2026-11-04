var n = t(477900),
    r = t(582128),
    s = t(284009),
    i = t.n(s),
    l = t(13202),
    c = t(935462),
    o = t(834730),
    d = t(534514),
    m = t(821609),
    u = t(811893),
    x = t(73153),
    N = t(370480),
    h = t(738104),
    p = t(235986),
    j = t(626584),
    b = t(936525),
    g = t(792996),
    C = t(844768);
let v = new j.A("TwoWayLink");
t.d(
    e,
    {},
    {
        b: function (a) {
            let {
                    platformType: e,
                    isWaitingForConnection: t,
                    onWaitingForConnection: s,
                    expectedCallbackState: j,
                    onAuthToken: E,
                    onError: k,
                    onClose: f,
                    img: A,
                    title: w,
                    body: y,
                    redirectDestination: D,
                } = a,
                L = r.useCallback(async () => {
                    let a;
                    try {
                        if (((a = await (0, h.d)(e, { twoWayLinkType: l.I.DESKTOP })), null == a))
                            throw Error("missing authorizeURL");
                    } catch (a) {
                        (v.error("Error opening provider authorize page", a), k());
                        return;
                    }
                    let { state: t } = (0, N.vA)(a);
                    (i()(null != t, "Authorize URL state query parameter must be present"), s?.(t));
                }, [e, k, s]),
                R = r.useCallback(
                    (a) => {
                        let { callbackCode: t, callbackState: n } = a;
                        n !== j
                            ? v.warn(`${e} link: received mismatching callback state!`)
                            : E({ callbackCode: t, callbackState: n });
                    },
                    [e, j, E],
                );
            return (
                r.useEffect(
                    () => (
                        x.h.subscribe("USER_CONNECTIONS_LINK_CALLBACK", R),
                        () => {
                            x.h.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", R);
                        }
                    ),
                    [R],
                ),
                (0, n.jsxs)(b.A, {
                    children: [
                        (0, n.jsxs)(c.rQ, {
                            "data-migration-pending": !0,
                            direction: p.A.Direction.VERTICAL,
                            className: C.wx,
                            separator: !1,
                            children: [
                                (0, n.jsx)(o.E, {
                                    className: C.u1,
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    children: g.intl.format(g.t.fHz6eR, { number: 1, total: 2 }),
                                }),
                                (0, n.jsxs)("div", { className: C.bm, children: [A, " "] }),
                                (0, n.jsx)(d.D, { className: C.DD, variant: "heading-xl/semibold", children: w }),
                                null != f &&
                                    (0, n.jsx)(c.s_, { "data-migration-pending": !0, className: C.b, onClick: f }),
                            ],
                        }),
                        (0, n.jsxs)(c.$m, {
                            "data-migration-pending": !0,
                            className: C.rf,
                            scrollbarGutter: !1,
                            children: [
                                (0, n.jsx)(o.E, {
                                    tag: "p",
                                    variant: "body-md/normal",
                                    color: "text-default",
                                    children: y,
                                }),
                                !t &&
                                    null != D &&
                                    (0, n.jsx)(o.E, {
                                        tag: "p",
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        children: g.intl.format(g.t.XhlYYn, { redirectUrl: D }),
                                    }),
                            ],
                        }),
                        (0, n.jsx)(c.jl, {
                            "data-migration-pending": !0,
                            className: C.qr,
                            children: (0, n.jsx)(m.$, {
                                variant: t ? "secondary" : "primary",
                                text: g.intl.format(t ? g.t["8Laby+"] : g.t["6623tt"], {
                                    popoutWindowIcon: {},
                                    popoutWindowIconHook: () =>
                                        (0, n.jsx)(u.t, { color: "currentColor", className: C.LE, size: "xs" }),
                                }),
                                onClick: L,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                })
            );
        },
    },
);
