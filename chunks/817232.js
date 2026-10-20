n.d(t, { Ay: () => el, dT: () => ee, PI: () => et });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(739822),
    o = n(837381),
    d = n(17928),
    c = n(451988),
    u = n(661531),
    m = n(866665),
    x = n(939249),
    j = n(983851),
    h = n(27232),
    g = n(505930),
    p = n(782134),
    I = n(194261),
    N = n(307301),
    b = n(834730),
    f = n(890856),
    v = n(565645),
    A = n(775602),
    E = n(688810),
    C = n(21161),
    S = n(850992),
    O = n(319993),
    T = n(435558),
    y = n(132500),
    k = n(104142),
    P = n(407781),
    _ = n(287809),
    G = n(194486),
    R = n(178226);
function L(e) {
    let { sound: t, containerDimensions: n, ref: l } = e,
        a = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        r = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion),
        [o, c] = s.useState([]),
        u = o.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = s.useCallback(() => {
            if (!r && u && m && null != a) {
                let e = (0, k.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    i = G.B.PREMIUM,
                    s = (0, T.random)(k.Bf[i].length, !1),
                    l = { id: (0, y.A)(), animationId: s, animationType: i, shouldResize: n, url: e, userId: a.id };
                c((e) => [...e, l]);
            }
        }, [r, u, m, a, t]);
    s.useImperativeHandle(l, () => ({ addAnimation: x }));
    let j = s.useCallback((e) => {
        c((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return (n.splice(i, 1), n);
        });
    }, []);
    return r || !m
        ? null
        : (0, i.jsx)("div", {
              className: R.z,
              style: { width: n.width, height: n.height },
              children: o.map((e) => (0, i.jsx)(P.A, { containerDimensions: n, effect: e, onComplete: j }, e.id)),
          });
}
var D = n(885386),
    M = n(967198),
    w = n(174459),
    U = n(796774),
    z = n(209932),
    J = n(807348),
    B = n(813564),
    V = n(792348),
    K = n(949152),
    H = n(980504),
    F = n(84566);
function W(e) {
    let { targetSoundId: t, edge: n, onDrop: s } = e,
        [{ isOver: l, canDrop: r }, o] = (0, K.H)({
            accept: H.Tj,
            drop: (e) => {
                ((0, U.Lk)(e.soundId, t), s?.());
            },
            collect: (e) => ({ isOver: e.isOver(), canDrop: e.canDrop() }),
        });
    return (0, i.jsx)("div", {
        ref: (e) => {
            o(e);
        },
        "aria-hidden": !0,
        className: a()(F.target, F[n], { [F.autoPointerEvents]: r, [F.dragOver]: l && r }),
    });
}
var X = n(496502),
    q = n(652215),
    Y = n(536283),
    Z = n(257645),
    $ = n(105292),
    Q = n(948611);
