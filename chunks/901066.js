n.d(t, { Z: () => M });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
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
    C = n(171368),
    p = n(598077),
    v = n(430824),
    g = n(709054),
    _ = n(51144),
    T = n(981631),
    I = n(308083),
    E = n(388032),
    S = n(145870),
    y = n(157092);
function R(e) {
    let { icon: t, label: n, onClick: l, disabled: a } = e;
    return (0, r.jsxs)(d.P3F, {
        className: i()(S.actionButton, { [S.disabled]: a }),
        onClick: a ? T.dG4 : l,
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
        { analyticsLocations: a } = (0, u.ZP)(),
        s = () => {
            (0, C.openUserProfileModal)({
                userId: t.id,
                joinRequestId: l.joinRequestId,
                sourceAnalyticsLocations: a,
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
                        className: i()(S.clickable, y.memberAvatar),
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
                                        badgeSize: I.NC.SIZE_16,
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
                                    children: _.ZP.getUserTag(t)
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
        { approveRequest: a, rejectRequest: i, handleOpenInterview: s, submitting: o } = (0, N.s)(n, t.id, l.joinRequestId, l.interviewChannelId);
    return (0, r.jsxs)('div', {
        className: S.actionRow,
        children: [
            (0, r.jsx)(R, {
                icon: d.owK,
                label: E.NW.string(E.t.BzjDQE),
                onClick: a,
                disabled: o
            }),
            (0, r.jsx)(R, {
                icon: d.k$p,
                label: E.NW.string(E.t.hDtbs7),
                onClick: i,
                disabled: o
            }),
            (0, r.jsx)(R, {
                icon: d.kBi,
                label: E.NW.string(E.t.KQeYoK),
                onClick: s,
                disabled: o
            })
        ]
    });
}
function w(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: l, actionedByUser: a, rejectionReason: i } = n;
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
                        children: E.NW.string(E.t.bSZklZ)
                    }),
                    null != a && null != l
                        ? (0, r.jsxs)('div', {
                              className: S.actionedInfo,
                              children: [
                                  (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: E.NW.formatToPlainString(E.t.qnimbG, { username: null != (t = a.global_name) ? t : a.username })
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
                    null != i &&
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: E.NW.formatToPlainString(E.t.fU5PPD, { rejectionReason: i })
                        })
                ]
            })
        ]
    });
}
function A(e) {
    let { user: t, joinRequest: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Text, {
                className: S.accountLabel,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: E.NW.string(E.t['ldCE/v'])
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
                                children: E.NW.string(E.t.SaDIpK)
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
                                children: E.NW.string(E.t.Vt4cn5)
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
function M(e) {
    let { guildId: t } = e,
        n = (0, b.L)({ guildId: t }),
        { user: a } = null != n ? n : {},
        s = l.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.formResponses) ? e : [];
        }, [null == n ? void 0 : n.formResponses]),
        o = l.useMemo(() => (null != a ? new p.Z(a) : null), [a]),
        u = (0, c.e7)([v.Z], () => v.Z.getGuild(t), [t]);
    return ((0, x.Tt)({
        subsection: E.NW.string(E.t.nqrK8f),
        location: null == u ? void 0 : u.name
    }),
    null == n || null == u || null == o || null == a)
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
                              className: i()(S.cardContainer, S.responsesContainer),
                              children: [
                                  (0, r.jsx)(f.Z, {
                                      guildId: u.id,
                                      formFields: s,
                                      user: o,
                                      showRequirements: !1
                                  }),
                                  (0, r.jsx)(A, {
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
