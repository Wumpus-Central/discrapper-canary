n.d(t, {
    m9: function () {
        return ey;
    },
    o: function () {
        return eO;
    }
}),
    n(47120);
var i,
    r,
    l,
    a,
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(743426),
    d = n(704215),
    m = n(433517),
    h = n(570140),
    f = n(579806),
    p = n(726542),
    _ = n(812206),
    g = n(223892),
    E = n(674525),
    C = n(605236),
    I = n(353926),
    x = n(594190),
    N = n(38618),
    v = n(569545),
    T = n(615365),
    S = n(528011),
    A = n(487419),
    b = n(715903),
    j = n(223606),
    R = n(160404),
    Z = n(41776),
    P = n(347649),
    L = n(332473),
    y = n(30684),
    O = n(646476),
    M = n(616106),
    k = n(995598),
    D = n(774276),
    U = n(518638),
    B = n(1844),
    w = n(621615),
    F = n(417626),
    G = n(569984),
    V = n(523255),
    H = n(900735),
    z = n(768419),
    W = n(590415),
    K = n(581883),
    Y = n(199902),
    X = n(314897),
    Q = n(881998),
    q = n(463395),
    J = n(592125),
    $ = n(553795),
    ee = n(427123),
    et = n(271383),
    en = n(430824),
    ei = n(131951),
    er = n(292959),
    el = n(496675),
    ea = n(571474),
    eo = n(19780),
    es = n(944486),
    ec = n(914010),
    eu = n(215427),
    ed = n(246946),
    em = n(558724),
    eh = n(23434),
    ef = n(594174),
    ep = n(979651),
    e_ = n(351402),
    eg = n(853872),
    eE = n(78839),
    eC = n(431),
    eI = n(580130),
    ex = n(695103),
    eN = n(358085),
    ev = n(74538),
    eT = n(922156),
    eS = n(436181),
    eA = n(941128),
    eb = n(981631),
    ej = n(188785),
    eR = n(474936),
    eZ = n(46140),
    eP = n(231338),
    eL = n(65154);
