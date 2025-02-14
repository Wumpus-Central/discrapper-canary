n.d(t, {
    Co: () => Q,
    ZP: () => J,
    bZ: () => X,
    gt: () => V
}),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    d = n(481060),
    c = n(884338),
    u = n(471445),
    h = n(986332),
    m = n(662842),
    p = n(540059),
    g = n(703656),
    _ = n(922482),
    f = n(565799),
    E = n(501655),
    I = n(192079),
    C = n(427679),
    N = n(448206),
    v = n(496675),
    T = n(938475),
    S = n(626135),
    A = n(823379),
    Z = n(15274),
    x = n(924301),
    b = n(504160),
    L = n(151864),
    y = n(835184),
    O = n(725436),
    P = n(497656),
    R = n(79874),
    j = n(554747),
    D = n(230900),
    w = n(854698),
    M = n(139712),
    k = n(765305),
    U = n(981631),
    G = n(388032),
    B = n(293028);
let V = r.memo(function (e) {
    let { heading: t, location: n, locationIcon: i, details: r, detailsIcon: a, topic: o, onClickCloseIcon: c, children: u } = e,
        h = (0, p.Q3)('GuildNoticeBody');
    return (0, l.jsxs)('div', {
        className: B.channelNotice,
        children: [
            (0, l.jsxs)('div', {
                className: s()(B.textBlock, B.singleLine),
                children: [
                    (0, l.jsx)('div', { className: B.liveIndicator }),
                    (0, l.jsx)(d.Text, {
                        color: 'text-positive',
                        variant: h ? 'text-xs/semibold' : 'text-xs/bold',
                        className: B.liveNowText,
                        children: t
                    }),
                    null != c &&
                        (0, l.jsx)(d.P3F, {
                            onClick: c,
                            className: B.closeIcon,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, l.jsx)(d.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                ]
            }),
            (0, l.jsx)(d.X6q, {
                color: 'header-primary',
                variant: h ? 'heading-md/semibold' : 'text-md/semibold',
                className: B.eventName,
                children: o
            }),
            (0, l.jsxs)('div', {
                className: s()(B.textBlock, B.singleLine),
                children: [
                    i,
                    (0, l.jsx)(d.Text, {
                        color: h ? 'none' : 'header-secondary',
                        variant: 'text-xs/normal',
                        className: B.channelName,
                        children: n
                    }),
                    null != r &&
                        null != a &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.Text, {
                                    className: B.dotDivider,
                                    color: h ? 'none' : 'header-secondary',
                                    variant: 'text-xs/normal',
                                    children: '\u2022'
                                }),
                                a,
                                (0, l.jsx)(d.Text, {
                                    color: h ? 'none' : 'header-secondary',
                                    variant: 'text-xs/normal',
                                    className: B.details,
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
function H(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, o.Wu)(
            [T.ZP],
            () =>
                T.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        r = (0, u.KS)(n);
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, b.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: G.intl.string(G.t['X2K3//']),
        topic: t.name,
        location: n.name,
        locationIcon:
            null != r
                ? (0, l.jsx)(r, {
                      size: 'xs',
                      color: 'currentColor',
                      className: B.stageIcon
                  })
                : null,
        children: (0, l.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 1
        })
    });
}
function F(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, w.DK)(t),
        r = (0, o.e7)([x.ZP], () => x.ZP.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, o.e7)([y.Z], () => y.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        r || null != a || (0, b._6)(t.id),
        (0, l.jsxs)(d.zxk, {
            fullWidth: !0,
            className: B.joinButton,
            innerClassName: B.rsvpButton,
            onClick: function () {
                (0, M.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, b.L_)(t.id), 1000)),
                    S.default.track(U.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                        guild_id: t.guild_id,
                        notice_type: n
                    });
            },
            look: r ? d.zxk.Looks.OUTLINED : d.zxk.Looks.FILLED,
            color: r ? d.zxk.Colors.TRANSPARENT : d.zxk.Colors.GREEN,
            size: d.zxk.Sizes.SMALL,
            children: [
                r
                    ? (0, l.jsx)(d.dz2, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: B.buttonIcon
                      })
                    : (0, l.jsx)(d.Dkj, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: B.buttonIcon
                      }),
                G.intl.string(G.t.DlcqlZ)
            ]
        })
    );
}
function z(e) {
    var t;
    let { guildEvent: n, noticeType: i } = e,
        a = (0, p.Q3)('GuildUpcomingEventNotice'),
        o = (0, D.cS)(n),
        c = null != o ? (0, O.m)(o, !0) : null,
        h = (0, D.nE)(n),
        m = (0, u.KS)(h),
        { startTime: g, endTime: _ } = (0, R.ZP)(n),
        { startDateTimeString: f, upcomingEvent: E, diffMinutes: I } = (0, w.ub)(g.toISOString(), null == _ ? void 0 : _.toISOString()),
        C = E ? (I > 0 ? G.intl.formatToPlainString(G.t.PQlCWl, { minutes: I }) : G.intl.string(G.t.WINqKS)) : G.intl.formatToPlainString(G.t.DC6h3N, { date: f });
    return (
        r.useEffect(() => {
            S.default.track(U.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: i,
                guild_id: n.guild_id
            });
        }, [n, i]),
        (0, l.jsxs)('div', {
            className: B.channelNotice,
            children: [
                (0, l.jsxs)('div', {
                    className: B.textBlock,
                    children: [
                        (0, l.jsx)(d.P3F, {
                            onClick: () => (0, Z.bO)({ eventId: n.id }),
                            className: B.eventNameClickable,
                            children: (0, l.jsx)(d.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                className: B.eventName,
                                children: n.name
                            })
                        }),
                        (0, l.jsx)(d.P3F, {
                            onClick: () => {
                                S.default.track(U.rMx.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: i,
                                    guild_id: n.guild_id
                                }),
                                    (0, b.L_)(n.id);
                            },
                            className: B.closeIcon,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, l.jsx)(d.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: s()(B.textBlock, B.singleLine),
                    children: [
                        (0, l.jsx)(d.Que, {
                            size: 'custom',
                            color: 'currentColor',
                            className: B.stageIcon,
                            width: 16,
                            height: 16
                        }),
                        (0, l.jsx)(d.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            className: B.startTime,
                            children: C
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: s()(B.textBlock, B.singleLine),
                    children: [
                        null != m
                            ? (0, l.jsx)(m, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: B.stageIcon
                              })
                            : (0, l.jsx)(d._tJ, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16,
                                  height: 16,
                                  className: B.stageIcon
                              }),
                        (0, l.jsx)(d.Text, {
                            color: a ? 'none' : 'header-secondary',
                            variant: 'text-xs/normal',
                            className: B.channelName,
                            children: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : c
                        })
                    ]
                }),
                (0, l.jsx)(F, {
                    guildEvent: n,
                    noticeType: i
                })
            ]
        })
    );
}
function W(e) {
    let { guildEvent: t } = e,
        n = (0, D.cS)(t);
    return null == n
        ? null
        : (0, l.jsx)(V, {
              onClickCloseIcon: () => (0, b.ji)({ eventId: null == t ? void 0 : t.id }),
              heading: G.intl.string(G.t['1+boPj']),
              topic: t.name,
              location: (0, O.m)(n, !0),
              locationIcon: (0, l.jsx)(d._tJ, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16,
                  className: B.stageIcon
              }),
              children: (0, l.jsx)(Y, { guildEvent: t })
          });
}
function Y(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, Z.bO)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)(d.zxk, {
        fullWidth: !0,
        className: B.joinButton,
        onClick: n,
        color: d.zxk.Colors.GREEN,
        size: d.zxk.Sizes.SMALL,
        children: G.intl.string(G.t.z4FcDg)
    });
}
function K(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)(d.zxk, {
        fullWidth: !0,
        className: B.joinButton,
        onClick: () => {
            null != t && null != t.getGuildId() && ((0, _.Cq)(t), (0, g.XU)(t.getGuildId(), t.id));
        },
        color: d.zxk.Colors.GREEN,
        size: d.zxk.Sizes.SMALL,
        children: n
    });
}
function q(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, o.Wu)([f.Z], () => [...new Set(f.Z.getMutableParticipants(n.id, E.pV.SPEAKER).map((e) => e.user))], [n.id]),
        r = (0, o.e7)([f.Z], () => f.Z.getParticipantCount(n.id, E.pV.AUDIENCE), [n.id]),
        a = G.intl.formatToPlainString(G.t['+v2pNz'], { count: ''.concat(r) });
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, b.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: G.intl.string(G.t['X2K3//']),
        location: n.name,
        details: a,
        detailsIcon: (0, l.jsx)(d.VWR, {
            size: 'custom',
            color: 'currentColor',
            width: 14,
            height: 14,
            className: B.stageIcon
        }),
        locationIcon: (0, l.jsx)(d.ewx, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: B.stageIcon
        }),
        topic: t.topic,
        children: (0, l.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 2
        })
    });
}
var X = (((i = {})[(i.VOICE = 1)] = 'VOICE'), (i[(i.STAGE = 2)] = 'STAGE'), (i[(i.STUDY_ROOM = 3)] = 'STUDY_ROOM'), i);
function Q(e) {
    let { channel: t, speakers: n, voiceType: i } = e,
        a = t.getGuildId(),
        u = r.useMemo(() => n.slice(0, 3), [n]),
        h = (0, o.e7)([v.Z], () => v.Z.can(U.Plq.CONNECT, t)),
        m = (0, N.Z)(t.id),
        p = G.intl.string(G.t.VJlc0d);
    switch (i) {
        case 1:
            p = G.intl.string(G.t.VJlc0d);
            break;
        case 2:
            (p = G.intl.string(G.t.ZYO5OD)), (null == m ? void 0 : m.speaker) ? (p = G.intl.string(G.t['/cnSFR'])) : null != m && (p = G.intl.string(G.t.btSGOj));
            break;
        case 3:
            p = G.intl.string(G.t.wBoE6O);
            break;
        default:
            (0, A.vE)(i);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  u.length > 0
                      ? (0, l.jsxs)('div', {
                            className: s()(B.textBlock, B.singleLine),
                            children: [
                                (0, l.jsx)(c.Z, {
                                    guildId: a,
                                    users: u,
                                    showUserPopout: !0,
                                    size: c.u.SIZE_16
                                }),
                                (0, l.jsx)(d.Text, {
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    className: B.userNames,
                                    children: (0, I.ER)(a, u, null == t ? void 0 : t.id, n.length)
                                })
                            ]
                        })
                      : null,
                  h &&
                      null == m &&
                      (0, l.jsx)(K, {
                          channel: t,
                          label: p
                      })
              ]
          });
}
let J = r.memo(function (e) {
    let { guild: t } = e,
        { showRedesignedLiveChannelNotice: n } = (0, h.o)(!0),
        i = (0, P.y)(t.id),
        r = (0, j.k5)(t.id),
        a = (0, j.Vm)(t.id),
        s = (0, o.e7)([C.Z], () => C.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]),
        { isStageNoticeHidden: d, isEventNoticeHidden: c } = (0, o.cj)(
            [L.Z],
            () => ({
                isStageNoticeHidden: L.Z.isLiveChannelNoticeHidden({ stageId: null == s ? void 0 : s.id }),
                isEventNoticeHidden: L.Z.isLiveChannelNoticeHidden({ eventId: null == r ? void 0 : r.id })
            }),
            [s, r]
        ),
        u = null,
        p = null != s && null != i && !d;
    if (n) return (0, l.jsx)(m.Z, { guild: t });
    null == r || c
        ? p &&
          (u = (0, l.jsx)(q, {
              stageInstance: s,
              channel: i
          }))
        : r.entity_type === k.WX.STAGE_INSTANCE && p
          ? (u = (0, l.jsx)(q, {
                stageInstance: s,
                channel: i
            }))
          : r.entity_type === k.WX.EXTERNAL
            ? (u = (0, l.jsx)(W, { guildEvent: r }))
            : r.entity_type === k.WX.VOICE &&
              null != i &&
              (u = (0, l.jsx)(H, {
                  guildEvent: r,
                  channel: i
              }));
    let g = t.hasFeature(U.oNc.COMMUNITY) || t.hasFeature(U.oNc.HUB);
    if (null == u && null != a && !g) {
        let { upcomingEvent: e, noticeType: t } = a;
        u = (0, l.jsx)(z, {
            guildEvent: e,
            noticeType: t
        });
    }
    return u;
});
