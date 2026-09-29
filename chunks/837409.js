n.d(t, { w: () => n_, A: () => nd });
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
var p = n(912851);
let f =
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
var P = n(730852),
    M = n(785796),
    g = n(55619),
    h = n(246605),
    U = n(271866),
    L = n(736653),
    y = n(77729),
    k = n(573648),
    x = n(793574),
    G = n(688810);
if (221552 == n.j) var v = n(866665);
if (221552 == n.j) var j = n(346411);
var q = n(587895),
    X = n(875444),
    b = n(793943),
    B = n(885386),
    w = n(147964),
    F = n(375708);
function V(e) {
    let { className: t } = e,
        { activePanel: n } = (0, b.fy)(),
        l = n === b.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, c.bG)([w.A, q.A], () => {
        let e = w.A.testModeApplicationId;
        if (!B.Q_.getSetting() || null == e) return !1;
        let t = q.A.getApplication(e);
        return null != t && (0, X.A)(t);
    })
        ? (0, i.jsx)(v.m, {
              position: "bottom",
              text: F.intl.string(F.t["9Isknj"]),
              ariaHidden: !0,
              children: (0, i.jsx)(A.D, {
                  tag: "div",
                  role: "button",
                  className: t,
                  "aria-label": F.intl.string(F.t["9Isknj"]),
                  onClick: () => {
                      l ? (0, b.Jp)() : (0, b.nf)(b.HP.APPLICATION_TEST_MODE_DEBUG);
                  },
                  children: (0, i.jsx)(j.WrenchIcon, { size: "xs", color: "currentColor" }),
              }),
          })
        : null;
}
var H = n(315982),
    K = n(235986),
    Y = n(626584),
    W = n(554146);
if (221552 == n.j) var Q = n(691540);
if (221552 == n.j) var Z = n(857250);
if (221552 == n.j) var z = n(97483);
var $ = n(803306),
    J = n(975807),
    ee = n(968309),
    et = n(75678),
    en = n(492462),
    ei = n(741231),
    el = n(287809),
    er = n(174459),
    es = n(920050),
    ea = n(635995),
    eo = n(789861),
    eE = n(220038),
    ec = n(202541);
n(92737);
var eu = n(652215),
    e_ = n(49999),
    eA = n(14429);
