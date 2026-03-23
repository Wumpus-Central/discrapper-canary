n.d(t, { a: () => F });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(497766),
    o = n(311907),
    c = n(397927),
    d = n(964486),
    u = n(761929),
    h = n(793574),
    m = n(688810),
    A = n(385318),
    g = n(480890),
    p = n(267102),
    f = n(625841),
    _ = n(202639),
    E = n(336060),
    x = n(430452),
    C = n(287809),
    S = n(954571),
    I = n(474090),
    T = n(927578),
    N = n(971778),
    y = n(494783),
    b = n(342887),
    v = n(606451),
    j = n(177392),
    R = n(185494),
    M = n(15910),
    D = n(599813),
    O = n(652215),
    L = n(806931),
    P = n(788868),
    w = n(731854),
    k = n(734317),
    U = n(985018),
    G = n(632998);
function F(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: s = !1, showSearchBar: F = !0 } = e,
        [H, B] = l.useState(""),
        { analyticsLocations: V, newestAnalyticsLocation: K } = (0, m.Ay)(h.A.VOICE_FILTER_POPOUT),
        z = l.useRef(null),
        W = (0, u.A)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: z,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.R.VERTICAL_TOP,
        });
    (0, U.useSyncMessages)(k.messagesLoader);
    let Y = (0, o.bG)([C.default], () => (0, I.ki)(C.default.getCurrentUser())),
        q = (0, o.bG)([N.A], () => N.A.getCatalogUpdateTime()),
        [J, $] = l.useState(!1),
        [Z, X] = l.useState(!1),
        { activeVoice: Q } = (0, y.f)(),
        ee = (0, c.zhh)({
            transform: J ? "translateY(-8px) scale(0.96)" : "translateY(0px) scale(1)",
            config: { duration: 150, mass: 1, stiffness: 711.1, damping: 40 },
        }),
        et = (0, c.zhh)({ y: 50 * !J, config: { duration: 150, mass: 1, stiffness: 711.1, damping: 40 } }),
        en = (0, c.zhh)({
            to: { bottom: "" !== H ? "translateY(75px)" : "translateY(50px)", opacity: +("" === H) },
            config: { tension: 280, friction: 24, duration: 200 },
        }),
        ei = l.useRef(null);
    (0, d.Ay)(() => {
        (0, b.md)(), S.default.track(O.HAw.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: Q ?? null });
    });
    let el = l.useCallback(() => B(""), [B]),
        es = l.useRef(null),
        ea = (0, p.Us)() !== O.BRT.OVERLAY;
    return (0, i.jsx)(m.f5, {
        value: V,
        children: (0, i.jsxs)("div", {
            ref: z,
            className: a()(G.ZO, { [G.U]: n, [G.Fd]: !ea }),
            style: { height: 500 },
            children: [
                ea &&
                    (0, i.jsx)("div", {
                        className: G.Di,
                        onMouseDown: W,
                        children: (0, i.jsx)("div", { className: G.YC }),
                    }),
                F &&
                    (0, i.jsx)(c.IWV, {
                        placeholder: U.intl.string(U.t.hHCZJQ),
                        autoFocus: !0,
                        onChange: B,
                        query: H,
                        onClear: el,
                    }),
                (0, i.jsx)(D.c, {
                    query: H,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = ei.current;
                        if (null == t || ($(e > 0), Z)) return;
                        let { height: n, totalHeight: i } = t.getListDimensions();
                        e < i - n || (X(!0), S.default.track(O.HAw.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: ei,
                }),
                !Y &&
                    (0, i.jsxs)(r.animated.div, {
                        style: { ...en, display: en.opacity.to((e) => (0 === e ? "none" : "block")) },
                        className: G.Wv,
                        children: [
                            null != q &&
                                (0, i.jsx)(r.animated.div, {
                                    style: ee,
                                    children: (0, i.jsx)(M.j, { catalogUpdateTime: q, isScrolled: J }),
                                }),
                            (0, i.jsx)("div", {
                                className: G.Zj,
                                children: (0, i.jsx)(r.animated.div, {
                                    style: { y: et.y, opacity: et.y.to((e) => +(50 !== e)) },
                                    children: (0, i.jsx)(_.d, {
                                        showUpsell: !0,
                                        text: U.intl.format(U.t.XMDm8z, {
                                            nitroTierName: (0, T.Dd)(P.PremiumTypes.TIER_2),
                                            onClick: () => (0, E.n)(),
                                        }),
                                        button: U.intl.string(U.t.cRCCJ3),
                                        buttonAnalyticsObject: { section: O.JJy.VOICE_FILTERS_FLOATING_UPSELL },
                                        position: "inline",
                                        className: G.UX,
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, i.jsx)(j.H, {}),
                (0, i.jsx)(v.m, {}),
                (0, i.jsx)(R.l, {}),
                (0, i.jsxs)("div", {
                    className: a()(G.N$, { [G.rd]: null != Q }),
                    children: [
                        (0, i.jsx)(f.U, {
                            deviceType: w.oh.AUDIO_INPUT,
                            location: "VoiceFiltersPopout",
                            onOpen: () => {
                                S.default.track(O.HAw.VOICE_FILTER_MIC_SELECTOR_OPENED, {
                                    active_voice_filter_id: x.Ay.getActiveVoiceFilter() ?? null,
                                });
                            },
                            popoutPosition: "top",
                        }),
                        s &&
                            (0, i.jsx)(f.U, {
                                deviceType: w.oh.AUDIO_OUTPUT,
                                location: "VoiceFiltersPopout",
                                popoutPosition: "top",
                            }),
                        (0, i.jsx)(c.YNO, {
                            targetElementRef: es,
                            position: "top",
                            align: "right",
                            renderPopout: () =>
                                (0, i.jsx)(A.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: s,
                                    renderOutputVolume: s,
                                    onClose: t,
                                    onInteraction: (0, g.s)("AudioDeviceMenu", K, { entrypoint: L.GK.THREE_DOT }),
                                    minimal: !0,
                                }),
                            children: (e) =>
                                (0, i.jsx)(c.K0, {
                                    variant: "secondary",
                                    ...e,
                                    buttonRef: es,
                                    icon: c.FHP,
                                    onClick: (t) => {
                                        S.default.track(O.HAw.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                                            active_voice_filter_id: Q ?? null,
                                        }),
                                            e.onClick?.(t);
                                    },
                                    "aria-label": U.intl.string(U.t["ClGM/G"]),
                                }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
