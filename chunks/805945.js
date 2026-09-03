n.d(t, { dT: () => q, PI: () => J, Ay: () => X, Zu: () => $ });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(17928),
    u = n(451988),
    c = n(661531),
    d = n(866665),
    h = n(939249),
    m = n(983851),
    f = n(27232),
    p = n(505930),
    g = n(782134),
    x = n(194261),
    A = n(307301),
    E = n(834730),
    C = n(890856),
    I = n(565645),
    y = n(775602),
    S = n(688810),
    N = n(21161),
    v = n(850992),
    _ = n(319993),
    T = n(435558),
    j = n(132500),
    b = n(104142),
    R = n(407781),
    O = n(287809),
    M = n(194486),
    L = n(178226);
let k = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        r = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        a = (0, o.bG)([y.Ay], () => y.Ay.useReducedMotion),
        [u, c] = i.useState([]),
        d = u.length < 50,
        h = n?.emojiId != null || n?.emojiName != null,
        m = i.useCallback(() => {
            if (!a && d && h && null != r) {
                let e = (0, b.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    l = M.B.PREMIUM,
                    i = (0, T.random)(b.Bf[l].length, !1),
                    s = { id: (0, j.A)(), animationId: i, animationType: l, shouldResize: t, url: e, userId: r.id };
                c((e) => [...e, s]);
            }
        }, [a, d, h, r, n]);
    i.useImperativeHandle(t, () => ({ addAnimation: m }));
    let f = i.useCallback((e) => {
        c((t) => {
            let n = [...t],
                l = n.findIndex((t) => t.id === e);
            return n.splice(l, 1), n;
        });
    }, []);
    return a || !h
        ? null
        : (0, l.jsx)("div", {
              className: L.z,
              style: { width: s.width, height: s.height },
              children: u.map((e) => (0, l.jsx)(R.A, { containerDimensions: s, effect: e, onComplete: f }, e.id)),
          });
});
var w = n(885386),
    P = n(967198),
    D = n(174459),
    U = n(796774),
    G = n(209932),
    V = n(807348),
    F = n(813564),
    H = n(792348),
    B = n(496502),
    W = n(652215),
    K = n(536283),
    z = n(257645),
    Z = n(375708),
    Y = n(948611);
