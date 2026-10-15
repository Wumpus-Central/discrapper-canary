n.d(t, { Ay: () => el, dT: () => ee, PI: () => et });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(739822),
    o = n(837381),
    c = n(17928),
    d = n(451988),
    u = n(661531),
    m = n(866665),
    x = n(939249),
    h = n(983851),
    j = n(27232),
    g = n(505930),
    p = n(782134),
    I = n(194261),
    N = n(307301),
    b = n(834730),
    f = n(890856),
    A = n(565645),
    E = n(775602),
    v = n(688810),
    C = n(21161),
    S = n(850992),
    O = n(319993),
    y = n(435558),
    T = n(132500),
    k = n(104142),
    P = n(407781),
    G = n(287809),
    _ = n(194486),
    R = n(178226);
function L(e) {
    let { sound: t, containerDimensions: n, ref: l } = e,
        r = (0, c.bG)([G.default], () => G.default.getCurrentUser()),
        a = (0, c.bG)([E.Ay], () => E.Ay.useReducedMotion),
        [o, d] = s.useState([]),
        u = o.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = s.useCallback(() => {
            if (!a && u && m && null != r) {
                let e = (0, k.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    i = _.B.PREMIUM,
                    s = (0, y.random)(k.Bf[i].length, !1),
                    l = { id: (0, T.A)(), animationId: s, animationType: i, shouldResize: n, url: e, userId: r.id };
                d((e) => [...e, l]);
            }
        }, [a, u, m, r, t]);
    s.useImperativeHandle(l, () => ({ addAnimation: x }));
    let h = s.useCallback((e) => {
        d((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return (n.splice(i, 1), n);
        });
    }, []);
    return a || !m
        ? null
        : (0, i.jsx)("div", {
              className: R.z,
              style: { width: n.width, height: n.height },
              children: o.map((e) => (0, i.jsx)(P.A, { containerDimensions: n, effect: e, onComplete: h }, e.id)),
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
        [{ isOver: l, canDrop: a }, o] = (0, K.H)({
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
        className: r()(F.target, F[n], { [F.autoPointerEvents]: a, [F.dragOver]: l && a }),
    });
}
var X = n(496502),
    q = n(652215),
    Y = n(536283),
    Q = n(257645),
    Z = n(105292),
    $ = n(948611);
function ee(e) {
    let { disabled: t = !1, onClick: n, text: s, children: l, tooltipPosition: a = "top", ref: o } = e;
    return (0, i.jsx)(m.m, {
        text: s,
        position: a,
        children: (0, i.jsx)(x.D, {
            innerRef: o,
            "aria-label": s,
            className: r()($.zr, { [$.$9]: t }),
            onClick: n,
            children: l,
        }),
    });
}
function et(e) {
    let { sound: t, previewSound: n, disabled: s = !1, tooltipPosition: l = "top" } = e,
        r = (0, c.bG)([M.A], () => M.A.getGuildId());
    return (0, i.jsx)(ee, {
        tooltipPosition: l,
        disabled: s,
        onClick: function (e) {
            (w.default.track(q.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n());
        },
        text: Z.intl.formatToPlainString(Z.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: (0, i.jsx)(h.H, { size: "md", color: "currentColor", className: $.Wo }),
    });
}
function en(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: l } = (0, v.Ay)(),
        a = (0, c.bG)([z.A], () => z.A.isFavoriteSound(t.soundId), [t.soundId]),
        o = s.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    a
                        ? (0, U.eS)(t.soundId)
                        : ((0, B.Ni)({ sound: t, location: { ...l, object: q.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(t.soundId)));
            },
            [a, t, l],
        );
    return (0, i.jsx)(ee, {
        disabled: n,
        onClick: o,
        text: Z.intl.formatToPlainString(a ? Z.t.lQLsjc : Z.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: a
            ? (0, i.jsx)(j.StarIcon, {
                  size: "xs",
                  className: r()($.Wo, $.gj),
                  color: u.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, i.jsx)(g.y, { size: "xs", color: "currentColor", className: $.Wo }),
    });
}
function ei(e) {
    var t, n, l;
    let u,
        {
            sound: x,
            channel: h,
            containerClassName: j,
            className: g,
            focused: v,
            forceSecondaryActions: y = !1,
            interactive: T = !0,
            enableSecondaryActions: k = !1,
            suppressPlaySound: P,
            onMouseEnter: _,
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
            isLastFavoriteSound: er = !1,
            onFavoriteSoundDrop: ea,
            disableActiveStyles: eo = !1,
            ref: ec,
            ...ed
        } = e,
        { name: eu, emojiId: em, emojiName: ex } = x,
        eh = (0, c.bG)([G.default], () => G.default.getCurrentUser()),
        ej = (0, X.v)(x, h?.guild_id),
        {
            playSoundboardSound: eg,
            previewSound: ep,
            isPlayingSound: eI,
        } = (0, V.A)(
            x,
            h?.id ?? null,
            (q ? D.HO.getSetting() : D.dG.getSetting()?.volume) ?? 100,
            !q && h?.isVocal() ? Q.a.VOICE : Q.a.DEFAULT,
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
        eA = (0, c.bG)([E.Ay], () => E.Ay.useReducedMotion),
        eE = s.useRef(0.01),
        ev = s.useRef(new d.IX()),
        eC = "1" === x.soundId,
        eS = `sound-${x.soundId}`,
        eO = (0, o.rm)(eS),
        [{ isDragging: ey }, eT] = (0, a.i)({
            type: H.Tj,
            item: () => ({ soundId: x.soundId }),
            canDrag: () => el,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        ek = s.useCallback(
            (e) => {
                (eT(e), "function" == typeof ec ? ec(e) : null != ec && (ec.current = e));
            },
            [eT, ec],
        ),
        eP = null != em || null != ex,
        eG = !(0, B.Ir)(eh, x, h) && !q,
        e_ = y || (k && !eG),
        eR = S.LW.useStore().bottomPosition ?? 0,
        eL = eb.current?.getBoundingClientRect().bottom ?? 0,
        [eD, eM] = s.useState(!1),
        ew = s.useCallback(() => {
            eM(!0);
        }, []),
        eU = s.useCallback(() => {
            eM(!1);
        }, []),
        ez = eG && U;
    function eJ(e) {
        (eC &&
            !eA &&
            ((eE.current = Math.min(eE.current + 0.01, 0.1)),
            Math.random() < eE.current && eN(ef.x, ef.y, void 0, void 0, { sprite: Y.dR })),
        null != R)
            ? R(e)
            : P || eg(M);
    }
    let eB = (0, i.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: et({ sound: x, previewSound: ep, disabled: eG && !y }),
    });
    function eV(e) {
        return P || eG
            ? ez
                ? (0, i.jsx)(I.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: r()($.C4, $.hz, e, { [$.hn]: eP }),
                  })
                : null
            : (0, i.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: r()($.C4, e) });
    }
    let eK = (0, i.jsx)("div", {
        onMouseEnter: ew,
        onMouseLeave: eU,
        children: (0, i.jsx)(en, { sound: x, disabled: !T && !y }),
    });
    s.useEffect(() => {
        let e = ev.current;
        return (
            eC &&
                e.start(1e3, () => {
                    eE.current = Math.max(eE.current - 0.01, 0.01);
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
        className: r()($.H, j, { [$.cB]: el && ey }),
        onMouseEnter: _,
        children: [
            el &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W, { edge: "before", targetSoundId: x.soundId, onDrop: ea }),
                        er && (0, i.jsx)(W, { edge: "after", targetSoundId: null, onDrop: ea }),
                    ],
                }),
            (0, i.jsx)(m.m, {
                "aria-label": null != ei ? x.name : void 0,
                __unsupportedReactNodeAsText: ei ?? x.name,
                position: eL + 50 > eR ? "top" : "bottom",
                shouldShow: !eD,
                delay: 500,
                children: (0, i.jsxs)(f.s, {
                    ...ed,
                    buttonProps: { ...eO, id: eS, role: "button" },
                    "aria-label": Z.intl.formatToPlainString(Z.t.tuMUJ2, { emojiName: x.emojiName, soundName: x.name }),
                    className: r()(
                        $.aG,
                        {
                            [$.CS]: K,
                            [$.he]: F ?? eI,
                            [$.ju]: P,
                            [$.wT]: T,
                            [$.$9]: !T && !y,
                            [$.Au]: eG && !y,
                            [$.fx]: !T && y,
                            [$.in]: T && v,
                            [$.bo]: eo,
                        },
                        g,
                    ),
                    onClick: (e) => {
                        eJ?.(e);
                    },
                    onContextMenu: k && !eG ? ej : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: r()($.KM, { [$.hn]: eP }),
                            "aria-hidden": !0,
                            ref: eb,
                            children: [
                                eP && (0, i.jsx)(A.A, { emojiId: em, emojiName: ex, className: $.Zg }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/medium",
                                    color: T ? void 0 : "text-muted",
                                    className: r()($.TW, { [$.hn]: eP }),
                                    children: eu,
                                }),
                            ],
                        }),
                        (function () {
                            switch (w) {
                                case J.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: $.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: $.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: $.O5,
                                                children: [
                                                    eB,
                                                    (0, i.jsxs)("div", {
                                                        className: $.c9,
                                                        children: [
                                                            (0, i.jsx)(N.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: $.y_,
                                                            }),
                                                            (0, i.jsx)(b.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: Z.intl.string(Z.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    e_ && eK,
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
                                                  (0, i.jsx)("div", { className: $.LQ }),
                                                  eV($.B3),
                                                  (0, i.jsx)("div", {
                                                      className: $.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: $.O5,
                                                          children: [e_ && eB, e_ && eK],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: $.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: r()({ [$.LQ]: !P }) }),
                                                  (0, i.jsx)("div", {
                                                      className: $.O5,
                                                      children:
                                                          w === J.If.SOUNDMOJI
                                                              ? (0, i.jsx)(O.Ay, {
                                                                    sound: x,
                                                                    channel: h,
                                                                    setTooltipShowing: eM,
                                                                    renderSoundButton: es,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [e_ && eB, eV(), e_ && eK],
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
                    text: Z.intl.string(Z.t.MDOXJR),
                    shouldShow: !eD,
                    children: (0, i.jsx)("div", {
                        className: $.ET,
                        children: !z && (0, i.jsxs)("div", { className: $.ld, children: [eB, eK] }),
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
