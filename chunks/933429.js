(n.d(t, {
    ZP: () => eK,
    m9: () => eD,
    nA: () => eU,
    o: () => ev
}),
    n(388685),
    n(35282));
var i,
    r = n(913527),
    l = n.n(r),
    o = n(442837),
    s = n(743426),
    a = n(704215),
    c = n(433517),
    d = n(570140),
    u = n(579806),
    _ = n(726542),
    E = n(812206),
    h = n(223892),
    I = n(674525),
    p = n(605236),
    C = n(458725),
    T = n(915525),
    g = n(353926),
    O = n(594190),
    S = n(38618),
    N = n(569545),
    f = n(528011),
    A = n(487419),
    R = n(715903),
    m = n(223606),
    P = n(160404),
    y = n(41776),
    b = n(332473),
    D = n(30684),
    v = n(646476),
    U = n(616106),
    M = n(518638),
    L = n(1844),
    k = n(621615),
    Z = n(417626),
    j = n(569984),
    w = n(338247),
    x = n(523255),
    G = n(867003),
    F = n(768419),
    V = n(590415),
    B = n(581883),
    W = n(199902),
    H = n(314897),
    z = n(881998),
    Y = n(463395),
    K = n(592125),
    q = n(553795),
    X = n(427123),
    J = n(271383),
    Q = n(430824),
    $ = n(131951),
    ee = n(292959),
    et = n(496675),
    en = n(571474),
    ei = n(19780),
    er = n(944486),
    el = n(914010),
    eo = n(215427),
    es = n(246946),
    ea = n(558724),
    ec = n(23434),
    ed = n(594174),
    eu = n(979651),
    e_ = n(351402),
    eE = n(853872),
    eh = n(78839),
    eI = n(431),
    ep = n(580130),
    eC = n(695103),
    eT = n(358085),
    eg = n(74538),
    eO = n(922156),
    eS = n(436181),
    eN = n(941128),
    ef = n(981631),
    eA = n(188785),
    eR = n(474936),
    em = n(46140),
    eP = n(231338),
    ey = n(65154);
