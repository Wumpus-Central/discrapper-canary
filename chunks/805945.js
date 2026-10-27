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
    v = n(565645),
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
            ref: en,
            ...ei
        } = e,
        { name: es, emojiId: el, emojiName: ea } = m,
        er = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        eo = (0, F.v)(m, x?.guild_id),
        {
            playSoundboardSound: ec,
            previewSound: ed,
            isPlayingSound: eu,
        } = (0, B.A)(
            m,
            x?.id ?? null,
            (H ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !H && x?.isVocal() ? X.a.VOICE : X.a.DEFAULT,
        ),
        { createMultipleConfettiAt: em } = s.useContext(C.x),
        ex = s.useRef(null),
        eh =
            ((t = m.soundId),
            (n = ex.current),
            s.useMemo(() => {
                if (null == n || "1" !== t) return { x: 0, y: 0 };
                let e = n.getBoundingClientRect();
                return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
            }, [n, t])),
        ej = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        eg = s.useRef(0.01),
        ep = s.useRef(new c.IX()),
        eN = "1" === m.soundId,
        eI = `sound-${m.soundId}`,
        eb = (0, r.rm)(eI),
        ef = null != el || null != ea,
        ev = !(0, V.Ir)(er, m, x) && !H,
        eA = E || (T && !ev),
        eE = S.LW.useStore().bottomPosition ?? 0,
        eC = ex.current?.getBoundingClientRect().bottom ?? 0,
        [eS, eO] = s.useState(!1),
        ey = s.useCallback(() => {
            eO(!0);
        }, []),
        eT = s.useCallback(() => {
            eO(!1);
        }, []),
        ek = ev && D;
    function eP(e) {
        (eN &&
            !ej &&
            ((eg.current = Math.min(eg.current + 0.01, 0.1)),
            Math.random() < eg.current && em(eh.x, eh.y, void 0, void 0, { sprite: W.dR })),
        null != R)
            ? R(e)
            : k || ec(L);
    }
    let e_ = (0, i.jsx)("div", {
        onMouseEnter: ey,
        onMouseLeave: eT,
        children: $({ sound: m, previewSound: ed, disabled: ev && !E }),
    });
    function eR(e) {
        return k || ev
            ? ek
                ? (0, i.jsx)(N.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()(Z.C4, Z.hz, e, { [Z.hn]: ef }),
                  })
                : null
            : (0, i.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: a()(Z.C4, e) });
    }
    let eL = (0, i.jsx)("div", {
        onMouseEnter: ey,
        onMouseLeave: eT,
        children: (0, i.jsx)(Q, { sound: m, disabled: !y && !E }),
    });
    s.useEffect(() => {
        let e = ep.current;
        return (
            eN &&
                e.start(1e3, () => {
                    eg.current = Math.max(eg.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eN]);
    let eG =
        ((l = ex.current),
        null == (d = l?.parentElement?.getBoundingClientRect())
            ? { width: 0, height: 0 }
            : { width: d.width, height: d.height });
    return (0, i.jsxs)("li", {
        ref: en,
        className: a()(Z.H, h),
        onMouseEnter: P,
        children: [
            (0, i.jsx)(u.m, {
                "aria-label": null != ee ? m.name : void 0,
                __unsupportedReactNodeAsText: ee ?? m.name,
                position: eC + 50 > eE ? "top" : "bottom",
                shouldShow: !eS,
                delay: 500,
                children: (0, i.jsxs)(f.s, {
                    ...ei,
                    buttonProps: { ...eb, id: eI, role: "button" },
                    "aria-label": q.intl.formatToPlainString(q.t.tuMUJ2, { emojiName: m.emojiName, soundName: m.name }),
                    className: a()(
                        Z.aG,
                        {
                            [Z.CS]: z,
                            [Z.he]: K ?? eu,
                            [Z.ju]: k,
                            [Z.wT]: y,
                            [Z.$9]: !y && !E,
                            [Z.Au]: ev && !E,
                            [Z.fx]: !y && E,
                            [Z.in]: y && g,
                        },
                        j,
                    ),
                    onClick: (e) => {
                        eP?.(e);
                    },
                    onContextMenu: T && !ev ? eo : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(Z.KM, { [Z.hn]: ef }),
                            "aria-hidden": !0,
                            ref: ex,
                            children: [
                                ef && (0, i.jsx)(v.A, { emojiId: el, emojiName: ea, className: Z.Zg }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/medium",
                                    color: y ? void 0 : "text-muted",
                                    className: a()(Z.TW, { [Z.hn]: ef }),
                                    children: es,
                                }),
                            ],
                        }),
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
                                                    e_,
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
                                                    eA && eL,
                                                ],
                                            }),
                                        ],
                                    });
                                case J.If.NONE:
                                    return null;
                                case J.If.PLAY:
                                case J.If.SOUNDMOJI:
                                default:
                                    return ek && !U
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: Z.LQ }),
                                                  eR(Z.B3),
                                                  (0, i.jsx)("div", {
                                                      className: Z.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: Z.O5,
                                                          children: [eA && e_, eA && eL],
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
                                                                    setTooltipShowing: eO,
                                                                    renderSoundButton: et,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [eA && e_, eR(), eA && eL],
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
                    shouldShow: !eS,
                    children: (0, i.jsx)("div", {
                        className: Z.ET,
                        children: !U && (0, i.jsxs)("div", { className: Z.ld, children: [e_, eL] }),
                    }),
                }),
            !0 === H && (0, i.jsx)(G, { sound: m, containerDimensions: eG, ref: Y }),
        ],
    });
}
function et(e) {
    return (0, i.jsx)(ee, { ...e });
}
let en = ee;
