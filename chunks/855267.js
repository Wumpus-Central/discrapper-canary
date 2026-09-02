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
    m = s(335891),
    h = s(17928),
    N = s(207913),
    x = s(259960),
    g = s(257110),
    E = s(435558),
    I = s(993077),
    A = s(778712),
    _ = s(297264),
    f = s(834730),
    j = s(287809),
    v = s(739010),
    D = s(271995),
    T = s(97808),
    C = s(825176),
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
    R = s(312646);
function L() {
    let t = (0, m.K)(),
        e = (0, h.bG)([j.default], () => j.default.getCurrentUser()),
        [s, r] = i.useState(36),
        a = i.useRef({
            [v.PN.ALL_GOOD]: null,
            [v.PN.LIMITED]: null,
            [v.PN.VERY_LIMITED]: null,
            [v.PN.AT_RISK]: null,
            [v.PN.SUSPENDED]: null,
        }),
        l = i.useCallback(() => {
            r(Math.max(Math.max(...Object.values(a.current).map((t) => t?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    i.useEffect(() => {
        l();
        let t = (0, E.debounce)(l, 100);
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, [l]);
    let o = (0, D.QB)(),
        { title: c, description: d, color: u, Icon: N } = o[t.state],
        x = Object.keys(o).length;
    return (0, n.jsxs)(I.Z, {
        className: R.kL,
        outline: !1,
        type: I.s.CUSTOM,
        children: [
            (0, n.jsx)("div", { className: R.ME, children: (0, n.jsx)(p, { user: e, size: A._3.SIZE_80 }) }),
            (0, n.jsxs)("div", {
                className: R.h5,
                children: [
                    (0, n.jsxs)("div", {
                        className: R.DD,
                        children: [
                            (0, n.jsx)(_.D, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: S.intl.format(c, {
                                    hook: (t) =>
                                        (0, n.jsx)(f.E, {
                                            style: { color: u.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, n.jsx)(f.E, { color: "text-default", variant: "text-sm/normal", children: d }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: R.vK,
                        style: { height: s },
                        children: [
                            (0, n.jsx)("div", { className: R.n8 }),
                            Object.entries(o).map((e, s) => {
                                let [i, r] = e,
                                    l = parseInt(i) === t.state;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: R.Kx,
                                        ref: (t) => {
                                            a.current[parseInt(i)] = t;
                                        },
                                        children: [
                                            l
                                                ? (0, n.jsx)(N, { className: R.xL, color: r.color })
                                                : (0, n.jsx)("div", {
                                                      className: R.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === x - 1 ? -6 : 0,
                                                      },
                                                      children: (0, n.jsx)("div", { className: R.Ie }),
                                                  }),
                                            S.intl.format(r.status, {
                                                hook: (t) =>
                                                    (0, n.jsx)(f.E, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: R.Rh,
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
var P = s(503698),
    k = s.n(P),
    b = s(939249),
    U = s(738188),
    K = s(661531),
    M = s(369606),
    G = s(192308),
    B = s(761508),
    V = s(147925),
    w = s(303727),
    y = s(935208),
    z = s(393033),
    H = s(985481),
    W = s(239093),
    Y = s(652215),
    F = s(557398);
function X(t) {
    let { status: e, onClick: s, opened: i, count: r } = t;
    return (0, n.jsxs)(b.D, {
        className: F.wx,
        onClick: s,
        children: [
            (0, n.jsx)("div", {
                className: F.Y5,
                children: (0, n.jsx)(U.WarningIcon, {
                    size: "md",
                    color: "active" === e ? K.A.colors.INTERACTIVE_TEXT_ACTIVE : K.A.colors.ICON_MUTED,
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
                className: F.OW,
                children: (0, n.jsx)(V.A, {
                    width: 18,
                    height: 18,
                    direction: i ? V.A.Directions.UP : V.A.Directions.DOWN,
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
                        children: (0, n.jsx)(M.TrophyIcon, { size: "md", color: "currentColor", className: F.Kk }),
                    }),
                    (0, n.jsx)(w.A, { className: F.uf }),
                ],
            }),
            (0, n.jsx)(_.D, { variant: "heading-md/bold", className: F.q6, children: S.intl.string(S.t.reLFaV) }),
            (0, n.jsx)(f.E, { variant: "text-xs/normal", className: F.WO, children: S.intl.string(S.t.ERdH1o) }),
        ],
    });
}
function Q() {
    return (0, n.jsx)("div", {
        className: F.p$,
        children: (0, n.jsx)(f.E, { variant: "text-xs/normal", className: F.WO, children: S.intl.string(S.t.RV3AXf) }),
    });
}
function Z(t) {
    let { timestamp: e } = t;
    return (0, n.jsx)(f.E, { variant: "text-xs/normal", className: F.vE, children: (0, z._W)(e) });
}
function q() {
    return (0, n.jsx)(f.E, { variant: "text-xs/bold", className: F.Ad, children: S.intl.string(S.t.QKMRC4) });
}
function J(t) {
    let { classification: e } = t,
        { id: r, description: a } = e,
        l = y.default.extractTimestamp(r),
        o = 864e5 > Math.abs(y.default.extractTimestamp(e.id) - new Date().getTime()),
        c = i.useMemo(() => {
            let t = {
                description: a,
                descriptionHook: (t) => (0, n.jsx)(f.E, { tag: "span", variant: "heading-lg/bold", children: t }),
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
        }, [e, a]);
    return (0, n.jsx)(
        b.D,
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
                        s.e("292030"),
                        s.e("51194"),
                        s.e("229211"),
                    ]).then(s.bind(s, 385430));
                    return (e) => (0, n.jsx)(t, { classificationId: r, source: W.XN.StandingTab, ...e });
                });
            },
            className: k()(F.zk, { [F.V5]: o }),
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
        c = (0, m.K)(),
        u = (0, h.bG)([N.A], () => N.A.getIsDsaEligible()),
        x = i.useMemo(() => s.slice(0, l), [s, l]);
    i.useEffect(() => {
        r &&
            d.default.track(Y.HAw.SAFETY_HUB_ACTION, {
                action: W.ZU.ViewViolationsDropdown,
                account_standing: c.state,
                classification_ids: x.map((t) => Number(t.id)),
                source: W.XN.StandingTab,
                is_violative_content_shown: !1,
                is_dsa_eligible: u,
            });
    }, [r, c.state, x, u]);
    let g = s.length - x.length > 3 ? 3 : s.length - x.length;
    return (0, n.jsxs)("div", {
        className: F.Wm,
        children: [
            (0, n.jsx)(X, { status: e, onClick: () => a((t) => !t), opened: r, count: s.length }),
            r &&
                (0, n.jsxs)("div", {
                    className: F.ld,
                    children: [
                        (0, n.jsx)(B.V.Separator, { style: { height: "1px", width: "100%" } }),
                        x.length > 0 && x.map((t) => (0, n.jsx)(J, { classification: t }, t.id)),
                        x.length < s.length &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(B.V.Separator, { style: { height: "1px", width: "100%" } }),
                                    (0, n.jsx)("button", {
                                        className: F.Hr,
                                        onClick: () => o((t) => t + g),
                                        children: S.intl.format(S.t["9Ml56H"], { nextPageSize: g }),
                                    }),
                                ],
                            }),
                        0 === x.length && "active" === e && (0, n.jsx)($, {}),
                        0 === x.length && "expired" === e && (0, n.jsx)(Q, {}),
                    ],
                }),
        ],
    });
}
function te() {
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
}
var ts = s(296922);
function tn() {
    let t = (0, g.A)(),
        e = (0, x.v)(),
        s = (0, m.K)(),
        E = (0, h.bG)([N.A], () => N.A.getFetchError());
    (0, o.Ay)(() => {
        u.Yn();
    });
    let I = i.useRef(s);
    return (i.useEffect(() => {
        I.current = s;
    }),
    i.useEffect(() => {
        e &&
            (d.default.track(Y.HAw.SAFETY_HUB_VIEWED, { account_standing: I.current.state }),
            c.A.increment({ name: r.K.SAFETY_HUB_VIEW }));
    }, [e]),
    t)
        ? (0, n.jsx)(a.y, {})
        : null != E
          ? (0, n.jsxs)(l.$T, {
                color: l.Hv.DANGER,
                className: ts.aL,
                children: [
                    S.intl.string(S.t.TDRvqs),
                    (0, n.jsx)(l.zr, { onClick: () => u.Yn(), children: S.intl.string(S.t.R1AN4F) }),
                ],
            })
          : (0, n.jsxs)("div", { className: ts.kL, children: [(0, n.jsx)(L, {}), (0, n.jsx)(te, {})] });
}
