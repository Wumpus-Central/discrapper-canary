n.d(t, { Z: () => A });
var l = n(255367),
    r = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(906732),
    m = n(252618),
    x = n(693546),
    h = n(246364),
    j = n(328977),
    b = n(666233),
    f = n(360328),
    p = n(172751),
    v = n(892001),
    g = n(598077),
    C = n(430824),
    _ = n(709054),
    T = n(51144),
    E = n(981631),
    N = n(131085),
    S = n(388032),
    P = n(145870),
    R = n(157092);
function I(e) {
    let { icon: t, label: n, onClick: r, disabled: a } = e;
    return (0, l.jsxs)(d.P3F, {
        className: i()(P.actionButton, { [P.disabled]: a }),
        onClick: a ? E.dG4 : r,
        'aria-label': n,
        children: [
            (0, l.jsx)(t, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20
            }),
            (0, l.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'none',
                children: n
            })
        ]
    });
}
function Z(e) {
    let { user: t, guildId: n, joinRequest: r } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        s = () => {
            (0, v.openUserProfileModal)({
                userId: t.id,
                joinRequestId: r.joinRequestId,
                sourceAnalyticsLocations: a
            });
        };
    return (0, l.jsxs)('div', {
        className: P.infoContainer,
        children: [
            (0, l.jsxs)('div', {
                className: R.memberNameContainer,
                children: [
                    (0, l.jsx)(d.P3F, {
                        onClick: s,
                        className: i()(P.clickable, R.memberAvatar),
                        children: (0, l.jsx)(d.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
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
                                        className: P.clickable,
                                        children: (0, l.jsx)(d.Text, {
                                            variant: 'text-lg/medium',
                                            children: null == t ? void 0 : t.globalName
                                        })
                                    }),
                                    (0, l.jsx)(p.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: N.Gg.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: R.memberClanTag,
                                        containerClassName: R.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, l.jsx)(d.P3F, {
                                onClick: s,
                                className: P.clickable,
                                children: (0, l.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-default',
                                    children: T.ZP.getUserTag(t)
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(d.P3F, {
                className: R.closeAction,
                onClick: () => x.Z.setSelectedGuildJoinRequest(n, null),
                children: (0, l.jsx)(d.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
        ]
    });
}
function w(e) {
    let { user: t, guildId: n, joinRequest: r } = e,
        { approveRequest: a, rejectRequest: i, handleOpenInterview: s, submitting: o } = (0, f.s)(n, t.id, r.joinRequestId, r.interviewChannelId);
    return (0, l.jsxs)('div', {
        className: P.actionRow,
        children: [
            (0, l.jsx)(I, {
                icon: d.owK,
                label: S.intl.string(S.t.BzjDQE),
                onClick: a,
                disabled: o
            }),
            (0, l.jsx)(I, {
                icon: d.k$p,
                label: S.intl.string(S.t.hDtbs7),
                onClick: i,
                disabled: o
            }),
            (0, l.jsx)(I, {
                icon: d.kBi,
                label: S.intl.string(S.t.KQeYoK),
                onClick: s,
                disabled: o
            })
        ]
    });
}
function y(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: r, actionedByUser: a, rejectionReason: i } = n;
    return (0, l.jsxs)('div', {
        className: P.actionContainer,
        children: [
            (0, l.jsx)(d.k$p, {
                size: 'lg',
                color: d.TVs.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: d.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: S.intl.string(S.t.bSZklZ)
                    }),
                    null != a && null != r
                        ? (0, l.jsxs)('div', {
                              className: P.actionedInfo,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: S.intl.formatToPlainString(S.t.qnimbG, { username: null != (t = a.global_name) ? t : a.username })
                                  }),
                                  (0, l.jsx)('div', { className: P.dot }),
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: o()(_.default.extractTimestamp(r)).format('ll')
                                  })
                              ]
                          })
                        : null,
                    null != i &&
                        (0, l.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: S.intl.formatToPlainString(S.t.fU5PPD, { rejectionReason: i })
                        })
                ]
            })
        ]
    });
}
function M(e) {
    var t;
    let { joinRequest: n } = e,
        { actionedAt: r, actionedByUser: a } = n;
    return (0, l.jsxs)('div', {
        className: P.actionContainer,
        children: [
            (0, l.jsx)(d.owK, {
                size: 'lg',
                color: d.TVs.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: d.TVs.colors.STATUS_POSITIVE_TEXT
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: S.intl.string(S.t.aURgY2)
                    }),
                    null != a && null != r
                        ? (0, l.jsxs)('div', {
                              className: P.actionedInfo,
                              children: [
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: S.intl.formatToPlainString(S.t.qnimbG, { username: null != (t = a.global_name) ? t : a.username })
                                  }),
                                  (0, l.jsx)('div', { className: P.dot }),
                                  (0, l.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: o()(_.default.extractTimestamp(r)).format('ll')
                                  })
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function O(e) {
    let { user: t, joinRequest: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(d.Text, {
                className: P.accountLabel,
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: S.intl.string(S.t['ldCE/v'])
            }),
            (0, l.jsxs)('div', {
                className: P.userInfoContainer,
                children: [
                    (0, l.jsxs)('div', {
                        className: P.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
                                children: S.intl.string(S.t.SaDIpK)
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
                                children: o()(_.default.extractTimestamp(t.id)).format('ll')
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: P.infoRow,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
                                children: S.intl.string(S.t.Vt4cn5)
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-default',
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
        n = (0, j.L)({ guildId: t }),
        { user: a } = null != n ? n : {},
        s = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.formResponses) ? e : [];
        }, [null == n ? void 0 : n.formResponses]),
        o = r.useMemo(() => (null != a ? new g.Z(a) : null), [a]),
        u = (0, c.e7)([C.Z], () => C.Z.getGuild(t), [t]);
    return ((0, m.Tt)({
        subsection: S.intl.string(S.t.nqrK8f),
        location: null == u ? void 0 : u.name
    }),
    null == n || null == u || null == o || null == a)
        ? null
        : (0, l.jsx)('section', {
              className: P.sidebar,
              children: (0, l.jsx)(d.Ttm, {
                  children: (0, l.jsxs)('div', {
                      className: P.innerContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: P.cardContainer,
                              children: [
                                  (0, l.jsx)(Z, {
                                      user: o,
                                      guildId: t,
                                      joinRequest: n
                                  }),
                                  n.applicationStatus === h.wB.SUBMITTED &&
                                      (0, l.jsx)(w, {
                                          user: o,
                                          guildId: t,
                                          joinRequest: n
                                      }),
                                  n.applicationStatus === h.wB.REJECTED && (0, l.jsx)(y, { joinRequest: n }),
                                  n.applicationStatus === h.wB.APPROVED && (0, l.jsx)(M, { joinRequest: n })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: i()(P.cardContainer, P.responsesContainer),
                              children: [
                                  (0, l.jsx)(b.Z, {
                                      guildId: u.id,
                                      formFields: s,
                                      user: o,
                                      showRequirements: !1
                                  }),
                                  (0, l.jsx)(O, {
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
