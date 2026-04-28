"use strict";
n.d(t, { dT: () => J, Ay: () => $ });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(17928),
    c = n(451988),
    u = n(661531),
    d = n(990078),
    h = n(939249),
    m = n(983851),
    p = n(27232),
    f = n(505930),
    g = n(782134),
    _ = n(194261),
    x = n(307301),
    C = n(834730),
    A = n(890856),
    E = n(565645),
    I = n(775602),
    v = n(688810),
    y = n(21161),
    b = n(850992),
    S = n(320572),
    N = n(735438),
    j = n(132500),
    T = n(104142),
    w = n(407781),
    R = n(287809),
    L = n(194486),
    k = n(651175);
let O = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        a = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        r = (0, o.bG)([I.A], () => I.A.useReducedMotion),
        [c, u] = i.useState([]),
        d = c.length < 50,
        h = n?.emojiId != null || n?.emojiName != null,
        m = i.useCallback(() => {
            if (!r && d && h && null != a) {
                let e = (0, T.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    l = L.B.PREMIUM,
                    i = (0, N.random)(T.Bf[l].length, !1),
                    s = { id: (0, j.A)(), animationId: i, animationType: l, shouldResize: t, url: e, userId: a.id };
                u((e) => [...e, s]);
            }
        }, [r, d, h, a, n]);
    i.useImperativeHandle(t, () => ({ addAnimation: m }));
    let p = i.useCallback((e) => {
        u((t) => {
            let n = [...t],
                l = n.findIndex((t) => t.id === e);
            return n.splice(l, 1), n;
        });
    }, []);
    return r || !h
        ? null
        : (0, l.jsx)("div", {
              className: k.z,
              style: { width: s.width, height: s.height },
              children: c.map((e) => (0, l.jsx)(w.A, { containerDimensions: s, effect: e, onComplete: p }, e.id)),
          });
});
var M = n(253932),
    P = n(967198),
    D = n(954571),
    U = n(796774),
    V = n(209932),
    G = n(807348),
    F = n(536432),
    B = n(792348),
    H = n(496502),
    W = n(652215),
    K = n(851110),
    z = n(257645),
    Z = n(985018),
    q = n(757718);
