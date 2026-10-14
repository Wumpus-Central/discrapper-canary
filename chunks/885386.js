n.d(t, {
    Sf: () => eX,
    n6: () => ed,
    X6: () => ek,
    Iv: () => e8,
    NF: () => tt,
    j0: () => tl,
    Pf: () => et,
    Vd: () => te,
    CY: () => eU,
    NO: () => B,
    D_: () => R,
    pK: () => ts,
    JI: () => eH,
    HZ: () => e7,
    vf: () => em,
    Vv: () => e9,
    BQ: () => v,
    HO: () => eI,
    SY: () => M,
    _8: () => tn,
    j7: () => eE,
    JG: () => eQ,
    XZ: () => eS,
    Q_: () => eY,
    aM: () => eh,
    he: () => eD,
    FA: () => eu,
    Yt: () => td,
    Hu: () => tc,
    hH: () => eA,
    pR: () => Q,
    gs: () => b,
    l$: () => eK,
    _6: () => ew,
    Zd: () => tu,
    hD: () => eF,
    pE: () => e1,
    UM: () => ei,
    e: () => en,
    _Z: () => e2,
    NR: () => w,
    T3: () => k,
    cU: () => eN,
    ML: () => y,
    WY: () => el,
    Zk: () => e5,
    vL: () => e_,
    hV: () => Z,
    tz: () => ev,
    on: () => eL,
    b0: () => Y,
    Zt: () => eo,
    gY: () => U,
    Jr: () => V,
    Sy: () => J,
    dG: () => ef,
    dm: () => e3,
    zY: () => ta,
    KP: () => eb,
    jW: () => eV,
    eK: () => D,
    m$: () => e6,
    YX: () => es,
    Zr: () => ea,
    eh: () => e$,
    uB: () => ee,
    wv: () => q,
    jP: () => eP,
    tP: () => W,
    PZ: () => tr,
    H1: () => eT,
    TA: () => e4,
    Q$: () => ex,
    Pw: () => eJ,
    rs: () => eB,
    uh: () => X,
    S0: () => eq,
    Zp: () => P,
    qN: () => ti,
    iM: () => j,
    Qr: () => x,
    G2: () => eG,
    l_: () => eR,
    Yh: () => ep,
    _z: () => K,
    zS: () => F,
    cj: () => ey,
    $s: () => ec,
    oz: () => G,
    _3: () => $,
    bm: () => z,
    Qe: () => eO,
    kt: () => ez,
    Xi: () => to,
    Kg: () => eC,
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
    q = I(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    Z = I(
        "notifications",
        "notifyFriendsOnComeOnline",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    Q = I(
        "notifications",
        "notifyServerMembersOnGoLive",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    J = I(
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
let ee = I(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    et = I(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    en = I(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ei = I(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    er = [],
    ea = I(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? er,
        (e) => e,
    ),
    es = I(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    el = I(
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
let eo = I(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    ed = I(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    ec = I(
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
let eu = I(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? C.yKI,
        (e) => l.ZQ.create({ value: e }),
    ),
    e_ = I(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eE = I(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eA = I(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eh = I(
        "textAndImages",
        "displayCompactAvatars",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    ef = I(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eI = I(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => l.uN.create({ value: e }),
    ),
    ep = I(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    eT = I(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    em = I(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eg = [],
    eS = I(
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
let eN = I(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => l.ZQ.create({ value: e }),
    ),
    eC = I(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eO = I(
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
let eR = I(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    eL = I(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ey = I(
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
let eD = I(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? s.he.DEFAULT_UNSET,
        (e) => e,
    ),
    ev = I(
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
let eb = I(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === s.KP.UNSET ? s.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eM = new Set(Object.values(C.clD)),
    eP = I(
        "status",
        "status",
        (e) => (null != e && eM.has(e.value) ? e.value : C.clD.UNKNOWN),
        (e) => l.hU.create({ value: e }),
    ),
    eU = I(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    ew = I(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eG = I(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ex = I(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => l._t.create({ value: e }),
    ),
    ek = p(
        I(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eF = p(
        I(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eB = p(
        I(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => l._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eV = p(
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
let eH = I(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => l.as.create({ value: e ?? 0 }),
    ),
    ej = new Set([f.YP.AUTO, d.b.COZY, d.b.COMPACT]);
I(
    "appearance",
    "channelListLayout",
    (e) => (null != e && ej.has(e.value) ? e.value : d.b.COZY),
    (e) => l.hU.create({ value: e }),
);
let eW = new Set([d.P.ALL, d.P.UNREADS, d.P.NONE]);
I(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eW.has(e.value) ? e.value : d.P.ALL),
    (e) => l.hU.create({ value: e }),
);
let eY = p(
        I(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eK = I(
        "appearance",
        "darkSidebar",
        (e) => e ?? !1,
        (e) => e,
    ),
    e$ = p(
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
    ez = T(
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
    eX = T(
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
    eq = T(
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
    eQ = I(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eZ,
        (e) => e,
    ),
    eJ = I(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eZ,
        (e) => e,
        { delay: f.Sb.FREQUENT_USER_ACTION },
    ),
    e0 = [],
    e1 = I(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? e0,
        (e) => e,
    );
m({
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
let e2 = m({
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
    e3 = I(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    ),
    e6 = I(
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
    e4 = I(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? s.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e7 = I(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    );
function e8(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
    return {
        explicitContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        explicitContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function e9(e) {
    let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
    return {
        explicitContentGuilds: t ?? void 0,
        explicitContentFriendDm: n ?? void 0,
        explicitContentNonFriendDm: i ?? void 0,
    };
}
let te = I("textAndImages", "explicitContentSettings", e8, e9);
function tt(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
    return {
        goreContentGuilds: t ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentFriendDm: n ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        goreContentNonFriendDm: i ?? s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    };
}
function tn(e) {
    let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
    return { goreContentGuilds: t ?? void 0, goreContentFriendDm: n ?? void 0, goreContentNonFriendDm: i ?? void 0 };
}
let ti = I("textAndImages", "goreContentSettings", tt, tn);
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
let tr = I(
        "appearance",
        "timestampHourCycle",
        (e) => e ?? s.PZ.AUTO,
        (e) => e,
    ),
    ta = I("appearance", "defaultGuildThemePreference", u.v, (e) => e);
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
let ts = I(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    tl = I(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    to = I(
        "appearance",
        "uiDensity",
        (e) => (e === s.NS.UNSET_UI_DENSITY ? s.NS.DEFAULT : (e ?? s.NS.DEFAULT)),
        (e) => e,
    ),
    td = I(
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
    tc = I(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => l._t.create({ value: e }),
    ),
    tu = I(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value,
        (e) => l._t.create({ value: e }),
    );
