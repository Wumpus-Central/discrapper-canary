(n.d(t, {
    ZP: () => eq,
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
    E = n(812206),
    h = n(223892),
    I = n(674525),
    p = n(266454),
    C = n(605236),
    T = n(458725),
    g = n(915525),
    O = n(353926),
    S = n(594190),
    N = n(38618),
    f = n(569545),
    A = n(528011),
    R = n(487419),
    m = n(715903),
    P = n(223606),
    y = n(160404),
    b = n(41776),
    D = n(332473),
    v = n(30684),
    U = n(646476),
    M = n(616106),
    L = n(518638),
    k = n(1844),
    Z = n(621615),
    j = n(417626),
    w = n(569984),
    x = n(338247),
    G = n(523255),
    F = n(867003),
    V = n(768419),
    B = n(590415),
    W = n(581883),
    H = n(199902),
    z = n(314897),
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
    e_ = n(979651),
    eE = n(351402),
    eh = n(853872),
    eI = n(78839),
    ep = n(431),
    eC = n(580130),
    eT = n(695103),
    eg = n(358085),
    eO = n(74538),
    eS = n(922156),
    eN = n(436181),
    ef = n(941128),
    eA = n(981631),
    eR = n(188785),
    em = n(474936),
    eP = n(46140),
    ey = n(231338),
    eb = n(65154);
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
        [eA.kVF.LOCALIZED_PRICING]: a.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eA.kVF.DOWNLOAD_NAG]: a.z.NAGBAR_NOTICE_DOWNLOAD,
        [eA.kVF.CONNECT_SPOTIFY]: a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eA.kVF.CONNECT_PLAYSTATION]: a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eA.kVF.MFA_SMS_BACKUP]: a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eA.kVF.PREMIUM_REACTIVATE]: a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eA.kVF.BOUNCED_EMAIL_DETECTED]: a.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eA.kVF.POMELO_ELIGIBLE]: a.z.NAGBAR_NOTICE_POMELO,
        [eA.kVF.CHECKOUT_RECOVERY_NAGBAR]: a.z.CHECKOUT_RECOVERY_NAGBAR,
        [eA.kVF.REPORT_TO_MOD_SURVEY]: a.z.REPORT_TO_MOD_SURVEY_NOTICE
    },
    eU = { [eA.kVF.GIFTING_PROMOTION_REMINDER]: a.z.GIFTING_PROMOTION_REMINDER },
    eM = { [eA.kVF.OUTBOUND_PROMOTION]: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eL = {
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eA.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eA.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eA.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eA.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eA.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [eA.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    ek = new Set([eA.kVF.NO_INPUT_DETECTED, eA.kVF.NO_INPUT_DEVICES_DETECTED, eA.kVF.STREAMER_MODE, eA.kVF.VIDEO_UNSUPPORTED_BROWSER, eA.kVF.SPOTIFY_AUTO_PAUSED, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eA.kVF.BLOCKED_BY_PROXY]),
    eZ = {},
    ej = {},
    ew = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    ex = null;
function eG(e) {
    return eL[e] + '-untilAtLeast';
}
function eF(e, t, n) {
    if (null == e) return;
    let i = eL[e];
    (null == i || t || c.K.set(i, !0), ek.has(e) && (eZ[e] = !0), null != n && null != i) ? c.K.set(eG(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eG(e));
}
function eV(e) {
    if (null == e) return !1;
    let t = eU[e];
    if (null != t) return (0, C.H4)(t).isDismissed;
    let n = ev[e];
    if (null != n) return (0, p.zu)(n);
    let i = eL[e];
    if (null != i) {
        let t = (function (e) {
            let t = c.K.get(eG(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let r = eZ[e];
    return !!r || (null != i && '' !== i ? c.K.get(i) : !!ek.has(e) && r);
}
let eB = [eA.kVF.QUARANTINED, eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eA.kVF.VIEWING_ROLES, eA.kVF.INVITED_TO_SPEAK, eA.kVF.LURKING_GUILD, eA.kVF.VOICE_DISABLED, eA.kVF.NO_INPUT_DEVICES_DETECTED, eA.kVF.NO_INPUT_DETECTED, eA.kVF.HARDWARE_MUTE, eA.kVF.H264_DISABLED, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eA.kVF.SPOTIFY_AUTO_PAUSED, eA.kVF.WIN32_DEPRECATED_MESSAGE, eA.kVF.WIN7_8_DEPRECATED_MESSAGE, eA.kVF.MACOS_19_DEPRECATED_MESSAGE, eA.kVF.BLOCKED_BY_PROXY, eA.kVF.VOICE_CONNECTED_LAST_SESSION, eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eA.kVF.GUILD_RAID_NOTIFICATION, eA.kVF.GIFTING_PROMOTION_REMINDER, eA.kVF.QUESTS_PROGRESS_INTERRUPTION, eA.kVF.UNCLAIMED_ACCOUNT, eA.kVF.POMELO_ELIGIBLE, eA.kVF.PENDING_MEMBER, eA.kVF.CHECKOUT_RECOVERY_NAGBAR, eA.kVF.OUTBOUND_PROMOTION, eA.kVF.CORRUPT_INSTALLATION, eA.kVF.VIDEO_UNSUPPORTED_BROWSER, eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eA.kVF.STREAMER_MODE, eA.kVF.SCHEDULED_MAINTENANCE, eA.kVF.BOUNCED_EMAIL_DETECTED, eA.kVF.UNVERIFIED_ACCOUNT, eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eA.kVF.PREMIUM_UNCANCEL, eA.kVF.PREMIUM_MISSING_PAYMENT, eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eA.kVF.PREMIUM_REACTIVATE, eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eA.kVF.MFA_SMS_BACKUP, eA.kVF.APPLICATION_TEST_MODE, eA.kVF.LOCALIZED_PRICING, eA.kVF.DOWNLOAD_NAG, eA.kVF.CONNECT_SPOTIFY, eA.kVF.CONNECT_PLAYSTATION, eA.kVF.SURVEY, eA.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR, eA.kVF.IGNORE_USER_FEEDBACK_NAGBAR, eA.kVF.REPORT_TO_MOD_SURVEY],
    eW = [eA.kVF.QUARANTINED, eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eA.kVF.VIEWING_ROLES, eA.kVF.INVITED_TO_SPEAK, eA.kVF.LURKING_GUILD, eA.kVF.VOICE_DISABLED, eA.kVF.NO_INPUT_DETECTED, eA.kVF.HARDWARE_MUTE, eA.kVF.H264_DISABLED, eA.kVF.DISPATCH_ERROR, eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eA.kVF.SPOTIFY_AUTO_PAUSED, eA.kVF.BLOCKED_BY_PROXY, eA.kVF.VOICE_CONNECTED_LAST_SESSION, eA.kVF.PENDING_MEMBER, eA.kVF.STREAMER_MODE, eA.kVF.SCHEDULED_MAINTENANCE],
    eH = {
        [eA.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = U.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = U.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, C.H4)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eV(eA.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eA.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, A.g)().show && !eV(eA.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [eA.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = Q.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, m.EY)(i);
            }
        },
        [eA.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eA.xW$.QUARANTINED);
            }
        },
        [eA.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return y.Z.isViewingRoles(t);
            }
        },
        [eA.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, B.gf)(t) === B.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eA.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && b.Z.isLurking(t);
            }
        },
        [eA.kVF.VOICE_DISABLED]: { predicate: () => null != er.Z.getRemoteDisconnectVoiceChannelId() },
        [eA.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != er.Z.getLastSessionVoiceChannelId() },
        [eA.kVF.NO_INPUT_DETECTED]: { predicate: () => g.Z.hasActiveErrorOfType(T.u.NO_AUDIO_INPUT_DETECTED) },
        [eA.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => g.Z.hasActiveErrorOfType(T.u.NO_INPUT_DEVICES) },
        [eA.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !ee.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eA.kVF.HARDWARE_MUTE]: {
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
        [eA.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eS.Z.getLastError(),
            metadata: () => ({ error: eS.Z.getLastError() })
        },
        [eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eN.Z.getLastProgress(),
            metadata: () => eN.Z.getLastProgress()
        },
        [eA.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => V.Z.wasAutoPaused() },
        [eA.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eV(eA.kVF.BLOCKED_BY_PROXY) && j.Z.blockedByProxy && Z.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eA.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eA.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null != (i = null != r && null != l && !(null == (t = $.Z.getGuild(r)) ? void 0 : t.features.has(eA.oNc.GUILD_ONBOARDING)) && (null == (n = Q.ZP.getMember(r, l.id)) ? void 0 : n.isPending)) && i;
            }
        },
        [eA.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, L.tq)() },
        [eA.kVF.CORRUPT_INSTALLATION]: { predicate: () => eg.isPlatformEmbedded && (!s.Z.supported() || ef.Z.isCorruptInstallation()) },
        [eA.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && e_.Z.hasVideo(t) && !ee.Z.supports(eb.AN.VIDEO) && !eV(eA.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eO.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eV(eA.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eA.kVF.STREAMER_MODE]: { predicate: () => ea.Z.enabled },
        [eA.kVF.DOWNLOAD_NAG]: { predicate: () => !eg.isPlatformEmbedded && !eV(eA.kVF.DOWNLOAD_NAG) },
        [eA.kVF.SCHEDULED_MAINTENANCE]: {
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
        [eA.kVF.SURVEY]: {
            predicate: () => null != ec.Z.getCurrentSurvey(),
            metadata: () => ec.Z.getCurrentSurvey()
        },
        [eA.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eA.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eA.kVF.CONNECT_SPOTIFY]: { predicate: () => !V.Z.hasConnectedAccount() && S.ZP.isObservedAppRunning(_.Z.get(eA.ABu.SPOTIFY).name) && !eV(eA.kVF.CONNECT_SPOTIFY) },
        [eA.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.arch) === 'ia32' && (null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eA.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eA.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eA.kVF.CONNECT_PLAYSTATION]: { predicate: () => X.Z.isSuggestedAccountType(eA.ABu.PLAYSTATION) && null == X.Z.getAccount(null, eA.ABu.PLAYSTATION) && !eV(eA.kVF.CONNECT_PLAYSTATION) },
        [eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([em.Si.TIER_2]).length > 0 && !eV(eA.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([em.Si.TIER_0]).length > 0 && !eV(eA.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eA.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eA.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = null != t && t.status === eA.O0b.CANCELED && !o && i <= 7 && i >= 0 && (0, eO.M5)(n, em.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eA.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eO.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eO.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eA.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = eC.Z.applicationIdsFetched.has(em.CL),
                    a = eC.Z.getForApplication(em.CL),
                    c = null != t ? (0, eO.Af)(t) : null,
                    d = null != c ? eO.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != a &&
                        null != c &&
                        Array.from(a).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    _ = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== eA.O0b.PAST_DUE && !o && s && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eA.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eO.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eO.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eh.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === eA.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && t.status === eA.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eA.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eA.xW$.MFA_SMS) && !t.hasFlag(eA.xW$.STAFF) && !t.hasFlag(eA.xW$.PARTNER) && !eV(eA.kVF.MFA_SMS_BACKUP);
            }
        },
        [eA.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eT.Z.testModeApplicationId,
            metadata: () => {
                if (null == eT.Z.testModeApplicationId) return {};
                let e = eT.Z.testModeApplicationId,
                    t = E.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eA.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eV(eA.kVF.PREMIUM_REACTIVATE) && M.Z.shouldShowReactivateNotice() },
        [eA.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eV(eA.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && null != t.paymentSourceId ? eh.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != r && ey.Uk.has(r.type),
                    s = null != t && t.status === eA.O0b.PAST_DUE && !i && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === eA.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, eO.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [eA.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eV(eA.kVF.POMELO_ELIGIBLE) },
        [eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? $.Z.getGuild(t) : null;
                return (null != t && null != P.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(eA.oNc.COMMUNITY)) && !eV(eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: l()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = P.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eV(eA.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== I.Z.getEligibleGuildsForNagActivate().length && (0, h.Lm)() },
        [eA.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return G.SI(t);
            }
        },
        [eA.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = H.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, f.V9)(e),
                    n = w.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eP.Ot;
            },
            metadata: () => {
                let e = H.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, f.V9)(e) : null };
            }
        },
        [eA.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null != (t = eh.Z.paymentSources) ? t : {};
                return v.Z.getIsTargeted() && !(0, eO.I5)(n) && 0 !== Object.keys(i).length;
            }
        },
        [eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eV(eA.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && F.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [eA.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => F.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [eA.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, x.s)(t, n);
            }
        }
    };
function ez() {
    var e, t, n;
    if (!N.Z.isConnected()) return !1;
    ex = null;
    let i = eu.default.getCurrentUser();
    if (null == i) return !1;
    let r = eI.Z.getPremiumSubscription(),
        l = eE.Z.isLocalizedPromoEnabled,
        o = eo.Z.getGuildId(),
        s = el.Z.getVoiceChannelId(),
        a = null != s ? e_.Z.getVoiceStateForChannel(s) : null;
    for (let n of eR.a ? eW : eB)
        if (
            null != eH[n] &&
            eH[n].predicate({
                selectedGuildId: o,
                voiceChannelId: s,
                voiceState: a,
                currentUser: i,
                premiumSubscription: r,
                isLocalizedPromoEnabled: l
            })
        ) {
            let l =
                null == (e = (t = eH[n]).metadata)
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
        (eV(ex.type) || e) && (ex = null);
    }
}
function eY() {
    return (ea.Z.enabled || delete eZ[eA.kVF.STREAMER_MODE], ez());
}
class eK extends (i = o.ZP.Store) {
    initialize() {
        (this.syncWith([ec.Z, ei.Z, J.Z, eo.Z, k.Z, ep.Z, Y.Z, X.Z, W.Z, R.Z, w.Z, H.Z], ez), this.waitFor(eu.default, es.Z, $.Z, Q.ZP, er.Z, ee.Z, ea.Z, O.Z, eo.Z, ed.Z, V.Z, S.ZP, ei.Z, eS.Z, eN.Z, eT.Z, et.Z, eI.Z, ef.Z, J.Z, eh.Z, en.Z, k.Z, eC.Z, ep.Z, X.Z, b.Z, I.Z, j.Z, w.Z, H.Z));
    }
    hasNotice() {
        return null != ex && null != ex.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? ex : null;
    }
    isNoticeDismissed(e) {
        return eV(e);
    }
}
eD(eK, 'displayName', 'NoticeStore');
let eq = new eK(d.Z, {
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
        return (delete eZ[eA.kVF.DISPATCH_ERROR], ez());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete eZ[eA.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], ez());
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
        return null != ex && (null == e.id || e.id === ex.id) && (eF(ex.type, e.isTemporary, e.untilAtLeast), ez());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (eF(t), ez());
    },
    LOGOUT: function () {
        ((eZ = {}), (ej = {}), (ex = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ez,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ez,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ez,
    PROXY_BLOCKED_REQUEST: ez,
    REPORT_AV_ERROR: ez
});
