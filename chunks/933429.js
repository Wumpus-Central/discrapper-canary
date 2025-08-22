n.d(t, {
    ZP: () => ti,
    m9: () => eM,
    nA: () => eG,
    o: () => ek,
    zD: () => eU,
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
    x = n(475580),
    L = n(96320),
    j = n(107756),
    M = n(518638),
    k = n(1844),
    U = n(621615),
    G = n(417626),
    B = n(569984),
    Z = n(338247),
    V = n(523255),
    F = n(867003),
    H = n(768419),
    Y = n(590415),
    W = n(865066),
    K = n(581883),
    z = n(199902),
    q = n(314897),
    X = n(881998),
    Q = n(463395),
    J = n(592125),
    $ = n(553795),
    ee = n(427123),
    et = n(271383),
    en = n(430824),
    er = n(131951),
    ei = n(292959),
    ea = n(496675),
    eo = n(571474),
    es = n(19780),
    el = n(944486),
    ec = n(914010),
    eu = n(215427),
    ed = n(246946),
    ef = n(558724),
    e_ = n(23434),
    ep = n(594174),
    eh = n(979651),
    em = n(853872),
    eg = n(78839),
    eE = n(431),
    eb = n(580130),
    ey = n(695103),
    eO = n(358085),
    ev = n(74538),
    eI = n(922156),
    eT = n(436181),
    eS = n(941128),
    eA = n(981631),
    eC = n(188785),
    eN = n(474936),
    eR = n(46140),
    eP = n(231338),
    ew = n(65154);
function eD(e, t, n) {
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
function ex(e) {
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
                eD(e, t, n[t]);
            });
    }
    return e;
}
function eL(e, t) {
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
function ej(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eL(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eM = {
        [eA.kVF.DOWNLOAD_NAG]: l.z.NAGBAR_NOTICE_DOWNLOAD,
        [eA.kVF.CONNECT_SPOTIFY]: l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eA.kVF.CONNECT_PLAYSTATION]: l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eA.kVF.MFA_SMS_BACKUP]: l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eA.kVF.PREMIUM_REACTIVATE]: l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eA.kVF.BOUNCED_EMAIL_DETECTED]: l.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eA.kVF.POMELO_ELIGIBLE]: l.z.NAGBAR_NOTICE_POMELO,
        [eA.kVF.CHECKOUT_RECOVERY_NAGBAR]: l.z.CHECKOUT_RECOVERY_NAGBAR,
        [eA.kVF.REPORT_TO_MOD_SURVEY]: l.z.REPORT_TO_MOD_SURVEY_NOTICE,
    },
    ek = { [eA.kVF.GIFTING_PROMOTION_REMINDER]: l.z.GIFTING_PROMOTION_REMINDER },
    eU = {
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eA.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.z.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    eG = { [eA.kVF.OUTBOUND_PROMOTION]: l.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eB = {
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eA.kVF.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eA.kVF.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eA.kVF.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eA.kVF.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eA.kVF.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eA.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eA.kVF.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eA.kVF.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
    },
    eZ = new Set([
        eA.kVF.NO_INPUT_DETECTED,
        eA.kVF.NO_INPUT_DEVICES_DETECTED,
        eA.kVF.STREAMER_MODE,
        eA.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eA.kVF.SPOTIFY_AUTO_PAUSED,
        eA.kVF.DISPATCH_ERROR,
        eA.kVF.DISPATCH_ERROR,
        eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eA.kVF.BLOCKED_BY_PROXY,
    ]),
    eV = {},
    eF = {},
    eH = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null,
    }),
    eY = null;
