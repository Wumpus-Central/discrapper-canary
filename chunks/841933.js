l.d(t, { A: () => H });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(989349),
    o = l.n(r),
    d = l(311907),
    c = l(939249),
    u = l(834730),
    x = l(97808),
    m = l(778712),
    h = l(789645),
    j = l(628284),
    _ = l(285796),
    A = l(534890),
    g = l(827734),
    f = l(573613),
    E = l(688810),
    v = l(726249),
    b = l(624458),
    N = l(513461),
    S = l(716416),
    C = l(886486),
    p = l(123393),
    I = l(534400),
    T = l(657331),
    R = l(427157),
    M = l(71393),
    D = l(661191),
    y = l(427262),
    G = l(652215),
    L = l(743981),
    k = l(985018),
    P = l(982186),
    w = l(637498);
function B(e) {
    let { icon: t, label: l, onClick: s, disabled: i } = e;
    return (0, n.jsxs)(c.D, {
        className: a()(P.hP, { [P.r9]: i }),
        onClick: i ? G.tEg : s,
        "aria-label": l,
        children: [
            (0, n.jsx)(t, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "none", children: l }),
        ],
    });
}
function U(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        r = () => {
            (0, T.openUserProfileModal)({ userId: t.id, joinRequestId: s.joinRequestId, sourceAnalyticsLocations: i });
        };
    return (0, n.jsxs)("div", {
        className: P.op,
        children: [
            (0, n.jsxs)("div", {
                className: w.FD,
                children: [
                    (0, n.jsx)(c.D, {
                        onClick: r,
                        className: a()(P.vk, w.Wn),
                        children: (0, n.jsx)(x.eu, {
                            src: t.getAvatarURL(l, 48),
                            "aria-label": t.username,
                            size: m._3.SIZE_48,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: w.oS,
                        children: [
                            (0, n.jsxs)("div", {
                                className: w.K$,
                                children: [
                                    (0, n.jsx)(c.D, {
                                        onClick: r,
                                        className: P.vk,
                                        children: (0, n.jsx)(u.E, {
                                            variant: "text-lg/medium",
                                            children: t?.globalName,
                                        }),
                                    }),
                                    (0, n.jsx)(I.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: l,
                                        badgeSize: L.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: w.Dz,
                                        containerClassName: w.UL,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(c.D, {
                                onClick: r,
                                className: P.vk,
                                children: (0, n.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: y.Ay.getUserTag(t),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.D, {
                className: w.d4,
                onClick: () => b.A.setSelectedGuildJoinRequest(l, null),
                children: (0, n.jsx)(h.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function O(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        {
            approveRequest: i,
            rejectRequest: a,
            handleOpenInterview: r,
            submitting: o,
        } = (0, p.W)(l, t.id, s.joinRequestId, s.interviewChannelId);
    return (0, n.jsxs)("div", {
        className: P.$l,
        children: [
            (0, n.jsx)(B, { icon: j.y, label: k.intl.string(k.t.BzjDQJ), onClick: i, disabled: o }),
            (0, n.jsx)(B, { icon: _.a, label: k.intl.string(k.t.hDtbsz), onClick: a, disabled: o }),
            (0, n.jsx)(B, { icon: A.o, label: k.intl.string(k.t.KQeYoC), onClick: r, disabled: o }),
        ],
    });
}
function F(e) {
    let { joinRequest: t } = e,
        { actionedAt: l, actionedByUser: s, rejectionReason: i } = t;
    return (0, n.jsxs)("div", {
        className: P.Ik,
        children: [
            (0, n.jsx)(_.a, {
                size: "lg",
                color: g.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: g.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: k.intl.string(k.t.bSZkla),
                    }),
                    null != s && null != l
                        ? (0, n.jsxs)("div", {
                              className: P.Ay,
                              children: [
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: k.intl.formatToPlainString(k.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: P.Om }),
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: o()(D.default.extractTimestamp(l)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                    null != i &&
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: k.intl.formatToPlainString(k.t.fU5PPM, { rejectionReason: i }),
                        }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { joinRequest: t } = e,
        { actionedAt: l, actionedByUser: s } = t;
    return (0, n.jsxs)("div", {
        className: P.Ik,
        children: [
            (0, n.jsx)(j.y, {
                size: "lg",
                color: g.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: g.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: k.intl.string(k.t.aURgY2),
                    }),
                    null != s && null != l
                        ? (0, n.jsxs)("div", {
                              className: P.Ay,
                              children: [
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: k.intl.formatToPlainString(k.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: P.Om }),
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: o()(D.default.extractTimestamp(l)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function q(e) {
    let { user: t, joinRequest: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(u.E, {
                className: P._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: k.intl.string(k.t["ldCE/p"]),
            }),
            (0, n.jsxs)("div", {
                className: P.TT,
                children: [
                    (0, n.jsxs)("div", {
                        className: P.lj,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: k.intl.string(k.t.SaDIpL),
                            }),
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: o()(D.default.extractTimestamp(t.id)).format("ll"),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: P.lj,
                        children: [
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: k.intl.string(k.t["Vt4cn+"]),
                            }),
                            (0, n.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: o()(l.createdAt).format("ll"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { guildId: t } = e,
        l = (0, S.R)({ guildId: t }),
        { user: i } = l ?? {},
        r = s.useMemo(() => l?.formResponses ?? [], [l?.formResponses]),
        o = s.useMemo(() => (null != i ? new R.A(i) : null), [i]),
        c = (0, d.bG)([M.A], () => M.A.getGuild(t), [t]);
    return ((0, v.HU)({ subsection: k.intl.string(k.t.nqrK8X), location: c?.name }),
    null == l || null == c || null == o || null == i)
        ? null
        : (0, n.jsx)("section", {
              className: P.pz,
              children: (0, n.jsx)(f.Ip, {
                  children: (0, n.jsxs)("div", {
                      className: P.WH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: P.Ui,
                              children: [
                                  (0, n.jsx)(U, { user: o, guildId: t, joinRequest: l }),
                                  l.applicationStatus === N.B5.SUBMITTED &&
                                      (0, n.jsx)(O, { user: o, guildId: t, joinRequest: l }),
                                  l.applicationStatus === N.B5.REJECTED && (0, n.jsx)(F, { joinRequest: l }),
                                  l.applicationStatus === N.B5.APPROVED && (0, n.jsx)(z, { joinRequest: l }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(P.Ui, P.gi),
                              children: [
                                  (0, n.jsx)(C.A, { guildId: c.id, formFields: r, user: o, showRequirements: !1 }),
                                  (0, n.jsx)(q, { guildId: t, user: o, joinRequest: l }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
