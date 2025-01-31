t.d(n, { Z: () => L });
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(913527),
    o = t.n(s),
    d = t(442837),
    c = t(481060),
    u = t(906732),
    m = t(979264),
    x = t(252618),
    h = t(693546),
    j = t(246364),
    _ = t(328977),
    C = t(666233),
    f = t(360328),
    v = t(171368),
    N = t(598077),
    b = t(430824),
    E = t(709054),
    g = t(51144),
    T = t(981631),
    I = t(308083),
    S = t(388032),
    p = t(861683),
    R = t(125712);
function M(e) {
    let { icon: n, label: t, onClick: i, disabled: r } = e;
    return (0, l.jsxs)(c.P3F, {
        className: a()(p.actionButton, { [p.disabled]: r }),
        onClick: r ? T.dG4 : i,
        'aria-label': t,
        children: [
            (0, l.jsx)(n, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
            }),
            (0, l.jsx)(c.Text, {
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
            (0, v.openUserProfileModal)({
                userId: n.id,
                joinRequestId: i.joinRequestId,
                sourceAnalyticsLocations: r,
                analyticsLocation: {
                    section: T.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: T.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, l.jsxs)('div', {
        className: p.infoContainer,
        children: [
            (0, l.jsxs)('div', {
                className: R.memberNameContainer,
                children: [
                    (0, l.jsx)(c.P3F, {
                        onClick: s,
                        className: a()(p.clickable, R.memberAvatar),
                        children: (0, l.jsx)(c.qEK, {
                            src: n.getAvatarURL(t, 48),
                            'aria-label': n.username,
                            size: c.EFr.SIZE_48
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: R.memberNameAndTagContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: R.memberNameTextContainer,
                                children: [
                                    (0, l.jsx)(c.P3F, {
                                        onClick: s,
                                        className: p.clickable,
                                        children: (0, l.jsx)(c.Text, {
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
                            (0, l.jsx)(c.P3F, {
                                onClick: s,
                                className: p.clickable,
                                children: (0, l.jsx)(c.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-normal',
                                    children: g.ZP.getUserTag(n)
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(c.P3F, {
                className: R.closeAction,
                onClick: () => h.Z.setSelectedGuildJoinRequest(t, null),
                children: (0, l.jsx)(c.Dio, {
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
        className: p.actionRow,
        children: [
            (0, l.jsx)(M, {
                icon: c.owK,
                label: S.intl.string(S.t.BzjDQE),
                onClick: r,
                disabled: o
            }),
            (0, l.jsx)(M, {
                icon: c.k$p,
                label: S.intl.string(S.t.hDtbs7),
                onClick: a,
                disabled: o
            }),
            (0, l.jsx)(M, {
                icon: c.kBi,
                label: S.intl.string(S.t.KQeYoK),
                onClick: s,
                disabled: o
            })
        ]
    });
}
function P(e) {
    var n;
    let { joinRequest: t } = e,
        { actionedAt: i, actionedByUser: r, rejectionReason: a } = t;
    return (0, l.jsxs)('div', {
        className: p.rejectionReasonContainer,
        children: [
            (0, l.jsx)(c.k$p, {
                size: 'lg',
                color: c.TVs.colors.BG_BASE_SECONDARY,
                secondaryColor: c.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: S.intl.string(S.t.bSZklZ)
                    }),
                    null != r && null != i
                        ? (0, l.jsxs)('div', {
                              className: p.actionedInfo,
                              children: [
                                  (0, l.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: S.intl.formatToPlainString(S.t.qnimbG, { username: null !== (n = r.global_name) && void 0 !== n ? n : r.username })
                                  }),
                                  (0, l.jsx)('div', { className: p.dot }),
                                  (0, l.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: o()(E.default.extractTimestamp(i)).format('ll')
                                  })
                              ]
                          })
                        : null,
                    null != a &&
                        (0, l.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: S.intl.formatToPlainString(S.t.fU5PPD, { rejectionReason: a })
                        })
                ]
            })
        ]
    });
}
function k(e) {
    let { user: n, joinRequest: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(c.Text, {
                className: p.accountLabel,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: S.intl.string(S.t['ldCE/v'])
            }),
            (0, l.jsxs)('div', {
                className: p.userInfoContainer,
                children: [
                    (0, l.jsxs)('div', {
                        className: p.infoRow,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: S.intl.string(S.t.SaDIpK)
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: o()(E.default.extractTimestamp(n.id)).format('ll')
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: p.infoRow,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: S.intl.string(S.t.Vt4cn5)
                            }),
                            (0, l.jsx)(c.Text, {
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
function L(e) {
    let { guildId: n } = e,
        t = (0, _.L)({ guildId: n }),
        { user: r } = null != t ? t : {},
        s = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.formResponses) && void 0 !== e ? e : [];
        }, [null == t ? void 0 : t.formResponses]),
        o = i.useMemo(() => (null != r ? new N.Z(r) : null), [r]),
        u = (0, d.e7)([b.Z], () => b.Z.getGuild(n), [n]);
    return ((0, x.Tt)({
        subsection: S.intl.string(S.t.nqrK8f),
        location: null == u ? void 0 : u.name
    }),
    null != t && null != u && null != o && null != r)
        ? (0, l.jsx)('section', {
              className: p.sidebar,
              children: (0, l.jsx)(c.Ttm, {
                  children: (0, l.jsxs)('div', {
                      className: p.innerContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: p.cardContainer,
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
                                  t.applicationStatus === j.wB.REJECTED && (0, l.jsx)(P, { joinRequest: t })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: a()(p.cardContainer, p.responsesContainer),
                              children: [
                                  (0, l.jsx)(C.Z, {
                                      guildId: u.id,
                                      formFields: s,
                                      user: o,
                                      showRequirements: !1
                                  }),
                                  (0, l.jsx)(k, {
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
