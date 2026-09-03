n.d(t, { w: () => ns, A: () => no });
var i = n(477900),
    l = n(582128),
    r = n(536637),
    s = n.n(r);
if (221552 == n.j) var a = n(561028);
var o = n(299855),
    E = n.n(o),
    c = n(17928);
if (221552 == n.j) var u = n(462887);
if (221552 == n.j) var _ = n(834730);
if (221552 == n.j) var A = n(939249);
if (221552 == n.j) var d = n(417098);
if (221552 == n.j) var T = n(28863);
if (221552 == n.j) var I = n(403581);
if (221552 == n.j) var N = n(192308);
if (221552 == n.j) var R = n(289873);
var C = n(157559),
    S = n(827343),
    O = n(830215),
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
    b = n(626584),
    X = n(554146);
if (221552 == n.j) var B = n(691540);
if (221552 == n.j) var w = n(857250);
if (221552 == n.j) var F = n(97483);
var H = n(803306),
    V = n(975807),
    K = n(968309),
    Y = n(532794),
    W = n(492462),
    Q = n(741231),
    Z = n(287809),
    $ = n(174459),
    z = n(920050),
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
            (0, Q.A)(ei.BVt.NITRO_HOME, { search: (0, W.stringify)({ perk: z.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        o = l.useCallback(() => {
            $.default.track(ei.HAw.APP_NOTICE_CLOSED, { notice_type: ei.kqX.COD_3PP_NAGBAR }), t(el.i.USER_DISMISS);
        }, [t]),
        E = l.useCallback(() => {
            ($.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: ei.kqX.COD_3PP_NAGBAR }),
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
        onClick: o,
        children: [(0, i.jsx)(J.In, { children: _ }), (0, i.jsx)(J.fY, { text: A, onClick: E })],
    });
}
var eo = n(745299),
    eE = n(976860),
    ec = n(780964),
    eu = n(718446),
    e_ = n(766075),
    eA = n(879945),
    ed = n(379848),
    eT = n(355097),
    eI = n(971656);
function eN(e) {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(ed.Ay, {
        contentTypes: [t],
        groupName: el.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case X.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: eI.c9 }),
                            (0, i.jsx)("i", { className: eI.Vz }),
                            (0, i.jsx)("i", { className: eI.p0 }),
                            (0, i.jsx)(d.Z_, {
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
                case X.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: eI.TN }),
                            es.intl.string(es.t.lgwX26),
                            (0, i.jsx)(d.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, V.A)(ei.AMi.META_QUEST), r(el.i.TAKE_ACTION);
                                },
                                children: es.intl.string(es.t["1WjMbC"]),
                            }),
                        ],
                    });
                case X.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(eA.A, { className: eI.tV }),
                            es.intl.string(es.t["5NUVHH"]),
                            (0, i.jsx)(d.Z_, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case X.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(d.PM, { noticeType: l, onClick: () => r(el.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: eI.tV,
                                src: k.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            es.intl.string(es.t.WHWgoY),
                            (0, i.jsx)(d.zr, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case X.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(el.i.USER_DISMISS), noticeType: l }),
                            es.intl.string(es.t["3qKN/h"]),
                            (0, i.jsx)(d.Z_, {
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
                                        (0, B.P0)((0, w.o)(es.intl.string(es.t.xSCvBf), F.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: es.intl.string(es.t["ff/XXy"]),
                            }),
                        ],
                    });
                case X.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: eI.lK }),
                            (0, i.jsx)("span", { className: eI.$t, children: es.intl.string(es.t["+urf75"]) }),
                            (0, i.jsx)(d.Z_, {
                                className: eI.CO,
                                noticeType: l,
                                onClick: () => {
                                    $.default.track(ei.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: ei.JJy.NOTIFICATION_BAR,
                                        location_object: ei.ZSU.BUTTON_CTA,
                                    }),
                                        (0, e_.openUserSettings)(ec.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(d.PM, {
                                onClick: () => {
                                    r(el.i.UNKNOWN), (0, H.setFlag)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case X.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(eo.A, {
                        dismissCurrentNotice: () => r(el.i.UNKNOWN),
                        subscriptionTier: en.pe.TIER_2,
                    });
                case X.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(eo.A, {
                        dismissCurrentNotice: () => r(el.i.UNKNOWN),
                        subscriptionTier: en.pe.TIER_0,
                    });
                case X.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(d.PM, { noticeType: l, onClick: () => r(el.i.UNKNOWN) }),
                            es.intl.string(es.t["0KFB2B"]),
                            (0, i.jsx)(d.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    r(el.i.UNKNOWN), (0, e_.openUserSettings)(ec.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t.pyYSiO),
                            }),
                        ],
                    });
                case X.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DANGER,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["7490vQ"]),
                            (0, i.jsx)(d.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, eE.pX)((0, eu.settingsPathToRoute)(eT.od.ACCOUNT));
                                },
                                children: es.intl.string(es.t.Vm8akB),
                            }),
                        ],
                    });
                case X.M.COD_3PP_NAGBAR_NOTICE:
                    return (0, i.jsx)(ea, { markAsDismissed: r });
                case X.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(el.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["O9GI+k"]),
                            (0, i.jsx)(d.Z_, {
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
    eS = n(131607),
    eO = n(823901);
function eD(e) {
    let t,
        n,
        { dismissibleContent: l } = e,
        { snowflakeId: r, couldShow: s } =
            ((t = (0, c.bG)([eC.A], () => eC.A.getGiftPromotion()?.id)),
            (n = (0, c.bG)([eC.A], () => null != eC.A.getMarketingComponentByType(eR.C.GIFT_REMINDER_NAGBAR))),
            l === X.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [a, o] = (0, eS.Cc)(s ? l : null, r ?? "", el.m.NOTICE_BAR, !0);
    return null == a
        ? null
        : a === X.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(eO.y, { markAsDismissed: (e) => o(e) })
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
            $.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, e_.openUserSettings)(ec.X.GIFT_PANEL),
                eP.Ay.dismissOutboundPromotionNotice();
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(ed.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: el.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === X.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      eP.Ay.dismissOutboundPromotionNotice(), null !== n && n(el.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ef.P }),
                              r ? es.intl.string(es.t["5JMiOo"]) : es.intl.string(es.t["Pzh+G2"]),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      s(), null !== n && n(el.i.TAKE_ACTION);
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
    eb = n(585510),
    eX = n(834409),
    eB = n(903093),
    ew = n(746080),
    eF = n(856093);
function eH(e) {
    let { onDismiss: t } = e,
        r = (0, c.bG)([eq.A], () => eq.A.getGuildId()),
        s = (0, c.bG)([ev.Ay], () => (null != r ? ev.Ay.getChannelId(r) : null), [r]),
        a = r ?? null,
        o = (0, c.bG)([ej.A], () => (null != a ? ej.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: E, incidentData: u, isUnderLockdown: _ } = (0, eb.Li)(a),
        A = (0, ex.fw)(o?.id ?? ei.dJq),
        T = l.useCallback(() => null != o && (0, eG.aZ)(o.id), [o]);
    if (null == o || null == u || !E) return null;
    function I(e) {
        if (null != o) {
            if (e && A && s !== ew.VV.MEMBER_SAFETY && T())
                return void $.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                    guild_id: o.id,
                });
            (0, N.openModalLazy)(async () => {
                let e = { source: eX.Eo.NAGBAR, alertType: (0, eB.$5)(u) },
                    { default: t } = await Promise.all([
                        n.e("3942"),
                        n.e("660608"),
                        n.e("940258"),
                        n.e("273669"),
                        n.e("346313"),
                        n.e("343233"),
                    ]).then(n.bind(n, 671576));
                return (n) => (0, i.jsx)(t, { ...n, guildId: o.id, analyticsData: e });
            });
        }
    }
    let R = (0, i.jsx)(ek.Ay, { className: eF.$f, guild: o, size: ek.Ay.Sizes.MINI }),
        C = (0, eB.ql)(u, o.name);
    if (null != (u.dmsDisabledUntil ?? u.invitesDisabledUntil) && _)
        return (0, i.jsxs)(d.$T, {
            className: eF.lm,
            color: d.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(d.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                C,
                (0, i.jsx)(d.zr, {
                    className: eF.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: eF.rx,
                        children: [
                            (0, i.jsx)(ey.LockIcon, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: es.intl.string(es.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let S = (0, eB.P$)(u)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: o.name })
            : (0, eB.Qm)(u)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], { guildName: o.name })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: o.name }),
        O = A && s === ew.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(d.$T, {
        className: eF.lm,
        color: d.Hv.WARNING,
        children: [
            (0, i.jsx)(d.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            S,
            !O &&
                (0, i.jsx)(d.zr, {
                    className: eF.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: eF.rx,
                        children: (0, i.jsx)("span", { children: es.intl.string(es.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var eV = n(995786),
    eK = n(206835),
    eY = n(280450),
    eW = n(696451),
    eQ = n(229527),
    eZ = n(81400),
    e$ = n(340837);
function ez(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, eZ.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? es.intl.string(es.t["6ndMcq"]) : es.intl.string(es.t["0eiu6J"]),
        a = r ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
    return (0, i.jsxs)(d.$T, { color: d.Hv.DANGER, children: [s, (0, i.jsx)(d.zr, { onClick: l, children: a })] });
}
function eJ() {
    let e = (0, eK.A)({ scrollPosition: eT._F.GUILD_TAG });
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(d.zr, { onClick: e, children: es.intl.string(es.t.SJehVW) }),
        ],
    });
}
function e0(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, x.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, c.bG)([eY.default, eW.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eY.default.getId();
            return (0, eQ.wj)(eW.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return r.has(e$.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(e$.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(ez, { ...n, analyticsLocations: l })
        : r.has(e$.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eJ, {})
          : (0, i.jsx)(ez, { ...n, analyticsLocations: l });
}
var e1 = n(202384),
    e2 = n(51758);
n(321073);
var e5 = n(503698),
    e3 = n.n(e5);
if (221552 == n.j) var e7 = n(806163);
if (221552 == n.j) var e9 = n(314116);
if (221552 == n.j) var e8 = n(821609);
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
                  s = (0, e6.B)(r.pathname, ei.BVt.CHANNEL(t?.id, ew.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, tt.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? te.B5.STARTED,
                  o = null,
                  E = null,
                  u = null,
                  A = [ti.lm, tl.lm];
              switch (a) {
                  case te.B5.SUBMITTED:
                      (o = es.intl.string(es.t["5iLvSx"])),
                          (E = es.intl.string(es.t.mqtdmQ)),
                          (u = function () {
                              null != t &&
                                  (0, e9.A)({
                                      title: es.intl.string(es.t.aIz1oV),
                                      subtitle: es.intl.string(es.t["13tjTU"]),
                                      variant: "primary",
                                      confirmText: es.intl.string(es.t["cY+Oob"]),
                                      onConfirm: () => e4.A.removeGuildJoinRequest(t.id),
                                  });
                          });
                      break;
                  case te.B5.REJECTED:
                      (o = es.intl.string(es.t.lk30cY)),
                          (E = es.intl.string(es.t["8RrsHr"])),
                          (u = function () {
                              null != t &&
                                  (0, N.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("298903"), n.e("914382")]).then(
                                          n.bind(n, 463325),
                                      );
                                      return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                                  });
                          }),
                          A.push(ti.z3);
                      break;
                  default:
                      (o = es.intl.string(es.t.G5YKXP)),
                          (E = es.intl.string(es.t["r8/DT+"])),
                          (u = function () {
                              null != t && (0, e1.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: e3()(...A),
                  children: [
                      (0, i.jsx)(_.E, { className: ti.wx, variant: "text-sm/normal", children: o }),
                      (0, i.jsx)(e8.$, { variant: "overlay-primary", size: "sm", onClick: u, text: E }),
                  ],
              });
          }
        : null;
if (221552 == n.j) var ts = n(477155);
var ta = n(645460);
function to(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(d.$T, {
        className: ta.eR,
        children: [
            r && (0, i.jsx)(d.PM, { onClick: l, className: ta.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(e8.$, { text: t, variant: "overlay-secondary", size: "sm", icon: ts.r, onClick: n }),
        ],
    });
}
var tE = n(468689),
    tc = n(699609);
if (221552 == n.j) var tu = n(862482);
var t_ = n(66834),
    tA = n(449054),
    td = n(451543);
let tT =
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
                          tA.cf(t.id), await t_.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
                      } catch {
                          r(!1);
                      }
                  }
              }
              return (0, i.jsxs)("div", {
                  className: e3()(td.lm, tl.lm),
                  children: [
                      (0, i.jsxs)(tu.$n, {
                          look: tu.$n.Looks.OUTLINED,
                          color: tu.$n.Colors.WHITE,
                          size: tu.$n.Sizes.NONE,
                          className: e3()(td.x6, td.aX),
                          innerClassName: td.gb,
                          onClick: function () {
                              (0, eE.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(ts.r, { size: "xs", color: "currentColor", className: td.UE }),
                              es.intl.string(es.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(_.E, {
                          className: td.wx,
                          variant: "text-sm/normal",
                          children: es.intl.string(es.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(tu.$n, {
                          className: td.x6,
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
var tI = n(801644),
    tN = n(74848),
    tR = n(899847),
    tC = n(191627),
    tS = n(513687),
    tO = n(597111);
let tD =
    221552 == n.j
        ? {
              "--custom-notice-background": "var(--background-feedback-warning)",
              "--custom-notice-text": "var(--text-strong)",
          }
        : null;
function tm(e) {
    let { daysRemaining: t } = e;
    (0, es.useSyncMessages)(tS.messagesLoader);
    let n = l.useCallback(() => {
        $.default.track(ei.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            tR.Ay.selectTab(tC.u9.REQUESTS),
            (0, e_.openUserSettings)(ec.X.FAMILY_CENTER_PANEL);
    }, [t]);
    return (0, i.jsx)(d.$T, {
        color: d.Hv.CUSTOM,
        style: tD,
        children: (0, i.jsxs)("div", {
            className: tO.Q,
            children: [
                (0, i.jsx)(_.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? es.intl.format(tS.default.F0hdak, { count: t })
                            : es.intl.string(tS.default.LTzc00),
                }),
                (0, i.jsx)(e8.$, {
                    variant: "secondary",
                    size: "sm",
                    text: es.intl.string(tS.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tP = n(732280),
    tp = n(754804),
    tf = n(166403),
    tM = n(543767),
    tg = n(228662);
function th(e) {
    let { noticeType: t, analyticsLocation: n, onFallback: l, children: r } = e,
        s = (0, c.bG)([tf.A], () => tf.A.getPremiumTypeSubscription()),
        { analyticsLocations: a } = (0, G.Ay)(n),
        o = null != s && s.status === ei.Dmq.PAST_DUE,
        [E, u] = (0, tM.C8)({ subscriptionId: null != s ? s.id : "", preventFetch: !o }),
        _ = o && null == E && null == u;
    return (
        (0, tg.A)("nagbar", null != s ? s.id : "", u),
        (0, i.jsx)(d.Z_, {
            noticeType: t,
            disabled: _,
            onClick: () => {
                null != s && null != E
                    ? (0, Y.A)({ initialPlanId: s.planIdFromItems, openInvoiceId: E.id, analyticsLocations: a })
                    : l();
            },
            children: r,
        })
    );
}
var tU = n(378974),
    tL = n(396813),
    ty = n(14594);
function tk() {
    let [e, t] = (0, eS.Wl)(X.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: ty.aH });
    return e !== X.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(d.$T, {
              color: d.Hv.BRAND,
              children: [
                  (0, i.jsx)(d.PM, { onClick: () => t(el.i.DISMISS), noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  es.intl.string(es.t.XkeW9N),
                  (0, i.jsx)(d.Z_, {
                      onClick: () => {
                          (0, N.openModalLazy)(async () => {
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
                              t(el.i.TAKE_ACTION);
                      },
                      noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: es.intl.string(es.t.vcdNKv),
                  }),
              ],
          });
}
if (221552 == n.j) var tx = n(825484);
var tG = n(379257),
    tj = n(847599),
    tv = n(734057),
    tq = n(849736),
    tb = n(354583),
    tX = n(366098),
    tB = n(418208),
    tw = n(931841);
function tF(e) {
    if (!e && (0, tB.Cf)())
        return void tG.A.showAgeVerificationGetStartedModal({ entryPoint: tj.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = ev.Ay.getVoiceChannelId();
    if (null == t) return;
    let n = tv.A.getChannel(t);
    null != n && (0, tq.e7)(n, e);
}
function tH(e) {
    let { channelId: t } = e,
        n = (0, tX.D3)(t) ?? 0,
        l = (0, tX.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tw.Z5,
              children: (0, i.jsx)("div", { className: e3()(tw.qQ, tw.lN), children: es.intl.string(es.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tw.Z5,
                children: (0, i.jsx)("div", { className: e3()(tw.qQ, tw.lN), children: es.intl.string(es.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tw.Z5,
                  children: (0, i.jsx)("div", { className: e3()(tw.qQ, tw.lN), children: es.intl.string(es.t.eHq2OF) }),
              })
            : null;
}
function tV() {
    let e = (0, tb.A)();
    return null == e
        ? null
        : (0, i.jsxs)(d.$T, {
              className: tw.kL,
              color: d.Hv.DEFAULT,
              children: [
                  es.intl.string(es.t.Ul1RJQ),
                  (0, i.jsx)(tH, { channelId: e.id }),
                  (0, i.jsxs)(tx.e, {
                      size: "sm",
                      className: tw.GC,
                      children: [
                          (0, i.jsx)(e8.$, {
                              variant: "overlay-primary",
                              text: es.intl.string(es.t.MpO0px),
                              onClick: () => tF(!1),
                          }),
                          (0, i.jsx)(e8.$, {
                              variant: "secondary",
                              onClick: () => tF(!0),
                              text: es.intl.string(es.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tK = n(952818),
    tY = n(935671);
function tW() {
    (0, tY.sL)("nagbar");
}
function tQ() {
    return null == (0, c.bG)([tK.Ay], () => tK.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(d.$T, {
              color: d.Hv.DANGER,
              children: [
                  (0, i.jsx)(d.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => ns() }),
                  es.intl.string(es.t["5rPt+j"]),
                  (0, i.jsx)(d.Z_, {
                      onClick: tW,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: es.intl.string(es.t["1iI46O"]),
                  }),
              ],
          });
}
function tZ() {
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [
            es.intl.string(es.t.lQiCJ6),
            (0, i.jsx)(d.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, e_.openUserSettings)(ec.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: es.intl.string(es.t["UgQN+9"]),
            }),
        ],
    });
}
if (221552 == n.j) var t$ = n(189213);
if (221552 == n.j) var tz = n(150934);
function tJ(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(t$.Modal, {
        size: "md",
        title: es.intl.string(es.t["zQ1+Jw"]),
        subtitle: es.intl.string(es.t.K1gWXn),
        actions: [
            {
                text: es.intl.string(es.t.BddRzS),
                onClick: () => {
                    t && S.A.setSilenceWarning(!1), e.onClose();
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
var t0 = n(916546),
    t1 = n(763827),
    t2 = n(67480),
    t5 = n(147964),
    t3 = n(177141),
    t7 = n(975571),
    t9 = n(723702),
    t8 = n(325278),
    t6 = n(831502),
    t4 = n(731854);
let ne = new b.A("Notice");
function nt(e) {
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
              onClick: () => open(t7.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function nn(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [
            (0, i.jsx)(d.PM, {
                noticeType: t,
                onClick: () => {
                    ns();
                },
            }),
            es.intl.string(es.t.o3zuYz),
            (0, i.jsx)(nt, { error: eh.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(d.eC, {
                href: t7.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: es.intl.string(es.t.RYKKox),
            }),
        ],
    });
}
function ni(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [
            (0, i.jsx)(d.PM, {
                noticeType: t,
                onClick: () => {
                    ns();
                },
            }),
            es.intl.string(es.t.Up0ApK),
            (0, i.jsx)(nt, { error: eh.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(d.zr, {
                onClick: () => (0, e_.openUserSettings)(ec.X.CAMERA_CATEGORY),
                children: es.intl.string(es.t.kRwxfi),
            }),
        ],
    });
}
function nl(e) {
    return (0, t9.isWindows)() && E().satisfies(y.A?.os.release, t8.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function nr(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, tN.x5)(t4.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, c.cf)([t0.Ay], () => ({
            inputDeviceOSMuted: t0.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: t0.Ay.getInputDeviceOSVolume(),
        })),
        E = !1;
    return (
        !0 === a
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(d.eC, { href: nl(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
            : 0 === o
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(d.eC, { href: nl(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
              : t0.Ay.supports(t4.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (E = !0),
                  (n = (0, i.jsx)(d.zr, {
                      onClick: () => {
                          (0, e_.openUserSettings)(ec.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(d.eC, {
                      href: t7.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: es.intl.string(es.t.RYKKox),
                  }))),
        (0, i.jsxs)(d.$T, {
            color: d.Hv.DANGER,
            children: [
                (0, i.jsx)(d.PM, {
                    noticeType: l,
                    onClick: () => {
                        ns(), (0, N.openModal)((e) => (0, i.jsx)(tJ, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(nt, { allowClick: E, error: eh.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function ns(e) {
    P.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let na =
    221552 == n.j
        ? l.memo(function () {
              let e = (0, c.bG)([Z.default], () => Z.default.getCurrentUser()),
                  t = (0, c.bG)([eq.A], () => eq.A.getGuildId()),
                  r = (0, c.bG)([t3.Ay], () => t3.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  o = (0, L.Ay)(),
                  E = (0, e2.H)(t),
                  _ = (0, tP.V)();
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
                          null != t && (n.guild_id = t),
                              _?.trialId != null && (n.trial_id = _.trialId),
                              (e = { notice_type: r.type, ...n }),
                              $.default.track(ei.HAw.APP_NOTICE_VIEWED, e);
                      }
                  }, [r?.type, t, _]),
                  l.useEffect(() => {
                      if (null != r && r.type === ei.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eL.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, eU.LQ)(e.id, t),
                              (async function () {
                                  null != r && r.metadata?.id != null && (await (0, h.oX)(r.metadata?.id));
                              })();
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? t3.Re[r.type] : null,
                  D = null != r.type ? t3.rV[r.type] : null,
                  P = null != r.type ? t3.f7[r.type] : null,
                  b = t3.pe[r.type];
              if (null != A) return (0, i.jsx)(eg.$, { dismissibleContent: A, noticeType: r.type });
              if (null != D) return (0, i.jsx)(eD, { dismissibleContent: D });
              if (null != P) return (0, i.jsx)(eM, { dismissibleContent: P });
              if (null != b) return (0, i.jsx)(eN, { dismissibleContent: b, noticeType: r.type });
              let X = r.metadata?.premiumType;
              switch (r.type) {
                  case ei.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(tZ, {});
                  case ei.kqX.LURKING_GUILD:
                      return (0, i.jsx)(tT, {});
                  case ei.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(tr, {});
                  case ei.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tV, {});
                  case ei.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsx)(eH, { onDismiss: () => ns(B) });
                  case ei.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: w } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(w), noticeType: r.type }),
                              es.intl.format(es.t["08KQ1P"], {
                                  helpCenterLink: t7.A.getArticleURL(ei.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: F } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(F), noticeType: r.type }),
                              es.intl.format(es.t["8Je+dX"], {
                                  helpCenterLink: t7.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: H } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(H), noticeType: r.type }),
                              es.intl.string(es.t["9DJgOg"]),
                          ],
                      });
                  case ei.kqX.MACOS_DEPRECATED_MESSAGE:
                      let { dismissUntil: V } = r.metadata,
                          K = 20 === parseInt(y.A?.os.release.split(".")[0]);
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(V), noticeType: r.type }),
                              es.intl.format(es.t.q8VPLo, {
                                  helpCenterLink: t7.A.getArticleURL(
                                      K ? ei.MVz.MACOS_20_DEPRECATE : ei.MVz.MACOS_19_DEPRECATE,
                                  ),
                              }),
                          ],
                      });
                  case ei.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: W } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(W), noticeType: r.type }),
                              es.intl.format(t9.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL, {
                                  helpCenterLink: t7.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(), noticeType: r.type }),
                              es.intl.string(es.t.iW0fcQ),
                              (0, i.jsx)(d.eC, {
                                  href: t7.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.LQG5j6),
                              }),
                          ],
                      });
                  case ei.kqX.GENERIC:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(d.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(d.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => {
                                      p.clearRemoteDisconnectVoiceChannelId(), ns();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.bOQ3jV),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => {
                                      let e = t1.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tv.A.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => {
                                      p.clearLastSessionVoiceChannelId(), ns();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.jY2lUA),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => {
                                      let e = t1.A.getLastSessionVoiceChannelId();
                                      null != e && null != tv.A.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.SPOTIFY_AUTO_PAUSED:
                      let Q = k.A.get(ei.fg2.SPOTIFY);
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: eI.tV,
                                  src: (0, u.q)(o) ? Q.icon.darkSVG : Q.icon.whiteSVG,
                              }),
                              es.intl.string(es.t.D8Cp76),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => (0, e_.openUserSettings)(ec.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.NiTd0e),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  className: eI.uD,
                                  href: t7.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: es.intl.string(es.t.CiqAIU),
                              }),
                          ],
                      });
                  case ei.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["f+Zaol"]),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (E && null != t ? (0, e1.Ze)(t) : v.R()),
                                  children: es.intl.string(es.t.fiNVin),
                              }),
                          ],
                      });
                  case ei.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["3sWbf3"]),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      O.A.verifyResend(),
                                          C.A.show({
                                              title: es.intl.string(es.t.LykQYk),
                                              body: es.intl.format(es.t.azKEPy, { email: e?.email }),
                                              cancelText: es.intl.string(es.t.Vm8akB),
                                              onCancel: v.R,
                                          });
                                  },
                                  children: es.intl.string(es.t.WnX4J2),
                              }),
                          ],
                      });
                  case ei.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => M.A.ackScheduledMaintenance(), noticeType: r.type }),
                              es.intl.format(es.t["yb96S+"], r.metadata),
                              (0, i.jsx)(d.eC, {
                                  href: `${ei.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(nr, { noticeType: r.type });
                  case ei.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(nn, { noticeType: r.type });
                  case ei.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
                      return (0, i.jsx)(ni, { noticeType: r.type });
                  case ei.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(d.$T, {
                              color: d.Hv.DANGER,
                              children: [
                                  es.intl.format(es.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(d.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          S.A.setEnableHardwareMuteNotice(!1), ns();
                                      },
                                  }),
                                  (0, i.jsx)(d.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: r.type,
                                      children: es.intl.string(es.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      if (
                          tI.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" })
                              .enableHardwareSilenceWarning
                      )
                          return (0, i.jsxs)(d.$T, {
                              color: d.Hv.INFO,
                              children: [
                                  es.intl.format(es.t.QMw8Fd, {}),
                                  (0, i.jsx)(d.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          S.A.setEnableHardwareMuteNotice(!1), ns();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case ei.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(), noticeType: ei.kqX.STREAMER_MODE }),
                              es.intl.string(es.t.iEgBXp),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => g.A.setEnabled(!1),
                                  noticeType: ei.kqX.STREAMER_MODE,
                                  children: es.intl.string(es.t.R9GHya),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: z, applicationId: J } = r.metadata,
                          ee = t2.A.get(z),
                          et = j.A.getApplication(J);
                      if (null == ee || null == et) return null;
                      let el = { page: ei.liQ.IN_APP };
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => m(ee.id),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eI.PC }),
                              es.intl.format(es.t["g3MU/+"], { applicationName: et.name, skuName: ee.name }),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("679157"),
                                              n.e("1955"),
                                              n.e("341161"),
                                              n.e("401696"),
                                              n.e("202985"),
                                              n.e("603619"),
                                              n.e("661630"),
                                              n.e("349687"),
                                              n.e("162775"),
                                              n.e("128804"),
                                              n.e("60882"),
                                              n.e("71151"),
                                              n.e("227853"),
                                              n.e("286615"),
                                              n.e("70866"),
                                              n.e("311541"),
                                              n.e("472847"),
                                              n.e("870088"),
                                              n.e("989649"),
                                              n.e("446985"),
                                              n.e("571163"),
                                              n.e("586662"),
                                              n.e("758053"),
                                              n.e("247471"),
                                              n.e("889002"),
                                              n.e("709976"),
                                              n.e("807432"),
                                              n.e("873532"),
                                              n.e("750955"),
                                              n.e("953343"),
                                              n.e("279774"),
                                              n.e("771593"),
                                              n.e("697284"),
                                              n.e("410470"),
                                              n.e("295570"),
                                              n.e("765208"),
                                              n.e("711562"),
                                              n.e("906470"),
                                              n.e("661157"),
                                              n.e("609110"),
                                              n.e("157064"),
                                              n.e("156957"),
                                              n.e("918786"),
                                              n.e("701335"),
                                              n.e("257935"),
                                              n.e("724086"),
                                              n.e("358937"),
                                              n.e("448738"),
                                              n.e("590994"),
                                              n.e("258407"),
                                              n.e("894292"),
                                              n.e("153302"),
                                              n.e("836576"),
                                              n.e("253453"),
                                              n.e("82937"),
                                              n.e("699826"),
                                              n.e("923981"),
                                              n.e("750370"),
                                              n.e("972281"),
                                              n.e("489020"),
                                              n.e("641278"),
                                              n.e("761973"),
                                              n.e("669130"),
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
                                              n.e("900277"),
                                              n.e("127962"),
                                              n.e("76428"),
                                              n.e("77473"),
                                              n.e("863232"),
                                              n.e("364827"),
                                              n.e("907167"),
                                              n.e("910471"),
                                              n.e("784569"),
                                              n.e("25279"),
                                              n.e("861060"),
                                              n.e("752457"),
                                              n.e("262156"),
                                              n.e("960235"),
                                              n.e("959880"),
                                              n.e("77333"),
                                              n.e("910486"),
                                              n.e("56366"),
                                              n.e("797595"),
                                              n.e("147662"),
                                              n.e("344057"),
                                              n.e("413736"),
                                              n.e("128504"),
                                              n.e("331988"),
                                              n.e("544571"),
                                              n.e("40291"),
                                              n.e("402368"),
                                              n.e("733115"),
                                              n.e("397270"),
                                              n.e("373122"),
                                              n.e("217951"),
                                              n.e("293159"),
                                              n.e("171202"),
                                              n.e("755936"),
                                              n.e("489088"),
                                              n.e("730760"),
                                              n.e("330316"),
                                              n.e("362931"),
                                              n.e("745959"),
                                              n.e("858529"),
                                              n.e("793716"),
                                              n.e("481987"),
                                              n.e("595653"),
                                              n.e("221856"),
                                              n.e("958038"),
                                              n.e("262436"),
                                              n.e("576909"),
                                              n.e("45594"),
                                              n.e("406174"),
                                              n.e("146070"),
                                              n.e("523276"),
                                              n.e("948720"),
                                              n.e("729963"),
                                              n.e("830938"),
                                              n.e("392075"),
                                              n.e("174016"),
                                              n.e("790417"),
                                              n.e("367022"),
                                              n.e("699292"),
                                              n.e("50097"),
                                              n.e("800257"),
                                              n.e("573215"),
                                              n.e("228843"),
                                              n.e("791824"),
                                              n.e("562075"),
                                          ]).then(n.bind(n, 4630));
                                          await e({
                                              applicationId: et.id,
                                              skuId: ee.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, Y.A)({
                                                      initialPlanId: null,
                                                      subscriptionTier: en.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: el,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: el,
                                              context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                          }),
                                              m(ee.id);
                                      } catch (e) {
                                          null != e && ne.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: es.intl.string(es.t.KEwPYx),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = t2.A.get(e),
                          l = j.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => ns(),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eI.PC }),
                              es.intl.format(es.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(d.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => ns(),
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
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      (0, h.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(d.Z_, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, tU.K)(o) : window.open(s, "_blank"), (0, h.pX)(t, !1);
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case ei.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              es.intl.string(es.t["ugxmk/"]),
                              (0, i.jsx)(d.eC, {
                                  href: t7.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              es.intl.string(es.t.wVjKGi),
                              (0, i.jsx)(d.Z_, {
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
                      let { error: er } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => ns(), noticeType: ei.kqX.DISPATCH_ERROR }),
                              er?.displayMessage,
                              (0, i.jsx)(d.Z_, {
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
                      let { progress: ea, total: eo, name: eE } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => ns(),
                                  noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  children: [
                                      null != eE
                                          ? es.intl.formatToPlainString(es.t["pHj+z4"], {
                                                name: `${eE}`,
                                                progress: ea,
                                                total: eo,
                                            })
                                          : es.intl.formatToPlainString(es.t["lHZn+A"], { progress: ea, total: eo }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: eI.gO }),
                                  ],
                              }),
                          ],
                      });
                  case ei.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != t5.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(d.$T, {
                              color: d.Hv.WARNING,
                              children: (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  align: q.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: es.intl.format(es.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(d.PM, { onClick: U.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(d.$T, {
                          color: d.Hv.WARNING,
                          children: (0, i.jsxs)(q.A, {
                              justify: q.A.Justify.CENTER,
                              align: q.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: es.intl.format(es.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(d.PM, { onClick: U.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case ei.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tc.A, {});
                  case ei.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(d.$T, {
                          color:
                              X === en.PremiumTypes.TIER_1
                                  ? d.Hv.PREMIUM_TIER_1
                                  : X === en.PremiumTypes.TIER_0
                                    ? d.Hv.PREMIUM_TIER_0
                                    : d.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eI.PC }),
                              X === en.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : X === en.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("586662"),
                                                  n.e("1955"),
                                                  n.e("341161"),
                                                  n.e("401696"),
                                                  n.e("661630"),
                                                  n.e("202985"),
                                                  n.e("603619"),
                                                  n.e("718368"),
                                                  n.e("258407"),
                                                  n.e("894292"),
                                                  n.e("153302"),
                                                  n.e("758053"),
                                                  n.e("836576"),
                                                  n.e("983513"),
                                                  n.e("349687"),
                                                  n.e("162775"),
                                                  n.e("128804"),
                                                  n.e("60882"),
                                                  n.e("71151"),
                                                  n.e("227853"),
                                                  n.e("286615"),
                                                  n.e("70866"),
                                                  n.e("311541"),
                                                  n.e("472847"),
                                                  n.e("870088"),
                                                  n.e("989649"),
                                                  n.e("446985"),
                                                  n.e("571163"),
                                                  n.e("247471"),
                                                  n.e("889002"),
                                                  n.e("709976"),
                                                  n.e("807432"),
                                                  n.e("873532"),
                                                  n.e("750955"),
                                                  n.e("953343"),
                                                  n.e("279774"),
                                                  n.e("771593"),
                                                  n.e("697284"),
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
                                                  n.e("590994"),
                                                  n.e("253453"),
                                                  n.e("82937"),
                                                  n.e("699826"),
                                                  n.e("923981"),
                                                  n.e("750370"),
                                                  n.e("489020"),
                                                  n.e("761973"),
                                                  n.e("669130"),
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
                                                  n.e("609110"),
                                                  n.e("972281"),
                                                  n.e("641278"),
                                                  n.e("348567"),
                                                  n.e("900277"),
                                                  n.e("127962"),
                                                  n.e("76428"),
                                                  n.e("77473"),
                                                  n.e("863232"),
                                                  n.e("364827"),
                                                  n.e("907167"),
                                                  n.e("910471"),
                                                  n.e("784569"),
                                                  n.e("25279"),
                                                  n.e("861060"),
                                                  n.e("752457"),
                                                  n.e("262156"),
                                                  n.e("960235"),
                                                  n.e("959880"),
                                                  n.e("77333"),
                                                  n.e("910486"),
                                                  n.e("56366"),
                                                  n.e("797595"),
                                                  n.e("147662"),
                                                  n.e("344057"),
                                                  n.e("413736"),
                                                  n.e("128504"),
                                                  n.e("331988"),
                                                  n.e("544571"),
                                                  n.e("40291"),
                                                  n.e("402368"),
                                                  n.e("733115"),
                                                  n.e("397270"),
                                                  n.e("373122"),
                                                  n.e("217951"),
                                                  n.e("293159"),
                                                  n.e("171202"),
                                                  n.e("755936"),
                                                  n.e("489088"),
                                                  n.e("730760"),
                                                  n.e("330316"),
                                                  n.e("362931"),
                                                  n.e("745959"),
                                                  n.e("858529"),
                                                  n.e("793716"),
                                                  n.e("481987"),
                                                  n.e("595653"),
                                                  n.e("221856"),
                                                  n.e("958038"),
                                                  n.e("262436"),
                                                  n.e("576909"),
                                                  n.e("45594"),
                                                  n.e("406174"),
                                                  n.e("523276"),
                                                  n.e("948720"),
                                                  n.e("729963"),
                                                  n.e("830938"),
                                                  n.e("392075"),
                                                  n.e("174016"),
                                                  n.e("790417"),
                                                  n.e("367022"),
                                                  n.e("699292"),
                                                  n.e("50097"),
                                                  n.e("800257"),
                                                  n.e("573215"),
                                                  n.e("228843"),
                                                  n.e("791824"),
                                                  n.e("114794"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: r.metadata.daysLeft,
                                                      premiumType: X,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          });
                                  },
                                  children:
                                      X === en.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.BkbUPM)
                                          : X === en.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t.Px978X)
                                            : es.intl.string(es.t.LW5tCE),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eu, dismissUntil: eA } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      ns(eA);
                                  },
                              }),
                              es.intl.format(es.t.zxU0Kp, { daysPastDue: eu }),
                              (0, i.jsx)(th, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_ONE_TIME_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      ns(eA), (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t.q8rxeS),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t.LlZaoX),
                              (0, i.jsx)(th, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_INVALID_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t["30YfCr"]),
                              (0, i.jsx)(th, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_MISSING_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t.U5pKWA),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              X === en.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : X === en.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, e_.openUserSettings)(ec.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children:
                                      X === en.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.lboF5O)
                                          : X === en.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t["4UPwOq"])
                                            : es.intl.string(es.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(to, {
                          buttonText: r.buttonText ?? es.intl.string(es.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => ns(),
                          showCloseButton: !0,
                      });
                  case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(e0, { guildId: t, analyticsLocations: s });
                  case ei.kqX.PARENTAL_CONSENT_WARNING:
                      return (0, i.jsx)(tm, { daysRemaining: r.metadata?.daysRemaining ?? null });
                  case ei.kqX.QUARANTINED:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              es.intl.string(es.t.DVFJYf),
                              (0, i.jsx)(d.eC, {
                                  href: t6.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.kvHdFN),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  href: t7.A.getArticleURL(ei.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: eI.yw,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: ed, decisionId: eT } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, eV.wu)(t), ns(ed);
                                  },
                              }),
                              es.intl.string(es.t.B8ruyY),
                              (0, i.jsx)(d.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, eV.W5)(t, eT, () => {
                                              ns(ed), (0, eV.wu)(t);
                                          });
                                  },
                                  children: es.intl.string(es.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(d.zr, {
                                        onClick: () =>
                                            tE.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
                                        children: es.intl.string(es.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tL.lk)(r.metadata.streamKey);
                                  },
                              }),
                              es.intl.string(es.t.rOx44m),
                          ],
                      });
                  case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.BRAND,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => {
                                      ns(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              es.intl.string(es.t["0klLS7"]),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
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
                                          ns(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: es.intl.string(es.t.e4y2VM),
                              }),
                          ],
                      });
                  case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tk, {});
                  case ei.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tp.A, {});
                  case ei.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(tQ, {});
                  default:
                      return null;
              }
          })
        : null;
function no() {
    let { analyticsLocations: e } = (0, G.Ay)(x.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(na, {}) });
}
