n.d(t, { Z: () => Z });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(906732),
    m = n(252618),
    x = n(693546),
    j = n(246364),
    b = n(328977),
    h = n(666233),
    f = n(360328),
    g = n(172751),
    p = n(892001),
    v = n(598077),
    _ = n(430824),
    C = n(709054),
    T = n(51144),
    S = n(981631),
    E = n(131085),
    N = n(388032),
    O = n(59678),
    P = n(428331);
function y(e) {
    let { icon: t, label: n, onClick: r, disabled: i } = e;
    return (0, l.jsxs)(d.P3F, {
        className: a()(O.actionButton, { [O.disabled]: i }),
        onClick: i ? S.dG4 : r,
        "aria-label": n,
        children: [
            (0, l.jsx)(t, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
            }),
            (0, l.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "none",
                children: n,
            }),
        ],
    });
}
function I(e) {
    let { user: t, guildId: n, joinRequest: r } = e,
        { analyticsLocations: i } = (0, u.ZP)(),
        s = () => {
            (0, p.openUserProfileModal)({
                userId: t.id,
                joinRequestId: r.joinRequestId,
                sourceAnalyticsLocations: i,
            });
        };
    return (0, l.jsxs)("div", {
        className: O.infoContainer,
        children: [
            (0, l.jsxs)("div", {
                className: P.memberNameContainer,
                children: [
                    (0, l.jsx)(d.P3F, {
                        onClick: s,
                        className: a()(O.clickable, P.memberAvatar),
                        children: (0, l.jsx)(d.qEK, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: d.EFr.SIZE_48,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: P.memberNameAndTagContainer,
                        children: [
                            (0, l.jsxs)("div", {
                                className: P.memberNameTextContainer,
                                children: [
                                    (0, l.jsx)(d.P3F, {
                                        onClick: s,
                                        className: O.clickable,
                                        children: (0, l.jsx)(d.Text, {
                                            variant: "text-lg/medium",
                                            children: null == t ? void 0 : t.globalName,
                                        }),
                                    }),
                                    (0, l.jsx)(g.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: E.Gg.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: P.memberClanTag,
                                        containerClassName: P.memberClanTagContainer,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(d.P3F, {
                                onClick: s,
                                className: O.clickable,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: T.ZP.getUserTag(t),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(d.P3F, {
                className: P.closeAction,
                onClick: () => x.Z.setSelectedGuildJoinRequest(n, null),
                children: (0, l.jsx)(d.Dio, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
        ],
    });
}
function R(e) {
    let { user: t, guildId: n, joinRequest: r } = e,
        {
            approveRequest: i,
            rejectRequest: a,
            handleOpenInterview: s,
            submitting: o,
        } = (0, f.s)(n, t.id, r.joinRequestId, r.interviewChannelId);
    return (0, l.jsxs)("div", {
        className: O.actionRow,
        children: [
            (0, l.jsx)(y, {
                icon: d.owK,
                label: N.intl.string(N.t.BzjDQJ),
                onClick: i,
                disabled: o,
            }),
            (0, l.jsx)(y, {
                icon: d.k$p,
                label: N.intl.string(N.t.hDtbsz),
                onClick: a,
                disabled: o,
            }),
            (0, l.jsx)(y, {
                icon: d.kBi,
                label: N.intl.string(N.t.KQeYoC),
                onClick: s,
                disabled: o,
            }),
        ],
    });
}
function w(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: r, actionedByUser: i, rejectionReason: a } = n;
    return (0, l.jsxs)("div", {
        className: O.actionContainer,
        children: [
            (0, l.jsx)(d.k$p, {
                size: "lg",
                color: d.TVs.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: d.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: N.intl.string(N.t.bSZkla),
                    }),
                    null != i && null != r
                        ? (0, l.jsxs)("div", {
                              className: O.actionedInfo,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: N.intl.formatToPlainString(N.t.qnimbL, {
                                          username: null != (t = i.global_name) ? t : i.username,
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: O.dot }),
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: o()(C.default.extractTimestamp(r)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                    null != a &&
                        (0, l.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: N.intl.formatToPlainString(N.t.fU5PPM, { rejectionReason: a }),
                        }),
                ],
            }),
        ],
    });
}
function A(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: r, actionedByUser: i } = n;
    return (0, l.jsxs)("div", {
        className: O.actionContainer,
        children: [
            (0, l.jsx)(d.owK, {
                size: "lg",
                color: d.TVs.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: d.TVs.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: N.intl.string(N.t.aURgY2),
                    }),
                    null != i && null != r
                        ? (0, l.jsxs)("div", {
                              className: O.actionedInfo,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: N.intl.formatToPlainString(N.t.qnimbL, {
                                          username: null != (t = i.global_name) ? t : i.username,
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: O.dot }),
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: o()(C.default.extractTimestamp(r)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function M(e) {
    let { user: t, joinRequest: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(d.Text, {
                className: O.accountLabel,
                variant: "text-sm/medium",
                color: "text-muted",
                children: N.intl.string(N.t["ldCE/p"]),
            }),
            (0, l.jsxs)("div", {
                className: O.userInfoContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: O.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: N.intl.string(N.t.SaDIpL),
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: o()(C.default.extractTimestamp(t.id)).format("ll"),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: O.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: N.intl.string(N.t["Vt4cn+"]),
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: o()(n.createdAt).format("ll"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { guildId: t } = e,
        n = (0, b.L)({ guildId: t }),
        { user: i } = null != n ? n : {},
        s = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.formResponses) ? e : [];
        }, [null == n ? void 0 : n.formResponses]),
        o = r.useMemo(() => (null != i ? new v.Z(i) : null), [i]),
        u = (0, c.e7)([_.Z], () => _.Z.getGuild(t), [t]);
    return ((0, m.Tt)({
        subsection: N.intl.string(N.t.nqrK8X),
        location: null == u ? void 0 : u.name,
    }),
    null == n || null == u || null == o || null == i)
        ? null
        : (0, l.jsx)("section", {
              className: O.sidebar,
              children: (0, l.jsx)(d.Ttm, {
                  children: (0, l.jsxs)("div", {
                      className: O.innerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: O.cardContainer,
                              children: [
                                  (0, l.jsx)(I, {
                                      user: o,
                                      guildId: t,
                                      joinRequest: n,
                                  }),
                                  n.applicationStatus === j.wB.SUBMITTED &&
                                      (0, l.jsx)(R, {
                                          user: o,
                                          guildId: t,
                                          joinRequest: n,
                                      }),
                                  n.applicationStatus === j.wB.REJECTED && (0, l.jsx)(w, { joinRequest: n }),
                                  n.applicationStatus === j.wB.APPROVED && (0, l.jsx)(A, { joinRequest: n }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: a()(O.cardContainer, O.responsesContainer),
                              children: [
                                  (0, l.jsx)(h.Z, {
                                      guildId: u.id,
                                      formFields: s,
                                      user: o,
                                      showRequirements: !1,
                                  }),
                                  (0, l.jsx)(M, {
                                      guildId: t,
                                      user: o,
                                      joinRequest: n,
                                  }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
