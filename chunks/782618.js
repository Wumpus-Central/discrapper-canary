n.d(t, { A: () => L });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(17928),
    d = n(27232),
    c = n(406810),
    u = n(866665),
    _ = n(194261),
    E = n(782134),
    A = n(890856),
    h = n(834730),
    I = n(565645),
    f = n(885386),
    p = n(287809),
    T = n(813564),
    m = n(453997),
    g = n(792348),
    S = n(805945),
    N = n(257645),
    C = n(375708),
    O = n(948611);
function R(e) {
    let { sound: t, disabled: n, setIsChildTooltipShowing: a, previewSound: l } = e,
        { emojiId: o, emojiName: A } = t,
        { text: h, icon: I } = (function (e) {
            switch (e) {
                case m.p.FAVORITE:
                    return {
                        text: C.intl.string(C.t["iJA/TE"]),
                        icon: (0, i.jsx)(d.StarIcon, { size: "xs", color: "currentColor", className: O.zr }),
                    };
                case m.p.FREQUENTLY_USED:
                    return {
                        text: C.intl.string(C.t["+cGVV6"]),
                        icon: (0, i.jsx)(c.ClockIcon, { size: "xs", color: "currentColor", className: O.zr }),
                    };
                default:
                    return { text: null, icon: null };
            }
        })(t.type),
        f = r.useCallback(() => {
            a(!0);
        }, [a]),
        p = r.useCallback(() => {
            a(!1);
        }, [a]),
        T = (0, i.jsx)("div", {
            onMouseEnter: f,
            onMouseLeave: p,
            children: (0, i.jsx)(S.PI, { sound: t, previewSound: l }),
        }),
        g = (0, i.jsx)("div", {
            onMouseEnter: null != I ? f : void 0,
            onMouseLeave: null != I ? p : void 0,
            children: (0, i.jsx)(u.m, {
                text: h,
                position: "top",
                children: (0, i.jsx)("div", { className: O.Wo, children: I }),
            }),
        });
    return n
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { className: O.LQ }),
                  (0, i.jsx)(_.LockIcon, {
                      size: "refresh_sm",
                      color: "currentColor",
                      className: s()(O.C4, O.hz, O.B3, { [O.hn]: null != o || null != A }),
                  }),
                  (0, i.jsx)("div", {
                      className: O.d7,
                      children: (0, i.jsxs)("div", { className: O.O5, children: [T, g] }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: O.d7,
              children: [
                  (0, i.jsx)("div", { className: O.LQ }),
                  (0, i.jsxs)("div", {
                      className: O.O5,
                      children: [T, (0, i.jsx)(E.PlayIcon, { size: "xs", color: "currentColor", className: O.C4 }), g],
                  }),
              ],
          });
}
let L = r.forwardRef(function (e, t) {
    let {
            sound: n,
            channel: a,
            containerClassName: d,
            className: c,
            interactive: _,
            onMouseEnter: E,
            openUpsellForSound: m,
            analyticsLocations: S,
        } = e,
        { name: L, emojiId: y, emojiName: D } = n,
        v = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        {
            playSoundboardSound: b,
            previewSound: M,
            isPlayingSound: P,
        } = (0, g.A)(n, a?.id ?? null, f.dG.getSetting()?.volume ?? 100, a?.isVocal() ? N.a.VOICE : N.a.DEFAULT),
        U = r.useRef(null),
        w = `sound-${n.soundId}`,
        G = (0, l.rm)(w),
        x = r.useMemo(() => ({ ...G, id: w, role: "button" }), [G, w]),
        k = null != y || null != D,
        F = !(0, T.Ir)(v, n, a, !1),
        [V, B] = r.useState(!1),
        H = r.useCallback(
            (e) => {
                F ? m?.(e) : b(S);
            },
            [F, m, b, S],
        );
    return (0, i.jsx)("li", {
        ref: t,
        className: s()(O.H, d),
        onMouseEnter: E,
        children: (0, i.jsx)(u.m, {
            text: L,
            position: "top",
            shouldShow: !V,
            delay: 500,
            children: (0, i.jsxs)(A.s, {
                buttonProps: x,
                "aria-label": C.intl.formatToPlainString(C.t.tuMUJ2, { emojiName: D, soundName: L }),
                className: s()(O.aG, { [O.he]: P, [O.wT]: _, [O.fx]: !_ }, c),
                onClick: H,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(O.KM, { [O.hn]: k }),
                        "aria-hidden": !0,
                        ref: U,
                        children: [
                            k && (0, i.jsx)(I.A, { emojiId: y, emojiName: D, className: O.Zg }),
                            (0, i.jsx)(h.E, {
                                variant: "text-xs/medium",
                                color: _ ? "text-default" : "text-muted",
                                className: s()(O.TW, { [O.hn]: k }),
                                children: L,
                            }),
                        ],
                    }),
                    (0, i.jsx)(R, { sound: n, disabled: F, setIsChildTooltipShowing: B, previewSound: M }),
                ],
            }),
        }),
    });
});
