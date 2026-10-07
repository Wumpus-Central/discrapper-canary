(n.d(t, { e: () => k }), n(321073));
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
    U = n(597619),
    w = n(314341),
    G = n(660183);
let x = { Modal: d.ImpressionTypes.MODAL };
function k(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        l = null != t,
        [d] = a.useState(() => M.Ay.getEnableHardwareAcceleration()),
        {
            locale: A,
            theme: h,
            focused: k,
            mainWindowVisible: F,
            currentWindow: B,
            fontScale: V,
            fontScaleClass: H,
            keyboardModeEnabled: j,
            saturation: W,
            desaturateUserColors: Y,
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
        })(B, __OVERLAY__ || k),
        Q = 0;
    1 !== W && (Q |= _.REDUCE_SATURATION_ENABLED);
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
                                type: n.impressionType ?? x[t],
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
                            CANCEL: G.intl.string(G.t["ETE/oC"]),
                            BACK: G.intl.string(G.t["13/7kX"]),
                            NEXT: G.intl.string(G.t.PDTjLN),
                            SUBMIT: G.intl.string(G.t.geKm7t),
                            SPINNER_LOADING_LABEL: G.intl.string(G.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: G.intl.string(G.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: G.intl.string(G.t.SVParY),
                            CLOSE_BUTTON_LABEL: G.intl.string(G.t.cpT0Cq),
                            DISMISS_BUTTON_LABEL: G.intl.string(G.t.WAI6xu),
                            PLAY_BUTTON_LABEL: G.intl.string(G.t.RscU7I),
                            PAUSE_BUTTON_LABEL: G.intl.string(G.t.ZcgDJX),
                            NEW: G.intl.string(G.t.y2b7CA),
                            BETA: G.intl.string(G.t.oW0eUd),
                            EARLY_ACCESS: G.intl.string(G.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: G.intl.string(G.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: G.intl.string(w.default.m3Vfcs),
                            SEARCH: G.intl.string(G.t["5h0QOP"]),
                            AUTOCOMPLETE_NO_RESULTS_HEADER: G.intl.string(G.t["4o4z3e"]),
                            AUTOCOMPLETE_NO_RESULTS_BODY: G.intl.string(G.t.QwSXv8),
                            LISTBOX_EMPTY_STATE: G.intl.string(w.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                G.intl.formatToPlainString(w.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: G.intl.string(G.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: G.intl.string(G.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: G.intl.string(G.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: G.intl.string(G.t.FMYSJY),
                            KEY_SHIFT: G.intl.string(G.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: G.intl.string(G.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: G.intl.string(G.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: G.intl.string(G.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: G.intl.string(G.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: G.intl.string(G.t["BT3jf/"]),
                            KEY_PAGEUP: G.intl.string(G.t.VdCWGI),
                            KEY_PAGEDOWN: G.intl.string(G.t.gpSh3U),
                            KEY_ANY: G.intl.string(G.t.CkGpcV),
                            KEY_ENTER: G.intl.string(G.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: G.intl.string(G.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: G.intl.string(G.t.V7nPj0),
                            KEY_ESCAPE: G.intl.string(G.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: G.intl.string(G.t["2qsw5/"]),
                            KEY_BACKSPACE: G.intl.string(G.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: G.intl.string(G.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: G.intl.string(G.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: G.intl.string(w.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: G.intl.string(w.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: G.intl.string(w.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: G.intl.string(G.t["rTU7/z"]),
                            FEEDBACK_CRITICAL_ICON_A11Y_LABEL: G.intl.string(w.default.uKMqrF),
                            FEEDBACK_WARNING_ICON_A11Y_LABEL: G.intl.string(w.default["7vL/d/"]),
                            FEEDBACK_INFO_ICON_A11Y_LABEL: G.intl.string(w.default.BReS7U),
                            FEEDBACK_POSITIVE_ICON_A11Y_LABEL: G.intl.string(w.default["1MXXPf"]),
                            STEP_INDICATOR: (e, t) =>
                                G.intl.formatToPlainString(w.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: G.intl.string(w.default["A+pfVR"]),
                            CLEAR_SELECTION: G.intl.string(w.default.JA5C7L),
                            SELECTED_TAGS_HEADING: G.intl.string(w.default.VMNfsY),
                            PRESS_DELETE_TO_REMOVE_TAG: G.intl.string(w.default["/Y7vRd"]),
                            PERCENT_COMPLETE: (e) => G.intl.formatToPlainString(w.default["2L/ygS"], { percent: e }),
                            TEXT_INPUT_CLEAR: G.intl.string(G.t.VkKicb),
                            CHARACTER_COUNT_LIMIT_REACHED: G.intl.string(G.t.c2Jqed),
                            CHARACTER_COUNT_A11Y_LABEL: (e) =>
                                G.intl.formatToPlainString(G.t.fR1cof, { remainingCharacters: e }),
                            MINIMUM_LENGTH_ERROR: (e) => G.intl.formatToPlainString(G.t["62rk1K"], { minLength: e }),
                            MAXIMUM_LENGTH_ERROR: (e) => G.intl.formatToPlainString(G.t.ICT5S6, { maxLength: e }),
                            MINIMUM_VALUE_ERROR: (e) => G.intl.formatToPlainString(G.t.ykmNSo, { min: e }),
                            MAXIMUM_VALUE_ERROR: (e) => G.intl.formatToPlainString(G.t.KiDDCk, { max: e }),
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
                    ((0, s.waitForAllDefaultIntlMessagesLoaded)().then(e), G.intl.onLocaleChange(e));
                }, [_]),
                E
            );
        })({
            theme: h,
            saturation: W,
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
            focused: k,
            mainWindowVisible: F,
            locale: A,
        });
    return (0, r.jsx)(E.GE, {
        value: el,
        children: (0, r.jsx)(f, {
            theme: h,
            flags: Q,
            saturation: W,
            density: J,
            children: (0, r.jsx)(U.fs, {
                lang: A,
                theme: h,
                density: J,
                focused: k,
                fontScale: V,
                fontScaleClass: H,
                keyboardModeEnabled: j,
                mouseMode: q,
                saturation: W,
                desaturateUserColors: Y,
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
