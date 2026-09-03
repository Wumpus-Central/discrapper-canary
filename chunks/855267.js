s.d(e, { A: () => tn });
var n = s(477900),
    i = s(582128),
    r = s(731738),
    a = s(289873),
    l = s(417098),
    o = s(964486),
    c = s(807393),
    d = s(174459),
    u = s(308645),
    N = s(335891),
    m = s(17928),
    E = s(207913),
    h = s(259960),
    I = s(257110),
    g = s(435558),
    x = s(993077),
    A = s(778712),
    _ = s(297264),
    D = s(834730),
    f = s(287809),
    j = s(739010),
    v = s(555725),
    T = s(97808),
    C = s(825176),
    O = s(476324);
function S(t) {
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
var p = s(375708),
    P = s(312646);
function L() {
    let t = (0, N.K)(),
        e = (0, m.bG)([f.default], () => f.default.getCurrentUser()),
        [s, r] = i.useState(36),
        a = i.useRef({
            [j.PN.ALL_GOOD]: null,
            [j.PN.LIMITED]: null,
            [j.PN.VERY_LIMITED]: null,
            [j.PN.AT_RISK]: null,
            [j.PN.SUSPENDED]: null,
        }),
        l = i.useCallback(() => {
            r(Math.max(Math.max(...Object.values(a.current).map((t) => t?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    i.useEffect(() => {
        l();
        let t = (0, g.debounce)(l, 100);
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, [l]);
    let o = (0, v.QB)(),
        { title: c, description: d, color: u, Icon: E } = o[t.state],
        h = Object.keys(o).length;
    return (0, n.jsxs)(x.Z, {
        className: P.kL,
        outline: !1,
        type: x.s.CUSTOM,
        children: [
            (0, n.jsx)("div", { className: P.ME, children: (0, n.jsx)(S, { user: e, size: A._3.SIZE_80 }) }),
            (0, n.jsxs)("div", {
                className: P.h5,
                children: [
                    (0, n.jsxs)("div", {
                        className: P.DD,
                        children: [
                            (0, n.jsx)(_.D, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: p.intl.format(c, {
                                    hook: (t) =>
                                        (0, n.jsx)(D.E, {
                                            style: { color: u.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, n.jsx)(D.E, { color: "text-default", variant: "text-sm/normal", children: d }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: P.vK,
                        style: { height: s },
                        children: [
                            (0, n.jsx)("div", { className: P.n8 }),
                            Object.entries(o).map((e, s) => {
                                let [i, r] = e,
                                    l = parseInt(i) === t.state;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: P.Kx,
                                        ref: (t) => {
                                            a.current[parseInt(i)] = t;
                                        },
                                        children: [
                                            l
                                                ? (0, n.jsx)(E, { className: P.xL, color: r.color })
                                                : (0, n.jsx)("div", {
                                                      className: P.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === h - 1 ? -6 : 0,
                                                      },
                                                      children: (0, n.jsx)("div", { className: P.Ie }),
                                                  }),
                                            p.intl.format(r.status, {
                                                hook: (t) =>
                                                    (0, n.jsx)(D.E, {
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
var R = s(503698),
    M = s.n(R),
    k = s(939249),
    U = s(738188),
    b = s(661531),
    K = s(369606),
    G = s(192308),
    V = s(761508),
    B = s(147925),
    w = s(303727),
    y = s(935208),
    Y = s(393033),
    z = s(985481),
    H = s(239093),
    W = s(652215),
    F = s(557398);
function X(t) {
    let { status: e, onClick: s, opened: i, count: r } = t;
    return (0, n.jsxs)(k.D, {
        className: F.wx,
        onClick: s,
        children: [
            (0, n.jsx)("div", {
                className: F.Y5,
                children: (0, n.jsx)(U.WarningIcon, {
                    size: "md",
                    color: "active" === e ? b.A.colors.INTERACTIVE_TEXT_ACTIVE : b.A.colors.ICON_MUTED,
                }),
            }),
            (0, n.jsxs)("div", {
                className: F.DD,
                children: [
                    (0, n.jsx)(_.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children:
                            "active" === e
                                ? p.intl.formatToPlainString(p.t.IeV2oY, { count: r.toString() })
                                : p.intl.formatToPlainString(p.t.fZAHBT, { count: r.toString() }),
                    }),
                    (0, n.jsx)(_.D, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "active" === e ? p.intl.string(p.t.XJ2YVR) : p.intl.string(p.t.SzGV0g),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: F.OW,
                children: (0, n.jsx)(B.A, {
                    width: 18,
                    height: 18,
                    direction: i ? B.A.Directions.UP : B.A.Directions.DOWN,
                }),
            }),
        ],
    });
}
function $() {
    return (0, n.jsxs)("div", {
        className: F.p$,
        children: [
            (0, n.jsxs)("div", {
                className: F.zc,
                children: [
                    (0, n.jsx)("div", {
                        className: F.Wk,
                        children: (0, n.jsx)(K.TrophyIcon, { size: "md", color: "currentColor", className: F.Kk }),
                    }),
                    (0, n.jsx)(w.A, { className: F.uf }),
                ],
            }),
            (0, n.jsx)(_.D, { variant: "heading-md/bold", className: F.q6, children: p.intl.string(p.t.reLFaV) }),
            (0, n.jsx)(D.E, { variant: "text-xs/normal", className: F.WO, children: p.intl.string(p.t.ERdH1o) }),
        ],
    });
}
function Q() {
    return (0, n.jsx)("div", {
        className: F.p$,
        children: (0, n.jsx)(D.E, { variant: "text-xs/normal", className: F.WO, children: p.intl.string(p.t.RV3AXf) }),
    });
}
function Z(t) {
    let { timestamp: e } = t;
    return (0, n.jsx)(D.E, { variant: "text-xs/normal", className: F.vE, children: (0, Y._W)(e) });
}
function q() {
    return (0, n.jsx)(D.E, { variant: "text-xs/bold", className: F.Ad, children: p.intl.string(p.t.QKMRC4) });
}
function J(t) {
    let { classification: e } = t,
        { id: r, description: a } = e,
        l = y.default.extractTimestamp(r),
        o = 864e5 > Math.abs(y.default.extractTimestamp(e.id) - new Date().getTime()),
        c = i.useMemo(() => {
            let t = {
                description: a,
                descriptionHook: (t) => (0, n.jsx)(D.E, { tag: "span", variant: "heading-lg/bold", children: t }),
            };
            return (0, Y._g)(e)
                ? e?.guild_metadata?.member_type === j.Z9.OWNER
                    ? p.intl.format(p.t.Lb0HVv, { ...t, guildName: e?.guild_metadata?.name })
                    : p.intl.format(p.t.rmpEPD, {
                          guildName: e?.guild_metadata?.name,
                          classification_type: t.description,
                          classificationHook: t.descriptionHook,
                      })
                : p.intl.format(p.t.QY4g5t, t);
        }, [e, a]);
    return (0, n.jsx)(
        k.D,
        {
            onClick: function () {
                (0, G.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        s.e("618416"),
                        s.e("812793"),
                        s.e("293612"),
                        s.e("706073"),
                        s.e("227512"),
                        s.e("225307"),
                        s.e("332165"),
                        s.e("524434"),
                        s.e("990185"),
                        s.e("444038"),
                        s.e("849162"),
                        s.e("660201"),
                        s.e("742978"),
                        s.e("76428"),
                        s.e("481647"),
                        s.e("776602"),
                        s.e("140402"),
                        s.e("21921"),
                        s.e("139970"),
                        s.e("676418"),
                        s.e("166495"),
                        s.e("401518"),
                        s.e("617249"),
                        s.e("362422"),
                        s.e("720590"),
                        s.e("803434"),
                        s.e("553984"),
                        s.e("179745"),
                        s.e("146844"),
                        s.e("67878"),
                        s.e("102698"),
                        s.e("886243"),
                        s.e("431649"),
                        s.e("238260"),
                        s.e("51194"),
                        s.e("292030"),
                        s.e("229211"),
                    ]).then(s.bind(s, 385430));
                    return (e) => (0, n.jsx)(t, { classificationId: r, source: H.XN.StandingTab, ...e });
                });
            },
            className: M()(F.zk, { [F.V5]: o }),
            children: (0, n.jsxs)("div", {
                className: F.iQ,
                children: [
                    o ? (0, n.jsx)(q, {}) : (0, n.jsx)(Z, { timestamp: l }),
                    (0, n.jsx)(_.D, { variant: "heading-lg/normal", children: c }),
                ],
            }),
        },
        r,
    );
}
function tt(t) {
    let { status: e, classifications: s } = t,
        [r, a] = i.useState(!1),
        [l, o] = i.useState(3),
        c = (0, N.K)(),
        u = (0, m.bG)([E.A], () => E.A.getIsDsaEligible()),
        h = i.useMemo(() => s.slice(0, l), [s, l]);
    i.useEffect(() => {
        r &&
            d.default.track(W.HAw.SAFETY_HUB_ACTION, {
                action: H.ZU.ViewViolationsDropdown,
                account_standing: c.state,
                classification_ids: h.map((t) => Number(t.id)),
                source: H.XN.StandingTab,
                is_violative_content_shown: !1,
                is_dsa_eligible: u,
            });
    }, [r, c.state, h, u]);
    let I = s.length - h.length > 3 ? 3 : s.length - h.length;
    return (0, n.jsxs)("div", {
        className: F.Wm,
        children: [
            (0, n.jsx)(X, { status: e, onClick: () => a((t) => !t), opened: r, count: s.length }),
            r &&
                (0, n.jsxs)("div", {
                    className: F.ld,
                    children: [
                        (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                        h.length > 0 && h.map((t) => (0, n.jsx)(J, { classification: t }, t.id)),
                        h.length < s.length &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                                    (0, n.jsx)("button", {
                                        className: F.Hr,
                                        onClick: () => o((t) => t + I),
                                        children: p.intl.format(p.t["9Ml56H"], { nextPageSize: I }),
                                    }),
                                ],
                            }),
                        0 === h.length && "active" === e && (0, n.jsx)($, {}),
                        0 === h.length && "expired" === e && (0, n.jsx)(Q, {}),
                    ],
                }),
        ],
    });
}
function te() {
    let t = (0, z.CI)(),
        e = (0, z.XK)();
    return 0 === t.length && 0 === e.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(tt, { status: "active", classifications: t }),
                  (0, n.jsx)(tt, { status: "expired", classifications: e }),
              ],
          });
}
var ts = s(296922);
function tn() {
    let t = (0, I.A)(),
        e = (0, h.v)(),
        s = (0, N.K)(),
        g = (0, m.bG)([E.A], () => E.A.getFetchError());
    (0, o.Ay)(() => {
        u.Yn();
    });
    let x = i.useRef(s);
    return (i.useEffect(() => {
        x.current = s;
    }),
    i.useEffect(() => {
        e &&
            (d.default.track(W.HAw.SAFETY_HUB_VIEWED, { account_standing: x.current.state }),
            c.A.increment({ name: r.K.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, n.jsx)(a.y, {})
        : null != g
          ? (0, n.jsxs)(l.$T, {
                color: l.Hv.DANGER,
                className: ts.aL,
                children: [
                    p.intl.string(p.t.TDRvqs),
                    (0, n.jsx)(l.zr, { onClick: () => u.Yn(), children: p.intl.string(p.t.R1AN4F) }),
                ],
            })
          : (0, n.jsxs)("div", { className: ts.kL, children: [(0, n.jsx)(L, {}), (0, n.jsx)(te, {})] });
}
