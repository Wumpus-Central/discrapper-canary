n.d(t, { Ay: () => en, dT: () => Z, PI: () => Y });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(837381),
    o = n(17928),
    d = n(451988),
    u = n(661531),
    c = n(866665),
    m = n(939249),
    x = n(342073),
    h = n(983851),
    j = n(27232),
    g = n(505930),
    p = n(782134),
    b = n(194261),
    N = n(307301),
    f = n(834730),
    I = n(890856),
    v = n(788026),
    A = n(775602),
    E = n(688810),
    C = n(21161),
    y = n(850992),
    S = n(319993),
    O = n(435558),
    T = n(132500),
    k = n(104142),
    P = n(407781),
    L = n(287809),
    _ = n(194486),
    G = n(178226);
function R(e) {
    let { sound: t, containerDimensions: n, ref: l } = e,
        a = (0, o.bG)([L.default], () => L.default.getCurrentUser()),
        r = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        [d, u] = s.useState([]),
        c = d.length < 50,
        m = t?.emojiId != null || t?.emojiName != null,
        x = s.useCallback(() => {
            if (!r && c && m && null != a) {
                let e = (0, k.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
                    n = null != t.emojiId,
                    i = _.B.PREMIUM,
                    s = (0, O.random)(k.Bf[i].length, !1),
                    l = { id: (0, T.A)(), animationId: s, animationType: i, shouldResize: n, url: e, userId: a.id };
                u((e) => [...e, l]);
            }
        }, [r, c, m, a, t]);
    s.useImperativeHandle(l, () => ({ addAnimation: x }));
    let h = s.useCallback((e) => {
        u((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return (n.splice(i, 1), n);
        });
    }, []);
    return r || !m
        ? null
        : (0, i.jsx)("div", {
              className: G.z,
              style: { width: n.width, height: n.height },
              children: d.map((e) => (0, i.jsx)(P.A, { containerDimensions: n, effect: e, onComplete: h }, e.id)),
          });
}
var M = n(253932),
    D = n(967198),
    w = n(174459),
    U = n(796774),
    z = n(209932),
    V = n(807348),
    J = n(813564),
    K = n(792348),
    B = n(340368),
    H = n(496502),
    F = n(652215),
    W = n(536283),
    X = n(257645),
    q = n(105292),
    $ = n(948611);
function Z(e) {
    let { disabled: t = !1, onClick: n, text: s, children: l, tooltipPosition: r = "top", ref: o } = e;
    return (0, i.jsx)(c.m, {
        text: s,
        position: r,
        children: (0, i.jsx)(m.D, {
            innerRef: o,
            "aria-label": s,
            className: a()($.zr, { [$.$9]: t }),
            onClick: n,
            children: l,
        }),
    });
}
function Y(e) {
    let { sound: t, previewSound: n, disabled: l = !1, tooltipPosition: a = "top", analyticsLocations: r } = e,
        d = (0, o.bG)([D.A], () => D.A.getGuildId()),
        u = (0, B._)("PreviewButton"),
        c = s.useMemo(
            () =>
                u
                    ? (0, i.jsx)(x.L, { size: "md", color: "currentColor", className: $.Wo })
                    : (0, i.jsx)(h.H, { size: "md", color: "currentColor", className: $.Wo }),
            [u],
        );
    return (0, i.jsx)(Z, {
        tooltipPosition: a,
        disabled: l,
        onClick: function (e) {
            (w.default.track(F.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
                sound_id: t.soundId,
                sound_name: t.name,
                sound_guild_id: t.guildId,
                location_guild_id: d,
                location_stack: r,
            }),
                e.stopPropagation(),
                e.currentTarget.blur(),
                n());
        },
        text: q.intl.formatToPlainString(q.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name }),
        children: c,
    });
}
function Q(e) {
    let { sound: t, disabled: n = !1 } = e,
        { analyticsLocations: l } = (0, E.Ay)(),
        r = (0, o.bG)([z.A], () => z.A.isFavoriteSound(t.soundId), [t.soundId]),
        d = s.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    r
                        ? (0, U.eS)(t.soundId)
                        : ((0, J.Ni)({ sound: t, location: { ...l, object: F.ZSU.SOUNDBOARD_SOUND } }),
                          (0, U.Rp)(t.soundId)));
            },
            [r, t, l],
        );
    return (0, i.jsx)(Z, {
        disabled: n,
        onClick: d,
        text: q.intl.formatToPlainString(r ? q.t.lQLsjc : q.t.Y5DOs4, { emojiName: t.emojiName, soundName: t.name }),
        children: r
            ? (0, i.jsx)(j.StarIcon, {
                  size: "xs",
                  className: a()($.Wo, $.gj),
                  color: u.A.unsafe_rawColors.PLATFORM_GOLD.css,
              })
            : (0, i.jsx)(g.y, { size: "xs", color: "currentColor", className: $.Wo }),
    });
}
function ee(e) {
    var t, n, l;
    let u,
        {
            sound: m,
            channel: x,
            containerClassName: h,
            className: j,
            focused: g,
            forceSecondaryActions: E = !1,
            interactive: O = !0,
            enableSecondaryActions: T = !1,
            suppressPlaySound: k,
            onMouseEnter: P,
            onSelectItem: _,
            analyticsLocations: G,
            buttonOverlay: D = V.If.PLAY,
            showLockForDisabledSound: w = !0,
            inNitroLockedSection: U = !1,
            isAnimated: z = !0,
            isPlayingSoundOverride: B,
            isSoundmoji: F,
            soundmojiVisualEffectRef: Z,
            tooltipOverride: ee,
            isNew: en = !1,
            ref: ei,
            ...es
        } = e,
        { name: el, emojiId: ea, emojiName: er } = m,
        eo = (0, o.bG)([L.default], () => L.default.getCurrentUser()),
        ed = (0, H.v)(m, x?.guild_id),
        {
            playSoundboardSound: eu,
            previewSound: ec,
            isPlayingSound: em,
        } = (0, K.A)(
            m,
            x?.id ?? null,
            (F ? M.HO.getSetting() : M.dG.getSetting()?.volume) ?? 100,
            !F && x?.isVocal() ? X.a.VOICE : X.a.DEFAULT,
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
        eb = s.useRef(new d.IX()),
        eN = "1" === m.soundId,
        ef = `sound-${m.soundId}`,
        eI = (0, r.rm)(ef),
        ev = null != ea || null != er,
        eA = !(0, J.Ir)(eo, m, x) && !F,
        eE = E || (T && !eA),
        eC = y.LW.useStore().bottomPosition ?? 0,
        ey = eh.current?.getBoundingClientRect().bottom ?? 0,
        [eS, eO] = s.useState(!1),
        eT = s.useCallback(() => {
            eO(!0);
        }, []),
        ek = s.useCallback(() => {
            eO(!1);
        }, []),
        eP = eA && w;
    function eL(e) {
        (eN &&
            !eg &&
            ((ep.current = Math.min(ep.current + 0.01, 0.1)),
            Math.random() < ep.current && ex(ej.x, ej.y, void 0, void 0, { sprite: W.dR })),
        null != _)
            ? _(e)
            : k || eu(G);
    }
    let e_ = (0, i.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ek,
        children: Y({ sound: m, previewSound: ec, disabled: eA && !E, analyticsLocations: G }),
    });
    function eG(e) {
        return k || eA
            ? eP
                ? (0, i.jsx)(b.LockIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: a()($.C4, $.hz, e, { [$.hn]: ev }),
                  })
                : null
            : (0, i.jsx)(p.PlayIcon, { size: "xs", color: "currentColor", className: a()($.C4, e) });
    }
    let eR = (0, i.jsx)("div", {
        onMouseEnter: eT,
        onMouseLeave: ek,
        children: (0, i.jsx)(Q, { sound: m, disabled: !O && !E }),
    });
    s.useEffect(() => {
        let e = eb.current;
        return (
            eN &&
                e.start(1e3, () => {
                    ep.current = Math.max(ep.current - 0.01, 0.01);
                }),
            () => e.stop()
        );
    }, [eN]);
    let eM =
            ((l = eh.current),
            null == (u = l?.parentElement?.getBoundingClientRect())
                ? { width: 0, height: 0 }
                : { width: u.width, height: u.height }),
        eD = q.intl.formatToPlainString(q.t.tuMUJ2, { emojiName: m.emojiName, soundName: m.name });
    return (0, i.jsxs)("li", {
        ref: ei,
        className: a()($.H, h),
        onMouseEnter: P,
        children: [
            (0, i.jsx)(c.m, {
                "aria-label": null != ee ? m.name : void 0,
                __unsupportedReactNodeAsText: ee ?? m.name,
                position: ey + 50 > eC ? "top" : "bottom",
                shouldShow: !eS,
                delay: 500,
                children: (0, i.jsxs)(I.s, {
                    ...es,
                    buttonProps: { ...eI, id: ef, role: "button" },
                    "aria-label": en ? `${eD}, ${q.intl.string(q.t.y2b7CA)}` : eD,
                    className: a()(
                        $.aG,
                        {
                            [$.CS]: z,
                            [$.he]: B ?? em,
                            [$.ju]: k,
                            [$.wT]: O,
                            [$.$9]: !O && !E,
                            [$.Au]: eA && !E,
                            [$.fx]: !O && E,
                            [$.in]: O && g,
                            [$.ox]: en,
                        },
                        j,
                    ),
                    onClick: (e) => {
                        eL?.(e);
                    },
                    onContextMenu: T && !eA ? ed : void 0,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()($.KM, { [$.hn]: ev }),
                            "aria-hidden": !0,
                            ref: eh,
                            children: [
                                ev && (0, i.jsx)(v.A, { emojiId: ea, emojiName: er, className: $.Zg }),
                                (0, i.jsx)(f.E, {
                                    variant: "body-xs/medium",
                                    color: O ? void 0 : "text-muted",
                                    className: a()($.TW, { [$.hn]: ev }),
                                    children: el,
                                }),
                            ],
                        }),
                        en && !eg && (0, i.jsx)("span", { className: $.wO, "aria-hidden": !0 }),
                        (function () {
                            switch (D) {
                                case V.If.ADD:
                                    return (0, i.jsxs)("div", {
                                        className: $.ec,
                                        children: [
                                            (0, i.jsx)("div", { className: $.LQ }),
                                            (0, i.jsxs)("div", {
                                                className: $.O5,
                                                children: [
                                                    e_,
                                                    (0, i.jsxs)("div", {
                                                        className: $.c9,
                                                        children: [
                                                            (0, i.jsx)(N.j, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                className: $.y_,
                                                            }),
                                                            (0, i.jsx)(f.E, {
                                                                variant: "body-xs/medium",
                                                                color: "text-strong",
                                                                children: q.intl.string(q.t.QqqXLY),
                                                            }),
                                                        ],
                                                    }),
                                                    eE && eR,
                                                ],
                                            }),
                                        ],
                                    });
                                case V.If.NONE:
                                    return null;
                                case V.If.PLAY:
                                case V.If.SOUNDMOJI:
                                default:
                                    return eP && !U
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: $.LQ }),
                                                  eG($.B3),
                                                  (0, i.jsx)("div", {
                                                      className: $.d7,
                                                      children: (0, i.jsxs)("div", {
                                                          className: $.O5,
                                                          children: [eE && e_, eE && eR],
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: $.d7,
                                              children: [
                                                  (0, i.jsx)("div", { className: a()({ [$.LQ]: !k }) }),
                                                  (0, i.jsx)("div", {
                                                      className: $.O5,
                                                      children:
                                                          D === V.If.SOUNDMOJI
                                                              ? (0, i.jsx)(S.Ay, {
                                                                    sound: m,
                                                                    channel: x,
                                                                    setTooltipShowing: eO,
                                                                    renderSoundButton: et,
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [eE && e_, eG(), eE && eR],
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
                (0, i.jsx)(c.m, {
                    text: q.intl.string(q.t.MDOXJR),
                    shouldShow: !eS,
                    children: (0, i.jsx)("div", {
                        className: $.ET,
                        children: !U && (0, i.jsxs)("div", { className: $.ld, children: [e_, eR] }),
                    }),
                }),
            !0 === F && (0, i.jsx)(R, { sound: m, containerDimensions: eM, ref: Z }),
        ],
    });
}
function et(e) {
    return (0, i.jsx)(ee, { ...e });
}
let en = ee;
