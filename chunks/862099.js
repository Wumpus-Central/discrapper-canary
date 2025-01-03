n.d(t, {
    Co: function () {
        return Q;
    },
    bZ: function () {
        return i;
    },
    gt: function () {
        return V;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(884338),
    h = n(471445),
    m = n(986332),
    p = n(662842),
    g = n(540059),
    f = n(703656),
    _ = n(922482),
    E = n(565799),
    I = n(501655),
    C = n(192079),
    N = n(427679),
    v = n(448206),
    S = n(496675),
    T = n(938475),
    b = n(626135),
    A = n(823379),
    Z = n(15274),
    x = n(924301),
    L = n(504160),
    P = n(151864),
    O = n(835184),
    y = n(725436),
    R = n(497656),
    j = n(79874),
    D = n(554747),
    M = n(230900),
    w = n(854698),
    k = n(139712),
    U = n(765305),
    G = n(981631),
    B = n(388032),
    H = n(832019);
let V = a.memo(function (e) {
    let { heading: t, location: n, locationIcon: i, details: r, detailsIcon: a, topic: s, onClickCloseIcon: c, children: u } = e,
        h = (0, g.Q3)('GuildNoticeBody');
    return (0, l.jsxs)('div', {
        className: H.channelNotice,
        children: [
            (0, l.jsxs)('div', {
                className: o()(H.textBlock, H.singleLine),
                children: [
                    (0, l.jsx)('div', { className: H.liveIndicator }),
                    (0, l.jsx)(d.Text, {
                        color: 'text-positive',
                        variant: h ? 'text-xs/semibold' : 'text-xs/bold',
                        className: H.liveNowText,
                        children: t
                    }),
                    null != c &&
                        (0, l.jsx)(d.Clickable, {
                            onClick: c,
                            className: H.closeIcon,
                            'aria-label': B.intl.string(B.t.cpT0Cg),
                            children: (0, l.jsx)(d.XSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                ]
            }),
            (0, l.jsx)(d.Heading, {
                color: 'header-primary',
                variant: h ? 'heading-md/semibold' : 'text-md/semibold',
                className: H.eventName,
                children: s
            }),
            (0, l.jsxs)('div', {
                className: o()(H.textBlock, H.singleLine),
                children: [
                    i,
                    (0, l.jsx)(d.Text, {
                        color: h ? 'none' : 'header-secondary',
                        variant: 'text-xs/normal',
                        className: H.channelName,
                        children: n
                    }),
                    null != r &&
                        null != a &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.Text, {
                                    className: H.dotDivider,
                                    color: h ? 'none' : 'header-secondary',
                                    variant: 'text-xs/normal',
                                    children: '\u2022'
                                }),
                                a,
                                (0, l.jsx)(d.Text, {
                                    color: h ? 'none' : 'header-secondary',
                                    variant: 'text-xs/normal',
                                    className: H.details,
                                    children: r
                                })
                            ]
                        })
                ]
            }),
            u
        ]
    });
});
function F(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, c.Wu)(
            [T.ZP],
            () =>
                T.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        r = (0, h.KS)(n);
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, L.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: B.intl.string(B.t['X2K3//']),
        topic: t.name,
        location: n.name,
        locationIcon:
            null != r
                ? (0, l.jsx)(r, {
                      size: 'xs',
                      color: 'currentColor',
                      className: H.stageIcon
                  })
                : null,
        children: (0, l.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 1
        })
    });
}
function z(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, w.DK)(t),
        r = (0, c.e7)([x.ZP], () => x.ZP.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, c.e7)([O.Z], () => O.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        !r && null == a && (0, L._6)(t.id),
        (0, l.jsxs)(d.Button, {
            fullWidth: !0,
            className: H.joinButton,
            innerClassName: H.rsvpButton,
            onClick: function () {
                (0, k.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, L.L_)(t.id), 1000)),
                    b.default.track(G.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                        guild_id: t.guild_id,
                        notice_type: n
                    });
            },
            look: r ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
            color: r ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
            size: d.Button.Sizes.SMALL,
            children: [
                r
                    ? (0, l.jsx)(d.CheckmarkLargeIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: H.buttonIcon
                      })
                    : (0, l.jsx)(d.BellIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: H.buttonIcon
                      }),
                B.intl.string(B.t.DlcqlZ)
            ]
        })
    );
}
function W(e) {
    var t;
    let { guildEvent: n, noticeType: i } = e,
        r = (0, g.Q3)('GuildUpcomingEventNotice'),
        s = (0, M.cS)(n),
        c = null != s ? (0, y.m)(s, !0) : null,
        u = (0, M.nE)(n),
        m = (0, h.KS)(u),
        { startTime: p, endTime: f } = (0, j.ZP)(n),
        { startDateTimeString: _, upcomingEvent: E, diffMinutes: I } = (0, w.ub)(p.toISOString(), null == f ? void 0 : f.toISOString()),
        C = E ? (I > 0 ? B.intl.formatToPlainString(B.t.PQlCWl, { minutes: I }) : B.intl.string(B.t.WINqKS)) : B.intl.formatToPlainString(B.t.DC6h3N, { date: _ });
    return (
        a.useEffect(() => {
            b.default.track(G.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: i,
                guild_id: n.guild_id
            });
        }, [n, i]),
        (0, l.jsxs)('div', {
            className: H.channelNotice,
            children: [
                (0, l.jsxs)('div', {
                    className: H.textBlock,
                    children: [
                        (0, l.jsx)(d.Clickable, {
                            onClick: () => (0, Z.bO)({ eventId: n.id }),
                            className: H.eventNameClickable,
                            children: (0, l.jsx)(d.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                className: H.eventName,
                                children: n.name
                            })
                        }),
                        (0, l.jsx)(d.Clickable, {
                            onClick: () => {
                                b.default.track(G.rMx.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: i,
                                    guild_id: n.guild_id
                                }),
                                    (0, L.L_)(n.id);
                            },
                            className: H.closeIcon,
                            'aria-label': B.intl.string(B.t.cpT0Cg),
                            children: (0, l.jsx)(d.XSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: o()(H.textBlock, H.singleLine),
                    children: [
                        (0, l.jsx)(d.CalendarIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: H.stageIcon,
                            width: 16,
                            height: 16
                        }),
                        (0, l.jsx)(d.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            className: H.startTime,
                            children: C
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: o()(H.textBlock, H.singleLine),
                    children: [
                        null != m
                            ? (0, l.jsx)(m, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: H.stageIcon
                              })
                            : (0, l.jsx)(d.LocationIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16,
                                  height: 16,
                                  className: H.stageIcon
                              }),
                        (0, l.jsx)(d.Text, {
                            color: r ? 'none' : 'header-secondary',
                            variant: 'text-xs/normal',
                            className: H.channelName,
                            children: null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : c
                        })
                    ]
                }),
                (0, l.jsx)(z, {
                    guildEvent: n,
                    noticeType: i
                })
            ]
        })
    );
}
function Y(e) {
    let { guildEvent: t } = e,
        n = (0, M.cS)(t);
    return null == n
        ? null
        : (0, l.jsx)(V, {
              onClickCloseIcon: () => (0, L.ji)({ eventId: null == t ? void 0 : t.id }),
              heading: B.intl.string(B.t['1+boPj']),
              topic: t.name,
              location: (0, y.m)(n, !0),
              locationIcon: (0, l.jsx)(d.LocationIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16,
                  className: H.stageIcon
              }),
              children: (0, l.jsx)(K, { guildEvent: t })
          });
}
function K(e) {
    let { guildEvent: t } = e,
        n = a.useCallback(() => {
            (0, Z.bO)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)(d.Button, {
        fullWidth: !0,
        className: H.joinButton,
        onClick: n,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: B.intl.string(B.t.z4FcDg)
    });
}
function q(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)(d.Button, {
        fullWidth: !0,
        className: H.joinButton,
        onClick: () => {
            null != t && null != t.getGuildId() && ((0, _.Cq)(t), (0, f.XU)(t.getGuildId(), t.id));
        },
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: n
    });
}
function X(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, c.Wu)([E.Z], () => [...new Set(E.Z.getMutableParticipants(n.id, I.pV.SPEAKER).map((e) => e.user))], [n.id]),
        r = (0, c.e7)([E.Z], () => E.Z.getParticipantCount(n.id, I.pV.AUDIENCE), [n.id]),
        a = B.intl.formatToPlainString(B.t['+v2pNz'], { count: ''.concat(r) });
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, L.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: B.intl.string(B.t['X2K3//']),
        location: n.name,
        details: a,
        detailsIcon: (0, l.jsx)(d.HeadphonesIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 14,
            height: 14,
            className: H.stageIcon
        }),
        locationIcon: (0, l.jsx)(d.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: H.stageIcon
        }),
        topic: t.topic,
        children: (0, l.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 2
        })
    });
}
function Q(e) {
    let { channel: t, speakers: n, voiceType: i } = e,
        r = t.getGuildId(),
        s = a.useMemo(() => n.slice(0, 3), [n]),
        h = (0, c.e7)([S.Z], () => S.Z.can(G.Plq.CONNECT, t)),
        m = (0, v.Z)(t.id),
        p = B.intl.string(B.t.VJlc0d);
    switch (i) {
        case 1:
            p = B.intl.string(B.t.VJlc0d);
            break;
        case 2:
            (p = B.intl.string(B.t.ZYO5OD)), (null == m ? void 0 : m.speaker) ? (p = B.intl.string(B.t['/cnSFR'])) : null != m && (p = B.intl.string(B.t.btSGOj));
            break;
        case 3:
            p = B.intl.string(B.t.wBoE6O);
            break;
        default:
            (0, A.vE)(i);
    }
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  s.length > 0
                      ? (0, l.jsxs)('div', {
                            className: o()(H.textBlock, H.singleLine),
                            children: [
                                (0, l.jsx)(u.Z, {
                                    guildId: r,
                                    users: s,
                                    showUserPopout: !0,
                                    size: u.u.SIZE_16
                                }),
                                (0, l.jsx)(d.Text, {
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    className: H.userNames,
                                    children: (0, C.ER)(r, s, null == t ? void 0 : t.id, n.length)
                                })
                            ]
                        })
                      : null,
                  h &&
                      null == m &&
                      (0, l.jsx)(q, {
                          channel: t,
                          label: p
                      })
              ]
          });
}
((r = i || (i = {}))[(r.VOICE = 1)] = 'VOICE'),
    (r[(r.STAGE = 2)] = 'STAGE'),
    (r[(r.STUDY_ROOM = 3)] = 'STUDY_ROOM'),
    (t.ZP = a.memo(function (e) {
        let { guild: t } = e,
            { showRedesignedLiveChannelNotice: n } = (0, m.o)(!0),
            i = (0, R.y)(t.id),
            r = (0, D.k5)(t.id),
            a = (0, D.Vm)(t.id),
            s = (0, c.e7)([N.Z], () => N.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]),
            { isStageNoticeHidden: o, isEventNoticeHidden: d } = (0, c.cj)(
                [P.Z],
                () => ({
                    isStageNoticeHidden: P.Z.isLiveChannelNoticeHidden({ stageId: null == s ? void 0 : s.id }),
                    isEventNoticeHidden: P.Z.isLiveChannelNoticeHidden({ eventId: null == r ? void 0 : r.id })
                }),
                [s, r]
            ),
            u = null,
            h = null != s && null != i && !o;
        if (n) return (0, l.jsx)(p.Z, { guild: t });
        null == r || d
            ? h &&
              (u = (0, l.jsx)(X, {
                  stageInstance: s,
                  channel: i
              }))
            : r.entity_type === U.WX.STAGE_INSTANCE && h
              ? (u = (0, l.jsx)(X, {
                    stageInstance: s,
                    channel: i
                }))
              : r.entity_type === U.WX.EXTERNAL
                ? (u = (0, l.jsx)(Y, { guildEvent: r }))
                : r.entity_type === U.WX.VOICE &&
                  null != i &&
                  (u = (0, l.jsx)(F, {
                      guildEvent: r,
                      channel: i
                  }));
        let g = t.hasFeature(G.oNc.COMMUNITY) || t.hasFeature(G.oNc.HUB);
        if (null == u && null != a && !g) {
            let { upcomingEvent: e, noticeType: t } = a;
            u = (0, l.jsx)(W, {
                guildEvent: e,
                noticeType: t
            });
        }
        return u;
    }));
