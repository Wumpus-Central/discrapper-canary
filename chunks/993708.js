n.d(t, { f7: () => e2, Re: () => e1, Ay: () => to, pe: () => eJ, rV: () => e0 });
var i = n(536637),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    E = n(554146),
    o = n(506774),
    c = n(73153),
    _ = n(77729),
    u = n(573648),
    A = n(521790),
    T = n(587895),
    I = n(145643),
    d = n(826673),
    N = n(501419),
    R = n(532205),
    O = n(487329),
    S = n(161518),
    C = n(736056),
    D = n(952818),
    P = n(595528),
    M = n(652896),
    p = n(585510),
    m = n(610136),
    f = n(229527),
    U = n(93474),
    g = n(164956),
    h = n(857071);
let k = { hasShownBanner: !1 };
class y extends s.Ay.PersistedStore {
    static displayName = "VideoGuardBannerStore";
    static persistKey = "VideoGuardBanner";
    initialize(e) {
        null != e && (k = e);
    }
    isBannerDismissed() {
        return k.hasShownBanner;
    }
    getState() {
        return k;
    }
}
let L = new y(c.h, {
    VIDEO_GUARD_BANNER_DISMISSED: function () {
        k = { ...k, hasShownBanner: !0 };
    },
});
var x = n(625075),
    G = n(733110),
    j = n(577517),
    q = n(748209),
    v = n(869968),
    X = n(243217),
    B = n(287809),
    b = n(158045);
let F = !1;
class V extends s.Ay.Store {
    initialize() {
        this.waitFor(B.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = B.default.getCurrentUser();
        return !(0, b.TW)(e) && F;
    }
}
let H = new V(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = X.A.createFromServer(t);
            if (null == (0, b.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (F = !0);
        }
    },
});
var w = n(220038),
    Y = n(810498),
    K = n(264779),
    W = n(412260),
    z = n(852218),
    $ = n(256150),
    Q = n(859703),
    Z = n(541315),
    J = n(655116),
    ee = n(105530),
    et = n(935671),
    en = n(617617),
    ei = n(912630),
    el = n(976910),
    er = n(616356),
    es = n(280450),
    ea = n(347481),
    eE = n(734057),
    eo = n(30370);
n(321073);
var ec = n(435558),
    e_ = n.n(ec),
    eu = n(339048),
    eA = n(830382),
    eT = n(627363),
    eI = n(469778),
    ed = n(67480),
    eN = n(652215);
let eR = "DetectedOffPlatformPremiumPerksStore",
    eO = {},
    eS = {},
    eC = [];
