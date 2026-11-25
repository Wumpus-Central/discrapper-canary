n.d(t, { A: () => Q });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(855986),
    o = n(331322),
    u = n(834730),
    c = n(406810),
    d = n(534514),
    m = n(866665),
    h = n(408278),
    g = n(885574),
    E = n(975807),
    f = n(688810),
    p = n(812095),
    x = n(288106),
    C = n(604913),
    v = n(65238),
    A = n(773669),
    L = n(975571),
    y = n(304210),
    b = n(324157),
    _ = n(480750),
    I = n(727142);
let S = function (e) {
    let { text: t, icon: n, indicatorColor: r } = e;
    return (0, l.jsxs)("span", {
        className: I.I,
        children: [
            null != r &&
                (0, l.jsx)("svg", {
                    className: I.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, l.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: r }),
                }),
            null != n && (0, l.jsx)(n, { size: "xxs", color: "currentColor" }),
            (0, l.jsx)(u.E, { variant: "body-xs/medium", color: "none", children: t }),
        ],
    });
};
var N = n(262056),
    j = n(775602),
    k = n(135996),
    O = n(295986);
let T = function (e) {
    let { assetPath: t, progress: n, progressText: r, progressColor: s } = e,
        a = (0, i.bG)([j.Ay], () => j.Ay.useReducedMotion)
            ? (0, l.jsx)(k.A, { src: t, className: O.C, width: 120, height: 120 })
            : (0, l.jsx)("img", { src: t, alt: "", className: O.C, width: 120, height: 120 });
    return null == n
        ? a
        : (0, l.jsx)("div", {
              className: O.U,
              role: "progressbar",
              "aria-valuenow": n.current,
              "aria-valuemin": 0,
              "aria-valuemax": n.target,
              "aria-valuetext": r ?? void 0,
              children: (0, l.jsx)(N.A, { current: n.current, target: n.target, progressColor: s, children: a }),
          });
};
var R = n(821609),
    D = n(450481),
    P = n(792996),
    M = n(634293);
