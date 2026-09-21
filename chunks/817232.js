n.d(t, { Ay: () => el, dT: () => ee, PI: () => et });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(930235),
    o = n(837381),
    u = n(17928),
    c = n(451988),
    d = n(661531),
    h = n(866665),
    m = n(939249),
    f = n(983851),
    p = n(27232),
    g = n(505930),
    x = n(782134),
    A = n(194261),
    C = n(307301),
    E = n(834730),
    I = n(890856),
    y = n(565645),
    S = n(775602),
    v = n(688810),
    N = n(21161),
    _ = n(850992),
    j = n(319993),
    b = n(435558),
    T = n(132500),
    R = n(104142),
    O = n(407781),
    M = n(287809),
    L = n(194486),
    k = n(178226);
let w = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: s } = e,
        r = (0, u.bG)([M.default], () => M.default.getCurrentUser()),
        a = (0, u.bG)([S.Ay], () => S.Ay.useReducedMotion),
        [o, c] = i.useState([]),
        d = o.length < 50,
        h = n?.emojiId != null || n?.emojiName != null,
        m = i.useCallback(() => {
            if (!a && d && h && null != r) {
                let e = (0, R.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    l = L.B.PREMIUM,
                    i = (0, b.random)(R.Bf[l].length, !1),
                    s = { id: (0, T.A)(), animationId: i, animationType: l, shouldResize: t, url: e, userId: r.id };
                c((e) => [...e, s]);
            }
        }, [a, d, h, r, n]);
    i.useImperativeHandle(t, () => ({ addAnimation: m }));
    let f = i.useCallback((e) => {
        c((t) => {
            let n = [...t],
                l = n.findIndex((t) => t.id === e);
            return (n.splice(l, 1), n);
        });
    }, []);
    return a || !h
        ? null
        : (0, l.jsx)("div", {
              className: k.z,
              style: { width: s.width, height: s.height },
              children: o.map((e) => (0, l.jsx)(O.A, { containerDimensions: s, effect: e, onComplete: f }, e.id)),
          });
});
var P = n(885386),
    D = n(967198),
    U = n(174459),
    V = n(796774),
    G = n(209932),
    F = n(807348),
    H = n(813564),
    B = n(792348),
    W = n(651300),
    K = n(980504),
    z = n(84566);
function Z(e) {
    let { targetSoundId: t, edge: n, onDrop: i } = e,
        [{ isOver: s, canDrop: a }, o] = (0, W.H)({
            accept: K.Tj,
            drop: (e) => {
                ((0, V.Lk)(e.soundId, t), i?.());
            },
            collect: (e) => ({ isOver: e.isOver(), canDrop: e.canDrop() }),
        });
    return (0, l.jsx)("div", {
        ref: (e) => {
            o(e);
        },
        "aria-hidden": !0,
        className: r()(z.target, z[n], { [z.autoPointerEvents]: a, [z.dragOver]: s && a }),
    });
}
var Y = n(496502),
    q = n(652215),
    J = n(536283),
    $ = n(257645),
    X = n(375708),
    Q = n(948611);
