n.r(t), n.d(t, { default: () => lv });
var s,
    l,
    i,
    a,
    r,
    o,
    c,
    d = n(477900),
    u = n(582128),
    m = n(503698),
    g = n.n(m),
    h = n(132500),
    x = n(702841),
    f = n(192308),
    E = n(315710),
    p = n(944791),
    v = n(444927),
    j = n(688810),
    C = n(726249),
    b = n(475073),
    S = n(611924),
    _ = n(744082),
    N = n(561794),
    A = n(287809),
    I = n(440938),
    L = n(590180),
    O = n(161918),
    k = n(71604),
    T = n(790297),
    R = n(841702),
    y = n(983545),
    M = n(365491);
n(323874), n(14289), n(35956), n(321073);
var P = n(806163),
    D = (((s = {}).HOME = "home"), (s.CATALOG = "catalog"), (s.ORBS = "orbs"), s),
    B = n(17928),
    H = n(775602),
    w = n(578797),
    F = n(140218),
    G = n(689175),
    U = n(277984),
    z = n(670735),
    V = n(780964),
    K = n(766075),
    Y = n(280450),
    W = n(166403),
    $ = n(123917),
    q = n(428262),
    Z = n(790284),
    X = n(98091),
    Q = n(680127),
    J = n(43990),
    ee = n(403581),
    et = n(834730),
    en = n(821609),
    es = n(793574),
    el = n(532794),
    ei = n(202541),
    ea = n(818348),
    er = n(576709),
    eo = n(375708),
    ec = n(123743);
function ed() {
    let e = u.useCallback(() => {
        (0, el.A)({ subscriptionTier: ei.pe.TIER_2, analyticsLocations: [es.A.GAME_SERVER_PAGE] });
    }, []);
    return (0, d.jsx)(J.N, {
        theme: ea.NJ.DARKER,
        children: (t) =>
            (0, d.jsxs)("div", {
                className: g()(ec.vK, t),
                children: [
                    (0, d.jsxs)("div", {
                        className: ec.Pf,
                        children: [
                            (0, d.jsx)(ee.t, {
                                className: ec.Kk,
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                            }),
                            (0, d.jsx)(et.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: eo.intl.string(er.default["8HAQUb"]),
                            }),
                        ],
                    }),
                    (0, d.jsx)(en.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: ee.t,
                        text: eo.intl.string(eo.t.pj0XBN),
                        onClick: e,
                    }),
                ],
            }),
    });
}
var eu = n(462887),
    em = n(297264),
    eg = n(736653),
    eh = n(77482);
function ex(e) {
    let { onRetry: t, errorMessage: n } = e,
        s = (0, eg.Ay)(),
        l = (0, B.bG)([A.default], () => {
            let e = A.default.getCurrentUser();
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        });
    return (0, d.jsxs)("div", {
        className: eh.kL,
        children: [
            (0, d.jsx)("img", {
                className: eh.Sl,
                src: (0, eu.M)(s) ? "/assets/fe8bf3ee09628502.svg" : "/assets/9afc0a2d5f56c719.svg",
                alt: "",
            }),
            (0, d.jsx)(em.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t.i5SQ74) }),
            (0, d.jsx)(et.E, {
                className: eh.h_,
                variant: "text-md/normal",
                color: "text-muted",
                children: eo.intl.string(eo.t.F8FvUy),
            }),
            l &&
                null != n &&
                (0, d.jsx)(et.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: "staff-only debug: " + n,
                }),
            (0, d.jsx)(en.$, { variant: "primary", text: eo.intl.string(eo.t["+hivLW"]), onClick: t }),
        ],
    });
}
var ef = n(2799),
    eE = n(890856),
    ep = n(331322),
    ev = n(713517),
    ej = n(430836);
