n.d(t, { A: () => Z });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(855986),
    o = n(331322),
    c = n(834730),
    u = n(406810),
    d = n(534514),
    m = n(866665),
    g = n(408278),
    h = n(885574),
    p = n(975807),
    x = n(688810),
    f = n(812095),
    E = n(288106),
    v = n(604913),
    _ = n(65238),
    C = n(773669),
    y = n(975571),
    b = n(304210),
    S = n(324157),
    I = n(480750),
    A = n(727142);
let j = function (e) {
    let { text: t, icon: n, indicatorColor: r } = e;
    return (0, l.jsxs)("span", {
        className: A.I,
        children: [
            null != r &&
                (0, l.jsx)("svg", {
                    className: A.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, l.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: r }),
                }),
            null != n && (0, l.jsx)(n, { size: "xxs", color: "currentColor" }),
            (0, l.jsx)(c.E, { variant: "body-xs/medium", color: "none", children: t }),
        ],
    });
};
var L = n(262056),
    k = n(775602),
    N = n(295986);
function O(e) {
    let { assetPath: t } = e,
        n = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = new Image();
            return (
                (e.onload = () => {
                    let t = n.current,
                        l = t?.getContext("2d");
                    null != t &&
                        null != l &&
                        ((t.width = e.naturalWidth), (t.height = e.naturalHeight), l.drawImage(e, 0, 0));
                }),
                (e.src = t),
                () => {
                    e.onload = null;
                }
            );
        }, [t]),
        (0, l.jsx)("canvas", { ref: n, className: N.C, width: 120, height: 120, "aria-hidden": "true" })
    );
}
let T = function (e) {
    let { assetPath: t, progress: n, progressText: r, progressColor: s } = e,
        a = (0, i.bG)([k.Ay], () => k.Ay.useReducedMotion)
            ? (0, l.jsx)(O, { assetPath: t })
            : (0, l.jsx)("img", { src: t, alt: "", className: N.C, width: 120, height: 120 });
    return null == n
        ? a
        : (0, l.jsx)("div", {
              className: N.U,
              role: "progressbar",
              "aria-valuenow": n.current,
              "aria-valuemin": 0,
              "aria-valuemax": n.target,
              "aria-valuetext": r ?? void 0,
              children: (0, l.jsx)(L.A, { current: n.current, target: n.target, progressColor: s, children: a }),
          });
};
var R = n(821609),
    M = n(450481),
    D = n(792996),
    B = n(634293);
