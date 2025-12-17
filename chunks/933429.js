n.d(t, {
    ZP: () => tn,
    m9: () => eL,
    nA: () => ek,
    o: () => ej,
    zD: () => eM,
}),
    n(388685),
    n(35282);
var r,
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(743426),
    l = n(704215),
    c = n(433517),
    u = n(570140),
    d = n(579806),
    f = n(726542),
    p = n(812206),
    _ = n(223892),
    m = n(674525),
    h = n(266454),
    g = n(605236),
    E = n(458725),
    b = n(915525),
    y = n(353926),
    O = n(594190),
    v = n(38618),
    S = n(569545),
    I = n(528011),
    T = n(487419),
    C = n(715903),
    A = n(223606),
    N = n(160404),
    P = n(41776),
    R = n(332473),
    w = n(30684),
    D = n(616106),
    x = n(2109),
    L = n(518638),
    j = n(1844),
    M = n(621615),
    k = n(417626),
    U = n(616022),
    G = n(523255),
    Z = n(867003),
    F = n(768419),
    B = n(590415),
    V = n(865066),
    H = n(581883),
    Y = n(15980),
    W = n(199902),
    K = n(314897),
    z = n(881998),
    q = n(463395),
    Q = n(592125),
    X = n(553795),
    J = n(427123),
    $ = n(271383),
    ee = n(430824),
    et = n(131951),
    en = n(292959),
    er = n(496675),
    ei = n(571474),
    ea = n(19780),
    eo = n(944486),
    es = n(914010),
    el = n(215427),
    ec = n(246946),
    eu = n(558724),
    ed = n(23434),
    ef = n(594174),
    ep = n(979651),
    e_ = n(853872),
    em = n(78839),
    eh = n(431),
    eg = n(580130),
    eE = n(695103),
    eb = n(358085),
    ey = n(74538),
    eO = n(922156),
    ev = n(436181),
    eS = n(941128),
    eI = n(981631),
    eT = n(188785),
    eC = n(474936),
    eA = n(324805),
    eN = n(231338),
    eP = n(65154);
