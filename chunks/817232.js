n.d(t, { Ay: () => es, dT: () => ee, PI: () => et });
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
    k = n(287809),
    G = n(194486),
    P = n(178226);
function M(e) {
    let { sound: t, containerDimensions: n, ref: s } = e,
        a = (0, u.bG)([k.default], () => k.default.getCurrentUser()),
        r = (0, u.bG)([b.Ay], () => b.Ay.useReducedMotion),
        [o, d] = i.useState([]),
        c = o.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = i.useCallback(() => {
            if (!r && c && m && null != a) {
                let e = (0, _.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    l = G.B.PREMIUM,
                    i = (0, y.random)(_.Bf[l].length, !1),
                    s = { id: (0, O.A)(), animationId: i, animationType: l, shouldResize: n, url: e, userId: a.id };
                d((e) => [...e, s]);
            }
        }, [r, c, m, a, t]);
    i.useImperativeHandle(s, () => ({ addAnimation: x }));
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
              style: { width: n.width, height: n.height },
              children: o.map((e) => (0, l.jsx)(R.A, { containerDimensions: n, effect: e, onComplete: h }, e.id)),
          });
}
var L = n(885386),
    D = n(967198),
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
        a = (0, u.bG)([D.A], () => D.A.getGuildId());
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
function el(e) {
    var t, n, s;
    let c,
        {
            sound: x,
            channel: h,
            containerClassName: j,
            className: g,
            focused: E,
            forceSecondaryActions: y = !1,
            interactive: O = !0,
            enableSecondaryActions: _ = !1,
            suppressPlaySound: R,
            onMouseEnter: G,
            onSelectItem: P,
            analyticsLocations: D,
            buttonOverlay: w = B.If.PLAY,
            showLockForDisabledSound: U = !0,
            inNitroLockedSection: z = !1,
            isAnimated: J = !0,
            isPlayingSoundOverride: W,
            isSoundmoji: $,
            soundmojiVisualEffectRef: ee,
            tooltipOverride: el,
            enableFavoritesDragAndDrop: es = !1,
            isLastFavoriteSound: ea = !1,
            onFavoriteSoundDrop: er,
            disableActiveStyles: eo = !1,
            ref: eu,
            ...ed
        } = e,
        { name: ec, emojiId: em, emojiName: ex } = x,
        eh = (0, u.bG)([k.default], () => k.default.getCurrentUser()),
        ej = (0, Y.v)(x, h?.guild_id),
        {
            playSoundboardSound: eg,
            previewSound: ep,
            isPlayingSound: ef,
        } = (0, F.A)(
            x,
            h?.id ?? null,
            ($ ? L.HO.getSetting() : L.dG.getSetting()?.volume) ?? 100,
            !$ && h?.isVocal() ? X.a.VOICE : X.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eA } = i.useContext(S.x),
        eN = i.useRef(null),
        eI =
            ((t = x.soundId),
            (n = eN.current),
            i.useMemo(() => {
                if (null == n || "1" !== t) return { x: 0, y: 0 };
                let e = n.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [n, t])),
        ev = (0, u.bG)([b.Ay], () => b.Ay.useReducedMotion),
        eb = i.useRef(0.01),
        eE = i.useRef(new d.IX()),
        eS = "1" === x.soundId,
        eC = `sound-${x.soundId}`,
        eT = (0, o.rm)(eC),
        [{ isDragging: ey }, eO] = (0, r.i)({
            type: H.Tj,
            item: () => ({ soundId: x.soundId }),
            canDrag: () => es,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        e_ = i.useCallback(
            (e) => {
                (eO(e), "function" == typeof eu ? eu(e) : null != eu && (eu.current = e));
            },
            [eO, eu],
        ),
        eR = null != em || null != ex,
        ek = !(0, V.Ir)(eh, x, h) && !$,
        eG = y || (_ && !ek),
        eP = C.LW.useStore().bottomPosition ?? 0,
        eM = eN.current?.getBoundingClientRect().bottom ?? 0,
        [eL, eD] = i.useState(!1),
        ew = i.useCallback(() => {
            eD(!0);
        }, []),
        eU = i.useCallback(() => {
            eD(!1);
        }, []),
        ez = ek && U;
    function eB(e) {
        (eS &&
            !ev &&
            ((eb.current = Math.min(eb.current + 0.01, 0.1)),
            Math.random() < eb.current && eA(eI.x, eI.y, void 0, void 0, { sprite: q.dR })),
        null != P)
            ? P(e)
            : R || eg(D);
    }
    let eV = (0, l.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: et({ sound: x, previewSound: ep, disabled: ek && !y }),
    });
    function eF(e) {
        return R || ek
            ? ez
                ? (0, l.jsx)(f.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(Q.C4, Q.hz, e, { [Q.hn]: eR }),
                  })
                : null
            : (0, l.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: a()(Q.C4, e) });
    }
    let eJ = (0, l.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: (0, l.jsx)(en, { sound: x, disabled: !O && !y }),
    });
    i.useEffect(() => {
        let e = eE.current;
        return (
            eS &&
                e.start(1e3, () => {
                    eb.current = Math.max(eb.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eS]);
    let eH =
        ((s = eN.current),
        null == (c = s?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: c.width, height: c.height });
    return (0, l.jsxs)("li", {
        ref: e_,
        className: a()(Q.H, j, { [Q.cB]: es && ey }),
        onMouseEnter: G,
        children: [
            es &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(K, { edge: "before", targetSoundId: x.soundId, onDrop: er }),
                        ea && (0, l.jsx)(K, { edge: "after", targetSoundId: null, onDrop: er }),
                    ],
                }),
            (0, l.jsx)(m.m, {
                "aria-label": null != el ? x.name : void 0,
                __unsupportedReactNodeAsText: el ?? x.name,
                position: eM + 50 > eP ? "top" : "bottom",
                shouldShow: !eL,
                delay: 500,
                children: (0, l.jsxs)(I.s, {
                    ...ed,
                    buttonProps: { ...eT, id: eC, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: x.emojiName, soundName: x.name }),
                    className: a()(
                        Q.aG,
                        {
                            [Q.CS]: J,
                            [Q.he]: W ?? ef,
                            [Q.ju]: R,
                            [Q.wT]: O,
                            [Q.$9]: !O && !y,
                            [Q.Au]: ek && !y,
                            [Q.fx]: !O && y,
                            [Q.in]: O && E,
                            [Q.bo]: eo,
                        },
                        g,
                    ),
                    onClick: (e) => {
                        eB?.(e);
                    },
                    onContextMenu: _ && !ek ? ej : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: a()(Q.KM, { [Q.hn]: eR }),
                            "aria-hidden": !0,
                            ref: eN,
                            children: [
                                eR && (0, l.jsx)(v.A, { emojiId: em, emojiName: ex, className: Q.Zg }),
                                (0, l.jsx)(N.E, {
                                    variant: "text-xs/medium",
                                    color: O ? void 0 : "text-muted",
                                    className: a()(Q.TW, { [Q.hn]: eR }),
                                    children: ec,
                                }),
                            ],
                        }),
                        (function () {
                            switch (w) {
                                case B.If.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: Q.ec,
                                        children: [
                                            (0, l.jsx)("div", { className: Q.LQ }),
                                            (0, l.jsxs)("div", {
                                                className: Q.O5,
                                                children: [
                                                    eV,
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
                                                    eG && eJ,
                                                ],
                                            }),
                                        ],
                                    });
                                case B.If.NONE:
                                    return null;
                                case B.If.PLAY:
                                case B.If.SOUNDMOJI:
                                default:
                                    return ez && !z
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("div", { className: Q.LQ }),
                                                  eF(Q.B3),
                                                  (0, l.jsx)("div", {
                                                      className: Q.d7,
                                                      children: (0, l.jsxs)("div", {
                                                          className: Q.O5,
                                                          children: [eG && eV, eG && eJ],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: Q.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: a()({ [Q.LQ]: !R }) }),
                                                  (0, l.jsx)("div", {
                                                      className: Q.O5,
                                                      children:
                                                          w === B.If.SOUNDMOJI
                                                              ? (0, l.jsx)(T.Ay, {
                                                                    sound: x,
                                                                    channel: h,
                                                                    setTooltipShowing: eD,
                                                                    renderSoundButton: ei,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [eG && eV, eF(), eG && eJ],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !x.available &&
                (0, l.jsx)(m.m, {
                    text: Z.intl.string(Z.t.MDOXJR),
                    shouldShow: !eL,
                    children: (0, l.jsx)("div", {
                        className: Q.ET,
                        children: !z && (0, l.jsxs)("div", { className: Q.ld, children: [eV, eJ] }),
                    }),
                }),
            !0 === $ && (0, l.jsx)(M, { sound: x, containerDimensions: eH, ref: ee }),
        ],
    });
}
function ei(e) {
    return (0, l.jsx)(el, { ...e });
}
let es = el;
