"use strict";
n.d(t, {
    Sf: () => e$,
    n6: () => eo,
    X6: () => eG,
    Iv: () => e6,
    NF: () => e9,
    j0: () => ta,
    Pf: () => ee,
    Vd: () => e8,
    CY: () => eM,
    NO: () => V,
    D_: () => R,
    pK: () => tr,
    JI: () => eV,
    HZ: () => e4,
    vf: () => ep,
    Vv: () => e7,
    BQ: () => v,
    HO: () => eh,
    SY: () => M,
    _8: () => te,
    j7: () => e_,
    JG: () => eq,
    XZ: () => em,
    Q_: () => ej,
    Yt: () => tl,
    he: () => eL,
    FA: () => ec,
    Hu: () => to,
    hH: () => eE,
    gs: () => b,
    _6: () => eP,
    l$: () => eW,
    Zd: () => td,
    hD: () => ex,
    pE: () => eJ,
    UM: () => en,
    e: () => et,
    _Z: () => e0,
    NR: () => w,
    T3: () => k,
    cU: () => eg,
    ML: () => y,
    WY: () => es,
    Zk: () => e3,
    vL: () => eu,
    hV: () => X,
    tz: () => ey,
    on: () => eO,
    b0: () => Y,
    Zt: () => el,
    gY: () => U,
    Jr: () => B,
    Sy: () => Q,
    dG: () => eA,
    dm: () => e1,
    zY: () => ti,
    KP: () => eD,
    jW: () => eF,
    eK: () => D,
    m$: () => e2,
    YX: () => ea,
    Zr: () => er,
    eh: () => eY,
    uB: () => J,
    wv: () => q,
    jP: () => eb,
    tP: () => W,
    PZ: () => tn,
    H1: () => ef,
    TA: () => e5,
    Q$: () => ew,
    Pw: () => eX,
    rs: () => ek,
    uh: () => Z,
    S0: () => ez,
    Zp: () => P,
    qN: () => tt,
    iM: () => j,
    Qr: () => x,
    G2: () => eU,
    l_: () => eC,
    Yh: () => eI,
    _z: () => K,
    zS: () => F,
    cj: () => eR,
    $s: () => ed,
    oz: () => G,
    _3: () => $,
    bm: () => z,
    Qe: () => eN,
    kt: () => eK,
    Xi: () => ts,
    Kg: () => eS,
    SI: () => L,
});
var i = n(435558),
    r = n(923457),
    a = n(17928),
    s = n(873298),
    l = n(406935),
    o = n(52133),
    d = n(461012),
    c = n(207560),
    u = n(350503),
    _ = n(228366),
    E = n(284016),
    A = n(594061),
    h = n(617617),
    I = n(355097);
