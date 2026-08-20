"use strict";
n.d(t, { dT: () => q, Ay: () => $ });
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
    C = n(834730),
    E = n(890856),
    I = n(565645),
    y = n(775602),
    v = n(688810),
    S = n(21161),
    N = n(850992),
    _ = n(319993),
    T = n(435558),
    j = n(132500),
    b = n(104142),
    R = n(407781),
    O = n(287809),
    M = n(194486),
    L = n(178226);
let w = i.forwardRef(function (e, t) {
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
function J(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, v.Ay)(),
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
let $ = i.forwardRef(function (e, t) {
    var n, s, c;
    let h,
        {
            sound: f,
            channel: p,
            containerClassName: v,
            className: T,
            focused: j,
            forceSecondaryActions: b = !1,
            interactive: R = !0,
            enableSecondaryActions: M = !1,
            suppressPlaySound: L,
            onMouseEnter: U,
            onSelectItem: G,
            analyticsLocations: $,
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
        ec = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
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
        { createMultipleConfettiAt: ep } = i.useContext(S.x),
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
        eC = i.useRef(0.01),
        eE = i.useRef(new u.IX()),
        eI = "1" === f.soundId,
        ey = `sound-${f.soundId}`,
        ev = (0, a.rm)(ey),
        eS = null != eo || null != eu,
        eN = !(0, F.Ir)(ec, f, p) && !el,
        e_ = b || (M && !eN),
        eT = N.LW.useStore().bottomPosition ?? 0,
        ej = eg.current?.getBoundingClientRect().bottom ?? 0,
        [eb, eR] = i.useState(!1),
        eO = i.useCallback(() => {
            eR(!0);
        }, []),
        eM = i.useCallback(() => {
            eR(!1);
        }, []),
        eL = eN && Q;
    function ew(e) {
        (eI &&
            !eA &&
            ((eC.current = Math.min(eC.current + 0.01, 0.1)),
            Math.random() < eC.current && ep(ex.x, ex.y, void 0, void 0, { sprite: K.dR })),
        null != G)
            ? G(e)
            : L || eh($);
    }
    let ek = (0, l.jsx)("div", {
        onMouseEnter: eO,
        onMouseLeave: eM,
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
        })({ sound: f, previewSound: em, disabled: eN && !b }),
    });
    function eP(e) {
        return L || eN
            ? eL
                ? (0, l.jsx)(x.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: r()(Y.C4, Y.hz, e, { [Y.hn]: eS }),
                  })
                : null
            : (0, l.jsx)(g.PlayIcon, { size: "xs", color: "currentColor", className: r()(Y.C4, e) });
    }
    let eD = (0, l.jsx)("div", {
        onMouseEnter: eO,
        onMouseLeave: eM,
        children: (0, l.jsx)(J, { sound: f, disabled: !R && !b }),
    });
    i.useEffect(() => {
        let e = eE.current;
        return (
            eI &&
                e.start(1e3, () => {
                    eC.current = Math.max(eC.current - 0.01, 0.01);
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
        className: r()(Y.H, v),
        onMouseEnter: U,
        children: [
            (0, l.jsx)(d.m, {
                "aria-label": null != es ? f.name : void 0,
                __unsupportedReactNodeAsText: es ?? f.name,
                position: ej + 50 > eT ? "top" : "bottom",
                shouldShow: !eb,
                delay: 500,
                children: (0, l.jsxs)(E.s, {
                    ...er,
                    buttonProps: { ...ev, id: ey, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: f.emojiName, soundName: f.name }),
                    className: r()(
                        Y.aG,
                        {
                            [Y.CS]: et,
                            [Y.he]: en ?? ef,
                            [Y.ju]: L,
                            [Y.wT]: R,
                            [Y.$9]: !R && !b,
                            [Y.Au]: eN && !b,
                            [Y.fx]: !R && b,
                            [Y.in]: R && j,
                        },
                        T,
                    ),
                    onClick: (e) => {
                        ew?.(e);
                    },
                    onContextMenu: M && !eN ? ed : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: r()(Y.KM, { [Y.hn]: eS }),
                            "aria-hidden": !0,
                            ref: eg,
                            children: [
                                eS && (0, l.jsx)(I.A, { emojiId: eo, emojiName: eu, className: Y.Zg }),
                                (0, l.jsx)(C.E, {
                                    variant: "text-xs/medium",
                                    color: R ? void 0 : "text-muted",
                                    className: r()(Y.TW, { [Y.hn]: eS }),
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
                                                            (0, l.jsx)(C.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: Z.intl.string(Z.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    e_ && eD,
                                                ],
                                            }),
                                        ],
                                    });
                                case V.If.NONE:
                                    return null;
                                case V.If.PLAY:
                                case V.If.SOUNDMOJI:
                                default:
                                    return eL && !ee
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: Y.LQ }),
                                                  eP(Y.B3),
                                                  (0, l.jsx)("div", {
                                                      className: Y.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: Y.O5,
                                                          children: [e_ && ek, e_ && eD],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: Y.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: r()({ [Y.LQ]: !L }) }),
                                                  (0, l.jsx)("div", {
                                                      className: Y.O5,
                                                      children:
                                                          X === V.If.SOUNDMOJI
                                                              ? (0, l.jsx)(_.Ay, {
                                                                    sound: f,
                                                                    channel: p,
                                                                    setTooltipShowing: eR,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [e_ && ek, eP(), e_ && eD],
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
