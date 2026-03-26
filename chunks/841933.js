l.d(t, { A: () => U });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(989349),
    d = l.n(r),
    c = l(311907),
    o = l(397927),
    u = l(688810),
    x = l(726249),
    m = l(624458),
    h = l(513461),
    j = l(716416),
    _ = l(886486),
    A = l(123393),
    g = l(534400),
    b = l(657331),
    T = l(427157),
    f = l(71393),
    E = l(661191),
    v = l(427262),
    S = l(652215),
    N = l(743981),
    I = l(985018),
    R = l(55578),
    C = l(617706);
function p(e) {
    let { icon: t, label: l, onClick: s, disabled: i } = e;
    return (0, n.jsxs)(o.DUT, {
        className: a()(R.hP, { [R.r9]: i }),
        onClick: i ? S.tEg : s,
        "aria-label": l,
        children: [
            (0, n.jsx)(t, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, n.jsx)(o.Text, { variant: "text-sm/normal", color: "none", children: l }),
        ],
    });
}
function M(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        { analyticsLocations: i } = (0, u.Ay)(),
        r = () => {
            (0, b.openUserProfileModal)({ userId: t.id, joinRequestId: s.joinRequestId, sourceAnalyticsLocations: i });
        };
    return (0, n.jsxs)("div", {
        className: R.op,
        children: [
            (0, n.jsxs)("div", {
                className: C.FD,
                children: [
                    (0, n.jsx)(o.DUT, {
                        onClick: r,
                        className: a()(R.vk, C.Wn),
                        children: (0, n.jsx)(o.euF, {
                            src: t.getAvatarURL(l, 48),
                            "aria-label": t.username,
                            size: o._3J.SIZE_48,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: C.oS,
                        children: [
                            (0, n.jsxs)("div", {
                                className: C.K$,
                                children: [
                                    (0, n.jsx)(o.DUT, {
                                        onClick: r,
                                        className: R.vk,
                                        children: (0, n.jsx)(o.Text, {
                                            variant: "text-lg/medium",
                                            children: t?.globalName,
                                        }),
                                    }),
                                    (0, n.jsx)(g.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: l,
                                        badgeSize: N.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: C.Dz,
                                        containerClassName: C.UL,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(o.DUT, {
                                onClick: r,
                                className: R.vk,
                                children: (0, n.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: v.Ay.getUserTag(t),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(o.DUT, {
                className: C.d4,
                onClick: () => m.A.setSelectedGuildJoinRequest(l, null),
                children: (0, n.jsx)(o.PGe, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function D(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        {
            approveRequest: i,
            rejectRequest: a,
            handleOpenInterview: r,
            submitting: d,
        } = (0, A.W)(l, t.id, s.joinRequestId, s.interviewChannelId);
    return (0, n.jsxs)("div", {
        className: R.$l,
        children: [
            (0, n.jsx)(p, { icon: o.yr3, label: I.intl.string(I.t.BzjDQJ), onClick: i, disabled: d }),
            (0, n.jsx)(p, { icon: o.aXh, label: I.intl.string(I.t.hDtbsz), onClick: a, disabled: d }),
            (0, n.jsx)(p, { icon: o.oyn, label: I.intl.string(I.t.KQeYoC), onClick: r, disabled: d }),
        ],
    });
}
function G(e) {
    let { joinRequest: t } = e,
        { actionedAt: l, actionedByUser: s, rejectionReason: i } = t;
    return (0, n.jsxs)("div", {
        className: R.Ik,
        children: [
            (0, n.jsx)(o.aXh, {
                size: "lg",
                color: o.LU0.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: I.intl.string(I.t.bSZkla),
                    }),
                    null != s && null != l
                        ? (0, n.jsxs)("div", {
                              className: R.Ay,
                              children: [
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: I.intl.formatToPlainString(I.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: R.Om }),
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: d()(E.default.extractTimestamp(l)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                    null != i &&
                        (0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: I.intl.formatToPlainString(I.t.fU5PPM, { rejectionReason: i }),
                        }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { joinRequest: t } = e,
        { actionedAt: l, actionedByUser: s } = t;
    return (0, n.jsxs)("div", {
        className: R.Ik,
        children: [
            (0, n.jsx)(o.yr3, {
                size: "lg",
                color: o.LU0.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: o.LU0.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: I.intl.string(I.t.aURgY2),
                    }),
                    null != s && null != l
                        ? (0, n.jsxs)("div", {
                              className: R.Ay,
                              children: [
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: I.intl.formatToPlainString(I.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: R.Om }),
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: d()(E.default.extractTimestamp(l)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function L(e) {
    let { user: t, joinRequest: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Text, {
                className: R._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: I.intl.string(I.t["ldCE/p"]),
            }),
            (0, n.jsxs)("div", {
                className: R.TT,
                children: [
                    (0, n.jsxs)("div", {
                        className: R.lj,
                        children: [
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: I.intl.string(I.t.SaDIpL),
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: d()(E.default.extractTimestamp(t.id)).format("ll"),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: R.lj,
                        children: [
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: I.intl.string(I.t["Vt4cn+"]),
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: d()(l.createdAt).format("ll"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { guildId: t } = e,
        l = (0, j.R)({ guildId: t }),
        { user: i } = l ?? {},
        r = s.useMemo(() => l?.formResponses ?? [], [l?.formResponses]),
        d = s.useMemo(() => (null != i ? new T.A(i) : null), [i]),
        u = (0, c.bG)([f.A], () => f.A.getGuild(t), [t]);
    return ((0, x.HU)({ subsection: I.intl.string(I.t.nqrK8X), location: u?.name }),
    null == l || null == u || null == d || null == i)
        ? null
        : (0, n.jsx)("section", {
              className: R.pz,
              children: (0, n.jsx)(o.HOs, {
                  children: (0, n.jsxs)("div", {
                      className: R.WH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: R.Ui,
                              children: [
                                  (0, n.jsx)(M, { user: d, guildId: t, joinRequest: l }),
                                  l.applicationStatus === h.B5.SUBMITTED &&
                                      (0, n.jsx)(D, { user: d, guildId: t, joinRequest: l }),
                                  l.applicationStatus === h.B5.REJECTED && (0, n.jsx)(G, { joinRequest: l }),
                                  l.applicationStatus === h.B5.APPROVED && (0, n.jsx)(y, { joinRequest: l }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(R.Ui, R.gi),
                              children: [
                                  (0, n.jsx)(_.A, { guildId: u.id, formFields: r, user: d, showRequirements: !1 }),
                                  (0, n.jsx)(L, { guildId: t, user: d, joinRequest: l }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