function f(e, t, n, i) {
    let { delay: r = I.Sb.INFREQUENT_USER_ACTION, comparator: s = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        l = () => n(h.A.settings[e]?.[t]);
    return {
        getSetting: l,
        updateSetting: g(l, (n) =>
            A.wc.updateAsync(
                e,
                (e) => {
                    e[t] = i(n, e[t]);
                },
                r,
            ),
        ),
        useSetting: () => (0, a.bG)([h.A], l, void 0, s),
    };
}
function p(e, t, n) {
    let i = () => {
        let i = E.A.getState()[t];
        return i?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: i,
        useSetting: () => {
            let i = e.useSetting();
            return (
                (0, a.bG)([E.A], () => {
                    let e = E.A.getState()[t];
                    return e?.settings[n];
                }) ?? i
            );
        },
        updateSetting: g(i, function (i) {
            return E.A.shouldSync(t)
                ? e.updateSetting(i)
                : (_.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: i } } },
                  }),
                  Promise.resolve());
        }),
    };
}
function T(e, t, n, i) {
    function r() {
        return n() ?? e.getSetting();
    }
    return {
        getSetting: r,
        useSetting: () => {
            let t = e.useSetting();
            return i() ?? t;
        },
        updateSetting: g(
            r,
            (n) => (_.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: [t] }), e.updateSetting(n)),
        ),
    };
}
function m(e) {
    let {
        baseSetting: t,
        isEligible: n,
        useIsEligible: i,
        eligibleDefault: r,
        ineligibleDefault: a,
        onUseDefault: s,
    } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (s?.(), n() ? r() : a);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = i();
            return null != e ? e : (s?.(), n ? r() : a);
        },
        updateSetting: (e) => t.updateSetting(e),
    };
}
function g(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
var S = n(397438),
    N = n(750714),
    C = n(652215),
    O = n(823894);
let R = f(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    L = f(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    y = f(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    D = f(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    v = f(
        "textAndImages",
        "includeGameMentionsInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    b = f(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? C.P6Q.ON_CLICK,
        (e) => l.hU.create({ value: e }),
    ),
    M = f(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
f(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let P = f(
    "notifications",
    "reactionNotifications",
    (e) => e ?? s.Tz.NOTIFICATIONS_ENABLED,
    (e) => e,
);
f(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? s.DQ.STATUS_PUSH_UNSET,
    (e) => e,
),
    f(
        "notifications",
        "enableSummaryReminderNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    );
let U = f(
    "notifications",
    "enableScreenDowntimeScheduleNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
f(
    "notifications",
    "enableVoiceActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
let w = f(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    G = f(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    x = f(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    k = f(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    );
f(
    "notifications",
    "enableFriendGamingActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
let F = f(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    V = f(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: !!e }),
    ),
    B = f(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    H = [],
    j = f(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? H,
        (e) => e,
    ),
    W = f(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? H,
        (e) => e,
    ),
    Y = f(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? H,
        (e) => e,
    ),
    K = f(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    $ = f(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    z = f(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    Z = f(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    q = f(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    X = f(
        "notifications",
        "notifyFriendsOnComeOnline",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    Q = f(
        "notifications",
        "notifyFriendsOnProfileUpdate",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
f(
    "notifications",
    "notificationCenterAckedBeforeId",
    (e) => e ?? "0",
    (e) => e,
);
let J = f(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ee = f(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    et = f(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    en = f(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ei = [],
    er = f(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? ei,
        (e) => e,
    ),
    ea = f(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    es = f(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : l._t.create({ value: e })),
    );
f(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => l._t.create({ value: e }),
);
let el = f(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    eo = f(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    ed = f(
        "privacy",
        "restrictedGuildIds",
        (e) => e ?? [],
        (e) => e,
    );
f(
    "privacy",
    "friendDiscoveryFlags",
    (e) => e?.value ?? 0,
    (e) => l.ZQ.create({ value: e }),
);
let ec = f(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? C.yKI,
        (e) => l.ZQ.create({ value: e }),
    ),
    eu = f(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    e_ = f(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eE = f(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eA = f(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eh = f(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => l.uN.create({ value: e }),
    ),
    eI = f(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ef = f(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ep = f(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eT = [],
    em = f(
        "privacy",
        "adTopicOptOuts",
        (e) => e ?? eT,
        (e) => e,
    );
f(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eg = f(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => l.ZQ.create({ value: e }),
    ),
    eS = f(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eN = f(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    );
f(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eC = f(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eO = f(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eR = f(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? N.Je.NON_FRIENDS,
        (e) => l.ZQ.create({ value: e }),
    );
f(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? N.uH.NON_FRIENDS,
    (e) => l.ZQ.create({ value: e }),
);
let eL = f(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? s.he.DEFAULT_UNSET,
        (e) => e,
    ),
    ey = f(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
f(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eD = f(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === s.KP.UNSET ? s.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    ev = new Set(Object.values(C.clD)),
    eb = f(
        "status",
        "status",
        (e) => (null != e && ev.has(e.value) ? e.value : C.clD.UNKNOWN),
        (e) => l.hU.create({ value: e }),
    ),
    eM = f(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eP = f(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eU = f(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ew = f(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eG = p(
        f(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    ex = p(
        f(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    ek = p(
        f(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eF = p(
        f(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
p(
    f(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            let { emojiId: t, emojiName: n, animated: i } = e ?? {};
            return {
                emojiId: t?.value,
                emojiName: n?.value,
                animated: i?.value,
                disableDoubleTap: e?.disableDoubleTap?.value ?? !1,
            };
        },
        (e) => {
            let { emojiId: t, emojiName: n, animated: i, disableDoubleTap: r } = e;
            return {
                emojiId: l.ol.create({ value: t }),
                emojiName: l.hU.create({ value: n }),
                animated: l._t.create({ value: i }),
                disableDoubleTap: l._t.create({ value: r }),
            };
        },
        { comparator: o.A },
    ),
    "text",
    "defaultReactionEmoji",
);
let eV = f(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => l.as.create({ value: e ?? 0 }),
    ),
    eB = new Set([I.YP.AUTO, d.b.COZY, d.b.COMPACT]);
f(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eB.has(e.value) ? e.value : d.b.COZY),
    (e) => l.hU.create({ value: e }),
);
let eH = new Set([d.P.ALL, d.P.UNREADS, d.P.NONE]);
f(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eH.has(e.value) ? e.value : d.P.ALL),
    (e) => l.hU.create({ value: e }),
);
let ej = p(
        f(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eW = f(
        "appearance",
        "darkSidebar",
        (e) => e ?? !1,
        (e) => e,
    ),
    eY = p(
        f(
            "appearance",
            "clientThemeSettings",
            (e) => ({
                backgroundGradientPresetId: e?.backgroundGradientPresetId?.value,
                customUserThemeSettings:
                    e?.customUserThemeSettings != null
                        ? {
                              colors: e.customUserThemeSettings.colors,
                              gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                              gradientAngle: e.customUserThemeSettings.gradientAngle,
                              baseMix: e.customUserThemeSettings.baseMix,
                          }
                        : void 0,
            }),
            (e) => ({
                backgroundGradientPresetId:
                    null != e.backgroundGradientPresetId
                        ? l.ZQ.create({ value: e.backgroundGradientPresetId })
                        : void 0,
                customUserThemeSettings:
                    null != e.customUserThemeSettings
                        ? {
                              colors: e.customUserThemeSettings.colors,
                              gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                              gradientAngle: e.customUserThemeSettings.gradientAngle,
                              baseMix: e.customUserThemeSettings.baseMix,
                          }
                        : void 0,
            }),
            { comparator: i.isEqual },
        ),
        "appearance",
        "clientThemeSettings",
    ),
    eK = T(
        p(
            f(
                "textAndImages",
                "gifAutoPlay",
                (e) => e?.value ?? !0,
                (e) => l._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => S.A.getOverride("gifAutoPlay")?.value,
        () => (0, a.bG)([S.A], () => S.A.getOverride("gifAutoPlay")?.value),
    ),
    e$ = T(
        p(
            f(
                "textAndImages",
                "animateEmoji",
                (e) => e?.value ?? !0,
                (e) => l._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => S.A.getOverride("animateEmoji")?.value,
        () => (0, a.bG)([S.A], () => S.A.getOverride("animateEmoji")?.value),
    ),
    ez = T(
        p(
            f(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? O.BJ.ALWAYS_ANIMATE,
                (e) => l.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => S.A.getOverride("animateStickers")?.value,
        () => (0, a.bG)([S.A], () => S.A.getOverride("animateStickers")?.value),
    ),
    eZ = [],
    eq = f(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eZ,
        (e) => e,
    ),
    eX = f(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eZ,
        (e) => e,
        { delay: I.Sb.FREQUENT_USER_ACTION },
    ),
    eQ = [],
    eJ = f(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eQ,
        (e) => e,
    );
m({
    baseSetting: f(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? s.AN.OFF,
    ),
    isEligible: () => (0, c.To)(r.p.GUILD_ACTIVITY_STATUS),
    useIsEligible: () => (0, c.yv)(r.p.GUILD_ACTIVITY_STATUS),
    ineligibleDefault: s.AN.OFF,
    eligibleDefault: () => s.AN.ON_FOR_LARGE_GUILDS,
});
let e0 = m({
        baseSetting: f(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === s.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? s.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, c.To)(r.p.GUILD_ACTIVITY_STATUS),
        useIsEligible: () => (0, c.yv)(r.p.GUILD_ACTIVITY_STATUS),
        ineligibleDefault: s.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    e1 = f(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    e2 = f(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    e3 = f(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    e5 = f(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? s.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e4 = f(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    );
function e6(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
    return {
        explicitContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function e7(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
    return {
        explicitContentGuilds: t ?? void 0,
        explicitContentFriendDm: n ?? void 0,
        explicitContentNonFriendDm: i ?? void 0,
    };
}
let e8 = f("textAndImages", "explicitContentSettings", e6, e7);
function e9(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
    return {
        goreContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function te(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
    return { goreContentGuilds: t ?? void 0, goreContentFriendDm: n ?? void 0, goreContentNonFriendDm: i ?? void 0 };
}
let tt = f("textAndImages", "goreContentSettings", e9, te);
f(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => l._t.create({ value: e }),
),
    f(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    );
let tn = f(
        "appearance",
        "timestampHourCycle",
        (e) => e ?? s.PZ.AUTO,
        (e) => e,
    ),
    ti = f("appearance", "defaultGuildThemePreference", u.v, (e) => e);
f(
    "appearance",
    "launchPadMode",
    (e) => e ?? s.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    f(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? s.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    );
let tr = f(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    ta = f(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    ts = f(
        "appearance",
        "uiDensity",
        (e) => (e === s.NS.UNSET_UI_DENSITY ? s.NS.DEFAULT : (e ?? s.NS.DEFAULT)),
        (e) => e,
    ),
    tl = f(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, i.mapValues)(e ?? {}, (e) => (0, i.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, i.mapValues)(e, (e) =>
                (0, i.mapValues)(e, (e) => l.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: I.Sb.AUTOMATED },
    ),
    to = f(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    td = f(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    );
