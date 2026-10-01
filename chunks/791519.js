(n.r(t), n.d(t, { default: () => n2 }));
var s,
    l,
    a,
    i = n(477900),
    r = n(582128),
    c = n(503698),
    o = n.n(c),
    d = n(132500),
    u = n(702841),
    m = n(192308),
    g = n(315710),
    h = n(944791),
    E = n(444927),
    f = n(688810),
    x = n(726249),
    p = n(475073),
    C = n(611924),
    v = n(744082),
    j = n(594832),
    S = n(287809),
    _ = n(371794),
    A = n(440938),
    b = n(590180),
    I = n(161918),
    N = n(395856),
    L = n(790297),
    O = n(841702),
    T = n(983545),
    R = n(365491);
(n(323874), n(14289), n(35956), n(321073));
var M = n(806163),
    k = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    y = n(17928),
    P = n(775602),
    D = n(196736),
    B = n(689175),
    G = n(277984),
    w = n(670735),
    F = n(790284),
    H = n(780964),
    z = n(766075),
    U = n(280450),
    K = n(166403),
    V = n(123917),
    Y = n(158045),
    W = n(814201),
    $ = n(581453),
    Z = n(43990),
    q = n(403581),
    Q = n(834730),
    X = n(821609),
    J = n(793574),
    ee = n(75678),
    et = n(202541),
    en = n(818348),
    es = n(394107),
    el = n(375708),
    ea = n(876564);
