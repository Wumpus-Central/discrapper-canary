n.d(t, {
    a: () => K,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(92674),
    o = n(311907),
    c = n(397927),
    u = n(964486),
    d = n(761929),
    h = n(793574),
    p = n(688810),
    f = n(385318),
    m = n(480890),
    g = n(267102),
    A = n(625841),
    b = n(202639),
    _ = n(336060),
    y = n(430452),
    v = n(287809),
    E = n(954571),
    O = n(474090),
    C = n(927578),
    S = n(504292),
    x = n(253541),
    j = n(971778),
    I = n(494783),
    T = n(342887),
    N = n(606451),
    P = n(177392),
    w = n(185494),
    R = n(15910),
    D = n(599813),
    M = n(652215),
    k = n(806931),
    L = n(788868),
    U = n(731854),
    G = n(734317),
    F = n(985018),
    H = n(632998);

function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function K(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: i = !1, showSearchBar: K = !0 } = e,
        [W, z] = r.useState(""),
        { analyticsLocations: Y, newestAnalyticsLocation: q } = (0, p.Ay)(h.A.VOICE_FILTER_POPOUT),
        J = r.useRef(null),
        Z = (0, d.A)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: J,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.R.VERTICAL_TOP,
        });
    (0, F.useSyncMessages)(G.messagesLoader);
    let X = (0, o.bG)([v.default], () => (0, O.ki)(v.default.getCurrentUser())),
        Q = (0, o.bG)([j.A], () => j.A.getCatalogUpdateTime()),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        { activeVoice: el } = (0, I.f)(),
        er = (0, x.dz)({
            location: Y[0],
            autoTrackExposure: !0,
        }),
        ei = (0, c.zhh)({
            transform: $ ? "translateY(-8px) scale(".concat(0.96, ")") : "translateY(0px) scale(1)",
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40,
            },
        }),
        ea = (0, c.zhh)({
            y: 50 * !$,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40,
            },
        }),
        es = (0, c.zhh)({
            to: {
                bottom: "" !== W ? "translateY(75px)" : "translateY(50px)",
                opacity: +("" === W),
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200,
            },
        }),
        eo = r.useRef(null);
    (0, u.Ay)(() => {
        (0, T.md)(),
            er && (0, S.tB)(),
            E.default.track(M.HAw.VOICE_FILTER_PICKER_OPENED, {
                active_voice_filter_id: null != el ? el : null,
            });
    });
    let ec = r.useCallback(() => z(""), [z]),
        eu = r.useRef(null),
        ed = (0, g.Us)() !== M.BRT.OVERLAY;
    return (0, l.jsx)(p.f5, {
        value: Y,
        children: (0, l.jsxs)("div", {
            ref: J,
            className: a()(H.ZO, {
                [H.U]: n,
                [H.Fd]: !ed,
            }),
            style: {
                height: 500,
            },
            children: [
                ed &&
                    (0, l.jsx)("div", {
                        className: H.Di,
                        onMouseDown: Z,
                        children: (0, l.jsx)("div", {
                            className: H.YC,
                        }),
                    }),
                K &&
                    (0, l.jsx)(c.IWV, {
                        placeholder: F.intl.string(F.t.hHCZJQ),
                        autoFocus: !0,
                        onChange: z,
                        query: W,
                        onClear: ec,
                    }),
                (0, l.jsx)(D.c, {
                    query: W,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = eo.current;
                        if (null == t || (ee(e > 0), et)) return;
                        let { height: n, totalHeight: l } = t.getListDimensions();
                        e < l - n || (en(!0), E.default.track(M.HAw.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: eo,
                }),
                !X &&
                    (0, l.jsxs)(s.animated.div, {
                        style: V(B({}, es), {
                            display: es.opacity.to((e) => (0 === e ? "none" : "block")),
                        }),
                        className: H.Wv,
                        children: [
                            null != Q &&
                                (0, l.jsx)(s.animated.div, {
                                    style: ei,
                                    children: (0, l.jsx)(R.j, {
                                        catalogUpdateTime: Q,
                                        isScrolled: $,
                                    }),
                                }),
                            (0, l.jsx)("div", {
                                className: H.Zj,
                                children: (0, l.jsx)(s.animated.div, {
                                    style: {
                                        y: ea.y,
                                        opacity: ea.y.to((e) => +(50 !== e)),
                                    },
                                    children: (0, l.jsx)(b.d, {
                                        showUpsell: !0,
                                        text: F.intl.format(F.t.XMDm8z, {
                                            nitroTierName: (0, C.Dd)(L.PremiumTypes.TIER_2),
                                            onClick: () => (0, _.n)(),
                                        }),
                                        button: F.intl.string(F.t.cRCCJ3),
                                        buttonAnalyticsObject: {
                                            section: M.JJy.VOICE_FILTERS_FLOATING_UPSELL,
                                        },
                                        position: "inline",
                                        className: H.UX,
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, l.jsx)(P.H, {}),
                (0, l.jsx)(N.m, {}),
                (0, l.jsx)(w.l, {}),
                (0, l.jsxs)("div", {
                    className: a()(H.N$, {
                        [H.rd]: null != el,
                    }),
                    children: [
                        (0, l.jsx)(A.U, {
                            deviceType: U.oh.AUDIO_INPUT,
                            location: "VoiceFiltersPopout",
                            onOpen: () => {
                                var e;
                                E.default.track(M.HAw.VOICE_FILTER_MIC_SELECTOR_OPENED, {
                                    active_voice_filter_id: null != (e = y.A.getActiveVoiceFilter()) ? e : null,
                                });
                            },
                            popoutPosition: "top",
                        }),
                        i &&
                            (0, l.jsx)(A.U, {
                                deviceType: U.oh.AUDIO_OUTPUT,
                                location: "VoiceFiltersPopout",
                                popoutPosition: "top",
                            }),
                        (0, l.jsx)(c.YNO, {
                            targetElementRef: eu,
                            position: "top",
                            align: "right",
                            renderPopout: () =>
                                (0, l.jsx)(f.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: i,
                                    renderOutputVolume: i,
                                    onClose: t,
                                    onInteraction: (0, m.s)("AudioDeviceMenu", q, {
                                        entrypoint: k.GK.THREE_DOT,
                                    }),
                                    minimal: !0,
                                }),
                            children: (e) =>
                                (0, l.jsx)(
                                    c.K0,
                                    V(
                                        B(
                                            {
                                                variant: "secondary",
                                            },
                                            e,
                                        ),
                                        {
                                            buttonRef: eu,
                                            icon: c.FHP,
                                            onClick: (t) => {
                                                var n;
                                                E.default.track(M.HAw.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                                                    active_voice_filter_id: null != el ? el : null,
                                                }),
                                                    null == (n = e.onClick) || n.call(e, t);
                                            },
                                            "aria-label": F.intl.string(F.t["ClGM/G"]),
                                        },
                                    ),
                                ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
