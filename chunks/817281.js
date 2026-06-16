"use strict";
n.d(t, { Ay: () => A, u_: () => g, um: () => p });
var i = n(873298),
    r = n(406935),
    s = n(462887),
    a = n(228366),
    o = n(47671),
    l = n(284016),
    u = n(973654),
    c = n(363195),
    d = n(885386),
    _ = n(594061),
    h = n(652215),
    f = n(185928);
function p(e) {
    return _.wc.updateAsync(
        "guildFolders",
        (t) => {
            t.folders = e.map((e) => {
                let t = i.ak.create({ guildIds: e.guildIds });
                return (
                    null != e.folderId && (t.id = r.j1.create({ value: String(e.folderId) })),
                    null != e.folderColor && (t.color = r.ol.create({ value: String(e.folderColor) })),
                    null != e.folderName &&
                        "" !== e.folderName &&
                        (t.name = r.hU.create({ value: String(e.folderName) })),
                    t
                );
            });
        },
        _.Sb.FREQUENT_USER_ACTION,
    );
}
function E(e) {
    switch (e) {
        case h.NJ8.DARK:
            return i.Sx.DARK;
        case h.NJ8.LIGHT:
            return i.Sx.LIGHT;
        case h.NJ8.DARKER:
            return i.Sx.DARKER;
        case h.NJ8.MIDNIGHT:
            return i.Sx.MIDNIGHT;
        default:
            return i.Sx.DARK;
    }
}
function m(e) {
    return {
        backgroundGradientPresetId:
            null != e.backgroundGradientPresetId ? r.ZQ.create({ value: e.backgroundGradientPresetId }) : void 0,
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
function g(e) {
    let { backgroundGradientPresetId: t, customUserThemeSettings: n, theme: i, useSystemTheme: r } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Sb.INFREQUENT_USER_ACTION,
        c = "system" === i ? f.Q_.ON : f.Q_.OFF;
    if (
        (a.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: null != r ? r : c } }),
        null == t && "system" !== i && (0, s.M)(i) && (0, u.NA)({ [f.Fc.DARK]: i }),
        a.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                appearance: {
                    settings: {
                        clientThemeSettings: { backgroundGradientPresetId: t, customUserThemeSettings: n },
                        theme: "system" === i ? void 0 : i,
                    },
                },
            },
        }),
        l.A.shouldSync("appearance"))
    )
        return _.wc.updateAsync(
            "appearance",
            (e) => {
                (e.theme = E(i)),
                    (e.clientThemeSettings = m({ backgroundGradientPresetId: t, customUserThemeSettings: n }));
            },
            o,
        );
}
let A = {
    overrideLocale(e) {
        a.h.dispatch({ type: "USER_SETTINGS_LOCALE_OVERRIDE", locale: e });
    },
    updatedUnsyncedSettings(e) {
        a.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: e });
    },
    setShouldSyncTextSettings(e) {
        a.h.dispatch({
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
    async setShouldSyncAppearanceSettings(e) {
        if (e)
            try {
                await _.wc.updateAsync(
                    "appearance",
                    (e) => {
                        (e.theme = E(c.A.theme)),
                            (e.clientThemeSettings = m({
                                backgroundGradientPresetId: o.A.gradientPreset?.id,
                                customUserThemeSettings: d.eh.getSetting()?.customUserThemeSettings,
                            }));
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
            } catch {
                return;
            }
        a.h.dispatch({
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
        a.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_APPLY", settings: e });
    },
    clearSettingsOverride() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        a.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: t });
    },
    updateLocale: (e) =>
        _.wc.updateAsync(
            "localization",
            (t) => {
                t.locale = r.hU.create({ value: e });
            },
            _.Sb.INFREQUENT_USER_ACTION,
        ),
    updateTheme(e) {
        a.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: { appearance: { settings: { theme: e } } },
        }),
            l.A.shouldSync("appearance") &&
                _.wc.updateAsync(
                    "appearance",
                    (t) => {
                        t.theme = E(e);
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
    },
};