function eR(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eR(e, t, n[t]);
            });
    }
    return e;
}
function eD(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ex(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eD(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eL = {
        [eI.kVF.DOWNLOAD_NAG]: l.z.NAGBAR_NOTICE_DOWNLOAD,
        [eI.kVF.CONNECT_SPOTIFY]: l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eI.kVF.CONNECT_PLAYSTATION]: l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eI.kVF.PASSKEY_BACKUP]: l.z.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eI.kVF.PREMIUM_REACTIVATE]: l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eI.kVF.BOUNCED_EMAIL_DETECTED]: l.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eI.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eI.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eI.kVF.POMELO_ELIGIBLE]: l.z.NAGBAR_NOTICE_POMELO,
        [eI.kVF.CHECKOUT_RECOVERY_NAGBAR]: l.z.CHECKOUT_RECOVERY_NAGBAR,
    },
    ej = { [eI.kVF.GIFTING_PROMOTION_REMINDER]: l.z.GIFTING_PROMOTION_REMINDER },
    eM = {
        [eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eI.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    ek = { [eI.kVF.OUTBOUND_PROMOTION]: l.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eU = {
        [eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eI.kVF.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eI.kVF.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eI.kVF.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eI.kVF.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eI.kVF.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eI.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eI.kVF.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eI.kVF.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
    },
    eG = new Set([
        eI.kVF.NO_INPUT_DETECTED,
        eI.kVF.NO_INPUT_DEVICES_DETECTED,
        eI.kVF.STREAMER_MODE,
        eI.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eI.kVF.SPOTIFY_AUTO_PAUSED,
        eI.kVF.DISPATCH_ERROR,
        eI.kVF.DISPATCH_ERROR,
        eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eI.kVF.BLOCKED_BY_PROXY,
    ]),
    eZ = {},
    eF = {},
    eB = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null,
    }),
    eV = null;
function eH(e) {
    return eU[e] + "-untilAtLeast";
}
function eY(e) {
    let t = c.K.get(eH(e));
    return null != t ? a()(t) : null;
}
function eW(e, t) {
    c.K.set(eH(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
}
function eK(e) {
    c.K.remove(eH(e));
}
function ez(e, t, n) {
    if (null == e) return;
    let r = eU[e];
    null == r || t || c.K.set(r, !0), eG.has(e) && (eZ[e] = !0), null != n && null != r ? eW(e, n) : eK(e);
}
function eq(e) {
    if (null == e || null != eM[e]) return !1;
    let t = ej[e];
    if (null != t) return (0, g.H4)(t).isDismissed;
    let n = eL[e];
    if (null != n) return (0, h.zu)(n);
    let r = eU[e];
    if (null != r) {
        let t = eY(e);
        if (null != t) return null == t ? void 0 : t.isAfter(a()());
    }
    let i = eZ[e];
    return !!i || (null != r && "" !== r ? c.K.get(r) : !!eG.has(e) && i);
}
let eQ = [
        eI.kVF.QUARANTINED,
        eI.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eI.kVF.VIEWING_ROLES,
        eI.kVF.INVITED_TO_SPEAK,
        eI.kVF.LURKING_GUILD,
        eI.kVF.VOICE_DISABLED,
        eI.kVF.NO_INPUT_DEVICES_DETECTED,
        eI.kVF.NO_INPUT_DETECTED,
        eI.kVF.HARDWARE_MUTE,
        eI.kVF.DISPATCH_ERROR,
        eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eI.kVF.SPOTIFY_AUTO_PAUSED,
        eI.kVF.WIN32_DEPRECATED_MESSAGE,
        eI.kVF.WIN7_8_DEPRECATED_MESSAGE,
        eI.kVF.MACOS_19_DEPRECATED_MESSAGE,
        eI.kVF.BLOCKED_BY_PROXY,
        eI.kVF.VOICE_CONNECTED_LAST_SESSION,
        eI.kVF.SYSTEM_SERVICE_WARNING,
        eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
        eI.kVF.GUILD_RAID_NOTIFICATION,
        eI.kVF.GIFTING_PROMOTION_REMINDER,
        eI.kVF.QUESTS_PROGRESS_INTERRUPTION,
        eI.kVF.UNCLAIMED_ACCOUNT,
        eI.kVF.POMELO_ELIGIBLE,
        eI.kVF.PENDING_MEMBER,
        eI.kVF.CHECKOUT_RECOVERY_NAGBAR,
        eI.kVF.OUTBOUND_PROMOTION,
        eI.kVF.CORRUPT_INSTALLATION,
        eI.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
        eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
        eI.kVF.STREAMER_MODE,
        eI.kVF.SCHEDULED_MAINTENANCE,
        eI.kVF.BOUNCED_EMAIL_DETECTED,
        eI.kVF.UNVERIFIED_ACCOUNT,
        eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING,
        eI.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING,
        eI.kVF.PREMIUM_TIER_0_TRIAL_ENDING,
        eI.kVF.PREMIUM_UNCANCEL,
        eI.kVF.PREMIUM_MISSING_PAYMENT,
        eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
        eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
        eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
        eI.kVF.PREMIUM_REACTIVATE,
        eI.kVF.ACTIVATE_SERVER_SUBSCRIPTION,
        eI.kVF.PASSKEY_BACKUP,
        eI.kVF.APPLICATION_TEST_MODE,
        eI.kVF.DOWNLOAD_NAG,
        eI.kVF.CONNECT_SPOTIFY,
        eI.kVF.CONNECT_PLAYSTATION,
        eI.kVF.SURVEY,
        eI.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
        eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
        eI.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
    ],
    eX = [
        eI.kVF.QUARANTINED,
        eI.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eI.kVF.VIEWING_ROLES,
        eI.kVF.INVITED_TO_SPEAK,
        eI.kVF.LURKING_GUILD,
        eI.kVF.VOICE_DISABLED,
        eI.kVF.NO_INPUT_DETECTED,
        eI.kVF.HARDWARE_MUTE,
        eI.kVF.DISPATCH_ERROR,
        eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eI.kVF.SPOTIFY_AUTO_PAUSED,
        eI.kVF.BLOCKED_BY_PROXY,
        eI.kVF.VOICE_CONNECTED_LAST_SESSION,
        eI.kVF.PENDING_MEMBER,
        eI.kVF.STREAMER_MODE,
        eI.kVF.SCHEDULED_MAINTENANCE,
    ],
    eJ = {
        [eI.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = x.Ys.getCurrentConfig({ location: "NoticeStore" }, { autoTrackExposure: !1 }),
                    { enabled: t } = x.YW.getConfig({ location: "NoticeStore" });
                return (
                    e &&
                    t &&
                    (0, g.H4)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed &&
                    !eq(eI.kVF.GIFTING_PROMOTION_REMINDER)
                );
            },
        },
        [eI.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, I.g)().show && !eq(eI.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: a()().add(3, "hours").toDate() }),
        },
        [eI.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = $.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, C.EY)(r);
            },
        },
        [eI.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eI.xW$.QUARANTINED);
            },
        },
        [eI.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return N.Z.isViewingRoles(t);
            },
        },
        [eI.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, B.gf)(t) === B.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            },
        },
        [eI.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.isLurking(t);
            },
        },
        [eI.kVF.VOICE_DISABLED]: { predicate: () => null != ea.Z.getRemoteDisconnectVoiceChannelId() },
        [eI.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.Z.getLastSessionVoiceChannelId() },
        [eI.kVF.NO_INPUT_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_AUDIO_INPUT_DETECTED) },
        [eI.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_INPUT_DEVICES) },
        [eI.kVF.HARDWARE_MUTE]: {
            predicate: () => ea.Z.isConnected() && et.Z.isHardwareMute() && et.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = et.Z.getInputDeviceId(),
                    t = q.Z.getVendor(e),
                    n = q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n,
                    };
            },
        },
        [eI.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eO.Z.getLastError(),
            metadata: () => ({ error: eO.Z.getLastError() }),
        },
        [eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != ev.Z.getLastProgress(),
            metadata: () => ev.Z.getLastProgress(),
        },
        [eI.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => F.Z.wasAutoPaused() },
        [eI.kVF.BLOCKED_BY_PROXY]: {
            predicate: () =>
                !eq(eI.kVF.BLOCKED_BY_PROXY) &&
                k.Z.blockedByProxy &&
                M.Z.getCurrentConfig({ location: "notice_store" }).eligibleForNotice,
        },
        [eI.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            },
        },
        [eI.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: a } = e;
                return (
                    null !=
                        (r =
                            null != i &&
                            null != a &&
                            !(null == (t = ee.Z.getGuild(i))
                                ? void 0
                                : t.features.has(eI.GuildFeatures.GUILD_ONBOARDING)) &&
                            (null == (n = $.ZP.getMember(i, a.id)) ? void 0 : n.isPending)) && r
                );
            },
        },
        [eI.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, L.tq)() },
        [eI.kVF.CORRUPT_INSTALLATION]: {
            predicate: () => eb.isPlatformEmbedded && (!s.Z.supported() || eS.Z.isCorruptInstallation()),
        },
        [eI.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return (
                    null != t &&
                    ep.Z.hasVideo(t) &&
                    !et.Z.supports(eP.AN.VIDEO) &&
                    !eq(eI.kVF.VIDEO_UNSUPPORTED_BROWSER)
                );
            },
        },
        [eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return ey.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () =>
                !eq(eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
                J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eI.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [eI.kVF.DOWNLOAD_NAG]: { predicate: () => !eb.isPlatformEmbedded && !eq(eI.kVF.DOWNLOAD_NAG) },
        [eI.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != el.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = el.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until),
                    };
            },
        },
        [eI.kVF.SURVEY]: {
            predicate: () => null != eu.ZP.getCurrentSurvey(),
            metadata: () => eu.ZP.getCurrentSurvey(),
        },
        [eI.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            },
        },
        [eI.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            },
        },
        [eI.kVF.CONNECT_SPOTIFY]: {
            predicate: () =>
                !F.Z.hasConnectedAccount() &&
                O.ZP.isObservedAppRunning(f.Z.get(eI.ABu.SPOTIFY).name) &&
                !eq(eI.kVF.CONNECT_SPOTIFY),
        },
        [eI.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () =>
                (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === "ia32" &&
                (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32",
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eI.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32")
                    try {
                        return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eI.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "darwin")
                    try {
                        return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eI.kVF.CONNECT_PLAYSTATION]: {
            predicate: () =>
                X.Z.isSuggestedAccountType(eI.ABu.PLAYSTATION) &&
                null == X.Z.getAccount(null, eI.ABu.PLAYSTATION) &&
                !eq(eI.kVF.CONNECT_PLAYSTATION),
        },
        [eI.kVF.PASSKEY_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (
                    (null == t ? void 0 : t.mfaEnabled) &&
                    Y.Z.hasFetchedCredentials() &&
                    !Y.Z.hasCredentials &&
                    !eq(eI.kVF.PASSKEY_BACKUP)
                );
            },
        },
        [eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: {
            predicate: () =>
                eh.Z.getAlmostExpiringTrialOffers([eC.Si.TIER_2]).length > 0 && !eq(eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING),
        },
        [eI.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: {
            predicate: () =>
                eh.Z.getAlmostExpiringTrialOffers([eC.Si.TIER_0]).length > 0 && !eq(eI.kVF.PREMIUM_TIER_0_TRIAL_ENDING),
        },
        [eI.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () =>
                eh.Z.getAlmostExpiringDiscountOffers([eC.Si.TIER_2]).length > 0 &&
                !eq(eI.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING),
        },
        [eI.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i =
                        (null == t ? void 0 : t.canceledAt) != null &&
                        (null == t ? void 0 : t.status) === eI.O0b.CANCELED &&
                        1 >= a()().diff(a()(t.canceledAt), "days"),
                    o = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    s =
                        null != t &&
                        t.status === eI.O0b.CANCELED &&
                        !o &&
                        r <= 7 &&
                        r >= 0 &&
                        (0, ey.M5)(n, eC.PremiumTypes.TIER_2) &&
                        !i &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eI.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i = null != n ? (null == (t = (0, ey.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? ey.ZP.getPremiumType(i) : null,
                    premiumSubscription: n,
                };
            },
        },
        [eI.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i =
                        (null != t
                            ? a()(t.currentPeriodEnd).diff(a()(t.currentPeriodStart).startOf("day"), "days")
                            : 0) > 14
                            ? 7
                            : 2,
                    o = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    s = eg.Z.applicationIdsFetched.has(eC.CL),
                    l = eg.Z.getForApplication(eC.CL),
                    c = null != t ? (0, ey.Af)(t) : null,
                    u = null != c ? ey.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != l &&
                        null != c &&
                        Array.from(l).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    f =
                        null != t &&
                        r <= i &&
                        r >= 0 &&
                        t.status !== eI.O0b.PAST_DUE &&
                        !o &&
                        s &&
                        !d &&
                        null === t.paymentSourceId &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eI.kVF.PREMIUM_MISSING_PAYMENT) && f;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i = null != n ? (null == (t = (0, ey.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? ey.ZP.getPremiumType(i) : null,
                    premiumSubscription: n,
                };
            },
        },
        [eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? e_.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    o =
                        null != t &&
                        t.status === eI.O0b.PAST_DUE &&
                        !i &&
                        null != r &&
                        r.invalid &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            },
        },
        [eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    i =
                        null != t &&
                        t.status === eI.O0b.PAST_DUE &&
                        !r &&
                        null === t.paymentSourceId &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            },
        },
        [eI.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eE.Z.testModeApplicationId,
            metadata: () => {
                if (null == eE.Z.testModeApplicationId) return {};
                let e = eE.Z.testModeApplicationId,
                    t = p.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e,
                };
            },
        },
        [eI.kVF.PREMIUM_REACTIVATE]: {
            predicate: () => !eq(eI.kVF.PREMIUM_REACTIVATE) && D.Z.shouldShowReactivateNotice(),
        },
        [eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    i = null != t && null != t.paymentSourceId ? e_.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != i && eN.Uk.has(i.type),
                    s =
                        null != t &&
                        t.status === eI.O0b.PAST_DUE &&
                        !r &&
                        o &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: a()().toDate(),
                      }
                    : {
                          daysPastDue: t.status === eI.O0b.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
                          dismissUntil: (0, ey.lY)(t).expiresDate.toDate(),
                      };
            },
        },
        [eI.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, R.e)() && !eq(eI.kVF.POMELO_ELIGIBLE) },
        [eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (
                    (null != t &&
                        null != A.Z.getMentionRaidDetected(t) &&
                        (null == n ? void 0 : n.features.has(eI.GuildFeatures.COMMUNITY)) &&
                        !eq(eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                    !1
                );
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: a()().add(2, "hours").toDate() };
                if (null != t) {
                    let e = A.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            },
        },
        [eI.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: {
            predicate: () =>
                !eq(eI.kVF.ACTIVATE_SERVER_SUBSCRIPTION) &&
                0 !== m.Z.getEligibleGuildsForNagActivate().length &&
                (0, _.Lm)(),
        },
        [eI.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return G.SI(t);
            },
        },
        [eI.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = W.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, S.V9)(e),
                    n = U.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eA.Ot;
            },
            metadata: () => {
                let e = W.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, S.V9)(e) : null };
            },
        },
        [eI.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = e_.Z.paymentSources) ? t : {};
                return w.Z.getIsTargeted() && !(0, ey.I5)(n) && 0 !== Object.keys(r).length;
            },
        },
        [eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eq(eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && Z.L0(),
            metadata: () => ({
                dismissUntil: a()().add(180, "days").toDate(),
                sampleRate: 0.1,
            }),
        },
        [eI.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => Z.Rr(),
            metadata: () => ({ sampleRate: 0.1 }),
        },
        [eI.kVF.SYSTEM_SERVICE_WARNING]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                if (
                    eq(eI.kVF.SYSTEM_SERVICE_WARNING) ||
                    !(0, V.s2)(O.ZP) ||
                    null == t ||
                    et.Z.getMode() !== eI.pM4.PUSH_TO_TALK
                )
                    return !1;
                let n = O.ZP.getVisibleGame();
                return null != n && !!n.elevated;
            },
        },
    };