function w(e) {
    let { product: t, onUseNowClick: n, useNowButtonVariant: r = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, D.p)({ product: t });
    return (0, l.jsx)("div", {
        className: M.l,
        children: (0, l.jsx)(R.$, {
            variant: r,
            onClick: () => {
                (n?.(), s());
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: a,
            text: P.intl.string(P.t.MAS7uK),
        }),
    });
}
let B = function (e) {
    let {
        promotionRewardStatus: t,
        rewardProduct: n,
        claimRewardButtonVariant: r,
        useNowButtonVariant: s,
        isClaiming: a,
        onClaim: i,
        onUseNowClick: o,
    } = e;
    return t === x.GM.CONSUMED && null != n
        ? (0, l.jsx)(w, { product: n, onUseNowClick: o, useNowButtonVariant: s })
        : t === x.GM.EARNED
          ? (0, l.jsx)("div", {
                className: M.l,
                children: (0, l.jsx)(R.$, {
                    text: P.intl.string(P.t.pVBlCH),
                    variant: r,
                    fullWidth: !0,
                    minWidth: 96,
                    loading: a,
                    onClick: i,
                }),
            })
          : null;
};
var H = n(436733),
    U = n(497901),
    G = n(61750),
    F = n(602051),
    $ = n(119739);
let V = { [C.RB.LIGHT]: "theme-light", [C.RB.DARK]: "theme-dark" },
    K = { [C.RB.LIGHT]: "overlay-secondary", [C.RB.DARK]: "overlay-primary" },
    W = C.RB.DARK;
function Y(e, t, n) {
    let l = r.useCallback((n) => (0, _.h)(n, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: l,
        handleClaim: r.useCallback(() => {
            ((0, _.l)(e, t, F.Z.CLAIM_BUTTON_CLICKED), n());
        }, [e, t, n]),
        handleUseNowClick: r.useCallback(() => {
            (0, _.l)(e, t, F.Z.USE_NOW_BUTTON_CLICKED);
        }, [e, t]),
    };
}
function z(e) {
    let {
            promotion: t,
            surface: n,
            assetPath: r,
            progress: s,
            progressColor: a,
            title: i,
            progressText: d,
            timeLeftText: m,
            contentThemeClassName: h,
            rewardProduct: g,
            claimRewardButtonVariant: E,
            isClaiming: f,
            onClaim: x,
        } = e,
        C = null != s ? d : i,
        { handleInlineHelpTextClick: v, handleClaim: A, handleUseNowClick: L } = Y(t, n, x);
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: h,
        children: [
            (0, l.jsx)(T, { assetPath: r, progress: s, progressText: d, progressColor: a }),
            (0, l.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: $._,
                onClick: v,
                children: [
                    null != C &&
                        (0, l.jsx)(u.E, { variant: "body-md/semibold", color: "text-strong", children: (0, p.U)(C) }),
                    null != m && (0, l.jsx)(S, { icon: c.ClockIcon, text: m }),
                    (0, l.jsx)(B, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: g,
                        claimRewardButtonVariant: E,
                        useNowButtonVariant: E,
                        isClaiming: f,
                        onClaim: A,
                        onUseNowClick: L,
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let {
            promotion: t,
            surface: n,
            assetPath: s,
            progress: i,
            progressColor: f,
            backgroundUrl: C,
            title: v,
            description: A,
            progressText: y,
            timeLeftText: b,
            contentThemeClassName: I,
            rewardProduct: j,
            claimRewardButtonVariant: k,
            helpCenterId: O,
            isClaiming: R,
            onClaim: D,
        } = e,
        M = null != O && "" !== O ? L.A.getArticleURL(O) : null,
        { handleInlineHelpTextClick: w, handleClaim: H, handleUseNowClick: U } = Y(t, n, D),
        G = r.useCallback(() => {
            null != M && ((0, _.l)(t, n, F.Z.INFO_BUTTON_CLICKED), (0, E.A)(M));
        }, [t, n, M]);
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: { top: 16, bottom: 16, left: 24, right: 24 },
        align: "center",
        justify: "space-between",
        className: a()($.N, I),
        style: { backgroundImage: `url(${C})` },
        children: [
            (0, l.jsx)(T, { assetPath: s, progress: i, progressText: y, progressColor: f }),
            (0, l.jsxs)(o.B, {
                direction: "vertical",
                gap: 10,
                align: "start",
                className: $._,
                onClick: w,
                children: [
                    (0, l.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 4,
                        align: "start",
                        children: [
                            (0, l.jsx)(d.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: (0, p.U)(v),
                            }),
                            null != A &&
                                (0, l.jsx)(u.E, {
                                    variant: "body-sm/medium",
                                    color: "text-subtle",
                                    children: (0, p.U)(A),
                                }),
                        ],
                    }),
                    (0, l.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != y && (0, l.jsx)(S, { text: y, indicatorColor: f ?? N.W }),
                            null != b && (0, l.jsx)(S, { icon: c.ClockIcon, text: b }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                fullWidth: !1,
                children: [
                    (0, l.jsx)(B, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: j,
                        claimRewardButtonVariant: k,
                        isClaiming: R,
                        onClaim: H,
                        onUseNowClick: U,
                    }),
                    t.rewardStatus !== x.GM.EARNED &&
                        null != M &&
                        (0, l.jsx)(m.m, {
                            text: P.intl.string(P.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, l.jsx)(h.K, {
                                "aria-label": P.intl.string(P.t.FdGl5A),
                                icon: g.CircleInformationIcon,
                                variant: "overlay-secondary",
                                size: "md",
                                onClick: G,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function X(e) {
    let { variant: t, surface: n, promotion: s, collectAndClaim: a, rewardProduct: o, isClaiming: u, onClaim: c } = e,
        d = (0, i.bG)([A.default], () => A.default.locale);
    r.useEffect(() => {
        (0, _.l)(s, n, F.Z.PROMO_VIEWED);
    }, [s.id, n]);
    let { shared: m } = a,
        { assets: h, style: g } = m.progressIndicator,
        E = m.helpCenter?.id,
        f = g?.contentTheme ?? W,
        p = (function (e, t) {
            let { hiddenUrl: n, revealedUrl: l } = t;
            switch (e.rewardStatus) {
                case x.GM.IN_PROGRESS:
                    return { assetPath: n ?? l, showProgressRing: !0, timeLeftDate: e.endsAt };
                case x.GM.EARNED:
                    return { assetPath: n ?? l, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case x.GM.CONSUMED:
                    return { assetPath: l, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, h.rewardPreview),
        C = (0, U.A)(p?.timeLeftDate);
    if (null == p) return null;
    let { progress: v } = s;
    if (
        (null == v &&
            (s.rewardStatus === x.GM.EARNED || s.rewardStatus === x.GM.CONSUMED) &&
            (v = { current: 4, target: 4, label: "collected" }),
        p.showProgressRing && null == v)
    )
        return null;
    let L = p.showProgressRing && null != v,
        {
            title: y,
            description: I,
            progressText: S,
            timeLeftText: N,
        } = (0, b.MZ)({
            promotion: s,
            promotionProgress: v,
            progressIndicator: m.progressIndicator,
            helpCenterId: E,
            daysRemaining: C,
            locale: d,
        }),
        j = {
            promotion: s,
            surface: n,
            assetPath: p.assetPath,
            progress: L ? v : null,
            progressColor: g?.progressColor,
            backgroundUrl: h.backgroundUrl,
            title: y,
            description: I,
            progressText: S,
            timeLeftText: N,
            contentThemeClassName: V[f],
            rewardProduct: o,
            claimRewardButtonVariant: K[f],
            helpCenterId: E,
            isClaiming: u,
            onClaim: c,
        };
    return "condensed" === t ? (0, l.jsx)(z, { ...j }) : (0, l.jsx)(q, { ...j });
}
let Q = function (e) {
    let { variant: t, surface: n, collectionId: s } = e,
        a = (0, y.ST)(),
        { analyticsLocations: i } = (0, f.Ay)(),
        o = r.useCallback(
            (e) => {
                (0, G.A)({ product: e, analyticsLocations: i });
            },
            [i],
        ),
        { onClaim: u, isClaiming: c, rewardProduct: d } = (0, H.G)(a, o),
        m = (0, v.XF)(a);
    return null == a || null == m || null == s || m.collectionId !== s
        ? null
        : (0, l.jsx)(X, {
              variant: t,
              surface: n,
              promotion: a,
              collectAndClaim: m,
              rewardProduct: d,
              isClaiming: c,
              onClaim: u,
          });
};
