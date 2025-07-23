(n.d(t, {
    ZP: () => eX,
    m9: () => ev,
    nA: () => eM,
    o: () => eU
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
    h = n(812206),
    E = n(223892),
    I = n(674525),
    p = n(266454),
    C = n(605236),
    O = n(458725),
    g = n(915525),
    S = n(353926),
    T = n(594190),
    f = n(38618),
    N = n(569545),
    m = n(528011),
    R = n(487419),
    A = n(715903),
    y = n(223606),
    b = n(160404),
    P = n(41776),
    D = n(332473),
    v = n(30684),
    U = n(646476),
    M = n(616106),
    L = n(518638),
    Z = n(1844),
    k = n(621615),
    j = n(417626),
    w = n(569984),
    x = n(338247),
    F = n(523255),
    V = n(867003),
    G = n(768419),
    B = n(590415),
    H = n(581883),
    W = n(199902),
    z = n(314897),
    Y = n(881998),
    K = n(463395),
    X = n(592125),
    q = n(553795),
    Q = n(427123),
    J = n(271383),
    $ = n(430824),
    ee = n(131951),
    et = n(292959),
    en = n(496675),
    ei = n(571474),
    er = n(19780),
    el = n(944486),
    eo = n(914010),
    es = n(215427),
    ea = n(246946),
    ec = n(558724),
    ed = n(23434),
    eu = n(594174),
    e_ = n(979651),
    eh = n(351402),
    eE = n(853872),
    eI = n(78839),
    ep = n(431),
    eC = n(580130),
    eO = n(695103),
    eg = n(358085),
    eS = n(74538),
    eT = n(922156),
    ef = n(436181),
    eN = n(941128),
    em = n(981631),
    eR = n(188785),
    eA = n(474936),
    ey = n(46140),
    eb = n(231338),
    eP = n(65154);
function eD(e, t, n) {
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
let ev = {
        [em.kVF.LOCALIZED_PRICING]: a.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [em.kVF.DOWNLOAD_NAG]: a.z.NAGBAR_NOTICE_DOWNLOAD,
        [em.kVF.CONNECT_SPOTIFY]: a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [em.kVF.CONNECT_PLAYSTATION]: a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [em.kVF.MFA_SMS_BACKUP]: a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [em.kVF.PREMIUM_REACTIVATE]: a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [em.kVF.BOUNCED_EMAIL_DETECTED]: a.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [em.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [em.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [em.kVF.POMELO_ELIGIBLE]: a.z.NAGBAR_NOTICE_POMELO,
        [em.kVF.CHECKOUT_RECOVERY_NAGBAR]: a.z.CHECKOUT_RECOVERY_NAGBAR,
        [em.kVF.REPORT_TO_MOD_SURVEY]: a.z.REPORT_TO_MOD_SURVEY_NOTICE
    },
    eU = { [em.kVF.GIFTING_PROMOTION_REMINDER]: a.z.GIFTING_PROMOTION_REMINDER },
    eM = { [em.kVF.OUTBOUND_PROMOTION]: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eL = {
        [em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [em.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [em.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [em.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [em.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [em.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [em.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [em.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    eZ = new Set([em.kVF.NO_INPUT_DETECTED, em.kVF.NO_INPUT_DEVICES_DETECTED, em.kVF.STREAMER_MODE, em.kVF.VIDEO_UNSUPPORTED_BROWSER, em.kVF.SPOTIFY_AUTO_PAUSED, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kVF.BLOCKED_BY_PROXY]),
    ek = {},
    ej = {},
    ew = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    ex = null;
function eF(e) {
    return eL[e] + '-untilAtLeast';
}
function eV(e, t, n) {
    if (null == e) return;
    let i = eL[e];
    (null == i || t || c.K.set(i, !0), eZ.has(e) && (ek[e] = !0), null != n && null != i) ? c.K.set(eF(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eF(e));
}
function eG(e) {
    if (null == e) return !1;
    let t = eU[e];
    if (null != t) return (0, C.H4)(t).isDismissed;
    let n = ev[e];
    if (null != n) return (0, p.zu)(n);
    let i = eL[e];
    if (null != i) {
        let t = (function (e) {
            let t = c.K.get(eF(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let r = ek[e];
    return !!r || (null != i && '' !== i ? c.K.get(i) : !!eZ.has(e) && r);
}
let eB = [em.kVF.QUARANTINED, em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, em.kVF.VIEWING_ROLES, em.kVF.INVITED_TO_SPEAK, em.kVF.LURKING_GUILD, em.kVF.VOICE_DISABLED, em.kVF.NO_INPUT_DEVICES_DETECTED, em.kVF.NO_INPUT_DETECTED, em.kVF.HARDWARE_MUTE, em.kVF.H264_DISABLED, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kVF.SPOTIFY_AUTO_PAUSED, em.kVF.WIN32_DEPRECATED_MESSAGE, em.kVF.WIN7_8_DEPRECATED_MESSAGE, em.kVF.MACOS_19_DEPRECATED_MESSAGE, em.kVF.BLOCKED_BY_PROXY, em.kVF.VOICE_CONNECTED_LAST_SESSION, em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, em.kVF.GUILD_RAID_NOTIFICATION, em.kVF.GIFTING_PROMOTION_REMINDER, em.kVF.QUESTS_PROGRESS_INTERRUPTION, em.kVF.UNCLAIMED_ACCOUNT, em.kVF.POMELO_ELIGIBLE, em.kVF.PENDING_MEMBER, em.kVF.CHECKOUT_RECOVERY_NAGBAR, em.kVF.OUTBOUND_PROMOTION, em.kVF.CORRUPT_INSTALLATION, em.kVF.VIDEO_UNSUPPORTED_BROWSER, em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, em.kVF.STREAMER_MODE, em.kVF.SCHEDULED_MAINTENANCE, em.kVF.BOUNCED_EMAIL_DETECTED, em.kVF.UNVERIFIED_ACCOUNT, em.kVF.PREMIUM_TIER_2_TRIAL_ENDING, em.kVF.PREMIUM_TIER_0_TRIAL_ENDING, em.kVF.PREMIUM_UNCANCEL, em.kVF.PREMIUM_MISSING_PAYMENT, em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, em.kVF.PREMIUM_REACTIVATE, em.kVF.ACTIVATE_SERVER_SUBSCRIPTION, em.kVF.MFA_SMS_BACKUP, em.kVF.APPLICATION_TEST_MODE, em.kVF.LOCALIZED_PRICING, em.kVF.DOWNLOAD_NAG, em.kVF.CONNECT_SPOTIFY, em.kVF.CONNECT_PLAYSTATION, em.kVF.SURVEY, em.kVF.SAFETY_USER_SENTIMENT_NAGBAR, em.kVF.BLOCK_USER_FEEDBACK_NAGBAR, em.kVF.IGNORE_USER_FEEDBACK_NAGBAR, em.kVF.REPORT_TO_MOD_SURVEY],
    eH = [em.kVF.QUARANTINED, em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, em.kVF.VIEWING_ROLES, em.kVF.INVITED_TO_SPEAK, em.kVF.LURKING_GUILD, em.kVF.VOICE_DISABLED, em.kVF.NO_INPUT_DETECTED, em.kVF.HARDWARE_MUTE, em.kVF.H264_DISABLED, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kVF.SPOTIFY_AUTO_PAUSED, em.kVF.BLOCKED_BY_PROXY, em.kVF.VOICE_CONNECTED_LAST_SESSION, em.kVF.PENDING_MEMBER, em.kVF.STREAMER_MODE, em.kVF.SCHEDULED_MAINTENANCE],
    eW = {
        [em.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = U.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = U.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, C.H4)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eG(em.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [em.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, m.g)().show && !eG(em.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = J.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, A.EY)(i);
            }
        },
        [em.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(em.xW$.QUARANTINED);
            }
        },
        [em.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return b.Z.isViewingRoles(t);
            }
        },
        [em.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, B.gf)(t) === B.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [em.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.isLurking(t);
            }
        },
        [em.kVF.VOICE_DISABLED]: { predicate: () => null != er.Z.getRemoteDisconnectVoiceChannelId() },
        [em.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != er.Z.getLastSessionVoiceChannelId() },
        [em.kVF.NO_INPUT_DETECTED]: { predicate: () => g.Z.hasActiveErrorOfType(O.u.NO_AUDIO_INPUT_DETECTED) },
        [em.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => g.Z.hasActiveErrorOfType(O.u.NO_INPUT_DEVICES) },
        [em.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = X.Z.getChannel(t);
                return !ee.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [em.kVF.HARDWARE_MUTE]: {
            predicate: () => er.Z.isConnected() && ee.Z.isHardwareMute() && ee.Z.isEnableHardwareMuteNotice(),
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
        [em.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eT.Z.getLastError(),
            metadata: () => ({ error: eT.Z.getLastError() })
        },
        [em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != ef.Z.getLastProgress(),
            metadata: () => ef.Z.getLastProgress()
        },
        [em.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => G.Z.wasAutoPaused() },
        [em.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eG(em.kVF.BLOCKED_BY_PROXY) && j.Z.blockedByProxy && k.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [em.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [em.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null != (i = null != r && null != l && !(null == (t = $.Z.getGuild(r)) ? void 0 : t.features.has(em.oNc.GUILD_ONBOARDING)) && (null == (n = J.ZP.getMember(r, l.id)) ? void 0 : n.isPending)) && i;
            }
        },
        [em.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, L.tq)() },
        [em.kVF.CORRUPT_INSTALLATION]: { predicate: () => eg.isPlatformEmbedded && (!s.Z.supported() || eN.Z.isCorruptInstallation()) },
        [em.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && e_.Z.hasVideo(t) && !ee.Z.supports(eP.AN.VIDEO) && !eG(em.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eS.ZP.canRedeemPremiumPerks(t) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eG(em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [em.kVF.STREAMER_MODE]: { predicate: () => ea.Z.enabled },
        [em.kVF.DOWNLOAD_NAG]: { predicate: () => !eg.isPlatformEmbedded && !eG(em.kVF.DOWNLOAD_NAG) },
        [em.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != es.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = es.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [em.kVF.SURVEY]: {
            predicate: () => null != ec.Z.getCurrentSurvey(),
            metadata: () => ec.Z.getCurrentSurvey()
        },
        [em.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [em.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [em.kVF.CONNECT_SPOTIFY]: { predicate: () => !G.Z.hasConnectedAccount() && T.ZP.isObservedAppRunning(_.Z.get(em.ABu.SPOTIFY).name) && !eG(em.kVF.CONNECT_SPOTIFY) },
        [em.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.arch) === 'ia32' && (null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [em.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [em.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [em.kVF.CONNECT_PLAYSTATION]: { predicate: () => q.Z.isSuggestedAccountType(em.ABu.PLAYSTATION) && null == q.Z.getAccount(null, em.ABu.PLAYSTATION) && !eG(em.kVF.CONNECT_PLAYSTATION) },
        [em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_2]).length > 0 && !eG(em.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [em.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_0]).length > 0 && !eG(em.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [em.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === em.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = null != t && t.status === em.O0b.CANCELED && !o && i <= 7 && i >= 0 && (0, eS.M5)(n, eA.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(em.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eS.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eS.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [em.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = eC.Z.applicationIdsFetched.has(eA.CL),
                    a = eC.Z.getForApplication(eA.CL),
                    c = null != t ? (0, eS.Af)(t) : null,
                    d = null != c ? eS.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != a &&
                        null != c &&
                        Array.from(a).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    _ = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== em.O0b.PAST_DUE && !o && s && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(em.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eS.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eS.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === em.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && t.status === em.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [em.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(em.xW$.MFA_SMS) && !t.hasFlag(em.xW$.STAFF) && !t.hasFlag(em.xW$.PARTNER) && !eG(em.kVF.MFA_SMS_BACKUP);
            }
        },
        [em.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eO.Z.testModeApplicationId,
            metadata: () => {
                if (null == eO.Z.testModeApplicationId) return {};
                let e = eO.Z.testModeApplicationId,
                    t = h.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [em.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eG(em.kVF.PREMIUM_REACTIVATE) && M.Z.shouldShowReactivateNotice() },
        [em.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eG(em.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != r && eb.Uk.has(r.type),
                    s = null != t && t.status === em.O0b.PAST_DUE && !i && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === em.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, eS.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [em.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eG(em.kVF.POMELO_ELIGIBLE) },
        [em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? $.Z.getGuild(t) : null;
                return (null != t && null != y.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(em.oNc.COMMUNITY)) && !eG(em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: l()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = y.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [em.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eG(em.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== I.Z.getEligibleGuildsForNagActivate().length && (0, E.Lm)() },
        [em.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return F.SI(t);
            }
        },
        [em.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = W.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = w.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= ey.Ot;
            },
            metadata: () => {
                let e = W.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, N.V9)(e) : null };
            }
        },
        [em.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null != (t = eE.Z.paymentSources) ? t : {};
                return v.Z.getIsTargeted() && !(0, eS.I5)(n) && 0 !== Object.keys(i).length;
            }
        },
        [em.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eG(em.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && V.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [em.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => V.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [em.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, x.s)(t, n);
            }
        }
    };
function ez() {
    var e, t, n;
    if (!f.Z.isConnected()) return !1;
    ex = null;
    let i = eu.default.getCurrentUser();
    if (null == i) return !1;
    let r = eI.Z.getPremiumSubscription(),
        l = eh.Z.isLocalizedPromoEnabled,
        o = eo.Z.getGuildId(),
        s = el.Z.getVoiceChannelId(),
        a = null != s ? e_.Z.getVoiceStateForChannel(s) : null;
    for (let n of eR.a ? eH : eB)
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
            ex = (function (e, t) {
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
                                eD(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, ew),
                {
                    type: n,
                    metadata: l
                }
            );
            break;
        }
    if (null != ex) {
        (null == (n = ex.metadata) ? void 0 : n.sampleRate) != null && null == ej[ex.type] && (ej[ex.type] = Math.random() <= ex.metadata.sampleRate);
        let e = !1 === ej[ex.type];
        (eG(ex.type) || e) && (ex = null);
    }
}
function eY() {
    return (ea.Z.enabled || delete ek[em.kVF.STREAMER_MODE], ez());
}
class eK extends (i = o.ZP.Store) {
    initialize() {
        (this.syncWith([ec.Z, ei.Z, Q.Z, eo.Z, Z.Z, ep.Z, Y.Z, q.Z, H.Z, R.Z, w.Z, W.Z], ez), this.waitFor(eu.default, es.Z, $.Z, J.ZP, er.Z, ee.Z, ea.Z, S.Z, eo.Z, ed.Z, G.Z, T.ZP, ei.Z, eT.Z, ef.Z, eO.Z, et.Z, eI.Z, eN.Z, Q.Z, eE.Z, en.Z, Z.Z, eC.Z, ep.Z, q.Z, P.Z, I.Z, j.Z, w.Z, W.Z));
    }
    hasNotice() {
        return null != ex && null != ex.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? ex : null;
    }
    isNoticeDismissed(e) {
        return eG(e);
    }
}
eD(eK, 'displayName', 'NoticeStore');
let eX = new eK(d.Z, {
    CURRENT_USER_UPDATE: ez,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ez,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ez,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ez,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: ez,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ez,
    GUILD_CREATE: ez,
    GUILD_DELETE: ez,
    AUDIO_INPUT_DETECTED: ez,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ez,
    CERTIFIED_DEVICES_SET: ez,
    AUDIO_SET_INPUT_DEVICE: ez,
    AUDIO_SET_OUTPUT_DEVICE: ez,
    MEDIA_ENGINE_DEVICES: ez,
    RTC_CONNECTION_STATE: ez,
    RPC_APP_AUTHENTICATED: ez,
    RPC_APP_DISCONNECTED: ez,
    USER_CONNECTIONS_UPDATE: ez,
    WINDOW_FOCUS: ez,
    INSTANT_INVITE_CREATE: ez,
    INSTANT_INVITE_REVOKE_SUCCESS: ez,
    SPOTIFY_PLAYER_PAUSE: ez,
    RUNNING_GAMES_CHANGE: ez,
    EXPERIMENTS_FETCH_SUCCESS: ez,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ez,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ez,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ez,
    DEVELOPER_TEST_MODE_RESET: ez,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: ez,
    DISPATCH_APPLICATION_INSTALL: ez,
    IMPERSONATE_STOP: ez,
    IMPERSONATE_UPDATE: ez,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === z.default.getId() && ez();
    },
    GUILD_MEMBER_UPDATE: ez,
    SURVEY_FETCHED: ez,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ez,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ez,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ez,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ez,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            t.some((e) => {
                let { userId: t } = e;
                return t !== z.default.getId();
            }) && ez()
        );
    },
    STREAMER_MODE_UPDATE: eY,
    RUNNING_STREAMER_TOOLS_CHANGE: eY,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete ek[em.kVF.DISPATCH_ERROR], ez());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete ek[em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], ez());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ez();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ez();
    },
    NOTICE_SHOW: function (e) {
        ex = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != ex && (null == e.id || e.id === ex.id) && (eV(ex.type, e.isTemporary, e.untilAtLeast), ez());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (eV(t), ez());
    },
    LOGOUT: function () {
        ((ek = {}), (ej = {}), (ex = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ez,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ez,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ez,
    PROXY_BLOCKED_REQUEST: ez,
    REPORT_AV_ERROR: ez
});
