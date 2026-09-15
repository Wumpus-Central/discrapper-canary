(n.r(t), n.d(t, { default: () => s6 }));
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
    y = n(695366),
    v = n(661531),
    I = n(297264),
    C = n(825484),
    E = n(408278),
    S = n(789645),
    M = n(440971),
    R = n(22231),
    b = n(99677),
    _ = n(442433),
    L = n(148494),
    T = n(928039),
    D = n(793574),
    k = n(688810),
    O = n(139286),
    G = n(259678),
    P = n(939249),
    F = n(320448),
    w = n(778712),
    U = n(97808),
    K = n(812993),
    z = n(834730),
    H = n(406810),
    B = n(397244),
    V = n(714114),
    J = n(394871),
    X = n(571694),
    Y = n(47167),
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
            (0, a.jsx)(G.vN, {
                offset: er,
                children: (0, a.jsxs)("div", {
                    className: d()(ei.ZO, { [ei.yZ]: i }),
                    ...u,
                    "data-recents-channel": t.id,
                    onKeyDown: function (e) {
                        if ((e.key === el.dh.ENTER || e.key === el.dh.SPACE) && e.target === e.currentTarget) {
                            (e.preventDefault(), l(e));
                            return;
                        }
                        null != c && ((e.key === el.dh.ARROW_RIGHT && i) || (e.key === el.dh.ARROW_LEFT && !i)) && c();
                    },
                    children: [
                        (0, a.jsx)(P.D, {
                            className: ei.YT,
                            onClick: l,
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, a.jsx)(ec, { channel: t }),
                        }),
                        (0, a.jsx)(F._, { className: ei.ai, size: "xxs" }),
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
          : (0, a.jsx)(U.eu, { size: w._3.SIZE_32, src: (0, X.Y)(t), "aria-hidden": !0 });
}
function eo(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, j.bG)([ee.A], () => ee.A.getGuild(t.guild_id)),
        i = (0, Y.Ay)(t, !1),
        r = (0, j.bG)([en.Ay], () => en.Ay.getIsMentionLowImportance(t.id)),
        d = (0, W.gU)(t, l);
    return (0, a.jsxs)("div", {
        className: ei.yP,
        children: [
            (0, a.jsx)(I.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ei.lz,
                children: (0, a.jsxs)(P.D, {
                    className: ei.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, a.jsx)(d, { className: ei.j1, size: "xxs" }),
                        (0, a.jsx)("span", { className: ei.je, children: i }),
                        null != s && s > 0
                            ? (0, a.jsx)("div", {
                                  className: ei.qS,
                                  children: (0, a.jsx)(K.hV, {
                                      count: s,
                                      color: r
                                          ? v.A.colors.BACKGROUND_MOD_STRONG.css
                                          : v.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
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
        i = (0, Y.Ay)(l);
    if (t.isMultiUserDM())
        return (0, a.jsx)(a.Fragment, {
            children: ea.intl.formatToPlainString(ea.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, a.jsx)(eh, { channel: t });
    let r = [s?.name, null != l ? i : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, a.jsx)(P.D, { className: d()(ei.je, ei.J5), onClick: n, children: r }) : null;
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
        { voiceChannel: r } = (0, V.Ay)({ userId: n?.id });
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
                ? (0, a.jsx)(y.E, { size: "xs", color: "currentColor", className: ei.ik })
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
    ey = n(704456),
    ev = n(85109);
n(321073);
var eI = n(403362),
    eC = n(216623);
function eE(e) {
    switch (e) {
        case m.Yf.BOOKMARK:
            return ev.A.getMessageBookmarks();
        case m.Yf.REMINDER:
            return ev.A.getMessageReminders();
        default:
            return ev.A.getSavedMessages();
    }
}
function eS(e) {
    return eE(e).map((e) => e.saveData);
}
var eM = n(606096),
    eR = n(803306),
    eb = n(320095),
    e_ = n(963852),
    eL = n(20851),
    eT = n(889227),
    eD = n(192308),
    ek = n(158045),
    eO = n(403581),
    eG = n(738188),
    eP = n(404374),
    eF = n(611371),
    ew = n(465794),
    eU = n(202541),
    eK = n(603037);
function ez(e) {
    let { text: t, isAtLimit: n, analyticsSection: s } = e;
    return (0, a.jsxs)("div", {
        className: eK.Zj,
        children: [
            n
                ? (0, a.jsx)(eG.WarningIcon, { size: "md", color: "currentColor", className: eK.QW })
                : (0, a.jsx)(eO.t, { size: "md", color: eP.k0.PREMIUM_TIER_2 }),
            (0, a.jsxs)(z.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: eK.tD,
                children: [t, " ", (0, a.jsx)(eF.A, { className: eK.TN })],
            }),
            (0, a.jsx)(ew.A, {
                size: "sm",
                variantOverride: n ? void 0 : "primary",
                subscriptionTier: eU.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: s },
            }),
        ],
    });
}
var eH = n(652215);
function eB(e) {
    var t, s, l, r;
    let d,
        { isReminder: c, limit: o, isAtLimit: u = !1 } = e,
        { analyticsLocations: h } = (0, k.Ay)(),
        m = i.useCallback(() => {
            (0, eD.openModalLazy)(async () => {
                let { default: e } = await n.e("422540").then(n.bind(n, 530951));
                return (t) => (0, a.jsx)(e, { ...t, isReminder: c, limit: o, analyticsLocations: h });
            });
        }, [o, c, h]);
    return (0, a.jsx)(ez, {
        text:
            ((t = c),
            (s = o),
            (l = u),
            (r = m),
            (d = (0, ek.Dd)(eU.PremiumTypes.TIER_2)),
            null == s
                ? ea.intl.format(ea.t.qXh3fo, { nitroTierName: d, onClick: r })
                : l
                  ? ea.intl.format(t ? ea.t.MYFohD : ea.t.FNFCVJ, {
                        nitroTierName: d,
                        onClick: r,
                        premiumMax: t ? 50 : 200,
                    })
                  : ea.intl.formatToPlainString(t ? ea.t["W+ZaoS"] : ea.t["0hoV2D"], { nitroTierName: d })),
        isAtLimit: u,
        analyticsSection: eH.JJy.FOR_LATER_POPOUT_UPSELL,
    });
}
n(811233);
var eV = n(897781),
    eJ = n(936037),
    eX = n(407511),
    eY = n(144273);
function eW(e) {
    let { type: t } = e,
        n = t === m.Yf.REMINDER,
        s = ea.intl.string(n ? ea.t.aUXxzT : ea.t["2pAkDA"]),
        l = (0, ep.lA)("ForLaterIntro"),
        i = n ? eX : eJ;
    return l
        ? (0, a.jsx)("div", {
              className: eV.kL,
              children: (0, a.jsxs)("div", {
                  className: eV.vW,
                  children: [
                      (0, a.jsx)("img", { src: i, className: eV.Tn, alt: s }),
                      (0, a.jsx)(I.D, {
                          className: eV.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(n ? ea.t["5Iw19e"] : ea.t["93WOd1"]),
                      }),
                      (0, a.jsx)("div", {
                          className: eV.rf,
                          children: (0, a.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.format(n ? ea.t["E+qms7"] : ea.t.legvTg, {
                                  itemName: ea.intl.string(n ? ea.t.mJ3P0N : ea.t.tpxJto),
                              }),
                          }),
                      }),
                      (0, a.jsx)(eZ, { isReminder: n }),
                  ],
              }),
          })
        : (0, a.jsx)("div", {
              className: eV.kL,
              children: (0, a.jsxs)("div", {
                  className: eV.vW,
                  children: [
                      (0, a.jsx)("img", { src: i, className: eV.Tn, alt: s }),
                      (0, a.jsx)(I.D, {
                          className: eV.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(ea.t.w4DRbZ),
                      }),
                      (0, a.jsx)("div", {
                          className: eV.rf,
                          children: (0, a.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.string(ea.t.F6u3E3),
                          }),
                      }),
                      (0, a.jsx)(eB, { isReminder: n }),
                  ],
              }),
          });
}
function eZ(e) {
    let { isReminder: t } = e,
        n = i.useMemo(() => {
            let e = new eT.A({ id: "313338", username: ea.intl.string(ea.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eR.insertStaticUser(e);
            return (
                null != t && (t.getAvatarURL = () => eY.A),
                [ea.intl.string(ea.t["h+KPxy"]), ea.intl.string(ea.t["63EVpI"]), ea.intl.string(ea.t["KT/TDX"])].map(
                    (n, s) => {
                        let l = (0, eb.rh)({
                            ...(0, e_.Ay)({ channelId: "1338", content: n }),
                            state: eH.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return ((l.author = t ?? e), l);
                    },
                )
            );
        }, []);
    return (0, a.jsx)("div", {
        className: eV.qJ,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: eV.DZ,
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
                                      className: eV.MK,
                                      children: [
                                          (0, a.jsx)(e$, {
                                              icon: eM.BookmarkIcon,
                                              label: ea.intl.string(ea.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, a.jsx)(e$, {
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
function e$(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(eV.KT, { [eV.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function eq(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, ey.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ey.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, a.jsx)(em, { type: l ? "error" : "normal", text: s });
}
var eQ = n(294002),
    e0 = n(414676);
let e1 = "ForLaterPopout",
    e3 = "Bookmarks",
    e2 = "Reminders";
function e8(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yf.ALL,
                [t, n] = i.useState(() => eS(e)),
                s = i.useRef(ev.A.getIsStale());
            return (
                i.useEffect(() => {
                    let t = ev.A.getLastChanged();
                    function l() {
                        let l = ev.A.getLastChanged();
                        if (t !== l) {
                            if (((t = l), s.current && !ev.A.getIsStale())) {
                                ((s.current = !1), n(eS(e)));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eE(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        ev.A.addChangeListener(l),
                        () => {
                            ev.A.removeChangeListener(l);
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    (0, eC.AX)();
                }, []),
                (0, j.yK)([ev.A], () => t.map((e) => ev.A.getSavedMessage(e.channelId, e.messageId)).filter(eI.Vq))
            );
        })(n),
        l = n === m.Yf.REMINDER,
        r = (0, ep.oG)(e1, l),
        d = (0, ep.dR)(e1),
        c = d && r > 0 && s.length >= r,
        o = d && s.length > 0,
        { analyticsLocations: u } = (0, k.Ay)(D.A.FOR_LATER_POPOUT);
    (0, O.A)(
        {
            type: A.ImpressionTypes.POPOUT,
            name: A.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                tab_type: n,
                total_count: s.length,
                overdue_count: ev.A.getOverdueMessageReminderCount(),
                nitro_upsell_bar_shown: o && !c,
                nitro_roadblock_upsell_bar_shown: o && c,
            },
        },
        {},
        [s.length, o, c],
    );
    let h = i.useRef(null),
        g = (0, T.A)("for-later", h);
    ((0, eg.xN)(h), (0, eg.yW)(n === m.Yf.BOOKMARK ? e3 : e2));
    let [x, p] = i.useState(new Date());
    return (i.useEffect(() => {
        let e = setInterval(() => p(new Date()), ej.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, a.jsx)(k.f5, { value: u, children: (0, a.jsx)(eW, { type: n }) })
        : (0, a.jsx)(k.f5, {
              value: u,
              children: (0, a.jsxs)("div", {
                  className: eQ.MY,
                  children: [
                      (0, a.jsx)(f.hD, {
                          navigator: g,
                          children: (0, a.jsx)(f.PR, {
                              children: (e) => {
                                  let { ref: n, ...l } = e;
                                  return (0, a.jsx)(N.Ch, {
                                      ref: (e) => {
                                          ((h.current = e), (n.current = e?.getScrollerNode() ?? null));
                                      },
                                      className: e0.XG,
                                      ...l,
                                      children: s.map((e) =>
                                          (0, a.jsx)(
                                              e7,
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
                                className: eQ.fH,
                                children: (0, a.jsx)(eB, { isReminder: l, limit: r, isAtLimit: c }),
                            })
                          : null,
                  ],
              }),
          });
}
function e7(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, ey.vr)(t),
        r = i.useCallback(
            async (e) => {
                (await (0, ey.le)(t, l),
                    e.shiftKey || n(),
                    L.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? e2 : e3));
            },
            [n, t, l],
        ),
        c = (0, j.bG)(
            [ef.A],
            () => !!(l?.type === eH.rbe.UNKNOWN || l?.isPrivate()) || ef.A.can(eH.xBc.VIEW_CHANNEL, l),
        );
    return null != l && null != t.message && c
        ? (0, a.jsxs)("div", {
              className: e0.aP,
              children: [
                  (0, a.jsx)(ed, {
                      itemId: `header-${t.message.id}`,
                      channel: l,
                      onClick: (e) => {
                          (r(e), n());
                      },
                      collapsed: !1,
                      status: null != t.saveData.dueAt ? (0, a.jsx)(eq, { reminder: t, throttledNow: s }) : null,
                      children: (0, a.jsx)(C.e, {
                          size: "sm",
                          className: ei.GC,
                          children: (0, a.jsx)(e6, { savedMessage: t, jumpToMessage: r, throttledNow: s }),
                      }),
                  }),
                  (0, a.jsx)(
                      ex.A,
                      {
                          message: t.message,
                          channel: l,
                          className: e0.YD,
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
              className: d()(e0.aP, eQ.tq),
              children: [
                  (0, a.jsxs)("div", {
                      className: eQ.kb,
                      children: [
                          (0, a.jsx)("div", {
                              className: eQ.Bx,
                              children: (0, a.jsx)(y.E, { size: "xxs", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, a.jsx)(I.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ea.intl.string(ea.t["wuQm+j"])
                                      : ea.intl.string(ea.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, a.jsx)(C.e, {
                      size: "sm",
                      className: ei.GC,
                      children: (0, a.jsx)(p.m, {
                          text: ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, a.jsx)(E.K, {
                              variant: "secondary",
                              "aria-label": ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                              size: "sm",
                              icon: S.P,
                              onClick: () => (0, eN.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function e6(e) {
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
                      children: (0, a.jsx)(E.K, {
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
                children: (0, a.jsx)(E.K, {
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
                children: (0, a.jsx)(E.K, {
                    variant: "secondary",
                    "aria-label": i,
                    size: "sm",
                    icon: S.P,
                    onClick: () => (0, eN.x)(t.saveData),
                }),
            }),
        ],
    });
}
var e4 = n(702841),
    e5 = n(912592),
    e9 = n(890856),
    te = n(761508),
    tt = n(566908),
    tn = n(214947),
    ts = n(711950),
    tl = n(322387),
    ta = n(912309),
    ti = n(174459),
    tr = n(198476);
function td(e) {
    let { closePopout: t } = e,
        n = (0, ta.kX)();
    return (0, a.jsx)(p.m, {
        asContainer: !0,
        text: ea.intl.string(ea.t["lMR96+"]),
        children: (0, a.jsxs)(P.D, {
            "aria-label": `${ea.intl.string(ea.t["lMR96+"])}, ${n}`,
            className: tr.b,
            onClick: () => {
                (ti.default.track(eH.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: tl.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    ts.A.transitionToSection(eH.m3P.PENDING, { explicit: !0 }),
                    t());
            },
            children: [
                (0, a.jsx)(tn.$, { size: "xs", color: "currentColor" }),
                n > 0 && (0, a.jsx)(K.hV, { count: n, color: v.A.colors.BACKGROUND_MOD_STRONG.css, className: tr.D }),
            ],
        }),
    });
}
var tc = n(980707),
    to = n(477782),
    tu = n(922016),
    th = n(783977),
    tm = n(378939),
    tg = n(309010),
    tx = n(409686);
function tA(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, j.bG)([Q.A, tg.Ay], () => Q.A.getChannel(tg.Ay.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: i,
            guildFilter: r,
        } = (0, j.cf)([tx.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tx.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, a.jsxs)(tc.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ea.intl.string(ea.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, a.jsx)(to.sL, {
                id: "Everyone",
                label: ea.intl.string(ea.t.cdyUsV),
                action: function () {
                    tm.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, a.jsx)(to.sL, {
                id: "Roles",
                label: ea.intl.string(ea.t.lZejCq),
                action: function () {
                    tm.A.setGuildFilter({ roleFilter: !i });
                },
                checked: i,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, a.jsx)(to.sL, {
                      id: "All Servers",
                      label: ea.intl.string(ea.t.GWMA6s),
                      action: function () {
                          tm.A.setGuildFilter({
                              guildFilter: r === eH.KE7.THIS_SERVER ? eH.KE7.ALL_SERVERS : eH.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eH.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tf() {
    let e = i.useRef(null);
    return (0, a.jsx)(tu.Y, {
        targetElementRef: e,
        align: "right",
        animation: tu.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tA, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.pEasFX),
                targetElementRef: e,
                children: (0, a.jsx)(E.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t.pEasFX),
                    icon: th.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tj = n(481613),
    tp = n.n(tj),
    tN = n(621466),
    ty = n(289873),
    tv = n(821609),
    tI = n(228366),
    tC = n(964486),
    tE = n(775602),
    tS = n(625494),
    tM = n(723702),
    tR = n(303727),
    tb = n(435842);
function t_(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, a.jsxs)("div", {
        className: tb.kL,
        children: [
            (0, a.jsxs)("div", {
                className: tb.zc,
                children: [
                    (0, a.jsx)(t, { color: "currentColor", size: "custom", className: tb.Kk, width: 36, height: 36 }),
                    l ? null : (0, a.jsx)(tR.A, { className: tb.uf }),
                ],
            }),
            (0, a.jsx)(I.D, { className: tb.wx, variant: "heading-xl/semibold", children: n }),
            (0, a.jsxs)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, a.jsxs)(z.E, {
                              tag: "span",
                              className: tb.PP,
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
var tL = n(862482),
    tT = n(143838),
    tD = n(640238);
function tk(e) {
    let { onClick: t } = e,
        [n, s] = i.useState(!1);
    function l() {
        (t(),
            ti.default.track(eH.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            }));
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            n ? (0, a.jsx)(tO, { confirm: l, cancel: () => s(!1) }) : null,
            (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t["8k+6QY"]),
                children: (0, a.jsx)(E.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                    size: "sm",
                    icon: tT.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tO(e) {
    let { cancel: t, confirm: n } = e;
    return (0, a.jsx)(tD.M, {
        dismissable: !0,
        header: ea.intl.string(ea.t.h4bVZ2),
        confirmText: ea.intl.string(ea.t.e6RscS),
        cancelText: ea.intl.string(ea.t["ETE/oC"]),
        confirmButtonColor: tL.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, a.jsx)(z.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["0MQ0Bf"]),
        }),
    });
}
var tG = n(435558),
    tP = n.n(tG),
    tF = n(749314),
    tw = n(479669),
    tU = n(717421),
    tK = n(334738),
    tz = n(95561),
    tH = n(976860),
    tB = n(847374),
    tV = n(907847);
function tJ(e) {
    let { collapsed: t, onClick: n } = e,
        s = ea.intl.string(t ? ea.t.dcl9MQ : ea.t.iTcuma);
    return (0, a.jsx)(p.m, {
        text: s,
        ariaHidden: !0,
        children: (0, a.jsx)(P.D, {
            className: tV.x6,
            "aria-label": s,
            onClick: n,
            children: (0, a.jsx)(tB.a, { className: d()(tV.ai, { [tV.yZ]: t }), size: "xs" }),
        }),
    });
}
var tX = n(585517);
let tY = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tW = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tZ(e) {
    let { collapsed: t, children: n } = e,
        s = i.useRef(null),
        [l, r] = (0, tU.z)(() => (t ? tY : tW), "respect-motion-settings", []),
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
                          immediate: tE.Ay.useReducedMotion,
                      })
                    : r({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tE.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && r({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, r]),
        (0, a.jsx)(tw.animated.div, {
            className: tX.r,
            style: l,
            children: (0, a.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var t$ = n(311283),
    tq = n(933832);
function tQ(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        i = (0, t$.A)() && null != t.guildId;
    return (0, a.jsx)(p.m, {
        text: i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
        ariaHidden: !0,
        children: (0, a.jsx)(E.K, {
            variant: "secondary",
            "aria-label": i ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
            size: "sm",
            icon: i ? tT.i : tq.CheckmarkLargeIcon,
            onClick: function () {
                (i && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tz.zV)(eH.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    }));
            },
        }),
    });
}
var t0 = n(782603),
    t1 = n(461678),
    t3 = n(914703);
function t2(e) {
    let { channel: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tu.Y, {
        targetElementRef: n,
        align: "right",
        animation: tu.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, a.jsx)(t3.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                  })
                : (0, a.jsx)(t1.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                      location: { section: eH.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, a.jsx)(p.m, {
                text: ea.intl.string(ea.t.h850Ss),
                targetElementRef: n,
                children: (0, a.jsx)(E.K, {
                    "aria-label": ea.intl.string(ea.t.h850Ss),
                    icon: t0.BellIcon,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var t8 = n(350527),
    t7 = n(218152),
    t6 = n(970278),
    t4 = n(747926),
    t5 = n(935208),
    t9 = n(37411),
    ne = n(278489);
function nt(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, j.yK)(
            [t6.A, Q.A],
            () =>
                tP()(t6.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return t5.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return Q.A.getChannel(t);
                    })
                    .filter(eI.Vq)
                    .sort((e, t) => t5.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        r = i.useCallback((e, t) => {
            (0, t4.JA)(e, t, t9.H9.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                tI.h.wait(() => {
                    ((0, tK.ack)(
                        t.channelId,
                        {
                            section: eH.JJy.INBOX,
                            object: eH.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eH.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId));
                });
        }),
        (0, a.jsx)("div", {
            className: ne.k,
            children: l.map((e) =>
                (0, a.jsx)(
                    t7.Cp,
                    { channel: n, children: (0, a.jsx)(t8.Ay, { className: ne.u, threadId: e.id, goToThread: r }) },
                    e.id,
                ),
            ),
        })
    );
}
var nn = n(536637),
    ns = n.n(nn),
    nl = n(123292),
    na = n(857069),
    ni = n(33358),
    nr = n(384231),
    nd = n(207133),
    nc = n(704413),
    no = n(9842),
    nu = n(994500),
    nh = n(5095),
    nm = n(143413),
    ng = n(763754),
    nx = n(467073),
    nA = n(491182),
    nf = n(860227),
    nj = n(279306),
    np = n(837528),
    nN = n(754459),
    ny = n(432433),
    nv = n(824556),
    nI = n(715628),
    nC = n(752636),
    nE = n(352043),
    nS = n(268719),
    nM = n(234957),
    nR = n(888675),
    nb = n(381941),
    n_ = n(845806),
    nL = n(13673);
let nT = i.memo(function e(t) {
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
        m = eH.sl8.has(l.type) ? l.messageReference : void 0,
        g = (0, j.bG)([no.A], () => no.A.getMessageByReference(m)),
        x = (0, j.bG)([Q.A], () =>
            l.type === eH.lAJ.THREAD_STARTER_MESSAGE && g.state === no.a.LOADED
                ? Q.A.getChannel(g.message.channel_id)
                : null,
        ),
        A = eA.X6.useSetting(),
        f = eA.hD.useSetting(),
        p = eA.rs.useSetting(),
        N = eA.kt.useSetting(),
        y = (0, nr.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        v = (0, nd.A)(s?.id),
        { disableReactionCreates: I } = (0, nx.A)(s),
        { setPopout: C } = (0, nN.A)(l.id, nb.Fd),
        E = (0, np.VL)(l, s, C, v),
        {
            content: S,
            hasSpoilerEmbeds: M,
            hasBailedAst: R,
        } = (0, ny.A)(l, {
            hideSimpleEmbedContent: f && p,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        b = (0, ng.Ay)(l),
        _ = (0, j.bG)(
            [Q.A],
            () => l.hasFlag(eH.pr7.HAS_THREAD) && Q.A.getChannel(t5.default.castMessageIdAsChannelId(l.id)),
        ),
        L = l.type === eH.lAJ.THREAD_STARTER_MESSAGE && g.state === no.a.LOADED && null != x,
        T = !L && void 0 === n,
        D = (0, nv.A)({ message: l, channel: s, announcementEnabled: T }),
        k = (0, ni.P)(l),
        O = (0, nh._f)(l.id, l.channel_id),
        G = (0, nc.A)(l),
        P = (0, nf.fF)(l);
    return L
        ? (0, a.jsx)(e, { ...t, message: g.message, channel: x, hasThread: !1 })
        : (nu.A.isBlockedForMessage(l) ? (n = ea.t["+FcYM/"]) : nu.A.isIgnoredForMessage(l) && (n = ea.t["VFWjc+"]),
            void 0 !== n)
          ? (0, a.jsx)(nD, { className: r, compact: i, count: 1, collapsedReason: n })
          : (0, a.jsx)(nA.A, {
                compact: i,
                className: d()(r, { [nL.M1]: (0, eb.ec)(l), [nL.XN]: u, [nL._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nM.A)(l, s, m, g, i),
                childrenHeader: (0, nC.A)({ ...t, author: b, guildId: s.guild_id }),
                childrenAccessories: (0, a.jsx)(nj.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: M,
                    hasBailedAst: R,
                    compact: i,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: I,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: A,
                    inlineEmbedMedia: f,
                    renderEmbeds: p,
                    gifAutoPlay: N,
                    poll: G,
                    showListsAndHeaders: y,
                    showMaskedLinks: y,
                    shouldHideMediaOptions: v,
                    enabledContentHarmTypeFlags: k,
                    ctaButtonType: O,
                    onMediaItemContextMenu: E,
                }),
                childrenExecutedCommand: (0, nS.A)(l, s, i),
                childrenMessageContent: (0, nI.A)(t, S),
                childrenSystemMessage: (0, nE.A)(t),
                onContextMenu: c,
                onClick: o,
                hasThread: !1 !== h && null != _ && l.hasFlag(eH.pr7.HAS_THREAD),
                hasReply: l.type === eH.lAJ.REPLY,
                isSystemMessage: (0, nm.A)(l),
                messageRef: D,
                author: b,
                "aria-labelledby": P,
                "aria-roledescription": ea.intl.string(ea.t.BAB0yK),
            });
});
function nD(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, a.jsx)(nA.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, a.jsx)(nR.A, {
            compact: s,
            className: n_.L9,
            iconNode: (0, a.jsx)(S.P, { size: "md", color: "currentColor", className: n_.Q6 }),
            children: (0, a.jsx)("div", { className: n_.Fo, children: ea.intl.format(l, { count: n }) }),
        }),
    });
}
var nk = n(58703),
    nO = n(222831);
function nG(e) {
    let { className: t, onJump: n } = e,
        [s, l] = i.useState(!1);
    return (0, a.jsx)(P.D, {
        className: d()(nO.n, t),
        onClick: function (e) {
            (l(!0), n(e));
        },
        children: s
            ? (0, a.jsx)(ty.y, { type: ty.y.Type.PULSING_ELLIPSIS })
            : (0, a.jsx)(z.E, { variant: "text-xs/medium", className: nO.Q, children: ea.intl.string(ea.t.k5WiPf) }),
    });
}
var nP = n(143236),
    nF = n(323073),
    nw = n(181079),
    nU = n(567035),
    nK = n(679164),
    nz = n(455234),
    nH = n(863005),
    nB = n(152007),
    nV = n(607508),
    nJ = n(594061),
    nX = n(617617),
    nY = n(95701),
    nW = n(808728),
    nZ = n(232835),
    n$ = n(711014),
    nq = n(543465),
    nQ = n(790782),
    n0 =
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
    n1 = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
let n3 = "1539033557786173450";
class n2 extends nP.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        (super(), (this.state = e), (this.scrollerRef = t));
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
                let t = n8(e, !1);
                if (t.messages.some(nK.$r)) return (L.A.clearChannel(e.channelId), { ...e, messages: [] });
                return t;
            }
            case "nsfw":
            case "guild-events":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t6.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, eI.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? n8(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tI.h.wait(() => {
            "guild-events" === e.type
                ? tK.hK(e.guildId, nQ.P.GUILD_EVENT, n)
                : tK.ack(
                      t,
                      {
                          section: eH.JJy.INBOX,
                          object: eH.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                          objectType: eH.AnalyticsObjectTypes.ACK_AUTOMATIC,
                      },
                      !0,
                      void 0,
                      n,
                  );
        });
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              tE.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        "guild-events" === e.type
            ? tK.hK(e.guildId, nQ.P.GUILD_EVENT, e.oldestReadMessageId)
            : tK.ack(
                  e.channelId,
                  {
                      section: eH.JJy.INBOX,
                      object: eH.ZSU.UNDO_MARK_AS_READ,
                      objectType: eH.AnalyticsObjectTypes.ACK_MANUAL,
                  },
                  !0,
                  void 0,
                  e.oldestReadMessageId,
              );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        (t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n }));
    };
    markGuildRead = (e) => {
        (tI.h.wait(() => (0, nU.A)([e], eH.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore());
    };
    deleteChannel = (e) => {
        (this.setState({
            scrollToChannelIndex: tP().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore());
    };
    markAllRead = () => {
        (tK.Uq(
            this.state.channels.map((e) => ({
                channelId: e.channelId,
                messageId: e.newestUnreadMessageId,
                readStateType: "guild-events" === e.type ? nQ.P.GUILD_EVENT : nQ.P.CHANNEL,
            })),
        ),
            this.setState({ channels: [] }));
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = tP().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        ((l[t] = d),
            (0, nJ.ji)(
                n,
                "guild-events" === r.type ? n3 : t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nJ.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: l,
                loadState: "done" !== a || d || r.isFullyLoaded ? a : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore());
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) =>
            "guild-events" === e.type ? !n6(e.guildId) : !nq.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId),
        );
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nB.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t6.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        L.A.clearChannel(e.channelId);
        let t = L.A.fetchMessages({
            channelId: e.channelId,
            limit: eH.EMb,
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
                            let n = n8(e, !0);
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
                                    ...n8(e, !0),
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
                ((this.state = { ...this.state, ...e }), this.emit("change", this.state));
                return;
            }
    }
}
function n8(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nZ.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    t5.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= t5.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = t5.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function n7() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nX.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    if (s === n3) {
                        e[t5.default.cast(n)] = t[n].channels[s].collapsedInInbox;
                        continue;
                    }
                    let l = Q.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            Q.A.getSortedPrivateChannels().forEach((n) => n4(e, t, null, n.id)),
            n$.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nW.Ay.getSelectableChannelIds(n),
                    l = nH.A.getActiveJoinedUnreadThreadsForGuild(n);
                (s.forEach((s) => {
                    n4(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) n4(e, t, n, s);
                }),
                    (function (e, t, n) {
                        if (n6(n) || !en.Ay.hasUnreadOrMentions(n, nQ.P.GUILD_EVENT)) return;
                        let s = en.Ay.lastMessageId(n, nQ.P.GUILD_EVENT);
                        if (null == s) return;
                        let l = t5.default.cast(n),
                            a = en.Ay.ackMessageId(n, nQ.P.GUILD_EVENT);
                        if (null == a) {
                            let e = ee.A.getGuild(n);
                            if (e?.joinedAt == null) return;
                            a = t5.default.fromTimestamp(e.joinedAt.getTime());
                        }
                        t5.default.compare(a, s) >= 0 ||
                            t.push({
                                type: "guild-events",
                                guildId: n,
                                channelId: l,
                                oldestReadMessageId: a,
                                oldestUnreadMessageId: null,
                                newestUnreadMessageId: s,
                                collapsed: !0 === e[l],
                                hasLoadedAnything: !1,
                                hasLoadedFirst: !1,
                                isFullyLoaded: !1,
                                hasError: !1,
                                hasMentionsOrUnreads: !0,
                                mentionCount: en.Ay.getMentionCount(n, nQ.P.GUILD_EVENT),
                                sortOrder: 5,
                                order: 0,
                            });
                    })(e, t, n));
            }),
            tP().sortBy(t, (e) => e.sortOrder)),
        l = tP()
            .uniq(s.map((e) => e.guildId))
            .filter(eI.Vq);
    return (
        tI.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function n6(e) {
    return nq.Ay.isMuted(e) || nq.Ay.isMuteScheduledEventsEnabled(e);
}
function n4(e, t, n, s) {
    if (null == s) return;
    let l = Q.A.getChannel(s);
    if (null == l || (!nY.Le.has(l.type) && nq.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === en.Ay.getMentionCount(s)) return;
    } else if (!(0, nz.Y)(l) && 0 === en.Ay.getMentionCount(s)) return;
    if (!l.isPrivate() && !ef.A.can(eH.xBc.READ_MESSAGE_HISTORY, l)) return;
    let a = en.Ay.ackMessageId(s);
    if (null == a) {
        let e = ee.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = t5.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = en.Ay.getOldestUnreadMessageId(s),
        r = en.Ay.lastMessageId(s),
        d = en.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || t5.default.compare(a, r) >= 0) return;
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
            if (nw.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (en.Ay.getMentionCount(t) > 0) return en.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t5.default.extractTimestamp(n);
                if (Date.now() - e > n9) return 8;
                if (Date.now() - e > n5) return 6;
            }
            if (s.isThread()) {
                let e = (0, nV.l)(s);
                return e === t9.CP.ALL_MESSAGES ? 4 : e === t9.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nq.Ay.getChannelMessageNotifications(e, t),
                    s = n === eH.orn.NULL ? nq.Ay.getMessageNotifications(e) : n;
                return s === eH.orn.ALL_MESSAGES ? 4 : s === eH.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nF.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let n5 = 2 * ej.A.Millis.DAY,
    n9 = 10 * ej.A.Millis.DAY;
var se = n(743373);
let st = { left: 4, right: -12 },
    sn = [eH.lAJ.THREAD_CREATED];
function ss(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: r } = e,
        d = (0, f.rm)(n.id ?? ""),
        c = i.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    (e.preventDefault(), r(e, n.id));
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, r, n.id],
        ),
        o = sn.includes(n.type);
    return (0, a.jsx)(G.vN, {
        offset: st,
        children: (0, a.jsxs)("div", {
            className: se.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, a.jsx)(nG, { className: se.nn, onJump: (e) => r(e, n.id) }),
                (0, a.jsx)(nT, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: se.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function sl(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = eA.hH.useSetting(),
        i = 0 === t.messages.length || ns()(t.messages[0].timestamp).isSame(ns()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!i && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nk.i$)(e.timestamp, "LL");
            (r.push((0, a.jsx)(tF.A, { className: se.yF, children: t }, t)), (d = ns()(e.timestamp)));
        }
        let t = null == c || (0, na.A)(n, c, e);
        ((c = e),
            r.push((0, a.jsx)(ss, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id)));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t5.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, a.jsx)(
                    "div",
                    {
                        className: se.Gr,
                        children: (0, a.jsx)(nl.Q, {
                            variant: "primary",
                            text: `${ea.intl.string(ea.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, a.jsx)(ty.y, {}, "spinner")]),
        (0, a.jsx)("div", { className: se.DZ, children: r })
    );
}
var sa = n(81466),
    si = n(508654),
    sr = n(29414);
let sd = { top: 8, bottom: 8, left: -4, right: -4 };
function sc(e) {
    let {
            guild: t,
            name: n,
            Icon: s,
            children: l,
            onClick: i,
            collapsed: r = !1,
            mentionCount: c,
            onToggleCollapse: o,
            itemId: u,
        } = e,
        h = (0, f.rm)(u);
    return (0, a.jsx)("div", {
        className: ei.N1,
        children: (0, a.jsx)(G.vN, {
            offset: sd,
            children: (0, a.jsxs)("div", {
                className: d()(ei.ZO, { [ei.yZ]: r }),
                ...h,
                onKeyDown: function (e) {
                    if ((e.key === el.dh.ENTER || e.key === el.dh.SPACE) && e.target === e.currentTarget) {
                        (e.preventDefault(), i(e));
                        return;
                    }
                    null != o && ((e.key === el.dh.ARROW_RIGHT && r) || (e.key === el.dh.ARROW_LEFT && !r)) && o();
                },
                children: [
                    (0, a.jsx)(P.D, {
                        className: ei.YT,
                        onClick: i,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        children: (0, a.jsx)($.Ay, {
                            className: ei.Kk,
                            guild: t,
                            size: $.Ay.Sizes.SMALL,
                            showTooltip: !0,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, a.jsx)(F._, { className: ei.ai, size: "xxs" }),
                    (0, a.jsxs)("div", {
                        className: ei.yP,
                        children: [
                            (0, a.jsx)(I.D, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: ei.lz,
                                children: (0, a.jsxs)(P.D, {
                                    className: ei.Ru,
                                    onClick: i,
                                    children: [
                                        (0, a.jsx)(s, { className: ei.j1, size: "xxs" }),
                                        (0, a.jsx)("span", { className: ei.je, children: n }),
                                        null != c && c > 0
                                            ? (0, a.jsx)("div", {
                                                  className: ei.qS,
                                                  children: (0, a.jsx)(K.hV, {
                                                      count: c,
                                                      color: v.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, a.jsx)(z.E, {
                                color: "text-default",
                                variant: "text-xs/normal",
                                children: (0, a.jsx)(P.D, {
                                    className: d()(ei.je, ei.J5),
                                    onClick: i,
                                    children: t.name,
                                }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        }),
    });
}
var so = n(82732);
function su(e) {
    let { channel: t, deleteChannel: s, toggle: l, onJump: r, getNumUnreadChannels: d } = e,
        { guildId: c } = t,
        o = (0, j.bG)([ee.A], () => ee.A.getGuild(c), [c]),
        u = (0, si.Ay)(c),
        m = i.useMemo(
            () =>
                u
                    .filter(
                        (e) =>
                            t5.default.compare(e.id, t.oldestReadMessageId) > 0 &&
                            0 >= t5.default.compare(e.id, t.newestUnreadMessageId),
                    )
                    .sort((e, t) => t5.default.compare(e.id, t.id)),
            [u, t.oldestReadMessageId, t.newestUnreadMessageId],
        );
    if (
        (i.useEffect(() => {
            null == o ||
                t.collapsed ||
                0 !== m.length ||
                ((0, tK.hK)(c, nQ.P.GUILD_EVENT, t.newestUnreadMessageId), s(t.channelId));
        }),
        null == o)
    )
        return null;
    function g() {
        (l(t),
            (0, tz.zV)(eH.HAw.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: c,
                num_unread_channels_remaining: d() ?? 0,
                is_now_collapsed: !t.collapsed,
            }));
    }
    return (0, a.jsx)("div", {
        className: e0.aP,
        children: (0, a.jsx)(h.F, {
            component: (0, a.jsxs)(sc, {
                guild: o,
                name: ea.intl.string(ea.t.tlopTM),
                Icon: sa.CalendarIcon,
                onClick: function (e) {
                    ((0, eD.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("947359"),
                            n.e("694303"),
                            n.e("256373"),
                            n.e("752695"),
                            n.e("464287"),
                            n.e("853934"),
                            n.e("188353"),
                        ]).then(n.bind(n, 318104));
                        return (t) => (0, a.jsx)(e, { ...t, guildId: c });
                    }),
                        r(e));
                },
                collapsed: t.collapsed,
                mentionCount: t.mentionCount,
                onToggleCollapse: g,
                itemId: `header-events-${c}`,
                children: [
                    (0, a.jsx)(C.e, { size: "sm", className: ei.GC, children: (0, a.jsx)(tQ, { ...e }) }),
                    (0, a.jsx)(tJ, { collapsed: t.collapsed, onClick: g }),
                ],
            }),
            children: (0, a.jsx)(tZ, {
                collapsed: t.collapsed,
                children: (0, a.jsx)("div", {
                    className: so.k,
                    children: m.map((e) => (0, a.jsx)(sr.A, { className: so.f, guildEvent: e, truncate: !0 }, e.id)),
                }),
            }),
        }),
    });
}
let sh = i.memo(function (e) {
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
        let { opacity: o, size: u } = (0, tU.z)(
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
        return (0, a.jsx)(tw.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, a.jsx)(sm, { ...e }),
        });
    }),
    sm = i.memo(function (e) {
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
                    tI.h.wait(() => {
                        ((0, tK.ack)(
                            t.channelId,
                            {
                                section: eH.JJy.INBOX,
                                object: eH.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eH.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId));
                    });
            }),
            !t.hasLoadedAnything)
        )
            return null;
        if ("guild-events" === t.type) return (0, a.jsx)(su, { ...e, channel: t });
        if (null == r) return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eg.n4)(t.channelId, t.guildId, sA, () => n(e));
            else {
                let l = s ?? t.oldestUnreadMessageId;
                (L.A.trackJump(t.channelId, l, sA), (0, tH.pX)(eH.BVt.CHANNEL(t.guildId, t.channelId, l)), n(e));
            }
        }
        function c() {
            (l(t),
                (0, tz.zV)(eH.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                }));
        }
        return (0, a.jsx)("div", {
            className: e0.aP,
            children: (0, a.jsx)(h.F, {
                component: (0, a.jsxs)(ed, {
                    channel: r,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${r.id}`,
                    children: [
                        (0, a.jsxs)(C.e, {
                            size: "sm",
                            className: ei.GC,
                            children: [(0, a.jsx)(t2, { channel: r }), (0, a.jsx)(tQ, { ...e })],
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
                            ? (0, a.jsx)(sl, { channel: t, channelRecord: r, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, a.jsx)(nt, { channel: t, channelRecord: r, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
var sg = n(171664),
    sx = n(173615);
let sA = "Inbox";
function sf(e) {
    var t, n, s, l, r, c;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = i.useRef(null),
        x = (0, T.A)("unreads", g);
    ((0, eg.xN)(g), (0, eg.yW)(sA));
    let [A, p] = (function (e) {
            let [t, n] = i.useState(() => new n2(n7(), e)),
                [s, l] = i.useState(!1),
                a = i.useRef(Date.now()),
                [r, d] = i.useState(() => n7());
            (i.useEffect(() => {
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
                        i = n7();
                    0 === i.channels.length || t - a.current < 10 * ej.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new n2(i, e)));
                }, [r, s, e]));
            let c = i.useRef(t);
            return (
                i.useLayoutEffect(() => {
                    c.current = t;
                }),
                i.useLayoutEffect(() => {
                    (r?.channels, r?.loadState, c.current.maybeLoadMore());
                }, [r?.channels, r?.loadState]),
                i.useEffect(
                    () => (nZ.A.addChangeListener(t.reloadMessages), () => nZ.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                i.useEffect(
                    () => (
                        nq.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nq.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        nB.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nB.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                i.useEffect(
                    () => (
                        t6.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t6.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [r, t]
            );
        })(g),
        { loadState: y, channels: v } = A,
        { maybeLoadMore: I } = p,
        C = (0, j.bG)([tE.Ay], () => tE.Ay.messageGroupSpacing);
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
            tS._.subscribe(eH.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tS._.unsubscribe(eH.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [r, l.channels]),
    (c = p),
    i.useEffect(() => {
        function e(e) {
            if ((0, eD.hasAnyModalOpen)()) return;
            let t = (0, tN.BF)(e)?.activeElement;
            (0, tN.Cw)(t) ||
                (((0, tM.isMac)() || (0, tM.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            tI.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tI.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, tC.Ay)(
        () => (
            tS._.subscribe(eH.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
            () => {
                tS._.unsubscribe(eH.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
            }
        ),
    ),
    0 === v.length)
        ? (0, a.jsx)(t_, {
              Icon: e5.InboxIcon,
              header: ea.intl.string(ea.t["6XMM+D"]),
              tip: tp().os?.family === "OS X" ? ea.intl.string(ea.t.w9uDOW) : ea.intl.string(ea.t.BiUJC6),
          })
        : (0, a.jsx)(f.hD, {
              navigator: x,
              children: (0, a.jsx)(f.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, a.jsxs)(N.Ch, {
                          ref: (e) => {
                              ((g.current = e), (t.current = e?.getScrollerNode() ?? null));
                          },
                          ...n,
                          onScroll: y === n1.Done ? void 0 : I,
                          className: d()(e0.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, a.jsx)(sj, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: i,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tP().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === n0.ReallyOldChannel
                                                  ? o.push(
                                                        (0, a.jsx)(
                                                            tF.A,
                                                            {
                                                                className: sg.y,
                                                                contentClassName: sg.$,
                                                                children: ea.intl.string(ea.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === n0.NoNotifications &&
                                                    o.push(
                                                        (0, a.jsx)(
                                                            tF.A,
                                                            {
                                                                className: sg.y,
                                                                contentClassName: sg.$,
                                                                children: ea.intl.string(ea.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, a.jsx)(
                                                  sh,
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
                              })(v, p, o),
                              y === n1.Done ? null : (0, a.jsx)(ty.y, { className: sx.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sj(e) {
    let { setSeenTutorial: t } = e;
    return (0, a.jsxs)("div", {
        className: sx.d$,
        children: [
            (0, a.jsx)("div", {
                className: sx.cm,
                children: (0, a.jsx)(e5.InboxIcon, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(I.D, {
                        className: sx.__invalid_tutorialHeader,
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
                        className: sx.dh,
                        children: (0, a.jsx)(tv.$, {
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
function sp() {
    return (0, a.jsx)(t_, {
        Icon: e5.InboxIcon,
        disableStars: !0,
        header: ea.intl.string(ea.t["KG/ynf"]),
        tip: ea.intl.string(ea.t.cvcKzX),
    });
}
function sN() {
    return (0, a.jsx)(tk, { onClick: () => tS._.dispatch(eH.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sy = n(113164);
function sv(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        l = (0, ep.jv)("RecentsPopout"),
        i = (0, tt.Sc)(),
        r = (0, e4.bG)([ev.A], () => ev.A.getOverdueMessageReminderCount());
    return (0, a.jsxs)("div", {
        className: sy.wx,
        children: [
            (0, a.jsxs)("div", {
                className: sy.qd,
                children: [
                    (0, a.jsx)(e5.InboxIcon, { size: "md", color: "currentColor", className: sy.yH }),
                    (0, a.jsx)(I.D, {
                        className: sy.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ea.intl.string(ea.t.GSmTKJ),
                    }),
                    (0, a.jsxs)(e9.s, {
                        className: sy.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                        children: [(0, a.jsx)(sI, { tab: t }), (0, a.jsx)(td, { closePopout: s })],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: sy.YF,
                children: (0, a.jsxs)(te.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sy.$H,
                    children: [
                        (0, a.jsx)(te.V.Item, {
                            id: o.Y2.UNREADS,
                            "aria-label": ea.intl.string(ea.t.sRUdB8),
                            className: sy.Mf,
                            children: (0, a.jsx)("span", { className: sy.Gn, children: ea.intl.string(ea.t.sRUdB8) }),
                        }),
                        (0, a.jsx)(te.V.Item, {
                            "aria-label": ea.intl.string(ea.t.GRZF96),
                            id: o.Y2.MENTIONS,
                            className: sy.Mf,
                            children: (0, a.jsx)("span", { className: sy.Gn, children: ea.intl.string(ea.t.GRZF96) }),
                        }),
                        l
                            ? (0, a.jsx)(te.V.Item, {
                                  "aria-label": ea.intl.string(ea.t["2pAkDA"]),
                                  id: o.Y2.BOOKMARKS,
                                  className: sy.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: sy.Gn,
                                      children: ea.intl.string(ea.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        l
                            ? (0, a.jsx)(te.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.aUXxzT),
                                  id: o.Y2.REMINDERS,
                                  className: sy.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: sy.Gn,
                                      children:
                                          0 === r
                                              ? ea.intl.string(ea.t.aUXxzT)
                                              : ea.intl.formatToPlainString(ea.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        i
                            ? (0, a.jsx)(te.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.Fn6Odn),
                                  id: o.Y2.SCHEDULED,
                                  className: sy.Mf,
                                  children: (0, a.jsx)("span", {
                                      className: sy.Gn,
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
function sI(e) {
    let { tab: t } = e;
    return t === o.Y2.UNREADS ? (0, a.jsx)(sN, {}) : t === o.Y2.MENTIONS ? (0, a.jsx)(tf, {}) : null;
}
var sC = n(935063),
    sE = n(475743),
    sS = n(517019),
    sM = n(356622);
let sR = { offset: { left: 4, right: -12 } },
    sb = "Recent Mentions";
function s_(e, t) {
    tm.A.fetchRecentMentions({
        before: t,
        limit: eH.Ue3,
        guildId: null != e && tx.Ay.guildFilter !== eH.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tx.Ay.roleFilter,
        everyone: tx.Ay.everyoneFilter,
    });
}
function sL(e) {
    let { onJump: t } = e,
        n = i.useRef(null),
        s = (0, T.A)("recents", n);
    ((0, eg.xN)(n), (0, eg.yW)(sb));
    let l = (0, j.bG)([Q.A, tg.Ay], () => Q.A.getChannel(tg.Ay.getChannelId())),
        {
            messages: r,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, j.cf)([tx.Ay], () => ({
            messages: tx.Ay.getMentions(),
            hasMore: tx.Ay.hasMore,
            loading: tx.Ay.loading,
            guildFilter: tx.Ay.guildFilter,
            roleFilter: tx.Ay.roleFilter,
            everyoneFilter: tx.Ay.everyoneFilter,
        })),
        m = (0, sE.Ay)(o),
        g = (0, sE.Ay)(u),
        x = (0, sE.Ay)(h);
    (i.useEffect(() => {
        tx.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != x && h !== x)) && s_(l)
            : s_(l);
    }, [m, o, g, u, x, h, l]),
        (0, tC.Ay)(() => {
            r?.some(nK.$r) && (tm.A.clearMentions(), s_(l));
        }),
        (0, tC.l0)(() => {
            tm.A.truncateMentions(eH.Ue3);
        }));
    let A = i.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            s_(l, null != r && r.length > 0 ? r[r.length - 1].id : null);
    }, [d, c, l, r]);
    return null == r || (c && 0 === r.length)
        ? (0, a.jsx)("div", { className: e0.Lq, children: (0, a.jsx)(ty.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(t_, { Icon: sC.X, header: ea.intl.string(ea.t.bgDz74), tip: ea.intl.string(ea.t.NS15vk) })
          : (0, a.jsx)(f.hD, {
                navigator: s,
                children: (0, a.jsx)(f.PR, {
                    children: (e) => {
                        let { ref: s, ...i } = e;
                        return (0, a.jsxs)(N.Ch, {
                            ref: (e) => {
                                ((n.current = e), (s.current = e?.getScrollerNode() ?? null));
                            },
                            className: e0.XG,
                            onScroll: d ? A : void 0,
                            ...i,
                            children: [
                                r.map((e) => (0, a.jsx)(sT, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, a.jsx)("div", { className: e0.Lq, children: (0, a.jsx)(ty.y, {}) })
                                    : d
                                      ? (0, a.jsx)("div", {
                                            className: sM.u,
                                            children: (0, a.jsx)(tv.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ea.intl.string(ea.t.XBlaiC),
                                                onClick: () =>
                                                    s_(l, null != r && r.length > 0 ? r[r.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sT(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = Q.A.getChannel(t.channel_id);
    if (null == s || (0, nF.Jm)(s) || (0, nF.$v)(s)) return null;
    let l = sS.A.didAgree(s.getGuildId()),
        i = !!(0, nF.Gc)(s) && !l;
    return (0, a.jsxs)("div", {
        className: e0.aP,
        children: [
            (0, a.jsx)(ed, {
                channel: s,
                onClick: (e) => (0, eg.KW)(t, sb, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, a.jsxs)(C.e, {
                    size: "sm",
                    className: ei.GC,
                    children: [
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, a.jsx)(E.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                                size: "sm",
                                icon: b.t,
                                onClick: (e) => (0, eg.KW)(t, sb, () => n(e)),
                            }),
                        }),
                        (0, a.jsx)(p.m, {
                            text: ea.intl.string(ea.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, a.jsx)(E.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t.e6RscS),
                                size: "sm",
                                icon: tq.CheckmarkLargeIcon,
                                onClick: () => tm.A.deleteRecentMention(t.id),
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
                        className: e0.YD,
                        hideAccessories: i,
                        compact: eA.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: sR,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sD = n(559647),
    sk = n(285796),
    sO = n(588975),
    sG = n(151282),
    sP = n(199160),
    sF = n(81369),
    sw = n(588190),
    sU = n(663341),
    sK = n(626891),
    sz = n(632946);
function sH() {
    return (0, a.jsx)("div", {
        className: sK.kL,
        children: (0, a.jsxs)("div", {
            className: sK.vW,
            children: [
                (0, a.jsx)("img", { src: sz, className: sK.Tn, alt: ea.intl.string(ea.t.SZVs3K) }),
                (0, a.jsx)(I.D, {
                    className: sK.wx,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: ea.intl.string(ea.t["C/j9NE"]),
                }),
                (0, a.jsx)("div", {
                    className: sK.rf,
                    children: (0, a.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: ea.intl.format(ea.t.FAn5lu, {}),
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: sK.qJ,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: sK.MK,
                            children: [
                                (0, a.jsx)(sB, { icon: sF.H, label: ea.intl.string(ea.t["d3+iYs"]), highlighted: !1 }),
                                (0, a.jsx)(sB, { icon: sw.U, label: ea.intl.string(ea.t["3+ii4F"]), highlighted: !0 }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: sK.RW,
                            children: [
                                (0, a.jsx)("div", {
                                    className: sK.$f,
                                    children: (0, a.jsx)(sU.PlusLargeIcon, {
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
function sB(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, a.jsxs)("div", {
        className: d()(sK.KT, { [sK.$Y]: s }),
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, a.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
var sV = n(970244);
n(938796);
var sJ = n(408018),
    sX = n(451909),
    sY = n(205120),
    sW = n(91624);
function sZ(e) {
    let { scheduledMessage: t, channel: n, onCancel: s } = e,
        [l, r] = i.useState(() => {
            let e = eA.D_.getSetting(),
                s = (0, tt.zs)(t.createArgs),
                l = sX.Ay.unparse(s, n.id);
            return { textValue: l, richValue: (0, sJ.x7)(e ? l : s) };
        }),
        d = i.useCallback((e, t, n) => {
            r({ textValue: t, richValue: n });
        }, []),
        c = t.scheduledMessageId,
        o = t.createArgs.flags,
        u = i.useCallback(
            (e, t, n) => {
                let { content: s } = n;
                return (0, sV.XM)({ scheduledMessageId: c, content: s, flags: o });
            },
            [c, o],
        ),
        h = i.useCallback(() => (0, sV.tu)(c), [c]);
    return (0, a.jsx)(sY.A, {
        channel: n,
        message: t.record,
        textValue: l.textValue,
        richValue: l.richValue,
        onCancel: s,
        onChange: d,
        onConfirmDelete: h,
        saveMessage: u,
        validateEdit: sW.R3,
        children: s$,
    });
}
function s$(e) {
    return (0, a.jsx)(sW.Nr, { ...e });
}
n(853297);
var sq = n(757424);
let sQ = "Scheduled Messages",
    s0 = { offset: { left: 4, right: -12 } };
function s1(e) {
    let { onJump: t } = e;
    i.useEffect(() => {
        (0, sG.sy)();
    }, []);
    let n = (0, j.bG)([sP.A], () => sP.A.getScheduledMessagesForInbox()),
        s = (0, j.bG)([sP.A], () => sP.A.loading),
        l = (0, j.bG)([sP.A], () => sP.A.getMessagesPendingRemoval()),
        r = i.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        { limit: d, isUpgradable: c } = (0, tt.yz)("ScheduledMessageInboxTab"),
        o = d > 0 && r.length >= d,
        u = i.useRef(null),
        h = (0, T.A)("scheduled-messages", u);
    return ((0, eg.xN)(u), (0, eg.yW)(sQ), s)
        ? (0, a.jsx)("div", { className: e0.Lq, children: (0, a.jsx)(ty.y, {}) })
        : 0 === r.length
          ? (0, a.jsx)(sH, {})
          : (0, a.jsxs)("div", {
                className: sq.MY,
                children: [
                    (0, a.jsx)(f.hD, {
                        navigator: h,
                        children: (0, a.jsx)(f.PR, {
                            children: (e) => {
                                let { ref: n, ...s } = e;
                                return (0, a.jsx)(N.Ch, {
                                    className: e0.XG,
                                    ref: (e) => {
                                        ((u.current = e), (n.current = e?.getScrollerNode() ?? null));
                                    },
                                    ...s,
                                    children: r.map((e) =>
                                        (0, a.jsx)(
                                            s2,
                                            {
                                                scheduledMessage: e,
                                                channelId: e.createArgs.channelId,
                                                isPendingRemoval: l.has(e.scheduledMessageId),
                                                onJump: t,
                                            },
                                            e.scheduledMessageId,
                                        ),
                                    ),
                                });
                            },
                        }),
                    }),
                    c ? (0, a.jsx)("div", { className: sq.fH, children: (0, a.jsx)(s3, { isAtLimit: o }) }) : null,
                ],
            });
}
function s3(e) {
    let { isAtLimit: t } = e,
        { analyticsLocations: s } = (0, k.Ay)(D.A.SCHEDULED_MESSAGES_LIST),
        l = i.useCallback(() => {
            (0, eD.openModalLazy)(async () => {
                let { default: e } = await n.e("13248").then(n.bind(n, 689219));
                return (t) => (0, a.jsx)(e, { ...t, analyticsLocations: s });
            });
        }, [s]),
        r = (0, ek.Dd)(eU.PremiumTypes.TIER_2);
    return (0, a.jsx)(ez, {
        text: t
            ? ea.intl.format(ea.t["2o4lgw"], { nitroTierName: r, onClick: l, premiumMax: 25 })
            : ea.intl.formatToPlainString(ea.t.WfTDdG, { nitroTierName: r }),
        isAtLimit: t,
        analyticsSection: eH.JJy.SCHEDULED_MESSAGES_LIST_UPSELL,
    });
}
let s2 = i.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingRemoval: s, onJump: l } = e,
        r = (0, j.bG)([Q.A], () => Q.A.getChannel(n)),
        { isError: c, stateMessage: o } = (0, tt.Y8)(t.state),
        u = eA.hH.useSetting(),
        [h, m] = i.useState(!1),
        g = i.useCallback(() => (0, sV.tu)(t.scheduledMessageId), [t.scheduledMessageId]),
        x = i.useCallback(() => {
            (0, sV.CI)({ scheduledMessage: t });
        }, [t]);
    return null == r
        ? (0, a.jsx)(s8, { scheduledMessageId: t.scheduledMessageId })
        : (0, a.jsxs)(
              "div",
              {
                  className: e0.aP,
                  children: [
                      (0, a.jsx)(ed, {
                          itemId: `header-${t.record.id}`,
                          channel: r,
                          onClick: (e) => (0, eg.n4)(r.id, r.guild_id, sQ, () => l(e)),
                          collapsed: !1,
                          status: (0, a.jsx)(em, {
                              type: c ? "error" : "normal",
                              text: c
                                  ? o
                                  : ea.intl.formatToPlainString(ea.t["CvHu/j"], {
                                        timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                    }),
                          }),
                          children: (0, a.jsxs)(C.e, {
                              size: "sm",
                              className: ei.GC,
                              children: [
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.JLba51),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sD.SendMessageIcon,
                                          "aria-label": ea.intl.string(ea.t.JLba51),
                                          disabled: s,
                                          onClick: () => (0, sV.fK)(t.scheduledMessageId),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.ZXE1s4),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: R.PencilIcon,
                                          "aria-label": ea.intl.string(ea.t.ZXE1s4),
                                          disabled: s,
                                          onClick: () => m(!0),
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: H.ClockIcon,
                                          "aria-label": ea.intl.string(ea.t.SBcdAN),
                                          disabled: s,
                                          onClick: x,
                                      }),
                                  }),
                                  (0, a.jsx)(p.m, {
                                      text: ea.intl.string(ea.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(E.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sk.a,
                                          "aria-label": ea.intl.string(ea.t.O3sL8F),
                                          disabled: s,
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      s
                          ? (0, a.jsx)(ty.y, { className: e0.Lq })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(
                                        ex.A,
                                        {
                                            message: t.record,
                                            channel: r,
                                            className: t.attachmentUploads.length > 0 ? sq.Mg : e0.YD,
                                            compact: u,
                                            animateAvatar: !1,
                                            focusProps: s0,
                                            inlineEditor: h
                                                ? (0, a.jsx)(sZ, {
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
                                            className: d()(sq.PI, { [sq.oE]: u }),
                                            children: [
                                                (0, a.jsx)(sO.P, { size: "xs", color: "currentColor" }),
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
function s8(e) {
    let { scheduledMessageId: t } = e;
    return (0, a.jsxs)("div", {
        className: d()(e0.aP, sq.Mh),
        children: [
            (0, a.jsxs)("div", {
                className: sq.WV,
                children: [
                    (0, a.jsx)("div", {
                        className: sq.V2,
                        children: (0, a.jsx)(y.E, { size: "xxs", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
                    (0, a.jsx)(I.D, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: ea.intl.string(ea.t.FpeuT5),
                    }),
                ],
            }),
            (0, a.jsx)(C.e, {
                size: "sm",
                className: ei.GC,
                children: (0, a.jsx)(p.m, {
                    text: ea.intl.string(ea.t.O3sL8F),
                    ariaHidden: !0,
                    children: (0, a.jsx)(E.K, {
                        variant: "secondary",
                        size: "sm",
                        icon: sk.a,
                        "aria-label": ea.intl.string(ea.t.O3sL8F),
                        onClick: () => (0, sV.tu)(t),
                    }),
                }),
            }),
        ],
    });
}
var s7 = n(211550);
function s6(e) {
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
            className: d()(s7.k, { [s7.q]: n }),
            children: (0, a.jsx)(c.tH, {
                fallback: (0, a.jsx)(sp, {}),
                children: (0, a.jsx)(h.F, {
                    component: (0, a.jsx)(sv, { tab: s, setTab: l, closePopout: i }),
                    children:
                        s === o.Y2.MENTIONS
                            ? (0, a.jsx)(sL, { onJump: r })
                            : A && s === o.Y2.BOOKMARKS
                              ? (0, a.jsx)(e8, { closePopout: i, type: m.Yf.BOOKMARK }, "bookmarks")
                              : A && s === o.Y2.REMINDERS
                                ? (0, a.jsx)(e8, { closePopout: i, type: m.Yf.REMINDER }, "reminders")
                                : s === o.Y2.SCHEDULED
                                  ? (0, a.jsx)(s1, { onJump: r })
                                  : (0, a.jsx)(sf, { onJump: r, showTutorial: g, setSeenTutorial: x, closePopout: i }),
                }),
            }),
        }),
    });
}
