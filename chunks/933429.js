(n.d(t, {
    ZP: () => eK,
    m9: () => eD,
    nA: () => eM,
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
    h = n(726542),
    _ = n(812206),
    E = n(223892),
    p = n(674525),
    I = n(266454),
    g = n(605236),
    f = n(458725),
    C = n(915525),
    O = n(353926),
    S = n(594190),
    T = n(38618),
    m = n(569545),
    N = n(528011),
    R = n(487419),
    A = n(715903),
    y = n(223606),
    b = n(160404),
    P = n(41776),
    D = n(332473),
    v = n(30684),
    M = n(646476),
    k = n(616106),
    U = n(518638),
    L = n(1844),
    j = n(621615),
    x = n(417626),
    Z = n(569984),
    F = n(338247),
    w = n(523255),
    V = n(867003),
    G = n(768419),
    B = n(590415),
    W = n(581883),
    z = n(199902),
    H = n(314897),
    Y = n(881998),
    K = n(463395),
    q = n(592125),
    X = n(553795),
    J = n(427123),
    Q = n(271383),
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
    eh = n(979651),
    e_ = n(853872),
    eE = n(78839),
    ep = n(431),
    eI = n(580130),
    eg = n(695103),
    ef = n(358085),
    eC = n(74538),
    eO = n(922156),
    eS = n(436181),
    eT = n(941128),
    em = n(981631),
    eN = n(188785),
    eR = n(474936),
    eA = n(46140),
    ey = n(231338),
    eb = n(65154);
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
    ev = { [em.kVF.GIFTING_PROMOTION_REMINDER]: a.z.GIFTING_PROMOTION_REMINDER },
    eM = { [em.kVF.OUTBOUND_PROMOTION]: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ek = {
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
    eU = new Set([em.kVF.NO_INPUT_DETECTED, em.kVF.NO_INPUT_DEVICES_DETECTED, em.kVF.STREAMER_MODE, em.kVF.VIDEO_UNSUPPORTED_BROWSER, em.kVF.SPOTIFY_AUTO_PAUSED, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kVF.BLOCKED_BY_PROXY]),
    eL = {},
    ej = {},
    ex = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eZ = null;
function eF(e) {
    return ek[e] + '-untilAtLeast';
}
function ew(e, t, n) {
    if (null == e) return;
    let i = ek[e];
    (null == i || t || c.K.set(i, !0), eU.has(e) && (eL[e] = !0), null != n && null != i) ? c.K.set(eF(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eF(e));
}
function eV(e) {
    if (null == e) return !1;
    let t = ev[e];
    if (null != t) return (0, g.H4)(t).isDismissed;
    let n = eD[e];
    if (null != n) return (0, I.zu)(n);
    let i = ek[e];
    if (null != i) {
        let t = (function (e) {
            let t = c.K.get(eF(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let r = eL[e];
    return !!r || (null != i && '' !== i ? c.K.get(i) : !!eU.has(e) && r);
}
let eG = [em.kVF.QUARANTINED, em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, em.kVF.VIEWING_ROLES, em.kVF.INVITED_TO_SPEAK, em.kVF.LURKING_GUILD, em.kVF.VOICE_DISABLED, em.kVF.NO_INPUT_DEVICES_DETECTED, em.kVF.NO_INPUT_DETECTED, em.kVF.HARDWARE_MUTE, em.kVF.H264_DISABLED, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kVF.SPOTIFY_AUTO_PAUSED, em.kVF.WIN32_DEPRECATED_MESSAGE, em.kVF.WIN7_8_DEPRECATED_MESSAGE, em.kVF.MACOS_19_DEPRECATED_MESSAGE, em.kVF.BLOCKED_BY_PROXY, em.kVF.VOICE_CONNECTED_LAST_SESSION, em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, em.kVF.GUILD_RAID_NOTIFICATION, em.kVF.GIFTING_PROMOTION_REMINDER, em.kVF.QUESTS_PROGRESS_INTERRUPTION, em.kVF.UNCLAIMED_ACCOUNT, em.kVF.POMELO_ELIGIBLE, em.kVF.PENDING_MEMBER, em.kVF.CHECKOUT_RECOVERY_NAGBAR, em.kVF.OUTBOUND_PROMOTION, em.kVF.CORRUPT_INSTALLATION, em.kVF.VIDEO_UNSUPPORTED_BROWSER, em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, em.kVF.STREAMER_MODE, em.kVF.SCHEDULED_MAINTENANCE, em.kVF.BOUNCED_EMAIL_DETECTED, em.kVF.UNVERIFIED_ACCOUNT, em.kVF.PREMIUM_TIER_2_TRIAL_ENDING, em.kVF.PREMIUM_TIER_0_TRIAL_ENDING, em.kVF.PREMIUM_UNCANCEL, em.kVF.PREMIUM_MISSING_PAYMENT, em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, em.kVF.PREMIUM_REACTIVATE, em.kVF.ACTIVATE_SERVER_SUBSCRIPTION, em.kVF.MFA_SMS_BACKUP, em.kVF.APPLICATION_TEST_MODE, em.kVF.DOWNLOAD_NAG, em.kVF.CONNECT_SPOTIFY, em.kVF.CONNECT_PLAYSTATION, em.kVF.SURVEY, em.kVF.SAFETY_USER_SENTIMENT_NAGBAR, em.kVF.BLOCK_USER_FEEDBACK_NAGBAR, em.kVF.IGNORE_USER_FEEDBACK_NAGBAR, em.kVF.REPORT_TO_MOD_SURVEY],
    eB = [em.kVF.QUARANTINED, em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, em.kVF.VIEWING_ROLES, em.kVF.INVITED_TO_SPEAK, em.kVF.LURKING_GUILD, em.kVF.VOICE_DISABLED, em.kVF.NO_INPUT_DETECTED, em.kVF.HARDWARE_MUTE, em.kVF.H264_DISABLED, em.kVF.DISPATCH_ERROR, em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kVF.SPOTIFY_AUTO_PAUSED, em.kVF.BLOCKED_BY_PROXY, em.kVF.VOICE_CONNECTED_LAST_SESSION, em.kVF.PENDING_MEMBER, em.kVF.STREAMER_MODE, em.kVF.SCHEDULED_MAINTENANCE],
    eW = {
        [em.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = M.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = M.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, g.H4)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eV(em.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [em.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, N.g)().show && !eV(em.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = Q.ZP.getMember(n, t.id);
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
        [em.kVF.NO_INPUT_DETECTED]: { predicate: () => C.Z.hasActiveErrorOfType(f.u.NO_AUDIO_INPUT_DETECTED) },
        [em.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.Z.hasActiveErrorOfType(f.u.NO_INPUT_DEVICES) },
        [em.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !ee.Z.getOpenH264() && null != t && eh.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
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
            predicate: () => null != eO.Z.getLastError(),
            metadata: () => ({ error: eO.Z.getLastError() })
        },
        [em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eS.Z.getLastProgress(),
            metadata: () => eS.Z.getLastProgress()
        },
        [em.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => G.Z.wasAutoPaused() },
        [em.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eV(em.kVF.BLOCKED_BY_PROXY) && x.Z.blockedByProxy && j.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
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
                return null != (i = null != r && null != l && !(null == (t = $.Z.getGuild(r)) ? void 0 : t.features.has(em.oNc.GUILD_ONBOARDING)) && (null == (n = Q.ZP.getMember(r, l.id)) ? void 0 : n.isPending)) && i;
            }
        },
        [em.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, U.tq)() },
        [em.kVF.CORRUPT_INSTALLATION]: { predicate: () => ef.isPlatformEmbedded && (!s.Z.supported() || eT.Z.isCorruptInstallation()) },
        [em.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && eh.Z.hasVideo(t) && !ee.Z.supports(eb.AN.VIDEO) && !eV(em.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eC.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eV(em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [em.kVF.STREAMER_MODE]: { predicate: () => ea.Z.enabled },
        [em.kVF.DOWNLOAD_NAG]: { predicate: () => !ef.isPlatformEmbedded && !eV(em.kVF.DOWNLOAD_NAG) },
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
        [em.kVF.CONNECT_SPOTIFY]: { predicate: () => !G.Z.hasConnectedAccount() && S.ZP.isObservedAppRunning(h.Z.get(em.ABu.SPOTIFY).name) && !eV(em.kVF.CONNECT_SPOTIFY) },
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
        [em.kVF.CONNECT_PLAYSTATION]: { predicate: () => X.Z.isSuggestedAccountType(em.ABu.PLAYSTATION) && null == X.Z.getAccount(null, em.ABu.PLAYSTATION) && !eV(em.kVF.CONNECT_PLAYSTATION) },
        [em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_2]).length > 0 && !eV(em.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [em.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_0]).length > 0 && !eV(em.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [em.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === em.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = null != t && t.status === em.O0b.CANCELED && !o && i <= 7 && i >= 0 && (0, eC.M5)(n, eR.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(em.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eC.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eC.ZP.getPremiumType(r) : null,
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
                    s = eI.Z.applicationIdsFetched.has(eR.CL),
                    a = eI.Z.getForApplication(eR.CL),
                    c = null != t ? (0, eC.Af)(t) : null,
                    d = null != c ? eC.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != a &&
                        null != c &&
                        Array.from(a).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    h = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== em.O0b.PAST_DUE && !o && s && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(em.kVF.PREMIUM_MISSING_PAYMENT) && h;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eC.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eC.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? e_.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === em.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
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
                return !eV(em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [em.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(em.xW$.MFA_SMS) && !t.hasFlag(em.xW$.STAFF) && !t.hasFlag(em.xW$.PARTNER) && !eV(em.kVF.MFA_SMS_BACKUP);
            }
        },
        [em.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eg.Z.testModeApplicationId,
            metadata: () => {
                if (null == eg.Z.testModeApplicationId) return {};
                let e = eg.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [em.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eV(em.kVF.PREMIUM_REACTIVATE) && k.Z.shouldShowReactivateNotice() },
        [em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && null != t.paymentSourceId ? e_.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != r && ey.Uk.has(r.type),
                    s = null != t && t.status === em.O0b.PAST_DUE && !i && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
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
                          dismissUntil: (0, eC.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [em.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eV(em.kVF.POMELO_ELIGIBLE) },
        [em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? $.Z.getGuild(t) : null;
                return (null != t && null != y.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(em.oNc.COMMUNITY)) && !eV(em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [em.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eV(em.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.Z.getEligibleGuildsForNagActivate().length && (0, E.Lm)() },
        [em.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return w.SI(t);
            }
        },
        [em.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = z.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, m.V9)(e),
                    n = Z.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eA.Ot;
            },
            metadata: () => {
                let e = z.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, m.V9)(e) : null };
            }
        },
        [em.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null != (t = e_.Z.paymentSources) ? t : {};
                return v.Z.getIsTargeted() && !(0, eC.I5)(n) && 0 !== Object.keys(i).length;
            }
        },
        [em.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eV(em.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && V.L0(),
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
                return null != n && (0, F.s)(t, n);
            }
        }
    };
function ez() {
    var e, t, n;
    if (!T.Z.isConnected()) return !1;
    eZ = null;
    let i = eu.default.getCurrentUser();
    if (null == i) return !1;
    let r = eE.Z.getPremiumSubscription(),
        l = eo.Z.getGuildId(),
        o = el.Z.getVoiceChannelId(),
        s = null != o ? eh.Z.getVoiceStateForChannel(o) : null;
    for (let n of eN.a ? eB : eG)
        if (
            null != eW[n] &&
            eW[n].predicate({
                selectedGuildId: l,
                voiceChannelId: o,
                voiceState: s,
                currentUser: i,
                premiumSubscription: r
            })
        ) {
            let o =
                null == (e = (t = eW[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: i,
                          premiumSubscription: r,
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
                                eP(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, ex),
                {
                    type: n,
                    metadata: o
                }
            );
            break;
        }
    if (null != eZ) {
        (null == (n = eZ.metadata) ? void 0 : n.sampleRate) != null && null == ej[eZ.type] && (ej[eZ.type] = Math.random() <= eZ.metadata.sampleRate);
        let e = !1 === ej[eZ.type];
        (eV(eZ.type) || e) && (eZ = null);
    }
}
function eH() {
    return (ea.Z.enabled || delete eL[em.kVF.STREAMER_MODE], ez());
}
class eY extends (i = o.ZP.Store) {
    initialize() {
        (this.syncWith([ec.Z, ei.Z, J.Z, eo.Z, L.Z, ep.Z, Y.Z, X.Z, W.Z, R.Z, Z.Z, z.Z], ez), this.waitFor(eu.default, es.Z, $.Z, Q.ZP, er.Z, ee.Z, ea.Z, O.Z, eo.Z, ed.Z, G.Z, S.ZP, ei.Z, eO.Z, eS.Z, eg.Z, et.Z, eE.Z, eT.Z, J.Z, e_.Z, en.Z, L.Z, eI.Z, ep.Z, X.Z, P.Z, p.Z, x.Z, Z.Z, z.Z));
    }
    hasNotice() {
        return null != eZ && null != eZ.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? eZ : null;
    }
    isNoticeDismissed(e) {
        return eV(e);
    }
}
eP(eY, 'displayName', 'NoticeStore');
let eK = new eY(d.Z, {
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
        return e.user.id === H.default.getId() && ez();
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
                return t !== H.default.getId();
            }) && ez()
        );
    },
    STREAMER_MODE_UPDATE: eH,
    RUNNING_STREAMER_TOOLS_CHANGE: eH,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete eL[em.kVF.DISPATCH_ERROR], ez());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete eL[em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], ez());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ez();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ez();
    },
    NOTICE_SHOW: function (e) {
        eZ = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eZ && (null == e.id || e.id === eZ.id) && (ew(eZ.type, e.isTemporary, e.untilAtLeast), ez());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (ew(t), ez());
    },
    LOGOUT: function () {
        ((eL = {}), (ej = {}), (eZ = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ez,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ez,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ez,
    PROXY_BLOCKED_REQUEST: ez,
    REPORT_AV_ERROR: ez
});
