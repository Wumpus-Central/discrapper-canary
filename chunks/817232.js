n.d(t, { Ay: () => ei, dT: () => ee, PI: () => et });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(739822),
    o = n(837381),
    u = n(17928),
    c = n(451988),
    d = n(661531),
    m = n(866665),
    x = n(939249),
    h = n(983851),
    j = n(27232),
    p = n(505930),
    g = n(782134),
    f = n(194261),
    N = n(307301),
    I = n(834730),
    A = n(890856),
    v = n(565645),
    b = n(775602),
    S = n(688810),
    E = n(21161),
    C = n(850992),
    T = n(319993),
    y = n(435558),
    O = n(132500),
    k = n(104142),
    G = n(407781),
    _ = n(287809),
    R = n(194486),
    P = n(178226);
function M(e) {
    let { sound: t, containerDimensions: n, ref: i } = e,
        a = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        r = (0, u.bG)([b.Ay], () => b.Ay.useReducedMotion),
        [o, c] = s.useState([]),
        d = o.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = s.useCallback(() => {
            if (!r && d && m && null != a) {
                let e = (0, k.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    l = R.B.PREMIUM,
                    s = (0, y.random)(k.Bf[l].length, !1),
                    i = { id: (0, O.A)(), animationId: s, animationType: l, shouldResize: n, url: e, userId: a.id };
                c((e) => [...e, i]);
            }
        }, [r, d, m, a, t]);
    s.useImperativeHandle(i, () => ({ addAnimation: x }));
    let h = s.useCallback((e) => {
        c((t) => {
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
              children: o.map((e) => (0, l.jsx)(G.A, { containerDimensions: n, effect: e, onComplete: h }, e.id)),
          });
}
var L = n(885386),
    D = n(967198),
    U = n(174459),
    w = n(796774),
    z = n(209932),
    V = n(807348),
    B = n(813564),
    F = n(792348),
    J = n(949152),
    H = n(980504),
    K = n(84566);
function W(e) {
    let { targetSoundId: t, edge: n, onDrop: s } = e,
        [{ isOver: i, canDrop: r }, o] = (0, J.H)({
            accept: H.Tj,
            drop: (e) => {
                ((0, w.Lk)(e.soundId, t), s?.());
            },
            collect: (e) => ({ isOver: e.isOver(), canDrop: e.canDrop() }),
        });
    return (0, l.jsx)("div", {
        ref: (e) => {
            o(e);
        },
        "aria-hidden": !0,
        className: a()(K.target, K[n], { [K.autoPointerEvents]: r, [K.dragOver]: i && r }),
    });
}
var $ = n(496502),
    X = n(652215),
    Y = n(536283),
    q = n(257645),
    Z = n(660183),
    Q = n(948611);
function ee(e) {
    let { disabled: t = !1, onClick: n, text: s, children: i, tooltipPosition: r = "top", ref: o } = e;
    return (0, l.jsx)(m.m, {
        text: s,
        position: r,
        children: (0, l.jsx)(x.D, {
            innerRef: o,
            "aria-label": s,
            className: a()(Q.zr, { [Q.$9]: t }),
            onClick: n,
            children: i,
        }),
    });
}
function et(e) {
    let { sound: t, previewSound: n, disabled: s = !1, tooltipPosition: i = "top" } = e,
        a = (0, u.bG)([D.A], () => D.A.getGuildId());
    return (0, l.jsx)(ee, {
        tooltipPosition: i,
        disabled: s,
        onClick: function (e) {
            (U.default.track(X.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
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
        { analyticsLocations: i } = (0, S.Ay)(),
        r = (0, u.bG)([z.A], () => z.A.isFavoriteSound(t.soundId), [t.soundId]),
        o = s.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, w.eS)(t.soundId)
                        : ((0, B.Ni)({ sound: t, location: { ...i, object: X.ZSU.SOUNDBOARD_SOUND } }),
                          (0, w.Rp)(t.soundId)));
            },
            [r, t, i],
        );
    return (0, l.jsx)(ee, {
        disabled: n,
        onClick: o,
        text: Z.intl.formatToPlainString(r ? Z.t.lQLsjc : Z.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, l.jsx)(j.StarIcon, {
                  size: "xs",
                  className: a()(Q.Wo, Q.gj),
                  color: d.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, l.jsx)(p.y, { size: "xs", color: "currentColor", className: Q.Wo }),
    });
}
function el(e) {
    var t, n, i;
    let d,
        {
            sound: x,
            channel: h,
            containerClassName: j,
            className: p,
            focused: S,
            forceSecondaryActions: y = !1,
            interactive: O = !0,
            enableSecondaryActions: k = !1,
            suppressPlaySound: G,
            onMouseEnter: R,
            onSelectItem: P,
            analyticsLocations: D,
            buttonOverlay: U = V.If.PLAY,
            showLockForDisabledSound: w = !0,
            inNitroLockedSection: z = !1,
            isAnimated: J = !0,
            isPlayingSoundOverride: K,
            isSoundmoji: X,
            soundmojiVisualEffectRef: ee,
            tooltipOverride: el,
            enableFavoritesDragAndDrop: ei = !1,
            isLastFavoriteSound: ea = !1,
            onFavoriteSoundDrop: er,
            disableActiveStyles: eo = !1,
            ref: eu,
            ...ec
        } = e,
        { name: ed, emojiId: em, emojiName: ex } = x,
        eh = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        ej = (0, $.v)(x, h?.guild_id),
        {
            playSoundboardSound: ep,
            previewSound: eg,
            isPlayingSound: ef,
        } = (0, F.A)(
            x,
            h?.id ?? null,
            (X ? L.HO.getSetting() : L.dG.getSetting()?.volume) ?? 100,
            !X && h?.isVocal() ? q.a.VOICE : q.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eN } = s.useContext(E.x),
        eI = s.useRef(null),
        eA =
            ((t = x.soundId),
            (n = eI.current),
            s.useMemo(() => {
                if (null == n || "1" !== t) return { x: 0, y: 0 };
                let e = n.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [n, t])),
        ev = (0, u.bG)([b.Ay], () => b.Ay.useReducedMotion),
        eb = s.useRef(0.01),
        eS = s.useRef(new c.IX()),
        eE = "1" === x.soundId,
        eC = `sound-${x.soundId}`,
        eT = (0, o.rm)(eC),
        [{ isDragging: ey }, eO] = (0, r.i)({
            type: H.Tj,
            item: () => ({ soundId: x.soundId }),
            canDrag: () => ei,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        ek = s.useCallback(
            (e) => {
                (eO(e), "function" == typeof eu ? eu(e) : null != eu && (eu.current = e));
            },
            [eO, eu],
        ),
        eG = null != em || null != ex,
        e_ = !(0, B.Ir)(eh, x, h) && !X,
        eR = y || (k && !e_),
        eP = C.LW.useStore().bottomPosition ?? 0,
        eM = eI.current?.getBoundingClientRect().bottom ?? 0,
        [eL, eD] = s.useState(!1),
        eU = s.useCallback(() => {
            eD(!0);
        }, []),
        ew = s.useCallback(() => {
            eD(!1);
        }, []),
        ez = e_ && w;
    function eV(e) {
        (eE &&
            !ev &&
            ((eb.current = Math.min(eb.current + 0.01, 0.1)),
            Math.random() < eb.current && eN(eA.x, eA.y, void 0, void 0, { sprite: Y.dR })),
        null != P)
            ? P(e)
            : G || ep(D);
    }
    let eB = (0, l.jsx)("div", {
        onMouseEnter: eU,
        onMouseLeave: ew,
        children: et({ sound: x, previewSound: eg, disabled: e_ && !y }),
    });
    function eF(e) {
        return G || e_
            ? ez
                ? (0, l.jsx)(f.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(Q.C4, Q.hz, e, { [Q.hn]: eG }),
                  })
                : null
            : (0, l.jsx)(g.PlayIcon, { size: "xs", color: "currentColor", className: a()(Q.C4, e) });
    }
    let eJ = (0, l.jsx)("div", {
        onMouseEnter: eU,
        onMouseLeave: ew,
        children: (0, l.jsx)(en, { sound: x, disabled: !O && !y }),
    });
    s.useEffect(() => {
        let e = eS.current;
        return (
            eE &&
                e.start(1e3, () => {
                    eb.current = Math.max(eb.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eE]);
    let eH =
        ((i = eI.current),
        null == (d = i?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: d.width, height: d.height });
    return (0, l.jsxs)("li", {
        ref: ek,
        className: a()(Q.H, j, { [Q.cB]: ei && ey }),
        onMouseEnter: R,
        children: [
            ei &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(W, { edge: "before", targetSoundId: x.soundId, onDrop: er }),
                        ea && (0, l.jsx)(W, { edge: "after", targetSoundId: null, onDrop: er }),
                    ],
                }),
            (0, l.jsx)(m.m, {
                "aria-label": null != el ? x.name : void 0,
                __unsupportedReactNodeAsText: el ?? x.name,
                position: eM + 50 > eP ? "top" : "bottom",
                shouldShow: !eL,
                delay: 500,
                children: (0, l.jsxs)(A.s, {
                    ...ec,
                    buttonProps: { ...eT, id: eC, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: x.emojiName, soundName: x.name }),
                    className: a()(
                        Q.aG,
                        {
                            [Q.CS]: J,
                            [Q.he]: K ?? ef,
                            [Q.ju]: G,
                            [Q.wT]: O,
                            [Q.$9]: !O && !y,
                            [Q.Au]: e_ && !y,
                            [Q.fx]: !O && y,
                            [Q.in]: O && S,
                            [Q.bo]: eo,
                        },
                        p,
                    ),
                    onClick: (e) => {
                        eV?.(e);
                    },
                    onContextMenu: k && !e_ ? ej : void 0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: a()(Q.KM, { [Q.hn]: eG }),
                            "aria-hidden": !0,
                            ref: eI,
                            children: [
                                eG && (0, l.jsx)(v.A, { emojiId: em, emojiName: ex, className: Q.Zg }),
                                (0, l.jsx)(I.E, {
                                    variant: "text-xs/medium",
                                    color: O ? void 0 : "text-muted",
                                    className: a()(Q.TW, { [Q.hn]: eG }),
                                    children: ed,
                                }),
                            ],
                        }),
                        (function () {
                            switch (U) {
                                case V.If.ADD:
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
                                                            (0, l.jsx)(N.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Q.y_,
                                                            }),
                                                            (0, l.jsx)(I.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: Z.intl.string(Z.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eR && eJ,
                                                ],
                                            }),
                                        ],
                                    });
                                case V.If.NONE:
                                    return null;
                                case V.If.PLAY:
                                case V.If.SOUNDMOJI:
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
                                                          children: [eR && eB, eR && eJ],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: Q.d7,
                                              children: [
                                                  (0, l.jsx)("div", { className: a()({ [Q.LQ]: !G }) }),
                                                  (0, l.jsx)("div", {
                                                      className: Q.O5,
                                                      children:
                                                          U === V.If.SOUNDMOJI
                                                              ? (0, l.jsx)(T.Ay, {
                                                                    sound: x,
                                                                    channel: h,
                                                                    setTooltipShowing: eD,
                                                                    renderSoundButton: es,
                                                                })
                                                              : (0, l.jsxs)(l.Fragment, {
                                                                    children: [eR && eB, eF(), eR && eJ],
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
                        children: !z && (0, l.jsxs)("div", { className: Q.ld, children: [eB, eJ] }),
                    }),
                }),
            !0 === X && (0, l.jsx)(M, { sound: x, containerDimensions: eH, ref: ee }),
        ],
    });
}
function es(e) {
    return (0, l.jsx)(el, { ...e });
}
let ei = el;
