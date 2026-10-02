n.d(t, { Ay: () => el, dT: () => ee, PI: () => et });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(657335),
    o = n(837381),
    u = n(17928),
    d = n(451988),
    c = n(661531),
    m = n(866665),
    x = n(939249),
    h = n(983851),
    j = n(27232),
    g = n(505930),
    p = n(782134),
    f = n(194261),
    A = n(307301),
    N = n(834730),
    I = n(890856),
    v = n(565645),
    b = n(775602),
    E = n(688810),
    S = n(21161),
    C = n(850992),
    T = n(319993),
    y = n(435558),
    O = n(132500),
    _ = n(104142),
    R = n(407781),
    G = n(287809),
    k = n(194486),
    P = n(178226);
let M = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        a = (0, u.bG)([G.default], () => G.default.getCurrentUser()),
        r = (0, u.bG)([b.Ay], () => b.Ay.useReducedMotion),
        [o, d] = i.useState([]),
        c = o.length < 50,
        m = n?.emojiId != null || n?.emojiName != null,
        x = i.useCallback(() => {
            if (!r && c && m && null != a) {
                let e = (0, _.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    l = k.B.PREMIUM,
                    i = (0, y.random)(_.Bf[l].length, !1),
                    s = { id: (0, O.A)(), animationId: i, animationType: l, shouldResize: t, url: e, userId: a.id };
                d((e) => [...e, s]);
            }
        }, [r, c, m, a, n]);
    i.useImperativeHandle(t, () => ({ addAnimation: x }));
    let h = i.useCallback((e) => {
        d((t) => {
            let n = [...t],
                l = n.findIndex((t) => t.id === e);
            return (n.splice(l, 1), n);
        });
    }, []);
    return r || !m
        ? null
        : (0, l.jsx)("div", {
              className: P.z,
              style: { width: s.width, height: s.height },
              children: o.map((e) => (0, l.jsx)(R.A, { containerDimensions: s, effect: e, onComplete: h }, e.id)),
          });
});
var D = n(885386),
    L = n(967198),
    w = n(174459),
    U = n(796774),
    z = n(209932),
    B = n(807348),
    V = n(813564),
    F = n(792348),
    J = n(708793),
    H = n(980504),
    W = n(84566);
function K(e) {
    let { targetSoundId: t, edge: n, onDrop: i } = e,
        [{ isOver: s, canDrop: r }, o] = (0, J.H)({
            accept: H.Tj,
            drop: (e) => {
                ((0, U.Lk)(e.soundId, t), i?.());
            },
            collect: (e) => ({ isOver: e.isOver(), canDrop: e.canDrop() }),
        });
    return (0, l.jsx)("div", {
        ref: (e) => {
            o(e);
        },
        "aria-hidden": !0,
        className: a()(W.target, W[n], { [W.autoPointerEvents]: r, [W.dragOver]: s && r }),
    });
}
var Y = n(496502),
    $ = n(652215),
    q = n(536283),
    X = n(257645),
    Z = n(375708),
    Q = n(948611);
