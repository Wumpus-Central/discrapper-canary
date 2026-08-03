n.r(t), n.d(t, { default: () => sR });
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
    O = n(139286),
    k = n(259678),
    G = n(939249),
    F = n(320448),
    U = n(778712),
    w = n(97808),
    P = n(812993),
    K = n(834730),
    H = n(406810),
    z = n(397244),
    B = n(714114),
    X = n(394871),
    J = n(571694),
    Y = n(47167),
    V = n(713654),
    Z = n(598104),
    q = n(548118),
    W = n(616356),
    $ = n(734057),
    Q = n(71393),
    ee = n(290863),
    et = n(568548),
    en = n(287809),
    es = n(650583),
    ea = n(375708),
    el = n(842971);
let ei = { top: 8, bottom: 8, left: -4, right: -4 };
function er(e) {
    let { channel: t, children: n, onClick: s, collapsed: a = !1, mentionCount: l, onToggleCollapse: r, itemId: d } = e,
        o = (0, j.rm)(d);
    return (0, i.jsx)(k.vN, {
        offset: ei,
        children: (0, i.jsxs)("div", {
            className: c()(el.ZO, { [el.yZ]: a }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === es.dh.ENTER || e.key === es.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === es.dh.ARROW_RIGHT && a) || (e.key === es.dh.ARROW_LEFT && !a)) && r();
            },
            children: [
                (0, i.jsx)(G.D, {
                    className: el.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(ed, { channel: t }),
                }),
                (0, i.jsx)(F._, { className: el.ai, size: "xxs" }),
                (0, i.jsx)(ec, { channel: t, onClick: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function ed(e) {
    let { channel: t } = e,
        n = (0, p.bG)([Q.A], () => Q.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(q.Ay, { className: el.Kk, guild: n, size: q.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(Z.A, { channel: t, size: U._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(w.eu, { size: U._3.SIZE_32, src: (0, J.Y)(t), "aria-hidden": !0 });
}
function ec(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, p.bG)([Q.A], () => Q.A.getGuild(t.guild_id)),
        l = (0, Y.Ay)(t, !1),
        r = (0, p.bG)([et.Ay], () => et.Ay.getIsMentionLowImportance(t.id)),
        d = (0, V.gU)(t, a);
    return (0, i.jsxs)("div", {
        className: el.yP,
        children: [
            (0, i.jsx)(C.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: el.lz,
                children: (0, i.jsxs)(G.D, {
                    className: el.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == d ? null : (0, i.jsx)(d, { className: el.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: el.je, children: l }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: el.qS,
                                  children: (0, i.jsx)(P.hV, {
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
            (0, i.jsx)(K.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: (0, i.jsx)(eo, { channel: t, onClick: n }),
            }),
        ],
    });
}
function eo(e) {
    let { channel: t, onClick: n } = e,
        s = (0, p.bG)([Q.A], () => Q.A.getGuild(t.guild_id)),
        a = (0, p.bG)([$.A], () => $.A.getChannel(t.parent_id)),
        l = (0, Y.Ay)(a);
    if (t.isMultiUserDM())
        return (0, i.jsx)(i.Fragment, {
            children: ea.intl.formatToPlainString(ea.t.CxSA5N, { members: t.recipients.length + 1 }),
        });
    if (t.isPrivate()) return (0, i.jsx)(eu, { channel: t });
    let r = [s?.name, null != a ? l : null].filter((e) => null != e && "" !== e).join(" \u203A ");
    return "" !== r ? (0, i.jsx)(G.D, { className: c()(el.je, el.J5), onClick: n, children: r }) : null;
}
function eu(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: a,
            applicationStream: l,
        } = (0, p.cf)([en.default, ee.A, W.A], () => {
            let e = en.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ee.A.getStatus(e.id) : null,
                activities: null != e ? ee.A.getActivities(e.id) : null,
                applicationStream: null != e ? W.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, B.Ay)({ userId: n?.id });
    return (0, z.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(X.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
function eh(e) {
    let { type: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: c()(el.h5, { [el.z3]: "error" === t, [el.kX]: "success" === t, [el.qb]: "normal" === t }),
        children: [
            "error" === t ? (0, i.jsx)(S.E, { size: "xs" }) : (0, i.jsx)(H.O, { size: "xs" }),
            (0, i.jsx)(K.E, {
                variant: "text-xs/medium",
                color: "error" === t ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
var em = n(642213),
    eg = n(636922),
    eA = n(885386),
    ef = n(576705),
    ex = n(927813),
    ej = n(269073),
    ep = n(164684),
    eN = n(704456),
    eE = n(85109);
n(321073);
var eS = n(403362),
    ey = n(216623);
function eC(e) {
    switch (e) {
        case g.Yf.BOOKMARK:
            return eE.A.getMessageBookmarks();
        case g.Yf.REMINDER:
            return eE.A.getMessageReminders();
        default:
            return eE.A.getSavedMessages();
    }
}
function ev(e) {
    return eC(e).map((e) => e.saveData);
}
var eR = n(606096),
    eI = n(803306),
    e_ = n(320095),
    eM = n(963852),
    eD = n(20851),
    eL = n(889227),
    eT = n(403581),
    eb = n(192308),
    eO = n(404374),
    ek = n(611371),
    eG = n(465794),
    eF = n(428262),
    eU = n(652215),
    ew = n(202541);
n(811233);
var eP = n(864514);
function eK(e) {
    let { isReminder: t, limit: s } = e,
        a = r.useCallback(() => {
            (0, eb.openModalLazy)(async () => {
                let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                return (n) => (0, i.jsx)(e, { ...n, isReminder: t, limit: s });
            });
        }, [s, t]);
    return (0, i.jsxs)("div", {
        className: eP.Zj,
        children: [
            (0, i.jsx)(eT.t, { size: "md", color: eO.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(ek.A, { className: eP.TN }),
            (0, i.jsx)(K.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: eP.tD,
                children:
                    null == s
                        ? ea.intl.format(ea.t.qXh3fo, { nitroTierName: (0, eF.Dd)(ew.PremiumTypes.TIER_2), onClick: a })
                        : ea.intl.format(t ? ea.t.MYFohD : ea.t.FNFCVJ, {
                              nitroTierName: (0, eF.Dd)(ew.PremiumTypes.TIER_2),
                              onClick: a,
                              premiumMax: t ? 50 : 200,
                          }),
            }),
            (0, i.jsx)(eG.A, {
                size: "sm",
                subscriptionTier: ew.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eU.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eH = n(318344),
    ez = n(936037),
    eB = n(144273);
function eX(e) {
    let { type: t } = e,
        n = t === g.Yf.REMINDER,
        s = ea.intl.string(n ? ea.t.aUXxzT : ea.t["2pAkDA"]);
    return (0, ej.lA)("ForLaterIntro")
        ? (0, i.jsx)("div", {
              className: eH.kL,
              children: (0, i.jsxs)("div", {
                  className: eH.vW,
                  children: [
                      (0, i.jsx)("img", { src: ez, className: eH.Tn, alt: s }),
                      (0, i.jsx)(C.D, {
                          className: eH.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(n ? ea.t["5Iw19e"] : ea.t["93WOd1"]),
                      }),
                      (0, i.jsx)("div", {
                          className: eH.rf,
                          children: (0, i.jsx)(K.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.format(n ? ea.t["E+qms7"] : ea.t.legvTg, {
                                  itemName: ea.intl.string(n ? ea.t.mJ3P0N : ea.t.tpxJto),
                              }),
                          }),
                      }),
                      (0, i.jsx)(eJ, { isReminder: n }),
                  ],
              }),
          })
        : (0, i.jsx)("div", {
              className: eH.kL,
              children: (0, i.jsxs)("div", {
                  className: eH.vW,
                  children: [
                      (0, i.jsx)("img", { src: ez, className: eH.Tn, alt: s }),
                      (0, i.jsx)(C.D, {
                          className: eH.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ea.intl.string(ea.t.w4DRbZ),
                      }),
                      (0, i.jsx)("div", {
                          className: eH.rf,
                          children: (0, i.jsx)(K.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ea.intl.string(ea.t.F6u3E3),
                          }),
                      }),
                      (0, i.jsx)(eK, { isReminder: n }),
                  ],
              }),
          });
}
function eJ(e) {
    let { isReminder: t } = e,
        n = r.useMemo(() => {
            let e = new eL.A({ id: "313338", username: ea.intl.string(ea.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eI.insertStaticUser(e);
            return (
                null != t && (t.getAvatarURL = () => eB.A),
                [ea.intl.string(ea.t["h+KPxy"]), ea.intl.string(ea.t["63EVpI"]), ea.intl.string(ea.t["KT/TDX"])].map(
                    (n, s) => {
                        let a = (0, e_.rh)({
                            ...(0, eM.Ay)({ channelId: "1338", content: n }),
                            state: eU.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return (a.author = t ?? e), a;
                    },
                )
            );
        }, []);
    return (0, i.jsx)("div", {
        className: eH.qJ,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: eH.DZ,
            children: n.map((e, n) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(eD.A, {
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
                                      className: eH.MK,
                                      children: [
                                          (0, i.jsx)(eY, {
                                              icon: eR.c,
                                              label: ea.intl.string(ea.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, i.jsx)(eY, {
                                              icon: H.O,
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
function eY(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, i.jsxs)("div", {
        className: c()(eH.KT, { [eH.$Y]: s }),
        children: [
            (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(K.E, { variant: "text-sm/medium", color: "text-default", children: n }),
        ],
    });
}
function eV(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: a } = (0, eN.Ce)({ dueAt: t?.saveData.dueAt, now: n, type: eN.kh.SHORT });
    return null == t.saveData.dueAt || null == s ? null : (0, i.jsx)(eh, { type: a ? "error" : "normal", text: s });
}
var eZ = n(318061),
    eq = n(824385);
let eW = "ForLaterPopout",
    e$ = "Bookmarks",
    eQ = "Reminders";
function e0(e) {
    let { closePopout: t, type: n } = e,
        s = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.Yf.ALL,
                [t, n] = r.useState(() => ev(e)),
                s = r.useRef(eE.A.getIsStale());
            return (
                r.useEffect(() => {
                    let t = eE.A.getLastChanged();
                    function a() {
                        let a = eE.A.getLastChanged();
                        if (t !== a) {
                            if (((t = a), s.current && !eE.A.getIsStale())) {
                                (s.current = !1), n(ev(e));
                                return;
                            }
                            n((t) => {
                                let n = [...t],
                                    s = new Map(eC(e).map((e) => [e.saveData.messageId, e]));
                                for (let e of t) s.has(e.messageId) ? s.delete(e.messageId) : n.splice(n.indexOf(e), 1);
                                for (let e of s.values()) n.push(e.saveData);
                                return n;
                            });
                        }
                    }
                    return (
                        eE.A.addChangeListener(a),
                        () => {
                            eE.A.removeChangeListener(a);
                        }
                    );
                }, [e]),
                r.useEffect(() => {
                    (0, ey.AX)();
                }, []),
                (0, p.yK)([eE.A], () => t.map((e) => eE.A.getSavedMessage(e.channelId, e.messageId)).filter(eS.Vq))
            );
        })(n),
        a = n === g.Yf.REMINDER,
        l = (0, ej.oG)(eW, a),
        d = (0, ej.dR)(eW) && l > 0 && s.length >= l;
    (0, O.A)(
        {
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: { total_count: s.length, overdue_count: eE.A.getOverdueMessageReminderCount() },
        },
        {},
        [s.length],
    );
    let c = r.useRef(null),
        o = (0, b.A)("for-later", c);
    (0, em.xN)(c), (0, em.yW)(n === g.Yf.BOOKMARK ? e$ : eQ);
    let [u, h] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => h(new Date()), ex.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, i.jsx)(eX, { type: n })
        : (0, i.jsxs)("div", {
              className: eZ.MY,
              children: [
                  (0, i.jsx)(j.hD, {
                      navigator: o,
                      children: (0, i.jsx)(j.PR, {
                          children: (e) => {
                              let { ref: n, ...a } = e;
                              return (0, i.jsx)(E.Ch, {
                                  ref: (e) => {
                                      (c.current = e), (n.current = e?.getScrollerNode() ?? null);
                                  },
                                  className: eq.XG,
                                  ...a,
                                  children: s.map((e) =>
                                      (0, i.jsx)(
                                          e1,
                                          { savedMessage: e, closePopout: t, throttledNow: u },
                                          e.saveData.messageId,
                                      ),
                                  ),
                              });
                          },
                      }),
                  }),
                  d
                      ? (0, i.jsx)("div", { className: eZ.fH, children: (0, i.jsx)(eK, { isReminder: a, limit: l }) })
                      : null,
              ],
          });
}
function e1(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, eN.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, eN.le)(t, a),
                    e.shiftKey || n(),
                    T.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? eQ : e$);
            },
            [n, t, a],
        ),
        d = (0, p.bG)(
            [ef.A],
            () => !!(a?.type === eU.rbe.UNKNOWN || a?.isPrivate()) || ef.A.can(eU.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eq.aP,
              children: [
                  (0, i.jsx)(er, {
                      itemId: `header-${t.message.id}`,
                      channel: a,
                      onClick: (e) => {
                          l(e), n();
                      },
                      collapsed: !1,
                      children: (0, i.jsx)(v.e, {
                          size: "sm",
                          className: el.GC,
                          children: (0, i.jsx)(e2, { savedMessage: t, jumpToMessage: l, throttledNow: s }),
                      }),
                  }),
                  null != t.saveData.dueAt ? (0, i.jsx)(eV, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(
                      eg.A,
                      {
                          message: t.message,
                          channel: a,
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
        : (0, i.jsxs)("div", {
              className: c()(eq.aP, eZ.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: eZ.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: eZ.Bx,
                              children: (0, i.jsx)(S.E, { size: "xxs", color: y.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                          }),
                          (0, i.jsx)(C.D, {
                              variant: "text-md/semibold",
                              color: "text-default",
                              children:
                                  null != t.saveData.dueAt
                                      ? ea.intl.string(ea.t["wuQm+j"])
                                      : ea.intl.string(ea.t.o572Fe),
                          }),
                      ],
                  }),
                  (0, i.jsx)(v.e, {
                      size: "sm",
                      className: el.GC,
                      children: (0, i.jsx)(N.m, {
                          text: ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                          ariaHidden: !0,
                          children: (0, i.jsx)(R.K, {
                              variant: "secondary",
                              "aria-label": ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
                              size: "sm",
                              icon: I.P,
                              onClick: () => (0, ep.x)(t.saveData),
                          }),
                      }),
                  }),
              ],
          });
}
function e2(e) {
    let { savedMessage: t, jumpToMessage: s, throttledNow: a } = e;
    f()(null != t.message, "Saved message must be cached for For Later action buttons");
    let l = ea.intl.string(null != t.saveData.dueAt ? ea.t["a6gcZ/"] : ea.t.SvXS1Z),
        r = null != t.saveData.dueAt && a > t.saveData.dueAt,
        d = ea.intl.string(r ? ea.t.GtBCnz : ea.t.vrbqs1);
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
                                          label: ea.intl.string(r ? ea.t.GtBCnz : ea.t.roMu1H),
                                          message: t.message,
                                      });
                              }),
                      }),
                  })
                : null,
            (0, i.jsx)(N.m, {
                text: ea.intl.string(ea.t["+TSRGD"]),
                ariaHidden: !0,
                children: (0, i.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["+TSRGD"]),
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
                    onClick: () => (0, ep.x)(t.saveData),
                }),
            }),
        ],
    });
}
var e3 = n(702841),
    e8 = n(912592),
    e7 = n(890856),
    e6 = n(761508),
    e4 = n(910425),
    e5 = n(214947),
    e9 = n(711950),
    te = n(322387),
    tt = n(912309),
    tn = n(174459),
    ts = n(109261);
function ta(e) {
    let { closePopout: t } = e,
        n = (0, tt.kX)();
    return (0, i.jsx)(N.m, {
        asContainer: !0,
        text: ea.intl.string(ea.t["lMR96+"]),
        children: (0, i.jsxs)(G.D, {
            "aria-label": `${ea.intl.string(ea.t["lMR96+"])}, ${n}`,
            className: ts.b,
            onClick: () => {
                tn.default.track(eU.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: te.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    e9.A.transitionToSection(eU.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(e5.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(P.hV, { count: n, color: y.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var tl = n(980707),
    ti = n(477782),
    tr = n(922016),
    td = n(783977),
    tc = n(378939),
    to = n(309010),
    tu = n(409686);
function th(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, p.bG)([$.A, to.Ay], () => $.A.getChannel(to.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, p.cf)([tu.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tu.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(tl.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ea.intl.string(ea.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(ti.sL, {
                id: "Everyone",
                label: ea.intl.string(ea.t.cdyUsV),
                action: function () {
                    tc.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(ti.sL, {
                id: "Roles",
                label: ea.intl.string(ea.t.lZejCq),
                action: function () {
                    tc.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(ti.sL, {
                      id: "All Servers",
                      label: ea.intl.string(ea.t.GWMA6s),
                      action: function () {
                          tc.A.setGuildFilter({
                              guildFilter: r === eU.KE7.THIS_SERVER ? eU.KE7.ALL_SERVERS : eU.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eU.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tm() {
    let e = r.useRef(null);
    return (0, i.jsx)(tr.Y, {
        targetElementRef: e,
        align: "right",
        animation: tr.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(th, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(N.m, {
                text: ea.intl.string(ea.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(R.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t.pEasFX),
                    icon: td.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tg = n(481613),
    tA = n.n(tg),
    tf = n(621466),
    tx = n(289873),
    tj = n(821609),
    tp = n(228366),
    tN = n(964486),
    tE = n(775602),
    tS = n(625494),
    ty = n(723702),
    tC = n(303727),
    tv = n(495427);
function tR(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: tv.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tv.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tv.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(tC.A, { className: tv.uf }),
                ],
            }),
            (0, i.jsx)(C.D, { className: tv.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(K.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(K.E, {
                              tag: "span",
                              className: tv.PP,
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
var tI = n(862482),
    t_ = n(143838),
    tM = n(640238);
function tD(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function a() {
        t(),
            tn.default.track(eU.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tL, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(N.m, {
                text: ea.intl.string(ea.t["8k+6QY"]),
                children: (0, i.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                    size: "sm",
                    icon: t_.i,
                    onClick: function (e) {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tL(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tM.M, {
        dismissable: !0,
        header: ea.intl.string(ea.t.h4bVZ2),
        confirmText: ea.intl.string(ea.t.e6RscS),
        cancelText: ea.intl.string(ea.t["ETE/oC"]),
        confirmButtonColor: tI.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(K.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["0MQ0Bf"]),
        }),
    });
}
var tT = n(435558),
    tb = n.n(tT),
    tO = n(749314),
    tk = n(534740),
    tG = n(311283),
    tF = n(717421),
    tU = n(933832),
    tw = n(334738),
    tP = n(95561),
    tK = n(976860),
    tH = n(847374),
    tz = n(345550);
function tB(e) {
    let { collapsed: t, onClick: n } = e,
        s = ea.intl.string(t ? ea.t.dcl9MQ : ea.t.iTcuma);
    return (0, i.jsx)(N.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(G.D, {
            className: tz.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tH.a, { className: c()(tz.ai, { [tz.yZ]: t }), size: "xs" }),
        }),
    });
}
var tX = n(775924);
let tJ = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tY = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tV(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tF.z)(() => (t ? tJ : tY), "respect-motion-settings", []),
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
                          immediate: tE.Ay.useReducedMotion,
                      })
                    : l({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tE.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && l({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, l]),
        (0, i.jsx)(tk.animated.div, {
            className: tX.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tZ = n(782603),
    tq = n(461678),
    tW = n(914703);
function t$(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(tr.Y, {
        targetElementRef: n,
        align: "right",
        animation: tr.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tW.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                  })
                : (0, i.jsx)(tq.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ea.intl.string(ea.t.ljs3Oe),
                      location: { section: eU.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(N.m, {
                text: ea.intl.string(ea.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(R.K, {
                    "aria-label": ea.intl.string(ea.t.h850Ss),
                    icon: tZ.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tQ = n(350527),
    t0 = n(218152),
    t1 = n(970278),
    t2 = n(747926),
    t3 = n(935208),
    t8 = n(37411),
    t7 = n(159574);
function t6(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, p.yK)(
            [t1.A, $.A],
            () =>
                tb()(t1.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return t3.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return $.A.getChannel(t);
                    })
                    .filter(eS.Vq)
                    .sort((e, t) => t3.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, t2.JA)(e, t, t8.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                tp.h.wait(() => {
                    (0, tw.ack)(
                        t.channelId,
                        {
                            section: eU.JJy.INBOX,
                            object: eU.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eU.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: t7.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    t0.Cp,
                    { channel: n, children: (0, i.jsx)(tQ.Ay, { className: t7.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var t4 = n(989349),
    t5 = n.n(t4),
    t9 = n(123292),
    ne = n(857069),
    nt = n(33358),
    nn = n(384231),
    ns = n(207133),
    na = n(704413),
    nl = n(9842),
    ni = n(994500),
    nr = n(5095),
    nd = n(143413),
    nc = n(763754),
    no = n(467073),
    nu = n(491182),
    nh = n(860227),
    nm = n(655758),
    ng = n(375199),
    nA = n(824556),
    nf = n(715628),
    nx = n(752636),
    nj = n(352043),
    np = n(268719),
    nN = n(234957),
    nE = n(888675),
    nS = n(466959),
    ny = n(364932);
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
        m = eU.sl8.has(a.type) ? a.messageReference : void 0,
        g = (0, p.bG)([nl.A], () => nl.A.getMessageByReference(m)),
        A = (0, p.bG)([$.A], () =>
            a.type === eU.lAJ.THREAD_STARTER_MESSAGE && g.state === nl.a.LOADED
                ? $.A.getChannel(g.message.channel_id)
                : null,
        ),
        f = eA.X6.useSetting(),
        x = eA.hD.useSetting(),
        j = eA.rs.useSetting(),
        N = eA.kt.useSetting(),
        E = (0, nn.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        S = (0, ns.A)(s?.id),
        { disableReactionCreates: y } = (0, no.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: v,
            hasBailedAst: R,
        } = (0, ng.A)(a, {
            hideSimpleEmbedContent: x && j,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, nc.Ay)(a),
        _ = (0, p.bG)(
            [$.A],
            () => a.hasFlag(eU.pr7.HAS_THREAD) && $.A.getChannel(t3.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === eU.lAJ.THREAD_STARTER_MESSAGE && g.state === nl.a.LOADED && null != A,
        D = !M && void 0 === n,
        L = (0, nA.A)({ message: a, channel: s, announcementEnabled: D }),
        T = (0, nt.P)(a),
        b = (0, nr._f)(a.id, a.channel_id),
        O = (0, na.A)(a),
        k = (0, nh.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: g.message, channel: A, hasThread: !1 })
        : (ni.A.isBlockedForMessage(a) ? (n = ea.t["+FcYM/"]) : ni.A.isIgnoredForMessage(a) && (n = ea.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(nv, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(nu.A, {
                compact: l,
                className: c()(r, { [ny.M1]: (0, e_.ec)(a), [ny.XN]: u, [ny._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nN.A)(a, s, m, g, l),
                childrenHeader: (0, nx.A)({ ...t, author: I, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nm.iV, {
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
                childrenExecutedCommand: (0, np.A)(a, s, l),
                childrenMessageContent: (0, nf.A)(t, C),
                childrenSystemMessage: (0, nj.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != _ && a.hasFlag(eU.pr7.HAS_THREAD),
                hasReply: a.type === eU.lAJ.REPLY,
                isSystemMessage: (0, nd.A)(a),
                messageRef: L,
                author: I,
                "aria-labelledby": k,
                "aria-roledescription": ea.intl.string(ea.t.BAB0yK),
            });
});
function nv(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(nu.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nE.A, {
            compact: s,
            className: nS.L9,
            iconNode: (0, i.jsx)(I.P, { size: "md", color: "currentColor", className: nS.Q6 }),
            children: (0, i.jsx)("div", { className: nS.Fo, children: ea.intl.format(a, { count: n }) }),
        }),
    });
}
var nR = n(58703),
    nI = n(195172);
function n_(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(G.D, {
        className: c()(nI.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(tx.y, { type: tx.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(K.E, { variant: "text-xs/medium", className: nI.Q, children: ea.intl.string(ea.t.k5WiPf) }),
    });
}
var nM = n(143236),
    nD = n(323073),
    nL = n(181079),
    nT = n(567035),
    nb = n(202803),
    nO = n(455234),
    nk = n(695633),
    nG = n(152007),
    nF = n(607508),
    nU = n(594061),
    nw = n(617617),
    nP = n(95701),
    nK = n(808728),
    nH = n(232835),
    nz = n(711014),
    nB = n(543465),
    nX =
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
    nJ = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nY extends nM.EventEmitter {
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
                let t = nV(e, !1);
                if (t.messages.some(nb.$r)) return T.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t1.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, eS.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nV(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        tp.h.wait(() =>
            tw.ack(
                t,
                {
                    section: eU.JJy.INBOX,
                    object: eU.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eU.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              tE.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tw.ack(
            e.channelId,
            { section: eU.JJy.INBOX, object: eU.ZSU.UNDO_MARK_AS_READ, objectType: eU.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        tp.h.wait(() => (0, nT.A)([e], eU.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tb().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tw.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = tb().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (a[t] = d),
            (0, nU.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nU.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !nB.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nG.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t1.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        T.A.clearChannel(e.channelId);
        let t = T.A.fetchMessages({
            channelId: e.channelId,
            limit: eU.EMb,
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
                            let n = nV(e, !0);
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
                                    ...nV(e, !0),
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
function nV(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nH.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    t3.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= t3.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = t3.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function nZ() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nw.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let a = $.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            $.A.getSortedPrivateChannels().forEach((n) => nq(e, t, null, n.id)),
            nz.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nK.Ay.getSelectableChannelIds(n),
                    a = nk.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nq(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) nq(e, t, n, s);
                });
            }),
            tb().sortBy(t, (e) => e.sortOrder)),
        a = tb()
            .uniq(s.map((e) => e.guildId))
            .filter(eS.Vq);
    return (
        tp.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nq(e, t, n, s) {
    if (null == s) return;
    let a = $.A.getChannel(s);
    if (null == a || (!nP.Le.has(a.type) && nB.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === et.Ay.getMentionCount(s)) return;
    } else if (!(0, nO.Y)(a) && 0 === et.Ay.getMentionCount(s)) return;
    if (!a.isPrivate() && !ef.A.can(eU.xBc.READ_MESSAGE_HISTORY, a)) return;
    let l = et.Ay.ackMessageId(s);
    if (null == l) {
        let e = Q.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = t3.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = et.Ay.getOldestUnreadMessageId(s),
        r = et.Ay.lastMessageId(s),
        d = et.Ay.getMentionCount(s),
        c = d > 0 || a.isPrivate();
    if (null == r || t3.default.compare(l, r) >= 0) return;
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
            let s = $.A.getChannel(t);
            if (nL.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (et.Ay.getMentionCount(t) > 0) return et.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t3.default.extractTimestamp(n);
                if (Date.now() - e > n$) return 8;
                if (Date.now() - e > nW) return 6;
            }
            if (s.isThread()) {
                let e = (0, nF.l)(s);
                return e === t8.CP.ALL_MESSAGES ? 4 : e === t8.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nB.Ay.getChannelMessageNotifications(e, t),
                    s = n === eU.orn.NULL ? nB.Ay.getMessageNotifications(e) : n;
                return s === eU.orn.ALL_MESSAGES ? 4 : s === eU.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nD.qR)(a)
        ? t.push({ ...o, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nW = 2 * ex.A.Millis.DAY,
    n$ = 10 * ex.A.Millis.DAY;
var nQ = n(358402);
let n0 = { left: 4, right: -12 },
    n1 = [eU.lAJ.THREAD_CREATED];
function n2(e) {
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
        o = n1.includes(n.type);
    return (0, i.jsx)(k.vN, {
        offset: n0,
        children: (0, i.jsxs)("div", {
            className: nQ.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(n_, { className: nQ.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(nC, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nQ.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                }),
            ],
        }),
    });
}
function n3(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        a = eA.hH.useSetting(),
        l = 0 === t.messages.length || t5()(t.messages[0].timestamp).isSame(t5()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nR.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tO.A, { className: nQ.yF, children: t }, t)), (d = t5()(e.timestamp));
        }
        let t = null == c || (0, ne.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(n2, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t3.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nQ.Gr,
                        children: (0, i.jsx)(t9.Q, {
                            variant: "primary",
                            text: `${ea.intl.string(ea.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(tx.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nQ.DZ, children: r })
    );
}
let n8 = r.memo(function (e) {
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
            children: (0, i.jsx)(n7, { ...e }),
        });
    }),
    n7 = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, p.bG)([$.A], () => $.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    tp.h.wait(() => {
                        (0, tw.ack)(
                            t.channelId,
                            {
                                section: eU.JJy.INBOX,
                                object: eU.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eU.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            if ("forum" === t.type) (0, em.n4)(t.channelId, t.guildId, n9, () => n(e));
            else {
                let a = s ?? t.oldestUnreadMessageId;
                T.A.trackJump(t.channelId, a, n9), (0, tK.pX)(eU.BVt.CHANNEL(t.guildId, t.channelId, a)), n(e);
            }
        }
        function c() {
            a(t),
                (0, tP.zV)(eU.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, i.jsx)("div", {
            className: eq.aP,
            children: (0, i.jsx)(m.F, {
                component: (0, i.jsxs)(er, {
                    channel: l,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: "nsfw" !== t.type ? c : void 0,
                    itemId: `header-${l.id}`,
                    children: [
                        (0, i.jsxs)(v.e, {
                            size: "sm",
                            className: el.GC,
                            children: [(0, i.jsx)(t$, { channel: l }), (0, i.jsx)(n6, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, i.jsx)(tB, { collapsed: t.collapsed, onClick: c })
                            : (0, i.jsx)("div", { className: el.Pt }),
                    ],
                }),
                children: (0, i.jsx)(tV, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(n3, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(t6, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function n6(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, tG.A)() && null != t.guildId;
    return (0, i.jsx)(N.m, {
        text: l ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(R.K, {
            variant: "secondary",
            "aria-label": l ? ea.intl.string(ea.t["5lLMhM"]) : ea.intl.string(ea.t.e6RscS),
            size: "sm",
            icon: l ? t_.i : tU.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tP.zV)(eU.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var n4 = n(245233),
    n5 = n(552392);
let n9 = "Inbox";
function se(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = r.useRef(null),
        A = (0, b.A)("unreads", g);
    (0, em.xN)(g), (0, em.yW)(n9);
    let [f, x] = (function (e) {
            let [t, n] = r.useState(() => new nY(nZ(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
                [i, d] = r.useState(() => nZ());
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
                        r = nZ();
                    0 === r.channels.length || t - l.current < 10 * ex.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nY(r, e)));
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
                        nB.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nB.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nG.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nG.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        t1.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t1.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(g),
        { loadState: N, channels: S } = f,
        { maybeLoadMore: y } = x,
        C = (0, p.bG)([tE.Ay], () => tE.Ay.messageGroupSpacing);
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
            tS._.subscribe(eU.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tS._.unsubscribe(eU.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [l, a.channels]),
    (d = x),
    r.useEffect(() => {
        function e(e) {
            if ((0, eb.hasAnyModalOpen)()) return;
            let t = (0, tf.BF)(e)?.activeElement;
            (0, tf.Cw)(t) ||
                (((0, ty.isMac)() || (0, ty.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            tp.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tp.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, tN.Ay)(
        () => (
            tS._.subscribe(eU.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead),
            () => {
                tS._.unsubscribe(eU.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead);
            }
        ),
    ),
    0 === S.length)
        ? (0, i.jsx)(tR, {
              Icon: e8.K,
              header: ea.intl.string(ea.t["6XMM+D"]),
              tip: tA().os?.family === "OS X" ? ea.intl.string(ea.t.w9uDOW) : ea.intl.string(ea.t.BiUJC6),
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
                          onScroll: N === nJ.Done ? void 0 : y,
                          className: c()(eq.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(st, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: a,
                                          deleteChannel: l,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tb().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nX.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tO.A,
                                                            {
                                                                className: n4.y,
                                                                contentClassName: n4.$,
                                                                children: ea.intl.string(ea.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nX.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tO.A,
                                                            {
                                                                className: n4.y,
                                                                contentClassName: n4.$,
                                                                children: ea.intl.string(ea.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  n8,
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
                              N === nJ.Done ? null : (0, i.jsx)(tx.y, { className: n5.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function st(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: n5.d$,
        children: [
            (0, i.jsx)("div", { className: n5.cm, children: (0, i.jsx)(e8.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(C.D, {
                        className: n5.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: ea.intl.string(ea.t.vZPktJ),
                    }),
                    (0, i.jsx)(K.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: ea.intl.string(ea.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: n5.dh,
                        children: (0, i.jsx)(tj.$, {
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
function sn() {
    return (0, i.jsx)(tR, {
        Icon: e8.K,
        disableStars: !0,
        header: ea.intl.string(ea.t["KG/ynf"]),
        tip: ea.intl.string(ea.t.cvcKzX),
    });
}
function ss() {
    return (0, i.jsx)(tD, { onClick: () => tS._.dispatch(eU.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sa = n(668451);
function sl(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        a = (0, ej.jv)("RecentsPopout"),
        l = (0, e4.Sc)(),
        r = (0, e3.bG)([eE.A], () => eE.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: sa.wx,
        children: [
            (0, i.jsxs)("div", {
                className: sa.qd,
                children: [
                    (0, i.jsx)(e8.K, { size: "md", color: "currentColor", className: sa.yH }),
                    (0, i.jsx)(C.D, {
                        className: sa.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ea.intl.string(ea.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(e7.s, {
                        className: sa.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ea.intl.string(ea.t["8k+6QY"]),
                        children: [(0, i.jsx)(si, { tab: t }), (0, i.jsx)(ta, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: sa.YF,
                children: (0, i.jsxs)(e6.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sa.$H,
                    children: [
                        (0, i.jsx)(e6.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": ea.intl.string(ea.t.sRUdB8),
                            className: sa.Mf,
                            children: (0, i.jsx)("span", { className: sa.Gn, children: ea.intl.string(ea.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(e6.V.Item, {
                            "aria-label": ea.intl.string(ea.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: sa.Mf,
                            children: (0, i.jsx)("span", { className: sa.Gn, children: ea.intl.string(ea.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(e6.V.Item, {
                                  "aria-label": ea.intl.string(ea.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: sa.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sa.Gn,
                                      children: ea.intl.string(ea.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        a
                            ? (0, i.jsx)(e6.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.aUXxzT),
                                  id: u.Y2.REMINDERS,
                                  className: sa.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sa.Gn,
                                      children:
                                          0 === r
                                              ? ea.intl.string(ea.t.aUXxzT)
                                              : ea.intl.formatToPlainString(ea.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(e6.V.Item, {
                                  "aria-label": ea.intl.string(ea.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: sa.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sa.Gn,
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
function si(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(ss, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tm, {}) : null;
}
var sr = n(935063),
    sd = n(475743),
    sc = n(517019),
    so = n(919755);
let su = { offset: { left: 4, right: -12 } },
    sh = "Recent Mentions";
function sm(e, t) {
    tc.A.fetchRecentMentions({
        before: t,
        limit: eU.Ue3,
        guildId: null != e && tu.Ay.guildFilter !== eU.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tu.Ay.roleFilter,
        everyone: tu.Ay.everyoneFilter,
    });
}
function sg(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, b.A)("recents", n);
    (0, em.xN)(n), (0, em.yW)(sh);
    let a = (0, p.bG)([$.A, to.Ay], () => $.A.getChannel(to.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, p.cf)([tu.Ay], () => ({
            messages: tu.Ay.getMentions(),
            hasMore: tu.Ay.hasMore,
            loading: tu.Ay.loading,
            guildFilter: tu.Ay.guildFilter,
            roleFilter: tu.Ay.roleFilter,
            everyoneFilter: tu.Ay.everyoneFilter,
        })),
        m = (0, sd.Ay)(o),
        g = (0, sd.Ay)(u),
        A = (0, sd.Ay)(h);
    r.useEffect(() => {
        tu.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != A && h !== A)) && sm(a)
            : sm(a);
    }, [m, o, g, u, A, h, a]),
        (0, tN.Ay)(() => {
            l?.some(nb.$r) && (tc.A.clearMentions(), sm(a));
        }),
        (0, tN.l0)(() => {
            tc.A.truncateMentions(eU.Ue3);
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sm(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: eq.Lq, children: (0, i.jsx)(tx.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tR, { Icon: sr.X, header: ea.intl.string(ea.t.bgDz74), tip: ea.intl.string(ea.t.NS15vk) })
          : (0, i.jsx)(j.hD, {
                navigator: s,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(E.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eq.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                l.map((e) => (0, i.jsx)(sA, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eq.Lq, children: (0, i.jsx)(tx.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: so.u,
                                            children: (0, i.jsx)(tj.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ea.intl.string(ea.t.XBlaiC),
                                                onClick: () =>
                                                    sm(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sA(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = $.A.getChannel(t.channel_id);
    if (null == s || (0, nD.Jm)(s) || (0, nD.$v)(s)) return null;
    let a = sc.A.didAgree(s.getGuildId()),
        l = !!(0, nD.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: eq.aP,
        children: [
            (0, i.jsx)(er, {
                channel: s,
                onClick: (e) => (0, em.KW)(t, sh, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(v.e, {
                    size: "sm",
                    className: el.GC,
                    children: [
                        (0, i.jsx)(N.m, {
                            text: ea.intl.string(ea.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(R.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t["+TSRGD"]),
                                size: "sm",
                                icon: D.t,
                                onClick: (e) => (0, em.KW)(t, sh, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(N.m, {
                            text: ea.intl.string(ea.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(R.K, {
                                variant: "secondary",
                                "aria-label": ea.intl.string(ea.t.e6RscS),
                                size: "sm",
                                icon: tU.A,
                                onClick: () => tc.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    eg.A,
                    {
                        message: t,
                        channel: s,
                        className: eq.YD,
                        hideAccessories: l,
                        compact: eA.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: su,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sf = n(285796),
    sx = n(151282),
    sj = n(199160),
    sp =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    sN = n(970244);
let sE = "Scheduled Messages",
    sS = { offset: { left: 4, right: -12 } };
function sy(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, sx.sy)();
    }, []);
    let n = (0, p.bG)([sj.A], () => sj.A.getScheduledMessagesForInbox()),
        s = (0, p.bG)([sj.A], () => sj.A.loading),
        a = (0, p.bG)([sj.A], () => sj.A.getMessagesPendingDeletion()),
        l = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, b.A)("scheduled-messages", d);
    return ((0, em.xN)(d), (0, em.yW)(sE), s)
        ? (0, i.jsx)("div", { className: eq.Lq, children: (0, i.jsx)(tx.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tR, { Icon: H.O, header: ea.intl.string(ea.t.aJQZfZ), tip: ea.intl.string(ea.t.rCN4pN) })
          : (0, i.jsx)(j.hD, {
                navigator: c,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(E.Ch, {
                            className: eq.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    sC,
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
let sC = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, p.bG)([$.A], () => $.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sp.SCHEDULED:
                    return { isError: !1, stateMessage: ea.intl.string(ea.t.Fn6Odn) };
                case sp.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.v5O2dK) };
                case sp.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.j8uIfG) };
                case sp.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t["w6zHX/"]) };
                case sp.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.pflV7z) };
                case sp.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: ea.intl.string(ea.t.j8uIfG) };
                default:
                    (0, eS.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, sx.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sN.Re)();
                })
                .catch((e) => {
                    (0, sN.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sN.CI)({ scheduledMessage: t });
        }, [t]);
    return null == l
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: eq.aP,
                  children: [
                      (0, i.jsx)(er, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => (0, em.n4)(l.id, l.guild_id, sE, () => a(e)),
                          collapsed: !1,
                          children: (0, i.jsxs)(v.e, {
                              size: "sm",
                              className: el.GC,
                              children: [
                                  (0, i.jsx)(N.m, {
                                      text: ea.intl.string(ea.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: H.O,
                                          "aria-label": ea.intl.string(ea.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(N.m, {
                                      text: ea.intl.string(ea.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(R.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: sf.a,
                                          "aria-label": ea.intl.string(ea.t.O3sL8F),
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
                              : ea.intl.formatToPlainString(ea.t["CvHu/j"], {
                                    timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                }),
                      }),
                      s
                          ? (0, i.jsx)(tx.y, { className: eq.Lq })
                          : (0, i.jsx)(
                                eg.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: eq.YD,
                                    compact: eA.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: sS,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var sv = n(655165);
function sR(e) {
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
        "aria-label": ea.intl.string(ea.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sv.k, { [sv.q]: n }),
            children: (0, i.jsx)(o.tH, {
                fallback: (0, i.jsx)(sn, {}),
                children: (0, i.jsx)(m.F, {
                    component: (0, i.jsx)(sl, { tab: s, setTab: a, closePopout: l }),
                    children:
                        s === u.Y2.MENTIONS
                            ? (0, i.jsx)(sg, { onJump: r })
                            : f && s === u.Y2.BOOKMARKS
                              ? (0, i.jsx)(e0, { closePopout: l, type: g.Yf.BOOKMARK }, "bookmarks")
                              : f && s === u.Y2.REMINDERS
                                ? (0, i.jsx)(e0, { closePopout: l, type: g.Yf.REMINDER }, "reminders")
                                : s === u.Y2.SCHEDULED
                                  ? (0, i.jsx)(sy, { onJump: r })
                                  : (0, i.jsx)(se, { onJump: r, showTutorial: d, setSeenTutorial: A, closePopout: l }),
                }),
            }),
        }),
    });
}
