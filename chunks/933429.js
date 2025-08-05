(n.d(t, {
    ZP: () => eJ,
    m9: () => eM,
    nA: () => eL,
    o: () => ek,
    zD: () => eU
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
    T = n(594190),
    S = n(38618),
    N = n(569545),
    m = n(528011),
    R = n(487419),
    A = n(715903),
    y = n(223606),
    b = n(160404),
    P = n(41776),
    D = n(332473),
    v = n(30684),
    M = n(646476),
    k = n(616106),
    U = n(475580),
    L = n(96320),
    j = n(518638),
    x = n(1844),
    Z = n(621615),
    F = n(417626),
    w = n(569984),
    G = n(338247),
    V = n(523255),
    B = n(867003),
    W = n(768419),
    z = n(590415),
    H = n(581883),
    Y = n(199902),
    K = n(314897),
    X = n(881998),
    q = n(463395),
    J = n(592125),
    Q = n(553795),
    $ = n(427123),
    ee = n(271383),
    et = n(430824),
    en = n(131951),
    ei = n(292959),
    er = n(496675),
    el = n(571474),
    eo = n(19780),
    es = n(944486),
    ea = n(914010),
    ec = n(215427),
    ed = n(246946),
    eu = n(558724),
    eh = n(23434),
    e_ = n(594174),
    eE = n(979651),
    ep = n(853872),
    eI = n(78839),
    eg = n(431),
    ef = n(580130),
    eC = n(695103),
    eO = n(358085),
    eT = n(74538),
    eS = n(922156),
    eN = n(436181),
    em = n(941128),
    eR = n(981631),
    eA = n(188785),
    ey = n(474936),
    eb = n(46140),
    eP = n(231338),
    eD = n(65154);
function ev(e, t, n) {
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
let eM = {
        [eR.kVF.DOWNLOAD_NAG]: a.z.NAGBAR_NOTICE_DOWNLOAD,
        [eR.kVF.CONNECT_SPOTIFY]: a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eR.kVF.CONNECT_PLAYSTATION]: a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eR.kVF.MFA_SMS_BACKUP]: a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eR.kVF.PREMIUM_REACTIVATE]: a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eR.kVF.BOUNCED_EMAIL_DETECTED]: a.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eR.kVF.POMELO_ELIGIBLE]: a.z.NAGBAR_NOTICE_POMELO,
        [eR.kVF.CHECKOUT_RECOVERY_NAGBAR]: a.z.CHECKOUT_RECOVERY_NAGBAR,
        [eR.kVF.REPORT_TO_MOD_SURVEY]: a.z.REPORT_TO_MOD_SURVEY_NOTICE
    },
    ek = { [eR.kVF.GIFTING_PROMOTION_REMINDER]: a.z.GIFTING_PROMOTION_REMINDER },
    eU = {
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: a.z.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eR.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: a.z.NAGBAR_NOTICE_OFFER_EXPIRING
    },
    eL = { [eR.kVF.OUTBOUND_PROMOTION]: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ej = {
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eR.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eR.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eR.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eR.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eR.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eR.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: 'hidePremiumTier2DiscountOfferEndingNotice',
        [eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [eR.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    ex = new Set([eR.kVF.NO_INPUT_DETECTED, eR.kVF.NO_INPUT_DEVICES_DETECTED, eR.kVF.STREAMER_MODE, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.BLOCKED_BY_PROXY]),
    eZ = {},
    eF = {},
    ew = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eG = null;
function eV(e) {
    return ej[e] + '-untilAtLeast';
}
function eB(e, t, n) {
    if (null == e) return;
    let i = ej[e];
    (null == i || t || c.K.set(i, !0), ex.has(e) && (eZ[e] = !0), null != n && null != i) ? c.K.set(eV(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eV(e));
}
function eW(e) {
    if (null == e) return !1;
    let { useRecurringNotices: t } = L.b.getCurrentConfig({ location: 'NoticeStore.isNoticeDismissed' });
    if (t && null != eU[e]) return !1;
    let n = ek[e];
    if (null != n) return (0, g.H4)(n).isDismissed;
    let i = eM[e];
    if (null != i) return (0, I.zu)(i);
    let r = ej[e];
    if (null != r) {
        let t = (function (e) {
            let t = c.K.get(eV(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let o = eZ[e];
    return !!o || (null != r && '' !== r ? c.K.get(r) : !!ex.has(e) && o);
}
let ez = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DEVICES_DETECTED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.WIN32_DEPRECATED_MESSAGE, eR.kVF.WIN7_8_DEPRECATED_MESSAGE, eR.kVF.MACOS_19_DEPRECATED_MESSAGE, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eR.kVF.GUILD_RAID_NOTIFICATION, eR.kVF.GIFTING_PROMOTION_REMINDER, eR.kVF.QUESTS_PROGRESS_INTERRUPTION, eR.kVF.UNCLAIMED_ACCOUNT, eR.kVF.POMELO_ELIGIBLE, eR.kVF.PENDING_MEMBER, eR.kVF.CHECKOUT_RECOVERY_NAGBAR, eR.kVF.OUTBOUND_PROMOTION, eR.kVF.CORRUPT_INSTALLATION, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE, eR.kVF.BOUNCED_EMAIL_DETECTED, eR.kVF.UNVERIFIED_ACCOUNT, eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eR.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING, eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eR.kVF.PREMIUM_UNCANCEL, eR.kVF.PREMIUM_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eR.kVF.PREMIUM_REACTIVATE, eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eR.kVF.MFA_SMS_BACKUP, eR.kVF.APPLICATION_TEST_MODE, eR.kVF.DOWNLOAD_NAG, eR.kVF.CONNECT_SPOTIFY, eR.kVF.CONNECT_PLAYSTATION, eR.kVF.SURVEY, eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR, eR.kVF.IGNORE_USER_FEEDBACK_NAGBAR, eR.kVF.REPORT_TO_MOD_SURVEY],
    eH = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.PENDING_MEMBER, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE],
    eY = {
        [eR.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = M.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = M.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, g.H4)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eW(eR.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eR.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, m.g)().show && !eW(eR.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = ee.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, A.EY)(i);
            }
        },
        [eR.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eR.xW$.QUARANTINED);
            }
        },
        [eR.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return b.Z.isViewingRoles(t);
            }
        },
        [eR.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, z.gf)(t) === z.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eR.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.isLurking(t);
            }
        },
        [eR.kVF.VOICE_DISABLED]: { predicate: () => null != eo.Z.getRemoteDisconnectVoiceChannelId() },
        [eR.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eo.Z.getLastSessionVoiceChannelId() },
        [eR.kVF.NO_INPUT_DETECTED]: { predicate: () => C.Z.hasActiveErrorOfType(f.u.NO_AUDIO_INPUT_DETECTED) },
        [eR.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.Z.hasActiveErrorOfType(f.u.NO_INPUT_DEVICES) },
        [eR.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = J.Z.getChannel(t);
                return !en.Z.getOpenH264() && null != t && eE.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eR.kVF.HARDWARE_MUTE]: {
            predicate: () => eo.Z.isConnected() && en.Z.isHardwareMute() && en.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = en.Z.getInputDeviceId(),
                    t = q.Z.getVendor(e),
                    n = q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eR.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eS.Z.getLastError(),
            metadata: () => ({ error: eS.Z.getLastError() })
        },
        [eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eN.Z.getLastProgress(),
            metadata: () => eN.Z.getLastProgress()
        },
        [eR.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => W.Z.wasAutoPaused() },
        [eR.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eW(eR.kVF.BLOCKED_BY_PROXY) && F.Z.blockedByProxy && Z.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eR.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eR.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null != (i = null != r && null != l && !(null == (t = et.Z.getGuild(r)) ? void 0 : t.features.has(eR.oNc.GUILD_ONBOARDING)) && (null == (n = ee.ZP.getMember(r, l.id)) ? void 0 : n.isPending)) && i;
            }
        },
        [eR.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, j.tq)() },
        [eR.kVF.CORRUPT_INSTALLATION]: { predicate: () => eO.isPlatformEmbedded && (!s.Z.supported() || em.Z.isCorruptInstallation()) },
        [eR.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && eE.Z.hasVideo(t) && !en.Z.supports(eD.AN.VIDEO) && !eW(eR.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eT.ZP.canRedeemPremiumPerks(t) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eW(eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eR.kVF.STREAMER_MODE]: { predicate: () => ed.Z.enabled },
        [eR.kVF.DOWNLOAD_NAG]: { predicate: () => !eO.isPlatformEmbedded && !eW(eR.kVF.DOWNLOAD_NAG) },
        [eR.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != ec.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = ec.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eR.kVF.SURVEY]: {
            predicate: () => null != eu.Z.getCurrentSurvey(),
            metadata: () => eu.Z.getCurrentSurvey()
        },
        [eR.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eR.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eR.kVF.CONNECT_SPOTIFY]: { predicate: () => !W.Z.hasConnectedAccount() && T.ZP.isObservedAppRunning(h.Z.get(eR.ABu.SPOTIFY).name) && !eW(eR.kVF.CONNECT_SPOTIFY) },
        [eR.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.arch) === 'ia32' && (null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eR.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eR.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === u.Z || void 0 === u.Z ? void 0 : u.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === u.Z || void 0 === u.Z ? void 0 : u.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eR.kVF.CONNECT_PLAYSTATION]: { predicate: () => Q.Z.isSuggestedAccountType(eR.ABu.PLAYSTATION) && null == Q.Z.getAccount(null, eR.ABu.PLAYSTATION) && !eW(eR.kVF.CONNECT_PLAYSTATION) },
        [eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eg.Z.getAlmostExpiringTrialOffers([ey.Si.TIER_2]).length > 0 && !eW(eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eg.Z.getAlmostExpiringTrialOffers([ey.Si.TIER_0]).length > 0 && !eW(eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eR.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () => {
                let { enabled: e } = U.D.getCurrentConfig({ location: 'NoticeStore.NoticeDefinition.predicate' });
                return !!e && eg.Z.getAlmostExpiringDiscountOffers([ey.Si.TIER_2]).length > 0 && !eW(eR.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING);
            }
        },
        [eR.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eR.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = null != t && t.status === eR.O0b.CANCELED && !o && i <= 7 && i >= 0 && (0, eT.M5)(n, ey.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eR.kVF.PREMIUM_UNCANCEL) && s;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eT.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eT.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eR.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = ef.Z.applicationIdsFetched.has(ey.CL),
                    a = ef.Z.getForApplication(ey.CL),
                    c = null != t ? (0, eT.Af)(t) : null,
                    d = null != c ? eT.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != a &&
                        null != c &&
                        Array.from(a).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    h = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== eR.O0b.PAST_DUE && !o && s && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eR.kVF.PREMIUM_MISSING_PAYMENT) && h;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = null != n ? (null == (t = (0, eT.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? eT.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === eR.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && t.status === eR.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eR.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eR.xW$.MFA_SMS) && !t.hasFlag(eR.xW$.STAFF) && !t.hasFlag(eR.xW$.PARTNER) && !eW(eR.kVF.MFA_SMS_BACKUP);
            }
        },
        [eR.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eC.Z.testModeApplicationId,
            metadata: () => {
                if (null == eC.Z.testModeApplicationId) return {};
                let e = eC.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eR.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eW(eR.kVF.PREMIUM_REACTIVATE) && k.Z.shouldShowReactivateNotice() },
        [eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != r && eP.Uk.has(r.type),
                    s = null != t && t.status === eR.O0b.PAST_DUE && !i && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === eR.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, eT.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [eR.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eW(eR.kVF.POMELO_ELIGIBLE) },
        [eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? et.Z.getGuild(t) : null;
                return (null != t && null != y.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(eR.oNc.COMMUNITY)) && !eW(eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eW(eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.Z.getEligibleGuildsForNagActivate().length && (0, E.Lm)() },
        [eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return V.SI(t);
            }
        },
        [eR.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = Y.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = w.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eb.Ot;
            },
            metadata: () => {
                let e = Y.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, N.V9)(e) : null };
            }
        },
        [eR.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null != (t = ep.Z.paymentSources) ? t : {};
                return v.Z.getIsTargeted() && !(0, eT.I5)(n) && 0 !== Object.keys(i).length;
            }
        },
        [eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eW(eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && B.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [eR.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => B.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [eR.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, G.s)(t, n);
            }
        }
    };
function eK() {
    var e, t, n;
    if (!S.Z.isConnected()) return !1;
    eG = null;
    let i = e_.default.getCurrentUser();
    if (null == i) return !1;
    let r = eI.Z.getPremiumSubscription(),
        l = ea.Z.getGuildId(),
        o = es.Z.getVoiceChannelId(),
        s = null != o ? eE.Z.getVoiceStateForChannel(o) : null;
    for (let n of eA.a ? eH : ez)
        if (
            null != eY[n] &&
            eY[n].predicate({
                selectedGuildId: l,
                voiceChannelId: o,
                voiceState: s,
                currentUser: i,
                premiumSubscription: r
            })
        ) {
            let o =
                null == (e = (t = eY[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: i,
                          premiumSubscription: r,
                          selectedGuildId: l
                      });
            eG = (function (e, t) {
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
                                ev(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, ew),
                {
                    type: n,
                    metadata: o
                }
            );
            break;
        }
    if (null != eG) {
        (null == (n = eG.metadata) ? void 0 : n.sampleRate) != null && null == eF[eG.type] && (eF[eG.type] = Math.random() <= eG.metadata.sampleRate);
        let e = !1 === eF[eG.type];
        (eW(eG.type) || e) && (eG = null);
    }
}
function eX() {
    return (ed.Z.enabled || delete eZ[eR.kVF.STREAMER_MODE], eK());
}
class eq extends (i = o.ZP.Store) {
    initialize() {
        (this.syncWith([eu.Z, el.Z, $.Z, ea.Z, x.Z, eg.Z, X.Z, Q.Z, H.Z, R.Z, w.Z, Y.Z], eK), this.waitFor(e_.default, ec.Z, et.Z, ee.ZP, eo.Z, en.Z, ed.Z, O.Z, ea.Z, eh.Z, W.Z, T.ZP, el.Z, eS.Z, eN.Z, eC.Z, ei.Z, eI.Z, em.Z, $.Z, ep.Z, er.Z, x.Z, ef.Z, eg.Z, Q.Z, P.Z, p.Z, F.Z, w.Z, Y.Z));
    }
    hasNotice() {
        return null != eG && null != eG.type;
    }
    getNotice() {
        return null == eh.Z.getAction() ? eG : null;
    }
    isNoticeDismissed(e) {
        return eW(e);
    }
}
ev(eq, 'displayName', 'NoticeStore');
let eJ = new eq(d.Z, {
    CURRENT_USER_UPDATE: eK,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eK,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eK,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eK,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eK,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eK,
    GUILD_CREATE: eK,
    GUILD_DELETE: eK,
    AUDIO_INPUT_DETECTED: eK,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eK,
    CERTIFIED_DEVICES_SET: eK,
    AUDIO_SET_INPUT_DEVICE: eK,
    AUDIO_SET_OUTPUT_DEVICE: eK,
    MEDIA_ENGINE_DEVICES: eK,
    RTC_CONNECTION_STATE: eK,
    RPC_APP_AUTHENTICATED: eK,
    RPC_APP_DISCONNECTED: eK,
    USER_CONNECTIONS_UPDATE: eK,
    WINDOW_FOCUS: eK,
    INSTANT_INVITE_CREATE: eK,
    INSTANT_INVITE_REVOKE_SUCCESS: eK,
    SPOTIFY_PLAYER_PAUSE: eK,
    RUNNING_GAMES_CHANGE: eK,
    EXPERIMENTS_FETCH_SUCCESS: eK,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eK,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eK,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eK,
    DEVELOPER_TEST_MODE_RESET: eK,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eK,
    DISPATCH_APPLICATION_INSTALL: eK,
    IMPERSONATE_STOP: eK,
    IMPERSONATE_UPDATE: eK,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === K.default.getId() && eK();
    },
    GUILD_MEMBER_UPDATE: eK,
    SURVEY_FETCHED: eK,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eK,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eK,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eK,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eK,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            t.some((e) => {
                let { userId: t } = e;
                return t !== K.default.getId();
            }) && eK()
        );
    },
    STREAMER_MODE_UPDATE: eX,
    RUNNING_STREAMER_TOOLS_CHANGE: eX,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete eZ[eR.kVF.DISPATCH_ERROR], eK());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete eZ[eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eK());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eK();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eK();
    },
    NOTICE_SHOW: function (e) {
        eG = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eG && (null == e.id || e.id === eG.id) && (eB(eG.type, e.isTemporary, e.untilAtLeast), eK());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (eB(t), eK());
    },
    LOGOUT: function () {
        ((eZ = {}), (eF = {}), (eG = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eK,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eK,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eK,
    PROXY_BLOCKED_REQUEST: eK,
    REPORT_AV_ERROR: eK
});
