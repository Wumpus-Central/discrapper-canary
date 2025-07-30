(n.d(t, {
    ZP: () => eK,
    m9: () => eD,
    nA: () => ej,
    o: () => eM
}),
    n(388685),
    n(35282));
var r,
    i = n(913527),
    l = n.n(i),
    a = n(442837),
    o = n(743426),
    s = n(704215),
    c = n(433517),
    u = n(570140),
    d = n(579806),
    _ = n(726542),
    E = n(812206),
    p = n(223892),
    O = n(674525),
    f = n(266454),
    I = n(605236),
    h = n(458725),
    T = n(915525),
    S = n(353926),
    m = n(594190),
    g = n(38618),
    N = n(569545),
    R = n(528011),
    b = n(487419),
    y = n(715903),
    A = n(223606),
    C = n(160404),
    P = n(41776),
    D = n(332473),
    M = n(30684),
    j = n(646476),
    x = n(616106),
    k = n(518638),
    v = n(1844),
    L = n(621615),
    U = n(417626),
    Z = n(569984),
    F = n(338247),
    w = n(523255),
    G = n(867003),
    V = n(768419),
    B = n(590415),
    W = n(581883),
    H = n(199902),
    z = n(314897),
    Y = n(881998),
    K = n(463395),
    q = n(592125),
    X = n(553795),
    Q = n(427123),
    J = n(271383),
    $ = n(430824),
    ee = n(131951),
    et = n(292959),
    en = n(496675),
    er = n(571474),
    ei = n(19780),
    el = n(944486),
    ea = n(914010),
    eo = n(215427),
    es = n(246946),
    ec = n(558724),
    eu = n(23434),
    ed = n(594174),
    e_ = n(979651),
    eE = n(853872),
    ep = n(78839),
    eO = n(431),
    ef = n(580130),
    eI = n(695103),
    eh = n(358085),
    eT = n(74538),
    eS = n(922156),
    em = n(436181),
    eg = n(941128),
    eN = n(981631),
    eR = n(188785),
    eb = n(474936),
    ey = n(46140),
    eA = n(231338),
    eC = n(65154);
