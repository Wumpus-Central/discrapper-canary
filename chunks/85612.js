n.d(t, {
    a: () => Y,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    u = n(964486),
    d = n(761929),
    f = n(793574),
    p = n(688810),
    b = n(385318),
    g = n(480890),
    m = n(267102),
    h = n(625841),
    A = n(202639),
    y = n(336060),
    _ = n(430452),
    E = n(287809),
    v = n(954571),
    O = n(474090),
    x = n(927578),
    S = n(504292),
    N = n(253541),
    C = n(971778),
    j = n(494783),
    T = n(342887),
    I = n(606451),
    w = n(177392),
    R = n(185494),
    P = n(15910),
    D = n(599813),
    k = n(652215),
    L = n(806931),
    M = n(788868),
    U = n(731854),
    V = n(734317),
    F = n(985018),
    G = n(632998);

function H(e) {
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

function B(e, t) {
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

function Y(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: i = !1, showSearchBar: Y = !0 } = e,
        [W, z] = r.useState(""),
        { analyticsLocations: K, newestAnalyticsLocation: X } = (0, p.Ay)(f.A.VOICE_FILTER_POPOUT),
        Z = r.useRef(null),
        J = (0, d.A)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: Z,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.R.VERTICAL_TOP,
        });
    (0, F.useSyncMessages)(V.messagesLoader);
    let q = (0, o.bG)([E.default], () => (0, O.ki)(E.default.getCurrentUser())),
        Q = (0, o.bG)([C.A], () => C.A.getCatalogUpdateTime()),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        { activeVoice: el } = (0, j.f)(),
        er = (0, N.dz)({
            location: K[0],
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
            v.default.track(k.HAw.VOICE_FILTER_PICKER_OPENED, {
                active_voice_filter_id: null != el ? el : null,
            });
    });
    let ec = r.useCallback(() => z(""), [z]),
        eu = r.useRef(null),
        ed = (0, m.Us)() !== k.BRT.OVERLAY;
    return (0, l.jsx)(p.f5, {
        value: K,
        children: (0, l.jsxs)("div", {
            ref: Z,
            className: a()(G.ZO, {
                [G.U]: n,
                [G.Fd]: !ed,
            }),
            style: {
                height: 500,
            },
            children: [
                ed &&
                    (0, l.jsx)("div", {
                        className: G.Di,
                        onMouseDown: J,
                        children: (0, l.jsx)("div", {
                            className: G.YC,
                        }),
                    }),
                Y &&
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
                        e < l - n || (en(!0), v.default.track(k.HAw.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: eo,
                }),
                !q &&
                    (0, l.jsxs)(s.animated.div, {
                        style: B(H({}, es), {
                            display: es.opacity.to((e) => (0 === e ? "none" : "block")),
                        }),
                        className: G.Wv,
                        children: [
                            null != Q &&
                                (0, l.jsx)(s.animated.div, {
                                    style: ei,
                                    children: (0, l.jsx)(P.j, {
                                        catalogUpdateTime: Q,
                                        isScrolled: $,
                                    }),
                                }),
                            (0, l.jsx)("div", {
                                className: G.Zj,
                                children: (0, l.jsx)(s.animated.div, {
                                    style: {
                                        y: ea.y,
                                        opacity: ea.y.to((e) => +(50 !== e)),
                                    },
                                    children: (0, l.jsx)(A.d, {
                                        showUpsell: !0,
                                        text: F.intl.format(F.t.XMDm8z, {
                                            nitroTierName: (0, x.Dd)(M.PremiumTypes.TIER_2),
                                            onClick: () => (0, y.n)(),
                                        }),
                                        button: F.intl.string(F.t.cRCCJ3),
                                        buttonAnalyticsObject: {
                                            section: k.JJy.VOICE_FILTERS_FLOATING_UPSELL,
                                        },
                                        position: "inline",
                                        className: G.UX,
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, l.jsx)(w.H, {}),
                (0, l.jsx)(I.m, {}),
                (0, l.jsx)(R.l, {}),
                (0, l.jsxs)("div", {
                    className: a()(G.N$, {
                        [G.rd]: null != el,
                    }),
                    children: [
                        (0, l.jsx)(h.U, {
                            deviceType: U.oh.AUDIO_INPUT,
                            location: "VoiceFiltersPopout",
                            onOpen: () => {
                                var e;
                                v.default.track(k.HAw.VOICE_FILTER_MIC_SELECTOR_OPENED, {
                                    active_voice_filter_id: null != (e = _.A.getActiveVoiceFilter()) ? e : null,
                                });
                            },
                            popoutPosition: "top",
                        }),
                        i &&
                            (0, l.jsx)(h.U, {
                                deviceType: U.oh.AUDIO_OUTPUT,
                                location: "VoiceFiltersPopout",
                                popoutPosition: "top",
                            }),
                        (0, l.jsx)(c.YNO, {
                            targetElementRef: eu,
                            position: "top",
                            align: "right",
                            renderPopout: () =>
                                (0, l.jsx)(b.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: i,
                                    renderOutputVolume: i,
                                    onClose: t,
                                    onInteraction: (0, g.s)("AudioDeviceMenu", X, {
                                        entrypoint: L.GK.THREE_DOT,
                                    }),
                                    minimal: !0,
                                }),
                            children: (e) =>
                                (0, l.jsx)(
                                    c.K0,
                                    B(
                                        H(
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
                                                v.default.track(k.HAw.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
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
