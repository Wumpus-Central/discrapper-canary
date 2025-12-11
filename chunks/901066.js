n.d(t, { Z: () => M });
var l = n(54381),
    r = n(473749),
    a = n(120356),
    i = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(906732),
    m = n(252618),
    x = n(693546),
    b = n(246364),
    j = n(328977),
    f = n(666233),
    h = n(360328),
    g = n(172751),
    p = n(892001),
    v = n(598077),
    C = n(430824),
    T = n(709054),
    S = n(51144),
    E = n(981631),
    N = n(131085),
    O = n(388032),
    _ = n(491727),
    P = n(433110);
function I(e) {
    let { icon: t, label: n, onClick: r, disabled: a } = e;
    return (0, l.jsxs)(d.P3F, {
        className: i()(_.actionButton, { [_.disabled]: a }),
        onClick: a ? E.dG4 : r,
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
function y(e) {
    let { user: t, guildId: n, joinRequest: r } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        s = () => {
            (0, p.openUserProfileModal)({
                userId: t.id,
                joinRequestId: r.joinRequestId,
                sourceAnalyticsLocations: a,
            });
        };
    return (0, l.jsxs)("div", {
        className: _.infoContainer,
        children: [
            (0, l.jsxs)("div", {
                className: P.memberNameContainer,
                children: [
                    (0, l.jsx)(d.P3F, {
                        onClick: s,
                        className: i()(_.clickable, P.memberAvatar),
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
                                        className: _.clickable,
                                        children: (0, l.jsx)(d.Text, {
                                            variant: "text-lg/medium",
                                            children: null == t ? void 0 : t.globalName,
                                        }),
                                    }),
                                    (0, l.jsx)(g.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: N.Gg.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: P.memberClanTag,
                                        containerClassName: P.memberClanTagContainer,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(d.P3F, {
                                onClick: s,
                                className: _.clickable,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: S.ZP.getUserTag(t),
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
            approveRequest: a,
            rejectRequest: i,
            handleOpenInterview: s,
            submitting: o,
        } = (0, h.s)(n, t.id, r.joinRequestId, r.interviewChannelId);
    return (0, l.jsxs)("div", {
        className: _.actionRow,
        children: [
            (0, l.jsx)(I, {
                icon: d.owK,
                label: O.intl.string(O.t.BzjDQJ),
                onClick: a,
                disabled: o,
            }),
            (0, l.jsx)(I, {
                icon: d.k$p,
                label: O.intl.string(O.t.hDtbsz),
                onClick: i,
                disabled: o,
            }),
            (0, l.jsx)(I, {
                icon: d.kBi,
                label: O.intl.string(O.t.KQeYoC),
                onClick: s,
                disabled: o,
            }),
        ],
    });
}
function w(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: r, actionedByUser: a, rejectionReason: i } = n;
    return (0, l.jsxs)("div", {
        className: _.actionContainer,
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
                        color: "text-strong",
                        children: O.intl.string(O.t.bSZkla),
                    }),
                    null != a && null != r
                        ? (0, l.jsxs)("div", {
                              className: _.actionedInfo,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: O.intl.formatToPlainString(O.t.qnimbL, {
                                          username: null != (t = a.global_name) ? t : a.username,
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: _.dot }),
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: o()(T.default.extractTimestamp(r)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                    null != i &&
                        (0, l.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: O.intl.formatToPlainString(O.t.fU5PPM, { rejectionReason: i }),
                        }),
                ],
            }),
        ],
    });
}
function A(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: r, actionedByUser: a } = n;
    return (0, l.jsxs)("div", {
        className: _.actionContainer,
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
                        color: "text-strong",
                        children: O.intl.string(O.t.aURgY2),
                    }),
                    null != a && null != r
                        ? (0, l.jsxs)("div", {
                              className: _.actionedInfo,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: O.intl.formatToPlainString(O.t.qnimbL, {
                                          username: null != (t = a.global_name) ? t : a.username,
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: _.dot }),
                                  (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: o()(T.default.extractTimestamp(r)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function Z(e) {
    let { user: t, joinRequest: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(d.Text, {
                className: _.accountLabel,
                variant: "text-sm/medium",
                color: "text-muted",
                children: O.intl.string(O.t["ldCE/p"]),
            }),
            (0, l.jsxs)("div", {
                className: _.userInfoContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: _.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: O.intl.string(O.t.SaDIpL),
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: o()(T.default.extractTimestamp(t.id)).format("ll"),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: _.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: O.intl.string(O.t["Vt4cn+"]),
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
function M(e) {
    let { guildId: t } = e,
        n = (0, j.L)({ guildId: t }),
        { user: a } = null != n ? n : {},
        s = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.formResponses) ? e : [];
        }, [null == n ? void 0 : n.formResponses]),
        o = r.useMemo(() => (null != a ? new v.Z(a) : null), [a]),
        u = (0, c.e7)([C.Z], () => C.Z.getGuild(t), [t]);
    return ((0, m.Tt)({
        subsection: O.intl.string(O.t.nqrK8X),
        location: null == u ? void 0 : u.name,
    }),
    null == n || null == u || null == o || null == a)
        ? null
        : (0, l.jsx)("section", {
              className: _.sidebar,
              children: (0, l.jsx)(d.Ttm, {
                  children: (0, l.jsxs)("div", {
                      className: _.innerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: _.cardContainer,
                              children: [
                                  (0, l.jsx)(y, {
                                      user: o,
                                      guildId: t,
                                      joinRequest: n,
                                  }),
                                  n.applicationStatus === b.wB.SUBMITTED &&
                                      (0, l.jsx)(R, {
                                          user: o,
                                          guildId: t,
                                          joinRequest: n,
                                      }),
                                  n.applicationStatus === b.wB.REJECTED && (0, l.jsx)(w, { joinRequest: n }),
                                  n.applicationStatus === b.wB.APPROVED && (0, l.jsx)(A, { joinRequest: n }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: i()(_.cardContainer, _.responsesContainer),
                              children: [
                                  (0, l.jsx)(f.Z, {
                                      guildId: u.id,
                                      formFields: s,
                                      user: o,
                                      showRequirements: !1,
                                  }),
                                  (0, l.jsx)(Z, {
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