function eP(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let eD = {
        [eN.kVF.DOWNLOAD_NAG]: s.z.NAGBAR_NOTICE_DOWNLOAD,
        [eN.kVF.CONNECT_SPOTIFY]: s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eN.kVF.CONNECT_PLAYSTATION]: s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eN.kVF.MFA_SMS_BACKUP]: s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eN.kVF.PREMIUM_REACTIVATE]: s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eN.kVF.BOUNCED_EMAIL_DETECTED]: s.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eN.kVF.POMELO_ELIGIBLE]: s.z.NAGBAR_NOTICE_POMELO,
        [eN.kVF.CHECKOUT_RECOVERY_NAGBAR]: s.z.CHECKOUT_RECOVERY_NAGBAR,
        [eN.kVF.REPORT_TO_MOD_SURVEY]: s.z.REPORT_TO_MOD_SURVEY_NOTICE
    },
    eM = { [eN.kVF.GIFTING_PROMOTION_REMINDER]: s.z.GIFTING_PROMOTION_REMINDER },
    ej = { [eN.kVF.OUTBOUND_PROMOTION]: s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ex = {
        [eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eN.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eN.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eN.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eN.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eN.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [eN.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    ek = new Set([eN.kVF.NO_INPUT_DETECTED, eN.kVF.NO_INPUT_DEVICES_DETECTED, eN.kVF.STREAMER_MODE, eN.kVF.VIDEO_UNSUPPORTED_BROWSER, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.BLOCKED_BY_PROXY]),
    ev = {},
    eL = {},
    eU = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eZ = null;
function eF(e) {
    return ex[e] + '-untilAtLeast';
}
function ew(e, t, n) {
    if (null == e) return;
    let r = ex[e];
    (null == r || t || c.K.set(r, !0), ek.has(e) && (ev[e] = !0), null != n && null != r) ? c.K.set(eF(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eF(e));
}
function eG(e) {
    if (null == e) return !1;
    let t = eM[e];
    if (null != t) return (0, I.H4)(t).isDismissed;
    let n = eD[e];
    if (null != n) return (0, f.zu)(n);
    let r = ex[e];
    if (null != r) {
        let t = (function (e) {
            let t = c.K.get(eF(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let i = ev[e];
    return !!i || (null != r && '' !== r ? c.K.get(r) : !!ek.has(e) && i);
}
let eV = [eN.kVF.QUARANTINED, eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eN.kVF.VIEWING_ROLES, eN.kVF.INVITED_TO_SPEAK, eN.kVF.LURKING_GUILD, eN.kVF.VOICE_DISABLED, eN.kVF.NO_INPUT_DEVICES_DETECTED, eN.kVF.NO_INPUT_DETECTED, eN.kVF.HARDWARE_MUTE, eN.kVF.H264_DISABLED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.WIN32_DEPRECATED_MESSAGE, eN.kVF.WIN7_8_DEPRECATED_MESSAGE, eN.kVF.MACOS_19_DEPRECATED_MESSAGE, eN.kVF.BLOCKED_BY_PROXY, eN.kVF.VOICE_CONNECTED_LAST_SESSION, eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eN.kVF.GUILD_RAID_NOTIFICATION, eN.kVF.GIFTING_PROMOTION_REMINDER, eN.kVF.QUESTS_PROGRESS_INTERRUPTION, eN.kVF.UNCLAIMED_ACCOUNT, eN.kVF.POMELO_ELIGIBLE, eN.kVF.PENDING_MEMBER, eN.kVF.CHECKOUT_RECOVERY_NAGBAR, eN.kVF.OUTBOUND_PROMOTION, eN.kVF.CORRUPT_INSTALLATION, eN.kVF.VIDEO_UNSUPPORTED_BROWSER, eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eN.kVF.STREAMER_MODE, eN.kVF.SCHEDULED_MAINTENANCE, eN.kVF.BOUNCED_EMAIL_DETECTED, eN.kVF.UNVERIFIED_ACCOUNT, eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eN.kVF.PREMIUM_UNCANCEL, eN.kVF.PREMIUM_MISSING_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eN.kVF.PREMIUM_REACTIVATE, eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eN.kVF.MFA_SMS_BACKUP, eN.kVF.APPLICATION_TEST_MODE, eN.kVF.DOWNLOAD_NAG, eN.kVF.CONNECT_SPOTIFY, eN.kVF.CONNECT_PLAYSTATION, eN.kVF.SURVEY, eN.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR, eN.kVF.IGNORE_USER_FEEDBACK_NAGBAR, eN.kVF.REPORT_TO_MOD_SURVEY],
    eB = [eN.kVF.QUARANTINED, eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eN.kVF.VIEWING_ROLES, eN.kVF.INVITED_TO_SPEAK, eN.kVF.LURKING_GUILD, eN.kVF.VOICE_DISABLED, eN.kVF.NO_INPUT_DETECTED, eN.kVF.HARDWARE_MUTE, eN.kVF.H264_DISABLED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.BLOCKED_BY_PROXY, eN.kVF.VOICE_CONNECTED_LAST_SESSION, eN.kVF.PENDING_MEMBER, eN.kVF.STREAMER_MODE, eN.kVF.SCHEDULED_MAINTENANCE],
    eW = {
        [eN.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = j.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = j.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, I.H4)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eG(eN.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eN.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, R.g)().show && !eG(eN.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = J.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, y.EY)(r);
            }
        },
        [eN.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eN.xW$.QUARANTINED);
            }
        },
        [eN.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return C.Z.isViewingRoles(t);
            }
        },
        [eN.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, B.gf)(t) === B.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eN.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.isLurking(t);
            }
        },
        [eN.kVF.VOICE_DISABLED]: { predicate: () => null != ei.Z.getRemoteDisconnectVoiceChannelId() },
        [eN.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ei.Z.getLastSessionVoiceChannelId() },
        [eN.kVF.NO_INPUT_DETECTED]: { predicate: () => T.Z.hasActiveErrorOfType(h.u.NO_AUDIO_INPUT_DETECTED) },
        [eN.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => T.Z.hasActiveErrorOfType(h.u.NO_INPUT_DEVICES) },
        [eN.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !ee.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eN.kVF.HARDWARE_MUTE]: {
            predicate: () => ei.Z.isConnected() && ee.Z.isHardwareMute() && ee.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = ee.Z.getInputDeviceId(),
                    t = K.Z.getVendor(e),
                    n = K.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eN.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eS.Z.getLastError(),
            metadata: () => ({ error: eS.Z.getLastError() })
        },
        [eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != em.Z.getLastProgress(),
            metadata: () => em.Z.getLastProgress()
        },
        [eN.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => V.Z.wasAutoPaused() },
        [eN.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eG(eN.kVF.BLOCKED_BY_PROXY) && U.Z.blockedByProxy && L.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eN.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eN.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: l } = e;
                return null != (r = null != i && null != l && !(null == (t = $.Z.getGuild(i)) ? void 0 : t.features.has(eN.oNc.GUILD_ONBOARDING)) && (null == (n = J.ZP.getMember(i, l.id)) ? void 0 : n.isPending)) && r;
            }
        },
        [eN.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, k.tq)() },
        [eN.kVF.CORRUPT_INSTALLATION]: { predicate: () => eh.isPlatformEmbedded && (!o.Z.supported() || eg.Z.isCorruptInstallation()) },
        [eN.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && e_.Z.hasVideo(t) && !ee.Z.supports(eC.AN.VIDEO) && !eG(eN.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eT.ZP.canRedeemPremiumPerks(t) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eG(eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eN.kVF.STREAMER_MODE]: { predicate: () => es.Z.enabled },
        [eN.kVF.DOWNLOAD_NAG]: { predicate: () => !eh.isPlatformEmbedded && !eG(eN.kVF.DOWNLOAD_NAG) },
        [eN.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != eo.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = eo.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eN.kVF.SURVEY]: {
            predicate: () => null != ec.Z.getCurrentSurvey(),
            metadata: () => ec.Z.getCurrentSurvey()
        },
        [eN.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eN.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eN.kVF.CONNECT_SPOTIFY]: { predicate: () => !V.Z.hasConnectedAccount() && m.ZP.isObservedAppRunning(_.Z.get(eN.ABu.SPOTIFY).name) && !eG(eN.kVF.CONNECT_SPOTIFY) },
        [eN.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === 'ia32' && (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eN.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eN.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eN.kVF.CONNECT_PLAYSTATION]: { predicate: () => X.Z.isSuggestedAccountType(eN.ABu.PLAYSTATION) && null == X.Z.getAccount(null, eN.ABu.PLAYSTATION) && !eG(eN.kVF.CONNECT_PLAYSTATION) },
        [eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eO.Z.getAlmostExpiringTrialOffers([eb.Si.TIER_2]).length > 0 && !eG(eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eO.Z.getAlmostExpiringTrialOffers([eb.Si.TIER_0]).length > 0 && !eG(eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eN.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eN.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    a = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === eN.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0, eT.M5)(n, eb.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_UNCANCEL) && o;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, eT.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eT.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eN.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    a = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = ef.Z.applicationIdsFetched.has(eb.CL),
                    s = ef.Z.getForApplication(eb.CL),
                    c = null != t ? (0, eT.Af)(t) : null,
                    u = null != c ? eT.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != s &&
                        null != c &&
                        Array.from(s).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    _ = null != t && r <= (i > 14 ? 7 : 2) && r >= 0 && t.status !== eN.O0b.PAST_DUE && !a && o && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, eT.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eT.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    a = null != t && t.status === eN.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && t.status === eN.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eN.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eN.xW$.MFA_SMS) && !t.hasFlag(eN.xW$.STAFF) && !t.hasFlag(eN.xW$.PARTNER) && !eG(eN.kVF.MFA_SMS_BACKUP);
            }
        },
        [eN.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eI.Z.testModeApplicationId,
            metadata: () => {
                if (null == eI.Z.testModeApplicationId) return {};
                let e = eI.Z.testModeApplicationId,
                    t = E.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eN.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eG(eN.kVF.PREMIUM_REACTIVATE) && x.Z.shouldShowReactivateNotice() },
        [eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != i && eA.Uk.has(i.type),
                    o = null != t && t.status === eN.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === eN.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, eT.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [eN.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eG(eN.kVF.POMELO_ELIGIBLE) },
        [eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? $.Z.getGuild(t) : null;
                return (null != t && null != A.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(eN.oNc.COMMUNITY)) && !eG(eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: l()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = A.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eG(eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== O.Z.getEligibleGuildsForNagActivate().length && (0, p.Lm)() },
        [eN.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return w.SI(t);
            }
        },
        [eN.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = H.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = Z.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= ey.Ot;
            },
            metadata: () => {
                let e = H.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, N.V9)(e) : null };
            }
        },
        [eN.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = eE.Z.paymentSources) ? t : {};
                return M.Z.getIsTargeted() && !(0, eT.I5)(n) && 0 !== Object.keys(r).length;
            }
        },
        [eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eG(eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && G.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [eN.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => G.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [eN.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, F.s)(t, n);
            }
        }
    };
function eH() {
    var e, t, n;
    if (!g.Z.isConnected()) return !1;
    eZ = null;
    let r = ed.default.getCurrentUser();
    if (null == r) return !1;
    let i = ep.Z.getPremiumSubscription(),
        l = ea.Z.getGuildId(),
        a = el.Z.getVoiceChannelId(),
        o = null != a ? e_.Z.getVoiceStateForChannel(a) : null;
    for (let n of eR.a ? eB : eV)
        if (
            null != eW[n] &&
            eW[n].predicate({
                selectedGuildId: l,
                voiceChannelId: a,
                voiceState: o,
                currentUser: r,
                premiumSubscription: i
            })
        ) {
            let a =
                null == (e = (t = eW[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: l
                      });
            eZ = (function (e, t) {
                return (
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e
                );
            })(
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                eP(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, eU),
                {
                    type: n,
                    metadata: a
                }
            );
            break;
        }
    if (null != eZ) {
        (null == (n = eZ.metadata) ? void 0 : n.sampleRate) != null && null == eL[eZ.type] && (eL[eZ.type] = Math.random() <= eZ.metadata.sampleRate);
        let e = !1 === eL[eZ.type];
        (eG(eZ.type) || e) && (eZ = null);
    }
}
function ez() {
    return (es.Z.enabled || delete ev[eN.kVF.STREAMER_MODE], eH());
}
class eY extends (r = a.ZP.Store) {
    initialize() {
        (this.syncWith([ec.Z, er.Z, Q.Z, ea.Z, v.Z, eO.Z, Y.Z, X.Z, W.Z, b.Z, Z.Z, H.Z], eH), this.waitFor(ed.default, eo.Z, $.Z, J.ZP, ei.Z, ee.Z, es.Z, S.Z, ea.Z, eu.Z, V.Z, m.ZP, er.Z, eS.Z, em.Z, eI.Z, et.Z, ep.Z, eg.Z, Q.Z, eE.Z, en.Z, v.Z, ef.Z, eO.Z, X.Z, P.Z, O.Z, U.Z, Z.Z, H.Z));
    }
    hasNotice() {
        return null != eZ && null != eZ.type;
    }
    getNotice() {
        return null == eu.Z.getAction() ? eZ : null;
    }
    isNoticeDismissed(e) {
        return eG(e);
    }
}
eP(eY, 'displayName', 'NoticeStore');
let eK = new eY(u.Z, {
    CURRENT_USER_UPDATE: eH,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eH,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eH,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eH,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eH,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eH,
    GUILD_CREATE: eH,
    GUILD_DELETE: eH,
    AUDIO_INPUT_DETECTED: eH,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eH,
    CERTIFIED_DEVICES_SET: eH,
    AUDIO_SET_INPUT_DEVICE: eH,
    AUDIO_SET_OUTPUT_DEVICE: eH,
    MEDIA_ENGINE_DEVICES: eH,
    RTC_CONNECTION_STATE: eH,
    RPC_APP_AUTHENTICATED: eH,
    RPC_APP_DISCONNECTED: eH,
    USER_CONNECTIONS_UPDATE: eH,
    WINDOW_FOCUS: eH,
    INSTANT_INVITE_CREATE: eH,
    INSTANT_INVITE_REVOKE_SUCCESS: eH,
    SPOTIFY_PLAYER_PAUSE: eH,
    RUNNING_GAMES_CHANGE: eH,
    EXPERIMENTS_FETCH_SUCCESS: eH,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eH,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eH,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eH,
    DEVELOPER_TEST_MODE_RESET: eH,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eH,
    DISPATCH_APPLICATION_INSTALL: eH,
    IMPERSONATE_STOP: eH,
    IMPERSONATE_UPDATE: eH,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === z.default.getId() && eH();
    },
    GUILD_MEMBER_UPDATE: eH,
    SURVEY_FETCHED: eH,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eH,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eH,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eH,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eH,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            t.some((e) => {
                let { userId: t } = e;
                return t !== z.default.getId();
            }) && eH()
        );
    },
    STREAMER_MODE_UPDATE: ez,
    RUNNING_STREAMER_TOOLS_CHANGE: ez,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete ev[eN.kVF.DISPATCH_ERROR], eH());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete ev[eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eH();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eH();
    },
    NOTICE_SHOW: function (e) {
        eZ = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eZ && (null == e.id || e.id === eZ.id) && (ew(eZ.type, e.isTemporary, e.untilAtLeast), eH());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (ew(t), eH());
    },
    LOGOUT: function () {
        ((ev = {}), (eL = {}), (eZ = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
    PROXY_BLOCKED_REQUEST: eH,
    REPORT_AV_ERROR: eH
});
