t.d(n, {
    Z: function () {
        return R;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(481060),
    c = t(906732),
    d = t(979264),
    u = t(252618),
    m = t(693546),
    x = t(246364),
    h = t(328977),
    C = t(666233),
    j = t(360328),
    b = t(171368),
    g = t(598077),
    f = t(430824),
    N = t(51144),
    v = t(981631),
    _ = t(308083),
    E = t(388032),
    I = t(861683),
    T = t(125712);
function S(e) {
    let { icon: n, label: t, onClick: i, disabled: r } = e;
    return (0, l.jsxs)(o.Clickable, {
        className: a()(I.actionButton, { [I.disabled]: r }),
        onClick: r ? v.dG4 : i,
        'aria-label': t,
        children: [
            (0, l.jsx)(n, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'none',
                children: t
            })
        ]
    });
}
function p(e) {
    let { user: n, guildId: t, joinRequest: i } = e,
        { analyticsLocations: r } = (0, c.ZP)(),
        s = () => {
            (0, b.openUserProfileModal)({
                userId: n.id,
                joinRequestId: i.joinRequestId,
                sourceAnalyticsLocations: r,
                analyticsLocation: {
                    section: v.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: v.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, l.jsxs)('div', {
        className: I.infoContainer,
        children: [
            (0, l.jsxs)('div', {
                className: T.memberNameContainer,
                children: [
                    (0, l.jsx)(o.Clickable, {
                        onClick: s,
                        className: a()(I.clickable, T.memberAvatar),
                        children: (0, l.jsx)(o.Avatar, {
                            src: n.getAvatarURL(t, 48),
                            'aria-label': n.username,
                            size: o.AvatarSizes.SIZE_48
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: T.memberNameAndTagContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: T.memberNameTextContainer,
                                children: [
                                    (0, l.jsx)(o.Clickable, {
                                        onClick: s,
                                        className: I.clickable,
                                        children: (0, l.jsx)(o.Text, {
                                            variant: 'text-lg/medium',
                                            children: null == n ? void 0 : n.globalName
                                        })
                                    }),
                                    (0, l.jsx)(d.ZP, {
                                        primaryGuild: null == n ? void 0 : n.primaryGuild,
                                        userId: null == n ? void 0 : n.id,
                                        contextGuildId: t,
                                        badgeSize: _.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: T.memberClanTag,
                                        containerClassName: T.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, l.jsx)(o.Clickable, {
                                onClick: s,
                                className: I.clickable,
                                children: (0, l.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-normal',
                                    children: N.ZP.getUserTag(n)
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(o.Clickable, {
                className: T.closeAction,
                onClick: () => m.Z.setSelectedGuildJoinRequest(t, null),
                children: (0, l.jsx)(o.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function M(e) {
    let { user: n, guildId: t, joinRequest: i } = e,
        { approveRequest: r, rejectRequest: a, handleOpenInterview: s, submitting: c } = (0, j.s)(t, n.id, i.joinRequestId, i.interviewChannelId);
    return (0, l.jsxs)('div', {
        className: I.actionRow,
        children: [
            (0, l.jsx)(S, {
                icon: o.CircleCheckIcon,
                label: E.intl.string(E.t.BzjDQE),
                onClick: r,
                disabled: c
            }),
            (0, l.jsx)(S, {
                icon: o.CircleXIcon,
                label: E.intl.string(E.t.hDtbs7),
                onClick: a,
                disabled: c
            }),
            (0, l.jsx)(S, {
                icon: o.ChatIcon,
                label: E.intl.string(E.t.KQeYoK),
                onClick: s,
                disabled: c
            })
        ]
    });
}
function R(e) {
    let { guildId: n } = e,
        t = (0, h.L)({ guildId: n }),
        { user: r } = null != t ? t : {},
        c = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.formResponses) && void 0 !== e ? e : [];
        }, [null == t ? void 0 : t.formResponses]),
        d = i.useMemo(() => (null != r ? new g.Z(r) : null), [r]),
        m = (0, s.e7)([f.Z], () => f.Z.getGuild(n), [n]);
    return ((0, u.Tt)({
        subsection: E.intl.string(E.t.nqrK8f),
        location: null == m ? void 0 : m.name
    }),
    null != t && null != m && null != d && null != r)
        ? (0, l.jsx)('section', {
              className: I.sidebar,
              children: (0, l.jsx)(o.Scroller, {
                  children: (0, l.jsxs)('div', {
                      className: I.innerContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: I.cardContainer,
                              children: [
                                  (0, l.jsx)(p, {
                                      user: d,
                                      guildId: n,
                                      joinRequest: t
                                  }),
                                  t.applicationStatus === x.wB.SUBMITTED &&
                                      (0, l.jsx)(M, {
                                          user: d,
                                          guildId: n,
                                          joinRequest: t
                                      })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: a()(I.cardContainer, I.responsesContainer),
                              children: (0, l.jsx)(C.Z, {
                                  guildId: m.id,
                                  formFields: c,
                                  user: d,
                                  showRequirements: !1
                              })
                          })
                      ]
                  })
              })
          })
        : null;
}
