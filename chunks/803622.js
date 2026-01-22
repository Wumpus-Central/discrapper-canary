n.d(t, { A: () => R });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(607399),
    o = n(311907),
    c = n(397927),
    u = n(49229),
    d = n(793574),
    f = n(573435),
    p = n(327166),
    h = n(157550),
    b = n(471271),
    g = n(957283),
    m = n(772659),
    A = n(138298),
    y = n(622543),
    O = n(657331),
    j = n(761640),
    v = n(994500),
    x = n(287809),
    E = n(486020),
    _ = n(302975),
    C = n(652215),
    S = n(518477),
    I = n(985018),
    N = n(228288);
let T = (e) => {
        let { userId: t, channelId: n } = e,
            i = (0, o.bG)([y.A], () => y.A.getMutualGuilds(t), [t]),
            a = l.useMemo(
                () =>
                    null != i
                        ? i
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      l =
                                          null != n
                                              ? E.Ay.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: 24,
                                                })
                                              : null;
                                  if (null == l) return null;
                                  let a = t === (i.length > 3 ? 3 : i.length) - 1,
                                      s = (0, r.jsx)(
                                          "img",
                                          {
                                              src: l,
                                              alt: "",
                                              className: N.my,
                                          },
                                          t,
                                      );
                                  return a
                                      ? s
                                      : (0, r.jsx)(
                                            f.Ay,
                                            {
                                                className: N.cp,
                                                mask: f.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: s,
                                            },
                                            t,
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [i],
            );
        return null == i || 0 === i.length
            ? (0, r.jsx)(c.Text, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: I.intl.string(I.t.zjVh8h),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: N.H,
                          children: a,
                      }),
                      (0, r.jsx)(c.DUT, {
                          onClick: () => {
                              (0, O.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  tabSection: S.RP.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [d.A.DM_CHANNEL],
                              });
                          },
                          children: (0, r.jsx)(c.Text, {
                              className: N.tE,
                              variant: "text-sm/normal",
                              children: I.intl.format(I.t.eE3oep, { count: i.length }),
                          }),
                      }),
                  ],
              });
    },
    P = (e) => {
        var t;
        let { relationshipType: n, userId: l, showingBanner: i } = e,
            a = null == (t = x.default.getUser(l)) ? void 0 : t.bot,
            s = () => {
                u.A.addRelationship({
                    userId: l,
                    context: { location: C.liQ.DM_CHANNEL },
                });
            },
            o = (0, r.jsx)(c.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    u.A.blockUser(l, { location: C.liQ.DM_CHANNEL });
                },
                text: I.intl.string(I.t.l4Emac),
            }),
            d = (0, p.D)(l);
        switch (n) {
            case C.eA$.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !i &&
                            (0, r.jsx)(c.Button, {
                                size: "sm",
                                variant: "primary",
                                onClick: s,
                                text: d,
                            }),
                        o,
                    ],
                });
            case C.eA$.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.A.removeFriend(l, { location: C.liQ.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.cvSt1J),
                        }),
                        o,
                    ],
                });
            case C.eA$.BLOCKED:
                return (0, r.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        u.A.unblockUser(l, { location: C.liQ.DM_CHANNEL });
                    },
                    text: I.intl.string(I.t.XyHpKH),
                });
            case C.eA$.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            onClick: s,
                            text: I.intl.string(I.t["+WbSn5"]),
                        }),
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.A.cancelFriendRequest(l, { location: C.liQ.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.rQSndv),
                        }),
                        o,
                    ],
                });
            case C.eA$.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            disabled: !0,
                            text: I.intl.string(I.t.xMH6vD),
                        }),
                        o,
                    ],
                });
            default:
                return null;
        }
    },
    w = (e) => {
        let { channelId: t, otherUserId: n } = e,
            i = l.useCallback(() => {
                (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE));
            }, []),
            a = l.useCallback(() => {
                A.A.closeChannelSidebar(j.fe);
            }, []),
            s = l.useCallback(() => {
                A.A.closeChannelSidebar(j.fe);
            }, []),
            {
                acceptMessageRequest: o,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: f,
                isOptimisticAccepted: p,
                isOptimisticRejected: h,
            } = (0, b.t)({
                user: x.default.getUser(n),
                onError: i,
                onAcceptSuccess: s,
                onRejectSuccess: a,
            }),
            g = d || f || p || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    disabled: g,
                    onClick: () => o(t),
                    loading: d,
                    text: I.intl.string(I.t.Kz8Pwr),
                }),
                (0, r.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: g,
                    onClick: () => u(t),
                    loading: f,
                    text: I.intl.string(I.t.B2nygW),
                }),
            ],
        });
    },
    R = (e) => {
        let { userId: t, channel: n, showingBanner: l } = e,
            { channelId: i } = (0, g.N)(),
            u = (0, o.bG)([h.A], () => null != i && h.A.isSpam(i), [i]),
            d = (0, o.bG)([v.A], () => v.A.getRelationshipType(t), [t]),
            f = n.id === i,
            p = !s.Fr && !f,
            b = !!s.Fr || f || u,
            A =
                u || f
                    ? (0, r.jsxs)("div", {
                          className: N.mG,
                          children: [
                              (0, r.jsx)(w, {
                                  channelId: n.id,
                                  otherUserId: t,
                              }),
                              (0, r.jsx)(m.A, { channel: n }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: N.mG,
                          children: [
                              (0, r.jsx)(P, {
                                  relationshipType: d,
                                  userId: t,
                                  showingBanner: l,
                              }),
                              !l &&
                                  (0, r.jsx)(_.A, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: p,
                                  }),
                          ],
                      }),
            y =
                d !== C.eA$.PENDING_INCOMING || u || f
                    ? null
                    : (0, r.jsx)(c.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: I.intl.string(I.t.c2v5nO),
                      });
        return (0, r.jsxs)("div", {
            className: b ? N.AA : N.kL,
            children: [
                (0, r.jsx)("div", {
                    className: N.mG,
                    children: (0, r.jsx)(T, {
                        userId: t,
                        channelId: n.id,
                    }),
                }),
                !b && (0, r.jsx)("div", { className: N.yF }),
                (0, r.jsxs)("div", {
                    className: a()(N.mG, N.LV),
                    children: [y, A],
                }),
            ],
        });
    };
