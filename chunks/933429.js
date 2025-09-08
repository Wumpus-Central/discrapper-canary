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
    _ = n(812206),
    p = n(223892),
    h = n(674525),
    m = n(266454),
    g = n(605236),
    E = n(458725),
    b = n(915525),
    y = n(353926),
    O = n(594190),
    v = n(38618),
    I = n(569545),
    T = n(528011),
    S = n(487419),
    A = n(715903),
    C = n(223606),
    N = n(160404),
    R = n(41776),
    P = n(332473),
    w = n(30684),
    D = n(616106),
    x = n(107756),
    L = n(518638),
    j = n(1844),
    M = n(621615),
    k = n(417626),
    U = n(569984),
    G = n(338247),
    B = n(523255),
    Z = n(867003),
    F = n(768419),
    V = n(590415),
    H = n(865066),
    Y = n(581883),
    W = n(199902),
    K = n(314897),
    z = n(881998),
    q = n(463395),
    X = n(592125),
    Q = n(553795),
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
    e_ = n(979651),
    ep = n(853872),
    eh = n(78839),
    em = n(431),
    eg = n(580130),
    eE = n(695103),
    eb = n(358085),
    ey = n(74538),
    eO = n(922156),
    ev = n(436181),
    eI = n(941128),
    eT = n(981631),
    eS = n(188785),
    eA = n(474936),
    eC = n(46140),
    eN = n(231338),
    eR = n(65154);
