n.d(t, { A: () => L });
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
    _ = n(390848),
    E = n(138298),
    x = n(622543),
    C = n(657331),
    S = n(761640),
    I = n(994500),
    T = n(287809),
    N = n(486020),
    y = n(302975),
    b = n(652215),
    v = n(518477),
    j = n(985018),
    R = n(729254);
let M = (e) => {
        let { userId: t, channelId: n } = e,
            s = (0, o.bG)([x.A], () => x.A.getMutualGuilds(t), [t]),
            a = l.useMemo(
                () =>
                    null != s
                        ? s
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      l = null != n ? N.Ay.getGuildIconURL({ id: n.id, icon: n.icon, size: 24 }) : null;
                                  if (null == l) return null;
                                  let a = t === (s.length > 3 ? 3 : s.length) - 1,
                                      r = (0, i.jsx)("img", { src: l, alt: "", className: R.my }, t);
                                  return a
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
                [s],
            );
        return null == s || 0 === s.length
            ? (0, i.jsx)(c.Text, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: j.intl.string(j.t.zjVh8h),
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: R.H, children: a }),
                      (0, i.jsx)(c.DUT, {
                          onClick: () => {
                              (0, C.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  tabSection: v.RP.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [u.A.DM_CHANNEL],
                              });
                          },
                          children: (0, i.jsx)(c.Text, {
                              className: R.tE,
                              variant: "text-sm/normal",
                              children: j.intl.format(j.t.eE3oep, { count: s.length }),
                          }),
                      }),
                  ],
              });
    },
    D = (e) => {
        let { relationshipType: t, userId: n, showingBanner: l } = e,
            s = T.default.getUser(n)?.bot,
            a = (0, i.jsx)(c.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    d.A.blockUser(n, { location: b.liQ.DM_CHANNEL });
                },
                text: j.intl.string(j.t.l4Emac),
            }),
            r = (0, m.D)(n),
            u = (0, o.bG)([I.A], () => I.A.getOriginApplicationId(n), [n]),
            { acceptFriendRequest: h } = (0, _.I)({
                userId: n,
                applicationId: u,
                isGameRelationship: !1,
                location: b.liQ.DM_CHANNEL,
            });
        switch (t) {
            case b.eA$.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !s &&
                            !l &&
                            (0, i.jsx)(c.Button, {
                                size: "sm",
                                variant: "primary",
                                onClick: () => {
                                    d.A.addRelationship({ userId: n, context: { location: b.liQ.DM_CHANNEL } });
                                },
                                text: r,
                            }),
                        a,
                    ],
                });
            case b.eA$.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                d.A.removeFriend(n, { location: b.liQ.DM_CHANNEL });
                            },
                            text: j.intl.string(j.t.cvSt1J),
                        }),
                        a,
                    ],
                });
            case b.eA$.BLOCKED:
                return (0, i.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        d.A.unblockUser(n, { location: b.liQ.DM_CHANNEL });
                    },
                    text: j.intl.string(j.t.XyHpKH),
                });
            case b.eA$.PENDING_INCOMING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            onClick: h,
                            text: j.intl.string(j.t["+WbSn5"]),
                        }),
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                d.A.cancelFriendRequest(n, { location: b.liQ.DM_CHANNEL });
                            },
                            text: j.intl.string(j.t.rQSndv),
                        }),
                        a,
                    ],
                });
            case b.eA$.PENDING_OUTGOING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            disabled: !0,
                            text: j.intl.string(j.t.xMH6vD),
                        }),
                        a,
                    ],
                });
            default:
                return null;
        }
    },
    O = (e) => {
        let { channelId: t, otherUserId: n } = e,
            s = l.useCallback(() => {
                (0, c.showToast)((0, c.createToast)(j.intl.string(j.t.a2j0hv), c.ToastType.FAILURE));
            }, []),
            a = l.useCallback(() => {
                E.A.closeChannelSidebar(S.fe);
            }, []),
            r = l.useCallback(() => {
                E.A.closeChannelSidebar(S.fe);
            }, []),
            {
                acceptMessageRequest: o,
                rejectMessageRequest: d,
                isAcceptLoading: u,
                isRejectLoading: h,
                isOptimisticAccepted: m,
                isOptimisticRejected: A,
            } = (0, g.t)({ user: T.default.getUser(n), onError: s, onAcceptSuccess: r, onRejectSuccess: a }),
            p = u || h || m || A;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    disabled: p,
                    onClick: () => o(t),
                    loading: u,
                    text: j.intl.string(j.t.Kz8Pwr),
                }),
                (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: p,
                    onClick: () => d(t),
                    loading: h,
                    text: j.intl.string(j.t.B2nygW),
                }),
            ],
        });
    },
    L = (e) => {
        let { userId: t, channel: n, showingBanner: l } = e,
            { channelId: s } = (0, p.N)(),
            d = (0, o.bG)([A.A], () => null != s && A.A.isSpam(s), [s]),
            u = (0, o.bG)([I.A], () => I.A.getRelationshipType(t), [t]),
            h = n.id === s,
            m = !r.Fr && !h,
            g = !!r.Fr || h || d,
            _ =
                d || h
                    ? (0, i.jsxs)("div", {
                          className: R.mG,
                          children: [
                              (0, i.jsx)(O, { channelId: n.id, otherUserId: t }),
                              (0, i.jsx)(f.A, { channel: n }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: R.mG,
                          children: [
                              (0, i.jsx)(D, { relationshipType: u, userId: t, showingBanner: l }),
                              !l && (0, i.jsx)(y.A, { otherUserId: t, channel: n, navigateAwayOnReportSuccess: m }),
                          ],
                      }),
            E =
                u !== b.eA$.PENDING_INCOMING || d || h
                    ? null
                    : (0, i.jsx)(c.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: j.intl.string(j.t.c2v5nO),
                      });
        return (0, i.jsxs)("div", {
            className: g ? R.AA : R.kL,
            children: [
                (0, i.jsx)("div", { className: R.mG, children: (0, i.jsx)(M, { userId: t, channelId: n.id }) }),
                !g && (0, i.jsx)("div", { className: R.yF }),
                (0, i.jsxs)("div", { className: a()(R.mG, R.LV), children: [E, _] }),
            ],
        });
    };
