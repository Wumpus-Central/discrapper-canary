"use strict";
n.d(t, { Ay: () => A, u_: () => E, um: () => h });
var r = n(873298),
    i = n(406935),
    a = n(582754),
    s = n(73153),
    o = n(47671),
    l = n(284016),
    u = n(973654),
    c = n(544028),
    d = n(253932),
    _ = n(594061),
    f = n(652215),
    p = n(185928);
function h(e) {
    return _.wc.updateAsync(
        "guildFolders",
        (t) => {
            t.folders = e.map((e) => {
                let t = r.ak.create({ guildIds: e.guildIds });
                return (
                    null != e.folderId && (t.id = i.j1.create({ value: String(e.folderId) })),
                    null != e.folderColor && (t.color = i.ol.create({ value: String(e.folderColor) })),
                    null != e.folderName &&
                        "" !== e.folderName &&
                        (t.name = i.hU.create({ value: String(e.folderName) })),
                    t
                );
            });
        },
        _.Sb.FREQUENT_USER_ACTION,
    );
}
function m(e) {
    switch (e) {
        case f.NJ8.DARK:
            return r.Sx.DARK;
        case f.NJ8.LIGHT:
            return r.Sx.LIGHT;
        case f.NJ8.DARKER:
            return r.Sx.DARKER;
        case f.NJ8.MIDNIGHT:
            return r.Sx.MIDNIGHT;
        default:
            return r.Sx.DARK;
    }
}
function g(e) {
    return {
        backgroundGradientPresetId:
            null != e.backgroundGradientPresetId ? i.ZQ.create({ value: e.backgroundGradientPresetId }) : void 0,
        customUserThemeSettings:
            null != e.customUserThemeSettings
                ? {
                      colors: e.customUserThemeSettings.colors,
                      gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                      gradientAngle: e.customUserThemeSettings.gradientAngle,
                      baseMix: e.customUserThemeSettings.baseMix,
                  }
                : void 0,
    };
}
function E(e) {
    let { backgroundGradientPresetId: t, customUserThemeSettings: n, theme: r, useSystemTheme: i } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Sb.INFREQUENT_USER_ACTION,
        c = "system" === r ? p.Q_.ON : p.Q_.OFF,
        d = null != i ? i : c;
    if (
        (s.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: d } }),
        null == t && "system" !== r && (0, a.Mw)(r) && (0, u.NA)({ [p.Fc.DARK]: r }),
        s.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                appearance: {
                    settings: {
                        clientThemeSettings: { backgroundGradientPresetId: t, customUserThemeSettings: n },
                        theme: "system" === r ? void 0 : r,
                    },
                },
            },
        }),
        l.A.shouldSync("appearance"))
    )
        return _.wc.updateAsync(
            "appearance",
            (e) => {
                (e.theme = m(r)),
                    (e.clientThemeSettings = g({ backgroundGradientPresetId: t, customUserThemeSettings: n }));
            },
            o,
        );
}
let A = {
    overrideLocale(e) {
        s.h.dispatch({ type: "USER_SETTINGS_LOCALE_OVERRIDE", locale: e });
    },
    updatedUnsyncedSettings(e) {
        s.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: e });
    },
    setShouldSyncTextSettings(e) {
        s.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                text: {
                    shouldSync: e,
                    settings: e
                        ? {}
                        : {
                              inlineAttachmentMedia: d.X6.getSetting(),
                              inlineEmbedMedia: d.hD.getSetting(),
                              renderEmbeds: d.rs.getSetting(),
                              renderReactions: d.jW.getSetting(),
                              animateEmoji: d.Sf.getSetting(),
                              animateStickers: d.S0.getSetting(),
                              gifAutoPlay: d.kt.getSetting(),
                          },
                },
            },
        });
    },
    setShouldSyncAppearanceSettings(e) {
        s.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                appearance: {
                    shouldSync: e,
                    settings: e
                        ? {}
                        : {
                              theme: c.A.theme,
                              clientThemeSettings: { backgroundGradientPresetId: o.A.gradientPreset?.id },
                              developerMode: d.Q_.getSetting(),
                          },
                },
            },
        });
    },
    applySettingsOverride(e) {
        s.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_APPLY", settings: e });
    },
    clearSettingsOverride() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        s.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: t });
    },
    updateLocale: (e) =>
        _.wc.updateAsync(
            "localization",
            (t) => {
                t.locale = i.hU.create({ value: e });
            },
            _.Sb.INFREQUENT_USER_ACTION,
        ),
    updateTheme(e) {
        s.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: { appearance: { settings: { theme: e } } },
        }),
            l.A.shouldSync("appearance") &&
                _.wc.updateAsync(
                    "appearance",
                    (t) => {
                        t.theme = m(e);
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
    },
};
