var t = n(477900),
    r = n(582128),
    s = n(284009),
    i = n.n(s),
    l = n(13202),
    c = n(935462),
    o = n(834730),
    d = n(534514),
    m = n(821609),
    u = n(811893),
    x = n(73153),
    N = n(370480),
    h = n(738104),
    p = n(235986),
    j = n(626584),
    b = n(936525),
    g = n(792996),
    C = n(844768);
let v = new j.A("TwoWayLink");
n.d(
    e,
    {},
    {
        b: function (a) {
            let {
                    platformType: e,
                    isWaitingForConnection: n,
                    onWaitingForConnection: s,
                    expectedCallbackState: j,
                    onAuthToken: E,
                    onError: k,
                    onClose: f,
                    img: A,
                    title: w,
                    body: y,
                    redirectDestination: L,
                } = a,
                D = r.useCallback(async () => {
                    let a;
                    try {
                        if (((a = await (0, h.d)(e, { twoWayLinkType: l.I.DESKTOP })), null == a))
                            throw Error("missing authorizeURL");
                    } catch (a) {
                        (v.error("Error opening provider authorize page", a), k());
                        return;
                    }
                    let { state: n } = (0, N.vA)(a);
                    (i()(null != n, "Authorize URL state query parameter must be present"), s?.(n));
                }, [e, k, s]),
                R = r.useCallback(
                    (a) => {
                        let { callbackCode: n, callbackState: t } = a;
                        t !== j
                            ? v.warn(`${e} link: received mismatching callback state!`)
                            : E({ callbackCode: n, callbackState: t });
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
                (0, t.jsxs)(b.A, {
                    children: [
                        (0, t.jsxs)(c.rQ, {
                            "data-migration-pending": !0,
                            direction: p.A.Direction.VERTICAL,
                            className: C.wx,
                            separator: !1,
                            children: [
                                (0, t.jsx)(o.E, {
                                    className: C.u1,
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    children: g.intl.format(g.t.fHz6eR, { number: 1, total: 2 }),
                                }),
                                (0, t.jsxs)("div", { className: C.bm, children: [A, " "] }),
                                (0, t.jsx)(d.D, { className: C.DD, variant: "heading-xl/semibold", children: w }),
                                null != f &&
                                    (0, t.jsx)(c.s_, { "data-migration-pending": !0, className: C.b, onClick: f }),
                            ],
                        }),
                        (0, t.jsxs)(c.$m, {
                            "data-migration-pending": !0,
                            className: C.rf,
                            scrollbarGutter: !1,
                            children: [
                                (0, t.jsx)(o.E, {
                                    tag: "p",
                                    variant: "body-md/normal",
                                    color: "text-default",
                                    children: y,
                                }),
                                !n &&
                                    null != L &&
                                    (0, t.jsx)(o.E, {
                                        tag: "p",
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        children: g.intl.format(g.t.XhlYYn, { redirectUrl: L }),
                                    }),
                            ],
                        }),
                        (0, t.jsx)(c.jl, {
                            "data-migration-pending": !0,
                            className: C.qr,
                            children: (0, t.jsx)(m.$, {
                                variant: n ? "secondary" : "primary",
                                text: g.intl.format(n ? g.t["8Laby+"] : g.t["6623tt"], {
                                    popoutWindowIcon: {},
                                    popoutWindowIconHook: () =>
                                        (0, t.jsx)(u.WindowLaunchIcon, {
                                            color: "currentColor",
                                            className: C.LE,
                                            size: "xs",
                                        }),
                                }),
                                onClick: D,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                })
            );
        },
    },
);
