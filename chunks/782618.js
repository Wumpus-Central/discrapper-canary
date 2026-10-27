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
    f = n(565645),
    I = n(253932),
    p = n(287809),
    T = n(813564),
    m = n(453997),
    g = n(792348),
    S = n(805945),
    N = n(257645),
    C = n(105292),
    O = n(948611);
function R(e) {
    let { sound: t, disabled: n, setIsChildTooltipShowing: a, previewSound: l } = e,
        { emojiId: o, emojiName: A } = t,
        { text: h, icon: f } = (function (e) {
            switch (e) {
                case m.p0.FAVORITE:
                    return {
                        text: C.intl.string(C.t["iJA/TE"]),
                        icon: (0, i.jsx)(d.StarIcon, { size: "xs", color: "currentColor", className: O.zr }),
                    };
                case m.p0.FREQUENTLY_USED:
                    return {
                        text: C.intl.string(C.t["+cGVV6"]),
                        icon: (0, i.jsx)(c.ClockIcon, { size: "xs", color: "currentColor", className: O.zr }),
                    };
                default:
                    return { text: null, icon: null };
            }
        })(t.type),
        I = r.useCallback(() => {
            a(!0);
        }, [a]),
        p = r.useCallback(() => {
            a(!1);
        }, [a]),
        T = (0, i.jsx)("div", {
            onMouseEnter: I,
            onMouseLeave: p,
            children: (0, i.jsx)(S.PI, { sound: t, previewSound: l }),
        }),
        g = (0, i.jsx)("div", {
            onMouseEnter: null != f ? I : void 0,
            onMouseLeave: null != f ? p : void 0,
            children: (0, i.jsx)(u.m, {
                text: h,
                position: "top",
                children: (0, i.jsx)("div", { className: O.Wo, children: f }),
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
function L(e) {
    let {
            sound: t,
            channel: n,
            containerClassName: a,
            className: d,
            interactive: c,
            onMouseEnter: _,
            openUpsellForSound: E,
            analyticsLocations: m,
            ref: S,
        } = e,
        { name: L, emojiId: y, emojiName: D } = t,
        v = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        {
            playSoundboardSound: b,
            previewSound: M,
            isPlayingSound: P,
        } = (0, g.A)(t, n?.id ?? null, I.dG.getSetting()?.volume ?? 100, n?.isVocal() ? N.a.VOICE : N.a.DEFAULT),
        U = r.useRef(null),
        w = `sound-${t.soundId}`,
        G = (0, l.rm)(w),
        x = r.useMemo(() => ({ ...G, id: w, role: "button" }), [G, w]),
        k = null != y || null != D,
        F = !(0, T.Ir)(v, t, n, !1),
        [B, V] = r.useState(!1),
        H = r.useCallback(
            (e) => {
                F ? E?.(e) : b(m);
            },
            [F, E, b, m],
        );
    return (0, i.jsx)("li", {
        ref: S,
        className: s()(O.H, a),
        onMouseEnter: _,
        children: (0, i.jsx)(u.m, {
            text: L,
            position: "top",
            shouldShow: !B,
            delay: 500,
            children: (0, i.jsxs)(A.s, {
                buttonProps: x,
                "aria-label": C.intl.formatToPlainString(C.t.tuMUJ2, { emojiName: D, soundName: L }),
                className: s()(O.aG, O.CS, { [O.he]: P, [O.wT]: c, [O.fx]: !c }, d),
                onClick: H,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(O.KM, { [O.hn]: k }),
                        "aria-hidden": !0,
                        ref: U,
                        children: [
                            k && (0, i.jsx)(f.A, { emojiId: y, emojiName: D, className: O.Zg }),
                            (0, i.jsx)(h.E, {
                                variant: "text-xs/medium",
                                color: c ? "text-default" : "text-muted",
                                className: s()(O.TW, { [O.hn]: k }),
                                children: L,
                            }),
                        ],
                    }),
                    (0, i.jsx)(R, { sound: t, disabled: F, setIsChildTooltipShowing: V, previewSound: M }),
                ],
            }),
        }),
    });
}
