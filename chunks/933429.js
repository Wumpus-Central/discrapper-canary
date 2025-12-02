n.d(t, {
    ZP: () => tr,
    m9: () => ej,
    nA: () => eU,
    o: () => eM,
    zD: () => ek,
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
    A = n(715903),
    C = n(223606),
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
    G = n(338247),
    Z = n(523255),
    B = n(867003),
    F = n(768419),
    V = n(590415),
    H = n(865066),
    Y = n(581883),
    W = n(15980),
    K = n(199902),
    z = n(314897),
    q = n(881998),
    X = n(463395),
    Q = n(592125),
    J = n(553795),
    $ = n(427123),
    ee = n(271383),
    et = n(430824),
    en = n(131951),
    er = n(292959),
    ei = n(496675),
    ea = n(571474),
    eo = n(19780),
    es = n(944486),
    el = n(914010),
    ec = n(215427),
    eu = n(246946),
    ed = n(558724),
    ef = n(23434),
    ep = n(594174),
    e_ = n(979651),
    em = n(853872),
    eh = n(78839),
    eg = n(431),
    eE = n(580130),
    eb = n(695103),
    ey = n(358085),
    eO = n(74538),
    ev = n(922156),
    eS = n(436181),
    eI = n(941128),
    eT = n(981631),
    eA = n(188785),
    eC = n(474936),
    eN = n(324805),
    eP = n(231338),
    eR = n(65154);
function ew(e, t, n) {
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
function eD(e) {
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
                ew(e, t, n[t]);
            });
    }
    return e;
}
function ex(e, t) {
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
function eL(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ex(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ej = {
        [eT.kVF.DOWNLOAD_NAG]: l.z.NAGBAR_NOTICE_DOWNLOAD,
        [eT.kVF.CONNECT_SPOTIFY]: l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eT.kVF.CONNECT_PLAYSTATION]: l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eT.kVF.PASSKEY_BACKUP]: l.z.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eT.kVF.PREMIUM_REACTIVATE]: l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eT.kVF.BOUNCED_EMAIL_DETECTED]: l.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eT.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eT.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eT.kVF.POMELO_ELIGIBLE]: l.z.NAGBAR_NOTICE_POMELO,
        [eT.kVF.CHECKOUT_RECOVERY_NAGBAR]: l.z.CHECKOUT_RECOVERY_NAGBAR,
        [eT.kVF.REPORT_TO_MOD_EXIT_SURVEY]: l.z.REPORT_TO_MOD_EXIT_SURVEY_NOTICE,
    },
    eM = { [eT.kVF.GIFTING_PROMOTION_REMINDER]: l.z.GIFTING_PROMOTION_REMINDER },
    ek = {
        [eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    eU = { [eT.kVF.OUTBOUND_PROMOTION]: l.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eG = {
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
    eZ = new Set([
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
    eF = {},
    eV = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null,
    }),
    eH = null;
function eY(e) {
    return eG[e] + "-untilAtLeast";
}
function eW(e) {
    let t = c.K.get(eY(e));
    return null != t ? a()(t) : null;
}
function eK(e, t) {
    c.K.set(eY(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
}
function ez(e) {
    c.K.remove(eY(e));
}
function eq(e, t, n) {
    if (null == e) return;
    let r = eG[e];
    null == r || t || c.K.set(r, !0), eZ.has(e) && (eB[e] = !0), null != n && null != r ? eK(e, n) : ez(e);
}
function eX(e) {
    if (null == e || null != ek[e]) return !1;
    let t = eM[e];
    if (null != t) return (0, g.H4)(t).isDismissed;
    let n = ej[e];
    if (null != n) return (0, h.zu)(n);
    let r = eG[e];
    if (null != r) {
        let t = eW(e);
        if (null != t) return null == t ? void 0 : t.isAfter(a()());
    }
    let i = eB[e];
    return !!i || (null != r && "" !== r ? c.K.get(r) : !!eZ.has(e) && i);
}
let eQ = [
        eT.kVF.QUARANTINED,
        eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eT.kVF.VIEWING_ROLES,
        eT.kVF.INVITED_TO_SPEAK,
        eT.kVF.LURKING_GUILD,
        eT.kVF.VOICE_DISABLED,
        eT.kVF.NO_INPUT_DEVICES_DETECTED,
        eT.kVF.NO_INPUT_DETECTED,
        eT.kVF.HARDWARE_MUTE,
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
        eT.kVF.PASSKEY_BACKUP,
        eT.kVF.APPLICATION_TEST_MODE,
        eT.kVF.DOWNLOAD_NAG,
        eT.kVF.CONNECT_SPOTIFY,
        eT.kVF.CONNECT_PLAYSTATION,
        eT.kVF.SURVEY,
        eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
        eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
        eT.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
        eT.kVF.REPORT_TO_MOD_EXIT_SURVEY,
    ],
    eJ = [
        eT.kVF.QUARANTINED,
        eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eT.kVF.VIEWING_ROLES,
        eT.kVF.INVITED_TO_SPEAK,
        eT.kVF.LURKING_GUILD,
        eT.kVF.VOICE_DISABLED,
        eT.kVF.NO_INPUT_DETECTED,
        eT.kVF.HARDWARE_MUTE,
        eT.kVF.DISPATCH_ERROR,
        eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eT.kVF.SPOTIFY_AUTO_PAUSED,
        eT.kVF.BLOCKED_BY_PROXY,
        eT.kVF.VOICE_CONNECTED_LAST_SESSION,
        eT.kVF.PENDING_MEMBER,
        eT.kVF.STREAMER_MODE,
        eT.kVF.SCHEDULED_MAINTENANCE,
    ],
    e$ = {
        [eT.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = x.Ys.getCurrentConfig({ location: "NoticeStore" }, { autoTrackExposure: !1 }),
                    { enabled: t } = x.YW.getConfig({ location: "NoticeStore" });
                return (
                    e &&
                    t &&
                    (0, g.H4)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed &&
                    !eX(eT.kVF.GIFTING_PROMOTION_REMINDER)
                );
            },
        },
        [eT.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, I.g)().show && !eX(eT.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: a()().add(3, "hours").toDate() }),
        },
        [eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = ee.ZP.getMember(n, t.id);
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
                return null != t && P.Z.isLurking(t);
            },
        },
        [eT.kVF.VOICE_DISABLED]: { predicate: () => null != eo.Z.getRemoteDisconnectVoiceChannelId() },
        [eT.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eo.Z.getLastSessionVoiceChannelId() },
        [eT.kVF.NO_INPUT_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_AUDIO_INPUT_DETECTED) },
        [eT.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_INPUT_DEVICES) },
        [eT.kVF.HARDWARE_MUTE]: {
            predicate: () => eo.Z.isConnected() && en.Z.isHardwareMute() && en.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = en.Z.getInputDeviceId(),
                    t = X.Z.getVendor(e),
                    n = X.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n,
                    };
            },
        },
        [eT.kVF.DISPATCH_ERROR]: {
            predicate: () => null != ev.Z.getLastError(),
            metadata: () => ({ error: ev.Z.getLastError() }),
        },
        [eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eS.Z.getLastProgress(),
            metadata: () => eS.Z.getLastProgress(),
        },
        [eT.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => F.Z.wasAutoPaused() },
        [eT.kVF.BLOCKED_BY_PROXY]: {
            predicate: () =>
                !eX(eT.kVF.BLOCKED_BY_PROXY) &&
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
                            !(null == (t = et.Z.getGuild(i))
                                ? void 0
                                : t.features.has(eT.GuildFeatures.GUILD_ONBOARDING)) &&
                            (null == (n = ee.ZP.getMember(i, a.id)) ? void 0 : n.isPending)) && r
                );
            },
        },
        [eT.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, L.tq)() },
        [eT.kVF.CORRUPT_INSTALLATION]: {
            predicate: () => ey.isPlatformEmbedded && (!s.Z.supported() || eI.Z.isCorruptInstallation()),
        },
        [eT.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return (
                    null != t &&
                    e_.Z.hasVideo(t) &&
                    !en.Z.supports(eR.AN.VIDEO) &&
                    !eX(eT.kVF.VIDEO_UNSUPPORTED_BROWSER)
                );
            },
        },
        [eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eO.ZP.canRedeemPremiumPerks(t) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () =>
                !eX(eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
                $.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eT.kVF.STREAMER_MODE]: { predicate: () => eu.Z.enabled },
        [eT.kVF.DOWNLOAD_NAG]: { predicate: () => !ey.isPlatformEmbedded && !eX(eT.kVF.DOWNLOAD_NAG) },
        [eT.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != ec.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = ec.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until),
                    };
            },
        },
        [eT.kVF.SURVEY]: {
            predicate: () => null != ed.Z.getCurrentSurvey(),
            metadata: () => ed.Z.getCurrentSurvey(),
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
                !eX(eT.kVF.CONNECT_SPOTIFY),
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
                J.Z.isSuggestedAccountType(eT.ABu.PLAYSTATION) &&
                null == J.Z.getAccount(null, eT.ABu.PLAYSTATION) &&
                !eX(eT.kVF.CONNECT_PLAYSTATION),
        },
        [eT.kVF.PASSKEY_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (
                    (null == t ? void 0 : t.mfaEnabled) &&
                    W.Z.hasFetchedCredentials() &&
                    !W.Z.hasCredentials &&
                    !eX(eT.kVF.PASSKEY_BACKUP)
                );
            },
        },
        [eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: {
            predicate: () =>
                eg.Z.getAlmostExpiringTrialOffers([eC.Si.TIER_2]).length > 0 && !eX(eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING),
        },
        [eT.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: {
            predicate: () =>
                eg.Z.getAlmostExpiringTrialOffers([eC.Si.TIER_0]).length > 0 && !eX(eT.kVF.PREMIUM_TIER_0_TRIAL_ENDING),
        },
        [eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () =>
                eg.Z.getAlmostExpiringDiscountOffers([eC.Si.TIER_2]).length > 0 &&
                !eX(eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING),
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
                        (0, eO.M5)(n, eC.PremiumTypes.TIER_2) &&
                        !i &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eX(eT.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i = null != n ? (null == (t = (0, eO.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eO.ZP.getPremiumType(i) : null,
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
                    s = eE.Z.applicationIdsFetched.has(eC.CL),
                    l = eE.Z.getForApplication(eC.CL),
                    c = null != t ? (0, eO.Af)(t) : null,
                    u = null != c ? eO.ZP.getSkuIdForPlan(c.planId) : null,
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
                return !eX(eT.kVF.PREMIUM_MISSING_PAYMENT) && f;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i = null != n ? (null == (t = (0, eO.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eO.ZP.getPremiumType(i) : null,
                    premiumSubscription: n,
                };
            },
        },
        [eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    o =
                        null != t &&
                        t.status === eT.O0b.PAST_DUE &&
                        !i &&
                        null != r &&
                        r.invalid &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eX(eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
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
                return !eX(eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            },
        },
        [eT.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eb.Z.testModeApplicationId,
            metadata: () => {
                if (null == eb.Z.testModeApplicationId) return {};
                let e = eb.Z.testModeApplicationId,
                    t = p.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e,
                };
            },
        },
        [eT.kVF.PREMIUM_REACTIVATE]: {
            predicate: () => !eX(eT.kVF.PREMIUM_REACTIVATE) && D.Z.shouldShowReactivateNotice(),
        },
        [eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    i = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != i && eP.Uk.has(i.type),
                    s =
                        null != t &&
                        t.status === eT.O0b.PAST_DUE &&
                        !r &&
                        o &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eX(eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
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
                          dismissUntil: (0, eO.lY)(t).expiresDate.toDate(),
                      };
            },
        },
        [eT.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, R.e)() && !eX(eT.kVF.POMELO_ELIGIBLE) },
        [eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? et.Z.getGuild(t) : null;
                return (
                    (null != t &&
                        null != C.Z.getMentionRaidDetected(t) &&
                        (null == n ? void 0 : n.features.has(eT.GuildFeatures.COMMUNITY)) &&
                        !eX(eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
                !eX(eT.kVF.ACTIVATE_SERVER_SUBSCRIPTION) &&
                0 !== m.Z.getEligibleGuildsForNagActivate().length &&
                (0, _.Lm)(),
        },
        [eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return Z.SI(t);
            },
        },
        [eT.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = K.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, S.V9)(e),
                    n = U.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eN.Ot;
            },
            metadata: () => {
                let e = K.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, S.V9)(e) : null };
            },
        },
        [eT.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = em.Z.paymentSources) ? t : {};
                return w.Z.getIsTargeted() && !(0, eO.I5)(n) && 0 !== Object.keys(r).length;
            },
        },
        [eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eX(eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && B.L0(),
            metadata: () => ({
                dismissUntil: a()().add(180, "days").toDate(),
                sampleRate: 0.1,
            }),
        },
        [eT.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => B.Rr(),
            metadata: () => ({ sampleRate: 0.1 }),
        },
        [eT.kVF.REPORT_TO_MOD_EXIT_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, G.k)(t, n);
            },
        },
        [eT.kVF.SYSTEM_SERVICE_WARNING]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                if (
                    eX(eT.kVF.SYSTEM_SERVICE_WARNING) ||
                    !(0, H.s2)(O.ZP) ||
                    null == t ||
                    en.Z.getMode() !== eT.pM4.PUSH_TO_TALK
                )
                    return !1;
                let n = O.ZP.getVisibleGame();
                return null != n && !!n.elevated;
            },
        },
    };
