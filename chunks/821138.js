n.r(t), n.d(t, { default: () => sg });
var s,
    a,
    l,
    i = n(627968),
    r = n(64700),
    d = n(503698),
    c = n.n(d),
    o = n(484030),
    u = n(873298),
    h = n(305866),
    g = n(707554),
    m = n(284009),
    A = n.n(m),
    f = n(989349),
    x = n.n(f),
    j = n(562708),
    p = n(837381),
    E = n(17928),
    S = n(866665),
    N = n(689175),
    y = n(695366),
    C = n(661531),
    v = n(297264),
    _ = n(825484),
    I = n(408278),
    R = n(606096),
    M = n(933832),
    L = n(22231),
    O = n(99677),
    b = n(406810),
    D = n(442433),
    T = n(928039),
    k = n(139286),
    G = n(636922),
    F = n(187322),
    U = n(939249),
    P = n(320448),
    H = n(778712),
    w = n(97808),
    K = n(812993),
    z = n(834730),
    B = n(397244),
    X = n(714114),
    J = n(394871),
    Y = n(571694),
    V = n(47167),
    Z = n(713654),
    $ = n(598104),
    q = n(548118),
    W = n(616356),
    Q = n(734057),
    ee = n(71393),
    et = n(290863),
    en = n(568548),
    es = n(287809),
    ea = n(650583),
    el = n(375708),
    ei = n(889329);
