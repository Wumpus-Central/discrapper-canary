"use strict";
n.d(t, { A: () => Y }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(687498),
    c = n(942381),
    u = n(136722),
    m = n(311907),
    h = n(827734),
    x = n(397927),
    g = n(435183),
    f = n(417454),
    _ = n(964486),
    p = n(148719),
    j = n(47167),
    b = n(504842),
    v = n(376708),
    A = n(207336),
    C = n(933917),
    T = n(34457),
    N = n(317525),
    S = n(71393),
    y = n(44234),
    E = n(203982),
    I = n(927813),
    R = n(661191),
    M = n(947094),
    w = n(919577),
    k = n(387255),
    L = n(200463),
    P = n(435470),
    D = n(853742),
    O = n(892110),
    F = n(633148),
    U = n(218152),
    G = n(253913),
    z = n(652215),
    H = n(985018),
    B = n(673257);
let V = { width: 28, height: 28 },
    W = { width: 20, height: 20, borderRadius: 10 },
    K = (e) => {
        (0, D.bh)({ onboardingCTA: e });
    };
class q {
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
let $ = (e) => {
        let { guild: t, roles: n } = e;
        return (0, l.jsx)("div", {
            className: B.Ei,
            "aria-label": H.intl.formatToPlainString(H.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, l.jsx)(f.b_, { role: e, canRemove: !1, onRemove: z.FXj, guildId: t.id, className: B.Yq }, e.id),
            ),
        });
    },
    J = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    X = (e) => {
        let { handleHide: t } = e;
        return (0, l.jsx)(x.DUT, {
            onClick: t,
            className: B.b,
            "aria-label": H.intl.string(H.t.WAI6xu),
            children: (0, l.jsx)(x.PGe, { size: "md", color: "currentColor", className: B.ut }),
        });
    },
    Q = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, l.jsx)(x.DUT, {
            onClick: n,
            className: B.b,
            "aria-label": t ? H.intl.string(H.t.iTcuma) : H.intl.string(H.t.dcl9MQ),
            children: t
                ? (0, l.jsx)(x.gR, { size: "xs", color: "currentColor", className: B.ut })
                : (0, l.jsx)(x._Xm, { size: "xs", color: "currentColor", className: B.ut }),
        });
    },
    Y = (e) => {
        let t,
            { hasAnyThread: s, hasActiveThreads: r, channel: f } = e,
            Y = (0, j.Ay)(f),
            { onboardingExpanded: Z } = (0, U.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, c.x),
            { tagFilter: ee } = (0, L.R)(f.id),
            et = (0, m.bG)([S.A], () => S.A.getGuild(f.getGuildId())),
            en = (0, P.S4)(f),
            { transitions: el, setVisible: ei } = (() => {
                let [e, t] = i.useState(!0);
                return {
                    transitions: (0, x.pnh)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: J,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            es = (0, x.pnh)(Z, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            ea = i.useCallback((e) => {
                e.clickHandler?.();
            }, []),
            er = ((t = f.id), i.useCallback(() => (ei(!1), w.A.hideAdminOnboarding(t, !0)), [t, ei])),
            {
                onboardingSteps: eo,
                isDismissed: ed,
                isHidden: ec,
                isAllDone: eu,
            } = ((e) => {
                var t;
                let s,
                    a,
                    r,
                    d,
                    { guild: c, channel: h, hasAnyThread: f, handleHide: _ } = e,
                    [j, b] = i.useState(!1),
                    v = (0, O.l)(h.id),
                    A = (0, m.bG)([M.A], () => M.A.hasHidden(h.id)),
                    C =
                        ((s = c?.id),
                        (a = (0, m.bG)([N.A], () => (null != s ? N.A.getSortedRoles(s) : void 0))),
                        i.useMemo(() => {
                            let e,
                                t,
                                i,
                                s,
                                r,
                                o,
                                d,
                                m,
                                _ = new q(),
                                j = h?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == h ||
                                    j ||
                                    null == a ||
                                    _.addStep(
                                        ((e = (0, p.A)(h)
                                            ? u.kg(z.xBc.VIEW_CHANNEL, z.xBc.SEND_MESSAGES)
                                            : z.xBc.SEND_MESSAGES),
                                        (i =
                                            (t =
                                                null != c
                                                    ? (0, k.N)(a, h, e).filter(
                                                          (e) =>
                                                              h.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, T.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (s = t.some((e) => (0, T.Oy)(e))),
                                        {
                                            name: H.intl.string(H.t["/Ax2gs"]),
                                            description: H.intl.string(H.t.gAIOfg),
                                            isDone: i && s,
                                            shouldWarn: i && !s,
                                            children: i ? (0, l.jsx)($, { guild: c, roles: t }) : null,
                                            clickHandler: () => {
                                                K(G._G.PERMISSIONS),
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
                                                            onCloseRequest: z.FXj,
                                                            onCloseCallback: () => b(!1),
                                                        },
                                                    );
                                            },
                                        }),
                                    ),
                                j ||
                                    _.addStep(
                                        ((r = null != h.topic && h.topic.length > 0),
                                        {
                                            name: H.intl.string(H.t.UgJu1e),
                                            description: H.intl.string(H.t["3C6/G1"]),
                                            clickHandler: () => {
                                                K(G._G.GUIDELINES), g.Ay.open(h.id, void 0, z.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                _.addStep(
                                    ((o = null != h.availableTags && h.availableTags.length > 0),
                                    {
                                        name: H.intl.string(H.t.xiBFCi),
                                        description: H.intl.string(H.t.wCv4Oz),
                                        clickHandler: () => {
                                            K(G._G.TAGS),
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
                                _.addStep(
                                    ((d = null != h.defaultReactionEmoji),
                                    {
                                        name: H.intl.string(H.t.QlyC9s),
                                        description: H.intl.string(H.t["+50LJg"]),
                                        clickHandler: () => {
                                            K(G._G.DEFAULT_REACTION),
                                                (0, x.mMO)(async () => {
                                                    let { default: e } = await n.e("85157").then(n.bind(n, 939940));
                                                    return (t) => (0, l.jsx)(e, { ...t, channel: h });
                                                });
                                        },
                                        isDone: d,
                                    }),
                                ),
                                _.addStep(
                                    ((m = c?.id),
                                    {
                                        name: H.intl.string(H.t["6A0O64"]),
                                        description: j
                                            ? H.intl.string(H.t["8hI5vr"])
                                            : H.intl.format(H.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != m &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, D.zd)(),
                                                          (0, x.mMO)(async () => {
                                                              let { default: e } = await n
                                                                  .e("7937")
                                                                  .then(n.bind(n, 420472));
                                                              return (t) => (0, l.jsx)(e, { ...t, guildId: m });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            K(G._G.CREATE_POST), E._.dispatch(z.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: f,
                                    }),
                                ),
                                _
                            );
                        }, [h, c, a, f, b])),
                    S = C.isAllDone(),
                    y =
                        v ||
                        A ||
                        ((t = h.id),
                        (r = R.default.extractTimestamp(t)),
                        !o()().isBefore(o()(r).add(o().duration(15, "days"))));
                return (
                    (d = i.useRef(0)),
                    i.useEffect(
                        () => (
                            j || !S || y
                                ? clearTimeout(d.current)
                                : (d.current = setTimeout(() => {
                                      _();
                                  }, 60 * I.A.Millis.SECOND)),
                            () => clearTimeout(d.current)
                        ),
                        [S, y, _, j],
                    ),
                    { onboardingSteps: C, isHidden: A, isDismissed: v, isAllDone: S }
                );
            })({ guild: et, channel: f, hasAnyThread: s, handleHide: er }),
            em = !ec && !ed,
            eh = (0, U.ST)(),
            ex = f.isMediaChannel(),
            eg = (e) => eh.getState().setOnboardingExpanded(e);
        return ((0, _.Ay)(() => {
            eu && em && er();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: s, channel: a } = e,
                r = (0, m.bG)([N.A], () => (null != s ? N.A.partitionVersion(s) : void 0)),
                o = i.useCallback(() => {
                    E._.dispatch(z.jej.REMEASURE_TARGET);
                }, []);
            i.useEffect(() => {
                o();
            }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
        })({ isAllDone: eu, isVisible: em, canManageChannel: en, guildId: et?.id, channel: f }),
        i.useEffect(() => {
            ed || ei(!ec);
        }, [ed, ei, ec]),
        (0, _.Ay)(() => {
            (s && em) || eg(!0);
        }),
        null == et)
            ? null
            : (0, v.Fo)(f)
              ? r || 0 !== ee.size
                  ? ee.size > 0
                      ? null
                      : (0, l.jsx)(A.A, { guild: et })
                  : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(A.A, { guild: et }), (0, l.jsx)(C.D, {})] })
              : em && en
                ? ex
                    ? s
                        ? null
                        : (0, l.jsx)(b.A, { channel: f })
                    : (0, l.jsx)(l.Fragment, {
                          children: el((e, t) =>
                              t
                                  ? (0, l.jsx)(d.animated.div, {
                                        style: e,
                                        className: B.kL,
                                        children: (0, l.jsxs)("div", {
                                            className: B.iE,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: B.U1,
                                                    children: (0, l.jsxs)(x.Fmo, {
                                                        component: (0, l.jsx)(x.Heading, {
                                                            variant: "heading-md/semibold",
                                                            children: H.intl.string(H.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, l.jsx)(x.Heading, {
                                                                variant: "heading-md/medium",
                                                                className: B.wx,
                                                                children: H.intl.format(H.t["9L+8bz"], {
                                                                    numCompleted: eo.completedSteps.toString(),
                                                                    numSteps: eo.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, l.jsxs)(x.Text, {
                                                                variant: "text-xs/normal",
                                                                className: B.l2,
                                                                children: [
                                                                    (0, l.jsx)(x.mir, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: B.Kk,
                                                                    }),
                                                                    H.intl.string(H.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, l.jsx)(Q, { expanded: Z, onClick: () => eg(!Z) }),
                                                            (0, l.jsx)(X, { handleHide: er }),
                                                        ],
                                                    }),
                                                }),
                                                es((e, t) =>
                                                    t
                                                        ? (0, l.jsx)(d.animated.div, {
                                                              style: e,
                                                              className: B.qI,
                                                              children: (0, l.jsx)("ol", {
                                                                  className: B.D4,
                                                                  children: eo
                                                                      .getSteps()
                                                                      .map((e) =>
                                                                          (0, l.jsxs)(
                                                                              x.DUT,
                                                                              {
                                                                                  tag: "li",
                                                                                  "aria-label": e.name,
                                                                                  onClick: () => ea(e),
                                                                                  className: a()(B._h, {
                                                                                      [B.so]: e.isDone,
                                                                                  }),
                                                                                  children: [
                                                                                      e.shouldWarn
                                                                                          ? (0, l.jsx)(x.EpV, {
                                                                                                size: "custom",
                                                                                                width: 20,
                                                                                                height: 20,
                                                                                                color: h.A.colors
                                                                                                    .ICON_FEEDBACK_CRITICAL,
                                                                                                className: B.FY,
                                                                                            })
                                                                                          : e.isDone
                                                                                            ? (0, l.jsx)(x.fkz, {
                                                                                                  color: h.A.colors
                                                                                                      .STATUS_POSITIVE_BACKGROUND
                                                                                                      .css,
                                                                                                  icon: x.A9s,
                                                                                                  style: W,
                                                                                                  className: B.FY,
                                                                                              })
                                                                                            : (0, l.jsx)(x.fkz, {
                                                                                                  disableColor: !0,
                                                                                                  icon: (0, x.kHD)(y.A),
                                                                                                  style: V,
                                                                                                  className: a()(
                                                                                                      B.FY,
                                                                                                      B.so,
                                                                                                  ),
                                                                                              }),
                                                                                      (0, l.jsxs)("div", {
                                                                                          className: B.PM,
                                                                                          children: [
                                                                                              (0, l.jsx)(x.Text, {
                                                                                                  variant:
                                                                                                      "text-md/medium",
                                                                                                  color: e.isDone
                                                                                                      ? "text-default"
                                                                                                      : "text-strong",
                                                                                                  className: B.u,
                                                                                                  children: e.name,
                                                                                              }),
                                                                                              (0, l.jsx)(x.Text, {
                                                                                                  variant:
                                                                                                      "text-sm/normal",
                                                                                                  color: "text-default",
                                                                                                  className: B.XK,
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
                                                                                          className: B.FY,
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
                  : (0, l.jsx)(F.A, { channelName: Y ?? "", guildId: f.guild_id, tagFilter: ee, channel: f });
    };
