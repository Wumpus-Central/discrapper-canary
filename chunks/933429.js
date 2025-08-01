(n.d(t, {
    ZP: () => eq,
    m9: () => eM,
    nA: () => ex,
    o: () => ej
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
    S = n(266454),
    I = n(605236),
    f = n(458725),
    h = n(915525),
    T = n(353926),
    m = n(594190),
    g = n(38618),
    N = n(569545),
    y = n(528011),
    R = n(487419),
    A = n(715903),
    b = n(223606),
    C = n(160404),
    P = n(41776),
    D = n(332473),
    M = n(30684),
    j = n(646476),
    x = n(616106),
    v = n(475580),
    k = n(518638),
    Z = n(1844),
    L = n(621615),
    U = n(417626),
    F = n(569984),
    w = n(338247),
    G = n(523255),
    V = n(867003),
    B = n(768419),
    W = n(590415),
    H = n(581883),
    z = n(199902),
    Y = n(314897),
    K = n(881998),
    q = n(463395),
    Q = n(592125),
    X = n(553795),
    J = n(427123),
    $ = n(271383),
    ee = n(430824),
    et = n(131951),
    en = n(292959),
    er = n(496675),
    ei = n(571474),
    el = n(19780),
    ea = n(944486),
    eo = n(914010),
    es = n(215427),
    ec = n(246946),
    eu = n(558724),
    ed = n(23434),
    e_ = n(594174),
    eE = n(979651),
    ep = n(853872),
    eO = n(78839),
    eS = n(431),
    eI = n(580130),
    ef = n(695103),
    eh = n(358085),
    eT = n(74538),
    em = n(922156),
    eg = n(436181),
    eN = n(941128),
    ey = n(981631),
    eR = n(188785),
    eA = n(474936),
    eb = n(46140),
    eC = n(231338),
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
let eM = {
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
    ej = { [ey.kVF.GIFTING_PROMOTION_REMINDER]: s.z.GIFTING_PROMOTION_REMINDER },
    ex = { [ey.kVF.OUTBOUND_PROMOTION]: s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ev = {
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
    ek = new Set([ey.kVF.NO_INPUT_DETECTED, ey.kVF.NO_INPUT_DEVICES_DETECTED, ey.kVF.STREAMER_MODE, ey.kVF.VIDEO_UNSUPPORTED_BROWSER, ey.kVF.SPOTIFY_AUTO_PAUSED, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ey.kVF.BLOCKED_BY_PROXY]),
    eZ = {},
    eL = {},
    eU = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eF = null;
function ew(e) {
    return ev[e] + '-untilAtLeast';
}
function eG(e, t, n) {
    if (null == e) return;
    let r = ev[e];
    (null == r || t || c.K.set(r, !0), ek.has(e) && (eZ[e] = !0), null != n && null != r) ? c.K.set(ew(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(ew(e));
}
function eV(e) {
    if (null == e) return !1;
    let t = ej[e];
    if (null != t) return (0, I.H4)(t).isDismissed;
    let n = eM[e];
    if (null != n) return (0, S.zu)(n);
    let r = ev[e];
    if (null != r) {
        let t = (function (e) {
            let t = c.K.get(ew(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let i = eZ[e];
    return !!i || (null != r && '' !== r ? c.K.get(r) : !!ek.has(e) && i);
}
let eB = [ey.kVF.QUARANTINED, ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ey.kVF.VIEWING_ROLES, ey.kVF.INVITED_TO_SPEAK, ey.kVF.LURKING_GUILD, ey.kVF.VOICE_DISABLED, ey.kVF.NO_INPUT_DEVICES_DETECTED, ey.kVF.NO_INPUT_DETECTED, ey.kVF.HARDWARE_MUTE, ey.kVF.H264_DISABLED, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ey.kVF.SPOTIFY_AUTO_PAUSED, ey.kVF.WIN32_DEPRECATED_MESSAGE, ey.kVF.WIN7_8_DEPRECATED_MESSAGE, ey.kVF.MACOS_19_DEPRECATED_MESSAGE, ey.kVF.BLOCKED_BY_PROXY, ey.kVF.VOICE_CONNECTED_LAST_SESSION, ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, ey.kVF.GUILD_RAID_NOTIFICATION, ey.kVF.GIFTING_PROMOTION_REMINDER, ey.kVF.QUESTS_PROGRESS_INTERRUPTION, ey.kVF.UNCLAIMED_ACCOUNT, ey.kVF.POMELO_ELIGIBLE, ey.kVF.PENDING_MEMBER, ey.kVF.CHECKOUT_RECOVERY_NAGBAR, ey.kVF.OUTBOUND_PROMOTION, ey.kVF.CORRUPT_INSTALLATION, ey.kVF.VIDEO_UNSUPPORTED_BROWSER, ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, ey.kVF.STREAMER_MODE, ey.kVF.SCHEDULED_MAINTENANCE, ey.kVF.BOUNCED_EMAIL_DETECTED, ey.kVF.UNVERIFIED_ACCOUNT, ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING, ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING, ey.kVF.PREMIUM_TIER_0_TRIAL_ENDING, ey.kVF.PREMIUM_UNCANCEL, ey.kVF.PREMIUM_MISSING_PAYMENT, ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, ey.kVF.PREMIUM_REACTIVATE, ey.kVF.ACTIVATE_SERVER_SUBSCRIPTION, ey.kVF.MFA_SMS_BACKUP, ey.kVF.APPLICATION_TEST_MODE, ey.kVF.DOWNLOAD_NAG, ey.kVF.CONNECT_SPOTIFY, ey.kVF.CONNECT_PLAYSTATION, ey.kVF.SURVEY, ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR, ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR, ey.kVF.IGNORE_USER_FEEDBACK_NAGBAR, ey.kVF.REPORT_TO_MOD_SURVEY],
    eW = [ey.kVF.QUARANTINED, ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, ey.kVF.VIEWING_ROLES, ey.kVF.INVITED_TO_SPEAK, ey.kVF.LURKING_GUILD, ey.kVF.VOICE_DISABLED, ey.kVF.NO_INPUT_DETECTED, ey.kVF.HARDWARE_MUTE, ey.kVF.H264_DISABLED, ey.kVF.DISPATCH_ERROR, ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, ey.kVF.SPOTIFY_AUTO_PAUSED, ey.kVF.BLOCKED_BY_PROXY, ey.kVF.VOICE_CONNECTED_LAST_SESSION, ey.kVF.PENDING_MEMBER, ey.kVF.STREAMER_MODE, ey.kVF.SCHEDULED_MAINTENANCE],
    eH = {
        [ey.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = j.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = j.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, I.H4)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eV(ey.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [ey.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, y.g)().show && !eV(ey.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = $.ZP.getMember(n, t.id);
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
                return (0, W.gf)(t) === W.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [ey.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.isLurking(t);
            }
        },
        [ey.kVF.VOICE_DISABLED]: { predicate: () => null != el.Z.getRemoteDisconnectVoiceChannelId() },
        [ey.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != el.Z.getLastSessionVoiceChannelId() },
        [ey.kVF.NO_INPUT_DETECTED]: { predicate: () => h.Z.hasActiveErrorOfType(f.u.NO_AUDIO_INPUT_DETECTED) },
        [ey.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => h.Z.hasActiveErrorOfType(f.u.NO_INPUT_DEVICES) },
        [ey.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = Q.Z.getChannel(t);
                return !et.Z.getOpenH264() && null != t && eE.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [ey.kVF.HARDWARE_MUTE]: {
            predicate: () => el.Z.isConnected() && et.Z.isHardwareMute() && et.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = et.Z.getInputDeviceId(),
                    t = q.Z.getVendor(e),
                    n = q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [ey.kVF.DISPATCH_ERROR]: {
            predicate: () => null != em.Z.getLastError(),
            metadata: () => ({ error: em.Z.getLastError() })
        },
        [ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eg.Z.getLastProgress(),
            metadata: () => eg.Z.getLastProgress()
        },
        [ey.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => B.Z.wasAutoPaused() },
        [ey.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eV(ey.kVF.BLOCKED_BY_PROXY) && U.Z.blockedByProxy && L.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
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
                return null != (r = null != i && null != l && !(null == (t = ee.Z.getGuild(i)) ? void 0 : t.features.has(ey.oNc.GUILD_ONBOARDING)) && (null == (n = $.ZP.getMember(i, l.id)) ? void 0 : n.isPending)) && r;
            }
        },
        [ey.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, k.tq)() },
        [ey.kVF.CORRUPT_INSTALLATION]: { predicate: () => eh.isPlatformEmbedded && (!o.Z.supported() || eN.Z.isCorruptInstallation()) },
        [ey.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && eE.Z.hasVideo(t) && !et.Z.supports(eP.AN.VIDEO) && !eV(ey.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eT.ZP.canRedeemPremiumPerks(t) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eV(ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && J.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => J.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [ey.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [ey.kVF.DOWNLOAD_NAG]: { predicate: () => !eh.isPlatformEmbedded && !eV(ey.kVF.DOWNLOAD_NAG) },
        [ey.kVF.SCHEDULED_MAINTENANCE]: {
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
        [ey.kVF.SURVEY]: {
            predicate: () => null != eu.Z.getCurrentSurvey(),
            metadata: () => eu.Z.getCurrentSurvey()
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
        [ey.kVF.CONNECT_SPOTIFY]: { predicate: () => !B.Z.hasConnectedAccount() && m.ZP.isObservedAppRunning(_.Z.get(ey.ABu.SPOTIFY).name) && !eV(ey.kVF.CONNECT_SPOTIFY) },
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
        [ey.kVF.CONNECT_PLAYSTATION]: { predicate: () => X.Z.isSuggestedAccountType(ey.ABu.PLAYSTATION) && null == X.Z.getAccount(null, ey.ABu.PLAYSTATION) && !eV(ey.kVF.CONNECT_PLAYSTATION) },
        [ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eS.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_2]).length > 0 && !eV(ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [ey.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eS.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_0]).length > 0 && !eV(ey.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () => {
                let { enabled: e } = v.D.getCurrentConfig({ location: 'NoticeStore.NoticeDefinition.predicate' });
                return !!e && eS.Z.getAlmostExpiringDiscountOffers([eA.Si.TIER_2]).length > 0 && !eV(ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING);
            }
        },
        [ey.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === ey.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    a = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === ey.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0, eT.M5)(n, eA.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(ey.kVF.PREMIUM_UNCANCEL) && o;
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
        [ey.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    a = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = eI.Z.applicationIdsFetched.has(eA.CL),
                    s = eI.Z.getForApplication(eA.CL),
                    c = null != t ? (0, eT.Af)(t) : null,
                    u = null != c ? eT.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != s &&
                        null != c &&
                        Array.from(s).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    _ = null != t && r <= (i > 14 ? 7 : 2) && r >= 0 && t.status !== ey.O0b.PAST_DUE && !a && o && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(ey.kVF.PREMIUM_MISSING_PAYMENT) && _;
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
        [ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    a = null != t && t.status === ey.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
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
                return !eV(ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [ey.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(ey.xW$.MFA_SMS) && !t.hasFlag(ey.xW$.STAFF) && !t.hasFlag(ey.xW$.PARTNER) && !eV(ey.kVF.MFA_SMS_BACKUP);
            }
        },
        [ey.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ef.Z.testModeApplicationId,
            metadata: () => {
                if (null == ef.Z.testModeApplicationId) return {};
                let e = ef.Z.testModeApplicationId,
                    t = E.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [ey.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eV(ey.kVF.PREMIUM_REACTIVATE) && x.Z.shouldShowReactivateNotice() },
        [ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && null != t.paymentSourceId ? ep.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != i && eC.Uk.has(i.type),
                    o = null != t && t.status === ey.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
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
                          dismissUntil: (0, eT.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [ey.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eV(ey.kVF.POMELO_ELIGIBLE) },
        [ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (null != t && null != b.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(ey.oNc.COMMUNITY)) && !eV(ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [ey.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eV(ey.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== O.Z.getEligibleGuildsForNagActivate().length && (0, p.Lm)() },
        [ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return G.SI(t);
            }
        },
        [ey.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = z.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = F.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eb.Ot;
            },
            metadata: () => {
                let e = z.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, N.V9)(e) : null };
            }
        },
        [ey.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = ep.Z.paymentSources) ? t : {};
                return M.Z.getIsTargeted() && !(0, eT.I5)(n) && 0 !== Object.keys(r).length;
            }
        },
        [ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eV(ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && V.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [ey.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => V.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [ey.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, w.s)(t, n);
            }
        }
    };
function ez() {
    var e, t, n;
    if (!g.Z.isConnected()) return !1;
    eF = null;
    let r = e_.default.getCurrentUser();
    if (null == r) return !1;
    let i = eO.Z.getPremiumSubscription(),
        l = eo.Z.getGuildId(),
        a = ea.Z.getVoiceChannelId(),
        o = null != a ? eE.Z.getVoiceStateForChannel(a) : null;
    for (let n of eR.a ? eW : eB)
        if (
            null != eH[n] &&
            eH[n].predicate({
                selectedGuildId: l,
                voiceChannelId: a,
                voiceState: o,
                currentUser: r,
                premiumSubscription: i
            })
        ) {
            let a =
                null == (e = (t = eH[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: l
                      });
            eF = (function (e, t) {
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
                                eD(e, t, n[t]);
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
    if (null != eF) {
        (null == (n = eF.metadata) ? void 0 : n.sampleRate) != null && null == eL[eF.type] && (eL[eF.type] = Math.random() <= eF.metadata.sampleRate);
        let e = !1 === eL[eF.type];
        (eV(eF.type) || e) && (eF = null);
    }
}
function eY() {
    return (ec.Z.enabled || delete eZ[ey.kVF.STREAMER_MODE], ez());
}
class eK extends (r = a.ZP.Store) {
    initialize() {
        (this.syncWith([eu.Z, ei.Z, J.Z, eo.Z, Z.Z, eS.Z, K.Z, X.Z, H.Z, R.Z, F.Z, z.Z], ez), this.waitFor(e_.default, es.Z, ee.Z, $.ZP, el.Z, et.Z, ec.Z, T.Z, eo.Z, ed.Z, B.Z, m.ZP, ei.Z, em.Z, eg.Z, ef.Z, en.Z, eO.Z, eN.Z, J.Z, ep.Z, er.Z, Z.Z, eI.Z, eS.Z, X.Z, P.Z, O.Z, U.Z, F.Z, z.Z));
    }
    hasNotice() {
        return null != eF && null != eF.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? eF : null;
    }
    isNoticeDismissed(e) {
        return eV(e);
    }
}
eD(eK, 'displayName', 'NoticeStore');
let eq = new eK(u.Z, {
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
        return e.user.id === Y.default.getId() && ez();
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
                return t !== Y.default.getId();
            }) && ez()
        );
    },
    STREAMER_MODE_UPDATE: eY,
    RUNNING_STREAMER_TOOLS_CHANGE: eY,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete eZ[ey.kVF.DISPATCH_ERROR], ez());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete eZ[ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], ez());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ez();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ez();
    },
    NOTICE_SHOW: function (e) {
        eF = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eF && (null == e.id || e.id === eF.id) && (eG(eF.type, e.isTemporary, e.untilAtLeast), ez());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (eG(t), ez());
    },
    LOGOUT: function () {
        ((eZ = {}), (eL = {}), (eF = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ez,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ez,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ez,
    PROXY_BLOCKED_REQUEST: ez,
    REPORT_AV_ERROR: ez
});