function e$() {
    var e, t, n;
    if (!v.Z.isConnected()) return !1;
    eV = null;
    let r = ef.default.getCurrentUser();
    if (null == r) return !1;
    let i = em.Z.getPremiumSubscription(),
        a = es.Z.getGuildId(),
        o = eo.Z.getVoiceChannelId(),
        s = null != o ? ep.Z.getVoiceStateForChannel(o) : null;
    for (let n of eT.a ? eX : eQ)
        if (
            null != eJ[n] &&
            eJ[n].predicate({
                selectedGuildId: a,
                voiceChannelId: o,
                voiceState: s,
                currentUser: r,
                premiumSubscription: i,
            })
        ) {
            let o =
                null == (e = (t = eJ[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: a,
                      });
            eV = ex(ew({}, eB), {
                type: n,
                metadata: o,
            });
            break;
        }
    if (null != eV) {
        (null == (n = eV.metadata) ? void 0 : n.sampleRate) != null &&
            null == eF[eV.type] &&
            (eF[eV.type] = Math.random() <= eV.metadata.sampleRate);
        let e = !1 === eF[eV.type];
        (eq(eV.type) || e) && (eV = null);
    }
}
function e0(e) {
    let { voiceStates: t } = e;
    return (
        ((null == eV ? void 0 : eV.type) === eI.kVF.INVITED_TO_SPEAK ||
            t.some((e) => {
                let { userId: t } = e;
                return t !== K.default.getId();
            })) &&
        e$()
    );
}
function e1(e) {
    eV = e.notice;
}
function e3(e) {
    return null != eV && (null == e.id || e.id === eV.id) && (ez(eV.type, e.isTemporary, e.untilAtLeast), e$());
}
function e2(e) {
    let { noticeType: t } = e;
    return ez(t), e$();
}
function e4() {
    return ec.Z.enabled || delete eZ[eI.kVF.STREAMER_MODE], e$();
}
function e5() {
    return delete eZ[eI.kVF.DISPATCH_ERROR], e$();
}
function e8() {
    return delete eZ[eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], e$();
}
function e6() {
    return e$();
}
function e7() {
    return e$();
}
function e9(e) {
    return e.user.id === K.default.getId() && e$();
}
function te() {
    (eZ = {}), (eF = {}), (eV = null);
}
class tt extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([eu.ZP, ei.Z, J.Z, es.Z, j.Z, eh.Z, z.default, X.Z, H.Z, T.Z, U.Z, W.Z, O.ZP, Y.Z], e$),
            this.waitFor(
                b.Z,
                p.Z,
                W.Z,
                K.default,
                z.default,
                q.Z,
                Q.Z,
                w.Z,
                X.Z,
                m.Z,
                J.Z,
                eO.Z,
                ev.Z,
                eS.Z,
                eg.Z,
                y.Z,
                v.Z,
                A.Z,
                T.Z,
                $.ZP,
                ee.Z,
                N.Z,
                P.Z,
                et.Z,
                en.Z,
                e_.Z,
                er.Z,
                ei.Z,
                j.Z,
                k.Z,
                U.Z,
                ea.Z,
                O.ZP,
                eo.Z,
                es.Z,
                F.Z,
                el.Z,
                ec.Z,
                D.Z,
                em.Z,
                eu.ZP,
                eE.Z,
                eh.Z,
                ed.Z,
                H.Z,
                ef.default,
                ep.Z,
                Y.Z,
            );
    }
    hasNotice() {
        return null != eV && null != eV.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? eV : null;
    }
    isNoticeDismissed(e) {
        return eq(e);
    }
}
eR(tt, "displayName", "NoticeStore");
let tn = new tt(u.Z, {
    CURRENT_USER_UPDATE: e$,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: e$,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e$,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e$,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: e$,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e$,
    GUILD_CREATE: e$,
    GUILD_DELETE: e$,
    AUDIO_INPUT_DETECTED: e$,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: e$,
    CERTIFIED_DEVICES_SET: e$,
    AUDIO_SET_INPUT_DEVICE: e$,
    AUDIO_SET_OUTPUT_DEVICE: e$,
    MEDIA_ENGINE_DEVICES: e$,
    RTC_CONNECTION_STATE: e$,
    RPC_APP_AUTHENTICATED: e$,
    RPC_APP_DISCONNECTED: e$,
    USER_CONNECTIONS_UPDATE: e$,
    WINDOW_FOCUS: e$,
    INSTANT_INVITE_CREATE: e$,
    INSTANT_INVITE_REVOKE_SUCCESS: e$,
    SPOTIFY_PLAYER_PAUSE: e$,
    RUNNING_GAMES_CHANGE: e$,
    EXPERIMENTS_FETCH_SUCCESS: e$,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e$,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e$,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e$,
    DEVELOPER_TEST_MODE_RESET: e$,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: e$,
    DISPATCH_APPLICATION_INSTALL: e$,
    IMPERSONATE_STOP: e$,
    IMPERSONATE_UPDATE: e$,
    GUILD_MEMBER_ADD: e9,
    GUILD_MEMBER_UPDATE: e$,
    SURVEY_FETCHED: e$,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e$,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e$,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e$,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e$,
    VOICE_STATE_UPDATES: e0,
    STREAMER_MODE_UPDATE: e4,
    RUNNING_STREAMER_TOOLS_CHANGE: e4,
    DISPATCH_APPLICATION_ERROR: e5,
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: e8,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e6,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e7,
    NOTICE_SHOW: e1,
    NOTICE_DISMISS: e3,
    NOTICE_DISABLE: e2,
    LOGOUT: te,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e$,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e$,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: e$,
    PROXY_BLOCKED_REQUEST: e$,
    REPORT_AV_ERROR: e$,
});
