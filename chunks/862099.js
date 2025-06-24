n.d(t, {
    Co: () => X,
    ZP: () => Q,
    bZ: () => q,
    gt: () => B
}),
    n(388685);
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(884338),
    d = n(471445),
    p = n(986332),
    h = n(662842),
    f = n(703656),
    g = n(922482),
    m = n(565799),
    b = n(501655),
    _ = n(192079),
    E = n(427679),
    O = n(448206),
    y = n(496675),
    I = n(938475),
    v = n(626135),
    C = n(823379),
    S = n(15274),
    N = n(924301),
    T = n(504160),
    P = n(151864),
    j = n(835184),
    A = n(725436),
    Z = n(497656),
    x = n(79874),
    w = n(554747),
    L = n(230900),
    R = n(854698),
    D = n(139712),
    k = n(765305),
    M = n(981631),
    U = n(388032),
    G = n(647128);
let B = l.memo(function (e) {
    let { heading: t, location: n, locationIcon: r, details: l, detailsIcon: a, topic: s, onClickCloseIcon: u, children: d } = e;
    return (0, i.jsxs)('div', {
        className: G.channelNotice,
        children: [
            (0, i.jsxs)('div', {
                className: o()(G.textBlock, G.singleLine),
                children: [
                    (0, i.jsx)('div', { className: G.liveIndicator }),
                    (0, i.jsx)(c.Text, {
                        color: 'text-positive',
                        variant: 'text-xs/semibold',
                        className: G.liveNowText,
                        children: t
                    }),
                    null != u &&
                        (0, i.jsx)(c.P3F, {
                            onClick: u,
                            className: G.closeIcon,
                            'aria-label': U.intl.string(U.t.cpT0Cg),
                            children: (0, i.jsx)(c.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                ]
            }),
            (0, i.jsx)(c.X6q, {
                color: 'header-primary',
                variant: 'heading-md/semibold',
                className: G.eventName,
                children: s
            }),
            (0, i.jsxs)('div', {
                className: o()(G.textBlock, G.singleLine),
                children: [
                    r,
                    (0, i.jsx)(c.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        className: G.channelName,
                        children: n
                    }),
                    null != l &&
                        null != a &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    className: G.dotDivider,
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    children: '\u2022'
                                }),
                                a,
                                (0, i.jsx)(c.Text, {
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    className: G.details,
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
function V(e) {
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
    return (0, i.jsx)(B, {
        onClickCloseIcon: () => (0, T.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: U.intl.string(U.t['X2K3//']),
        topic: t.name,
        location: n.name,
        locationIcon:
            null != l
                ? (0, i.jsx)(l, {
                      size: 'xs',
                      color: 'currentColor',
                      className: G.stageIcon
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
        r = (0, R.DK)(t),
        l = (0, s.e7)([N.ZP], () => N.ZP.isInterestedInEventRecurrence(t.id, r), [t.id, r]),
        a = (0, s.e7)([j.Z], () => j.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != a || (0, T._6)(t.id),
        (0, i.jsxs)(c.zxk, {
            fullWidth: !0,
            className: G.joinButton,
            innerClassName: G.rsvpButton,
            onClick: function () {
                (0, D.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, T.L_)(t.id), 1000)),
                    v.default.track(M.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
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
                          className: G.buttonIcon
                      })
                    : (0, i.jsx)(c.Dkj, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: G.buttonIcon
                      }),
                U.intl.string(U.t.DlcqlZ)
            ]
        })
    );
}
function F(e) {
    var t;
    let { guildEvent: n, noticeType: r } = e,
        a = (0, L.cS)(n),
        s = null != a ? (0, A.m)(a, !0) : null,
        u = (0, L.nE)(n),
        p = (0, d.KS)(u),
        { startTime: h, endTime: f } = (0, x.ZP)(n),
        { startDateTimeString: g, upcomingEvent: m, diffMinutes: b } = (0, R.ub)(h.toISOString(), null == f ? void 0 : f.toISOString()),
        _ = m ? (b > 0 ? U.intl.formatToPlainString(U.t.PQlCWl, { minutes: b }) : U.intl.string(U.t.WINqKS)) : U.intl.formatToPlainString(U.t.DC6h3N, { date: g });
    return (
        l.useEffect(() => {
            v.default.track(M.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: r,
                guild_id: n.guild_id
            });
        }, [n, r]),
        (0, i.jsxs)('div', {
            className: G.channelNotice,
            children: [
                (0, i.jsxs)('div', {
                    className: G.textBlock,
                    children: [
                        (0, i.jsx)(c.P3F, {
                            onClick: () => (0, S.bO)({ eventId: n.id }),
                            className: G.eventNameClickable,
                            children: (0, i.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                className: G.eventName,
                                children: n.name
                            })
                        }),
                        (0, i.jsx)(c.P3F, {
                            onClick: () => {
                                v.default.track(M.rMx.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: r,
                                    guild_id: n.guild_id
                                }),
                                    (0, T.L_)(n.id);
                            },
                            className: G.closeIcon,
                            'aria-label': U.intl.string(U.t.cpT0Cg),
                            children: (0, i.jsx)(c.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: o()(G.textBlock, G.singleLine),
                    children: [
                        (0, i.jsx)(c.Que, {
                            size: 'custom',
                            color: 'currentColor',
                            className: G.stageIcon,
                            width: 16,
                            height: 16
                        }),
                        (0, i.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            className: G.startTime,
                            children: _
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: o()(G.textBlock, G.singleLine),
                    children: [
                        null != p
                            ? (0, i.jsx)(p, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: G.stageIcon
                              })
                            : (0, i.jsx)(c._tJ, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16,
                                  height: 16,
                                  className: G.stageIcon
                              }),
                        (0, i.jsx)(c.Text, {
                            color: 'none',
                            variant: 'text-xs/normal',
                            className: G.channelName,
                            children: null != (t = null == u ? void 0 : u.name) ? t : s
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
        n = (0, L.cS)(t);
    return null == n
        ? null
        : (0, i.jsx)(B, {
              onClickCloseIcon: () => (0, T.ji)({ eventId: null == t ? void 0 : t.id }),
              heading: U.intl.string(U.t['1+boPj']),
              topic: t.name,
              location: (0, A.m)(n, !0),
              locationIcon: (0, i.jsx)(c._tJ, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16,
                  className: G.stageIcon
              }),
              children: (0, i.jsx)(W, { guildEvent: t })
          });
}
function W(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, S.bO)({ eventId: t.id });
        }, [t]);
    return (0, i.jsx)(c.zxk, {
        fullWidth: !0,
        className: G.joinButton,
        onClick: n,
        color: c.zxk.Colors.GREEN,
        size: c.zxk.Sizes.SMALL,
        children: U.intl.string(U.t.z4FcDg)
    });
}
function Y(e) {
    let { channel: t, label: n } = e;
    return (0, i.jsx)(c.zxk, {
        fullWidth: !0,
        className: G.joinButton,
        onClick: () => {
            null != t && null != t.getGuildId() && ((0, g.Cq)(t), (0, f.XU)(t.getGuildId(), t.id));
        },
        color: c.zxk.Colors.GREEN,
        size: c.zxk.Sizes.SMALL,
        children: n
    });
}
function K(e) {
    let { stageInstance: t, channel: n } = e,
        r = (0, s.Wu)([m.Z], () => [...new Set(m.Z.getMutableParticipants(n.id, b.pV.SPEAKER).map((e) => e.user))], [n.id]),
        l = (0, s.e7)([m.Z], () => m.Z.getParticipantCount(n.id, b.pV.AUDIENCE), [n.id]),
        a = U.intl.formatToPlainString(U.t['+v2pNz'], { count: ''.concat(l) });
    return (0, i.jsx)(B, {
        onClickCloseIcon: () => (0, T.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: U.intl.string(U.t['X2K3//']),
        location: n.name,
        details: a,
        detailsIcon: (0, i.jsx)(c.VWR, {
            size: 'custom',
            color: 'currentColor',
            width: 14,
            height: 14,
            className: G.stageIcon
        }),
        locationIcon: (0, i.jsx)(c.ewx, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: G.stageIcon
        }),
        topic: t.topic,
        children: (0, i.jsx)(X, {
            channel: n,
            speakers: r,
            voiceType: 2
        })
    });
}
var q = (((r = {})[(r.VOICE = 1)] = 'VOICE'), (r[(r.STAGE = 2)] = 'STAGE'), (r[(r.STUDY_ROOM = 3)] = 'STUDY_ROOM'), r);
function X(e) {
    let { channel: t, speakers: n, voiceType: r } = e,
        a = t.getGuildId(),
        d = l.useMemo(() => n.slice(0, 3), [n]),
        p = (0, s.e7)([y.Z], () => y.Z.can(M.Plq.CONNECT, t)),
        h = (0, O.Z)(t.id),
        f = U.intl.string(U.t.VJlc0d);
    switch (r) {
        case 1:
            f = U.intl.string(U.t.VJlc0d);
            break;
        case 2:
            (f = U.intl.string(U.t.ZYO5OD)), (null == h ? void 0 : h.speaker) ? (f = U.intl.string(U.t['/cnSFR'])) : null != h && (f = U.intl.string(U.t.btSGOj));
            break;
        case 3:
            f = U.intl.string(U.t.wBoE6O);
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
                            className: o()(G.textBlock, G.singleLine),
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
                                    className: G.userNames,
                                    children: (0, _.ER)(a, d, null == t ? void 0 : t.id, n.length)
                                })
                            ]
                        })
                      : null,
                  p &&
                      null == h &&
                      (0, i.jsx)(Y, {
                          channel: t,
                          label: f
                      })
              ]
          });
}
let Q = l.memo(function (e) {
    let { guild: t } = e,
        { showRedesignedLiveChannelNotice: n } = (0, p.o)(!0),
        r = (0, Z.y)(t.id),
        l = (0, w.k5)(t.id),
        a = (0, w.Vm)(t.id),
        o = (0, s.e7)([E.Z], () => E.Z.getStageInstanceByChannel(null == r ? void 0 : r.id), [r]),
        { isStageNoticeHidden: c, isEventNoticeHidden: u } = (0, s.cj)(
            [P.Z],
            () => ({
                isStageNoticeHidden: P.Z.isLiveChannelNoticeHidden({ stageId: null == o ? void 0 : o.id }),
                isEventNoticeHidden: P.Z.isLiveChannelNoticeHidden({ eventId: null == l ? void 0 : l.id })
            }),
            [o, l]
        ),
        d = null,
        f = null != o && null != r && !c;
    if (n) return (0, i.jsx)(h.Z, { guild: t });
    null == l || u
        ? f &&
          (d = (0, i.jsx)(K, {
              stageInstance: o,
              channel: r
          }))
        : l.entity_type === k.WX.STAGE_INSTANCE && f
          ? (d = (0, i.jsx)(K, {
                stageInstance: o,
                channel: r
            }))
          : l.entity_type === k.WX.EXTERNAL
            ? (d = (0, i.jsx)(z, { guildEvent: l }))
            : l.entity_type === k.WX.VOICE &&
              null != r &&
              (d = (0, i.jsx)(V, {
                  guildEvent: l,
                  channel: r
              }));
    let g = t.hasFeature(M.oNc.COMMUNITY) || t.hasFeature(M.oNc.HUB);
    if (null == d && null != a && !g) {
        let { upcomingEvent: e, noticeType: t } = a;
        d = (0, i.jsx)(F, {
            guildEvent: e,
            noticeType: t
        });
    }
    return d;
});