function ee(e) {
    let { disabled: t = !1, onClick: n, text: i, children: s, tooltipPosition: r = "top", ref: o } = e;
    return (0, l.jsx)(m.m, {
        text: i,
        position: r,
        children: (0, l.jsx)(x.D, {
            innerRef: o,
            "aria-label": i,
            className: a()(Q.zr, { [Q.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function et(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: s = "top" } = e,
        a = (0, u.bG)([L.A], () => L.A.getGuildId());
    return (0, l.jsx)(ee, {
        tooltipPosition: s,
        disabled: i,
        onClick: function (e) {
            (w.default.track($.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: a,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n());
        },
        text: Z.intl.formatToPlainString(Z.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, l.jsx)(h.H, { size: "md", color: "currentColor", className: Q.Wo }),
    });
}
function en(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, E.Ay)(),
        r = (0, u.bG)([z.A], () => z.A.isFavoriteSound(t.soundId), [t.soundId]),
        o = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(t.soundId)
                        : ((0, V.Ni)({ sound: t, location: { ...s, object: $.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(t.soundId)));
            },
            [r, t, s],
        );
    return (0, l.jsx)(ee, {
        disabled: n,
        onClick: o,
        text: Z.intl.formatToPlainString(r ? Z.t.lQLsjc : Z.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, l.jsx)(j.StarIcon, {
                  size: "xs",
                  className: a()(Q.Wo, Q.gj),
                  color: c.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, l.jsx)(g.y, { size: "xs", color: "currentColor", className: Q.Wo }),
    });
}
let el = i.forwardRef(function (e, t) {
    var n, s, c;
    let x,
        {
            sound: h,
            channel: j,
            containerClassName: g,
            className: E,
            focused: y,
            forceSecondaryActions: O = !1,
            interactive: _ = !0,
            enableSecondaryActions: R = !1,
            suppressPlaySound: k,
            onMouseEnter: P,
            onSelectItem: L,
            analyticsLocations: w,
            buttonOverlay: U = B.If.PLAY,
            showLockForDisabledSound: z = !0,
            inNitroLockedSection: J = !1,
            isAnimated: W = !0,
            isPlayingSoundOverride: $,
            isSoundmoji: ee,
            soundmojiVisualEffectRef: el,
            tooltipOverride: ei,
            enableFavoritesDragAndDrop: es = !1,
            isLastFavoriteSound: ea = !1,
            onFavoriteSoundDrop: er,
            disableActiveStyles: eo = !1,
            ...eu
        } = e,
        { name: ed, emojiId: ec, emojiName: em } = h,
        ex = (0, u.bG)([G.default], () => G.default.getCurrentUser()),
        eh = (0, Y.v)(h, j?.guild_id),
        {
            playSoundboardSound: ej,
            previewSound: eg,
            isPlayingSound: ep,
        } = (0, F.A)(
            h,
            j?.id ?? null,
            (ee ? D.HO.getSetting() : D.dG.getSetting()?.volume) ?? 100,
            !ee && j?.isVocal() ? X.a.VOICE : X.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ef } = i.useContext(S.x),
        eA = i.useRef(null),
        eN =
            ((n = h.soundId),
            (s = eA.current),
            i.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        eI = (0, u.bG)([b.Ay], () => b.Ay.useReducedMotion),
        ev = i.useRef(0.01),
        eb = i.useRef(new d.IX()),
        eE = "1" === h.soundId,
        eS = `sound-${h.soundId}`,
        eC = (0, o.rm)(eS),
        [{ isDragging: eT }, ey] = (0, r.i)({
            type: H.Tj,
            item: () => ({ soundId: h.soundId }),
            canDrag: () => es,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        eO = i.useCallback(
            (e) => {
                (ey(e), "function" == typeof t ? t(e) : null != t && (t.current = e));
            },
            [ey, t],
        ),
        e_ = null != ec || null != em,
        eR = !(0, V.Ir)(ex, h, j) && !ee,
        eG = O || (R && !eR),
        ek = C.LW.useStore().bottomPosition ?? 0,
        eP = eA.current?.getBoundingClientRect().bottom ?? 0,
        [eM, eD] = i.useState(!1),
        eL = i.useCallback(() => {
            eD(!0);
        }, []),
        ew = i.useCallback(() => {
            eD(!1);
        }, []),
        eU = eR && z;
    function ez(e) {
        (eE &&
            !eI &&
            ((ev.current = Math.min(ev.current + 0.01, 0.1)),
            Math.random() < ev.current && ef(eN.x, eN.y, void 0, void 0, { sprite: q.dR })),
        null != L)
            ? L(e)
            : k || ej(w);
    }
    let eB = (0, l.jsx)("div", {
        onMouseEnter: eL,
        onMouseLeave: ew,
        children: et({ sound: h, previewSound: eg, disabled: eR && !O }),
    });
    function eV(e) {
        return k || eR
            ? eU
                ? (0, l.jsx)(f.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(Q.C4, Q.hz, e, { [Q.hn]: e_ }),
                  })
                : null
            : (0, l.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: a()(Q.C4, e) });
    }
    let eF = (0, l.jsx)("div", {
        onMouseEnter: eL,
        onMouseLeave: ew,
        children: (0, l.jsx)(en, { sound: h, disabled: !_ && !O }),
    });
    i.useEffect(() => {
        let e = eb.current;
        return (
            eE &&
                e.start(1e3, () => {
                    ev.current = Math.max(ev.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eE]);
    let eJ =
        ((c = eA.current),
        null == (x = c?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: x.width, height: x.height });
    return (0, l.jsxs)("li", {
        ref: eO,
        className: a()(Q.H, g, { [Q.cB]: es && eT }),
        onMouseEnter: P,
        children: [
            es &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(K, { edge: "before", targetSoundId: h.soundId, onDrop: er }),
                        ea && (0, l.jsx)(K, { edge: "after", targetSoundId: null, onDrop: er }),
                    ],
                }),
            (0, l.jsx)(m.m, {
                "aria-label": null != ei ? h.name : void 0,
                __unsupportedReactNodeAsText: ei ?? h.name,
                position: eP + 50 > ek ? "top" : "bottom",
                shouldShow: !eM,
                delay: 500,
                children: (0, l.jsxs)(I.s, {
                    ...eu,
                    buttonProps: { ...eC, id: eS, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: h.emojiName, soundName: h.name }),
                    className: a()(
                        Q.aG,
                        {
                            [Q.CS]: W,
                            [Q.he]: $ ?? ep,
                            [Q.ju]: k,
                            [Q.wT]: _,
                            [Q.$9]: !_ && !O,
                            [Q.Au]: eR && !O,
                            [Q.fx]: !_ && O,
                            [Q.in]: _ && y,
                            [Q.bo]: eo,
                        },
                        E,
                    ),
                    onClick: (e) => {
                        ez?.(e);
                    },
                    onContextMenu: R && !eR ? eh : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: a()(Q.KM, { [Q.hn]: e_ }),
                            "aria-hidden": !0,
                            ref: eA,
                            children: [
                                e_ && (0, l.jsx)(v.A, { emojiId: ec, emojiName: em, className: Q.Zg }),
                                (0, l.jsx)(N.E, {
                                    variant: "text-xs/medium",
                                    color: _ ? void 0 : "text-muted",
                                    className: a()(Q.TW, { [Q.hn]: e_ }),
                                    children: ed,
                                }),
                            ],
                        }),
                        (function () {
                            switch (U) {
                                case B.If.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: Q.ec,
                                        children: [
                                            (0, l.jsx)("div", { className: Q.LQ }),
                                            (0, l.jsxs)("div", {
                                                className: Q.O5,
                                                children: [
                                                    eB,
                                                    (0, l.jsxs)("div", {
                                                        className: Q.c9,
                                                        children: [
                                                            (0, l.jsx)(A.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Q.y_,
                                                            }),
                                                            (0, l.jsx)(N.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: Z.intl.string(Z.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eG && eF,
                                                ],
                                            }),
                                        ],
                                    });
                                case B.If.NONE:
                                    return null;
                                case B.If.PLAY:
                                case B.If.SOUNDMOJI:
                                default:
                                    return eU && !J
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: Q.LQ }),
                                                  eV(Q.B3),
                                                  (0, l.jsx)("div", {
                                                      className: Q.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: Q.O5,
                                                          children: [eG && eB, eG && eF],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: Q.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: a()({ [Q.LQ]: !k }) }),
                                                  (0, l.jsx)("div", {
                                                      className: Q.O5,
                                                      children:
                                                          U === B.If.SOUNDMOJI
                                                              ? (0, l.jsx)(T.Ay, {
                                                                    sound: h,
                                                                    channel: j,
                                                                    setTooltipShowing: eD,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [eG && eB, eV(), eG && eF],
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
                (0, l.jsx)(m.m, {
                    text: Z.intl.string(Z.t.MDOXJR),
                    shouldShow: !eM,
                    children: (0, l.jsx)("div", {
                        className: Q.ET,
                        children: !J && (0, l.jsxs)("div", { className: Q.ld, children: [eB, eF] }),
                    }),
                }),
            !0 === ee && (0, l.jsx)(M, { sound: h, containerDimensions: eJ, ref: el }),
        ],
    });
});
