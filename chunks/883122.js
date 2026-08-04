n.r(t), n.d(t, { default: () => s_ });
var s,
    a,
    l,
    i = n(477900),
    r = n(582128),
    d = n(503698),
    c = n.n(d),
    o = n(292442),
    u = n(873298),
    h = n(305866),
    m = n(707554),
    g = n(756377),
    A = n(284009),
    f = n.n(A),
    x = n(562708),
    j = n(837381),
    p = n(17928),
    N = n(866665),
    E = n(689175),
    S = n(695366),
    y = n(661531),
    C = n(297264),
    v = n(825484),
    R = n(408278),
    I = n(789645),
    _ = n(440971),
    M = n(22231),
    D = n(99677),
    L = n(442433),
    T = n(148494),
    b = n(928039),
    O = n(793574),
    k = n(688810),
    G = n(139286),
    F = n(259678),
    U = n(939249),
    P = n(320448),
    w = n(778712),
    K = n(97808),
    H = n(812993),
    z = n(834730),
    B = n(406810),
    X = n(397244),
    J = n(714114),
    Y = n(394871),
    V = n(571694),
    Z = n(47167),
    q = n(713654),
    W = n(598104),
    $ = n(548118),
    Q = n(616356),
    ee = n(734057),
    et = n(71393),
    en = n(290863),
    es = n(568548),
    ea = n(287809),
    el = n(650583),
    ei = n(375708),
    er = n(842971);
