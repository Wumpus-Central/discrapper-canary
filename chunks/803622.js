n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(607399),
    o = n(311907),
    c = n(397927),
    d = n(49229),
    u = n(793574),
    h = n(573435),
    m = n(327166),
    A = n(157550),
    p = n(471271),
    g = n(957283),
    f = n(772659),
    _ = n(138298),
    E = n(622543),
    C = n(657331),
    x = n(761640),
    S = n(994500),
    T = n(287809),
    I = n(486020),
    N = n(302975),
    v = n(652215),
    y = n(518477),
    b = n(985018),
    R = n(228288);
let j = (e) => {
        let { userId: t, channelId: n } = e,
            a = (0, o.bG)([E.A], () => E.A.getMutualGuilds(t), [t]),
            s = l.useMemo(
                () =>
                    null != a
                        ? a
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      l = null != n ? I.Ay.getGuildIconURL({ id: n.id, icon: n.icon, size: 24 }) : null;
                                  if (null == l) return null;
                                  let s = t === (a.length > 3 ? 3 : a.length) - 1,
                                      r = (0, i.jsx)("img", { src: l, alt: "", className: R.my }, t);
                                  return s
                                      ? r
                                      : (0, i.jsx)(
                                            h.Ay,
                                            {
                                                className: R.cp,
                                                mask: h.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: r,
                                            },
                                            t,
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [a],
            );
        return null == a || 0 === a.length
            ? (0, i.jsx)(c.Text, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: b.intl.string(b.t.zjVh8h),
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: R.H, children: s }),
                      (0, i.jsx)(c.DUT, {
                          onClick: () => {
                              (0, C.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  tabSection: y.RP.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [u.A.DM_CHANNEL],
                              });
                          },
                          children: (0, i.jsx)(c.Text, {
                              className: R.tE,
                              variant: "text-sm/normal",
                              children: b.intl.format(b.t.eE3oep, { count: a.length }),
                          }),
                      }),
                  ],
              });
    },
    M = (e) => {
        let { relationshipType: t, userId: n, showingBanner: l } = e,
            a = T.default.getUser(n)?.bot,
            s = () => {
                d.A.addRelationship({ userId: n, context: { location: v.liQ.DM_CHANNEL } });
            },
            r = (0, i.jsx)(c.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    d.A.blockUser(n, { location: v.liQ.DM_CHANNEL });
                },
                text: b.intl.string(b.t.l4Emac),
            }),
            o = (0, m.D)(n);
        switch (t) {
            case v.eA$.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !a && !l && (0, i.jsx)(c.Button, { size: "sm", variant: "primary", onClick: s, text: o }),
                        r,
                    ],
                });
            case v.eA$.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                d.A.removeFriend(n, { location: v.liQ.DM_CHANNEL });
                            },
                            text: b.intl.string(b.t.cvSt1J),
                        }),
                        r,
                    ],
                });
            case v.eA$.BLOCKED:
                return (0, i.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        d.A.unblockUser(n, { location: v.liQ.DM_CHANNEL });
                    },
                    text: b.intl.string(b.t.XyHpKH),
                });
            case v.eA$.PENDING_INCOMING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            onClick: s,
                            text: b.intl.string(b.t["+WbSn5"]),
                        }),
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                d.A.cancelFriendRequest(n, { location: v.liQ.DM_CHANNEL });
                            },
                            text: b.intl.string(b.t.rQSndv),
                        }),
                        r,
                    ],
                });
            case v.eA$.PENDING_OUTGOING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            disabled: !0,
                            text: b.intl.string(b.t.xMH6vD),
                        }),
                        r,
                    ],
                });
            default:
                return null;
        }
    },
    D = (e) => {
        let { channelId: t, otherUserId: n } = e,
            a = l.useCallback(() => {
                (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.a2j0hv), c.ToastType.FAILURE));
            }, []),
            s = l.useCallback(() => {
                _.A.closeChannelSidebar(x.fe);
            }, []),
            r = l.useCallback(() => {
                _.A.closeChannelSidebar(x.fe);
            }, []),
            {
                acceptMessageRequest: o,
                rejectMessageRequest: d,
                isAcceptLoading: u,
                isRejectLoading: h,
                isOptimisticAccepted: m,
                isOptimisticRejected: A,
            } = (0, p.t)({ user: T.default.getUser(n), onError: a, onAcceptSuccess: r, onRejectSuccess: s }),
            g = u || h || m || A;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    disabled: g,
                    onClick: () => o(t),
                    loading: u,
                    text: b.intl.string(b.t.Kz8Pwr),
                }),
                (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: g,
                    onClick: () => d(t),
                    loading: h,
                    text: b.intl.string(b.t.B2nygW),
                }),
            ],
        });
    },
    O = (e) => {
        let { userId: t, channel: n, showingBanner: l } = e,
            { channelId: a } = (0, g.N)(),
            d = (0, o.bG)([A.A], () => null != a && A.A.isSpam(a), [a]),
            u = (0, o.bG)([S.A], () => S.A.getRelationshipType(t), [t]),
            h = n.id === a,
            m = !r.Fr && !h,
            p = !!r.Fr || h || d,
            _ =
                d || h
                    ? (0, i.jsxs)("div", {
                          className: R.mG,
                          children: [
                              (0, i.jsx)(D, { channelId: n.id, otherUserId: t }),
                              (0, i.jsx)(f.A, { channel: n }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: R.mG,
                          children: [
                              (0, i.jsx)(M, { relationshipType: u, userId: t, showingBanner: l }),
                              !l && (0, i.jsx)(N.A, { otherUserId: t, channel: n, navigateAwayOnReportSuccess: m }),
                          ],
                      }),
            E =
                u !== v.eA$.PENDING_INCOMING || d || h
                    ? null
                    : (0, i.jsx)(c.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: b.intl.string(b.t.c2v5nO),
                      });
        return (0, i.jsxs)("div", {
            className: p ? R.AA : R.kL,
            children: [
                (0, i.jsx)("div", { className: R.mG, children: (0, i.jsx)(j, { userId: t, channelId: n.id }) }),
                !p && (0, i.jsx)("div", { className: R.yF }),
                (0, i.jsxs)("div", { className: s()(R.mG, R.LV), children: [E, _] }),
            ],
        });
    };