function eW(e) {
    return eB[e] + "-untilAtLeast";
}
function eK(e) {
    let t = c.K.get(eW(e));
    return null != t ? a()(t) : null;
}
function ez(e, t) {
    c.K.set(eW(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
}
function eq(e) {
    c.K.remove(eW(e));
}
function eX(e, t, n) {
    if (null == e) return;
    let r = eB[e];
    null == r || t || c.K.set(r, !0), eZ.has(e) && (eV[e] = !0), null != n && null != r ? ez(e, n) : eq(e);
}
function eQ(e) {
    if (null == e) return !1;
    let { useRecurringNotices: t } = L.b.getCurrentConfig({ location: "NoticeStore.isNoticeDismissed" });
    if (t && null != eU[e]) return !1;
    let n = ek[e];
    if (null != n) return (0, g.H4)(n).isDismissed;
    let r = eM[e];
    if (null != r) return (0, m.zu)(r);
    let i = eB[e];
    if (null != i) {
        let t = eK(e);
        if (null != t) return null == t ? void 0 : t.isAfter(a()());
    }
    let o = eV[e];
    return !!o || (null != i && "" !== i ? c.K.get(i) : !!eZ.has(e) && o);
}
let eJ = [
        eA.kVF.QUARANTINED,
        eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eA.kVF.VIEWING_ROLES,
        eA.kVF.INVITED_TO_SPEAK,
        eA.kVF.LURKING_GUILD,
        eA.kVF.VOICE_DISABLED,
        eA.kVF.NO_INPUT_DEVICES_DETECTED,
        eA.kVF.NO_INPUT_DETECTED,
        eA.kVF.HARDWARE_MUTE,
        eA.kVF.H264_DISABLED,
        eA.kVF.DISPATCH_ERROR,
        eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eA.kVF.SPOTIFY_AUTO_PAUSED,
        eA.kVF.WIN32_DEPRECATED_MESSAGE,
        eA.kVF.WIN7_8_DEPRECATED_MESSAGE,
        eA.kVF.MACOS_19_DEPRECATED_MESSAGE,
        eA.kVF.BLOCKED_BY_PROXY,
        eA.kVF.VOICE_CONNECTED_LAST_SESSION,
        eA.kVF.SYSTEM_SERVICE_WARNING,
        eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
        eA.kVF.GUILD_RAID_NOTIFICATION,
        eA.kVF.GIFTING_PROMOTION_REMINDER,
        eA.kVF.QUESTS_PROGRESS_INTERRUPTION,
        eA.kVF.UNCLAIMED_ACCOUNT,
        eA.kVF.POMELO_ELIGIBLE,
        eA.kVF.PENDING_MEMBER,
        eA.kVF.CHECKOUT_RECOVERY_NAGBAR,
        eA.kVF.OUTBOUND_PROMOTION,
        eA.kVF.CORRUPT_INSTALLATION,
        eA.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
        eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
        eA.kVF.STREAMER_MODE,
        eA.kVF.SCHEDULED_MAINTENANCE,
        eA.kVF.BOUNCED_EMAIL_DETECTED,
        eA.kVF.UNVERIFIED_ACCOUNT,
        eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING,
        eA.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING,
        eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING,
        eA.kVF.PREMIUM_UNCANCEL,
        eA.kVF.PREMIUM_MISSING_PAYMENT,
        eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
        eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
        eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
        eA.kVF.PREMIUM_REACTIVATE,
        eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION,
        eA.kVF.MFA_SMS_BACKUP,
        eA.kVF.APPLICATION_TEST_MODE,
        eA.kVF.DOWNLOAD_NAG,
        eA.kVF.CONNECT_SPOTIFY,
        eA.kVF.CONNECT_PLAYSTATION,
        eA.kVF.SURVEY,
        eA.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
        eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
        eA.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
        eA.kVF.REPORT_TO_MOD_SURVEY,
    ],
    e$ = [
        eA.kVF.QUARANTINED,
        eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eA.kVF.VIEWING_ROLES,
        eA.kVF.INVITED_TO_SPEAK,
        eA.kVF.LURKING_GUILD,
        eA.kVF.VOICE_DISABLED,
        eA.kVF.NO_INPUT_DETECTED,
        eA.kVF.HARDWARE_MUTE,
        eA.kVF.H264_DISABLED,
        eA.kVF.DISPATCH_ERROR,
        eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eA.kVF.SPOTIFY_AUTO_PAUSED,
        eA.kVF.BLOCKED_BY_PROXY,
        eA.kVF.VOICE_CONNECTED_LAST_SESSION,
        eA.kVF.PENDING_MEMBER,
        eA.kVF.STREAMER_MODE,
        eA.kVF.SCHEDULED_MAINTENANCE,
    ],
    e0 = {
        [eA.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = j.Ys.getCurrentConfig({ location: "NoticeStore" }, { autoTrackExposure: !1 }),
                    { enabled: t } = j.ZP.getConfig({ location: "NoticeStore" });
                return (
                    e &&
                    t &&
                    (0, g.H4)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed &&
                    !eQ(eA.kVF.GIFTING_PROMOTION_REMINDER)
                );
            },
        },
        [eA.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, T.g)().show && !eQ(eA.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: a()().add(3, "hours").toDate() }),
        },
        [eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = et.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, A.EY)(r);
            },
        },
        [eA.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eA.xW$.QUARANTINED);
            },
        },
        [eA.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return N.Z.isViewingRoles(t);
            },
        },
        [eA.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, Y.gf)(t) === Y.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            },
        },
        [eA.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && R.Z.isLurking(t);
            },
        },
        [eA.kVF.VOICE_DISABLED]: { predicate: () => null != es.Z.getRemoteDisconnectVoiceChannelId() },
        [eA.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != es.Z.getLastSessionVoiceChannelId() },
        [eA.kVF.NO_INPUT_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_AUDIO_INPUT_DETECTED) },
        [eA.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => b.Z.hasActiveErrorOfType(E.u.NO_INPUT_DEVICES) },
        [eA.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = J.Z.getChannel(t);
                return !er.Z.getOpenH264() && null != t && eh.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            },
        },
        [eA.kVF.HARDWARE_MUTE]: {
            predicate: () => es.Z.isConnected() && er.Z.isHardwareMute() && er.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = er.Z.getInputDeviceId(),
                    t = Q.Z.getVendor(e),
                    n = Q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n,
                    };
            },
        },
        [eA.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eI.Z.getLastError(),
            metadata: () => ({ error: eI.Z.getLastError() }),
        },
        [eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eT.Z.getLastProgress(),
            metadata: () => eT.Z.getLastProgress(),
        },
        [eA.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => H.Z.wasAutoPaused() },
        [eA.kVF.BLOCKED_BY_PROXY]: {
            predicate: () =>
                !eQ(eA.kVF.BLOCKED_BY_PROXY) &&
                G.Z.blockedByProxy &&
                U.Z.getCurrentConfig({ location: "notice_store" }).eligibleForNotice,
        },
        [eA.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            },
        },
        [eA.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: a } = e;
                return (
                    null !=
                        (r =
                            null != i &&
                            null != a &&
                            !(null == (t = en.Z.getGuild(i)) ? void 0 : t.features.has(eA.oNc.GUILD_ONBOARDING)) &&
                            (null == (n = et.ZP.getMember(i, a.id)) ? void 0 : n.isPending)) && r
                );
            },
        },
        [eA.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, M.tq)() },
        [eA.kVF.CORRUPT_INSTALLATION]: {
            predicate: () => eO.isPlatformEmbedded && (!s.Z.supported() || eS.Z.isCorruptInstallation()),
        },
        [eA.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return (
                    null != t &&
                    eh.Z.hasVideo(t) &&
                    !er.Z.supports(ew.AN.VIDEO) &&
                    !eQ(eA.kVF.VIDEO_UNSUPPORTED_BROWSER)
                );
            },
        },
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return ev.ZP.canRedeemPremiumPerks(t) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () =>
                !eQ(eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
                ee.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0],
        },
        [eA.kVF.STREAMER_MODE]: { predicate: () => ed.Z.enabled },
        [eA.kVF.DOWNLOAD_NAG]: { predicate: () => !eO.isPlatformEmbedded && !eQ(eA.kVF.DOWNLOAD_NAG) },
        [eA.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != eu.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = eu.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until),
                    };
            },
        },
        [eA.kVF.SURVEY]: {
            predicate: () => null != ef.Z.getCurrentSurvey(),
            metadata: () => ef.Z.getCurrentSurvey(),
        },
        [eA.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            },
        },
        [eA.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            },
        },
        [eA.kVF.CONNECT_SPOTIFY]: {
            predicate: () =>
                !H.Z.hasConnectedAccount() &&
                O.ZP.isObservedAppRunning(f.Z.get(eA.ABu.SPOTIFY).name) &&
                !eQ(eA.kVF.CONNECT_SPOTIFY),
        },
        [eA.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () =>
                (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === "ia32" &&
                (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32",
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eA.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32")
                    try {
                        return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eA.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "darwin")
                    try {
                        return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
        },
        [eA.kVF.CONNECT_PLAYSTATION]: {
            predicate: () =>
                $.Z.isSuggestedAccountType(eA.ABu.PLAYSTATION) &&
                null == $.Z.getAccount(null, eA.ABu.PLAYSTATION) &&
                !eQ(eA.kVF.CONNECT_PLAYSTATION),
        },
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: {
            predicate: () =>
                eE.Z.getAlmostExpiringTrialOffers([eN.Si.TIER_2]).length > 0 && !eQ(eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING),
        },
        [eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: {
            predicate: () =>
                eE.Z.getAlmostExpiringTrialOffers([eN.Si.TIER_0]).length > 0 && !eQ(eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING),
        },
        [eA.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () => {
                let { enabled: e } = x.D.getCurrentConfig({ location: "NoticeStore.NoticeDefinition.predicate" });
                return (
                    !!e &&
                    eE.Z.getAlmostExpiringDiscountOffers([eN.Si.TIER_2]).length > 0 &&
                    !eQ(eA.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)
                );
            },
        },
        [eA.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i =
                        (null == t ? void 0 : t.canceledAt) != null &&
                        (null == t ? void 0 : t.status) === eA.O0b.CANCELED &&
                        1 >= a()().diff(a()(t.canceledAt), "days"),
                    o = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    s =
                        null != t &&
                        t.status === eA.O0b.CANCELED &&
                        !o &&
                        r <= 7 &&
                        r >= 0 &&
                        (0, ev.M5)(n, eN.p9.TIER_2) &&
                        !i &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eQ(eA.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i = null != n ? (null == (t = (0, ev.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? ev.ZP.getPremiumType(i) : null,
                    premiumSubscription: n,
                };
            },
        },
        [eA.kVF.PREMIUM_MISSING_PAYMENT]: {
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
                    s = eb.Z.applicationIdsFetched.has(eN.CL),
                    l = eb.Z.getForApplication(eN.CL),
                    c = null != t ? (0, ev.Af)(t) : null,
                    u = null != c ? ev.ZP.getSkuIdForPlan(c.planId) : null,
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
                        t.status !== eA.O0b.PAST_DUE &&
                        !o &&
                        s &&
                        !d &&
                        null === t.paymentSourceId &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eQ(eA.kVF.PREMIUM_MISSING_PAYMENT) && f;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                    i = null != n ? (null == (t = (0, ev.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? ev.ZP.getPremiumType(i) : null,
                    premiumSubscription: n,
                };
            },
        },
        [eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    o =
                        null != t &&
                        t.status === eA.O0b.PAST_DUE &&
                        !i &&
                        null != r &&
                        r.invalid &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eQ(eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            },
        },
        [eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    i =
                        null != t &&
                        t.status === eA.O0b.PAST_DUE &&
                        !r &&
                        null === t.paymentSourceId &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eQ(eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            },
        },
        [eA.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (
                    null != t &&
                    t.mfaEnabled &&
                    !t.hasFlag(eA.xW$.MFA_SMS) &&
                    !t.hasFlag(eA.xW$.STAFF) &&
                    !t.hasFlag(eA.xW$.PARTNER) &&
                    !eQ(eA.kVF.MFA_SMS_BACKUP)
                );
            },
        },
        [eA.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ey.Z.testModeApplicationId,
            metadata: () => {
                if (null == ey.Z.testModeApplicationId) return {};
                let e = ey.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e,
                };
            },
        },
        [eA.kVF.PREMIUM_REACTIVATE]: {
            predicate: () => !eQ(eA.kVF.PREMIUM_REACTIVATE) && D.Z.shouldShowReactivateNotice(),
        },
        [eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                    i = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != i && eP.Uk.has(i.type),
                    s =
                        null != t &&
                        t.status === eA.O0b.PAST_DUE &&
                        !r &&
                        o &&
                        !n.hasFreePremium() &&
                        !t.isPurchasedExternally;
                return !eQ(eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: a()().toDate(),
                      }
                    : {
                          daysPastDue: t.status === eA.O0b.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
                          dismissUntil: (0, ev.lY)(t).expiresDate.toDate(),
                      };
            },
        },
        [eA.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, P.e)() && !eQ(eA.kVF.POMELO_ELIGIBLE) },
        [eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? en.Z.getGuild(t) : null;
                return (
                    (null != t &&
                        null != C.Z.getMentionRaidDetected(t) &&
                        (null == n ? void 0 : n.features.has(eA.oNc.COMMUNITY)) &&
                        !eQ(eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
        [eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: {
            predicate: () =>
                !eQ(eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION) &&
                0 !== h.Z.getEligibleGuildsForNagActivate().length &&
                (0, p.Lm)(),
        },
        [eA.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return V.SI(t);
            },
        },
        [eA.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = z.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, I.V9)(e),
                    n = B.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eR.Ot;
            },
            metadata: () => {
                let e = z.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, I.V9)(e) : null };
            },
        },
        [eA.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = em.Z.paymentSources) ? t : {};
                return w.Z.getIsTargeted() && !(0, ev.I5)(n) && 0 !== Object.keys(r).length;
            },
        },
        [eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eQ(eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && F.L0(),
            metadata: () => ({
                dismissUntil: a()().add(180, "days").toDate(),
                sampleRate: 0.1,
            }),
        },
        [eA.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => F.Rr(),
            metadata: () => ({ sampleRate: 0.1 }),
        },
        [eA.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, Z.s)(t, n);
            },
        },
        [eA.kVF.SYSTEM_SERVICE_WARNING]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                if (
                    eQ(eA.kVF.SYSTEM_SERVICE_WARNING) ||
                    !(0, W.s2)(O.ZP) ||
                    null == t ||
                    er.Z.getMode() !== eA.pM4.PUSH_TO_TALK
                )
                    return !1;
                let n = O.ZP.getVisibleGame();
                return null != n && !!n.elevated;
            },
        },
    };
