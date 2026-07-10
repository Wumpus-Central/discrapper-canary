"use strict";
n.d(t, { dT: () => q, Ay: () => X });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(17928),
    d = n(451988),
    c = n(661531),
    u = n(990078),
    _ = n(939249),
    E = n(983851),
    A = n(27232),
    h = n(505930),
    I = n(782134),
    f = n(194261),
    p = n(307301),
    T = n(834730),
    m = n(890856),
    g = n(565645),
    S = n(775602),
    N = n(688810),
    C = n(21161),
    R = n(850992),
    O = n(319993),
    L = n(735438),
    D = n(132500),
    y = n(104142),
    v = n(407781),
    b = n(287809),
    M = n(194486),
    P = n(651175);
let U = r.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: a } = e,
        s = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        l = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
        [d, c] = r.useState([]),
        u = d.length < 50,
        _ = n?.emojiId != null || n?.emojiName != null,
        E = r.useCallback(() => {
            if (!l && u && _ && null != s) {
                let e = (0, y.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    i = M.B.PREMIUM,
                    r = (0, L.random)(y.Bf[i].length, !1),
                    a = { id: (0, D.A)(), animationId: r, animationType: i, shouldResize: t, url: e, userId: s.id };
                c((e) => [...e, a]);
            }
        }, [l, u, _, s, n]);
    r.useImperativeHandle(t, () => ({ addAnimation: E }));
    let A = r.useCallback((e) => {
        c((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return l || !_
        ? null
        : (0, i.jsx)("div", {
              className: P.z,
              style: { width: a.width, height: a.height },
              children: d.map((e) => (0, i.jsx)(v.A, { containerDimensions: a, effect: e, onComplete: A }, e.id)),
          });
});
var w = n(885386),
    G = n(967198),
    x = n(174459),
    k = n(796774),
    F = n(209932),
    V = n(807348),
    B = n(813564),
    H = n(792348),
    j = n(496502),
    W = n(652215),
    Y = n(536283),
    K = n(257645),
    $ = n(375708),
    z = n(757718);
function q(e) {
    let { disabled: t = !1, onClick: n, text: r, children: a, tooltipPosition: l = "top", ref: o } = e;
    return (0, i.jsx)(u.m, {
        text: r,
        position: l,
        children: (0, i.jsx)(_.D, {
            innerRef: o,
            "aria-label": r,
            className: s()(z.zr, { [z.$9]: t }),
            onClick: n,
            children: a,
        }),
    });
}
function Z(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: a } = (0, N.Ay)(),
        l = (0, o.bG)([F.A], () => F.A.isFavoriteSound(t.soundId), [t.soundId]),
        d = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    l
                        ? (0, k.eS)(t.soundId)
                        : ((0, B.Ni)({ sound: t, location: { ...a, object: W.ZSU.SOUNDBOARD_SOUND } }),
                          (0, k.Rp)(t.soundId));
            },
            [l, t, a],
        );
    return (0, i.jsx)(q, {
        disabled: n,
        onClick: d,
        text: $.intl.formatToPlainString(l ? $.t.lQLsjc : $.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: l
            ? (0, i.jsx)(A.G, { size: "xs", className: s()(z.Wo, z.gj), color: c.A.unsafe_rawColors.PLATFORM_GOLD.css })
            : (0, i.jsx)(h.y, { size: "xs", color: "currentColor", className: z.Wo }),
    });
}
let X = r.forwardRef(function (e, t) {
    var n, a, c;
    let _,
        {
            sound: A,
            channel: h,
            containerClassName: N,
            className: L,
            focused: D,
            forceSecondaryActions: y = !1,
            interactive: v = !0,
            enableSecondaryActions: M = !1,
            suppressPlaySound: P,
            onMouseEnter: k,
            onSelectItem: F,
            analyticsLocations: X,
            buttonOverlay: Q = V.If.PLAY,
            showLockForDisabledSound: J = !0,
            inNitroLockedSection: ee = !1,
            isAnimated: et = !0,
            isPlayingSoundOverride: en,
            isSoundmoji: ei,
            soundmojiVisualEffectRef: er,
            tooltipOverride: ea,
            ...es
        } = e,
        { name: el, emojiId: eo, emojiName: ed } = A,
        ec = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        eu = (0, j.v)(A, h?.guild_id),
        {
            playSoundboardSound: e_,
            previewSound: eE,
            isPlayingSound: eA,
        } = (0, H.A)(
            A,
            h?.id ?? null,
            (ei ? w.HO.getSetting() : w.dG.getSetting()?.volume) ?? 100,
            !ei && h?.isVocal() ? K.a.VOICE : K.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eh } = r.useContext(C.x),
        eI = r.useRef(null),
        ef =
            ((n = A.soundId),
            (a = eI.current),
            r.useMemo(() => {
                if (null == a || "1" !== n) return { x: 0, y: 0 };
                let e = a.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [a, n])),
        ep = (0, o.bG)([S.Ay], () => S.Ay.useReducedMotion),
        eT = r.useRef(0.01),
        em = r.useRef(new d.IX()),
        eg = "1" === A.soundId,
        eS = `sound-${A.soundId}`,
        eN = (0, l.rm)(eS),
        eC = null != eo || null != ed,
        eR = !(0, B.Ir)(ec, A, h) && !ei,
        eO = y || (M && !eR),
        eL = R.LW.useStore().bottomPosition ?? 0,
        eD = eI.current?.getBoundingClientRect().bottom ?? 0,
        [ey, ev] = r.useState(!1),
        eb = r.useCallback(() => {
            ev(!0);
        }, []),
        eM = r.useCallback(() => {
            ev(!1);
        }, []),
        eP = eR && J;
    function eU(e) {
        (eg &&
            !ep &&
            ((eT.current = Math.min(eT.current + 0.01, 0.1)),
            Math.random() < eT.current && eh(ef.x, ef.y, void 0, void 0, { sprite: Y.dR })),
        null != F)
            ? F(e)
            : P || e_(X);
    }
    let ew = (0, i.jsx)("div", {
        onMouseEnter: eb,
        onMouseLeave: eM,
        children: (function (e) {
            let { sound: t, previewSound: n, disabled: r = !1, tooltipPosition: a = "top" } = e,
                s = (0, o.bG)([G.A], () => G.A.getGuildId());
            return (0, i.jsx)(q, {
                tooltipPosition: a,
                disabled: r,
                onClick: function (e) {
                    x.default.track(W.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                        sound_id: t.soundId,
                        sound_name: t.name,
                        sound_guild_id: t.guildId,
                        location_guild_id: s,
                    }),
                        e.stopPropagation(),
                        e.currentTarget.blur(),
                        n();
                },
                text: $.intl.formatToPlainString($.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
                children: (0, i.jsx)(E.H, { size: "md", color: "currentColor", className: z.Wo }),
            });
        })({ sound: A, previewSound: eE, disabled: eR && !y }),
    });
    function eG(e) {
        return P || eR
            ? eP
                ? (0, i.jsx)(f.X, { size: "xs", color: "currentColor", className: s()(z.C4, z.hz, e, { [z.hn]: eC }) })
                : null
            : (0, i.jsx)(I.u, { size: "xs", color: "currentColor", className: s()(z.C4, e) });
    }
    let ex = (0, i.jsx)("div", {
        onMouseEnter: eb,
        onMouseLeave: eM,
        children: (0, i.jsx)(Z, { sound: A, disabled: !v && !y }),
    });
    r.useEffect(() => {
        let e = em.current;
        return (
            eg &&
                e.start(1e3, () => {
                    eT.current = Math.max(eT.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eg]);
    let ek =
        ((c = eI.current),
        null == (_ = c?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: _.width, height: _.height });
    return (0, i.jsxs)("li", {
        ref: t,
        className: s()(z.H, N),
        onMouseEnter: k,
        children: [
            (0, i.jsx)(u.m, {
                "aria-label": null != ea ? A.name : void 0,
                __unsupportedReactNodeAsText: ea ?? A.name,
                position: eD + 50 > eL ? "top" : "bottom",
                shouldShow: !ey,
                delay: 500,
                children: (0, i.jsxs)(m.s, {
                    ...es,
                    buttonProps: { ...eN, id: eS, role: "button" },
                    "aria-label": $.intl.formatToPlainString($.t.tuMUJ2, { emojiName: A.emojiName, soundName: A.name }),
                    className: s()(
                        z.aG,
                        {
                            [z.CS]: et,
                            [z.he]: en ?? eA,
                            [z.ju]: P,
                            [z.wT]: v,
                            [z.$9]: !v && !y,
                            [z.Au]: eR && !y,
                            [z.fx]: !v && y,
                            [z.in]: v && D,
                        },
                        L,
                    ),
                    onClick: (e) => {
                        eU?.(e);
                    },
                    onContextMenu: M && !eR ? eu : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(z.KM, { [z.hn]: eC }),
                            "aria-hidden": !0,
                            ref: eI,
                            children: [
                                eC && (0, i.jsx)(g.A, { emojiId: eo, emojiName: ed, className: z.Zg }),
                                (0, i.jsx)(T.E, {
                                    variant: "text-xs/medium",
                                    color: v ? void 0 : "text-muted",
                                    className: s()(z.TW, { [z.hn]: eC }),
                                    children: el,
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
                                                    ew,
                                                    (0, i.jsxs)("div", {
                                                        className: z.c9,
                                                        children: [
                                                            (0, i.jsx)(p.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: z.y_,
                                                            }),
                                                            (0, i.jsx)(T.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: $.intl.string($.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eO && ex,
                                                ],
                                            }),
                                        ],
                                    });
                                case V.If.NONE:
                                    return null;
                                case V.If.PLAY:
                                case V.If.SOUNDMOJI:
                                default:
                                    return eP && !ee
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: z.LQ }),
                                                  eG(z.B3),
                                                  (0, i.jsx)("div", {
                                                      className: z.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: z.O5,
                                                          children: [eO && ew, eO && ex],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: z.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: s()({ [z.LQ]: !P }) }),
                                                  (0, i.jsx)("div", {
                                                      className: z.O5,
                                                      children:
                                                          Q === V.If.SOUNDMOJI
                                                              ? (0, i.jsx)(O.Ay, {
                                                                    sound: A,
                                                                    channel: h,
                                                                    setTooltipShowing: ev,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [eO && ew, eG(), eO && ex],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !A.available &&
                (0, i.jsx)(u.m, {
                    text: $.intl.string($.t.MDOXJR),
                    shouldShow: !ey,
                    children: (0, i.jsx)("div", {
                        className: z.ET,
                        children: !ee && (0, i.jsxs)("div", { className: z.ld, children: [ew, ex] }),
                    }),
                }),
            !0 === ei && (0, i.jsx)(U, { sound: A, containerDimensions: ek, ref: er }),
        ],
    });
});