function ee(e) {
    let { disabled: t = !1, onClick: n, text: i, children: s, tooltipPosition: a = "top", ref: o } = e;
    return (0, l.jsx)(h.m, {
        text: i,
        position: a,
        children: (0, l.jsx)(m.D, {
            innerRef: o,
            "aria-label": i,
            className: r()(Q.zr, { [Q.$9]: t }),
            onClick: n,
            children: s,
        }),
    });
}
function et(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: s = "top" } = e,
        r = (0, u.bG)([D.A], () => D.A.getGuildId());
    return (0, l.jsx)(ee, {
        tooltipPosition: s,
        disabled: i,
        onClick: function (e) {
            (U.default.track(q.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n());
        },
        text: X.intl.formatToPlainString(X.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, l.jsx)(f.H, { size: "md", color: "currentColor", className: Q.Wo }),
    });
}
function en(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: s } = (0, v.Ay)(),
        a = (0, u.bG)([G.A], () => G.A.isFavoriteSound(t.soundId), [t.soundId]),
        o = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    a
                        ? (0, V.eS)(t.soundId)
                        : ((0, H.Ni)({ sound: t, location: { ...s, object: q.ZSU.SOUNDBOARD_SOUND } }),
                          (0, V.Rp)(t.soundId)));
            },
            [a, t, s],
        );
    return (0, l.jsx)(ee, {
        disabled: n,
        onClick: o,
        text: X.intl.formatToPlainString(a ? X.t.lQLsjc : X.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: a
            ? (0, l.jsx)(p.StarIcon, {
                  size: "xs",
                  className: r()(Q.Wo, Q.gj),
                  color: d.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, l.jsx)(g.y, { size: "xs", color: "currentColor", className: Q.Wo }),
    });
}
let el = i.forwardRef(function (e, t) {
    var n, s, d;
    let m,
        {
            sound: f,
            channel: p,
            containerClassName: g,
            className: v,
            focused: b,
            forceSecondaryActions: T = !1,
            interactive: R = !0,
            enableSecondaryActions: O = !1,
            suppressPlaySound: L,
            onMouseEnter: k,
            onSelectItem: D,
            analyticsLocations: U,
            buttonOverlay: V = F.If.PLAY,
            showLockForDisabledSound: G = !0,
            inNitroLockedSection: W = !1,
            isAnimated: z = !0,
            isPlayingSoundOverride: q,
            isSoundmoji: ee,
            soundmojiVisualEffectRef: el,
            tooltipOverride: ei,
            enableFavoritesDragAndDrop: es = !1,
            isLastFavoriteSound: er = !1,
            onFavoriteSoundDrop: ea,
            disableActiveStyles: eo = !1,
            ...eu
        } = e,
        { name: ec, emojiId: ed, emojiName: eh } = f,
        em = (0, u.bG)([M.default], () => M.default.getCurrentUser()),
        ef = (0, Y.v)(f, p?.guild_id),
        {
            playSoundboardSound: ep,
            previewSound: eg,
            isPlayingSound: ex,
        } = (0, B.A)(
            f,
            p?.id ?? null,
            (ee ? P.HO.getSetting() : P.dG.getSetting()?.volume) ?? 100,
            !ee && p?.isVocal() ? $.a.VOICE : $.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eA } = i.useContext(N.x),
        eC = i.useRef(null),
        eE =
            ((n = f.soundId),
            (s = eC.current),
            i.useMemo(() => {
                if (null == s || "1" !== n) return { x: 0, y: 0 };
                let e = s.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [s, n])),
        eI = (0, u.bG)([S.Ay], () => S.Ay.useReducedMotion),
        ey = i.useRef(0.01),
        eS = i.useRef(new c.IX()),
        ev = "1" === f.soundId,
        eN = `sound-${f.soundId}`,
        e_ = (0, o.rm)(eN),
        [{ isDragging: ej }, eb] = (0, a.i)({
            type: K.Tj,
            item: () => ({ soundId: f.soundId }),
            canDrag: () => es,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        eT = i.useCallback(
            (e) => {
                (eb(e), "function" == typeof t ? t(e) : null != t && (t.current = e));
            },
            [eb, t],
        ),
        eR = null != ed || null != eh,
        eO = !(0, H.Ir)(em, f, p) && !ee,
        eM = T || (O && !eO),
        eL = _.LW.useStore().bottomPosition ?? 0,
        ek = eC.current?.getBoundingClientRect().bottom ?? 0,
        [ew, eP] = i.useState(!1),
        eD = i.useCallback(() => {
            eP(!0);
        }, []),
        eU = i.useCallback(() => {
            eP(!1);
        }, []),
        eV = eO && G;
    function eG(e) {
        (ev &&
            !eI &&
            ((ey.current = Math.min(ey.current + 0.01, 0.1)),
            Math.random() < ey.current && eA(eE.x, eE.y, void 0, void 0, { sprite: J.dR })),
        null != D)
            ? D(e)
            : L || ep(U);
    }
    let eF = (0, l.jsx)("div", {
        onMouseEnter: eD,
        onMouseLeave: eU,
        children: et({ sound: f, previewSound: eg, disabled: eO && !T }),
    });
    function eH(e) {
        return L || eO
            ? eV
                ? (0, l.jsx)(A.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: r()(Q.C4, Q.hz, e, { [Q.hn]: eR }),
                  })
                : null
            : (0, l.jsx)(x.PlayIcon, { size: "xs", color: "currentColor", className: r()(Q.C4, e) });
    }
    let eB = (0, l.jsx)("div", {
        onMouseEnter: eD,
        onMouseLeave: eU,
        children: (0, l.jsx)(en, { sound: f, disabled: !R && !T }),
    });
    i.useEffect(() => {
        let e = eS.current;
        return (
            ev &&
                e.start(1e3, () => {
                    ey.current = Math.max(ey.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [ev]);
    let eW =
        ((d = eC.current),
        null == (m = d?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: m.width, height: m.height });
    return (0, l.jsxs)("li", {
        ref: eT,
        className: r()(Q.H, g, { [Q.cB]: es && ej }),
        onMouseEnter: k,
        children: [
            es &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(Z, { edge: "before", targetSoundId: f.soundId, onDrop: ea }),
                        er && (0, l.jsx)(Z, { edge: "after", targetSoundId: null, onDrop: ea }),
                    ],
                }),
            (0, l.jsx)(h.m, {
                "aria-label": null != ei ? f.name : void 0,
                __unsupportedReactNodeAsText: ei ?? f.name,
                position: ek + 50 > eL ? "top" : "bottom",
                shouldShow: !ew,
                delay: 500,
                children: (0, l.jsxs)(I.s, {
                    ...eu,
                    buttonProps: { ...e_, id: eN, role: "button" },
                    "aria-label": X.intl.formatToPlainString(X.t.tuMUJ2, { emojiName: f.emojiName, soundName: f.name }),
                    className: r()(
                        Q.aG,
                        {
                            [Q.CS]: z,
                            [Q.he]: q ?? ex,
                            [Q.ju]: L,
                            [Q.wT]: R,
                            [Q.$9]: !R && !T,
                            [Q.Au]: eO && !T,
                            [Q.fx]: !R && T,
                            [Q.in]: R && b,
                            [Q.bo]: eo,
                        },
                        v,
                    ),
                    onClick: (e) => {
                        eG?.(e);
                    },
                    onContextMenu: O && !eO ? ef : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: r()(Q.KM, { [Q.hn]: eR }),
                            "aria-hidden": !0,
                            ref: eC,
                            children: [
                                eR && (0, l.jsx)(y.A, { emojiId: ed, emojiName: eh, className: Q.Zg }),
                                (0, l.jsx)(E.E, {
                                    variant: "text-xs/medium",
                                    color: R ? void 0 : "text-muted",
                                    className: r()(Q.TW, { [Q.hn]: eR }),
                                    children: ec,
                                }),
                            ],
                        }),
                        (function () {
                            switch (V) {
                                case F.If.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: Q.ec,
                                        children: [
                                            (0, l.jsx)("div", { className: Q.LQ }),
                                            (0, l.jsxs)("div", {
                                                className: Q.O5,
                                                children: [
                                                    eF,
                                                    (0, l.jsxs)("div", {
                                                        className: Q.c9,
                                                        children: [
                                                            (0, l.jsx)(C.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Q.y_,
                                                            }),
                                                            (0, l.jsx)(E.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: X.intl.string(X.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eM && eB,
                                                ],
                                            }),
                                        ],
                                    });
                                case F.If.NONE:
                                    return null;
                                case F.If.PLAY:
                                case F.If.SOUNDMOJI:
                                default:
                                    return eV && !W
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: Q.LQ }),
                                                  eH(Q.B3),
                                                  (0, l.jsx)("div", {
                                                      className: Q.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: Q.O5,
                                                          children: [eM && eF, eM && eB],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: Q.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: r()({ [Q.LQ]: !L }) }),
                                                  (0, l.jsx)("div", {
                                                      className: Q.O5,
                                                      children:
                                                          V === F.If.SOUNDMOJI
                                                              ? (0, l.jsx)(j.Ay, {
                                                                    sound: f,
                                                                    channel: p,
                                                                    setTooltipShowing: eP,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [eM && eF, eH(), eM && eB],
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
                (0, l.jsx)(h.m, {
                    text: X.intl.string(X.t.MDOXJR),
                    shouldShow: !ew,
                    children: (0, l.jsx)("div", {
                        className: Q.ET,
                        children: !W && (0, l.jsxs)("div", { className: Q.ld, children: [eF, eB] }),
                    }),
                }),
            !0 === ee && (0, l.jsx)(w, { sound: f, containerDimensions: eW, ref: el }),
        ],
    });
});