function e1() {
    var e, t, n;
    if (!v.Z.isConnected()) return !1;
    eY = null;
    let r = ep.default.getCurrentUser();
    if (null == r) return !1;
    let i = eg.Z.getPremiumSubscription(),
        a = ec.Z.getGuildId(),
        o = el.Z.getVoiceChannelId(),
        s = null != o ? eh.Z.getVoiceStateForChannel(o) : null;
    for (let n of eC.a ? e$ : eJ)
        if (
            null != e0[n] &&
            e0[n].predicate({
                selectedGuildId: a,
                voiceChannelId: o,
                voiceState: s,
                currentUser: r,
                premiumSubscription: i,
            })
        ) {
            let o =
                null == (e = (t = e0[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: a,
                      });
            eY = ej(ex({}, eH), {
                type: n,
                metadata: o,
            });
            break;
        }
    if (null != eY) {
        (null == (n = eY.metadata) ? void 0 : n.sampleRate) != null &&
            null == eF[eY.type] &&
            (eF[eY.type] = Math.random() <= eY.metadata.sampleRate);
        let e = !1 === eF[eY.type];
        (eQ(eY.type) || e) && (eY = null);
    }
}
function e2(e) {
    let { voiceStates: t } = e;
    return (
        ((null == eY ? void 0 : eY.type) === eA.kVF.INVITED_TO_SPEAK ||
            t.some((e) => {
                let { userId: t } = e;
                return t !== q.default.getId();
            })) &&
        e1()
    );
}
function e3(e) {
    eY = e.notice;
}
function e4(e) {
    return null != eY && (null == e.id || e.id === eY.id) && (eX(eY.type, e.isTemporary, e.untilAtLeast), e1());
}
function e8(e) {
    let { noticeType: t } = e;
    return eX(t), e1();
}
function e6() {
    return ed.Z.enabled || delete eV[eA.kVF.STREAMER_MODE], e1();
}
function e5() {
    return delete eV[eA.kVF.DISPATCH_ERROR], e1();
}
function e7() {
    return delete eV[eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], e1();
}
function e9() {
    return e1();
}
function te() {
    return e1();
}
function tt(e) {
    return e.user.id === q.default.getId() && e1();
}
function tn() {
    (eV = {}), (eF = {}), (eY = null);
}
class tr extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([ef.Z, eo.Z, ee.Z, ec.Z, k.Z, eE.Z, X.Z, $.Z, K.Z, S.Z, B.Z, z.Z, O.ZP], e1),
            this.waitFor(
                ep.default,
                eu.Z,
                en.Z,
                et.ZP,
                es.Z,
                er.Z,
                ed.Z,
                y.Z,
                ec.Z,
                e_.Z,
                H.Z,
                O.ZP,
                eo.Z,
                eI.Z,
                eT.Z,
                ey.Z,
                ei.Z,
                eg.Z,
                eS.Z,
                ee.Z,
                em.Z,
                ea.Z,
                k.Z,
                eb.Z,
                eE.Z,
                $.Z,
                R.Z,
                h.Z,
                G.Z,
                B.Z,
                z.Z,
            );
    }
    hasNotice() {
        return null != eY && null != eY.type;
    }
    getNotice() {
        return null == e_.Z.getAction() ? eY : null;
    }
    isNoticeDismissed(e) {
        return eQ(e);
    }
}
eD(tr, "displayName", "NoticeStore");
let ti = new tr(u.Z, {
    CURRENT_USER_UPDATE: e1,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: e1,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e1,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e1,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: e1,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e1,
    GUILD_CREATE: e1,
    GUILD_DELETE: e1,
    AUDIO_INPUT_DETECTED: e1,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: e1,
    CERTIFIED_DEVICES_SET: e1,
    AUDIO_SET_INPUT_DEVICE: e1,
    AUDIO_SET_OUTPUT_DEVICE: e1,
    MEDIA_ENGINE_DEVICES: e1,
    RTC_CONNECTION_STATE: e1,
    RPC_APP_AUTHENTICATED: e1,
    RPC_APP_DISCONNECTED: e1,
    USER_CONNECTIONS_UPDATE: e1,
    WINDOW_FOCUS: e1,
    INSTANT_INVITE_CREATE: e1,
    INSTANT_INVITE_REVOKE_SUCCESS: e1,
    SPOTIFY_PLAYER_PAUSE: e1,
    RUNNING_GAMES_CHANGE: e1,
    EXPERIMENTS_FETCH_SUCCESS: e1,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e1,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e1,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e1,
    DEVELOPER_TEST_MODE_RESET: e1,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: e1,
    DISPATCH_APPLICATION_INSTALL: e1,
    IMPERSONATE_STOP: e1,
    IMPERSONATE_UPDATE: e1,
    GUILD_MEMBER_ADD: tt,
    GUILD_MEMBER_UPDATE: e1,
    SURVEY_FETCHED: e1,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e1,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e1,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e1,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e1,
    VOICE_STATE_UPDATES: e2,
    STREAMER_MODE_UPDATE: e6,
    RUNNING_STREAMER_TOOLS_CHANGE: e6,
    DISPATCH_APPLICATION_ERROR: e5,
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: e7,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e9,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: te,
    NOTICE_SHOW: e3,
    NOTICE_DISMISS: e4,
    NOTICE_DISABLE: e8,
    LOGOUT: tn,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e1,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e1,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: e1,
    PROXY_BLOCKED_REQUEST: e1,
    REPORT_AV_ERROR: e1,
});
