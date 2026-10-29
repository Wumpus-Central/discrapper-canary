n.d(t, { Ay: () => en, dT: () => Y, PI: () => $ });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(837381),
    o = n(17928),
    c = n(451988),
    d = n(661531),
    u = n(866665),
    m = n(939249),
    x = n(342073),
    h = n(983851),
    j = n(27232),
    g = n(505930),
    p = n(782134),
    N = n(194261),
    I = n(307301),
    b = n(834730),
    f = n(890856),
    v = n(788026),
    A = n(775602),
    E = n(688810),
    C = n(21161),
    S = n(850992),
    O = n(319993),
    y = n(435558),
    T = n(132500),
    k = n(104142),
    P = n(407781),
    _ = n(287809),
    R = n(194486),
    L = n(178226);
function G(e) {
    let { sound: t, containerDimensions: n, ref: l } = e,
        a = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        r = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        [c, d] = s.useState([]),
        u = c.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = s.useCallback(() => {
            if (!r && u && m && null != a) {
                let e = (0, k.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    i = R.B.PREMIUM,
                    s = (0, y.random)(k.Bf[i].length, !1),
                    l = { id: (0, T.A)(), animationId: s, animationType: i, shouldResize: n, url: e, userId: a.id };
                d((e) => [...e, l]);
            }
        }, [r, u, m, a, t]);
    s.useImperativeHandle(l, () => ({ addAnimation: x }));
    let h = s.useCallback((e) => {
        d((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return (n.splice(i, 1), n);
        });
    }, []);
    return r || !m
        ? null
        : (0, i.jsx)("div", {
              className: L.z,
              style: { width: n.width, height: n.height },
              children: c.map((e) => (0, i.jsx)(P.A, { containerDimensions: n, effect: e, onComplete: h }, e.id)),
          });
}
var M = n(253932),
    w = n(967198),
    D = n(174459),
    U = n(796774),
    z = n(209932),
    J = n(807348),
    V = n(813564),
    B = n(792348),
    K = n(340368),
    F = n(496502),
    H = n(652215),
    W = n(536283),
    X = n(257645),
    q = n(105292),
    Z = n(948611);
function Y(e) {
    let { disabled: t = !1, onClick: n, text: s, children: l, tooltipPosition: r = "top", ref: o } = e;
    return (0, i.jsx)(u.m, {
        text: s,
        position: r,
        children: (0, i.jsx)(m.D, {
            innerRef: o,
            "aria-label": s,
            className: a()(Z.zr, { [Z.$9]: t }),
            onClick: n,
            children: l,
        }),
    });
}
function $(e) {
    let { sound: t, previewSound: n, disabled: l = !1, tooltipPosition: a = "top" } = e,
        r = (0, o.bG)([w.A], () => w.A.getGuildId()),
        c = (0, K._)("PreviewButton"),
        d = s.useMemo(
            () =>
                c
                    ? (0, i.jsx)(x.L, { size: "md", color: "currentColor", className: Z.Wo })
                    : (0, i.jsx)(h.H, { size: "md", color: "currentColor", className: Z.Wo }),
            [c],
        );
    return (0, i.jsx)(Y, {
        tooltipPosition: a,
        disabled: l,
        onClick: function (e) {
            (D.default.track(H.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n());
        },
        text: q.intl.formatToPlainString(q.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: d,
    });
}
function Q(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: l } = (0, E.Ay)(),
        r = (0, o.bG)([z.A], () => z.A.isFavoriteSound(t.soundId), [t.soundId]),
        c = s.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(t.soundId)
                        : ((0, V.Ni)({ sound: t, location: { ...l, object: H.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(t.soundId)));
            },
            [r, t, l],
        );
    return (0, i.jsx)(Y, {
        disabled: n,
        onClick: c,
        text: q.intl.formatToPlainString(r ? q.t.lQLsjc : q.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, i.jsx)(j.StarIcon, {
                  size: "xs",
                  className: a()(Z.Wo, Z.gj),
                  color: d.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, i.jsx)(g.y, { size: "xs", color: "currentColor", className: Z.Wo }),
    });
}
function ee(e) {
    var t, n, l;
    let d,
        {
            sound: m,
            channel: x,
            containerClassName: h,
            className: j,
            focused: g,
            forceSecondaryActions: E = !1,
            interactive: y = !0,
            enableSecondaryActions: T = !1,
            suppressPlaySound: k,
            onMouseEnter: P,
            onSelectItem: R,
            analyticsLocations: L,
            buttonOverlay: w = J.If.PLAY,
            showLockForDisabledSound: D = !0,
            inNitroLockedSection: U = !1,
            isAnimated: z = !0,
            isPlayingSoundOverride: K,
            isSoundmoji: H,
            soundmojiVisualEffectRef: Y,
            tooltipOverride: ee,
            isNew: en = !1,
            ref: ei,
            ...es
        } = e,
        { name: el, emojiId: ea, emojiName: er } = m,
        eo = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        ec = (0, F.v)(m, x?.guild_id),
        {
            playSoundboardSound: ed,
            previewSound: eu,
            isPlayingSound: em,
        } = (0, B.A)(
            m,
            x?.id ?? null,
            (H ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !H && x?.isVocal() ? X.a.VOICE : X.a.DEFAULT,
        ),
        { createMultipleConfettiAt: ex } = s.useContext(C.x),
        eh = s.useRef(null),
        ej =
            ((t = m.soundId),
            (n = eh.current),
            s.useMemo(() => {
                if (null == n || "1" !== t) return { x: 0, y: 0 };
                let e = n.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [n, t])),
        eg = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        ep = s.useRef(0.01),
        eN = s.useRef(new c.IX()),
        eI = "1" === m.soundId,
        eb = `sound-${m.soundId}`,
        ef = (0, r.rm)(eb),
        ev = null != ea || null != er,
        eA = !(0, V.Ir)(eo, m, x) && !H,
        eE = E || (T && !eA),
        eC = S.LW.useStore().bottomPosition ?? 0,
        eS = eh.current?.getBoundingClientRect().bottom ?? 0,
        [eO, ey] = s.useState(!1),
        eT = s.useCallback(() => {
            ey(!0);
        }, []),
        ek = s.useCallback(() => {
            ey(!1);
        }, []),
        eP = eA && D;
    function e_(e) {
        (eI &&
            !eg &&
            ((ep.current = Math.min(ep.current + 0.01, 0.1)),
            Math.random() < ep.current && ex(ej.x, ej.y, void 0, void 0, { sprite: W.dR })),
        null != R)
            ? R(e)
            : k || ed(L);
    }
    let eR = (0, i.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ek,
        children: $({ sound: m, previewSound: eu, disabled: eA && !E }),
    });
    function eL(e) {
        return k || eA
            ? eP
                ? (0, i.jsx)(N.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(Z.C4, Z.hz, e, { [Z.hn]: ev }),
                  })
                : null
            : (0, i.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: a()(Z.C4, e) });
    }
    let eG = (0, i.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ek,
        children: (0, i.jsx)(Q, { sound: m, disabled: !y && !E }),
    });
    s.useEffect(() => {
        let e = eN.current;
        return (
            eI &&
                e.start(1e3, () => {
                    ep.current = Math.max(ep.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eI]);
    let eM =
            ((l = eh.current),
            null == (d = l?.parentElement?.getBoundingClientRect())
                ? { width: 0, height: 0 }
                : { width: d.width, height: d.height }),
        ew = q.intl.formatToPlainString(q.t.tuMUJ2, { emojiName: m.emojiName, soundName: m.name });
    return (0, i.jsxs)("li", {
        ref: ei,
        className: a()(Z.H, h),
        onMouseEnter: P,
        children: [
            (0, i.jsx)(u.m, {
                "aria-label": null != ee ? m.name : void 0,
                __unsupportedReactNodeAsText: ee ?? m.name,
                position: eS + 50 > eC ? "top" : "bottom",
                shouldShow: !eO,
                delay: 500,
                children: (0, i.jsxs)(f.s, {
                    ...es,
                    buttonProps: { ...ef, id: eb, role: "button" },
                    "aria-label": en ? `${ew}, ${q.intl.string(q.t.y2b7CA)}` : ew,
                    className: a()(
                        Z.aG,
                        {
                            [Z.CS]: z,
                            [Z.he]: K ?? em,
                            [Z.ju]: k,
                            [Z.wT]: y,
                            [Z.$9]: !y && !E,
                            [Z.Au]: eA && !E,
                            [Z.fx]: !y && E,
                            [Z.in]: y && g,
                            [Z.ox]: en,
                        },
                        j,
                    ),
                    onClick: (e) => {
                        e_?.(e);
                    },
                    onContextMenu: T && !eA ? ec : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(Z.KM, { [Z.hn]: ev }),
                            "aria-hidden": !0,
                            ref: eh,
                            children: [
                                ev && (0, i.jsx)(v.A, { emojiId: ea, emojiName: er, className: Z.Zg }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/medium",
                                    color: y ? void 0 : "text-muted",
                                    className: a()(Z.TW, { [Z.hn]: ev }),
                                    children: el,
                                }),
                            ],
                        }),
                        en && !eg && (0, i.jsx)("span", { className: Z.wO, "aria-hidden": !0 }),
                        (function () {
                            switch (w) {
                                case J.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: Z.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: Z.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: Z.O5,
                                                children: [
                                                    eR,
                                                    (0, i.jsxs)("div", {
                                                        className: Z.c9,
                                                        children: [
                                                            (0, i.jsx)(I.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: Z.y_,
                                                            }),
                                                            (0, i.jsx)(b.E, {
                                                                variant: "text-xs/medium",
                                                                color: "text-strong",
                                                                children: q.intl.string(q.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eE && eG,
                                                ],
                                            }),
                                        ],
                                    });
                                case J.If.NONE:
                                    return null;
                                case J.If.PLAY:
                                case J.If.SOUNDMOJI:
                                default:
                                    return eP && !U
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: Z.LQ }),
                                                  eL(Z.B3),
                                                  (0, i.jsx)("div", {
                                                      className: Z.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: Z.O5,
                                                          children: [eE && eR, eE && eG],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: Z.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: a()({ [Z.LQ]: !k }) }),
                                                  (0, i.jsx)("div", {
                                                      className: Z.O5,
                                                      children:
                                                          w === J.If.SOUNDMOJI
                                                              ? (0, i.jsx)(O.Ay, {
                                                                    sound: m,
                                                                    channel: x,
                                                                    setTooltipShowing: ey,
                                                                    renderSoundButton: et,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [eE && eR, eL(), eE && eG],
                                                                }),
                                                  }),
                                              ],
                                          });
                            }
                        })(),
                    ],
                }),
            }),
            !m.available &&
                (0, i.jsx)(u.m, {
                    text: q.intl.string(q.t.MDOXJR),
                    shouldShow: !eO,
                    children: (0, i.jsx)("div", {
                        className: Z.ET,
                        children: !U && (0, i.jsxs)("div", { className: Z.ld, children: [eR, eG] }),
                    }),
                }),
            !0 === H && (0, i.jsx)(G, { sound: m, containerDimensions: eM, ref: Y }),
        ],
    });
}
function et(e) {
    return (0, i.jsx)(ee, { ...e });
}
let en = ee;