let er = { top: 8, bottom: 8, left: -4, right: -4 };
function ed(e) {
    let { channel: t, children: n, onClick: s, collapsed: a = !1, mentionCount: l, onToggleCollapse: r, itemId: d } = e,
        o = (0, p.rm)(d);
    return (0, i.jsx)(F.vN, {
        offset: er,
        children: (0, i.jsxs)("div", {
            className: c()(ei.ZO, { [ei.yZ]: a }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === ea.dh.ENTER || e.key === ea.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === ea.dh.ARROW_RIGHT && a) || (e.key === ea.dh.ARROW_LEFT && !a)) && r();
            },
            children: [
                (0, i.jsx)(U.D, {
                    className: ei.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(ec, { channel: t }),
                }),
                (0, i.jsx)(P._, { className: ei.ai, size: "xxs" }),
                (0, i.jsx)(eo, { channel: t, onClick: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function ec(e) {
    let { channel: t } = e,
        n = (0, E.bG)([ee.A], () => ee.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(q.Ay, { className: ei.Kk, guild: n, size: q.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)($.A, { channel: t, size: H._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(w.eu, { size: H._3.SIZE_32, src: (0, Y.Y)(t), "aria-hidden": !0 });
}
function eo(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, E.bG)([ee.A], () => ee.A.getGuild(t.guild_id)),
        l = (0, V.Ay)(t, !1),
        r = (0, E.bG)([en.Ay], () => en.Ay.getIsMentionLowImportance(t.id)),
        d = (0, E.bG)([Q.A], () => Q.A.getChannel(t.parent_id)),
        o = (0, V.Ay)(d),
        u = (0, Z.gU)(t, a);
    return (0, i.jsxs)("div", {
        className: ei.yP,
        children: [
            (0, i.jsx)(v.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: ei.lz,
                children: (0, i.jsxs)(U.D, {
                    className: ei.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == u ? null : (0, i.jsx)(u, { className: ei.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: ei.je, children: l }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: ei.qS,
                                  children: (0, i.jsx)(K.hV, {
                                      count: s,
                                      color: r
                                          ? C.A.colors.BACKGROUND_MOD_STRONG.css
                                          : C.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? el.intl.formatToPlainString(el.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(eu, { channel: t })
                      : (0, i.jsx)(U.D, {
                            className: c()(ei.je, ei.J5),
                            onClick: n,
                            children: null == d ? a?.name : `${a?.name} \u{203A} ${o}`,
                        }),
            }),
        ],
    });
}
function eu(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: a,
            applicationStream: l,
        } = (0, E.cf)([es.default, et.A, W.A], () => {
            let e = es.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? et.A.getStatus(e.id) : null,
                activities: null != e ? et.A.getActivities(e.id) : null,
                applicationStream: null != e ? W.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, X.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(J.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eh(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: c()(ei.h5, { [ei.z3]: "error" === t, [ei.kX]: "success" === t, [ei.qb]: "normal" === t }),
        children: [
            "error" === t ? (0, i.jsx)(y.E, { size: "xs" }) : (0, i.jsx)(b.O, { size: "xs" }),
            (0, i.jsx)(z.E, {
                variant: "text-xs/medium",
                color: "error" === t ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
var eg = n(885386),
    em = n(576705),
    eA = n(174459),
    ef = n(927813),
    ex = n(164684),
    ej = n(704456),
    ep = n(85109),
    eE = n(756377);
n(321073);
var eS = n(216623);
function eN() {
    return ep.A.getSavedMessages().map((e) => e.saveData);
}
var ey = n(403581),
    eC = n(862482),
    ev = n(192308),
    e_ = n(404374),
    eI = n(725807),
    eR = n(428262),
    eM = n(226017),
    eL = n(652215),
    eO = n(202541),
    eb = n(398610),
    eD = n(936037);
function eT() {
    return (0, eM.A)()
        ? (0, i.jsx)("div", {
              className: eb.do,
              children: (0, i.jsxs)("div", {
                  className: eb.U6,
                  children: [
                      (0, i.jsx)("img", { src: "/assets/29e2479161d09050.png", className: eb.Sl, alt: "" }),
                      (0, i.jsx)(v.D, {
                          className: eb.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: el.intl.string(el.t.erEf2g),
                      }),
                      (0, i.jsx)(z.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: el.intl.string(el.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: eb.do,
              children: [
                  (0, i.jsxs)("div", {
                      className: eb.U6,
                      children: [
                          (0, i.jsx)("img", { src: eD, className: eb.Sl, alt: "" }),
                          (0, i.jsx)(v.D, {
                              className: eb.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: el.intl.string(el.t.w4DRbZ),
                          }),
                          (0, i.jsx)(z.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: el.intl.string(el.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, i.jsx)(ek, {}),
              ],
          });
}
function ek() {
    let e = (0, eR.Dd)(eO.PremiumTypes.TIER_2),
        t = r.useCallback(
            () =>
                (0, ev.openModalLazy)(async () => {
                    let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
            [],
        ),
        s = el.intl.format(el.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, i.jsxs)("div", {
        className: eb.Zj,
        children: [
            (0, i.jsx)(ey.t, { size: "md", color: e_.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(z.E, { variant: "text-xs/medium", color: "text-strong", className: eb.tD, children: s }),
            (0, i.jsx)(eI.A, {
                className: eb.Oy,
                size: eC.lO.TINY,
                shinyButtonClassName: eb.Oy,
                subscriptionTier: eO.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eL.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
function eG(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: a } = (0, ej.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: ej.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eh, { type: a ? "error" : "normal", text: s });
}
var eF = n(608149),
    eU = n(521443);
function eP(e) {
    let { closePopout: t } = e,
        n = (function () {
            let [e, t] = r.useState(eN),
                n = r.useRef(ep.A.getIsStale());
            return (
                r.useEffect(() => {
                    let e = ep.A.getLastChanged();
                    function s() {
                        let s = ep.A.getLastChanged();
                        if (e !== s) {
                            if (((e = s), n.current && !ep.A.getIsStale())) {
                                (n.current = !1), t(eN());
                                return;
                            }
                            t((e) => {
                                let t = [...e],
                                    n = new Map(ep.A.getSavedMessages().map((e) => [e.saveData.messageId, e]));
                                for (let s of e) n.has(s.messageId) ? n.delete(s.messageId) : t.splice(t.indexOf(s), 1);
                                for (let e of n.values()) t.push(e.saveData);
                                return t;
                            });
                        }
                    }
                    return (
                        ep.A.addChangeListener(s),
                        () => {
                            ep.A.removeChangeListener(s);
                        }
                    );
                }, []),
                r.useEffect(() => {
                    (0, eS.AX)();
                }, []),
                e
            );
        })();
    (0, k.A)(
        {
            type: j.ImpressionTypes.POPOUT,
            name: j.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: n.length, overdue_count: ep.A.getOverdueMessageReminderCount() },
        },
        {},
        [n.length],
    );
    let s = r.useRef(null),
        a = (0, T.A)("for-later", s),
        [l, d] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => d(new Date()), ef.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === n.length)
        ? (0, i.jsx)(eT, {})
        : (0, i.jsx)(p.hD, {
              navigator: a,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: a, ...r } = e;
                      return (0, i.jsx)(N.Ch, {
                          ref: (e) => {
                              (s.current = e), (a.current = e?.getScrollerNode() ?? null);
                          },
                          className: eF.XG,
                          ...r,
                          children: n.map((e) =>
                              (0, i.jsx)(ew, { savedMessageKey: e, closePopout: t, throttledNow: l }, e.messageId),
                          ),
                      });
                  },
              }),
          });
}
function eH(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, ej.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, ej.le)(t, a),
                    e.shiftKey || n(),
                    eA.default.track(eL.HAw.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: t.message?.author.id,
                        type: null != t.saveData.dueAt ? eE.Yf.REMINDER : eE.Yf.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? x()().diff(t.saveData.dueAt) : void 0,
                    });
            },
            [n, t, a],
        ),
        d = (0, E.bG)(
            [em.A],
            () => !!(a?.type === eL.rbe.UNKNOWN || a?.isPrivate()) || em.A.can(eL.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eU.aP,
              children: [
                  (0, i.jsx)(ed, {
                      itemId: `header-${t.message.id}`,
                      channel: a,
                      onClick: (e) => {
                          l(e), n();
                      },
                      collapsed: !1,
                      children: (0, i.jsx)(_.e, {
                          size: "sm",
                          className: ei.GC,
                          children: (0, i.jsx)(eK, { savedMessage: t, jumpToMessage: l }),
                      }),
                  }),
                  null != t.saveData.dueAt ? (0, i.jsx)(eG, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(
                      G.A,
                      {
                          message: t.message,
                          channel: a,
                          className: eU.YD,
                          compact: eg.hH.getSetting(),
                          animateAvatar: !1,
                          trackAnnouncementViews: !0,
                          tabIndex: -1,
                      },
                      t.message.id,
                  ),
              ],
          })
        : (0, i.jsxs)("div", {
              className: c()(eU.aP, eF.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: eF.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: eF.Bx,
                              children: (0, i.jsx)(y.E, { size: "xxs", color: C.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(v.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? el.intl.string(el.t["wuQm+j"])
                                      : el.intl.string(el.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(_.e, {
                      size: "sm",
                      className: ei.GC,
                      children: (0, i.jsx)(S.m, {
                          text: el.intl.string(el.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(I.K, {
                              variant: "secondary",
                              "aria-label": el.intl.string(el.t.SvXS1Z),
                              size: "sm",
                              icon: R.c,
                              onClick: () => (0, ex.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function ew(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: s } = e,
        a = (0, E.bG)([ep.A], () => ep.A.getSavedMessage(t.channelId, t.messageId));
    return null == a ? null : (0, i.jsx)(eH, { savedMessage: a, closePopout: n, throttledNow: s });
}
function eK(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (A()(null != t.message, "Saved message must be cached for For Later action buttons"),
    null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(S.m, {
                      text: el.intl.string(el.t.yjGtdJ),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": el.intl.string(el.t.yjGtdJ),
                          size: "sm",
                          icon: M.A,
                          onClick: () =>
                              (0, ex.Y)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0,
                              }),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: el.intl.string(el.t.vrbqs1),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": el.intl.string(el.t.vrbqs1),
                          size: "sm",
                          icon: L.R,
                          onClick: (e) =>
                              (0, D.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: el.intl.string(el.t.roMu1H), message: t.message });
                              }),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: el.intl.string(el.t["+TSRGD"]),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": el.intl.string(el.t["+TSRGD"]),
                          size: "sm",
                          icon: O.t,
                          onClick: (e) => s(e),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: el.intl.string(el.t.SvXS1Z),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": el.intl.string(el.t.SvXS1Z),
                          size: "sm",
                          icon: R.c,
                          onClick: () => (0, ex.x)(t.saveData),
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(S.m, {
                      text: el.intl.string(el.t.mJ3P0N),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": el.intl.string(el.t.mJ3P0N),
                          size: "sm",
                          icon: b.O,
                          onClick: (e) =>
                              (0, D.L3)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e("75133").then(n.bind(n, 195404));
                                  return (n) =>
                                      (0, i.jsx)(e, { ...n, label: el.intl.string(el.t.mJ3P0N), message: t.message });
                              }),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: el.intl.string(el.t["+TSRGD"]),
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": el.intl.string(el.t["+TSRGD"]),
                          size: "sm",
                          icon: O.t,
                          onClick: (e) => s(e),
                      }),
                  }),
                  (0, i.jsx)(S.m, {
                      text: el.intl.string(el.t.SvXS1Z),
                      ariaHidden: !0,
                      children: (0, i.jsx)(I.K, {
                          variant: "secondary",
                          "aria-label": el.intl.string(el.t.SvXS1Z),
                          size: "sm",
                          icon: R.c,
                          onClick: () => (0, ex.x)(t.saveData),
                      }),
                  }),
              ],
          });
}
var ez = n(289873),
    eB = n(935063),
    eX = n(821609),
    eJ = n(378939),
    eY = n(493336),
    eV = n(964486),
    eZ = n(475743),
    e$ = n(323073),
    eq = n(202803),
    eW = n(81437),
    eQ = n(378570),
    e0 = n(517019),
    e1 = n(309010),
    e3 = n(625494),
    e2 = n(135978),
    e7 = n(303727),
    e6 = n(711917);
function e8(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: e6.kL,
        children: [
            (0, i.jsxs)("div", {
                className: e6.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: e6.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(e7.A, { className: e6.uf }),
                ],
            }),
            (0, i.jsx)(v.D, { className: e6.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(z.E, {
                              tag: "span",
                              className: e6.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [el.intl.string(el.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var e4 = n(575863);
let e5 = { offset: { left: 4, right: -12 } },
    e9 = "Recent Mentions";
function te(e, t) {
    eJ.A.fetchRecentMentions({
        before: t,
        limit: eL.Ue3,
        guildId: null != e && e2.Ay.guildFilter !== eL.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: e2.Ay.roleFilter,
        everyone: e2.Ay.everyoneFilter,
    });
}
function tt(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, T.A)("recents", n),
        a = (0, E.bG)([Q.A, e1.Ay], () => Q.A.getChannel(e1.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, E.cf)([e2.Ay], () => ({
            messages: e2.Ay.getMentions(),
            hasMore: e2.Ay.hasMore,
            loading: e2.Ay.loading,
            guildFilter: e2.Ay.guildFilter,
            roleFilter: e2.Ay.roleFilter,
            everyoneFilter: e2.Ay.everyoneFilter,
        })),
        g = (0, eZ.A)(o),
        m = (0, eZ.A)(u),
        A = (0, eZ.A)(h);
    r.useEffect(() => {
        e2.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && u !== m) || (null != A && h !== A)) && te(a)
            : te(a);
    }, [g, o, m, u, A, h, a]),
        (0, eV.Ay)(() => {
            l?.some(eq.$r) && (eJ.A.clearMentions(), te(a));
        }),
        (0, eV.l0)(() => {
            eJ.A.truncateMentions(eL.Ue3);
        }),
        (0, eV.Ay)(() => {
            eA.default.track(eL.HAw.OPEN_POPOUT, { type: e9 });
        }),
        (0, eV.Ay)(() => {
            function e() {
                n.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                n.current?.scrollPageDown({ animate: !0 });
            }
            return (
                e3._.subscribe(eL.jej.SCROLL_PAGE_DOWN, t),
                e3._.subscribe(eL.jej.SCROLL_PAGE_UP, e),
                () => {
                    e3._.unsubscribe(eL.jej.SCROLL_PAGE_DOWN, t), e3._.unsubscribe(eL.jej.SCROLL_PAGE_UP, e);
                }
            );
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            te(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: eU.Lq, children: (0, i.jsx)(ez.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(e8, { Icon: eB.X, header: el.intl.string(el.t.bgDz74), tip: el.intl.string(el.t.NS15vk) })
          : (0, i.jsx)(p.hD, {
                navigator: s,
                children: (0, i.jsx)(p.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(N.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eU.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                l.map((e) => (0, i.jsx)(tn, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eU.Lq, children: (0, i.jsx)(ez.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: e4.u9,
                                            children: (0, i.jsx)(eX.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: el.intl.string(el.t.XBlaiC),
                                                onClick: () =>
                                                    te(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function tn(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = Q.A.getChannel(t.channel_id);
    if (null == s || (0, e$.Jm)(s) || (0, e$.$v)(s)) return null;
    let a = e0.A.didAgree(s.getGuildId()),
        l = !!(0, e$.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: eU.aP,
        children: [
            (0, i.jsx)(ed, {
                channel: s,
                onClick: (e) => ts(t, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(_.e, {
                    size: "sm",
                    className: ei.GC,
                    children: [
                        (0, i.jsx)(S.m, {
                            text: el.intl.string(el.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": el.intl.string(el.t["+TSRGD"]),
                                size: "sm",
                                icon: O.t,
                                onClick: (e) => ts(t, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(S.m, {
                            text: el.intl.string(el.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(I.K, {
                                variant: "secondary",
                                "aria-label": el.intl.string(el.t.e6RscS),
                                size: "sm",
                                icon: M.A,
                                onClick: () => eJ.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    G.A,
                    {
                        message: t,
                        channel: s,
                        className: eU.YD,
                        hideAccessories: l,
                        compact: eg.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: e5,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
function ts(e, t) {
    function n() {
        let { id: n, channel_id: s } = e;
        null != Q.A.getChannel(s) && (eY.A.trackJump(s, n, e9), (0, eQ.ci)(s, n)), t();
    }
    (0, eW.A)(e, n) && n();
}
var ta = n(702841),
    tl = n(912592),
    ti = n(890856),
    tr = n(761508),
    td = n(966597),
    tc = n(910425),
    to = n(214947),
    tu = n(711950),
    th = n(322387),
    tg = n(912309),
    tm = n(134314);
function tA(e) {
    let { closePopout: t } = e,
        n = (0, tg.kX)();
    return (0, i.jsx)(S.m, {
        asContainer: !0,
        text: el.intl.string(el.t["lMR96+"]),
        children: (0, i.jsxs)(U.D, {
            "aria-label": `${el.intl.string(el.t["lMR96+"])}, ${n}`,
            className: tm.b,
            onClick: () => {
                eA.default.track(eL.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: th.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    tu.A.transitionToSection(eL.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(to.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(K.hV, { count: n, color: C.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var tf = n(980707),
    tx = n(477782),
    tj = n(922016),
    tp = n(783977);
function tE(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, E.bG)([Q.A, e1.Ay], () => Q.A.getChannel(e1.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, E.cf)([e2.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = e2.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(tf.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": el.intl.string(el.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(tx.sL, {
                id: "Everyone",
                label: el.intl.string(el.t.cdyUsV),
                action: function () {
                    eJ.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(tx.sL, {
                id: "Roles",
                label: el.intl.string(el.t.lZejCq),
                action: function () {
                    eJ.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(tx.sL, {
                      id: "All Servers",
                      label: el.intl.string(el.t.GWMA6s),
                      action: function () {
                          eJ.A.setGuildFilter({
                              guildFilter: r === eL.KE7.THIS_SERVER ? eL.KE7.ALL_SERVERS : eL.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eL.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tS() {
    let e = r.useRef(null);
    return (0, i.jsx)(tj.Y, {
        targetElementRef: e,
        align: "right",
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tE, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(S.m, {
                text: el.intl.string(el.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(I.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": el.intl.string(el.t.pEasFX),
                    icon: tp.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tN = n(481613),
    ty = n.n(tN),
    tC = n(621466),
    tv = n(228366),
    t_ = n(775602),
    tI = n(723702),
    tR = n(143838),
    tM = n(640238);
function tL(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function a() {
        t(),
            eA.default.track(eL.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tO, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(S.m, {
                text: el.intl.string(el.t["8k+6QY"]),
                children: (0, i.jsx)(I.K, {
                    variant: "secondary",
                    "aria-label": el.intl.string(el.t["8k+6QY"]),
                    size: "sm",
                    icon: tR.i,
                    onClick: function (e) {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tO(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tM.M, {
        dismissable: !0,
        header: el.intl.string(el.t.h4bVZ2),
        confirmText: el.intl.string(el.t.e6RscS),
        cancelText: el.intl.string(el.t["ETE/oC"]),
        confirmButtonColor: eC.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(z.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: el.intl.string(el.t["0MQ0Bf"]),
        }),
    });
}
var tb = n(435558),
    tD = n.n(tb),
    tT = n(749314),
    tk = n(372684),
    tG = n(311283),
    tF = n(717421),
    tU = n(334738),
    tP = n(95561),
    tH = n(976860),
    tw = n(847374),
    tK = n(714568);
function tz(e) {
    let { collapsed: t, onClick: n } = e,
        s = el.intl.string(t ? el.t.dcl9MQ : el.t.iTcuma);
    return (0, i.jsx)(S.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(U.D, {
            className: tK.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tw.a, { className: c()(tK.ai, { [tK.yZ]: t }), size: "xs" }),
        }),
    });
}
var tB = n(169894);
let tX = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tJ = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tY(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tF.z)(() => (t ? tX : tJ), "respect-motion-settings", []),
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
                          immediate: t_.Ay.useReducedMotion,
                      })
                    : l({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: t_.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && l({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, l]),
        (0, i.jsx)(tk.animated.div, {
            className: tB.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tV = n(782603),
    tZ = n(461678),
    t$ = n(914703);
function tq(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(tj.Y, {
        targetElementRef: n,
        align: "right",
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(t$.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: el.intl.string(el.t.ljs3Oe),
                  })
                : (0, i.jsx)(tZ.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: el.intl.string(el.t.ljs3Oe),
                      location: { section: eL.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(S.m, {
                text: el.intl.string(el.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(I.K, {
                    "aria-label": el.intl.string(el.t.h850Ss),
                    icon: tV.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tW = n(350527),
    tQ = n(218152),
    t0 = n(970278),
    t1 = n(747926),
    t3 = n(403362),
    t2 = n(935208),
    t7 = n(37411),
    t6 = n(791641);
function t8(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, E.yK)(
            [t0.A, Q.A],
            () =>
                tD()(t0.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return t2.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return Q.A.getChannel(t);
                    })
                    .filter(t3.Vq)
                    .sort((e, t) => t2.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, t1.JA)(e, t, t7.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                tv.h.wait(() => {
                    (0, tU.ack)(
                        t.channelId,
                        {
                            section: eL.JJy.INBOX,
                            object: eL.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: t6.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    tQ.Cp,
                    { channel: n, children: (0, i.jsx)(tW.Ay, { className: t6.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var t4 = n(123292),
    t5 = n(857069),
    t9 = n(789645),
    ne = n(33358),
    nt = n(384231),
    nn = n(207133),
    ns = n(704413),
    na = n(9842),
    nl = n(994500),
    ni = n(5095),
    nr = n(320095),
    nd = n(143413),
    nc = n(763754),
    no = n(467073),
    nu = n(491182),
    nh = n(860227),
    ng = n(500414),
    nm = n(375199),
    nA = n(824556),
    nf = n(715628),
    nx = n(752636),
    nj = n(352043),
    np = n(268719),
    nE = n(234957),
    nS = n(888675),
    nN = n(21623),
    ny = n(701628);
let nC = r.memo(function e(t) {
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
        g = eL.sl8.has(a.type) ? a.messageReference : void 0,
        m = (0, E.bG)([na.A], () => na.A.getMessageByReference(g)),
        A = (0, E.bG)([Q.A], () =>
            a.type === eL.lAJ.THREAD_STARTER_MESSAGE && m.state === na.a.LOADED
                ? Q.A.getChannel(m.message.channel_id)
                : null,
        ),
        f = eg.X6.useSetting(),
        x = eg.hD.useSetting(),
        j = eg.rs.useSetting(),
        p = eg.kt.useSetting(),
        S = (0, nt.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        N = (0, nn.A)(s?.id),
        { disableReactionCreates: y } = (0, no.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: v,
            hasBailedAst: _,
        } = (0, nm.A)(a, {
            hideSimpleEmbedContent: x && j,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, nc.Ay)(a),
        R = (0, E.bG)(
            [Q.A],
            () => a.hasFlag(eL.pr7.HAS_THREAD) && Q.A.getChannel(t2.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === eL.lAJ.THREAD_STARTER_MESSAGE && m.state === na.a.LOADED && null != A,
        L = !M && void 0 === n,
        O = (0, nA.A)({ message: a, channel: s, announcementEnabled: L }),
        b = (0, ne.P)(a),
        D = (0, ni._f)(a.id, a.channel_id),
        T = (0, ns.A)(a),
        k = (0, nh.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (nl.A.isBlockedForMessage(a) ? (n = el.t["+FcYM/"]) : nl.A.isIgnoredForMessage(a) && (n = el.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(nv, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(nu.A, {
                compact: l,
                className: c()(r, { [ny.M1]: (0, nr.ec)(a), [ny.XN]: u, [ny._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nE.A)(a, s, g, m, l),
                childrenHeader: (0, nx.A)({ ...t, author: I, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(ng.iV, {
                    channel: s,
                    message: a,
                    hasSpoilerEmbeds: v,
                    hasBailedAst: _,
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
                    gifAutoPlay: p,
                    poll: T,
                    showListsAndHeaders: S,
                    showMaskedLinks: S,
                    shouldHideMediaOptions: N,
                    enabledContentHarmTypeFlags: b,
                    ctaButtonType: D,
                }),
                childrenExecutedCommand: (0, np.A)(a, s, l),
                childrenMessageContent: (0, nf.A)(t, C),
                childrenSystemMessage: (0, nj.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != R && a.hasFlag(eL.pr7.HAS_THREAD),
                hasReply: a.type === eL.lAJ.REPLY,
                isSystemMessage: (0, nd.A)(a),
                messageRef: O,
                author: I,
                "aria-labelledby": k,
                "aria-roledescription": el.intl.string(el.t.BAB0yK),
            });
});
function nv(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(nu.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nS.A, {
            compact: s,
            className: nN.L9,
            iconNode: (0, i.jsx)(t9.P, { size: "md", color: "currentColor", className: nN.Q6 }),
            children: (0, i.jsx)("div", { className: nN.Fo, children: el.intl.format(a, { count: n }) }),
        }),
    });
}
var n_ = n(58703),
    nI = n(373423);
function nR(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(U.D, {
        className: c()(nI.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(ez.y, { type: ez.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(z.E, { variant: "text-xs/medium", className: nI.Q, children: el.intl.string(el.t.k5WiPf) }),
    });
}
var nM = n(143236),
    nL = n(181079),
    nO = n(567035),
    nb = n(455234),
    nD = n(695633),
    nT = n(152007),
    nk = n(607508),
    nG = n(594061),
    nF = n(617617),
    nU = n(95701),
    nP = n(808728),
    nH = n(232835),
    nw = n(711014),
    nK = n(543465),
    nz =
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
    nB = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nX extends nM.EventEmitter {
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
                        (A()("nsfw" !== e.type, "this channel should already be loaded"),
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
                let t = nJ(e, !1);
                if (t.messages.some(eq.$r)) return eY.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t0.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, t3.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nJ(e, !1, !0) : e,
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
                    section: eL.JJy.INBOX,
                    object: eL.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              t_.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tU.ack(
            e.channelId,
            { section: eL.JJy.INBOX, object: eL.ZSU.UNDO_MARK_AS_READ, objectType: eL.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tv.h.wait(() => (0, nO.A)([e], eL.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tD().findIndex(this.state.channels, (t) => t.channelId === e),
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
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = tD().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (a[t] = d),
            (0, nG.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nG.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !nK.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nT.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t0.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        eY.A.clearChannel(e.channelId);
        let t = eY.A.fetchMessages({
            channelId: e.channelId,
            limit: eL.EMb,
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
                            A()("messages" === e.type, "channel cannot change type");
                            let n = nJ(e, !0);
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
                                A()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nJ(e, !0),
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
function nJ(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nH.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    t2.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= t2.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = t2.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function nY() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nF.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let a = Q.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            Q.A.getSortedPrivateChannels().forEach((n) => nV(e, t, null, n.id)),
            nw.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nP.Ay.getSelectableChannelIds(n),
                    a = nD.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nV(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) nV(e, t, n, s);
                });
            }),
            tD().sortBy(t, (e) => e.sortOrder)),
        a = tD()
            .uniq(s.map((e) => e.guildId))
            .filter(t3.Vq);
    return (
        tv.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nV(e, t, n, s) {
    if (null == s) return;
    let a = Q.A.getChannel(s);
    if (null == a || (!nU.Le.has(a.type) && nK.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === en.Ay.getMentionCount(s)) return;
    } else if (!(0, nb.Y)(a) && 0 === en.Ay.getMentionCount(s)) return;
    if ((!a.isPrivate() && !em.A.can(eL.xBc.READ_MESSAGE_HISTORY, a)) || (0, e$.qR)(a)) return;
    let l = en.Ay.ackMessageId(s);
    if (null == l) {
        let e = ee.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = t2.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = en.Ay.getOldestUnreadMessageId(s),
        r = en.Ay.lastMessageId(s),
        d = en.Ay.getMentionCount(s),
        c = d > 0 || a.isPrivate();
    if (null == r || t2.default.compare(l, r) >= 0) return;
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
            let s = Q.A.getChannel(t);
            if (nL.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (en.Ay.getMentionCount(t) > 0) return en.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t2.default.extractTimestamp(n);
                if (Date.now() - e > n$) return 8;
                if (Date.now() - e > nZ) return 6;
            }
            if (s.isThread()) {
                let e = (0, nk.l)(s);
                return e === t7.CP.ALL_MESSAGES ? 4 : e === t7.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nK.Ay.getChannelMessageNotifications(e, t),
                    s = n === eL.orn.NULL ? nK.Ay.getMessageNotifications(e) : n;
                return s === eL.orn.ALL_MESSAGES ? 4 : s === eL.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, e$.qR)(a)
        ? t.push({ ...o, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nZ = 2 * ef.A.Millis.DAY,
    n$ = 10 * ef.A.Millis.DAY;
var nq = n(357242);
let nW = { left: 4, right: -12 },
    nQ = [eL.lAJ.THREAD_CREATED];
function n0(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, gotoChannel: l } = e,
        d = (0, p.rm)(n.id ?? ""),
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
        o = nQ.includes(n.type);
    return (0, i.jsx)(F.vN, {
        offset: nW,
        children: (0, i.jsxs)("div", {
            className: nq.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nR, { className: nq.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(nC, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nq.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                }),
            ],
        }),
    });
}
function n1(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        a = eg.hH.useSetting(),
        l = 0 === t.messages.length || x()(t.messages[0].timestamp).isSame(x()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, n_.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tT.A, { className: nq.yF, children: t }, t)), (d = x()(e.timestamp));
        }
        let t = null == c || (0, t5.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(n0, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t2.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nq.Gr,
                        children: (0, i.jsx)(t4.Q, {
                            variant: "primary",
                            text: `${el.intl.string(el.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(ez.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nq.DZ, children: r })
    );
}
let n3 = r.memo(function (e) {
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
        let { opacity: o, size: u } = (0, tF.z)(
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
        return (0, i.jsx)(tk.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(n2, { ...e }),
        });
    }),
    n2 = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, E.bG)([Q.A], () => Q.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tv.h.wait(() => {
                        (0, tU.ack)(
                            t.channelId,
                            {
                                section: eL.JJy.INBOX,
                                object: eL.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eL.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            (0, tP.zV)(eL.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let a = s ?? t.oldestUnreadMessageId;
            (0, tH.pX)(eL.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : a)), n(e);
        }
        function c() {
            a(t),
                (0, tP.zV)(eL.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        let o = !l.isNSFW();
        return (0, i.jsx)("div", {
            className: eU.aP,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(ed, {
                    channel: l,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: o ? c : void 0,
                    itemId: `header-${l.id}`,
                    children: [
                        (0, i.jsxs)(_.e, {
                            size: "sm",
                            className: ei.GC,
                            children: [(0, i.jsx)(tq, { channel: l }), (0, i.jsx)(n7, { ...e })],
                        }),
                        o ? (0, i.jsx)(tz, { collapsed: t.collapsed, onClick: c }) : null,
                    ],
                }),
                children: (0, i.jsx)(tY, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(n1, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(t8, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function n7(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, tG.A)() && null != t.guildId;
    return (0, i.jsx)(S.m, {
        text: l ? el.intl.string(el.t["5lLMhM"]) : el.intl.string(el.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(I.K, {
            variant: "secondary",
            "aria-label": l ? el.intl.string(el.t["5lLMhM"]) : el.intl.string(el.t.e6RscS),
            size: "sm",
            icon: l ? tR.i : M.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tP.zV)(eL.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var n6 = n(301328),
    n8 = n(691503);
function n4(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        [A, f] = (function (e) {
            let [t, n] = r.useState(() => new nX(nY(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
                [i, d] = r.useState(() => nY());
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
                        r = nY();
                    0 === r.channels.length || t - l.current < 10 * ef.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nX(r, e)));
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
                    () => (nH.A.addChangeListener(t.reloadMessages), () => nH.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nK.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nK.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nT.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nT.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        t0.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t0.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: x, channels: j } = A,
        { maybeLoadMore: S } = f,
        y = (0, E.bG)([t_.Ay], () => t_.Ay.messageGroupSpacing);
    (t = m),
        (n = A),
        (s = f),
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
        (a = A),
        (l = f),
        r.useEffect(() => {
            function e() {
                let e = a.channels.find((e) => !e.collapsed);
                null != e && l.markChannelRead(e);
            }
            return (
                e3._.subscribe(eL.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    e3._.unsubscribe(eL.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [l, a.channels]),
        (d = f),
        r.useEffect(() => {
            function e(e) {
                if ((0, ev.hasAnyModalOpen)()) return;
                let t = (0, tC.BF)(e)?.activeElement;
                (0, tC.Cw)(t) ||
                    (((0, tI.isMac)() || (0, tI.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
        r.useEffect(() => {
            eA.default.track(eL.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                tv.h.subscribe("CONNECTION_OPEN", g),
                () => {
                    tv.h.unsubscribe("CONNECTION_OPEN", g);
                }
            ),
            [g],
        ),
        (0, eV.Ay)(
            () => (
                e3._.subscribe(eL.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead),
                () => {
                    e3._.unsubscribe(eL.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead);
                }
            ),
        );
    let C = (0, T.A)("unreads", m);
    return 0 === j.length
        ? (0, i.jsx)(e8, {
              Icon: tl.K,
              header: el.intl.string(el.t["6XMM+D"]),
              tip: ty().os?.family === "OS X" ? el.intl.string(el.t.w9uDOW) : el.intl.string(el.t.BiUJC6),
          })
        : (0, i.jsx)(p.hD, {
              navigator: C,
              children: (0, i.jsx)(p.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(N.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: x === nB.Done ? void 0 : S,
                          className: c()(eU.XG, `group-spacing-${y}`),
                          children: [
                              u ? (0, i.jsx)(n5, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: a,
                                          deleteChannel: l,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tD().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nz.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tT.A,
                                                            {
                                                                className: n6.y,
                                                                contentClassName: n6.$,
                                                                children: el.intl.string(el.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nz.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tT.A,
                                                            {
                                                                className: n6.y,
                                                                contentClassName: n6.$,
                                                                children: el.intl.string(el.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  n3,
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
                              })(j, f, o),
                              x === nB.Done ? null : (0, i.jsx)(ez.y, { className: n8.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function n5(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: n8.d$,
        children: [
            (0, i.jsx)("div", { className: n8.cm, children: (0, i.jsx)(tl.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(v.D, {
                        className: n8.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: el.intl.string(el.t.vZPktJ),
                    }),
                    (0, i.jsx)(z.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: el.intl.string(el.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: n8.dh,
                        children: (0, i.jsx)(eX.$, {
                            variant: "primary",
                            size: "sm",
                            text: el.intl.string(el.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function n9() {
    return (0, i.jsx)(e8, {
        Icon: tl.K,
        disableStars: !0,
        header: el.intl.string(el.t["KG/ynf"]),
        tip: el.intl.string(el.t.cvcKzX),
    });
}
function se() {
    return (0, i.jsx)(tL, { onClick: () => e3._.dispatch(eL.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var st = n(716030);
function sn(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: a } = td.A.useConfig({ location: "RecentsPopout" }),
        l = (0, tc.Sc)(),
        r = (0, ta.bG)([ep.A], () => ep.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: st.wx,
        children: [
            (0, i.jsxs)("div", {
                className: st.qd,
                children: [
                    (0, i.jsx)(tl.K, { size: "md", color: "currentColor", className: st.yH }),
                    (0, i.jsx)(v.D, {
                        className: st.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: el.intl.string(el.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(ti.s, {
                        className: st.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": el.intl.string(el.t["8k+6QY"]),
                        children: [(0, i.jsx)(ss, { tab: t }), (0, i.jsx)(tA, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: st.YF,
                children: (0, i.jsxs)(tr.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: st.$H,
                    children: [
                        (0, i.jsx)(tr.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": el.intl.string(el.t.sRUdB8),
                            className: st.Mf,
                            children: (0, i.jsx)("span", { className: st.Gn, children: el.intl.string(el.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(tr.V.Item, {
                            "aria-label": el.intl.string(el.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: st.Mf,
                            children: (0, i.jsx)("span", { className: st.Gn, children: el.intl.string(el.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(tr.V.Item, {
                                  "aria-label": el.intl.string(el.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: st.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: st.Gn,
                                      children:
                                          0 === r
                                              ? el.intl.string(el.t["2pAkDA"])
                                              : el.intl.formatToPlainString(el.t.I4fryG, { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(tr.V.Item, {
                                  "aria-label": el.intl.string(el.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: st.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: st.Gn,
                                      children: el.intl.string(el.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function ss(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(se, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tS, {}) : null;
}
var sa = n(285796),
    sl = n(151282),
    si = n(199160),
    sr =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    sd = n(970244);
let sc = { offset: { left: 4, right: -12 } };
function so(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, sl.sy)();
    }, []);
    let n = (0, E.bG)([si.A], () => si.A.getScheduledMessagesForInbox()),
        s = (0, E.bG)([si.A], () => si.A.loading),
        a = (0, E.bG)([si.A], () => si.A.getMessagesPendingDeletion()),
        l = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, T.A)("scheduled-messages", d);
    return s
        ? (0, i.jsx)(ez.y, { className: eU.Lq })
        : 0 === l.length
          ? (0, i.jsx)(e8, { Icon: b.O, header: el.intl.string(el.t.aJQZfZ), tip: el.intl.string(el.t.rCN4pN) })
          : (0, i.jsx)(p.hD, {
                navigator: c,
                children: (0, i.jsx)(p.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(N.Ch, {
                            className: eU.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    su,
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
let su = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, E.bG)([Q.A], () => Q.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sr.SCHEDULED:
                    return { isError: !1, stateMessage: el.intl.string(el.t.Fn6Odn) };
                case sr.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: el.intl.string(el.t.v5O2dK) };
                case sr.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: el.intl.string(el.t.j8uIfG) };
                case sr.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: el.intl.string(el.t["w6zHX/"]) };
                case sr.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: el.intl.string(el.t.pflV7z) };
                case sr.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: el.intl.string(el.t.j8uIfG) };
                default:
                    (0, t3.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, sl.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sd.Re)();
                })
                .catch((e) => {
                    (0, sd.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sd.CI)({ scheduledMessage: t });
        }, [t]);
    return null == l
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: eU.aP,
                  children: [
                      (0, i.jsx)(ed, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => {
                              (0, eQ.iN)(l.id), a(e);
                          },
                          collapsed: !1,
                          children: (0, i.jsxs)(_.e, {
                              size: "sm",
                              className: ei.GC,
                              children: [
                                  (0, i.jsx)(S.m, {
                                      text: el.intl.string(el.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: b.O,
                                          "aria-label": el.intl.string(el.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(S.m, {
                                      text: el.intl.string(el.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(I.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sa.a,
                                          "aria-label": el.intl.string(el.t.O3sL8F),
                                          onClick: o,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsx)(eh, {
                          type: d ? "error" : "success",
                          text: d
                              ? c
                              : el.intl.formatToPlainString(el.t["CvHu/j"], {
                                    timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                }),
                      }),
                      s
                          ? (0, i.jsx)(ez.y, { className: eU.Lq })
                          : (0, i.jsx)(
                                G.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: eU.YD,
                                    compact: eg.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: sc,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var sh = n(978313);
function sg(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: a,
        closePopout: l,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: m,
        forLaterEnabled: A,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": el.intl.string(el.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sh.k, { [sh.q]: n }),
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(sn, { tab: s, setTab: a, closePopout: l }),
                children:
                    s === u.Y2.MENTIONS
                        ? (0, i.jsx)(tt, { onJump: r })
                        : A && s === u.Y2.BOOKMARKS
                          ? (0, i.jsx)(eP, { closePopout: l })
                          : s === u.Y2.SCHEDULED
                            ? (0, i.jsx)(so, { onJump: r })
                            : (0, i.jsx)(o.tH, {
                                  fallback: (0, i.jsx)(n9, {}),
                                  children: (0, i.jsx)(n4, {
                                      onJump: r,
                                      showTutorial: d,
                                      setSeenTutorial: m,
                                      closePopout: l,
                                  }),
                              }),
            }),
        }),
    });
}
