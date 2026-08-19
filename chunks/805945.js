"use strict";
n.d(t, { dT: () => q, Ay: () => J });
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
    v = n(21161),
    _ = n(850992),
    N = n(319993),
    T = n(435558),
    j = n(132500),
    b = n(104142),
    R = n(407781),
    L = n(287809),
    O = n(194486),
    M = n(178226);
let w = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        r = (0, o.bG)([L.default], () => L.default.getCurrentUser()),
        a = (0, o.bG)([y.Ay], () => y.Ay.useReducedMotion),
        [u, c] = i.useState([]),
        d = u.length < 50,
        h = n?.emojiId != null || n?.emojiName != null,
        m = i.useCallback(() => {
            if (!a && d && h && null != r) {
                let e = (0, b.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    l = O.B.PREMIUM,
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
              className: M.z,
              style: { width: s.width, height: s.height },
              children: u.map((e) => (0, l.jsx)(R.A, { containerDimensions: s, effect: e, onComplete: f }, e.id)),
          });
});
var k = n(885386),
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
let J = i.forwardRef(function (e, t) {
    var n, s, c;
    let h,
        {
            sound: f,
            channel: p,
            containerClassName: S,
            className: T,
            focused: j,
            forceSecondaryActions: b = !1,
            interactive: R = !0,
            enableSecondaryActions: O = !1,
            suppressPlaySound: M,
            onMouseEnter: U,
            onSelectItem: G,
            analyticsLocations: J,
            buttonOverlay: X = V.If.PLAY,
            showLockForDisabledSound: Q = !0,
            inNitroLockedSection: ee = !1,
            isAnimated: et = !0,
            isPlayingSoundOverride: en,
            isSoundmoji: el,
            soundmojiVisualEffectRef: ei,
            tooltipOverride: es,
            ...er
        } = e,
        { name: ea, emojiId: eo, emojiName: eu } = f,
        ec = (0, o.bG)([L.default], () => L.default.getCurrentUser()),
        ed = (0, B.v)(f, p?.guild_id),
        {
            playSoundboardSound: eh,
            previewSound: em,
            isPlayingSound: ef,
        } = (0, H.A)(
            f,
            p?.id ?? null,
            (el ? k.HO.getSetting() : k.dG.getSetting()?.volume) ?? 100,
            !el && p?.isVocal() ? z.a.VOICE : z.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ep } = i.useContext(v.x),
        eg = i.useRef(null),
        ex =
            ((n = f.soundId),
            (s = eg.current),
            i.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        eA = (0, o.bG)([y.Ay], () => y.Ay.useReducedMotion),
        eE = i.useRef(0.01),
        eC = i.useRef(new u.IX()),
        eI = "1" === f.soundId,
        ey = `sound-${f.soundId}`,
        eS = (0, a.rm)(ey),
        ev = null != eo || null != eu,
        e_ = !(0, F.Ir)(ec, f, p) && !el,
        eN = b || (O && !e_),
        eT = _.LW.useStore().bottomPosition ?? 0,
        ej = eg.current?.getBoundingClientRect().bottom ?? 0,
        [eb, eR] = i.useState(!1),
        eL = i.useCallback(() => {
            eR(!0);
        }, []),
        eO = i.useCallback(() => {
            eR(!1);
        }, []),
        eM = e_ && Q;
    function ew(e) {
        (eI &&
            !eA &&
            ((eE.current = Math.min(eE.current + 0.01, 0.1)),
            Math.random() < eE.current && ep(ex.x, ex.y, void 0, void 0, { sprite: K.dR })),
        null != G)
            ? G(e)
            : M || eh(J);
    }
    let ek = (0, l.jsx)("div", {
        onMouseEnter: eL,
        onMouseLeave: eO,
        children: (function (e) {
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
        })({ sound: f, previewSound: em, disabled: e_ && !b }),
    });
    function eP(e) {
        return M || e_
            ? eM
                ? (0, l.jsx)(x.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: r()(Y.C4, Y.hz, e, { [Y.hn]: ev }),
                  })
                : null
            : (0, l.jsx)(g.PlayIcon, { size: "xs", color: "currentColor", className: r()(Y.C4, e) });
    }
    let eD = (0, l.jsx)("div", {
        onMouseEnter: eL,
        onMouseLeave: eO,
        children: (0, l.jsx)($, { sound: f, disabled: !R && !b }),
    });
    i.useEffect(() => {
        let e = eC.current;
        return (
            eI &&
                e.start(1e3, () => {
                    eE.current = Math.max(eE.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eI]);
    let eU =
        ((c = eg.current),
        null == (h = c?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: h.width, height: h.height });
    return (0, l.jsxs)("li", {
        ref: t,
        className: r()(Y.H, S),
        onMouseEnter: U,
        children: [
            (0, l.jsx)(d.m, {
                "aria-label": null != es ? f.name : void 0,
                __unsupportedReactNodeAsText: es ?? f.name,
                position: ej + 50 > eT ? "top" : "bottom",
                shouldShow: !eb,
                delay: 500,
                children: (0, l.jsxs)(C.s, {
                    ...er,
                    buttonProps: { ...eS, id: ey, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: f.emojiName, soundName: f.name }),
                    className: r()(
                        Y.aG,
                        {
                            [Y.CS]: et,
                            [Y.he]: en ?? ef,
                            [Y.ju]: M,
                            [Y.wT]: R,
                            [Y.$9]: !R && !b,
                            [Y.Au]: e_ && !b,
                            [Y.fx]: !R && b,
                            [Y.in]: R && j,
                        },
                        T,
                    ),
                    onClick: (e) => {
                        ew?.(e);
                    },
                    onContextMenu: O && !e_ ? ed : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: r()(Y.KM, { [Y.hn]: ev }),
                            "aria-hidden": !0,
                            ref: eg,
                            children: [
                                ev && (0, l.jsx)(I.A, { emojiId: eo, emojiName: eu, className: Y.Zg }),
                                (0, l.jsx)(E.E, {
                                    variant: "text-xs/medium",
                                    color: R ? void 0 : "text-muted",
                                    className: r()(Y.TW, { [Y.hn]: ev }),
                                    children: ea,
                                }),
                            ],
                        }),
                        (function () {
                            switch (X) {
                                case V.If.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: Y.ec,
                                        children: [
                                            (0, l.jsx)("div", { className: Y.LQ }),
                                            (0, l.jsxs)("div", {
                                                className: Y.O5,
                                                children: [
                                                    ek,
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
                                                    eN && eD,
                                                ],
                                            }),
                                        ],
                                    });
                                case V.If.NONE:
                                    return null;
                                case V.If.PLAY:
                                case V.If.SOUNDMOJI:
                                default:
                                    return eM && !ee
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: Y.LQ }),
                                                  eP(Y.B3),
                                                  (0, l.jsx)("div", {
                                                      className: Y.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: Y.O5,
                                                          children: [eN && ek, eN && eD],
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
                                                          X === V.If.SOUNDMOJI
                                                              ? (0, l.jsx)(N.Ay, {
                                                                    sound: f,
                                                                    channel: p,
                                                                    setTooltipShowing: eR,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [eN && ek, eP(), eN && eD],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !f.available &&
                (0, l.jsx)(d.m, {
                    text: Z.intl.string(Z.t.MDOXJR),
                    shouldShow: !eb,
                    children: (0, l.jsx)("div", {
                        className: Y.ET,
                        children: !ee && (0, l.jsxs)("div", { className: Y.ld, children: [ek, eD] }),
                    }),
                }),
            !0 === el && (0, l.jsx)(w, { sound: f, containerDimensions: eU, ref: ei }),
        ],
    });
});
