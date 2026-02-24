"use strict";
n.d(t, { A: () => Q }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(442215),
    c = n(942381),
    u = n(136722),
    m = n(311907),
    h = n(827734),
    x = n(397927),
    g = n(435183),
    f = n(417454),
    p = n(964486),
    _ = n(148719),
    j = n(504842),
    b = n(376708),
    v = n(207336),
    A = n(933917),
    C = n(34457),
    T = n(317525),
    N = n(71393),
    S = n(44234),
    y = n(203982),
    E = n(927813),
    I = n(661191),
    R = n(947094),
    M = n(919577),
    k = n(387255),
    w = n(422844),
    L = n(435470),
    P = n(853742),
    D = n(892110),
    O = n(633148),
    F = n(218152),
    U = n(253913),
    G = n(652215),
    z = n(985018),
    H = n(5395);
let B = { width: 28, height: 28 },
    V = { width: 20, height: 20, borderRadius: 10 },
    W = (e) => {
        (0, P.bh)({ onboardingCTA: e });
    };
class K {
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
let q = (e) => {
        let { guild: t, roles: n } = e;
        return (0, l.jsx)("div", {
            className: H.Ei,
            "aria-label": z.intl.formatToPlainString(z.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, l.jsx)(f.b_, { role: e, canRemove: !1, onRemove: G.FXj, guildId: t.id, className: H.Yq }, e.id),
            ),
        });
    },
    $ = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    J = (e) => {
        let { handleHide: t } = e;
        return (0, l.jsx)(x.DUT, {
            onClick: t,
            className: H.b,
            "aria-label": z.intl.string(z.t.WAI6xu),
            children: (0, l.jsx)(x.PGe, { size: "md", color: "currentColor", className: H.ut }),
        });
    },
    X = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, l.jsx)(x.DUT, {
            onClick: n,
            className: H.b,
            "aria-label": t ? z.intl.string(z.t.iTcuma) : z.intl.string(z.t.dcl9MQ),
            children: t
                ? (0, l.jsx)(x.gR, { size: "xs", color: "currentColor", className: H.ut })
                : (0, l.jsx)(x._Xm, { size: "xs", color: "currentColor", className: H.ut }),
        });
    },
    Q = (e) => {
        let t,
            { hasAnyThread: s, hasActiveThreads: r, channel: f } = e,
            { onboardingExpanded: Q } = (0, F.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, c.x),
            { tagFilter: Y } = (0, w.R)(f.id),
            Z = (0, m.bG)([N.A], () => N.A.getGuild(f.getGuildId())),
            ee = (0, L.S4)(f),
            { transitions: et, setVisible: en } = (() => {
                let [e, t] = i.useState(!0);
                return {
                    transitions: (0, x.pnh)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: $,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            el = (0, x.pnh)(Q, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            ei = i.useCallback((e) => {
                e.clickHandler?.();
            }, []),
            es = ((t = f.id), i.useCallback(() => (en(!1), M.A.hideAdminOnboarding(t, !0)), [t, en])),
            {
                onboardingSteps: ea,
                isDismissed: er,
                isHidden: eo,
                isAllDone: ed,
            } = ((e) => {
                var t;
                let s,
                    a,
                    r,
                    d,
                    { guild: c, channel: h, hasAnyThread: f, handleHide: p } = e,
                    [j, b] = i.useState(!1),
                    v = (0, D.l)(h.id),
                    A = (0, m.bG)([R.A], () => R.A.hasHidden(h.id)),
                    N =
                        ((s = c?.id),
                        (a = (0, m.bG)([T.A], () => (null != s ? T.A.getSortedRoles(s) : void 0))),
                        i.useMemo(() => {
                            let e,
                                t,
                                i,
                                s,
                                r,
                                o,
                                d,
                                m,
                                p = new K(),
                                j = h?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == h ||
                                    j ||
                                    null == a ||
                                    p.addStep(
                                        ((e = (0, _.A)(h)
                                            ? u.kg(G.xBc.VIEW_CHANNEL, G.xBc.SEND_MESSAGES)
                                            : G.xBc.SEND_MESSAGES),
                                        (i =
                                            (t =
                                                null != c
                                                    ? (0, k.N)(a, h, e).filter(
                                                          (e) =>
                                                              h.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, C.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (s = t.some((e) => (0, C.Oy)(e))),
                                        {
                                            name: z.intl.string(z.t["/Ax2gs"]),
                                            description: z.intl.string(z.t.gAIOfg),
                                            isDone: i && s,
                                            shouldWarn: i && !s,
                                            children: i ? (0, l.jsx)(q, { guild: c, roles: t }) : null,
                                            clickHandler: () => {
                                                W(U._G.PERMISSIONS),
                                                    (0, x.mMO)(
                                                        async () => {
                                                            let { default: i } = await n
                                                                .e("17110")
                                                                .then(n.bind(n, 698325));
                                                            return (
                                                                b(!0),
                                                                (n) =>
                                                                    (0, l.jsx)(i, {
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
                                                            onCloseRequest: G.FXj,
                                                            onCloseCallback: () => b(!1),
                                                        },
                                                    );
                                            },
                                        }),
                                    ),
                                j ||
                                    p.addStep(
                                        ((r = null != h.topic && h.topic.length > 0),
                                        {
                                            name: z.intl.string(z.t.UgJu1e),
                                            description: z.intl.string(z.t["3C6/G1"]),
                                            clickHandler: () => {
                                                W(U._G.GUIDELINES), g.Ay.open(h.id, void 0, G.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                p.addStep(
                                    ((o = null != h.availableTags && h.availableTags.length > 0),
                                    {
                                        name: z.intl.string(z.t.xiBFCi),
                                        description: z.intl.string(z.t.wCv4Oz),
                                        clickHandler: () => {
                                            W(U._G.TAGS),
                                                g.Ay.open(h.id),
                                                (0, x.mMO)(async () => {
                                                    let { default: e } = await n.e("47326").then(n.bind(n, 950989));
                                                    return (t) =>
                                                        (0, l.jsx)(e, { ...t, channelId: h.id, guildId: h.guild_id });
                                                });
                                        },
                                        isDone: o,
                                    }),
                                ),
                                p.addStep(
                                    ((d = null != h.defaultReactionEmoji),
                                    {
                                        name: z.intl.string(z.t.QlyC9s),
                                        description: z.intl.string(z.t["+50LJg"]),
                                        clickHandler: () => {
                                            W(U._G.DEFAULT_REACTION),
                                                (0, x.mMO)(async () => {
                                                    let { default: e } = await n.e("85157").then(n.bind(n, 939940));
                                                    return (t) => (0, l.jsx)(e, { ...t, channel: h });
                                                });
                                        },
                                        isDone: d,
                                    }),
                                ),
                                p.addStep(
                                    ((m = c?.id),
                                    {
                                        name: z.intl.string(z.t["6A0O64"]),
                                        description: j
                                            ? z.intl.string(z.t["8hI5vr"])
                                            : z.intl.format(z.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != m &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, P.zd)(),
                                                          (0, x.mMO)(async () => {
                                                              let { default: e } = await n
                                                                  .e("7937")
                                                                  .then(n.bind(n, 420472));
                                                              return (t) => (0, l.jsx)(e, { ...t, guildId: m });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            W(U._G.CREATE_POST), y._.dispatch(G.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: f,
                                    }),
                                ),
                                p
                            );
                        }, [h, c, a, f, b])),
                    S = N.isAllDone(),
                    M =
                        v ||
                        A ||
                        ((t = h.id),
                        (r = I.default.extractTimestamp(t)),
                        !o()().isBefore(o()(r).add(o().duration(15, "days"))));
                return (
                    (d = i.useRef(0)),
                    i.useEffect(
                        () => (
                            j || !S || M
                                ? clearTimeout(d.current)
                                : (d.current = setTimeout(() => {
                                      p();
                                  }, 60 * E.A.Millis.SECOND)),
                            () => clearTimeout(d.current)
                        ),
                        [S, M, p, j],
                    ),
                    { onboardingSteps: N, isHidden: A, isDismissed: v, isAllDone: S }
                );
            })({ guild: Z, channel: f, hasAnyThread: s, handleHide: es }),
            ec = !eo && !er,
            eu = (0, F.ST)(),
            em = f.isMediaChannel(),
            eh = (e) => eu.getState().setOnboardingExpanded(e);
        return ((0, p.Ay)(() => {
            ed && ec && es();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: s, channel: a } = e,
                r = (0, m.bG)([T.A], () => (null != s ? T.A.partitionVersion(s) : void 0)),
                o = i.useCallback(() => {
                    y._.dispatch(G.jej.REMEASURE_TARGET);
                }, []);
            i.useEffect(() => {
                o();
            }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
        })({ isAllDone: ed, isVisible: ec, canManageChannel: ee, guildId: Z?.id, channel: f }),
        i.useEffect(() => {
            er || en(!eo);
        }, [er, en, eo]),
        (0, p.Ay)(() => {
            (s && ec) || eh(!0);
        }),
        null == Z)
            ? null
            : (0, b.Fo)(f)
              ? r || 0 !== Y.size
                  ? Y.size > 0
                      ? null
                      : (0, l.jsx)(v.A, { guild: Z })
                  : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(v.A, { guild: Z }), (0, l.jsx)(A.D, {})] })
              : ec && ee
                ? em
                    ? s
                        ? null
                        : (0, l.jsx)(j.A, { channel: f })
                    : (0, l.jsx)(l.Fragment, {
                          children: et((e, t) =>
                              t
                                  ? (0, l.jsx)(d.animated.div, {
                                        style: e,
                                        className: H.kL,
                                        children: (0, l.jsxs)("div", {
                                            className: H.iE,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: H.U1,
                                                    children: (0, l.jsxs)(x.Fmo, {
                                                        component: (0, l.jsx)(x.Heading, {
                                                            variant: "heading-md/semibold",
                                                            children: z.intl.string(z.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, l.jsx)(x.Heading, {
                                                                variant: "heading-md/medium",
                                                                className: H.wx,
                                                                children: z.intl.format(z.t["9L+8bz"], {
                                                                    numCompleted: ea.completedSteps.toString(),
                                                                    numSteps: ea.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, l.jsxs)(x.Text, {
                                                                variant: "text-xs/normal",
                                                                className: H.l2,
                                                                children: [
                                                                    (0, l.jsx)(x.mir, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: H.Kk,
                                                                    }),
                                                                    z.intl.string(z.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, l.jsx)(X, { expanded: Q, onClick: () => eh(!Q) }),
                                                            (0, l.jsx)(J, { handleHide: es }),
                                                        ],
                                                    }),
                                                }),
                                                el((e, t) =>
                                                    t
                                                        ? (0, l.jsx)(d.animated.div, {
                                                              style: e,
                                                              className: H.qI,
                                                              children: (0, l.jsx)("ol", {
                                                                  className: H.D4,
                                                                  children: ea
                                                                      .getSteps()
                                                                      .map((e) =>
                                                                          (0, l.jsxs)(
                                                                              x.DUT,
                                                                              {
                                                                                  tag: "li",
                                                                                  "aria-label": e.name,
                                                                                  onClick: () => ei(e),
                                                                                  className: a()(H._h, {
                                                                                      [H.so]: e.isDone,
                                                                                  }),
                                                                                  children: [
                                                                                      e.shouldWarn
                                                                                          ? (0, l.jsx)(x.EpV, {
                                                                                                size: "custom",
                                                                                                width: 20,
                                                                                                height: 20,
                                                                                                color: h.A.colors
                                                                                                    .ICON_FEEDBACK_CRITICAL,
                                                                                                className: H.FY,
                                                                                            })
                                                                                          : e.isDone
                                                                                            ? (0, l.jsx)(x.fkz, {
                                                                                                  color: h.A.colors
                                                                                                      .STATUS_POSITIVE_BACKGROUND
                                                                                                      .css,
                                                                                                  icon: x.A9s,
                                                                                                  style: V,
                                                                                                  className: H.FY,
                                                                                              })
                                                                                            : (0, l.jsx)(x.fkz, {
                                                                                                  disableColor: !0,
                                                                                                  icon: (0, x.kHD)(S.A),
                                                                                                  style: B,
                                                                                                  className: a()(
                                                                                                      H.FY,
                                                                                                      H.so,
                                                                                                  ),
                                                                                              }),
                                                                                      (0, l.jsxs)("div", {
                                                                                          className: H.PM,
                                                                                          children: [
                                                                                              (0, l.jsx)(x.Text, {
                                                                                                  variant:
                                                                                                      "text-md/medium",
                                                                                                  color: e.isDone
                                                                                                      ? "text-default"
                                                                                                      : "text-strong",
                                                                                                  className: H.u,
                                                                                                  children: e.name,
                                                                                              }),
                                                                                              (0, l.jsx)(x.Text, {
                                                                                                  variant:
                                                                                                      "text-sm/normal",
                                                                                                  color: "text-default",
                                                                                                  className: H.XK,
                                                                                                  children:
                                                                                                      e.description,
                                                                                              }),
                                                                                              e.children,
                                                                                          ],
                                                                                      }),
                                                                                      (0, l.jsx)(x._BQ, {
                                                                                          size: "custom",
                                                                                          color: "currentColor",
                                                                                          width: 12,
                                                                                          className: H.FY,
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
                  : (0, l.jsx)(O.A, { channelName: f.name, guildId: f.guild_id, tagFilter: Y, channel: f });
    };