function ed(e) {
    let { markAsDismissed: t } = e,
        n = (0, c.bG)([el.default], () => el.default.getCurrentUser()),
        r = (0, eE.d6)(n),
        { analyticsLocations: s } = (0, G.Ay)(x.A.CALL_OF_DUTY_3PP_NAGBAR),
        a = l.useCallback(() => {
            (0, ei.A)(eu.BVt.NITRO_HOME, { search: (0, en.stringify)({ perk: es.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        o = l.useCallback(() => {
            (er.default.track(eu.HAw.APP_NOTICE_CLOSED, { notice_type: eu.kqX.COD_3PP_NAGBAR }), t(e_.i.USER_DISMISS));
        }, [t]),
        E = l.useCallback(() => {
            (er.default.track(eu.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: eu.kqX.COD_3PP_NAGBAR }),
            t(e_.i.TAKE_ACTION),
            r === eE.F5.NITRO)
                ? a()
                : (0, et.A)({ subscriptionTier: ec.pe.TIER_2, analyticsLocations: s, onSubscriptionConfirmation: a });
        }, [s, t, a, r]);
    if (null == r) return null;
    let u = r === eE.F5.NITRO,
        _ = F.intl.formatToPlainString(u ? eA.default["hworR+"] : eA.default["RuZS+B"], { validDates: (0, eo.a1)() }),
        A = F.intl.string(u ? eA.default.niUDET : eA.default.mHRW3e);
    return (0, i.jsxs)(ea.T0, {
        onClick: o,
        children: [(0, i.jsx)(ea.In, { children: _ }), (0, i.jsx)(ea.fY, { text: A, onClick: E })],
    });
}
var eT = n(745299),
    eI = n(976860),
    eN = n(780964),
    eR = n(718446),
    eC = n(766075),
    eS = n(879945),
    eO = n(379848),
    eD = n(355097),
    em = n(971656);
function ep(e) {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(eO.Ay, {
        contentTypes: [t],
        groupName: e_.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case W.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            F.intl.string(F.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: em.c9 }),
                            (0, i.jsx)("i", { className: em.Vz }),
                            (0, i.jsx)("i", { className: em.p0 }),
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
                                children: F.intl.string(F.t["1WjMbC"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: em.TN }),
                            F.intl.string(F.t.lgwX26),
                            (0, i.jsx)(d.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    ((0, J.A)(eu.AMi.META_QUEST), r(e_.i.TAKE_ACTION));
                                },
                                children: F.intl.string(F.t["1WjMbC"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(eS.A, { className: em.tV }),
                            F.intl.string(F.t["5NUVHH"]),
                            (0, i.jsx)(d.Z_, {
                                onClick: () => (0, ee.A)({ platformType: eu.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: F.intl.string(F.t.S0W8Z5),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(d.PM, { noticeType: l, onClick: () => r(e_.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: em.tV,
                                src: k.A.get(eu.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            F.intl.string(F.t.WHWgoY),
                            (0, i.jsx)(d.zr, {
                                onClick: () => (0, ee.A)({ platformType: eu.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: F.intl.string(F.t.S0W8Z5),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(e_.i.USER_DISMISS), noticeType: l }),
                            F.intl.string(F.t["3qKN/h"]),
                            (0, i.jsx)(d.Z_, {
                                onClick: async () => {
                                    r(e_.i.TAKE_ACTION);
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
                                        (0, Q.P0)((0, Z.o)(F.intl.string(F.t.xSCvBf), z.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: F.intl.string(F.t["ff/XXy"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: em.lK }),
                            (0, i.jsx)("span", { className: em.$t, children: F.intl.string(F.t["+urf75"]) }),
                            (0, i.jsx)(d.Z_, {
                                className: em.CO,
                                noticeType: l,
                                onClick: () => {
                                    (er.default.track(eu.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: eu.JJy.NOTIFICATION_BAR,
                                        location_object: eu.ZSU.BUTTON_CTA,
                                    }),
                                        (0, eC.openUserSettings)(eN.X.NITRO_PANEL));
                                },
                                children: F.intl.string(F.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(d.PM, {
                                onClick: () => {
                                    (r(e_.i.UNKNOWN), (0, $.lA)(eu.nhx.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(eT.A, {
                        dismissCurrentNotice: () => r(e_.i.USER_DISMISS),
                        subscriptionTier: ec.pe.TIER_2,
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(eT.A, {
                        dismissCurrentNotice: () => r(e_.i.USER_DISMISS),
                        subscriptionTier: ec.pe.TIER_0,
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(d.PM, { noticeType: l, onClick: () => r(e_.i.USER_DISMISS) }),
                            F.intl.string(F.t["0KFB2B"]),
                            (0, i.jsx)(d.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (r(e_.i.TAKE_ACTION), (0, eC.openUserSettings)(eN.X.NITRO_PANEL));
                                },
                                children: F.intl.string(F.t.pyYSiO),
                            }),
                        ],
                    });
                case W.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.DANGER,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            F.intl.string(F.t["7490vQ"]),
                            (0, i.jsx)(d.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, eI.pX)((0, eR.settingsPathToRoute)(eD.od.ACCOUNT));
                                },
                                children: F.intl.string(F.t.Vm8akB),
                            }),
                        ],
                    });
                case W.M.COD_3PP_NAGBAR_NOTICE:
                    return (0, i.jsx)(ed, { markAsDismissed: r });
                case W.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(d.$T, {
                        color: d.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(d.PM, { onClick: () => r(e_.i.USER_DISMISS), noticeType: l }),
                            F.intl.string(F.t["O9GI+k"]),
                            (0, i.jsx)(d.Z_, {
                                onClick: () => {
                                    (r(e_.i.TAKE_ACTION),
                                        (0, et.A)({
                                            subscriptionTier: ec.pe.TIER_2,
                                            analyticsLocations: [x.A.CHECKOUT_RECOVERY_NAGBAR],
                                            analyticsLocation: eu.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        }));
                                },
                                noticeType: l,
                                children: F.intl.string(F.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
}
var ef = n(877624),
    eP = n(412260),
    eM = n(131607),
    eg = n(823901);
function eh(e) {
    let t,
        n,
        { dismissibleContent: l } = e,
        { snowflakeId: r, couldShow: s } =
            ((t = (0, c.bG)([eP.A], () => eP.A.getGiftPromotion()?.id)),
            (n = (0, c.bG)([eP.A], () => null != eP.A.getMarketingComponentByType(ef.C.GIFT_REMINDER_NAGBAR))),
            l === W.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [a, o] = (0, eM.Cc)(s ? l : null, r ?? "", e_.m.NOTICE_BAR, !0);
    return null == a
        ? null
        : a === W.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(eg.y, { markAsDismissed: (e) => o(e) })
          : void 0;
}
var eU = n(264779),
    eL = n(962644),
    ey = n(158045),
    ek = n(723970);
function ex(e) {
    let { dismissibleContent: t } = e,
        n = (0, eU.Cp)(),
        r = (0, c.bG)([el.default], () => !ey.Ay.isPremium(el.default.getCurrentUser())),
        s = l.useCallback(() => {
            (er.default.track(eu.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, eC.openUserSettings)(eN.X.GIFT_PANEL),
                eL.Ay.dismissOutboundPromotionNotice());
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(eO.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: e_.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === W.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (eL.Ay.dismissOutboundPromotionNotice(), null !== n && n(e_.i.USER_DISMISS));
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ek.P }),
                              r ? F.intl.string(F.t["5JMiOo"]) : F.intl.string(F.t["Pzh+G2"]),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: eu.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (s(), null !== n && n(e_.i.TAKE_ACTION));
                                  },
                                  children: F.intl.string(F.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
}
var eG = n(532205),
    ev = n(487329),
    ej = n(102609),
    eq = n(736056);
if (221552 == n.j) var eX = n(194261);
var eb = n(548118),
    eB = n(134413),
    ew = n(221950),
    eF = n(71393),
    eV = n(309010),
    eH = n(967198),
    eK = n(585510),
    eY = n(834409),
    eW = n(903093),
    eQ = n(746080),
    eZ = n(856093);
function ez(e) {
    let { onDismiss: t } = e,
        r = (0, c.bG)([eH.A], () => eH.A.getGuildId()),
        s = (0, c.bG)([eV.Ay], () => (null != r ? eV.Ay.getChannelId(r) : null), [r]),
        a = r ?? null,
        o = (0, c.bG)([eF.A], () => (null != a ? eF.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: E, incidentData: u, isUnderLockdown: _ } = (0, eK.Li)(a),
        A = (0, eB.fw)(o?.id ?? eu.dJq),
        T = l.useCallback(() => null != o && (0, ew.aZ)(o.id), [o]);
    if (null == o || null == u || !E) return null;
    function I(e) {
        if (null != o) {
            if (e && A && s !== eQ.VV.MEMBER_SAFETY && T())
                return void er.default.track(eu.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: eu.kqX.GUILD_RAID_NOTIFICATION,
                    guild_id: o.id,
                });
            (0, N.openModalLazy)(async () => {
                let e = { source: eY.Eo.NAGBAR, alertType: (0, eW.$5)(u) },
                    { default: t } = await Promise.all([
                        n.e("684290"),
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
    let R = (0, i.jsx)(eb.Ay, { className: eZ.$f, guild: o, size: eb.Ay.Sizes.MINI }),
        C = (0, eW.ql)(u, o.name);
    if (null != (u.dmsDisabledUntil ?? u.invitesDisabledUntil) && _)
        return (0, i.jsxs)(d.$T, {
            className: eZ.lm,
            color: d.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(d.PM, { onClick: t, noticeType: eu.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                C,
                (0, i.jsx)(d.zr, {
                    className: eZ.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: eZ.rx,
                        children: [
                            (0, i.jsx)(eX.LockIcon, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: F.intl.string(F.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let S = (0, eW.P$)(u)
            ? F.intl.formatToPlainString(F.t.tZTx2E, { guildName: o.name })
            : (0, eW.Qm)(u)
              ? F.intl.formatToPlainString(F.t["1bSmxr"], { guildName: o.name })
              : F.intl.formatToPlainString(F.t.W87xDE, { guildName: o.name }),
        O = A && s === eQ.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(d.$T, {
        className: eZ.lm,
        color: d.Hv.WARNING,
        children: [
            (0, i.jsx)(d.PM, { onClick: t, noticeType: eu.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            S,
            !O &&
                (0, i.jsx)(d.zr, {
                    className: eZ.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: eZ.rx,
                        children: (0, i.jsx)("span", { children: F.intl.string(F.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var e$ = n(995786),
    eJ = n(206835),
    e0 = n(280450),
    e1 = n(696451),
    e2 = n(229527),
    e5 = n(81400),
    e3 = n(340837);
function e7(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, e5.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? F.intl.string(F.t["6ndMcq"]) : F.intl.string(F.t["0eiu6J"]),
        a = r ? F.intl.string(F.t.S09nw4) : F.intl.string(F.t.tEttXd);
    return (0, i.jsxs)(d.$T, { color: d.Hv.DANGER, children: [s, (0, i.jsx)(d.zr, { onClick: l, children: a })] });
}
function e8() {
    let e = (0, eJ.A)({ scrollPosition: eD._F.GUILD_TAG });
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [F.intl.string(F.t.Zqlecb), (0, i.jsx)(d.zr, { onClick: e, children: F.intl.string(F.t.SJehVW) })],
    });
}
function e9(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, x.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, c.bG)(
            [e0.default, e1.Ay],
            () => {
                if (null == n.guildId) return new Set();
                let e = e0.default.getId();
                return (0, e2.wj)(e1.Ay.getMember(n.guildId, e));
            },
            [n.guildId],
        );
    return r.has(e3.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(e3.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(e7, { ...n, analyticsLocations: l })
        : r.has(e3.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(e8, {})
          : (0, i.jsx)(e7, { ...n, analyticsLocations: l });
}
var e6 = n(202384),
    e4 = n(51758);
n(321073);
var te = n(503698),
    tt = n.n(te);
if (221552 == n.j) var tn = n(806163);
if (221552 == n.j) var ti = n(314116);
if (221552 == n.j) var tl = n(821609);
var tr = n(334465),
    ts = n(624458),
    ta = n(513461),
    to = n(709977),
    tE = n(212455),
    tc = n(967641),
    tu = n(934966);
let t_ =
    221552 == n.j
        ? function () {
              let e = (0, c.bG)([eH.A], () => eH.A.getGuildId(), []),
                  t = (0, c.bG)([eF.A], () => eF.A.getGuild(e), [e]),
                  l = (0, c.bG)([tE.A], () => (null != e ? tE.A.getRequest(e) : null), [e]),
                  r = (0, tn.zy)(),
                  s = (0, tr.B)(r.pathname, eu.BVt.CHANNEL(t?.id, eQ.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, to.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? ta.B5.STARTED,
                  o = null,
                  E = null,
                  u = null,
                  A = [tc.lm, tu.lm];
              switch (a) {
                  case ta.B5.SUBMITTED:
                      ((o = F.intl.string(F.t["5iLvSx"])),
                          (E = F.intl.string(F.t.mqtdmQ)),
                          (u = function () {
                              null != t &&
                                  (0, ti.A)({
                                      title: F.intl.string(F.t.aIz1oV),
                                      subtitle: F.intl.string(F.t["13tjTU"]),
                                      variant: "primary",
                                      confirmText: F.intl.string(F.t["cY+Oob"]),
                                      onConfirm: () => ts.A.removeGuildJoinRequest(t.id),
                                  });
                          }));
                      break;
                  case ta.B5.REJECTED:
                      ((o = F.intl.string(F.t.lk30cY)),
                          (E = F.intl.string(F.t["8RrsHr"])),
                          (u = function () {
                              null != t &&
                                  (0, N.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("298903"), n.e("914382")]).then(
                                          n.bind(n, 463325),
                                      );
                                      return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                                  });
                          }),
                          A.push(tc.z3));
                      break;
                  default:
                      ((o = F.intl.string(F.t.G5YKXP)),
                          (E = F.intl.string(F.t["r8/DT+"])),
                          (u = function () {
                              null != t && (0, e6.Ze)(t.id);
                          }));
              }
              return (0, i.jsxs)("div", {
                  className: tt()(...A),
                  children: [
                      (0, i.jsx)(_.E, { className: tc.wx, variant: "text-sm/normal", children: o }),
                      (0, i.jsx)(tl.$, { variant: "overlay-primary", size: "sm", onClick: u, text: E }),
                  ],
              });
          }
        : null;
if (221552 == n.j) var tA = n(477155);
var td = n(645460);
function tT(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(d.$T, {
        className: td.eR,
        children: [
            r && (0, i.jsx)(d.PM, { onClick: l, className: td.b, noticeType: eu.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(tl.$, { text: t, variant: "overlay-secondary", size: "sm", icon: tA.r, onClick: n }),
        ],
    });
}
var tI = n(468689),
    tN = n(699609);
if (221552 == n.j) var tR = n(862482);
var tC = n(66834),
    tS = n(449054),
    tO = n(451543);
let tD =
    221552 == n.j
        ? function () {
              let e = (0, c.bG)([eH.A], () => eH.A.getGuildId(), []),
                  t = (0, c.bG)([eF.A], () => eF.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              async function s() {
                  if (null != t) {
                      r(!0);
                      try {
                          (tS.cf(t.id), await tC.A.joinGuild(t.id, { source: eu.Q4z.NOTICE_BAR }));
                      } catch {
                          r(!1);
                      }
                  }
              }
              return (0, i.jsxs)("div", {
                  className: tt()(tO.lm, tu.lm),
                  children: [
                      (0, i.jsxs)(tR.$n, {
                          look: tR.$n.Looks.OUTLINED,
                          color: tR.$n.Colors.WHITE,
                          size: tR.$n.Sizes.NONE,
                          className: tt()(tO.x6, tO.aX),
                          innerClassName: tO.gb,
                          onClick: function () {
                              (0, eI.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(tA.r, { size: "xs", color: "currentColor", className: tO.UE }),
                              F.intl.string(F.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(_.E, {
                          className: tO.wx,
                          variant: "text-sm/normal",
                          children: F.intl.string(F.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(tR.$n, {
                          className: tO.x6,
                          look: tR.$n.Looks.OUTLINED,
                          color: tR.$n.Colors.WHITE,
                          size: tR.$n.Sizes.NONE,
                          submitting: n,
                          onClick: s,
                          children: F.intl.format(F.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
var tm = n(74848),
    tp = n(899847),
    tf = n(191627),
    tP = n(273665),
    tM = n(597111);
let tg =
    221552 == n.j
        ? {
              "--custom-notice-background": "var(--background-feedback-warning)",
              "--custom-notice-text": "var(--text-strong)",
          }
        : null;
function th(e) {
    let { daysRemaining: t } = e;
    (0, F.useSyncMessages)(tP.messagesLoader);
    let n = l.useCallback(() => {
        (er.default.track(eu.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            tp.Ay.selectTab(tf.u9.REQUESTS),
            (0, eC.openUserSettings)(eN.X.FAMILY_CENTER_PANEL));
    }, [t]);
    return (0, i.jsx)(d.$T, {
        color: d.Hv.CUSTOM,
        style: tg,
        children: (0, i.jsxs)("div", {
            className: tM.Q,
            children: [
                (0, i.jsx)(_.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? F.intl.format(tP.default.F0hdak, { count: t })
                            : F.intl.string(tP.default.LTzc00),
                }),
                (0, i.jsx)(tl.$, {
                    variant: "secondary",
                    size: "sm",
                    text: F.intl.string(tP.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tU = n(732280),
    tL = n(754804),
    ty = n(166403),
    tk = n(543767),
    tx = n(228662);
function tG(e) {
    let { noticeType: t, analyticsLocation: n, onFallback: l, children: r } = e,
        s = (0, c.bG)([ty.A], () => ty.A.getPremiumTypeSubscription()),
        { analyticsLocations: a } = (0, G.Ay)(n),
        o = null != s && s.status === eu.Dmq.PAST_DUE,
        [E, u] = (0, tk.C8)({ subscriptionId: null != s ? s.id : "", preventFetch: !o }),
        _ = o && null == E && null == u;
    return (
        (0, tx.A)("nagbar", null != s ? s.id : "", u),
        (0, i.jsx)(d.Z_, {
            noticeType: t,
            disabled: _,
            onClick: () => {
                null != s && null != E
                    ? (0, et.A)({ initialPlanId: s.planIdFromItems, openInvoiceId: E.id, analyticsLocations: a })
                    : l();
            },
            children: r,
        })
    );
}
var tv = n(378974),
    tj = n(396813),
    tq = n(14594);
function tX() {
    let [e, t] = (0, eM.Wl)(W.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tq.aH });
    return e !== W.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(d.$T, {
              color: d.Hv.BRAND,
              children: [
                  (0, i.jsx)(d.PM, { onClick: () => t(e_.i.DISMISS), noticeType: eu.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  F.intl.string(F.t.XkeW9N),
                  (0, i.jsx)(d.Z_, {
                      onClick: () => {
                          ((0, N.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("312513"),
                                  n.e("803461"),
                                  n.e("155925"),
                                  n.e("218413"),
                                  n.e("137381"),
                                  n.e("326484"),
                                  n.e("574192"),
                              ]).then(n.bind(n, 976627));
                              return (t) => (0, i.jsx)(e, { ...t });
                          }),
                              t(e_.i.TAKE_ACTION));
                      },
                      noticeType: eu.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: F.intl.string(F.t.vcdNKv),
                  }),
              ],
          });
}
if (221552 == n.j) var tb = n(825484);
var tB = n(379257),
    tw = n(306537),
    tF = n(734057),
    tV = n(849736),
    tH = n(354583),
    tK = n(366098),
    tY = n(418208),
    tW = n(931841);
function tQ(e) {
    if (!e && (0, tY.Cf)())
        return void tB.A.showAgeVerificationGetStartedModal({ entryPoint: tw.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = eV.Ay.getVoiceChannelId();
    if (null == t) return;
    let n = tF.A.getChannel(t);
    null != n && (0, tV.e7)(n, e);
}
function tZ(e) {
    let { channelId: t } = e,
        n = (0, tK.D3)(t) ?? 0,
        l = (0, tK.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tW.Z5,
              children: (0, i.jsx)("div", { className: tt()(tW.qQ, tW.lN), children: F.intl.string(F.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tW.Z5,
                children: (0, i.jsx)("div", { className: tt()(tW.qQ, tW.lN), children: F.intl.string(F.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tW.Z5,
                  children: (0, i.jsx)("div", { className: tt()(tW.qQ, tW.lN), children: F.intl.string(F.t.eHq2OF) }),
              })
            : null;
}
function tz() {
    let e = (0, tH.A)();
    return null == e
        ? null
        : (0, i.jsxs)(d.$T, {
              className: tW.kL,
              color: d.Hv.DEFAULT,
              children: [
                  F.intl.string(F.t.Ul1RJQ),
                  (0, i.jsx)(tZ, { channelId: e.id }),
                  (0, i.jsxs)(tb.e, {
                      size: "sm",
                      className: tW.GC,
                      children: [
                          (0, i.jsx)(tl.$, {
                              variant: "overlay-primary",
                              text: F.intl.string(F.t.MpO0px),
                              onClick: () => tQ(!1),
                          }),
                          (0, i.jsx)(tl.$, {
                              variant: "secondary",
                              onClick: () => tQ(!0),
                              text: F.intl.string(F.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var t$ = n(952818),
    tJ = n(935671);
function t0() {
    (0, tJ.sL)("nagbar");
}
function t1() {
    return null == (0, c.bG)([t$.Ay], () => t$.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(d.$T, {
              color: d.Hv.DANGER,
              children: [
                  (0, i.jsx)(d.PM, { noticeType: eu.kqX.SYSTEM_SERVICE_WARNING, onClick: () => n_() }),
                  F.intl.string(F.t["5rPt+j"]),
                  (0, i.jsx)(d.Z_, {
                      onClick: t0,
                      noticeType: eu.kqX.SYSTEM_SERVICE_WARNING,
                      children: F.intl.string(F.t["1iI46O"]),
                  }),
              ],
          });
}
function t2() {
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [
            F.intl.string(F.t.lQiCJ6),
            (0, i.jsx)(d.Z_, {
                noticeType: eu.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, eC.openUserSettings)(eN.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: F.intl.string(F.t["UgQN+9"]),
            }),
        ],
    });
}
if (221552 == n.j) var t5 = n(189213);
if (221552 == n.j) var t3 = n(150934);
function t7(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(t5.a, {
        size: "md",
        title: F.intl.string(F.t["zQ1+Jw"]),
        subtitle: F.intl.string(F.t.K1gWXn),
        actions: [
            {
                text: F.intl.string(F.t.BddRzS),
                onClick: () => {
                    (t && S.A.setSilenceWarning(!1), e.onClose());
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(t3.S, {
            checked: t,
            onChange: (e) => n(e),
            label: F.intl.string(F.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var t8 = n(25578),
    t9 = n(763827),
    t6 = n(67480),
    t4 = n(177141),
    ne = n(975571),
    nt = n(723702),
    nn = n(325278),
    ni = n(831502),
    nl = n(731854);
let nr = new Y.A("Notice");
function ns(e) {
    let { error: t, allowClick: n = !1 } = e,
        l = (0, ev.B1)(t)?.errorCode,
        r = F.intl.formatToPlainString(F.t.ejOT95, { errorCode: l }),
        s = (0, i.jsx)(_.E, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: em.fU,
            selectable: !0,
            children: r,
        });
    return n
        ? (0, i.jsx)(A.D, {
              tag: "span",
              className: em.wz,
              onClick: () => open(ne.A.getArticleURL(eu.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function na(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [
            (0, i.jsx)(d.PM, {
                noticeType: t,
                onClick: () => {
                    n_();
                },
            }),
            F.intl.string(F.t.o3zuYz),
            (0, i.jsx)(ns, { error: ev.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(d.eC, {
                href: ne.A.getArticleURL(eu.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: F.intl.string(F.t.RYKKox),
            }),
        ],
    });
}
function no(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.DANGER,
        children: [
            (0, i.jsx)(d.PM, {
                noticeType: t,
                onClick: () => {
                    n_();
                },
            }),
            F.intl.string(F.t.Up0ApK),
            (0, i.jsx)(ns, { error: ev.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(d.zr, {
                onClick: () => (0, eC.openUserSettings)(eN.X.CAMERA_CATEGORY),
                children: F.intl.string(F.t.kRwxfi),
            }),
        ],
    });
}
function nE(e) {
    return (0, nt.isWindows)() && E().satisfies(y.A?.os.release, nn.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function nc(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, tm.x5)(nl.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, c.cf)([t8.Ay], () => ({
            inputDeviceOSMuted: t8.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: t8.Ay.getInputDeviceOSVolume(),
        })),
        E = !1;
    return (
        !0 === a
            ? ((t = F.intl.string(F.t.ppW3ri)),
              (n = (0, i.jsx)(d.eC, { href: nE(s), noticeType: l, children: F.intl.string(F.t.QghSIq) })))
            : 0 === o
              ? ((t = F.intl.string(F.t.j4gGA4)),
                (n = (0, i.jsx)(d.eC, { href: nE(s), noticeType: l, children: F.intl.string(F.t.QghSIq) })))
              : t8.Ay.supports(nl.O5.LOOPBACK)
                ? ((t = F.intl.string(F.t.dNAJ18)),
                  (E = !0),
                  (n = (0, i.jsx)(d.zr, {
                      onClick: () => {
                          (0, eC.openUserSettings)(eN.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: F.intl.string(F.t.I6YlB4),
                  })))
                : ((t = F.intl.string(F.t.nCO9bI)),
                  (n = (0, i.jsx)(d.eC, {
                      href: ne.A.getArticleURL(eu.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: F.intl.string(F.t.RYKKox),
                  }))),
        (0, i.jsxs)(d.$T, {
            color: d.Hv.DANGER,
            children: [
                (0, i.jsx)(d.PM, {
                    noticeType: l,
                    onClick: () => {
                        (n_(), (0, N.openModal)((e) => (0, i.jsx)(t7, { ...e })));
                    },
                }),
                t,
                (0, i.jsx)(ns, { allowClick: E, error: ev.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function nu() {
    return (0, i.jsxs)("div", {
        className: em.t8,
        children: [
            (0, i.jsx)(V, { className: em.KS }),
            (0, i.jsx)(d.PM, { className: em.KS, onClick: U.cL, noticeType: eu.kqX.APPLICATION_TEST_MODE }),
        ],
    });
}
function n_(e) {
    p.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let nA =
    221552 == n.j
        ? l.memo(function () {
              let e = (0, c.bG)([el.default], () => el.default.getCurrentUser()),
                  t = (0, c.bG)([eH.A], () => eH.A.getGuildId()),
                  r = (0, c.bG)([t4.Ay], () => t4.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  o = (0, L.Ay)(),
                  E = (0, e4.H)(t),
                  _ = (0, tU.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == _ &&
                              (r.type === eu.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === eu.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          (null != t && (n.guild_id = t),
                              _?.trialId != null && (n.trial_id = _.trialId),
                              (e = { notice_type: r.type, ...n }),
                              er.default.track(eu.HAw.APP_NOTICE_VIEWED, e));
                      }
                  }, [r?.type, t, _]),
                  l.useEffect(() => {
                      if (null != r && r.type === eu.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eq.A.getUserExperimentDescriptor(e.id);
                          (null != t && (0, ej.LQ)(e.id, t),
                              (async function () {
                                  null != r && r.metadata?.id != null && (await (0, h.oX)(r.metadata?.id));
                              })());
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? t4.Re[r.type] : null,
                  D = null != r.type ? t4.rV[r.type] : null,
                  p = null != r.type ? t4.f7[r.type] : null,
                  U = t4.pe[r.type];
              if (null != A) return (0, i.jsx)(eG.$, { dismissibleContent: A, noticeType: r.type });
              if (null != D) return (0, i.jsx)(eh, { dismissibleContent: D });
              if (null != p) return (0, i.jsx)(ex, { dismissibleContent: p });
              if (null != U) return (0, i.jsx)(ep, { dismissibleContent: U, noticeType: r.type });
              let v = r.metadata?.premiumType;
              switch (r.type) {
                  case eu.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(t2, {});
                  case eu.kqX.LURKING_GUILD:
                      return (0, i.jsx)(tD, {});
                  case eu.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(t_, {});
                  case eu.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tz, {});
                  case eu.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: j } = r.metadata;
                      return (0, i.jsx)(ez, { onDismiss: () => n_(j) });
                  case eu.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: X } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(X), noticeType: r.type }),
                              F.intl.format(F.t["08KQ1P"], {
                                  helpCenterLink: ne.A.getArticleURL(eu.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case eu.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: b } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(b), noticeType: r.type }),
                              F.intl.format(F.t["8Je+dX"], {
                                  helpCenterLink: ne.A.getArticleURL(eu.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case eu.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(B), noticeType: r.type }),
                              F.intl.string(F.t["9DJgOg"]),
                          ],
                      });
                  case eu.kqX.MACOS_DEPRECATED_MESSAGE:
                      let { dismissUntil: V } = r.metadata,
                          Y = parseInt(y.A?.os.release.split(".")[0]),
                          W = eu.MVz.MACOS_19_DEPRECATE;
                      return (
                          21 === Y ? (W = eu.MVz.MACOS_21_DEPRECATE) : 20 === Y && (W = eu.MVz.MACOS_20_DEPRECATE),
                          (0, i.jsxs)(d.$T, {
                              color: d.Hv.WARNING,
                              children: [
                                  (0, i.jsx)(d.PM, { onClick: () => n_(V), noticeType: r.type }),
                                  F.intl.format(F.t.q8VPLo, { helpCenterLink: ne.A.getArticleURL(W) }),
                              ],
                          })
                      );
                  case eu.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: Q } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(Q), noticeType: r.type }),
                              F.intl.format(nt.isPlatformEmbedded ? F.t.J232TI : F.t.vceuiL, {
                                  helpCenterLink: ne.A.getArticleURL(eu.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case eu.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(), noticeType: r.type }),
                              F.intl.string(F.t.iW0fcQ),
                              (0, i.jsx)(d.eC, {
                                  href: ne.A.getArticleURL(eu.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.LQG5j6),
                              }),
                          ],
                      });
                  case eu.kqX.GENERIC:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(), noticeType: r.type }),
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
                  case eu.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(), noticeType: r.type }),
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
                  case eu.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => {
                                      (f.clearRemoteDisconnectVoiceChannelId(), n_());
                                  },
                                  noticeType: r.type,
                              }),
                              F.intl.string(F.t.bOQ3jV),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => {
                                      let e = t9.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tF.A.getChannel(e) && P.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.vD60Pv),
                              }),
                          ],
                      });
                  case eu.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => {
                                      (f.clearLastSessionVoiceChannelId(), n_());
                                  },
                                  noticeType: r.type,
                              }),
                              F.intl.string(F.t.jY2lUA),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => {
                                      let e = t9.A.getLastSessionVoiceChannelId();
                                      null != e && null != tF.A.getChannel(e) && P.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.vD60Pv),
                              }),
                          ],
                      });
                  case eu.kqX.SPOTIFY_AUTO_PAUSED:
                      let Z = k.A.get(eu.fg2.SPOTIFY);
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: em.tV,
                                  src: (0, u.q)(o) ? Z.icon.darkSVG : Z.icon.whiteSVG,
                              }),
                              F.intl.string(F.t.D8Cp76),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => (0, eC.openUserSettings)(eN.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.NiTd0e),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  className: em.uD,
                                  href: ne.A.getArticleURL(eu.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: F.intl.string(F.t.CiqAIU),
                              }),
                          ],
                      });
                  case eu.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              F.intl.string(F.t["f+Zaol"]),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (E && null != t ? (0, e6.Ze)(t) : H.R()),
                                  children: F.intl.string(F.t.fiNVin),
                              }),
                          ],
                      });
                  case eu.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              F.intl.string(F.t["3sWbf3"]),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      (O.A.verifyResend(),
                                          C.A.show({
                                              title: F.intl.string(F.t.LykQYk),
                                              body: F.intl.format(F.t.azKEPy, { email: e?.email }),
                                              cancelText: F.intl.string(F.t.Vm8akB),
                                              onCancel: H.R,
                                          }));
                                  },
                                  children: F.intl.string(F.t.WnX4J2),
                              }),
                          ],
                      });
                  case eu.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => M.A.ackScheduledMaintenance(), noticeType: r.type }),
                              F.intl.format(F.t["yb96S+"], r.metadata),
                              (0, i.jsx)(d.eC, {
                                  href: `${eu.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eu.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(nc, { noticeType: r.type });
                  case eu.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(na, { noticeType: r.type });
                  case eu.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
                      return (0, i.jsx)(no, { noticeType: r.type });
                  case eu.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(d.$T, {
                              color: d.Hv.DANGER,
                              children: [
                                  F.intl.format(F.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(d.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          (S.A.setEnableHardwareMuteNotice(!1), n_());
                                      },
                                  }),
                                  (0, i.jsx)(d.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: r.type,
                                      children: F.intl.string(F.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      return null;
                  case eu.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(), noticeType: eu.kqX.STREAMER_MODE }),
                              F.intl.string(F.t.iEgBXp),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => g.A.setEnabled(!1),
                                  noticeType: eu.kqX.STREAMER_MODE,
                                  children: F.intl.string(F.t.R9GHya),
                              }),
                          ],
                      });
                  case eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: z, applicationId: $ } = r.metadata,
                          J = t6.A.get(z),
                          ee = q.A.getApplication($);
                      if (null == J || null == ee) return null;
                      let en = { page: eu.liQ.IN_APP };
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => m(J.id),
                                  noticeType: eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: em.PC }),
                              F.intl.format(F.t["g3MU/+"], { applicationName: ee.name, skuName: J.name }),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
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
                                              n.e("207623"),
                                              n.e("853458"),
                                              n.e("586662"),
                                              n.e("758053"),
                                              n.e("247471"),
                                              n.e("889002"),
                                              n.e("709976"),
                                              n.e("750955"),
                                              n.e("953343"),
                                              n.e("763945"),
                                              n.e("261204"),
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
                                              n.e("77333"),
                                              n.e("716460"),
                                              n.e("264572"),
                                              n.e("678157"),
                                              n.e("147662"),
                                              n.e("641248"),
                                              n.e("331988"),
                                              n.e("544571"),
                                              n.e("40291"),
                                              n.e("402368"),
                                              n.e("733115"),
                                              n.e("397270"),
                                              n.e("190779"),
                                              n.e("373122"),
                                              n.e("724285"),
                                              n.e("221856"),
                                              n.e("293159"),
                                              n.e("186212"),
                                              n.e("755936"),
                                              n.e("172503"),
                                              n.e("958456"),
                                              n.e("833703"),
                                              n.e("55252"),
                                              n.e("362931"),
                                              n.e("745959"),
                                              n.e("858529"),
                                              n.e("41298"),
                                              n.e("481987"),
                                              n.e("595653"),
                                              n.e("958038"),
                                              n.e("171202"),
                                              n.e("907533"),
                                              n.e("576909"),
                                              n.e("406174"),
                                              n.e("715555"),
                                              n.e("146070"),
                                              n.e("523276"),
                                              n.e("729963"),
                                              n.e("812042"),
                                              n.e("538513"),
                                              n.e("102328"),
                                              n.e("830938"),
                                              n.e("975041"),
                                              n.e("821924"),
                                              n.e("147864"),
                                              n.e("50097"),
                                              n.e("163322"),
                                              n.e("978436"),
                                              n.e("791824"),
                                              n.e("562075"),
                                          ]).then(n.bind(n, 4630));
                                          (await e({
                                              applicationId: ee.id,
                                              skuId: J.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, et.A)({
                                                      initialPlanId: null,
                                                      subscriptionTier: ec.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: en,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: en,
                                              context: __OVERLAY__ ? eu.BRT.OVERLAY : eu.BRT.APP,
                                          }),
                                              m(J.id));
                                      } catch (e) {
                                          null != e && nr.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: F.intl.string(F.t.KEwPYx),
                              }),
                          ],
                      });
                  case eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = t6.A.get(e),
                          l = q.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => n_(),
                                  noticeType: eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: em.PC }),
                              F.intl.format(F.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(d.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => n_(),
                                      to: {
                                          pathname: eu.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: F.intl.string(F.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case eu.kqX.SURVEY: {
                      let e = r.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.SURVEY,
                                  onClick: () => {
                                      (0, h.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(d.Z_, {
                                  noticeType: eu.kqX.SURVEY,
                                  onClick: () => {
                                      (a ? (0, tv.K)(o) : window.open(s, "_blank"), (0, h.pX)(t, !1));
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case eu.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              F.intl.string(F.t["ugxmk/"]),
                              (0, i.jsx)(d.eC, {
                                  href: ne.A.getArticleURL(eu.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: F.intl.string(F.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case eu.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(), noticeType: eu.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              F.intl.string(F.t.wVjKGi),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: eu.kqX.VIDEO_UNSUPPORTED_BROWSER,
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
                                  children: F.intl.string(F.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case eu.kqX.DISPATCH_ERROR:
                      if (null == r.metadata) return null;
                      let { error: ei } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, { onClick: () => n_(), noticeType: eu.kqX.DISPATCH_ERROR }),
                              ei?.displayMessage,
                              (0, i.jsx)(d.Z_, {
                                  noticeType: eu.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("640380"), n.e("588014")]).then(
                                              n.bind(n, 627261),
                                          );
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: F.intl.string(F.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eu.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == r.metadata) return null;
                      let { progress: es, total: ea, name: eo } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => n_(),
                                  noticeType: eu.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(K.A, {
                                  justify: K.A.Justify.CENTER,
                                  children: [
                                      null != eo
                                          ? F.intl.formatToPlainString(F.t["pHj+z4"], {
                                                name: `${eo}`,
                                                progress: es,
                                                total: ea,
                                            })
                                          : F.intl.formatToPlainString(F.t["lHZn+A"], { progress: es, total: ea }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: em.gO }),
                                  ],
                              }),
                          ],
                      });
                  case eu.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != w.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(d.$T, {
                              color: d.Hv.WARNING,
                              className: em.i9,
                              children: (0, i.jsxs)(K.A, {
                                  justify: K.A.Justify.CENTER,
                                  align: K.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: F.intl.format(F.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(nu, {}),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(d.$T, {
                          color: d.Hv.WARNING,
                          className: em.i9,
                          children: (0, i.jsxs)(K.A, {
                              justify: K.A.Justify.CENTER,
                              align: K.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: F.intl.format(F.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(nu, {}),
                              ],
                          }),
                      });
                  case eu.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tN.A, {});
                  case eu.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(d.$T, {
                          color:
                              v === ec.PremiumTypes.TIER_1
                                  ? d.Hv.PREMIUM_TIER_1
                                  : v === ec.PremiumTypes.TIER_0
                                    ? d.Hv.PREMIUM_TIER_0
                                    : d.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      n_(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: em.PC }),
                              v === ec.PremiumTypes.TIER_1
                                  ? F.intl.formatToPlainString(F.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : v === ec.PremiumTypes.TIER_0
                                    ? F.intl.formatToPlainString(F.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : F.intl.formatToPlainString(F.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: eu.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      (n_(r.metadata?.premiumSubscription?.currentPeriodEnd),
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
                                                  n.e("207623"),
                                                  n.e("853458"),
                                                  n.e("247471"),
                                                  n.e("889002"),
                                                  n.e("709976"),
                                                  n.e("750955"),
                                                  n.e("953343"),
                                                  n.e("763945"),
                                                  n.e("261204"),
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
                                                  n.e("77333"),
                                                  n.e("716460"),
                                                  n.e("264572"),
                                                  n.e("678157"),
                                                  n.e("147662"),
                                                  n.e("641248"),
                                                  n.e("331988"),
                                                  n.e("544571"),
                                                  n.e("40291"),
                                                  n.e("402368"),
                                                  n.e("733115"),
                                                  n.e("397270"),
                                                  n.e("190779"),
                                                  n.e("373122"),
                                                  n.e("724285"),
                                                  n.e("221856"),
                                                  n.e("293159"),
                                                  n.e("186212"),
                                                  n.e("755936"),
                                                  n.e("172503"),
                                                  n.e("958456"),
                                                  n.e("833703"),
                                                  n.e("55252"),
                                                  n.e("362931"),
                                                  n.e("745959"),
                                                  n.e("858529"),
                                                  n.e("41298"),
                                                  n.e("481987"),
                                                  n.e("595653"),
                                                  n.e("958038"),
                                                  n.e("171202"),
                                                  n.e("907533"),
                                                  n.e("576909"),
                                                  n.e("406174"),
                                                  n.e("715555"),
                                                  n.e("523276"),
                                                  n.e("729963"),
                                                  n.e("812042"),
                                                  n.e("538513"),
                                                  n.e("102328"),
                                                  n.e("830938"),
                                                  n.e("975041"),
                                                  n.e("821924"),
                                                  n.e("147864"),
                                                  n.e("50097"),
                                                  n.e("163322"),
                                                  n.e("978436"),
                                                  n.e("791824"),
                                                  n.e("114794"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: r.metadata.daysLeft,
                                                      premiumType: v,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          }));
                                  },
                                  children:
                                      v === ec.PremiumTypes.TIER_1
                                          ? F.intl.string(F.t.BkbUPM)
                                          : v === ec.PremiumTypes.TIER_0
                                            ? F.intl.string(F.t.Px978X)
                                            : F.intl.string(F.t.LW5tCE),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eE, dismissUntil: e_ } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      n_(e_);
                                  },
                              }),
                              F.intl.format(F.t.zxU0Kp, { daysPastDue: eE }),
                              (0, i.jsx)(tG, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_ONE_TIME_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (n_(e_), (0, eC.openUserSettings)(eN.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: F.intl.string(F.t.q8rxeS),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      n_(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              F.intl.string(F.t.LlZaoX),
                              (0, i.jsx)(tG, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_INVALID_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (n_(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eC.openUserSettings)(eN.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: F.intl.string(F.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      n_(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              F.intl.string(F.t["30YfCr"]),
                              (0, i.jsx)(tG, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_MISSING_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (n_(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eC.openUserSettings)(eN.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: F.intl.string(F.t.U5pKWA),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      n_(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              v === ec.PremiumTypes.TIER_1
                                  ? F.intl.formatToPlainString(F.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : v === ec.PremiumTypes.TIER_0
                                    ? F.intl.formatToPlainString(F.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : F.intl.formatToPlainString(F.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(d.Z_, {
                                  noticeType: eu.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      (n_(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eC.openUserSettings)(eN.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children:
                                      v === ec.PremiumTypes.TIER_1
                                          ? F.intl.string(F.t.lboF5O)
                                          : v === ec.PremiumTypes.TIER_0
                                            ? F.intl.string(F.t["4UPwOq"])
                                            : F.intl.string(F.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case eu.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(tT, {
                          buttonText: r.buttonText ?? F.intl.string(F.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => n_(),
                          showCloseButton: !0,
                      });
                  case eu.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(e9, { guildId: t, analyticsLocations: s });
                  case eu.kqX.PARENTAL_CONSENT_WARNING:
                      return (0, i.jsx)(th, { daysRemaining: r.metadata?.daysRemaining ?? null });
                  case eu.kqX.QUARANTINED:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              F.intl.string(F.t.DVFJYf),
                              (0, i.jsx)(d.eC, {
                                  href: ni.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.kvHdFN),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  href: ne.A.getArticleURL(eu.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: em.yw,
                                  children: F.intl.string(F.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eu.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eA, decisionId: ed } = r.metadata;
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.WARNING,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      (null != t && (0, e$.wu)(t), n_(eA));
                                  },
                              }),
                              F.intl.string(F.t.B8ruyY),
                              (0, i.jsx)(d.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, e$.W5)(t, ed, () => {
                                              (n_(eA), (0, e$.wu)(t));
                                          });
                                  },
                                  children: F.intl.string(F.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(d.zr, {
                                        onClick: () =>
                                            tI.default.open(
                                                t,
                                                eu.BEX.GUILD_AUTOMOD,
                                                void 0,
                                                eu.nd0.AUTOMOD_MENTION_SPAM,
                                            ),
                                        children: F.intl.string(F.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case eu.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.DANGER,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  noticeType: eu.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tj.lk)(r.metadata.streamKey);
                                  },
                              }),
                              F.intl.string(F.t.rOx44m),
                          ],
                      });
                  case eu.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(d.$T, {
                          color: d.Hv.BRAND,
                          children: [
                              (0, i.jsx)(d.PM, {
                                  onClick: () => {
                                      n_(r.metadata?.dismissUntil);
                                  },
                                  noticeType: eu.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              F.intl.string(F.t["0klLS7"]),
                              (0, i.jsx)(d.Z_, {
                                  onClick: () => {
                                      ((0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("312513"),
                                              n.e("803461"),
                                              n.e("155925"),
                                              n.e("218413"),
                                              n.e("137381"),
                                              n.e("326484"),
                                              n.e("109163"),
                                          ]).then(n.bind(n, 307750));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          n_(r.metadata?.dismissUntil));
                                  },
                                  noticeType: eu.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: F.intl.string(F.t.e4y2VM),
                              }),
                          ],
                      });
                  case eu.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tX, {});
                  case eu.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tL.A, {});
                  case eu.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(t1, {});
                  default:
                      return null;
              }
          })
        : null;
function nd() {
    let { analyticsLocations: e } = (0, G.Ay)(x.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(nA, {}) });
}
