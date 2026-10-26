n.d(t, { Ay: () => er, dT: () => en, PI: () => ei });
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
    h = n(342073),
    j = n(983851),
    g = n(27232),
    p = n(505930),
    N = n(782134),
    I = n(194261),
    b = n(307301),
    f = n(834730),
    v = n(890856),
    A = n(565645),
    E = n(775602),
    C = n(688810),
    S = n(21161),
    O = n(850992),
    T = n(319993),
    y = n(435558),
    k = n(132500),
    P = n(104142),
    _ = n(407781),
    G = n(287809),
    L = n(194486),
    R = n(178226);
function M(e) {
    let { sound: t, containerDimensions: n, ref: l } = e,
        a = (0, d.bG)([G.default], () => G.default.getCurrentUser()),
        r = (0, d.bG)([E.Ay], () => E.Ay.useReducedMotion),
        [o, c] = s.useState([]),
        u = o.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = s.useCallback(() => {
            if (!r && u && m && null != a) {
                let e = (0, P.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    i = L.B.PREMIUM,
                    s = (0, y.random)(P.Bf[i].length, !1),
                    l = { id: (0, k.A)(), animationId: s, animationType: i, shouldResize: n, url: e, userId: a.id };
                c((e) => [...e, l]);
            }
        }, [r, u, m, a, t]);
    s.useImperativeHandle(l, () => ({ addAnimation: x }));
    let h = s.useCallback((e) => {
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
              children: o.map((e) => (0, i.jsx)(_.A, { containerDimensions: n, effect: e, onComplete: h }, e.id)),
          });
}
var D = n(885386),
    w = n(967198),
    U = n(174459),
    z = n(796774),
    J = n(209932),
    V = n(807348),
    B = n(813564),
    K = n(792348),
    F = n(949152),
    H = n(980504),
    W = n(84566);
function X(e) {
    let { targetSoundId: t, edge: n, onDrop: s } = e,
        [{ isOver: l, canDrop: r }, o] = (0, F.H)({
            accept: H.Tj,
            drop: (e) => {
                ((0, z.Lk)(e.soundId, t), s?.());
            },
            collect: (e) => ({ isOver: e.isOver(), canDrop: e.canDrop() }),
        });
    return (0, i.jsx)("div", {
        ref: (e) => {
            o(e);
        },
        "aria-hidden": !0,
        className: a()(W.target, W[n], { [W.autoPointerEvents]: r, [W.dragOver]: l && r }),
    });
}
var q = n(340368),
    Z = n(496502),
    Y = n(652215),
    $ = n(536283),
    Q = n(257645),
    ee = n(105292),
    et = n(948611);
function en(e) {
    let { disabled: t = !1, onClick: n, text: s, children: l, tooltipPosition: r = "top", ref: o } = e;
    return (0, i.jsx)(m.m, {
        text: s,
        position: r,
        children: (0, i.jsx)(x.D, {
            innerRef: o,
            "aria-label": s,
            className: a()(et.zr, { [et.$9]: t }),
            onClick: n,
            children: l,
        }),
    });
}
function ei(e) {
    let { sound: t, previewSound: n, disabled: l = !1, tooltipPosition: a = "top" } = e,
        r = (0, d.bG)([w.A], () => w.A.getGuildId()),
        o = (0, q._)("PreviewButton"),
        c = s.useMemo(
            () =>
                o
                    ? (0, i.jsx)(h.L, { size: "md", color: "currentColor", className: et.Wo })
                    : (0, i.jsx)(j.H, { size: "md", color: "currentColor", className: et.Wo }),
            [o],
        );
    return (0, i.jsx)(en, {
        tooltipPosition: a,
        disabled: l,
        onClick: function (e) {
            (U.default.track(Y.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n());
        },
        text: ee.intl.formatToPlainString(ee.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: c,
    });
}
function es(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: l } = (0, C.Ay)(),
        r = (0, d.bG)([J.A], () => J.A.isFavoriteSound(t.soundId), [t.soundId]),
        o = s.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, z.eS)(t.soundId)
                        : ((0, B.Ni)({ sound: t, location: { ...l, object: Y.ZSU.SOUNDBOARD_SOUND } }),
                          (0, z.Rp)(t.soundId)));
            },
            [r, t, l],
        );
    return (0, i.jsx)(en, {
        disabled: n,
        onClick: o,
        text: ee.intl.formatToPlainString(r ? ee.t.lQLsjc : ee.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, i.jsx)(g.StarIcon, {
                  size: "xs",
                  className: a()(et.Wo, et.gj),
                  color: u.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, i.jsx)(p.y, { size: "xs", color: "currentColor", className: et.Wo }),
    });
}
function el(e) {
    var t, n, l;
    let u,
        {
            sound: x,
            channel: h,
            containerClassName: j,
            className: g,
            focused: p,
            forceSecondaryActions: C = !1,
            interactive: y = !0,
            enableSecondaryActions: k = !1,
            suppressPlaySound: P,
            onMouseEnter: _,
            onSelectItem: L,
            analyticsLocations: R,
            buttonOverlay: w = V.If.PLAY,
            showLockForDisabledSound: U = !0,
            inNitroLockedSection: z = !1,
            isAnimated: J = !0,
            isPlayingSoundOverride: F,
            isSoundmoji: W,
            soundmojiVisualEffectRef: q,
            tooltipOverride: Y,
            enableFavoritesDragAndDrop: en = !1,
            isLastFavoriteSound: el = !1,
            onFavoriteSoundDrop: er,
            disableActiveStyles: eo = !1,
            ref: ed,
            ...ec
        } = e,
        { name: eu, emojiId: em, emojiName: ex } = x,
        eh = (0, d.bG)([G.default], () => G.default.getCurrentUser()),
        ej = (0, Z.v)(x, h?.guild_id),
        {
            playSoundboardSound: eg,
            previewSound: ep,
            isPlayingSound: eN,
        } = (0, K.A)(
            x,
            h?.id ?? null,
            (W ? D.HO.getSetting() : D.dG.getSetting()?.volume) ?? 100,
            !W && h?.isVocal() ? Q.a.VOICE : Q.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eI } = s.useContext(S.x),
        eb = s.useRef(null),
        ef =
            ((t = x.soundId),
            (n = eb.current),
            s.useMemo(() => {
                if (null == n || "1" !== t) return { x: 0, y: 0 };
                let e = n.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [n, t])),
        ev = (0, d.bG)([E.Ay], () => E.Ay.useReducedMotion),
        eA = s.useRef(0.01),
        eE = s.useRef(new c.IX()),
        eC = "1" === x.soundId,
        eS = `sound-${x.soundId}`,
        eO = (0, o.rm)(eS),
        [{ isDragging: eT }, ey] = (0, r.i)({
            type: H.Tj,
            item: () => ({ soundId: x.soundId }),
            canDrag: () => en,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        ek = s.useCallback(
            (e) => {
                (ey(e), "function" == typeof ed ? ed(e) : null != ed && (ed.current = e));
            },
            [ey, ed],
        ),
        eP = null != em || null != ex,
        e_ = !(0, B.Ir)(eh, x, h) && !W,
        eG = C || (k && !e_),
        eL = O.LW.useStore().bottomPosition ?? 0,
        eR = eb.current?.getBoundingClientRect().bottom ?? 0,
        [eM, eD] = s.useState(!1),
        ew = s.useCallback(() => {
            eD(!0);
        }, []),
        eU = s.useCallback(() => {
            eD(!1);
        }, []),
        ez = e_ && U;
    function eJ(e) {
        (eC &&
            !ev &&
            ((eA.current = Math.min(eA.current + 0.01, 0.1)),
            Math.random() < eA.current && eI(ef.x, ef.y, void 0, void 0, { sprite: $.dR })),
        null != L)
            ? L(e)
            : P || eg(R);
    }
    let eV = (0, i.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: ei({ sound: x, previewSound: ep, disabled: e_ && !C }),
    });
    function eB(e) {
        return P || e_
            ? ez
                ? (0, i.jsx)(I.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(et.C4, et.hz, e, { [et.hn]: eP }),
                  })
                : null
            : (0, i.jsx)(N.PlayIcon, { size: "xs", color: "currentColor", className: a()(et.C4, e) });
    }
    let eK = (0, i.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: (0, i.jsx)(es, { sound: x, disabled: !y && !C }),
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
    let eF =
        ((l = eb.current),
        null == (u = l?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: u.width, height: u.height });
    return (0, i.jsxs)("li", {
        ref: ek,
        className: a()(et.H, j, { [et.cB]: en && eT }),
        onMouseEnter: _,
        children: [
            en &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(X, { edge: "before", targetSoundId: x.soundId, onDrop: er }),
                        el && (0, i.jsx)(X, { edge: "after", targetSoundId: null, onDrop: er }),
                    ],
                }),
            (0, i.jsx)(m.m, {
                "aria-label": null != Y ? x.name : void 0,
                __unsupportedReactNodeAsText: Y ?? x.name,
                position: eR + 50 > eL ? "top" : "bottom",
                shouldShow: !eM,
                delay: 500,
                children: (0, i.jsxs)(v.s, {
                    ...ec,
                    buttonProps: { ...eO, id: eS, role: "button" },
                    "aria-label": ee.intl.formatToPlainString(ee.t.tuMUJ2, {
                        emojiName: x.emojiName,
                        soundName: x.name,
                    }),
                    className: a()(
                        et.aG,
                        {
                            [et.CS]: J,
                            [et.he]: F ?? eN,
                            [et.ju]: P,
                            [et.wT]: y,
                            [et.$9]: !y && !C,
                            [et.Au]: e_ && !C,
                            [et.fx]: !y && C,
                            [et.in]: y && p,
                            [et.bo]: eo,
                        },
                        g,
                    ),
                    onClick: (e) => {
                        eJ?.(e);
                    },
                    onContextMenu: k && !e_ ? ej : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(et.KM, { [et.hn]: eP }),
                            "aria-hidden": !0,
                            ref: eb,
                            children: [
                                eP && (0, i.jsx)(A.A, { emojiId: em, emojiName: ex, className: et.Zg }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: y ? void 0 : "text-muted",
                                    className: a()(et.TW, { [et.hn]: eP }),
                                    children: eu,
                                }),
                            ],
                        }),
                        (function () {
                            switch (w) {
                                case V.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: et.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: et.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: et.O5,
                                                children: [
                                                    eV,
                                                    (0, i.jsxs)("div", {
                                                        className: et.c9,
                                                        children: [
                                                            (0, i.jsx)(b.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: et.y_,
                                                            }),
                                                            (0, i.jsx)(f.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: ee.intl.string(ee.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eG && eK,
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
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: et.LQ }),
                                                  eB(et.B3),
                                                  (0, i.jsx)("div", {
                                                      className: et.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: et.O5,
                                                          children: [eG && eV, eG && eK],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: et.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: a()({ [et.LQ]: !P }) }),
                                                  (0, i.jsx)("div", {
                                                      className: et.O5,
                                                      children:
                                                          w === V.If.SOUNDMOJI
                                                              ? (0, i.jsx)(T.Ay, {
                                                                    sound: x,
                                                                    channel: h,
                                                                    setTooltipShowing: eD,
                                                                    renderSoundButton: ea,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [eG && eV, eB(), eG && eK],
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
                    text: ee.intl.string(ee.t.MDOXJR),
                    shouldShow: !eM,
                    children: (0, i.jsx)("div", {
                        className: et.ET,
                        children: !z && (0, i.jsxs)("div", { className: et.ld, children: [eV, eK] }),
                    }),
                }),
            !0 === W && (0, i.jsx)(M, { sound: x, containerDimensions: eF, ref: q }),
        ],
    });
}
function ea(e) {
    return (0, i.jsx)(el, { ...e });
}
let er = el;
