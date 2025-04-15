n.d(t, {
    ZP: () => eX,
    m9: () => eM,
    nA: () => eZ,
    o: () => eL
}),
    n(388685),
    n(35282);
var r,
    i = n(913527),
    l = n.n(i),
    o = n(442837),
    a = n(743426),
    s = n(704215),
    c = n(433517),
    u = n(570140),
    d = n(579806),
    E = n(726542),
    _ = n(812206),
    I = n(223892),
    O = n(674525),
    N = n(605236),
    T = n(458725),
    S = n(915525),
    p = n(353926),
    A = n(594190),
    R = n(38618),
    P = n(569545),
    f = n(615365),
    C = n(528011),
    D = n(487419),
    g = n(715903),
    y = n(223606),
    m = n(160404),
    h = n(41776),
    b = n(347649),
    U = n(332473),
    M = n(30684),
    L = n(646476),
    Z = n(616106),
    k = n(995598),
    v = n(518638),
    j = n(1844),
    F = n(621615),
    x = n(417626),
    V = n(569984),
    G = n(523255),
    w = n(867003),
    W = n(768419),
    B = n(590415),
    Y = n(581883),
    z = n(199902),
    H = n(314897),
    K = n(881998),
    q = n(463395),
    X = n(592125),
    J = n(553795),
    Q = n(427123),
    $ = n(271383),
    ee = n(430824),
    et = n(131951),
    en = n(292959),
    er = n(496675),
    ei = n(571474),
    el = n(19780),
    eo = n(944486),
    ea = n(914010),
    es = n(215427),
    ec = n(246946),
    eu = n(558724),
    ed = n(23434),
    eE = n(594174),
    e_ = n(979651),
    eI = n(351402),
    eO = n(853872),
    eN = n(78839),
    eT = n(431),
    eS = n(580130),
    ep = n(695103),
    eA = n(358085),
    eR = n(74538),
    eP = n(922156),
    ef = n(436181),
    eC = n(941128),
    eD = n(981631),
    eg = n(188785),
    ey = n(474936),
    em = n(46140),
    eh = n(231338),
    eb = n(65154);