let ey = {
        [eb.kVF.LOCALIZED_PRICING]: d.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eb.kVF.DOWNLOAD_NAG]: d.z.NAGBAR_NOTICE_DOWNLOAD,
        [eb.kVF.CONNECT_SPOTIFY]: d.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eb.kVF.CONNECT_PLAYSTATION]: d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eb.kVF.MFA_SMS_BACKUP]: d.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eb.kVF.PREMIUM_REACTIVATE]: d.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eb.kVF.BOUNCED_EMAIL_DETECTED]: d.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: d.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: d.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eb.kVF.POMELO_ELIGIBLE]: d.z.NAGBAR_NOTICE_POMELO,
        [eb.kVF.UU_MIGRATION]: d.z.UU_MIGRATION_NOTICE,
        [eb.kVF.CHECKOUT_RECOVERY_NAGBAR]: d.z.CHECKOUT_RECOVERY_NAGBAR
    },
    eO = { [eb.kVF.GIFTING_PROMOTION_REMINDER]: d.z.GIFTING_PROMOTION_REMINDER },
    eM = {
        [eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eb.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eb.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eb.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eb.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eb.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eb.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eb.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [eb.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    ek = new Set([eb.kVF.NO_INPUT_DETECTED, eb.kVF.NO_INPUT_DEVICES_DETECTED, eb.kVF.STREAMER_MODE, eb.kVF.VIDEO_UNSUPPORTED_BROWSER, eb.kVF.SPOTIFY_AUTO_PAUSED, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eb.kVF.BLOCKED_BY_PROXY]),
    eD = {},
    eU = {},
    eB = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    ew = null;
function eF(e) {
    return eM[e] + '-untilAtLeast';
}
function eG(e, t, n) {
    var i, r, l;
    if (null == e) return;
    let a = eM[e];
    if ((null != a && !t && m.K.set(a, !0), ek.has(e) && (eD[e] = !0), null != n && null != a)) {
        (i = e), (r = n), m.K.set(eF(i), r.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        (l = e), m.K.remove(eF(l));
    }
}
function eV(e) {
    if (null == e) return !1;
    let t = eO[e];
    if (null != t) return (0, C.H4)(t).isDismissed;
    let n = (function (e) {
        let { enabled: t } = D.cI.getCurrentConfig(
            { location: 'NoticeStore_isNoticeDismissed' },
            {
                autoTrackExposure: !0,
                disable: e !== eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING
            }
        );
        return t ? null : ey[e];
    })(e);
    if (null != n) return (0, C.un)(n);
    let i = eM[e];
    if (null != i) {
        let t = (function (e) {
            let t = m.K.get(eF(e));
            return null != t ? s()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(s()());
    }
    let r = eD[e];
    return !!r || (null != i && '' !== i ? m.K.get(i) : !!ek.has(e) && r);
}
let eH = [eb.kVF.QUARANTINED, eb.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eb.kVF.VIEWING_ROLES, eb.kVF.INVITED_TO_SPEAK, eb.kVF.LURKING_GUILD, eb.kVF.VOICE_DISABLED, eb.kVF.NO_INPUT_DEVICES_DETECTED, eb.kVF.NO_INPUT_DETECTED, eb.kVF.HARDWARE_MUTE, eb.kVF.H264_DISABLED, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eb.kVF.SPOTIFY_AUTO_PAUSED, eb.kVF.WIN32_DEPRECATED_MESSAGE, eb.kVF.WIN7_8_DEPRECATED_MESSAGE, eb.kVF.MACOS_19_DEPRECATED_MESSAGE, eb.kVF.BLOCKED_BY_PROXY, eb.kVF.VOICE_CONNECTED_LAST_SESSION, eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eb.kVF.GUILD_RAID_NOTIFICATION, eb.kVF.GIFTING_PROMOTION_REMINDER, eb.kVF.QUESTS_PROGRESS_INTERRUPTION, eb.kVF.UNCLAIMED_ACCOUNT, eb.kVF.POMELO_ELIGIBLE, eb.kVF.PENDING_MEMBER, eb.kVF.CHECKOUT_RECOVERY_NAGBAR, eb.kVF.OUTBOUND_PROMOTION, eb.kVF.CORRUPT_INSTALLATION, eb.kVF.VIDEO_UNSUPPORTED_BROWSER, eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eb.kVF.STREAMER_MODE, eb.kVF.SCHEDULED_MAINTENANCE, eb.kVF.BOUNCED_EMAIL_DETECTED, eb.kVF.UNVERIFIED_ACCOUNT, eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eb.kVF.PREMIUM_UNCANCEL, eb.kVF.PREMIUM_MISSING_PAYMENT, eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eb.kVF.PREMIUM_REACTIVATE, eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eb.kVF.MFA_SMS_BACKUP, eb.kVF.APPLICATION_TEST_MODE, eb.kVF.LOCALIZED_PRICING, eb.kVF.DOWNLOAD_NAG, eb.kVF.CONNECT_SPOTIFY, eb.kVF.CONNECT_PLAYSTATION, eb.kVF.SURVEY, eb.kVF.SERVER_USAGE_SURVEY, eb.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eb.kVF.UU_MIGRATION, eb.kVF.BLOCK_USER_FEEDBACK_NAGBAR],
    ez = [eb.kVF.QUARANTINED, eb.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eb.kVF.VIEWING_ROLES, eb.kVF.INVITED_TO_SPEAK, eb.kVF.LURKING_GUILD, eb.kVF.VOICE_DISABLED, eb.kVF.NO_INPUT_DETECTED, eb.kVF.HARDWARE_MUTE, eb.kVF.H264_DISABLED, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eb.kVF.SPOTIFY_AUTO_PAUSED, eb.kVF.BLOCKED_BY_PROXY, eb.kVF.VOICE_CONNECTED_LAST_SESSION, eb.kVF.PENDING_MEMBER, eb.kVF.STREAMER_MODE, eb.kVF.SCHEDULED_MAINTENANCE],
    eW = {
        [eb.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = O.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = O.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, C.H4)(d.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eV(eb.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eb.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, S.g)().show && !eV(eb.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: s()().add(3, 'hours').toDate() })
        },
        [eb.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = et.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, b.EY)(i);
            }
        },
        [eb.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eb.xW$.QUARANTINED);
            }
        },
        [eb.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return R.Z.isViewingRoles(t);
            }
        },
        [eb.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, W.gf)(t) === W.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eb.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && Z.Z.isLurking(t);
            }
        },
        [eb.kVF.VOICE_DISABLED]: { predicate: () => null != eo.Z.getRemoteDisconnectVoiceChannelId() },
        [eb.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eo.Z.getLastSessionVoiceChannelId() },
        [eb.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = J.Z.getChannel(t),
                    r = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === ei.Z.getInputDetected() && !r;
            }
        },
        [eb.kVF.NO_INPUT_DEVICES_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = J.Z.getChannel(t),
                    r = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return 0 === Object.keys(ei.Z.getInputDevices()).length && null != i && !r;
            }
        },
        [eb.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = J.Z.getChannel(t);
                return !ei.Z.getOpenH264() && null != t && ep.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eb.kVF.HARDWARE_MUTE]: {
            predicate: () => eo.Z.isConnected() && ei.Z.isHardwareMute() && ei.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = ei.Z.getInputDeviceId(),
                    t = q.Z.getVendor(e),
                    n = q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eb.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eT.Z.getLastError(),
            metadata: () => ({ error: eT.Z.getLastError() })
        },
        [eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eS.Z.getLastProgress(),
            metadata: () => eS.Z.getLastProgress()
        },
        [eb.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => z.Z.wasAutoPaused() },
        [eb.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eV(eb.kVF.BLOCKED_BY_PROXY) && F.Z.blockedByProxy && w.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eb.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eb.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null !== (i = null != r && null != l && !(null === (t = en.Z.getGuild(r)) || void 0 === t ? void 0 : t.hasFeature(eb.oNc.GUILD_ONBOARDING)) && (null === (n = et.ZP.getMember(r, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [eb.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, U.tq)() },
        [eb.kVF.CORRUPT_INSTALLATION]: { predicate: () => eN.isPlatformEmbedded && (!u.Z.supported() || eA.Z.isCorruptInstallation()) },
        [eb.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && ep.Z.hasVideo(t) && !ei.Z.supports(eL.AN.VIDEO) && !eV(eb.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return ev.ZP.canRedeemPremiumPerks(t) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eV(eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eb.kVF.STREAMER_MODE]: { predicate: () => ed.Z.enabled },
        [eb.kVF.DOWNLOAD_NAG]: { predicate: () => !eN.isPlatformEmbedded && !eV(eb.kVF.DOWNLOAD_NAG) },
        [eb.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != eu.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = eu.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eb.kVF.SURVEY]: {
            predicate: () => null != em.Z.getCurrentSurvey(),
            metadata: () => em.Z.getCurrentSurvey()
        },
        [eb.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && T.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eV(eb.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eb.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eb.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eb.kVF.CONNECT_SPOTIFY]: { predicate: () => !z.Z.hasConnectedAccount() && x.ZP.isObservedAppRunning(p.Z.get(eb.ABu.SPOTIFY).name) && !eV(eb.kVF.CONNECT_SPOTIFY) },
        [eb.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.arch) === 'ia32' && (null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eb.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eb.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eb.kVF.CONNECT_PLAYSTATION]: { predicate: () => $.Z.isSuggestedAccountType(eb.ABu.PLAYSTATION) && null == $.Z.getAccount(null, eb.ABu.PLAYSTATION) && !eV(eb.kVF.CONNECT_PLAYSTATION) },
        [eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eC.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_2]).length > 0 && !eV(eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eC.Z.getAlmostExpiringTrialOffers([eR.Si.TIER_0]).length > 0 && !eV(eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eb.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? s()(t.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eb.O0b.CANCELED && 1 >= s()().diff(s()(t.canceledAt), 'days'),
                    l = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    a = null != t && t.status === eb.O0b.CANCELED && !l && i <= 7 && i >= 0 && (0, ev.M5)(n, eR.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eb.kVF.PREMIUM_UNCANCEL) && a;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? s()(n.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != n ? (null === (t = (0, ev.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? ev.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eb.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? s()(t.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != t ? s()(t.currentPeriodEnd).diff(s()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    l = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    a = eI.Z.applicationIdsFetched.has(eR.CL),
                    o = eI.Z.getForApplication(eR.CL),
                    c = null != t ? (0, ev.Af)(t) : null,
                    u = null != c ? ev.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != o &&
                        null != c &&
                        Array.from(o).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    m = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== eb.O0b.PAST_DUE && !l && a && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eb.kVF.PREMIUM_MISSING_PAYMENT) && m;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? s()(n.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != n ? (null === (t = (0, ev.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? ev.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eg.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    l = null != t && t.status === eb.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    r = null != t && t.status === eb.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eb.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eb.xW$.MFA_SMS) && !t.hasFlag(eb.xW$.STAFF) && !t.hasFlag(eb.xW$.PARTNER) && !eV(eb.kVF.MFA_SMS_BACKUP);
            }
        },
        [eb.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ex.Z.testModeApplicationId,
            metadata: () => {
                if (null == ex.Z.testModeApplicationId) return {};
                let e = ex.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eb.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eV(eb.kVF.PREMIUM_REACTIVATE) && M.Z.shouldShowReactivateNotice() },
        [eb.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eV(eb.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    r = null != t && null != t.paymentSourceId ? eg.Z.getPaymentSource(t.paymentSourceId) : null,
                    l = null != r && eP.Uk.has(r.type),
                    a = null != t && t.status === eb.O0b.PAST_DUE && !i && l && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: s()().toDate()
                    };
                {
                    let e = t.status === eb.O0b.PAST_DUE ? s()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, ev.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eb.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, L.e)() && !eV(eb.kVF.POMELO_ELIGIBLE) && !(0, P.ov)() },
        [eb.kVF.UU_MIGRATION]: { predicate: () => (0, L.e)() && !eV(eb.kVF.UU_MIGRATION) && (0, P.ov)() },
        [eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? en.Z.getGuild(t) : null;
                return (null != t && null != j.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eb.oNc.COMMUNITY)) && !eV(eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: s()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = j.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eV(eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== E.Z.getEligibleGuildsForNagActivate().length && (0, g.Lm)() },
        [eb.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return V.SI(t);
            }
        },
        [eb.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = Y.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, v.V9)(e),
                    n = G.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eZ.Ot;
            },
            metadata: () => {
                let e = Y.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, v.V9)(e) : null };
            }
        },
        [eb.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null !== (t = eg.Z.paymentSources) && void 0 !== t ? t : {};
                return y.Z.getIsTargeted() && !(0, ev.I5)(n) && 0 !== Object.keys(i).length && (0, k.Y)();
            }
        },
        [eb.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eV(eb.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && H.S(),
            metadata: () => ({
                dismissUntil: s()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        }
    };
function eK() {
    var e, t, n;
    if (!N.Z.isConnected()) return !1;
    ew = null;
    let i = ef.default.getCurrentUser();
    if (null == i) return !1;
    let r = eE.ZP.getPremiumSubscription(),
        l = e_.Z.isLocalizedPromoEnabled,
        a = ec.Z.getGuildId(),
        o = es.Z.getVoiceChannelId(),
        s = null != o ? ep.Z.getVoiceStateForChannel(o) : null;
    for (let n of ej.a ? ez : eH) {
        if (null != eW[n]) {
            if (
                eW[n].predicate({
                    selectedGuildId: a,
                    voiceChannelId: o,
                    voiceState: s,
                    currentUser: i,
                    premiumSubscription: r,
                    isLocalizedPromoEnabled: l
                })
            ) {
                let l =
                    null === (e = (t = eW[n]).metadata) || void 0 === e
                        ? void 0
                        : e.call(t, {
                              currentUser: i,
                              premiumSubscription: r,
                              selectedGuildId: a
                          });
                ew = {
                    ...eB,
                    type: n,
                    metadata: l
                };
                break;
            }
        }
    }
    if (null != ew) {
        (null === (n = ew.metadata) || void 0 === n ? void 0 : n.sampleRate) != null && null == eU[ew.type] && (eU[ew.type] = Math.random() <= ew.metadata.sampleRate);
        let e = !1 === eU[ew.type];
        (eV(ew.type) || e) && (ew = null);
    }
}
function eY() {
    return !ed.Z.enabled && delete eD[eb.kVF.STREAMER_MODE], eK();
}
class eX extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([em.Z, ea.Z, ee.Z, ec.Z, B.Z, eC.Z, Q.Z, $.Z, K.Z, A.Z, G.Z, Y.Z], eK), this.waitFor(ef.default, eu.Z, en.Z, et.ZP, eo.Z, ei.Z, ed.Z, I.Z, ec.Z, eh.Z, z.Z, x.ZP, ea.Z, eT.Z, eS.Z, ex.Z, er.Z, eE.ZP, eA.Z, ee.Z, eg.Z, el.Z, B.Z, eI.Z, eC.Z, $.Z, Z.Z, E.Z, F.Z, G.Z, Y.Z);
    }
    hasNotice() {
        return null != ew && null != ew.type;
    }
    getNotice() {
        return null == eh.Z.getAction() ? ew : null;
    }
    isNoticeDismissed(e) {
        return eV(e);
    }
}
(a = 'NoticeStore'),
    (l = 'displayName') in (r = eX)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.ZP = new eX(h.Z, {
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
            return e.user.id === X.default.getId() && eK();
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
                    return t !== X.default.getId();
                }) && eK()
            );
        },
        STREAMER_MODE_UPDATE: eY,
        RUNNING_STREAMER_TOOLS_CHANGE: eY,
        DISPATCH_APPLICATION_ERROR: function () {
            return delete eD[eb.kVF.DISPATCH_ERROR], eK();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            return delete eD[eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eK();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
            return eK();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            return eK();
        },
        NOTICE_SHOW: function (e) {
            ew = e.notice;
        },
        NOTICE_DISMISS: function (e) {
            return null != ew && (null == e.id || e.id === ew.id) && (eG(ew.type, e.isTemporary, e.untilAtLeast), eK());
        },
        NOTICE_DISABLE: function (e) {
            let { noticeType: t } = e;
            return eG(t), eK();
        },
        LOGOUT: function () {
            (eD = {}), (eU = {}), (ew = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eK,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eK,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eK,
        PROXY_BLOCKED_REQUEST: eK
    }));
