"use strict";
n.d(t, { dT: () => q, Ay: () => X });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(17928),
    u = n(451988),
    c = n(661531),
    d = n(990078),
    _ = n(939249),
    h = n(983851),
    f = n(27232),
    p = n(505930),
    E = n(782134),
    m = n(194261),
    g = n(307301),
    A = n(834730),
    I = n(890856),
    T = n(565645),
    S = n(775602),
    y = n(688810),
    C = n(21161),
    N = n(850992),
    v = n(319993),
    R = n(735438),
    O = n(835245),
    b = n(104142),
    D = n(407781),
    L = n(287809),
    w = n(194486),
    M = n(651175);
let P = r.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        a = (0, l.bG)([L.default], () => L.default.getCurrentUser()),
        o = (0, l.bG)([S.Ay], () => S.Ay.useReducedMotion),
        [u, c] = r.useState([]),
        d = u.length < 50,
        _ = n?.emojiId != null || n?.emojiName != null,
        h = r.useCallback(() => {
            if (!o && d && _ && null != a) {
                let e = (0, b.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    i = w.B.PREMIUM,
                    r = (0, R.random)(b.Bf[i].length, !1),
                    s = { id: (0, O.A)(), animationId: r, animationType: i, shouldResize: t, url: e, userId: a.id };
                c((e) => [...e, s]);
            }
        }, [o, d, _, a, n]);
    r.useImperativeHandle(t, () => ({ addAnimation: h }));
    let f = r.useCallback((e) => {
        c((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return o || !_
        ? null
        : (0, i.jsx)("div", {
              className: M.z,
              style: { width: s.width, height: s.height },
              children: u.map((e) => (0, i.jsx)(D.A, { containerDimensions: s, effect: e, onComplete: f }, e.id)),
          });
});
var x = n(885386),
    k = n(967198),
    U = n(174459),
    G = n(796774),
    F = n(209932),
    V = n(807348),
    B = n(813564),
    j = n(792348),
    H = n(496502),
    Y = n(652215),
    W = n(536283),
    K = n(257645),
    $ = n(375708),
    z = n(757718);
function q(e) {
    let { disabled: t = !1, onClick: n, text: r, children: s, tooltipPosition: o = "top", ref: l } = e;
    return (0, i.jsx)(d.m, {
        text: r,
        position: o,
        children: (0, i.jsx)(_.D, {
            innerRef: l,
            "aria-label": r,
            className: a()(z.zr, { [z.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function Z(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, y.Ay)(),
        o = (0, l.bG)([F.A], () => F.A.isFavoriteSound(t.soundId), [t.soundId]),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    o
                        ? (0, G.eS)(t.soundId)
                        : ((0, B.Ni)({ sound: t, location: { ...s, object: Y.ZSU.SOUNDBOARD_SOUND } }),
                          (0, G.Rp)(t.soundId));
            },
            [o, t, s],
        );
    return (0, i.jsx)(q, {
        disabled: n,
        onClick: u,
        text: $.intl.formatToPlainString(o ? $.t.lQLsjc : $.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: o
            ? (0, i.jsx)(f.G, { size: "xs", className: a()(z.Wo, z.gj), color: c.A.unsafe_rawColors.PLATFORM_GOLD.css })
            : (0, i.jsx)(p.y, { size: "xs", color: "currentColor", className: z.Wo }),
    });
}
let X = r.forwardRef(function (e, t) {
    var n, s, c;
    let _,
        {
            sound: f,
            channel: p,
            containerClassName: y,
            className: R,
            focused: O,
            forceSecondaryActions: b = !1,
            interactive: D = !0,
            enableSecondaryActions: w = !1,
            suppressPlaySound: M,
            onMouseEnter: G,
            onSelectItem: F,
            analyticsLocations: X,
            buttonOverlay: Q = V.If.PLAY,
            showLockForDisabledSound: J = !0,
            inNitroLockedSection: ee = !1,
            isAnimated: et = !0,
            isPlayingSoundOverride: en,
            isSoundmoji: ei,
            soundmojiVisualEffectRef: er,
            tooltipOverride: es,
            ...ea
        } = e,
        { name: eo, emojiId: el, emojiName: eu } = f,
        ec = (0, l.bG)([L.default], () => L.default.getCurrentUser()),
        ed = (0, H.v)(f, p?.guild_id),
        {
            playSoundboardSound: e_,
            previewSound: eh,
            isPlayingSound: ef,
        } = (0, j.A)(
            f,
            p?.id ?? null,
            (ei ? x.HO.getSetting() : x.dG.getSetting()?.volume) ?? 100,
            !ei && p?.isVocal() ? K.a.VOICE : K.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ep } = r.useContext(C.x),
        eE = r.useRef(null),
        em =
            ((n = f.soundId),
            (s = eE.current),
            r.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        eg = (0, l.bG)([S.Ay], () => S.Ay.useReducedMotion),
        eA = r.useRef(0.01),
        eI = r.useRef(new u.IX()),
        eT = "1" === f.soundId,
        eS = `sound-${f.soundId}`,
        ey = (0, o.rm)(eS),
        eC = null != el || null != eu,
        eN = !(0, B.Ir)(ec, f, p) && !ei,
        ev = b || (w && !eN),
        eR = N.LW.useStore().bottomPosition ?? 0,
        eO = eE.current?.getBoundingClientRect().bottom ?? 0,
        [eb, eD] = r.useState(!1),
        eL = r.useCallback(() => {
            eD(!0);
        }, []),
        ew = r.useCallback(() => {
            eD(!1);
        }, []),
        eM = eN && J;
    function eP(e) {
        (eT &&
            !eg &&
            ((eA.current = Math.min(eA.current + 0.01, 0.1)),
            Math.random() < eA.current && ep(em.x, em.y, void 0, void 0, { sprite: W.dR })),
        null != F)
            ? F(e)
            : M || e_(X);
    }
    let ex = (0, i.jsx)("div", {
        onMouseEnter: eL,
        onMouseLeave: ew,
        children: (function (e) {
            let { sound: t, previewSound: n, disabled: r = !1, tooltipPosition: s = "top" } = e,
                a = (0, l.bG)([k.A], () => k.A.getGuildId());
            return (0, i.jsx)(q, {
                tooltipPosition: s,
                disabled: r,
                onClick: function (e) {
                    U.default.track(Y.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                        sound_id: t.soundId,
                        sound_name: t.name,
                        sound_guild_id: t.guildId,
                        location_guild_id: a,
                    }),
                        e.stopPropagation(),
                        e.currentTarget.blur(),
                        n();
                },
                text: $.intl.formatToPlainString($.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
                children: (0, i.jsx)(h.H, { size: "md", color: "currentColor", className: z.Wo }),
            });
        })({ sound: f, previewSound: eh, disabled: eN && !b }),
    });
    function ek(e) {
        return M || eN
            ? eM
                ? (0, i.jsx)(m.X, { size: "xs", color: "currentColor", className: a()(z.C4, z.hz, e, { [z.hn]: eC }) })
                : null
            : (0, i.jsx)(E.u, { size: "xs", color: "currentColor", className: a()(z.C4, e) });
    }
    let eU = (0, i.jsx)("div", {
        onMouseEnter: eL,
        onMouseLeave: ew,
        children: (0, i.jsx)(Z, { sound: f, disabled: !D && !b }),
    });
    r.useEffect(() => {
        let e = eI.current;
        return (
            eT &&
                e.start(1e3, () => {
                    eA.current = Math.max(eA.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eT]);
    let eG =
        ((c = eE.current),
        null == (_ = c?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: _.width, height: _.height });
    return (0, i.jsxs)("li", {
        ref: t,
        className: a()(z.H, y),
        onMouseEnter: G,
        children: [
            (0, i.jsx)(d.m, {
                "aria-label": null != es ? f.name : void 0,
                __unsupportedReactNodeAsText: es ?? f.name,
                position: eO + 50 > eR ? "top" : "bottom",
                shouldShow: !eb,
                delay: 500,
                children: (0, i.jsxs)(I.s, {
                    ...ea,
                    buttonProps: { ...ey, id: eS, role: "button" },
                    "aria-label": $.intl.formatToPlainString($.t.tuMUJ2, { emojiName: f.emojiName, soundName: f.name }),
                    className: a()(
                        z.aG,
                        {
                            [z.CS]: et,
                            [z.he]: en ?? ef,
                            [z.ju]: M,
                            [z.wT]: D,
                            [z.$9]: !D && !b,
                            [z.Au]: eN && !b,
                            [z.fx]: !D && b,
                            [z.in]: D && O,
                        },
                        R,
                    ),
                    onClick: (e) => {
                        eP?.(e);
                    },
                    onContextMenu: w && !eN ? ed : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(z.KM, { [z.hn]: eC }),
                            "aria-hidden": !0,
                            ref: eE,
                            children: [
                                eC && (0, i.jsx)(T.A, { emojiId: el, emojiName: eu, className: z.Zg }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: D ? void 0 : "text-muted",
                                    className: a()(z.TW, { [z.hn]: eC }),
                                    children: eo,
                                }),
                            ],
                        }),
                        (function () {
                            switch (Q) {
                                case V.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: z.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: z.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: z.O5,
                                                children: [
                                                    ex,
                                                    (0, i.jsxs)("div", {
                                                        className: z.c9,
                                                        children: [
                                                            (0, i.jsx)(g.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: z.y_,
                                                            }),
                                                            (0, i.jsx)(A.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: $.intl.string($.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    ev && eU,
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
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: z.LQ }),
                                                  ek(z.B3),
                                                  (0, i.jsx)("div", {
                                                      className: z.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: z.O5,
                                                          children: [ev && ex, ev && eU],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: z.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: a()({ [z.LQ]: !M }) }),
                                                  (0, i.jsx)("div", {
                                                      className: z.O5,
                                                      children:
                                                          Q === V.If.SOUNDMOJI
                                                              ? (0, i.jsx)(v.Ay, {
                                                                    sound: f,
                                                                    channel: p,
                                                                    setTooltipShowing: eD,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [ev && ex, ek(), ev && eU],
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
                (0, i.jsx)(d.m, {
                    text: $.intl.string($.t.MDOXJR),
                    shouldShow: !eb,
                    children: (0, i.jsx)("div", {
                        className: z.ET,
                        children: !ee && (0, i.jsxs)("div", { className: z.ld, children: [ex, eU] }),
                    }),
                }),
            !0 === ei && (0, i.jsx)(P, { sound: f, containerDimensions: eG, ref: er }),
        ],
    });
});
