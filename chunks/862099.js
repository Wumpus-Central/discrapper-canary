n.d(t, {
    Co: () => X,
    ZP: () => J,
    bZ: () => Q,
    gt: () => V
}),
    n(47120);
var r,
    i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(884338),
    d = n(471445),
    p = n(986332),
    h = n(662842),
    f = n(540059),
    g = n(703656),
    m = n(922482),
    b = n(565799),
    _ = n(501655),
    E = n(192079),
    O = n(427679),
    N = n(448206),
    y = n(496675),
    I = n(938475),
    v = n(626135),
    C = n(823379),
    S = n(15274),
    T = n(924301),
    P = n(504160),
    j = n(151864),
    A = n(835184),
    Z = n(725436),
    x = n(497656),
    L = n(79874),
    w = n(554747),
    R = n(230900),
    D = n(854698),
    k = n(139712),
    M = n(765305),
    U = n(981631),
    G = n(388032),
    W = n(647128);
let V = l.memo(function (e) {
    let { heading: t, location: n, locationIcon: r, details: l, detailsIcon: a, topic: s, onClickCloseIcon: u, children: d } = e,
        p = (0, f.Q3)('GuildNoticeBody');
    return (0, i.jsxs)('div', {
        className: W.channelNotice,
        children: [
            (0, i.jsxs)('div', {
                className: o()(W.textBlock, W.singleLine),
                children: [
                    (0, i.jsx)('div', { className: W.liveIndicator }),
                    (0, i.jsx)(c.Text, {
                        color: 'text-positive',
                        variant: p ? 'text-xs/semibold' : 'text-xs/bold',
                        className: W.liveNowText,
                        children: t
                    }),
                    null != u &&
                        (0, i.jsx)(c.P3F, {
                            onClick: u,
                            className: W.closeIcon,
                            'aria-label': G.NW.string(G.t.cpT0Cg),
                            children: (0, i.jsx)(c.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                ]
            }),
            (0, i.jsx)(c.X6q, {
                color: 'header-primary',
                variant: p ? 'heading-md/semibold' : 'text-md/semibold',
                className: W.eventName,
                children: s
            }),
            (0, i.jsxs)('div', {
                className: o()(W.textBlock, W.singleLine),
                children: [
                    r,
                    (0, i.jsx)(c.Text, {
                        color: p ? 'none' : 'header-secondary',
                        variant: 'text-xs/normal',
                        className: W.channelName,
                        children: n
                    }),
                    null != l &&
                        null != a &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    className: W.dotDivider,
                                    color: p ? 'none' : 'header-secondary',
                                    variant: 'text-xs/normal',
                                    children: '\u2022'
                                }),
                                a,
                                (0, i.jsx)(c.Text, {
                                    color: p ? 'none' : 'header-secondary',
                                    variant: 'text-xs/normal',
                                    className: W.details,
                                    children: l
                                })
                            ]
                        })
                ]
            }),
            d
        ]
    });
});
function B(e) {
    let { guildEvent: t, channel: n } = e,
        r = (0, s.Wu)(
            [I.ZP],
            () =>
                I.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        l = (0, d.KS)(n);
    return (0, i.jsx)(V, {
        onClickCloseIcon: () => (0, P.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: G.NW.string(G.t['X2K3//']),
        topic: t.name,
        location: n.name,
        locationIcon:
            null != l
                ? (0, i.jsx)(l, {
                      size: 'xs',
                      color: 'currentColor',
                      className: W.stageIcon
                  })
                : null,
        children: (0, i.jsx)(X, {
            channel: n,
            speakers: r,
            voiceType: 1
        })
    });
}
function H(e) {
    let { guildEvent: t, noticeType: n } = e,
        r = (0, D.DK)(t),
        l = (0, s.e7)([T.ZP], () => T.ZP.isInterestedInEventRecurrence(t.id, r), [t.id, r]),
        a = (0, s.e7)([A.Z], () => A.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != a || (0, P._6)(t.id),
        (0, i.jsxs)(c.zxk, {
            fullWidth: !0,
            className: W.joinButton,
            innerClassName: W.rsvpButton,
            onClick: function () {
                (0, k.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, P.L_)(t.id), 1000)),
                    v.default.track(U.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                        guild_id: t.guild_id,
                        notice_type: n
                    });
            },
            look: l ? c.zxk.Looks.OUTLINED : c.zxk.Looks.FILLED,
            color: l ? c.zxk.Colors.TRANSPARENT : c.zxk.Colors.GREEN,
            size: c.zxk.Sizes.SMALL,
            children: [
                l
                    ? (0, i.jsx)(c.dz2, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: W.buttonIcon
                      })
                    : (0, i.jsx)(c.Dkj, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: W.buttonIcon
                      }),
                G.NW.string(G.t.DlcqlZ)
            ]
        })
    );
}
function F(e) {
    var t;
    let { guildEvent: n, noticeType: r } = e,
        a = (0, f.Q3)('GuildUpcomingEventNotice'),
        s = (0, R.cS)(n),
        u = null != s ? (0, Z.m)(s, !0) : null,
        p = (0, R.nE)(n),
        h = (0, d.KS)(p),
        { startTime: g, endTime: m } = (0, L.ZP)(n),
        { startDateTimeString: b, upcomingEvent: _, diffMinutes: E } = (0, D.ub)(g.toISOString(), null == m ? void 0 : m.toISOString()),
        O = _ ? (E > 0 ? G.NW.formatToPlainString(G.t.PQlCWl, { minutes: E }) : G.NW.string(G.t.WINqKS)) : G.NW.formatToPlainString(G.t.DC6h3N, { date: b });
    return (
        l.useEffect(() => {
            v.default.track(U.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: r,
                guild_id: n.guild_id
            });
        }, [n, r]),
        (0, i.jsxs)('div', {
            className: W.channelNotice,
            children: [
                (0, i.jsxs)('div', {
                    className: W.textBlock,
                    children: [
                        (0, i.jsx)(c.P3F, {
                            onClick: () => (0, S.bO)({ eventId: n.id }),
                            className: W.eventNameClickable,
                            children: (0, i.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                className: W.eventName,
                                children: n.name
                            })
                        }),
                        (0, i.jsx)(c.P3F, {
                            onClick: () => {
                                v.default.track(U.rMx.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: r,
                                    guild_id: n.guild_id
                                }),
                                    (0, P.L_)(n.id);
                            },
                            className: W.closeIcon,
                            'aria-label': G.NW.string(G.t.cpT0Cg),
                            children: (0, i.jsx)(c.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: o()(W.textBlock, W.singleLine),
                    children: [
                        (0, i.jsx)(c.Que, {
                            size: 'custom',
                            color: 'currentColor',
                            className: W.stageIcon,
                            width: 16,
                            height: 16
                        }),
                        (0, i.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            className: W.startTime,
                            children: O
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: o()(W.textBlock, W.singleLine),
                    children: [
                        null != h
                            ? (0, i.jsx)(h, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: W.stageIcon
                              })
                            : (0, i.jsx)(c._tJ, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16,
                                  height: 16,
                                  className: W.stageIcon
                              }),
                        (0, i.jsx)(c.Text, {
                            color: a ? 'none' : 'header-secondary',
                            variant: 'text-xs/normal',
                            className: W.channelName,
                            children: null != (t = null == p ? void 0 : p.name) ? t : u
                        })
                    ]
                }),
                (0, i.jsx)(H, {
                    guildEvent: n,
                    noticeType: r
                })
            ]
        })
    );
}
function z(e) {
    let { guildEvent: t } = e,
        n = (0, R.cS)(t);
    return null == n
        ? null
        : (0, i.jsx)(V, {
              onClickCloseIcon: () => (0, P.ji)({ eventId: null == t ? void 0 : t.id }),
              heading: G.NW.string(G.t['1+boPj']),
              topic: t.name,
              location: (0, Z.m)(n, !0),
              locationIcon: (0, i.jsx)(c._tJ, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16,
                  className: W.stageIcon
              }),
              children: (0, i.jsx)(Y, { guildEvent: t })
          });
}
function Y(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, S.bO)({ eventId: t.id });
        }, [t]);
    return (0, i.jsx)(c.zxk, {
        fullWidth: !0,
        className: W.joinButton,
        onClick: n,
        color: c.zxk.Colors.GREEN,
        size: c.zxk.Sizes.SMALL,
        children: G.NW.string(G.t.z4FcDg)
    });
}
function K(e) {
    let { channel: t, label: n } = e;
    return (0, i.jsx)(c.zxk, {
        fullWidth: !0,
        className: W.joinButton,
        onClick: () => {
            null != t && null != t.getGuildId() && ((0, m.Cq)(t), (0, g.XU)(t.getGuildId(), t.id));
        },
        color: c.zxk.Colors.GREEN,
        size: c.zxk.Sizes.SMALL,
        children: n
    });
}
function q(e) {
    let { stageInstance: t, channel: n } = e,
        r = (0, s.Wu)([b.Z], () => [...new Set(b.Z.getMutableParticipants(n.id, _.pV.SPEAKER).map((e) => e.user))], [n.id]),
        l = (0, s.e7)([b.Z], () => b.Z.getParticipantCount(n.id, _.pV.AUDIENCE), [n.id]),
        a = G.NW.formatToPlainString(G.t['+v2pNz'], { count: ''.concat(l) });
    return (0, i.jsx)(V, {
        onClickCloseIcon: () => (0, P.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: G.NW.string(G.t['X2K3//']),
        location: n.name,
        details: a,
        detailsIcon: (0, i.jsx)(c.VWR, {
            size: 'custom',
            color: 'currentColor',
            width: 14,
            height: 14,
            className: W.stageIcon
        }),
        locationIcon: (0, i.jsx)(c.ewx, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: W.stageIcon
        }),
        topic: t.topic,
        children: (0, i.jsx)(X, {
            channel: n,
            speakers: r,
            voiceType: 2
        })
    });
}
var Q = (((r = {})[(r.VOICE = 1)] = 'VOICE'), (r[(r.STAGE = 2)] = 'STAGE'), (r[(r.STUDY_ROOM = 3)] = 'STUDY_ROOM'), r);
function X(e) {
    let { channel: t, speakers: n, voiceType: r } = e,
        a = t.getGuildId(),
        d = l.useMemo(() => n.slice(0, 3), [n]),
        p = (0, s.e7)([y.Z], () => y.Z.can(U.Plq.CONNECT, t)),
        h = (0, N.Z)(t.id),
        f = G.NW.string(G.t.VJlc0d);
    switch (r) {
        case 1:
            f = G.NW.string(G.t.VJlc0d);
            break;
        case 2:
            (f = G.NW.string(G.t.ZYO5OD)), (null == h ? void 0 : h.speaker) ? (f = G.NW.string(G.t['/cnSFR'])) : null != h && (f = G.NW.string(G.t.btSGOj));
            break;
        case 3:
            f = G.NW.string(G.t.wBoE6O);
            break;
        default:
            (0, C.vE)(r);
    }
    return null == a
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  d.length > 0
                      ? (0, i.jsxs)('div', {
                            className: o()(W.textBlock, W.singleLine),
                            children: [
                                (0, i.jsx)(u.Z, {
                                    guildId: a,
                                    users: d,
                                    showUserPopout: !0,
                                    size: u.u.SIZE_16
                                }),
                                (0, i.jsx)(c.Text, {
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    className: W.userNames,
                                    children: (0, E.ER)(a, d, null == t ? void 0 : t.id, n.length)
                                })
                            ]
                        })
                      : null,
                  p &&
                      null == h &&
                      (0, i.jsx)(K, {
                          channel: t,
                          label: f
                      })
              ]
          });
}
let J = l.memo(function (e) {
    let { guild: t } = e,
        { showRedesignedLiveChannelNotice: n } = (0, p.o)(!0),
        r = (0, x.y)(t.id),
        l = (0, w.k5)(t.id),
        a = (0, w.Vm)(t.id),
        o = (0, s.e7)([O.Z], () => O.Z.getStageInstanceByChannel(null == r ? void 0 : r.id), [r]),
        { isStageNoticeHidden: c, isEventNoticeHidden: u } = (0, s.cj)(
            [j.Z],
            () => ({
                isStageNoticeHidden: j.Z.isLiveChannelNoticeHidden({ stageId: null == o ? void 0 : o.id }),
                isEventNoticeHidden: j.Z.isLiveChannelNoticeHidden({ eventId: null == l ? void 0 : l.id })
            }),
            [o, l]
        ),
        d = null,
        f = null != o && null != r && !c;
    if (n) return (0, i.jsx)(h.Z, { guild: t });
    null == l || u
        ? f &&
          (d = (0, i.jsx)(q, {
              stageInstance: o,
              channel: r
          }))
        : l.entity_type === M.WX.STAGE_INSTANCE && f
          ? (d = (0, i.jsx)(q, {
                stageInstance: o,
                channel: r
            }))
          : l.entity_type === M.WX.EXTERNAL
            ? (d = (0, i.jsx)(z, { guildEvent: l }))
            : l.entity_type === M.WX.VOICE &&
              null != r &&
              (d = (0, i.jsx)(B, {
                  guildEvent: l,
                  channel: r
              }));
    let g = t.hasFeature(U.oNc.COMMUNITY) || t.hasFeature(U.oNc.HUB);
    if (null == d && null != a && !g) {
        let { upcomingEvent: e, noticeType: t } = a;
        d = (0, i.jsx)(F, {
            guildEvent: e,
            noticeType: t
        });
    }
    return d;
});