function e0() {
    var e, t, n;
    if (!v.Z.isConnected()) return !1;
    eH = null;
    let r = ep.default.getCurrentUser();
    if (null == r) return !1;
    let i = eh.Z.getPremiumSubscription(),
        a = el.Z.getGuildId(),
        o = es.Z.getVoiceChannelId(),
        s = null != o ? e_.Z.getVoiceStateForChannel(o) : null;
    for (let n of eA.a ? eJ : eQ)
        if (
            null != e$[n] &&
            e$[n].predicate({
                selectedGuildId: a,
                voiceChannelId: o,
                voiceState: s,
                currentUser: r,
                premiumSubscription: i,
            })
        ) {
            let o =
                null == (e = (t = e$[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: a,
                      });
            eH = eL(eD({}, eV), {
                type: n,
                metadata: o,
            });
            break;
        }
    if (null != eH) {
        (null == (n = eH.metadata) ? void 0 : n.sampleRate) != null &&
            null == eF[eH.type] &&
            (eF[eH.type] = Math.random() <= eH.metadata.sampleRate);
        let e = !1 === eF[eH.type];
        (eX(eH.type) || e) && (eH = null);
    }
}
function e1(e) {
    let { voiceStates: t } = e;
    return (
        ((null == eH ? void 0 : eH.type) === eT.kVF.INVITED_TO_SPEAK ||
            t.some((e) => {
                let { userId: t } = e;
                return t !== z.default.getId();
            })) &&
        e0()
    );
}
function e3(e) {
    eH = e.notice;
}
function e2(e) {
    return null != eH && (null == e.id || e.id === eH.id) && (eq(eH.type, e.isTemporary, e.untilAtLeast), e0());
}
function e4(e) {
    let { noticeType: t } = e;
    return eq(t), e0();
}
function e5() {
    return eu.Z.enabled || delete eB[eT.kVF.STREAMER_MODE], e0();
}
function e8() {
    return delete eB[eT.kVF.DISPATCH_ERROR], e0();
}
function e6() {
    return delete eB[eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], e0();
}
function e7() {
    return e0();
}
function e9() {
    return e0();
}
function te(e) {
    return e.user.id === z.default.getId() && e0();
}
function tt() {
    (eB = {}), (eF = {}), (eH = null);
}
class tn extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([ed.Z, ea.Z, $.Z, el.Z, j.Z, eg.Z, q.default, J.Z, Y.Z, T.Z, U.Z, K.Z, O.ZP, W.Z], e0),
            this.waitFor(
                b.Z,
                p.Z,
                K.Z,
                z.default,
                q.default,
                X.Z,
                Q.Z,
                w.Z,
                J.Z,
                m.Z,
                $.Z,
                ev.Z,
                eS.Z,
                eI.Z,
                eE.Z,
                y.Z,
                v.Z,
                C.Z,
                T.Z,
                ee.ZP,
                et.Z,
                N.Z,
                P.Z,
                en.Z,
                er.Z,
                em.Z,
                ei.Z,
                ea.Z,
                j.Z,
                k.Z,
                U.Z,
                eo.Z,
                O.ZP,
                es.Z,
                el.Z,
                F.Z,
                ec.Z,
                eu.Z,
                D.Z,
                eh.Z,
                ed.Z,
                eb.Z,
                eg.Z,
                ef.Z,
                Y.Z,
                ep.default,
                e_.Z,
                W.Z,
            );
    }
    hasNotice() {
        return null != eH && null != eH.type;
    }
    getNotice() {
        return null == ef.Z.getAction() ? eH : null;
    }
    isNoticeDismissed(e) {
        return eX(e);
    }
}
ew(tn, "displayName", "NoticeStore");
let tr = new tn(u.Z, {
    CURRENT_USER_UPDATE: e0,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: e0,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e0,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e0,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: e0,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e0,
    GUILD_CREATE: e0,
    GUILD_DELETE: e0,
    AUDIO_INPUT_DETECTED: e0,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: e0,
    CERTIFIED_DEVICES_SET: e0,
    AUDIO_SET_INPUT_DEVICE: e0,
    AUDIO_SET_OUTPUT_DEVICE: e0,
    MEDIA_ENGINE_DEVICES: e0,
    RTC_CONNECTION_STATE: e0,
    RPC_APP_AUTHENTICATED: e0,
    RPC_APP_DISCONNECTED: e0,
    USER_CONNECTIONS_UPDATE: e0,
    WINDOW_FOCUS: e0,
    INSTANT_INVITE_CREATE: e0,
    INSTANT_INVITE_REVOKE_SUCCESS: e0,
    SPOTIFY_PLAYER_PAUSE: e0,
    RUNNING_GAMES_CHANGE: e0,
    EXPERIMENTS_FETCH_SUCCESS: e0,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e0,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e0,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e0,
    DEVELOPER_TEST_MODE_RESET: e0,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: e0,
    DISPATCH_APPLICATION_INSTALL: e0,
    IMPERSONATE_STOP: e0,
    IMPERSONATE_UPDATE: e0,
    GUILD_MEMBER_ADD: te,
    GUILD_MEMBER_UPDATE: e0,
    SURVEY_FETCHED: e0,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e0,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e0,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e0,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e0,
    VOICE_STATE_UPDATES: e1,
    STREAMER_MODE_UPDATE: e5,
    RUNNING_STREAMER_TOOLS_CHANGE: e5,
    DISPATCH_APPLICATION_ERROR: e8,
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: e6,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e7,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e9,
    NOTICE_SHOW: e3,
    NOTICE_DISMISS: e2,
    NOTICE_DISABLE: e4,
    LOGOUT: tt,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e0,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e0,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: e0,
    PROXY_BLOCKED_REQUEST: e0,
    REPORT_AV_ERROR: e0,
});