function ee(e) {
    let { disabled: t = !1, onClick: n, text: s, children: l, tooltipPosition: r = "top", ref: o } = e;
    return (0, i.jsx)(m.m, {
        text: s,
        position: r,
        children: (0, i.jsx)(x.D, {
            innerRef: o,
            "aria-label": s,
            className: a()(Q.zr, { [Q.$9]: t }),
            onClick: n,
            children: l,
        }),
    });
}
function et(e) {
    let { sound: t, previewSound: n, disabled: s = !1, tooltipPosition: l = "top" } = e,
        a = (0, d.bG)([M.A], () => M.A.getGuildId());
    return (0, i.jsx)(ee, {
        tooltipPosition: l,
        disabled: s,
        onClick: function (e) {
            (w.default.track(q.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: a,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n());
        },
        text: $.intl.formatToPlainString($.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, i.jsx)(j.H, { size: "md", color: "currentColor", className: Q.Wo }),
    });
}
function en(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: l } = (0, E.Ay)(),
        r = (0, d.bG)([z.A], () => z.A.isFavoriteSound(t.soundId), [t.soundId]),
        o = s.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(t.soundId)
                        : ((0, B.Ni)({ sound: t, location: { ...l, object: q.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(t.soundId)));
            },
            [r, t, l],
        );
    return (0, i.jsx)(ee, {
        disabled: n,
        onClick: o,
        text: $.intl.formatToPlainString(r ? $.t.lQLsjc : $.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, i.jsx)(h.StarIcon, {
                  size: "xs",
                  className: a()(Q.Wo, Q.gj),
                  color: u.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, i.jsx)(g.y, { size: "xs", color: "currentColor", className: Q.Wo }),
    });
}
function ei(e) {
    var t, n, l;
    let u,
        {
            sound: x,
            channel: j,
            containerClassName: h,
            className: g,
            focused: E,
            forceSecondaryActions: T = !1,
            interactive: y = !0,
            enableSecondaryActions: k = !1,
            suppressPlaySound: P,
            onMouseEnter: G,
            onSelectItem: R,
            analyticsLocations: M,
            buttonOverlay: w = J.If.PLAY,
            showLockForDisabledSound: U = !0,
            inNitroLockedSection: z = !1,
            isAnimated: K = !0,
            isPlayingSoundOverride: F,
            isSoundmoji: q,
            soundmojiVisualEffectRef: ee,
            tooltipOverride: ei,
            enableFavoritesDragAndDrop: el = !1,
            isLastFavoriteSound: ea = !1,
            onFavoriteSoundDrop: er,
            disableActiveStyles: eo = !1,
            ref: ed,
            ...ec
        } = e,
        { name: eu, emojiId: em, emojiName: ex } = x,
        ej = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        eh = (0, X.v)(x, j?.guild_id),
        {
            playSoundboardSound: eg,
            previewSound: ep,
            isPlayingSound: eI,
        } = (0, V.A)(
            x,
            j?.id ?? null,
            (q ? D.HO.getSetting() : D.dG.getSetting()?.volume) ?? 100,
            !q && j?.isVocal() ? Z.a.VOICE : Z.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eN } = s.useContext(C.x),
        eb = s.useRef(null),
        ef =
            ((t = x.soundId),
            (n = eb.current),
            s.useMemo(() => {
                if (null == n || "1" !== t) return { x: 0, y: 0 };
                let e = n.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [n, t])),
        ev = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion),
        eA = s.useRef(0.01),
        eE = s.useRef(new c.IX()),
        eC = "1" === x.soundId,
        eS = `sound-${x.soundId}`,
        eO = (0, o.rm)(eS),
        [{ isDragging: eT }, ey] = (0, r.i)({
            type: H.Tj,
            item: () => ({ soundId: x.soundId }),
            canDrag: () => el,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        ek = s.useCallback(
            (e) => {
                (ey(e), "function" == typeof ed ? ed(e) : null != ed && (ed.current = e));
            },
            [ey, ed],
        ),
        eP = null != em || null != ex,
        e_ = !(0, B.Ir)(ej, x, j) && !q,
        eG = T || (k && !e_),
        eR = S.LW.useStore().bottomPosition ?? 0,
        eL = eb.current?.getBoundingClientRect().bottom ?? 0,
        [eD, eM] = s.useState(!1),
        ew = s.useCallback(() => {
            eM(!0);
        }, []),
        eU = s.useCallback(() => {
            eM(!1);
        }, []),
        ez = e_ && U;
    function eJ(e) {
        (eC &&
            !ev &&
            ((eA.current = Math.min(eA.current + 0.01, 0.1)),
            Math.random() < eA.current && eN(ef.x, ef.y, void 0, void 0, { sprite: Y.dR })),
        null != R)
            ? R(e)
            : P || eg(M);
    }
    let eB = (0, i.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: et({ sound: x, previewSound: ep, disabled: e_ && !T }),
    });
    function eV(e) {
        return P || e_
            ? ez
                ? (0, i.jsx)(I.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(Q.C4, Q.hz, e, { [Q.hn]: eP }),
                  })
                : null
            : (0, i.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: a()(Q.C4, e) });
    }
    let eK = (0, i.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: (0, i.jsx)(en, { sound: x, disabled: !y && !T }),
    });
    s.useEffect(() => {
        let e = eE.current;
        return (
            eC &&
                e.start(1e3, () => {
                    eA.current = Math.max(eA.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eC]);
    let eH =
        ((l = eb.current),
        null == (u = l?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: u.width, height: u.height });
    return (0, i.jsxs)("li", {
        ref: ek,
        className: a()(Q.H, h, { [Q.cB]: el && eT }),
        onMouseEnter: G,
        children: [
            el &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W, { edge: "before", targetSoundId: x.soundId, onDrop: er }),
                        ea && (0, i.jsx)(W, { edge: "after", targetSoundId: null, onDrop: er }),
                    ],
                }),
            (0, i.jsx)(m.m, {
                "aria-label": null != ei ? x.name : void 0,
                __unsupportedReactNodeAsText: ei ?? x.name,
                position: eL + 50 > eR ? "top" : "bottom",
                shouldShow: !eD,
                delay: 500,
                children: (0, i.jsxs)(f.s, {
                    ...ec,
                    buttonProps: { ...eO, id: eS, role: "button" },
                    "aria-label": $.intl.formatToPlainString($.t.tuMUJ2, { emojiName: x.emojiName, soundName: x.name }),
                    className: a()(
                        Q.aG,
                        {
                            [Q.CS]: K,
                            [Q.he]: F ?? eI,
                            [Q.ju]: P,
                            [Q.wT]: y,
                            [Q.$9]: !y && !T,
                            [Q.Au]: e_ && !T,
                            [Q.fx]: !y && T,
                            [Q.in]: y && E,
                            [Q.bo]: eo,
                        },
                        g,
                    ),
                    onClick: (e) => {
                        eJ?.(e);
                    },
                    onContextMenu: k && !e_ ? eh : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(Q.KM, { [Q.hn]: eP }),
                            "aria-hidden": !0,
                            ref: eb,
                            children: [
                                eP && (0, i.jsx)(v.A, { emojiId: em, emojiName: ex, className: Q.Zg }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/medium",
                                    color: y ? void 0 : "text-muted",
                                    className: a()(Q.TW, { [Q.hn]: eP }),
                                    children: eu,
                                }),
                            ],
                        }),
                        (function () {
                            switch (w) {
                                case J.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: Q.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: Q.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: Q.O5,
                                                children: [
                                                    eB,
                                                    (0, i.jsxs)("div", {
                                                        className: Q.c9,
                                                        children: [
                                                            (0, i.jsx)(N.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Q.y_,
                                                            }),
                                                            (0, i.jsx)(b.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: $.intl.string($.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eG && eK,
                                                ],
                                            }),
                                        ],
                                    });
                                case J.If.NONE:
                                    return null;
                                case J.If.PLAY:
                                case J.If.SOUNDMOJI:
                                default:
                                    return ez && !z
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: Q.LQ }),
                                                  eV(Q.B3),
                                                  (0, i.jsx)("div", {
                                                      className: Q.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: Q.O5,
                                                          children: [eG && eB, eG && eK],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: Q.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: a()({ [Q.LQ]: !P }) }),
                                                  (0, i.jsx)("div", {
                                                      className: Q.O5,
                                                      children:
                                                          w === J.If.SOUNDMOJI
                                                              ? (0, i.jsx)(O.Ay, {
                                                                    sound: x,
                                                                    channel: j,
                                                                    setTooltipShowing: eM,
                                                                    renderSoundButton: es,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [eG && eB, eV(), eG && eK],
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
                (0, i.jsx)(m.m, {
                    text: $.intl.string($.t.MDOXJR),
                    shouldShow: !eD,
                    children: (0, i.jsx)("div", {
                        className: Q.ET,
                        children: !z && (0, i.jsxs)("div", { className: Q.ld, children: [eB, eK] }),
                    }),
                }),
            !0 === q && (0, i.jsx)(L, { sound: x, containerDimensions: eH, ref: ee }),
        ],
    });
}
function es(e) {
    return (0, i.jsx)(ei, { ...e });
}
let el = ei;
