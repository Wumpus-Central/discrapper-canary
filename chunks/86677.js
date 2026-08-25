n.r(t), n.d(t, { default: () => sU });
var s,
    l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    d = n.n(r),
    c = n(292442),
    o = n(873298),
    u = n(305866),
    h = n(707554),
    m = n(756377),
    g = n(284009),
    x = n.n(g),
    A = n(562708),
    f = n(837381),
    j = n(17928),
    p = n(866665),
    N = n(689175),
    v = n(695366),
    y = n(661531),
    C = n(297264),
    I = n(825484),
    S = n(408278),
    E = n(789645),
    M = n(440971),
    R = n(22231),
    b = n(99677),
    _ = n(442433),
    L = n(148494),
    T = n(928039),
    k = n(793574),
    D = n(688810),
    O = n(139286),
    F = n(259678),
    G = n(939249),
    P = n(320448),
    w = n(778712),
    K = n(97808),
    U = n(812993),
    z = n(834730),
    H = n(406810),
    B = n(397244),
    X = n(714114),
    J = n(394871),
    Y = n(571694),
    V = n(47167),
    W = n(713654),
    Z = n(598104),
    $ = n(548118),
    q = n(616356),
    Q = n(734057),
    ee = n(71393),
    et = n(290863),
    en = n(573163),
    es = n(287809),
    el = n(650583),
    ea = n(375708),
    ei = n(545760);