function eP(e, t, n) {
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
                eP(e, t, n[t]);
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
        [eT.kVF.DOWNLOAD_NAG]: l.z.NAGBAR_NOTICE_DOWNLOAD,
        [eT.kVF.CONNECT_SPOTIFY]: l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eT.kVF.CONNECT_PLAYSTATION]: l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eT.kVF.MFA_SMS_BACKUP]: l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eT.kVF.PREMIUM_REACTIVATE]: l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eT.kVF.BOUNCED_EMAIL_DETECTED]: l.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eT.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eT.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eT.kVF.POMELO_ELIGIBLE]: l.z.NAGBAR_NOTICE_POMELO,
        [eT.kVF.CHECKOUT_RECOVERY_NAGBAR]: l.z.CHECKOUT_RECOVERY_NAGBAR,
        [eT.kVF.REPORT_TO_MOD_SURVEY]: l.z.REPORT_TO_MOD_SURVEY_NOTICE,
    },
    ej = { [eT.kVF.GIFTING_PROMOTION_REMINDER]: l.z.GIFTING_PROMOTION_REMINDER },
    eM = {
        [eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    ek = { [eT.kVF.OUTBOUND_PROMOTION]: l.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eU = {
        [eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eT.kVF.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eT.kVF.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eT.kVF.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eT.kVF.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eT.kVF.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eT.kVF.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eT.kVF.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
    },
    eG = new Set([
        eT.kVF.NO_INPUT_DETECTED,
        eT.kVF.NO_INPUT_DEVICES_DETECTED,
        eT.kVF.STREAMER_MODE,
        eT.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eT.kVF.SPOTIFY_AUTO_PAUSED,
        eT.kVF.DISPATCH_ERROR,
        eT.kVF.DISPATCH_ERROR,
        eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eT.kVF.BLOCKED_BY_PROXY,
    ]),
    eB = {},
    eZ = {},
    eF = Object.freeze({
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
    null == r || t || c.K.set(r, !0), eG.has(e) && (eB[e] = !0), null != n && null != r ? eW(e, n) : eK(e);
}
function eq(e) {
    if (null == e || null != eM[e]) return !1;
    let t = ej[e];
    if (null != t) return (0, g.H4)(t).isDismissed;
    let n = eL[e];
    if (null != n) return (0, m.zu)(n);
    let r = eU[e];
    if (null != r) {
        let t = eY(e);
        if (null != t) return null == t ? void 0 : t.isAfter(a()());
    }
    let i = eB[e];
    return !!i || (null != r && "" !== r ? c.K.get(r) : !!eG.has(e) && i);
}
let eX = [
        eT.kVF.QUARANTINED,
        eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eT.kVF.VIEWING_ROLES,
        eT.kVF.INVITED_TO_SPEAK,
        eT.kVF.LURKING_GUILD,
        eT.kVF.VOICE_DISABLED,
        eT.kVF.NO_INPUT_DEVICES_DETECTED,
        eT.kVF.NO_INPUT_DETECTED,
        eT.kVF.HARDWARE_MUTE,
        eT.kVF.H264_DISABLED,
        eT.kVF.DISPATCH_ERROR,
        eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eT.kVF.SPOTIFY_AUTO_PAUSED,
        eT.kVF.WIN32_DEPRECATED_MESSAGE,
        eT.kVF.WIN7_8_DEPRECATED_MESSAGE,
        eT.kVF.MACOS_19_DEPRECATED_MESSAGE,
        eT.kVF.BLOCKED_BY_PROXY,
        eT.kVF.VOICE_CONNECTED_LAST_SESSION,
        eT.kVF.SYSTEM_SERVICE_WARNING,
        eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
        eT.kVF.GUILD_RAID_NOTIFICATION,
        eT.kVF.GIFTING_PROMOTION_REMINDER,
        eT.kVF.QUESTS_PROGRESS_INTERRUPTION,
        eT.kVF.UNCLAIMED_ACCOUNT,
        eT.kVF.POMELO_ELIGIBLE,
        eT.kVF.PENDING_MEMBER,
        eT.kVF.CHECKOUT_RECOVERY_NAGBAR,
        eT.kVF.OUTBOUND_PROMOTION,
        eT.kVF.CORRUPT_INSTALLATION,
        eT.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
        eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
        eT.kVF.STREAMER_MODE,
        eT.kVF.SCHEDULED_MAINTENANCE,
        eT.kVF.BOUNCED_EMAIL_DETECTED,
        eT.kVF.UNVERIFIED_ACCOUNT,
        eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING,
        eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING,
        eT.kVF.PREMIUM_TIER_0_TRIAL_ENDING,
        eT.kVF.PREMIUM_UNCANCEL,
        eT.kVF.PREMIUM_MISSING_PAYMENT,
        eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
        eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
        eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
        eT.kVF.PREMIUM_REACTIVATE,
        eT.kVF.ACTIVATE_SERVER_SUBSCRIPTION,
        eT.kVF.MFA_SMS_BACKUP,
        eT.kVF.APPLICATION_TEST_MODE,
        eT.kVF.DOWNLOAD_NAG,
        eT.kVF.CONNECT_SPOTIFY,
        eT.kVF.CONNECT_PLAYSTATION,
        eT.kVF.SURVEY,
        eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
        eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
        eT.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
        eT.kVF.REPORT_TO_MOD_SURVEY,
    ],
    eQ = [
        eT.kVF.QUARANTINED,
        eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eT.kVF.VIEWING_ROLES,
        eT.kVF.INVITED_TO_SPEAK,
        eT.kVF.LURKING_GUILD,
        eT.kVF.VOICE_DISABLED,
        eT.kVF.NO_INPUT_DETECTED,
        eT.kVF.HARDWARE_MUTE,
        eT.kVF.H264_DISABLED,
        eT.kVF.DISPATCH_ERROR,
        eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eT.kVF.SPOTIFY_AUTO_PAUSED,
        eT.kVF.BLOCKED_BY_PROXY,
        eT.kVF.VOICE_CONNECTED_LAST_SESSION,
        eT.kVF.PENDING_MEMBER,
        eT.kVF.STREAMER_MODE,
        eT.kVF.SCHEDULED_MAINTENANCE,
    ],
    eJ = {
        [eT.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = x.Ys.getCurrentConfig({ location: "NoticeStore" }, { autoTrackExposure: !1 }),
                    { enabled: t } = x.ZP.getConfig({ location: "NoticeStore" });
                return (
                    e &&
                    t &&
                    (0, g.H4)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed &&
                    !eq(eT.kVF.GIFTING_PROMOTION_REMINDER)
                );
            },
        },
        [eT.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, T.g)().show && !eq(eT.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: a()().add(3, "hours").toDate() }),
        },
        [eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = $.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, A.EY)(r);
            },
        },
        [eT.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eT.xW$.QUARANTINED);
            },
        },
        [eT.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return N.Z.isViewingRoles(t);
            },
        },
        [eT.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, V.gf)(t) === V.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            },
        },
        [eT.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && R.Z.isLurking(t);
            },
        },
        [eT.kVF.VOICE_DISABLED]: { predicate: () => null != ea.Z.getRemoteDisconnectVoiceChannelId() },
        [eT.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.Z.getLastSessionVoiceChannelId() },
        [eT.kVF.NO_INPUT_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_AUDIO_INPUT_DETECTED) },
        [eT.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_INPUT_DEVICES) },
        [eT.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = X.Z.getChannel(t);
                return !et.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            },
        },
        [eT.kVF.HARDWARE_MUTE]: {
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
        [eT.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eO.Z.getLastError(),
            metadata: () => ({ error: eO.Z.getLastError() }),
        },
        [eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != ev.Z.getLastProgress(),
            metadata: () => ev.Z.getLastProgress(),
        },
        [eT.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => F.Z.wasAutoPaused() },
        [eT.kVF.BLOCKED_BY_PROXY]: {
            predicate: () =>
                !eq(eT.kVF.BLOCKED_BY_PROXY) &&
                k.Z.blockedByProxy &&
                M.Z.getCurrentConfig({ location: "notice_store" }).eligibleForNotice,
        },
        [eT.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            },
        },
        [eT.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: a } = e;
                return (
                    null !=
                        (r =
                            null != i &&
                            null != a &&
                            !(null == (t = ee.Z.getGuild(i)) ? void 0 : t.features.has(eT.oNc.GUILD_ONBOARDING)) &&
                            (null == (n = $.ZP.getMember(i, a.id)) ? void 0 : n.isPending)) && r
                );
            },
        },
        [eT.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, L.tq)() },
        [eT.kVF.CORRUPT_INSTALLATION]: {
            predicate: () => eb.isPlatformEmbedded && (!s.Z.supported() || eI.Z.isCorruptInstallation()),
        },
        [eT.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return (
                    null != t &&
                    e_.Z.hasVideo(t) &&
                    !et.Z.supports(eR.AN.VIDEO) &&
                    !eq(eT.kVF.VIDEO_UNSUPPORTED_BROWSER)
                );
            },
        },
        [eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return ey.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () =>
                !eq(eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
                J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eT.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [eT.kVF.DOWNLOAD_NAG]: { predicate: () => !eb.isPlatformEmbedded && !eq(eT.kVF.DOWNLOAD_NAG) },
        [eT.kVF.SCHEDULED_MAINTENANCE]: {
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
        [eT.kVF.SURVEY]: {
            predicate: () => null != eu.Z.getCurrentSurvey(),
            metadata: () => eu.Z.getCurrentSurvey(),
        },
        [eT.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            },
        },
        [eT.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            },
        },
        [eT.kVF.CONNECT_SPOTIFY]: {
            predicate: () =>
                !F.Z.hasConnectedAccount() &&
                O.ZP.isObservedAppRunning(f.Z.get(eT.ABu.SPOTIFY).name) &&
                !eq(eT.kVF.CONNECT_SPOTIFY),
        },
        [eT.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () =>
                (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === "ia32" &&
                (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32",
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eT.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32")
                    try {
                        return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eT.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "darwin")
                    try {
                        return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eT.kVF.CONNECT_PLAYSTATION]: {
            predicate: () =>
                Q.Z.isSuggestedAccountType(eT.ABu.PLAYSTATION) &&
                null == Q.Z.getAccount(null, eT.ABu.PLAYSTATION) &&
                !eq(eT.kVF.CONNECT_PLAYSTATION),
        },
        [eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: {
            predicate: () =>
                em.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_2]).length > 0 && !eq(eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING),
        },
        [eT.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: {
            predicate: () =>
                em.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_0]).length > 0 && !eq(eT.kVF.PREMIUM_TIER_0_TRIAL_ENDING),
        },
        [eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () =>
                em.Z.getAlmostExpiringDiscountOffers([eA.Si.TIER_2]).length > 0 &&
                !eq(eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING),
        },
        [eT.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i =
                        (null == t ? void 0 : t.canceledAt) != null &&
                        (null == t ? void 0 : t.status) === eT.O0b.CANCELED &&
                        1 >= a()().diff(a()(t.canceledAt), "days"),
                    o = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    s =
                        null != t &&
                        t.status === eT.O0b.CANCELED &&
                        !o &&
                        r <= 7 &&
                        r >= 0 &&
                        (0, ey.M5)(n, eA.p9.TIER_2) &&
                        !i &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eT.kVF.PREMIUM_UNCANCEL) && s;
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
        [eT.kVF.PREMIUM_MISSING_PAYMENT]: {
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
                    s = eg.Z.applicationIdsFetched.has(eA.CL),
                    l = eg.Z.getForApplication(eA.CL),
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
                        t.status !== eT.O0b.PAST_DUE &&
                        !o &&
                        s &&
                        !d &&
                        null === t.paymentSourceId &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eT.kVF.PREMIUM_MISSING_PAYMENT) && f;
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
        [eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    o =
                        null != t &&
                        t.status === eT.O0b.PAST_DUE &&
                        !i &&
                        null != r &&
                        r.invalid &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            },
        },
        [eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    i =
                        null != t &&
                        t.status === eT.O0b.PAST_DUE &&
                        !r &&
                        null === t.paymentSourceId &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            },
        },
        [eT.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (
                    null != t &&
                    t.mfaEnabled &&
                    !t.hasFlag(eT.xW$.MFA_SMS) &&
                    !t.hasFlag(eT.xW$.STAFF) &&
                    !t.hasFlag(eT.xW$.PARTNER) &&
                    !eq(eT.kVF.MFA_SMS_BACKUP)
                );
            },
        },
        [eT.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eE.Z.testModeApplicationId,
            metadata: () => {
                if (null == eE.Z.testModeApplicationId) return {};
                let e = eE.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e,
                };
            },
        },
        [eT.kVF.PREMIUM_REACTIVATE]: {
            predicate: () => !eq(eT.kVF.PREMIUM_REACTIVATE) && D.Z.shouldShowReactivateNotice(),
        },
        [eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    i = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != i && eN.Uk.has(i.type),
                    s =
                        null != t &&
                        t.status === eT.O0b.PAST_DUE &&
                        !r &&
                        o &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eq(eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: a()().toDate(),
                      }
                    : {
                          daysPastDue: t.status === eT.O0b.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
                          dismissUntil: (0, ey.lY)(t).expiresDate.toDate(),
                      };
            },
        },
        [eT.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, P.e)() && !eq(eT.kVF.POMELO_ELIGIBLE) },
        [eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (
                    (null != t &&
                        null != C.Z.getMentionRaidDetected(t) &&
                        (null == n ? void 0 : n.features.has(eT.oNc.COMMUNITY)) &&
                        !eq(eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                    !1
                );
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: a()().add(2, "hours").toDate() };
                if (null != t) {
                    let e = C.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            },
        },
        [eT.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: {
            predicate: () =>
                !eq(eT.kVF.ACTIVATE_SERVER_SUBSCRIPTION) &&
                0 !== h.Z.getEligibleGuildsForNagActivate().length &&
                (0, p.Lm)(),
        },
        [eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return B.SI(t);
            },
        },
        [eT.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = W.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, I.V9)(e),
                    n = U.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eC.Ot;
            },
            metadata: () => {
                let e = W.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, I.V9)(e) : null };
            },
        },
        [eT.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = ep.Z.paymentSources) ? t : {};
                return w.Z.getIsTargeted() && !(0, ey.I5)(n) && 0 !== Object.keys(r).length;
            },
        },
        [eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eq(eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && Z.L0(),
            metadata: () => ({
                dismissUntil: a()().add(180, "days").toDate(),
                sampleRate: 0.1,
            }),
        },
        [eT.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => Z.Rr(),
            metadata: () => ({ sampleRate: 0.1 }),
        },
        [eT.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, G.s)(t, n);
            },
        },
        [eT.kVF.SYSTEM_SERVICE_WARNING]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                if (
                    eq(eT.kVF.SYSTEM_SERVICE_WARNING) ||
                    !(0, H.s2)(O.ZP) ||
                    null == t ||
                    et.Z.getMode() !== eT.pM4.PUSH_TO_TALK
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
    let i = eh.Z.getPremiumSubscription(),
        a = es.Z.getGuildId(),
        o = eo.Z.getVoiceChannelId(),
        s = null != o ? e_.Z.getVoiceStateForChannel(o) : null;
    for (let n of eS.a ? eQ : eX)
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
            eV = ex(ew({}, eF), {
                type: n,
                metadata: o,
            });
            break;
        }
    if (null != eV) {
        (null == (n = eV.metadata) ? void 0 : n.sampleRate) != null &&
            null == eZ[eV.type] &&
            (eZ[eV.type] = Math.random() <= eV.metadata.sampleRate);
        let e = !1 === eZ[eV.type];
        (eq(eV.type) || e) && (eV = null);
    }
}
function e0(e) {
    let { voiceStates: t } = e;
    return (
        ((null == eV ? void 0 : eV.type) === eT.kVF.INVITED_TO_SPEAK ||
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
function e2(e) {
    return null != eV && (null == e.id || e.id === eV.id) && (ez(eV.type, e.isTemporary, e.untilAtLeast), e$());
}
function e3(e) {
    let { noticeType: t } = e;
    return ez(t), e$();
}
function e4() {
    return ec.Z.enabled || delete eB[eT.kVF.STREAMER_MODE], e$();
}
function e8() {
    return delete eB[eT.kVF.DISPATCH_ERROR], e$();
}
function e6() {
    return delete eB[eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], e$();
}
function e5() {
    return e$();
}
function e7() {
    return e$();
}
function e9(e) {
    return e.user.id === K.default.getId() && e$();
}
function te() {
    (eB = {}), (eZ = {}), (eV = null);
}
class tt extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([eu.Z, ei.Z, J.Z, es.Z, j.Z, em.Z, z.Z, Q.Z, Y.Z, S.Z, U.Z, W.Z, O.ZP], e$),
            this.waitFor(
                ef.default,
                el.Z,
                ee.Z,
                $.ZP,
                ea.Z,
                et.Z,
                ec.Z,
                y.Z,
                es.Z,
                ed.Z,
                F.Z,
                O.ZP,
                ei.Z,
                eO.Z,
                ev.Z,
                eE.Z,
                en.Z,
                eh.Z,
                eI.Z,
                J.Z,
                ep.Z,
                er.Z,
                j.Z,
                eg.Z,
                em.Z,
                Q.Z,
                R.Z,
                h.Z,
                k.Z,
                U.Z,
                W.Z,
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
eP(tt, "displayName", "NoticeStore");
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
    DISPATCH_APPLICATION_ERROR: e8,
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: e6,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e5,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e7,
    NOTICE_SHOW: e1,
    NOTICE_DISMISS: e2,
    NOTICE_DISABLE: e3,
    LOGOUT: te,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e$,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e$,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: e$,
    PROXY_BLOCKED_REQUEST: e$,
    REPORT_AV_ERROR: e$,
});
