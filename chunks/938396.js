l.d(t, { A: () => V });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(892227),
    o = l(311907),
    u = l(964892),
    c = l(916845),
    d = l(732955),
    p = l(775602),
    m = l(607470),
    h = l(895944),
    x = l(649032),
    b = l(976860),
    g = l(309954),
    y = l(287809),
    E = l(975571),
    f = l(474090),
    v = l(94264),
    S = l(235365),
    j = l(566119),
    T = l(788868),
    C = l(652215),
    P = l(901123),
    R = l(49370),
    A = l(985018),
    _ = l(125634),
    N = l(268920),
    I = l(633217),
    k = l(909340);
let D = () => {
    let e = (0, o.bG)([p.A], () => p.A.useReducedMotion);
    return (0, a.jsx)("div", {
        className: _.s,
        children: e
            ? (0, a.jsx)("img", { src: N.A, className: _.Cb, alt: "Orb" })
            : (0, a.jsxs)(m.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: _.Cb,
                  children: [
                      (0, a.jsx)("source", { src: I.A, type: "video/webm" }),
                      (0, a.jsx)("img", { src: N.A, className: _.Cb, alt: "Orb" }),
                  ],
              }),
    });
};
function M() {
    (0, j.RQ)(), (0, b.pX)(`${P.BV.NITRO_HOME}?section=${S.L}`);
}
function O() {
    (0, j.gP)(), (0, b.pX)(`${P.BV.NITRO_HOME}?section=${S.L}`);
}
function B() {
    (0, j.b)(), window.open(E.A.getArticleURL(C.MVz.ORBS_FAQ), "_blank");
}
function V(e) {
    let { targetElementRef: t, shouldShow: l, onRequestClose: r, ctaText: b, ctaOnClick: E } = e,
        S = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        j = (0, o.bG)([h.A], () => h.A.getRewardForProgram(x.W.NITRO)),
        P = (0, o.bG)([y.default], () => y.default.getCurrentUser()),
        { balance: N } = (0, g.W)(),
        I = !(0, f.ki)(P),
        V = n.useMemo(() => {
            let e = (0, f.YE)(P, T.PremiumTypes.TIER_2);
            if (!h.A.passesGeneralUIInvariant(x.W.NITRO) || I) return null;
            if (e && null != j) {
                let e = (0, s.default)(new Date(j.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: A.intl.format(R.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: M,
                            }),
                        }),
                        (0, a.jsx)(v.A, {}),
                    ],
                });
            }
            return null;
        }, [P, I, j]),
        w = (N ?? 0) >= 4100;
    return (0, a.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(d.NPJ, {
            theme: w ? C.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: i()(e, _.j),
                    children: [
                        w &&
                            (0, a.jsx)(m.A, {
                                autoPlay: !S,
                                loop: !S,
                                muted: !0,
                                playsInline: !0,
                                tabIndex: -1,
                                className: _.yG,
                                src: k.A,
                            }),
                        (0, a.jsxs)("div", {
                            className: _.Qs,
                            children: [
                                (0, a.jsx)(c.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: _.hQ,
                                    children: [
                                        (0, a.jsx)(D, {}),
                                        (0, a.jsxs)("div", {
                                            className: _.y$,
                                            children: [
                                                (N ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: _.E2,
                                                        children: [
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: _.K,
                                                                children: N ?? 0,
                                                            }),
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: A.intl.string(R.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                V,
                                            ],
                                        }),
                                        (0, a.jsx)(d.$nd, {
                                            text: b,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: E,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(d.EYj, {
                                            variant: "text-xs/normal",
                                            color: I ? "text-default" : "text-muted",
                                            className: _.CU,
                                            children: I
                                                ? A.intl.format(R.default.juvXqj, { deepLinkToNitroOrbs: O })
                                                : A.intl.format(R.default.fhAVek, { helpdeskArticle: B }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
