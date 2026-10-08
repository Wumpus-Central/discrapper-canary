(n.d(t, { e: () => K }), n(321073));
var i,
    r = n(477900),
    a = n(582128),
    s = n(632296),
    l = n(503698),
    o = n.n(l),
    d = n(562708),
    c = n(17928),
    u = n(116833);
n(938796);
var _ =
        (((i = {})[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = "MOBILE_DARK_GRADIENT_THEME_ENABLED"),
        (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED"),
        (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = "REDUCED_CONTRAST_ENABLED"),
        (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = "INCREASED_CONTRAST_ENABLED"),
        (i[(i.REDUCE_SATURATION_ENABLED = 64)] = "REDUCE_SATURATION_ENABLED"),
        i),
    E = n(460890),
    A = n(812743),
    h = n(38021);
function f(e) {
    let {
            children: t,
            theme: n = A.NJ.DARK,
            primaryColor: i = null,
            secondaryColor: s = null,
            gradient: l = null,
            flags: o = 0,
            contrast: d = 1,
            saturation: c = 1,
            density: u = "compact",
            disableAdaptiveTheme: _ = !1,
            reduceAdaptiveTheme: E = !1,
        } = e,
        f = a.useMemo(
            () =>
                (0, h.dI)({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: s,
                    gradient: l,
                    flags: o,
                    contrast: d,
                    saturation: c,
                    density: u,
                    disableAdaptiveTheme: _,
                    reduceAdaptiveTheme: E,
                }),
            [n, i, s, l, o, d, c, u, _, E],
        );
    return (0, r.jsx)(h.Dx.Provider, { value: f, children: t });
}
var I = n(775602),
    p = n(989395),
    T = n(71855),
    m = n(267102),
    g = n(652215);
let S = ["Shift", "Alt", "Meta", "Control"];
var N = n(973283),
    C = n(534409),
    O = n(37537);
let R = (0, n(945810).mj)({
    name: "2026-08-rive-web-perf",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var L = n(750506),
    y = n(869146),
    D = n(773669),
    v = n(363195),
    b = n(531685),
    M = n(19575),
    P = n(418842),
    U = n(607399),
    w = n(112834),
    G = n(964486),
    x = n(657043),
    k = n(723702),
    F = n(354328),
    B = n(964404),
    V = n(611635);
function H(e) {
    let t,
        {
            rootClassName: i,
            lang: s,
            theme: l,
            density: d,
            focused: u,
            fontScale: _,
            fontScaleClass: E,
            mouseMode: A,
            keyboardModeEnabled: h,
            saturation: f,
            desaturateUserColors: p,
            useForcedColors: T,
            systemForcedColors: m,
            useReducedMotion: g,
            alwaysShowLinkDecorations: S,
            hardwareAccelerationEnabled: N,
            highContrastMode: C,
            isPopoutWindow: O,
            children: R,
        } = e,
        L = window.CSS.supports("selector(::-webkit-scrollbar)"),
        y = (0, c.bG)([I.Ay], () => I.Ay.zoom),
        D = O ? "" : `--custom-zoom: ${y};`,
        v = (0, F.A)("highlight_mana_buttons"),
        b = (0, F.A)("highlight_mana_components"),
        P = (0, F.A)("highlight_mana_text"),
        H = (0, F.A)("highlight_void_toggleables"),
        j = (0, F.A)("highlight_void_buttons"),
        W = (0, F.A)("highlight_mana_text_overrides");
    (a.useEffect(() => {
        if (!P) return;
        let e = () => {},
            t = !1;
        return (
            n
                .e("689064")
                .then(n.bind(n, 977691))
                .then((n) => {
                    t || (e = n.startComposedHighlight());
                }),
            () => {
                ((t = !0), e());
            }
        );
    }, [P]),
        a.useEffect(() => {
            if (!W) return;
            let e = () => {},
                t = !1;
            return (
                n
                    .e("689064")
                    .then(n.bind(n, 977691))
                    .then((n) => {
                        t || (e = n.startOverrideAudit());
                    }),
                () => {
                    ((t = !0), e());
                }
            );
        }, [W]));
    let Y = (0, c.bG)([B.Ay], () => B.Ay.hdrDynamicRange),
        K = (0, x.BX)("RootElementContextProvider"),
        $ = `font-size: ${_}%; --saturation-factor: ${f}; dynamic-range-limit: ${Y}; ${D}`,
        z = o()(
            ((t = ""),
            (0, k.isWindows)()
                ? (t = "platform-win")
                : (0, k.isMac)()
                  ? (t = "platform-osx")
                  : (0, k.isLinux)()
                    ? (t = "platform-linux")
                    : (0, k.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, w.m)(l),
            `density-${d}`,
            E,
            {
                "low-saturation": f <= 0.4,
                "keyboard-mode": h,
                "decorate-links": S,
                "no-webkit-scrollbar": !L,
                "has-webkit-scrollbar": L,
                "mouse-mode": A,
                "reduce-motion": g,
                "full-motion": !g,
                "is-mobile": U.Fr,
                "app-focused": u,
                "desaturate-user-colors": p,
                "disable-forced-colors": !T && "active" === m,
                "enable-forced-colors": T,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !N,
                "visual-refresh-chat-input": !1,
                "highlight-mana-buttons": v,
                "highlight-mana-components": b,
                "highlight-mana-text": P,
                "highlight-mana-text-overrides": W,
                "highlight-void-toggleables": H,
                "highlight-void-buttons": j,
                "high-contrast-mode": C,
                "enlarge-target-size": K,
            },
            i,
        ),
        X = a.useMemo(() => ({ lang: s, style: $, className: z, focused: u }), [s, $, z, u]);
    return (
        (0, G.Ay)(() => {
            M.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, r.jsx)(V.q.Provider, { value: X, children: R })
    );
}
var j = n(422411),
    W = n(660183);
let Y = { Modal: d.ImpressionTypes.MODAL };
function K(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        l = null != t,
        [d] = a.useState(() => M.Ay.getEnableHardwareAcceleration()),
        {
            locale: A,
            theme: h,
            focused: U,
            mainWindowVisible: w,
            currentWindow: G,
            fontScale: x,
            fontScaleClass: k,
            keyboardModeEnabled: F,
            saturation: B,
            desaturateUserColors: V,
            useForcedColors: K,
            systemForcedColors: $,
            useReducedMotion: z,
            alwaysShowLinkDecorations: X,
            highContrastMode: Z,
        } = (0, c.cf)([D.default, I.Ay, v.A, y.A, b.A], () => ({
            locale: D.default.locale,
            theme: n ?? v.A.theme,
            focused: l ? y.A.getWindowFocused(t) : b.A.isFocused(),
            mainWindowVisible: b.A.isVisible(),
            currentWindow: l ? (y.A.getWindow(t) ?? window) : window,
            fontScale: I.Ay.fontScale,
            fontScaleClass: I.Ay.fontScaleClass,
            keyboardModeEnabled: I.Ay.keyboardModeEnabled,
            saturation: I.Ay.saturation,
            desaturateUserColors: I.Ay.desaturateUserColors,
            useForcedColors: I.Ay.useForcedColors,
            systemForcedColors: I.Ay.systemForcedColors,
            useReducedMotion: I.Ay.useReducedMotion,
            alwaysShowLinkDecorations: I.Ay.alwaysShowLinkDecorations,
            highContrastMode: I.Ay.isHighContrastModeEnabled,
        })),
        q = (function (e, t) {
            let [n, i] = a.useState(0),
                r = (0, m.aL)();
            a.useEffect(() => {
                function e() {
                    return i((e) => e + 1);
                }
                function t() {
                    return i((e) => Math.max(0, e - 1));
                }
                return (
                    r.subscribe(g.jej.POPOUT_SHOW, e),
                    r.subscribe(g.jej.POPOUT_HIDE, t),
                    () => {
                        (r.unsubscribe(g.jej.POPOUT_SHOW, e), r.unsubscribe(g.jej.POPOUT_HIDE, t));
                    }
                );
            }, [r]);
            let [s, l] = a.useState(!1);
            return (
                a.useLayoutEffect(() => {
                    function i(e) {
                        (!t || n > 0) && s
                            ? l(!1)
                            : (!s && n > 0) ||
                              (e instanceof KeyboardEvent &&
                                  (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || S.indexOf(e.key) >= 0)) ||
                              l((e) => !e);
                    }
                    let r = s ? "keyup" : "mousemove";
                    return (t && e.addEventListener(r, i), () => e?.removeEventListener(r, i));
                }, [e, s, n, t]),
                t && 0 === n && s
            );
        })(G, __OVERLAY__ || U),
        Q = 0;
    1 !== B && (Q |= _.REDUCE_SATURATION_ENABLED);
    let J = (0, P.C)(),
        ee = (0, C.qK)("RootThemeContextProvider"),
        et = (0, C.k5)("RootThemeContextProvider"),
        en = (0, C.lV)("RootThemeContextProvider"),
        ei = (0, O.c)("RootThemeContextProvider"),
        er = (0, N.D2)("RootThemeContextProvider"),
        ea = R.useConfig({ location: "RootThemeContextProvider" }).enabled,
        es = (0, T.m2)({ isPopoutWindow: l }),
        el = (function (e) {
            let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: l, locale: o } = e,
                d = a.useContext(p.A),
                c = a.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        d(
                            {
                                type: n.impressionType ?? Y[t],
                                name: n.impression?.impressionName,
                                properties: n.impression?.impressionProperties,
                            },
                            { disableTrack: n.disableTrack },
                        );
                    },
                    [d],
                ),
                _ = a.useCallback(
                    () => ({
                        i18n: {
                            CANCEL: W.intl.string(W.t["ETE/oC"]),
                            BACK: W.intl.string(W.t["13/7kX"]),
                            NEXT: W.intl.string(W.t.PDTjLN),
                            SUBMIT: W.intl.string(W.t.geKm7t),
                            SPINNER_LOADING_LABEL: W.intl.string(W.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: W.intl.string(W.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: W.intl.string(W.t.SVParY),
                            CLOSE_BUTTON_LABEL: W.intl.string(W.t.cpT0Cq),
                            DISMISS_BUTTON_LABEL: W.intl.string(W.t.WAI6xu),
                            PLAY_BUTTON_LABEL: W.intl.string(W.t.RscU7I),
                            PAUSE_BUTTON_LABEL: W.intl.string(W.t.ZcgDJX),
                            NEW: W.intl.string(W.t.y2b7CA),
                            BETA: W.intl.string(W.t.oW0eUd),
                            EARLY_ACCESS: W.intl.string(W.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: W.intl.string(W.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: W.intl.string(j.default.m3Vfcs),
                            SEARCH: W.intl.string(W.t["5h0QOP"]),
                            AUTOCOMPLETE_NO_RESULTS_HEADER: W.intl.string(W.t["4o4z3e"]),
                            AUTOCOMPLETE_NO_RESULTS_BODY: W.intl.string(W.t.QwSXv8),
                            LISTBOX_EMPTY_STATE: W.intl.string(j.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                W.intl.formatToPlainString(j.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: W.intl.string(W.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: W.intl.string(W.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: W.intl.string(W.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: W.intl.string(W.t.FMYSJY),
                            KEY_SHIFT: W.intl.string(W.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: W.intl.string(W.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: W.intl.string(W.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: W.intl.string(W.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: W.intl.string(W.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: W.intl.string(W.t["BT3jf/"]),
                            KEY_PAGEUP: W.intl.string(W.t.VdCWGI),
                            KEY_PAGEDOWN: W.intl.string(W.t.gpSh3U),
                            KEY_ANY: W.intl.string(W.t.CkGpcV),
                            KEY_ENTER: W.intl.string(W.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: W.intl.string(W.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: W.intl.string(W.t.V7nPj0),
                            KEY_ESCAPE: W.intl.string(W.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: W.intl.string(W.t["2qsw5/"]),
                            KEY_BACKSPACE: W.intl.string(W.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: W.intl.string(W.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: W.intl.string(W.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: W.intl.string(j.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: W.intl.string(j.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: W.intl.string(j.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: W.intl.string(W.t["rTU7/z"]),
                            FEEDBACK_CRITICAL_ICON_A11Y_LABEL: W.intl.string(j.default.uKMqrF),
                            FEEDBACK_WARNING_ICON_A11Y_LABEL: W.intl.string(j.default["7vL/d/"]),
                            FEEDBACK_INFO_ICON_A11Y_LABEL: W.intl.string(j.default.BReS7U),
                            FEEDBACK_POSITIVE_ICON_A11Y_LABEL: W.intl.string(j.default["1MXXPf"]),
                            STEP_INDICATOR: (e, t) =>
                                W.intl.formatToPlainString(j.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: W.intl.string(j.default["A+pfVR"]),
                            CLEAR_SELECTION: W.intl.string(j.default.JA5C7L),
                            SELECTED_TAGS_HEADING: W.intl.string(j.default.VMNfsY),
                            PRESS_DELETE_TO_REMOVE_TAG: W.intl.string(j.default["/Y7vRd"]),
                            PERCENT_COMPLETE: (e) => W.intl.formatToPlainString(j.default["2L/ygS"], { percent: e }),
                            TEXT_INPUT_CLEAR: W.intl.string(W.t.VkKicb),
                            CHARACTER_COUNT_LIMIT_REACHED: W.intl.string(W.t.c2Jqed),
                            CHARACTER_COUNT_A11Y_LABEL: (e) =>
                                W.intl.formatToPlainString(W.t.fR1cof, { remainingCharacters: e }),
                            MINIMUM_LENGTH_ERROR: (e) => W.intl.formatToPlainString(W.t["62rk1K"], { minLength: e }),
                            MAXIMUM_LENGTH_ERROR: (e) => W.intl.formatToPlainString(W.t.ICT5S6, { maxLength: e }),
                            MINIMUM_VALUE_ERROR: (e) => W.intl.formatToPlainString(W.t.ykmNSo, { min: e }),
                            MAXIMUM_VALUE_ERROR: (e) => W.intl.formatToPlainString(W.t.KiDDCk, { max: e }),
                        },
                        locale: o,
                        theme: t,
                        saturation: n,
                        defaultLayerContext: L.uY,
                        experiments: { enabledExperiments: i },
                        trackImpression: c,
                        isWindowFocused: () => r,
                        isMainWindowVisible: () => l,
                        dynamicGraphicComponents: u.Q,
                    }),
                    [t, n, i, c, r, l, o],
                ),
                [E, A] = a.useState(_);
            return (
                a.useLayoutEffect(() => {
                    function e() {
                        A(_);
                    }
                    ((0, s.waitForAllDefaultIntlMessagesLoaded)().then(e), W.intl.onLocaleChange(e));
                }, [_]),
                E
            );
        })({
            theme: h,
            saturation: B,
            enabledExperiments: a.useMemo(() => {
                let e = [];
                return (
                    ee && e.push("refresh-fast-follow-avatars"),
                    et && e.push("refresh-fast-follow-guild-bg"),
                    en && e.push("refresh-fast-follow-distinct-borders"),
                    ei && e.push("mana-type-consolidation"),
                    er && e.push("mana-notification-components"),
                    ea && e.push("rive-web-perf"),
                    e
                );
            }, [ee, et, en, ei, er, ea]),
            focused: U,
            mainWindowVisible: w,
            locale: A,
        });
    return (0, r.jsx)(E.GE, {
        value: el,
        children: (0, r.jsx)(f, {
            theme: h,
            flags: Q,
            saturation: B,
            density: J,
            children: (0, r.jsx)(H, {
                lang: A,
                theme: h,
                density: J,
                focused: U,
                fontScale: x,
                fontScaleClass: k,
                keyboardModeEnabled: F,
                mouseMode: q,
                saturation: B,
                desaturateUserColors: V,
                useForcedColors: K,
                systemForcedColors: $,
                useReducedMotion: z,
                alwaysShowLinkDecorations: X,
                hardwareAccelerationEnabled: d,
                highContrastMode: Z,
                isPopoutWindow: l,
                rootClassName: o()(es, {
                    "refresh-fast-follow-avatars": ee,
                    "refresh-fast-follow-guild-bg": et,
                    "refresh-fast-follow-distinct-borders": en,
                    "mana-type-consolidation": ei,
                }),
                children: i,
            }),
        }),
    });
}
