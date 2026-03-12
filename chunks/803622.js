n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(607399),
    o = n(311907),
    c = n(397927),
    d = n(49229),
    u = n(793574),
    h = n(573435),
    m = n(327166),
    A = n(157550),
    g = n(471271),
    p = n(957283),
    f = n(772659),
    _ = n(138298),
    E = n(622543),
    x = n(657331),
    C = n(761640),
    S = n(994500),
    I = n(287809),
    T = n(486020),
    N = n(302975),
    y = n(652215),
    b = n(518477),
    v = n(985018),
    j = n(729254);
let R = (e) => {
        let { userId: t, channelId: n } = e,
            s = (0, o.bG)([E.A], () => E.A.getMutualGuilds(t), [t]),
            a = l.useMemo(
                () =>
                    null != s
                        ? s
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      l = null != n ? T.Ay.getGuildIconURL({ id: n.id, icon: n.icon, size: 24 }) : null;
                                  if (null == l) return null;
                                  let a = t === (s.length > 3 ? 3 : s.length) - 1,
                                      r = (0, i.jsx)("img", { src: l, alt: "", className: j.my }, t);
                                  return a
                                      ? r
                                      : (0, i.jsx)(
                                            h.Ay,
                                            {
                                                className: j.cp,
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
                [s],
            );
        return null == s || 0 === s.length
            ? (0, i.jsx)(c.Text, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: v.intl.string(v.t.zjVh8h),
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: j.H, children: a }),
                      (0, i.jsx)(c.DUT, {
                          onClick: () => {
                              (0, x.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  tabSection: b.RP.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [u.A.DM_CHANNEL],
                              });
                          },
                          children: (0, i.jsx)(c.Text, {
                              className: j.tE,
                              variant: "text-sm/normal",
                              children: v.intl.format(v.t.eE3oep, { count: s.length }),
                          }),
                      }),
                  ],
              });
    },
    M = (e) => {
        let { relationshipType: t, userId: n, showingBanner: l } = e,
            s = I.default.getUser(n)?.bot,
            a = () => {
                d.A.addRelationship({ userId: n, context: { location: y.liQ.DM_CHANNEL } });
            },
            r = (0, i.jsx)(c.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    d.A.blockUser(n, { location: y.liQ.DM_CHANNEL });
                },
                text: v.intl.string(v.t.l4Emac),
            }),
            o = (0, m.D)(n);
        switch (t) {
            case y.eA$.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !s && !l && (0, i.jsx)(c.Button, { size: "sm", variant: "primary", onClick: a, text: o }),
                        r,
                    ],
                });
            case y.eA$.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                d.A.removeFriend(n, { location: y.liQ.DM_CHANNEL });
                            },
                            text: v.intl.string(v.t.cvSt1J),
                        }),
                        r,
                    ],
                });
            case y.eA$.BLOCKED:
                return (0, i.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        d.A.unblockUser(n, { location: y.liQ.DM_CHANNEL });
                    },
                    text: v.intl.string(v.t.XyHpKH),
                });
            case y.eA$.PENDING_INCOMING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            onClick: a,
                            text: v.intl.string(v.t["+WbSn5"]),
                        }),
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                d.A.cancelFriendRequest(n, { location: y.liQ.DM_CHANNEL });
                            },
                            text: v.intl.string(v.t.rQSndv),
                        }),
                        r,
                    ],
                });
            case y.eA$.PENDING_OUTGOING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            disabled: !0,
                            text: v.intl.string(v.t.xMH6vD),
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
            s = l.useCallback(() => {
                (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.a2j0hv), c.ToastType.FAILURE));
            }, []),
            a = l.useCallback(() => {
                _.A.closeChannelSidebar(C.fe);
            }, []),
            r = l.useCallback(() => {
                _.A.closeChannelSidebar(C.fe);
            }, []),
            {
                acceptMessageRequest: o,
                rejectMessageRequest: d,
                isAcceptLoading: u,
                isRejectLoading: h,
                isOptimisticAccepted: m,
                isOptimisticRejected: A,
            } = (0, g.t)({ user: I.default.getUser(n), onError: s, onAcceptSuccess: r, onRejectSuccess: a }),
            p = u || h || m || A;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    disabled: p,
                    onClick: () => o(t),
                    loading: u,
                    text: v.intl.string(v.t.Kz8Pwr),
                }),
                (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: p,
                    onClick: () => d(t),
                    loading: h,
                    text: v.intl.string(v.t.B2nygW),
                }),
            ],
        });
    },
    O = (e) => {
        let { userId: t, channel: n, showingBanner: l } = e,
            { channelId: s } = (0, p.N)(),
            d = (0, o.bG)([A.A], () => null != s && A.A.isSpam(s), [s]),
            u = (0, o.bG)([S.A], () => S.A.getRelationshipType(t), [t]),
            h = n.id === s,
            m = !r.Fr && !h,
            g = !!r.Fr || h || d,
            _ =
                d || h
                    ? (0, i.jsxs)("div", {
                          className: j.mG,
                          children: [
                              (0, i.jsx)(D, { channelId: n.id, otherUserId: t }),
                              (0, i.jsx)(f.A, { channel: n }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: j.mG,
                          children: [
                              (0, i.jsx)(M, { relationshipType: u, userId: t, showingBanner: l }),
                              !l && (0, i.jsx)(N.A, { otherUserId: t, channel: n, navigateAwayOnReportSuccess: m }),
                          ],
                      }),
            E =
                u !== y.eA$.PENDING_INCOMING || d || h
                    ? null
                    : (0, i.jsx)(c.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: v.intl.string(v.t.c2v5nO),
                      });
        return (0, i.jsxs)("div", {
            className: g ? j.AA : j.kL,
            children: [
                (0, i.jsx)("div", { className: j.mG, children: (0, i.jsx)(R, { userId: t, channelId: n.id }) }),
                !g && (0, i.jsx)("div", { className: j.yF }),
                (0, i.jsxs)("div", { className: a()(j.mG, j.LV), children: [E, _] }),
            ],
        });
    };
