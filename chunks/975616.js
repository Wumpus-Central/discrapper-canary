n.d(t, {
    e: () => w,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(932433),
    o = n(503698),
    s = n.n(o),
    l = n(311907),
    c = n(116833),
    u = n(397927),
    d = n(775602),
    f = n(536199),
    p = n(989395),
    _ = n(71855),
    h = n(867628),
    m = n(534409),
    g = n(614738),
    E = n(750506),
    y = n(869146),
    b = n(773669),
    O = n(544028),
    v = n(531685),
    A = n(837921),
    I = n(418842),
    S = n(611635),
    T = n(763600),
    C = n(985018);

function N(e, t, n, r, o) {
    let s = i.useContext(p.A),
        l = i.useCallback(
            () => ({
                i18n: {
                    CANCEL: C.intl.string(C.t["ETE/oC"]),
                    BACK: C.intl.string(C.t["13/7kX"]),
                    NEXT: C.intl.string(C.t.PDTjLN),
                    SUBMIT: C.intl.string(C.t.geKm7t),
                    SPINNER_LOADING_LABEL: C.intl.string(C.t.ZTNur7),
                    BUTTON_LOADING_STARTED_LABEL: C.intl.string(C.t.pfChQr),
                    BUTTON_LOADING_FINISHED_LABEL: C.intl.string(C.t.SVParY),
                    CLOSE_BUTTON_LABEL: C.intl.string(C.t.cpT0Cq),
                    PLAY_BUTTON_LABEL: C.intl.string(C.t.RscU7I),
                    PAUSE_BUTTON_LABEL: C.intl.string(C.t.ZcgDJX),
                    NEW: C.intl.string(C.t.y2b7CA),
                    BETA: C.intl.string(C.t.oW0eUd),
                    EARLY_ACCESS: C.intl.string(C.t.EYxi0o),
                    BILLING_TRIAL_FREE_TRIAL_TEXT: C.intl.string(C.t.IBYG5U),
                    MODAL_DONT_SHOW_AGAIN: C.intl.string(T.default.m3Vfcs),
                    LISTBOX_EMPTY_STATE: C.intl.string(T.default.db85vU),
                    LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                        C.intl.formatToPlainString(T.default.bPKiId, {
                            query: e,
                        }),
                    KEY_CTRL_A11Y_LABEL: C.intl.string(C.t.jm6v8i),
                    KEY_CMD_A11Y_LABEL: C.intl.string(C.t.pYkiQq),
                    KEY_ALT_A11Y_LABEL: C.intl.string(C.t.R2n7d3),
                    KEY_OPTION_A11Y_LABEL: C.intl.string(C.t.FMYSJY),
                    KEY_SHIFT: C.intl.string(C.t["L+jWo5"]),
                    KEY_SHIFT_A11Y_LABEL: C.intl.string(C.t["q+/2+S"]),
                    KEY_UP_A11Y_LABEL: C.intl.string(C.t.HxzHDb),
                    KEY_DOWN_A11Y_LABEL: C.intl.string(C.t["a+iRlH"]),
                    KEY_LEFT_A11Y_LABEL: C.intl.string(C.t.xFjIVC),
                    KEY_RIGHT_A11Y_LABEL: C.intl.string(C.t["BT3jf/"]),
                    KEY_PAGEUP: C.intl.string(C.t.VdCWGI),
                    KEY_PAGEDOWN: C.intl.string(C.t.gpSh3U),
                    KEY_ANY: C.intl.string(C.t.CkGpcV),
                    KEY_ENTER: C.intl.string(C.t.SUweGy),
                    KEY_ENTER_A11Y_LABEL: C.intl.string(C.t.yLNala),
                    KEY_RETURN_A11Y_LABEL: C.intl.string(C.t.V7nPj0),
                    KEY_ESCAPE: C.intl.string(C.t.cQmsQF),
                    KEY_ESCAPE_A11Y_LABEL: C.intl.string(C.t["2qsw5/"]),
                    KEY_BACKSPACE: C.intl.string(C.t["L+36+h"]),
                    KEY_BACKSPACE_A11Y_LABEL: C.intl.string(C.t["9c/Ikv"]),
                    KEY_DELETE_A11Y_LABEL: C.intl.string(C.t.BTFDmq),
                    DATE_INPUT_OPEN_CALENDAR_LABEL: C.intl.string(T.default.I8kUqR),
                    CALENDAR_PREVIOUS_MONTH_LABEL: C.intl.string(T.default.raS6yf),
                    CALENDAR_NEXT_MONTH_LABEL: C.intl.string(T.default["/cp93l"]),
                    INLINE_NOTICE_GENERIC_ERROR: C.intl.string(C.t["rTU7/z"]),
                    STEP_INDICATOR: (e, t) =>
                        C.intl.formatToPlainString(T.default["v2YSk/"], {
                            stepNumber: e,
                            stepCount: t,
                        }),
                    SELECT_PLACEHOLDER: C.intl.string(T.default["A+pfVR"]),
                    CLEAR_SELECTION: C.intl.string(T.default.JA5C7L),
                    SELECTED_TAGS_HEADING: C.intl.string(T.default.VMNfsY),
                },
                locale: o,
                theme: e,
                saturation: t,
                defaultLayerContext: E.uY,
                experiments: {
                    enabledExperiments: n,
                },
                trackImpression: s,
                isWindowFocused: () => r,
                dynamicGraphicComponents: c.Q,
            }),
            [e, t, n, s, r, o],
        ),
        [u, d] = i.useState(l);
    return (
        i.useLayoutEffect(() => {
            function e() {
                d(l);
            }
            (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), C.intl.onLocaleChange(e);
        }, [l]),
        u
    );
}

function w(e) {
    let { windowKey: t, themeOverride: n, children: a } = e,
        o = null != t,
        [c] = i.useState(() => A.Ay.getEnableHardwareAcceleration()),
        {
            locale: p,
            theme: E,
            focused: T,
            currentWindow: C,
            fontScale: w,
            fontScaleClass: R,
            keyboardModeEnabled: P,
            saturation: D,
            desaturateUserColors: L,
            useForcedColors: x,
            systemForcedColors: M,
            useReducedMotion: j,
            alwaysShowLinkDecorations: k,
            highContrastMode: U,
        } = (0, l.cf)([b.default, d.A, O.A, y.A, v.A], () => {
            var e;
            return {
                locale: b.default.locale,
                theme: null != n ? n : O.A.theme,
                focused: o ? y.A.getWindowFocused(t) : v.A.isFocused(),
                currentWindow: o && null != (e = y.A.getWindow(t)) ? e : window,
                fontScale: d.A.fontScale,
                fontScaleClass: d.A.fontScaleClass,
                keyboardModeEnabled: d.A.keyboardModeEnabled,
                saturation: d.A.saturation,
                desaturateUserColors: d.A.desaturateUserColors,
                useForcedColors: d.A.useForcedColors,
                systemForcedColors: d.A.systemForcedColors,
                useReducedMotion: d.A.useReducedMotion,
                alwaysShowLinkDecorations: d.A.alwaysShowLinkDecorations,
                highContrastMode: d.A.isHighContrastModeEnabled,
            };
        }),
        G = f.z.useExperiment(
            {
                location: "RootThemeContextProvider",
            },
            {
                autoTrackExposure: !0,
            },
        ).enabled,
        F = (0, h.A)(C, __OVERLAY__ || T),
        V = 0;
    1 !== D && (V = (0, u.yVx)(V, u.ofu.REDUCE_SATURATION_ENABLED));
    let B = (0, I.C)(),
        H = (0, m.qK)("RootThemeContextProvider"),
        Y = (0, m.k5)("RootThemeContextProvider"),
        W = (0, m.lV)("RootThemeContextProvider"),
        K = (0, g.y)("RootThemeContextProvider"),
        z = (0, _.m2)({
            isPopoutWindow: o,
        }),
        q = N(
            E,
            D,
            i.useMemo(() => {
                let e = [];
                return (
                    H && e.push("refresh-fast-follow-avatars"),
                    Y && e.push("refresh-fast-follow-guild-bg"),
                    W && e.push("refresh-fast-follow-distinct-borders"),
                    K && e.push("mana-toggle-inputs"),
                    e
                );
            }, [H, Y, W, K]),
            T,
            p,
        );
    return (0, r.jsx)(u.GE8, {
        value: q,
        children: (0, r.jsx)(u.eSm, {
            theme: E,
            flags: V,
            saturation: D,
            density: B,
            children: (0, r.jsx)(S.fs, {
                lang: p,
                theme: E,
                density: B,
                focused: T,
                fontScale: w,
                fontScaleClass: R,
                keyboardModeEnabled: P,
                mouseMode: F,
                saturation: D,
                desaturateUserColors: L,
                useForcedColors: x,
                systemForcedColors: M,
                useReducedMotion: j,
                alwaysShowLinkDecorations: k,
                hardwareAccelerationEnabled: c,
                highContrastMode: G && U,
                isPopoutWindow: o,
                rootClassName: s()(z, {
                    "refresh-fast-follow-avatars": H,
                    "refresh-fast-follow-guild-bg": Y,
                    "refresh-fast-follow-distinct-borders": W,
                }),
                children: a,
            }),
        }),
    });
}
