"use strict";
n.d(t, { dT: () => q, Ay: () => Z });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(17928),
    d = n(451988),
    _ = n(661531),
    u = n(990078),
    c = n(939249),
    E = n(983851),
    h = n(27232),
    m = n(505930),
    f = n(782134),
    g = n(194261),
    p = n(307301),
    A = n(834730),
    I = n(890856),
    T = n(565645),
    S = n(775602),
    N = n(688810),
    C = n(21161),
    R = n(850992),
    O = n(320572),
    y = n(735438),
    v = n(132500),
    D = n(104142),
    L = n(407781),
    b = n(287809),
    w = n(194486),
    P = n(651175);
let k = r.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        a = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
        o = (0, l.bG)([S.A], () => S.A.useReducedMotion),
        [d, _] = r.useState([]),
        u = d.length < 50,
        c = n?.emojiId != null || n?.emojiName != null,
        E = r.useCallback(() => {
            if (!o && u && c && null != a) {
                let e = (0, D.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    i = w.B.PREMIUM,
                    r = (0, y.random)(D.Bf[i].length, !1),
                    s = { id: (0, v.A)(), animationId: r, animationType: i, shouldResize: t, url: e, userId: a.id };
                _((e) => [...e, s]);
            }
        }, [o, u, c, a, n]);
    r.useImperativeHandle(t, () => ({ addAnimation: E }));
    let h = r.useCallback((e) => {
        _((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return o || !c
        ? null
        : (0, i.jsx)("div", {
              className: P.z,
              style: { width: s.width, height: s.height },
              children: d.map((e) => (0, i.jsx)(L.A, { containerDimensions: s, effect: e, onComplete: h }, e.id)),
          });
});
var M = n(253932),
    U = n(967198),
    x = n(954571),
    G = n(796774),
    V = n(209932),
    F = n(807348),
    B = n(536432),
    H = n(792348),
    j = n(496502),
    W = n(652215),
    Y = n(851110),
    K = n(257645),
    z = n(985018),
    $ = n(757718);
function q(e) {
    let { disabled: t = !1, onClick: n, text: r, children: s, tooltipPosition: o = "top", ref: l } = e;
    return (0, i.jsx)(u.m, {
        text: r,
        position: o,
        children: (0, i.jsx)(c.D, {
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
        o = (0, l.bG)([V.A], () => V.A.isFavoriteSound(t.soundId), [t.soundId]),
        d = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    o
                        ? (0, G.eS)(t.soundId)
                        : ((0, B.Ni)({ sound: t, location: { ...s, object: W.ZSU.SOUNDBOARD_SOUND } }),
                          (0, G.Rp)(t.soundId));
            },
            [o, t, s],
        );
    return (0, i.jsx)(q, {
        disabled: n,
        onClick: d,
        text: z.intl.formatToPlainString(o ? z.t.lQLsjc : z.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: o
            ? (0, i.jsx)(h.G, { size: "xs", className: a()($.Wo, $.gj), color: _.A.unsafe_rawColors.PLATFORM_GOLD.css })
            : (0, i.jsx)(m.y, { size: "xs", color: "currentColor", className: $.Wo }),
    });
}
let Z = r.forwardRef(function (e, t) {
    var n, s, _;
    let c,
        {
            sound: h,
            channel: m,
            containerClassName: N,
            className: y,
            focused: v,
            forceSecondaryActions: D = !1,
            interactive: L = !0,
            enableSecondaryActions: w = !1,
            suppressPlaySound: P,
            onMouseEnter: G,
            onSelectItem: V,
            analyticsLocations: Z,
            buttonOverlay: Q = F.If.PLAY,
            showLockForDisabledSound: J = !0,
            inNitroLockedSection: ee = !1,
            isAnimated: et = !0,
            isPlayingSoundOverride: en,
            isSoundmoji: ei,
            soundmojiVisualEffectRef: er,
            tooltipOverride: es,
            ...ea
        } = e,
        { name: eo, emojiId: el, emojiName: ed } = h,
        e_ = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
        eu = (0, j.v)(h, m?.guild_id),
        {
            playSoundboardSound: ec,
            previewSound: eE,
            isPlayingSound: eh,
        } = (0, H.A)(
            h,
            m?.id ?? null,
            (ei ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !ei && m?.isVocal() ? K.a.VOICE : K.a.DEFAULT,
        ),
        { createMultipleConfettiAt: em } = r.useContext(C.x),
        ef = r.useRef(null),
        eg =
            ((n = h.soundId),
            (s = ef.current),
            r.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        ep = (0, l.bG)([S.A], () => S.A.useReducedMotion),
        eA = r.useRef(0.01),
        eI = r.useRef(new d.IX()),
        eT = "1" === h.soundId,
        eS = `sound-${h.soundId}`,
        eN = (0, o.rm)(eS),
        eC = null != el || null != ed,
        eR = !(0, B.Ir)(e_, h, m) && !ei,
        eO = D || (w && !eR),
        ey = R.LW.useStore().bottomPosition ?? 0,
        ev = ef.current?.getBoundingClientRect().bottom ?? 0,
        [eD, eL] = r.useState(!1),
        eb = r.useCallback(() => {
            eL(!0);
        }, []),
        ew = r.useCallback(() => {
            eL(!1);
        }, []),
        eP = eR && J;
    function ek(e) {
        (eT &&
            !ep &&
            ((eA.current = Math.min(eA.current + 0.01, 0.1)),
            Math.random() < eA.current && em(eg.x, eg.y, void 0, void 0, { sprite: Y.dR })),
        null != V)
            ? V(e)
            : P || ec(Z);
    }
    let eM = (0, i.jsx)("div", {
            onMouseEnter: eb,
            onMouseLeave: ew,
            children: (function (e) {
                let { sound: t, previewSound: n, disabled: r = !1, tooltipPosition: s = "top" } = e,
                    a = (0, l.bG)([U.A], () => U.A.getGuildId());
                return (0, i.jsx)(q, {
                    tooltipPosition: s,
                    disabled: r,
                    onClick: function (e) {
                        x.default.track(W.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
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
                    children: (0, i.jsx)(E.H, { size: "md", color: "currentColor", className: $.Wo }),
                });
            })({ sound: h, previewSound: eE, disabled: eR && !D }),
        }),
        eU = (e) =>
            P || eR
                ? eP
                    ? (0, i.jsx)(g.X, {
                          size: "xs",
                          color: "currentColor",
                          className: a()($.C4, $.hz, e, { [$.hn]: eC }),
                      })
                    : null
                : (0, i.jsx)(f.u, { size: "xs", color: "currentColor", className: a()($.C4, e) }),
        ex = (0, i.jsx)("div", {
            onMouseEnter: eb,
            onMouseLeave: ew,
            children: (0, i.jsx)(X, { sound: h, disabled: !L && !D }),
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
        ((_ = ef.current),
        null == (c = _?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: c.width, height: c.height });
    return (0, i.jsxs)("li", {
        ref: t,
        className: a()($.H, N),
        onMouseEnter: G,
        children: [
            (0, i.jsx)(u.m, {
                "aria-label": null != es ? h.name : void 0,
                __unsupportedReactNodeAsText: es ?? h.name,
                position: ev + 50 > ey ? "top" : "bottom",
                shouldShow: !eD,
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
                            [$.ju]: P,
                            [$.wT]: L,
                            [$.$9]: !L && !D,
                            [$.Au]: eR && !D,
                            [$.fx]: !L && D,
                            [$.in]: L && v,
                        },
                        y,
                    ),
                    onClick: (e) => {
                        ek?.(e);
                    },
                    onContextMenu: w && !eR ? eu : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()($.KM, { [$.hn]: eC }),
                            "aria-hidden": !0,
                            ref: ef,
                            children: [
                                eC && (0, i.jsx)(T.A, { emojiId: el, emojiName: ed, className: $.Zg }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: L ? void 0 : "text-muted",
                                    className: a()($.TW, { [$.hn]: eC }),
                                    children: eo,
                                }),
                            ],
                        }),
                        (function () {
                            switch (Q) {
                                case F.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: $.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: $.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: $.O5,
                                                children: [
                                                    eM,
                                                    (0, i.jsxs)("div", {
                                                        className: $.c9,
                                                        children: [
                                                            (0, i.jsx)(p.j, {
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
                                                    eO && ex,
                                                ],
                                            }),
                                        ],
                                    });
                                case F.If.NONE:
                                    return null;
                                case F.If.PLAY:
                                case F.If.SOUNDMOJI:
                                default:
                                    return eP && !ee
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: $.LQ }),
                                                  eU($.B3),
                                                  (0, i.jsx)("div", {
                                                      className: $.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: $.O5,
                                                          children: [eO && eM, eO && ex],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: $.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: a()({ [$.LQ]: !P }) }),
                                                  (0, i.jsx)("div", {
                                                      className: $.O5,
                                                      children:
                                                          Q === F.If.SOUNDMOJI
                                                              ? (0, i.jsx)(O.Ay, {
                                                                    sound: h,
                                                                    channel: m,
                                                                    setTooltipShowing: eL,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [eO && eM, eU(), eO && ex],
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
                (0, i.jsx)(u.m, {
                    text: z.intl.string(z.t.MDOXJR),
                    shouldShow: !eD,
                    children: (0, i.jsx)("div", {
                        className: $.ET,
                        children: !ee && (0, i.jsxs)("div", { className: $.ld, children: [eM, ex] }),
                    }),
                }),
            !0 === ei && (0, i.jsx)(k, { sound: h, containerDimensions: eG, ref: er }),
        ],
    });
});
