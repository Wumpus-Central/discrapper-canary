(n.d(t, {
    ZP: () => eX,
    m9: () => ev,
    nA: () => ek,
    o: () => eM
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
    U = n(475580),
    L = n(518638),
    j = n(1844),
    x = n(621615),
    Z = n(417626),
    F = n(569984),
    w = n(338247),
    V = n(523255),
    G = n(867003),
    B = n(768419),
    W = n(590415),
    z = n(581883),
    H = n(199902),
    Y = n(314897),
    K = n(881998),
    X = n(463395),
    q = n(592125),
    J = n(553795),
    Q = n(427123),
    $ = n(271383),
    ee = n(430824),
    et = n(131951),
    en = n(292959),
    ei = n(496675),
    er = n(571474),
    el = n(19780),
    eo = n(944486),
    es = n(914010),
    ea = n(215427),
    ec = n(246946),
    ed = n(558724),
    eu = n(23434),
    eh = n(594174),
    e_ = n(979651),
    eE = n(853872),
    ep = n(78839),
    eI = n(431),
    eg = n(580130),
    ef = n(695103),
    eC = n(358085),
    eO = n(74538),
    eT = n(922156),
    eS = n(436181),
    em = n(941128),
    eN = n(981631),
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
    eM = { [eN.kVF.GIFTING_PROMOTION_REMINDER]: a.z.GIFTING_PROMOTION_REMINDER },
    ek = { [eN.kVF.OUTBOUND_PROMOTION]: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eU = {
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
        [eN.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: 'hidePremiumTier2DiscountOfferEndingNotice',
        [eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [eN.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    eL = new Set([eN.kVF.NO_INPUT_DETECTED, eN.kVF.NO_INPUT_DEVICES_DETECTED, eN.kVF.STREAMER_MODE, eN.kVF.VIDEO_UNSUPPORTED_BROWSER, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.BLOCKED_BY_PROXY]),
    ej = {},
    ex = {},
    eZ = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eF = null;
function ew(e) {
    return eU[e] + '-untilAtLeast';
}
function eV(e, t, n) {
    if (null == e) return;
    let i = eU[e];
    (null == i || t || c.K.set(i, !0), eL.has(e) && (ej[e] = !0), null != n && null != i) ? c.K.set(ew(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(ew(e));
}
function eG(e) {
    if (null == e) return !1;
    let t = eM[e];
    if (null != t) return (0, g.H4)(t).isDismissed;
    let n = ev[e];
    if (null != n) return (0, I.zu)(n);
    let i = eU[e];
    if (null != i) {
        let t = (function (e) {
            let t = c.K.get(ew(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let r = ej[e];
    return !!r || (null != i && '' !== i ? c.K.get(i) : !!eL.has(e) && r);
}
let eB = [eN.kVF.QUARANTINED, eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eN.kVF.VIEWING_ROLES, eN.kVF.INVITED_TO_SPEAK, eN.kVF.LURKING_GUILD, eN.kVF.VOICE_DISABLED, eN.kVF.NO_INPUT_DEVICES_DETECTED, eN.kVF.NO_INPUT_DETECTED, eN.kVF.HARDWARE_MUTE, eN.kVF.H264_DISABLED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.WIN32_DEPRECATED_MESSAGE, eN.kVF.WIN7_8_DEPRECATED_MESSAGE, eN.kVF.MACOS_19_DEPRECATED_MESSAGE, eN.kVF.BLOCKED_BY_PROXY, eN.kVF.VOICE_CONNECTED_LAST_SESSION, eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eN.kVF.GUILD_RAID_NOTIFICATION, eN.kVF.GIFTING_PROMOTION_REMINDER, eN.kVF.QUESTS_PROGRESS_INTERRUPTION, eN.kVF.UNCLAIMED_ACCOUNT, eN.kVF.POMELO_ELIGIBLE, eN.kVF.PENDING_MEMBER, eN.kVF.CHECKOUT_RECOVERY_NAGBAR, eN.kVF.OUTBOUND_PROMOTION, eN.kVF.CORRUPT_INSTALLATION, eN.kVF.VIDEO_UNSUPPORTED_BROWSER, eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eN.kVF.STREAMER_MODE, eN.kVF.SCHEDULED_MAINTENANCE, eN.kVF.BOUNCED_EMAIL_DETECTED, eN.kVF.UNVERIFIED_ACCOUNT, eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eN.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING, eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eN.kVF.PREMIUM_UNCANCEL, eN.kVF.PREMIUM_MISSING_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eN.kVF.PREMIUM_REACTIVATE, eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eN.kVF.MFA_SMS_BACKUP, eN.kVF.APPLICATION_TEST_MODE, eN.kVF.DOWNLOAD_NAG, eN.kVF.CONNECT_SPOTIFY, eN.kVF.CONNECT_PLAYSTATION, eN.kVF.SURVEY, eN.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR, eN.kVF.IGNORE_USER_FEEDBACK_NAGBAR, eN.kVF.REPORT_TO_MOD_SURVEY],
    eW = [eN.kVF.QUARANTINED, eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eN.kVF.VIEWING_ROLES, eN.kVF.INVITED_TO_SPEAK, eN.kVF.LURKING_GUILD, eN.kVF.VOICE_DISABLED, eN.kVF.NO_INPUT_DETECTED, eN.kVF.HARDWARE_MUTE, eN.kVF.H264_DISABLED, eN.kVF.DISPATCH_ERROR, eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.kVF.SPOTIFY_AUTO_PAUSED, eN.kVF.BLOCKED_BY_PROXY, eN.kVF.VOICE_CONNECTED_LAST_SESSION, eN.kVF.PENDING_MEMBER, eN.kVF.STREAMER_MODE, eN.kVF.SCHEDULED_MAINTENANCE],
    ez = {
        [eN.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = M.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = M.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, g.H4)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eG(eN.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eN.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, N.g)().show && !eG(eN.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [eN.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = $.ZP.getMember(n, t.id);
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
                return (0, W.gf)(t) === W.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eN.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.isLurking(t);
            }
        },
        [eN.kVF.VOICE_DISABLED]: { predicate: () => null != el.Z.getRemoteDisconnectVoiceChannelId() },
        [eN.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != el.Z.getLastSessionVoiceChannelId() },
        [eN.kVF.NO_INPUT_DETECTED]: { predicate: () => C.Z.hasActiveErrorOfType(f.u.NO_AUDIO_INPUT_DETECTED) },
        [eN.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.Z.hasActiveErrorOfType(f.u.NO_INPUT_DEVICES) },
        [eN.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !et.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eN.kVF.HARDWARE_MUTE]: {
            predicate: () => el.Z.isConnected() && et.Z.isHardwareMute() && et.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = et.Z.getInputDeviceId(),
                    t = X.Z.getVendor(e),
                    n = X.Z.getModel(e);
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
        [eN.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => B.Z.wasAutoPaused() },
        [eN.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eG(eN.kVF.BLOCKED_BY_PROXY) && Z.Z.blockedByProxy && x.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
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
                return null != (i = null != r && null != l && !(null == (t = ee.Z.getGuild(r)) ? void 0 : t.features.has(eN.oNc.GUILD_ONBOARDING)) && (null == (n = $.ZP.getMember(r, l.id)) ? void 0 : n.isPending)) && i;
            }
        },
        [eN.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, L.tq)() },
        [eN.kVF.CORRUPT_INSTALLATION]: { predicate: () => eC.isPlatformEmbedded && (!s.Z.supported() || em.Z.isCorruptInstallation()) },
        [eN.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && e_.Z.hasVideo(t) && !et.Z.supports(eP.AN.VIDEO) && !eG(eN.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eO.ZP.canRedeemPremiumPerks(t) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eG(eN.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eN.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [eN.kVF.DOWNLOAD_NAG]: { predicate: () => !eC.isPlatformEmbedded && !eG(eN.kVF.DOWNLOAD_NAG) },
        [eN.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != ea.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = ea.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eN.kVF.SURVEY]: {
            predicate: () => null != ed.Z.getCurrentSurvey(),
            metadata: () => ed.Z.getCurrentSurvey()
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
        [eN.kVF.CONNECT_SPOTIFY]: { predicate: () => !B.Z.hasConnectedAccount() && T.ZP.isObservedAppRunning(h.Z.get(eN.ABu.SPOTIFY).name) && !eG(eN.kVF.CONNECT_SPOTIFY) },
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
        [eN.kVF.CONNECT_PLAYSTATION]: { predicate: () => J.Z.isSuggestedAccountType(eN.ABu.PLAYSTATION) && null == J.Z.getAccount(null, eN.ABu.PLAYSTATION) && !eG(eN.kVF.CONNECT_PLAYSTATION) },
        [eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_2]).length > 0 && !eG(eN.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eI.Z.getAlmostExpiringTrialOffers([eA.Si.TIER_0]).length > 0 && !eG(eN.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eN.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
            predicate: () => {
                let { enabled: e } = U.D.getCurrentConfig({ location: 'NoticeStore.NoticeDefinition.predicate' });
                return !!e && eI.Z.getAlmostExpiringDiscountOffers([eA.Si.TIER_2]).length > 0 && !eG(eN.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING);
            }
        },
        [eN.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eN.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    s = null != t && t.status === eN.O0b.CANCELED && !o && i <= 7 && i >= 0 && (0, eO.M5)(n, eA.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_UNCANCEL) && s;
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
                    s = eg.Z.applicationIdsFetched.has(eA.CL),
                    a = eg.Z.getForApplication(eA.CL),
                    c = null != t ? (0, eO.Af)(t) : null,
                    d = null != c ? eO.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != a &&
                        null != c &&
                        Array.from(a).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    h = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== eN.O0b.PAST_DUE && !o && s && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_MISSING_PAYMENT) && h;
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
                    i = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === eN.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
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
                return !eG(eN.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eN.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eN.xW$.MFA_SMS) && !t.hasFlag(eN.xW$.STAFF) && !t.hasFlag(eN.xW$.PARTNER) && !eG(eN.kVF.MFA_SMS_BACKUP);
            }
        },
        [eN.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ef.Z.testModeApplicationId,
            metadata: () => {
                if (null == ef.Z.testModeApplicationId) return {};
                let e = ef.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eN.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eG(eN.kVF.PREMIUM_REACTIVATE) && k.Z.shouldShowReactivateNotice() },
        [eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    r = null != t && null != t.paymentSourceId ? eE.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != r && eb.Uk.has(r.type),
                    s = null != t && t.status === eN.O0b.PAST_DUE && !i && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eG(eN.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s;
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
        [eN.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, D.e)() && !eG(eN.kVF.POMELO_ELIGIBLE) },
        [eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (null != t && null != y.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(eN.oNc.COMMUNITY)) && !eG(eN.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
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
        [eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eG(eN.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.Z.getEligibleGuildsForNagActivate().length && (0, E.Lm)() },
        [eN.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return V.SI(t);
            }
        },
        [eN.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = H.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, m.V9)(e),
                    n = F.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= ey.Ot;
            },
            metadata: () => {
                let e = H.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, m.V9)(e) : null };
            }
        },
        [eN.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null != (t = eE.Z.paymentSources) ? t : {};
                return v.Z.getIsTargeted() && !(0, eO.I5)(n) && 0 !== Object.keys(i).length;
            }
        },
        [eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !eG(eN.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && G.L0(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        },
        [eN.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
            predicate: () => G.Rr(),
            metadata: () => ({ sampleRate: 0.1 })
        },
        [eN.kVF.REPORT_TO_MOD_SURVEY]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                return null != n && (0, w.s)(t, n);
            }
        }
    };
function eH() {
    var e, t, n;
    if (!S.Z.isConnected()) return !1;
    eF = null;
    let i = eh.default.getCurrentUser();
    if (null == i) return !1;
    let r = ep.Z.getPremiumSubscription(),
        l = es.Z.getGuildId(),
        o = eo.Z.getVoiceChannelId(),
        s = null != o ? e_.Z.getVoiceStateForChannel(o) : null;
    for (let n of eR.a ? eW : eB)
        if (
            null != ez[n] &&
            ez[n].predicate({
                selectedGuildId: l,
                voiceChannelId: o,
                voiceState: s,
                currentUser: i,
                premiumSubscription: r
            })
        ) {
            let o =
                null == (e = (t = ez[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: i,
                          premiumSubscription: r,
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
                })({}, eZ),
                {
                    type: n,
                    metadata: o
                }
            );
            break;
        }
    if (null != eF) {
        (null == (n = eF.metadata) ? void 0 : n.sampleRate) != null && null == ex[eF.type] && (ex[eF.type] = Math.random() <= eF.metadata.sampleRate);
        let e = !1 === ex[eF.type];
        (eG(eF.type) || e) && (eF = null);
    }
}
function eY() {
    return (ec.Z.enabled || delete ej[eN.kVF.STREAMER_MODE], eH());
}
class eK extends (i = o.ZP.Store) {
    initialize() {
        (this.syncWith([ed.Z, er.Z, Q.Z, es.Z, j.Z, eI.Z, K.Z, J.Z, z.Z, R.Z, F.Z, H.Z], eH), this.waitFor(eh.default, ea.Z, ee.Z, $.ZP, el.Z, et.Z, ec.Z, O.Z, es.Z, eu.Z, B.Z, T.ZP, er.Z, eT.Z, eS.Z, ef.Z, en.Z, ep.Z, em.Z, Q.Z, eE.Z, ei.Z, j.Z, eg.Z, eI.Z, J.Z, P.Z, p.Z, Z.Z, F.Z, H.Z));
    }
    hasNotice() {
        return null != eF && null != eF.type;
    }
    getNotice() {
        return null == eu.Z.getAction() ? eF : null;
    }
    isNoticeDismissed(e) {
        return eG(e);
    }
}
eD(eK, 'displayName', 'NoticeStore');
let eX = new eK(d.Z, {
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
        return e.user.id === Y.default.getId() && eH();
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
                return t !== Y.default.getId();
            }) && eH()
        );
    },
    STREAMER_MODE_UPDATE: eY,
    RUNNING_STREAMER_TOOLS_CHANGE: eY,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete ej[eN.kVF.DISPATCH_ERROR], eH());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete ej[eN.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eH();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eH();
    },
    NOTICE_SHOW: function (e) {
        eF = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eF && (null == e.id || e.id === eF.id) && (eV(eF.type, e.isTemporary, e.untilAtLeast), eH());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (eV(t), eH());
    },
    LOGOUT: function () {
        ((ej = {}), (ex = {}), (eF = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
    PROXY_BLOCKED_REQUEST: eH,
    REPORT_AV_ERROR: eH
});
