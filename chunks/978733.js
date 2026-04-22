"use strict";
n.d(t, { A: () => em }), n(321073);
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(517738),
    c = n(942381),
    u = n(136722),
    m = n(311907),
    h = n(827734),
    g = n(192308),
    x = n(866323),
    f = n(939249),
    _ = n(789645),
    p = n(446576),
    j = n(26430),
    b = n(707554),
    v = n(534514),
    C = n(834730),
    A = n(885574),
    N = n(695366),
    S = n(777666),
    E = n(933832),
    T = n(565787),
    y = n(320448),
    I = n(435183),
    w = n(417454),
    R = n(964486),
    k = n(148719),
    M = n(47167),
    L = n(504842),
    D = n(376708),
    P = n(207336),
    O = n(933917),
    F = n(34457),
    U = n(317525),
    z = n(71393),
    G = n(44234),
    B = n(203982),
    H = n(927813),
    V = n(661191),
    W = n(947094),
    q = n(919577),
    $ = n(387255),
    K = n(200463),
    X = n(435470),
    J = n(853742),
    Q = n(892110),
    Y = n(633148),
    Z = n(218152),
    ee = n(253913),
    et = n(652215),
    en = n(985018),
    el = n(658688);
let ea = { width: 28, height: 28 },
    es = { width: 20, height: 20, borderRadius: 10 },
    ei = (e) => {
        (0, J.bh)({ onboardingCTA: e });
    };