function eb(e, t, n) {
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
        [ef.kVF.LOCALIZED_PRICING]: a.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [ef.kVF.DOWNLOAD_NAG]: a.z.NAGBAR_NOTICE_DOWNLOAD,
        [ef.kVF.CONNECT_SPOTIFY]: a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [ef.kVF.CONNECT_PLAYSTATION]: a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [ef.kVF.MFA_SMS_BACKUP]: a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [ef.kVF.PREMIUM_REACTIVATE]: a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [ef.kVF.BOUNCED_EMAIL_DETECTED]: a.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [ef.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [ef.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [ef.kVF.POMELO_ELIGIBLE]: a.z.NAGBAR_NOTICE_POMELO,
        [ef.kVF.CHECKOUT_RECOVERY_NAGBAR]: a.z.CHECKOUT_RECOVERY_NAGBAR,
        [ef.kVF.REPORT_TO_MOD_SURVEY]: a.z.REPORT_TO_MOD_SURVEY_NOTICE
    },
    ev = { [ef.kVF.GIFTING_PROMOTION_REMINDER]: a.z.GIFTING_PROMOTION_REMINDER },
    eU = { [ef.kVF.OUTBOUND_PROMOTION]: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eM = {
        [ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [ef.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [ef.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [ef.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [ef.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [ef.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [ef.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    eL = new Set([ef.kVF.NO_INPUT_DETECTED, ef.kVF.NO_INPUT_DEVICES_DETECTED, ef.kVF.STREAMER_MODE, ef.kVF.VIDEO_UNSUPPORTED_BROWSER, ef.kVF.SPOTIFY_AUTO_PAUSED, ef.kVF.DISPATCH_ERROR, ef.kVF.DISPATCH_ERROR, ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ef.kVF.BLOCKED_BY_PROXY]),
    ek = {},
    eZ = {},
    ej = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    ew = null;
function ex(e) {
    return eM[e] + '-untilAtLeast';
}
function eG(e, t, n) {
    if (null == e) return;
    let i = eM[e];
    (null == i || t || c.K.set(i, !0), eL.has(e) && (ek[e] = !0), null != n && null != i) ? c.K.set(ex(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(ex(e));
}
function eF(e) {
    if (null == e) return !1;
    let t = ev[e];
    if (null != t) return (0, p.H4)(t).isDismissed;
    let n = eD[e];
    if (null != n) return (0, p.un)(n);
    let i = eM[e];
    if (null != i) {
        let t = (function (e) {
            let t = c.K.get(ex(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let r = ek[e];
    return !!r || (null != i && '' !== i ? c.K.get(i) : !!eL.has(e) && r);
}
let eV = [ef.kVF.QUARANTINED, ef.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ef.kVF.VIEWING_ROLES, ef.kVF.INVITED_TO_SPEAK, ef.kVF.LURKING_GUILD, ef.kVF.VOICE_DISABLED, ef.kVF.NO_INPUT_DEVICES_DETECTED, ef.kVF.NO_INPUT_DETECTED, ef.kVF.HARDWARE_MUTE, ef.kVF.H264_DISABLED, ef.kVF.DISPATCH_ERROR, ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ef.kVF.SPOTIFY_AUTO_PAUSED, ef.kVF.WIN32_DEPRECATED_MESSAGE, ef.kVF.WIN7_8_DEPRECATED_MESSAGE, ef.kVF.MACOS_19_DEPRECATED_MESSAGE, ef.kVF.BLOCKED_BY_PROXY, ef.kVF.VOICE_CONNECTED_LAST_SESSION, ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, ef.kVF.GUILD_RAID_NOTIFICATION, ef.kVF.GIFTING_PROMOTION_REMINDER, ef.kVF.QUESTS_PROGRESS_INTERRUPTION, ef.kVF.UNCLAIMED_ACCOUNT, ef.kVF.POMELO_ELIGIBLE, ef.kVF.PENDING_MEMBER, ef.kVF.CHECKOUT_RECOVERY_NAGBAR, ef.kVF.OUTBOUND_PROMOTION, ef.kVF.CORRUPT_INSTALLATION, ef.kVF.VIDEO_UNSUPPORTED_BROWSER, ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ef.kVF.STREAMER_MODE, ef.kVF.SCHEDULED_MAINTENANCE, ef.kVF.BOUNCED_EMAIL_DETECTED, ef.kVF.UNVERIFIED_ACCOUNT, ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING, ef.kVF.PREMIUM_TIER_0_TRIAL_ENDING, ef.kVF.PREMIUM_UNCANCEL, ef.kVF.PREMIUM_MISSING_PAYMENT, ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ef.kVF.PREMIUM_REACTIVATE, ef.kVF.ACTIVATE_SERVER_SUBSCRIPTION, ef.kVF.MFA_SMS_BACKUP, ef.kVF.APPLICATION_TEST_MODE, ef.kVF.LOCALIZED_PRICING, ef.kVF.DOWNLOAD_NAG, ef.kVF.CONNECT_SPOTIFY, ef.kVF.CONNECT_PLAYSTATION, ef.kVF.SURVEY, ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR, ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR, ef.kVF.IGNORE_USER_FEEDBACK_NAGBAR, ef.kVF.REPORT_TO_MOD_SURVEY],
    eB = [ef.kVF.QUARANTINED, ef.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ef.kVF.VIEWING_ROLES, ef.kVF.INVITED_TO_SPEAK, ef.kVF.LURKING_GUILD, ef.kVF.VOICE_DISABLED, ef.kVF.NO_INPUT_DETECTED, ef.kVF.HARDWARE_MUTE, ef.kVF.H264_DISABLED, ef.kVF.DISPATCH_ERROR, ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ef.kVF.SPOTIFY_AUTO_PAUSED, ef.kVF.BLOCKED_BY_PROXY, ef.kVF.VOICE_CONNECTED_LAST_SESSION, ef.kVF.PENDING_MEMBER, ef.kVF.STREAMER_MODE, ef.kVF.SCHEDULED_MAINTENANCE],
    eW = {
        [ef.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = v.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = v.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, p.H4)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eF(ef.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [ef.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, f.g)().show && !eF(ef.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [ef.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = J.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, R.EY)(i);
            }
        },
        [ef.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(ef.xW$.QUARANTINED);
            }
        },
        [ef.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return P.Z.isViewingRoles(t);
            }
        },
        [ef.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, V.gf)(t) === V.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [ef.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && y.Z.isLurking(t);
            }
        },
        [ef.kVF.VOICE_DISABLED]: { predicate: () => null != ei.Z.getRemoteDisconnectVoiceChannelId() },
        [ef.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ei.Z.getLastSessionVoiceChannelId() },
        [ef.kVF.NO_INPUT_DETECTED]: { predicate: () => T.Z.hasActiveErrorOfType(C.u.NO_AUDIO_INPUT_DETECTED) },
        [ef.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => T.Z.hasActiveErrorOfType(C.u.NO_INPUT_DEVICES) },
        [ef.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = K.Z.getChannel(t);
                return !$.Z.getOpenH264() && null != t && eu.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [ef.kVF.HARDWARE_MUTE]: {
            predicate: () => ei.Z.isConnected() && $.Z.isHardwareMute() && $.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = $.Z.getInputDeviceId(),
                    t = Y.Z.getVendor(e),
                    n = Y.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [ef.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eO.Z.getLastError(),
            metadata: () => ({ error: eO.Z.getLastError() })
        },
        [ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eS.Z.getLastProgress(),
            metadata: () => eS.Z.getLastProgress()
        },
        [ef.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => F.Z.wasAutoPaused() },
        [ef.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eF(ef.kVF.BLOCKED_BY_PROXY) && Z.Z.blockedByProxy && k.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [ef.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [ef.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null != (i = null != r && null != l && !(null == (t = Q.Z.getGuild(r)) ? void 0 : t.hasFeature(ef.oNc.GUILD_ONBOARDING)) && (null == (n = J.ZP.getMember(r, l.id)) ? void 0 : n.isPending)) && i;
            }
        },
        [ef.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, M.tq)() },
        [ef.kVF.CORRUPT_INSTALLATION]: { predicate: () => eT.isPlatformEmbedded && (!s.Z.supported() || eN.Z.isCorruptInstallation()) },
        [ef.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && eu.Z.hasVideo(t) && !$.Z.supports(ey.AN.VIDEO) && !eF(ef.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eg.ZP.canRedeemPremiumPerks(t) && X.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => X.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eF(ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && X.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => X.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ef.kVF.STREAMER_MODE]: { predicate: () => es.Z.enabled },
        [ef.kVF.DOWNLOAD_NAG]: { predicate: () => !eT.isPlatformEmbedded && !eF(ef.kVF.DOWNLOAD_NAG) },
        [ef.kVF.SCHEDULED_MAINTENANCE]: {
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
        [ef.kVF.SURVEY]: {
            predicate: () => null != ea.Z.getCurrentSurvey(),
            metadata: () => ea.Z.getCurrentSurvey()
        },
        [ef.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [ef.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [ef.kVF.CONNECT_SPOTIFY]: { predicate: () => !F.Z.hasConnectedAccount() && O.ZP.isObservedAppRunning(_.Z.get(ef.ABu.SPOTIFY).name) && !eF(ef.kVF.CONNECT_SPOTIFY) },
        [ef.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.arch) === 'ia32' && (null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [ef.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [ef.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [ef.kVF.CONNECT_PLAYSTATION]: { predicate: () => q.Z.isSuggestedAccountType(ef.ABu.PLAYSTATION) && null == q.Z.getAccount(null, ef.ABu.PLAYSTATION) && !eF(ef.kVF.CONNECT_PLAYSTATION) },
        [ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_2]).length > 0 && !eF(ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [ef.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_0]).length > 0 && !eF(ef.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [ef.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ef.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = null != t && t.status === ef.O0b.CANCELED && !o && i <= 7 && i >= 0 && (0, eg.M5)(n, eR.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ef.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eg.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eg.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [ef.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = ep.Z.applicationIdsFetched.has(eR.CL),
                    a = ep.Z.getForApplication(eR.CL),
                    c = null != t ? (0, eg.Af)(t) : null,
                    d = null != c ? eg.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != a &&
                        null != c &&
                        Array.from(a).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    _ = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== ef.O0b.PAST_DUE && !o && s && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ef.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eg.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eg.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === ef.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && t.status === ef.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ef.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(ef.xW$.MFA_SMS) && !t.hasFlag(ef.xW$.STAFF) && !t.hasFlag(ef.xW$.PARTNER) && !eF(ef.kVF.MFA_SMS_BACKUP);
            }
        },
        [ef.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eC.Z.testModeApplicationId,
            metadata: () => {
                if (null == eC.Z.testModeApplicationId) return {};
                let e = eC.Z.testModeApplicationId,
                    t = E.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [ef.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eF(ef.kVF.PREMIUM_REACTIVATE) && U.Z.shouldShowReactivateNotice() },
        [ef.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eF(ef.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != r && eP.Uk.has(r.type),
                    s = null != t && t.status === ef.O0b.PAST_DUE && !i && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === ef.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, eg.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [ef.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, b.e)() && !eF(ef.kVF.POMELO_ELIGIBLE) },
        [ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? Q.Z.getGuild(t) : null;
                return (null != t && null != m.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(ef.oNc.COMMUNITY)) && !eF(ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: l()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = m.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [ef.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eF(ef.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== I.Z.getEligibleGuildsForNagActivate().length && (0, h.Lm)() },
        [ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return x.SI(t);
            }
        },
        [ef.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = W.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = j.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= em.Ot;
            },
            metadata: () => {
                let e = W.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, N.V9)(e) : null };
            }
        },
        [ef.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null != (t = eE.Z.paymentSources) ? t : {};
                return D.Z.getIsTargeted() && !(0, eg.I5)(n) && 0 !== Object.keys(i).length;
            }
        },
        [ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eF(ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && G.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [ef.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => G.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [ef.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, w.s)(t, n);
            }
        }
    };
function eH() {
    var e, t, n;
    if (!S.Z.isConnected()) return !1;
    ew = null;
    let i = ed.default.getCurrentUser();
    if (null == i) return !1;
    let r = eh.ZP.getPremiumSubscription(),
        l = e_.Z.isLocalizedPromoEnabled,
        o = el.Z.getGuildId(),
        s = er.Z.getVoiceChannelId(),
        a = null != s ? eu.Z.getVoiceStateForChannel(s) : null;
    for (let n of eA.a ? eB : eV)
        if (
            null != eW[n] &&
            eW[n].predicate({
                selectedGuildId: o,
                voiceChannelId: s,
                voiceState: a,
                currentUser: i,
                premiumSubscription: r,
                isLocalizedPromoEnabled: l
            })
        ) {
            let l =
                null == (e = (t = eW[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: i,
                          premiumSubscription: r,
                          selectedGuildId: o
                      });
            ew = (function (e, t) {
                return (
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
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
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                eb(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, ej),
                {
                    type: n,
                    metadata: l
                }
            );
            break;
        }
    if (null != ew) {
        (null == (n = ew.metadata) ? void 0 : n.sampleRate) != null && null == eZ[ew.type] && (eZ[ew.type] = Math.random() <= ew.metadata.sampleRate);
        let e = !1 === eZ[ew.type];
        (eF(ew.type) || e) && (ew = null);
    }
}
function ez() {
    return (es.Z.enabled || delete ek[ef.kVF.STREAMER_MODE], eH());
}
class eY extends (i = o.ZP.Store) {
    initialize() {
        (this.syncWith([ea.Z, en.Z, X.Z, el.Z, L.Z, eI.Z, z.Z, q.Z, B.Z, A.Z, j.Z, W.Z], eH), this.waitFor(ed.default, eo.Z, Q.Z, J.ZP, ei.Z, $.Z, es.Z, g.Z, el.Z, ec.Z, F.Z, O.ZP, en.Z, eO.Z, eS.Z, eC.Z, ee.Z, eh.ZP, eN.Z, X.Z, eE.Z, et.Z, L.Z, ep.Z, eI.Z, q.Z, y.Z, I.Z, Z.Z, j.Z, W.Z));
    }
    hasNotice() {
        return null != ew && null != ew.type;
    }
    getNotice() {
        return null == ec.Z.getAction() ? ew : null;
    }
    isNoticeDismissed(e) {
        return eF(e);
    }
}
eb(eY, 'displayName', 'NoticeStore');
let eK = new eY(d.Z, {
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
        return e.user.id === H.default.getId() && eH();
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
                return t !== H.default.getId();
            }) && eH()
        );
    },
    STREAMER_MODE_UPDATE: ez,
    RUNNING_STREAMER_TOOLS_CHANGE: ez,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete ek[ef.kVF.DISPATCH_ERROR], eH());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete ek[ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eH();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eH();
    },
    NOTICE_SHOW: function (e) {
        ew = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != ew && (null == e.id || e.id === ew.id) && (eG(ew.type, e.isTemporary, e.untilAtLeast), eH());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (eG(t), eH());
    },
    LOGOUT: function () {
        ((ek = {}), (eZ = {}), (ew = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
    PROXY_BLOCKED_REQUEST: eH,
    REPORT_AV_ERROR: eH
});
