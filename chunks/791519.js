n.r(t), n.d(t, { default: () => n5 });
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
    x = n(688810),
    f = n(726249),
    p = n(475073),
    C = n(611924),
    v = n(744082),
    j = n(561794),
    _ = n(287809),
    S = n(440938),
    A = n(590180),
    b = n(161918),
    I = n(395856),
    N = n(790297),
    L = n(841702),
    O = n(983545),
    T = n(365491);
n(323874), n(14289), n(35956), n(321073);
var R = n(806163),
    M = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    k = n(17928),
    y = n(775602),
    P = n(196736),
    D = n(689175),
    B = n(277984),
    G = n(670735),
    w = n(790284),
    F = n(780964),
    H = n(766075),
    z = n(280450),
    U = n(166403),
    K = n(123917),
    V = n(158045),
    Y = n(814201),
    $ = n(581453),
    W = n(43990),
    Z = n(403581),
    q = n(834730),
    Q = n(821609),
    X = n(793574),
    J = n(75678),
    ee = n(202541),
    et = n(818348),
    en = n(344045),
    es = n(375708),
    el = n(876564);
function ea() {
    let e = r.useCallback(() => {
        (0, J.A)({ subscriptionTier: ee.pe.TIER_2, analyticsLocations: [X.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, i.jsx)(W.N, {
        theme: et.NJ.DARKER,
        children: (t) =>
            (0, i.jsxs)("div", {
                className: o()(el.vK, t),
                children: [
                    (0, i.jsxs)("div", {
                        className: el.Pf,
                        children: [
                            (0, i.jsx)(Z.t, {
                                className: el.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, i.jsx)(q.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: es.intl.string(en.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, i.jsx)(Q.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: Z.t,
                        text: es.intl.string(es.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var ei = n(462887),
    er = n(297264),
    ec = n(736653),
    eo = n(457865);
function ed(e) {
    let { onRetry: t, errorMessage: n } = e,
        s = (0, ec.Ay)(),
        l = (0, k.bG)([_.default], () => {
            let e = _.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, i.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, i.jsx)("img", {
                className: eo.Sl,
                src: (0, ei.M)(s) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, i.jsx)(er.D, { variant: "heading-xl/semibold", children: es.intl.string(es.t.i5SQ74) }),
            (0, i.jsx)(q.E, {
                className: eo.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: es.intl.string(es.t.F8FvUy),
            }),
            l &&
                null != n &&
                (0, i.jsx)(q.E, { variant: "text-sm/normal", color: "text-muted", children: "staff-only debug: " + n }),
            (0, i.jsx)(Q.$, { variant: "primary", text: es.intl.string(es.t["+hivLW"]), onClick: t }),
        ],
    });
}
var eu = n(349085),
    em = n(890856),
    eg = n(331322),
    eh = n(713517),
    eE = n(660669);
function ex(e) {
    let { name: t, coverUrl: n, fromPriceLabel: s, nitroFromPriceLabel: l, onClickCard: a, onClickViewPlans: c } = e,
        d = r.useRef(null),
        { isHoveringOrFocusing: u } = (0, eh.A)(d),
        m = (0, k.bG)([_.default], () => V.Ay.canUseShopDiscounts(_.default.getCurrentUser())) && null != l,
        g = m ? l : s,
        h = r.useCallback(
            (e) => {
                e.stopPropagation(), c?.();
            },
            [c],
        );
    return (0, i.jsxs)(em.s, {
        ref: d,
        onClick: a,
        "aria-label": t,
        className: o()(eE.Nr, { [eE.yo]: u }),
        children: [
            (0, i.jsx)("div", {
                className: eE.q4,
                "aria-hidden": !0,
                children: null != n && (0, i.jsx)("img", { className: eE.xy, src: n, alt: "" }),
            }),
            (0, i.jsxs)("div", {
                className: eE.Iv,
                children: [
                    null != n
                        ? (0, i.jsx)("img", { className: eE.N4, src: n, alt: "" })
                        : (0, i.jsx)("div", {
                              className: eE.WB,
                              children: (0, i.jsx)(q.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, i.jsx)("div", { className: eE.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: eE.qr,
                children: [
                    (0, i.jsxs)("div", {
                        className: eE.cs,
                        children: [
                            (0, i.jsx)(q.E, { variant: "text-md/medium", color: "text-strong", tag: "p", children: t }),
                            null != g &&
                                (0, i.jsx)("div", {
                                    className: eE.F1,
                                    children: (0, i.jsxs)(eg.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, i.jsxs)(eg.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    m &&
                                                        (0, i.jsx)(Z.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, i.jsx)(q.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: g,
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: es.intl.string(en.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: eE.E1,
                        children: (0, i.jsx)(Q.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: es.intl.string(en.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ef = n(469058);
function ep() {
    return (0, i.jsx)("div", {
        className: o()(eE.Nr, ef.s7, ef.U6),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: ef.qr,
            children: [(0, i.jsx)("div", { className: ef.w9 }), (0, i.jsx)("div", { className: ef.n2 })],
        }),
    });
}
var eC = n(901215);
let ev = r.memo(function (e) {
    let { game: t, onSelect: n } = e,
        s = r.useCallback(() => n(t), [t, n]),
        l = (0, eu.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, i.jsx)(ex, {
        name: t.name,
        coverUrl: l,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: s,
        onClickViewPlans: s,
    });
});
function ej(e) {
    let { games: t, title: n, onSelectGame: s, loading: l = !1 } = e;
    return (0, i.jsxs)("section", {
        className: eC.u,
        children: [
            null != n && (0, i.jsx)(er.D, { variant: "heading-lg/semibold", children: n }),
            (0, i.jsx)("div", {
                className: eC.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, i.jsx)(ep, {}, t))
                    : t.map((e) => (0, i.jsx)(ev, { game: e, onSelect: s }, e.id)),
            }),
        ],
    });
}
var e_ = n(32880),
    eS = n(410232),
    eA = n(231483),
    eb = n(339350),
    eI = n(28863),
    eN = n(442935);
function eL() {
    let e = r.useMemo(
        () => [
            { Icon: e_.DownloadIcon, label: es.intl.string(en.default.GJNQYz) },
            { Icon: eS.k, label: es.intl.string(en.default.pTinR2) },
            { Icon: eA.ShieldIcon, label: es.intl.string(en.default.s0N1nM) },
            { Icon: eb.Q, label: es.intl.string(en.default.NzrGEi) },
        ],
        [],
    );
    return (0, i.jsxs)("section", {
        className: eN.ZK,
        children: [
            (0, i.jsxs)("div", {
                className: eN.jE,
                children: [
                    (0, i.jsx)(er.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: es.intl.string(en.default.F5W36W),
                    }),
                    (0, i.jsxs)(q.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            es.intl.string(en.default.xMpGuO),
                            " ",
                            (0, i.jsx)(eI.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: es.intl.string(en.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: eN._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: eN.Tc,
                            children: [
                                (0, i.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, i.jsx)(q.E, {
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
var eO = n(305090);
function eT() {
    return (0, i.jsxs)("div", {
        className: eO.vK,
        children: [
            (0, i.jsx)("div", {
                className: eO.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, i.jsx)("div", { className: eO.Ge, "aria-hidden": !0 }),
            (0, i.jsx)("div", { className: eO.f5, "aria-hidden": !0 }),
        ],
    });
}
var eR = n(408278),
    eM = n(548411),
    ek = n(554830),
    ey = n(281445),
    eP = n(390544),
    eD = n(554146),
    eB = n(939249),
    eG = n(509434),
    ew = n(866665),
    eF = n(103271);
let eH = { TERTIARY: eF.Xe, SECONDARY: eF.Rm, PRIMARY: eF.zB },
    ez = { SIZE_24: eF.q1, SIZE_32: eF.Hb, SIZE_36: eF.VM },
    eU = r.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: s,
            color: l,
            size: a = ez.SIZE_32,
            icon: r,
            onMouseDown: c,
            onClick: d,
            disabled: u,
            focusProps: m,
        } = e;
        return (0, i.jsx)(ew.m, {
            asContainer: !0,
            text: s,
            shouldShow: !u,
            children: (0, i.jsx)(eB.D, {
                innerRef: t,
                "aria-label": s,
                "aria-disabled": u,
                className: o()(n, eF.x6, l, a, { [eF.r9]: u }),
                onMouseDown: c,
                onClick: (e) => {
                    d(e);
                },
                focusProps: m,
                children: r,
            }),
        });
    });
var eK = n(933832),
    eV = n(624479),
    eY = n(131607),
    e$ = n(427209),
    eW = n(95035),
    eZ = n(498480),
    eq = n(685743),
    eQ = n(981381),
    eX = n(342942),
    eJ = n(294454),
    e0 = n(625903),
    e1 = n(445927),
    e4 = n(376205);
function e5(e) {
    let { server: t, onOpenSettings: n } = e,
        s = t.instance.subscriptionId,
        l = (0, k.bG)(
            [U.A],
            () =>
                (0, e4.Yg)({
                    subscriptionId: s,
                    hasFetchedSubscriptions: U.A.hasFetchedSubscriptions(),
                    getSubscriptionById: (e) => U.A.getSubscriptionById(e),
                }),
            [s],
        ),
        a = (0, e1.A)(t.instance) && l,
        c = r.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, i.jsx)(eU, {
        color: eH.SECONDARY,
        size: ez.SIZE_24,
        icon: (0, i.jsx)(e0.SettingsIcon, { size: "custom", width: 14, height: 14, color: "currentColor" }),
        onClick: c,
        disabled: !a,
        tooltip: es.intl.string(en.default["feUiM/"]),
    });
}
var e8 = n(652215),
    e2 = n(628049),
    e6 = n(49999),
    e3 = n(684644);
let e7 = [eP.M.STARTUP_FAILED, eP.M.MISSING_STOCK, eP.M.PROVIDER_ERRORED, eP.M.DELETED];
function e9(e) {
    return `game-server-owned-card-${e}`;
}
function te(e) {
    let { gameServerId: t } = e,
        n = r.useCallback(() => {
            (0, eZ.Kz)(t).catch(() => {});
        }, [t]);
    return (0, i.jsx)("div", {
        className: e3.y7,
        children: (0, i.jsx)(Q.$, {
            fullWidth: !0,
            text: es.intl.string(en.default.TMzy7d),
            variant: "secondary",
            onClick: n,
        }),
    });
}
function tt() {
    let [e, t] = r.useState(!1),
        n = r.useCallback(() => {
            t(!0),
                (0, eZ.hU)()
                    .catch(() => {})
                    .finally(() => t(!1));
        }, []);
    return (0, i.jsx)("div", {
        className: e3.y7,
        children: (0, i.jsx)(Q.$, {
            fullWidth: !0,
            text: es.intl.string(en.default.BLEx3k),
            variant: "secondary",
            loading: e,
            onClick: n,
        }),
    });
}
let tn = r.memo(function (e) {
    let { server: t, onJoin: s, onViewPanel: l, onOpenSettings: a, isHighlighted: c = !1 } = e,
        d = (0, eu.A)(t.gameId, "cover") ?? t.coverUrl,
        u = (function (e) {
            let t = (0, k.bG)([U.A], () => (null != e ? U.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === e8.Dmq.CANCELED
                ? { text: es.intl.formatToPlainString(en.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: es.intl.formatToPlainString(en.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [g, h] = (0, eY.kn)([eD.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        E = g !== eD.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        x = ey.X.SHOCKBYTE,
        f = z.default.getId() ?? "0",
        { handleCopyServerIp: p, animateCopyIcon: C } = (0, eq.A)(f, t.id, X.A.GAME_SERVER_PAGE, t.serverIp),
        v = r.useCallback(() => {
            (0, eX.A)({
                provider: x,
                onAccept: () => {
                    h(e6.i.TAKE_ACTION), p();
                },
            });
        }, [x, h, p]),
        j = r.useCallback(() => {
            E
                ? s(t)
                : (0, eX.A)({
                      provider: x,
                      onAccept: () => {
                          h(e6.i.TAKE_ACTION), s(t);
                      },
                  });
        }, [E, x, h, s, t]),
        _ = r.useCallback(() => l(t), [l, t]),
        S = r.useCallback(() => {
            ((e) => {
                let { server: t, source: s } = e;
                (0, m.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("267732"),
                            n.e("225307"),
                            n.e("332165"),
                            n.e("618416"),
                            n.e("524434"),
                            n.e("533158"),
                            n.e("721642"),
                            n.e("130891"),
                            n.e("279926"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("591751"),
                            n.e("401518"),
                            n.e("323354"),
                            n.e("368062"),
                            n.e("844780"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("523601"),
                            n.e("835868"),
                        ]).then(n.bind(n, 729751));
                        return (n) => (0, i.jsx)(e, { ...n, server: t, source: s });
                    },
                    { stackingBehavior: "stack", modalKey: eJ.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        A = (0, eQ.A)(t.instance.providerType, t.instance.gameServerPanelUrl) ?? e2.qb[x],
        b = null != t.instance.gameServerPanelUrl,
        I = null != t.instance.status && e7.includes(t.instance.status),
        N = r.useCallback(() => {
            (0, K.h)({ href: A });
        }, [A]),
        L = r.useMemo(() => {
            switch (t.instance.status) {
                case eP.M.ONLINE:
                    return es.intl.string(en.default["60kAzo"]);
                case eP.M.OFFLINE:
                    return es.intl.string(en.default["Ys/RrB"]);
                case eP.M.SLEEPING:
                    return es.intl.string(en.default.y0z8ZO);
                case eP.M.STARTUP_FAILED:
                    return es.intl.string(en.default["7C9Z3s"]);
                case eP.M.MISSING_STOCK:
                    return es.intl.string(en.default["+a5G2l"]);
                case eP.M.PROVIDER_ERRORED:
                    return es.intl.string(en.default["6g/oji"]);
                case eP.M.DELETED:
                    return es.intl.string(en.default.Z1NZwX);
                case eP.M.STARTING:
                    return es.intl.string(en.default.SgjaXI);
                default:
                    return "\u2014";
            }
        }, [t.instance.status]),
        O = t.isOnline ? "text-feedback-positive" : I ? "text-feedback-critical" : "text-muted",
        T = r.useMemo(
            () =>
                (0, i.jsx)(eB.D, {
                    className: o()(e3.wC, e3.QV),
                    onClick: j,
                    "aria-label": es.intl.string(en.default["fQCcM/"]),
                    children: (0, i.jsx)(q.E, {
                        variant: "text-sm/semibold",
                        color: "none",
                        children: es.intl.string(en.default["fQCcM/"]),
                    }),
                }),
            [j],
        ),
        R = r.useMemo(
            () =>
                (0, i.jsxs)(eB.D, {
                    className: o()(e3.wC, e3.y2, { [e3.Gz]: !b }),
                    onClick: b ? _ : void 0,
                    "aria-disabled": !b,
                    "aria-label": es.intl.string(en.default.tkbVdf),
                    children: [
                        (0, i.jsx)(q.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: es.intl.string(en.default.tkbVdf),
                        }),
                        (0, i.jsx)(eG.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                    ],
                }),
            [_, b],
        ),
        M = r.useMemo(() => {
            switch (t.instance.status) {
                case eP.M.SLEEPING:
                    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(te, { gameServerId: t.id }), R] });
                case eP.M.STARTUP_FAILED:
                case eP.M.MISSING_STOCK:
                    return (0, i.jsx)("div", {
                        className: e3.y7,
                        children: (0, i.jsx)(Q.$, {
                            fullWidth: !0,
                            text: es.intl.string(en.default.gWMqnI),
                            variant: "primary",
                            icon: eG.I,
                            iconPosition: "end",
                            disabled: !b,
                            onClick: _,
                        }),
                    });
                case eP.M.PROVIDER_ERRORED:
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", {
                                className: e3.y7,
                                children: (0, i.jsx)(Q.$, {
                                    fullWidth: !0,
                                    text: es.intl.string(en.default.bBkeMs),
                                    variant: "secondary",
                                    onClick: N,
                                }),
                            }),
                            (0, i.jsx)(tt, {}),
                        ],
                    });
                case eP.M.DELETED:
                    return R;
                default:
                    return (0, i.jsxs)(i.Fragment, { children: [T, R] });
            }
        }, [t.instance.status, t.id, b, T, R, _, N]);
    return (0, i.jsxs)("div", {
        id: e9(t.id),
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
                    (0, i.jsx)(eU, {
                        color: eH.SECONDARY,
                        size: ez.SIZE_24,
                        icon: (0, i.jsx)(e$.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: S,
                        tooltip: es.intl.string(es.t.RDE0Sc),
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
                                              children: (0, i.jsx)(q.E, {
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
                                    (0, i.jsx)(q.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, i.jsx)(q.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != u &&
                                        (0, i.jsx)(q.E, {
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
                                            (0, i.jsx)(q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: es.intl.string(en.default.bDdi7n),
                                            }),
                                            (0, i.jsx)(q.E, {
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
                                            (0, i.jsx)(q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: es.intl.string(en.default["7phwMG"]),
                                            }),
                                            E
                                                ? (0, i.jsxs)("div", {
                                                      className: e3.Yb,
                                                      children: [
                                                          (0, i.jsx)(q.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, i.jsx)(eB.D, {
                                                                  className: e3.cL,
                                                                  onClick: p,
                                                                  "aria-label": es.intl.string(es.t.OpuAlK),
                                                                  children: C
                                                                      ? (0, i.jsx)(eK.CheckmarkLargeIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, i.jsx)(eV.CopyIcon, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(eW.A, {
                                                      onClick: v,
                                                      children: es.intl.string(en.default["f+F7H3"]),
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
                                            (0, i.jsx)(q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: es.intl.string(en.default["n+ZX7y"]),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: e3.Yb,
                                                children: [
                                                    (t.isOnline || I) &&
                                                        (0, i.jsx)("span", {
                                                            className: o()(e3.kg, { [e3.rU]: I }),
                                                            "aria-hidden": !0,
                                                        }),
                                                    (0, i.jsx)(q.E, {
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
                                            (0, i.jsx)(q.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: es.intl.string(en.default.mJlz3T),
                                            }),
                                            (0, i.jsx)(q.E, {
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
var ts = n(367016);
function tl(e) {
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
        [E, x] = r.useState(!1),
        [f, p] = r.useState(null),
        C = r.useCallback(() => {
            let e = u.current;
            null != e && (h(e.scrollLeft > 1), x(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    r.useLayoutEffect(() => {
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
        }, [C]);
    let v = r.useCallback(() => {
            u.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        j = r.useCallback(() => {
            u.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        r.useEffect(() => {
            if (d <= 0) return;
            let e = null != c ? document.getElementById(e9(c)) : m.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    p(null), (t = requestAnimationFrame(() => p(c)));
                });
            return () => {
                cancelAnimationFrame(n), cancelAnimationFrame(t);
            };
        }, [d, c]),
        r.useEffect(() => {
            if (null == f) return;
            let e = setTimeout(() => p(null), 4e3);
            return () => clearTimeout(e);
        }, [f]),
        (0, i.jsxs)("section", {
            className: ts.uW,
            ref: m,
            children: [
                (0, i.jsxs)("div", {
                    className: ts.wx,
                    children: [
                        (0, i.jsx)(er.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: es.intl.string(en.default.BOWmmT),
                        }),
                        (0, i.jsx)(W.N, {
                            theme: et.NJ.DARKER,
                            children: (e) =>
                                (0, i.jsxs)("div", {
                                    className: o()(ts.$s, e),
                                    children: [
                                        (0, i.jsx)(Q.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: es.intl.string(es.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: ts.d$,
                                            children: [
                                                (0, i.jsx)(eR.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eM.Z,
                                                    disabled: !g,
                                                    onClick: v,
                                                    "aria-label": es.intl.string(es.t["13/7kX"]),
                                                }),
                                                (0, i.jsx)(eR.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: ek.K,
                                                    disabled: !E,
                                                    onClick: j,
                                                    "aria-label": es.intl.string(es.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: o()(ts.XG, { [ts.OW]: g && E, [ts.vL]: g && !E, [ts.y0]: E && !g }),
                    ref: u,
                    onScroll: C,
                    children: t.map((e) =>
                        (0, i.jsx)(
                            "div",
                            {
                                className: ts.AV,
                                children: (0, i.jsx)(tn, {
                                    server: e,
                                    onJoin: s,
                                    onViewPanel: l,
                                    onOpenSettings: a,
                                    isHighlighted: f === e.id,
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
var ta = n(705285),
    ti = n(199781),
    tr = n(923477),
    tc = n(252589),
    to = n(55766),
    td = n(758836),
    tu = n(111108);
function tm(e) {
    let { isGameServerHostingInShopEnabled: t } = e;
    return (0, i.jsx)(G.A, { children: (0, i.jsx)(tg, { isGameServerHostingInShopEnabled: t }) });
}
function tg(e) {
    let { isGameServerHostingInShopEnabled: t } = e,
        n = (0, R.zy)(),
        s = (0, R.W6)(),
        { servers: l, refetch: a } = (0, to.f)(),
        c = l.length > 0,
        o = (0, k.bG)([_.default], () => V.Ay.canUseShopDiscounts(_.default.getCurrentUser())),
        { games: d, hasError: u, isEmpty: m, isLoading: g, refetch: h } = (0, tc.Y)();
    r.useEffect(() => {
        c && (0, B.hP)().catch(() => {});
    }, [c]);
    let E = r.useRef(d);
    r.useEffect(() => {
        d.length > 0 && (E.current = d);
    }, [d]);
    let x = r.useCallback(() => {
            h(), a();
        }, [h, a]),
        f = (0, ta.VJ)(),
        [p, C] = r.useState({ serverId: null, nonce: 0 }),
        v = r.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = Y.A.getGameServers();
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
        S = (0, tr.O)((e) => e.highlightFirstCardNonce),
        A = r.useRef(S);
    r.useEffect(() => {
        if (S === A.current) return;
        A.current = S;
        let e = requestAnimationFrame(() => j());
        return () => cancelAnimationFrame(e);
    }, [S, j]);
    let b = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ta.cl.SHOP_CARD;
                f(ta.L5.OPEN_PLAN_MODAL, t),
                    (0, ti.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => v({ gameId: e.gameId }),
                    });
            },
            [f, v],
        ),
        I = r.useMemo(() => {
            let e = new URLSearchParams(n.search).get(td.tD);
            return null != e && "" !== e ? e : void 0;
        }, [n.search]);
    r.useEffect(() => {
        if (!t || null == I || g || 0 === d.length) return;
        let e = d.find((e) => e.gameId === I);
        if (null == e) return;
        b(e, ta.cl.ACTIVITY_PANEL_DEEP_LINK);
        let l = new URLSearchParams(n.search);
        l.delete(td.tD), s.replace(`${n.pathname}?${l.toString()}`);
    }, [t, I, d, g, b, s, n.pathname, n.search]);
    let N = r.useCallback(() => {
            w.A.setState({ scrollToGameServers: !0 }), (0, H.openUserSettings)(F.X.SUBSCRIPTIONS_PANEL);
        }, []),
        L = r.useCallback((e) => {
            let t = z.default.getId() ?? "0";
            (0, $.A)(t, e.instance);
        }, []),
        O = r.useCallback((e) => {
            (0, K.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        T = r.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = E.current.find((t) => t.gameId === e.gameId);
                function s(t) {
                    (0, ti.S)({
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
                let l = U.A.getSubscriptionById(t);
                null != l
                    ? s(l)
                    : (0, B.hP)()
                          .then(() => {
                              let e = U.A.getSubscriptionById(t);
                              null != e && s(e);
                          })
                          .catch(() => {});
            },
            [v],
        ),
        M = c ? es.intl.string(en.default["+aRmAc"]) : void 0;
    return (0, i.jsx)(D.Ch, {
        className: tu.XG,
        children: (0, i.jsxs)("div", {
            className: tu.kL,
            children: [
                !o && (0, i.jsx)(ea, {}),
                (0, i.jsx)(eT, {}),
                (0, i.jsxs)("div", {
                    className: tu.Qs,
                    children: [
                        (0, i.jsx)(eL, {}),
                        c &&
                            (0, i.jsx)(tl, {
                                servers: l,
                                onViewAll: N,
                                onJoin: L,
                                onViewPanel: O,
                                onOpenSettings: T,
                                highlightServerId: p.serverId,
                                highlightNonce: p.nonce,
                            }),
                        u || m
                            ? (0, i.jsx)(ed, { onRetry: x })
                            : (0, i.jsx)(ej, { games: d, title: M, onSelectGame: b, loading: g }),
                    ],
                }),
            ],
        }),
    });
}
var th = n(578797),
    tE = n(38405),
    tx = n(4227),
    tf = n(50920),
    tp = n(856686),
    tC = n(364522),
    tv = n(783977),
    tj = n(564322),
    t_ = n(354328),
    tS = n(356118),
    tA = n(174459),
    tb = n(619835),
    tI = n(918467),
    tN = n(80151),
    tL = n(641150);
function tO() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, T.v)((e) => e),
        { totalCount: l, isFetchingResults: a } = (0, tp.S)(),
        c = (0, T.v)((e) => e.hasFilters()),
        o = r.useCallback(() => {
            if (!c) return "";
            if (a) return es.intl.string(es.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return es.intl.format(es.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(tL.q.AVATAR_DECORATION)) return es.intl.format(es.t.s1UzGQ, { count: l });
                if (e.has(tL.q.NAMEPLATE)) return es.intl.format(es.t.ZWGN9T, { count: l });
                if (e.has(tL.q.PROFILE_EFFECT)) return es.intl.format(es.t["v/7apu"], { count: l });
                if (e.has(tL.q.PROFILE_FRAME)) return es.intl.format(es.t.eu4eRy, { count: l });
                if (e.has(tL.q.BUNDLE)) return es.intl.format(es.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && n && !s
                ? es.intl.format(es.t.TxoTTj, { count: l })
                : 0 === e.size && s && !n
                  ? es.intl.format(es.t.TLso50, { count: l })
                  : es.intl.format(es.t["/rPvmQ"], { count: l });
        }, [e, l, c, t, a, n, s]);
    return (0, i.jsx)(er.D, { variant: "heading-lg/semibold", children: o() });
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
let t$ = null,
    tW = new Map();
function tZ(e) {
    let { category: t } = e,
        n = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        s = (0, tk.X)(t.products),
        l = (0, tM.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: tG.vY,
              children: l.map((e, t) =>
                  (0, i.jsx)(
                      S.R9,
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
        c = (0, R.W6)(),
        o = (0, tf.a)("CollectiblesCatalogContent"),
        d = (0, S.uM)(),
        u = r.useCallback(() => {
            var e;
            tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: d?.sessionId,
                sku_id: t.skuId,
                page_type: td.G2.CATALOG,
                page_section: d?.pageSection,
                page_category: t.name,
                page_index: d?.pageIndex,
                page_size: d?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (e = t.skuId),
                (t$ = e),
                null != e && null != n && tW.set(e, n),
                c.push(e8.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [d?.pageIndex, d?.pageSection, d?.pageSize, d?.sessionId, t.name, t.skuId, n, c]);
    return (0, i.jsxs)("div", {
        className: tG.EF,
        ref: a,
        children: [(0, i.jsx)(tP.A, { category: t, onSelect: o ? u : void 0 }), (0, i.jsx)(tZ, { category: t })],
    });
}
function tQ(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: a } = e,
        c = (0, S.uM)(),
        o = (0, tV.U)(),
        d = c?.sessionId ?? "",
        { noCache: u, includeUnpublished: m } = (0, tY.A)(),
        g = (0, I.$)("collectibles_catalog"),
        {
            categories: h,
            total: E,
            isLoading: x,
        } = (function (e) {
            let { page: t, pageSize: n, includeUnpublished: s, noCache: l, enabled: a = !0 } = e,
                i = r.useMemo(
                    () => ({
                        applicationId: e8.FYj,
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
                } = (0, k.cf)(
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
                E = (0, k.cf)([tU.A], () => {
                    let e = {};
                    for (let t of g) e[t] = tU.A.getCollection(t);
                    return e;
                }, [g]);
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
        })({ page: s, pageSize: td.l5, includeUnpublished: m, noCache: u, enabled: g }),
        f = r.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        p = r.useMemo(() => f.map((e) => e.skuId), [f]),
        C = r.useRef(void 0);
    r.useEffect(() => {
        let e;
        if (null == a) {
            C.current = void 0;
            return;
        }
        if (a !== C.current) {
            if (g) e = tW.get(a);
            else {
                let t = p.indexOf(a);
                e = -1 === t ? void 0 : Math.floor(t / td.l5) + 1;
            }
            null != e && (e !== s && l(e), (C.current = a));
        }
    }, [a, g, p, l, s]);
    let v = r.useMemo(() => {
            if (g) return h.filter((e) => e.products.length > 0);
            let e = (s - 1) * td.l5;
            return f.slice(e, e + td.l5);
        }, [g, h, f, s]),
        j = g ? E : p.length,
        _ = g ? x : o;
    return (r.useEffect(() => {
        (0, ty.z)({
            sessionId: d,
            checkpoint: ty.t.SHOP_MOUNTED,
            tab: td.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: u,
        });
    }, []),
    r.useEffect(() => {
        _ ||
            0 === v.length ||
            (0, ty.z)({
                sessionId: d,
                checkpoint: ty.t.SHOP_RENDERED,
                tab: td.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: u,
            });
    }, [d, m, u, _, v.length]),
    _)
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
                              "aria-label": es.intl.formatToPlainString(es.t.FNtLb3, { category: e.name }),
                              children: (0, i.jsx)(S.R9, {
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
                          pageSize: td.l5,
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
    t4 = n(146919),
    t5 = n(878278);
let t8 = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, T.v)(),
        s = (0, S.uM)(),
        l = (0, t4.yB)("CollectiblesSortSelect"),
        a = n(),
        c = r.useMemo(() => td.QB.filter((e) => e.sortType !== t0.$.RELEVANCE || a), [a]),
        d = r.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === t0.$.RECENCY
                ? { label: es.intl.string(es.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === t0.$.PRICE
                  ? n === tJ.A.ASC
                      ? { label: es.intl.string(es.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: es.intl.string(es.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === t0.$.RELEVANCE
                    ? { label: es.intl.string(es.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: es.intl.string(es.t.Y68e5p), value: "popularity", id: "popularity" };
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
                tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(u(e));
            },
            [s, d, u, t],
        ),
        g = d(e);
    return (0, i.jsx)("div", {
        className: o()(t5.k, { [t4.jP]: l }),
        children: (0, i.jsx)(t1.l, {
            label: es.intl.string(es.t.uaX705),
            hideLabel: !0,
            options: c.map(d),
            onSelectionChange: m,
            value: g.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var t2 =
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
    t6 =
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
    t3 = n(150934),
    t7 = n(508770),
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
    ng = n(7250),
    nh = n(13875),
    nE = n(582666);
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
        } = (0, T.v)(),
        u = d(),
        m = (0, nh.sk)("FilterBar"),
        g = (0, S.uM)(),
        h = r.useRef(null),
        E = (0, tN.A)(),
        x = r.useMemo(() => td._6.filter((e) => m || e !== tL.q.PROFILE_FRAME), [m]),
        f = r.useCallback(
            (e) => {
                tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    page_index: g?.pageIndex,
                    page_size: g?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [g],
        ),
        p = r.useCallback(() => {
            f(`filter 3p only ${!1 === s ? "on" : "off"}`), n();
        }, [n, s, f]);
    return (0, i.jsxs)("div", {
        className: nE.kT,
        children: [
            (0, i.jsxs)("div", {
                className: o()(nE.KZ, nE.YG),
                children: [
                    (0, i.jsx)("div", {
                        ref: h,
                        tabIndex: -1,
                        children: (0, i.jsx)(q.E, {
                            variant: "text-md/semibold",
                            className: nE.hr,
                            children: es.intl.string(es.t.Qk6r1a),
                        }),
                    }),
                    null != E &&
                        (0, i.jsxs)("div", {
                            className: nE.Ym,
                            children: [
                                (0, i.jsx)(t3.S, {
                                    checked: a,
                                    onChange: () => {
                                        f(`filter offer eligible ${!1 === a ? "on" : "off"}`), l();
                                    },
                                    label: es.intl.string(es.t.hY8Ft1),
                                }),
                                (0, i.jsx)(t7.E, { type: { text: es.intl.string(es.t["nb5PC/"]) }, icon: t9.TagIcon }),
                            ],
                        }),
                    x.map((e) => (0, i.jsx)(nf, { filter: e, trackFilterAction: f }, e)),
                    (0, i.jsx)(t3.S, {
                        checked: t,
                        onChange: () => {
                            f(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: es.intl.string(es.t.AHHHgG),
                    }),
                    (0, i.jsx)(t3.S, { checked: s, onChange: p, label: es.intl.string(es.t["+W8gb+"]) }),
                ],
            }),
            (0, i.jsx)(np, { trackFilterAction: f }),
            (0, i.jsx)(nj, { trackFilterAction: f }),
            u &&
                (0, i.jsx)(Q.$, {
                    variant: "secondary",
                    onClick: () => {
                        f("filter reset"), c(), requestAnimationFrame(() => h.current?.focus());
                    },
                    text: es.intl.string(es.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function nf(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [tL.q.AVATAR_DECORATION]: es.intl.string(es.t.dRZYNE),
            [tL.q.PROFILE_EFFECT]: es.intl.string(es.t["1cNjtx"]),
            [tL.q.NAMEPLATE]: es.intl.string(es.t.V68Fqz),
            [tL.q.PROFILE_FRAME]: es.intl.string(es.t.ecTJkR),
            [tL.q.BUNDLE]: es.intl.string(es.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: a } = (0, T.v)(),
        r = (0, i.jsx)(t3.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t);
            },
            label: s[t] ?? "",
        });
    return t === tL.q.PROFILE_FRAME
        ? (0, i.jsxs)("div", { className: nE.Ym, children: [r, (0, i.jsx)(t7.E, { type: "new" })] })
        : r;
}
function np(e) {
    let { trackFilterAction: t } = e,
        n = r.useMemo(
            () => [
                { color: "#9B59B6", label: es.intl.string(es.t.kqUD4P), enum: t2.PURPLE },
                { color: "#3498DB", label: es.intl.string(es.t.qQTRae), enum: t2.BLUE },
                { color: "#2ECC71", label: es.intl.string(es.t["f/Ylk6"]), enum: t2.GREEN },
                { color: "#A0522D", label: es.intl.string(es.t["Sd/BMa"]), enum: t2.BROWN },
                { color: "#F1C40F", label: es.intl.string(es.t["0fevYz"]), enum: t2.YELLOW },
            ],
            [],
        ),
        s = r.useMemo(
            () => [
                { color: "#E67E22", label: es.intl.string(es.t.ZE7weD), enum: t2.ORANGE },
                { color: "#E74C3C", label: es.intl.string(es.t.hKJGOM), enum: t2.RED },
                { color: "#EC407A", label: es.intl.string(es.t.HvLEGM), enum: t2.PINK },
                { color: "#FFFFFF", label: es.intl.string(es.t["CB+lNO"]), enum: t2.WHITE },
                { color: "#262626", label: es.intl.string(es.t["dMey+v"]), enum: t2.BLACK },
            ],
            [],
        );
    return (0, i.jsxs)("div", {
        className: nE.KZ,
        children: [
            (0, i.jsx)(q.E, { variant: "text-md/semibold", className: nE.hr, children: es.intl.string(es.t.K1xGoG) }),
            (0, i.jsx)(nC, { colors: n, trackFilterAction: t }),
            (0, i.jsx)(nC, { colors: s, trackFilterAction: t }),
        ],
    });
}
function nC(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, T.v)();
    return (0, i.jsx)("div", {
        className: nE.OW,
        children: t.map((e) => {
            let { color: t, label: a, enum: r } = e;
            return (0, i.jsx)(
                nv,
                { color: t, label: a, enum: r, isToggled: s.has(r), onToggleColor: l, trackFilterAction: n },
                r,
            );
        }),
    });
}
function nv(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: a, trackFilterAction: r } = e,
        c = (0, ne.r)(nt.A.unsafe_rawColors.WHITE).hex(),
        d = (0, ne.r)(nt.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, i.jsx)(
        ew.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(
                eB.D,
                {
                    className: o()(nE.n1, { [nE.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        r(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), a(s);
                    },
                    children:
                        l &&
                        (0, i.jsx)("div", {
                            className: nE.oE,
                            children: (0, i.jsx)(nn.r, {
                                size: "xs",
                                color: (0, ng.j)({ backgroundColor: t, colors: [c, d] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nj(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, T.v)(),
        l = (0, ec.Ay)() === et.NJ.DARK,
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
                    name: es.intl.string(es.t.aVBOKh),
                    icon: (0, i.jsx)(ns.E, { size: "xs", color: c(t6.ANIME) }),
                    enum: t6.ANIME,
                },
                {
                    name: es.intl.string(es.t["3WoZBc"]),
                    icon: (0, i.jsx)(nl._, { size: "xs", color: c(t6.GAMING) }),
                    enum: t6.GAMING,
                },
                {
                    name: es.intl.string(es.t.yuEmLj),
                    icon: (0, i.jsx)(na.C, { size: "xs", color: c(t6.CUTE_COZY) }),
                    enum: t6.CUTE_COZY,
                },
                {
                    name: es.intl.string(es.t.mMvCHo),
                    icon: (0, i.jsx)(ni.L, { size: "xs", color: c(t6.SCI_FI) }),
                    enum: t6.SCI_FI,
                },
                {
                    name: es.intl.string(es.t.TlhOQC),
                    icon: (0, i.jsx)(nr.L, { size: "xs", color: c(t6.FOOD_DRINKS) }),
                    enum: t6.FOOD_DRINKS,
                },
                {
                    name: es.intl.string(es.t["4IaUIM"]),
                    icon: (0, i.jsx)(nc.f, { size: "xs", color: c(t6.FANTASY) }),
                    enum: t6.FANTASY,
                },
                {
                    name: es.intl.string(es.t["w0nSG/"]),
                    icon: (0, i.jsx)(no.N, { size: "xs", color: c(t6.ANIMALS_PETS) }),
                    enum: t6.ANIMALS_PETS,
                },
                {
                    name: es.intl.string(es.t.cJng7v),
                    icon: (0, i.jsx)(nd.p, { size: "xs", color: c(t6.NATURE) }),
                    enum: t6.NATURE,
                },
                {
                    name: es.intl.string(es.t["5mUvyM"]),
                    icon: (0, i.jsx)(nu.T, { size: "xs", color: c(t6.MOVIES_TV_SHOWS) }),
                    enum: t6.MOVIES_TV_SHOWS,
                },
                {
                    name: es.intl.string(es.t.MB9H5Z),
                    icon: (0, i.jsx)(nm.e, { size: "xs", color: c(t6.DARK_MOODY) }),
                    enum: t6.DARK_MOODY,
                },
            ],
            [c],
        );
    return (0, i.jsxs)("div", {
        className: nE.KZ,
        children: [
            (0, i.jsx)(q.E, { variant: "text-md/semibold", className: nE.hr, children: es.intl.string(es.t.t1Ztrp) }),
            (0, i.jsx)("div", {
                className: nE.Ot,
                children: d.map((e) => {
                    let { name: l, icon: r, enum: c } = e;
                    return (0, i.jsxs)(
                        eB.D,
                        {
                            className: o()(nE.w4, { [nE.C7]: n.has(c) }),
                            "aria-label": l,
                            "aria-pressed": n.has(c),
                            onClick: () => {
                                let e = n.has(c);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(c);
                            },
                            children: [r, (0, i.jsx)(q.E, { color: a(c), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var n_ = n(561769),
    nS = n(66506);
function nA() {
    return (0, i.jsxs)("div", {
        className: nS.k,
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: es.intl.string(es.t.oezC3x),
                className: nS._,
            }),
            (0, i.jsx)(er.D, { variant: "heading-xl/semibold", children: es.intl.string(es.t.oezC3x) }),
            (0, i.jsx)(q.E, { variant: "text-md/medium", children: es.intl.string(es.t["Tc/Ndl"]) }),
        ],
    });
}
var nb = n(919303);
let nI = { flattenProductVariants: !0 };
function nN(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, S.uM)(),
        a = l?.sessionId ?? "",
        { noCache: c, includeUnpublished: d } = (0, tY.A)(),
        m = (0, I.$)("collectibles_filter_results"),
        g = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        { skus: h, currentPage: E, totalCount: x, isFetchingResults: f } = (0, tp.S)(),
        p = (0, u.yK)([A.A], () => (m ? [] : A.A.getProductsBySkus(h))),
        C = r.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = h?.join("");
    r.useEffect(() => {
        C();
    }, [v, C]);
    let j = (0, tM.p)(),
        b = r.useMemo(() => j(p), [j, p]),
        N = m ? h.length : b.length;
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
        { setQueryPageSize: O, setQueryPageOffset: R, queryPageSize: M } = (0, T.v)(),
        [k, y] = r.useState(!1),
        P = t || f || null == g;
    r.useEffect(() => {
        P ? y(!1) : N > 0 && y(!0);
    }, [P, N]);
    let D = M > 0 && !P && 0 === N;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == L.current || O(Math.floor(5 * getComputedStyle(L.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != L.current) return e.observe(L.current), () => e.disconnect();
    }, [O]);
    let B = r.useCallback(
        (e) => {
            tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: M,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                R((e - 1) * M);
        },
        [l, M, R],
    );
    return (0, i.jsxs)(n_.v3.Provider, {
        value: nI,
        children: [
            (0, i.jsxs)("div", {
                className: o()({ [nb.oE]: D }),
                children: [
                    D && (0, i.jsx)(nA, {}),
                    (0, i.jsxs)("div", {
                        className: o()(nb.ZE, { [nb.Kp]: k }),
                        ref: L,
                        children: [
                            P && [...Array(M)].map((e, t) => (0, i.jsx)(tD.A, {}, t)),
                            !P &&
                                m &&
                                h.map((e, t) =>
                                    (0, i.jsx)(
                                        S.R9,
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
                                b.map((e, t) =>
                                    null == A.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, i.jsx)(
                                              S.R9,
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
            x > M &&
                (0, i.jsx)("div", {
                    className: nb.Ej,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(tR.m, {
                            currentPage: E,
                            totalCount: x,
                            pageSize: M,
                            onPageChange: B,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nL = n(578364);
function nO(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: a } = e,
        c = (0, t_.A)("shop_include_unpublished");
    !(function () {
        let e = (0, k.bG)([tI.A], () => "success" === tI.A.getFetchState(e8.FYj)),
            t = null != (0, tN.A)(),
            { offerEligible: n, clearFilters: s } = (0, T.v)();
        r.useEffect(() => {
            n && e && !t && s();
        }, [n, e, t, s]);
    })(),
        (0, T.S)(c);
    let o = r.useRef(null),
        { handleScroll: d } = (0, tj.X)(o, t),
        u = (0, th.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, tX.k0)(o.current),
        [h, E] = r.useState(l),
        [x, f] = r.useState(!1);
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
                f(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsx)("div", {
            className: nL.VM,
            children: (0, i.jsxs)("main", {
                className: nL.MY,
                children: [
                    (0, i.jsx)(D.Gt, {
                        className: nL.OW,
                        ref: o,
                        onScroll: d,
                        scrollbarGutter: "both-edges",
                        children: u
                            ? (0, i.jsx)("div", {
                                  className: nL.en,
                                  children: (0, i.jsx)("div", {
                                      className: nL.pf,
                                      children: (0, i.jsx)(tS.Z_, { tenantId: e8.FYj, templateId: tb.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, i.jsx)(nT, {
                                  isSmallScreen: x,
                                  filterBarOpen: h,
                                  setFilterBarOpen: E,
                                  tab: t,
                                  scrollerRef: o,
                                  categories: n,
                                  setCategoryRef: m,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !x && (0, i.jsx)("div", { className: nL.yF }),
                    h && !x && (0, i.jsx)(tC.Ip, { className: nL.kT, children: (0, i.jsx)(nx, {}) }),
                ],
            }),
        })
    );
}
function nT(e) {
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
        g = (0, T.v)((e) => e.hasDefaultFilters()),
        h = (0, S.uM)(),
        { handlePageChange: E, currentPage: x } = (function (e) {
            let [t, n] = r.useState(1);
            return {
                currentPage: t,
                handlePageChange: r.useCallback(
                    (t) => {
                        n(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, n],
                ),
            };
        })(a),
        f = r.useCallback(
            (e) => {
                tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    E(e);
            },
            [h, E],
        ),
        p = r.useRef(null);
    return (
        r.useEffect(() => {
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === m.current ||
                    null === p.current ||
                    m.current.contains(t) ||
                    p.current.contains(t) ||
                    (tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            className: nL.en,
            children: (0, i.jsxs)("div", {
                className: nL.pf,
                children: [
                    (0, i.jsxs)("div", {
                        className: nL.ne,
                        children: [
                            (0, i.jsx)("div", { className: nL.lQ, children: (0, i.jsx)(tO, {}) }),
                            (0, i.jsxs)("div", {
                                className: o()(nL.wR, { [nL.Im]: t }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nL.Ul,
                                        children: [
                                            (0, i.jsx)(q.E, {
                                                variant: "text-md/semibold",
                                                children: es.intl.string(es.t.uaX705),
                                            }),
                                            (0, i.jsx)(t8, {}),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        ref: p,
                                        children: (0, i.jsx)(Q.$, {
                                            onClick: function () {
                                                let e = !n;
                                                tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                    collectibles_shop_session_id: h?.sessionId,
                                                    page_section: h?.pageSection,
                                                    page_category: h?.pageCategory,
                                                    page_index: h?.pageIndex,
                                                    page_size: h?.pageSize,
                                                    cta_name: `filter bar ${e ? "show" : "hide"}`,
                                                    page_type: "catalog",
                                                }),
                                                    s(e);
                                            },
                                            variant: "secondary",
                                            text: es.intl.string(n ? es.t.fYtm6f : es.t["TeTYE+"]),
                                            icon: tv.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, i.jsx)("div", {
                                    className: nL.Dh,
                                    ref: m,
                                    children: (0, i.jsx)(D.Ch, { className: nL.Qo, children: (0, i.jsx)(nx, {}) }),
                                }),
                        ],
                    }),
                    g
                        ? (0, i.jsx)(S.R9, {
                              newValue: { pageIndex: x },
                              children: (0, i.jsx)(tQ, {
                                  categories: c,
                                  setCategoryRef: d,
                                  currentPage: x,
                                  handlePageChange: f,
                                  initialCategoryId: u,
                              }),
                          })
                        : (0, i.jsx)(nN, { scrollerRef: a, tab: l }, l),
                ],
            }),
        })
    );
}
var nR = n(599062),
    nM = n(73870),
    nk = n(154323),
    ny = n(839534),
    nP = n(295811),
    nD = n(870216);
let nB = { "Any:personalization-header": n(645501).A },
    nG = { [tb.b.SHOP_HOME]: nB },
    nw = { "1465939725649973269": nB, "1478495181551440044": nB },
    nF = function () {
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
var nH = n(613258),
    nz = n(105499);
let nU = { prioritizedCurrency: n_.Hi.ORBS };
function nK(e) {
    let { tab: t } = e,
        [n, s, l] = (0, k.yK)([nD.A], () => [nD.A.getLayout(t), nD.A.isFetchingLayout(t), nD.A.getLayoutFetchError(t)]),
        a = (0, k.bG)([nk.A], () => nk.A.get("shop_include_unpublished")),
        c = (0, k.bG)([A.A], () => A.A.skipNumCategories),
        o = r.useMemo(() => {
            let e = {};
            return !0 === a && (e.include_unpublished = !0), null != c && c > 0 && (e.skip_num_categories = c), e;
        }, [a, c]),
        d = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (r.useEffect(() => {
            d && (0, ny.T2)({ tab: t });
        }, [d, t]),
        null == n)
    )
        return t !== M.HOME || d || s
            ? null
            : (0, i.jsx)(tS.Z_, {
                  tenantId: e8.FYj,
                  templateId: tb.b.SHOP_HOME,
                  requestParams: o,
                  overrides: nG[tb.b.SHOP_HOME],
              });
    let u = (0, i.jsx)(tS.Qs, { tenantId: e8.FYj, layoutId: n, overrides: nw[n] });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t === M.ORBS && (0, i.jsx)(nF, {}),
            t === M.ORBS ? (0, i.jsx)(n_.v3.Provider, { value: nU, children: u }) : u,
        ],
    });
}
function nV(e) {
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
        : (0, i.jsx)(tS.Ay, { layout: n });
}
let nY = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, S.uM)(),
        a = (0, k.bG)([nP.A], () => nP.A.getShopLayoutUrlOverride()),
        c = r.useRef(null),
        { handleScroll: d } = (0, tj.X)(c, n),
        [u, m] = r.useState(td.md),
        [g, h] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (null != c.current) {
                function e() {
                    if (null == c.current) return;
                    let e = c.current.getDistanceFromBottom();
                    u >= 36 ? h(e < 20) : e <= 200 && m((e) => e + td.md);
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
        (0, i.jsx)(D.Ch, {
            className: nz.OW,
            ref: c,
            onScroll: d,
            children: (0, i.jsxs)("div", {
                className: nz.bx,
                children: [
                    (0, i.jsxs)("div", {
                        className: o()(nz.rb, nz.GS),
                        children: [
                            null != a && "" !== a ? (0, i.jsx)(nV, { url: a }) : (0, i.jsx)(nK, { tab: n }),
                            n !== M.CATALOG &&
                                u >= 36 &&
                                (0, i.jsxs)("div", {
                                    className: nz.R$,
                                    children: [
                                        (0, i.jsx)(er.D, {
                                            variant: "heading-md/semibold",
                                            children: es.intl.string(es.t.Yr70c4),
                                        }),
                                        (0, i.jsx)(Q.$, {
                                            variant: "primary",
                                            text: es.intl.string(es.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    tA.default.track(e8.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === M.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsx)(nH.A, { peaking: g, transitioning: s === td.Pf.OUT }),
                ],
            }),
        })
    );
};
var n$ = n(417388);
let nW = function () {
        return (0, i.jsxs)("div", {
            className: n$.z,
            children: [
                (0, i.jsx)("img", {
                    className: n$.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: es.intl.string(es.t["p8+qtU"]),
                }),
                (0, i.jsx)(er.D, { variant: "heading-xl/semibold", children: es.intl.string(es.t["p8+qtU"]) }),
                (0, i.jsx)(q.E, { variant: "text-md/medium", children: es.intl.string(es.t.UEiyvs) }),
            ],
        });
    },
    nZ = [td.G2.HOME, td.G2.ORBS];
function nq(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: a,
            refreshCategories: c,
        } = e,
        o = (0, k.bG)([A.A, tx.A], () =>
            null != A.A.error
                ? `shop load fetch categories error: ${A.A.error.message}`
                : null != tx.A.claimError
                  ? `shop load claim error: ${tx.A.claimError.message}`
                  : null != tx.A.fetchError
                    ? `shop load fetch purchase error: ${tx.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, k.bG)([_.default], () => _.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, tY.A)();
        r.useEffect(() => {
            null != e &&
                tE.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(o);
    let d = (0, P.H)({ location: "collectibles_content" }),
        u = (0, k.bG)([y.Ay], () => y.Ay.useReducedMotion),
        m = (0, R.W6)(),
        g = (0, R.zy)(),
        [h] = r.useState(() => {
            if ("POP" === m.action) {
                let e;
                return (e = t$), (t$ = null), e ?? void 0;
            }
        }),
        [E, x] = r.useState(h),
        [f, p] = r.useState(null == h),
        C = r.useMemo(() => {
            let e = new URLSearchParams(g.search).get(td.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        v = r.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !td.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        j = (0, th.U)("CollectiblesContent"),
        S = (0, tf.a)("CollectiblesContent"),
        b = r.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: i,
                    isOrbsExclusive: r,
                } = e;
                if ((a(t, n), S && null != n && i && !r))
                    return void m.push(e8.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let c = l && !u,
                    o = r ? td.G2.ORBS : td.G2.CATALOG;
                x(n), p(!i), s(o, c);
            },
            [u, s, a, S, m],
        ),
        { searchError: I } = (0, tp.S)();
    return null != I
        ? (0, i.jsx)(nW, {})
        : null != o
          ? (0, i.jsx)(nR.h, { onRetry: c, errorMessage: o, errorOrigin: nR.A.SHOP_PAGE })
          : t === td.G2.HOME && j
            ? (0, i.jsx)(nY, { tab: M.HOME, transitionState: l, handleTransition: b })
            : t === td.G2.ORBS && j
              ? (0, i.jsx)(nY, { tab: M.ORBS, transitionState: l, handleTransition: b })
              : nZ.includes(t)
                ? (0, i.jsx)(nM.A, { handleTransition: b, tab: t, transitionState: l })
                : t === td.G2.GAME_SERVERS
                  ? d
                      ? (0, i.jsx)(tm, { isGameServerHostingInShopEnabled: d })
                      : (0, i.jsx)(R.rd, { to: e8.BVt.COLLECTIBLES_SHOP_WITH_TAB(td.G2.HOME) })
                  : (0, i.jsx)(nO, {
                        tab: t,
                        categories: v,
                        initialCategoryId: E ?? C,
                        showFilterInitially: f && null == C,
                        onUnmount: () => {
                            x(void 0), p(!0);
                        },
                    });
}
var nQ = n(349769),
    nX = n(235939),
    nJ = n(976860),
    n0 = n(870308),
    n1 = n(650583);
function n4(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, m.useHasAnyModalOpen)();
    return (
        r.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === n1.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let n5 = function (e) {
    let { tab: t = td.G2.HOME } = e;
    (0, C.P)(p.a);
    let n = (0, E.A)((0, d.A)()),
        s = (0, u.bG)([_.default], () => _.default.getCurrentUser());
    (0, j.pE)();
    let l = (0, t4.yB)("CollectiblesShop"),
        { onClose: a } = (function () {
            let { search: e } = (0, R.zy)(),
                t = (0, R.g)(),
                n = r.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: r.useCallback(() => {
                    if (0 === s) {
                        (0, nJ.aX)(), (0, H.openUserSettings)();
                        return;
                    }
                    (0, nJ.EL)() ? (0, nJ.aX)() : (0, nJ.pX)(e8.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: c, hasFilters: M } = (0, T.v)(),
        k = r.useMemo(() => (t === td.G2.HOME && null != c && M() ? c : t), [t, c, M]);
    (0, v.A)(e8.FYj);
    let y = (0, I.$)("collectibles_shop"),
        { categories: P, refreshCategories: D } = (0, L.Ay)({ logPerf: !0, skipFetch: y }, { sessionId: n, tab: k }),
        B = r.useMemo(() => [...P.values()], [P]),
        [G, w] = r.useState(),
        F = (0, u.bG)([A.A], () => A.A.getCategory(G)?.name),
        [z, U] = r.useState();
    (0, tX.XU)(n);
    let K = r.useCallback((e, t) => {
            U(e), w(t);
        }, []),
        { selectedTab: V, transitionState: Y, transitionToTab: $ } = (0, O.o)(k);
    (0, f.HU)({ location: es.intl.string(es.t.pWG4ze) }), (0, N.uS)(n, V, F, Y, z), (0, N.N0)(V, s);
    let { dismissShopButtonDC: W } = (0, n0.A)();
    r.useEffect(() => {
        W();
    }, [W]),
        r.useEffect(() => {
            (0, h.I)(e8.BVt.COLLECTIBLES_SHOP);
        }, []);
    let Z = r.useRef(null),
        q = r.useRef(null);
    (0, g.tj)(Z);
    let Q = (0, m.useHasAnyModalOpen)();
    r.useEffect(() => {
        q.current?.focus();
    }, []),
        (0, t4.gB)();
    let { analyticsLocations: X } = (0, N.lC)(V);
    return (0, i.jsx)(x.f5, {
        value: X,
        children: (0, i.jsx)(S.R9, {
            newValue: { sessionId: n, pageCategory: F, pageSize: td.l5 },
            children: (0, i.jsx)(b.iM, {
                tab: V,
                children: (0, i.jsx)(n4, {
                    onClose: a,
                    shouldAddEventListener: !1,
                    children: (0, i.jsxs)("div", {
                        className: o()(tG.bx, { [t4.jP]: l }),
                        ref: q,
                        inert: Q,
                        tabIndex: -1,
                        children: [
                            (0, i.jsx)(nQ.G, { handleTransition: $, selectedTab: V }),
                            (0, i.jsx)(nX.A, { tab: V, handleTransition: $ }),
                            (0, i.jsx)("div", {
                                className: o()(tG.td, {
                                    [tG.RK]: Y === td.Pf.VISIBLE,
                                    [tG.in]: Y === td.Pf.IN,
                                    [tG.FD]: Y === td.Pf.OUT,
                                }),
                                children: (0, i.jsx)(nq, {
                                    tab: V,
                                    refreshCategories: D,
                                    transitionToTab: $,
                                    transitionState: Y,
                                    categories: B,
                                    updateAnalyticsState: K,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
