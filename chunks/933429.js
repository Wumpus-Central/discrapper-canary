(n.d(t, {
    ZP: () => eX,
    m9: () => ej,
    nA: () => ek,
    o: () => ex,
    zD: () => ev
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
    I = n(674525),
    O = n(266454),
    S = n(605236),
    f = n(458725),
    h = n(915525),
    T = n(353926),
    m = n(594190),
    g = n(38618),
    N = n(569545),
    R = n(528011),
    y = n(487419),
    A = n(715903),
    b = n(223606),
    C = n(160404),
    P = n(41776),
    D = n(332473),
    M = n(30684),
    j = n(646476),
    x = n(616106),
    v = n(475580),
    k = n(96320),
    Z = n(518638),
    L = n(1844),
    U = n(621615),
    F = n(417626),
    w = n(569984),
    G = n(338247),
    V = n(523255),
    B = n(867003),
    W = n(768419),
    H = n(590415),
    z = n(581883),
    Y = n(199902),
    K = n(314897),
    q = n(881998),
    Q = n(463395),
    X = n(592125),
    J = n(553795),
    $ = n(427123),
    ee = n(271383),
    et = n(430824),
    en = n(131951),
    er = n(292959),
    ei = n(496675),
    el = n(571474),
    ea = n(19780),
    eo = n(944486),
    es = n(914010),
    ec = n(215427),
    eu = n(246946),
    ed = n(558724),
    e_ = n(23434),
    eE = n(594174),
    ep = n(979651),
    eI = n(853872),
    eO = n(78839),
    eS = n(431),
    ef = n(580130),
    eh = n(695103),
    eT = n(358085),
    em = n(74538),
    eg = n(922156),
    eN = n(436181),
    eR = n(941128),
    ey = n(981631),
    eA = n(188785),
    eb = n(474936),
    eC = n(46140),
    eP = n(231338),
    eD = n(65154);
function eM(e, t, n) {
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
let ej = {
        [ey.kVF.DOWNLOAD_NAG]: s.z.NAGBAR_NOTICE_DOWNLOAD,
        [ey.kVF.CONNECT_SPOTIFY]: s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [ey.kVF.CONNECT_PLAYSTATION]: s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [ey.kVF.MFA_SMS_BACKUP]: s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [ey.kVF.PREMIUM_REACTIVATE]: s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [ey.kVF.BOUNCED_EMAIL_DETECTED]: s.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [ey.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [ey.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [ey.kVF.POMELO_ELIGIBLE]: s.z.NAGBAR_NOTICE_POMELO,
        [ey.kVF.CHECKOUT_RECOVERY_NAGBAR]: s.z.CHECKOUT_RECOVERY_NAGBAR,
        [ey.kVF.REPORT_TO_MOD_SURVEY]: s.z.REPORT_TO_MOD_SURVEY_NOTICE
    },
    ex = { [ey.kVF.GIFTING_PROMOTION_REMINDER]: s.z.GIFTING_PROMOTION_REMINDER },
    ev = {
        [ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_OFFER_EXPIRING,
        [ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: s.z.NAGBAR_NOTICE_OFFER_EXPIRING
    },
    ek = { [ey.kVF.OUTBOUND_PROMOTION]: s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eZ = {
        [ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [ey.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [ey.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [ey.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [ey.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [ey.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: 'hidePremiumTier2DiscountOfferEndingNotice',
        [ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [ey.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    eL = new Set([ey.kVF.NO_INPUT_DETECTED, ey.kVF.NO_INPUT_DEVICES_DETECTED, ey.kVF.STREAMER_MODE, ey.kVF.VIDEO_UNSUPPORTED_BROWSER, ey.kVF.SPOTIFY_AUTO_PAUSED, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ey.kVF.BLOCKED_BY_PROXY]),
    eU = {},
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
    return eZ[e] + '-untilAtLeast';
}
function eB(e, t, n) {
    if (null == e) return;
    let r = eZ[e];
    (null == r || t || c.K.set(r, !0), eL.has(e) && (eU[e] = !0), null != n && null != r) ? c.K.set(eV(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eV(e));
}
function eW(e) {
    if (null == e) return !1;
    let { useRecurringNotices: t } = k.b.getCurrentConfig({ location: 'NoticeStore.isNoticeDismissed' });
    if (t && null != ev[e]) return !1;
    let n = ex[e];
    if (null != n) return (0, S.H4)(n).isDismissed;
    let r = ej[e];
    if (null != r) return (0, O.zu)(r);
    let i = eZ[e];
    if (null != i) {
        let t = (function (e) {
            let t = c.K.get(eV(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let a = eU[e];
    return !!a || (null != i && '' !== i ? c.K.get(i) : !!eL.has(e) && a);
}
let eH = [ey.kVF.QUARANTINED, ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ey.kVF.VIEWING_ROLES, ey.kVF.INVITED_TO_SPEAK, ey.kVF.LURKING_GUILD, ey.kVF.VOICE_DISABLED, ey.kVF.NO_INPUT_DEVICES_DETECTED, ey.kVF.NO_INPUT_DETECTED, ey.kVF.HARDWARE_MUTE, ey.kVF.H264_DISABLED, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ey.kVF.SPOTIFY_AUTO_PAUSED, ey.kVF.WIN32_DEPRECATED_MESSAGE, ey.kVF.WIN7_8_DEPRECATED_MESSAGE, ey.kVF.MACOS_19_DEPRECATED_MESSAGE, ey.kVF.BLOCKED_BY_PROXY, ey.kVF.VOICE_CONNECTED_LAST_SESSION, ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, ey.kVF.GUILD_RAID_NOTIFICATION, ey.kVF.GIFTING_PROMOTION_REMINDER, ey.kVF.QUESTS_PROGRESS_INTERRUPTION, ey.kVF.UNCLAIMED_ACCOUNT, ey.kVF.POMELO_ELIGIBLE, ey.kVF.PENDING_MEMBER, ey.kVF.CHECKOUT_RECOVERY_NAGBAR, ey.kVF.OUTBOUND_PROMOTION, ey.kVF.CORRUPT_INSTALLATION, ey.kVF.VIDEO_UNSUPPORTED_BROWSER, ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ey.kVF.STREAMER_MODE, ey.kVF.SCHEDULED_MAINTENANCE, ey.kVF.BOUNCED_EMAIL_DETECTED, ey.kVF.UNVERIFIED_ACCOUNT, ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING, ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING, ey.kVF.PREMIUM_TIER_0_TRIAL_ENDING, ey.kVF.PREMIUM_UNCANCEL, ey.kVF.PREMIUM_MISSING_PAYMENT, ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ey.kVF.PREMIUM_REACTIVATE, ey.kVF.ACTIVATE_SERVER_SUBSCRIPTION, ey.kVF.MFA_SMS_BACKUP, ey.kVF.APPLICATION_TEST_MODE, ey.kVF.DOWNLOAD_NAG, ey.kVF.CONNECT_SPOTIFY, ey.kVF.CONNECT_PLAYSTATION, ey.kVF.SURVEY, ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR, ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR, ey.kVF.IGNORE_USER_FEEDBACK_NAGBAR, ey.kVF.REPORT_TO_MOD_SURVEY],
    ez = [ey.kVF.QUARANTINED, ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ey.kVF.VIEWING_ROLES, ey.kVF.INVITED_TO_SPEAK, ey.kVF.LURKING_GUILD, ey.kVF.VOICE_DISABLED, ey.kVF.NO_INPUT_DETECTED, ey.kVF.HARDWARE_MUTE, ey.kVF.H264_DISABLED, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ey.kVF.SPOTIFY_AUTO_PAUSED, ey.kVF.BLOCKED_BY_PROXY, ey.kVF.VOICE_CONNECTED_LAST_SESSION, ey.kVF.PENDING_MEMBER, ey.kVF.STREAMER_MODE, ey.kVF.SCHEDULED_MAINTENANCE],
    eY = {
        [ey.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = j.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = j.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, S.H4)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eW(ey.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [ey.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, R.g)().show && !eW(ey.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = ee.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, A.EY)(r);
            }
        },
        [ey.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(ey.xW$.QUARANTINED);
            }
        },
        [ey.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return C.Z.isViewingRoles(t);
            }
        },
        [ey.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, H.gf)(t) === H.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [ey.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.isLurking(t);
            }
        },
        [ey.kVF.VOICE_DISABLED]: { predicate: () => null != ea.Z.getRemoteDisconnectVoiceChannelId() },
        [ey.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.Z.getLastSessionVoiceChannelId() },
        [ey.kVF.NO_INPUT_DETECTED]: { predicate: () => h.Z.hasActiveErrorOfType(f.u.NO_AUDIO_INPUT_DETECTED) },
        [ey.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => h.Z.hasActiveErrorOfType(f.u.NO_INPUT_DEVICES) },
        [ey.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = X.Z.getChannel(t);
                return !en.Z.getOpenH264() && null != t && ep.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [ey.kVF.HARDWARE_MUTE]: {
            predicate: () => ea.Z.isConnected() && en.Z.isHardwareMute() && en.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = en.Z.getInputDeviceId(),
                    t = Q.Z.getVendor(e),
                    n = Q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [ey.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eg.Z.getLastError(),
            metadata: () => ({ error: eg.Z.getLastError() })
        },
        [ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eN.Z.getLastProgress(),
            metadata: () => eN.Z.getLastProgress()
        },
        [ey.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => W.Z.wasAutoPaused() },
        [ey.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eW(ey.kVF.BLOCKED_BY_PROXY) && F.Z.blockedByProxy && U.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [ey.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [ey.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: l } = e;
                return null != (r = null != i && null != l && !(null == (t = et.Z.getGuild(i)) ? void 0 : t.features.has(ey.oNc.GUILD_ONBOARDING)) && (null == (n = ee.ZP.getMember(i, l.id)) ? void 0 : n.isPending)) && r;
            }
        },
        [ey.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, Z.tq)() },
        [ey.kVF.CORRUPT_INSTALLATION]: { predicate: () => eT.isPlatformEmbedded && (!o.Z.supported() || eR.Z.isCorruptInstallation()) },
        [ey.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && ep.Z.hasVideo(t) && !en.Z.supports(eD.AN.VIDEO) && !eW(ey.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return em.ZP.canRedeemPremiumPerks(t) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eW(ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ey.kVF.STREAMER_MODE]: { predicate: () => eu.Z.enabled },
        [ey.kVF.DOWNLOAD_NAG]: { predicate: () => !eT.isPlatformEmbedded && !eW(ey.kVF.DOWNLOAD_NAG) },
        [ey.kVF.SCHEDULED_MAINTENANCE]: {
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
        [ey.kVF.SURVEY]: {
            predicate: () => null != ed.Z.getCurrentSurvey(),
            metadata: () => ed.Z.getCurrentSurvey()
        },
        [ey.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [ey.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [ey.kVF.CONNECT_SPOTIFY]: { predicate: () => !W.Z.hasConnectedAccount() && m.ZP.isObservedAppRunning(_.Z.get(ey.ABu.SPOTIFY).name) && !eW(ey.kVF.CONNECT_SPOTIFY) },
        [ey.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === 'ia32' && (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [ey.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [ey.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [ey.kVF.CONNECT_PLAYSTATION]: { predicate: () => J.Z.isSuggestedAccountType(ey.ABu.PLAYSTATION) && null == J.Z.getAccount(null, ey.ABu.PLAYSTATION) && !eW(ey.kVF.CONNECT_PLAYSTATION) },
        [ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eS.Z.getAlmostExpiringTrialOffers([eb.Si.TIER_2]).length > 0 && !eW(ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [ey.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eS.Z.getAlmostExpiringTrialOffers([eb.Si.TIER_0]).length > 0 && !eW(ey.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () => {
                let { enabled: e } = v.D.getCurrentConfig({ location: 'NoticeStore.NoticeDefinition.predicate' });
                return !!e && eS.Z.getAlmostExpiringDiscountOffers([eb.Si.TIER_2]).length > 0 && !eW(ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING);
            }
        },
        [ey.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ey.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    a = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === ey.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0, em.M5)(n, eb.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(ey.kVF.PREMIUM_UNCANCEL) && o;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, em.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? em.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [ey.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    a = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = ef.Z.applicationIdsFetched.has(eb.CL),
                    s = ef.Z.getForApplication(eb.CL),
                    c = null != t ? (0, em.Af)(t) : null,
                    u = null != c ? em.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != s &&
                        null != c &&
                        Array.from(s).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    _ = null != t && r <= (i > 14 ? 7 : 2) && r >= 0 && t.status !== ey.O0b.PAST_DUE && !a && o && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(ey.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, em.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? em.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? eI.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    a = null != t && t.status === ey.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && t.status === ey.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ey.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(ey.xW$.MFA_SMS) && !t.hasFlag(ey.xW$.STAFF) && !t.hasFlag(ey.xW$.PARTNER) && !eW(ey.kVF.MFA_SMS_BACKUP);
            }
        },
        [ey.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eh.Z.testModeApplicationId,
            metadata: () => {
                if (null == eh.Z.testModeApplicationId) return {};
                let e = eh.Z.testModeApplicationId,
                    t = E.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [ey.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eW(ey.kVF.PREMIUM_REACTIVATE) && x.Z.shouldShowReactivateNotice() },
        [ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && null != t.paymentSourceId ? eI.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != i && eP.Uk.has(i.type),
                    o = null != t && t.status === ey.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === ey.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, em.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [ey.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eW(ey.kVF.POMELO_ELIGIBLE) },
        [ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? et.Z.getGuild(t) : null;
                return (null != t && null != b.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(ey.oNc.COMMUNITY)) && !eW(ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: l()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = b.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [ey.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eW(ey.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== I.Z.getEligibleGuildsForNagActivate().length && (0, p.Lm)() },
        [ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return V.SI(t);
            }
        },
        [ey.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = Y.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = w.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eC.Ot;
            },
            metadata: () => {
                let e = Y.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, N.V9)(e) : null };
            }
        },
        [ey.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = eI.Z.paymentSources) ? t : {};
                return M.Z.getIsTargeted() && !(0, em.I5)(n) && 0 !== Object.keys(r).length;
            }
        },
        [ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eW(ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && B.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [ey.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => B.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [ey.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, G.s)(t, n);
            }
        }
    };
function eK() {
    var e, t, n;
    if (!g.Z.isConnected()) return !1;
    eG = null;
    let r = eE.default.getCurrentUser();
    if (null == r) return !1;
    let i = eO.Z.getPremiumSubscription(),
        l = es.Z.getGuildId(),
        a = eo.Z.getVoiceChannelId(),
        o = null != a ? ep.Z.getVoiceStateForChannel(a) : null;
    for (let n of eA.a ? ez : eH)
        if (
            null != eY[n] &&
            eY[n].predicate({
                selectedGuildId: l,
                voiceChannelId: a,
                voiceState: o,
                currentUser: r,
                premiumSubscription: i
            })
        ) {
            let a =
                null == (e = (t = eY[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
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
                                eM(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, ew),
                {
                    type: n,
                    metadata: a
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
function eq() {
    return (eu.Z.enabled || delete eU[ey.kVF.STREAMER_MODE], eK());
}
class eQ extends (r = a.ZP.Store) {
    initialize() {
        (this.syncWith([ed.Z, el.Z, $.Z, es.Z, L.Z, eS.Z, q.Z, J.Z, z.Z, y.Z, w.Z, Y.Z], eK), this.waitFor(eE.default, ec.Z, et.Z, ee.ZP, ea.Z, en.Z, eu.Z, T.Z, es.Z, e_.Z, W.Z, m.ZP, el.Z, eg.Z, eN.Z, eh.Z, er.Z, eO.Z, eR.Z, $.Z, eI.Z, ei.Z, L.Z, ef.Z, eS.Z, J.Z, P.Z, I.Z, F.Z, w.Z, Y.Z));
    }
    hasNotice() {
        return null != eG && null != eG.type;
    }
    getNotice() {
        return null == e_.Z.getAction() ? eG : null;
    }
    isNoticeDismissed(e) {
        return eW(e);
    }
}
eM(eQ, 'displayName', 'NoticeStore');
let eX = new eQ(u.Z, {
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
    STREAMER_MODE_UPDATE: eq,
    RUNNING_STREAMER_TOOLS_CHANGE: eq,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete eU[ey.kVF.DISPATCH_ERROR], eK());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete eU[ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eK());
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
        ((eU = {}), (eF = {}), (eG = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eK,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eK,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eK,
    PROXY_BLOCKED_REQUEST: eK,
    REPORT_AV_ERROR: eK
});
