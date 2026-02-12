"use strict";
n.d(t, { A: () => F });
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
    S = n(235365),
    v = n(566119),
    C = n(788868),
    b = n(652215),
    N = n(901123),
    R = n(49370),
    O = n(985018),
    D = n(125634),
    L = n(268920),
    w = n(633217),
    x = n(909340);
let P = () => {
        let e = (0, l.bG)([_.A], () => _.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: D.s,
            children: e
                ? (0, r.jsx)("img", { src: L.A, className: D.Cb, alt: "Orb" })
                : (0, r.jsxs)(f.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: D.Cb,
                      children: [
                          (0, r.jsx)("source", { src: w.A, type: "video/webm" }),
                          (0, r.jsx)("img", { src: L.A, className: D.Cb, alt: "Orb" }),
                      ],
                  }),
        });
    },
    M = 4100;
function k() {
    (0, v.RQ)(), (0, g.pX)(`${N.BV.NITRO_HOME}?section=${S.L}`);
}
function U() {
    (0, v.gP)(), (0, g.pX)(`${N.BV.NITRO_HOME}?section=${S.L}`);
}
function G() {
    (0, v.b)(), window.open(I.A.getArticleURL(b.MVz.ORBS_FAQ), "_blank");
}
function F(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: a, ctaText: g, ctaOnClick: I } = e,
        S = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        v = (0, l.bG)([h.A], () => h.A.getRewardForProgram(p.W.NITRO)),
        N = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        { balance: L } = (0, E.W)(),
        w = !(0, T.ki)(N),
        F = i.useMemo(() => {
            let e = (0, T.YE)(N, C.PremiumTypes.TIER_2);
            if (!h.A.passesGeneralUIInvariant(p.W.NITRO) || w) return null;
            if (e && null != v) {
                let e = (0, o.default)(new Date(v.next_reward_date), new Date());
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: O.intl.format(R.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: k,
                            }),
                        }),
                        (0, r.jsx)(y.A, {}),
                    ],
                });
            }
            return null;
        }, [N, w, v]),
        V = (L ?? 0) >= M;
    return (0, r.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: a,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, r.jsx)(d.NPJ, {
            theme: V ? b.NJ8.DARKER : void 0,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: s()(e, D.j),
                    children: [
                        V &&
                            (0, r.jsx)(f.A, {
                                autoPlay: !S,
                                loop: !S,
                                muted: !0,
                                playsInline: !0,
                                tabIndex: -1,
                                className: D.yG,
                                src: x.A,
                            }),
                        (0, r.jsxs)("div", {
                            className: D.Qs,
                            children: [
                                (0, r.jsx)(c.q, { onClick: a }),
                                (0, r.jsxs)("div", {
                                    className: D.hQ,
                                    children: [
                                        (0, r.jsx)(P, {}),
                                        (0, r.jsxs)("div", {
                                            className: D.y$,
                                            children: [
                                                (L ?? 0) > 0 &&
                                                    (0, r.jsxs)("div", {
                                                        className: D.E2,
                                                        children: [
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: D.K,
                                                                children: L ?? 0,
                                                            }),
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: O.intl.string(R.default.KclK9z),
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
                                            color: w ? "text-default" : "text-muted",
                                            className: D.CU,
                                            children: w
                                                ? O.intl.format(R.default.juvXqj, { deepLinkToNitroOrbs: U })
                                                : O.intl.format(R.default.fhAVek, { helpdeskArticle: G }),
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
