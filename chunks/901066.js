t.d(n, {
    Z: function () {
        return L;
    }
});
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
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
    b = t(666233),
    f = t(360328),
    v = t(171368),
    g = t(598077),
    N = t(430824),
    I = t(709054),
    _ = t(51144),
    T = t(981631),
    E = t(308083),
    S = t(388032),
    p = t(861683),
    M = t(125712);
function R(e) {
    let { icon: n, label: t, onClick: r, disabled: i } = e;
    return (0, l.jsxs)(d.Clickable, {
        className: a()(p.actionButton, { [p.disabled]: i }),
        onClick: i ? T.dG4 : r,
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
    let { user: n, guildId: t, joinRequest: r } = e,
        { analyticsLocations: i } = (0, u.ZP)(),
        s = () => {
            (0, v.openUserProfileModal)({
                userId: n.id,
                joinRequestId: r.joinRequestId,
                sourceAnalyticsLocations: i,
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
                className: M.memberNameContainer,
                children: [
                    (0, l.jsx)(d.Clickable, {
                        onClick: s,
                        className: a()(p.clickable, M.memberAvatar),
                        children: (0, l.jsx)(d.Avatar, {
                            src: n.getAvatarURL(t, 48),
                            'aria-label': n.username,
                            size: d.AvatarSizes.SIZE_48
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: M.memberNameAndTagContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: M.memberNameTextContainer,
                                children: [
                                    (0, l.jsx)(d.Clickable, {
                                        onClick: s,
                                        className: p.clickable,
                                        children: (0, l.jsx)(d.Text, {
                                            variant: 'text-lg/medium',
                                            children: null == n ? void 0 : n.globalName
                                        })
                                    }),
                                    (0, l.jsx)(m.ZP, {
                                        primaryGuild: null == n ? void 0 : n.primaryGuild,
                                        userId: null == n ? void 0 : n.id,
                                        contextGuildId: t,
                                        badgeSize: E.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: M.memberClanTag,
                                        containerClassName: M.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, l.jsx)(d.Clickable, {
                                onClick: s,
                                className: p.clickable,
                                children: (0, l.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-normal',
                                    children: _.ZP.getUserTag(n)
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(d.Clickable, {
                className: M.closeAction,
                onClick: () => h.Z.setSelectedGuildJoinRequest(t, null),
                children: (0, l.jsx)(d.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function Z(e) {
    let { user: n, guildId: t, joinRequest: r } = e,
        { approveRequest: i, rejectRequest: a, handleOpenInterview: s, submitting: o } = (0, f.s)(t, n.id, r.joinRequestId, r.interviewChannelId);
    return (0, l.jsxs)('div', {
        className: p.actionRow,
        children: [
            (0, l.jsx)(R, {
                icon: d.CircleCheckIcon,
                label: S.intl.string(S.t.BzjDQE),
                onClick: i,
                disabled: o
            }),
            (0, l.jsx)(R, {
                icon: d.CircleXIcon,
                label: S.intl.string(S.t.hDtbs7),
                onClick: a,
                disabled: o
            }),
            (0, l.jsx)(R, {
                icon: d.ChatIcon,
                label: S.intl.string(S.t.KQeYoK),
                onClick: s,
                disabled: o
            })
        ]
    });
}
function k(e) {
    let { user: n, joinRequest: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(d.Text, {
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
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: S.intl.string(S.t.SaDIpK)
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: o()(I.default.extractTimestamp(n.id)).format('ll')
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: p.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: S.intl.string(S.t.Vt4cn5)
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
function L(e) {
    let { guildId: n } = e,
        t = (0, C.L)({ guildId: n }),
        { user: i } = null != t ? t : {},
        s = r.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.formResponses) && void 0 !== e ? e : [];
        }, [null == t ? void 0 : t.formResponses]),
        o = r.useMemo(() => (null != i ? new g.Z(i) : null), [i]),
        u = (0, c.e7)([N.Z], () => N.Z.getGuild(n), [n]);
    return ((0, x.Tt)({
        subsection: S.intl.string(S.t.nqrK8f),
        location: null == u ? void 0 : u.name
    }),
    null != t && null != u && null != o && null != i)
        ? (0, l.jsx)('section', {
              className: p.sidebar,
              children: (0, l.jsx)(d.Scroller, {
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
                                      })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: a()(p.cardContainer, p.responsesContainer),
                              children: [
                                  (0, l.jsx)(b.Z, {
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