function q(e) {
    let { disabled: t = !1, onClick: n, text: i, children: s, tooltipPosition: a = "top", ref: o } = e;
    return (0, l.jsx)(d.m, {
        text: i,
        position: a,
        children: (0, l.jsx)(h.D, {
            innerRef: o,
            "aria-label": i,
            className: r()(Y.zr, { [Y.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function J(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: s = "top" } = e,
        r = (0, o.bG)([P.A], () => P.A.getGuildId());
    return (0, l.jsx)(q, {
        tooltipPosition: s,
        disabled: i,
        onClick: function (e) {
            D.default.track(W.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n();
        },
        text: Z.intl.formatToPlainString(Z.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, l.jsx)(m.H, { size: "md", color: "currentColor", className: Y.Wo }),
    });
}
function $(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, S.Ay)(),
        a = (0, o.bG)([G.A], () => G.A.isFavoriteSound(t.soundId), [t.soundId]),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    a
                        ? (0, U.eS)(t.soundId)
                        : ((0, F.Ni)({ sound: t, location: { ...s, object: W.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(t.soundId));
            },
            [a, t, s],
        );
    return (0, l.jsx)(q, {
        disabled: n,
        onClick: u,
        text: Z.intl.formatToPlainString(a ? Z.t.lQLsjc : Z.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: a
            ? (0, l.jsx)(f.StarIcon, {
                  size: "xs",
                  className: r()(Y.Wo, Y.gj),
                  color: c.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, l.jsx)(p.y, { size: "xs", color: "currentColor", className: Y.Wo }),
    });
}
let X = i.forwardRef(function (e, t) {
    var n, s, c;
    let h,
        {
            sound: m,
            channel: f,
            containerClassName: p,
            className: S,
            focused: T,
            forceSecondaryActions: j = !1,
            interactive: b = !0,
            enableSecondaryActions: R = !1,
            suppressPlaySound: M,
            onMouseEnter: L,
            onSelectItem: P,
            analyticsLocations: D,
            buttonOverlay: U = V.If.PLAY,
            showLockForDisabledSound: G = !0,
            inNitroLockedSection: W = !1,
            isAnimated: q = !0,
            isPlayingSoundOverride: X,
            isSoundmoji: Q,
            soundmojiVisualEffectRef: ee,
            tooltipOverride: et,
            ...en
        } = e,
        { name: el, emojiId: ei, emojiName: es } = m,
        er = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        ea = (0, B.v)(m, f?.guild_id),
        {
            playSoundboardSound: eo,
            previewSound: eu,
            isPlayingSound: ec,
        } = (0, H.A)(
            m,
            f?.id ?? null,
            (Q ? w.HO.getSetting() : w.dG.getSetting()?.volume) ?? 100,
            !Q && f?.isVocal() ? z.a.VOICE : z.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ed } = i.useContext(N.x),
        eh = i.useRef(null),
        em =
            ((n = m.soundId),
            (s = eh.current),
            i.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        ef = (0, o.bG)([y.Ay], () => y.Ay.useReducedMotion),
        ep = i.useRef(0.01),
        eg = i.useRef(new u.IX()),
        ex = "1" === m.soundId,
        eA = `sound-${m.soundId}`,
        eE = (0, a.rm)(eA),
        eC = null != ei || null != es,
        eI = !(0, F.Ir)(er, m, f) && !Q,
        ey = j || (R && !eI),
        eS = v.LW.useStore().bottomPosition ?? 0,
        eN = eh.current?.getBoundingClientRect().bottom ?? 0,
        [ev, e_] = i.useState(!1),
        eT = i.useCallback(() => {
            e_(!0);
        }, []),
        ej = i.useCallback(() => {
            e_(!1);
        }, []),
        eb = eI && G;
    function eR(e) {
        (ex &&
            !ef &&
            ((ep.current = Math.min(ep.current + 0.01, 0.1)),
            Math.random() < ep.current && ed(em.x, em.y, void 0, void 0, { sprite: K.dR })),
        null != P)
            ? P(e)
            : M || eo(D);
    }
    let eO = (0, l.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ej,
        children: J({ sound: m, previewSound: eu, disabled: eI && !j }),
    });
    function eM(e) {
        return M || eI
            ? eb
                ? (0, l.jsx)(x.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: r()(Y.C4, Y.hz, e, { [Y.hn]: eC }),
                  })
                : null
            : (0, l.jsx)(g.PlayIcon, { size: "xs", color: "currentColor", className: r()(Y.C4, e) });
    }
    let eL = (0, l.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ej,
        children: (0, l.jsx)($, { sound: m, disabled: !b && !j }),
    });
    i.useEffect(() => {
        let e = eg.current;
        return (
            ex &&
                e.start(1e3, () => {
                    ep.current = Math.max(ep.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [ex]);
    let ek =
        ((c = eh.current),
        null == (h = c?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: h.width, height: h.height });
    return (0, l.jsxs)("li", {
        ref: t,
        className: r()(Y.H, p),
        onMouseEnter: L,
        children: [
            (0, l.jsx)(d.m, {
                "aria-label": null != et ? m.name : void 0,
                __unsupportedReactNodeAsText: et ?? m.name,
                position: eN + 50 > eS ? "top" : "bottom",
                shouldShow: !ev,
                delay: 500,
                children: (0, l.jsxs)(C.s, {
                    ...en,
                    buttonProps: { ...eE, id: eA, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: m.emojiName, soundName: m.name }),
                    className: r()(
                        Y.aG,
                        {
                            [Y.CS]: q,
                            [Y.he]: X ?? ec,
                            [Y.ju]: M,
                            [Y.wT]: b,
                            [Y.$9]: !b && !j,
                            [Y.Au]: eI && !j,
                            [Y.fx]: !b && j,
                            [Y.in]: b && T,
                        },
                        S,
                    ),
                    onClick: (e) => {
                        eR?.(e);
                    },
                    onContextMenu: R && !eI ? ea : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: r()(Y.KM, { [Y.hn]: eC }),
                            "aria-hidden": !0,
                            ref: eh,
                            children: [
                                eC && (0, l.jsx)(I.A, { emojiId: ei, emojiName: es, className: Y.Zg }),
                                (0, l.jsx)(E.E, {
                                    variant: "text-xs/medium",
                                    color: b ? void 0 : "text-muted",
                                    className: r()(Y.TW, { [Y.hn]: eC }),
                                    children: el,
                                }),
                            ],
                        }),
                        (function () {
                            switch (U) {
                                case V.If.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: Y.ec,
                                        children: [
                                            (0, l.jsx)("div", { className: Y.LQ }),
                                            (0, l.jsxs)("div", {
                                                className: Y.O5,
                                                children: [
                                                    eO,
                                                    (0, l.jsxs)("div", {
                                                        className: Y.c9,
                                                        children: [
                                                            (0, l.jsx)(A.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Y.y_,
                                                            }),
                                                            (0, l.jsx)(E.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: Z.intl.string(Z.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    ey && eL,
                                                ],
                                            }),
                                        ],
                                    });
                                case V.If.NONE:
                                    return null;
                                case V.If.PLAY:
                                case V.If.SOUNDMOJI:
                                default:
                                    return eb && !W
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: Y.LQ }),
                                                  eM(Y.B3),
                                                  (0, l.jsx)("div", {
                                                      className: Y.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: Y.O5,
                                                          children: [ey && eO, ey && eL],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: Y.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: r()({ [Y.LQ]: !M }) }),
                                                  (0, l.jsx)("div", {
                                                      className: Y.O5,
                                                      children:
                                                          U === V.If.SOUNDMOJI
                                                              ? (0, l.jsx)(_.Ay, {
                                                                    sound: m,
                                                                    channel: f,
                                                                    setTooltipShowing: e_,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [ey && eO, eM(), ey && eL],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !m.available &&
                (0, l.jsx)(d.m, {
                    text: Z.intl.string(Z.t.MDOXJR),
                    shouldShow: !ev,
                    children: (0, l.jsx)("div", {
                        className: Y.ET,
                        children: !W && (0, l.jsxs)("div", { className: Y.ld, children: [eO, eL] }),
                    }),
                }),
            !0 === Q && (0, l.jsx)(k, { sound: m, containerDimensions: ek, ref: ee }),
        ],
    });
});
