(n.d(t, {
    Co: () => X,
    ZP: () => J,
    bZ: () => Q,
    gt: () => V
}),
    n(388685));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(884338),
    p = n(471445),
    h = n(986332),
    f = n(662842),
    g = n(703656),
    m = n(922482),
    b = n(565799),
    _ = n(501655),
    E = n(192079),
    O = n(427679),
    y = n(448206),
    I = n(496675),
    v = n(938475),
    C = n(626135),
    S = n(823379),
    N = n(15274),
    T = n(924301),
    P = n(504160),
    j = n(151864),
    A = n(835184),
    Z = n(725436),
    x = n(497656),
    w = n(79874),
    L = n(554747),
    R = n(230900),
    D = n(854698),
    k = n(139712),
    M = n(765305),
    U = n(981631),
    G = n(388032),
    B = n(647128);
let V = l.memo(function (e) {
    let { heading: t, location: n, locationIcon: r, details: l, detailsIcon: a, topic: s, onClickCloseIcon: c, children: d } = e;
    return (0, i.jsxs)('div', {
        className: B.channelNotice,
        children: [
            (0, i.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    (0, i.jsx)('div', { className: B.liveIndicator }),
                    (0, i.jsx)(u.Text, {
                        color: 'text-feedback-positive',
                        variant: 'text-xs/semibold',
                        className: B.liveNowText,
                        children: t
                    }),
                    null != c &&
                        (0, i.jsx)(u.P3F, {
                            onClick: c,
                            className: B.closeIcon,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, i.jsx)(u.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                ]
            }),
            (0, i.jsx)(u.X6q, {
                color: 'header-primary',
                variant: 'heading-md/semibold',
                className: B.eventName,
                children: s
            }),
            (0, i.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    r,
                    (0, i.jsx)(u.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        className: B.channelName,
                        children: n
                    }),
                    null != l &&
                        null != a &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.Text, {
                                    className: B.dotDivider,
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    children: '\u2022'
                                }),
                                a,
                                (0, i.jsx)(u.Text, {
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    className: B.details,
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
function H(e) {
    let { guildEvent: t, channel: n } = e,
        r = (0, s.Wu)(
            [v.ZP],
            () =>
                v.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        l = (0, p.KS)(n);
    return (0, i.jsx)(V, {
        onClickCloseIcon: () => (0, P.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: G.intl.string(G.t['X2K3//']),
        topic: t.name,
        location: n.name,
        locationIcon:
            null != l
                ? (0, i.jsx)(l, {
                      size: 'xs',
                      color: 'currentColor',
                      className: B.stageIcon
                  })
                : null,
        children: (0, i.jsx)(X, {
            channel: n,
            speakers: r,
            voiceType: 1
        })
    });
}
function F(e) {
    let { guildEvent: t, noticeType: n } = e,
        r = (0, D.DK)(t),
        l = (0, s.e7)([T.ZP], () => T.ZP.isInterestedInEventRecurrence(t.id, r), [t.id, r]),
        a = (0, s.e7)([A.Z], () => A.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != a || (0, P._6)(t.id),
        (0, i.jsxs)(c.zx, {
            fullWidth: !0,
            className: B.joinButton,
            innerClassName: B.rsvpButton,
            onClick: function () {
                ((0, k.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, P.L_)(t.id), 1000)),
                    C.default.track(U.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                        guild_id: t.guild_id,
                        notice_type: n
                    }));
            },
            look: l ? c.zx.Looks.OUTLINED : c.zx.Looks.FILLED,
            color: l ? c.zx.Colors.TRANSPARENT : c.zx.Colors.GREEN,
            size: c.zx.Sizes.SMALL,
            children: [
                l
                    ? (0, i.jsx)(u.dz2, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: B.buttonIcon
                      })
                    : (0, i.jsx)(u.Dkj, {
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
    let { guildEvent: n, noticeType: r } = e,
        a = (0, R.cS)(n),
        s = null != a ? (0, Z.m)(a, !0) : null,
        c = (0, R.nE)(n),
        d = (0, p.KS)(c),
        { startTime: h, endTime: f } = (0, w.ZP)(n),
        { startDateTimeString: g, upcomingEvent: m, diffMinutes: b } = (0, D.ub)(h.toISOString(), null == f ? void 0 : f.toISOString()),
        _ = m ? (b > 0 ? G.intl.formatToPlainString(G.t.PQlCWl, { minutes: b }) : G.intl.string(G.t.WINqKS)) : G.intl.formatToPlainString(G.t.DC6h3N, { date: g });
    return (
        l.useEffect(() => {
            C.default.track(U.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: r,
                guild_id: n.guild_id
            });
        }, [n, r]),
        (0, i.jsxs)('div', {
            className: B.channelNotice,
            children: [
                (0, i.jsxs)('div', {
                    className: B.textBlock,
                    children: [
                        (0, i.jsx)(u.P3F, {
                            onClick: () => (0, N.bO)({ eventId: n.id }),
                            className: B.eventNameClickable,
                            children: (0, i.jsx)(u.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                className: B.eventName,
                                children: n.name
                            })
                        }),
                        (0, i.jsx)(u.P3F, {
                            onClick: () => {
                                (C.default.track(U.rMx.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: r,
                                    guild_id: n.guild_id
                                }),
                                    (0, P.L_)(n.id));
                            },
                            className: B.closeIcon,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, i.jsx)(u.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: o()(B.textBlock, B.singleLine),
                    children: [
                        (0, i.jsx)(u.Que, {
                            size: 'custom',
                            color: 'currentColor',
                            className: B.stageIcon,
                            width: 16,
                            height: 16
                        }),
                        (0, i.jsx)(u.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            className: B.startTime,
                            children: _
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: o()(B.textBlock, B.singleLine),
                    children: [
                        null != d
                            ? (0, i.jsx)(d, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: B.stageIcon
                              })
                            : (0, i.jsx)(u._tJ, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16,
                                  height: 16,
                                  className: B.stageIcon
                              }),
                        (0, i.jsx)(u.Text, {
                            color: 'none',
                            variant: 'text-xs/normal',
                            className: B.channelName,
                            children: null != (t = null == c ? void 0 : c.name) ? t : s
                        })
                    ]
                }),
                (0, i.jsx)(F, {
                    guildEvent: n,
                    noticeType: r
                })
            ]
        })
    );
}
function W(e) {
    let { guildEvent: t } = e,
        n = (0, R.cS)(t);
    return null == n
        ? null
        : (0, i.jsx)(V, {
              onClickCloseIcon: () => (0, P.ji)({ eventId: null == t ? void 0 : t.id }),
              heading: G.intl.string(G.t['1+boPj']),
              topic: t.name,
              location: (0, Z.m)(n, !0),
              locationIcon: (0, i.jsx)(u._tJ, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16,
                  className: B.stageIcon
              }),
              children: (0, i.jsx)(Y, { guildEvent: t })
          });
}
function Y(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, N.bO)({ eventId: t.id });
        }, [t]);
    return (0, i.jsx)('div', {
        'data-button-hoisted-classname-wrapper': !0,
        className: B.joinButton,
        children: (0, i.jsx)(u.zxk, {
            variant: 'active',
            size: 'sm',
            text: G.intl.string(G.t.z4FcDg),
            fullWidth: !0,
            onClick: n
        })
    });
}
function K(e) {
    let { channel: t, label: n } = e;
    return (0, i.jsx)('div', {
        'data-button-hoisted-classname-wrapper': !0,
        className: B.joinButton,
        children: (0, i.jsx)(u.zxk, {
            variant: 'active',
            size: 'sm',
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, m.Cq)(t), (0, g.XU)(t.getGuildId(), t.id));
            }
        })
    });
}
function q(e) {
    let { stageInstance: t, channel: n } = e,
        r = (0, s.Wu)([b.Z], () => [...new Set(b.Z.getMutableParticipants(n.id, _.pV.SPEAKER).map((e) => e.user))], [n.id]),
        l = (0, s.e7)([b.Z], () => b.Z.getParticipantCount(n.id, _.pV.AUDIENCE), [n.id]),
        a = G.intl.formatToPlainString(G.t['+v2pNz'], { count: ''.concat(l) });
    return (0, i.jsx)(V, {
        onClickCloseIcon: () => (0, P.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: G.intl.string(G.t['X2K3//']),
        location: n.name,
        details: a,
        detailsIcon: (0, i.jsx)(u.VWR, {
            size: 'custom',
            color: 'currentColor',
            width: 14,
            height: 14,
            className: B.stageIcon
        }),
        locationIcon: (0, i.jsx)(u.ewx, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: B.stageIcon
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
        c = l.useMemo(() => n.slice(0, 3), [n]),
        p = (0, s.e7)([I.Z], () => I.Z.can(U.Plq.CONNECT, t)),
        h = (0, y.Z)(t.id),
        f = G.intl.string(G.t.VJlc0d);
    switch (r) {
        case 1:
            f = G.intl.string(G.t.VJlc0d);
            break;
        case 2:
            ((f = G.intl.string(G.t.ZYO5OD)), (null == h ? void 0 : h.speaker) ? (f = G.intl.string(G.t['/cnSFR'])) : null != h && (f = G.intl.string(G.t.btSGOj)));
            break;
        case 3:
            f = G.intl.string(G.t.wBoE6O);
            break;
        default:
            (0, S.vE)(r);
    }
    return null == a
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  c.length > 0
                      ? (0, i.jsxs)('div', {
                            className: o()(B.textBlock, B.singleLine),
                            children: [
                                (0, i.jsx)(d.ZP, {
                                    guildId: a,
                                    users: c,
                                    showUserPopout: !0,
                                    size: d.u8.SIZE_16
                                }),
                                (0, i.jsx)(u.Text, {
                                    color: 'none',
                                    variant: 'text-xs/normal',
                                    className: B.userNames,
                                    children: (0, E.ER)(a, c, null == t ? void 0 : t.id, n.length)
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
        { showRedesignedLiveChannelNotice: n } = (0, h.o)(!0),
        r = (0, x.y)(t.id),
        l = (0, L.k5)(t.id),
        a = (0, L.Vm)(t.id),
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
        p = null != o && null != r && !c;
    if (n) return (0, i.jsx)(f.Z, { guild: t });
    null == l || u
        ? p &&
          (d = (0, i.jsx)(q, {
              stageInstance: o,
              channel: r
          }))
        : l.entity_type === M.WX.STAGE_INSTANCE && p
          ? (d = (0, i.jsx)(q, {
                stageInstance: o,
                channel: r
            }))
          : l.entity_type === M.WX.EXTERNAL
            ? (d = (0, i.jsx)(W, { guildEvent: l }))
            : l.entity_type === M.WX.VOICE &&
              null != r &&
              (d = (0, i.jsx)(H, {
                  guildEvent: l,
                  channel: r
              }));
    let g = t.features.has(U.oNc.COMMUNITY) || t.features.has(U.oNc.HUB);
    if (null == d && null != a && !g) {
        let { upcomingEvent: e, noticeType: t } = a;
        d = (0, i.jsx)(z, {
            guildEvent: e,
            noticeType: t
        });
    }
    return d;
});