function J(e) {
    let { disabled: t = !1, onClick: n, text: i, children: s, tooltipPosition: r = "top", ref: o } = e;
    return (0, l.jsx)(d.m, {
        text: i,
        position: r,
        children: (0, l.jsx)(h.D, {
            innerRef: o,
            "aria-label": i,
            className: a()(q.zr, { [q.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function Y(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, v.Ay)(),
        r = (0, o.bG)([V.A], () => V.A.isFavoriteSound(t.soundId), [t.soundId]),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(t.soundId)
                        : ((0, F.Ni)({ sound: t, location: { ...s, object: W.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(t.soundId));
            },
            [r, t, s],
        );
    return (0, l.jsx)(J, {
        disabled: n,
        onClick: c,
        text: Z.intl.formatToPlainString(r ? Z.t.lQLsjc : Z.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, l.jsx)(p.G, { size: "xs", className: a()(q.Wo, q.gj), color: u.A.unsafe_rawColors.PLATFORM_GOLD.css })
            : (0, l.jsx)(f.y, { size: "xs", color: "currentColor", className: q.Wo }),
    });
}
let $ = i.forwardRef(function (e, t) {
    var n, s, u;
    let h,
        {
            sound: p,
            channel: f,
            containerClassName: v,
            className: N,
            focused: j,
            forceSecondaryActions: T = !1,
            interactive: w = !0,
            enableSecondaryActions: L = !1,
            suppressPlaySound: k,
            onMouseEnter: U,
            onSelectItem: V,
            analyticsLocations: $,
            buttonOverlay: X = G.If.PLAY,
            showLockForDisabledSound: Q = !0,
            inNitroLockedSection: ee = !1,
            isAnimated: et = !0,
            isPlayingSoundOverride: en,
            isSoundmoji: el,
            soundmojiVisualEffectRef: ei,
            tooltipOverride: es,
            ...ea
        } = e,
        { name: er, emojiId: eo, emojiName: ec } = p,
        eu = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        ed = (0, H.v)(p, f?.guild_id),
        {
            playSoundboardSound: eh,
            previewSound: em,
            isPlayingSound: ep,
        } = (0, B.A)(
            p,
            f?.id ?? null,
            (el ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !el && f?.isVocal() ? z.a.VOICE : z.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ef } = i.useContext(y.x),
        eg = i.useRef(null),
        e_ =
            ((n = p.soundId),
            (s = eg.current),
            i.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        ex = (0, o.bG)([I.A], () => I.A.useReducedMotion),
        eC = i.useRef(0.01),
        eA = i.useRef(new c.IX()),
        eE = "1" === p.soundId,
        eI = `sound-${p.soundId}`,
        ev = (0, r.rm)(eI),
        ey = null != eo || null != ec,
        eb = !(0, F.Ir)(eu, p, f) && !el,
        eS = T || (L && !eb),
        eN = b.LW.useStore().bottomPosition ?? 0,
        ej = eg.current?.getBoundingClientRect().bottom ?? 0,
        [eT, ew] = i.useState(!1),
        eR = i.useCallback(() => {
            ew(!0);
        }, []),
        eL = i.useCallback(() => {
            ew(!1);
        }, []),
        ek = eb && Q;
    function eO(e) {
        (eE &&
            !ex &&
            ((eC.current = Math.min(eC.current + 0.01, 0.1)),
            Math.random() < eC.current && ef(e_.x, e_.y, void 0, void 0, { sprite: K.dR })),
        null != V)
            ? V(e)
            : k || eh($);
    }
    let eM = (0, l.jsx)("div", {
            onMouseEnter: eR,
            onMouseLeave: eL,
            children: (function (e) {
                let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: s = "top" } = e,
                    a = (0, o.bG)([P.A], () => P.A.getGuildId());
                return (0, l.jsx)(J, {
                    tooltipPosition: s,
                    disabled: i,
                    onClick: function (e) {
                        D.default.track(W.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                            sound_id: t.soundId,
                            sound_name: t.name,
                            sound_guild_id: t.guildId,
                            location_guild_id: a,
                        }),
                            e.stopPropagation(),
                            e.currentTarget.blur(),
                            n();
                    },
                    text: Z.intl.formatToPlainString(Z.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
                    children: (0, l.jsx)(m.H, { size: "md", color: "currentColor", className: q.Wo }),
                });
            })({ sound: p, previewSound: em, disabled: eb && !T }),
        }),
        eP = (e) =>
            k || eb
                ? ek
                    ? (0, l.jsx)(_.X, {
                          size: "xs",
                          color: "currentColor",
                          className: a()(q.C4, q.hz, e, { [q.hn]: ey }),
                      })
                    : null
                : (0, l.jsx)(g.u, { size: "xs", color: "currentColor", className: a()(q.C4, e) }),
        eD = (0, l.jsx)("div", {
            onMouseEnter: eR,
            onMouseLeave: eL,
            children: (0, l.jsx)(Y, { sound: p, disabled: !w && !T }),
        });
    i.useEffect(() => {
        let e = eA.current;
        return (
            eE &&
                e.start(1e3, () => {
                    eC.current = Math.max(eC.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eE]);
    let eU =
        ((u = eg.current),
        null == (h = u?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: h.width, height: h.height });
    return (0, l.jsxs)("li", {
        ref: t,
        className: a()(q.H, v),
        onMouseEnter: U,
        children: [
            (0, l.jsx)(d.m, {
                "aria-label": null != es ? p.name : void 0,
                __unsupportedReactNodeAsText: es ?? p.name,
                position: ej + 50 > eN ? "top" : "bottom",
                shouldShow: !eT,
                delay: 500,
                children: (0, l.jsxs)(A.s, {
                    ...ea,
                    buttonProps: { ...ev, id: eI, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: p.emojiName, soundName: p.name }),
                    className: a()(
                        q.aG,
                        {
                            [q.CS]: et,
                            [q.he]: en ?? ep,
                            [q.ju]: k,
                            [q.wT]: w,
                            [q.$9]: !w && !T,
                            [q.Au]: eb && !T,
                            [q.fx]: !w && T,
                            [q.in]: w && j,
                        },
                        N,
                    ),
                    onClick: (e) => {
                        eO?.(e);
                    },
                    onContextMenu: L && !eb ? ed : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: a()(q.KM, { [q.hn]: ey }),
                            "aria-hidden": !0,
                            ref: eg,
                            children: [
                                ey && (0, l.jsx)(E.A, { emojiId: eo, emojiName: ec, className: q.Zg }),
                                (0, l.jsx)(C.E, {
                                    variant: "text-xs/medium",
                                    color: w ? void 0 : "text-muted",
                                    className: a()(q.TW, { [q.hn]: ey }),
                                    children: er,
                                }),
                            ],
                        }),
                        (function () {
                            switch (X) {
                                case G.If.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: q.ec,
                                        children: [
                                            (0, l.jsx)("div", { className: q.LQ }),
                                            (0, l.jsxs)("div", {
                                                className: q.O5,
                                                children: [
                                                    eM,
                                                    (0, l.jsxs)("div", {
                                                        className: q.c9,
                                                        children: [
                                                            (0, l.jsx)(x.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: q.y_,
                                                            }),
                                                            (0, l.jsx)(C.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: Z.intl.string(Z.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eS && eD,
                                                ],
                                            }),
                                        ],
                                    });
                                case G.If.NONE:
                                    return null;
                                case G.If.PLAY:
                                case G.If.SOUNDMOJI:
                                default:
                                    return ek && !ee
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: q.LQ }),
                                                  eP(q.B3),
                                                  (0, l.jsx)("div", {
                                                      className: q.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: q.O5,
                                                          children: [eS && eM, eS && eD],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: q.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: a()({ [q.LQ]: !k }) }),
                                                  (0, l.jsx)("div", {
                                                      className: q.O5,
                                                      children:
                                                          X === G.If.SOUNDMOJI
                                                              ? (0, l.jsx)(S.Ay, {
                                                                    sound: p,
                                                                    channel: f,
                                                                    setTooltipShowing: ew,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [eS && eM, eP(), eS && eD],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !p.available &&
                (0, l.jsx)(d.m, {
                    text: Z.intl.string(Z.t.MDOXJR),
                    shouldShow: !eT,
                    children: (0, l.jsx)("div", {
                        className: q.ET,
                        children: !ee && (0, l.jsxs)("div", { className: q.ld, children: [eM, eD] }),
                    }),
                }),
            !0 === el && (0, l.jsx)(O, { sound: p, containerDimensions: eU, ref: ei }),
        ],
    });
});