function eD() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of e_().values(eS)) {
        if (eC.includes(t)) continue;
        let i = T.A.getApplication(n);
        if (null == i) {
            T.A.isFetchingApplication(n) || T.A.didFetchingApplicationFail(n) || eT.Ay.fetchApplication(n);
            continue;
        }
        let l = ed.A.get(t);
        if (null == l) {
            ed.A.isFetching(t) || ed.A.didFetchingSkuFail(t) || eA.EX(i.id, t);
            continue;
        }
        eI.A.applicationIdsFetching.has(i.id) ||
        eI.A.isEntitledToSku(B.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != eO[t] && (delete eO[t], (e = !0))
            : ((eO[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eP extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        (this.waitFor(T.A, eI.A, D.Ay, ed.A, B.default), (eC = o.w.get(eR) ?? eC));
    }
    getDetectedOffPlatformPremiumPerks() {
        return e_().values(eO);
    }
}
let eM = new eP(c.h, {
    LOGOUT: function () {
        ((eO = {}), (eS = {}));
    },
    SKU_FETCH_SUCCESS: eD,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eD,
    ENTITLEMENT_CREATE: eD,
    APPLICATION_FETCH_SUCCESS: eD,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eO[t], eC.includes(t))) return !1;
        (eC.push(t), o.w.set(eR, eC));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of D.Ay.getRunningGames())
            if (null != t && n !== eN.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eN.m_i)
                    i !== t ||
                        eC.includes(n) ||
                        (null == eS[n] &&
                            (eI.A.applicationIdsFetched.has(i) ||
                                eI.A.applicationIdsFetching.has(i) ||
                                null != eI.A.getForSku(n) ||
                                eu.LM(i),
                            (eS[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return (e && eD(), e);
    },
});
var ep = n(696451),
    em = n(317525),
    ef = n(71393),
    eU = n(25578),
    eg = n(803224),
    eh = n(576705),
    ek = n(362790),
    ey = n(763827),
    eL = n(309010),
    ex = n(967198),
    eG = n(437959),
    ej = n(351906),
    eq = n(274184),
    ev = n(870570),
    eX = n(977997),
    eB = n(295405),
    eb = n(166403),
    eF = n(354670),
    eV = n(147964),
    eH = n(723702),
    ew = n(19575),
    eY = n(755439),
    eK = n(422033),
    eW = n(966846);
n(436317);
var ez = n(202541),
    e$ = n(190107),
    eQ = n(818348),
    eZ = n(731854);
let eJ = {
        [eN.kqX.DOWNLOAD_NAG]: E.M.NAGBAR_NOTICE_DOWNLOAD,
        [eN.kqX.CONNECT_SPOTIFY]: E.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eN.kqX.PASSKEY_BACKUP]: E.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eN.kqX.PREMIUM_REACTIVATE]: E.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eN.kqX.BOUNCED_EMAIL_DETECTED]: E.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eN.kqX.CHECKOUT_RECOVERY_NAGBAR]: E.M.CHECKOUT_RECOVERY_NAGBAR,
        [eN.kqX.QUEST_APP_UPSELL]: E.M.NAGBAR_QUEST_APP_UPSELL,
        [eN.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [eN.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
        [eN.kqX.COD_3PP_NAGBAR]: E.M.COD_3PP_NAGBAR_NOTICE,
        [eN.kqX.YOUTUBE_3P_NAGBAR]: E.M.YOUTUBE_3P_NAGBAR_NOTICE,
    },
    e0 = { [eN.kqX.GIFTING_PROMOTION_REMINDER]: E.M.GIFTING_PROMOTION_REMINDER },
    e1 = {
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eN.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION,
        [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [eN.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION,
        [eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    e2 = { [eN.kqX.OUTBOUND_PROMOTION]: E.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e5 = {
        [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eN.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eN.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eN.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eN.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eN.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eN.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eN.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [eN.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eN.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e3 = new Set([
        eN.kqX.NO_INPUT_DETECTED,
        eN.kqX.NO_INPUT_DEVICES_DETECTED,
        eN.kqX.STREAMER_MODE,
        eN.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eN.kqX.SPOTIFY_AUTO_PAUSED,
        eN.kqX.DISPATCH_ERROR,
        eN.kqX.DISPATCH_ERROR,
        eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e7 = {},
    e9 = {},
    e8 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e6 = null;
function e4(e) {
    return e5[e] + "-untilAtLeast";
}
function te(e, t, n) {
    if (null == e) return;
    let i = e5[e];
    (null == i || t || o.w.set(i, !0), e3.has(e) && (e7[e] = !0), null != n && null != i)
        ? o.w.set(e4(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(e4(e));
}
let tt = null;
function tn() {
    if (null != tt) return tt;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        ((e.font = '16px "Segoe MDL2 Assets", monospace'), (tt = e.measureText(t).width !== n));
    } catch (e) {
        tt = !1;
    }
    return tt;
}
function ti(e) {
    if (null == e) return !1;
    let t = e1[e];
    if (null != t) {
        let n = (0, R.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = eJ[e];
    if (null != n) return (0, d.k8)(n);
    let i = e5[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(e4(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e7[e];
    return !!r || (null != i && "" !== i ? o.w.get(i) : !!e3.has(e) && r);
}
let tl = [
    eN.kqX.QUARANTINED,
    eN.kqX.PARENTAL_CONSENT_WARNING,
    eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eN.kqX.VIEWING_ROLES,
    eN.kqX.INVITED_TO_SPEAK,
    eN.kqX.LURKING_GUILD,
    eN.kqX.VOICE_DISABLED,
    eN.kqX.NO_INPUT_DEVICES_DETECTED,
    eN.kqX.NO_INPUT_DETECTED,
    eN.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eN.kqX.PTT_NO_KEYBIND_WARNING,
    eN.kqX.HARDWARE_MUTE,
    eN.kqX.DISPATCH_ERROR,
    eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eN.kqX.SPOTIFY_AUTO_PAUSED,
    eN.kqX.WIN32_DEPRECATED_MESSAGE,
    eN.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eN.kqX.WIN_COMPAT_MODE_MESSAGE,
    eN.kqX.MACOS_DEPRECATED_MESSAGE,
    eN.kqX.E2EE_UPDATE_REQUIRED,
    eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eN.kqX.VOICE_CONNECTED_LAST_SESSION,
    eN.kqX.SYSTEM_SERVICE_WARNING,
    eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eN.kqX.GUILD_RAID_NOTIFICATION,
    eN.kqX.COD_3PP_NAGBAR,
    eN.kqX.YOUTUBE_3P_NAGBAR,
    eN.kqX.BATTLENET_MIGRATION,
    eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
    eN.kqX.GIFTING_PROMOTION_REMINDER,
    eN.kqX.RIOT_MIGRATION,
    eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eN.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eN.kqX.UNCLAIMED_ACCOUNT,
    eN.kqX.PENDING_MEMBER,
    eN.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eN.kqX.PREMIUM_MARKETING_NAGBAR,
    eN.kqX.OUTBOUND_PROMOTION,
    eN.kqX.CORRUPT_INSTALLATION,
    eN.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eN.kqX.VIDEO_GUARD,
    eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eN.kqX.STREAMER_MODE,
    eN.kqX.SCHEDULED_MAINTENANCE,
    eN.kqX.BOUNCED_EMAIL_DETECTED,
    eN.kqX.UNVERIFIED_ACCOUNT,
    eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eN.kqX.PREMIUM_UNCANCEL,
    eN.kqX.PREMIUM_MISSING_PAYMENT,
    eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eN.kqX.PREMIUM_REACTIVATE,
    eN.kqX.PASSKEY_BACKUP,
    eN.kqX.APPLICATION_TEST_MODE,
    eN.kqX.QUEST_APP_UPSELL,
    eN.kqX.DOWNLOAD_NAG,
    eN.kqX.CONNECT_SPOTIFY,
    eN.kqX.SURVEY,
    eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eN.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
(eN.kqX.QUARANTINED,
    eN.kqX.PARENTAL_CONSENT_WARNING,
    eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eN.kqX.VIEWING_ROLES,
    eN.kqX.INVITED_TO_SPEAK,
    eN.kqX.LURKING_GUILD,
    eN.kqX.VOICE_DISABLED,
    eN.kqX.NO_INPUT_DETECTED,
    eN.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eN.kqX.HARDWARE_MUTE,
    eN.kqX.DISPATCH_ERROR,
    eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eN.kqX.SPOTIFY_AUTO_PAUSED,
    eN.kqX.VOICE_CONNECTED_LAST_SESSION,
    eN.kqX.PENDING_MEMBER,
    eN.kqX.STREAMER_MODE,
    eN.kqX.SCHEDULED_MAINTENANCE);
let tr = {
    [eN.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, Y.MD)() },
    [eN.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, p.dj)().show && !ti(eN.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ep.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, f.TR)(i);
        },
    },
    [eN.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eN.nhx.QUARANTINED);
        },
    },
    [eN.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = j.A.getWarning();
            return e?.surfaces?.includes(q.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: j.A.getWarning()?.daysRemaining ?? null }),
    },
    [eN.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return g.A.isViewingRoles(t);
        },
    },
    [eN.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, ee.eY)(t) === ee.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eN.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && h.A.isLurking(t);
        },
    },
    [eN.kqX.VOICE_DISABLED]: { predicate: () => null != ey.A.getRemoteDisconnectVoiceChannelId() },
    [eN.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ey.A.getLastSessionVoiceChannelId() },
    [eN.kqX.NO_INPUT_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(O.iy.NO_AUDIO_INPUT_DETECTED) },
    [eN.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(O.iy.NO_INPUT_DEVICES) },
    [eN.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => ey.A.isConnected() && ei.A.videoBackgroundUnavailable },
    [eN.kqX.HARDWARE_MUTE]: {
        predicate: () => ey.A.isConnected() && eU.Ay.isHardwareMute() && eU.Ay.isHardwareMuteNoticeEnabled(),
        metadata: () => {
            let e = eU.Ay.getInputDeviceId(),
                t = ea.A.getVendor(e),
                n = ea.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eN.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!ey.A.isConnected() &&
            eU.Ay.getMode() === eN.TBI.PUSH_TO_TALK &&
            !(eU.Ay.getSettings().modeOptions.shortcut.length > 0),
    },
    [eN.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eY.A.getLastError(),
        metadata: () => ({ error: eY.A.getLastError() }),
    },
    [eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eK.A.getLastProgress(),
        metadata: () => eK.A.getLastProgress(),
    },
    [eN.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => J.A.wasAutoPaused() },
    [eN.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eN.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !ef.A.getGuild(t)?.features.has(eN.GuildFeatures.GUILD_ONBOARDING) &&
                    ep.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eN.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, K.So)() },
    [eN.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eH.isPlatformEmbedded && (!a.A.supported() || eW.A.isCorruptInstallation()),
    },
    [eN.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t &&
                eX.A.hasVideo(t) &&
                !eU.Ay.supports(eZ.O5.VIDEO) &&
                x.k.getConfig({ location: "NoticeStore.VIDEO_UNSUPPORTED_BROWSER" }).videoEnabled &&
                !ti(eN.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eN.kqX.VIDEO_GUARD]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t &&
                !L.isBannerDismissed() &&
                !x.k.getConfig({ location: "NoticeStore.VIDEO_GUARD" }).videoEnabled
            );
        },
    },
    [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return b.Ay.canRedeemPremiumPerks(t) && eM.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eM.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !ti(eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eM.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eM.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eN.kqX.STREAMER_MODE]: { predicate: () => ej.A.enabled },
    [eN.kqX.DOWNLOAD_NAG]: { predicate: () => !eH.isPlatformEmbedded && !ti(eN.kqX.DOWNLOAD_NAG) },
    [eN.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, eH.isOculusWeb)() && !ti(eN.kqX.QUEST_APP_UPSELL) },
    [eN.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eG.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eG.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eN.kqX.SURVEY]: { predicate: () => null != eq.Ay.getCurrentSurvey(), metadata: () => eq.Ay.getCurrentSurvey() },
    [eN.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eN.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eN.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !J.A.hasConnectedAccount() &&
            D.Ay.isObservedAppRunning(u.A.get(eN.fg2.SPOTIFY).name) &&
            !ti(eN.kqX.CONNECT_SPOTIFY),
    },
    [eN.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => _.A?.os.arch === "ia32" && _.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32")
                try {
                    if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tn();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32")
                try {
                    if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tn();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "darwin")
                try {
                    return 22 > parseInt(_.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && el.A.hasFetchedCredentials() && !el.A.hasCredentials && !ti(eN.kqX.PASSKEY_BACKUP);
        },
    },
    [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !ti(eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_0]).length > 0 &&
            !ti(eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringDiscountOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !ti(eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eN.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r =
                    t?.canceledAt != null &&
                    t?.status === eN.Dmq.CANCELED &&
                    1 >= l()().diff(l()(t.canceledAt), "days"),
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a =
                    null != t &&
                    t.status === eN.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, b.YE)(n, ez.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eN.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, b.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? b.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eN.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = eI.A.applicationIdsFetched.has(ez.tv),
                E = eI.A.getForApplication(ez.tv),
                o = null != t ? (0, b.EL)(t) : null,
                c = null != o ? b.Ay.getSkuIdForPlan(o.planId) : null,
                _ =
                    null != E &&
                    null != o &&
                    Array.from(E).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === c;
                    }).length > 0,
                u =
                    null != t &&
                    i <= (r > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== eN.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !_ &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eN.kqX.PREMIUM_MISSING_PAYMENT) && u;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, b.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? b.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eB.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eN.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eV.A.testModeApplicationId,
        metadata: () => {
            if (null == eV.A.testModeApplicationId) return {};
            let e = eV.A.testModeApplicationId,
                t = T.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eN.kqX.PREMIUM_REACTIVATE]: { predicate: () => !ti(eN.kqX.PREMIUM_REACTIVATE) && H.shouldShowReactivateNotice() },
    [eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eB.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eQ.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === eN.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, b.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? ef.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != U.A.getMentionRaidDetected(t) &&
                    n?.features.has(eN.GuildFeatures.COMMUNITY) &&
                    !ti(eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: l()().add(2, "hours").toDate() };
            if (null != t) {
                let e = U.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eN.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = er.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, M._z)(e),
                n = Q.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= e$.tZ;
        },
        metadata: () => {
            let e = er.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, M._z)(e) : null };
        },
    },
    [eN.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eB.A.paymentSources ?? {};
            return v.A.getIsTargeted() && !(0, b.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eN.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = W.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = W.A.getPromotionByTypeAndId(z.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, d.u$)(E.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eN.kqX.COD_3PP_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !ti(eN.kqX.COD_3PP_NAGBAR) && (0, w.OI)(t, "NoticeStore.COD_3PP_NAGBAR");
        },
    },
    [eN.kqX.YOUTUBE_3P_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !ti(eN.kqX.YOUTUBE_3P_NAGBAR) && (0, $.MC)(t, "NoticeStore.YOUTUBE_3P_NAGBAR");
        },
    },
    [eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !ti(eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && Z.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eN.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => Z.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eN.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                ti(eN.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, et.yA)(D.Ay) ||
                null == t ||
                eU.Ay.getMode() !== eN.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = D.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eN.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (ti(eN.kqX.E2EE_UPDATE_REQUIRED) || !ey.A.isConnected()) return !1;
            let e = eU.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eH.isPlatformEmbedded ||
                _.A?.process.platform !== "win32" ||
                ti(eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                ew.Ay.getEnableHardwareAcceleration()
            ) && !1 === eU.Ay.isH264MfDecodeAvailable(),
    },
    [eN.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            let e = null != eo.A.getAccount(null, eN.fg2.RIOT_GAMES),
                t = null != eo.A.getAccount(null, eN.fg2.LEAGUE_OF_LEGENDS);
            if (ti(eN.kqX.RIOT_MIGRATION) || (0, d.k8)(E.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = u.A.get(eN.fg2.LEAGUE_OF_LEGENDS),
                i = u.A.get(eN.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eN.fg2.RIOT_GAMES, eN.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [eN.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = u.A.get(eN.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == eo.A.getAccount(null, eN.fg2.BATTLENET) ||
                ti(eN.kqX.BATTLENET_MIGRATION) ||
                (0, d.k8)(E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eN.fg2.BATTLENET],
                dismissibleContent: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function ts() {
    if (!P.A.isConnected()) return !1;
    e6 = null;
    let e = B.default.getCurrentUser();
    if (null == e) return !1;
    let t = eb.A.getPremiumSubscription(),
        n = ex.A.getGuildId(),
        i = eL.Ay.getVoiceChannelId(),
        l = null != i ? eX.A.getVoiceStateForChannel(i) : null;
    for (let r of tl)
        if (
            null != tr[r] &&
            tr[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = tr[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e6 = { ...e8, type: r, metadata: i };
            break;
        }
    if (null != e6) {
        e6.metadata?.sampleRate != null &&
            null == e9[e6.type] &&
            (e9[e6.type] = Math.random() <= e6.metadata.sampleRate);
        let e = !1 === e9[e6.type];
        (ti(e6.type) || e) && (e6 = null);
    }
}
function ta() {
    return (ej.A.enabled || delete e7[eN.kqX.STREAMER_MODE], ts());
}
class tE extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        (this.syncWith(
            [
                S.A,
                eq.Ay,
                ek.A,
                eM,
                ex.A,
                W.A,
                eF.A,
                G.default,
                eo.A,
                en.A,
                m.A,
                Q.A,
                er.A,
                D.Ay,
                el.A,
                S.A,
                I.A,
                j.A,
                L,
            ],
            ts,
        ),
            this.waitFor(
                S.A,
                T.A,
                er.A,
                es.default,
                G.default,
                ea.A,
                eE.A,
                v.A,
                eo.A,
                eM,
                eY.A,
                eK.A,
                eW.A,
                eI.A,
                C.A,
                P.A,
                U.A,
                m.A,
                ep.Ay,
                I.A,
                em.A,
                ef.A,
                g.A,
                h.A,
                eU.Ay,
                eg.A,
                j.A,
                eB.A,
                eh.A,
                ek.A,
                W.A,
                Q.A,
                ey.A,
                D.Ay,
                eL.Ay,
                ex.A,
                J.A,
                eG.A,
                ej.A,
                H,
                eb.A,
                eq.Ay,
                eV.A,
                eF.A,
                ev.A,
                en.A,
                B.default,
                ei.A,
                L,
                eX.A,
                el.A,
            ));
    }
    hasNotice() {
        return null != e6 && null != e6.type;
    }
    getNotice() {
        return null == ev.A.getAction() ? e6 : null;
    }
    isNoticeDismissed(e) {
        return ti(e);
    }
}
let to = new tE(c.h, {
    CURRENT_USER_UPDATE: ts,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ts,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ts,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ts,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: ts,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ts,
    GUILD_CREATE: ts,
    GUILD_DELETE: ts,
    AUDIO_INPUT_DETECTED: ts,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ts,
    CERTIFIED_DEVICES_SET: ts,
    AUDIO_SET_INPUT_DEVICE: ts,
    AUDIO_SET_OUTPUT_DEVICE: ts,
    MEDIA_ENGINE_DEVICES: ts,
    RTC_CONNECTION_STATE: ts,
    RPC_APP_AUTHENTICATED: ts,
    RPC_APP_DISCONNECTED: ts,
    USER_CONNECTIONS_UPDATE: ts,
    WINDOW_FOCUS: ts,
    INSTANT_INVITE_CREATE: ts,
    INSTANT_INVITE_REVOKE_SUCCESS: ts,
    SPOTIFY_PLAYER_PAUSE: ts,
    RUNNING_GAMES_CHANGE: ts,
    EXPERIMENTS_FETCH_SUCCESS: ts,
    APEX_EXPERIMENTS_FETCH_SUCCESS: ts,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ts,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ts,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ts,
    DEVELOPER_TEST_MODE_RESET: ts,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: ts,
    DISPATCH_APPLICATION_INSTALL: ts,
    IMPERSONATE_STOP: ts,
    IMPERSONATE_UPDATE: ts,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === es.default.getId() && ts();
    },
    GUILD_MEMBER_UPDATE: ts,
    SURVEY_FETCHED: ts,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ts,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ts,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ts,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ts,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (e6?.type === eN.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== es.default.getId();
                })) &&
            ts()
        );
    },
    STREAMER_MODE_UPDATE: ta,
    RUNNING_STREAMER_TOOLS_CHANGE: ta,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete e7[eN.kqX.DISPATCH_ERROR], ts());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete e7[eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ts());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ts();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ts();
    },
    NOTICE_SHOW: function (e) {
        e6 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e6 && (null == e.id || e.id === e6.id) && (te(e6.type, e.isTemporary, e.untilAtLeast), ts());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (te(t), ts());
    },
    LOGOUT: function () {
        ((e7 = {}), (e9 = {}), (e6 = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ts,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ts,
    REPORT_AV_ERROR: ts,
    ACTIVE_AV_ERRORS_CHANGED: ts,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: ts,
    AUDIO_SET_MODE: ts,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: ts,
});
