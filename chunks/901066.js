n.d(t, { Z: () => A });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(906732),
    m = n(979264),
    x = n(252618),
    h = n(693546),
    j = n(246364),
    b = n(328977),
    f = n(666233),
    N = n(360328),
    p = n(171368),
    C = n(598077),
    _ = n(430824),
    g = n(709054),
    v = n(51144),
    T = n(981631),
    E = n(308083),
    I = n(388032),
    S = n(145870),
    y = n(157092);
function R(e) {
    let { icon: t, label: n, onClick: l, disabled: i } = e;
    return (0, r.jsxs)(d.P3F, {
        className: a()(S.actionButton, { [S.disabled]: i }),
        onClick: i ? T.dG4 : l,
        'aria-label': n,
        children: [
            (0, r.jsx)(t, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
            }),
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'none',
                children: n
            })
        ]
    });
}
function P(e) {
    let { user: t, guildId: n, joinRequest: l } = e,
        { analyticsLocations: i } = (0, u.ZP)(),
        s = () => {
            (0, p.openUserProfileModal)({
                userId: t.id,
                joinRequestId: l.joinRequestId,
                sourceAnalyticsLocations: i,
                analyticsLocation: {
                    section: T.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: T.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, r.jsxs)('div', {
        className: S.infoContainer,
        children: [
            (0, r.jsxs)('div', {
                className: y.memberNameContainer,
                children: [
                    (0, r.jsx)(d.P3F, {
                        onClick: s,
                        className: a()(S.clickable, y.memberAvatar),
                        children: (0, r.jsx)(d.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: d.EFr.SIZE_48
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: y.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: y.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(d.P3F, {
                                        onClick: s,
                                        className: S.clickable,
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-lg/medium',
                                            children: null == t ? void 0 : t.globalName
                                        })
                                    }),
                                    (0, r.jsx)(m.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: E.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: y.memberClanTag,
                                        containerClassName: y.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, r.jsx)(d.P3F, {
                                onClick: s,
                                className: S.clickable,
                                children: (0, r.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-normal',
                                    children: v.ZP.getUserTag(t)
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(d.P3F, {
                className: y.closeAction,
                onClick: () => h.Z.setSelectedGuildJoinRequest(n, null),
                children: (0, r.jsx)(d.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function O(e) {
    let { user: t, guildId: n, joinRequest: l } = e,
        { approveRequest: i, rejectRequest: a, handleOpenInterview: s, submitting: o } = (0, N.s)(n, t.id, l.joinRequestId, l.interviewChannelId);
    return (0, r.jsxs)('div', {
        className: S.actionRow,
        children: [
            (0, r.jsx)(R, {
                icon: d.owK,
                label: I.NW.string(I.t.BzjDQE),
                onClick: i,
                disabled: o
            }),
            (0, r.jsx)(R, {
                icon: d.k$p,
                label: I.NW.string(I.t.hDtbs7),
                onClick: a,
                disabled: o
            }),
            (0, r.jsx)(R, {
                icon: d.kBi,
                label: I.NW.string(I.t.KQeYoK),
                onClick: s,
                disabled: o
            })
        ]
    });
}
function w(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: l, actionedByUser: i, rejectionReason: a } = n;
    return (0, r.jsxs)('div', {
        className: S.rejectionReasonContainer,
        children: [
            (0, r.jsx)(d.k$p, {
                size: 'lg',
                color: d.TVs.colors.BG_BASE_SECONDARY,
                secondaryColor: d.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: I.NW.string(I.t.bSZklZ)
                    }),
                    null != i && null != l
                        ? (0, r.jsxs)('div', {
                              className: S.actionedInfo,
                              children: [
                                  (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: I.NW.formatToPlainString(I.t.qnimbG, { username: null != (t = i.global_name) ? t : i.username })
                                  }),
                                  (0, r.jsx)('div', { className: S.dot }),
                                  (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: o()(g.default.extractTimestamp(l)).format('ll')
                                  })
                              ]
                          })
                        : null,
                    null != a &&
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: I.NW.formatToPlainString(I.t.fU5PPD, { rejectionReason: a })
                        })
                ]
            })
        ]
    });
}
function M(e) {
    let { user: t, joinRequest: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Text, {
                className: S.accountLabel,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: I.NW.string(I.t['ldCE/v'])
            }),
            (0, r.jsxs)('div', {
                className: S.userInfoContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.infoRow,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: I.NW.string(I.t.SaDIpK)
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: o()(g.default.extractTimestamp(t.id)).format('ll')
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: S.infoRow,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: I.NW.string(I.t.Vt4cn5)
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: o()(n.createdAt).format('ll')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function A(e) {
    let { guildId: t } = e,
        n = (0, b.L)({ guildId: t }),
        { user: i } = null != n ? n : {},
        s = l.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.formResponses) ? e : [];
        }, [null == n ? void 0 : n.formResponses]),
        o = l.useMemo(() => (null != i ? new C.Z(i) : null), [i]),
        u = (0, c.e7)([_.Z], () => _.Z.getGuild(t), [t]);
    return ((0, x.Tt)({
        subsection: I.NW.string(I.t.nqrK8f),
        location: null == u ? void 0 : u.name
    }),
    null == n || null == u || null == o || null == i)
        ? null
        : (0, r.jsx)('section', {
              className: S.sidebar,
              children: (0, r.jsx)(d.Ttm, {
                  children: (0, r.jsxs)('div', {
                      className: S.innerContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: S.cardContainer,
                              children: [
                                  (0, r.jsx)(P, {
                                      user: o,
                                      guildId: t,
                                      joinRequest: n
                                  }),
                                  n.applicationStatus === j.wB.SUBMITTED &&
                                      (0, r.jsx)(O, {
                                          user: o,
                                          guildId: t,
                                          joinRequest: n
                                      }),
                                  n.applicationStatus === j.wB.REJECTED && (0, r.jsx)(w, { joinRequest: n })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: a()(S.cardContainer, S.responsesContainer),
                              children: [
                                  (0, r.jsx)(f.Z, {
                                      guildId: u.id,
                                      formFields: s,
                                      user: o,
                                      showRequirements: !1
                                  }),
                                  (0, r.jsx)(M, {
                                      guildId: t,
                                      user: o,
                                      joinRequest: n
                                  })
                              ]
                          })
                      ]
                  })
              })
          });
}
