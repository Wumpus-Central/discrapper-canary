n.d(t, { a: () => B });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(92674),
    o = n(311907),
    c = n(397927),
    d = n(964486),
    u = n(761929),
    h = n(793574),
    m = n(688810),
    A = n(385318),
    p = n(480890),
    g = n(267102),
    f = n(625841),
    _ = n(202639),
    E = n(336060),
    C = n(430452),
    x = n(287809),
    S = n(954571),
    T = n(474090),
    I = n(927578),
    N = n(504292),
    v = n(253541),
    y = n(971778),
    b = n(494783),
    R = n(342887),
    j = n(606451),
    M = n(177392),
    D = n(185494),
    O = n(15910),
    L = n(599813),
    P = n(652215),
    w = n(806931),
    k = n(788868),
    U = n(731854),
    G = n(734317),
    F = n(985018),
    H = n(632998);
function B(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: a = !1, showSearchBar: B = !0 } = e,
        [V, W] = l.useState(""),
        { analyticsLocations: K, newestAnalyticsLocation: z } = (0, m.Ay)(h.A.VOICE_FILTER_POPOUT),
        Y = l.useRef(null),
        q = (0, u.A)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: Y,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: u.R.VERTICAL_TOP,
        });
    (0, F.useSyncMessages)(G.messagesLoader);
    let J = (0, o.bG)([x.default], () => (0, T.ki)(x.default.getCurrentUser())),
        $ = (0, o.bG)([y.A], () => y.A.getCatalogUpdateTime()),
        [Z, X] = l.useState(!1),
        [Q, ee] = l.useState(!1),
        { activeVoice: et } = (0, b.f)(),
        en = (0, v.dz)({ location: K[0], autoTrackExposure: !0 }),
        ei = (0, c.zhh)({
            transform: Z ? "translateY(-8px) scale(0.96)" : "translateY(0px) scale(1)",
            config: { duration: 150, mass: 1, stiffness: 711.1, damping: 40 },
        }),
        el = (0, c.zhh)({ y: 50 * !Z, config: { duration: 150, mass: 1, stiffness: 711.1, damping: 40 } }),
        ea = (0, c.zhh)({
            to: { bottom: "" !== V ? "translateY(75px)" : "translateY(50px)", opacity: +("" === V) },
            config: { tension: 280, friction: 24, duration: 200 },
        }),
        es = l.useRef(null);
    (0, d.Ay)(() => {
        (0, R.md)(),
            en && (0, N.tB)(),
            S.default.track(P.HAw.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: et ?? null });
    });
    let er = l.useCallback(() => W(""), [W]),
        eo = l.useRef(null),
        ec = (0, g.Us)() !== P.BRT.OVERLAY;
    return (0, i.jsx)(m.f5, {
        value: K,
        children: (0, i.jsxs)("div", {
            ref: Y,
            className: s()(H.ZO, { [H.U]: n, [H.Fd]: !ec }),
            style: { height: 500 },
            children: [
                ec &&
                    (0, i.jsx)("div", {
                        className: H.Di,
                        onMouseDown: q,
                        children: (0, i.jsx)("div", { className: H.YC }),
                    }),
                B &&
                    (0, i.jsx)(c.IWV, {
                        placeholder: F.intl.string(F.t.hHCZJQ),
                        autoFocus: !0,
                        onChange: W,
                        query: V,
                        onClear: er,
                    }),
                (0, i.jsx)(L.c, {
                    query: V,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = es.current;
                        if (null == t || (X(e > 0), Q)) return;
                        let { height: n, totalHeight: i } = t.getListDimensions();
                        e < i - n || (ee(!0), S.default.track(P.HAw.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: es,
                }),
                !J &&
                    (0, i.jsxs)(r.animated.div, {
                        style: { ...ea, display: ea.opacity.to((e) => (0 === e ? "none" : "block")) },
                        className: H.Wv,
                        children: [
                            null != $ &&
                                (0, i.jsx)(r.animated.div, {
                                    style: ei,
                                    children: (0, i.jsx)(O.j, { catalogUpdateTime: $, isScrolled: Z }),
                                }),
                            (0, i.jsx)("div", {
                                className: H.Zj,
                                children: (0, i.jsx)(r.animated.div, {
                                    style: { y: el.y, opacity: el.y.to((e) => +(50 !== e)) },
                                    children: (0, i.jsx)(_.d, {
                                        showUpsell: !0,
                                        text: F.intl.format(F.t.XMDm8z, {
                                            nitroTierName: (0, I.Dd)(k.PremiumTypes.TIER_2),
                                            onClick: () => (0, E.n)(),
                                        }),
                                        button: F.intl.string(F.t.cRCCJ3),
                                        buttonAnalyticsObject: { section: P.JJy.VOICE_FILTERS_FLOATING_UPSELL },
                                        position: "inline",
                                        className: H.UX,
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, i.jsx)(M.H, {}),
                (0, i.jsx)(j.m, {}),
                (0, i.jsx)(D.l, {}),
                (0, i.jsxs)("div", {
                    className: s()(H.N$, { [H.rd]: null != et }),
                    children: [
                        (0, i.jsx)(f.U, {
                            deviceType: U.oh.AUDIO_INPUT,
                            location: "VoiceFiltersPopout",
                            onOpen: () => {
                                S.default.track(P.HAw.VOICE_FILTER_MIC_SELECTOR_OPENED, {
                                    active_voice_filter_id: C.A.getActiveVoiceFilter() ?? null,
                                });
                            },
                            popoutPosition: "top",
                        }),
                        a &&
                            (0, i.jsx)(f.U, {
                                deviceType: U.oh.AUDIO_OUTPUT,
                                location: "VoiceFiltersPopout",
                                popoutPosition: "top",
                            }),
                        (0, i.jsx)(c.YNO, {
                            targetElementRef: eo,
                            position: "top",
                            align: "right",
                            renderPopout: () =>
                                (0, i.jsx)(A.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: a,
                                    renderOutputVolume: a,
                                    onClose: t,
                                    onInteraction: (0, p.s)("AudioDeviceMenu", z, { entrypoint: w.GK.THREE_DOT }),
                                    minimal: !0,
                                }),
                            children: (e) =>
                                (0, i.jsx)(c.K0, {
                                    variant: "secondary",
                                    ...e,
                                    buttonRef: eo,
                                    icon: c.FHP,
                                    onClick: (t) => {
                                        S.default.track(P.HAw.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                                            active_voice_filter_id: et ?? null,
                                        }),
                                            e.onClick?.(t);
                                    },
                                    "aria-label": F.intl.string(F.t["ClGM/G"]),
                                }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
