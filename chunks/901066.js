t.d(n, { Z: () => w });
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(913527),
    o = t.n(s),
    c = t(442837),
    d = t(481060),
    u = t(906732),
    m = t(979264),
    x = t(252618),
    h = t(693546),
    j = t(246364),
    C = t(328977),
    _ = t(666233),
    f = t(360328),
    b = t(171368),
    v = t(598077),
    N = t(430824),
    g = t(709054),
    T = t(51144),
    p = t(981631),
    I = t(308083),
    E = t(388032),
    S = t(261074),
    R = t(360429);
function M(e) {
    let { icon: n, label: t, onClick: i, disabled: r } = e;
    return (0, l.jsxs)(d.P3F, {
        className: a()(S.actionButton, { [S.disabled]: r }),
        onClick: r ? p.dG4 : i,
        'aria-label': t,
        children: [
            (0, l.jsx)(n, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
            }),
            (0, l.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'none',
                children: t
            })
        ]
    });
}
function A(e) {
    let { user: n, guildId: t, joinRequest: i } = e,
        { analyticsLocations: r } = (0, u.ZP)(),
        s = () => {
            (0, b.openUserProfileModal)({
                userId: n.id,
                joinRequestId: i.joinRequestId,
                sourceAnalyticsLocations: r,
                analyticsLocation: {
                    section: p.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: p.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, l.jsxs)('div', {
        className: S.infoContainer,
        children: [
            (0, l.jsxs)('div', {
                className: R.memberNameContainer,
                children: [
                    (0, l.jsx)(d.P3F, {
                        onClick: s,
                        className: a()(S.clickable, R.memberAvatar),
                        children: (0, l.jsx)(d.qEK, {
                            src: n.getAvatarURL(t, 48),
                            'aria-label': n.username,
                            size: d.EFr.SIZE_48
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: R.memberNameAndTagContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: R.memberNameTextContainer,
                                children: [
                                    (0, l.jsx)(d.P3F, {
                                        onClick: s,
                                        className: S.clickable,
                                        children: (0, l.jsx)(d.Text, {
                                            variant: 'text-lg/medium',
                                            children: null == n ? void 0 : n.globalName
                                        })
                                    }),
                                    (0, l.jsx)(m.ZP, {
                                        primaryGuild: null == n ? void 0 : n.primaryGuild,
                                        userId: null == n ? void 0 : n.id,
                                        contextGuildId: t,
                                        badgeSize: I.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: R.memberClanTag,
                                        containerClassName: R.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, l.jsx)(d.P3F, {
                                onClick: s,
                                className: S.clickable,
                                children: (0, l.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-normal',
                                    children: T.ZP.getUserTag(n)
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(d.P3F, {
                className: R.closeAction,
                onClick: () => h.Z.setSelectedGuildJoinRequest(t, null),
                children: (0, l.jsx)(d.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function Z(e) {
    let { user: n, guildId: t, joinRequest: i } = e,
        { approveRequest: r, rejectRequest: a, handleOpenInterview: s, submitting: o } = (0, f.s)(t, n.id, i.joinRequestId, i.interviewChannelId);
    return (0, l.jsxs)('div', {
        className: S.actionRow,
        children: [
            (0, l.jsx)(M, {
                icon: d.owK,
                label: E.intl.string(E.t.BzjDQE),
                onClick: r,
                disabled: o
            }),
            (0, l.jsx)(M, {
                icon: d.k$p,
                label: E.intl.string(E.t.hDtbs7),
                onClick: a,
                disabled: o
            }),
            (0, l.jsx)(M, {
                icon: d.kBi,
                label: E.intl.string(E.t.KQeYoK),
                onClick: s,
                disabled: o
            })
        ]
    });
}
function k(e) {
    var n;
    let { joinRequest: t } = e,
        { actionedAt: i, actionedByUser: r, rejectionReason: a } = t;
    return (0, l.jsxs)('div', {
        className: S.rejectionReasonContainer,
        children: [
            (0, l.jsx)(d.k$p, {
                size: 'lg',
                color: d.TVs.colors.BG_BASE_SECONDARY,
                secondaryColor: d.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: E.intl.string(E.t.bSZklZ)
                    }),
                    null != r && null != i
                        ? (0, l.jsxs)('div', {
                              className: S.actionedInfo,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: E.intl.formatToPlainString(E.t.qnimbG, { username: null !== (n = r.global_name) && void 0 !== n ? n : r.username })
                                  }),
                                  (0, l.jsx)('div', { className: S.dot }),
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: o()(g.default.extractTimestamp(i)).format('ll')
                                  })
                              ]
                          })
                        : null,
                    null != a &&
                        (0, l.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: E.intl.formatToPlainString(E.t.fU5PPD, { rejectionReason: a })
                        })
                ]
            })
        ]
    });
}
function P(e) {
    let { user: n, joinRequest: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(d.Text, {
                className: S.accountLabel,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: E.intl.string(E.t['ldCE/v'])
            }),
            (0, l.jsxs)('div', {
                className: S.userInfoContainer,
                children: [
                    (0, l.jsxs)('div', {
                        className: S.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: E.intl.string(E.t.SaDIpK)
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: o()(g.default.extractTimestamp(n.id)).format('ll')
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: S.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: E.intl.string(E.t.Vt4cn5)
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: o()(t.createdAt).format('ll')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function w(e) {
    let { guildId: n } = e,
        t = (0, C.L)({ guildId: n }),
        { user: r } = null != t ? t : {},
        s = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.formResponses) && void 0 !== e ? e : [];
        }, [null == t ? void 0 : t.formResponses]),
        o = i.useMemo(() => (null != r ? new v.Z(r) : null), [r]),
        u = (0, c.e7)([N.Z], () => N.Z.getGuild(n), [n]);
    return ((0, x.Tt)({
        subsection: E.intl.string(E.t.nqrK8f),
        location: null == u ? void 0 : u.name
    }),
    null != t && null != u && null != o && null != r)
        ? (0, l.jsx)('section', {
              className: S.sidebar,
              children: (0, l.jsx)(d.Ttm, {
                  children: (0, l.jsxs)('div', {
                      className: S.innerContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: S.cardContainer,
                              children: [
                                  (0, l.jsx)(A, {
                                      user: o,
                                      guildId: n,
                                      joinRequest: t
                                  }),
                                  t.applicationStatus === j.wB.SUBMITTED &&
                                      (0, l.jsx)(Z, {
                                          user: o,
                                          guildId: n,
                                          joinRequest: t
                                      }),
                                  t.applicationStatus === j.wB.REJECTED && (0, l.jsx)(k, { joinRequest: t })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: a()(S.cardContainer, S.responsesContainer),
                              children: [
                                  (0, l.jsx)(_.Z, {
                                      guildId: u.id,
                                      formFields: s,
                                      user: o,
                                      showRequirements: !1
                                  }),
                                  (0, l.jsx)(P, {
                                      guildId: n,
                                      user: o,
                                      joinRequest: t
                                  })
                              ]
                          })
                      ]
                  })
              })
          })
        : null;
}
