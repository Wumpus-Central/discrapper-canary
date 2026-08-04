n.r(t), n.d(t, { default: () => sM });
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
    b = n(148494),
    O = n(928039),
    T = n(793574),
    k = n(688810),
    G = n(139286),
    F = n(259678),
    U = n(939249),
    w = n(320448),
    P = n(778712),
    K = n(97808),
    H = n(812993),
    z = n(834730),
    B = n(406810),
    X = n(397244),
    J = n(714114),
    Y = n(394871),
    V = n(571694),
    Z = n(47167),
    W = n(713654),
    q = n(598104),
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
                (0, i.jsx)(w._, { className: er.ai, size: "xxs" }),
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
          ? (0, i.jsx)(q.A, { channel: t, size: P._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(K.eu, { size: P._3.SIZE_32, src: (0, V.Y)(t), "aria-hidden": !0 });
}
function eu(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        a = (0, p.bG)([et.A], () => et.A.getGuild(t.guild_id)),
        l = (0, Z.Ay)(t, !1),
        r = (0, p.bG)([es.Ay], () => es.Ay.getIsMentionLowImportance(t.id)),
        d = (0, W.gU)(t, a);
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
    eb = n(20851),
    eO = n(889227),
    eT = n(403581),
    ek = n(192308),
    eG = n(738188),
    eF = n(404374),
    eU = n(611371),
    ew = n(465794),
    eP = n(158045),
    eK = n(652215),
    eH = n(202541);
n(811233);
var ez = n(864514);
function eB(e) {
    var t, s, a, l;
    let d,
        { isReminder: c, limit: o, isAtLimit: u = !1 } = e,
        { analyticsLocations: h } = (0, k.Ay)(),
        m = r.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                return (t) => (0, i.jsx)(e, { ...t, isReminder: c, limit: o, analyticsLocations: h });
            });
        }, [o, c, h]);
    return (0, i.jsxs)("div", {
        className: ez.Zj,
        children: [
            u
                ? (0, i.jsx)(eG.i, { size: "md", color: "currentColor", className: ez.QW })
                : (0, i.jsx)(eT.t, { size: "md", color: eF.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(eU.A, { className: ez.TN }),
            (0, i.jsx)(z.E, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: ez.tD,
                children:
                    ((t = c),
                    (s = o),
                    (a = u),
                    (l = m),
                    (d = (0, eP.Dd)(eH.PremiumTypes.TIER_2)),
                    null == s
                        ? ei.intl.format(ei.t.qXh3fo, { nitroTierName: d, onClick: l })
                        : a
                          ? ei.intl.format(t ? ei.t.MYFohD : ei.t.FNFCVJ, {
                                nitroTierName: d,
                                onClick: l,
                                premiumMax: t ? 50 : 200,
                            })
                          : ei.intl.formatToPlainString(t ? ei.t["W+ZaoS"] : ei.t["0hoV2D"], { nitroTierName: d })),
            }),
            (0, i.jsx)(ew.A, {
                size: "sm",
                variantOverride: u ? void 0 : "primary",
                subscriptionTier: eH.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: eK.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
var eX = n(318344),
    eJ = n(936037),
    eY = n(144273);
function eV(e) {
    let { type: t } = e,
        n = t === g.Yf.REMINDER,
        s = ei.intl.string(n ? ei.t.aUXxzT : ei.t["2pAkDA"]);
    return (0, eN.lA)("ForLaterIntro")
        ? (0, i.jsx)("div", {
              className: eX.kL,
              children: (0, i.jsxs)("div", {
                  className: eX.vW,
                  children: [
                      (0, i.jsx)("img", { src: eJ, className: eX.Tn, alt: s }),
                      (0, i.jsx)(C.D, {
                          className: eX.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ei.intl.string(n ? ei.t["5Iw19e"] : ei.t["93WOd1"]),
                      }),
                      (0, i.jsx)("div", {
                          className: eX.rf,
                          children: (0, i.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ei.intl.format(n ? ei.t["E+qms7"] : ei.t.legvTg, {
                                  itemName: ei.intl.string(n ? ei.t.mJ3P0N : ei.t.tpxJto),
                              }),
                          }),
                      }),
                      (0, i.jsx)(eZ, { isReminder: n }),
                  ],
              }),
          })
        : (0, i.jsx)("div", {
              className: eX.kL,
              children: (0, i.jsxs)("div", {
                  className: eX.vW,
                  children: [
                      (0, i.jsx)("img", { src: eJ, className: eX.Tn, alt: s }),
                      (0, i.jsx)(C.D, {
                          className: eX.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: ei.intl.string(ei.t.w4DRbZ),
                      }),
                      (0, i.jsx)("div", {
                          className: eX.rf,
                          children: (0, i.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: ei.intl.string(ei.t.F6u3E3),
                          }),
                      }),
                      (0, i.jsx)(eB, { isReminder: n }),
                  ],
              }),
          });
}
function eZ(e) {
    let { isReminder: t } = e,
        n = r.useMemo(() => {
            let e = new eO.A({ id: "313338", username: ei.intl.string(ei.t.cqpybK), discriminator: "0000", bot: !1 }),
                t = eM.insertStaticUser(e);
            return (
                null != t && (t.getAvatarURL = () => eY.A),
                [ei.intl.string(ei.t["h+KPxy"]), ei.intl.string(ei.t["63EVpI"]), ei.intl.string(ei.t["KT/TDX"])].map(
                    (n, s) => {
                        let a = (0, eD.rh)({
                            ...(0, eL.Ay)({ channelId: "1338", content: n }),
                            state: eK.cmJ.SENT,
                            id: "31338" + s,
                        });
                        return (a.author = t ?? e), a;
                    },
                )
            );
        }, []);
    return (0, i.jsx)("div", {
        className: eX.qJ,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: eX.DZ,
            children: n.map((e, n) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(eb.A, {
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
                                      className: eX.MK,
                                      children: [
                                          (0, i.jsx)(eW, {
                                              icon: e_.c,
                                              label: ei.intl.string(ei.t.tpxJto),
                                              highlighted: !t,
                                          }),
                                          (0, i.jsx)(eW, {
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
function eW(e) {
    let { icon: t, label: n, highlighted: s } = e;
    return (0, i.jsxs)("div", {
        className: c()(eX.KT, { [eX.$Y]: s }),
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
var e$ = n(318061),
    eQ = n(824385);
let e0 = "ForLaterPopout",
    e1 = "Bookmarks",
    e3 = "Reminders";
function e2(e) {
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
        l = (0, eN.oG)(e0, a),
        d = (0, eN.dR)(e0),
        c = d && l > 0 && s.length >= l,
        o = d && s.length > 0,
        { analyticsLocations: u } = (0, k.Ay)(T.A.FOR_LATER_POPOUT);
    (0, G.A)(
        {
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.FOR_LATER_LIST_VIEWED,
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
    let h = r.useRef(null),
        m = (0, O.A)("for-later", h);
    (0, eA.xN)(h), (0, eA.yW)(n === g.Yf.BOOKMARK ? e1 : e3);
    let [A, f] = r.useState(new Date());
    return (r.useEffect(() => {
        let e = setInterval(() => f(new Date()), ep.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []),
    0 === s.length)
        ? (0, i.jsx)(k.f5, { value: u, children: (0, i.jsx)(eV, { type: n }) })
        : (0, i.jsx)(k.f5, {
              value: u,
              children: (0, i.jsxs)("div", {
                  className: e$.MY,
                  children: [
                      (0, i.jsx)(j.hD, {
                          navigator: m,
                          children: (0, i.jsx)(j.PR, {
                              children: (e) => {
                                  let { ref: n, ...a } = e;
                                  return (0, i.jsx)(E.Ch, {
                                      ref: (e) => {
                                          (h.current = e), (n.current = e?.getScrollerNode() ?? null);
                                      },
                                      className: eQ.XG,
                                      ...a,
                                      children: s.map((e) =>
                                          (0, i.jsx)(
                                              e8,
                                              { savedMessage: e, closePopout: t, throttledNow: A },
                                              e.saveData.messageId,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                      o
                          ? (0, i.jsx)("div", {
                                className: e$.fH,
                                children: (0, i.jsx)(eB, { isReminder: a, limit: l, isAtLimit: c }),
                            })
                          : null,
                  ],
              }),
          });
}
function e8(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        a = (0, eS.vr)(t),
        l = r.useCallback(
            async (e) => {
                await (0, eS.le)(t, a),
                    e.shiftKey || n(),
                    b.A.trackJump(t.saveData.channelId, t.saveData.messageId, null != t.saveData.dueAt ? e3 : e1);
            },
            [n, t, a],
        ),
        d = (0, p.bG)(
            [ej.A],
            () => !!(a?.type === eK.rbe.UNKNOWN || a?.isPrivate()) || ej.A.can(eK.xBc.VIEW_CHANNEL, a),
        );
    return null != a && null != t.message && d
        ? (0, i.jsxs)("div", {
              className: eQ.aP,
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
                          children: (0, i.jsx)(e7, { savedMessage: t, jumpToMessage: l, throttledNow: s }),
                      }),
                  }),
                  null != t.saveData.dueAt ? (0, i.jsx)(eq, { reminder: t, throttledNow: s }) : null,
                  (0, i.jsx)(
                      ef.A,
                      {
                          message: t.message,
                          channel: a,
                          className: eQ.YD,
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
              className: c()(eQ.aP, e$.tq),
              children: [
                  (0, i.jsxs)("div", {
                      className: e$.kb,
                      children: [
                          (0, i.jsx)("div", {
                              className: e$.Bx,
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
function e7(e) {
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
    e4 = n(912592),
    e6 = n(890856),
    e9 = n(761508),
    te = n(910425),
    tt = n(214947),
    tn = n(711950),
    ts = n(322387),
    ta = n(912309),
    tl = n(174459),
    ti = n(109261);
function tr(e) {
    let { closePopout: t } = e,
        n = (0, ta.kX)();
    return (0, i.jsx)(N.m, {
        asContainer: !0,
        text: ei.intl.string(ei.t["lMR96+"]),
        children: (0, i.jsxs)(U.D, {
            "aria-label": `${ei.intl.string(ei.t["lMR96+"])}, ${n}`,
            className: ti.b,
            onClick: () => {
                tl.default.track(eK.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: ts.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    tn.A.transitionToSection(eK.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(tt.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(H.hV, { count: n, color: y.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var td = n(980707),
    tc = n(477782),
    to = n(922016),
    tu = n(783977),
    th = n(378939),
    tm = n(309010),
    tg = n(409686);
function tA(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, p.bG)([ee.A, tm.Ay], () => ee.A.getChannel(tm.Ay.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, p.cf)([tg.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = tg.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(td.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": ei.intl.string(ei.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(tc.sL, {
                id: "Everyone",
                label: ei.intl.string(ei.t.cdyUsV),
                action: function () {
                    th.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(tc.sL, {
                id: "Roles",
                label: ei.intl.string(ei.t.lZejCq),
                action: function () {
                    th.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(tc.sL, {
                      id: "All Servers",
                      label: ei.intl.string(ei.t.GWMA6s),
                      action: function () {
                          th.A.setGuildFilter({
                              guildFilter: r === eK.KE7.THIS_SERVER ? eK.KE7.ALL_SERVERS : eK.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eK.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function tf() {
    let e = r.useRef(null);
    return (0, i.jsx)(to.Y, {
        targetElementRef: e,
        align: "right",
        animation: to.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tA, { closePopout: t });
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
                    icon: tu.R,
                    onClick: n,
                }),
            });
        },
    });
}
var tx = n(481613),
    tj = n.n(tx),
    tp = n(621466),
    tN = n(289873),
    tE = n(821609),
    tS = n(228366),
    ty = n(964486),
    tC = n(775602),
    tv = n(625494),
    tR = n(723702),
    tI = n(303727),
    t_ = n(495427);
function tM(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: t_.kL,
        children: [
            (0, i.jsxs)("div", {
                className: t_.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: t_.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(tI.A, { className: t_.uf }),
                ],
            }),
            (0, i.jsx)(C.D, { className: t_.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(z.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(z.E, {
                              tag: "span",
                              className: t_.PP,
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
var tD = n(862482),
    tL = n(143838),
    tb = n(640238);
function tO(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function a() {
        t(),
            tl.default.track(eK.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(tT, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(N.m, {
                text: ei.intl.string(ei.t["8k+6QY"]),
                children: (0, i.jsx)(R.K, {
                    variant: "secondary",
                    "aria-label": ei.intl.string(ei.t["8k+6QY"]),
                    size: "sm",
                    icon: tL.i,
                    onClick: function (e) {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function tT(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(tb.M, {
        dismissable: !0,
        header: ei.intl.string(ei.t.h4bVZ2),
        confirmText: ei.intl.string(ei.t.e6RscS),
        cancelText: ei.intl.string(ei.t["ETE/oC"]),
        confirmButtonColor: tD.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(z.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: ei.intl.string(ei.t["0MQ0Bf"]),
        }),
    });
}
var tk = n(435558),
    tG = n.n(tk),
    tF = n(749314),
    tU = n(534740),
    tw = n(311283),
    tP = n(717421),
    tK = n(933832),
    tH = n(334738),
    tz = n(95561),
    tB = n(976860),
    tX = n(847374),
    tJ = n(345550);
function tY(e) {
    let { collapsed: t, onClick: n } = e,
        s = ei.intl.string(t ? ei.t.dcl9MQ : ei.t.iTcuma);
    return (0, i.jsx)(N.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(U.D, {
            className: tJ.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tX.a, { className: c()(tJ.ai, { [tJ.yZ]: t }), size: "xs" }),
        }),
    });
}
var tV = n(775924);
let tZ = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tW = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tq(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [a, l] = (0, tP.z)(() => (t ? tZ : tW), "respect-motion-settings", []),
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
                          immediate: tC.Ay.useReducedMotion,
                      })
                    : l({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: tC.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && l({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, l]),
        (0, i.jsx)(tU.animated.div, {
            className: tV.r,
            style: a,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var t$ = n(782603),
    tQ = n(461678),
    t0 = n(914703);
function t1(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(to.Y, {
        targetElementRef: n,
        align: "right",
        animation: to.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(t0.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: ei.intl.string(ei.t.ljs3Oe),
                  })
                : (0, i.jsx)(tQ.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: ei.intl.string(ei.t.ljs3Oe),
                      location: { section: eK.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(N.m, {
                text: ei.intl.string(ei.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(R.K, {
                    "aria-label": ei.intl.string(ei.t.h850Ss),
                    icon: t$.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var t3 = n(350527),
    t2 = n(218152),
    t8 = n(970278),
    t7 = n(747926),
    t5 = n(935208),
    t4 = n(37411),
    t6 = n(159574);
function t9(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, p.yK)(
            [t8.A, ee.A],
            () =>
                tG()(t8.A.getThreadsForParent(n.guild_id, n.id))
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
            (0, t7.JA)(e, t, t4.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                tS.h.wait(() => {
                    (0, tH.ack)(
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
        (0, i.jsx)("div", {
            className: t6.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    t2.Cp,
                    { channel: n, children: (0, i.jsx)(t3.Ay, { className: t6.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var ne = n(989349),
    nt = n.n(ne),
    nn = n(123292),
    ns = n(857069),
    na = n(33358),
    nl = n(384231),
    ni = n(207133),
    nr = n(704413),
    nd = n(9842),
    nc = n(994500),
    no = n(5095),
    nu = n(143413),
    nh = n(763754),
    nm = n(467073),
    ng = n(491182),
    nA = n(860227),
    nf = n(655758),
    nx = n(375199),
    nj = n(824556),
    np = n(715628),
    nN = n(752636),
    nE = n(352043),
    nS = n(268719),
    ny = n(234957),
    nC = n(888675),
    nv = n(466959),
    nR = n(364932);
let nI = r.memo(function e(t) {
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
        m = eK.sl8.has(a.type) ? a.messageReference : void 0,
        g = (0, p.bG)([nd.A], () => nd.A.getMessageByReference(m)),
        A = (0, p.bG)([ee.A], () =>
            a.type === eK.lAJ.THREAD_STARTER_MESSAGE && g.state === nd.a.LOADED
                ? ee.A.getChannel(g.message.channel_id)
                : null,
        ),
        f = ex.X6.useSetting(),
        x = ex.hD.useSetting(),
        j = ex.rs.useSetting(),
        N = ex.kt.useSetting(),
        E = (0, nl.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        S = (0, ni.A)(s?.id),
        { disableReactionCreates: y } = (0, nm.A)(s),
        {
            content: C,
            hasSpoilerEmbeds: v,
            hasBailedAst: R,
        } = (0, nx.A)(a, {
            hideSimpleEmbedContent: x && j,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, nh.Ay)(a),
        _ = (0, p.bG)(
            [ee.A],
            () => a.hasFlag(eK.pr7.HAS_THREAD) && ee.A.getChannel(t5.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === eK.lAJ.THREAD_STARTER_MESSAGE && g.state === nd.a.LOADED && null != A,
        D = !M && void 0 === n,
        L = (0, nj.A)({ message: a, channel: s, announcementEnabled: D }),
        b = (0, na.P)(a),
        O = (0, no._f)(a.id, a.channel_id),
        T = (0, nr.A)(a),
        k = (0, nA.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: g.message, channel: A, hasThread: !1 })
        : (nc.A.isBlockedForMessage(a) ? (n = ei.t["+FcYM/"]) : nc.A.isIgnoredForMessage(a) && (n = ei.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(n_, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(ng.A, {
                compact: l,
                className: c()(r, { [nR.M1]: (0, eD.ec)(a), [nR.XN]: u, [nR._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, ny.A)(a, s, m, g, l),
                childrenHeader: (0, nN.A)({ ...t, author: I, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nf.iV, {
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
                    poll: T,
                    showListsAndHeaders: E,
                    showMaskedLinks: E,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: b,
                    ctaButtonType: O,
                }),
                childrenExecutedCommand: (0, nS.A)(a, s, l),
                childrenMessageContent: (0, np.A)(t, C),
                childrenSystemMessage: (0, nE.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != _ && a.hasFlag(eK.pr7.HAS_THREAD),
                hasReply: a.type === eK.lAJ.REPLY,
                isSystemMessage: (0, nu.A)(a),
                messageRef: L,
                author: I,
                "aria-labelledby": k,
                "aria-roledescription": ei.intl.string(ei.t.BAB0yK),
            });
});
function n_(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(ng.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nC.A, {
            compact: s,
            className: nv.L9,
            iconNode: (0, i.jsx)(I.P, { size: "md", color: "currentColor", className: nv.Q6 }),
            children: (0, i.jsx)("div", { className: nv.Fo, children: ei.intl.format(a, { count: n }) }),
        }),
    });
}
var nM = n(58703),
    nD = n(195172);
function nL(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(U.D, {
        className: c()(nD.n, t),
        onClick: function (e) {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(tN.y, { type: tN.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(z.E, { variant: "text-xs/medium", className: nD.Q, children: ei.intl.string(ei.t.k5WiPf) }),
    });
}
var nb = n(143236),
    nO = n(323073),
    nT = n(181079),
    nk = n(567035),
    nG = n(202803),
    nF = n(455234),
    nU = n(695633),
    nw = n(152007),
    nP = n(607508),
    nK = n(594061),
    nH = n(617617),
    nz = n(95701),
    nB = n(808728),
    nX = n(232835),
    nJ = n(711014),
    nY = n(543465),
    nV =
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
    nZ = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class nW extends nb.EventEmitter {
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
                if (t.messages.some(nG.$r)) return b.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = t8.A.hasLoaded(e.guildId);
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
        tS.h.wait(() =>
            tH.ack(
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
        tH.ack(
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
        tS.h.wait(() => (0, nk.A)([e], eK.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: tG().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tH.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = tG().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (a[t] = d),
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
        let e = this.state.channels.filter((e) => !nY.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nw.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = t8.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        b.A.clearChannel(e.channelId);
        let t = b.A.fetchMessages({
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
        s = nX.A.getMessages(e.channelId),
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
function n$() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nH.A.settings.guilds?.guilds ?? {};
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
            ee.A.getSortedPrivateChannels().forEach((n) => nQ(e, t, null, n.id)),
            nJ.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nB.Ay.getSelectableChannelIds(n),
                    a = nU.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nQ(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) nQ(e, t, n, s);
                });
            }),
            tG().sortBy(t, (e) => e.sortOrder)),
        a = tG()
            .uniq(s.map((e) => e.guildId))
            .filter(eC.Vq);
    return (
        tS.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nQ(e, t, n, s) {
    if (null == s) return;
    let a = ee.A.getChannel(s);
    if (null == a || (!nz.Le.has(a.type) && nY.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === es.Ay.getMentionCount(s)) return;
    } else if (!(0, nF.Y)(a) && 0 === es.Ay.getMentionCount(s)) return;
    if (!a.isPrivate() && !ej.A.can(eK.xBc.READ_MESSAGE_HISTORY, a)) return;
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
            if (nT.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (es.Ay.getMentionCount(t) > 0) return es.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = t5.default.extractTimestamp(n);
                if (Date.now() - e > n1) return 8;
                if (Date.now() - e > n0) return 6;
            }
            if (s.isThread()) {
                let e = (0, nP.l)(s);
                return e === t4.CP.ALL_MESSAGES ? 4 : e === t4.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nY.Ay.getChannelMessageNotifications(e, t),
                    s = n === eK.orn.NULL ? nY.Ay.getMessageNotifications(e) : n;
                return s === eK.orn.ALL_MESSAGES ? 4 : s === eK.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, nO.qR)(a)
        ? t.push({ ...o, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let n0 = 2 * ep.A.Millis.DAY,
    n1 = 10 * ep.A.Millis.DAY;
var n3 = n(358402);
let n2 = { left: 4, right: -12 },
    n8 = [eK.lAJ.THREAD_CREATED];
function n7(e) {
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
        o = n8.includes(n.type);
    return (0, i.jsx)(F.vN, {
        offset: n2,
        children: (0, i.jsxs)("div", {
            className: n3.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(nL, { className: n3.nn, onJump: (e) => l(e, n.id) }),
                (0, i.jsx)(nI, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: n3.iU,
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
        l = 0 === t.messages.length || nt()(t.messages[0].timestamp).isSame(nt()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!l && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nM.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(tF.A, { className: n3.yF, children: t }, t)), (d = nt()(e.timestamp));
        }
        let t = null == c || (0, ns.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(n7, { channel: n, message: e, compact: a, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > t5.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: n3.Gr,
                        children: (0, i.jsx)(nn.Q, {
                            variant: "primary",
                            text: `${ei.intl.string(ei.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(tN.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: n3.DZ, children: r })
    );
}
let n4 = r.memo(function (e) {
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
        return (0, i.jsx)(tU.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(n6, { ...e }),
        });
    }),
    n6 = r.memo(function (e) {
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
                    tS.h.wait(() => {
                        (0, tH.ack)(
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
            null == l || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            if ("forum" === t.type) (0, eA.n4)(t.channelId, t.guildId, sn, () => n(e));
            else {
                let a = s ?? t.oldestUnreadMessageId;
                b.A.trackJump(t.channelId, a, sn), (0, tB.pX)(eK.BVt.CHANNEL(t.guildId, t.channelId, a)), n(e);
            }
        }
        function c() {
            a(t),
                (0, tz.zV)(eK.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        return (0, i.jsx)("div", {
            className: eQ.aP,
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
                            children: [(0, i.jsx)(t1, { channel: l }), (0, i.jsx)(n9, { ...e })],
                        }),
                        "nsfw" !== t.type
                            ? (0, i.jsx)(tY, { collapsed: t.collapsed, onClick: c })
                            : (0, i.jsx)("div", { className: er.Pt }),
                    ],
                }),
                children: (0, i.jsx)(tq, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(n5, { channel: t, channelRecord: l, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(t9, { channel: t, channelRecord: l, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function n9(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, tw.A)() && null != t.guildId;
    return (0, i.jsx)(N.m, {
        text: l ? ei.intl.string(ei.t["5lLMhM"]) : ei.intl.string(ei.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(R.K, {
            variant: "secondary",
            "aria-label": l ? ei.intl.string(ei.t["5lLMhM"]) : ei.intl.string(ei.t.e6RscS),
            size: "sm",
            icon: l ? tL.i : tK.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tz.zV)(eK.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var se = n(245233),
    st = n(552392);
let sn = "Inbox";
function ss(e) {
    var t, n, s, a, l, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        g = r.useRef(null),
        A = (0, O.A)("unreads", g);
    (0, eA.xN)(g), (0, eA.yW)(sn);
    let [f, x] = (function (e) {
            let [t, n] = r.useState(() => new nW(n$(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
                [i, d] = r.useState(() => n$());
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
                        r = n$();
                    0 === r.channels.length || t - l.current < 10 * ep.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new nW(r, e)));
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
                    () => (nX.A.addChangeListener(t.reloadMessages), () => nX.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nY.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nY.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nw.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nw.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        t8.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => t8.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(g),
        { loadState: N, channels: S } = f,
        { maybeLoadMore: y } = x,
        C = (0, p.bG)([tC.Ay], () => tC.Ay.messageGroupSpacing);
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
            tv._.subscribe(eK.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
            () => {
                tv._.unsubscribe(eK.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
            }
        );
    }, [l, a.channels]),
    (d = x),
    r.useEffect(() => {
        function e(e) {
            if ((0, ek.hasAnyModalOpen)()) return;
            let t = (0, tp.BF)(e)?.activeElement;
            (0, tp.Cw)(t) ||
                (((0, tR.isMac)() || (0, tR.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            tS.h.subscribe("CONNECTION_OPEN", m),
            () => {
                tS.h.unsubscribe("CONNECTION_OPEN", m);
            }
        ),
        [m],
    ),
    (0, ty.Ay)(
        () => (
            tv._.subscribe(eK.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead),
            () => {
                tv._.unsubscribe(eK.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead);
            }
        ),
    ),
    0 === S.length)
        ? (0, i.jsx)(tM, {
              Icon: e4.K,
              header: ei.intl.string(ei.t["6XMM+D"]),
              tip: tj().os?.family === "OS X" ? ei.intl.string(ei.t.w9uDOW) : ei.intl.string(ei.t.BiUJC6),
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
                          onScroll: N === nZ.Done ? void 0 : y,
                          className: c()(eQ.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(sa, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: a,
                                          deleteChannel: l,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return tG().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nV.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            tF.A,
                                                            {
                                                                className: se.y,
                                                                contentClassName: se.$,
                                                                children: ei.intl.string(ei.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nV.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            tF.A,
                                                            {
                                                                className: se.y,
                                                                contentClassName: se.$,
                                                                children: ei.intl.string(ei.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  n4,
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
                              N === nZ.Done ? null : (0, i.jsx)(tN.y, { className: st.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sa(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: st.d$,
        children: [
            (0, i.jsx)("div", { className: st.cm, children: (0, i.jsx)(e4.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(C.D, {
                        className: st.__invalid_tutorialHeader,
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
                        className: st.dh,
                        children: (0, i.jsx)(tE.$, {
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
function sl() {
    return (0, i.jsx)(tM, {
        Icon: e4.K,
        disableStars: !0,
        header: ei.intl.string(ei.t["KG/ynf"]),
        tip: ei.intl.string(ei.t.cvcKzX),
    });
}
function si() {
    return (0, i.jsx)(tO, { onClick: () => tv._.dispatch(eK.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sr = n(668451);
function sd(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        a = (0, eN.jv)("RecentsPopout"),
        l = (0, te.Sc)(),
        r = (0, e5.bG)([ey.A], () => ey.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: sr.wx,
        children: [
            (0, i.jsxs)("div", {
                className: sr.qd,
                children: [
                    (0, i.jsx)(e4.K, { size: "md", color: "currentColor", className: sr.yH }),
                    (0, i.jsx)(C.D, {
                        className: sr.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: ei.intl.string(ei.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(e6.s, {
                        className: sr.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": ei.intl.string(ei.t["8k+6QY"]),
                        children: [(0, i.jsx)(sc, { tab: t }), (0, i.jsx)(tr, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: sr.YF,
                children: (0, i.jsxs)(e9.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sr.$H,
                    children: [
                        (0, i.jsx)(e9.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": ei.intl.string(ei.t.sRUdB8),
                            className: sr.Mf,
                            children: (0, i.jsx)("span", { className: sr.Gn, children: ei.intl.string(ei.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(e9.V.Item, {
                            "aria-label": ei.intl.string(ei.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: sr.Mf,
                            children: (0, i.jsx)("span", { className: sr.Gn, children: ei.intl.string(ei.t.GRZF96) }),
                        }),
                        a
                            ? (0, i.jsx)(e9.V.Item, {
                                  "aria-label": ei.intl.string(ei.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: sr.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sr.Gn,
                                      children: ei.intl.string(ei.t["2pAkDA"]),
                                  }),
                              })
                            : null,
                        a
                            ? (0, i.jsx)(e9.V.Item, {
                                  "aria-label": ei.intl.string(ei.t.aUXxzT),
                                  id: u.Y2.REMINDERS,
                                  className: sr.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sr.Gn,
                                      children:
                                          0 === r
                                              ? ei.intl.string(ei.t.aUXxzT)
                                              : ei.intl.formatToPlainString(ei.t["5en8ya"], { count: r }),
                                  }),
                              })
                            : null,
                        l
                            ? (0, i.jsx)(e9.V.Item, {
                                  "aria-label": ei.intl.string(ei.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: sr.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sr.Gn,
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
function sc(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(si, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(tf, {}) : null;
}
var so = n(935063),
    su = n(475743),
    sh = n(517019),
    sm = n(919755);
let sg = { offset: { left: 4, right: -12 } },
    sA = "Recent Mentions";
function sf(e, t) {
    th.A.fetchRecentMentions({
        before: t,
        limit: eK.Ue3,
        guildId: null != e && tg.Ay.guildFilter !== eK.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: tg.Ay.roleFilter,
        everyone: tg.Ay.everyoneFilter,
    });
}
function sx(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, O.A)("recents", n);
    (0, eA.xN)(n), (0, eA.yW)(sA);
    let a = (0, p.bG)([ee.A, tm.Ay], () => ee.A.getChannel(tm.Ay.getChannelId())),
        {
            messages: l,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, p.cf)([tg.Ay], () => ({
            messages: tg.Ay.getMentions(),
            hasMore: tg.Ay.hasMore,
            loading: tg.Ay.loading,
            guildFilter: tg.Ay.guildFilter,
            roleFilter: tg.Ay.roleFilter,
            everyoneFilter: tg.Ay.everyoneFilter,
        })),
        m = (0, su.Ay)(o),
        g = (0, su.Ay)(u),
        A = (0, su.Ay)(h);
    r.useEffect(() => {
        tg.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != g && u !== g) || (null != A && h !== A)) && sf(a)
            : sf(a);
    }, [m, o, g, u, A, h, a]),
        (0, ty.Ay)(() => {
            l?.some(nG.$r) && (th.A.clearMentions(), sf(a));
        }),
        (0, ty.l0)(() => {
            th.A.truncateMentions(eK.Ue3);
        });
    let f = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            sf(a, null != l && l.length > 0 ? l[l.length - 1].id : null);
    }, [d, c, a, l]);
    return null == l || (c && 0 === l.length)
        ? (0, i.jsx)("div", { className: eQ.Lq, children: (0, i.jsx)(tN.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tM, { Icon: so.X, header: ei.intl.string(ei.t.bgDz74), tip: ei.intl.string(ei.t.NS15vk) })
          : (0, i.jsx)(j.hD, {
                navigator: s,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(E.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: eQ.XG,
                            onScroll: d ? f : void 0,
                            ...r,
                            children: [
                                l.map((e) => (0, i.jsx)(sj, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: eQ.Lq, children: (0, i.jsx)(tN.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: sm.u,
                                            children: (0, i.jsx)(tE.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: ei.intl.string(ei.t.XBlaiC),
                                                onClick: () =>
                                                    sf(a, null != l && l.length > 0 ? l[l.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function sj(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = ee.A.getChannel(t.channel_id);
    if (null == s || (0, nO.Jm)(s) || (0, nO.$v)(s)) return null;
    let a = sh.A.didAgree(s.getGuildId()),
        l = !!(0, nO.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: eQ.aP,
        children: [
            (0, i.jsx)(ec, {
                channel: s,
                onClick: (e) => (0, eA.KW)(t, sA, () => n(e)),
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
                                onClick: (e) => (0, eA.KW)(t, sA, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(N.m, {
                            text: ei.intl.string(ei.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(R.K, {
                                variant: "secondary",
                                "aria-label": ei.intl.string(ei.t.e6RscS),
                                size: "sm",
                                icon: tK.A,
                                onClick: () => th.A.deleteRecentMention(t.id),
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
                        className: eQ.YD,
                        hideAccessories: l,
                        compact: ex.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: sg,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
var sp = n(285796),
    sN = n(151282),
    sE = n(199160),
    sS =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    sy = n(970244);
let sC = "Scheduled Messages",
    sv = { offset: { left: 4, right: -12 } };
function sR(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, sN.sy)();
    }, []);
    let n = (0, p.bG)([sE.A], () => sE.A.getScheduledMessagesForInbox()),
        s = (0, p.bG)([sE.A], () => sE.A.loading),
        a = (0, p.bG)([sE.A], () => sE.A.getMessagesPendingDeletion()),
        l = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, O.A)("scheduled-messages", d);
    return ((0, eA.xN)(d), (0, eA.yW)(sC), s)
        ? (0, i.jsx)("div", { className: eQ.Lq, children: (0, i.jsx)(tN.y, {}) })
        : 0 === l.length
          ? (0, i.jsx)(tM, { Icon: B.O, header: ei.intl.string(ei.t.aJQZfZ), tip: ei.intl.string(ei.t.rCN4pN) })
          : (0, i.jsx)(j.hD, {
                navigator: c,
                children: (0, i.jsx)(j.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(E.Ch, {
                            className: eQ.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    sI,
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
let sI = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: a } = e,
        l = (0, p.bG)([ee.A], () => ee.A.getChannel(n)),
        { isError: d, stateMessage: c } = (function (e) {
            switch (e) {
                case sS.SCHEDULED:
                    return { isError: !1, stateMessage: ei.intl.string(ei.t.Fn6Odn) };
                case sS.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.v5O2dK) };
                case sS.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.j8uIfG) };
                case sS.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t["w6zHX/"]) };
                case sS.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.pflV7z) };
                case sS.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: ei.intl.string(ei.t.j8uIfG) };
                default:
                    (0, eC.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, sN.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sy.Re)();
                })
                .catch((e) => {
                    (0, sy.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sy.CI)({ scheduledMessage: t });
        }, [t]);
    return null == l
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: eQ.aP,
                  children: [
                      (0, i.jsx)(ec, {
                          itemId: `header-${t.record.id}`,
                          channel: l,
                          onClick: (e) => (0, eA.n4)(l.id, l.guild_id, sC, () => a(e)),
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
                                          icon: sp.a,
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
                          ? (0, i.jsx)(tN.y, { className: eQ.Lq })
                          : (0, i.jsx)(
                                ef.A,
                                {
                                    message: t.record,
                                    channel: l,
                                    className: eQ.YD,
                                    compact: ex.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: sv,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var s_ = n(655165);
function sM(e) {
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
            className: c()(s_.k, { [s_.q]: n }),
            children: (0, i.jsx)(o.tH, {
                fallback: (0, i.jsx)(sl, {}),
                children: (0, i.jsx)(m.F, {
                    component: (0, i.jsx)(sd, { tab: s, setTab: a, closePopout: l }),
                    children:
                        s === u.Y2.MENTIONS
                            ? (0, i.jsx)(sx, { onJump: r })
                            : f && s === u.Y2.BOOKMARKS
                              ? (0, i.jsx)(e2, { closePopout: l, type: g.Yf.BOOKMARK }, "bookmarks")
                              : f && s === u.Y2.REMINDERS
                                ? (0, i.jsx)(e2, { closePopout: l, type: g.Yf.REMINDER }, "reminders")
                                : s === u.Y2.SCHEDULED
                                  ? (0, i.jsx)(sR, { onJump: r })
                                  : (0, i.jsx)(ss, { onJump: r, showTutorial: d, setSeenTutorial: A, closePopout: l }),
                }),
            }),
        }),
    });
}