let er = { top: 8, bottom: 8, left: -4, right: -4 };
function ed(e) {
    let {
            channel: t,
            children: n,
            status: s,
            onClick: l,
            collapsed: i = !1,
            mentionCount: r,
            onToggleCollapse: c,
            itemId: o,
        } = e,
        u = (0, f.rm)(o);
    return (0, a.jsxs)("div", {
        className: ei.N1,
        children: [
            s,
            (0, a.jsx)(F.vN, {
                offset: er,
                children: (0, a.jsxs)("div", {
                    className: d()(ei.ZO, { [ei.yZ]: i }),
                    ...u,
                    "data-recents-channel": t.id,
                    onKeyDown: function (e) {
                        if ((e.key === el.dh.ENTER || e.key === el.dh.SPACE) && e.target === e.currentTarget) {
                            e.preventDefault(), l(e);
                            return;
                        }
                        null != c && ((e.key === el.dh.ARROW_RIGHT && i) || (e.key === el.dh.ARROW_LEFT && !i)) && c();
                    },
                    children: [
                        (0, a.jsx)(G.D, {
                            className: ei.YT,
                            onClick: l,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, a.jsx)(ec, { channel: t }),
                        }),
                        (0, a.jsx)(P._, { className: ei.ai, size: "xxs" }),
                        (0, a.jsx)(eo, { channel: t, onClick: l, mentionCount: r }),
                        n,
                    ],
                }),
            }),
        ],
    });
}
function ec(e) {
    let { channel: t } = e,
        n = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id));
    return null != n
        ? (0, a.jsx)($.Ay, { className: ei.Kk, guild: n, size: $.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, a.jsx)(Z.A, { channel: t, size: w._3.SIZE_32, "aria-hidden": !0 })
          : (0, a.jsx)(K.eu, { size: w._3.SIZE_32, src: (0, Y.Y)(t), "aria-hidden": !0 });
}
function eo(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id)),
        i = (0, V.Ay)(t, !1),
        r = (0, j.bG)([en.Ay], () => en.Ay.getIsMentionLowImportance(t.id)),
        d = (0, W.gU)(t, l);
    return (0, a.jsxs)("div", {
        className: ei.yP,
        children: [
            (0, a.jsx)(C.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ei.lz,
                children: (0, a.jsxs)(G.D, {
                    className: ei.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, a.jsx)(d, { className: ei.j1, size: "xxs" }),
                        (0, a.jsx)("span", { className: ei.je, children: i }),
                        null != s && s > 0
                            ? (0, a.jsx)("div", {
                                  className: ei.qS,
                                  children: (0, a.jsx)(U.hV, {
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
            (0, a.jsx)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: (0, a.jsx)(eu, { channel: t, onClick: n }),
            }),
        ],
    });
}
function eu(e) {
    let { channel: t, onClick: n } = e,
        s = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id)),
        l = (0, j.bG)([Q.A], () => Q.A.getChannel(t.parent_id)),
        i = (0, V.Ay)(l);
    if (t.isMultiUserDM())
        return (0, a.jsx)(a.Fragment, {
            children: ea.intl.formatToPlainString(ea.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, a.jsx)(eh, { channel: t });
    let r = [s?.name, null != l ? i : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, a.jsx)(G.D, { className: d()(ei.je, ei.J5), onClick: n, children: r }) : null;
}
function eh(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: i,
        } = (0, j.cf)([es.default, et.A, q.A], () => {
            let e = es.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? et.A.getStatus(e.id) : null,
                activities: null != e ? et.A.getActivities(e.id) : null,
                applicationStream: null != e ? q.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, X.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: l, status: s, applicationStream: i, voiceChannel: r })
        ? (0, a.jsx)(J.A, { user: n, activities: l, applicationStream: i, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function em(e) {
    let { type: t, text: n } = e;
    return (0, a.jsxs)("div", {
        className: ei.h5,
        children: [
            "error" === t
                ? (0, a.jsx)(v.E, { size: "xs", color: "currentColor", className: ei.ik })
                : (0, a.jsx)(H.ClockIcon, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
        ],
    });
}
var eg = n(642213),
    ex = n(636922),
    eA = n(885386),
    ef = n(576705),
    ej = n(927813),
    ep = n(269073),
    eN = n(164684),
    ev = n(704456),
    ey = n(85109);
n(321073);
var eC = n(403362),
    eI = n(216623);
function eS(e) {
    switch (e) {
        case m.Yf.BOOKMARK:
            return ey.A.getMessageBookmarks();
        case m.Yf.REMINDER:
            return ey.A.getMessageReminders();
        default:
            return ey.A.getSavedMessages();
    }
}
function eE(e) {
    return eS(e).map((e) => e.saveData);
}
var eM = n(606096),
    eR = n(803306),
    eb = n(320095),
    e_ = n(963852),
    eL = n(20851),
    eT = n(889227),
    ek = n(403581),
    eD = n(192308),
    eO = n(738188),
    eF = n(404374),
    eG = n(611371),
    eP = n(465794),
    ew = n(158045),
    eK = n(652215),
    eU = n(202541);
n(811233);
var ez = n(489893);
function eH(e) {
    var t, s, l, r;
    let d,
        { isReminder: c, limit: o, isAtLimit: u = !1 } = e,
        { analyticsLocations: h } = (0, D.Ay)(),
        m = i.useCallback(() => {
            (0, eD.openModalLazy)(async () => {
                let { default: e } = await n.e("422540").then(n.bind(n, 530951));
                return (t) => (0, a.jsx)(e, { ...t, isReminder: c, limit: o, analyticsLocations: h });
            });
        }, [o, c, h]);
    return (0, a.jsxs)("div", {
        className: ez.Zj,
        children: [
            u
                ? (0, a.jsx)(eO.WarningIcon, { size: "md", color: "currentColor", className: ez.QW })
                : (0, a.jsx)(ek.t, { size: "md", color: eF.k0.PREMIUM_TIER_2 }),
            (0, a.jsxs)(z.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: ez.tD,
                children: [
                    ((t = c),
                    (s = o),
                    (l = u),
                    (r = m),
                    (d = (0, ew.Dd)(eU.PremiumTypes.TIER_2)),
                    null == s
                        ? ea.intl.format(ea.t.qXh3fo, { nitroTierName: d, onClick: r })
                        : l
                          ? ea.intl.format(t ? ea.t.MYFohD : ea.t.FNFCVJ, {
                                nitroTierName: d,
                                onClick: r,
                                premiumMax: t ? 50 : 200,
                            })
                          : ea.intl.formatToPlainString(t ? ea.t["W+ZaoS"] : ea.t["0hoV2D"], { nitroTierName: d })),
                    " ",
                    (0, a.jsx)(eG.A, { className: ez.TN }),
                ],
            }),
            (0, a.jsx)(eP.A, {
                size: "sm",
                variantOverride: u ? void 0 : "primary",
                subscriptionTier: eU.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eK.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eB = n(897781),
    eX = n(936037),
    eJ = n(144273);
function eY(e) {
    let { type: t } = e,
        n = t === m.Yf.REMINDER,
        s = ea.intl.string(n ? ea.t.aUXxzT : ea.t["2pAkDA"]);
    return (0, ep.lA)("ForLaterIntro")
        ? (0, a.jsx)("div", {
              className: eB.kL,
              children: (0, a.jsxs)("div", {
                  className: eB.vW,
                  children: [
                      (0, a.jsx)("img", { src: eX, className: eB.Tn, alt: s }),
                      (0, a.jsx)(C.D, {
                          className: eB.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(n ? ea.t["5Iw19e"] : ea.t["93WOd1"]),
                      }),
                      (0, a.jsx)("div", {
                          className: eB.rf,
                          children: (0, a.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.format(n ? ea.t["E+qms7"] : ea.t.legvTg, {
                                  itemName: ea.intl.string(n ? ea.t.mJ3P0N : ea.t.tpxJto),
                              }),
                          }),
                      }),
                      (0, a.jsx)(eV, { isReminder: n }),
                  ],
              }),
          })
        : (0, a.jsx)("div", {
              className: eB.kL,
              children: (0, a.jsxs)("div", {
                  className: eB.vW,
                  children: [
                      (0, a.jsx)("img", { src: eX, className: eB.Tn, alt: s }),
                      (0, a.jsx)(C.D, {
                          className: eB.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(ea.t.w4DRbZ),
                      }),
                      (0, a.jsx)("div", {
                          className: eB.rf,
                          children: (0, a.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.string(ea.t.F6u3E3),
                          }),
                      }),
                      (0, a.jsx)(eH, { isReminder: n }),
                  ],
              }),
          });
}
function eV(e) {
    let { isReminder: t } = e,
        n = i.useMemo(() => {
            let e = new eT.A({ id: "313338", username: ea.intl.string(ea.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eR.insertStaticUser(e);
            return (
                null != t && (t.getAvatarURL = () => eJ.A),
                [ea.intl.string(ea.t["h+KPxy"]), ea.intl.string(ea.t["63EVpI"]), ea.intl.string(ea.t["KT/TDX"])].map(
                    (n, s) => {
                        let l = (0, eb.rh)({
                            ...(0, e_.Ay)({ channelId: "1338", content: n }),
                            state: eK.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return (l.author = t ?? e), l;
                    },
                )
            );
        }, []);
    return (0, a.jsx)("div", {
        className: eB.qJ,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: eB.DZ,
            children: n.map((e, n) =>
                (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)(eL.A, {
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
                                ? (0, a.jsxs)("div", {
                                      className: eB.MK,
                                      children: [
                                          (0, a.jsx)(eW, {
                                              icon: eM.BookmarkIcon,
                                              label: ea.intl.string(ea.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, a.jsx)(eW, {
                                              icon: H.ClockIcon,
                                              label: ea.intl.string(ea.t.mJ3P0N),
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
function eW(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(eB.KT, { [eB.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function eZ(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, ev.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ev.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, a.jsx)(em, { type: l ? "error" : "normal", text: s });
}
var e$ = n(294002),
    eq = n(414676);
let eQ = "ForLaterPopout",
    e0 = "Bookmarks",
    e1 = "Reminders";
function e3(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yf.ALL,
                [t, n] = i.useState(() => eE(e)),
                s = i.useRef(ey.A.getIsStale());
            return (
                i.useEffect(() => {
                    let t = ey.A.getLastChanged();
                    function l() {
                        let l = ey.A.getLastChanged();
                        if (t !== l) {
                            if (((t = l), s.current && !ey.A.getIsStale())) {
                                (s.current = !1), n(eE(e));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eS(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        ey.A.addChangeListener(l),
                        () => {
                            ey.A.removeChangeListener(l);
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    (0, eI.AX)();
                }, []),
                (0, j.yK)([ey.A], () => t.map((e) => ey.A.getSavedMessage(e.channelId, e.messageId)).filter(eC.Vq))
            );
        })(n),
        l = n === m.Yf.REMINDER,
        r = (0, ep.oG)(eQ, l),
        d = (0, ep.dR)(eQ),
        c = d && r > 0 && s.length >= r,
        o = d && s.length > 0,
        { analyticsLocations: u } = (0, D.Ay)(k.A.FOR_LATER_POPOUT);
    (0, O.A)(
        {
            type: A.ImpressionTypes.POPOUT,
            name: A.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                tab_type: n,
                total_count: s.length,
                overdue_count: ey.A.getOverdueMessageReminderCount(),
                nitro_upsell_bar_shown: o && !c,
                nitro_roadblock_upsell_bar_shown: o && c,
            },
        },
        {},
        [s.length, o, c],
    );
    let h = i.useRef(null),
        g = (0, T.A)("for-later", h);
    (0, eg.xN)(h), (0, eg.yW)(n === m.Yf.BOOKMARK ? e0 : e1);
    let [x, p] = i.useState(new Date());
    return (i.useEffect(() => {
        let e = setInterval(() => p(new Date()), ej.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, a.jsx)(D.f5, { value: u, children: (0, a.jsx)(eY, { type: n }) })
        : (0, a.jsx)(D.f5, {
              value: u,
              children: (0, a.jsxs)("div", {
                  className: e$.MY,
                  children: [
                      (0, a.jsx)(f.hD, {
                          navigator: g,
                          children: (0, a.jsx)(f.PR, {
                              children: (e) => {
                                  let { ref: n, ...l } = e;
                                  return (0, a.jsx)(N.Ch, {
                                      ref: (e) => {
                                          (h.current = e), (n.current = e?.getScrollerNode() ?? null);
                                      },
                                      className: eq.XG,
                                      ...l,
                                      children: s.map((e) =>
                                          (0, a.jsx)(
                                              e2,
                                              { savedMessage: e, closePopout: t, throttledNow: x },
                                              e.saveData.messageId,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                      o
                          ? (0, a.jsx)("div", {
                                className: e$.fH,
                                children: (0, a.jsx)(eH, { isReminder: l, limit: r, isAtLimit: c }),
                            })
                          : null,
                  ],
              }),
          });
}
function e2(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, ev.vr)(t),
        r = i.useCallback(
            async (e) => {
                await (0, ev.le)(t, l),
                    e.shiftKey || n(),
                    L.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? e1 : e0);
            },
            [n, t, l],
        ),
        c = (0, j.bG)(
            [ef.A],
            () => !!(l?.type === eK.rbe.UNKNOWN || l?.isPrivate()) || ef.A.can(eK.xBc.VIEW_CHANNEL, l),
        );
    return null != l && null != t.message && c
        ? (0, a.jsxs)("div", {
              className: eq.aP,
              children: [
                  (0, a.jsx)(ed, {
                      itemId: `header-${t.message.id}`,
                      channel: l,
                      onClick: (e) => {
                          r(e), n();
                      },
                      collapsed: !1,
                      status: null != t.saveData.dueAt ? (0, a.jsx)(eZ, { reminder: t, throttledNow: s }) : null,
                      children: (0, a.jsx)(I.e, {
                          size: "sm",
                          className: ei.GC,
                          children: (0, a.jsx)(e7, { savedMessage: t, jumpToMessage: r, throttledNow: s }),
                      }),
                  }),
                  (0, a.jsx)(
                      ex.A,
                      {
                          message: t.message,
                          channel: l,
                          className: eq.YD,
                          compact: eA.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, a.jsxs)("div", {
              className: d()(eq.aP, e$.tq),
              children: [
                  (0, a.jsxs)("div", {
                      className: e$.kb,
                      children: [
                          (0, a.jsx)("div", {
                              className: e$.Bx,
                              children: (0, a.jsx)(v.E, { size: "xxs", color: y.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, a.jsx)(C.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ea.intl.string(ea.t["wuQm+j"])
                                      : ea.intl.string(ea.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, a.jsx)(I.e, {
                      size: "sm",
                      className: ei.GC,
                      children: (0, a.jsx)(p.m, {
                          text: ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, a.jsx)(S.K, {
                              variant: "secondary",
                              "aria-label": ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                              size: "sm",
                              icon: E.P,
                              onClick: () => (0, eN.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function e7(e) {
    let { savedMessage: t, jumpToMessage: s, throttledNow: l } = e;
    x()(null != t.message, "Saved message must be cached for For Later action buttons");
    let i = ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
        r = null != t.saveData.dueAt && l > t.saveData.dueAt,
        d = ea.intl.string(r ? ea.t.GtBCnz : ea.t.vrbqs1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != t.saveData.dueAt
                ? (0, a.jsx)(p.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, a.jsx)(S.K, {
                          variant: "secondary",
                          "aria-label": d,
                          size: "sm",
                          icon: r ? M.R : R.PencilIcon,
                          onClick: (e) =>
                              (0, _.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("275133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          label: ea.intl.string(r ? ea.t.GtBCnz : ea.t.roMu1H),
                                          message: t.message,
                                      });
                              }),
                      }),
                  })
                : null,
            (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, a.jsx)(S.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                    size: "sm",
                    icon: b.t,
                    onClick: (e) => s(e),
                }),
            }),
            (0, a.jsx)(p.m, {
                text: i,
                ariaHidden: !0,
                children: (0, a.jsx)(S.K, {
                    variant: "secondary",
                    "aria-label": i,
                    size: "sm",
                    icon: E.P,
                    onClick: () => (0, eN.x)(t.saveData),
                }),
            }),
        ],
    });
}
var e6 = n(702841),
    e8 = n(912592),
    e4 = n(890856),
    e5 = n(761508),
    e9 = n(674470),
    te = n(214947),
    tt = n(711950),
    tn = n(322387),
    ts = n(912309),
    tl = n(174459),
    ta = n(198476);
function ti(e) {
    let { closePopout: t } = e,
        n = (0, ts.kX)();
    return (0, a.jsx)(p.m, {
        asContainer: !0,
        text: ea.intl.string(ea.t["lMR96+"]),
        children: (0, a.jsxs)(G.D, {
            "aria-label": `${ea.intl.string(ea.t["lMR96+"])}, ${n}`,
            className: ta.b,
            onClick: () => {
                tl.default.track(eK.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: tn.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    tt.A.transitionToSection(eK.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, a.jsx)(te.$, { size: "xs", color: "currentColor" }),
                (0, a.jsx)(U.hV, { count: n, color: y.A.colors.BACKGROUND_MOD_STRONG.css }),
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
        s = (0, j.bG)([Q.A, th.Ay], () => Q.A.getChannel(th.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: i,
            guildFilter: r,
        } = (0, j.cf)([tm.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tm.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, a.jsxs)(tr.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ea.intl.string(ea.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, a.jsx)(td.sL, {
                id: "Everyone",
                label: ea.intl.string(ea.t.cdyUsV),
                action: function () {
                    tu.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, a.jsx)(td.sL, {
                id: "Roles",
                label: ea.intl.string(ea.t.lZejCq),
                action: function () {
                    tu.A.setGuildFilter({ roleFilter: !i });
                },
                checked: i,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, a.jsx)(td.sL, {
                      id: "All Servers",
                      label: ea.intl.string(ea.t.GWMA6s),
                      action: function () {
                          tu.A.setGuildFilter({
                              guildFilter: r === eK.KE7.THIS_SERVER ? eK.KE7.ALL_SERVERS : eK.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eK.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tx() {
    let e = i.useRef(null);
    return (0, a.jsx)(tc.Y, {
        targetElementRef: e,
        align: "right",
        animation: tc.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tg, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.pEasFX),
                targetElementRef: e,
                children: (0, a.jsx)(S.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t.pEasFX),
                    icon: to.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tA = n(481613),
    tf = n.n(tA),
    tj = n(621466),
    tp = n(289873),
    tN = n(821609),
    tv = n(228366),
    ty = n(964486),
    tC = n(775602),
    tI = n(625494),
    tS = n(723702),
    tE = n(303727),
    tM = n(435842);
function tR(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, a.jsxs)("div", {
        className: tM.kL,
        children: [
            (0, a.jsxs)("div", {
                className: tM.zc,
                children: [
                    (0, a.jsx)(t, { color: "currentColor", size: "custom", className: tM.Kk, width: 36, height: 36 }),
                    l ? null : (0, a.jsx)(tE.A, { className: tM.uf }),
                ],
            }),
            (0, a.jsx)(C.D, { className: tM.wx, variant: "heading-xl/semibold", children: n }),
            (0, a.jsxs)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, a.jsxs)(z.E, {
                              tag: "span",
                              className: tM.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [ea.intl.string(ea.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tb = n(862482),
    t_ = n(143838),
    tL = n(640238);
function tT(e) {
    let { onClick: t } = e,
        [n, s] = i.useState(!1);
    function l() {
        t(),
            tl.default.track(eK.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n ? (0, a.jsx)(tk, { confirm: l, cancel: () => s(!1) }) : null,
            (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t["8k+6QY"]),
                children: (0, a.jsx)(S.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                    size: "sm",
                    icon: t_.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tk(e) {
    let { cancel: t, confirm: n } = e;
    return (0, a.jsx)(tL.M, {
        dismissable: !0,
        header: ea.intl.string(ea.t.h4bVZ2),
        confirmText: ea.intl.string(ea.t.e6RscS),
        cancelText: ea.intl.string(ea.t["ETE/oC"]),
        confirmButtonColor: tb.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, a.jsx)(z.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["0MQ0Bf"]),
        }),
    });
}
var tD = n(435558),
    tO = n.n(tD),
    tF = n(749314),
    tG = n(296704),
    tP = n(311283),
    tw = n(717421),
    tK = n(933832),
    tU = n(334738),
    tz = n(95561),
    tH = n(976860),
    tB = n(847374),
    tX = n(907847);
function tJ(e) {
    let { collapsed: t, onClick: n } = e,
        s = ea.intl.string(t ? ea.t.dcl9MQ : ea.t.iTcuma);
    return (0, a.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, a.jsx)(G.D, {
            className: tX.x6,
            "aria-label": s,
            onClick: n,
            children: (0, a.jsx)(tB.a, { className: d()(tX.ai, { [tX.yZ]: t }), size: "xs" }),
        }),
    });
}
var tY = n(585517);
let tV = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tW = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tZ(e) {
    let { collapsed: t, children: n } = e,
        s = i.useRef(null),
        [l, r] = (0, tw.z)(() => (t ? tV : tW), "respect-motion-settings", []),
        d = i.useRef(!0);
    return (
        i.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = s.current?.offsetHeight;
            null != e &&
                (t
                    ? r({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: tC.Ay.useReducedMotion,
                      })
                    : r({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tC.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && r({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, r]),
        (0, a.jsx)(tG.animated.div, {
            className: tY.r,
            style: l,
            children: (0, a.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var t$ = n(782603),
    tq = n(461678),
    tQ = n(914703);
function t0(e) {
    let { channel: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tc.Y, {
        targetElementRef: n,
        align: "right",
        animation: tc.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, a.jsx)(tQ.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                  })
                : (0, a.jsx)(tq.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                      location: { section: eK.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.h850Ss),
                targetElementRef: n,
                children: (0, a.jsx)(S.K, {
                    "aria-label": ea.intl.string(ea.t.h850Ss),
                    icon: t$.BellIcon,
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
    t7 = n(747926),
    t6 = n(935208),
    t8 = n(37411),
    t4 = n(278489);
function t5(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, j.yK)(
            [t2.A, Q.A],
            () =>
                tO()(t2.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return t6.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return Q.A.getChannel(t);
                    })
                    .filter(eC.Vq)
                    .sort((e, t) => t6.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        r = i.useCallback((e, t) => {
            (0, t7.JA)(e, t, t8.H9.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                tv.h.wait(() => {
                    (0, tU.ack)(
                        t.channelId,
                        {
                            section: eK.JJy.INBOX,
                            object: eK.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eK.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, a.jsx)("div", {
            className: t4.k,
            children: l.map((e) =>
                (0, a.jsx)(
                    t3.Cp,
                    { channel: n, children: (0, a.jsx)(t1.Ay, { className: t4.u, threadId: e.id, goToThread: r }) },
                    e.id,
                ),
            ),
        })
    );
}
var t9 = n(536637),
    ne = n.n(t9),
    nt = n(123292),
    nn = n(857069),
    ns = n(33358),
    nl = n(384231),
    na = n(207133),
    ni = n(704413),
    nr = n(9842),
    nd = n(994500),
    nc = n(5095),
    no = n(143413),
    nu = n(763754),
    nh = n(467073),
    nm = n(491182),
    ng = n(860227),
    nx = n(70268),
    nA = n(375199),
    nf = n(824556),
    nj = n(715628),
    np = n(752636),
    nN = n(352043),
    nv = n(268719),
    ny = n(234957),
    nC = n(888675),
    nI = n(845806),
    nS = n(13673);
let nE = i.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: i = !1,
            className: r,
            onContextMenu: c,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        m = eK.sl8.has(l.type) ? l.messageReference : void 0,
        g = (0, j.bG)([nr.A], () => nr.A.getMessageByReference(m)),
        x = (0, j.bG)([Q.A], () =>
            l.type === eK.lAJ.THREAD_STARTER_MESSAGE && g.state === nr.a.LOADED
                ? Q.A.getChannel(g.message.channel_id)
                : null,
        ),
        A = eA.X6.useSetting(),
        f = eA.hD.useSetting(),
        p = eA.rs.useSetting(),
        N = eA.kt.useSetting(),
        v = (0, nl.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        y = (0, na.A)(s?.id),
        { disableReactionCreates: C } = (0, nh.A)(s),
        {
            content: I,
            hasSpoilerEmbeds: S,
            hasBailedAst: E,
        } = (0, nA.A)(l, {
            hideSimpleEmbedContent: f && p,
            allowList: v,
            allowHeading: v,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        M = (0, nu.Ay)(l),
        R = (0, j.bG)(
            [Q.A],
            () => l.hasFlag(eK.pr7.HAS_THREAD) && Q.A.getChannel(t6.default.castMessageIdAsChannelId(l.id)),
        ),
        b = l.type === eK.lAJ.THREAD_STARTER_MESSAGE && g.state === nr.a.LOADED && null != x,
        _ = !b && void 0 === n,
        L = (0, nf.A)({ message: l, channel: s, announcementEnabled: _ }),
        T = (0, ns.P)(l),
        k = (0, nc._f)(l.id, l.channel_id),
        D = (0, ni.A)(l),
        O = (0, ng.fF)(l);
    return b
        ? (0, a.jsx)(e, { ...t, message: g.message, channel: x, hasThread: !1 })
        : (nd.A.isBlockedForMessage(l) ? (n = ea.t["+FcYM/"]) : nd.A.isIgnoredForMessage(l) && (n = ea.t["VFWjc+"]),
            void 0 !== n)
          ? (0, a.jsx)(nM, { className: r, compact: i, count: 1, collapsedReason: n })
          : (0, a.jsx)(nm.A, {
                compact: i,
                className: d()(r, { [nS.M1]: (0, eb.ec)(l), [nS.XN]: u, [nS._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, ny.A)(l, s, m, g, i),
                childrenHeader: (0, np.A)({ ...t, author: M, guildId: s.guild_id }),
                childrenAccessories: (0, a.jsx)(nx.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: S,
                    hasBailedAst: E,
                    compact: i,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: C,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: A,
                    inlineEmbedMedia: f,
                    renderEmbeds: p,
                    gifAutoPlay: N,
                    poll: D,
                    showListsAndHeaders: v,
                    showMaskedLinks: v,
                    shouldHideMediaOptions: y,
                    enabledContentHarmTypeFlags: T,
                    ctaButtonType: k,
                }),
                childrenExecutedCommand: (0, nv.A)(l, s, i),
                childrenMessageContent: (0, nj.A)(t, I),
                childrenSystemMessage: (0, nN.A)(t),
                onContextMenu: c,
                onClick: o,
                hasThread: !1 !== h && null != R && l.hasFlag(eK.pr7.HAS_THREAD),
                hasReply: l.type === eK.lAJ.REPLY,
                isSystemMessage: (0, no.A)(l),
                messageRef: L,
                author: M,
                "aria-labelledby": O,
                "aria-roledescription": ea.intl.string(ea.t.BAB0yK),
            });
});
function nM(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, a.jsx)(nm.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nC.A, {
            compact: s,
            className: nI.L9,
            iconNode: (0, a.jsx)(E.P, { size: "md", color: "currentColor", className: nI.Q6 }),
            children: (0, a.jsx)("div", { className: nI.Fo, children: ea.intl.format(l, { count: n }) }),
        }),
    });
}
var nR = n(58703),
    nb = n(222831);
function n_(e) {
    let { className: t, onJump: n } = e,
        [s, l] = i.useState(!1);
    return (0, a.jsx)(G.D, {
        className: d()(nb.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, a.jsx)(tp.y, { type: tp.y.Type.PULSING_ELLIPSIS })
            : (0, a.jsx)(z.E, { variant: "text-xs/medium", className: nb.Q, children: ea.intl.string(ea.t.k5WiPf) }),
    });
}
var nL = n(143236),
    nT = n(323073),
    nk = n(181079),
    nD = n(567035),
    nO = n(679164),
    nF = n(455234),
    nG = n(863005),
    nP = n(152007),
    nw = n(607508),
    nK = n(594061),
    nU = n(617617),
    nz = n(95701),
    nH = n(808728),
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
    nV = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
class nW extends nL.EventEmitter {
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
                        (x()("nsfw" !== e.type, "this channel should already be loaded"),
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
                let t = nZ(e, !1);
                if (t.messages.some(nO.$r)) return L.A.clearChannel(e.channelId), { ...e, messages: [] };
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
                "messages" === e.type && e.hasLoadedAnything ? nZ(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tv.h.wait(() =>
            tU.ack(
                t,
                {
                    section: eK.JJy.INBOX,
                    object: eK.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eK.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              tC.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tU.ack(
            e.channelId,
            { section: eK.JJy.INBOX, object: eK.ZSU.UNDO_MARK_AS_READ, objectType: eK.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tv.h.wait(() => (0, nD.A)([e], eK.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tO().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tU.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tO().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (l[t] = d),
            (0, nK.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nK.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: l,
                loadState: "done" !== a || d || r.isFullyLoaded ? a : "loaded",
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
        let e = this.state.channels.filter((e) => !nP.A.isMuted(e.channelId));
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
        L.A.clearChannel(e.channelId);
        let t = L.A.fetchMessages({
            channelId: e.channelId,
            limit: eK.EMb,
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
                            x()("messages" === e.type, "channel cannot change type");
                            let n = nZ(e, !0);
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
                                x()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nZ(e, !0),
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
function nZ(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nB.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    t6.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= t6.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = t6.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function n$() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nU.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = Q.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            Q.A.getSortedPrivateChannels().forEach((n) => nq(e, t, null, n.id)),
            nX.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nH.Ay.getSelectableChannelIds(n),
                    l = nG.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nq(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nq(e, t, n, s);
                });
            }),
            tO().sortBy(t, (e) => e.sortOrder)),
        l = tO()
            .uniq(s.map((e) => e.guildId))
            .filter(eC.Vq);
    return (
        tv.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nq(e, t, n, s) {
    if (null == s) return;
    let l = Q.A.getChannel(s);
    if (null == l || (!nz.Le.has(l.type) && nJ.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === en.Ay.getMentionCount(s)) return;
    } else if (!(0, nF.Y)(l) && 0 === en.Ay.getMentionCount(s)) return;
    if (!l.isPrivate() && !ef.A.can(eK.xBc.READ_MESSAGE_HISTORY, l)) return;
    let a = en.Ay.ackMessageId(s);
    if (null == a) {
        let e = ee.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = t6.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = en.Ay.getOldestUnreadMessageId(s),
        r = en.Ay.lastMessageId(s),
        d = en.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || t6.default.compare(a, r) >= 0) return;
    let o = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: a,
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
            let s = Q.A.getChannel(t);
            if (nk.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (en.Ay.getMentionCount(t) > 0) return en.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t6.default.extractTimestamp(n);
                if (Date.now() - e > n0) return 8;
                if (Date.now() - e > nQ) return 6;
            }
            if (s.isThread()) {
                let e = (0, nw.l)(s);
                return e === t8.CP.ALL_MESSAGES ? 4 : e === t8.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nJ.Ay.getChannelMessageNotifications(e, t),
                    s = n === eK.orn.NULL ? nJ.Ay.getMessageNotifications(e) : n;
                return s === eK.orn.ALL_MESSAGES ? 4 : s === eK.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nT.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nQ = 2 * ej.A.Millis.DAY,
    n0 = 10 * ej.A.Millis.DAY;
var n1 = n(743373);
let n3 = { left: 4, right: -12 },
    n2 = [eK.lAJ.THREAD_CREATED];
function n7(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: r } = e,
        d = (0, f.rm)(n.id ?? ""),
        c = i.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), r(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, r, n.id],
        ),
        o = n2.includes(n.type);
    return (0, a.jsx)(F.vN, {
        offset: n3,
        children: (0, a.jsxs)("div", {
            className: n1.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, a.jsx)(n_, { className: n1.nn, onJump: (e) => r(e, n.id) }),
                (0, a.jsx)(nE, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: n1.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function n6(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = eA.hH.useSetting(),
        i = 0 === t.messages.length || ne()(t.messages[0].timestamp).isSame(ne()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!i && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nR.i$)(e.timestamp, "LL");
            r.push((0, a.jsx)(tF.A, { className: n1.yF, children: t }, t)), (d = ne()(e.timestamp));
        }
        let t = null == c || (0, nn.A)(n, c, e);
        (c = e), r.push((0, a.jsx)(n7, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t6.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, a.jsx)(
                    "div",
                    {
                        className: n1.Gr,
                        children: (0, a.jsx)(nt.Q, {
                            variant: "primary",
                            text: `${ea.intl.string(ea.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, a.jsx)(tp.y, {}, "spinner")]),
        (0, a.jsx)("div", { className: n1.DZ, children: r })
    );
}
let n8 = i.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = i.useRef(null),
            [[l, r], d] = i.useState([0, 0]),
            c = t.deleted && l > 0;
        i.useLayoutEffect(() => {
            if (!t.deleted || 0 !== l || null == s.current) return;
            let e = s.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? a - (r - i) : a;
            d([a, a - c]);
        }, [t.deleted, t.channelId, n, l]);
        let { opacity: o, size: u } = (0, tw.z)(
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
                    return c ? ((t = l), (n = r) + (t - n) * e) : "auto";
                }),
            };
        return (0, a.jsx)(tG.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, a.jsx)(n4, { ...e }),
        });
    }),
    n4 = i.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            r = (0, j.bG)([Q.A], () => Q.A.getChannel(t.channelId));
        if (
            (i.useEffect(() => {
                null == r ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tv.h.wait(() => {
                        (0, tU.ack)(
                            t.channelId,
                            {
                                section: eK.JJy.INBOX,
                                object: eK.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eK.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == r || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eg.n4)(t.channelId, t.guildId, st, () => n(e));
            else {
                let l = s ?? t.oldestUnreadMessageId;
                L.A.trackJump(t.channelId, l, st), (0, tH.pX)(eK.BVt.CHANNEL(t.guildId, t.channelId, l)), n(e);
            }
        }
        function c() {
            l(t),
                (0, tz.zV)(eK.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, a.jsx)("div", {
            className: eq.aP,
            children: (0, a.jsx)(h.F, {
                component: (0, a.jsxs)(ed, {
                    channel: r,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${r.id}`,
                    children: [
                        (0, a.jsxs)(I.e, {
                            size: "sm",
                            className: ei.GC,
                            children: [(0, a.jsx)(t0, { channel: r }), (0, a.jsx)(n5, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, a.jsx)(tJ, { collapsed: t.collapsed, onClick: c })
                            : (0, a.jsx)("div", { className: ei.Pt }),
                    ],
                }),
                children: (0, a.jsx)(tZ, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, a.jsx)(n6, { channel: t, channelRecord: r, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, a.jsx)(t5, { channel: t, channelRecord: r, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function n5(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        i = (0, tP.A)() && null != t.guildId;
    return (0, a.jsx)(p.m, {
        text: i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
        ariaHidden: !0,
        children: (0, a.jsx)(S.K, {
            variant: "secondary",
            "aria-label": i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
            size: "sm",
            icon: i ? t_.i : tK.CheckmarkLargeIcon,
            onClick: function () {
                i && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tz.zV)(eK.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var n9 = n(171664),
    se = n(173615);
let st = "Inbox";
function sn(e) {
    var t, n, s, l, r, c;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = i.useRef(null),
        x = (0, T.A)("unreads", g);
    (0, eg.xN)(g), (0, eg.yW)(st);
    let [A, p] = (function (e) {
            let [t, n] = i.useState(() => new nW(n$(), e)),
                [s, l] = i.useState(!1),
                a = i.useRef(Date.now()),
                [r, d] = i.useState(() => n$());
            i.useEffect(() => {
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
                i.useEffect(() => {
                    if (null == r || r.channels.length > 0 || s) return;
                    let t = Date.now(),
                        i = n$();
                    0 === i.channels.length || t - a.current < 10 * ej.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nW(i, e)));
                }, [r, s, e]);
            let c = i.useRef(t);
            return (
                i.useLayoutEffect(() => {
                    c.current = t;
                }),
                i.useLayoutEffect(() => {
                    r?.channels, r?.loadState, c.current.maybeLoadMore();
                }, [r?.channels, r?.loadState]),
                i.useEffect(
                    () => (nB.A.addChangeListener(t.reloadMessages), () => nB.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                i.useEffect(
                    () => (
                        nJ.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nJ.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        nP.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nP.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        t2.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t2.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [r, t]
            );
        })(g),
        { loadState: v, channels: y } = A,
        { maybeLoadMore: C } = p,
        I = (0, j.bG)([tC.Ay], () => tC.Ay.messageGroupSpacing);
    return ((t = g),
    (n = A),
    (s = p),
    i.useLayoutEffect(() => {
        let { scrollToChannelIndex: e } = n;
        s.clearScrollToChannelIndex();
        let { current: l } = t;
        if (null == l || null == e) return;
        let a = l.getScrollerNode()?.children;
        if (null == a) return;
        let i = a[e];
        if (null == i) return;
        let { scrollTop: r, offsetHeight: d } = l.getScrollerState();
        (i.offsetTop < r || i.offsetTop > r + d) && l.scrollTo({ to: i.offsetTop });
    }),
    (l = A),
    (r = p),
    i.useEffect(() => {
        function e() {
            let e = l.channels.find((e) => !e.collapsed);
            null != e && r.markChannelRead(e);
        }
        return (
            tI._.subscribe(eK.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tI._.unsubscribe(eK.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [r, l.channels]),
    (c = p),
    i.useEffect(() => {
        function e(e) {
            if ((0, eD.hasAnyModalOpen)()) return;
            let t = (0, tj.BF)(e)?.activeElement;
            (0, tj.Cw)(t) ||
                (((0, tS.isMac)() || (0, tS.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    c.undoMarkChannelRead());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [c]),
    i.useEffect(
        () => (
            tv.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tv.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, ty.Ay)(
        () => (
            tI._.subscribe(eK.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
            () => {
                tI._.unsubscribe(eK.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
            }
        ),
    ),
    0 === y.length)
        ? (0, a.jsx)(tR, {
              Icon: e8.InboxIcon,
              header: ea.intl.string(ea.t["6XMM+D"]),
              tip: tf().os?.family === "OS X" ? ea.intl.string(ea.t.w9uDOW) : ea.intl.string(ea.t.BiUJC6),
          })
        : (0, a.jsx)(f.hD, {
              navigator: x,
              children: (0, a.jsx)(f.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, a.jsxs)(N.Ch, {
                          ref: (e) => {
                              (g.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: v === nV.Done ? void 0 : C,
                          className: d()(eq.XG, `group-spacing-${I}`),
                          children: [
                              u ? (0, a.jsx)(ss, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: i,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tO().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nY.ReallyOldChannel
                                                  ? o.push(
                                                        (0, a.jsx)(
                                                            tF.A,
                                                            {
                                                                className: n9.y,
                                                                contentClassName: n9.$,
                                                                children: ea.intl.string(ea.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nY.NoNotifications &&
                                                    o.push(
                                                        (0, a.jsx)(
                                                            tF.A,
                                                            {
                                                                className: n9.y,
                                                                contentClassName: n9.$,
                                                                children: ea.intl.string(ea.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, a.jsx)(
                                                  n8,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: l,
                                                      toggle: r,
                                                      deleteChannel: i,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          o
                                      );
                                  });
                              })(y, p, o),
                              v === nV.Done ? null : (0, a.jsx)(tp.y, { className: se.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function ss(e) {
    let { setSeenTutorial: t } = e;
    return (0, a.jsxs)("div", {
        className: se.d$,
        children: [
            (0, a.jsx)("div", {
                className: se.cm,
                children: (0, a.jsx)(e8.InboxIcon, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(C.D, {
                        className: se.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ea.intl.string(ea.t.vZPktJ),
                    }),
                    (0, a.jsx)(z.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ea.intl.string(ea.t.vWkIII),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: se.dh,
                        children: (0, a.jsx)(tN.$, {
                            variant: "primary",
                            size: "sm",
                            text: ea.intl.string(ea.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function sl() {
    return (0, a.jsx)(tR, {
        Icon: e8.InboxIcon,
        disableStars: !0,
        header: ea.intl.string(ea.t["KG/ynf"]),
        tip: ea.intl.string(ea.t.cvcKzX),
    });
}
function sa() {
    return (0, a.jsx)(tT, { onClick: () => tI._.dispatch(eK.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var si = n(113164);
function sr(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        l = (0, ep.jv)("RecentsPopout"),
        i = (0, e9.Sc)(),
        r = (0, e6.bG)([ey.A], () => ey.A.getOverdueMessageReminderCount());
    return (0, a.jsxs)("div", {
        className: si.wx,
        children: [
            (0, a.jsxs)("div", {
                className: si.qd,
                children: [
                    (0, a.jsx)(e8.InboxIcon, { size: "md", color: "currentColor", className: si.yH }),
                    (0, a.jsx)(C.D, {
                        className: si.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ea.intl.string(ea.t.GSmTKJ),
                    }),
                    (0, a.jsxs)(e4.s, {
                        className: si.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                        children: [(0, a.jsx)(sd, { tab: t }), (0, a.jsx)(ti, { closePopout: s })],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: si.YF,
                children: (0, a.jsxs)(e5.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: si.$H,
                    children: [
                        (0, a.jsx)(e5.V.Item, {
                            id: o.Y2.UNREADS,
                            "aria-label": ea.intl.string(ea.t.sRUdB8),
                            className: si.Mf,
                            children: (0, a.jsx)("span", { className: si.Gn, children: ea.intl.string(ea.t.sRUdB8) }),
                        }),
                        (0, a.jsx)(e5.V.Item, {
                            "aria-label": ea.intl.string(ea.t.GRZF96),
                            id: o.Y2.MENTIONS,
                            className: si.Mf,
                            children: (0, a.jsx)("span", { className: si.Gn, children: ea.intl.string(ea.t.GRZF96) }),
                        }),
                        l
                            ? (0, a.jsx)(e5.V.Item, {
                                  "aria-label": ea.intl.string(ea.t["2pAkDA"]),
                                  id: o.Y2.BOOKMARKS,
                                  className: si.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: si.Gn,
                                      children: ea.intl.string(ea.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        l
                            ? (0, a.jsx)(e5.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.aUXxzT),
                                  id: o.Y2.REMINDERS,
                                  className: si.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: si.Gn,
                                      children:
                                          0 === r
                                              ? ea.intl.string(ea.t.aUXxzT)
                                              : ea.intl.formatToPlainString(ea.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        i
                            ? (0, a.jsx)(e5.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.Fn6Odn),
                                  id: o.Y2.SCHEDULED,
                                  className: si.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: si.Gn,
                                      children: ea.intl.string(ea.t.Fn6Odn),
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
    return t === o.Y2.UNREADS ? (0, a.jsx)(sa, {}) : t === o.Y2.MENTIONS ? (0, a.jsx)(tx, {}) : null;
}
var sc = n(935063),
    so = n(475743),
    su = n(517019),
    sh = n(356622);
let sm = { offset: { left: 4, right: -12 } },
    sg = "Recent Mentions";
function sx(e, t) {
    tu.A.fetchRecentMentions({
        before: t,
        limit: eK.Ue3,
        guildId: null != e && tm.Ay.guildFilter !== eK.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tm.Ay.roleFilter,
        everyone: tm.Ay.everyoneFilter,
    });
}
function sA(e) {
    let { onJump: t } = e,
        n = i.useRef(null),
        s = (0, T.A)("recents", n);
    (0, eg.xN)(n), (0, eg.yW)(sg);
    let l = (0, j.bG)([Q.A, th.Ay], () => Q.A.getChannel(th.Ay.getChannelId())),
        {
            messages: r,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([tm.Ay], () => ({
            messages: tm.Ay.getMentions(),
            hasMore: tm.Ay.hasMore,
            loading: tm.Ay.loading,
            guildFilter: tm.Ay.guildFilter,
            roleFilter: tm.Ay.roleFilter,
            everyoneFilter: tm.Ay.everyoneFilter,
        })),
        m = (0, so.Ay)(o),
        g = (0, so.Ay)(u),
        x = (0, so.Ay)(h);
    i.useEffect(() => {
        tm.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != x && h !== x)) && sx(l)
            : sx(l);
    }, [m, o, g, u, x, h, l]),
        (0, ty.Ay)(() => {
            r?.some(nO.$r) && (tu.A.clearMentions(), sx(l));
        }),
        (0, ty.l0)(() => {
            tu.A.truncateMentions(eK.Ue3);
        });
    let A = i.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sx(l, null != r && r.length > 0 ? r[r.length - 1].id : null);
    }, [d, c, l, r]);
    return null == r || (c && 0 === r.length)
        ? (0, a.jsx)("div", { className: eq.Lq, children: (0, a.jsx)(tp.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(tR, { Icon: sc.X, header: ea.intl.string(ea.t.bgDz74), tip: ea.intl.string(ea.t.NS15vk) })
          : (0, a.jsx)(f.hD, {
                navigator: s,
                children: (0, a.jsx)(f.PR, {
                    children: (e) => {
                        let { ref: s, ...i } = e;
                        return (0, a.jsxs)(N.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eq.XG,
                            onScroll: d ? A : void 0,
                            ...i,
                            children: [
                                r.map((e) => (0, a.jsx)(sf, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, a.jsx)("div", { className: eq.Lq, children: (0, a.jsx)(tp.y, {}) })
                                    : d
                                      ? (0, a.jsx)("div", {
                                            className: sh.u,
                                            children: (0, a.jsx)(tN.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ea.intl.string(ea.t.XBlaiC),
                                                onClick: () =>
                                                    sx(l, null != r && r.length > 0 ? r[r.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sf(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = Q.A.getChannel(t.channel_id);
    if (null == s || (0, nT.Jm)(s) || (0, nT.$v)(s)) return null;
    let l = su.A.didAgree(s.getGuildId()),
        i = !!(0, nT.Gc)(s) && !l;
    return (0, a.jsxs)("div", {
        className: eq.aP,
        children: [
            (0, a.jsx)(ed, {
                channel: s,
                onClick: (e) => (0, eg.KW)(t, sg, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, a.jsxs)(I.e, {
                    size: "sm",
                    className: ei.GC,
                    children: [
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, a.jsx)(S.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                                size: "sm",
                                icon: b.t,
                                onClick: (e) => (0, eg.KW)(t, sg, () => n(e)),
                            }),
                        }),
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, a.jsx)(S.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t.e6RscS),
                                size: "sm",
                                icon: tK.CheckmarkLargeIcon,
                                onClick: () => tu.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                children: (0, a.jsx)(
                    ex.A,
                    {
                        message: t,
                        channel: s,
                        className: eq.YD,
                        hideAccessories: i,
                        compact: eA.hH.getSetting(),
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
    sp = n(588975),
    sN = n(151282),
    sv = n(199160),
    sy = n(339350),
    sC = n(81369),
    sI = n(663341),
    sS = n(626891);
function sE() {
    return (0, a.jsx)("div", {
        className: sS.kL,
        children: (0, a.jsxs)("div", {
            className: sS.vW,
            children: [
                (0, a.jsxs)("div", {
                    className: sS.zc,
                    children: [
                        (0, a.jsx)(sy.Q, {
                            color: "currentColor",
                            size: "custom",
                            className: sS.Kk,
                            width: 36,
                            height: 36,
                        }),
                        (0, a.jsx)(tE.A, { className: sS.uf }),
                    ],
                }),
                (0, a.jsx)(C.D, {
                    className: sS.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: ea.intl.string(ea.t["C/j9NE"]),
                }),
                (0, a.jsx)("div", {
                    className: sS.rf,
                    children: (0, a.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: ea.intl.format(ea.t.FAn5lu, {}),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: sS.qJ,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: sS.MK,
                            children: [
                                (0, a.jsx)(sM, { icon: sC.H, label: ea.intl.string(ea.t["d3+iYs"]), highlighted: !1 }),
                                (0, a.jsx)(sM, { icon: sy.Q, label: ea.intl.string(ea.t["3+ii4F"]), highlighted: !0 }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: sS.RW,
                            children: [
                                (0, a.jsx)("div", {
                                    className: sS.$f,
                                    children: (0, a.jsx)(sI.PlusLargeIcon, {
                                        color: "currentColor",
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                                (0, a.jsx)(z.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ea.intl.string(ea.t.fxxYiB),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function sM(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(sS.KT, { [sS.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
var sR = n(970244);
n(938796);
var sb = n(408018),
    s_ = n(451909),
    sL = n(205120),
    sT = n(91624);
function sk(e) {
    let { scheduledMessage: t, channel: n, onCancel: s } = e,
        [l, r] = i.useState(() => {
            let e = eA.D_.getSetting(),
                s = (0, e9.zs)(t.scheduledMessage),
                l = s_.Ay.unparse(s, n.id);
            return { textValue: l, richValue: (0, sb.x7)(e ? l : s) };
        }),
        d = i.useCallback((e, t, n) => {
            r({ textValue: t, richValue: n });
        }, []),
        c = t.scheduledMessageId,
        o = t.scheduledMessage.flags,
        u = i.useCallback(
            (e, t, n) => {
                let { content: s } = n;
                return (0, sR.XM)({ scheduledMessageId: c, content: s, flags: o });
            },
            [c, o],
        ),
        h = i.useCallback(() => (0, sR.tu)(c), [c]);
    return (0, a.jsx)(sL.A, {
        channel: n,
        message: t.record,
        textValue: l.textValue,
        richValue: l.richValue,
        onCancel: s,
        onChange: d,
        onConfirmDelete: h,
        saveMessage: u,
        validateEdit: sT.R3,
        children: sD,
    });
}
function sD(e) {
    return (0, a.jsx)(sT.Nr, { ...e });
}
var sO = n(757424);
let sF = "Scheduled Messages",
    sG = { offset: { left: 4, right: -12 } };
function sP(e) {
    let { onJump: t } = e;
    i.useEffect(() => {
        (0, sN.sy)();
    }, []);
    let n = (0, j.bG)([sv.A], () => sv.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sv.A], () => sv.A.loading),
        l = (0, j.bG)([sv.A], () => sv.A.getMessagesPendingDeletion()),
        r = i.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = i.useRef(null),
        c = (0, T.A)("scheduled-messages", d);
    return ((0, eg.xN)(d), (0, eg.yW)(sF), s)
        ? (0, a.jsx)("div", { className: eq.Lq, children: (0, a.jsx)(tp.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(sE, {})
          : (0, a.jsx)(f.hD, {
                navigator: c,
                children: (0, a.jsx)(f.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, a.jsx)(N.Ch, {
                            className: eq.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: r.map((e) =>
                                (0, a.jsx)(
                                    sw,
                                    {
                                        scheduledMessage: e,
                                        channelId: e.scheduledMessage.channelId,
                                        isPendingDeletion: l.has(e.scheduledMessageId),
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
let sw = i.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: l } = e,
        r = (0, j.bG)([Q.A], () => Q.A.getChannel(n)),
        { isError: c, stateMessage: o } = (0, e9.Y8)(t.state),
        u = eA.hH.useSetting(),
        [h, m] = i.useState(!1),
        g = i.useCallback(() => (0, sR.tu)(t.scheduledMessageId), [t.scheduledMessageId]),
        x = i.useCallback(() => {
            (0, sR.CI)({ scheduledMessage: t });
        }, [t]);
    return null == r
        ? null
        : (0, a.jsxs)(
              "div",
              {
                  className: eq.aP,
                  children: [
                      (0, a.jsx)(ed, {
                          itemId: `header-${t.record.id}`,
                          channel: r,
                          onClick: (e) => (0, eg.n4)(r.id, r.guild_id, sF, () => l(e)),
                          collapsed: !1,
                          status: (0, a.jsx)(em, {
                              type: c ? "error" : "normal",
                              text: c
                                  ? o
                                  : ea.intl.formatToPlainString(ea.t["CvHu/j"], {
                                        timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                    }),
                          }),
                          children: (0, a.jsxs)(I.e, {
                              size: "sm",
                              className: ei.GC,
                              children: [
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.ZXE1s4),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(S.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: R.PencilIcon,
                                          "aria-label": ea.intl.string(ea.t.ZXE1s4),
                                          onClick: () => m(!0),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(S.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: H.ClockIcon,
                                          "aria-label": ea.intl.string(ea.t.SBcdAN),
                                          onClick: x,
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(S.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sj.a,
                                          "aria-label": ea.intl.string(ea.t.O3sL8F),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      s
                          ? (0, a.jsx)(tp.y, { className: eq.Lq })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(
                                        ex.A,
                                        {
                                            message: t.record,
                                            channel: r,
                                            className: t.attachmentUploads.length > 0 ? sO.Mg : eq.YD,
                                            compact: u,
                                            animateAvatar: !1,
                                            focusProps: sG,
                                            inlineEditor: h
                                                ? (0, a.jsx)(sk, {
                                                      scheduledMessage: t,
                                                      channel: r,
                                                      onCancel: () => m(!1),
                                                  })
                                                : void 0,
                                        },
                                        t.record.id,
                                    ),
                                    t.attachmentUploads.length > 0 &&
                                        (0, a.jsxs)("div", {
                                            className: d()(sO.PI, { [sO.oE]: u }),
                                            children: [
                                                (0, a.jsx)(sp.P, { size: "xs", color: "currentColor" }),
                                                (0, a.jsx)(z.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-subtle",
                                                    children: ea.intl.format(ea.t.ZJ1tPW, {
                                                        count: t.attachmentUploads.length,
                                                    }),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                  ],
              },
              t.record.id,
          );
});
var sK = n(211550);
function sU(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        closePopout: i,
        handleMentionsJump: r,
        showTutorial: g,
        setSeenTutorial: x,
        forLaterEnabled: A,
    } = e;
    return (0, a.jsx)(u.l, {
        "aria-label": ea.intl.string(ea.t.GSmTKJ),
        className: t,
        children: (0, a.jsx)("div", {
            className: d()(sK.k, { [sK.q]: n }),
            children: (0, a.jsx)(c.tH, {
                fallback: (0, a.jsx)(sl, {}),
                children: (0, a.jsx)(h.F, {
                    component: (0, a.jsx)(sr, { tab: s, setTab: l, closePopout: i }),
                    children:
                        s === o.Y2.MENTIONS
                            ? (0, a.jsx)(sA, { onJump: r })
                            : A && s === o.Y2.BOOKMARKS
                              ? (0, a.jsx)(e3, { closePopout: i, type: m.Yf.BOOKMARK }, "bookmarks")
                              : A && s === o.Y2.REMINDERS
                                ? (0, a.jsx)(e3, { closePopout: i, type: m.Yf.REMINDER }, "reminders")
                                : s === o.Y2.SCHEDULED
                                  ? (0, a.jsx)(sP, { onJump: r })
                                  : (0, a.jsx)(sn, { onJump: r, showTutorial: g, setSeenTutorial: x, closePopout: i }),
                }),
            }),
        }),
    });
}
