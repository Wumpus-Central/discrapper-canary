"use strict";
n.d(t, { dT: () => q, Ay: () => Z });
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
    f = n(983851),
    h = n(27232),
    p = n(505930),
    E = n(782134),
    m = n(194261),
    g = n(307301),
    A = n(834730),
    I = n(890856),
    T = n(565645),
    S = n(775602),
    N = n(688810),
    y = n(21161),
    C = n(850992),
    v = n(319993),
    O = n(735438),
    R = n(835245),
    b = n(104142),
    D = n(407781),
    L = n(287809),
    w = n(194486),
    M = n(651175);
let P = r.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        a = (0, l.bG)([L.default], () => L.default.getCurrentUser()),
        o = (0, l.bG)([S.A], () => S.A.useReducedMotion),
        [u, c] = r.useState([]),
        d = u.length < 50,
        _ = n?.emojiId != null || n?.emojiName != null,
        f = r.useCallback(() => {
            if (!o && d && _ && null != a) {
                let e = (0, b.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    i = w.B.PREMIUM,
                    r = (0, O.random)(b.Bf[i].length, !1),
                    s = { id: (0, R.A)(), animationId: r, animationType: i, shouldResize: t, url: e, userId: a.id };
                c((e) => [...e, s]);
            }
        }, [o, d, _, a, n]);
    r.useImperativeHandle(t, () => ({ addAnimation: f }));
    let h = r.useCallback((e) => {
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
              children: u.map((e) => (0, i.jsx)(D.A, { containerDimensions: s, effect: e, onComplete: h }, e.id)),
          });
});
var x = n(885386),
    U = n(967198),
    k = n(174459),
    G = n(796774),
    F = n(209932),
    V = n(807348),
    B = n(813564),
    H = n(792348),
    j = n(496502),
    Y = n(652215),
    W = n(536283),
    K = n(257645),
    z = n(375708),
    $ = n(757718);
