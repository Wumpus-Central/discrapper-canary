"use strict";
n.d(t, { Ay: () => A, u_: () => p, um: () => m });
var i = n(873298),
    r = n(406935),
    s = n(462887),
    a = n(228366),
    o = n(47671),
    l = n(284016),
    d = n(973654),
    _ = n(363195),
    u = n(253932),
    c = n(594061),
    E = n(652215),
    h = n(185928);
function m(e) {
    return c.wc.updateAsync(
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
        c.Sb.FREQUENT_USER_ACTION,
    );
}
function f(e) {
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
function g(e) {
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
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Sb.INFREQUENT_USER_ACTION,
        _ = "system" === i ? h.Q_.ON : h.Q_.OFF;
    if (
        (a.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: null != r ? r : _ } }),
        null == t && "system" !== i && (0, s.M)(i) && (0, d.NA)({ [h.Fc.DARK]: i }),
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
        return c.wc.updateAsync(
            "appearance",
            (e) => {
                (e.theme = f(i)),
                    (e.clientThemeSettings = g({ backgroundGradientPresetId: t, customUserThemeSettings: n }));
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
                await c.wc.updateAsync(
                    "appearance",
                    (e) => {
                        (e.theme = f(_.A.theme)),
                            (e.clientThemeSettings = g({
                                backgroundGradientPresetId: o.A.gradientPreset?.id,
                                customUserThemeSettings: u.eh.getSetting()?.customUserThemeSettings,
                            }));
                    },
                    c.Sb.INFREQUENT_USER_ACTION,
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
                              theme: _.A.theme,
                              clientThemeSettings: { backgroundGradientPresetId: o.A.gradientPreset?.id },
                              developerMode: u.Q_.getSetting(),
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
        c.wc.updateAsync(
            "localization",
            (t) => {
                t.locale = r.hU.create({ value: e });
            },
            c.Sb.INFREQUENT_USER_ACTION,
        ),
    updateTheme(e) {
        a.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: { appearance: { settings: { theme: e } } },
        }),
            l.A.shouldSync("appearance") &&
                c.wc.updateAsync(
                    "appearance",
                    (t) => {
                        t.theme = f(e);
                    },
                    c.Sb.INFREQUENT_USER_ACTION,
                );
    },
};
