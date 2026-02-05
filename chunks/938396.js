"use strict";
n.d(t, { A: () => P });
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
    p = n(895944),
    h = n(649032),
    m = n(976860),
    g = n(309954),
    E = n(287809),
    A = n(975571),
    I = n(474090),
    T = n(94264),
    y = n(788868),
    S = n(652215),
    v = n(901123),
    C = n(49370),
    b = n(985018),
    N = n(125634),
    R = n(268920),
    O = n(633217),
    D = n(909340);
let L = () => {
        let e = (0, l.bG)([_.A], () => _.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: N.s,
            children: e
                ? (0, r.jsx)("img", { src: R.A, className: N.Cb, alt: "Orb" })
                : (0, r.jsxs)(f.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: N.Cb,
                      children: [
                          (0, r.jsx)("source", { src: O.A, type: "video/webm" }),
                          (0, r.jsx)("img", { src: R.A, className: N.Cb, alt: "Orb" }),
                      ],
                  }),
        });
    },
    w = 4100;
function x() {
    (0, m.pX)(`${v.BV.NITRO_HOME}?section=orbs`);
}
function P(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: a, ctaText: m, ctaOnClick: v } = e,
        R = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        O = (0, l.bG)([p.A], () => p.A.getRewardForProgram(h.W.NITRO)),
        P = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
        { balance: M } = (0, g.W)(),
        k = !(0, I.ki)(P),
        U = i.useMemo(() => {
            let e = (0, I.YE)(P, y.PremiumTypes.TIER_2);
            if (!p.A.passesGeneralUIInvariant(h.W.NITRO) || k) return null;
            if (e && null != O) {
                let e = (0, o.default)(new Date(O.next_reward_date), new Date());
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: b.intl.format(C.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: x,
                            }),
                        }),
                        (0, r.jsx)(T.A, {}),
                    ],
                });
            }
            return null;
        }, [P, k, O]),
        G = (M ?? 0) >= w;
    return (0, r.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: a,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, r.jsx)(d.NPJ, {
            theme: G ? S.NJ8.DARKER : void 0,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: s()(e, N.j),
                    children: [
                        G &&
                            (0, r.jsx)(f.A, {
                                autoPlay: !R,
                                loop: !R,
                                muted: !0,
                                playsInline: !0,
                                tabIndex: -1,
                                className: N.yG,
                                src: D.A,
                            }),
                        (0, r.jsxs)("div", {
                            className: N.Qs,
                            children: [
                                (0, r.jsx)(c.q, { onClick: a }),
                                (0, r.jsxs)("div", {
                                    className: N.hQ,
                                    children: [
                                        (0, r.jsx)(L, {}),
                                        (0, r.jsxs)("div", {
                                            className: N.y$,
                                            children: [
                                                (M ?? 0) > 0 &&
                                                    (0, r.jsxs)("div", {
                                                        className: N.E2,
                                                        children: [
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: N.K,
                                                                children: M ?? 0,
                                                            }),
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: b.intl.string(C.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                U,
                                            ],
                                        }),
                                        (0, r.jsx)(d.$nd, {
                                            text: m,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: v,
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(d.EYj, {
                                            variant: "text-xs/normal",
                                            color: k ? "text-default" : "text-muted",
                                            className: N.CU,
                                            children: k
                                                ? b.intl.format(C.default.juvXqj, { deepLinkToNitroOrbs: x })
                                                : b.intl.format(C.default.fhAVek, {
                                                      helpdeskArticle: A.A.getArticleURL(S.MVz.ORBS_FAQ),
                                                  }),
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
