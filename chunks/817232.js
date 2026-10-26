n.d(t, { Ay: () => er, dT: () => en, PI: () => es });
var s = n(477900),
    i = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(739822),
    o = n(837381),
    c = n(17928),
    d = n(451988),
    u = n(661531),
    m = n(866665),
    x = n(939249),
    h = n(375484),
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
    y = n(319993),
    T = n(435558),
    k = n(132500),
    P = n(104142),
    _ = n(407781),
    G = n(287809),
    R = n(194486),
    L = n(178226);
function D(e) {
    let { sound: t, containerDimensions: n, ref: l } = e,
        a = (0, c.bG)([G.default], () => G.default.getCurrentUser()),
        r = (0, c.bG)([E.Ay], () => E.Ay.useReducedMotion),
        [o, d] = i.useState([]),
        u = o.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = i.useCallback(() => {
            if (!r && u && m && null != a) {
                let e = (0, P.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    s = R.B.PREMIUM,
                    i = (0, T.random)(P.Bf[s].length, !1),
                    l = { id: (0, k.A)(), animationId: i, animationType: s, shouldResize: n, url: e, userId: a.id };
                d((e) => [...e, l]);
            }
        }, [r, u, m, a, t]);
    i.useImperativeHandle(l, () => ({ addAnimation: x }));
    let h = i.useCallback((e) => {
        d((t) => {
            let n = [...t],
                s = n.findIndex((t) => t.id === e);
            return (n.splice(s, 1), n);
        });
    }, []);
    return r || !m
        ? null
        : (0, s.jsx)("div", {
              className: L.z,
              style: { width: n.width, height: n.height },
              children: o.map((e) => (0, s.jsx)(_.A, { containerDimensions: n, effect: e, onComplete: h }, e.id)),
          });
}
var M = n(885386),
    w = n(967198),
    U = n(174459),
    z = n(796774),
    J = n(209932),
    B = n(807348),
    V = n(813564),
    K = n(792348),
    F = n(949152),
    H = n(980504),
    W = n(84566);
function X(e) {
    let { targetSoundId: t, edge: n, onDrop: i } = e,
        [{ isOver: l, canDrop: r }, o] = (0, F.H)({
            accept: H.Tj,
            drop: (e) => {
                ((0, z.Lk)(e.soundId, t), i?.());
            },
            collect: (e) => ({ isOver: e.isOver(), canDrop: e.canDrop() }),
        });
    return (0, s.jsx)("div", {
        ref: (e) => {
            o(e);
        },
        "aria-hidden": !0,
        className: a()(W.target, W[n], { [W.autoPointerEvents]: r, [W.dragOver]: l && r }),
    });
}
var q = n(340368),
    Y = n(496502),
    Z = n(652215),
    $ = n(536283),
    Q = n(257645),
    ee = n(105292),
    et = n(948611);
function en(e) {
    let { disabled: t = !1, onClick: n, text: i, children: l, tooltipPosition: r = "top", ref: o } = e;
    return (0, s.jsx)(m.m, {
        text: i,
        position: r,
        children: (0, s.jsx)(x.D, {
            innerRef: o,
            "aria-label": i,
            className: a()(et.zr, { [et.$9]: t }),
            onClick: n,
            children: l,
        }),
    });
}
function es(e) {
    let { sound: t, previewSound: n, disabled: l = !1, tooltipPosition: a = "top" } = e,
        r = (0, c.bG)([w.A], () => w.A.getGuildId()),
        o = (0, q._)("PreviewButton"),
        d = i.useMemo(
            () =>
                o
                    ? (0, s.jsx)(h.G, { size: "md", color: "currentColor", className: et.Wo })
                    : (0, s.jsx)(j.H, { size: "md", color: "currentColor", className: et.Wo }),
            [o],
        );
    return (0, s.jsx)(en, {
        tooltipPosition: a,
        disabled: l,
        onClick: function (e) {
            (U.default.track(Z.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
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
        children: d,
    });
}
function ei(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: l } = (0, C.Ay)(),
        r = (0, c.bG)([J.A], () => J.A.isFavoriteSound(t.soundId), [t.soundId]),
        o = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, z.eS)(t.soundId)
                        : ((0, V.Ni)({ sound: t, location: { ...l, object: Z.ZSU.SOUNDBOARD_SOUND } }),
                          (0, z.Rp)(t.soundId)));
            },
            [r, t, l],
        );
    return (0, s.jsx)(en, {
        disabled: n,
        onClick: o,
        text: ee.intl.formatToPlainString(r ? ee.t.lQLsjc : ee.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, s.jsx)(g.StarIcon, {
                  size: "xs",
                  className: a()(et.Wo, et.gj),
                  color: u.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, s.jsx)(p.y, { size: "xs", color: "currentColor", className: et.Wo }),
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
            interactive: T = !0,
            enableSecondaryActions: k = !1,
            suppressPlaySound: P,
            onMouseEnter: _,
            onSelectItem: R,
            analyticsLocations: L,
            buttonOverlay: w = B.If.PLAY,
            showLockForDisabledSound: U = !0,
            inNitroLockedSection: z = !1,
            isAnimated: J = !0,
            isPlayingSoundOverride: F,
            isSoundmoji: W,
            soundmojiVisualEffectRef: q,
            tooltipOverride: Z,
            enableFavoritesDragAndDrop: en = !1,
            isLastFavoriteSound: el = !1,
            onFavoriteSoundDrop: er,
            disableActiveStyles: eo = !1,
            ref: ec,
            ...ed
        } = e,
        { name: eu, emojiId: em, emojiName: ex } = x,
        eh = (0, c.bG)([G.default], () => G.default.getCurrentUser()),
        ej = (0, Y.v)(x, h?.guild_id),
        {
            playSoundboardSound: eg,
            previewSound: ep,
            isPlayingSound: eN,
        } = (0, K.A)(
            x,
            h?.id ?? null,
            (W ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !W && h?.isVocal() ? Q.a.VOICE : Q.a.DEFAULT,
        ),
        { createMultipleConfettiAt: eI } = i.useContext(S.x),
        eb = i.useRef(null),
        ef =
            ((t = x.soundId),
            (n = eb.current),
            i.useMemo(() => {
                if (null == n || "1" !== t) return { x: 0, y: 0 };
                let e = n.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [n, t])),
        ev = (0, c.bG)([E.Ay], () => E.Ay.useReducedMotion),
        eA = i.useRef(0.01),
        eE = i.useRef(new d.IX()),
        eC = "1" === x.soundId,
        eS = `sound-${x.soundId}`,
        eO = (0, o.rm)(eS),
        [{ isDragging: ey }, eT] = (0, r.i)({
            type: H.Tj,
            item: () => ({ soundId: x.soundId }),
            canDrag: () => en,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        ek = i.useCallback(
            (e) => {
                (eT(e), "function" == typeof ec ? ec(e) : null != ec && (ec.current = e));
            },
            [eT, ec],
        ),
        eP = null != em || null != ex,
        e_ = !(0, V.Ir)(eh, x, h) && !W,
        eG = C || (k && !e_),
        eR = O.LW.useStore().bottomPosition ?? 0,
        eL = eb.current?.getBoundingClientRect().bottom ?? 0,
        [eD, eM] = i.useState(!1),
        ew = i.useCallback(() => {
            eM(!0);
        }, []),
        eU = i.useCallback(() => {
            eM(!1);
        }, []),
        ez = e_ && U;
    function eJ(e) {
        (eC &&
            !ev &&
            ((eA.current = Math.min(eA.current + 0.01, 0.1)),
            Math.random() < eA.current && eI(ef.x, ef.y, void 0, void 0, { sprite: $.dR })),
        null != R)
            ? R(e)
            : P || eg(L);
    }
    let eB = (0, s.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: es({ sound: x, previewSound: ep, disabled: e_ && !C }),
    });
    function eV(e) {
        return P || e_
            ? ez
                ? (0, s.jsx)(I.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(et.C4, et.hz, e, { [et.hn]: eP }),
                  })
                : null
            : (0, s.jsx)(N.PlayIcon, { size: "xs", color: "currentColor", className: a()(et.C4, e) });
    }
    let eK = (0, s.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: (0, s.jsx)(ei, { sound: x, disabled: !T && !C }),
    });
    i.useEffect(() => {
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
    return (0, s.jsxs)("li", {
        ref: ek,
        className: a()(et.H, j, { [et.cB]: en && ey }),
        onMouseEnter: _,
        children: [
            en &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(X, { edge: "before", targetSoundId: x.soundId, onDrop: er }),
                        el && (0, s.jsx)(X, { edge: "after", targetSoundId: null, onDrop: er }),
                    ],
                }),
            (0, s.jsx)(m.m, {
                "aria-label": null != Z ? x.name : void 0,
                __unsupportedReactNodeAsText: Z ?? x.name,
                position: eL + 50 > eR ? "top" : "bottom",
                shouldShow: !eD,
                delay: 500,
                children: (0, s.jsxs)(v.s, {
                    ...ed,
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
                            [et.wT]: T,
                            [et.$9]: !T && !C,
                            [et.Au]: e_ && !C,
                            [et.fx]: !T && C,
                            [et.in]: T && p,
                            [et.bo]: eo,
                        },
                        g,
                    ),
                    onClick: (e) => {
                        eJ?.(e);
                    },
                    onContextMenu: k && !e_ ? ej : void 0,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(et.KM, { [et.hn]: eP }),
                            "aria-hidden": !0,
                            ref: eb,
                            children: [
                                eP && (0, s.jsx)(A.A, { emojiId: em, emojiName: ex, className: et.Zg }),
                                (0, s.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: T ? void 0 : "text-muted",
                                    className: a()(et.TW, { [et.hn]: eP }),
                                    children: eu,
                                }),
                            ],
                        }),
                        (function () {
                            switch (w) {
                                case B.If.ADD:
                                    return (0, s.jsxs)("div", {
                                        className: et.ec,
                                        children: [
                                            (0, s.jsx)("div", { className: et.LQ }),
                                            (0, s.jsxs)("div", {
                                                className: et.O5,
                                                children: [
                                                    eB,
                                                    (0, s.jsxs)("div", {
                                                        className: et.c9,
                                                        children: [
                                                            (0, s.jsx)(b.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: et.y_,
                                                            }),
                                                            (0, s.jsx)(f.E, {
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
                                case B.If.NONE:
                                    return null;
                                case B.If.PLAY:
                                case B.If.SOUNDMOJI:
                                default:
                                    return ez && !z
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("div", { className: et.LQ }),
                                                  eV(et.B3),
                                                  (0, s.jsx)("div", {
                                                      className: et.d7,
                                                      children: (0, s.jsxs)("div", {
                                                          className: et.O5,
                                                          children: [eG && eB, eG && eK],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, s.jsxs)("div", {
                                              className: et.d7,
                                              children: [
                                                  (0, s.jsx)("div", { className: a()({ [et.LQ]: !P }) }),
                                                  (0, s.jsx)("div", {
                                                      className: et.O5,
                                                      children:
                                                          w === B.If.SOUNDMOJI
                                                              ? (0, s.jsx)(y.Ay, {
                                                                    sound: x,
                                                                    channel: h,
                                                                    setTooltipShowing: eM,
                                                                    renderSoundButton: ea,
                                                                })
                                                              : (0, s.jsxs)(s.Fragment, {
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
                (0, s.jsx)(m.m, {
                    text: ee.intl.string(ee.t.MDOXJR),
                    shouldShow: !eD,
                    children: (0, s.jsx)("div", {
                        className: et.ET,
                        children: !z && (0, s.jsxs)("div", { className: et.ld, children: [eB, eK] }),
                    }),
                }),
            !0 === W && (0, s.jsx)(D, { sound: x, containerDimensions: eF, ref: q }),
        ],
    });
}
function ea(e) {
    return (0, s.jsx)(el, { ...e });
}
let er = el;