function P(e) {
    let { product: t, onUseNowClick: n, useNowButtonVariant: r = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, M.p)({ product: t });
    return (0, l.jsx)("div", {
        className: B.l,
        children: (0, l.jsx)(R.$, {
            variant: r,
            onClick: () => {
                (n?.(), s());
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: a,
            text: D.intl.string(D.t.MAS7uK),
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
    return t === E.GM.CONSUMED && null != n
        ? (0, l.jsx)(P, { product: n, onUseNowClick: o, useNowButtonVariant: s })
        : t === E.GM.EARNED
          ? (0, l.jsx)("div", {
                className: B.l,
                children: (0, l.jsx)(R.$, {
                    text: D.intl.string(D.t.pVBlCH),
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
    $ = n(602051),
    F = n(119739);
let V = { [v.RB.LIGHT]: "theme-light", [v.RB.DARK]: "theme-dark" },
    K = { [v.RB.LIGHT]: "overlay-secondary", [v.RB.DARK]: "overlay-primary" },
    W = v.RB.DARK;
function z(e, t, n) {
    let l = r.useCallback((n) => (0, I.h)(n, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: l,
        handleClaim: r.useCallback(() => {
            ((0, I.l)(e, t, $.Z.CLAIM_BUTTON_CLICKED), n());
        }, [e, t, n]),
        handleUseNowClick: r.useCallback(() => {
            (0, I.l)(e, t, $.Z.USE_NOW_BUTTON_CLICKED);
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
            contentThemeClassName: g,
            rewardProduct: h,
            claimRewardButtonVariant: p,
            isClaiming: x,
            onClaim: E,
        } = e,
        v = null != s ? d : i,
        { handleInlineHelpTextClick: _, handleClaim: C, handleUseNowClick: y } = z(t, n, E);
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: g,
        children: [
            (0, l.jsx)(T, { assetPath: r, progress: s, progressText: d, progressColor: a }),
            (0, l.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: F._,
                onClick: _,
                children: [
                    null != v &&
                        (0, l.jsx)(c.E, { variant: "body-md/semibold", color: "text-strong", children: (0, f.U)(v) }),
                    null != m && (0, l.jsx)(j, { icon: u.ClockIcon, text: m }),
                    (0, l.jsx)(w, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: h,
                        claimRewardButtonVariant: p,
                        useNowButtonVariant: p,
                        isClaiming: x,
                        onClaim: C,
                        onUseNowClick: y,
                    }),
                ],
            }),
        ],
    });
}
function X(e) {
    let {
            promotion: t,
            surface: n,
            assetPath: s,
            progress: i,
            progressColor: x,
            backgroundUrl: v,
            title: _,
            description: C,
            progressText: b,
            timeLeftText: S,
            contentThemeClassName: A,
            rewardProduct: k,
            claimRewardButtonVariant: N,
            helpCenterId: O,
            isClaiming: R,
            onClaim: M,
        } = e,
        B = null != O && "" !== O ? y.A.getArticleURL(O) : null,
        { handleInlineHelpTextClick: P, handleClaim: H, handleUseNowClick: U } = z(t, n, M),
        G = r.useCallback(() => {
            null != B && ((0, I.l)(t, n, $.Z.INFO_BUTTON_CLICKED), (0, p.A)(B));
        }, [t, n, B]);
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: { top: 16, bottom: 16, left: 24, right: 24 },
        align: "center",
        justify: "space-between",
        className: a()(F.N, A),
        style: { backgroundImage: `url(${v})` },
        children: [
            (0, l.jsx)(T, { assetPath: s, progress: i, progressText: b, progressColor: x }),
            (0, l.jsxs)(o.B, {
                direction: "vertical",
                gap: 10,
                align: "start",
                className: F._,
                onClick: P,
                children: [
                    (0, l.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 4,
                        align: "start",
                        children: [
                            (0, l.jsx)(d.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: (0, f.U)(_),
                            }),
                            null != C &&
                                (0, l.jsx)(c.E, {
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
                            null != b && (0, l.jsx)(j, { text: b, indicatorColor: x ?? L.W }),
                            null != S && (0, l.jsx)(j, { icon: u.ClockIcon, text: S }),
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
                    t.rewardStatus !== E.GM.EARNED &&
                        null != B &&
                        (0, l.jsx)(m.m, {
                            text: D.intl.string(D.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, l.jsx)(g.K, {
                                "aria-label": D.intl.string(D.t.FdGl5A),
                                icon: h.CircleInformationIcon,
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
function q(e) {
    let { variant: t, surface: n, promotion: s, collectAndClaim: a, rewardProduct: o, isClaiming: c, onClaim: u } = e,
        d = (0, i.bG)([C.default], () => C.default.locale);
    r.useEffect(() => {
        (0, I.l)(s, n, $.Z.PROMO_VIEWED);
    }, [s.id, n]);
    let { shared: m } = a,
        { assets: g, style: h } = m.progressIndicator,
        p = m.helpCenter?.id,
        x = h?.contentTheme ?? W,
        f = (function (e, t) {
            let { hiddenUrl: n, revealedUrl: l } = t;
            switch (e.rewardStatus) {
                case E.GM.IN_PROGRESS:
                    return { assetPath: n ?? l, showProgressRing: !0, timeLeftDate: e.endsAt };
                case E.GM.EARNED:
                    return { assetPath: n ?? l, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case E.GM.CONSUMED:
                    return { assetPath: l, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, g.rewardPreview),
        v = (0, U.A)(f?.timeLeftDate);
    if (null == f) return null;
    let { progress: _ } = s;
    if (
        (null == _ &&
            (s.rewardStatus === E.GM.EARNED || s.rewardStatus === E.GM.CONSUMED) &&
            (_ = { current: 4, target: 4, label: "collected" }),
        f.showProgressRing && null == _)
    )
        return null;
    let y = f.showProgressRing && null != _,
        {
            title: b,
            description: A,
            progressText: j,
            timeLeftText: L,
        } = (0, S.MZ)({
            promotion: s,
            promotionProgress: _,
            progressIndicator: m.progressIndicator,
            helpCenterId: p,
            daysRemaining: v,
            locale: d,
        }),
        k = {
            promotion: s,
            surface: n,
            assetPath: f.assetPath,
            progress: y ? _ : null,
            progressColor: h?.progressColor,
            backgroundUrl: g.backgroundUrl,
            title: b,
            description: A,
            progressText: j,
            timeLeftText: L,
            contentThemeClassName: V[x],
            rewardProduct: o,
            claimRewardButtonVariant: K[x],
            helpCenterId: p,
            isClaiming: c,
            onClaim: u,
        };
    return "condensed" === t ? (0, l.jsx)(Y, { ...k }) : (0, l.jsx)(X, { ...k });
}
let Z = function (e) {
    let { variant: t, surface: n, collectionId: s } = e,
        a = (0, b.ST)(),
        { analyticsLocations: i } = (0, x.Ay)(),
        o = r.useCallback(
            (e) => {
                (0, G.A)({ product: e, analyticsLocations: i });
            },
            [i],
        ),
        { onClaim: c, isClaiming: u, rewardProduct: d } = (0, H.G)(a, o),
        m = (0, _.XF)(a);
    return null == a || null == m || null == s || m.collectionId !== s
        ? null
        : (0, l.jsx)(q, {
              variant: t,
              surface: n,
              promotion: a,
              collectAndClaim: m,
              rewardProduct: d,
              isClaiming: u,
              onClaim: c,
          });
};