function q(e) {
    let { disabled: t = !1, onClick: n, text: r, children: s, tooltipPosition: o = "top", ref: l } = e;
    return (0, i.jsx)(d.m, {
        text: r,
        position: o,
        children: (0, i.jsx)(_.D, {
            innerRef: l,
            "aria-label": r,
            className: a()($.zr, { [$.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function X(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, N.Ay)(),
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
        text: z.intl.formatToPlainString(o ? z.t.lQLsjc : z.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: o
            ? (0, i.jsx)(h.G, { size: "xs", className: a()($.Wo, $.gj), color: c.A.unsafe_rawColors.PLATFORM_GOLD.css })
            : (0, i.jsx)(p.y, { size: "xs", color: "currentColor", className: $.Wo }),
    });
}
let Z = r.forwardRef(function (e, t) {
    var n, s, c;
    let _,
        {
            sound: h,
            channel: p,
            containerClassName: N,
            className: O,
            focused: R,
            forceSecondaryActions: b = !1,
            interactive: D = !0,
            enableSecondaryActions: w = !1,
            suppressPlaySound: M,
            onMouseEnter: G,
            onSelectItem: F,
            analyticsLocations: Z,
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
        { name: eo, emojiId: el, emojiName: eu } = h,
        ec = (0, l.bG)([L.default], () => L.default.getCurrentUser()),
        ed = (0, j.v)(h, p?.guild_id),
        {
            playSoundboardSound: e_,
            previewSound: ef,
            isPlayingSound: eh,
        } = (0, H.A)(
            h,
            p?.id ?? null,
            (ei ? x.HO.getSetting() : x.dG.getSetting()?.volume) ?? 100,
            !ei && p?.isVocal() ? K.a.VOICE : K.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ep } = r.useContext(y.x),
        eE = r.useRef(null),
        em =
            ((n = h.soundId),
            (s = eE.current),
            r.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        eg = (0, l.bG)([S.A], () => S.A.useReducedMotion),
        eA = r.useRef(0.01),
        eI = r.useRef(new u.IX()),
        eT = "1" === h.soundId,
        eS = `sound-${h.soundId}`,
        eN = (0, o.rm)(eS),
        ey = null != el || null != eu,
        eC = !(0, B.Ir)(ec, h, p) && !ei,
        ev = b || (w && !eC),
        eO = C.LW.useStore().bottomPosition ?? 0,
        eR = eE.current?.getBoundingClientRect().bottom ?? 0,
        [eb, eD] = r.useState(!1),
        eL = r.useCallback(() => {
            eD(!0);
        }, []),
        ew = r.useCallback(() => {
            eD(!1);
        }, []),
        eM = eC && J;
    function eP(e) {
        (eT &&
            !eg &&
            ((eA.current = Math.min(eA.current + 0.01, 0.1)),
            Math.random() < eA.current && ep(em.x, em.y, void 0, void 0, { sprite: W.dR })),
        null != F)
            ? F(e)
            : M || e_(Z);
    }
    let ex = (0, i.jsx)("div", {
            onMouseEnter: eL,
            onMouseLeave: ew,
            children: (function (e) {
                let { sound: t, previewSound: n, disabled: r = !1, tooltipPosition: s = "top" } = e,
                    a = (0, l.bG)([U.A], () => U.A.getGuildId());
                return (0, i.jsx)(q, {
                    tooltipPosition: s,
                    disabled: r,
                    onClick: function (e) {
                        k.default.track(Y.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                            sound_id: t.soundId,
                            sound_name: t.name,
                            sound_guild_id: t.guildId,
                            location_guild_id: a,
                        }),
                            e.stopPropagation(),
                            e.currentTarget.blur(),
                            n();
                    },
                    text: z.intl.formatToPlainString(z.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
                    children: (0, i.jsx)(f.H, { size: "md", color: "currentColor", className: $.Wo }),
                });
            })({ sound: h, previewSound: ef, disabled: eC && !b }),
        }),
        eU = (e) =>
            M || eC
                ? eM
                    ? (0, i.jsx)(m.X, {
                          size: "xs",
                          color: "currentColor",
                          className: a()($.C4, $.hz, e, { [$.hn]: ey }),
                      })
                    : null
                : (0, i.jsx)(E.u, { size: "xs", color: "currentColor", className: a()($.C4, e) }),
        ek = (0, i.jsx)("div", {
            onMouseEnter: eL,
            onMouseLeave: ew,
            children: (0, i.jsx)(X, { sound: h, disabled: !D && !b }),
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
        className: a()($.H, N),
        onMouseEnter: G,
        children: [
            (0, i.jsx)(d.m, {
                "aria-label": null != es ? h.name : void 0,
                __unsupportedReactNodeAsText: es ?? h.name,
                position: eR + 50 > eO ? "top" : "bottom",
                shouldShow: !eb,
                delay: 500,
                children: (0, i.jsxs)(I.s, {
                    ...ea,
                    buttonProps: { ...eN, id: eS, role: "button" },
                    "aria-label": z.intl.formatToPlainString(z.t.tuMUJ2, { emojiName: h.emojiName, soundName: h.name }),
                    className: a()(
                        $.aG,
                        {
                            [$.CS]: et,
                            [$.he]: en ?? eh,
                            [$.ju]: M,
                            [$.wT]: D,
                            [$.$9]: !D && !b,
                            [$.Au]: eC && !b,
                            [$.fx]: !D && b,
                            [$.in]: D && R,
                        },
                        O,
                    ),
                    onClick: (e) => {
                        eP?.(e);
                    },
                    onContextMenu: w && !eC ? ed : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()($.KM, { [$.hn]: ey }),
                            "aria-hidden": !0,
                            ref: eE,
                            children: [
                                ey && (0, i.jsx)(T.A, { emojiId: el, emojiName: eu, className: $.Zg }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: D ? void 0 : "text-muted",
                                    className: a()($.TW, { [$.hn]: ey }),
                                    children: eo,
                                }),
                            ],
                        }),
                        (function () {
                            switch (Q) {
                                case V.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: $.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: $.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: $.O5,
                                                children: [
                                                    ex,
                                                    (0, i.jsxs)("div", {
                                                        className: $.c9,
                                                        children: [
                                                            (0, i.jsx)(g.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: $.y_,
                                                            }),
                                                            (0, i.jsx)(A.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: z.intl.string(z.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    ev && ek,
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
                                                  (0, i.jsx)("div", { className: $.LQ }),
                                                  eU($.B3),
                                                  (0, i.jsx)("div", {
                                                      className: $.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: $.O5,
                                                          children: [ev && ex, ev && ek],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: $.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: a()({ [$.LQ]: !M }) }),
                                                  (0, i.jsx)("div", {
                                                      className: $.O5,
                                                      children:
                                                          Q === V.If.SOUNDMOJI
                                                              ? (0, i.jsx)(v.Ay, {
                                                                    sound: h,
                                                                    channel: p,
                                                                    setTooltipShowing: eD,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [ev && ex, eU(), ev && ek],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !h.available &&
                (0, i.jsx)(d.m, {
                    text: z.intl.string(z.t.MDOXJR),
                    shouldShow: !eb,
                    children: (0, i.jsx)("div", {
                        className: $.ET,
                        children: !ee && (0, i.jsxs)("div", { className: $.ld, children: [ex, ek] }),
                    }),
                }),
            !0 === ei && (0, i.jsx)(P, { sound: h, containerDimensions: eG, ref: er }),
        ],
    });
});