function eU(e, t, n) {
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
        [eD.kVF.LOCALIZED_PRICING]: s.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eD.kVF.DOWNLOAD_NAG]: s.z.NAGBAR_NOTICE_DOWNLOAD,
        [eD.kVF.CONNECT_SPOTIFY]: s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eD.kVF.CONNECT_PLAYSTATION]: s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eD.kVF.MFA_SMS_BACKUP]: s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eD.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eD.kVF.PREMIUM_REACTIVATE]: s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eD.kVF.BOUNCED_EMAIL_DETECTED]: s.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eD.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eD.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eD.kVF.POMELO_ELIGIBLE]: s.z.NAGBAR_NOTICE_POMELO,
        [eD.kVF.UU_MIGRATION]: s.z.UU_MIGRATION_NOTICE,
        [eD.kVF.CHECKOUT_RECOVERY_NAGBAR]: s.z.CHECKOUT_RECOVERY_NAGBAR
    },
    eL = { [eD.kVF.GIFTING_PROMOTION_REMINDER]: s.z.GIFTING_PROMOTION_REMINDER },
    eZ = { [eD.kVF.OUTBOUND_PROMOTION]: s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ek = {
        [eD.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eD.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eD.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eD.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eD.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eD.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eD.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eD.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eD.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eD.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eD.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eD.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eD.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [eD.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: 'hideNagbarIgnoreUserFeedbackNotice',
        [eD.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    ev = new Set([eD.kVF.NO_INPUT_DETECTED, eD.kVF.NO_INPUT_DEVICES_DETECTED, eD.kVF.STREAMER_MODE, eD.kVF.VIDEO_UNSUPPORTED_BROWSER, eD.kVF.SPOTIFY_AUTO_PAUSED, eD.kVF.DISPATCH_ERROR, eD.kVF.DISPATCH_ERROR, eD.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eD.kVF.BLOCKED_BY_PROXY]),
    ej = {},
    eF = {},
    ex = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eV = null;
function eG(e) {
    return ek[e] + '-untilAtLeast';
}
function ew(e, t, n) {
    if (null == e) return;
    let r = ek[e];
    (null == r || t || c.K.set(r, !0), ev.has(e) && (ej[e] = !0), null != n && null != r) ? c.K.set(eG(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eG(e));
}
function eW(e) {
    if (null == e) return !1;
    let t = eL[e];
    if (null != t) return (0, N.H4)(t).isDismissed;
    let n = eM[e];
    if (null != n) return (0, N.un)(n);
    let r = ek[e];
    if (null != r) {
        let t = (function (e) {
            let t = c.K.get(eG(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let i = ej[e];
    return !!i || (null != r && '' !== r ? c.K.get(r) : !!ev.has(e) && i);
}
let eB = [eD.kVF.QUARANTINED, eD.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eD.kVF.VIEWING_ROLES, eD.kVF.INVITED_TO_SPEAK, eD.kVF.LURKING_GUILD, eD.kVF.VOICE_DISABLED, eD.kVF.NO_INPUT_DEVICES_DETECTED, eD.kVF.NO_INPUT_DETECTED, eD.kVF.HARDWARE_MUTE, eD.kVF.H264_DISABLED, eD.kVF.DISPATCH_ERROR, eD.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eD.kVF.SPOTIFY_AUTO_PAUSED, eD.kVF.WIN32_DEPRECATED_MESSAGE, eD.kVF.WIN7_8_DEPRECATED_MESSAGE, eD.kVF.MACOS_19_DEPRECATED_MESSAGE, eD.kVF.BLOCKED_BY_PROXY, eD.kVF.VOICE_CONNECTED_LAST_SESSION, eD.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eD.kVF.GUILD_RAID_NOTIFICATION, eD.kVF.GIFTING_PROMOTION_REMINDER, eD.kVF.QUESTS_PROGRESS_INTERRUPTION, eD.kVF.UNCLAIMED_ACCOUNT, eD.kVF.POMELO_ELIGIBLE, eD.kVF.PENDING_MEMBER, eD.kVF.CHECKOUT_RECOVERY_NAGBAR, eD.kVF.OUTBOUND_PROMOTION, eD.kVF.CORRUPT_INSTALLATION, eD.kVF.VIDEO_UNSUPPORTED_BROWSER, eD.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eD.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eD.kVF.STREAMER_MODE, eD.kVF.SCHEDULED_MAINTENANCE, eD.kVF.BOUNCED_EMAIL_DETECTED, eD.kVF.UNVERIFIED_ACCOUNT, eD.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eD.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eD.kVF.PREMIUM_UNCANCEL, eD.kVF.PREMIUM_MISSING_PAYMENT, eD.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eD.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eD.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eD.kVF.PREMIUM_REACTIVATE, eD.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eD.kVF.MFA_SMS_BACKUP, eD.kVF.APPLICATION_TEST_MODE, eD.kVF.LOCALIZED_PRICING, eD.kVF.DOWNLOAD_NAG, eD.kVF.CONNECT_SPOTIFY, eD.kVF.CONNECT_PLAYSTATION, eD.kVF.SURVEY, eD.kVF.SERVER_USAGE_SURVEY, eD.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eD.kVF.UU_MIGRATION, eD.kVF.BLOCK_USER_FEEDBACK_NAGBAR, eD.kVF.IGNORE_USER_FEEDBACK_NAGBAR],
    eY = [eD.kVF.QUARANTINED, eD.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eD.kVF.VIEWING_ROLES, eD.kVF.INVITED_TO_SPEAK, eD.kVF.LURKING_GUILD, eD.kVF.VOICE_DISABLED, eD.kVF.NO_INPUT_DETECTED, eD.kVF.HARDWARE_MUTE, eD.kVF.H264_DISABLED, eD.kVF.DISPATCH_ERROR, eD.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eD.kVF.SPOTIFY_AUTO_PAUSED, eD.kVF.BLOCKED_BY_PROXY, eD.kVF.VOICE_CONNECTED_LAST_SESSION, eD.kVF.PENDING_MEMBER, eD.kVF.STREAMER_MODE, eD.kVF.SCHEDULED_MAINTENANCE],
    ez = {
        [eD.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = L.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = L.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, N.H4)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eW(eD.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eD.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, C.g)().show && !eW(eD.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [eD.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = $.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, g.EY)(r);
            }
        },
        [eD.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eD.xW$.QUARANTINED);
            }
        },
        [eD.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return m.Z.isViewingRoles(t);
            }
        },
        [eD.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, B.gf)(t) === B.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eD.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && h.Z.isLurking(t);
            }
        },
        [eD.kVF.VOICE_DISABLED]: { predicate: () => null != el.Z.getRemoteDisconnectVoiceChannelId() },
        [eD.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != el.Z.getLastSessionVoiceChannelId() },
        [eD.kVF.NO_INPUT_DETECTED]: { predicate: () => S.Z.hasActiveErrorOfType(T.u.NO_AUDIO_INPUT_DETECTED) },
        [eD.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => S.Z.hasActiveErrorOfType(T.u.NO_INPUT_DEVICES) },
        [eD.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = X.Z.getChannel(t);
                return !et.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eD.kVF.HARDWARE_MUTE]: {
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
        [eD.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eP.Z.getLastError(),
            metadata: () => ({ error: eP.Z.getLastError() })
        },
        [eD.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != ef.Z.getLastProgress(),
            metadata: () => ef.Z.getLastProgress()
        },
        [eD.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => W.Z.wasAutoPaused() },
        [eD.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eW(eD.kVF.BLOCKED_BY_PROXY) && x.Z.blockedByProxy && F.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eD.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eD.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: l } = e;
                return null != (r = null != i && null != l && !(null == (t = ee.Z.getGuild(i)) ? void 0 : t.hasFeature(eD.oNc.GUILD_ONBOARDING)) && (null == (n = $.ZP.getMember(i, l.id)) ? void 0 : n.isPending)) && r;
            }
        },
        [eD.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, v.tq)() },
        [eD.kVF.CORRUPT_INSTALLATION]: { predicate: () => eA.isPlatformEmbedded && (!a.Z.supported() || eC.Z.isCorruptInstallation()) },
        [eD.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && e_.Z.hasVideo(t) && !et.Z.supports(eb.AN.VIDEO) && !eW(eD.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eD.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eR.ZP.canRedeemPremiumPerks(t) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eD.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eW(eD.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eD.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [eD.kVF.DOWNLOAD_NAG]: { predicate: () => !eA.isPlatformEmbedded && !eW(eD.kVF.DOWNLOAD_NAG) },
        [eD.kVF.SCHEDULED_MAINTENANCE]: {
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
        [eD.kVF.SURVEY]: {
            predicate: () => null != eu.Z.getCurrentSurvey(),
            metadata: () => eu.Z.getCurrentSurvey()
        },
        [eD.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && f.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eW(eD.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eD.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eD.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eD.kVF.CONNECT_SPOTIFY]: { predicate: () => !W.Z.hasConnectedAccount() && A.ZP.isObservedAppRunning(E.Z.get(eD.ABu.SPOTIFY).name) && !eW(eD.kVF.CONNECT_SPOTIFY) },
        [eD.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === 'ia32' && (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eD.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eD.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eD.kVF.CONNECT_PLAYSTATION]: { predicate: () => J.Z.isSuggestedAccountType(eD.ABu.PLAYSTATION) && null == J.Z.getAccount(null, eD.ABu.PLAYSTATION) && !eW(eD.kVF.CONNECT_PLAYSTATION) },
        [eD.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eT.Z.getAlmostExpiringTrialOffers([ey.Si.TIER_2]).length > 0 && !eW(eD.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eD.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eT.Z.getAlmostExpiringTrialOffers([ey.Si.TIER_0]).length > 0 && !eW(eD.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eD.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eD.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    a = null != t && t.status === eD.O0b.CANCELED && !o && r <= 7 && r >= 0 && (0, eR.M5)(n, ey.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eD.kVF.PREMIUM_UNCANCEL) && a;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, eR.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eR.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eD.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    a = eS.Z.applicationIdsFetched.has(ey.CL),
                    s = eS.Z.getForApplication(ey.CL),
                    c = null != t ? (0, eR.Af)(t) : null,
                    u = null != c ? eR.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != s &&
                        null != c &&
                        Array.from(s).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    E = null != t && r <= (i > 14 ? 7 : 2) && r >= 0 && t.status !== eD.O0b.PAST_DUE && !o && a && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eD.kVF.PREMIUM_MISSING_PAYMENT) && E;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, eR.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eR.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eD.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? eO.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === eD.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eD.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eD.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && t.status === eD.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eD.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eD.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eD.xW$.MFA_SMS) && !t.hasFlag(eD.xW$.STAFF) && !t.hasFlag(eD.xW$.PARTNER) && !eW(eD.kVF.MFA_SMS_BACKUP);
            }
        },
        [eD.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ep.Z.testModeApplicationId,
            metadata: () => {
                if (null == ep.Z.testModeApplicationId) return {};
                let e = ep.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eD.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eW(eD.kVF.PREMIUM_REACTIVATE) && Z.Z.shouldShowReactivateNotice() },
        [eD.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eW(eD.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eD.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && null != t.paymentSourceId ? eO.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != i && eh.Uk.has(i.type),
                    a = null != t && t.status === eD.O0b.PAST_DUE && !r && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eW(eD.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === eD.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, eR.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [eD.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, U.e)() && !eW(eD.kVF.POMELO_ELIGIBLE) && !(0, b.ov)() },
        [eD.kVF.UU_MIGRATION]: { predicate: () => (0, U.e)() && !eW(eD.kVF.UU_MIGRATION) && (0, b.ov)() },
        [eD.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (null != t && null != y.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eD.oNc.COMMUNITY)) && !eW(eD.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [eD.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eW(eD.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== O.Z.getEligibleGuildsForNagActivate().length && (0, I.Lm)() },
        [eD.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return G.SI(t);
            }
        },
        [eD.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = z.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, P.V9)(e),
                    n = V.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= em.Ot;
            },
            metadata: () => {
                let e = z.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, P.V9)(e) : null };
            }
        },
        [eD.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = eO.Z.paymentSources) ? t : {};
                return M.Z.getIsTargeted() && !(0, eR.I5)(n) && 0 !== Object.keys(r).length && (0, k.Y)();
            }
        },
        [eD.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eW(eD.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && w.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [eD.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eW(eD.kVF.IGNORE_USER_FEEDBACK_NAGBAR) && w.Rr(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        }
    };
function eH() {
    var e, t, n;
    if (!R.Z.isConnected()) return !1;
    eV = null;
    let r = eE.default.getCurrentUser();
    if (null == r) return !1;
    let i = eN.ZP.getPremiumSubscription(),
        l = eI.Z.isLocalizedPromoEnabled,
        o = ea.Z.getGuildId(),
        a = eo.Z.getVoiceChannelId(),
        s = null != a ? e_.Z.getVoiceStateForChannel(a) : null;
    for (let n of eg.a ? eY : eB)
        if (
            null != ez[n] &&
            ez[n].predicate({
                selectedGuildId: o,
                voiceChannelId: a,
                voiceState: s,
                currentUser: r,
                premiumSubscription: i,
                isLocalizedPromoEnabled: l
            })
        ) {
            let l =
                null == (e = (t = ez[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: o
                      });
            eV = (function (e, t) {
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
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                eU(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, ex),
                {
                    type: n,
                    metadata: l
                }
            );
            break;
        }
    if (null != eV) {
        (null == (n = eV.metadata) ? void 0 : n.sampleRate) != null && null == eF[eV.type] && (eF[eV.type] = Math.random() <= eV.metadata.sampleRate);
        let e = !1 === eF[eV.type];
        (eW(eV.type) || e) && (eV = null);
    }
}
function eK() {
    return ec.Z.enabled || delete ej[eD.kVF.STREAMER_MODE], eH();
}
class eq extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([eu.Z, ei.Z, Q.Z, ea.Z, j.Z, eT.Z, K.Z, J.Z, Y.Z, D.Z, V.Z, z.Z], eH), this.waitFor(eE.default, es.Z, ee.Z, $.ZP, el.Z, et.Z, ec.Z, p.Z, ea.Z, ed.Z, W.Z, A.ZP, ei.Z, eP.Z, ef.Z, ep.Z, en.Z, eN.ZP, eC.Z, Q.Z, eO.Z, er.Z, j.Z, eS.Z, eT.Z, J.Z, h.Z, O.Z, x.Z, V.Z, z.Z);
    }
    hasNotice() {
        return null != eV && null != eV.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? eV : null;
    }
    isNoticeDismissed(e) {
        return eW(e);
    }
}
eU(eq, 'displayName', 'NoticeStore');
let eX = new eq(u.Z, {
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
    STREAMER_MODE_UPDATE: eK,
    RUNNING_STREAMER_TOOLS_CHANGE: eK,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete ej[eD.kVF.DISPATCH_ERROR], eH();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete ej[eD.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eH();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eH();
    },
    NOTICE_SHOW: function (e) {
        eV = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eV && (null == e.id || e.id === eV.id) && (ew(eV.type, e.isTemporary, e.untilAtLeast), eH());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return ew(t), eH();
    },
    LOGOUT: function () {
        (ej = {}), (eF = {}), (eV = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
    PROXY_BLOCKED_REQUEST: eH,
    REPORT_AV_ERROR: eH
});
