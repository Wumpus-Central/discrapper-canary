n.d(t, {
    Sf: () => ez,
    n6: () => eo,
    X6: () => ex,
    Iv: () => e7,
    NF: () => te,
    j0: () => ts,
    Pf: () => ee,
    Vd: () => e9,
    CY: () => eP,
    NO: () => B,
    D_: () => R,
    pK: () => ta,
    JI: () => eV,
    HZ: () => e4,
    vf: () => eT,
    Vv: () => e8,
    BQ: () => v,
    HO: () => ef,
    SY: () => M,
    _8: () => tt,
    j7: () => e_,
    JG: () => eq,
    XZ: () => em,
    Q_: () => eW,
    aM: () => eA,
    he: () => ey,
    FA: () => ec,
    Yt: () => to,
    Hu: () => td,
    hH: () => eE,
    gs: () => b,
    _6: () => eU,
    l$: () => eY,
    Zd: () => tc,
    hD: () => ek,
    pE: () => e0,
    UM: () => en,
    e: () => et,
    _Z: () => e1,
    NR: () => w,
    T3: () => k,
    cU: () => eS,
    ML: () => y,
    WY: () => es,
    Zk: () => e5,
    vL: () => eu,
    hV: () => q,
    tz: () => eD,
    on: () => eR,
    b0: () => Y,
    Zt: () => el,
    gY: () => U,
    Jr: () => V,
    Sy: () => Q,
    dG: () => eh,
    dm: () => e2,
    zY: () => tr,
    KP: () => ev,
    jW: () => eB,
    eK: () => D,
    m$: () => e3,
    YX: () => ea,
    Zr: () => er,
    eh: () => eK,
    uB: () => J,
    wv: () => Z,
    jP: () => eM,
    tP: () => W,
    PZ: () => ti,
    H1: () => ep,
    TA: () => e6,
    Q$: () => eG,
    Pw: () => eQ,
    rs: () => eF,
    uh: () => X,
    S0: () => eX,
    Zp: () => P,
    qN: () => tn,
    iM: () => j,
    Qr: () => x,
    G2: () => ew,
    l_: () => eO,
    Yh: () => eI,
    _z: () => K,
    zS: () => F,
    cj: () => eL,
    $s: () => ed,
    oz: () => G,
    _3: () => $,
    bm: () => z,
    Qe: () => eC,
    kt: () => e$,
    Xi: () => tl,
    Kg: () => eN,
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
    _ = n(73153),
    E = n(284016),
    A = n(594061),
    h = n(617617),
    f = n(355097);
function I(e, t, n, i) {
    let { delay: r = f.Sb.INFREQUENT_USER_ACTION, comparator: s = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        l = () => n(h.A.settings[e]?.[t]);
    return {
        getSetting: l,
        updateSetting: m(l, (n) =>
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
        updateSetting: m(i, function (i) {
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
        updateSetting: m(
            r,
            (n) => (_.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: [t] }), e.updateSetting(n)),
        ),
    };
}
function g(e) {
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
function m(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
var S = n(397438),
    N = n(750714),
    C = n(652215),
    O = n(823894);
let R = I(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    L = I(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    y = I(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    D = I(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    v = I(
        "textAndImages",
        "includeGameMentionsInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
I(
    "textAndImages",
    "inlineEmojiSuggestionsEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let b = I(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? C.P6Q.ON_CLICK,
        (e) => l.hU.create({ value: e }),
    ),
    M = I(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
I(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let P = I(
    "notifications",
    "reactionNotifications",
    (e) => e ?? s.Tz.NOTIFICATIONS_ENABLED,
    (e) => e,
);
(I(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? s.DQ.STATUS_PUSH_UNSET,
    (e) => e,
),
    I(
        "notifications",
        "enableSummaryReminderNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ));
let U = I(
    "notifications",
    "enableScreenDowntimeScheduleNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
I(
    "notifications",
    "enableVoiceActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
let w = I(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    G = I(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    x = I(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    k = I(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    );
I(
    "notifications",
    "enableFriendGamingActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: !!e }),
);
let F = I(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: !!e }),
    ),
    B = I(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: !!e }),
    ),
    V = I(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    H = [],
    j = I(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? H,
        (e) => e,
    ),
    W = I(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? H,
        (e) => e,
    ),
    Y = I(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? H,
        (e) => e,
    ),
    K = I(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    $ = I(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    z = I(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    X = I(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    Z = I(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    q = I(
        "notifications",
        "notifyFriendsOnComeOnline",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    Q = I(
        "notifications",
        "notifyFriendsOnProfileUpdate",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
I(
    "notifications",
    "notificationCenterAckedBeforeId",
    (e) => e ?? "0",
    (e) => e,
);
let J = I(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ee = I(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    et = I(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    en = I(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ei = [],
    er = I(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? ei,
        (e) => e,
    ),
    ea = I(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    es = I(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : l._t.create({ value: e })),
    );
I(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => l._t.create({ value: e }),
);
let el = I(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    eo = I(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    ed = I(
        "privacy",
        "restrictedGuildIds",
        (e) => e ?? [],
        (e) => e,
    );
I(
    "privacy",
    "friendDiscoveryFlags",
    (e) => e?.value ?? 0,
    (e) => l.ZQ.create({ value: e }),
);
let ec = I(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? C.yKI,
        (e) => l.ZQ.create({ value: e }),
    ),
    eu = I(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    e_ = I(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eE = I(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eA = I(
        "textAndImages",
        "displayCompactAvatars",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eh = I(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    ef = I(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => l.uN.create({ value: e }),
    ),
    eI = I(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ep = I(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eT = I(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eg = [],
    em = I(
        "privacy",
        "adTopicOptOuts",
        (e) => e ?? eg,
        (e) => e,
    );
I(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eS = I(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => l.ZQ.create({ value: e }),
    ),
    eN = I(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eC = I(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    );
I(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let eO = I(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eR = I(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eL = I(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? N.Je.NON_FRIENDS,
        (e) => l.ZQ.create({ value: e }),
    );
I(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? N.uH.NON_FRIENDS,
    (e) => l.ZQ.create({ value: e }),
);
let ey = I(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? s.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eD = I(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    );
I(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => l._t.create({ value: e }),
);
let ev = I(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === s.KP.UNSET ? s.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eb = new Set(Object.values(C.clD)),
    eM = I(
        "status",
        "status",
        (e) => (null != e && eb.has(e.value) ? e.value : C.clD.UNKNOWN),
        (e) => l.hU.create({ value: e }),
    ),
    eP = I(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eU = I(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    ew = I(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eG = I(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ex = p(
        I(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    ek = p(
        I(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eF = p(
        I(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eB = p(
        I(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
p(
    I(
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
let eV = I(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => l.as.create({ value: e ?? 0 }),
    ),
    eH = new Set([f.YP.AUTO, d.b.COZY, d.b.COMPACT]);
I(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eH.has(e.value) ? e.value : d.b.COZY),
    (e) => l.hU.create({ value: e }),
);
let ej = new Set([d.P.ALL, d.P.UNREADS, d.P.NONE]);
I(
    "appearance",
    "messagePreviews",
    (e) => (null != e && ej.has(e.value) ? e.value : d.P.ALL),
    (e) => l.hU.create({ value: e }),
);
let eW = p(
        I(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eY = I(
        "appearance",
        "darkSidebar",
        (e) => e ?? !1,
        (e) => e,
    ),
    eK = p(
        I(
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
    e$ = T(
        p(
            I(
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
    ez = T(
        p(
            I(
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
    eX = T(
        p(
            I(
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
    eq = I(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eZ,
        (e) => e,
    ),
    eQ = I(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eZ,
        (e) => e,
        { delay: f.Sb.FREQUENT_USER_ACTION },
    ),
    eJ = [],
    e0 = I(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eJ,
        (e) => e,
    );
g({
    baseSetting: I(
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
let e1 = g({
        baseSetting: I(
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
    e2 = I(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    e3 = I(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    e5 = I(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    e6 = I(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? s.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e4 = I(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    );
function e7(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
    return {
        explicitContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function e8(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
    return {
        explicitContentGuilds: t ?? void 0,
        explicitContentFriendDm: n ?? void 0,
        explicitContentNonFriendDm: i ?? void 0,
    };
}
let e9 = I("textAndImages", "explicitContentSettings", e7, e8);
function te(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
    return {
        goreContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function tt(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
    return { goreContentGuilds: t ?? void 0, goreContentFriendDm: n ?? void 0, goreContentNonFriendDm: i ?? void 0 };
}
let tn = I("textAndImages", "goreContentSettings", te, tt);
(I(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => l._t.create({ value: e }),
),
    I(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ));
let ti = I(
        "appearance",
        "timestampHourCycle",
        (e) => e ?? s.PZ.AUTO,
        (e) => e,
    ),
    tr = I("appearance", "defaultGuildThemePreference", u.v, (e) => e);
(I(
    "appearance",
    "launchPadMode",
    (e) => e ?? s.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    I(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? s.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    ));
let ta = I(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    ts = I(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    tl = I(
        "appearance",
        "uiDensity",
        (e) => (e === s.NS.UNSET_UI_DENSITY ? s.NS.DEFAULT : (e ?? s.NS.DEFAULT)),
        (e) => e,
    ),
    to = I(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, i.mapValues)(e ?? {}, (e) => (0, i.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, i.mapValues)(e, (e) =>
                (0, i.mapValues)(e, (e) => l.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: f.Sb.AUTOMATED },
    ),
    td = I(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    tc = I(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    );
