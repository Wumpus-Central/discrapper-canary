n.d(t, { w: () => nr, A: () => na });
var i = n(477900),
    l = n(582128),
    r = n(536637),
    s = n.n(r);
if (221552 == n.j) var a = n(561028);
var E = n(299855),
    o = n.n(E),
    c = n(17928);
if (221552 == n.j) var u = n(462887);
if (221552 == n.j) var _ = n(834730);
if (221552 == n.j) var A = n(939249);
if (221552 == n.j) var T = n(417098);
if (221552 == n.j) var d = n(28863);
if (221552 == n.j) var I = n(403581);
if (221552 == n.j) var N = n(192308);
if (221552 == n.j) var R = n(289873);
var C = n(157559),
    O = n(827343),
    S = n(830215),
    D = n(228366);
function m(e) {
    D.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var P = n(912851);
let p =
    221552 == n.j
        ? {
              clearRemoteDisconnectVoiceChannelId() {
                  D.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
              },
              clearLastSessionVoiceChannelId() {
                  D.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
              },
          }
        : null;
var f = n(730852),
    M = n(785796),
    g = n(55619),
    h = n(246605),
    U = n(271866),
    L = n(736653),
    y = n(77729),
    k = n(573648),
    x = n(793574),
    G = n(688810),
    j = n(587895),
    v = n(315982),
    q = n(235986),
    X = n(626584),
    b = n(554146);
if (221552 == n.j) var B = n(691540);
if (221552 == n.j) var F = n(857250);
if (221552 == n.j) var w = n(97483);
var V = n(803306),
    H = n(975807),
    K = n(968309),
    Y = n(75678),
    W = n(492462),
    Q = n(741231),
    Z = n(287809),
    z = n(174459),
    $ = n(920050),
    J = n(635995),
    ee = n(789861),
    et = n(220038),
    en = n(202541);
n(92737);
var ei = n(652215),
    el = n(49999),
    er = n(310235),
    es = n(375708);
function ea(e) {
    let { markAsDismissed: t } = e,
        n = (0, c.bG)([Z.default], () => Z.default.getCurrentUser()),
        r = (0, et.d6)(n),
        { analyticsLocations: s } = (0, G.Ay)(x.A.CALL_OF_DUTY_3PP_NAGBAR),
        a = l.useCallback(() => {
            (0, Q.A)(ei.BVt.NITRO_HOME, { search: (0, W.stringify)({ perk: $.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        E = l.useCallback(() => {
            (z.default.track(ei.HAw.APP_NOTICE_CLOSED, { notice_type: ei.kqX.COD_3PP_NAGBAR }), t(el.i.USER_DISMISS));
        }, [t]),
        o = l.useCallback(() => {
            (z.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: ei.kqX.COD_3PP_NAGBAR }),
            t(el.i.TAKE_ACTION),
            r === et.F5.NITRO)
                ? a()
                : (0, Y.A)({ subscriptionTier: en.pe.TIER_2, analyticsLocations: s, onSubscriptionConfirmation: a });
        }, [s, t, a, r]);
    if (null == r) return null;
    let u = r === et.F5.NITRO,
        _ = es.intl.formatToPlainString(u ? er.default["hworR+"] : er.default["RuZS+B"], { validDates: (0, ee.a1)() }),
        A = es.intl.string(u ? er.default.niUDET : er.default.mHRW3e);
    return (0, i.jsxs)(J.T0, {
        onClick: E,
        children: [(0, i.jsx)(J.In, { children: _ }), (0, i.jsx)(J.fY, { text: A, onClick: o })],
    });
}
var eE = n(745299),
    eo = n(976860),
    ec = n(780964),
    eu = n(718446),
    e_ = n(766075),
    eA = n(879945),
    eT = n(379848),
    ed = n(355097),
    eI = n(971656);
function eN(e) {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(eT.Ay, {
        contentTypes: [t],
        groupName: el.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case b.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: eI.c9 }),
                            (0, i.jsx)("i", { className: eI.Vz }),
                            (0, i.jsx)("i", { className: eI.p0 }),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, N.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("915082"),
                                            n.e("944602"),
                                            n.e("825280"),
                                        ]).then(n.bind(n, 987482));
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: es.intl.string(es.t["1WjMbC"]),
                            }),
                        ],
                    });
                case b.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: eI.TN }),
                            es.intl.string(es.t.lgwX26),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    ((0, H.A)(ei.AMi.META_QUEST), r(el.i.TAKE_ACTION));
                                },
                                children: es.intl.string(es.t["1WjMbC"]),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(eA.A, { className: eI.tV }),
                            es.intl.string(es.t["5NUVHH"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(T.PM, { noticeType: l, onClick: () => r(el.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: eI.tV,
                                src: k.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            es.intl.string(es.t.WHWgoY),
                            (0, i.jsx)(T.zr, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(el.i.USER_DISMISS), noticeType: l }),
                            es.intl.string(es.t["3qKN/h"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: async () => {
                                    r(el.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, N.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("113391"),
                                                n.e("82721"),
                                                n.e("104736"),
                                                n.e("419631"),
                                                n.e("840114"),
                                            ]).then(n.bind(n, 328009));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    ticket: t,
                                                    challenge: l,
                                                    showAccountSettingsButton: !0,
                                                });
                                        });
                                    } catch (e) {
                                        (0, B.P0)((0, F.o)(es.intl.string(es.t.xSCvBf), w.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: es.intl.string(es.t["ff/XXy"]),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: eI.lK }),
                            (0, i.jsx)("span", { className: eI.$t, children: es.intl.string(es.t["+urf75"]) }),
                            (0, i.jsx)(T.Z_, {
                                className: eI.CO,
                                noticeType: l,
                                onClick: () => {
                                    (z.default.track(ei.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: ei.JJy.NOTIFICATION_BAR,
                                        location_object: ei.ZSU.BUTTON_CTA,
                                    }),
                                        (0, e_.openUserSettings)(ec.X.NITRO_PANEL));
                                },
                                children: es.intl.string(es.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(T.PM, {
                                onClick: () => {
                                    (r(el.i.UNKNOWN), (0, V.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(eE.A, {
                        dismissCurrentNotice: () => r(el.i.UNKNOWN),
                        subscriptionTier: en.pe.TIER_2,
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(eE.A, {
                        dismissCurrentNotice: () => r(el.i.UNKNOWN),
                        subscriptionTier: en.pe.TIER_0,
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(T.PM, { noticeType: l, onClick: () => r(el.i.UNKNOWN) }),
                            es.intl.string(es.t["0KFB2B"]),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (r(el.i.UNKNOWN), (0, e_.openUserSettings)(ec.X.NITRO_PANEL));
                                },
                                children: es.intl.string(es.t.pyYSiO),
                            }),
                        ],
                    });
                case b.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DANGER,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["7490vQ"]),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, eo.pX)((0, eu.settingsPathToRoute)(ed.od.ACCOUNT));
                                },
                                children: es.intl.string(es.t.Vm8akB),
                            }),
                        ],
                    });
                case b.M.COD_3PP_NAGBAR_NOTICE:
                    return (0, i.jsx)(ea, { markAsDismissed: r });
                case b.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["O9GI+k"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: () => {
                                    (0, Y.A)({
                                        subscriptionTier: en.pe.TIER_2,
                                        analyticsLocations: [x.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: ei.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(el.i.UNKNOWN),
                                    });
                                },
                                noticeType: l,
                                children: es.intl.string(es.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
}
var eR = n(877624),
    eC = n(412260),
    eO = n(131607),
    eS = n(823901);
function eD(e) {
    let t,
        n,
        { dismissibleContent: l } = e,
        { snowflakeId: r, couldShow: s } =
            ((t = (0, c.bG)([eC.A], () => eC.A.getGiftPromotion()?.id)),
            (n = (0, c.bG)([eC.A], () => null != eC.A.getMarketingComponentByType(eR.C.GIFT_REMINDER_NAGBAR))),
            l === b.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [a, E] = (0, eO.Cc)(s ? l : null, r ?? "", el.m.NOTICE_BAR, !0);
    return null == a
        ? null
        : a === b.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(eS.y, { markAsDismissed: (e) => E(e) })
          : void 0;
}
var em = n(264779),
    eP = n(962644),
    ep = n(158045),
    ef = n(723970);
function eM(e) {
    let { dismissibleContent: t } = e,
        n = (0, em.Cp)(),
        r = (0, c.bG)([Z.default], () => !ep.Ay.isPremium(Z.default.getCurrentUser())),
        s = l.useCallback(() => {
            (z.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, e_.openUserSettings)(ec.X.GIFT_PANEL),
                eP.Ay.dismissOutboundPromotionNotice());
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(eT.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: el.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === b.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (eP.Ay.dismissOutboundPromotionNotice(), null !== n && n(el.i.USER_DISMISS));
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ef.P }),
                              r ? es.intl.string(es.t["5JMiOo"]) : es.intl.string(es.t["Pzh+G2"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (s(), null !== n && n(el.i.TAKE_ACTION));
                                  },
                                  children: es.intl.string(es.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
}
var eg = n(532205),
    eh = n(487329),
    eU = n(102609),
    eL = n(736056);
if (221552 == n.j) var ey = n(194261);
var ek = n(548118),
    ex = n(134413),
    eG = n(221950),
    ej = n(71393),
    ev = n(309010),
    eq = n(967198),
    eX = n(585510),
    eb = n(834409),
    eB = n(903093),
    eF = n(746080),
    ew = n(856093);
function eV(e) {
    let { onDismiss: t } = e,
        r = (0, c.bG)([eq.A], () => eq.A.getGuildId()),
        s = (0, c.bG)([ev.Ay], () => (null != r ? ev.Ay.getChannelId(r) : null), [r]),
        a = r ?? null,
        E = (0, c.bG)([ej.A], () => (null != a ? ej.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: o, incidentData: u, isUnderLockdown: _ } = (0, eX.Li)(a),
        A = (0, ex.fw)(E?.id ?? ei.dJq),
        d = l.useCallback(() => null != E && (0, eG.aZ)(E.id), [E]);
    if (null == E || null == u || !o) return null;
    function I(e) {
        if (null != E) {
            if (e && A && s !== eF.VV.MEMBER_SAFETY && d())
                return void z.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                    guild_id: E.id,
                });
            (0, N.openModalLazy)(async () => {
                let e = { source: eb.Eo.NAGBAR, alertType: (0, eB.$5)(u) },
                    { default: t } = await Promise.all([
                        n.e("684290"),
                        n.e("660608"),
                        n.e("940258"),
                        n.e("273669"),
                        n.e("346313"),
                        n.e("343233"),
                    ]).then(n.bind(n, 671576));
                return (n) => (0, i.jsx)(t, { ...n, guildId: E.id, analyticsData: e });
            });
        }
    }
    let R = (0, i.jsx)(ek.Ay, { className: ew.$f, guild: E, size: ek.Ay.Sizes.MINI }),
        C = (0, eB.ql)(u, E.name);
    if (null != (u.dmsDisabledUntil ?? u.invitesDisabledUntil) && _)
        return (0, i.jsxs)(T.$T, {
            className: ew.lm,
            color: T.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(T.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                C,
                (0, i.jsx)(T.zr, {
                    className: ew.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: ew.rx,
                        children: [
                            (0, i.jsx)(ey.LockIcon, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: es.intl.string(es.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let O = (0, eB.P$)(u)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: E.name })
            : (0, eB.Qm)(u)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], { guildName: E.name })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: E.name }),
        S = A && s === eF.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(T.$T, {
        className: ew.lm,
        color: T.Hv.WARNING,
        children: [
            (0, i.jsx)(T.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            O,
            !S &&
                (0, i.jsx)(T.zr, {
                    className: ew.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: ew.rx,
                        children: (0, i.jsx)("span", { children: es.intl.string(es.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var eH = n(995786),
    eK = n(206835),
    eY = n(280450),
    eW = n(696451),
    eQ = n(229527),
    eZ = n(81400),
    ez = n(340837);
function e$(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, eZ.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? es.intl.string(es.t["6ndMcq"]) : es.intl.string(es.t["0eiu6J"]),
        a = r ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
    return (0, i.jsxs)(T.$T, { color: T.Hv.DANGER, children: [s, (0, i.jsx)(T.zr, { onClick: l, children: a })] });
}
function eJ() {
    let e = (0, eK.A)({ scrollPosition: ed._F.GUILD_TAG });
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(T.zr, { onClick: e, children: es.intl.string(es.t.SJehVW) }),
        ],
    });
}
function e0(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, x.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, c.bG)(
            [eY.default, eW.Ay],
            () => {
                if (null == n.guildId) return new Set();
                let e = eY.default.getId();
                return (0, eQ.wj)(eW.Ay.getMember(n.guildId, e));
            },
            [n.guildId],
        );
    return r.has(ez.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(ez.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(e$, { ...n, analyticsLocations: l })
        : r.has(ez.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eJ, {})
          : (0, i.jsx)(e$, { ...n, analyticsLocations: l });
}
var e1 = n(202384),
    e2 = n(51758);
n(321073);
var e5 = n(503698),
    e3 = n.n(e5);
if (221552 == n.j) var e7 = n(806163);
if (221552 == n.j) var e8 = n(314116);
if (221552 == n.j) var e9 = n(821609);
var e6 = n(334465),
    e4 = n(624458),
    te = n(513461),
    tt = n(709977),
    tn = n(212455),
    ti = n(967641),
    tl = n(934966);
let tr =
    221552 == n.j
        ? function () {
              let e = (0, c.bG)([eq.A], () => eq.A.getGuildId(), []),
                  t = (0, c.bG)([ej.A], () => ej.A.getGuild(e), [e]),
                  l = (0, c.bG)([tn.A], () => (null != e ? tn.A.getRequest(e) : null), [e]),
                  r = (0, e7.zy)(),
                  s = (0, e6.B)(r.pathname, ei.BVt.CHANNEL(t?.id, eF.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, tt.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? te.B5.STARTED,
                  E = null,
                  o = null,
                  u = null,
                  A = [ti.lm, tl.lm];
              switch (a) {
                  case te.B5.SUBMITTED:
                      ((E = es.intl.string(es.t["5iLvSx"])),
                          (o = es.intl.string(es.t.mqtdmQ)),
                          (u = function () {
                              null != t &&
                                  (0, e8.A)({
                                      title: es.intl.string(es.t.aIz1oV),
                                      subtitle: es.intl.string(es.t["13tjTU"]),
                                      variant: "primary",
                                      confirmText: es.intl.string(es.t["cY+Oob"]),
                                      onConfirm: () => e4.A.removeGuildJoinRequest(t.id),
                                  });
                          }));
                      break;
                  case te.B5.REJECTED:
                      ((E = es.intl.string(es.t.lk30cY)),
                          (o = es.intl.string(es.t["8RrsHr"])),
                          (u = function () {
                              null != t &&
                                  (0, N.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("298903"), n.e("914382")]).then(
                                          n.bind(n, 463325),
                                      );
                                      return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                                  });
                          }),
                          A.push(ti.z3));
                      break;
                  default:
                      ((E = es.intl.string(es.t.G5YKXP)),
                          (o = es.intl.string(es.t["r8/DT+"])),
                          (u = function () {
                              null != t && (0, e1.Ze)(t.id);
                          }));
              }
              return (0, i.jsxs)("div", {
                  className: e3()(...A),
                  children: [
                      (0, i.jsx)(_.E, { className: ti.wx, variant: "text-sm/normal", children: E }),
                      (0, i.jsx)(e9.$, { variant: "overlay-primary", size: "sm", onClick: u, text: o }),
                  ],
              });
          }
        : null;
if (221552 == n.j) var ts = n(477155);
var ta = n(645460);
function tE(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(T.$T, {
        className: ta.eR,
        children: [
            r && (0, i.jsx)(T.PM, { onClick: l, className: ta.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(e9.$, { text: t, variant: "overlay-secondary", size: "sm", icon: ts.r, onClick: n }),
        ],
    });
}
var to = n(468689),
    tc = n(699609);
if (221552 == n.j) var tu = n(862482);
var t_ = n(66834),
    tA = n(449054),
    tT = n(451543);
let td =
    221552 == n.j
        ? function () {
              let e = (0, c.bG)([eq.A], () => eq.A.getGuildId(), []),
                  t = (0, c.bG)([ej.A], () => ej.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              async function s() {
                  if (null != t) {
                      r(!0);
                      try {
                          (tA.cf(t.id), await t_.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR }));
                      } catch {
                          r(!1);
                      }
                  }
              }
              return (0, i.jsxs)("div", {
                  className: e3()(tT.lm, tl.lm),
                  children: [
                      (0, i.jsxs)(tu.$n, {
                          look: tu.$n.Looks.OUTLINED,
                          color: tu.$n.Colors.WHITE,
                          size: tu.$n.Sizes.NONE,
                          className: e3()(tT.x6, tT.aX),
                          innerClassName: tT.gb,
                          onClick: function () {
                              (0, eo.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(ts.r, { size: "xs", color: "currentColor", className: tT.UE }),
                              es.intl.string(es.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(_.E, {
                          className: tT.wx,
                          variant: "text-sm/normal",
                          children: es.intl.string(es.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(tu.$n, {
                          className: tT.x6,
                          look: tu.$n.Looks.OUTLINED,
                          color: tu.$n.Colors.WHITE,
                          size: tu.$n.Sizes.NONE,
                          submitting: n,
                          onClick: s,
                          children: es.intl.format(es.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
var tI = n(74848),
    tN = n(899847),
    tR = n(191627),
    tC = n(513687),
    tO = n(597111);
let tS =
    221552 == n.j
        ? {
              "--custom-notice-background": "var(--background-feedback-warning)",
              "--custom-notice-text": "var(--text-strong)",
          }
        : null;
function tD(e) {
    let { daysRemaining: t } = e;
    (0, es.useSyncMessages)(tC.messagesLoader);
    let n = l.useCallback(() => {
        (z.default.track(ei.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            tN.Ay.selectTab(tR.u9.REQUESTS),
            (0, e_.openUserSettings)(ec.X.FAMILY_CENTER_PANEL));
    }, [t]);
    return (0, i.jsx)(T.$T, {
        color: T.Hv.CUSTOM,
        style: tS,
        children: (0, i.jsxs)("div", {
            className: tO.Q,
            children: [
                (0, i.jsx)(_.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? es.intl.format(tC.default.F0hdak, { count: t })
                            : es.intl.string(tC.default.LTzc00),
                }),
                (0, i.jsx)(e9.$, {
                    variant: "secondary",
                    size: "sm",
                    text: es.intl.string(tC.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tm = n(732280),
    tP = n(754804),
    tp = n(166403),
    tf = n(543767),
    tM = n(228662);
function tg(e) {
    let { noticeType: t, analyticsLocation: n, onFallback: l, children: r } = e,
        s = (0, c.bG)([tp.A], () => tp.A.getPremiumTypeSubscription()),
        { analyticsLocations: a } = (0, G.Ay)(n),
        E = null != s && s.status === ei.Dmq.PAST_DUE,
        [o, u] = (0, tf.C8)({ subscriptionId: null != s ? s.id : "", preventFetch: !E }),
        _ = E && null == o && null == u;
    return (
        (0, tM.A)("nagbar", null != s ? s.id : "", u),
        (0, i.jsx)(T.Z_, {
            noticeType: t,
            disabled: _,
            onClick: () => {
                null != s && null != o
                    ? (0, Y.A)({ initialPlanId: s.planIdFromItems, openInvoiceId: o.id, analyticsLocations: a })
                    : l();
            },
            children: r,
        })
    );
}
var th = n(378974),
    tU = n(396813),
    tL = n(14594);
function ty() {
    let [e, t] = (0, eO.Wl)(b.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tL.aH });
    return e !== b.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.BRAND,
              children: [
                  (0, i.jsx)(T.PM, { onClick: () => t(el.i.DISMISS), noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  es.intl.string(es.t.XkeW9N),
                  (0, i.jsx)(T.Z_, {
                      onClick: () => {
                          ((0, N.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("312513"),
                                  n.e("36395"),
                                  n.e("155925"),
                                  n.e("218413"),
                                  n.e("137381"),
                                  n.e("326484"),
                                  n.e("574192"),
                              ]).then(n.bind(n, 976627));
                              return (t) => (0, i.jsx)(e, { ...t });
                          }),
                              t(el.i.TAKE_ACTION));
                      },
                      noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: es.intl.string(es.t.vcdNKv),
                  }),
              ],
          });
}
if (221552 == n.j) var tk = n(825484);
var tx = n(379257),
    tG = n(306537),
    tj = n(734057),
    tv = n(849736),
    tq = n(354583),
    tX = n(366098),
    tb = n(418208),
    tB = n(931841);
function tF(e) {
    if (!e && (0, tb.Cf)())
        return void tx.A.showAgeVerificationGetStartedModal({ entryPoint: tG.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = ev.Ay.getVoiceChannelId();
    if (null == t) return;
    let n = tj.A.getChannel(t);
    null != n && (0, tv.e7)(n, e);
}
function tw(e) {
    let { channelId: t } = e,
        n = (0, tX.D3)(t) ?? 0,
        l = (0, tX.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tB.Z5,
              children: (0, i.jsx)("div", { className: e3()(tB.qQ, tB.lN), children: es.intl.string(es.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tB.Z5,
                children: (0, i.jsx)("div", { className: e3()(tB.qQ, tB.lN), children: es.intl.string(es.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tB.Z5,
                  children: (0, i.jsx)("div", { className: e3()(tB.qQ, tB.lN), children: es.intl.string(es.t.eHq2OF) }),
              })
            : null;
}
function tV() {
    let e = (0, tq.A)();
    return null == e
        ? null
        : (0, i.jsxs)(T.$T, {
              className: tB.kL,
              color: T.Hv.DEFAULT,
              children: [
                  es.intl.string(es.t.Ul1RJQ),
                  (0, i.jsx)(tw, { channelId: e.id }),
                  (0, i.jsxs)(tk.e, {
                      size: "sm",
                      className: tB.GC,
                      children: [
                          (0, i.jsx)(e9.$, {
                              variant: "overlay-primary",
                              text: es.intl.string(es.t.MpO0px),
                              onClick: () => tF(!1),
                          }),
                          (0, i.jsx)(e9.$, {
                              variant: "secondary",
                              onClick: () => tF(!0),
                              text: es.intl.string(es.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tH = n(952818),
    tK = n(935671);
function tY() {
    (0, tK.sL)("nagbar");
}
function tW() {
    return null == (0, c.bG)([tH.Ay], () => tH.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.DANGER,
              children: [
                  (0, i.jsx)(T.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => nr() }),
                  es.intl.string(es.t["5rPt+j"]),
                  (0, i.jsx)(T.Z_, {
                      onClick: tY,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: es.intl.string(es.t["1iI46O"]),
                  }),
              ],
          });
}
function tQ() {
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            es.intl.string(es.t.lQiCJ6),
            (0, i.jsx)(T.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, e_.openUserSettings)(ec.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: es.intl.string(es.t["UgQN+9"]),
            }),
        ],
    });
}
if (221552 == n.j) var tZ = n(189213);
if (221552 == n.j) var tz = n(150934);
function t$(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(tZ.Modal, {
        size: "md",
        title: es.intl.string(es.t["zQ1+Jw"]),
        subtitle: es.intl.string(es.t.K1gWXn),
        actions: [
            {
                text: es.intl.string(es.t.BddRzS),
                onClick: () => {
                    (t && O.A.setSilenceWarning(!1), e.onClose());
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(tz.S, {
            checked: t,
            onChange: (e) => n(e),
            label: es.intl.string(es.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var tJ = n(25578),
    t0 = n(763827),
    t1 = n(67480),
    t2 = n(147964),
    t5 = n(177141),
    t3 = n(975571),
    t7 = n(723702),
    t8 = n(325278),
    t9 = n(831502),
    t6 = n(731854);
let t4 = new X.A("Notice");
function ne(e) {
    let { error: t, allowClick: n = !1 } = e,
        l = (0, eh.B1)(t)?.errorCode,
        r = es.intl.formatToPlainString(es.t.ejOT95, { errorCode: l }),
        s = (0, i.jsx)(_.E, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: eI.fU,
            selectable: !0,
            children: r,
        });
    return n
        ? (0, i.jsx)(A.D, {
              tag: "span",
              className: eI.wz,
              onClick: () => open(t3.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function nt(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    nr();
                },
            }),
            es.intl.string(es.t.o3zuYz),
            (0, i.jsx)(ne, { error: eh.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(T.eC, {
                href: t3.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: es.intl.string(es.t.RYKKox),
            }),
        ],
    });
}
function nn(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    nr();
                },
            }),
            es.intl.string(es.t.Up0ApK),
            (0, i.jsx)(ne, { error: eh.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(T.zr, {
                onClick: () => (0, e_.openUserSettings)(ec.X.CAMERA_CATEGORY),
                children: es.intl.string(es.t.kRwxfi),
            }),
        ],
    });
}
function ni(e) {
    return (0, t7.isWindows)() && o().satisfies(y.A?.os.release, t8.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function nl(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, tI.x5)(t6.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: E } = (0, c.cf)([tJ.Ay], () => ({
            inputDeviceOSMuted: tJ.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tJ.Ay.getInputDeviceOSVolume(),
        })),
        o = !1;
    return (
        !0 === a
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(T.eC, { href: ni(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
            : 0 === E
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(T.eC, { href: ni(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
              : tJ.Ay.supports(t6.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (o = !0),
                  (n = (0, i.jsx)(T.zr, {
                      onClick: () => {
                          (0, e_.openUserSettings)(ec.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(T.eC, {
                      href: t3.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: es.intl.string(es.t.RYKKox),
                  }))),
        (0, i.jsxs)(T.$T, {
            color: T.Hv.DANGER,
            children: [
                (0, i.jsx)(T.PM, {
                    noticeType: l,
                    onClick: () => {
                        (nr(), (0, N.openModal)((e) => (0, i.jsx)(t$, { ...e })));
                    },
                }),
                t,
                (0, i.jsx)(ne, { allowClick: o, error: eh.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function nr(e) {
    P.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let ns =
    221552 == n.j
        ? l.memo(function () {
              let e = (0, c.bG)([Z.default], () => Z.default.getCurrentUser()),
                  t = (0, c.bG)([eq.A], () => eq.A.getGuildId()),
                  r = (0, c.bG)([t5.Ay], () => t5.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  E = (0, L.Ay)(),
                  o = (0, e2.H)(t),
                  _ = (0, tm.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == _ &&
                              (r.type === ei.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === ei.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          (null != t && (n.guild_id = t),
                              _?.trialId != null && (n.trial_id = _.trialId),
                              (e = { notice_type: r.type, ...n }),
                              z.default.track(ei.HAw.APP_NOTICE_VIEWED, e));
                      }
                  }, [r?.type, t, _]),
                  l.useEffect(() => {
                      if (null != r && r.type === ei.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eL.A.getUserExperimentDescriptor(e.id);
                          (null != t && (0, eU.LQ)(e.id, t),
                              (async function () {
                                  null != r && r.metadata?.id != null && (await (0, h.oX)(r.metadata?.id));
                              })());
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? t5.Re[r.type] : null,
                  D = null != r.type ? t5.rV[r.type] : null,
                  P = null != r.type ? t5.f7[r.type] : null,
                  X = t5.pe[r.type];
              if (null != A) return (0, i.jsx)(eg.$, { dismissibleContent: A, noticeType: r.type });
              if (null != D) return (0, i.jsx)(eD, { dismissibleContent: D });
              if (null != P) return (0, i.jsx)(eM, { dismissibleContent: P });
              if (null != X) return (0, i.jsx)(eN, { dismissibleContent: X, noticeType: r.type });
              let b = r.metadata?.premiumType;
              switch (r.type) {
                  case ei.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(tQ, {});
                  case ei.kqX.LURKING_GUILD:
                      return (0, i.jsx)(td, {});
                  case ei.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(tr, {});
                  case ei.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tV, {});
                  case ei.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsx)(eV, { onDismiss: () => nr(B) });
                  case ei.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: F } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(F), noticeType: r.type }),
                              es.intl.format(es.t["08KQ1P"], {
                                  helpCenterLink: t3.A.getArticleURL(ei.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: w } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(w), noticeType: r.type }),
                              es.intl.format(es.t["8Je+dX"], {
                                  helpCenterLink: t3.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: V } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(V), noticeType: r.type }),
                              es.intl.string(es.t["9DJgOg"]),
                          ],
                      });
                  case ei.kqX.MACOS_DEPRECATED_MESSAGE:
                      let { dismissUntil: H } = r.metadata,
                          K = parseInt(y.A?.os.release.split(".")[0]),
                          W = ei.MVz.MACOS_19_DEPRECATE;
                      return (
                          21 === K ? (W = ei.MVz.MACOS_21_DEPRECATE) : 20 === K && (W = ei.MVz.MACOS_20_DEPRECATE),
                          (0, i.jsxs)(T.$T, {
                              color: T.Hv.WARNING,
                              children: [
                                  (0, i.jsx)(T.PM, { onClick: () => nr(H), noticeType: r.type }),
                                  es.intl.format(es.t.q8VPLo, { helpCenterLink: t3.A.getArticleURL(W) }),
                              ],
                          })
                      );
                  case ei.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: Q } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(Q), noticeType: r.type }),
                              es.intl.format(t7.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL, {
                                  helpCenterLink: t3.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(), noticeType: r.type }),
                              es.intl.string(es.t.iW0fcQ),
                              (0, i.jsx)(T.eC, {
                                  href: t3.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.LQG5j6),
                              }),
                          ],
                      });
                  case ei.kqX.GENERIC:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(T.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(T.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      (p.clearRemoteDisconnectVoiceChannelId(), nr());
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.bOQ3jV),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = t0.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tj.A.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      (p.clearLastSessionVoiceChannelId(), nr());
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.jY2lUA),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = t0.A.getLastSessionVoiceChannelId();
                                      null != e && null != tj.A.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.SPOTIFY_AUTO_PAUSED:
                      let $ = k.A.get(ei.fg2.SPOTIFY);
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: eI.tV,
                                  src: (0, u.q)(E) ? $.icon.darkSVG : $.icon.whiteSVG,
                              }),
                              es.intl.string(es.t.D8Cp76),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => (0, e_.openUserSettings)(ec.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.NiTd0e),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  className: eI.uD,
                                  href: t3.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: es.intl.string(es.t.CiqAIU),
                              }),
                          ],
                      });
                  case ei.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["f+Zaol"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (o && null != t ? (0, e1.Ze)(t) : v.R()),
                                  children: es.intl.string(es.t.fiNVin),
                              }),
                          ],
                      });
                  case ei.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["3sWbf3"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      (S.A.verifyResend(),
                                          C.A.show({
                                              title: es.intl.string(es.t.LykQYk),
                                              body: es.intl.format(es.t.azKEPy, { email: e?.email }),
                                              cancelText: es.intl.string(es.t.Vm8akB),
                                              onCancel: v.R,
                                          }));
                                  },
                                  children: es.intl.string(es.t.WnX4J2),
                              }),
                          ],
                      });
                  case ei.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => M.A.ackScheduledMaintenance(), noticeType: r.type }),
                              es.intl.format(es.t["yb96S+"], r.metadata),
                              (0, i.jsx)(T.eC, {
                                  href: `${ei.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(nl, { noticeType: r.type });
                  case ei.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(nt, { noticeType: r.type });
                  case ei.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
                      return (0, i.jsx)(nn, { noticeType: r.type });
                  case ei.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(T.$T, {
                              color: T.Hv.DANGER,
                              children: [
                                  es.intl.format(es.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(T.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          (O.A.setEnableHardwareMuteNotice(!1), nr());
                                      },
                                  }),
                                  (0, i.jsx)(T.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: r.type,
                                      children: es.intl.string(es.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      return null;
                  case ei.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(), noticeType: ei.kqX.STREAMER_MODE }),
                              es.intl.string(es.t.iEgBXp),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => g.A.setEnabled(!1),
                                  noticeType: ei.kqX.STREAMER_MODE,
                                  children: es.intl.string(es.t.R9GHya),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: J, applicationId: ee } = r.metadata,
                          et = t1.A.get(J),
                          el = j.A.getApplication(ee);
                      if (null == et || null == el) return null;
                      let er = { page: ei.liQ.IN_APP };
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => m(et.id),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eI.PC }),
                              es.intl.format(es.t["g3MU/+"], { applicationName: el.name, skuName: et.name }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("679157"),
                                              n.e("1955"),
                                              n.e("341161"),
                                              n.e("401696"),
                                              n.e("202985"),
                                              n.e("455021"),
                                              n.e("812196"),
                                              n.e("661630"),
                                              n.e("470126"),
                                              n.e("162775"),
                                              n.e("128804"),
                                              n.e("60882"),
                                              n.e("71151"),
                                              n.e("227853"),
                                              n.e("286615"),
                                              n.e("70866"),
                                              n.e("311541"),
                                              n.e("472847"),
                                              n.e("986735"),
                                              n.e("586662"),
                                              n.e("758053"),
                                              n.e("247471"),
                                              n.e("889002"),
                                              n.e("709976"),
                                              n.e("750955"),
                                              n.e("953343"),
                                              n.e("405763"),
                                              n.e("686731"),
                                              n.e("807432"),
                                              n.e("873532"),
                                              n.e("279774"),
                                              n.e("307158"),
                                              n.e("410470"),
                                              n.e("295570"),
                                              n.e("765208"),
                                              n.e("711562"),
                                              n.e("906470"),
                                              n.e("661157"),
                                              n.e("419121"),
                                              n.e("489020"),
                                              n.e("919789"),
                                              n.e("669130"),
                                              n.e("802890"),
                                              n.e("82937"),
                                              n.e("987221"),
                                              n.e("157064"),
                                              n.e("156957"),
                                              n.e("918786"),
                                              n.e("701335"),
                                              n.e("257935"),
                                              n.e("724086"),
                                              n.e("358937"),
                                              n.e("448738"),
                                              n.e("548938"),
                                              n.e("258407"),
                                              n.e("894292"),
                                              n.e("153302"),
                                              n.e("836576"),
                                              n.e("661779"),
                                              n.e("923981"),
                                              n.e("750370"),
                                              n.e("686809"),
                                              n.e("636909"),
                                              n.e("466592"),
                                              n.e("73946"),
                                              n.e("282050"),
                                              n.e("436101"),
                                              n.e("976888"),
                                              n.e("387970"),
                                              n.e("847445"),
                                              n.e("919659"),
                                              n.e("698136"),
                                              n.e("718368"),
                                              n.e("983513"),
                                              n.e("76928"),
                                              n.e("355502"),
                                              n.e("528311"),
                                              n.e("38012"),
                                              n.e("348567"),
                                              n.e("452075"),
                                              n.e("900277"),
                                              n.e("127962"),
                                              n.e("76428"),
                                              n.e("77473"),
                                              n.e("863232"),
                                              n.e("364827"),
                                              n.e("25279"),
                                              n.e("907167"),
                                              n.e("517888"),
                                              n.e("784569"),
                                              n.e("811133"),
                                              n.e("861060"),
                                              n.e("959880"),
                                              n.e("174016"),
                                              n.e("910471"),
                                              n.e("11301"),
                                              n.e("952372"),
                                              n.e("262156"),
                                              n.e("960235"),
                                              n.e("425412"),
                                              n.e("77333"),
                                              n.e("910486"),
                                              n.e("56366"),
                                              n.e("147662"),
                                              n.e("265607"),
                                              n.e("331988"),
                                              n.e("544571"),
                                              n.e("40291"),
                                              n.e("402368"),
                                              n.e("733115"),
                                              n.e("397270"),
                                              n.e("190779"),
                                              n.e("373122"),
                                              n.e("217951"),
                                              n.e("221856"),
                                              n.e("293159"),
                                              n.e("186212"),
                                              n.e("755936"),
                                              n.e("172503"),
                                              n.e("760586"),
                                              n.e("833703"),
                                              n.e("55252"),
                                              n.e("362931"),
                                              n.e("745959"),
                                              n.e("858529"),
                                              n.e("793716"),
                                              n.e("481987"),
                                              n.e("595653"),
                                              n.e("958038"),
                                              n.e("171202"),
                                              n.e("346802"),
                                              n.e("576909"),
                                              n.e("406174"),
                                              n.e("715555"),
                                              n.e("146070"),
                                              n.e("523276"),
                                              n.e("729963"),
                                              n.e("812042"),
                                              n.e("102328"),
                                              n.e("830938"),
                                              n.e("563983"),
                                              n.e("821924"),
                                              n.e("147864"),
                                              n.e("50097"),
                                              n.e("728748"),
                                              n.e("40286"),
                                              n.e("791824"),
                                              n.e("562075"),
                                          ]).then(n.bind(n, 4630));
                                          (await e({
                                              applicationId: el.id,
                                              skuId: et.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, Y.A)({
                                                      initialPlanId: null,
                                                      subscriptionTier: en.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: er,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: er,
                                              context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                          }),
                                              m(et.id));
                                      } catch (e) {
                                          null != e && t4.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: es.intl.string(es.t.KEwPYx),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = t1.A.get(e),
                          l = j.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => nr(),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eI.PC }),
                              es.intl.format(es.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(T.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => nr(),
                                      to: {
                                          pathname: ei.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: es.intl.string(es.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case ei.kqX.SURVEY: {
                      let e = r.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: E } = e;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      (0, h.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      (a ? (0, th.K)(E) : window.open(s, "_blank"), (0, h.pX)(t, !1));
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case ei.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              es.intl.string(es.t["ugxmk/"]),
                              (0, i.jsx)(T.eC, {
                                  href: t3.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              es.intl.string(es.t.wVjKGi),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("915082"),
                                              n.e("944602"),
                                              n.e("825280"),
                                          ]).then(n.bind(n, 987482));
                                          return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                                      });
                                  },
                                  children: es.intl.string(es.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case ei.kqX.DISPATCH_ERROR:
                      if (null == r.metadata) return null;
                      let { error: ea } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nr(), noticeType: ei.kqX.DISPATCH_ERROR }),
                              ea?.displayMessage,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("640380"), n.e("588014")]).then(
                                              n.bind(n, 627261),
                                          );
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == r.metadata) return null;
                      let { progress: eE, total: eo, name: eu } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => nr(),
                                  noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  children: [
                                      null != eu
                                          ? es.intl.formatToPlainString(es.t["pHj+z4"], {
                                                name: `${eu}`,
                                                progress: eE,
                                                total: eo,
                                            })
                                          : es.intl.formatToPlainString(es.t["lHZn+A"], { progress: eE, total: eo }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: eI.gO }),
                                  ],
                              }),
                          ],
                      });
                  case ei.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != t2.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(T.$T, {
                              color: T.Hv.WARNING,
                              children: (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  align: q.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: es.intl.format(es.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(T.PM, { onClick: U.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(T.$T, {
                          color: T.Hv.WARNING,
                          children: (0, i.jsxs)(q.A, {
                              justify: q.A.Justify.CENTER,
                              align: q.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: es.intl.format(es.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(T.PM, { onClick: U.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case ei.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tc.A, {});
                  case ei.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(T.$T, {
                          color:
                              b === en.PremiumTypes.TIER_1
                                  ? T.Hv.PREMIUM_TIER_1
                                  : b === en.PremiumTypes.TIER_0
                                    ? T.Hv.PREMIUM_TIER_0
                                    : T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      nr(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eI.PC }),
                              b === en.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : b === en.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      (nr(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("586662"),
                                                  n.e("1955"),
                                                  n.e("341161"),
                                                  n.e("401696"),
                                                  n.e("661630"),
                                                  n.e("202985"),
                                                  n.e("455021"),
                                                  n.e("812196"),
                                                  n.e("718368"),
                                                  n.e("258407"),
                                                  n.e("894292"),
                                                  n.e("153302"),
                                                  n.e("758053"),
                                                  n.e("836576"),
                                                  n.e("983513"),
                                                  n.e("419121"),
                                                  n.e("162775"),
                                                  n.e("60882"),
                                                  n.e("489020"),
                                                  n.e("919789"),
                                                  n.e("669130"),
                                                  n.e("70866"),
                                                  n.e("802890"),
                                                  n.e("82937"),
                                                  n.e("470126"),
                                                  n.e("128804"),
                                                  n.e("71151"),
                                                  n.e("227853"),
                                                  n.e("286615"),
                                                  n.e("311541"),
                                                  n.e("472847"),
                                                  n.e("986735"),
                                                  n.e("247471"),
                                                  n.e("889002"),
                                                  n.e("709976"),
                                                  n.e("750955"),
                                                  n.e("953343"),
                                                  n.e("405763"),
                                                  n.e("686731"),
                                                  n.e("807432"),
                                                  n.e("873532"),
                                                  n.e("279774"),
                                                  n.e("307158"),
                                                  n.e("410470"),
                                                  n.e("295570"),
                                                  n.e("765208"),
                                                  n.e("711562"),
                                                  n.e("906470"),
                                                  n.e("661157"),
                                                  n.e("157064"),
                                                  n.e("156957"),
                                                  n.e("918786"),
                                                  n.e("701335"),
                                                  n.e("257935"),
                                                  n.e("724086"),
                                                  n.e("358937"),
                                                  n.e("448738"),
                                                  n.e("548938"),
                                                  n.e("661779"),
                                                  n.e("923981"),
                                                  n.e("750370"),
                                                  n.e("636909"),
                                                  n.e("466592"),
                                                  n.e("73946"),
                                                  n.e("282050"),
                                                  n.e("436101"),
                                                  n.e("976888"),
                                                  n.e("387970"),
                                                  n.e("847445"),
                                                  n.e("919659"),
                                                  n.e("698136"),
                                                  n.e("76928"),
                                                  n.e("355502"),
                                                  n.e("528311"),
                                                  n.e("38012"),
                                                  n.e("679157"),
                                                  n.e("987221"),
                                                  n.e("686809"),
                                                  n.e("348567"),
                                                  n.e("452075"),
                                                  n.e("900277"),
                                                  n.e("127962"),
                                                  n.e("76428"),
                                                  n.e("77473"),
                                                  n.e("863232"),
                                                  n.e("364827"),
                                                  n.e("25279"),
                                                  n.e("907167"),
                                                  n.e("517888"),
                                                  n.e("784569"),
                                                  n.e("811133"),
                                                  n.e("861060"),
                                                  n.e("959880"),
                                                  n.e("174016"),
                                                  n.e("910471"),
                                                  n.e("11301"),
                                                  n.e("952372"),
                                                  n.e("262156"),
                                                  n.e("960235"),
                                                  n.e("425412"),
                                                  n.e("77333"),
                                                  n.e("910486"),
                                                  n.e("56366"),
                                                  n.e("147662"),
                                                  n.e("265607"),
                                                  n.e("331988"),
                                                  n.e("544571"),
                                                  n.e("40291"),
                                                  n.e("402368"),
                                                  n.e("733115"),
                                                  n.e("397270"),
                                                  n.e("190779"),
                                                  n.e("373122"),
                                                  n.e("217951"),
                                                  n.e("221856"),
                                                  n.e("293159"),
                                                  n.e("186212"),
                                                  n.e("755936"),
                                                  n.e("172503"),
                                                  n.e("760586"),
                                                  n.e("833703"),
                                                  n.e("55252"),
                                                  n.e("362931"),
                                                  n.e("745959"),
                                                  n.e("858529"),
                                                  n.e("793716"),
                                                  n.e("481987"),
                                                  n.e("595653"),
                                                  n.e("958038"),
                                                  n.e("171202"),
                                                  n.e("346802"),
                                                  n.e("576909"),
                                                  n.e("406174"),
                                                  n.e("715555"),
                                                  n.e("523276"),
                                                  n.e("729963"),
                                                  n.e("812042"),
                                                  n.e("102328"),
                                                  n.e("830938"),
                                                  n.e("563983"),
                                                  n.e("821924"),
                                                  n.e("147864"),
                                                  n.e("50097"),
                                                  n.e("728748"),
                                                  n.e("40286"),
                                                  n.e("791824"),
                                                  n.e("114794"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: r.metadata.daysLeft,
                                                      premiumType: b,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          }));
                                  },
                                  children:
                                      b === en.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.BkbUPM)
                                          : b === en.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t.Px978X)
                                            : es.intl.string(es.t.LW5tCE),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eA, dismissUntil: eT } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      nr(eT);
                                  },
                              }),
                              es.intl.format(es.t.zxU0Kp, { daysPastDue: eA }),
                              (0, i.jsx)(tg, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_ONE_TIME_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nr(eT), (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: es.intl.string(es.t.q8rxeS),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      nr(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t.LlZaoX),
                              (0, i.jsx)(tg, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_INVALID_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nr(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: es.intl.string(es.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      nr(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t["30YfCr"]),
                              (0, i.jsx)(tg, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_MISSING_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nr(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: es.intl.string(es.t.U5pKWA),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      nr(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              b === en.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : b === en.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      (nr(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children:
                                      b === en.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.lboF5O)
                                          : b === en.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t["4UPwOq"])
                                            : es.intl.string(es.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(tE, {
                          buttonText: r.buttonText ?? es.intl.string(es.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => nr(),
                          showCloseButton: !0,
                      });
                  case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(e0, { guildId: t, analyticsLocations: s });
                  case ei.kqX.PARENTAL_CONSENT_WARNING:
                      return (0, i.jsx)(tD, { daysRemaining: r.metadata?.daysRemaining ?? null });
                  case ei.kqX.QUARANTINED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              es.intl.string(es.t.DVFJYf),
                              (0, i.jsx)(T.eC, {
                                  href: t9.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.kvHdFN),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  href: t3.A.getArticleURL(ei.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: eI.yw,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: ed, decisionId: eR } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      (null != t && (0, eH.wu)(t), nr(ed));
                                  },
                              }),
                              es.intl.string(es.t.B8ruyY),
                              (0, i.jsx)(T.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, eH.W5)(t, eR, () => {
                                              (nr(ed), (0, eH.wu)(t));
                                          });
                                  },
                                  children: es.intl.string(es.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(T.zr, {
                                        onClick: () =>
                                            to.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
                                        children: es.intl.string(es.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tU.lk)(r.metadata.streamKey);
                                  },
                              }),
                              es.intl.string(es.t.rOx44m),
                          ],
                      });
                  case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.BRAND,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      nr(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              es.intl.string(es.t["0klLS7"]),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      ((0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("312513"),
                                              n.e("36395"),
                                              n.e("155925"),
                                              n.e("218413"),
                                              n.e("137381"),
                                              n.e("326484"),
                                              n.e("109163"),
                                          ]).then(n.bind(n, 307750));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          nr(r.metadata?.dismissUntil));
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: es.intl.string(es.t.e4y2VM),
                              }),
                          ],
                      });
                  case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(ty, {});
                  case ei.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tP.A, {});
                  case ei.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(tW, {});
                  default:
                      return null;
              }
          })
        : null;
function na() {
    let { analyticsLocations: e } = (0, G.Ay)(x.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(ns, {}) });
}
