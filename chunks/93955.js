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
    p = n(688810),
    f = n(812095),
    x = n(288106),
    A = n(604913),
    v = n(65238),
    C = n(773669),
    y = n(975571),
    L = n(304210),
    b = n(324157),
    _ = n(480750),
    S = n(727142);
let I = function (e) {
    let { text: t, icon: n, indicatorColor: r } = e;
    return (0, l.jsxs)("span", {
        className: S.I,
        children: [
            null != r &&
                (0, l.jsx)("svg", {
                    className: S.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, l.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: r }),
                }),
            null != n && (0, l.jsx)(n, { size: "xxs", color: "currentColor" }),
            (0, l.jsx)(u.E, { variant: "body-xs/medium", color: "none", children: t }),
        ],
    });
};
var j = n(262056),
    k = n(775602),
    N = n(135996),
    O = n(295986);
let T = function (e) {
    let { assetPath: t, progress: n, progressText: r, progressColor: s } = e,
        a = (0, i.bG)([k.Ay], () => k.Ay.useReducedMotion)
            ? (0, l.jsx)(N.A, { src: t, className: O.C, width: 120, height: 120 })
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
              children: (0, l.jsx)(j.A, { current: n.current, target: n.target, progressColor: s, children: a }),
          });
};
var R = n(821609),
    D = n(450481),
    P = n(792996),
    M = n(634293);
function B(e) {
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
let w = function (e) {
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
        ? (0, l.jsx)(B, { product: n, onUseNowClick: o, useNowButtonVariant: s })
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
let V = { [A.RB.LIGHT]: "theme-light", [A.RB.DARK]: "theme-dark" },
    K = { [A.RB.LIGHT]: "overlay-secondary", [A.RB.DARK]: "overlay-primary" },
    W = A.RB.DARK;
function z(e, t, n) {
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
function Y(e) {
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
            isClaiming: p,
            onClaim: x,
        } = e,
        A = null != s ? d : i,
        { handleInlineHelpTextClick: v, handleClaim: C, handleUseNowClick: y } = z(t, n, x);
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
                    null != A &&
                        (0, l.jsx)(u.E, { variant: "body-md/semibold", color: "text-strong", children: (0, f.U)(A) }),
                    null != m && (0, l.jsx)(I, { icon: c.ClockIcon, text: m }),
                    (0, l.jsx)(w, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: g,
                        claimRewardButtonVariant: E,
                        useNowButtonVariant: E,
                        isClaiming: p,
                        onClaim: C,
                        onUseNowClick: y,
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
            progressColor: p,
            backgroundUrl: A,
            title: v,
            description: C,
            progressText: L,
            timeLeftText: b,
            contentThemeClassName: S,
            rewardProduct: k,
            claimRewardButtonVariant: N,
            helpCenterId: O,
            isClaiming: R,
            onClaim: D,
        } = e,
        M = null != O && "" !== O ? y.A.getArticleURL(O) : null,
        { handleInlineHelpTextClick: B, handleClaim: H, handleUseNowClick: U } = z(t, n, D),
        G = r.useCallback(() => {
            null != M && ((0, _.l)(t, n, F.Z.INFO_BUTTON_CLICKED), (0, E.A)(M));
        }, [t, n, M]);
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: { top: 16, bottom: 16, left: 24, right: 24 },
        align: "center",
        justify: "space-between",
        className: a()($.N, S),
        style: { backgroundImage: `url(${A})` },
        children: [
            (0, l.jsx)(T, { assetPath: s, progress: i, progressText: L, progressColor: p }),
            (0, l.jsxs)(o.B, {
                direction: "vertical",
                gap: 10,
                align: "start",
                className: $._,
                onClick: B,
                children: [
                    (0, l.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 4,
                        align: "start",
                        children: [
                            (0, l.jsx)(d.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: (0, f.U)(v),
                            }),
                            null != C &&
                                (0, l.jsx)(u.E, {
                                    variant: "body-sm/medium",
                                    color: "text-subtle",
                                    children: (0, f.U)(C),
                                }),
                        ],
                    }),
                    (0, l.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != L && (0, l.jsx)(I, { text: L, indicatorColor: p ?? j.W }),
                            null != b && (0, l.jsx)(I, { icon: c.ClockIcon, text: b }),
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
                    (0, l.jsx)(w, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: k,
                        claimRewardButtonVariant: N,
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
        d = (0, i.bG)([C.default], () => C.default.locale);
    r.useEffect(() => {
        (0, _.l)(s, n, F.Z.PROMO_VIEWED);
    }, [s.id, n]);
    let { shared: m } = a,
        { assets: h, style: g } = m.progressIndicator,
        E = m.helpCenter?.id,
        p = g?.contentTheme ?? W,
        f = (function (e, t) {
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
        A = (0, U.A)(f?.timeLeftDate);
    if (null == f) return null;
    let { progress: v } = s;
    if (
        (null == v &&
            (s.rewardStatus === x.GM.EARNED || s.rewardStatus === x.GM.CONSUMED) &&
            (v = { current: 4, target: 4, label: "collected" }),
        f.showProgressRing && null == v)
    )
        return null;
    let y = f.showProgressRing && null != v,
        {
            title: L,
            description: S,
            progressText: I,
            timeLeftText: j,
        } = (0, b.MZ)({
            promotion: s,
            promotionProgress: v,
            progressIndicator: m.progressIndicator,
            helpCenterId: E,
            daysRemaining: A,
            locale: d,
        }),
        k = {
            promotion: s,
            surface: n,
            assetPath: f.assetPath,
            progress: y ? v : null,
            progressColor: g?.progressColor,
            backgroundUrl: h.backgroundUrl,
            title: L,
            description: S,
            progressText: I,
            timeLeftText: j,
            contentThemeClassName: V[p],
            rewardProduct: o,
            claimRewardButtonVariant: K[p],
            helpCenterId: E,
            isClaiming: u,
            onClaim: c,
        };
    return "condensed" === t ? (0, l.jsx)(Y, { ...k }) : (0, l.jsx)(q, { ...k });
}
let Q = function (e) {
    let { variant: t, surface: n, collectionId: s } = e,
        a = (0, L.ST)(),
        { analyticsLocations: i } = (0, p.Ay)(),
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