class er {
    currentIndex = 0;
    steps = [];
    completedSteps = 0;
    addStep(e) {
        ++this.currentIndex, this.steps.push({ index: this.currentIndex, ...e }), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
}
let eo = (e) => {
        let { guild: t, roles: n } = e;
        return (0, l.jsx)("div", {
            className: el.Ei,
            "aria-label": en.intl.formatToPlainString(en.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, l.jsx)(w.b_, { role: e, canRemove: !1, onRemove: et.FXj, guildId: t.id, className: el.Yq }, e.id),
            ),
        });
    },
    ed = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    ec = (e) => {
        let { handleHide: t } = e;
        return (0, l.jsx)(f.D, {
            onClick: t,
            className: el.b,
            "aria-label": en.intl.string(en.t.WAI6xu),
            children: (0, l.jsx)(_.P, { size: "md", color: "currentColor", className: el.ut }),
        });
    },
    eu = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, l.jsx)(f.D, {
            onClick: n,
            className: el.b,
            "aria-label": t ? en.intl.string(en.t.iTcuma) : en.intl.string(en.t.dcl9MQ),
            children: t
                ? (0, l.jsx)(p.g, { size: "xs", color: "currentColor", className: el.ut })
                : (0, l.jsx)(j._, { size: "xs", color: "currentColor", className: el.ut }),
        });
    },
    em = (e) => {
        let t,
            { hasAnyThread: s, hasActiveThreads: r, channel: _ } = e,
            p = (0, M.Ay)(_),
            { onboardingExpanded: j } = (0, Z.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, c.x),
            { tagFilter: w } = (0, K.R)(_.id),
            em = (0, m.bG)([z.A], () => z.A.getGuild(_.getGuildId())),
            eh = (0, X.S4)(_),
            { transitions: eg, setVisible: ex } = (() => {
                let [e, t] = a.useState(!0);
                return {
                    transitions: (0, x.p)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: ed,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            ef = (0, x.p)(j, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            e_ = a.useCallback((e) => {
                e.clickHandler?.();
            }, []),
            ep = ((t = _.id), a.useCallback(() => (ex(!1), q.A.hideAdminOnboarding(t, !0)), [t, ex])),
            {
                onboardingSteps: ej,
                isDismissed: eb,
                isHidden: ev,
                isAllDone: eC,
            } = ((e) => {
                var t;
                let s,
                    i,
                    r,
                    d,
                    { guild: c, channel: h, hasAnyThread: x, handleHide: f } = e,
                    [_, p] = a.useState(!1),
                    j = (0, Q.l)(h.id),
                    b = (0, m.bG)([W.A], () => W.A.hasHidden(h.id)),
                    v =
                        ((s = c?.id),
                        (i = (0, m.bG)([U.A], () => (null != s ? U.A.getSortedRoles(s) : void 0))),
                        a.useMemo(() => {
                            let e,
                                t,
                                a,
                                s,
                                r,
                                o,
                                d,
                                m,
                                f = new er(),
                                _ = h?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == h ||
                                    _ ||
                                    null == i ||
                                    f.addStep(
                                        ((e = (0, k.A)(h)
                                            ? u.kg(et.xBc.VIEW_CHANNEL, et.xBc.SEND_MESSAGES)
                                            : et.xBc.SEND_MESSAGES),
                                        (a =
                                            (t =
                                                null != c
                                                    ? (0, $.N)(i, h, e).filter(
                                                          (e) =>
                                                              h.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, F.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (s = t.some((e) => (0, F.Oy)(e))),
                                        {
                                            name: en.intl.string(en.t["/Ax2gs"]),
                                            description: en.intl.string(en.t.gAIOfg),
                                            isDone: a && s,
                                            shouldWarn: a && !s,
                                            children: a ? (0, l.jsx)(eo, { guild: c, roles: t }) : null,
                                            clickHandler: () => {
                                                ei(ee._G.PERMISSIONS),
                                                    (0, g.openModalLazy)(
                                                        async () => {
                                                            let { default: a } = await n
                                                                .e("17110")
                                                                .then(n.bind(n, 698325));
                                                            return (
                                                                p(!0),
                                                                (n) =>
                                                                    (0, l.jsx)(a, {
                                                                        ...n,
                                                                        channel: h,
                                                                        guild: c,
                                                                        permission: e,
                                                                        currentSelectedRoles: t,
                                                                    })
                                                            );
                                                        },
                                                        {
                                                            modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                                            onCloseRequest: et.FXj,
                                                            onCloseCallback: () => p(!1),
                                                        },
                                                    );
                                            },
                                        }),
                                    ),
                                _ ||
                                    f.addStep(
                                        ((r = null != h.topic && h.topic.length > 0),
                                        {
                                            name: en.intl.string(en.t.UgJu1e),
                                            description: en.intl.string(en.t["3C6/G1"]),
                                            clickHandler: () => {
                                                ei(ee._G.GUIDELINES), I.Ay.open(h.id, void 0, et.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                f.addStep(
                                    ((o = null != h.availableTags && h.availableTags.length > 0),
                                    {
                                        name: en.intl.string(en.t.xiBFCi),
                                        description: en.intl.string(en.t.wCv4Oz),
                                        clickHandler: () => {
                                            ei(ee._G.TAGS),
                                                I.Ay.open(h.id),
                                                (0, g.openModalLazy)(async () => {
                                                    let { default: e } = await n.e("47326").then(n.bind(n, 950989));
                                                    return (t) =>
                                                        (0, l.jsx)(e, { ...t, channelId: h.id, guildId: h.guild_id });
                                                });
                                        },
                                        isDone: o,
                                    }),
                                ),
                                f.addStep(
                                    ((d = null != h.defaultReactionEmoji),
                                    {
                                        name: en.intl.string(en.t.QlyC9s),
                                        description: en.intl.string(en.t["+50LJg"]),
                                        clickHandler: () => {
                                            ei(ee._G.DEFAULT_REACTION),
                                                (0, g.openModalLazy)(async () => {
                                                    let { default: e } = await n.e("85157").then(n.bind(n, 939940));
                                                    return (t) => (0, l.jsx)(e, { ...t, channel: h });
                                                });
                                        },
                                        isDone: d,
                                    }),
                                ),
                                f.addStep(
                                    ((m = c?.id),
                                    {
                                        name: en.intl.string(en.t["6A0O64"]),
                                        description: _
                                            ? en.intl.string(en.t["8hI5vr"])
                                            : en.intl.format(en.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != m &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, J.zd)(),
                                                          (0, g.openModalLazy)(async () => {
                                                              let { default: e } = await Promise.all([
                                                                  n.e("7937"),
                                                                  n.e("43051"),
                                                              ]).then(n.bind(n, 420472));
                                                              return (t) => (0, l.jsx)(e, { ...t, guildId: m });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            ei(ee._G.CREATE_POST), B._.dispatch(et.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: x,
                                    }),
                                ),
                                f
                            );
                        }, [h, c, i, x, p])),
                    C = v.isAllDone(),
                    A =
                        j ||
                        b ||
                        ((t = h.id),
                        (r = V.default.extractTimestamp(t)),
                        !o()().isBefore(o()(r).add(o().duration(15, "days"))));
                return (
                    (d = a.useRef(0)),
                    a.useEffect(
                        () => (
                            _ || !C || A
                                ? clearTimeout(d.current)
                                : (d.current = setTimeout(() => {
                                      f();
                                  }, 60 * H.A.Millis.SECOND)),
                            () => clearTimeout(d.current)
                        ),
                        [C, A, f, _],
                    ),
                    { onboardingSteps: v, isHidden: b, isDismissed: j, isAllDone: C }
                );
            })({ guild: em, channel: _, hasAnyThread: s, handleHide: ep }),
            eA = !ev && !eb,
            eN = (0, Z.ST)(),
            eS = _.isMediaChannel(),
            eE = (e) => eN.getState().setOnboardingExpanded(e);
        return ((0, R.Ay)(() => {
            eC && eA && ep();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: s, channel: i } = e,
                r = (0, m.bG)([U.A], () => (null != s ? U.A.partitionVersion(s) : void 0)),
                o = a.useCallback(() => {
                    B._.dispatch(et.jej.REMEASURE_TARGET);
                }, []);
            a.useEffect(() => {
                o();
            }, [o, t, n, l, r, i.id, i.permissionOverwrites]);
        })({ isAllDone: eC, isVisible: eA, canManageChannel: eh, guildId: em?.id, channel: _ }),
        a.useEffect(() => {
            eb || ex(!ev);
        }, [eb, ex, ev]),
        (0, R.Ay)(() => {
            (s && eA) || eE(!0);
        }),
        null == em)
            ? null
            : (0, D.Fo)(_)
              ? r || 0 !== w.size
                  ? w.size > 0
                      ? null
                      : (0, l.jsx)(P.A, { guild: em })
                  : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(P.A, { guild: em }), (0, l.jsx)(O.D, {})] })
              : eA && eh
                ? eS
                    ? s
                        ? null
                        : (0, l.jsx)(L.A, { channel: _ })
                    : (0, l.jsx)(l.Fragment, {
                          children: eg((e, t) =>
                              t
                                  ? (0, l.jsx)(d.animated.div, {
                                        style: e,
                                        className: el.kL,
                                        children: (0, l.jsxs)("div", {
                                            className: el.iE,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: el.U1,
                                                    children: (0, l.jsxs)(b.F, {
                                                        component: (0, l.jsx)(v.D, {
                                                            variant: "heading-md/semibold",
                                                            children: en.intl.string(en.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, l.jsx)(v.D, {
                                                                variant: "heading-md/medium",
                                                                className: el.wx,
                                                                children: en.intl.format(en.t["9L+8bz"], {
                                                                    numCompleted: ej.completedSteps.toString(),
                                                                    numSteps: ej.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, l.jsxs)(C.E, {
                                                                variant: "text-xs/normal",
                                                                className: el.l2,
                                                                children: [
                                                                    (0, l.jsx)(A.m, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: el.Kk,
                                                                    }),
                                                                    en.intl.string(en.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, l.jsx)(eu, { expanded: j, onClick: () => eE(!j) }),
                                                            (0, l.jsx)(ec, { handleHide: ep }),
                                                        ],
                                                    }),
                                                }),
                                                ef((e, t) =>
                                                    t
                                                        ? (0, l.jsx)(d.animated.div, {
                                                              style: e,
                                                              className: el.qI,
                                                              children: (0, l.jsx)("ol", {
                                                                  className: el.D4,
                                                                  children: ej
                                                                      .getSteps()
                                                                      .map((e) =>
                                                                          (0, l.jsxs)(
                                                                              f.D,
                                                                              {
                                                                                  tag: "li",
                                                                                  "aria-label": e.name,
                                                                                  onClick: () => e_(e),
                                                                                  className: i()(el._h, {
                                                                                      [el.so]: e.isDone,
                                                                                  }),
                                                                                  children: [
                                                                                      e.shouldWarn
                                                                                          ? (0, l.jsx)(N.E, {
                                                                                                size: "custom",
                                                                                                width: 20,
                                                                                                height: 20,
                                                                                                color: h.A.colors
                                                                                                    .ICON_FEEDBACK_CRITICAL,
                                                                                                className: el.FY,
                                                                                            })
                                                                                          : e.isDone
                                                                                            ? (0, l.jsx)(S.fk, {
                                                                                                  color: h.A.colors
                                                                                                      .STATUS_POSITIVE_BACKGROUND
                                                                                                      .css,
                                                                                                  icon: E.A,
                                                                                                  style: es,
                                                                                                  className: el.FY,
                                                                                              })
                                                                                            : (0, l.jsx)(S.fk, {
                                                                                                  disableColor: !0,
                                                                                                  icon: (0, T.k)(G.A),
                                                                                                  style: ea,
                                                                                                  className: i()(
                                                                                                      el.FY,
                                                                                                      el.so,
                                                                                                  ),
                                                                                              }),
                                                                                      (0, l.jsxs)("div", {
                                                                                          className: el.PM,
                                                                                          children: [
                                                                                              (0, l.jsx)(C.E, {
                                                                                                  variant:
                                                                                                      "text-md/medium",
                                                                                                  color: e.isDone
                                                                                                      ? "text-default"
                                                                                                      : "text-strong",
                                                                                                  className: el.u,
                                                                                                  children: e.name,
                                                                                              }),
                                                                                              (0, l.jsx)(C.E, {
                                                                                                  variant:
                                                                                                      "text-sm/normal",
                                                                                                  color: "text-default",
                                                                                                  className: el.XK,
                                                                                                  children:
                                                                                                      e.description,
                                                                                              }),
                                                                                              e.children,
                                                                                          ],
                                                                                      }),
                                                                                      (0, l.jsx)(y._, {
                                                                                          size: "custom",
                                                                                          color: "currentColor",
                                                                                          width: 12,
                                                                                          className: el.FY,
                                                                                      }),
                                                                                  ],
                                                                              },
                                                                              `onboard-step-${e.index}`,
                                                                          ),
                                                                      ),
                                                              }),
                                                          })
                                                        : null,
                                                ),
                                            ],
                                        }),
                                    })
                                  : null,
                          ),
                      })
                : s
                  ? null
                  : (0, l.jsx)(Y.A, { channelName: p ?? "", guildId: _.guild_id, tagFilter: w, channel: _ });
    };
