"use strict";
n.d(t, { A: () => G });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(892227),
    l = n(311907),
    u = n(964892),
    c = n(916845),
    d = n(732955),
    _ = n(775602),
    f = n(607470),
    h = n(895944),
    p = n(649032),
    g = n(976860),
    E = n(309954),
    A = n(287809),
    I = n(975571),
    T = n(474090),
    y = n(94264),
    S = n(566119),
    v = n(788868),
    C = n(652215),
    b = n(901123),
    N = n(723468),
    R = n(985018),
    O = n(99720),
    D = n(268920),
    L = n(633217),
    w = n(909340);
let x = () => {
        let e = (0, l.bG)([_.A], () => _.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: O.s,
            children: e
                ? (0, r.jsx)("img", { src: D.A, className: O.Cb, alt: "Orb" })
                : (0, r.jsxs)(f.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: O.Cb,
                      children: [
                          (0, r.jsx)("source", { src: L.A, type: "video/webm" }),
                          (0, r.jsx)("img", { src: D.A, className: O.Cb, alt: "Orb" }),
                      ],
                  }),
        });
    },
    P = 4100;
function M() {
    (0, S.RQ)(), (0, g.pX)(`${b.BV.NITRO_HOME}?section=orbs`);
}
function k() {
    (0, S.gP)(), (0, g.pX)(`${b.BV.NITRO_HOME}?section=orbs`);
}
function U() {
    (0, S.b)(), window.open(I.A.getArticleURL(C.MVz.ORBS_FAQ), "_blank");
}
function G(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: a, ctaText: g, ctaOnClick: I } = e,
        S = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        b = (0, l.bG)([h.A], () => h.A.getRewardForProgram(p.W.NITRO)),
        D = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        { balance: L } = (0, E.W)(),
        G = !(0, T.ki)(D),
        F = i.useMemo(() => {
            let e = (0, T.YE)(D, v.PremiumTypes.TIER_2);
            if (!h.A.passesGeneralUIInvariant(p.W.NITRO) || G) return null;
            if (e && null != b) {
                let e = (0, o.default)(new Date(b.next_reward_date), new Date());
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: R.intl.format(N.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: M,
                            }),
                        }),
                        (0, r.jsx)(y.A, {}),
                    ],
                });
            }
            return null;
        }, [D, G, b]),
        V = (L ?? 0) >= P;
    return (0, r.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: a,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, r.jsx)(d.NPJ, {
            theme: V ? C.NJ8.DARKER : void 0,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: s()(e, O.j),
                    children: [
                        V &&
                            (0, r.jsx)(f.A, {
                                autoPlay: !S,
                                loop: !S,
                                muted: !0,
                                playsInline: !0,
                                tabIndex: -1,
                                className: O.yG,
                                src: w.A,
                            }),
                        (0, r.jsxs)("div", {
                            className: O.Qs,
                            children: [
                                (0, r.jsx)(c.q, { onClick: a }),
                                (0, r.jsxs)("div", {
                                    className: O.hQ,
                                    children: [
                                        (0, r.jsx)(x, {}),
                                        (0, r.jsxs)("div", {
                                            className: O.y$,
                                            children: [
                                                (L ?? 0) > 0 &&
                                                    (0, r.jsxs)("div", {
                                                        className: O.E2,
                                                        children: [
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: O.K,
                                                                children: L ?? 0,
                                                            }),
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: R.intl.string(N.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                F,
                                            ],
                                        }),
                                        (0, r.jsx)(d.$nd, {
                                            text: g,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: I,
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(d.EYj, {
                                            variant: "text-xs/normal",
                                            color: G ? "text-default" : "text-muted",
                                            className: O.CU,
                                            children: G
                                                ? R.intl.format(N.default.juvXqj, { deepLinkToNitroOrbs: k })
                                                : R.intl.format(N.default.fhAVek, { helpdeskArticle: U }),
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
