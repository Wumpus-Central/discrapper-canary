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
    h = n(812206),
    E = n(223892),
    I = n(674525),
    p = n(266454),
    C = n(605236),
    g = n(458725),
    O = n(915525),
    T = n(353926),
    S = n(594190),
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
    k = n(1844),
    Z = n(621615),
    j = n(417626),
    w = n(569984),
    x = n(338247),
    F = n(523255),
    V = n(867003),
    G = n(768419),
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
    eh = n(853872),
    eE = n(78839),
    eI = n(431),
    ep = n(580130),
    eC = n(695103),
    eg = n(358085),
    eO = n(74538),
    eT = n(922156),
    eS = n(436181),
    ef = n(941128),
    eN = n(981631),
    em = n(188785),
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
        [eN.kVF.DOWNLOAD_NAG]: a.z.NAGBAR_NOTICE_DOWNLOAD,
        [eN.kVF.CONNECT_SPOTIFY]: a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eN.kVF.CONNECT_PLAYSTATION]: a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eN.kVF.MFA_SMS_BACKUP]: a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eN.kVF.PREMIUM_REACTIVATE]: a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eN.kVF.BOUNCED_EMAIL_DETECTED]: a.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eN.kVF.POMELO_ELIGIBLE]: a.z.NAGBAR_NOTICE_POMELO,
        [eN.kVF.CHECKOUT_RECOVERY_NAGBAR]: a.z.CHECKOUT_RECOVERY_NAGBAR,
        [eN.kVF.REPORT_TO_MOD_SURVEY]: a.z.REPORT_TO_MOD_SURVEY_NOTICE
    },
    ev = { [eN.kVF.GIFTING_PROMOTION_REMINDER]: a.z.GIFTING_PROMOTION_REMINDER },
    eU = { [eN.kVF.OUTBOUND_PROMOTION]: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eM = {
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
    eL = new Set([eN.kVF.NO_INPUT_DETECTED, eN.kVF.NO_INPUT_DEVICES_DETECTED, eN.kVF.STREAMER_MODE, eN.kVF.VIDEO_UNSUPPORTED_BROWSER, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.BLOCKED_BY_PROXY]),
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
function eF(e, t, n) {
    if (null == e) return;
    let i = eM[e];
    (null == i || t || c.K.set(i, !0), eL.has(e) && (ek[e] = !0), null != n && null != i) ? c.K.set(ex(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(ex(e));
}
function eV(e) {
    if (null == e) return !1;
    let t = ev[e];
    if (null != t) return (0, C.H4)(t).isDismissed;
    let n = eD[e];
    if (null != n) return (0, p.zu)(n);
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
let eG = [eN.kVF.QUARANTINED, eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eN.kVF.VIEWING_ROLES, eN.kVF.INVITED_TO_SPEAK, eN.kVF.LURKING_GUILD, eN.kVF.VOICE_DISABLED, eN.kVF.NO_INPUT_DEVICES_DETECTED, eN.kVF.NO_INPUT_DETECTED, eN.kVF.HARDWARE_MUTE, eN.kVF.H264_DISABLED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.WIN32_DEPRECATED_MESSAGE, eN.kVF.WIN7_8_DEPRECATED_MESSAGE, eN.kVF.MACOS_19_DEPRECATED_MESSAGE, eN.kVF.BLOCKED_BY_PROXY, eN.kVF.VOICE_CONNECTED_LAST_SESSION, eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eN.kVF.GUILD_RAID_NOTIFICATION, eN.kVF.GIFTING_PROMOTION_REMINDER, eN.kVF.QUESTS_PROGRESS_INTERRUPTION, eN.kVF.UNCLAIMED_ACCOUNT, eN.kVF.POMELO_ELIGIBLE, eN.kVF.PENDING_MEMBER, eN.kVF.CHECKOUT_RECOVERY_NAGBAR, eN.kVF.OUTBOUND_PROMOTION, eN.kVF.CORRUPT_INSTALLATION, eN.kVF.VIDEO_UNSUPPORTED_BROWSER, eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eN.kVF.STREAMER_MODE, eN.kVF.SCHEDULED_MAINTENANCE, eN.kVF.BOUNCED_EMAIL_DETECTED, eN.kVF.UNVERIFIED_ACCOUNT, eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eN.kVF.PREMIUM_UNCANCEL, eN.kVF.PREMIUM_MISSING_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eN.kVF.PREMIUM_REACTIVATE, eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eN.kVF.MFA_SMS_BACKUP, eN.kVF.APPLICATION_TEST_MODE, eN.kVF.DOWNLOAD_NAG, eN.kVF.CONNECT_SPOTIFY, eN.kVF.CONNECT_PLAYSTATION, eN.kVF.SURVEY, eN.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR, eN.kVF.IGNORE_USER_FEEDBACK_NAGBAR, eN.kVF.REPORT_TO_MOD_SURVEY],
    eB = [eN.kVF.QUARANTINED, eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eN.kVF.VIEWING_ROLES, eN.kVF.INVITED_TO_SPEAK, eN.kVF.LURKING_GUILD, eN.kVF.VOICE_DISABLED, eN.kVF.NO_INPUT_DETECTED, eN.kVF.HARDWARE_MUTE, eN.kVF.H264_DISABLED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.BLOCKED_BY_PROXY, eN.kVF.VOICE_CONNECTED_LAST_SESSION, eN.kVF.PENDING_MEMBER, eN.kVF.STREAMER_MODE, eN.kVF.SCHEDULED_MAINTENANCE],
    eW = {
        [eN.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = U.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = U.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, C.H4)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eV(eN.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eN.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, m.g)().show && !eV(eN.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = Q.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, A.EY)(i);
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
                return b.Z.isViewingRoles(t);
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
        [eN.kVF.VOICE_DISABLED]: { predicate: () => null != er.Z.getRemoteDisconnectVoiceChannelId() },
        [eN.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != er.Z.getLastSessionVoiceChannelId() },
        [eN.kVF.NO_INPUT_DETECTED]: { predicate: () => O.Z.hasActiveErrorOfType(g.u.NO_AUDIO_INPUT_DETECTED) },
        [eN.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => O.Z.hasActiveErrorOfType(g.u.NO_INPUT_DEVICES) },
        [eN.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !ee.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eN.kVF.HARDWARE_MUTE]: {
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
        [eN.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eT.Z.getLastError(),
            metadata: () => ({ error: eT.Z.getLastError() })
        },
        [eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eS.Z.getLastProgress(),
            metadata: () => eS.Z.getLastProgress()
        },
        [eN.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => G.Z.wasAutoPaused() },
        [eN.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eV(eN.kVF.BLOCKED_BY_PROXY) && j.Z.blockedByProxy && Z.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eN.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eN.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null != (i = null != r && null != l && !(null == (t = $.Z.getGuild(r)) ? void 0 : t.features.has(eN.oNc.GUILD_ONBOARDING)) && (null == (n = Q.ZP.getMember(r, l.id)) ? void 0 : n.isPending)) && i;
            }
        },
        [eN.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, L.tq)() },
        [eN.kVF.CORRUPT_INSTALLATION]: { predicate: () => eg.isPlatformEmbedded && (!s.Z.supported() || ef.Z.isCorruptInstallation()) },
        [eN.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && e_.Z.hasVideo(t) && !ee.Z.supports(eb.AN.VIDEO) && !eV(eN.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eO.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eV(eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eN.kVF.STREAMER_MODE]: { predicate: () => ea.Z.enabled },
        [eN.kVF.DOWNLOAD_NAG]: { predicate: () => !eg.isPlatformEmbedded && !eV(eN.kVF.DOWNLOAD_NAG) },
        [eN.kVF.SCHEDULED_MAINTENANCE]: {
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
        [eN.kVF.CONNECT_SPOTIFY]: { predicate: () => !G.Z.hasConnectedAccount() && S.ZP.isObservedAppRunning(_.Z.get(eN.ABu.SPOTIFY).name) && !eV(eN.kVF.CONNECT_SPOTIFY) },
        [eN.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.arch) === 'ia32' && (null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eN.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eN.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eN.kVF.CONNECT_PLAYSTATION]: { predicate: () => X.Z.isSuggestedAccountType(eN.ABu.PLAYSTATION) && null == X.Z.getAccount(null, eN.ABu.PLAYSTATION) && !eV(eN.kVF.CONNECT_PLAYSTATION) },
        [eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_2]).length > 0 && !eV(eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_0]).length > 0 && !eV(eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eN.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eN.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = null != t && t.status === eN.O0b.CANCELED && !o && i <= 7 && i >= 0 && (0, eO.M5)(n, eR.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eN.kVF.PREMIUM_UNCANCEL) && s;
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
        [eN.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = ep.Z.applicationIdsFetched.has(eR.CL),
                    a = ep.Z.getForApplication(eR.CL),
                    c = null != t ? (0, eO.Af)(t) : null,
                    d = null != c ? eO.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != a &&
                        null != c &&
                        Array.from(a).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    _ = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== eN.O0b.PAST_DUE && !o && s && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eN.kVF.PREMIUM_MISSING_PAYMENT) && _;
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
        [eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eh.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === eN.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && t.status === eN.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eN.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eN.xW$.MFA_SMS) && !t.hasFlag(eN.xW$.STAFF) && !t.hasFlag(eN.xW$.PARTNER) && !eV(eN.kVF.MFA_SMS_BACKUP);
            }
        },
        [eN.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eC.Z.testModeApplicationId,
            metadata: () => {
                if (null == eC.Z.testModeApplicationId) return {};
                let e = eC.Z.testModeApplicationId,
                    t = h.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eN.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eV(eN.kVF.PREMIUM_REACTIVATE) && M.Z.shouldShowReactivateNotice() },
        [eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && null != t.paymentSourceId ? eh.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != r && ey.Uk.has(r.type),
                    s = null != t && t.status === eN.O0b.PAST_DUE && !i && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
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
                          dismissUntil: (0, eO.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [eN.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eV(eN.kVF.POMELO_ELIGIBLE) },
        [eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? $.Z.getGuild(t) : null;
                return (null != t && null != y.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(eN.oNc.COMMUNITY)) && !eV(eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eV(eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== I.Z.getEligibleGuildsForNagActivate().length && (0, E.Lm)() },
        [eN.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return F.SI(t);
            }
        },
        [eN.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = H.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = w.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eA.Ot;
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
                    i = null != (t = eh.Z.paymentSources) ? t : {};
                return v.Z.getIsTargeted() && !(0, eO.I5)(n) && 0 !== Object.keys(i).length;
            }
        },
        [eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eV(eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && V.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [eN.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => V.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [eN.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, x.s)(t, n);
            }
        }
    };
function eH() {
    var e, t, n;
    if (!f.Z.isConnected()) return !1;
    ew = null;
    let i = eu.default.getCurrentUser();
    if (null == i) return !1;
    let r = eE.Z.getPremiumSubscription(),
        l = eo.Z.getGuildId(),
        o = el.Z.getVoiceChannelId(),
        s = null != o ? e_.Z.getVoiceStateForChannel(o) : null;
    for (let n of em.a ? eB : eG)
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
                                eP(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, ej),
                {
                    type: n,
                    metadata: o
                }
            );
            break;
        }
    if (null != ew) {
        (null == (n = ew.metadata) ? void 0 : n.sampleRate) != null && null == eZ[ew.type] && (eZ[ew.type] = Math.random() <= ew.metadata.sampleRate);
        let e = !1 === eZ[ew.type];
        (eV(ew.type) || e) && (ew = null);
    }
}
function ez() {
    return (ea.Z.enabled || delete ek[eN.kVF.STREAMER_MODE], eH());
}
class eY extends (i = o.ZP.Store) {
    initialize() {
        (this.syncWith([ec.Z, ei.Z, J.Z, eo.Z, k.Z, eI.Z, Y.Z, X.Z, W.Z, R.Z, w.Z, H.Z], eH), this.waitFor(eu.default, es.Z, $.Z, Q.ZP, er.Z, ee.Z, ea.Z, T.Z, eo.Z, ed.Z, G.Z, S.ZP, ei.Z, eT.Z, eS.Z, eC.Z, et.Z, eE.Z, ef.Z, J.Z, eh.Z, en.Z, k.Z, ep.Z, eI.Z, X.Z, P.Z, I.Z, j.Z, w.Z, H.Z));
    }
    hasNotice() {
        return null != ew && null != ew.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? ew : null;
    }
    isNoticeDismissed(e) {
        return eV(e);
    }
}
eP(eY, 'displayName', 'NoticeStore');
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
        return (delete ek[eN.kVF.DISPATCH_ERROR], eH());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete ek[eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH());
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
        return null != ew && (null == e.id || e.id === ew.id) && (eF(ew.type, e.isTemporary, e.untilAtLeast), eH());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (eF(t), eH());
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
