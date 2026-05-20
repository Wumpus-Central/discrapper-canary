s.d(e, { A: () => tn });
var n = s(627968),
    i = s(64700),
    r = s(731738),
    l = s(289873),
    a = s(417098),
    c = s(964486),
    o = s(807393),
    d = s(174459),
    u = s(308645),
    N = s(335891),
    m = s(17928),
    h = s(207913),
    E = s(259960),
    g = s(257110),
    x = s(735438),
    I = s(359778),
    A = s(778712),
    _ = s(534514),
    j = s(834730),
    D = s(287809),
    v = s(739010),
    f = s(271995),
    T = s(97808),
    C = s(466757),
    O = s(476324);
function p(t) {
    let { user: e, size: s } = t,
        i = (0, A.Kj)(s),
        r = null != e ? e.getAvatarURL(null, i.size) : O;
    return (0, n.jsx)("div", {
        className: C.oJ,
        children: (0, n.jsx)("div", {
            className: C.my,
            style: { width: i.size, height: i.size },
            children: (0, n.jsx)(T.eu, { src: r, "aria-hidden": !0, size: s }),
        }),
    });
}
var S = s(375708),
    P = s(70845);
function R() {
    let t = (0, N.K)(),
        e = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        [s, r] = i.useState(36),
        l = i.useRef({
            [v.PN.ALL_GOOD]: null,
            [v.PN.LIMITED]: null,
            [v.PN.VERY_LIMITED]: null,
            [v.PN.AT_RISK]: null,
            [v.PN.SUSPENDED]: null,
        }),
        a = i.useCallback(() => {
            r(Math.max(Math.max(...Object.values(l.current).map((t) => t?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    i.useEffect(() => {
        a();
        let t = (0, x.debounce)(a, 100);
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, [a]);
    let c = (0, f.QB)(),
        { title: o, description: d, color: u, Icon: h } = c[t.state],
        E = Object.keys(c).length;
    return (0, n.jsxs)(I.Z, {
        className: P.kL,
        outline: !1,
        type: I.s.CUSTOM,
        children: [
            (0, n.jsx)("div", { className: P.ME, children: (0, n.jsx)(p, { user: e, size: A._3.SIZE_80 }) }),
            (0, n.jsxs)("div", {
                className: P.h5,
                children: [
                    (0, n.jsxs)("div", {
                        className: P.DD,
                        children: [
                            (0, n.jsx)(_.D, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: S.intl.format(o, {
                                    hook: (t) =>
                                        (0, n.jsx)(j.E, {
                                            style: { color: u.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, n.jsx)(j.E, { color: "text-default", variant: "text-sm/normal", children: d }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: P.vK,
                        style: { height: s },
                        children: [
                            (0, n.jsx)("div", { className: P.n8 }),
                            Object.entries(c).map((e, s) => {
                                let [i, r] = e,
                                    a = parseInt(i) === t.state;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: P.Kx,
                                        ref: (t) => {
                                            l.current[parseInt(i)] = t;
                                        },
                                        children: [
                                            a
                                                ? (0, n.jsx)(h, { className: P.xL, color: r.color })
                                                : (0, n.jsx)("div", {
                                                      className: P.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === E - 1 ? -6 : 0,
                                                      },
                                                      children: (0, n.jsx)("div", { className: P.Ie }),
                                                  }),
                                            S.intl.format(r.status, {
                                                hook: (t) =>
                                                    (0, n.jsx)(j.E, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: P.Rh,
                                                        children: t,
                                                    }),
                                            }),
                                        ],
                                    },
                                    s,
                                );
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var L = s(503698),
    b = s.n(L),
    M = s(939249),
    U = s(738188),
    k = s(661531),
    K = s(369606),
    G = s(192308),
    V = s(761508),
    B = s(147925),
    w = s(303727),
    y = s(935208),
    z = s(393033),
    H = s(985481),
    Y = s(239093),
    F = s(652215),
    W = s(86789);
let X = (t) => {
        let { status: e, onClick: s, opened: i, count: r } = t;
        return (0, n.jsxs)(M.D, {
            className: W.wx,
            onClick: s,
            children: [
                (0, n.jsx)("div", {
                    className: W.Y5,
                    children: (0, n.jsx)(U.i, {
                        size: "md",
                        color: "active" === e ? k.A.colors.INTERACTIVE_TEXT_ACTIVE : k.A.colors.ICON_MUTED,
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: W.DD,
                    children: [
                        (0, n.jsx)(_.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === e
                                    ? S.intl.formatToPlainString(S.t.IeV2oY, { count: r.toString() })
                                    : S.intl.formatToPlainString(S.t.fZAHBT, { count: r.toString() }),
                        }),
                        (0, n.jsx)(_.D, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === e ? S.intl.string(S.t.XJ2YVR) : S.intl.string(S.t.SzGV0g),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: W.OW,
                    children: (0, n.jsx)(B.A, {
                        width: 18,
                        height: 18,
                        direction: i ? B.A.Directions.UP : B.A.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    $ = () =>
        (0, n.jsxs)("div", {
            className: W.p$,
            children: [
                (0, n.jsxs)("div", {
                    className: W.zc,
                    children: [
                        (0, n.jsx)("div", {
                            className: W.Wk,
                            children: (0, n.jsx)(K.O, { size: "md", color: "currentColor", className: W.Kk }),
                        }),
                        (0, n.jsx)(w.A, { className: W.uf }),
                    ],
                }),
                (0, n.jsx)(_.D, { variant: "heading-md/bold", className: W.q6, children: S.intl.string(S.t.reLFaV) }),
                (0, n.jsx)(j.E, { variant: "text-xs/normal", className: W.WO, children: S.intl.string(S.t.ERdH1o) }),
            ],
        }),
    Z = () =>
        (0, n.jsx)("div", {
            className: W.p$,
            children: (0, n.jsx)(j.E, {
                variant: "text-xs/normal",
                className: W.WO,
                children: S.intl.string(S.t.RV3AXf),
            }),
        }),
    Q = (t) => {
        let { timestamp: e } = t;
        return (0, n.jsx)(j.E, { variant: "text-xs/normal", className: W.vE, children: (0, z._W)(e) });
    },
    q = () => (0, n.jsx)(j.E, { variant: "text-xs/bold", className: W.Ad, children: S.intl.string(S.t.QKMRC4) }),
    J = (t) => {
        let { classification: e } = t,
            { id: r, description: l } = e,
            a = y.default.extractTimestamp(r),
            c = 864e5 > Math.abs(y.default.extractTimestamp(e.id) - new Date().getTime()),
            o = i.useMemo(() => {
                let t = {
                    description: l,
                    descriptionHook: (t) => (0, n.jsx)(j.E, { tag: "span", variant: "heading-lg/bold", children: t }),
                };
                return (0, z._g)(e)
                    ? e?.guild_metadata?.member_type === v.Z9.OWNER
                        ? S.intl.format(S.t.Lb0HVv, { ...t, guildName: e?.guild_metadata?.name })
                        : S.intl.format(S.t.rmpEPD, {
                              guildName: e?.guild_metadata?.name,
                              classification_type: t.description,
                              classificationHook: t.descriptionHook,
                          })
                    : S.intl.format(S.t.QY4g5t, t);
            }, [e, l]);
        return (0, n.jsx)(
            M.D,
            {
                onClick: () => {
                    (0, G.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([
                            s.e("54518"),
                            s.e("57006"),
                            s.e("57352"),
                            s.e("76602"),
                            s.e("28229"),
                            s.e("21921"),
                            s.e("76418"),
                            s.e("66495"),
                            s.e("39970"),
                            s.e("17249"),
                            s.e("62422"),
                            s.e("1518"),
                            s.e("82644"),
                            s.e("20590"),
                            s.e("79745"),
                            s.e("53984"),
                            s.e("46844"),
                            s.e("19558"),
                            s.e("2698"),
                            s.e("86243"),
                            s.e("12682"),
                            s.e("43114"),
                            s.e("92030"),
                            s.e("51194"),
                            s.e("29211"),
                        ]).then(s.bind(s, 385430));
                        return (e) => (0, n.jsx)(t, { classificationId: r, source: Y.XN.StandingTab, ...e });
                    });
                },
                className: b()(W.zk, { [W.V5]: c }),
                children: (0, n.jsxs)("div", {
                    className: W.iQ,
                    children: [
                        c ? (0, n.jsx)(q, {}) : (0, n.jsx)(Q, { timestamp: a }),
                        (0, n.jsx)(_.D, { variant: "heading-lg/normal", children: o }),
                    ],
                }),
            },
            r,
        );
    },
    tt = (t) => {
        let { status: e, classifications: s } = t,
            [r, l] = i.useState(!1),
            [a, c] = i.useState(3),
            o = (0, N.K)(),
            u = (0, m.bG)([h.A], () => h.A.getIsDsaEligible()),
            E = i.useMemo(() => s.slice(0, a), [s, a]);
        i.useEffect(() => {
            r &&
                d.default.track(F.HAw.SAFETY_HUB_ACTION, {
                    action: Y.ZU.ViewViolationsDropdown,
                    account_standing: o.state,
                    classification_ids: E.map((t) => Number(t.id)),
                    source: Y.XN.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: u,
                });
        }, [r, o.state, E, u]);
        let g = s.length - E.length > 3 ? 3 : s.length - E.length;
        return (0, n.jsxs)("div", {
            className: W.Wm,
            children: [
                (0, n.jsx)(X, { status: e, onClick: () => l((t) => !t), opened: r, count: s.length }),
                r &&
                    (0, n.jsxs)("div", {
                        className: W.ld,
                        children: [
                            (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                            E.length > 0 && E.map((t) => (0, n.jsx)(J, { classification: t }, t.id)),
                            E.length < s.length &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                                        (0, n.jsx)("button", {
                                            className: W.Hr,
                                            onClick: () => c((t) => t + g),
                                            children: S.intl.format(S.t["9Ml56H"], { nextPageSize: g }),
                                        }),
                                    ],
                                }),
                            0 === E.length && "active" === e && (0, n.jsx)($, {}),
                            0 === E.length && "expired" === e && (0, n.jsx)(Z, {}),
                        ],
                    }),
            ],
        });
    },
    te = () => {
        let t = (0, H.CI)(),
            e = (0, H.XK)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, n.jsxs)("div", {
                  children: [
                      (0, n.jsx)(tt, { status: "active", classifications: t }),
                      (0, n.jsx)(tt, { status: "expired", classifications: e }),
                  ],
              });
    };
var ts = s(746631);
function tn() {
    let t = (0, g.A)(),
        e = (0, E.v)(),
        s = (0, N.K)(),
        x = (0, m.bG)([h.A], () => h.A.getFetchError());
    (0, c.Ay)(() => {
        u.Yn();
    });
    let I = i.useRef(s);
    return (i.useEffect(() => {
        I.current = s;
    }),
    i.useEffect(() => {
        e &&
            (d.default.track(F.HAw.SAFETY_HUB_VIEWED, { account_standing: I.current.state }),
            o.A.increment({ name: r.K.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, n.jsx)(l.y, {})
        : null != x
          ? (0, n.jsxs)(a.$T, {
                color: a.Hv.DANGER,
                className: ts.aL,
                children: [
                    S.intl.string(S.t.TDRvqs),
                    (0, n.jsx)(a.zr, { onClick: () => u.Yn(), children: S.intl.string(S.t.R1AN4F) }),
                ],
            })
          : (0, n.jsxs)("div", { className: ts.kL, children: [(0, n.jsx)(R, {}), (0, n.jsx)(te, {})] });
}
