"use strict";
n.d(t, { A: () => U });
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
    y = n(566119),
    S = n(788868),
    v = n(652215),
    C = n(901123),
    b = n(49370),
    N = n(985018),
    R = n(125634),
    O = n(268920),
    D = n(633217),
    L = n(909340);
let w = () => {
        let e = (0, l.bG)([_.A], () => _.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: R.s,
            children: e
                ? (0, r.jsx)("img", { src: O.A, className: R.Cb, alt: "Orb" })
                : (0, r.jsxs)(f.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: R.Cb,
                      children: [
                          (0, r.jsx)("source", { src: D.A, type: "video/webm" }),
                          (0, r.jsx)("img", { src: O.A, className: R.Cb, alt: "Orb" }),
                      ],
                  }),
        });
    },
    x = 4100;
function P() {
    (0, y.RQ)(), (0, m.pX)(`${C.BV.NITRO_HOME}?section=orbs`);
}
function M() {
    (0, y.gP)(), (0, m.pX)(`${C.BV.NITRO_HOME}?section=orbs`);
}
function k() {
    (0, y.b)(), window.open(A.A.getArticleURL(v.MVz.ORBS_FAQ), "_blank");
}
function U(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: a, ctaText: m, ctaOnClick: A } = e,
        y = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        C = (0, l.bG)([p.A], () => p.A.getRewardForProgram(h.W.NITRO)),
        O = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
        { balance: D } = (0, g.W)(),
        U = !(0, I.ki)(O),
        G = i.useMemo(() => {
            let e = (0, I.YE)(O, S.PremiumTypes.TIER_2);
            if (!p.A.passesGeneralUIInvariant(h.W.NITRO) || U) return null;
            if (e && null != C) {
                let e = (0, o.default)(new Date(C.next_reward_date), new Date());
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: N.intl.format(b.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: P,
                            }),
                        }),
                        (0, r.jsx)(T.A, {}),
                    ],
                });
            }
            return null;
        }, [O, U, C]),
        V = (D ?? 0) >= x;
    return (0, r.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: a,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, r.jsx)(d.NPJ, {
            theme: V ? v.NJ8.DARKER : void 0,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: s()(e, R.j),
                    children: [
                        V &&
                            (0, r.jsx)(f.A, {
                                autoPlay: !y,
                                loop: !y,
                                muted: !0,
                                playsInline: !0,
                                tabIndex: -1,
                                className: R.yG,
                                src: L.A,
                            }),
                        (0, r.jsxs)("div", {
                            className: R.Qs,
                            children: [
                                (0, r.jsx)(c.q, { onClick: a }),
                                (0, r.jsxs)("div", {
                                    className: R.hQ,
                                    children: [
                                        (0, r.jsx)(w, {}),
                                        (0, r.jsxs)("div", {
                                            className: R.y$,
                                            children: [
                                                (D ?? 0) > 0 &&
                                                    (0, r.jsxs)("div", {
                                                        className: R.E2,
                                                        children: [
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: R.K,
                                                                children: D ?? 0,
                                                            }),
                                                            (0, r.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: N.intl.string(b.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                G,
                                            ],
                                        }),
                                        (0, r.jsx)(d.$nd, {
                                            text: m,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: A,
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(d.EYj, {
                                            variant: "text-xs/normal",
                                            color: U ? "text-default" : "text-muted",
                                            className: R.CU,
                                            children: U
                                                ? N.intl.format(b.default.juvXqj, { deepLinkToNitroOrbs: M })
                                                : N.intl.format(b.default.fhAVek, { helpdeskArticle: k }),
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