function eC(e) {
    let { name: t, coverUrl: n, fromPriceLabel: s, nitroFromPriceLabel: l, onClickCard: i, onClickViewPlans: a } = e,
        r = u.useRef(null),
        { isHoveringOrFocusing: o } = (0, ev.A)(r),
        c = (0, B.bG)([A.default], () => q.Ay.canUseShopDiscounts(A.default.getCurrentUser())) && null != l,
        m = c ? l : s,
        h = u.useCallback(
            (e) => {
                e.stopPropagation(), a?.();
            },
            [a],
        );
    return (0, d.jsxs)(eE.s, {
        ref: r,
        onClick: i,
        "aria-label": t,
        className: g()(ej.Nr, { [ej.yo]: o }),
        children: [
            (0, d.jsx)("div", {
                className: ej.q4,
                "aria-hidden": !0,
                children: null != n && (0, d.jsx)("img", { className: ej.xy, src: n, alt: "" }),
            }),
            (0, d.jsxs)("div", {
                className: ej.Iv,
                children: [
                    null != n
                        ? (0, d.jsx)("img", { className: ej.N4, src: n, alt: "" })
                        : (0, d.jsx)("div", {
                              className: ej.WB,
                              children: (0, d.jsx)(et.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: t,
                              }),
                          }),
                    (0, d.jsx)("div", { className: ej.M0, "aria-hidden": !0 }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: ej.qr,
                children: [
                    (0, d.jsxs)("div", {
                        className: ej.cs,
                        children: [
                            (0, d.jsx)(et.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                tag: "p",
                                children: t,
                            }),
                            null != m &&
                                (0, d.jsx)("div", {
                                    className: ej.F1,
                                    children: (0, d.jsxs)(ep.B, {
                                        direction: "horizontal",
                                        align: "end",
                                        wrap: !0,
                                        gap: 4,
                                        children: [
                                            (0, d.jsxs)(ep.B, {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 4,
                                                fullWidth: !1,
                                                children: [
                                                    c &&
                                                        (0, d.jsx)(ee.t, {
                                                            size: "custom",
                                                            width: 18,
                                                            height: 18,
                                                            color: "var(--text-strong)",
                                                        }),
                                                    (0, d.jsx)(et.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-strong",
                                                        tag: "span",
                                                        children: m,
                                                    }),
                                                ],
                                            }),
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default.SFUhDi),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                    (0, d.jsx)("div", {
                        className: ej.E1,
                        children: (0, d.jsx)(en.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: eo.intl.string(er.default.NurDjc),
                            onClick: h,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var eb = n(903247);
function eS() {
    return (0, d.jsx)("div", {
        className: g()(ej.Nr, eb.s7, eb.U6),
        "aria-hidden": !0,
        children: (0, d.jsxs)("div", {
            className: eb.qr,
            children: [(0, d.jsx)("div", { className: eb.w9 }), (0, d.jsx)("div", { className: eb.n2 })],
        }),
    });
}
var e_ = n(552606);
let eN = u.memo(function (e) {
    let { game: t, onSelect: n } = e,
        s = u.useCallback(() => n(t), [t, n]),
        l = (0, ef.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, d.jsx)(eC, {
        name: t.name,
        coverUrl: l,
        fromPriceLabel: t.fromPriceLabel,
        nitroFromPriceLabel: t.nitroFromPriceLabel,
        onClickCard: s,
        onClickViewPlans: s,
    });
});
function eA(e) {
    let { games: t, title: n, onSelectGame: s, loading: l = !1 } = e;
    return (0, d.jsxs)("section", {
        className: e_.u,
        children: [
            null != n && (0, d.jsx)(em.D, { variant: "heading-lg/semibold", children: n }),
            (0, d.jsx)("div", {
                className: e_.V,
                children: l
                    ? Array.from({ length: 10 }, (e, t) => (0, d.jsx)(eS, {}, t))
                    : t.map((e) => (0, d.jsx)(eN, { game: e, onSelect: s }, e.id)),
            }),
        ],
    });
}
var eI = n(32880),
    eL = n(410232),
    eO = n(231483),
    ek = n(339350),
    eT = n(349288),
    eR = n(469318);
function ey() {
    let e = u.useMemo(
        () => [
            { Icon: eI.s, label: eo.intl.string(er.default.GJNQYz) },
            { Icon: eL.k, label: eo.intl.string(er.default.pTinR2) },
            { Icon: eO.l, label: eo.intl.string(er.default.s0N1nM) },
            { Icon: ek.Q, label: eo.intl.string(er.default.NzrGEi) },
        ],
        [],
    );
    return (0, d.jsxs)("section", {
        className: eR.ZK,
        children: [
            (0, d.jsxs)("div", {
                className: eR.jE,
                children: [
                    (0, d.jsx)(em.D, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        children: eo.intl.string(er.default.F5W36W),
                    }),
                    (0, d.jsxs)(et.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        tag: "p",
                        children: [
                            eo.intl.string(er.default.xMpGuO),
                            " ",
                            (0, d.jsx)(eT.Anchor, {
                                href: "https://support.discord.com/hc/en-us/articles/35370817986839-Game-Servers",
                                children: eo.intl.string(er.default.AnZeUS),
                            }),
                        ],
                    }),
                ],
            }),
            (0, d.jsx)("div", {
                className: eR._A,
                children: e.map((e) => {
                    let { Icon: t, label: n } = e;
                    return (0, d.jsxs)(
                        "div",
                        {
                            className: eR.Tc,
                            children: [
                                (0, d.jsx)(t, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                                (0, d.jsx)(et.E, {
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
var eM = n(985209);
function eP() {
    return (0, d.jsxs)("div", {
        className: eM.vK,
        children: [
            (0, d.jsx)("div", {
                className: eM.Sl,
                style: {
                    backgroundImage:
                        'url("https://cdn.discordapp.com/media/v1/game-server-hosting/13f34bed9188684e615569a51799072fa7e89d36347707a26809a5d9b9586beb")',
                },
                "aria-hidden": !0,
            }),
            (0, d.jsx)("div", { className: eM.Ge, "aria-hidden": !0 }),
            (0, d.jsx)("div", { className: eM.f5, "aria-hidden": !0 }),
        ],
    });
}
var eD = n(408278),
    eB = n(548411),
    eH = n(554830),
    ew = n(281445),
    eF = n(390544),
    eG = n(554146),
    eU = n(866665),
    ez = n(939249),
    eV = n(880892);
let eK = { TERTIARY: eV.Xe, SECONDARY: eV.Rm, PRIMARY: eV.zB },
    eY = { SIZE_24: eV.q1, SIZE_32: eV.Hb, SIZE_36: eV.VM },
    eW = u.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: s,
            color: l,
            size: i = eY.SIZE_32,
            icon: a,
            onMouseDown: r,
            onClick: o,
            disabled: c,
            focusProps: u,
        } = e;
        return (0, d.jsx)(eU.m, {
            asContainer: !0,
            text: s,
            shouldShow: !c,
            children: (0, d.jsx)(ez.D, {
                innerRef: t,
                "aria-label": s,
                "aria-disabled": c,
                className: g()(n, eV.x6, l, i, { [eV.r9]: c }),
                onMouseDown: r,
                onClick: (e) => {
                    o(e);
                },
                focusProps: u,
                children: a,
            }),
        });
    });
var e$ = n(933832),
    eq = n(624479),
    eZ = n(509434),
    eX = n(131607),
    eQ = n(427209),
    eJ = n(95035),
    e0 = n(500897),
    e1 = n(858192),
    e4 = n(294454),
    e2 = n(922016),
    e3 = n(980707),
    e9 = n(477782),
    e5 = n(625903),
    e8 = n(365199),
    e7 = n(442433),
    e6 = n(928873);
function te(e) {
    let { server: t, onOpenSettings: n } = e,
        s = u.useRef(null),
        l = (0, e6.A)(t.instance),
        i = u.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, d.jsx)(e2.Y, {
        targetElementRef: s,
        align: "top",
        position: "left",
        animationPosition: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, d.jsx)(e3.W, {
                "data-menu-migrated": !0,
                navId: "game-server-owned-card-popout-context-menu",
                onClose: () => {
                    (0, e7.Z_)(), t();
                },
                "aria-label": eo.intl.string(er.default["yb+ork"]),
                onSelect: void 0,
                children: (0, d.jsx)(e9.rX, {
                    children: (0, d.jsx)(e9.Dr, {
                        id: "settings",
                        icon: e5.Z,
                        leadingAccessory: { type: "icon", icon: e5.Z },
                        label: eo.intl.string(er.default["feUiM/"]),
                        disabled: !l,
                        action: i,
                    }),
                }),
            });
        },
        children: (e) =>
            (0, d.jsx)(eW, {
                ref: s,
                color: eK.SECONDARY,
                size: eY.SIZE_24,
                icon: (0, d.jsx)(e8.j, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                onClick: (t) => e.onClick(t),
                tooltip: eo.intl.string(er.default["feUiM/"]),
            }),
    });
}
var tt = n(652215),
    tn = n(49999),
    ts = n(116735);
function tl(e) {
    return `game-server-owned-card-${e}`;
}
let ti = u.memo(function (e) {
    let { server: t, onJoin: s, onViewPanel: l, onOpenSettings: i, isHighlighted: a = !1 } = e,
        r = (0, ef.A)(t.gameId, "cover") ?? t.coverUrl,
        o = (function (e) {
            let t = (0, B.bG)([W.A], () => (null != e ? W.A.getSubscriptionById(e) : null));
            if (null == t) return null;
            let n = t.currentPeriodEnd.toLocaleDateString(void 0, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            });
            return t.status === tt.Dmq.CANCELED
                ? { text: eo.intl.formatToPlainString(er.default["3aEgK6"], { date: n }), type: "cancellation" }
                : null != t.renewalMutations
                  ? { text: eo.intl.formatToPlainString(er.default.KFSA3M, { date: n }), type: "downgrade" }
                  : null;
        })(t.instance.subscriptionId),
        [c, m] = (0, eX.kn)([eG.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        h = c !== eG.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        x = ew.X.SHOCKBYTE,
        E = Y.default.getId() ?? "0",
        { handleCopyServerIp: p, animateCopyIcon: v } = (0, e0.A)(E, t.id, es.A.GAME_SERVER_PAGE, t.serverIp),
        j = u.useCallback(() => {
            (0, e1.A)({
                provider: x,
                onAccept: () => {
                    m(tn.i.TAKE_ACTION), p();
                },
            });
        }, [x, m, p]),
        C = u.useCallback(() => {
            h
                ? s(t)
                : (0, e1.A)({
                      provider: x,
                      onAccept: () => {
                          m(tn.i.TAKE_ACTION), s(t);
                      },
                  });
        }, [h, x, m, s, t]),
        b = u.useCallback(() => l(t), [l, t]),
        S = u.useCallback(() => {
            ((e) => {
                let { server: t, source: s } = e;
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("69977"),
                            n.e("1248"),
                            n.e("94149"),
                            n.e("14131"),
                            n.e("73883"),
                            n.e("73216"),
                            n.e("10605"),
                            n.e("81647"),
                            n.e("76602"),
                            n.e("40402"),
                            n.e("67861"),
                            n.e("1518"),
                            n.e("23354"),
                            n.e("67200"),
                            n.e("44780"),
                            n.e("36946"),
                            n.e("92639"),
                            n.e("90480"),
                            n.e("40963"),
                            n.e("56169"),
                            n.e("23601"),
                            n.e("92370"),
                        ]).then(n.bind(n, 223849));
                        return (n) => (0, d.jsx)(e, { ...n, server: t, source: s });
                    },
                    { stackingBehavior: "stack", modalKey: e4.aU },
                );
            })({ server: t, source: "game-server-shop" });
        }, [t]),
        _ =
            t.instance.status === eF.M.ONLINE
                ? eo.intl.string(er.default["60kAzo"])
                : t.instance.status === eF.M.OFFLINE
                  ? eo.intl.string(er.default["Ys/RrB"])
                  : eo.intl.string(er.default.SgjaXI);
    return (0, d.jsxs)("div", {
        id: tl(t.id),
        className: g()(ts.Nr, { [ts.mr]: a }),
        children: [
            a && (0, d.jsx)("div", { className: ts._8, "aria-hidden": !0 }),
            (0, d.jsxs)("div", {
                className: ts.Nk,
                "aria-hidden": !0,
                children: [
                    null != r && (0, d.jsx)("img", { className: ts.QC, src: r, alt: "" }),
                    (0, d.jsx)("div", { className: ts.jc }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: ts.AQ,
                children: [
                    (0, d.jsx)(eW, {
                        color: eK.SECONDARY,
                        size: eY.SIZE_24,
                        icon: (0, d.jsx)(eQ.A, { size: "custom", width: 14, height: 14, color: "currentColor" }),
                        onClick: S,
                        tooltip: eo.intl.string(eo.t.RDE0Sc),
                    }),
                    (0, d.jsx)(te, { server: t, onOpenSettings: i }),
                ],
            }),
            (0, d.jsxs)("div", {
                className: ts.rf,
                children: [
                    (0, d.jsxs)("div", {
                        className: ts.U1,
                        children: [
                            (0, d.jsxs)("div", {
                                className: ts.oL,
                                children: [
                                    null != r
                                        ? (0, d.jsx)("img", { className: ts.vT, src: r, alt: "" })
                                        : (0, d.jsx)("div", {
                                              className: ts.iv,
                                              children: (0, d.jsx)(et.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: t.gameName,
                                              }),
                                          }),
                                    (0, d.jsx)("div", { className: ts.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, d.jsxs)("div", {
                                className: ts.VQ,
                                children: [
                                    (0, d.jsx)(et.E, {
                                        variant: "text-md/semibold",
                                        color: "text-default",
                                        tag: "div",
                                        children: t.serverName,
                                    }),
                                    (0, d.jsx)(et.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        tag: "div",
                                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                    }),
                                    null != o &&
                                        (0, d.jsx)(et.E, {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-critical",
                                            tag: "div",
                                            children: o.text,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: ts.M1,
                        children: [
                            (0, d.jsxs)("div", {
                                className: ts.N8,
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: ts.bi,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default.bDdi7n),
                                            }),
                                            (0, d.jsx)(et.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: t.playersOnline,
                                            }),
                                        ],
                                    }),
                                    (0, d.jsxs)("div", {
                                        className: ts.gv,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default["7phwMG"]),
                                            }),
                                            h
                                                ? (0, d.jsxs)("div", {
                                                      className: ts.Yb,
                                                      children: [
                                                          (0, d.jsx)(et.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-default",
                                                              tag: "span",
                                                              children: t.serverIp,
                                                          }),
                                                          "" !== t.serverIp &&
                                                              (0, d.jsx)(ez.D, {
                                                                  className: ts.cL,
                                                                  onClick: p,
                                                                  "aria-label": eo.intl.string(eo.t.OpuAlK),
                                                                  children: v
                                                                      ? (0, d.jsx)(e$.A, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        })
                                                                      : (0, d.jsx)(eq.T, {
                                                                            size: "custom",
                                                                            width: 16,
                                                                            height: 16,
                                                                            color: "currentColor",
                                                                        }),
                                                              }),
                                                      ],
                                                  })
                                                : (0, d.jsx)(eJ.A, {
                                                      onClick: j,
                                                      children: eo.intl.string(er.default["f+F7H3"]),
                                                  }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, d.jsxs)("div", {
                                className: ts.N8,
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: ts.bi,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default["n+ZX7y"]),
                                            }),
                                            (0, d.jsxs)("div", {
                                                className: ts.Yb,
                                                children: [
                                                    t.isOnline &&
                                                        (0, d.jsx)("span", { className: ts.kg, "aria-hidden": !0 }),
                                                    (0, d.jsx)(et.E, {
                                                        variant: "text-sm/medium",
                                                        color: t.isOnline ? "text-feedback-positive" : "text-muted",
                                                        tag: "span",
                                                        children: _,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, d.jsxs)("div", {
                                        className: ts.gv,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                tag: "span",
                                                children: eo.intl.string(er.default.mJlz3T),
                                            }),
                                            (0, d.jsx)(et.E, {
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
            (0, d.jsxs)("div", {
                className: ts.qr,
                children: [
                    (0, d.jsx)(ez.D, {
                        className: g()(ts.wC, ts.QV),
                        onClick: C,
                        "aria-label": eo.intl.string(er.default["fQCcM/"]),
                        children: (0, d.jsx)(et.E, {
                            variant: "text-sm/semibold",
                            color: "none",
                            children: eo.intl.string(er.default["fQCcM/"]),
                        }),
                    }),
                    (0, d.jsxs)(ez.D, {
                        className: g()(ts.wC, ts.y2),
                        onClick: b,
                        "aria-label": eo.intl.string(er.default.tkbVdf),
                        children: [
                            (0, d.jsx)(et.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                children: eo.intl.string(er.default.tkbVdf),
                            }),
                            (0, d.jsx)(eZ.I, { size: "custom", width: 16, height: 16, color: "currentColor" }),
                        ],
                    }),
                ],
            }),
        ],
    });
});
var ta = n(448577);
function tr(e) {
    let {
            servers: t,
            onViewAll: n,
            onJoin: s,
            onViewPanel: l,
            onOpenSettings: i,
            highlightServerId: a = null,
            highlightNonce: r = 0,
        } = e,
        o = u.useRef(null),
        c = u.useRef(null),
        [m, h] = u.useState(!1),
        [x, f] = u.useState(!1),
        [E, p] = u.useState(null),
        v = u.useCallback(() => {
            let e = o.current;
            null != e && (h(e.scrollLeft > 1), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []);
    u.useLayoutEffect(() => {
        v();
    }, [v, t]),
        u.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                v();
            });
            return (
                t.observe(e),
                () => {
                    t.disconnect();
                }
            );
        }, [v]);
    let j = u.useCallback(() => {
            o.current?.scrollBy({ left: -408, behavior: "smooth" });
        }, []),
        C = u.useCallback(() => {
            o.current?.scrollBy({ left: 408, behavior: "smooth" });
        }, []);
    return (
        u.useEffect(() => {
            if (r <= 0) return;
            let e = null != a ? document.getElementById(tl(a)) : c.current;
            e?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            let t = 0,
                n = requestAnimationFrame(() => {
                    p(null), (t = requestAnimationFrame(() => p(a)));
                });
            return () => {
                cancelAnimationFrame(n), cancelAnimationFrame(t);
            };
        }, [r, a]),
        u.useEffect(() => {
            if (null == E) return;
            let e = setTimeout(() => p(null), 4e3);
            return () => clearTimeout(e);
        }, [E]),
        (0, d.jsxs)("section", {
            className: ta.uW,
            ref: c,
            children: [
                (0, d.jsxs)("div", {
                    className: ta.wx,
                    children: [
                        (0, d.jsx)(em.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: eo.intl.string(er.default.BOWmmT),
                        }),
                        (0, d.jsx)(J.N, {
                            theme: ea.NJ.DARKER,
                            children: (e) =>
                                (0, d.jsxs)("div", {
                                    className: g()(ta.$s, e),
                                    children: [
                                        (0, d.jsx)(en.$, {
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            text: eo.intl.string(eo.t["z5YcJ+"]),
                                            onClick: n,
                                        }),
                                        (0, d.jsxs)("div", {
                                            className: ta.d$,
                                            children: [
                                                (0, d.jsx)(eD.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eB.Z,
                                                    disabled: !m,
                                                    onClick: j,
                                                    "aria-label": eo.intl.string(eo.t["13/7kX"]),
                                                }),
                                                (0, d.jsx)(eD.K, {
                                                    variant: "overlay-secondary",
                                                    size: "sm",
                                                    icon: eH.K,
                                                    disabled: !x,
                                                    onClick: C,
                                                    "aria-label": eo.intl.string(eo.t.PDTjLN),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                    ],
                }),
                (0, d.jsx)("div", {
                    className: g()(ta.XG, { [ta.OW]: m && x, [ta.vL]: m && !x, [ta.y0]: x && !m }),
                    ref: o,
                    onScroll: v,
                    children: t.map((e) =>
                        (0, d.jsx)(
                            "div",
                            {
                                className: ta.AV,
                                children: (0, d.jsx)(ti, {
                                    server: e,
                                    onJoin: s,
                                    onViewPanel: l,
                                    onOpenSettings: i,
                                    isHighlighted: E === e.id,
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
var to = n(174459),
    tc = n(758836),
    td = (((l = {}).SHOP_CARD = "GAME_SERVER_SHOP_CARD"), l),
    tu = (((i = {}).OPEN_PLAN_MODAL = "open_game_server_plan_modal"), i),
    tm = n(135987),
    tg = n(802743),
    th = n(950889),
    tx = n(464864),
    tf = n(980709);
function tE() {
    return (0, d.jsx)(z.A, { children: (0, d.jsx)(tp, {}) });
}
function tp() {
    let e,
        { servers: t, refetch: n } = (0, tx.f)(),
        s = t.length > 0,
        l = (0, B.bG)([A.default], () => q.Ay.canUseShopDiscounts(A.default.getCurrentUser())),
        { games: i, hasError: a, isEmpty: r, isLoading: o, refetch: c } = (0, th.Y)();
    u.useEffect(() => {
        s && (0, U.hP)().catch(() => {});
    }, [s]);
    let m = u.useRef(i);
    u.useEffect(() => {
        i.length > 0 && (m.current = i);
    }, [i]);
    let g = u.useCallback(() => {
            c(), n();
        }, [c, n]),
        h =
            ((e = (0, I.uM)()),
            u.useCallback(
                (t, n) => {
                    to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: e?.sessionId,
                        page_type: tc.G2.GAME_SERVERS,
                        page_category: e?.pageCategory,
                        page_section: e?.pageSection,
                        tile_type: n,
                        cta_name: t,
                    });
                },
                [e?.sessionId, e?.pageCategory, e?.pageSection],
            )),
        [x, f] = u.useState({ serverId: null, nonce: 0 }),
        E = u.useCallback((e) => {
            let t = e.serverId ?? null;
            if (null == t && null != e.gameId) {
                let n = X.A.getGameServers();
                for (let s = n.length - 1; s >= 0; s--)
                    if (n[s].game_id === e.gameId) {
                        t = n[s].id;
                        break;
                    }
            }
            f((e) => ({ serverId: t, nonce: e.nonce + 1 }));
        }, []),
        p = u.useCallback(() => {
            let e = t[0];
            null != e && E({ serverId: e.id });
        }, [t, E]),
        v = (0, tg.O)((e) => e.highlightFirstCardNonce),
        j = u.useRef(v);
    u.useEffect(() => {
        if (v === j.current) return;
        j.current = v;
        let e = requestAnimationFrame(() => p());
        return () => cancelAnimationFrame(e);
    }, [v, p]);
    let C = u.useCallback(
            (e) => {
                h(tu.OPEN_PLAN_MODAL, td.SHOP_CARD),
                    (0, tm.S)({
                        gameName: e.name,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: e.plans,
                        onViewServer: () => E({ gameId: e.gameId }),
                    });
            },
            [h, E],
        ),
        b = u.useCallback(() => {
            Z.A.setState({ scrollToGameServers: !0 }), (0, K.openUserSettings)(V.X.SUBSCRIPTIONS_PANEL);
        }, []),
        S = u.useCallback((e) => {
            let t = Y.default.getId() ?? "0";
            (0, Q.A)(t, e.instance);
        }, []),
        _ = u.useCallback((e) => {
            (0, $.h)({ href: e.instance.gameServerPanelUrl ?? "" });
        }, []),
        N = u.useCallback(
            (e) => {
                let t = e.instance.subscriptionId;
                if (null == t) return;
                let n = m.current.find((t) => t.gameId === e.gameId);
                function s(t) {
                    (0, tm.S)({
                        gameName: e.gameName,
                        gameId: e.gameId,
                        coverUrl: e.coverUrl,
                        plans: n?.plans,
                        initialPlanId: e.instance.planId,
                        initialRegionId: e.instance.regionId,
                        initialRegionName: e.location,
                        initialServerName: e.serverName,
                        activeSubscription: t,
                        onViewServer: () => E({ serverId: e.id }),
                    });
                }
                let l = W.A.getSubscriptionById(t);
                null != l
                    ? s(l)
                    : (0, U.hP)()
                          .then(() => {
                              let e = W.A.getSubscriptionById(t);
                              null != e && s(e);
                          })
                          .catch(() => {});
            },
            [E],
        ),
        L = s ? eo.intl.string(er.default["+aRmAc"]) : void 0;
    return (0, d.jsx)(G.Ch, {
        className: tf.XG,
        children: (0, d.jsxs)("div", {
            className: tf.kL,
            children: [
                !l && (0, d.jsx)(ed, {}),
                (0, d.jsx)(eP, {}),
                (0, d.jsxs)("div", {
                    className: tf.Qs,
                    children: [
                        (0, d.jsx)(ey, {}),
                        s &&
                            (0, d.jsx)(tr, {
                                servers: t,
                                onViewAll: b,
                                onJoin: S,
                                onViewPanel: _,
                                onOpenSettings: N,
                                highlightServerId: x.serverId,
                                highlightNonce: x.nonce,
                            }),
                        a || r
                            ? (0, d.jsx)(ex, { onRetry: g })
                            : (0, d.jsx)(eA, { games: i, title: L, onSelectGame: C, loading: o }),
                    ],
                }),
            ],
        }),
    });
}
var tv = n(38405),
    tj = n(4227),
    tC = n(50920),
    tb = n(856686),
    tS = n(364522),
    t_ = n(783977),
    tN = n(59520);
function tA(e, t, n, s) {
    let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: r = 0 } = s;
    if (a > 0) {
        let s = (l + i) / a;
        s > 0 &&
            to.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(r),
                page_session_id: t,
            });
    }
}
function tI(e, t) {
    let { analyticsSource: n } = (0, T.lC)(t),
        s = (0, tN.I)(tA, 5e3, [], { trailing: !0 }),
        l = (0, I.uM)(),
        i = l?.sessionId;
    return {
        handleScroll: u.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    s(tt.HAw.COLLECTIBLES_SHOP_SCROLLED, null != i ? i : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [s, n, i, e]),
    };
}
var tL = n(354328),
    tO = n(356118),
    tk = n(619835),
    tT = n(641150);
function tR() {
    let { itemTypeFilters: e, searchQuery: t, thirdPartyOnly: n, offerEligible: s } = (0, M.v)((e) => e),
        { totalCount: l, isFetchingResults: i } = (0, tb.S)(),
        a = (0, M.v)((e) => e.hasFilters()),
        r = u.useCallback(() => {
            if (!a) return "";
            if (i) return eo.intl.string(eo.t["/FaMSE"]);
            if ("" !== t) {
                let e = t.length > 40 ? `${t.slice(0, 40)}...` : t;
                return eo.intl.format(eo.t.KJMJOz, { count: l, search: e });
            }
            if (!n && !s && 1 === e.size) {
                if (e.has(tT.q.AVATAR_DECORATION)) return eo.intl.format(eo.t.s1UzGQ, { count: l });
                if (e.has(tT.q.NAMEPLATE)) return eo.intl.format(eo.t.ZWGN9T, { count: l });
                if (e.has(tT.q.PROFILE_EFFECT)) return eo.intl.format(eo.t["v/7apu"], { count: l });
                if (e.has(tT.q.PROFILE_FRAME)) return eo.intl.format(eo.t.eu4eRy, { count: l });
                if (e.has(tT.q.BUNDLE)) return eo.intl.format(eo.t.fZ1rdk, { count: l });
            }
            return 0 === e.size && n && !s
                ? eo.intl.format(eo.t.TxoTTj, { count: l })
                : 0 === e.size && s && !n
                  ? eo.intl.format(eo.t.TLso50, { count: l })
                  : eo.intl.format(eo.t["/rPvmQ"], { count: l });
        }, [e, l, a, t, i, n, s]);
    return (0, d.jsx)(em.D, { variant: "heading-lg/semibold", children: r() });
}
var ty = n(172218),
    tM = n(932793),
    tP = n(511265),
    tD = n(206077),
    tB = n(100057),
    tH = n(828515),
    tw = n(484469),
    tF = n(346448),
    tG = n(195261),
    tU = n(132866);
let tz = function () {
    return (0, d.jsx)("div", {
        className: tU.A,
        children: Array.from({ length: 3 }).map((e, t) =>
            (0, d.jsxs)(
                "div",
                {
                    className: tG.vY,
                    children: [
                        (0, d.jsx)("div", { className: g()(tF.sW, tU.s) }),
                        Array.from({ length: 12 }, (e, t) => (0, d.jsx)(tw.A, {}, t)),
                    ],
                },
                t,
            ),
        ),
    });
};
var tV = n(828614),
    tK = n(159439),
    tY = n(998694);
let tW = null;
function t$(e) {
    let { category: t } = e,
        n = (0, x.bG)([A.default], () => A.default.getCurrentUser()),
        s = (0, tD.X)(t.products),
        l = (0, tP.p)()(s);
    return null == n || 0 === l.length
        ? null
        : (0, d.jsx)("div", {
              className: tG.vY,
              children: l.map((e, t) =>
                  (0, d.jsx)(
                      I.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, d.jsx)(tV.A, { skuId: e.skuId, skipLimitedTimeCheck: !0 }, e.skuId),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function tq(e) {
    let { category: t } = e,
        [n, s] = u.useState(!1),
        l = (0, ty.K)(function (e) {
            s(e);
        }, 0.15),
        i = (0, P.W6)(),
        a = (0, tC.a)("CollectiblesCatalogContent"),
        r = (0, I.uM)(),
        o = u.useCallback(() => {
            to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: r?.sessionId,
                sku_id: t.skuId,
                page_type: tc.G2.CATALOG,
                page_section: r?.pageSection,
                page_category: t.name,
                page_index: r?.pageIndex,
                page_size: r?.pageSize,
                cta_name: "catalog banner shop the collection arrow",
            }),
                (tW = t.skuId),
                i.push(tt.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
        }, [r?.pageIndex, r?.pageSection, r?.pageSize, r?.sessionId, t.name, t.skuId, i]);
    return (0, d.jsxs)("div", {
        className: tG.EF,
        ref: l,
        children: [(0, d.jsx)(tH.A, { category: t, onSelect: a ? o : void 0 }), (0, d.jsx)(t$, { category: t })],
    });
}
function tZ(e) {
    let { categories: t, setCategoryRef: n, currentPage: s, handlePageChange: l, initialCategoryId: i } = e,
        a = (0, I.uM)(),
        r = (0, tK.U)(),
        o = a?.sessionId ?? "",
        { noCache: c, includeUnpublished: m } = (0, tY.A)(),
        g = u.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        h = u.useRef(void 0);
    u.useEffect(() => {
        if (null == i || 0 === g.length) {
            h.current = void 0;
            return;
        }
        if (i === h.current) return;
        let e = g.findIndex((e) => e.skuId === i);
        if (-1 === e) return;
        let t = Math.floor(e / tc.l5) + 1;
        t !== s && l(t), (h.current = i);
    }, [i, g, l, s]);
    let x = u.useMemo(() => {
        let e = (s - 1) * tc.l5;
        return g.slice(e, e + tc.l5);
    }, [g, s]);
    return (u.useEffect(() => {
        (0, tB.z)({
            sessionId: o,
            checkpoint: tB.t.SHOP_MOUNTED,
            tab: tc.G2.CATALOG,
            unpublishedCategoriesShown: m,
            cacheDisabled: c,
        });
    }, []),
    u.useEffect(() => {
        r ||
            0 === x.length ||
            (0, tB.z)({
                sessionId: o,
                checkpoint: tB.t.SHOP_RENDERED,
                tab: tc.G2.CATALOG,
                unpublishedCategoriesShown: m,
                cacheDisabled: c,
            });
    }, [o, m, c, r, x.length]),
    r)
        ? (0, d.jsx)(tz, {})
        : (0, d.jsxs)("div", {
              className: tG.LZ,
              children: [
                  x.map((e, t) =>
                      (0, d.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              tabIndex: -1,
                              role: "group",
                              "aria-label": eo.intl.formatToPlainString(eo.t.FNtLb3, { category: e.name }),
                              children: (0, d.jsx)(I.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, d.jsx)(tq, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, d.jsx)("div", {
                      className: tG.Ej,
                      children: (0, d.jsx)(tM.m, {
                          currentPage: s,
                          totalCount: g.length,
                          pageSize: tc.l5,
                          onPageChange: l,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
var tX = n(177366),
    tQ = n(401864),
    tJ = n(124987),
    t0 = n(691885),
    t1 = n(146919),
    t4 = n(858733);
let t2 = function () {
    let { sort: e, onSetSort: t, hasRelevanceFilters: n } = (0, M.v)(),
        s = (0, I.uM)(),
        l = (0, t1.yB)("CollectiblesSortSelect"),
        i = n(),
        a = u.useMemo(() => tc.QB.filter((e) => e.sortType !== tJ.$.RELEVANCE || i), [i]),
        r = u.useCallback((e) => {
            let { sortType: t, sortDirection: n } = e;
            return t === tJ.$.RECENCY
                ? { label: eo.intl.string(eo.t["51Bhiz"]), value: "recent", id: "recent" }
                : t === tJ.$.PRICE
                  ? n === tQ.A.ASC
                      ? { label: eo.intl.string(eo.t.m8RVU2), value: "price-asc", id: "price-asc" }
                      : { label: eo.intl.string(eo.t.zBwQJO), value: "price-desc", id: "price-desc" }
                  : t === tJ.$.RELEVANCE
                    ? { label: eo.intl.string(eo.t["XoeT/z"]), value: "relevance", id: "relevance" }
                    : { label: eo.intl.string(eo.t.Y68e5p), value: "popularity", id: "popularity" };
        }, []),
        o = u.useCallback(
            (e) =>
                ({
                    recent: { sortType: tJ.$.RECENCY, sortDirection: tQ.A.DESC },
                    "price-asc": { sortType: tJ.$.PRICE, sortDirection: tQ.A.ASC },
                    "price-desc": { sortType: tJ.$.PRICE, sortDirection: tQ.A.DESC },
                    popularity: { sortType: tJ.$.POPULARITY, sortDirection: tQ.A.DESC },
                    relevance: { sortType: tJ.$.RELEVANCE, sortDirection: tQ.A.DESC },
                })[e],
            [],
        ),
        c = u.useCallback(
            (e) => {
                let n = r(o(e));
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_section: s?.pageSection,
                    page_category: s?.pageCategory,
                    page_index: s?.pageIndex,
                    page_size: s?.pageSize,
                    cta_name: `sort by ${n.label.toLowerCase()}`,
                    page_type: "catalog",
                }),
                    t(o(e));
            },
            [s, r, o, t],
        ),
        m = r(e);
    return (0, d.jsx)("div", {
        className: g()(t4.k, { [t1.jP]: l }),
        children: (0, d.jsx)(t0.l, {
            label: eo.intl.string(eo.t.uaX705),
            hideLabel: !0,
            options: a.map(r),
            onSelectionChange: c,
            value: m.value,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
var t3 =
        (((a = {}).BLUE = "COLLECTIBLES_COLOR_BLUE"),
        (a.GREEN = "COLLECTIBLES_COLOR_GREEN"),
        (a.PINK = "COLLECTIBLES_COLOR_PINK"),
        (a.RED = "COLLECTIBLES_COLOR_RED"),
        (a.YELLOW = "COLLECTIBLES_COLOR_YELLOW"),
        (a.ORANGE = "COLLECTIBLES_COLOR_ORANGE"),
        (a.PURPLE = "COLLECTIBLES_COLOR_PURPLE"),
        (a.BROWN = "COLLECTIBLES_COLOR_BROWN"),
        (a.BLACK = "COLLECTIBLES_COLOR_BLACK"),
        (a.WHITE = "COLLECTIBLES_COLOR_WHITE"),
        a),
    t9 =
        (((r = {}).ANIME = "COLLECTIBLES_THEME_ANIME"),
        (r.GAMING = "COLLECTIBLES_THEME_GAMING"),
        (r.CUTE_COZY = "COLLECTIBLES_THEME_CUTE_COZY"),
        (r.FOOD_DRINKS = "COLLECTIBLES_THEME_FOOD_DRINKS"),
        (r.ANIMALS_PETS = "COLLECTIBLES_THEME_ANIMALS_PETS"),
        (r.MOVIES_TV_SHOWS = "COLLECTIBLES_THEME_MOVIES_TV_SHOWS"),
        (r.FANTASY = "COLLECTIBLES_THEME_FANTASY"),
        (r.DARK_MOODY = "COLLECTIBLES_THEME_DARK_MOODY"),
        (r.NATURE = "COLLECTIBLES_THEME_NATURE"),
        (r.SCI_FI = "COLLECTIBLES_THEME_SCI_FI"),
        r),
    t5 = n(150934),
    t8 = n(508770),
    t7 = n(278416),
    t6 = n(602853),
    ne = n(661531),
    nt = n(947641),
    nn = n(604338),
    ns = n(785866),
    nl = n(373846),
    ni = n(308323),
    na = n(608599),
    nr = n(685761),
    no = n(157225),
    nc = n(413249),
    nd = n(510241),
    nu = n(601198),
    nm = n(223311),
    ng = n(7250),
    nh = n(623655),
    nx = n(13875),
    nf = n(967339);
function nE() {
    let {
            onToggleOrbEligible: e,
            orbEligible: t,
            onToggleThirdPartyOnly: n,
            thirdPartyOnly: s,
            onToggleOfferEligible: l,
            offerEligible: i,
            reset: a,
            hasFilters: r,
        } = (0, M.v)(),
        o = (0, nh.z)("FilterBar"),
        c = r(),
        m = (0, nx.sk)("FilterBar"),
        h = (0, I.uM)(),
        x = u.useRef(null),
        f = (0, nm.A)(tt.FYj),
        E = u.useMemo(() => tc._6.filter((e) => m || e !== tT.q.PROFILE_FRAME), [m]),
        p = u.useCallback(
            (e) => {
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: h?.pageIndex,
                    page_size: h?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [h],
        ),
        v = u.useCallback(() => {
            p(`filter 3p only ${!1 === s ? "on" : "off"}`), n();
        }, [n, s, p]);
    return (0, d.jsxs)("div", {
        className: nf.kT,
        children: [
            (0, d.jsxs)("div", {
                className: g()(nf.KZ, nf.YG),
                children: [
                    (0, d.jsx)("div", {
                        ref: x,
                        tabIndex: -1,
                        children: (0, d.jsx)(et.E, {
                            variant: "text-md/semibold",
                            className: nf.hr,
                            children: eo.intl.string(eo.t.Qk6r1a),
                        }),
                    }),
                    null != f &&
                        (0, d.jsxs)("div", {
                            className: nf.Ym,
                            children: [
                                (0, d.jsx)(t5.S, {
                                    checked: i,
                                    onChange: () => {
                                        p(`filter offer eligible ${!1 === i ? "on" : "off"}`), l();
                                    },
                                    label: eo.intl.string(eo.t.hY8Ft1),
                                }),
                                (0, d.jsx)(t8.E, { type: { text: eo.intl.string(eo.t["nb5PC/"]) }, icon: t7.g }),
                            ],
                        }),
                    E.map((e) => (0, d.jsx)(np, { filter: e, trackFilterAction: p }, e)),
                    (0, d.jsx)(t5.S, {
                        checked: t,
                        onChange: () => {
                            p(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                        },
                        label: eo.intl.string(eo.t.AHHHgG),
                    }),
                    o && (0, d.jsx)(t5.S, { checked: s, onChange: v, label: eo.intl.string(eo.t["+W8gb+"]) }),
                ],
            }),
            (0, d.jsx)(nv, { trackFilterAction: p }),
            (0, d.jsx)(nb, { trackFilterAction: p }),
            c &&
                (0, d.jsx)(en.$, {
                    variant: "secondary",
                    onClick: () => {
                        p("filter reset"), a(), requestAnimationFrame(() => x.current?.focus());
                    },
                    text: eo.intl.string(eo.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
function np(e) {
    let { filter: t, trackFilterAction: n } = e,
        s = {
            [tT.q.AVATAR_DECORATION]: eo.intl.string(eo.t.dRZYNE),
            [tT.q.PROFILE_EFFECT]: eo.intl.string(eo.t["1cNjtx"]),
            [tT.q.NAMEPLATE]: eo.intl.string(eo.t.V68Fqz),
            [tT.q.PROFILE_FRAME]: eo.intl.string(eo.t.ecTJkR),
            [tT.q.BUNDLE]: eo.intl.string(eo.t.FYFpps),
        },
        { itemTypeFilters: l, onToggleItemType: i } = (0, M.v)(),
        a = (0, d.jsx)(t5.S, {
            checked: l.has(t),
            onChange: () => {
                let e = s[t]?.toLowerCase() != null ? s[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), i(t);
            },
            label: s[t] ?? "",
        });
    return t === tT.q.PROFILE_FRAME
        ? (0, d.jsxs)("div", { className: nf.Ym, children: [a, (0, d.jsx)(t8.E, { type: "new" })] })
        : a;
}
function nv(e) {
    let { trackFilterAction: t } = e,
        n = u.useMemo(
            () => [
                { color: "#9B59B6", label: eo.intl.string(eo.t.kqUD4P), enum: t3.PURPLE },
                { color: "#3498DB", label: eo.intl.string(eo.t.qQTRae), enum: t3.BLUE },
                { color: "#2ECC71", label: eo.intl.string(eo.t["f/Ylk6"]), enum: t3.GREEN },
                { color: "#A0522D", label: eo.intl.string(eo.t["Sd/BMa"]), enum: t3.BROWN },
                { color: "#F1C40F", label: eo.intl.string(eo.t["0fevYz"]), enum: t3.YELLOW },
            ],
            [],
        ),
        s = u.useMemo(
            () => [
                { color: "#E67E22", label: eo.intl.string(eo.t.ZE7weD), enum: t3.ORANGE },
                { color: "#E74C3C", label: eo.intl.string(eo.t.hKJGOM), enum: t3.RED },
                { color: "#EC407A", label: eo.intl.string(eo.t.HvLEGM), enum: t3.PINK },
                { color: "#FFFFFF", label: eo.intl.string(eo.t["CB+lNO"]), enum: t3.WHITE },
                { color: "#262626", label: eo.intl.string(eo.t["dMey+v"]), enum: t3.BLACK },
            ],
            [],
        );
    return (0, d.jsxs)("div", {
        className: nf.KZ,
        children: [
            (0, d.jsx)(et.E, { variant: "text-md/semibold", className: nf.hr, children: eo.intl.string(eo.t.K1xGoG) }),
            (0, d.jsx)(nj, { colors: n, trackFilterAction: t }),
            (0, d.jsx)(nj, { colors: s, trackFilterAction: t }),
        ],
    });
}
function nj(e) {
    let { colors: t, trackFilterAction: n } = e,
        { colorFilters: s, onToggleColor: l } = (0, M.v)();
    return (0, d.jsx)("div", {
        className: nf.OW,
        children: t.map((e) => {
            let { color: t, label: i, enum: a } = e;
            return (0, d.jsx)(
                nC,
                { color: t, label: i, enum: a, isToggled: s.has(a), onToggleColor: l, trackFilterAction: n },
                a,
            );
        }),
    });
}
function nC(e) {
    let { color: t, label: n, enum: s, isToggled: l, onToggleColor: i, trackFilterAction: a } = e,
        r = (0, t6.r)(ne.A.unsafe_rawColors.WHITE).hex(),
        o = (0, t6.r)(ne.A.unsafe_rawColors.PRIMARY_530).hex();
    return (0, d.jsx)(
        eU.m,
        {
            text: n,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, d.jsx)(
                ez.D,
                {
                    className: g()(nf.n1, { [nf.lx]: l }),
                    style: { backgroundColor: t },
                    "aria-label": n,
                    "aria-pressed": l,
                    onClick: () => {
                        a(`filter color ${n.toLowerCase()} ${!l ? "on" : "off"}`), i(s);
                    },
                    children:
                        l &&
                        (0, d.jsx)("div", {
                            className: nf.oE,
                            children: (0, d.jsx)(nt.r, {
                                size: "xs",
                                color: (0, ng.j)({ backgroundColor: t, colors: [r, o] }),
                            }),
                        }),
                },
                t,
            ),
        },
        n,
    );
}
function nb(e) {
    let { trackFilterAction: t } = e,
        { themeFilters: n, onToggleTheme: s } = (0, M.v)(),
        l = (0, eg.Ay)() === ea.NJ.DARK,
        i = u.useCallback(
            (e) => {
                if (n.has(e) || l) return "control-primary-text-default";
            },
            [n, l],
        ),
        a = u.useCallback((e) => (n.has(e) || l ? ne.A.colors.WHITE : ne.A.colors.INTERACTIVE_TEXT_DEFAULT), [n, l]),
        r = u.useMemo(
            () => [
                {
                    name: eo.intl.string(eo.t.aVBOKh),
                    icon: (0, d.jsx)(nn.E, { size: "xs", color: a(t9.ANIME) }),
                    enum: t9.ANIME,
                },
                {
                    name: eo.intl.string(eo.t["3WoZBc"]),
                    icon: (0, d.jsx)(ns._, { size: "xs", color: a(t9.GAMING) }),
                    enum: t9.GAMING,
                },
                {
                    name: eo.intl.string(eo.t.yuEmLj),
                    icon: (0, d.jsx)(nl.C, { size: "xs", color: a(t9.CUTE_COZY) }),
                    enum: t9.CUTE_COZY,
                },
                {
                    name: eo.intl.string(eo.t.mMvCHo),
                    icon: (0, d.jsx)(ni.L, { size: "xs", color: a(t9.SCI_FI) }),
                    enum: t9.SCI_FI,
                },
                {
                    name: eo.intl.string(eo.t.TlhOQC),
                    icon: (0, d.jsx)(na.L, { size: "xs", color: a(t9.FOOD_DRINKS) }),
                    enum: t9.FOOD_DRINKS,
                },
                {
                    name: eo.intl.string(eo.t["4IaUIM"]),
                    icon: (0, d.jsx)(nr.f, { size: "xs", color: a(t9.FANTASY) }),
                    enum: t9.FANTASY,
                },
                {
                    name: eo.intl.string(eo.t["w0nSG/"]),
                    icon: (0, d.jsx)(no.N, { size: "xs", color: a(t9.ANIMALS_PETS) }),
                    enum: t9.ANIMALS_PETS,
                },
                {
                    name: eo.intl.string(eo.t.cJng7v),
                    icon: (0, d.jsx)(nc.p, { size: "xs", color: a(t9.NATURE) }),
                    enum: t9.NATURE,
                },
                {
                    name: eo.intl.string(eo.t["5mUvyM"]),
                    icon: (0, d.jsx)(nd.T, { size: "xs", color: a(t9.MOVIES_TV_SHOWS) }),
                    enum: t9.MOVIES_TV_SHOWS,
                },
                {
                    name: eo.intl.string(eo.t.MB9H5Z),
                    icon: (0, d.jsx)(nu.e, { size: "xs", color: a(t9.DARK_MOODY) }),
                    enum: t9.DARK_MOODY,
                },
            ],
            [a],
        );
    return (0, d.jsxs)("div", {
        className: nf.KZ,
        children: [
            (0, d.jsx)(et.E, { variant: "text-md/semibold", className: nf.hr, children: eo.intl.string(eo.t.t1Ztrp) }),
            (0, d.jsx)("div", {
                className: nf.Ot,
                children: r.map((e) => {
                    let { name: l, icon: a, enum: r } = e;
                    return (0, d.jsxs)(
                        ez.D,
                        {
                            className: g()(nf.w4, { [nf.C7]: n.has(r) }),
                            "aria-label": l,
                            "aria-pressed": n.has(r),
                            onClick: () => {
                                let e = n.has(r);
                                t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), s(r);
                            },
                            children: [a, (0, d.jsx)(et.E, { color: i(r), variant: "text-md/medium", children: l })],
                        },
                        l,
                    );
                }),
            }),
        ],
    });
}
var nS = n(561769),
    n_ = n(882443);
function nN() {
    return (0, d.jsxs)("div", {
        className: n_.k,
        children: [
            (0, d.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a72233587aaf964fc327663677974641a235719ad6445da58f931094cb799f66.png",
                alt: eo.intl.string(eo.t.oezC3x),
                className: n_._,
            }),
            (0, d.jsx)(em.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t.oezC3x) }),
            (0, d.jsx)(et.E, { variant: "text-md/medium", children: eo.intl.string(eo.t["Tc/Ndl"]) }),
        ],
    });
}
var nA = n(996824);
let nI = { flattenProductVariants: !0 };
function nL(e) {
    let { isFetchingCategories: t, scrollerRef: n, tab: s } = e,
        l = (0, I.uM)(),
        i = l?.sessionId ?? "",
        { noCache: a, includeUnpublished: r } = (0, tY.A)(),
        o = (0, x.bG)([A.default], () => A.default.getCurrentUser()),
        { skus: c, currentPage: m, totalCount: h, isFetchingResults: f } = (0, tb.S)(),
        E = (0, x.yK)([L.A], () => L.A.getProductsBySkus(c)),
        p = u.useCallback(() => {
            n?.current?.scrollToTop({ animate: !0 });
        }, [n]),
        v = c?.join("");
    u.useEffect(() => {
        p();
    }, [v, p]);
    let j = (0, tP.p)(),
        C = u.useMemo(() => j(E), [j, E]);
    u.useEffect(() => {
        t ||
            (0, tB.z)({
                sessionId: i,
                checkpoint: tB.t.SHOP_RENDERED,
                tab: s,
                unpublishedCategoriesShown: r,
                cacheDisabled: a,
            });
    }, [i, r, a, t, s]);
    let b = u.useRef(null),
        { setQueryPageSize: S, setQueryPageOffset: _, queryPageSize: N } = (0, M.v)(),
        [O, k] = u.useState(!1),
        T = t || f || null == o;
    u.useEffect(() => {
        T ? k(!1) : C.length > 0 && k(!0);
    }, [T, C.length]);
    let R = N > 0 && !T && 0 === C.length;
    u.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == b.current || S(Math.floor(5 * getComputedStyle(b.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != b.current) return e.observe(b.current), () => e.disconnect();
    }, [S]);
    let y = u.useCallback(
        (e) => {
            to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: l?.sessionId,
                page_section: l?.pageSection,
                page_category: l?.pageCategory,
                page_index: e,
                page_size: N,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                _((e - 1) * N);
        },
        [l, N, _],
    );
    return (0, d.jsxs)(nS.v3.Provider, {
        value: nI,
        children: [
            (0, d.jsxs)("div", {
                className: g()({ [nA.oE]: R }),
                children: [
                    R && (0, d.jsx)(nN, {}),
                    (0, d.jsxs)("div", {
                        className: g()(nA.ZE, { [nA.Kp]: O }),
                        ref: b,
                        children: [
                            T && [...Array(N)].map((e, t) => (0, d.jsx)(tw.A, {}, t)),
                            !T &&
                                C.map((e, t) =>
                                    null == L.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, d.jsx)(
                                              I.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, d.jsx)(
                                                      tV.A,
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
            h > N &&
                (0, d.jsx)("div", {
                    className: nA.Ej,
                    children: (0, d.jsx)("div", {
                        children: (0, d.jsx)(tM.m, {
                            currentPage: m,
                            totalCount: h,
                            pageSize: N,
                            onPageChange: y,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
var nO = n(328539);
function nk(e) {
    let { tab: t, categories: n, initialCategoryId: s, showFilterInitially: l = !0, onUnmount: i } = e,
        a = (0, tL.A)("shop_include_unpublished");
    (0, M.S)(a);
    let r = u.useRef(null),
        { handleScroll: o } = tI(r, t),
        c = (0, w.U)("Shop Browse"),
        { setCategoryRef: m, handleScrollToCategory: g } = (0, tX.k0)(r.current),
        [h, x] = u.useState(l),
        [f, E] = u.useState(!1);
    return (
        u.useEffect(() => {
            null != s && g(s);
        }, [s, g]),
        u.useEffect(
            () => () => {
                null != i && i();
            },
            [],
        ),
        u.useEffect(() => {
            function e() {
                E(window.innerWidth < 1400);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, d.jsx)("div", {
            className: nO.VM,
            children: (0, d.jsxs)("main", {
                className: nO.MY,
                children: [
                    (0, d.jsx)(G.Gt, {
                        className: nO.OW,
                        ref: r,
                        onScroll: o,
                        children: c
                            ? (0, d.jsx)("div", {
                                  className: nO.en,
                                  children: (0, d.jsx)("div", {
                                      className: nO.pf,
                                      children: (0, d.jsx)(tO.Z_, { tenantId: tt.FYj, templateId: tk.b.BACK_CATALOG }),
                                  }),
                              })
                            : (0, d.jsx)(nT, {
                                  isSmallScreen: f,
                                  filterBarOpen: h,
                                  setFilterBarOpen: x,
                                  tab: t,
                                  scrollerRef: r,
                                  categories: n,
                                  setCategoryRef: m,
                                  initialCategoryId: s,
                              }),
                    }),
                    h && !f && (0, d.jsx)("div", { className: nO.yF }),
                    h && !f && (0, d.jsx)(tS.Ip, { className: nO.kT, children: (0, d.jsx)(nE, {}) }),
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
            scrollerRef: i,
            categories: a,
            setCategoryRef: r,
            initialCategoryId: o,
        } = e,
        c = u.useRef(null),
        m = (0, M.v)((e) => e.hasDefaultFilters()),
        h = (0, I.uM)(),
        { handlePageChange: x, currentPage: f } = (function (e) {
            let [t, n] = u.useState(1);
            return {
                currentPage: t,
                handlePageChange: u.useCallback(
                    (t) => {
                        n(t), e.current?.scrollTo({ to: 0 });
                    },
                    [e, n],
                ),
            };
        })(i),
        E = u.useCallback(
            (e) => {
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: e,
                    page_size: h?.pageSize,
                    cta_name: `catalog page ${e}`,
                    page_type: "catalog",
                }),
                    x(e);
            },
            [h, x],
        ),
        p = u.useRef(null);
    return (
        u.useEffect(() => {
            if (t && n)
                return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
            function e(e) {
                let t = e.target;
                null === c.current ||
                    null === p.current ||
                    c.current.contains(t) ||
                    p.current.contains(t) ||
                    (to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        (0, d.jsx)("div", {
            className: nO.en,
            children: (0, d.jsxs)("div", {
                className: nO.pf,
                children: [
                    (0, d.jsxs)("div", {
                        className: nO.ne,
                        children: [
                            (0, d.jsx)("div", { className: nO.lQ, children: (0, d.jsx)(tR, {}) }),
                            (0, d.jsxs)("div", {
                                className: g()(nO.wR, { [nO.Im]: t }),
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: nO.Ul,
                                        children: [
                                            (0, d.jsx)(et.E, {
                                                variant: "text-md/semibold",
                                                children: eo.intl.string(eo.t.uaX705),
                                            }),
                                            (0, d.jsx)(t2, {}),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        ref: p,
                                        children: (0, d.jsx)(en.$, {
                                            onClick: function () {
                                                let e = !n;
                                                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                                            text: eo.intl.string(n ? eo.t.fYtm6f : eo.t["TeTYE+"]),
                                            icon: t_.R,
                                            iconPosition: "end",
                                        }),
                                    }),
                                ],
                            }),
                            n &&
                                t &&
                                (0, d.jsx)("div", {
                                    className: nO.Dh,
                                    ref: c,
                                    children: (0, d.jsx)(G.Ch, { className: nO.Qo, children: (0, d.jsx)(nE, {}) }),
                                }),
                        ],
                    }),
                    m
                        ? (0, d.jsx)(I.R9, {
                              newValue: { pageIndex: f },
                              children: (0, d.jsx)(tZ, {
                                  categories: a,
                                  setCategoryRef: r,
                                  currentPage: f,
                                  handlePageChange: E,
                                  initialCategoryId: o,
                              }),
                          })
                        : (0, d.jsx)(nL, { scrollerRef: i, tab: l }, l),
                ],
            }),
        })
    );
}
var nR = n(599062),
    ny = n(651162),
    nM = n(367727);
let nP = u.createContext(null);
function nD(e) {
    let { blockType: t, children: n } = e,
        s = u.useMemo(() => ({ blockType: t }), [t]);
    return (0, d.jsx)(nP.Provider, { value: s, children: n });
}
var nB = n(755172),
    nH = n(325595),
    nw = n(893998),
    nF = n(110629),
    nG = n(461376),
    nU = n(607399),
    nz = n(946015),
    nV = n(717421),
    nK = n(140735),
    nY = n(496431),
    nW = n(324145);
function n$(e) {
    let { endDate: t, size: n = "md", className: s, showSeconds: l = !1 } = e,
        { days: i, hours: a, minutes: r, seconds: o } = (0, nY.A)(t),
        c = (function (e, t, n, s, l) {
            function i(e) {
                return `${e.toString().padStart(2, "0")}`;
            }
            let a = [i(e), i(t), i(n)];
            return l && a.push(i(s)), a.join(":");
        })(i, a, r, o, l);
    return (0, d.jsxs)("div", {
        className: g()(nW.kL, s),
        role: "timer",
        children: [
            c
                .split("")
                .map((e, t) =>
                    ":" === e
                        ? (0, d.jsx)(
                              et.E,
                              {
                                  color: "none",
                                  variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                                  className: nW.eC,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          )
                        : (0, d.jsx)(
                              et.E,
                              {
                                  color: "text-overlay-light",
                                  variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                                  className: nW.ai,
                                  "aria-hidden": !0,
                                  tag: "div",
                                  children: e,
                              },
                              t,
                          ),
                ),
            (0, d.jsx)(nK.A, { children: eo.intl.format(eo.t.j6IyVe, { days: i, hours: a, minutes: r }) }),
        ],
    });
}
var nq = n(63776);
let nZ = u.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: n } = e,
        s = (0, nV.z)({
            transform: `translateX(-50%) ${n ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!n,
            config: { tension: 120, friction: 12 },
        });
    return (0, d.jsxs)(nG.animated.div, {
        className: g()([nq.lP, nU.Fr && nq.yJ]),
        role: "status",
        style: {
            ...s,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, d.jsxs)(nz.s, {
                direction: nz.s.Direction.VERTICAL,
                children: [
                    (0, d.jsx)(et.E, {
                        variant: "text-md/medium",
                        className: nq.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, d.jsx)(et.E, {
                            variant: "text-sm/medium",
                            className: nq.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, d.jsx)(n$, { endDate: t.endTime }),
        ],
    });
});
var nX = n(424918),
    nQ = n(993408),
    nJ = n(196231),
    n0 = n(459550);
function n1(e) {
    let { handleTransition: t, featuredBlockRecord: n } = e;
    return (0, d.jsx)("div", {
        className: g()(n0.n9, n0.YB),
        children: n?.subblocks.map((e, n) =>
            e.type === nX.u.CATEGORY
                ? (0, d.jsx)(
                      I.R9,
                      {
                          newValue: {
                              categoryPosition: 1,
                              pageCategory: e.name,
                              pageSection: "featured_block",
                              tilePosition: n,
                          },
                          children: (0, d.jsx)(
                              nJ.S,
                              {
                                  subblock: e,
                                  enablePreview: 0 === n,
                                  badgeText: (0, nQ.HF)(e.unpublishedAt) ? eo.intl.string(eo.t["h/uBCR"]) : void 0,
                                  handleTransition: t,
                              },
                              e.categoryStoreListingId,
                          ),
                      },
                      e.categoryStoreListingId,
                  )
                : (e.type, null),
        ),
    });
}
function n4(e) {
    let { handleTransition: t, categories: n } = e;
    if (null == n || n.length < 2) return null;
    let [s, l] = n;
    return (0, d.jsx)("div", {
        className: g()(n0.n9, n0.YB),
        children: (0, d.jsxs)(I.R9, {
            newValue: {
                categoryPosition: 1,
                pageCategory: null != s ? s.name : l?.name,
                pageSection: "featured_block",
                tilePosition: +(null == s),
            },
            children: [
                null != s &&
                    (0, d.jsx)(nJ.S, {
                        category: s,
                        enablePreview: !0,
                        badgeText: (0, nQ.HF)(s.unpublishedAt) ? eo.intl.string(eo.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
                null != l &&
                    (0, d.jsx)(nJ.S, {
                        category: l,
                        badgeText: (0, nQ.HF)(l.unpublishedAt) ? eo.intl.string(eo.t["h/uBCR"]) : void 0,
                        handleTransition: t,
                    }),
            ],
        }),
    });
}
let n2 = function (e) {
    let { isLoading: t, handleTransition: n, categories: s, featuredBlockRecord: l } = e,
        { analyticsLocations: i } = (0, j.Ay)(es.A.COLLECTIBLES_SHOP_FEATURED_BLOCK);
    return t
        ? (0, d.jsxs)("div", {
              className: g()(n0.n9, n0.YB),
              children: [
                  (0, d.jsx)("div", {
                      className: g()(n0.Jn, n0.oT),
                      children: (0, d.jsx)("div", { className: n0.uy }),
                  }),
                  (0, d.jsx)("div", {
                      className: g()(n0.Jn, n0.oT),
                      children: (0, d.jsx)("div", { className: n0.uy }),
                  }),
              ],
          })
        : null != l
          ? (0, d.jsx)(j.f5, {
                value: i,
                children: (0, d.jsx)(n1, { featuredBlockRecord: l, handleTransition: n, isLoading: !1 }),
            })
          : (0, d.jsx)(j.f5, {
                value: i,
                children: (0, d.jsx)(n4, { categories: s, handleTransition: n, isLoading: !1 }),
            });
};
var n3 = n(531685),
    n9 = n(621466),
    n5 =
        (((o = {}).MOUNTED = "mounted"),
        (o.SORT_OUT = "sort-out"),
        (o.SORT_IN = "sort-in"),
        (o.SHUFFLE_OUT = "shuffle-out"),
        (o.SHUFFLE_IN = "shuffle-in"),
        (o.FINISHED = "finished"),
        o);
n(667532);
var n8 = n(435558),
    n7 = n.n(n8),
    n6 =
        (((c = {}).RECOMMENDED = "recommended"),
        (c.POPULAR = "popular"),
        (c.RECENT = "recent"),
        (c.PRICE_LOW_TO_HIGH = "price_low_to_high"),
        (c.RANDOM = "random"),
        c),
    se = n(153488),
    st = n(313276),
    sn = n(623373),
    ss = n(885574),
    sl = n(975807),
    si = n(975571),
    sa = n(938682);
let sr = function (e) {
        let { personalizedResults: t, label: n } = e,
            s = n ?? eo.intl.string(eo.t.NSv5KV);
        return (0, d.jsxs)("div", {
            className: sa.L,
            children: [
                (0, d.jsx)(em.D, { variant: "heading-lg/semibold", children: s }),
                t &&
                    (0, d.jsx)(eU.m, {
                        text: eo.intl.string(eo.t["3taPdj"]),
                        position: "top",
                        "aria-label": eo.intl.string(eo.t["3taPdj"]),
                        children: (0, d.jsx)(ez.D, {
                            onClick: () => (0, sl.A)(si.A.getArticleURL(tt.MVz.DATA_USED_FOR_RECOMMENDED)),
                            className: sa.s,
                            children: (0, d.jsx)(ss.m, { size: "sm" }),
                        }),
                    }),
            ],
        });
    },
    so = function (e) {
        let {
                isLoading: t,
                title: n,
                sortedSkuIds: s,
                numVisibleItems: l,
                tab: i,
                buttonContainerClassName: a,
                orbsSupportedOnly: r,
            } = e,
            o = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
            c = q.Ay.canUseShopDiscounts(o),
            m = (0, nS.Mk)(i),
            h = (0, t1.yB)("FeedBlock"),
            {
                sortType: x,
                setSortType: f,
                sortedItems: E,
                sortOptions: p,
                shuffleProducts: v,
                showRecommendationOption: C,
            } = (function (e) {
                let { sortedSkuIds: t, hasShopDiscount: n, orbsSupportedOnly: s } = e,
                    l = (0, B.bG)([se.A], () => se.A.hasConsented(tt.YAq.PERSONALIZATION)),
                    i = u.useMemo(() => t?.[n6.RECOMMENDED] ?? [], [t]),
                    a = u.useMemo(() => t?.[n6.POPULAR] ?? [], [t]),
                    r = i.length > 0 && l,
                    [o, c] = u.useState(r ? n6.RECOMMENDED : n6.POPULAR),
                    d = (0, B.bG)([L.A], () => L.A.productsWithVariantsAsGroup),
                    m = u.useMemo(() => (0, nQ.CE)(d), [d]),
                    g = (0, st.A)(),
                    h = (0, tP.p)(),
                    [x, f] = u.useState([]),
                    E = u.useCallback(() => {
                        c(n6.RANDOM), f(n7().shuffle(m));
                    }, [m]);
                u.useEffect(() => {
                    f(n7().shuffle(m));
                }, [m]);
                let p = u.useMemo(() => {
                    let e = [];
                    switch (o) {
                        case n6.RECENT:
                            e = m;
                            break;
                        case n6.PRICE_LOW_TO_HIGH:
                            e = (0, nQ.bf)([...m], n, s);
                            break;
                        case n6.RECOMMENDED:
                            e = g(i);
                            break;
                        case n6.POPULAR:
                            e = g(a);
                            break;
                        case n6.RANDOM:
                            e = x;
                    }
                    return s ? (0, sn.ex)(h(e)) : h(e);
                }, [o, s, h, n, m, g, i, a, x]);
                return {
                    sortType: o,
                    setSortType: c,
                    sortedItems: (0, tD.X)(p),
                    sortOptions: u.useMemo(() => {
                        let e = [
                            { value: n6.POPULAR, label: eo.intl.string(eo.t.Y68e5p) },
                            { value: n6.RECENT, label: eo.intl.string(eo.t["51Bhiz"]) },
                            { value: n6.PRICE_LOW_TO_HIGH, label: eo.intl.string(eo.t.m8RVU2) },
                        ];
                        return r && e.unshift({ value: n6.RECOMMENDED, label: eo.intl.string(eo.t.zPWgFG) }), e;
                    }, [r]),
                    showRecommendationOption: r,
                    shuffleProducts: E,
                };
            })({ sortedSkuIds: s, hasShopDiscount: c, orbsSupportedOnly: r }),
            b = (0, B.bG)([H.Ay], () => H.Ay.useReducedMotion),
            S = (0, B.bG)([n3.A], () => n3.A.isFocused()),
            _ = !b && S,
            { animationPhase: N, startAnimation: O } = (() => {
                let [e, t] = u.useState("mounted"),
                    [n, s] = u.useState(!1),
                    l = u.useRef(null);
                return (
                    u.useEffect(() => {
                        if (n && "finished" === e) {
                            if (null !== l.current) {
                                let e = l.current;
                                if (
                                    e.tabIndex >= 0 ||
                                    (0, n9.vq)(e, HTMLButtonElement) ||
                                    (0, n9.vq)(e, HTMLAnchorElement) ||
                                    (0, n9.vq)(e, HTMLInputElement) ||
                                    (0, n9.vq)(e, HTMLSelectElement) ||
                                    (0, n9.vq)(e, HTMLTextAreaElement)
                                )
                                    e.focus();
                                else {
                                    let t = e.querySelector(
                                        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [role="combobox"], [role="button"]',
                                    );
                                    t?.focus();
                                }
                            }
                            s(!1);
                        }
                    }, [e, n]),
                    {
                        animationPhase: e,
                        startAnimation: u.useCallback((e) => {
                            let { isShuffling: n, onOutroComplete: i, returnRef: a } = e;
                            a?.current != null && ((l.current = a.current), s(!0)),
                                t(n ? "shuffle-out" : "sort-out"),
                                setTimeout(
                                    () => {
                                        i(),
                                            t(n ? "shuffle-in" : "sort-in"),
                                            setTimeout(
                                                () => {
                                                    t("finished");
                                                },
                                                n ? 200 : 300,
                                            );
                                    },
                                    n ? 250 : 300,
                                );
                        }, []),
                    }
                );
            })(),
            k = (0, I.uM)(),
            T = k?.sessionId ?? "",
            { analyticsLocations: R } = (0, j.Ay)(es.A.COLLECTIBLES_SHOP_POPULAR_PICKS),
            y = u.useRef(null),
            M = u.useRef(null),
            [P, D] = u.useState(!1),
            w = u.useCallback(
                (e) => {
                    D(!1),
                        O({ isShuffling: !1, onOutroComplete: () => f(e), returnRef: M }),
                        to.default.track(tt.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
                            page_session_id: T,
                            sort_type: e,
                        });
                },
                [O, f, T],
            );
        return null == o
            ? null
            : (0, d.jsx)(j.f5, {
                  value: R,
                  children: (0, d.jsxs)("div", {
                      className: g()(n0.lD, n0.YB),
                      children: [
                          (0, d.jsxs)("div", {
                              className: n0.$6,
                              children: [
                                  (0, d.jsx)(sr, { label: n, personalizedResults: C }),
                                  (0, d.jsxs)("div", {
                                      className: g()(n0.IE, { [t1.jP]: h }),
                                      children: [
                                          (0, d.jsxs)("div", {
                                              className: n0.gd,
                                              children: [
                                                  (0, d.jsx)(et.E, {
                                                      variant: "text-md/medium",
                                                      children: eo.intl.string(eo.t.uaX705),
                                                  }),
                                                  (0, d.jsx)("div", {
                                                      className: g()(a, n0.pI),
                                                      ref: M,
                                                      children: (0, d.jsx)(t0.l, {
                                                          label: eo.intl.string(eo.t.uaX705),
                                                          hideLabel: !0,
                                                          options: p,
                                                          onSelectionChange: w,
                                                          formatOption: (e) => {
                                                              let { label: t, value: n } = e;
                                                              return { id: n, label: t, value: n };
                                                          },
                                                          value: x,
                                                          selectionMode: "single",
                                                          fullWidth: !0,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, d.jsx)("div", {
                                              className: a,
                                              children: (0, d.jsx)(en.$, {
                                                  variant: "secondary",
                                                  text: eo.intl.string(eo.t.X3tnc4),
                                                  buttonRef: y,
                                                  onClick: function () {
                                                      D(!0),
                                                          O({ isShuffling: !0, onOutroComplete: v, returnRef: y }),
                                                          to.default.track(
                                                              tt.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED,
                                                              { page_session_id: T },
                                                          );
                                                  },
                                                  disabled: N !== n5.MOUNTED && N !== n5.FINISHED,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, d.jsx)(nK.A, {
                                      "aria-live": "polite",
                                      role: "status",
                                      children: P && N === n5.FINISHED ? eo.intl.string(eo.t["3Pml0e"]) : "",
                                  }),
                              ],
                          }),
                          (0, d.jsx)("div", {
                              className: n0.hm,
                              children: t
                                  ? (0, d.jsx)(d.Fragment, {
                                        children: [...Array(12)].map((e, t) => (0, d.jsx)(tw.A, {}, t + 1)),
                                    })
                                  : E.slice(0, l).map((e, t) => {
                                        let n,
                                            s = L.A.getCategoryForProduct(e.skuId);
                                        if (null == e || null == s) return null;
                                        if (_)
                                            if (N === n5.SHUFFLE_OUT)
                                                return (0, d.jsx)(
                                                    "div",
                                                    {
                                                        className: n0.Z2,
                                                        children: (0, d.jsx)(tw.A, { skipPulseAnimation: !0 }),
                                                    },
                                                    `${e.skuId}-${t}`,
                                                );
                                            else
                                                N === n5.SORT_OUT
                                                    ? (n = n0.MW)
                                                    : N === n5.SHUFFLE_IN
                                                      ? (n = n0.aS)
                                                      : N === n5.SORT_IN && (n = n0.F7);
                                        return (0, d.jsx)(
                                            I.R9,
                                            {
                                                newValue: {
                                                    tilePosition: t,
                                                    pageSection: "popular picks",
                                                    categoryPosition: 2,
                                                },
                                                children: (0, d.jsx)("div", {
                                                    className: n,
                                                    children: (0, d.jsx)(tV.A, {
                                                        skuId: e.skuId,
                                                        hideStaticBundleBackgroundAsset: !0,
                                                        prioritizedCurrency: m,
                                                    }),
                                                }),
                                            },
                                            e.skuId,
                                        );
                                    }),
                          }),
                      ],
                  }),
              });
    };
var sc = n(449543),
    sd = n(843793);
let su = function (e) {
    let { block: t, handleTransition: n, tab: s } = e,
        l = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
        i = (0, nS.Mk)(s),
        a = (0, st.A)(),
        r = u.useMemo(() => a(t.rankedSkuIds), [t.rankedSkuIds, a]),
        o = (0, tD.X)(r),
        { analyticsLocations: c } = (0, j.Ay)(es.A.COLLECTIBLES_SHOP_SHELF),
        m = u.useCallback(() => {
            n({
                sourceButton: "frames product shelf see all",
                categorySkuId: t.categorySkuId,
                isInternalShopDeeplink: !0,
            });
        }, [n, t.categorySkuId]);
    return null == l || 0 === o.length
        ? null
        : (0, d.jsx)(j.f5, {
              value: c,
              children: (0, d.jsxs)("div", {
                  className: g()(sd.kL, n0.YB),
                  children: [
                      null != t.desktopBackgroundImage &&
                          (0, d.jsx)("img", {
                              className: sd.iL,
                              src: t.desktopBackgroundImage,
                              alt: "",
                              "aria-hidden": !0,
                          }),
                      (0, d.jsxs)("div", {
                          className: sd.Qs,
                          children: [
                              (0, d.jsxs)("div", {
                                  className: sd.wx,
                                  children: [
                                      (0, d.jsxs)("div", {
                                          className: sd.Jb,
                                          children: [
                                              (0, d.jsx)(nF.A, {
                                                  location: "FramesProductShelfBlock",
                                                  showTooltip: !0,
                                              }),
                                              (0, d.jsx)(em.D, {
                                                  variant: "heading-lg/semibold",
                                                  color: "text-overlay-light",
                                                  children: t.title,
                                              }),
                                          ],
                                      }),
                                      null != t.buttonText &&
                                          "" !== t.buttonText &&
                                          (0, d.jsx)(en.$, {
                                              variant: "overlay-primary",
                                              text: t.buttonText,
                                              onClick: m,
                                          }),
                                  ],
                              }),
                              (0, d.jsx)(sc.A, {
                                  gap: "xl",
                                  edgeFade: "sm",
                                  children: o.map((e, n) =>
                                      null == L.A.getCategoryForProduct(e.skuId)
                                          ? null
                                          : (0, d.jsx)(
                                                I.R9,
                                                {
                                                    newValue: {
                                                        tilePosition: n,
                                                        pageSection: t.title,
                                                        categoryPosition: 1,
                                                    },
                                                    children: (0, d.jsx)(tV.A, {
                                                        skuId: e.skuId,
                                                        prioritizedCurrency: i,
                                                    }),
                                                },
                                                e.skuId,
                                            ),
                                  ),
                              }),
                          ],
                      }),
                  ],
              }),
          });
};
var sm = n(269115),
    sg = n(789645),
    sh = n(976860),
    sx = n(48093);
let sf = "GAME_SERVER_HOSTING_BANNER";
function sE(e) {
    let { gameServerHostingBannerBlock: t, tab: n } = e,
        s = (0, I.uM)(),
        l = u.useRef(null),
        i = u.useRef(!1),
        a = u.useRef(null),
        [r, o] = u.useState(!1),
        c = u.useCallback(
            (e) => {
                to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: s?.sessionId,
                    page_type: n,
                    page_category: s?.pageCategory,
                    page_section: s?.pageSection,
                    tile_type: sf,
                    cta_name: e,
                });
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        ),
        m = u.useCallback(
            (e) => {
                e?.stopPropagation(),
                    c("go_to_game_server_hosting"),
                    (0, sh.pX)(tt.BVt.COLLECTIBLES_SHOP_WITH_TAB(tc.G2.GAME_SERVERS));
            },
            [c],
        ),
        h = u.useCallback(
            (e) => {
                e?.stopPropagation(),
                    c("dismiss"),
                    o(!0),
                    !0 === t.isDismissible &&
                        (0, nM.d6)(eG.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER, {
                            dismissAction: tn.i.USER_DISMISS,
                        });
            },
            [c, t.isDismissible],
        ),
        x = u.useCallback(
            (e) => {
                !i.current &&
                    (e && null === a.current
                        ? (a.current = setTimeout(() => {
                              (i.current = !0),
                                  (a.current = null),
                                  to.default.track(tt.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: s?.sessionId,
                                      page_type: n,
                                      page_category: s?.pageCategory,
                                      page_section: s?.pageSection,
                                      type: sf,
                                  });
                          }, 1e3))
                        : e || null === a.current || (clearTimeout(a.current), (a.current = null)));
            },
            [s?.sessionId, s?.pageCategory, s?.pageSection, n],
        );
    return (u.useEffect(
        () => () => {
            null !== a.current && (clearTimeout(a.current), (a.current = null));
        },
        [],
    ),
    r)
        ? null
        : (0, d.jsx)(J.N, {
              theme: ea.NJ.DARKER,
              children: (e) =>
                  (0, d.jsx)(sm.L, {
                      innerRef: l,
                      onChange: x,
                      threshold: 0,
                      children: (0, d.jsx)("div", {
                          ref: l,
                          className: g()(sx.YB, e),
                          children: (0, d.jsxs)(eE.s, {
                              className: sx.kL,
                              onClick: m,
                              "aria-label": eo.intl.string(er.default["34GMP9"]),
                              children: [
                                  (0, d.jsx)("img", {
                                      className: sx.Qw,
                                      src: "https://cdn.discordapp.com/media/v1/game-server-hosting/662112ac36b41888e634e936922e026acfe45e45ff89ac18337a86639ec30350",
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                                  (0, d.jsx)("div", { className: sx.f5, "aria-hidden": !0 }),
                                  !0 === t.isDismissible &&
                                      (0, d.jsx)("div", {
                                          className: sx.b,
                                          children: (0, d.jsx)(eD.K, {
                                              size: "sm",
                                              variant: "overlay-secondary",
                                              icon: sg.P,
                                              onClick: h,
                                              "aria-label": eo.intl.string(eo.t.WAI6xu),
                                          }),
                                      }),
                                  (0, d.jsx)("div", {
                                      className: sx.jE,
                                      children: (0, d.jsxs)("div", {
                                          className: sx.rF,
                                          children: [
                                              (0, d.jsxs)("div", {
                                                  className: sx.Z,
                                                  children: [
                                                      (0, d.jsx)(em.D, {
                                                          className: sx.R_,
                                                          variant: "heading-xl/bold",
                                                          color: "text-strong",
                                                          children: eo.intl.string(er.default["34GMP9"]),
                                                      }),
                                                      (0, d.jsx)(et.E, {
                                                          className: sx.h_,
                                                          variant: "text-md/medium",
                                                          color: "none",
                                                          lineClamp: 2,
                                                          children: eo.intl.string(er.default.xMpGuO),
                                                      }),
                                                  ],
                                              }),
                                              (0, d.jsx)(en.$, {
                                                  variant: "overlay-primary",
                                                  text: eo.intl.string(eo.t.jVcuVY),
                                                  onClick: m,
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
}
var sp = n(337183),
    sv = n(212407),
    sj = n(815280),
    sC = n(10675);
let sb = function (e) {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        s = (0, ty.K)(
            (e) => {
                n?.(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: l, bannerAnimatedUrl: i } = (0, sv.qY)(t),
        a = null != t.textColor ? { color: t.textColor } : void 0,
        r = null != t.body && "" !== t.body,
        o = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, d.jsxs)("div", {
        ref: s,
        className: sC.BX,
        children: [
            (0, d.jsx)("div", {
                className: sC.vK,
                children: null != l && (0, d.jsx)(sj.A, { bannerStatic: l, bannerAnimated: i }),
            }),
            (0, d.jsx)("div", {
                className: sC.HQ,
                children: (0, d.jsxs)("div", {
                    className: sC.Yn,
                    children: [
                        null != t.endTime ? (0, d.jsx)(n$, { endDate: t.endTime, size: "lg" }) : null,
                        (0, d.jsx)(em.D, {
                            variant: "heading-xxl/bold",
                            className: sC.DD,
                            color: "text-strong",
                            style: { ...a },
                            children: t.title,
                        }),
                        r || o
                            ? (0, d.jsxs)(et.E, {
                                  variant: "text-md/medium",
                                  style: { ...a },
                                  children: [
                                      r && t.body,
                                      r && o && " ",
                                      o &&
                                          (0, d.jsx)(eT.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: sC.CU,
                                              style: { ...a },
                                              children: eo.intl.string(eo.t.O7ADgv),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
};
var sS = n(189213),
    s_ = n(290136),
    sN = n(478016),
    sA = n(825484),
    sI = n(812993),
    sL = n(914410),
    sO = n(34332),
    sk = n(597783),
    sT = n(61750);
function sR(e, t) {
    let n = u.useMemo(() => e?.products.filter((e) => e.skuId !== t).map((e) => e.skuId) ?? [], [e?.products, t]),
        s = (0, B.bG)([tj.A], () => tj.A.getPurchases(n));
    return {
        readyToClaim: u.useMemo(() => s.length === n.length, [s, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: s,
    };
}
var sy = n(162945),
    sM = n(858708);
let sP = u.memo(function (e) {
        let { category: t, rewardSkuId: n } = e,
            { handleCardVisibilityChange: s } = (0, sk.Z)(n),
            l = u.useRef(null),
            { isHoveringOrFocusing: i } = (0, ev.A)(l),
            { readyToClaim: a, collectibleProductSkuIds: r, collectedSkuIds: o } = sR(t, n),
            c = (0, B.bG)([tj.A], () => tj.A.isClaiming === n);
        return (0, d.jsx)(sm.L, {
            onChange: s,
            threshold: 0,
            innerRef: l,
            children: (0, d.jsx)("div", {
                ref: l,
                className: g()(sy.ty, sM.Q3, { [sy.yo]: i }),
                "aria-label": eo.intl.formatToPlainString(eo.t.Ez6aHE, { category: t.name }),
                children: (0, d.jsxs)("div", {
                    className: sy.qt,
                    children: [
                        (0, d.jsx)("img", {
                            alt: "Reward Bow",
                            src: "https://cdn.discordapp.com/assets/content/2551e5f1bf8d5d05bf2d631539469b38929f449547cf15c6c3df258affef1bd2.png",
                            className: sM.L8,
                        }),
                        (0, d.jsx)("div", {
                            className: sy.N1,
                            children: (0, d.jsx)(sI.Lp, {
                                text: eo.intl.string(eo.t.rykAJ9),
                                disableColor: !0,
                                className: sM.HZ,
                            }),
                        }),
                        (0, d.jsxs)("div", {
                            className: sy.xQ,
                            children: [
                                (0, d.jsxs)("div", {
                                    className: sM.xE,
                                    children: [
                                        (0, d.jsxs)("div", {
                                            className: sM.cs,
                                            children: [
                                                (0, d.jsx)(em.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    className: sy.tZ,
                                                    children: eo.intl.string(eo.t["0mDmg/"]),
                                                }),
                                                (0, d.jsx)(eU.m, {
                                                    text: a
                                                        ? eo.intl.string(eo.t.cKH3tk)
                                                        : eo.intl.formatToPlainString(eo.t["8aMDPc"], {
                                                              totalCount: r.length,
                                                          }),
                                                    align: "right",
                                                    caretConfig: { position: "bottom", align: "end" },
                                                    position: "top",
                                                    children: (0, d.jsx)("span", {
                                                        className: sM.ZB,
                                                        children: (0, d.jsx)(s_.c, { size: "xs" }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, d.jsx)("div", {
                                            className: sy.oh,
                                            "aria-hidden": !0,
                                            children: (0, d.jsxs)("div", {
                                                className: sM.L$,
                                                children: [
                                                    (0, d.jsx)(sL.Ay, {
                                                        variant: sL.qP.BLUE,
                                                        progress: o.length,
                                                        maximum: r.length,
                                                    }),
                                                    (0, d.jsxs)("div", {
                                                        className: g()(sM.__, { [sM.gF]: a }),
                                                        children: [
                                                            a
                                                                ? (0, d.jsx)(sN.U, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  })
                                                                : null,
                                                            (0, d.jsx)(et.E, {
                                                                variant: "text-xs/medium",
                                                                color: "currentColor",
                                                                children: eo.intl.formatToPlainString(eo.t["5TwASM"], {
                                                                    collectedCount: o.length,
                                                                    totalCount: r.length,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, d.jsx)("div", {
                                    className: sy.Vs,
                                    children: (0, d.jsx)(sA.e, {
                                        wrap: !1,
                                        className: sy.Ld,
                                        fullWidth: !0,
                                        children: (0, d.jsx)(en.$, {
                                            variant: "primary",
                                            onClick: function (e) {
                                                e.stopPropagation(),
                                                    a &&
                                                        (0, sO.BX)(t.skuId, n)
                                                            .then(() => {
                                                                let e = L.A.getProduct(n);
                                                                null != e &&
                                                                    (0, sT.A)({
                                                                        product: e,
                                                                        analyticsLocations: [],
                                                                        overrideGraphic: {
                                                                            type: "video",
                                                                            src: "https://cdn.discordapp.com/assets/content/0b8a43491ba8f130b2d07df54fb2b7582d7eb21af11491a58db2d440bb1a2c87.webm",
                                                                            fallbackImageSrc:
                                                                                "https://cdn.discordapp.com/assets/content/b01f9c900f0fd1f3be0846b6f5fc4feac072c377d6ceaf1e4157bccf44d2b6bf.png",
                                                                            loop: !0,
                                                                            loopAt: 6,
                                                                            aspectRatio: "16/9",
                                                                        },
                                                                    });
                                                            })
                                                            .catch(() => {
                                                                (0, f.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, d.jsx)(sS.Modal, {
                                                                            transitionState: e.transitionState,
                                                                            onClose: e.onClose,
                                                                            size: "sm",
                                                                            title: eo.intl.string(eo.t.SRTlyA),
                                                                            actions: [
                                                                                {
                                                                                    text: eo.intl.string(eo.t.TyCVIq),
                                                                                    onClick: e.onClose,
                                                                                    variant: "primary",
                                                                                },
                                                                            ],
                                                                            children: (0, d.jsx)("div", {
                                                                                children: eo.intl.string(
                                                                                    eo.t["0YpIF/"],
                                                                                ),
                                                                            }),
                                                                        }),
                                                                    ),
                                                                );
                                                            });
                                            },
                                            text: eo.intl.string(eo.t.VnVTNc),
                                            fullWidth: !0,
                                            disabled: !a,
                                            loading: c,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    }),
    sD = function (e) {
        let t,
            n,
            s,
            { isBlockLoading: l = !1, heroBlock: i, tab: a } = e,
            r = (0, nS.Mk)(a),
            o = u.useMemo(() => L.A.getCategoryForProduct(i.rewardSkuId), [i.rewardSkuId]),
            c = (0, B.bG)([tj.A], () => tj.A.getPurchase(i.rewardSkuId)),
            { products: m } =
                ((t = (0, st.A)()),
                (n = u.useMemo(
                    () => (l ? [] : t(i.rankedSkuIds).filter((e) => e.skuId !== i.rewardSkuId || null != c)),
                    [l, t, i.rankedSkuIds, c, i.rewardSkuId],
                )),
                (s = (0, tP.p)()(n)),
                { products: (0, tD.X)(s) }),
            g = u.useMemo(
                () =>
                    !l &&
                    0 !== i.rankedSkuIds.length &&
                    !(m.length > 0) &&
                    i.rankedSkuIds.every((e) => L.A.getProduct(e)?.variantGroupStoreListingId != null),
                [l, i.rankedSkuIds, m.length],
            ),
            h = l || g,
            { readyToClaim: x } = sR(o, i.rewardSkuId),
            f = null == c && null != i.rewardSkuId && null != o;
        return (0, d.jsx)(sc.A, {
            gap: "xl",
            children: h
                ? (0, d.jsx)(d.Fragment, {
                      children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, d.jsx)(tw.A, {}, t)),
                  })
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          f &&
                              x &&
                              (0, d.jsx)(
                                  I.R9,
                                  {
                                      newValue: { tilePosition: 0, pageSection: "top 4", categoryPosition: 0 },
                                      children: (0, d.jsx)(sP, { category: o, rewardSkuId: i.rewardSkuId }),
                                  },
                                  i.rewardSkuId,
                              ),
                          m.map((e, t) => {
                              let n = L.A.getCategoryForProduct(e.skuId);
                              return null == e || null == n
                                  ? null
                                  : (0, d.jsx)(
                                        I.R9,
                                        {
                                            newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                                            children: (0, d.jsx)(tV.A, { skuId: e.skuId, prioritizedCurrency: r }),
                                        },
                                        e.skuId,
                                    );
                          }),
                      ],
                  }),
        });
    };
(0, nQ.$b)(90);
let sB = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: "",
        type: ny.g.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    sH = function (e) {
        let { isLoading: t = !1, heroBlock: n, tab: s, onVisibilityChange: l } = e,
            i = (0, ty.K)(
                (e) => {
                    l?.(e);
                },
                0.1,
                null != l,
            ),
            a = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
            { analyticsLocations: r } = (0, j.Ay)(es.A.COLLECTIBLES_SHOP_HERO),
            {
                bannerDisplayConfig: o,
                logoDisplayConfig: c,
                heroLogo: u,
                heroBannerStatic: m,
                heroBannerAnimated: h,
            } = (0, sv.Kk)(n),
            x = o?.responsive ?? !1,
            f = o?.backgroundStyle;
        return null != a && (t || n !== sB)
            ? (0, d.jsx)(j.f5, {
                  value: r,
                  children: (0, d.jsxs)("div", {
                      ref: i,
                      className: n0.os,
                      children: [
                          (0, d.jsx)("div", {
                              className: g()(n0.vK, { [n0.no]: x }),
                              style: null != f ? { background: f } : void 0,
                              children:
                                  null != m &&
                                  (0, d.jsx)(sj.A, { bannerStatic: m, bannerAnimated: h, isResponsive: x }),
                          }),
                          (0, d.jsxs)("div", {
                              className: n0.xX,
                              children: [
                                  (0, d.jsx)("div", {
                                      className: g()(n0.bC, { [n0.no]: x }),
                                      children: t
                                          ? (0, d.jsx)("div", { className: n0.Hw })
                                          : (0, d.jsx)("div", {
                                                className: n0.Hw,
                                                children: (0, d.jsxs)("div", {
                                                    className: n0.Wq,
                                                    children: [
                                                        null != u &&
                                                            (0, d.jsx)("img", {
                                                                className: n0.rm,
                                                                src: u,
                                                                alt: n.name,
                                                                style: c?.toDesktopStyles(),
                                                            }),
                                                        null != n.title &&
                                                            (0, d.jsx)(em.D, {
                                                                variant: "heading-xxl/bold",
                                                                className: n0.DD,
                                                                color: "text-strong",
                                                                children: n.title,
                                                            }),
                                                        "" !== n.summary &&
                                                            (0, d.jsx)(et.E, {
                                                                variant: "text-md/normal",
                                                                className: n0.Tm,
                                                                style:
                                                                    null != n.bannerTextColor
                                                                        ? { color: n.bannerTextColor }
                                                                        : void 0,
                                                                children: n.summary,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                  }),
                                  (0, d.jsx)(sD, { isBlockLoading: t, heroBlock: n, tab: s }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
var sw = n(222884);
let sF = function (e) {
    let { shelf: t, handleTransition: n, tab: s } = e,
        l = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
        i = (0, nS.Mk)(s),
        a = (0, B.bG)([L.A], () => (null != t.categorySkuId ? L.A.getCategory(t.categorySkuId) : void 0)),
        r = (0, st.A)(),
        o = u.useMemo(() => r(t.rankedSkuIds), [t.rankedSkuIds, r]),
        c = (0, tD.X)(o),
        { analyticsLocations: m } = (0, j.Ay)(es.A.COLLECTIBLES_SHOP_SHELF),
        h = u.useCallback(() => {
            n({
                sourceButton: "shelf block see all",
                categorySkuId: t.categorySkuId ?? void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: a?.isOrbsExclusive === !0 && s !== tc.G2.ORBS,
            });
        }, [t.categorySkuId, a, n, s]);
    if (null == l || 0 === c.length) return null;
    let x = t.buttonText ?? eo.intl.formatToPlainString(eo.t.bc9RBE, { category_name: t.name }),
        f = t.showButton,
        E = t.desktopBackgroundImage,
        p = null != E;
    return (0, d.jsx)(j.f5, {
        value: m,
        children: (0, d.jsxs)("div", {
            className: g()(sw.mu, n0.YB, p ? sw.VA : sw.Ti),
            children: [
                p && (0, d.jsx)("img", { className: sw.iL, src: E, alt: "", "aria-hidden": !0 }),
                (0, d.jsxs)("div", {
                    className: sw.Qs,
                    children: [
                        (0, d.jsxs)("div", {
                            className: sw.wx,
                            children: [
                                (0, d.jsx)(em.D, {
                                    variant: "heading-lg/semibold",
                                    style: p ? { color: t.titleColor ?? "#ffffff" } : void 0,
                                    children: t.name,
                                }),
                                f &&
                                    (0, d.jsx)(en.$, {
                                        variant: p ? "overlay-primary" : "secondary",
                                        text: x,
                                        onClick: h,
                                    }),
                            ],
                        }),
                        (0, d.jsx)(sc.A, {
                            gap: "xl",
                            edgeFade: p ? "sm" : void 0,
                            children: c.map((e, n) =>
                                null == L.A.getCategoryForProduct(e.skuId)
                                    ? null
                                    : (0, d.jsx)(
                                          I.R9,
                                          {
                                              newValue: { tilePosition: n, pageSection: t.name, categoryPosition: 2 },
                                              children: (0, d.jsx)(tV.A, { skuId: e.skuId, prioritizedCurrency: i }),
                                          },
                                          e.skuId,
                                      ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
};
var sG = n(465794),
    sU = n(69236),
    sz = n(44724),
    sV = n(421108),
    sK = n(873297);
let sY = function (e) {
    let {
            applicationId: t,
            headerText: n,
            gradientColors: s,
            gradientAngle: l,
            skuIds: i,
            tab: a,
            endTime: r,
            ctaType: o = "storefront",
            logoUrl: c,
        } = e,
        m = (0, sV.u)(r) ?? void 0,
        g = (0, sU.W8)(),
        h = u.useMemo(
            () =>
                "nitro" !== o || g
                    ? {
                          kind: "button",
                          text: eo.intl.string(eo.t.apFNLU),
                          onClick: () => (0, sz.default)({ applicationId: t }),
                          onMouseDown: () => (0, sz.G)({ applicationId: t }),
                      }
                    : {
                          kind: "custom",
                          node: (0, d.jsx)(sG.A, {
                              size: "sm",
                              applicationId: t,
                              subscriptionTier: ei.pe.TIER_2,
                              buttonTextOverride: eo.intl.string(eo.t.pj0XBN),
                          }),
                      },
            [o, t, g],
        );
    return (0, d.jsx)(sK.A, {
        skuIds: i,
        tab: a,
        applicationId: t,
        headerText: n,
        logoUrl: c,
        cta: h,
        timeLeftText: m,
        analyticsSection: "slayer-storefront-promotional-banner",
        analyticsTileType: "SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER",
        analyticsImpressionType: "social_layer_storefront_promotional_banner",
        backgroundGradient: `linear-gradient(${l}deg, ${s.join(", ")})`,
    });
};
var sW = n(575593),
    s$ = n(770178),
    sq = n(929283),
    sZ = n(273411);
let sX = [
    "1212569433839636530",
    "1144308439720394944",
    "1228251144065777765",
    "1343751620965564426",
    "1157407831348228141",
    "1197344326133502032",
    "1232071712695386162",
    "1144046002110738634",
    "1271174324375519273",
    "1237653964582031400",
    "1217625794382401577",
    "1462116613871636542",
    "1458472704469499965",
    "1447654091072344195",
    "1432550258839392376",
    "1409898407849365565",
    "1404558257065824347",
];
function sQ(e) {
    let { config: t, baseLeft: n, transitioning: s } = e,
        l = window.innerHeight,
        i = L.A.getProduct(t.skuId),
        a = i?.items[0],
        r = i?.type,
        o = n + t.horizontalJitter;
    return (0, d.jsx)("div", {
        className: sZ.LY,
        style: {
            top: s ? -l - 384 : t.top,
            left: s ? o + t.transitionOffsetLeft : o,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != a && r === sW.R.AVATAR_DECORATION && (0, d.jsx)(sq.i, { item: a }),
    });
}
let sJ = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [l, i] = u.useState(!1),
            [a, r] = u.useState([]),
            [o] = u.useState(() =>
                [...sX]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${tc.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            u.useEffect(() => {
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    r(Array.from({ length: e }, (e, n) => ({ config: o[n % o.length], baseLeft: n * t })));
                }
            }, [s, o]),
            u.useEffect(() => {
                n && setTimeout(() => i(!0), tc.H1);
            }, [n]),
            (0, d.jsx)("div", {
                className: g()(sZ.rA, { [sZ.Kb]: t, [sZ.pp]: l }),
                children: a.map((e, t) => {
                    let { config: s, baseLeft: l } = e;
                    return (0, d.jsx)(sQ, { config: s, baseLeft: l, transitioning: n }, s.skuId + t);
                }),
            })
        );
    },
    s0 = function (e) {
        let { peaking: t, transitioning: n } = e,
            s = u.useRef(null),
            [l, i] = u.useState(0),
            a = u.useCallback(() => {
                null != s.current && i(s.current.offsetWidth);
            }, []);
        return (
            (0, s$.g)(s, a),
            (0, d.jsx)("div", {
                ref: s,
                className: sZ.eL,
                children: (0, d.jsx)(sJ, { peaking: t, transitioning: n, parentWidth: l }),
            })
        );
    };
var s1 = n(815021);
let s4 = function (e) {
        let { wideBannerBlock: t, tab: n } = e,
            s = L.A.getCategoryByStoreListingId(t.categoryStoreListingId),
            l = u.useRef(null),
            i = u.useRef(null),
            [a, r] = u.useState(),
            [o, c] = u.useState(!1);
        u.useEffect(() => {
            let e = i.current;
            if (null != e)
                return (
                    e.complete ? t() : (e.onload = t),
                    () => {
                        e.onload = null;
                    }
                );
            function t() {
                null != e && e.naturalWidth > 0 && e.naturalHeight > 0 && r(1080 * (e.naturalHeight / e.naturalWidth));
            }
        }, []);
        let m = s?.skuId ?? "",
            { handleCardVisibilityChange: h } = (0, sk.Z)(m, "home", "marketing wide banner"),
            x = (0, I.uM)(),
            { bannerURL: f } = (0, sv.w$)(t),
            E = n === tc.G2.ORBS,
            p = null != t.ctaRoute && "" !== t.ctaRoute,
            v = !0 !== t.disableCta && ((null != t.ctaText && "" !== t.ctaText) || p),
            j = null != t.logoURL && "" !== t.logoURL,
            C = u.useCallback(() => {
                if ((c(!0), t.isDismissible)) {
                    let e = t.dismissibleContentVersion ?? 0;
                    (0, nM.$l)(eG.M.COLLECTIBLES_SHOP_WIDE_BANNER, e, { dismissAction: tn.i.USER_DISMISS });
                }
            }, [t.isDismissible, t.dismissibleContentVersion]),
            b = u.useCallback(
                (e) => {
                    to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: x?.sessionId,
                        sku_id: m,
                        page_type: n,
                        page_section: x?.pageSection,
                        page_category: x?.pageCategory,
                        tile_type: "WIDE_BANNER",
                        tile_position: String(x?.tilePosition),
                        cta_name: e,
                    });
                },
                [x, m, n],
            ),
            S = u.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((b(e), null != t.ctaRoute && "" !== t.ctaRoute)) {
                        let e = t.ctaRoute;
                        if (e.includes("game-shop")) {
                            let t = e.match(/\/channels\/([0-9]+)\/game-shop\/([0-9]+)/);
                            if (null != t) {
                                let e = t[1],
                                    n = parseInt(t[2], 10);
                                (0, sz.default)({ guildId: e, pageIndex: n });
                            }
                        } else (0, sh.pX)(e);
                    }
                },
                [t.ctaRoute, b],
            );
        if (null == f || o) return null;
        let _ = g()(n0.nM, n0.Tq, n0.TS, n0.YB, { [n0._1]: E, [n0.vb]: p }),
            N = (0, d.jsxs)(d.Fragment, {
                children: [
                    t.isDismissible &&
                        (0, d.jsx)("div", {
                            className: n0.Mh,
                            children: (0, d.jsx)(s1.J, {
                                size: "sm",
                                onClick: (e) => {
                                    e.stopPropagation(), C();
                                },
                                "aria-label": eo.intl.string(eo.t.WAI6xu),
                            }),
                        }),
                    (0, d.jsx)("div", {
                        className: g()(n0.zK, { [n0._1]: E }),
                        style: null != a ? { height: `${a}px` } : void 0,
                        children: (0, d.jsx)("img", {
                            ref: i,
                            src: f,
                            alt: t.title,
                            className: g()(n0.LN, { [n0.d5]: E }),
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: g()(n0.Ep, { [n0.Qq]: v }),
                        style: { maxHeight: null != a ? `${a}px` : "auto" },
                        children: (0, d.jsxs)("div", {
                            className: n0.E8,
                            children: [
                                (0, d.jsx)(em.D, {
                                    style: { color: t.bannerTextColor ?? "var(--text-strong)" },
                                    className: E ? n0.O2 : void 0,
                                    variant: "heading-xl/bold",
                                    children: t.title,
                                }),
                                (0, d.jsx)(et.E, {
                                    style: { color: t.bannerBodyTextColor ?? t.bannerTextColor ?? "var(--text-muted)" },
                                    lineClamp: 2,
                                    variant: E ? "text-md/medium" : "text-sm/medium",
                                    children: E
                                        ? eo.intl.format(eo.t.SFFP7K, {
                                              helpdeskArticle: si.A.getArticleURL(tt.MVz.VIRTUAL_CURRENCY_LEARN_MORE),
                                          })
                                        : t.body,
                                }),
                                v &&
                                    (0, d.jsxs)("div", {
                                        className: n0.nP,
                                        children: [
                                            (0, d.jsx)(en.$, {
                                                variant: "overlay-primary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), S(t.ctaText ?? eo.intl.string(eo.t.jVcuVY));
                                                },
                                                text: t.ctaText ?? eo.intl.string(eo.t.jVcuVY),
                                                "aria-label":
                                                    null == t.ctaText && null != t.title
                                                        ? eo.intl.formatToPlainString(eo.t.frSHlf, {
                                                              destination: t.title,
                                                          })
                                                        : void 0,
                                            }),
                                            j && (0, d.jsx)("img", { src: t.logoURL, alt: "", className: n0.bU }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                ],
            });
        return (0, d.jsx)(J.N, {
            theme: E ? void 0 : ea.NJ.DARK,
            children: (e) =>
                (0, d.jsx)(sm.L, {
                    innerRef: l,
                    onChange: h,
                    threshold: 0,
                    children: p
                        ? (0, d.jsx)(ez.D, { innerRef: l, onClick: () => S(null), className: g()(e, _), children: N })
                        : (0, d.jsx)("div", { ref: l, className: g()(e, _), children: N }),
                }),
        });
    },
    s2 = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: s, tab: l } = e,
            { noCache: i, includeUnpublished: a } = (0, tY.A)(),
            [r, o] = u.useState(!1),
            c = (0, I.uM)(),
            m = c?.sessionId ?? "",
            h = (0, F.H)({ location: "collectibles_shop_feed" });
        u.useEffect(() => {
            (0, tB.z)({
                sessionId: m,
                checkpoint: tB.t.SHOP_MOUNTED,
                tab: l,
                unpublishedCategoriesShown: a,
                cacheDisabled: i,
            });
        }, [l]);
        let {
                isFetchingShopHome: x,
                fetchShopHomeError: f,
                shopBlocks: E,
                refreshShopHome: p,
            } = (0, nB.y)(l, { noCache: i, includeUnpublished: a, logPerf: !0 }, { sessionId: m, tab: l }),
            v = u.useCallback(() => {
                p();
            }, [p]),
            j = u.useMemo(() => E.some((e) => e instanceof nH.p), [E])
                ? (0, d.jsx)(nF.A, { location: "CollectiblesShop" })
                : null;
        return (u.useEffect(() => {
            null != f ||
                x ||
                0 === E.length ||
                (0, tB.z)({
                    sessionId: m,
                    checkpoint: tB.t.SHOP_RENDERED,
                    tab: l,
                    unpublishedCategoriesShown: a,
                    cacheDisabled: i,
                });
        }, [f, x, E.length, a, i, m, l]),
        null != f)
            ? (0, d.jsx)(nR.h, { onRetry: v, errorOrigin: nR.A.SHOP_PAGE, errorMessage: f.message })
            : x || 0 === E.length
              ? (0, d.jsxs)("div", {
                    className: g()(n0.g4, n0.Of),
                    children: [
                        (0, d.jsx)(sp.A, { isLoading: x, handleTransition: t, tab: l }),
                        (0, d.jsx)(n2, { isLoading: x, handleTransition: t, categories: [] }),
                        (0, d.jsx)(so, {
                            isLoading: x,
                            title: l === tc.G2.ORBS ? eo.intl.string(eo.t.dFgeuZ) : eo.intl.string(eo.t.NSv5KV),
                            numVisibleItems: n,
                            tab: l,
                        }),
                    ],
                })
              : (0, d.jsx)(d.Fragment, {
                    children: E.map((e, i) =>
                        (function (e, i, a) {
                            if (null == e) return null;
                            let c = null,
                                u = !1;
                            switch (e.type) {
                                case ny.g.HERO:
                                    c = (0, d.jsx)(
                                        sp.A,
                                        { isLoading: x, handleTransition: t, heroBlock: e, tab: l, badge: j },
                                        a,
                                    );
                                    break;
                                case ny.g.FEATURED:
                                    c = (0, d.jsx)(
                                        n2,
                                        { isLoading: x, handleTransition: t, featuredBlockRecord: e },
                                        a,
                                    );
                                    break;
                                case ny.g.FEED:
                                    let m = e.sortedSkuIds;
                                    c = (0, d.jsx)(
                                        so,
                                        {
                                            title:
                                                l === tc.G2.ORBS
                                                    ? eo.intl.string(eo.t.dFgeuZ)
                                                    : eo.intl.string(eo.t.NSv5KV),
                                            isLoading: s,
                                            numVisibleItems: n,
                                            sortedSkuIds: m,
                                            buttonContainerClassName: i?.type === ny.g.IMMERSIVE_BANNER ? n0.w : void 0,
                                            tab: l,
                                            orbsSupportedOnly: l === tc.G2.ORBS,
                                        },
                                        a,
                                    );
                                    break;
                                case ny.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: n } = (0, nM.En)(eG.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (n) return null;
                                    }
                                    c = (0, d.jsx)(s4, { wideBannerBlock: e, tab: l }, a);
                                    break;
                                case ny.g.FRAMES_BANNER:
                                    c = (0, d.jsx)(
                                        s4,
                                        {
                                            wideBannerBlock: nw.y.fromServer({
                                                type: ny.g.WIDE_BANNER,
                                                title: e.title,
                                                body: e.body,
                                                wide_banner_url: e.desktopBackgroundImage,
                                                banner_text_color: "white",
                                                banner_body_text_color: "white",
                                                disable_cta: !0,
                                            }),
                                            tab: l,
                                        },
                                        a,
                                    );
                                    break;
                                case ny.g.FRAMES_PRODUCT_SHELF:
                                    c = (0, d.jsx)(su, { block: e, handleTransition: t, tab: l }, a);
                                    break;
                                case ny.g.SHELF:
                                    c = (0, d.jsx)(sF, { handleTransition: t, shelf: e, tab: l }, a);
                                    break;
                                case ny.g.COUNTDOWN_TIMER:
                                    (c = (0, d.jsx)(nZ, { countdownTimerBlock: e, isVisible: r }, a)), (u = !0);
                                    break;
                                case ny.g.IMMERSIVE_BANNER:
                                    c = (0, d.jsx)(
                                        sb,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => o(!e) },
                                        a,
                                    );
                                    break;
                                case ny.g.REWARD_HERO:
                                    c = (0, d.jsx)(sH, { isLoading: x, handleTransition: t, heroBlock: e, tab: l }, a);
                                    break;
                                case ny.g.GAME_SERVER_HOSTING_BANNER:
                                    if (
                                        !h ||
                                        (!0 === e.isDismissible &&
                                            (0, nM.En)(eG.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER).isDismissed)
                                    )
                                        return null;
                                    return (0, d.jsx)(
                                        nD,
                                        {
                                            blockType: e.type,
                                            children: (0, d.jsx)(sE, { gameServerHostingBannerBlock: e, tab: l }),
                                        },
                                        a,
                                    );
                                case ny.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                                    return (0, d.jsx)(
                                        nD,
                                        {
                                            blockType: e.type,
                                            children: (0, d.jsx)(sY, {
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: l,
                                                endTime: e.endTime,
                                                ctaType: e.ctaType,
                                                logoUrl: e.logoUrl,
                                            }),
                                        },
                                        a,
                                    );
                                default:
                                    return null;
                            }
                            return (0, d.jsx)(
                                nD,
                                {
                                    blockType: e.type,
                                    children: (0, d.jsx)("div", {
                                        className: g()(n0.v1, n0.Of, { [n0.J1]: 0 === a || u }),
                                        children: c,
                                    }),
                                },
                                a,
                            );
                        })(e, i > 0 ? E[i - 1] : null, i),
                    ),
                });
    },
    s3 = function (e) {
        let { handleTransition: t, tab: n, transitionState: s } = e,
            l = u.useRef(null),
            { handleScroll: i } = tI(l, n),
            a = (0, tK.U)(),
            r = (0, I.uM)(),
            [o, c] = u.useState(tc.md),
            [m, g] = u.useState(!1);
        return (
            u.useEffect(() => {
                if (null != l.current) {
                    function e() {
                        if (null == l.current) return;
                        let e = l.current.getDistanceFromBottom();
                        o >= 36 ? g(e < 20) : e <= 200 && c((e) => e + tc.md);
                    }
                    let t = l.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [l, o, c, g]),
            (0, d.jsx)(G.Ch, {
                className: n0.OW,
                ref: l,
                onScroll: i,
                children: (0, d.jsxs)("div", {
                    className: n0.bx,
                    children: [
                        (0, d.jsxs)("div", {
                            className: n0.rb,
                            children: [
                                (0, d.jsx)(s2, {
                                    handleTransition: t,
                                    numVisibleItems: o,
                                    isFetchingCategories: a,
                                    tab: n,
                                }),
                                n !== tc.G2.CATALOG &&
                                    o >= 36 &&
                                    (0, d.jsxs)("div", {
                                        className: n0.R$,
                                        children: [
                                            (0, d.jsx)(em.D, {
                                                variant: "heading-md/semibold",
                                                children: eo.intl.string(eo.t.Yr70c4),
                                            }),
                                            (0, d.jsx)(en.$, {
                                                variant: "primary",
                                                text: eo.intl.string(eo.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: r?.sessionId,
                                                            page_type: n,
                                                            page_category: n === tc.G2.HOME ? void 0 : r?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, d.jsx)(s0, { peaking: m, transitioning: s === tc.Pf.OUT }),
                    ],
                }),
            })
        );
    };
var s9 = n(154323),
    s5 = n(295811),
    s8 = n(870216);
let s7 = { "Any:personalization-header": sr },
    s6 = { [tk.b.SHOP_HOME]: s7 },
    le = { "1465939725649973269": s7, "1478495181551440044": s7 },
    lt = function () {
        return (0, d.jsx)("div", {
            style: {
                background: "linear-gradient(rgba(39, 30, 173, 0.3), transparent)",
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
            },
            children: (0, d.jsx)("div", {
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
    },
    ln = { prioritizedCurrency: nS.Hi.ORBS };
function ls(e) {
    let { tab: t } = e,
        [n, s, l] = (0, B.yK)([s8.A], () => [s8.A.getLayout(t), s8.A.isFetchingLayout(t), s8.A.getLayoutFetchError(t)]),
        i = (0, B.bG)([s9.A], () => s9.A.get("shop_include_unpublished")),
        a = (0, B.bG)([L.A], () => L.A.skipNumCategories),
        r = u.useMemo(() => {
            let e = {};
            return !0 === i && (e.include_unpublished = !0), null != a && a > 0 && (e.skip_num_categories = a), e;
        }, [i, a]),
        o = null == n && !s && l?.status !== 404 && l?.status !== 429;
    if (
        (u.useEffect(() => {
            o && (0, sO.T2)({ tab: t });
        }, [o, t]),
        null == n)
    )
        return t !== D.HOME || o || s
            ? null
            : (0, d.jsx)(tO.Z_, {
                  tenantId: tt.FYj,
                  templateId: tk.b.SHOP_HOME,
                  requestParams: r,
                  overrides: s6[tk.b.SHOP_HOME],
              });
    let c = (0, d.jsx)(tO.Qs, { tenantId: tt.FYj, layoutId: n, overrides: le[n] });
    return (0, d.jsxs)(d.Fragment, {
        children: [
            t === D.ORBS && (0, d.jsx)(lt, {}),
            t === D.ORBS ? (0, d.jsx)(nS.v3.Provider, { value: ln, children: c }) : c,
        ],
    });
}
function ll(e) {
    let { url: t } = e,
        [n, s] = u.useState(null);
    return (u.useEffect(() => {
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
        : (0, d.jsx)(tO.Ay, { layout: n });
}
let li = function (e) {
    let { handleTransition: t, tab: n, transitionState: s } = e,
        l = (0, I.uM)(),
        i = (0, B.bG)([s5.A], () => s5.A.getShopLayoutUrlOverride()),
        a = u.useRef(null),
        { handleScroll: r } = tI(a, n),
        [o, c] = u.useState(tc.md),
        [m, h] = u.useState(!1);
    return (
        u.useEffect(() => {
            if (null != a.current) {
                function e() {
                    if (null == a.current) return;
                    let e = a.current.getDistanceFromBottom();
                    o >= 36 ? h(e < 20) : e <= 200 && c((e) => e + tc.md);
                }
                let t = a.current.getScrollerNode();
                return (
                    t?.addEventListener("scroll", e),
                    () => {
                        t?.removeEventListener("scroll", e);
                    }
                );
            }
        }, [a, o, c, h]),
        (0, d.jsx)(G.Ch, {
            className: n0.OW,
            ref: a,
            onScroll: r,
            children: (0, d.jsxs)("div", {
                className: n0.bx,
                children: [
                    (0, d.jsxs)("div", {
                        className: g()(n0.rb, n0.GS),
                        children: [
                            null != i && "" !== i ? (0, d.jsx)(ll, { url: i }) : (0, d.jsx)(ls, { tab: n }),
                            n !== D.CATALOG &&
                                o >= 36 &&
                                (0, d.jsxs)("div", {
                                    className: n0.R$,
                                    children: [
                                        (0, d.jsx)(em.D, {
                                            variant: "heading-md/semibold",
                                            children: eo.intl.string(eo.t.Yr70c4),
                                        }),
                                        (0, d.jsx)(en.$, {
                                            variant: "primary",
                                            text: eo.intl.string(eo.t.AfrvRD),
                                            onClick: () => {
                                                t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                    to.default.track(tt.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                        collectibles_shop_session_id: l?.sessionId,
                                                        page_type: n,
                                                        page_category: n === D.HOME ? void 0 : l?.pageCategory,
                                                        cta_name: "browse the shop button",
                                                    });
                                            },
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, d.jsx)(s0, { peaking: m, transitioning: s === tc.Pf.OUT }),
                ],
            }),
        })
    );
};
var la = n(564027);
let lr = function () {
        return (0, d.jsxs)("div", {
            className: la.z,
            children: [
                (0, d.jsx)("img", {
                    className: la.M,
                    src: "https://cdn.discordapp.com/assets/content/ca0857da281051f734229e1994112aaa95b21d6f7fce7a1e509357d94c58a949.png",
                    alt: eo.intl.string(eo.t["p8+qtU"]),
                }),
                (0, d.jsx)(em.D, { variant: "heading-xl/semibold", children: eo.intl.string(eo.t["p8+qtU"]) }),
                (0, d.jsx)(et.E, { variant: "text-md/medium", children: eo.intl.string(eo.t.UEiyvs) }),
            ],
        });
    },
    lo = [tc.G2.HOME, tc.G2.ORBS];
function lc(e) {
    let {
            tab: t,
            categories: n,
            transitionToTab: s,
            transitionState: l,
            updateAnalyticsState: i,
            refreshCategories: a,
        } = e,
        r = (0, B.bG)([L.A, tj.A], () =>
            null != L.A.error
                ? `shop load fetch categories error: ${L.A.error.message}`
                : null != tj.A.claimError
                  ? `shop load claim error: ${tj.A.claimError.message}`
                  : null != tj.A.fetchError
                    ? `shop load fetch purchase error: ${tj.A.fetchError.message}`
                    : void 0,
        );
    !(function (e) {
        let t = (0, B.bG)([A.default], () => A.default.getCurrentUser()),
            { noCache: n, includeUnpublished: s } = (0, tY.A)();
        u.useEffect(() => {
            null != e &&
                tv.A.captureMessage(e, {
                    tags: {
                        isStaff: t?.isStaff()?.toString() ?? "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: s.toString(),
                    },
                });
        }, [e, t, n, s]);
    })(r);
    let o = (0, F.H)({ location: "collectibles_content" }),
        c = (0, B.bG)([H.Ay], () => H.Ay.useReducedMotion),
        m = (0, P.W6)(),
        g = (0, P.zy)(),
        [h] = u.useState(() => {
            if ("POP" === m.action) {
                let e;
                return (e = tW), (tW = null), e ?? void 0;
            }
        }),
        [x, f] = u.useState(h),
        [E, p] = u.useState(null == h),
        v = u.useMemo(() => {
            let e = new URLSearchParams(g.search).get(tc.P1);
            return null != e && "" !== e ? e : void 0;
        }, [g.search]),
        j = u.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !tc.MS.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        C = (0, w.U)("CollectiblesContent"),
        b = (0, tC.a)("CollectiblesContent"),
        S = u.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: l,
                    isInternalShopDeeplink: a,
                    isOrbsExclusive: r,
                } = e;
                if ((i(t, n), b && null != n && a && !r))
                    return void m.push(tt.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n));
                let o = l && !c,
                    d = r ? tc.G2.ORBS : tc.G2.CATALOG;
                f(n), p(!a), s(d, o);
            },
            [c, s, i, b, m],
        ),
        { searchError: _ } = (0, tb.S)();
    return null != _
        ? (0, d.jsx)(lr, {})
        : null != r
          ? (0, d.jsx)(nR.h, { onRetry: a, errorMessage: r, errorOrigin: nR.A.SHOP_PAGE })
          : t === tc.G2.HOME && C
            ? (0, d.jsx)(li, { tab: D.HOME, transitionState: l, handleTransition: S })
            : t === tc.G2.ORBS && C
              ? (0, d.jsx)(li, { tab: D.ORBS, transitionState: l, handleTransition: S })
              : lo.includes(t)
                ? (0, d.jsx)(s3, { handleTransition: S, tab: t, transitionState: l })
                : t === tc.G2.GAME_SERVERS
                  ? o
                      ? (0, d.jsx)(tE, {})
                      : (0, d.jsx)(P.rd, { to: tt.BVt.COLLECTIBLES_SHOP_WITH_TAB(tc.G2.HOME) })
                  : (0, d.jsx)(nk, {
                        tab: t,
                        categories: j,
                        initialCategoryId: x ?? v,
                        showFilterInitially: E && null == v,
                        onUnmount: () => {
                            f(void 0), p(!0);
                        },
                    });
}
var ld = n(956123),
    lu = n(877624),
    lm = n(549996),
    lg = n(613556),
    lh = n(814124);
function lx(e) {
    let { tab: t, handleTransition: n } = e,
        s = (0, lm.c)(lu.C.SHOP_NAGBAR);
    return s?.properties.properties.oneofKind === "shopNagbar"
        ? (0, d.jsx)(lg.A, { shopNagbar: s.properties.properties.shopNagbar, componentId: s.id, tab: t })
        : (0, d.jsx)(lh.Ay, { tab: t, handleTransition: n });
}
var lf = n(870308),
    lE = n(650583);
function lp(e) {
    let { children: t, shouldAddEventListener: n, onClose: s } = e,
        l = (0, f.useHasAnyModalOpen)();
    return (
        u.useEffect(() => {
            if (n && !l) return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            function e(e) {
                e.key === lE.N$.Escape && s();
            }
        }, [n, l, s]),
        t
    );
}
let lv = function (e) {
    let { tab: t = tc.G2.HOME } = e;
    (0, S.P)(b.a);
    let n = (0, v.A)((0, h.A)()),
        s = (0, x.bG)([A.default], () => A.default.getCurrentUser());
    (0, N.pE)();
    let l = (0, t1.yB)("CollectiblesShop"),
        { onClose: i } = (function () {
            let { search: e } = (0, P.zy)(),
                t = (0, P.g)(),
                n = u.useMemo(() => new URLSearchParams(e), [e]).get("source"),
                s = null != n ? parseInt(n, 10) : null;
            return {
                onClose: u.useCallback(() => {
                    if (0 === s) {
                        (0, sh.aX)(), (0, K.openUserSettings)();
                        return;
                    }
                    (0, sh.EL)() ? (0, sh.aX)() : (0, sh.pX)(tt.BVt.APP);
                }, [s]),
                source: s,
                ...t,
            };
        })(),
        { currentTab: a, hasFilters: r } = (0, M.v)(),
        o = u.useMemo(() => (t === tc.G2.HOME && null != a && r() ? a : t), [t, a, r]),
        c = (0, k.M)("CollectiblesShop");
    (0, _.A)(c ? tt.FYj : void 0);
    let { categories: m, refreshCategories: D } = (0, R.Ay)({ logPerf: !0 }, { sessionId: n, tab: o }),
        B = u.useMemo(() => [...m.values()], [m]),
        [H, w] = u.useState(),
        F = (0, x.bG)([L.A], () => L.A.getCategory(H)?.name),
        [G, U] = u.useState();
    (0, tX.XU)(n);
    let z = u.useCallback((e, t) => {
            U(e), w(t);
        }, []),
        { selectedTab: V, transitionState: Y, transitionToTab: W } = (0, y.o)(o);
    (0, C.HU)({ location: eo.intl.string(eo.t.pWG4ze) }), (0, T.uS)(n, V, F, Y, G), (0, T.N0)(V, s);
    let { dismissShopButtonDC: $ } = (0, lf.A)();
    u.useEffect(() => {
        $();
    }, [$]),
        u.useEffect(() => {
            (0, p.I)(tt.BVt.COLLECTIBLES_SHOP);
        }, []);
    let q = u.useRef(null),
        Z = u.useRef(null);
    (0, E.tj)(q);
    let X = (0, f.useHasAnyModalOpen)();
    u.useEffect(() => {
        Z.current?.focus();
    }, []),
        (0, t1.gB)();
    let { analyticsLocations: Q } = (0, T.lC)(V);
    return (0, d.jsx)(j.f5, {
        value: Q,
        children: (0, d.jsx)(I.R9, {
            newValue: { sessionId: n, pageCategory: F, pageSize: tc.l5 },
            children: (0, d.jsx)(O.iM, {
                tab: V,
                children: (0, d.jsx)(lp, {
                    onClose: i,
                    shouldAddEventListener: !1,
                    children: (0, d.jsxs)("div", {
                        className: g()(tG.bx, { [t1.jP]: l }),
                        ref: Z,
                        inert: X,
                        tabIndex: -1,
                        children: [
                            (0, d.jsx)(ld.G, { handleTransition: W, selectedTab: V }),
                            (0, d.jsx)(lx, { tab: V, handleTransition: W }),
                            (0, d.jsx)("div", {
                                className: g()(tG.td, {
                                    [tG.RK]: Y === tc.Pf.VISIBLE,
                                    [tG.in]: Y === tc.Pf.IN,
                                    [tG.FD]: Y === tc.Pf.OUT,
                                }),
                                children: (0, d.jsx)(lc, {
                                    tab: V,
                                    refreshCategories: D,
                                    transitionToTab: W,
                                    transitionState: Y,
                                    categories: B,
                                    updateAnalyticsState: z,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
};