function ei() {
    let e = r.useCallback(() => {
        (0, ee.A)({ subscriptionTier: et.pe.TIER_2, analyticsLocations: [J.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, i.jsx)(Z.N, {
        theme: en.NJ.DARK,
        children: (t) =>
            (0, i.jsxs)("div", {
                className: o()(ea.vK, t),
                children: [
                    (0, i.jsxs)("div", {
                        className: ea.Pf,
                        children: [
                            (0, i.jsx)(q.t, {
                                className: ea.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, i.jsx)(Q.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: el.intl.string(es.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, i.jsx)(X.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: q.t,
                        text: el.intl.string(el.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var er = n(462887),
    ec = n(297264),
    eo = n(736653),
    ed = n(457865);
function eu(e) {
    let { onRetry: t, errorMessage: n } = e,
        s = (0, eo.Ay)(),
        l = (0, y.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, i.jsxs)("div", {
        className: ed.kL,
        children: [
            (0, i.jsx)("img", {
                className: ed.Sl,
                src: (0, er.M)(s) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, i.jsx)(ec.D, { variant: "heading-xl/semibold", children: el.intl.string(el.t.i5SQ74) }),
            (0, i.jsx)(Q.E, {
                className: ed.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: el.intl.string(el.t.F8FvUy),
            }),
            l &&
                null != n &&
                (0, i.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, i.jsx)(X.$, { variant: "primary", text: el.intl.string(el.t["+hivLW"]), onClick: t }),
        ],
    });
}
var em = n(349085),
    eg = n(890856),
    eh = n(331322),
    eE = n(713517),
    ef = n(660669);
function ex(e) {
    let { name: t, coverUrl: n, fromPriceLabel: s, nitroFromPriceLabel: l, onClickCard: a, onClickViewPlans: c } = e,
        d = r.useRef(null),
        { isHoveringOrFocusing: u } = (0, eE.A)(d),
        m = (0, y.bG)([S.default], () => Y.Ay.canUseShopDiscounts(S.default.getCurrentUser())) && null != l,
        g = m ? l : s,
        h = r.useCallback(
            (e) => {
                (e.stopPropagation(), c?.());
            },
            [c],
        );
    return (0, i.jsxs)(eg.s, {
        ref: d,
        onClick: a,
        "aria-label": t,
        className: o()(ef.Nr, { [ef.yo]: u }),
        children: [
            (0, i.jsx)("div", {
                className: ef.q4,
                "aria-hidden": !0,
                children: null != n && (0, i.jsx)("img", { className: ef.xy, src: n, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: ef.Iv,
                children: [
                    null != n
                        ? (0, i.jsx)("img", { className: ef.N4, src: n, alt: "" })
                        : (0, i.jsx)("div", {
                              className: ef.WB,
                              children: (0, i.jsx)(Q.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, i.jsx)("div", { className: ef.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ef.qr,
                children: [
                    (0, i.jsxs)("div", {
                        className: ef.cs,
                        children: [
                            (0, i.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, i.jsx)("div", {
                                    className: ef.F1,
                                    children: (0, i.jsxs)(eh.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, i.jsxs)(eh.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, i.jsx)(q.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, i.jsx)(Q.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: ef.E1,
                        children: (0, i.jsx)(X.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: el.intl.string(es.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ep = n(469058);
function eC() {
    return (0, i.jsx)("div", {
        className: o()(ef.Nr, ep.s7, ep.U6),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: ep.qr,
            children: [(0, i.jsx)("div", { className: ep.w9 }), (0, i.jsx)("div", { className: ep.n2 })],
        }),
    });
}
var ev = n(901215);
let ej = r.memo(function (e) {
    let { game: t, onSelect: n } = e,
        s = r.useCallback(() => n(t), [t, n]),
        l = (0, em.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, i.jsx)(ex, {
        name: t.name,
        coverUrl: l,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: s,
        onClickViewPlans: s,
    });
});
function eS(e) {
    let { games: t, title: n, onSelectGame: s, loading: l = !1 } = e;
    return (0, i.jsxs)("section", {
        className: ev.u,
        children: [
            null != n && (0, i.jsx)(ec.D, { variant: "heading-lg/semibold", children: n }),
            (0, i.jsx)("div", {
                className: ev.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, i.jsx)(eC, {}, t))
                    : t.map((e) => (0, i.jsx)(ej, { game: e, onSelect: s }, e.id)),
            }),
        ],
    });
}
var e_ = n(32880),
    eA = n(410232),
    eb = n(231483),
    eI = n(339350),
    eN = n(28863),
    eL = n(442935);
function eO() {
    let e = r.useMemo(
        () => [
            { Icon: e_.DownloadIcon, label: el.intl.string(es.default.GJNQYz) },
            { Icon: eA.k, label: el.intl.string(es.default.pTinR2) },
            { Icon: eb.ShieldIcon, label: el.intl.string(es.default.s0N1nM) },
            { Icon: eI.Q, label: el.intl.string(es.default.NzrGEi) },
        ],
        [],
    );
    return (0, i.jsxs)("section", {
        className: eL.ZK,
        children: [
            (0, i.jsxs)("div", {
                className: eL.jE,
                children: [
                    (0, i.jsx)(ec.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: el.intl.string(es.default.F5W36W),
                    }),
                    (0, i.jsxs)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            el.intl.string(es.default.xMpGuO),
                            " ",
                            (0, i.jsx)(eN.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: el.intl.string(es.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: eL._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: eL.Tc,
                            children: [
                                (0, i.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, i.jsx)(Q.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    tag: "span",
                                    children: n,
                                }),
                            ],
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
var eT = n(305090);
function eR() {
    return (0, i.jsxs)("div", {
        className: eT.vK,
        children: [
            (0, i.jsx)("div", {
                className: eT.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, i.jsx)("div", { className: eT.Ge, "aria-hidden": !0 }),
            (0, i.jsx)("div", { className: eT.f5, "aria-hidden": !0 }),
        ],
    });
}
var eM = n(408278),
    ek = n(548411),
    ey = n(554830),
    eP = n(281445),
    eD = n(390544),
    eB = n(554146),
    eG = n(939249),
    ew = n(509434),
    eF = n(866665),
    eH = n(103271);
let ez = { TERTIARY: eH.Xe, SECONDARY: eH.Rm, PRIMARY: eH.zB },
    eU = { SIZE_24: eH.q1, SIZE_32: eH.Hb, SIZE_36: eH.VM },
    eK = r.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: s,
            color: l,
            size: a = eU.SIZE_32,
            icon: r,
            onMouseDown: c,
            onClick: d,
            disabled: u,
            focusProps: m,
        } = e;
        return (0, i.jsx)(eF.m, {
            asContainer: !0,
            text: s,
            shouldShow: !u,
            children: (0, i.jsx)(eG.D, {
                innerRef: t,
                "aria-label": s,
                "aria-disabled": u,
                className: o()(n, eH.x6, l, a, { [eH.r9]: u }),
                onMouseDown: c,
                onClick: (e) => {
                    d(e);
                },
                focusProps: m,
                children: r,
            }),
        });
    });
var eV = n(933832),
    eY = n(624479),
    eW = n(131607),
    e$ = n(427209),
    eZ = n(95035),
    eq = n(498480),
    eQ = n(685743),
    eX = n(981381),
    eJ = n(342942),
    e0 = n(294454),
    e1 = n(625903),
    e8 = n(445927),
    e4 = n(376205);
function e5(e) {
    let { server: t, onOpenSettings: n } = e,
        s = t.instance.subscriptionId,
        l = (0, y.bG)(
            [K.A],
            () =>
                (0, e4.Yg)({
                    subscriptionId: s,
                    hasFetchedSubscriptions: K.A.hasFetchedSubscriptions(),
                    getSubscriptionById: (e) => K.A.getSubscriptionById(e),
                }),
            [s],
        ),
        a = (0, e8.A)(t.instance) && l,
        c = r.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, i.jsx)(eK, {
        color: ez.SECONDARY,
        size: eU.SIZE_24,
        icon: (0, i.jsx)(e1.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: c,
        disabled: !a,
        tooltip: el.intl.string(es.default["feUiM/"]),
    });
}
var e6 = n(652215),
    e2 = n(628049),
    e7 = n(49999),
    e3 = n(684644);
let e9 = [eD.M.STARTUP_FAILED, eD.M.MISSING_STOCK, eD.M.PROVIDER_ERRORED, eD.M.DELETED];
function te(e) {
    return `game-server-owned-card-${e}`;
}
function tt(e) {
    let { gameServerId: t } = e,
        n = r.useCallback(() => {
            (0, eq.Kz)(t).catch(() => {});
        }, [t]);
    return (0, i.jsx)("div", {
        className: e3.y7,
        children: (0, i.jsx)(X.$, {
            fullWidth: !0,
            text: el.intl.string(es.default.TMzy7d),
            variant: "secondary",
            onClick: n,
        }),
    });
}
function tn() {
    let [e, t] = r.useState(!1),
        n = r.useCallback(() => {
            (t(!0),
                (0, eq.hU)()
                    .catch(() => {})
                    .finally(() => t(!1)));
        }, []);
    return (0, i.jsx)("div", {
        className: e3.y7,
        children: (0, i.jsx)(X.$, {
            fullWidth: !0,
            text: el.intl.string(es.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let ts = r.memo(function (e) {
    let { server: t, onJoin: s, onViewPanel: l, onOpenSettings: a, isHighlighted: c = !1 } = e,
        d = (0, em.A)(t.gameId, "cover") ?? t.coverUrl,
        u = (function (e) {
            let t = (0, y.bG)([K.A], () => (null != e ? K.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === e6.Dmq.CANCELED
                ? { text: el.intl.formatToPlainString(es.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: el.intl.formatToPlainString(es.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [g, h] = (0, eW.kn)([eB.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        E = g !== eB.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        f = eP.X.SHOCKBYTE,
        x = U.default.getId() ?? "0",
        { handleCopyServerIp: p, animateCopyIcon: C } = (0, eQ.A)(x, t.id, J.A.GAME_SERVER_PAGE, t.serverIp),
        v = r.useCallback(() => {
            (0, eJ.A)({
                provider: f,
                onAccept: () => {
                    (h(e7.i.TAKE_ACTION), p());
                },
            });
        }, [f, h, p]),
        j = r.useCallback(() => {
            E
                ? s(t)
                : (0, eJ.A)({
                      provider: f,
                      onAccept: () => {
                          (h(e7.i.TAKE_ACTION), s(t));
                      },
                  });
        }, [E, f, h, s, t]),
        S = r.useCallback(() => l(t), [l, t]),
        _ = r.useCallback(() => {
            ((e) => {
                let { server: t, source: s } = e;
                (0, m.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("385663"),
                            n.e("225307"),
                            n.e("332165"),
                            n.e("618416"),
                            n.e("524434"),
                            n.e("90343"),
                            n.e("866475"),
                            n.e("279926"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("401518"),
                            n.e("854461"),
                            n.e("368062"),
                            n.e("844780"),
                            n.e("713567"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("304329"),
                            n.e("84755"),
                            n.e("835868"),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, i.jsx)(e, { ...n, server: t, source: s });
                    },
                    { stackingBehavior: "stack", modalKey: e0.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        A = (0, eX.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e2.qb[f],
        b = null != t.instance.gameServerPanelUrl,
        I = null != t.instance.status && e9.includes(t.instance.status),
        N = r.useCallback(() => {
            (0, V.h)({ href: A });
        }, [A]),
        L = r.useMemo(() => {
            switch (t.instance.status) {
                case eD.M.ONLINE:
                    return el.intl.string(es.default["60kAzo"]);
                case eD.M.OFFLINE:
                    return el.intl.string(es.default["Ys/RrB"]);
                case eD.M.SLEEPING:
                    return el.intl.string(es.default.y0z8ZO);
                case eD.M.STARTUP_FAILED:
                    return el.intl.string(es.default["7C9Z3s"]);
                case eD.M.MISSING_STOCK:
                    return el.intl.string(es.default["+a5G2l"]);
                case eD.M.PROVIDER_ERRORED:
                    return el.intl.string(es.default["6g/oji"]);
                case eD.M.DELETED:
                    return el.intl.string(es.default.Z1NZwX);
                case eD.M.STARTING:
                    return el.intl.string(es.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        O = t.isOnline ? "text-feedback-positive" : I ? "text-feedback-critical" : "text-muted",
        T = r.useMemo(
            () =>
                (0, i.jsx)(eG.D, {
                    className: o()(e3.wC, e3.QV),
                    onClick: j,
                    "aria-label": el.intl.string(es.default["fQCcM/"]),
                    children: (0, i.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "none",
                        children: el.intl.string(es.default["fQCcM/"]),
                    }),
                }),
            [j],
        ),
        R = r.useMemo(
            () =>
                (0, i.jsxs)(eG.D, {
                    className: o()(e3.wC, e3.y2, { [e3.Gz]: !b }),
                    onClick: b ? S : void 0,
                    "aria-disabled": !b,
                    "aria-label": el.intl.string(es.default.tkbVdf),
                    children: [
                        (0, i.jsx)(Q.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: el.intl.string(es.default.tkbVdf),
                        }),
                        (0, i.jsx)(ew.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                    ],
                }),
            [S, b],
        ),
        M = r.useMemo(() => {
            switch (t.instance.status) {
                case eD.M.SLEEPING:
                    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(tt, { gameServerId: t.id }), R] });
                case eD.M.STARTUP_FAILED:
                case eD.M.MISSING_STOCK:
                    return (0, i.jsx)("div", {
                        className: e3.y7,
                        children: (0, i.jsx)(X.$, {
                            fullWidth: !0,
                            text: el.intl.string(es.default.gWMqnI),
                            variant: "primary",
                            icon: ew.I,
                            iconPosition: "end",
                            disabled: !b,
                            onClick: S,
                        }),
                    });
                case eD.M.PROVIDER_ERRORED:
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", {
                                className: e3.y7,
                                children: (0, i.jsx)(X.$, {
                                    fullWidth: !0,
                                    text: el.intl.string(es.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: N,
                                }),
                            }),
                            (0, i.jsx)(tn, {}),
                        ],
                    });
                case eD.M.DELETED:
                    return R;
                default:
                    return (0, i.jsxs)(i.Fragment, { children: [T, R] });
            }
        }, [t.instance.status, t.id, b, T, R, S, N]);
    return (0, i.jsxs)("div", {
        id: te(t.id),
        className: o()(e3.Nr, { [e3.mr]: c }),
        children: [
            c && (0, i.jsx)("div", { className: e3._8, "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: e3.Nk,
                "aria-hidden": !0,
                children: [
                    null != d && (0, i.jsx)("img", { className: e3.QC, src: d, alt: "" }),
                    (0, i.jsx)("div", { className: e3.jc }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: e3.AQ,
                children: [
                    (0, i.jsx)(eK, {
                        color: ez.SECONDARY,
                        size: eU.SIZE_24,
                        icon: (0, i.jsx)(e$.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: _,
                        tooltip: el.intl.string(el.t.RDE0Sc),
                    }),
                    (0, i.jsx)(e5, { server: t, onOpenSettings: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: e3.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: e3.U1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: e3.oL,
                                children: [
                                    null != d
                                        ? (0, i.jsx)("img", { className: e3.vT, src: d, alt: "" })
                                        : (0, i.jsx)("div", {
                                              className: e3.iv,
                                              children: (0, i.jsx)(Q.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, i.jsx)("div", { className: e3.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: e3.VQ,
                                children: [
                                    (0, i.jsx)(Q.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, i.jsx)(Q.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != u &&
                                        (0, i.jsx)(Q.E, {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: u.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: e3.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: e3.N8,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e3.bi,
                                        children: [
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default.bDdi7n),
                                            }),
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: e3.gv,
                                        children: [
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default["7phwMG"]),
                                            }),
                                            E
                                                ? (0, i.jsxs)("div", {
                                                      className: e3.Yb,
                                                      children: [
                                                          (0, i.jsx)(Q.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, i.jsx)(eG.D, {
                                                                  className: e3.cL,
                                                                  onClick: p,
                                                                  "aria-label": el.intl.string(el.t.OpuAlK),
                                                                  children: C
                                                                      ? (0, i.jsx)(eV.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, i.jsx)(eY.CopyIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(eZ.A, {
                                                      onClick: v,
                                                      children: el.intl.string(es.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: e3.N8,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: e3.bi,
                                        children: [
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default["n+ZX7y"]),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: e3.Yb,
                                                children: [
                                                    (t.isOnline || I) &&
                                                        (0, i.jsx)("span", {
                                                            className: o()(e3.kg, { [e3.rU]: I }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, i.jsx)(Q.E, {
                                                        variant: "text-sm/medium",
                                                        color: O,
                                                        tag: "span",
                                                        children: L,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: e3.gv,
                                        children: [
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: el.intl.string(es.default.mJlz3T),
                                            }),
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.location,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: e3.qr, children: M }),
        ],
    });
});
var tl = n(367016);
function ta(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: s,
            onViewPanel: l,
            onOpenSettings: a,
            highlightServerId: c = null,
            highlightNonce: d = 0,
        } = e,
        u = r.useRef(null),
        m = r.useRef(null),
        [g, h] = r.useState(!1),
        [E, f] = r.useState(!1),
        [x, p] = r.useState(null),
        C = r.useCallback(() => {
            let e = u.current;
            null != e && (h(e.scrollLeft > 1), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    (r.useLayoutEffect(() => {
        C();
    }, [C, t]),
        r.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                C();
            });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }, [C]));
    let v = r.useCallback(() => {
            u.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        j = r.useCallback(() => {
            u.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        r.useEffect(() => {
            if (d <= 0) return;
            let e = null != c ? document.getElementById(te(c)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    (p(null), (t = requestAnimationFrame(() => p(c))));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(t));
            };
        }, [d, c]),
        r.useEffect(() => {
            if (null == x) return;
            let e = setTimeout(() => p(null), 4e3);
            return () => clearTimeout(e);
        }, [x]),
        (0, i.jsxs)("section", {
            className: tl.uW,
            ref: m,
            children: [
                (0, i.jsxs)("div", {
                    className: tl.wx,
                    children: [
                        (0, i.jsx)(ec.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: el.intl.string(es.default.BOWmmT),
                        }),
                        (0, i.jsx)(Z.N, {
                            theme: en.NJ.DARK,
                            children: (e) =>
                                (0, i.jsxs)("div", {
                                    className: o()(tl.$s, e),
                                    children: [
                                        (0, i.jsx)(X.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: el.intl.string(el.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: tl.d$,
                                            children: [
                                                (0, i.jsx)(eM.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: ek.Z,
                                                    disabled: !g,
                                                    onClick: v,
                                                    "aria-label": el.intl.string(el.t["13/7kX"]),
                                                }),
                                                (0, i.jsx)(eM.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: ey.K,
                                                    disabled: !E,
                                                    onClick: j,
                                                    "aria-label": el.intl.string(el.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: o()(tl.XG, { [tl.OW]: g && E, [tl.vL]: g && !E, [tl.y0]: E && !g }),
                    ref: u,
                    onScroll: C,
                    children: t.map((e) =>
                        (0, i.jsx)(
                            "div",
                            {
                                className: tl.AV,
                                children: (0, i.jsx)(ts, {
                                    server: e,
                                    onJoin: s,
                                    onViewPanel: l,
                                    onOpenSettings: a,
                                    isHighlighted: x === e.id,
                                }),
                            },
                            e.id,
                        ),
                    ),
                }),
            ],
        })
    );
}
var ti = n(705285),
    tr = n(199781),
    tc = n(923477),
    to = n(252589),
    td = n(55766),
    tu = n(758836),
    tm = n(111108);
function tg(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, i.jsx)(w.A, { children: (0, i.jsx)(th, { isGameServerHostingInShopEnabled: t }) });
}
function th(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, M.zy)(),
        s = (0, M.W6)(),
        { servers: l, refetch: a } = (0, td.f)(),
        c = l.length > 0,
        o = (0, y.bG)([S.default], () => Y.Ay.canUseShopDiscounts(S.default.getCurrentUser())),
        { games: d, hasError: u, isEmpty: m, isLoading: g, refetch: h } = (0, to.Y)();
    r.useEffect(() => {
        c && (0, G.hP)().catch(() => {});
    }, [c]);
    let E = r.useRef(d);
    r.useEffect(() => {
        d.length > 0 && (E.current = d);
    }, [d]);
    let f = r.useCallback(() => {
            (h(), a());
        }, [h, a]),
        x = (0, ti.VJ)(),
        [p, C] = r.useState({ serverId: null, nonce: 0 }),
        v = r.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = W.A.getGameServers();
                for (let s = n.length - 1; s >= 0; s--)
                    if (n[s].game_id === e.gameId) {
                        t = n[s].id;
                        break;
                    }
            }
            C((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        j = r.useCallback(() => {
            let e = l[0];
            null != e && v({ serverId: e.id });
        }, [l, v]),
        _ = (0, tc.O)((e) => e.highlightFirstCardNonce),
        A = r.useRef(_);
    r.useEffect(() => {
        if (_ === A.current) return;
        A.current = _;
        let e = requestAnimationFrame(() => j());
        return () => cancelAnimationFrame(e);
    }, [_, j]);
    let b = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ti.cl.SHOP_CARD;
                (x(ti.L5.OPEN_PLAN_MODAL, t),
                    (0, tr.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => v({ gameId: e.gameId }),
                    }));
            },
            [x, v],
        ),
        I = r.useMemo(() => {
            let e = new URLSearchParams(n.search).get(tu.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    r.useEffect(() => {
        if (!t || null == I || g || 0 === d.length) return;
        let e = d.find((e) => e.gameId === I);
        if (null == e) return;
        b(e, ti.cl.ACTIVITY_PANEL_DEEP_LINK);
        let l = new URLSearchParams(n.search);
        (l.delete(tu.tD), s.replace(`${n.pathname}?${l.toString()}`));
    }, [t, I, d, g, b, s, n.pathname, n.search]);
    let N = r.useCallback(() => {
            (F.A.setState({ scrollToGameServers: !0 }), (0, z.openUserSettings)(H.X.SUBSCRIPTIONS_PANEL));
        }, []),
        L = r.useCallback((e) => {
            let t = U.default.getId() ?? "0";
            (0, $.A)(t, e.instance);
        }, []),
        O = r.useCallback((e) => {
            (0, V.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        T = r.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = E.current.find((t) => t.gameId === e.gameId);
                function s(t) {
                    (0, tr.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: n?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => v({ serverId: e.id }),
                    });
                }
                let l = K.A.getSubscriptionById(t);
                null != l
                    ? s(l)
                    : (0, G.hP)()
                          .then(() => {
                              let e = K.A.getSubscriptionById(t);
                              null != e && s(e);
                          })
                          .catch(() => {});
            },
            [v],
        ),
        R = c ? el.intl.string(es.default["+aRmAc"]) : void 0;
    return (0, i.jsx)(B.Ch, {
        className: tm.XG,
        children: (0, i.jsxs)("div", {
            className: tm.kL,
            children: [
                !o && (0, i.jsx)(ei, {}),
                (0, i.jsx)(eR, {}),
                (0, i.jsxs)("div", {
                    className: tm.Qs,
                    children: [
                        (0, i.jsx)(eO, {}),
                        c &&
                            (0, i.jsx)(ta, {
                                servers: l,
                                onViewAll: N,
                                onJoin: L,
                                onViewPanel: O,
                                onOpenSettings: T,
                                highlightServerId: p.serverId,
                                highlightNonce: p.nonce,
                            }),
                        u || m
                            ? (0, i.jsx)(eu, { onRetry: f })
                            : (0, i.jsx)(eS, { games: d, title: R, onSelectGame: b, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var tE = n(578797),
    tf = n(38405),
    tx = n(4227),
    tp = n(856686),
    tC = n(364522),
    tv = n(783977),
    tj = n(564322),
    tS = n(354328),
    t_ = n(356118),
    tA = n(174459),
    tb = n(619835),
    tI = n(918467),
    tN = n(758461),
    tL = n(641150);
function tO() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, R.v)((e) => e),
        { totalCount: l, isFetchingResults: a } = (0, tp.S)(),
        c = (0, R.v)((e) => e.hasFilters()),
        o = r.useCallback(() => {
            if (!c) return "";
            if (a) return el.intl.string(el.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return el.intl.format(el.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(tL.q.AVATAR_DECORATION)) return el.intl.format(el.t.s1UzGQ, { count: l });
                if (e.has(tL.q.NAMEPLATE)) return el.intl.format(el.t.ZWGN9T, { count: l });
                if (e.has(tL.q.PROFILE_EFFECT)) return el.intl.format(el.t["v/7apu"], { count: l });
                if (e.has(tL.q.PROFILE_FRAME)) return el.intl.format(el.t.eu4eRy, { count: l });
                if (e.has(tL.q.BUNDLE)) return el.intl.format(el.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && n && !s
                ? el.intl.format(el.t.TxoTTj, { count: l })
                : 0 === e.size && s && !n
                  ? el.intl.format(el.t.TLso50, { count: l })
                  : el.intl.format(el.t["/rPvmQ"], { count: l });
        }, [e, l, c, t, a, n, s]);
    return (0, i.jsx)(ec.D, { variant: "heading-lg/semibold", children: o() });
}
var tT = n(172218),
    tR = n(932793),
    tM = n(511265),
    tk = n(206077),
    ty = n(100057),
    tP = n(828515),
    tD = n(484469),
    tB = n(761977),
    tG = n(170522),
    tw = n(295621);
let tF = function () {
    return (0, i.jsx)("div", {
        className: tw.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, i.jsxs)(
                "div",
                {
                    className: tG.vY,
                    children: [
                        (0, i.jsx)("div", { className: o()(tB.sW, tw.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, i.jsx)(tD.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tH = n(258245),
    tz = n(350172),
    tU = n(730202),
    tK = n(510801),
    tV = n(159439),
    tY = n(998694);
let tW = null,
    t$ = new Map();
function tZ(e) {
    let { category: t } = e,
        n = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
        s = (0, tk.X)(t.products),
        l = (0, tM.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: tG.vY,
              children: l.map((e, t) =>
                  (0, i.jsx)(
                      A.R9,
                      { newValue: { tilePosition: t }, children: (0, i.jsx)(tH.A, { skuId: e.skuId }, e.skuId) },
                      e.skuId,
                  ),
              ),
          });
}
function tq(e) {
    let { category: t, currentPage: n } = e,
        [s, l] = r.useState(!1),
        a = (0, tT.K)(function (e) {
            l(e);
        }, 0.15),
        c = (0, M.W6)(),
        o = (0, A.uM)(),
        d = r.useCallback(() => {
            var e;
            (tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: o?.sessionId,
                sku_id: t.skuId,
                page_type: tu.G2.CATALOG,
                page_section: o?.pageSection,
                page_category: t.name,
                page_index: o?.pageIndex,
                page_size: o?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e = t.skuId),
                (tW = e),
                null != e && null != n && t$.set(e, n),
                c.push(e6.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId)));
        }, [o?.pageIndex, o?.pageSection, o?.pageSize, o?.sessionId, t.name, t.skuId, n, c]);
    return (0, i.jsxs)("div", {
        className: tG.EF,
        ref: a,
        children: [(0, i.jsx)(tP.A, { category: t, onSelect: d }), (0, i.jsx)(tZ, { category: t })],
    });
}
function tQ(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: a } = e,
        c = (0, A.uM)(),
        o = (0, tV.U)(),
        d = c?.sessionId ?? "",
        { noCache: u, includeUnpublished: m } = (0, tY.A)(),
        g = (0, N.$)("collectibles_catalog"),
        {
            categories: h,
            total: E,
            isLoading: f,
        } = (function (e) {
            let { page: t, pageSize: n, includeUnpublished: s, noCache: l, enabled: a = !0 } = e,
                i = r.useMemo(
                    () => ({
                        applicationId: e6.FYj,
                        offset: (t - 1) * n,
                        limit: n,
                        useShopOrdering: !0,
                        includeUnpublishedProducts: s,
                        includeUnpublishedCollections: s,
                        ignoreCache: l,
                    }),
                    [t, n, s, l],
                ),
                c = (0, tz.H)(i),
                o = (0, tz.q7)(i);
            r.useEffect(() => {
                a && (0, tz.cS)(i);
            }, [a, i]);
            let {
                    collectionIds: d,
                    fetchState: u,
                    total: m,
                } = (0, y.cf)(
                    [tU.A],
                    () => ({
                        collectionIds: tU.A.getCollectionPageIds(c),
                        fetchState: tU.A.getCollectionPageFetchState(c),
                        total: tU.A.getCollectionListTotal(o),
                    }),
                    [c, o],
                ),
                g = d ?? [],
                h = g.join(","),
                E = (0, y.cf)(
                    [tU.A],
                    () => {
                        let e = {};
                        for (let t of g) e[t] = tU.A.getCollection(t);
                        return e;
                    },
                    [g],
                );
            return {
                categories: r.useMemo(
                    () =>
                        g
                            .map((e) => E[e])
                            .filter((e) => null != e)
                            .map((e) => tK.A.fromStorefrontCollectionRecord(e)),
                    [h, E],
                ),
                total: m ?? 0,
                isLoading: null == d && "error" !== u,
            };
        })({ page: s, pageSize: tu.l5, includeUnpublished: m, noCache: u, enabled: g }),
        x = r.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        p = r.useMemo(() => x.map((e) => e.skuId), [x]),
        C = r.useRef(void 0);
    r.useEffect(() => {
        let e;
        if (null == a) {
            C.current = void 0;
            return;
        }
        if (a !== C.current) {
            if (g) e = t$.get(a);
            else {
                let t = p.indexOf(a);
                e = -1 === t ? void 0 : Math.floor(t / tu.l5) + 1;
            }
            null != e && (e !== s && l(e), (C.current = a));
        }
    }, [a, g, p, l, s]);
    let v = r.useMemo(() => {
            if (g) return h.filter((e) => e.products.length > 0);
            let e = (s - 1) * tu.l5;
            return x.slice(e, e + tu.l5);
        }, [g, h, x, s]),
        j = g ? E : p.length,
        S = g ? f : o;
    return (r.useEffect(() => {
        (0, ty.z)({
            sessionId: d,
            checkpoint: ty.t.SHOP_MOUNTED,
            tab: tu.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: u,
        });
    }, []),
    r.useEffect(() => {
        S ||
            0 === v.length ||
            (0, ty.z)({
                sessionId: d,
                checkpoint: ty.t.SHOP_RENDERED,
                tab: tu.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: u,
            });
    }, [d, m, u, S, v.length]),
    S)
        ? (0, i.jsx)(tF, {})
        : (0, i.jsxs)("div", {
              className: tG.LZ,
              children: [
                  v.map((e, t) =>
                      (0, i.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": el.intl.formatToPlainString(el.t.FNtLb3, { category: e.name }),
                              children: (0, i.jsx)(A.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, i.jsx)(tq, { category: e, currentPage: s }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, i.jsx)("div", {
                      className: tG.Ej,
                      children: (0, i.jsx)(tR.m, {
                          currentPage: s,
                          totalCount: j,
                          pageSize: tu.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tX = n(177366),
    tJ = n(401864),
    t0 = n(124987),
    t1 = n(691885),
    t8 = n(783857),
    t4 = n(878278);
let t5 = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, R.v)(),
        s = (0, A.uM)(),
        l = (0, t8.yB)("CollectiblesSortSelect"),
        a = n(),
        c = r.useMemo(() => tu.QB.filter((e) => e.sortType !== t0.$.RELEVANCE || a), [a]),
        d = r.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === t0.$.RECENCY
                ? { label: el.intl.string(el.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === t0.$.PRICE
                  ? n === tJ.A.ASC
                      ? { label: el.intl.string(el.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: el.intl.string(el.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === t0.$.RELEVANCE
                    ? { label: el.intl.string(el.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: el.intl.string(el.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        u = r.useCallback(
            (e) =>
                ({
                    recent: { sortType: t0.$.RECENCY, sortDirection: tJ.A.DESC },
                    "price-asc": { sortType: t0.$.PRICE, sortDirection: tJ.A.ASC },
                    "price-desc": { sortType: t0.$.PRICE, sortDirection: tJ.A.DESC },
                    popularity: { sortType: t0.$.POPULARITY, sortDirection: tJ.A.DESC },
                    relevance: { sortType: t0.$.RELEVANCE, sortDirection: tJ.A.DESC },
                })[e],
            [],
        ),
        m = r.useCallback(
            (e) => {
                let n = d(u(e));
                (tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(u(e)));
            },
            [s, d, u, t],
        ),
        g = d(e);
    return (0, i.jsx)("div", {
        className: o()(t4.k, { [t8.jP]: l }),
        children: (0, i.jsx)(t1.l, {
            label: el.intl.string(el.t.uaX705),
            hideLabel: !0,
            options: c.map(d),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var t6 =
        (((l = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (l.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (l.PINK = "COLLECTIBLES_COLOR_PINK"),
        (l.RED = "COLLECTIBLES_COLOR_RED"),
        (l.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (l.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (l.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (l.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (l.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (l.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        l),
    t2 =
        (((a = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (a.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (a.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (a.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (a.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (a.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (a.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (a.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (a.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (a.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        a),
    t7 = n(150934),
    t3 = n(508770),
    t9 = n(278416),
    ne = n(602853),
    nt = n(661531),
    nn = n(947641),
    ns = n(604338),
    nl = n(785866),
    na = n(373846),
    ni = n(308323),
    nr = n(608599),
    nc = n(685761),
    no = n(157225),
    nd = n(413249),
    nu = n(510241),
    nm = n(601198),
    ng = n(872162),
    nh = n(890283),
    nE = n(7250),
    nf = n(582666);
function nx() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            onToggleOfferEligible: l,
            offerEligible: a,
            reset: c,
            hasFilters: d,
        } = (0, R.v)(),
        u = d(),
        m = (0, A.uM)(),
        g = r.useRef(null),
        h = (0, tN.HH)(),
        E = r.useCallback(
            (e) => {
                tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: m?.sessionId,
                    page_section: m?.pageSection,
                    page_category: m?.pageCategory,
                    page_index: m?.pageIndex,
                    page_size: m?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [m],
        ),
        f = r.useCallback(() => {
            (E(`filter 3p only ${!1 === s ? "on" : "off"}`), n());
        }, [n, s, E]);
    return (0, i.jsxs)("div", {
        className: nf.kT,
        children: [
            (0, i.jsxs)("div", {
                className: o()(nf.KZ, nf.YG),
                children: [
                    (0, i.jsx)("div", {
                        ref: g,
                        tabIndex: -1,
                        children: (0, i.jsx)(Q.E, {
                            variant: "text-md/semibold",
                            className: nf.hr,
                            children: el.intl.string(el.t.Qk6r1a),
                        }),
                    }),
                    null != h &&
                        (0, i.jsxs)("div", {
                            className: nf.Ym,
                            children: [
                                (0, i.jsx)(t7.S, {
                                    checked: a,
                                    onChange: () => {
                                        (E(`filter offer eligible ${!1 === a ? "on" : "off"}`), l());
                                    },
                                    label: el.intl.string(el.t.hY8Ft1),
                                }),
                                (0, i.jsx)(t3.E, { type: { text: el.intl.string(el.t["nb5PC/"]) }, icon: t9.TagIcon }),
                            ],
                        }),
                    tu._6.map((e) => (0, i.jsx)(np, { filter: e, trackFilterAction: E }, e)),
                    (0, i.jsx)(t7.S, {
                        checked: t,
                        onChange: () => {
                            (E(`filter orb eligible ${!1 === t ? "on" : "off"}`), e());
                        },
                        label: el.intl.string(el.t.AHHHgG),
                    }),
                    (0, i.jsx)(t7.S, { checked: s, onChange: f, label: el.intl.string(el.t["+W8gb+"]) }),
                ],
            }),
            (0, i.jsx)(nC, { trackFilterAction: E }),
            (0, i.jsx)(nS, { trackFilterAction: E }),
            u &&
                (0, i.jsx)(X.$, {
                    variant: "secondary",
                    onClick: () => {
                        (E("filter reset"), c(), requestAnimationFrame(() => g.current?.focus()));
                    },
                    text: el.intl.string(el.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function np(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [tL.q.AVATAR_DECORATION]: el.intl.string(el.t.dRZYNE),
            [tL.q.PROFILE_EFFECT]: el.intl.string(el.t["1cNjtx"]),
            [tL.q.NAMEPLATE]: el.intl.string(el.t.V68Fqz),
            [tL.q.PROFILE_FRAME]: el.intl.string(el.t.ecTJkR),
            [tL.q.BUNDLE]: el.intl.string(el.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: a } = (0, R.v)();
    return (0, i.jsx)(t7.S, {
        checked: l.has(t),
        onChange: () => {
            let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
            (n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t));
        },
        label: s[t] ?? "",
    });
}
function nC(e) {
    let { trackFilterAction: t } = e,
        n = r.useMemo(
            () => [
                { color: "#9B59B6", label: el.intl.string(el.t.kqUD4P), enum: t6.PURPLE },
                { color: "#3498DB", label: el.intl.string(el.t.qQTRae), enum: t6.BLUE },
                { color: "#2ECC71", label: el.intl.string(el.t["f/Ylk6"]), enum: t6.GREEN },
                { color: "#A0522D", label: el.intl.string(el.t["Sd/BMa"]), enum: t6.BROWN },
                { color: "#F1C40F", label: el.intl.string(el.t["0fevYz"]), enum: t6.YELLOW },
            ],
            [],
        ),
        s = r.useMemo(
            () => [
                { color: "#E67E22", label: el.intl.string(el.t.ZE7weD), enum: t6.ORANGE },
                { color: "#E74C3C", label: el.intl.string(el.t.hKJGOM), enum: t6.RED },
                { color: "#EC407A", label: el.intl.string(el.t.HvLEGM), enum: t6.PINK },
                { color: "#FFFFFF", label: el.intl.string(el.t["CB+lNO"]), enum: t6.WHITE },
                { color: "#262626", label: el.intl.string(el.t["dMey+v"]), enum: t6.BLACK },
            ],
            [],
        );
    return (0, i.jsxs)("div", {
        className: nf.KZ,
        children: [
            (0, i.jsx)(Q.E, { variant: "text-md/semibold", className: nf.hr, children: el.intl.string(el.t.K1xGoG) }),
            (0, i.jsx)(nv, { colors: n, trackFilterAction: t }),
            (0, i.jsx)(nv, { colors: s, trackFilterAction: t }),
        ],
    });
}
function nv(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, R.v)();
    return (0, i.jsx)("div", {
        className: nf.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: r } = e;
            return (0, i.jsx)(
                nj,
                { color: t, label: a, enum: r, isToggled: s.has(r), onToggleColor: l, trackFilterAction: n },
                r,
            );
        }),
    });
}
function nj(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: a, trackFilterAction: r } = e,
        c = (0, ne.r)(nt.A.unsafe_rawColors.WHITE).hex(),
        d = (0, ne.r)(nt.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, i.jsx)(
        eF.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(
                eG.D,
                {
                    className: o()(nf.n1, { [nf.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        (r(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), a(s));
                    },
                    children:
                        l &&
                        (0, i.jsx)("div", {
                            className: nf.oE,
                            children: (0, i.jsx)(nn.r, {
                                size: "xs",
                                color: (0, nE.j)({ backgroundColor: t, colors: [c, d] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nS(e) {
    let { trackFilterAction: t } = e,
        { enabled: n } = nh.A.useConfig({ location: "collectibles-shop-theme-filters" });
    return n ? (0, i.jsx)(nA, { trackFilterAction: t }) : (0, i.jsx)(n_, { trackFilterAction: t });
}
function n_(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, R.v)(),
        l = (0, eo.Ay)() === en.NJ.DARK,
        a = r.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        c = r.useCallback((e) => (n.has(e) || l ? nt.A.colors.WHITE : nt.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        d = r.useMemo(
            () => [
                {
                    name: el.intl.string(el.t.aVBOKh),
                    icon: (0, i.jsx)(ns.E, { size: "xs", color: c(t2.ANIME) }),
                    enum: t2.ANIME,
                },
                {
                    name: el.intl.string(el.t["3WoZBc"]),
                    icon: (0, i.jsx)(nl._, { size: "xs", color: c(t2.GAMING) }),
                    enum: t2.GAMING,
                },
                {
                    name: el.intl.string(el.t.yuEmLj),
                    icon: (0, i.jsx)(na.C, { size: "xs", color: c(t2.CUTE_COZY) }),
                    enum: t2.CUTE_COZY,
                },
                {
                    name: el.intl.string(el.t.mMvCHo),
                    icon: (0, i.jsx)(ni.L, { size: "xs", color: c(t2.SCI_FI) }),
                    enum: t2.SCI_FI,
                },
                {
                    name: el.intl.string(el.t.TlhOQC),
                    icon: (0, i.jsx)(nr.L, { size: "xs", color: c(t2.FOOD_DRINKS) }),
                    enum: t2.FOOD_DRINKS,
                },
                {
                    name: el.intl.string(el.t["4IaUIM"]),
                    icon: (0, i.jsx)(nc.f, { size: "xs", color: c(t2.FANTASY) }),
                    enum: t2.FANTASY,
                },
                {
                    name: el.intl.string(el.t["w0nSG/"]),
                    icon: (0, i.jsx)(no.N, { size: "xs", color: c(t2.ANIMALS_PETS) }),
                    enum: t2.ANIMALS_PETS,
                },
                {
                    name: el.intl.string(el.t.cJng7v),
                    icon: (0, i.jsx)(nd.p, { size: "xs", color: c(t2.NATURE) }),
                    enum: t2.NATURE,
                },
                {
                    name: el.intl.string(el.t["5mUvyM"]),
                    icon: (0, i.jsx)(nu.T, { size: "xs", color: c(t2.MOVIES_TV_SHOWS) }),
                    enum: t2.MOVIES_TV_SHOWS,
                },
                {
                    name: el.intl.string(el.t.MB9H5Z),
                    icon: (0, i.jsx)(nm.e, { size: "xs", color: c(t2.DARK_MOODY) }),
                    enum: t2.DARK_MOODY,
                },
            ],
            [c],
        );
    return (0, i.jsxs)("div", {
        className: nf.KZ,
        children: [
            (0, i.jsx)(Q.E, { variant: "text-md/semibold", className: nf.hr, children: el.intl.string(el.t.t1Ztrp) }),
            (0, i.jsx)("div", {
                className: nf.Ot,
                children: d.map((e) => {
                    let { name: l, icon: r, enum: c } = e;
                    return (0, i.jsxs)(
                        eG.D,
                        {
                            className: o()(nf.w4, { [nf.C7]: n.has(c) }),
                            "aria-label": l,
                            "aria-pressed": n.has(c),
                            onClick: () => {
                                let e = n.has(c);
                                (t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(c));
                            },
                            children: [r, (0, i.jsx)(Q.E, { color: a(c), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
function nA(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, R.v)(),
        l = r.useMemo(
            () => [
                { name: el.intl.string(el.t.aVBOKh), icon: ns.E, enum: t2.ANIME },
                { name: el.intl.string(el.t["3WoZBc"]), icon: nl._, enum: t2.GAMING },
                { name: el.intl.string(el.t.yuEmLj), icon: na.C, enum: t2.CUTE_COZY },
                { name: el.intl.string(el.t.mMvCHo), icon: ni.L, enum: t2.SCI_FI },
                { name: el.intl.string(el.t.TlhOQC), icon: nr.L, enum: t2.FOOD_DRINKS },
                { name: el.intl.string(el.t["4IaUIM"]), icon: nc.f, enum: t2.FANTASY },
                { name: el.intl.string(el.t["w0nSG/"]), icon: no.N, enum: t2.ANIMALS_PETS },
                { name: el.intl.string(el.t.cJng7v), icon: nd.p, enum: t2.NATURE },
                { name: el.intl.string(el.t["5mUvyM"]), icon: nu.T, enum: t2.MOVIES_TV_SHOWS },
                { name: el.intl.string(el.t.MB9H5Z), icon: nm.e, enum: t2.DARK_MOODY },
            ],
            [],
        ),
        a = r.useMemo(() => new Set(Array.from(n, (e) => String(e))), [n]);
    return (0, i.jsxs)("div", {
        className: nf.KZ,
        children: [
            (0, i.jsx)(Q.E, { variant: "text-md/semibold", className: nf.hr, children: el.intl.string(el.t.t1Ztrp) }),
            (0, i.jsx)(ng.C, {
                variant: "filter",
                selectionMode: "multiple",
                label: el.intl.string(el.t.t1Ztrp),
                items: l.map((e) => {
                    let { name: t, icon: n, enum: s } = e;
                    return { id: String(s), label: t, icon: n };
                }),
                selectedKeys: a,
                onSelectionChange: (e) => {
                    if ("all" === e) return;
                    let a = l.find((t) => {
                        let { enum: s } = t;
                        return e.has(String(s)) !== n.has(s);
                    });
                    if (null == a) return;
                    let i = n.has(a.enum);
                    (t(`filter theme ${a.name.toLowerCase()} ${!i ? "on" : "off"}`), s(a.enum));
                },
            }),
        ],
    });
}
var nb = n(561769),
    nI = n(66506);
function nN() {
    return (0, i.jsxs)("div", {
        className: nI.k,
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: el.intl.string(el.t.oezC3x),
                className: nI._,
            }),
            (0, i.jsx)(ec.D, { variant: "heading-xl/semibold", children: el.intl.string(el.t.oezC3x) }),
            (0, i.jsx)(Q.E, { variant: "text-md/medium", children: el.intl.string(el.t["Tc/Ndl"]) }),
        ],
    });
}
var nL = n(919303);
let nO = { flattenProductVariants: !0 };
function nT(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, A.uM)(),
        a = l?.sessionId ?? "",
        { noCache: c, includeUnpublished: d } = (0, tY.A)(),
        m = (0, N.$)("collectibles_filter_results"),
        g = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
        { skus: h, currentPage: E, totalCount: f, isFetchingResults: x } = (0, tp.S)(),
        p = (0, u.yK)([b.A], () => (m ? [] : b.A.getProductsBySkus(h))),
        C = r.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = h?.join("");
    r.useEffect(() => {
        C();
    }, [v, C]);
    let j = (0, tM.p)(),
        _ = r.useMemo(() => j(p), [j, p]),
        I = m ? h.length : _.length;
    r.useEffect(() => {
        t ||
            (0, ty.z)({
                sessionId: a,
                checkpoint: ty.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: d,
                cacheDisabled: c,
            });
    }, [a, d, c, t, s]);
    let L = r.useRef(null),
        { setQueryPageSize: O, setQueryPageOffset: T, queryPageSize: M } = (0, R.v)(),
        [k, y] = r.useState(!1),
        P = t || x || null == g;
    r.useEffect(() => {
        P ? y(!1) : I > 0 && y(!0);
    }, [P, I]);
    let D = M > 0 && !P && 0 === I;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == L.current || O(Math.floor(5 * getComputedStyle(L.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != L.current) return (e.observe(L.current), () => e.disconnect());
    }, [O]);
    let B = r.useCallback(
        (e) => {
            (tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: M,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                T((e - 1) * M));
        },
        [l, M, T],
    );
    return (0, i.jsxs)(nb.v3.Provider, {
        value: nO,
        children: [
            (0, i.jsxs)("div", {
                className: o()({ [nL.oE]: D }),
                children: [
                    D && (0, i.jsx)(nN, {}),
                    (0, i.jsxs)("div", {
                        className: o()(nL.ZE, { [nL.Kp]: k }),
                        ref: L,
                        children: [
                            P && [...Array(M)].map((e, t) => (0, i.jsx)(tD.A, {}, t)),
                            !P &&
                                m &&
                                h.map((e, t) =>
                                    (0, i.jsx)(
                                        A.R9,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, i.jsx)(tH.A, {
                                                skuId: e,
                                                hideStaticBundleBackgroundAsset: !0,
                                            }),
                                        },
                                        e,
                                    ),
                                ),
                            !P &&
                                !m &&
                                _.map((e, t) =>
                                    null == b.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, i.jsx)(
                                              A.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, i.jsx)(
                                                      tH.A,
                                                      { skuId: e.skuId, hideStaticBundleBackgroundAsset: !0 },
                                                      e.skuId,
                                                  ),
                                              },
                                              e.skuId,
                                          ),
                                ),
                        ],
                    }),
                ],
            }),
            f > M &&
                (0, i.jsx)("div", {
                    className: nL.Ej,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(tR.m, {
                            currentPage: E,
                            totalCount: f,
                            pageSize: M,
                            onPageChange: B,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nR = n(578364);
function nM(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e,
        c = (0, tS.A)("shop_include_unpublished");
    (!(function () {
        let e = (0, y.bG)([tI.A], () => "success" === tI.A.getFetchState(e6.FYj)),
            t = null != (0, tN.HH)(),
            { offerEligible: n, clearFilters: s } = (0, R.v)();
        r.useEffect(() => {
            n && e && !t && s();
        }, [n, e, t, s]);
    })(),
        (0, R.S)(c));
    let o = r.useRef(null),
        { handleScroll: d } = (0, tj.X)(o, t),
        u = (0, tE.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, tX.k0)(o.current),
        [h, E] = r.useState(l),
        [f, x] = r.useState(!1);
    return (
        r.useEffect(() => {
            null != s && g(s);
        }, [s, g]),
        r.useEffect(
            () => () => {
                null != a && a();
            },
            [],
        ),
        r.useEffect(() => {
            function e() {
                x(window.innerWidth < 1400);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        (0, i.jsx)("div", {
            className: nR.VM,
            children: (0, i.jsxs)("main", {
                className: nR.MY,
                children: [
                    (0, i.jsx)(B.Gt, {
                        className: nR.OW,
                        ref: o,
                        onScroll: d,
                        scrollbarGutter: "both-edges",
                        children: u
                            ? (0, i.jsx)("div", {
                                  className: nR.en,
                                  children: (0, i.jsx)("div", {
                                      className: nR.pf,
                                      children: (0, i.jsx)(t_.Z_, { tenantId: e6.FYj, templateId: tb.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, i.jsx)(nk, {
                                  isSmallScreen: f,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: o,
                                  categories: n,
                                  setCategoryRef: m,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !f && (0, i.jsx)("div", { className: nR.yF }),
                    h && !f && (0, i.jsx)(tC.Ip, { className: nR.kT, children: (0, i.jsx)(nx, {}) }),
                ],
            }),
        })
    );
}
function nk(e) {
    let {
            isSmallScreen: t,
            filterBarOpen: n,
            setFilterBarOpen: s,
            tab: l,
            scrollerRef: a,
            categories: c,
            setCategoryRef: d,
            initialCategoryId: u,
        } = e,
        m = r.useRef(null),
        g = (0, R.v)((e) => e.hasDefaultFilters()),
        h = (0, A.uM)(),
        { handlePageChange: E, currentPage: f } = (function (e) {
            let [t, n] = r.useState(1);
            return {
                currentPage: t,
                handlePageChange: r.useCallback(
                    (t) => {
                        (n(t), e.current?.scrollTo({ to: 0 }));
                    },
                    [e, n],
                ),
            };
        })(a),
        x = r.useCallback(
            (e) => {
                (tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    E(e));
            },
            [h, E],
        ),
        p = r.useRef(null);
    return (
        r.useEffect(() => {
            if (t && n)
                return (document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e));
            function e(e) {
                let t = e.target;
                null === m.current ||
                    null === p.current ||
                    m.current.contains(t) ||
                    p.current.contains(t) ||
                    (tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: h?.sessionId,
                        page_section: h?.pageSection,
                        page_category: h?.pageCategory,
                        page_index: h?.pageIndex,
                        page_size: h?.pageSize,
                        cta_name: "filter bar hide outside click",
                        page_type: "catalog",
                    }),
                    s(!1));
            }
        }, [t, n, s, h]),
        (0, i.jsx)("div", {
            className: nR.en,
            children: (0, i.jsxs)("div", {
                className: nR.pf,
                children: [
                    (0, i.jsxs)("div", {
                        className: nR.ne,
                        children: [
                            (0, i.jsx)("div", { className: nR.lQ, children: (0, i.jsx)(tO, {}) }),
                            (0, i.jsxs)("div", {
                                className: o()(nR.wR, { [nR.Im]: t }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nR.Ul,
                                        children: [
                                            (0, i.jsx)(Q.E, {
                                                variant: "text-md/semibold",
                                                children: el.intl.string(el.t.uaX705),
                                            }),
                                            (0, i.jsx)(t5, {}),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        ref: p,
                                        children: (0, i.jsx)(X.$, {
                                            onClick: function () {
                                                let e = !n;
                                                (tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e));
                                            },
                                            variant: "secondary",
                                            text: el.intl.string(n ? el.t.fYtm6f : el.t["TeTYE+"]),
                                            icon: tv.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, i.jsx)("div", {
                                    className: nR.Dh,
                                    ref: m,
                                    children: (0, i.jsx)(B.Ch, { className: nR.Qo, children: (0, i.jsx)(nx, {}) }),
                                }),
                        ],
                    }),
                    g
                        ? (0, i.jsx)(A.R9, {
                              newValue: { pageIndex: f },
                              children: (0, i.jsx)(tQ, {
                                  categories: c,
                                  setCategoryRef: d,
                                  currentPage: f,
                                  handlePageChange: x,
                                  initialCategoryId: u,
                              }),
                          })
                        : (0, i.jsx)(nT, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
}
var ny = n(599062),
    nP = n(628989),
    nD = n(154323),
    nB = n(815996),
    nG = n(295811),
    nw = n(870216);
let nF = { "Any:personalization-header": n(645501).A },
    nH = { [tb.b.SHOP_HOME]: nF },
    nz = { "1465939725649973269": nF, "1478495181551440044": nF },
    nU = function () {
        return (0, i.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, i.jsx)("div", {
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d")',
                    backgroundPosition: "center top",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.4,
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                },
            }),
        });
    };
var nK = n(613258),
    nV = n(105499);
let nY = { prioritizedCurrency: tu.Hi.ORBS };
function nW(e) {
    let { tab: t } = e,
        [n, s, l] = (0, y.yK)([nw.A], () => [nw.A.getLayout(t), nw.A.isFetchingLayout(t), nw.A.getLayoutFetchError(t)]),
        a = (0, y.bG)([nD.A], () => nD.A.get("shop_include_unpublished")),
        c = (0, y.bG)([b.A], () => b.A.skipNumCategories),
        o = r.useMemo(() => {
            let e = {};
            return (!0 === a && (e.include_unpublished = !0), null != c && c > 0 && (e.skip_num_categories = c), e);
        }, [a, c]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (r.useEffect(() => {
            d && (0, nB.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== k.HOME || d || s
            ? null
            : (0, i.jsx)(t_.Z_, {
                  tenantId: e6.FYj,
                  templateId: tb.b.SHOP_HOME,
                  requestParams: o,
                  overrides: nH[tb.b.SHOP_HOME],
              });
    let u = (0, i.jsx)(t_.Qs, { tenantId: e6.FYj, layoutId: n, overrides: nz[n] });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t === k.ORBS && (0, i.jsx)(nU, {}),
            t === k.ORBS ? (0, i.jsx)(nb.v3.Provider, { value: nY, children: u }) : u,
        ],
    });
}
function n$(e) {
    let { url: t } = e,
        [n, s] = r.useState(null);
    return (r.useEffect(() => {
        !(async function () {
            try {
                let e = await fetch(t),
                    n = await e.json();
                s(n);
            } catch (e) {
                s(null);
            }
        })();
    }, [t]),
    null == n)
        ? null
        : (0, i.jsx)(t_.Ay, { layout: n });
}
let nZ = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, A.uM)(),
        a = (0, y.bG)([nG.A], () => nG.A.getShopLayoutUrlOverride()),
        c = r.useRef(null),
        { handleScroll: d } = (0, tj.X)(c, n),
        [u, m] = r.useState(tu.md),
        [g, h] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (null != c.current) {
                function e() {
                    if (null == c.current) return;
                    let e = c.current.getDistanceFromBottom();
                    u >= 36 ? h(e < 20) : e <= 200 && m((e) => e + tu.md);
                }
                let t = c.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [c, u, m, h]),
        (0, i.jsx)(B.Ch, {
            className: nV.OW,
            ref: c,
            onScroll: d,
            children: (0, i.jsxs)("div", {
                className: nV.bx,
                children: [
                    (0, i.jsxs)("div", {
                        className: o()(nV.rb, nV.GS),
                        children: [
                            null != a && "" !== a ? (0, i.jsx)(n$, { url: a }) : (0, i.jsx)(nW, { tab: n }),
                            n !== k.CATALOG &&
                                u >= 36 &&
                                (0, i.jsxs)("div", {
                                    className: nV.R$,
                                    children: [
                                        (0, i.jsx)(ec.D, {
                                            variant: "heading-md/semibold",
                                            children: el.intl.string(el.t.Yr70c4),
                                        }),
                                        (0, i.jsx)(X.$, {
                                            variant: "primary",
                                            text: el.intl.string(el.t.AfrvRD),
                                            onClick: () => {
                                                (t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    tA.default.track(e6.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === k.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    }));
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsx)(nK.A, { peaking: g, transitioning: s === tu.Pf.OUT }),
                ],
            }),
        })
    );
};
var nq = n(417388);
let nQ = function () {
        return (0, i.jsxs)("div", {
            className: nq.z,
            children: [
                (0, i.jsx)("img", {
                    className: nq.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: el.intl.string(el.t["p8+qtU"]),
                }),
                (0, i.jsx)(ec.D, { variant: "heading-xl/semibold", children: el.intl.string(el.t["p8+qtU"]) }),
                (0, i.jsx)(Q.E, { variant: "text-md/medium", children: el.intl.string(el.t.UEiyvs) }),
            ],
        });
    },
    nX = [tu.G2.HOME, tu.G2.ORBS];
function nJ(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: a,
            refreshCategories: c,
        } = e,
        o = (0, y.bG)([b.A, tx.A], () =>
            null != b.A.error
                ? `shop load fetch categories error: ${b.A.error.message}`
                : null != tx.A.claimError
                  ? `shop load claim error: ${tx.A.claimError.message}`
                  : null != tx.A.fetchError
                    ? `shop load fetch purchase error: ${tx.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, y.bG)([S.default], () => S.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, tY.A)();
        r.useEffect(() => {
            null != e &&
                tf.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(o);
    let d = (0, D.H)({ location: "collectibles_content" }),
        u = (0, y.bG)([P.Ay], () => P.Ay.useReducedMotion),
        m = (0, M.W6)(),
        g = (0, M.zy)(),
        [h] = r.useState(() => {
            if ("POP" === m.action) {
                let e;
                return ((e = tW), (tW = null), e ?? void 0);
            }
        }),
        [E, f] = r.useState(h),
        [x, p] = r.useState(null == h),
        C = r.useMemo(() => {
            let e = new URLSearchParams(g.search).get(tu.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        v = r.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !tu.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        j = (0, tE.U)("CollectiblesContent"),
        _ = r.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), null != n && i && !r)) return void m.push(e6.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let c = l && !u,
                    o = r ? tu.G2.ORBS : tu.G2.CATALOG;
                (f(n), p(!i), s(o, c));
            },
            [u, s, a, m],
        ),
        { searchError: A } = (0, tp.S)();
    return null != A
        ? (0, i.jsx)(nQ, {})
        : null != o
          ? (0, i.jsx)(ny.h, { onRetry: c, errorMessage: o, errorOrigin: ny.A.SHOP_PAGE })
          : t === tu.G2.HOME && j
            ? (0, i.jsx)(nZ, { tab: k.HOME, transitionState: l, handleTransition: _ })
            : t === tu.G2.ORBS && j
              ? (0, i.jsx)(nZ, { tab: k.ORBS, transitionState: l, handleTransition: _ })
              : nX.includes(t)
                ? (0, i.jsx)(nP.A, { handleTransition: _, tab: t, transitionState: l })
                : t === tu.G2.GAME_SERVERS
                  ? d
                      ? (0, i.jsx)(tg, { isGameServerHostingInShopEnabled: d })
                      : (0, i.jsx)(M.rd, { to: e6.BVt.COLLECTIBLES_SHOP_WITH_TAB(tu.G2.HOME) })
                  : (0, i.jsx)(nM, {
                        tab: t,
                        categories: v,
                        initialCategoryId: E ?? C,
                        showFilterInitially: x && null == C,
                        onUnmount: () => {
                            (f(void 0), p(!0));
                        },
                    });
}
var n0 = n(626148),
    n1 = n(235939),
    n8 = n(976860),
    n4 = n(870308),
    n5 = n(650583);
function n6(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, m.useHasAnyModalOpen)();
    return (
        r.useEffect(() => {
            if (n && !l) return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
            function e(e) {
                e.key === n5.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let n2 = function (e) {
    let { tab: t = tu.G2.HOME } = e;
    (0, C.P)(p.a);
    let n = (0, E.A)((0, d.A)()),
        s = (0, u.bG)([S.default], () => S.default.getCurrentUser());
    (0, j.pE)();
    let l = (0, t8.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, M.zy)(),
                t = (0, M.g)(),
                n = r.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: r.useCallback(() => {
                    if (0 === s) {
                        ((0, n8.aX)(), (0, z.openUserSettings)());
                        return;
                    }
                    (0, n8.EL)() ? (0, n8.aX)() : (0, n8.pX)(e6.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: c, hasFilters: k } = (0, R.v)(),
        y = r.useMemo(() => (t === tu.G2.HOME && null != c && k() ? c : t), [t, c, k]);
    (0, v.A)(e6.FYj);
    let P = (0, N.$)("collectibles_shop"),
        { categories: D, refreshCategories: B } = (0, O.Ay)({ logPerf: !0, skipFetch: P }, { sessionId: n, tab: y });
    r.useEffect(() => {
        P && (0, _.rW)();
    }, [P]);
    let G = r.useMemo(() => [...D.values()], [D]),
        [w, F] = r.useState(),
        H = (0, u.bG)([b.A], () => b.A.getCategory(w)?.name),
        [U, K] = r.useState();
    (0, tX.XU)(n);
    let V = r.useCallback((e, t) => {
            (K(e), F(t));
        }, []),
        { selectedTab: Y, transitionState: W, transitionToTab: $ } = (0, T.o)(y);
    ((0, x.HU)({ location: el.intl.string(el.t.pWG4ze) }), (0, L.uS)(n, Y, H, W, U), (0, L.N0)(Y, s));
    let { dismissShopButtonDC: Z } = (0, n4.A)();
    (r.useEffect(() => {
        Z(e7.i.AUTO_DISMISS);
    }, [Z]),
        r.useEffect(() => {
            (0, h.I)(e6.BVt.COLLECTIBLES_SHOP);
        }, []));
    let q = r.useRef(null),
        Q = r.useRef(null);
    (0, g.tj)(q);
    let X = (0, m.useHasAnyModalOpen)();
    (r.useEffect(() => {
        Q.current?.focus();
    }, []),
        (0, t8.gB)());
    let { analyticsLocations: J } = (0, L.lC)(Y);
    return (0, i.jsx)(f.f5, {
        value: J,
        children: (0, i.jsx)(A.R9, {
            newValue: { sessionId: n, pageCategory: H, pageSize: tu.l5 },
            children: (0, i.jsx)(I.iM, {
                tab: Y,
                children: (0, i.jsx)(n6, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, i.jsxs)("div", {
                        className: o()(tG.bx, { [t8.jP]: l }),
                        ref: Q,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(n0.G, { handleTransition: $, selectedTab: Y }),
                            (0, i.jsx)(n1.A, { tab: Y, handleTransition: $ }),
                            (0, i.jsx)("div", {
                                className: o()(tG.td, {
                                    [tG.RK]: W === tu.Pf.VISIBLE,
                                    [tG.in]: W === tu.Pf.IN,
                                    [tG.FD]: W === tu.Pf.OUT,
                                }),
                                children: (0, i.jsx)(nJ, {
                                    tab: Y,
                                    refreshCategories: B,
                                    transitionToTab: $,
                                    transitionState: W,
                                    categories: G,
                                    updateAnalyticsState: V,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
