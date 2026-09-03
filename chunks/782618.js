n.d(t, { A: () => C });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(17928),
    d = n(194261),
    c = n(782134),
    u = n(866665),
    _ = n(890856),
    E = n(834730),
    A = n(565645),
    h = n(885386),
    I = n(287809),
    f = n(813564),
    p = n(792348),
    T = n(805945),
    m = n(257645),
    g = n(375708),
    S = n(948611);
function N(e) {
    let { sound: t, interactive: n, disabled: a, setIsChildTooltipShowing: l, previewSound: o } = e,
        { emojiId: u, emojiName: _ } = t,
        E = r.useCallback(() => {
            l(!0);
        }, [l]),
        A = r.useCallback(() => {
            l(!1);
        }, [l]),
        h = (0, i.jsx)("div", {
            onMouseEnter: E,
            onMouseLeave: A,
            children: (0, i.jsx)(T.PI, { sound: t, previewSound: o }),
        }),
        I = (0, i.jsx)("div", {
            onMouseEnter: E,
            onMouseLeave: A,
            children: (0, i.jsx)(T.Zu, { sound: t, disabled: !n }),
        });
    return a
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { className: S.LQ }),
                  (0, i.jsx)(d.LockIcon, {
                      size: "refresh_sm",
                      color: "currentColor",
                      className: s()(S.C4, S.hz, S.B3, { [S.hn]: null != u || null != _ }),
                  }),
                  (0, i.jsx)("div", {
                      className: S.d7,
                      children: (0, i.jsxs)("div", { className: S.O5, children: [h, I] }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: S.d7,
              children: [
                  (0, i.jsx)("div", { className: S.LQ }),
                  (0, i.jsxs)("div", {
                      className: S.O5,
                      children: [h, (0, i.jsx)(c.PlayIcon, { size: "xs", color: "currentColor", className: S.C4 }), I],
                  }),
              ],
          });
}
let C = r.forwardRef(function (e, t) {
    let {
            sound: n,
            channel: a,
            containerClassName: d,
            className: c,
            interactive: T,
            onMouseEnter: C,
            openUpsellForSound: O,
            analyticsLocations: R,
        } = e,
        { name: L, emojiId: y, emojiName: D } = n,
        v = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        {
            playSoundboardSound: b,
            previewSound: M,
            isPlayingSound: P,
        } = (0, p.A)(n, a?.id ?? null, h.dG.getSetting()?.volume ?? 100, a?.isVocal() ? m.a.VOICE : m.a.DEFAULT),
        U = r.useRef(null),
        w = `sound-${n.soundId}`,
        G = (0, l.rm)(w),
        x = r.useMemo(() => ({ ...G, id: w, role: "button" }), [G, w]),
        k = null != y || null != D,
        F = !(0, f.Ir)(v, n, a, !1),
        [V, B] = r.useState(!1),
        H = r.useCallback(
            (e) => {
                F ? O?.(e) : b(R);
            },
            [F, O, b, R],
        );
    return (0, i.jsx)("li", {
        ref: t,
        className: s()(S.H, d),
        onMouseEnter: C,
        children: (0, i.jsx)(u.m, {
            text: L,
            position: "top",
            shouldShow: !V,
            delay: 500,
            children: (0, i.jsxs)(_.s, {
                buttonProps: x,
                "aria-label": g.intl.formatToPlainString(g.t.tuMUJ2, { emojiName: D, soundName: L }),
                className: s()(S.aG, { [S.he]: P, [S.wT]: T, [S.fx]: !T }, c),
                onClick: H,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(S.KM, { [S.hn]: k }),
                        "aria-hidden": !0,
                        ref: U,
                        children: [
                            k && (0, i.jsx)(A.A, { emojiId: y, emojiName: D, className: S.Zg }),
                            (0, i.jsx)(E.E, {
                                variant: "text-xs/medium",
                                color: T ? "text-default" : "text-muted",
                                className: s()(S.TW, { [S.hn]: k }),
                                children: L,
                            }),
                        ],
                    }),
                    (0, i.jsx)(N, {
                        sound: n,
                        interactive: T,
                        disabled: F,
                        setIsChildTooltipShowing: B,
                        previewSound: M,
                    }),
                ],
            }),
        }),
    });
});
