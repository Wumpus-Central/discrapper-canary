"use strict";
n.d(t, { Ay: () => T, u_: () => p, um: () => h });
var i = n(873298),
    r = n(406935),
    a = n(462887),
    s = n(228366),
    l = n(147248),
    o = n(284016),
    d = n(973654),
    c = n(363195),
    u = n(885386),
    _ = n(594061),
    E = n(652215),
    A = n(185928);
function h(e) {
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
function I(e) {
    switch (e) {
        case E.NJ8.DARK:
            return i.Sx.DARK;
        case E.NJ8.LIGHT:
            return i.Sx.LIGHT;
        case E.NJ8.DARKER:
            return i.Sx.DARKER;
        case E.NJ8.MIDNIGHT:
            return i.Sx.MIDNIGHT;
        default:
            return i.Sx.DARK;
    }
}
function f(e) {
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
function p(e) {
    let { backgroundGradientPresetId: t, customUserThemeSettings: n, theme: i, useSystemTheme: r } = e,
        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Sb.INFREQUENT_USER_ACTION,
        c = "system" === i ? A.Q_.ON : A.Q_.OFF;
    if (
        (s.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: null != r ? r : c } }),
        null == t && "system" !== i && (0, a.M)(i) && (0, d.NA)({ [A.Fc.DARK]: i }),
        s.h.dispatch({
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
        o.A.shouldSync("appearance"))
    )
        return _.wc.updateAsync(
            "appearance",
            (e) => {
                (e.theme = I(i)),
                    (e.clientThemeSettings = f({ backgroundGradientPresetId: t, customUserThemeSettings: n }));
            },
            l,
        );
}
let T = {
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
                              inlineAttachmentMedia: u.X6.getSetting(),
                              inlineEmbedMedia: u.hD.getSetting(),
                              renderEmbeds: u.rs.getSetting(),
                              renderReactions: u.jW.getSetting(),
                              animateEmoji: u.Sf.getSetting(),
                              animateStickers: u.S0.getSetting(),
                              gifAutoPlay: u.kt.getSetting(),
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
                        (e.theme = I(c.A.theme)),
                            (e.clientThemeSettings = f({
                                backgroundGradientPresetId: l.A.gradientPreset?.id,
                                customUserThemeSettings: u.eh.getSetting()?.customUserThemeSettings,
                            }));
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
            } catch {
                return;
            }
        s.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                appearance: {
                    shouldSync: e,
                    settings: e
                        ? {}
                        : {
                              theme: c.A.theme,
                              clientThemeSettings: { backgroundGradientPresetId: l.A.gradientPreset?.id },
                              developerMode: u.Q_.getSetting(),
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
                t.locale = r.hU.create({ value: e });
            },
            _.Sb.INFREQUENT_USER_ACTION,
        ),
    updateTheme(e) {
        s.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: { appearance: { settings: { theme: e } } },
        }),
            o.A.shouldSync("appearance") &&
                _.wc.updateAsync(
                    "appearance",
                    (t) => {
                        t.theme = I(e);
                    },
                    _.Sb.INFREQUENT_USER_ACTION,
                );
    },
};