let ed = { top: 8, bottom: 8, left: -4, right: -4 };
function ec(e) {
    let { channel: t, children: n, onClick: s, collapsed: a = !1, mentionCount: l, onToggleCollapse: r, itemId: d } = e,
        o = (0, j.rm)(d);
    return (0, i.jsx)(F.vN, {
        offset: ed,
        children: (0, i.jsxs)("div", {
            className: c()(er.ZO, { [er.yZ]: a }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === el.dh.ENTER || e.key === el.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === el.dh.ARROW_RIGHT && a) || (e.key === el.dh.ARROW_LEFT && !a)) && r();
            },
            children: [
                (0, i.jsx)(U.D, {
                    className: er.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(eo, { channel: t }),
                }),
                (0, i.jsx)(P._, { className: er.ai, size: "xxs" }),
                (0, i.jsx)(eu, { channel: t, onClick: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function eo(e) {
    let { channel: t } = e,
        n = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)($.Ay, { className: er.Kk, guild: n, size: $.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(W.A, { channel: t, size: w._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(K.eu, { size: w._3.SIZE_32, src: (0, V.Y)(t), "aria-hidden": !0 });
}
function eu(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id)),
        l = (0, Z.Ay)(t, !1),
        r = (0, p.bG)([es.Ay], () => es.Ay.getIsMentionLowImportance(t.id)),
        d = (0, q.gU)(t, a);
    return (0, i.jsxs)("div", {
        className: er.yP,
        children: [
            (0, i.jsx)(C.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: er.lz,
                children: (0, i.jsxs)(U.D, {
                    className: er.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, i.jsx)(d, { className: er.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: er.je, children: l }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: er.qS,
                                  children: (0, i.jsx)(H.hV, {
                                      count: s,
                                      color: r
                                          ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                          : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: (0, i.jsx)(eh, { channel: t, onClick: n }),
            }),
        ],
    });
}
function eh(e) {
    let { channel: t, onClick: n } = e,
        s = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id)),
        a = (0, p.bG)([ee.A], () => ee.A.getChannel(t.parent_id)),
        l = (0, Z.Ay)(a);
    if (t.isMultiUserDM())
        return (0, i.jsx)(i.Fragment, {
            children: ei.intl.formatToPlainString(ei.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, i.jsx)(em, { channel: t });
    let r = [s?.name, null != a ? l : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, i.jsx)(U.D, { className: c()(er.je, er.J5), onClick: n, children: r }) : null;
}
function em(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: a,
            applicationStream: l,
        } = (0, p.cf)([ea.default, en.A, Q.A], () => {
            let e = ea.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? en.A.getStatus(e.id) : null,
                activities: null != e ? en.A.getActivities(e.id) : null,
                applicationStream: null != e ? Q.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, J.Ay)({ userId: n?.id });
    return (0, X.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(Y.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eg(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: c()(er.h5, { [er.z3]: "error" === t, [er.kX]: "success" === t, [er.qb]: "normal" === t }),
        children: [
            "error" === t ? (0, i.jsx)(S.E, { size: "xs" }) : (0, i.jsx)(B.O, { size: "xs" }),
            (0, i.jsx)(z.E, {
                variant: "text-xs/medium",
                color: "error" === t ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
var eA = n(642213),
    ef = n(636922),
    ex = n(885386),
    ej = n(576705),
    ep = n(927813),
    eN = n(269073),
    eE = n(164684),
    eS = n(704456),
    ey = n(85109);
n(321073);
var eC = n(403362),
    ev = n(216623);
function eR(e) {
    switch (e) {
        case g.Yf.BOOKMARK:
            return ey.A.getMessageBookmarks();
        case g.Yf.REMINDER:
            return ey.A.getMessageReminders();
        default:
            return ey.A.getSavedMessages();
    }
}
function eI(e) {
    return eR(e).map((e) => e.saveData);
}
var e_ = n(606096),
    eM = n(803306),
    eD = n(320095),
    eL = n(963852),
    eT = n(20851),
    eb = n(889227),
    eO = n(403581),
    ek = n(192308),
    eG = n(404374),
    eF = n(611371),
    eU = n(465794),
    eP = n(158045),
    ew = n(652215),
    eK = n(202541);
n(811233);
var eH = n(864514);
function ez(e) {
    let { isReminder: t, limit: s } = e,
        { analyticsLocations: a } = (0, k.Ay)(),
        l = r.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                return (n) => (0, i.jsx)(e, { ...n, isReminder: t, limit: s, analyticsLocations: a });
            });
        }, [s, t, a]);
    return (0, i.jsxs)("div", {
        className: eH.Zj,
        children: [
            (0, i.jsx)(eO.t, { size: "md", color: eG.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(eF.A, { className: eH.TN }),
            (0, i.jsx)(z.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: eH.tD,
                children:
                    null == s
                        ? ei.intl.format(ei.t.qXh3fo, { nitroTierName: (0, eP.Dd)(eK.PremiumTypes.TIER_2), onClick: l })
                        : ei.intl.format(t ? ei.t.MYFohD : ei.t.FNFCVJ, {
                              nitroTierName: (0, eP.Dd)(eK.PremiumTypes.TIER_2),
                              onClick: l,
                              premiumMax: t ? 50 : 200,
                          }),
            }),
            (0, i.jsx)(eU.A, {
                size: "sm",
                subscriptionTier: eK.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: ew.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eB = n(318344),
    eX = n(936037),
    eJ = n(144273);
function eY(e) {
    let { type: t } = e,
        n = t === g.Yf.REMINDER,
        s = ei.intl.string(n ? ei.t.aUXxzT : ei.t["2pAkDA"]);
    return (0, eN.lA)("ForLaterIntro")
        ? (0, i.jsx)("div", {
              className: eB.kL,
              children: (0, i.jsxs)("div", {
                  className: eB.vW,
                  children: [
                      (0, i.jsx)("img", { src: eX, className: eB.Tn, alt: s }),
                      (0, i.jsx)(C.D, {
                          className: eB.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ei.intl.string(n ? ei.t["5Iw19e"] : ei.t["93WOd1"]),
                      }),
                      (0, i.jsx)("div", {
                          className: eB.rf,
                          children: (0, i.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ei.intl.format(n ? ei.t["E+qms7"] : ei.t.legvTg, {
                                  itemName: ei.intl.string(n ? ei.t.mJ3P0N : ei.t.tpxJto),
                              }),
                          }),
                      }),
                      (0, i.jsx)(eV, { isReminder: n }),
                  ],
              }),
          })
        : (0, i.jsx)("div", {
              className: eB.kL,
              children: (0, i.jsxs)("div", {
                  className: eB.vW,
                  children: [
                      (0, i.jsx)("img", { src: eX, className: eB.Tn, alt: s }),
                      (0, i.jsx)(C.D, {
                          className: eB.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ei.intl.string(ei.t.w4DRbZ),
                      }),
                      (0, i.jsx)("div", {
                          className: eB.rf,
                          children: (0, i.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ei.intl.string(ei.t.F6u3E3),
                          }),
                      }),
                      (0, i.jsx)(ez, { isReminder: n }),
                  ],
              }),
          });
}
function eV(e) {
    let { isReminder: t } = e,
        n = r.useMemo(() => {
            let e = new eb.A({ id: "313338", username: ei.intl.string(ei.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eM.insertStaticUser(e);
            return (
                null != t && (t.getAvatarURL = () => eJ.A),
                [ei.intl.string(ei.t["h+KPxy"]), ei.intl.string(ei.t["63EVpI"]), ei.intl.string(ei.t["KT/TDX"])].map(
                    (n, s) => {
                        let a = (0, eD.rh)({
                            ...(0, eL.Ay)({ channelId: "1338", content: n }),
                            state: ew.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return (a.author = t ?? e), a;
                    },
                )
            );
        }, []);
    return (0, i.jsx)("div", {
        className: eB.qJ,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: eB.DZ,
            children: n.map((e, n) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(eT.A, {
                                message: e,
                                author: {
                                    nick: e.author.username,
                                    colorString: null,
                                    colorStrings: null,
                                    authorId: e.author.id,
                                },
                                isGroupStart: 0 === n,
                                disableInteraction: !0,
                            }),
                            0 === n
                                ? (0, i.jsxs)("div", {
                                      className: eB.MK,
                                      children: [
                                          (0, i.jsx)(eZ, {
                                              icon: e_.c,
                                              label: ei.intl.string(ei.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, i.jsx)(eZ, {
                                              icon: B.O,
                                              label: ei.intl.string(ei.t.mJ3P0N),
                                              highlighted: t,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    e.id,
                ),
            ),
        }),
    });
}
function eZ(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, i.jsxs)("div", {
        className: c()(eB.KT, { [eB.$Y]: s }),
        children: [
            (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function eq(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: a } = (0, eS.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: eS.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eg, { type: a ? "error" : "normal", text: s });
}
var eW = n(318061),
    e$ = n(824385);
let eQ = "ForLaterPopout",
    e0 = "Bookmarks",
    e1 = "Reminders";
function e3(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.Yf.ALL,
                [t, n] = r.useState(() => eI(e)),
                s = r.useRef(ey.A.getIsStale());
            return (
                r.useEffect(() => {
                    let t = ey.A.getLastChanged();
                    function a() {
                        let a = ey.A.getLastChanged();
                        if (t !== a) {
                            if (((t = a), s.current && !ey.A.getIsStale())) {
                                (s.current = !1), n(eI(e));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eR(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        ey.A.addChangeListener(a),
                        () => {
                            ey.A.removeChangeListener(a);
                        }
                    );
                }, [e]),
                r.useEffect(() => {
                    (0, ev.AX)();
                }, []),
                (0, p.yK)([ey.A], () => t.map((e) => ey.A.getSavedMessage(e.channelId, e.messageId)).filter(eC.Vq))
            );
        })(n),
        a = n === g.Yf.REMINDER,
        l = (0, eN.oG)(eQ, a),
        d = (0, eN.dR)(eQ) && l > 0 && s.length >= l,
        { analyticsLocations: c } = (0, k.Ay)(O.A.FOR_LATER_POPOUT);
    (0, G.A)(
        {
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                tab_type: n,
                total_count: s.length,
                overdue_count: ey.A.getOverdueMessageReminderCount(),
                nitro_upsell_bar_shown: d,
            },
        },
        {},
        [s.length, d],
    );
    let o = r.useRef(null),
        u = (0, b.A)("for-later", o);
    (0, eA.xN)(o), (0, eA.yW)(n === g.Yf.BOOKMARK ? e0 : e1);
    let [h, m] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => m(new Date()), ep.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, i.jsx)(k.f5, { value: c, children: (0, i.jsx)(eY, { type: n }) })
        : (0, i.jsx)(k.f5, {
              value: c,
              children: (0, i.jsxs)("div", {
                  className: eW.MY,
                  children: [
                      (0, i.jsx)(j.hD, {
                          navigator: u,
                          children: (0, i.jsx)(j.PR, {
                              children: (e) => {
                                  let { ref: n, ...a } = e;
                                  return (0, i.jsx)(E.Ch, {
                                      ref: (e) => {
                                          (o.current = e), (n.current = e?.getScrollerNode() ?? null);
                                      },
                                      className: e$.XG,
                                      ...a,
                                      children: s.map((e) =>
                                          (0, i.jsx)(
                                              e2,
                                              { savedMessage: e, closePopout: t, throttledNow: h },
                                              e.saveData.messageId,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                      d
                          ? (0, i.jsx)("div", {
                                className: eW.fH,
                                children: (0, i.jsx)(ez, { isReminder: a, limit: l }),
                            })
                          : null,
                  ],
              }),
          });
}
function e2(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, eS.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, eS.le)(t, a),
                    e.shiftKey || n(),
                    T.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? e1 : e0);
            },
            [n, t, a],
        ),
        d = (0, p.bG)(
            [ej.A],
            () => !!(a?.type === ew.rbe.UNKNOWN || a?.isPrivate()) || ej.A.can(ew.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: e$.aP,
              children: [
                  (0, i.jsx)(ec, {
                      itemId: `header-${t.message.id}`,
                      channel: a,
                      onClick: (e) => {
                          l(e), n();
                      },
                      collapsed: !1,
                      children: (0, i.jsx)(v.e, {
                          size: "sm",
                          className: er.GC,
                          children: (0, i.jsx)(e8, { savedMessage: t, jumpToMessage: l, throttledNow: s }),
                      }),
                  }),
                  null != t.saveData.dueAt ? (0, i.jsx)(eq, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(
                      ef.A,
                      {
                          message: t.message,
                          channel: a,
                          className: e$.YD,
                          compact: ex.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, i.jsxs)("div", {
              className: c()(e$.aP, eW.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: eW.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: eW.Bx,
                              children: (0, i.jsx)(S.E, { size: "xxs", color: y.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(C.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ei.intl.string(ei.t["wuQm+j"])
                                      : ei.intl.string(ei.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(v.e, {
                      size: "sm",
                      className: er.GC,
                      children: (0, i.jsx)(N.m, {
                          text: ei.intl.string(null != t.saveData.dueAt ? ei.t["a6gcZ/"] : ei.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(R.K, {
                              variant: "secondary",
                              "aria-label": ei.intl.string(null != t.saveData.dueAt ? ei.t["a6gcZ/"] : ei.t.SvXS1Z),
                              size: "sm",
                              icon: I.P,
                              onClick: () => (0, eE.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function e8(e) {
    let { savedMessage: t, jumpToMessage: s, throttledNow: a } = e;
    f()(null != t.message, "Saved message must be cached for For Later action buttons");
    let l = ei.intl.string(null != t.saveData.dueAt ? ei.t["a6gcZ/"] : ei.t.SvXS1Z),
        r = null != t.saveData.dueAt && a > t.saveData.dueAt,
        d = ei.intl.string(r ? ei.t.GtBCnz : ei.t.vrbqs1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t.saveData.dueAt
                ? (0, i.jsx)(N.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, i.jsx)(R.K, {
                          variant: "secondary",
                          "aria-label": d,
                          size: "sm",
                          icon: r ? _.R : M.R,
                          onClick: (e) =>
                              (0, L.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: ei.intl.string(r ? ei.t.GtBCnz : ei.t.roMu1H),
                                          message: t.message,
                                      });
                              }),
                      }),
                  })
                : null,
            (0, i.jsx)(N.m, {
                text: ei.intl.string(ei.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, i.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": ei.intl.string(ei.t["+TSRGD"]),
                    size: "sm",
                    icon: D.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, i.jsx)(N.m, {
                text: l,
                ariaHidden: !0,
                children: (0, i.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": l,
                    size: "sm",
                    icon: I.P,
                    onClick: () => (0, eE.x)(t.saveData),
                }),
            }),
        ],
    });
}
var e5 = n(702841),
    e7 = n(912592),
    e4 = n(890856),
    e6 = n(761508),
    e9 = n(910425),
    te = n(214947),
    tt = n(711950),
    tn = n(322387),
    ts = n(912309),
    ta = n(174459),
    tl = n(109261);
function ti(e) {
    let { closePopout: t } = e,
        n = (0, ts.kX)();
    return (0, i.jsx)(N.m, {
        asContainer: !0,
        text: ei.intl.string(ei.t["lMR96+"]),
        children: (0, i.jsxs)(U.D, {
            "aria-label": `${ei.intl.string(ei.t["lMR96+"])}, ${n}`,
            className: tl.b,
            onClick: () => {
                ta.default.track(ew.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: tn.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    tt.A.transitionToSection(ew.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(te.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(H.hV, { count: n, color: y.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var tr = n(980707),
    td = n(477782),
    tc = n(922016),
    to = n(783977),
    tu = n(378939),
    th = n(309010),
    tm = n(409686);
function tg(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, p.bG)([ee.A, th.Ay], () => ee.A.getChannel(th.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, p.cf)([tm.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tm.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(tr.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ei.intl.string(ei.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(td.sL, {
                id: "Everyone",
                label: ei.intl.string(ei.t.cdyUsV),
                action: function () {
                    tu.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(td.sL, {
                id: "Roles",
                label: ei.intl.string(ei.t.lZejCq),
                action: function () {
                    tu.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(td.sL, {
                      id: "All Servers",
                      label: ei.intl.string(ei.t.GWMA6s),
                      action: function () {
                          tu.A.setGuildFilter({
                              guildFilter: r === ew.KE7.THIS_SERVER ? ew.KE7.ALL_SERVERS : ew.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === ew.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tA() {
    let e = r.useRef(null);
    return (0, i.jsx)(tc.Y, {
        targetElementRef: e,
        align: "right",
        animation: tc.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tg, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(N.m, {
                text: ei.intl.string(ei.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(R.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ei.intl.string(ei.t.pEasFX),
                    icon: to.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tf = n(481613),
    tx = n.n(tf),
    tj = n(621466),
    tp = n(289873),
    tN = n(821609),
    tE = n(228366),
    tS = n(964486),
    ty = n(775602),
    tC = n(625494),
    tv = n(723702),
    tR = n(303727),
    tI = n(495427);
function t_(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: tI.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tI.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tI.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(tR.A, { className: tI.uf }),
                ],
            }),
            (0, i.jsx)(C.D, { className: tI.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(z.E, {
                              tag: "span",
                              className: tI.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [ei.intl.string(ei.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tM = n(862482),
    tD = n(143838),
    tL = n(640238);
function tT(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function a() {
        t(),
            ta.default.track(ew.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tb, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(N.m, {
                text: ei.intl.string(ei.t["8k+6QY"]),
                children: (0, i.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": ei.intl.string(ei.t["8k+6QY"]),
                    size: "sm",
                    icon: tD.i,
                    onClick: function (e) {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tb(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tL.M, {
        dismissable: !0,
        header: ei.intl.string(ei.t.h4bVZ2),
        confirmText: ei.intl.string(ei.t.e6RscS),
        cancelText: ei.intl.string(ei.t["ETE/oC"]),
        confirmButtonColor: tM.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(z.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ei.intl.string(ei.t["0MQ0Bf"]),
        }),
    });
}
var tO = n(435558),
    tk = n.n(tO),
    tG = n(749314),
    tF = n(534740),
    tU = n(311283),
    tP = n(717421),
    tw = n(933832),
    tK = n(334738),
    tH = n(95561),
    tz = n(976860),
    tB = n(847374),
    tX = n(345550);
function tJ(e) {
    let { collapsed: t, onClick: n } = e,
        s = ei.intl.string(t ? ei.t.dcl9MQ : ei.t.iTcuma);
    return (0, i.jsx)(N.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(U.D, {
            className: tX.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tB.a, { className: c()(tX.ai, { [tX.yZ]: t }), size: "xs" }),
        }),
    });
}
var tY = n(775924);
let tV = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tZ = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tq(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tP.z)(() => (t ? tV : tZ), "respect-motion-settings", []),
        d = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = s.current?.offsetHeight;
            null != e &&
                (t
                    ? l({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: ty.Ay.useReducedMotion,
                      })
                    : l({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: ty.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && l({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, l]),
        (0, i.jsx)(tF.animated.div, {
            className: tY.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tW = n(782603),
    t$ = n(461678),
    tQ = n(914703);
function t0(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(tc.Y, {
        targetElementRef: n,
        align: "right",
        animation: tc.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tQ.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ei.intl.string(ei.t.ljs3Oe),
                  })
                : (0, i.jsx)(t$.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ei.intl.string(ei.t.ljs3Oe),
                      location: { section: ew.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(N.m, {
                text: ei.intl.string(ei.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(R.K, {
                    "aria-label": ei.intl.string(ei.t.h850Ss),
                    icon: tW.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var t1 = n(350527),
    t3 = n(218152),
    t2 = n(970278),
    t8 = n(747926),
    t5 = n(935208),
    t7 = n(37411),
    t4 = n(159574);
function t6(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, p.yK)(
            [t2.A, ee.A],
            () =>
                tk()(t2.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return t5.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return ee.A.getChannel(t);
                    })
                    .filter(eC.Vq)
                    .sort((e, t) => t5.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, t8.JA)(e, t, t7.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                tE.h.wait(() => {
                    (0, tK.ack)(
                        t.channelId,
                        {
                            section: ew.JJy.INBOX,
                            object: ew.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: ew.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: t4.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    t3.Cp,
                    { channel: n, children: (0, i.jsx)(t1.Ay, { className: t4.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var t9 = n(989349),
    ne = n.n(t9),
    nt = n(123292),
    nn = n(857069),
    ns = n(33358),
    na = n(384231),
    nl = n(207133),
    ni = n(704413),
    nr = n(9842),
    nd = n(994500),
    nc = n(5095),
    no = n(143413),
    nu = n(763754),
    nh = n(467073),
    nm = n(491182),
    ng = n(860227),
    nA = n(655758),
    nf = n(375199),
    nx = n(824556),
    nj = n(715628),
    np = n(752636),
    nN = n(352043),
    nE = n(268719),
    nS = n(234957),
    ny = n(888675),
    nC = n(466959),
    nv = n(364932);
let nR = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: a,
            compact: l = !1,
            className: r,
            onContextMenu: d,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        m = ew.sl8.has(a.type) ? a.messageReference : void 0,
        g = (0, p.bG)([nr.A], () => nr.A.getMessageByReference(m)),
        A = (0, p.bG)([ee.A], () =>
            a.type === ew.lAJ.THREAD_STARTER_MESSAGE && g.state === nr.a.LOADED
                ? ee.A.getChannel(g.message.channel_id)
                : null,
        ),
        f = ex.X6.useSetting(),
        x = ex.hD.useSetting(),
        j = ex.rs.useSetting(),
        N = ex.kt.useSetting(),
        E = (0, na.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        S = (0, nl.A)(s?.id),
        { disableReactionCreates: y } = (0, nh.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: v,
            hasBailedAst: R,
        } = (0, nf.A)(a, {
            hideSimpleEmbedContent: x && j,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, nu.Ay)(a),
        _ = (0, p.bG)(
            [ee.A],
            () => a.hasFlag(ew.pr7.HAS_THREAD) && ee.A.getChannel(t5.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === ew.lAJ.THREAD_STARTER_MESSAGE && g.state === nr.a.LOADED && null != A,
        D = !M && void 0 === n,
        L = (0, nx.A)({ message: a, channel: s, announcementEnabled: D }),
        T = (0, ns.P)(a),
        b = (0, nc._f)(a.id, a.channel_id),
        O = (0, ni.A)(a),
        k = (0, ng.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: g.message, channel: A, hasThread: !1 })
        : (nd.A.isBlockedForMessage(a) ? (n = ei.t["+FcYM/"]) : nd.A.isIgnoredForMessage(a) && (n = ei.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(nI, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(nm.A, {
                compact: l,
                className: c()(r, { [nv.M1]: (0, eD.ec)(a), [nv.XN]: u, [nv._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nS.A)(a, s, m, g, l),
                childrenHeader: (0, np.A)({ ...t, author: I, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nA.iV, {
                    channel: s,
                    message: a,
                    hasSpoilerEmbeds: v,
                    hasBailedAst: R,
                    compact: l,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: y,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: f,
                    inlineEmbedMedia: x,
                    renderEmbeds: j,
                    gifAutoPlay: N,
                    poll: O,
                    showListsAndHeaders: E,
                    showMaskedLinks: E,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: T,
                    ctaButtonType: b,
                }),
                childrenExecutedCommand: (0, nE.A)(a, s, l),
                childrenMessageContent: (0, nj.A)(t, C),
                childrenSystemMessage: (0, nN.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != _ && a.hasFlag(ew.pr7.HAS_THREAD),
                hasReply: a.type === ew.lAJ.REPLY,
                isSystemMessage: (0, no.A)(a),
                messageRef: L,
                author: I,
                "aria-labelledby": k,
                "aria-roledescription": ei.intl.string(ei.t.BAB0yK),
            });
});
function nI(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(nm.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(ny.A, {
            compact: s,
            className: nC.L9,
            iconNode: (0, i.jsx)(I.P, { size: "md", color: "currentColor", className: nC.Q6 }),
            children: (0, i.jsx)("div", { className: nC.Fo, children: ei.intl.format(a, { count: n }) }),
        }),
    });
}
var n_ = n(58703),
    nM = n(195172);
function nD(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(U.D, {
        className: c()(nM.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(tp.y, { type: tp.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(z.E, { variant: "text-xs/medium", className: nM.Q, children: ei.intl.string(ei.t.k5WiPf) }),
    });
}
var nL = n(143236),
    nT = n(323073),
    nb = n(181079),
    nO = n(567035),
    nk = n(202803),
    nG = n(455234),
    nF = n(695633),
    nU = n(152007),
    nP = n(607508),
    nw = n(594061),
    nK = n(617617),
    nH = n(95701),
    nz = n(808728),
    nB = n(232835),
    nX = n(711014),
    nJ = n(543465),
    nY =
        (((s = {})[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (s[(s.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (s[(s.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 5)] = "GuildChannel"),
        (s[(s.OldChannel = 6)] = "OldChannel"),
        (s[(s.NoNotifications = 7)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        s),
    nV = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nZ extends nL.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        super(), (this.state = e), (this.scrollerRef = t);
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
    maybeLoadMore = () => {
        let e = this.scrollerRef.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 2e3 && this.loadMore());
    };
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            s = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (f()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        switch (e.type) {
            case "messages": {
                let t = nq(e, !1);
                if (t.messages.some(nk.$r)) return T.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t2.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, eC.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nq(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tE.h.wait(() =>
            tK.ack(
                t,
                {
                    section: ew.JJy.INBOX,
                    object: ew.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: ew.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              ty.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tK.ack(
            e.channelId,
            { section: ew.JJy.INBOX, object: ew.ZSU.UNDO_MARK_AS_READ, objectType: ew.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tE.h.wait(() => (0, nO.A)([e], ew.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tk().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tK.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = tk().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (a[t] = d),
            (0, nw.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nw.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: a,
                loadState: "done" !== l || d || r.isFullyLoaded ? l : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nJ.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nU.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t2.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        T.A.clearChannel(e.channelId);
        let t = T.A.fetchMessages({
            channelId: e.channelId,
            limit: ew.EMb,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            f()("messages" === e.type, "channel cannot change type");
                            let n = nq(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = { ...n, hasLoadedAnything: !0, isFullyLoaded: !0, hasError: !t }),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(
                            e.channelId,
                            (e) => (
                                f()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nq(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: e.messages[e.messages.length - 1]?.id,
                                }
                            ),
                        ),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
function nq(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nB.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    t5.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= t5.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = t5.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function nW() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nK.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let a = ee.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            ee.A.getSortedPrivateChannels().forEach((n) => n$(e, t, null, n.id)),
            nX.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nz.Ay.getSelectableChannelIds(n),
                    a = nF.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    n$(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) n$(e, t, n, s);
                });
            }),
            tk().sortBy(t, (e) => e.sortOrder)),
        a = tk()
            .uniq(s.map((e) => e.guildId))
            .filter(eC.Vq);
    return (
        tE.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function n$(e, t, n, s) {
    if (null == s) return;
    let a = ee.A.getChannel(s);
    if (null == a || (!nH.Le.has(a.type) && nJ.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === es.Ay.getMentionCount(s)) return;
    } else if (!(0, nG.Y)(a) && 0 === es.Ay.getMentionCount(s)) return;
    if (!a.isPrivate() && !ej.A.can(ew.xBc.READ_MESSAGE_HISTORY, a)) return;
    let l = es.Ay.ackMessageId(s);
    if (null == l) {
        let e = et.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = t5.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = es.Ay.getOldestUnreadMessageId(s),
        r = es.Ay.lastMessageId(s),
        d = es.Ay.getMentionCount(s),
        c = d > 0 || a.isPrivate();
    if (null == r || t5.default.compare(l, r) >= 0) return;
    let o = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: l,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: d,
        sortOrder: (function (e, t, n) {
            let s = ee.A.getChannel(t);
            if (nb.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (es.Ay.getMentionCount(t) > 0) return es.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t5.default.extractTimestamp(n);
                if (Date.now() - e > n0) return 8;
                if (Date.now() - e > nQ) return 6;
            }
            if (s.isThread()) {
                let e = (0, nP.l)(s);
                return e === t7.CP.ALL_MESSAGES ? 4 : e === t7.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nJ.Ay.getChannelMessageNotifications(e, t),
                    s = n === ew.orn.NULL ? nJ.Ay.getMessageNotifications(e) : n;
                return s === ew.orn.ALL_MESSAGES ? 4 : s === ew.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nT.qR)(a)
        ? t.push({ ...o, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nQ = 2 * ep.A.Millis.DAY,
    n0 = 10 * ep.A.Millis.DAY;
var n1 = n(358402);
let n3 = { left: 4, right: -12 },
    n2 = [ew.lAJ.THREAD_CREATED];
function n8(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, gotoChannel: l } = e,
        d = (0, j.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), l(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, l, n.id],
        ),
        o = n2.includes(n.type);
    return (0, i.jsx)(F.vN, {
        offset: n3,
        children: (0, i.jsxs)("div", {
            className: n1.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nD, { className: n1.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(nR, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: n1.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                }),
            ],
        }),
    });
}
function n5(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        a = ex.hH.useSetting(),
        l = 0 === t.messages.length || ne()(t.messages[0].timestamp).isSame(ne()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, n_.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tG.A, { className: n1.yF, children: t }, t)), (d = ne()(e.timestamp));
        }
        let t = null == c || (0, nn.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(n8, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t5.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: n1.Gr,
                        children: (0, i.jsx)(nt.Q, {
                            variant: "primary",
                            text: `${ei.intl.string(ei.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(tp.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: n1.DZ, children: r })
    );
}
let n7 = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[a, l], d] = r.useState([0, 0]),
            c = t.deleted && a > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== a || null == s.current) return;
            let e = s.current,
                l = e.offsetHeight;
            if (l <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? l - (r - i) : l;
            d([l, l - c]);
        }, [t.deleted, t.channelId, n, a]);
        let { opacity: o, size: u } = (0, tP.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!c,
                    size: +!c,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: o,
                height: u.to((e) => {
                    var t, n;
                    return c ? ((t = a), (n = l) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(tF.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(n4, { ...e }),
        });
    }),
    n4 = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, p.bG)([ee.A], () => ee.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tE.h.wait(() => {
                        (0, tK.ack)(
                            t.channelId,
                            {
                                section: ew.JJy.INBOX,
                                object: ew.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: ew.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == l || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eA.n4)(t.channelId, t.guildId, st, () => n(e));
            else {
                let a = s ?? t.oldestUnreadMessageId;
                T.A.trackJump(t.channelId, a, st), (0, tz.pX)(ew.BVt.CHANNEL(t.guildId, t.channelId, a)), n(e);
            }
        }
        function c() {
            a(t),
                (0, tH.zV)(ew.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, i.jsx)("div", {
            className: e$.aP,
            children: (0, i.jsx)(m.F, {
                component: (0, i.jsxs)(ec, {
                    channel: l,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${l.id}`,
                    children: [
                        (0, i.jsxs)(v.e, {
                            size: "sm",
                            className: er.GC,
                            children: [(0, i.jsx)(t0, { channel: l }), (0, i.jsx)(n6, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, i.jsx)(tJ, { collapsed: t.collapsed, onClick: c })
                            : (0, i.jsx)("div", { className: er.Pt }),
                    ],
                }),
                children: (0, i.jsx)(tq, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(n5, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(t6, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function n6(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, tU.A)() && null != t.guildId;
    return (0, i.jsx)(N.m, {
        text: l ? ei.intl.string(ei.t["5lLMhM"]) : ei.intl.string(ei.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(R.K, {
            variant: "secondary",
            "aria-label": l ? ei.intl.string(ei.t["5lLMhM"]) : ei.intl.string(ei.t.e6RscS),
            size: "sm",
            icon: l ? tD.i : tw.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tH.zV)(ew.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var n9 = n(245233),
    se = n(552392);
let st = "Inbox";
function sn(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = r.useRef(null),
        A = (0, b.A)("unreads", g);
    (0, eA.xN)(g), (0, eA.yW)(st);
    let [f, x] = (function (e) {
            let [t, n] = r.useState(() => new nZ(nW(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
                [i, d] = r.useState(() => nW());
            r.useEffect(() => {
                function e(e) {
                    return d(e);
                }
                return (
                    t.on("change", e),
                    d(t.state),
                    () => {
                        t.off("change", e);
                    }
                );
            }, [t]),
                r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || s) return;
                    let t = Date.now(),
                        r = nW();
                    0 === r.channels.length || t - l.current < 10 * ep.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nZ(r, e)));
                }, [i, s, e]);
            let c = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    c.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, c.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (nB.A.addChangeListener(t.reloadMessages), () => nB.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nJ.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nJ.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nU.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nU.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        t2.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t2.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(g),
        { loadState: N, channels: S } = f,
        { maybeLoadMore: y } = x,
        C = (0, p.bG)([ty.Ay], () => ty.Ay.messageGroupSpacing);
    return ((t = g),
    (n = f),
    (s = x),
    r.useLayoutEffect(() => {
        let { scrollToChannelIndex: e } = n;
        s.clearScrollToChannelIndex();
        let { current: a } = t;
        if (null == a || null == e) return;
        let l = a.getScrollerNode()?.children;
        if (null == l) return;
        let i = l[e];
        if (null == i) return;
        let { scrollTop: r, offsetHeight: d } = a.getScrollerState();
        (i.offsetTop < r || i.offsetTop > r + d) && a.scrollTo({ to: i.offsetTop });
    }),
    (a = f),
    (l = x),
    r.useEffect(() => {
        function e() {
            let e = a.channels.find((e) => !e.collapsed);
            null != e && l.markChannelRead(e);
        }
        return (
            tC._.subscribe(ew.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tC._.unsubscribe(ew.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [l, a.channels]),
    (d = x),
    r.useEffect(() => {
        function e(e) {
            if ((0, ek.hasAnyModalOpen)()) return;
            let t = (0, tj.BF)(e)?.activeElement;
            (0, tj.Cw)(t) ||
                (((0, tv.isMac)() || (0, tv.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    d.undoMarkChannelRead());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [d]),
    r.useEffect(
        () => (
            tE.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tE.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, tS.Ay)(
        () => (
            tC._.subscribe(ew.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead),
            () => {
                tC._.unsubscribe(ew.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead);
            }
        ),
    ),
    0 === S.length)
        ? (0, i.jsx)(t_, {
              Icon: e7.K,
              header: ei.intl.string(ei.t["6XMM+D"]),
              tip: tx().os?.family === "OS X" ? ei.intl.string(ei.t.w9uDOW) : ei.intl.string(ei.t.BiUJC6),
          })
        : (0, i.jsx)(j.hD, {
              navigator: A,
              children: (0, i.jsx)(j.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(E.Ch, {
                          ref: (e) => {
                              (g.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: N === nV.Done ? void 0 : y,
                          className: c()(e$.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(ss, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: a,
                                          deleteChannel: l,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tk().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nY.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tG.A,
                                                            {
                                                                className: n9.y,
                                                                contentClassName: n9.$,
                                                                children: ei.intl.string(ei.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nY.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tG.A,
                                                            {
                                                                className: n9.y,
                                                                contentClassName: n9.$,
                                                                children: ei.intl.string(ei.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  n7,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: a,
                                                      toggle: r,
                                                      deleteChannel: l,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          o
                                      );
                                  });
                              })(S, x, o),
                              N === nV.Done ? null : (0, i.jsx)(tp.y, { className: se.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function ss(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: se.d$,
        children: [
            (0, i.jsx)("div", { className: se.cm, children: (0, i.jsx)(e7.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(C.D, {
                        className: se.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ei.intl.string(ei.t.vZPktJ),
                    }),
                    (0, i.jsx)(z.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ei.intl.string(ei.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: se.dh,
                        children: (0, i.jsx)(tN.$, {
                            variant: "primary",
                            size: "sm",
                            text: ei.intl.string(ei.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function sa() {
    return (0, i.jsx)(t_, {
        Icon: e7.K,
        disableStars: !0,
        header: ei.intl.string(ei.t["KG/ynf"]),
        tip: ei.intl.string(ei.t.cvcKzX),
    });
}
function sl() {
    return (0, i.jsx)(tT, { onClick: () => tC._.dispatch(ew.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var si = n(668451);
function sr(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        a = (0, eN.jv)("RecentsPopout"),
        l = (0, e9.Sc)(),
        r = (0, e5.bG)([ey.A], () => ey.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: si.wx,
        children: [
            (0, i.jsxs)("div", {
                className: si.qd,
                children: [
                    (0, i.jsx)(e7.K, { size: "md", color: "currentColor", className: si.yH }),
                    (0, i.jsx)(C.D, {
                        className: si.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ei.intl.string(ei.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(e4.s, {
                        className: si.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ei.intl.string(ei.t["8k+6QY"]),
                        children: [(0, i.jsx)(sd, { tab: t }), (0, i.jsx)(ti, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: si.YF,
                children: (0, i.jsxs)(e6.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: si.$H,
                    children: [
                        (0, i.jsx)(e6.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": ei.intl.string(ei.t.sRUdB8),
                            className: si.Mf,
                            children: (0, i.jsx)("span", { className: si.Gn, children: ei.intl.string(ei.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(e6.V.Item, {
                            "aria-label": ei.intl.string(ei.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: si.Mf,
                            children: (0, i.jsx)("span", { className: si.Gn, children: ei.intl.string(ei.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(e6.V.Item, {
                                  "aria-label": ei.intl.string(ei.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: si.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: si.Gn,
                                      children: ei.intl.string(ei.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        a
                            ? (0, i.jsx)(e6.V.Item, {
                                  "aria-label": ei.intl.string(ei.t.aUXxzT),
                                  id: u.Y2.REMINDERS,
                                  className: si.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: si.Gn,
                                      children:
                                          0 === r
                                              ? ei.intl.string(ei.t.aUXxzT)
                                              : ei.intl.formatToPlainString(ei.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(e6.V.Item, {
                                  "aria-label": ei.intl.string(ei.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: si.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: si.Gn,
                                      children: ei.intl.string(ei.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function sd(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(sl, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tA, {}) : null;
}
var sc = n(935063),
    so = n(475743),
    su = n(517019),
    sh = n(919755);
let sm = { offset: { left: 4, right: -12 } },
    sg = "Recent Mentions";
function sA(e, t) {
    tu.A.fetchRecentMentions({
        before: t,
        limit: ew.Ue3,
        guildId: null != e && tm.Ay.guildFilter !== ew.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tm.Ay.roleFilter,
        everyone: tm.Ay.everyoneFilter,
    });
}
function sf(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, b.A)("recents", n);
    (0, eA.xN)(n), (0, eA.yW)(sg);
    let a = (0, p.bG)([ee.A, th.Ay], () => ee.A.getChannel(th.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, p.cf)([tm.Ay], () => ({
            messages: tm.Ay.getMentions(),
            hasMore: tm.Ay.hasMore,
            loading: tm.Ay.loading,
            guildFilter: tm.Ay.guildFilter,
            roleFilter: tm.Ay.roleFilter,
            everyoneFilter: tm.Ay.everyoneFilter,
        })),
        m = (0, so.Ay)(o),
        g = (0, so.Ay)(u),
        A = (0, so.Ay)(h);
    r.useEffect(() => {
        tm.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != A && h !== A)) && sA(a)
            : sA(a);
    }, [m, o, g, u, A, h, a]),
        (0, tS.Ay)(() => {
            l?.some(nk.$r) && (tu.A.clearMentions(), sA(a));
        }),
        (0, tS.l0)(() => {
            tu.A.truncateMentions(ew.Ue3);
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sA(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: e$.Lq, children: (0, i.jsx)(tp.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(t_, { Icon: sc.X, header: ei.intl.string(ei.t.bgDz74), tip: ei.intl.string(ei.t.NS15vk) })
          : (0, i.jsx)(j.hD, {
                navigator: s,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(E.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: e$.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                l.map((e) => (0, i.jsx)(sx, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: e$.Lq, children: (0, i.jsx)(tp.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: sh.u,
                                            children: (0, i.jsx)(tN.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ei.intl.string(ei.t.XBlaiC),
                                                onClick: () =>
                                                    sA(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sx(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = ee.A.getChannel(t.channel_id);
    if (null == s || (0, nT.Jm)(s) || (0, nT.$v)(s)) return null;
    let a = su.A.didAgree(s.getGuildId()),
        l = !!(0, nT.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: e$.aP,
        children: [
            (0, i.jsx)(ec, {
                channel: s,
                onClick: (e) => (0, eA.KW)(t, sg, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(v.e, {
                    size: "sm",
                    className: er.GC,
                    children: [
                        (0, i.jsx)(N.m, {
                            text: ei.intl.string(ei.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(R.K, {
                                variant: "secondary",
                                "aria-label": ei.intl.string(ei.t["+TSRGD"]),
                                size: "sm",
                                icon: D.t,
                                onClick: (e) => (0, eA.KW)(t, sg, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(N.m, {
                            text: ei.intl.string(ei.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(R.K, {
                                variant: "secondary",
                                "aria-label": ei.intl.string(ei.t.e6RscS),
                                size: "sm",
                                icon: tw.A,
                                onClick: () => tu.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    ef.A,
                    {
                        message: t,
                        channel: s,
                        className: e$.YD,
                        hideAccessories: l,
                        compact: ex.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: sm,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sj = n(285796),
    sp = n(151282),
    sN = n(199160),
    sE =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    sS = n(970244);
let sy = "Scheduled Messages",
    sC = { offset: { left: 4, right: -12 } };
function sv(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, sp.sy)();
    }, []);
    let n = (0, p.bG)([sN.A], () => sN.A.getScheduledMessagesForInbox()),
        s = (0, p.bG)([sN.A], () => sN.A.loading),
        a = (0, p.bG)([sN.A], () => sN.A.getMessagesPendingDeletion()),
        l = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, b.A)("scheduled-messages", d);
    return ((0, eA.xN)(d), (0, eA.yW)(sy), s)
        ? (0, i.jsx)("div", { className: e$.Lq, children: (0, i.jsx)(tp.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(t_, { Icon: B.O, header: ei.intl.string(ei.t.aJQZfZ), tip: ei.intl.string(ei.t.rCN4pN) })
          : (0, i.jsx)(j.hD, {
                navigator: c,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(E.Ch, {
                            className: e$.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    sR,
                                    {
                                        scheduledMessage: e,
                                        channelId: e.scheduledMessage.channelId,
                                        isPendingDeletion: a.has(e.scheduledMessageId),
                                        onJump: t,
                                    },
                                    e.scheduledMessageId,
                                ),
                            ),
                        });
                    },
                }),
            });
}
let sR = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, p.bG)([ee.A], () => ee.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sE.SCHEDULED:
                    return { isError: !1, stateMessage: ei.intl.string(ei.t.Fn6Odn) };
                case sE.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.v5O2dK) };
                case sE.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.j8uIfG) };
                case sE.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t["w6zHX/"]) };
                case sE.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.pflV7z) };
                case sE.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.j8uIfG) };
                default:
                    (0, eC.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, sp.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sS.Re)();
                })
                .catch((e) => {
                    (0, sS.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sS.CI)({ scheduledMessage: t });
        }, [t]);
    return null == l
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: e$.aP,
                  children: [
                      (0, i.jsx)(ec, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => (0, eA.n4)(l.id, l.guild_id, sy, () => a(e)),
                          collapsed: !1,
                          children: (0, i.jsxs)(v.e, {
                              size: "sm",
                              className: er.GC,
                              children: [
                                  (0, i.jsx)(N.m, {
                                      text: ei.intl.string(ei.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: B.O,
                                          "aria-label": ei.intl.string(ei.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(N.m, {
                                      text: ei.intl.string(ei.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sj.a,
                                          "aria-label": ei.intl.string(ei.t.O3sL8F),
                                          onClick: o,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsx)(eg, {
                          type: d ? "error" : "success",
                          text: d
                              ? c
                              : ei.intl.formatToPlainString(ei.t["CvHu/j"], {
                                    timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                }),
                      }),
                      s
                          ? (0, i.jsx)(tp.y, { className: e$.Lq })
                          : (0, i.jsx)(
                                ef.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: e$.YD,
                                    compact: ex.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: sC,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var sI = n(655165);
function s_(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: a,
        closePopout: l,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: A,
        forLaterEnabled: f,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": ei.intl.string(ei.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sI.k, { [sI.q]: n }),
            children: (0, i.jsx)(o.tH, {
                fallback: (0, i.jsx)(sa, {}),
                children: (0, i.jsx)(m.F, {
                    component: (0, i.jsx)(sr, { tab: s, setTab: a, closePopout: l }),
                    children:
                        s === u.Y2.MENTIONS
                            ? (0, i.jsx)(sf, { onJump: r })
                            : f && s === u.Y2.BOOKMARKS
                              ? (0, i.jsx)(e3, { closePopout: l, type: g.Yf.BOOKMARK }, "bookmarks")
                              : f && s === u.Y2.REMINDERS
                                ? (0, i.jsx)(e3, { closePopout: l, type: g.Yf.REMINDER }, "reminders")
                                : s === u.Y2.SCHEDULED
                                  ? (0, i.jsx)(sv, { onJump: r })
                                  : (0, i.jsx)(sn, { onJump: r, showTutorial: d, setSeenTutorial: A, closePopout: l }),
                }),
            }),
        }),
    });
}
