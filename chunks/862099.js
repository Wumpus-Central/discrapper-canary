n.d(t, {
    Co: () => Q,
    ZP: () => J,
    bZ: () => K,
    gt: () => H,
}),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(884338),
    d = n(471445),
    p = n(986332),
    f = n(662842),
    g = n(703656),
    h = n(922482),
    m = n(565799),
    b = n(501655),
    _ = n(192079),
    E = n(427679),
    O = n(448206),
    v = n(496675),
    y = n(938475),
    I = n(626135),
    C = n(823379),
    S = n(15274),
    T = n(924301),
    N = n(504160),
    j = n(151864),
    P = n(835184),
    x = n(725436),
    A = n(497656),
    Z = n(79874),
    w = n(554747),
    L = n(230900),
    R = n(854698),
    D = n(139712),
    M = n(765305),
    k = n(981631),
    U = n(388032),
    G = n(439738);
let H = l.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: r,
        details: l,
        detailsIcon: a,
        topic: s,
        onClickCloseIcon: u,
        children: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: G.channelNotice,
        children: [
            (0, i.jsxs)("div", {
                className: o()(G.textBlock, G.singleLine),
                children: [
                    (0, i.jsx)("div", { className: G.liveIndicator }),
                    (0, i.jsx)(c.Text, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: G.liveNowText,
                        children: t,
                    }),
                    null != u &&
                        (0, i.jsx)(c.P3F, {
                            onClick: u,
                            className: G.closeIcon,
                            "aria-label": U.intl.string(U.t.cpT0Cq),
                            children: (0, i.jsx)(c.Dio, {
                                size: "xs",
                                color: "currentColor",
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(c.Heading, {
                color: "text-strong",
                variant: "heading-md/semibold",
                className: G.eventName,
                children: s,
            }),
            (0, i.jsxs)("div", {
                className: o()(G.textBlock, G.singleLine),
                children: [
                    r,
                    (0, i.jsx)(c.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        className: G.channelName,
                        children: n,
                    }),
                    null != l &&
                        null != a &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    className: G.dotDivider,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                a,
                                (0, i.jsx)(c.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: G.details,
                                    children: l,
                                }),
                            ],
                        }),
                ],
            }),
            d,
        ],
    });
});
function B(e) {
    let { guildEvent: t, channel: n } = e,
        r = (0, s.Wu)(
            [y.ZP],
            () =>
                y.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        l = (0, d.KS)(n);
    return (0, i.jsx)(H, {
        onClickCloseIcon: () => (0, N.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: U.intl.string(U.t["X2K3/4"]),
        topic: t.name,
        location: n.name,
        locationIcon:
            null != l
                ? (0, i.jsx)(l, {
                      size: "xs",
                      color: "currentColor",
                      className: G.stageIcon,
                  })
                : null,
        children: (0, i.jsx)(Q, {
            channel: n,
            speakers: r,
            voiceType: 1,
        }),
    });
}
function V(e) {
    let { guildEvent: t, noticeType: n } = e,
        r = (0, R.DK)(t),
        l = (0, s.e7)([T.ZP], () => T.ZP.isInterestedInEventRecurrence(t.id, r), [t.id, r]),
        a = (0, s.e7)([P.Z], () => P.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != a || (0, N._6)(t.id),
        (0, i.jsx)(c.Button, {
            onClick: function () {
                (0, D.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, N.L_)(t.id), 1000)),
                    I.default.track(k.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                        guild_id: t.guild_id,
                        notice_type: n,
                    });
            },
            text: U.intl.string(U.t.DlcqlU),
            icon: l ? c.dz2 : c.Dkj,
            variant: l ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function F(e) {
    var t;
    let { guildEvent: n, noticeType: r } = e,
        a = (0, L.cS)(n),
        s = null != a ? (0, x.m)(a, !0) : null,
        u = (0, L.nE)(n),
        p = (0, d.KS)(u),
        { startTime: f, endTime: g } = (0, Z.ZP)(n),
        {
            startDateTimeString: h,
            upcomingEvent: m,
            diffMinutes: b,
        } = (0, R.ub)(f.toISOString(), null == g ? void 0 : g.toISOString()),
        _ = m
            ? b > 0
                ? U.intl.formatToPlainString(U.t.PQlCWk, { minutes: b })
                : U.intl.string(U.t.WINqKV)
            : U.intl.formatToPlainString(U.t.DC6h3G, { date: h });
    return (
        l.useEffect(() => {
            I.default.track(k.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: r,
                guild_id: n.guild_id,
            });
        }, [n, r]),
        (0, i.jsxs)("div", {
            className: G.channelNotice,
            children: [
                (0, i.jsxs)("div", {
                    className: G.textBlock,
                    children: [
                        (0, i.jsx)(c.P3F, {
                            onClick: () => (0, S.bO)({ eventId: n.id }),
                            className: G.eventNameClickable,
                            children: (0, i.jsx)(c.Text, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: G.eventName,
                                children: n.name,
                            }),
                        }),
                        (0, i.jsx)(c.P3F, {
                            onClick: () => {
                                I.default.track(k.rMx.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: r,
                                    guild_id: n.guild_id,
                                }),
                                    (0, N.L_)(n.id);
                            },
                            className: G.closeIcon,
                            "aria-label": U.intl.string(U.t.cpT0Cq),
                            children: (0, i.jsx)(c.Dio, {
                                size: "xs",
                                color: "currentColor",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: o()(G.textBlock, G.singleLine),
                    children: [
                        (0, i.jsx)(c.Que, {
                            size: "custom",
                            color: "currentColor",
                            className: G.stageIcon,
                            width: 16,
                            height: 16,
                        }),
                        (0, i.jsx)(c.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: G.startTime,
                            children: _,
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: o()(G.textBlock, G.singleLine),
                    children: [
                        null != p
                            ? (0, i.jsx)(p, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: G.stageIcon,
                              })
                            : (0, i.jsx)(c._tJ, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: G.stageIcon,
                              }),
                        (0, i.jsx)(c.Text, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: G.channelName,
                            children: null != (t = null == u ? void 0 : u.name) ? t : s,
                        }),
                    ],
                }),
                (0, i.jsx)(V, {
                    guildEvent: n,
                    noticeType: r,
                }),
            ],
        })
    );
}
function z(e) {
    let { guildEvent: t } = e,
        n = (0, L.cS)(t);
    return null == n
        ? null
        : (0, i.jsx)(H, {
              onClickCloseIcon: () => (0, N.ji)({ eventId: null == t ? void 0 : t.id }),
              heading: U.intl.string(U.t["1+boPi"]),
              topic: t.name,
              location: (0, x.m)(n, !0),
              locationIcon: (0, i.jsx)(c._tJ, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: G.stageIcon,
              }),
              children: (0, i.jsx)(Y, { guildEvent: t }),
          });
}
function Y(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, S.bO)({ eventId: t.id });
        }, [t]);
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: G.joinButton,
        children: (0, i.jsx)(c.Button, {
            variant: "active",
            size: "sm",
            text: U.intl.string(U.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function W(e) {
    let { channel: t, label: n } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: G.joinButton,
        children: (0, i.jsx)(c.Button, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, h.Cq)(t), (0, g.XU)(t.getGuildId(), t.id));
            },
        }),
    });
}
function q(e) {
    let { stageInstance: t, channel: n } = e,
        r = (0, s.Wu)([m.Z], () => [...new Set(m.Z.getMutableParticipants(n.id, b.pV.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        l = (0, s.e7)([m.Z], () => m.Z.getParticipantCount(n.id, b.pV.AUDIENCE), [n.id]),
        a = U.intl.formatToPlainString(U.t["+v2pN2"], { count: "".concat(l) });
    return (0, i.jsx)(H, {
        onClickCloseIcon: () => (0, N.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: U.intl.string(U.t["X2K3/4"]),
        location: n.name,
        details: a,
        detailsIcon: (0, i.jsx)(c.VWR, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: G.stageIcon,
        }),
        locationIcon: (0, i.jsx)(c.ewx, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: G.stageIcon,
        }),
        topic: t.topic,
        children: (0, i.jsx)(Q, {
            channel: n,
            speakers: r,
            voiceType: 2,
        }),
    });
}
var K = (((r = {})[(r.VOICE = 1)] = "VOICE"), (r[(r.STAGE = 2)] = "STAGE"), (r[(r.STUDY_ROOM = 3)] = "STUDY_ROOM"), r);
function Q(e) {
    let { channel: t, speakers: n, voiceType: r } = e,
        a = t.getGuildId(),
        d = l.useMemo(() => n.slice(0, 3), [n]),
        p = (0, s.e7)([v.Z], () => v.Z.can(k.Plq.CONNECT, t)),
        f = (0, O.Z)(t.id),
        g = U.intl.string(U.t.VJlc0S);
    switch (r) {
        case 1:
            g = U.intl.string(U.t.VJlc0S);
            break;
        case 2:
            (g = U.intl.string(U.t.ZYO5OK)),
                (null == f ? void 0 : f.speaker)
                    ? (g = U.intl.string(U.t["/cnSFc"]))
                    : null != f && (g = U.intl.string(U.t.btSGOj));
            break;
        case 3:
            g = U.intl.string(U.t.wBoE6L);
            break;
        default:
            (0, C.vE)(r);
    }
    return null == a
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  d.length > 0
                      ? (0, i.jsxs)("div", {
                            className: o()(G.textBlock, G.singleLine),
                            children: [
                                (0, i.jsx)(u.ZP, {
                                    guildId: a,
                                    users: d,
                                    showUserPopout: !0,
                                    size: u.u8.SIZE_16,
                                }),
                                (0, i.jsx)(c.Text, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: G.userNames,
                                    children: (0, _.ER)(a, d, null == t ? void 0 : t.id, n.length),
                                }),
                            ],
                        })
                      : null,
                  p &&
                      null == f &&
                      (0, i.jsx)(W, {
                          channel: t,
                          label: g,
                      }),
              ],
          });
}
let J = l.memo(function (e) {
    let { guild: t } = e,
        { showRedesignedLiveChannelNotice: n } = (0, p.o)(!0),
        r = (0, A.y)(t.id),
        l = (0, w.k5)(t.id),
        a = (0, w.Vm)(t.id),
        o = (0, s.e7)([E.Z], () => E.Z.getStageInstanceByChannel(null == r ? void 0 : r.id), [r]),
        { isStageNoticeHidden: c, isEventNoticeHidden: u } = (0, s.cj)(
            [j.Z],
            () => ({
                isStageNoticeHidden: j.Z.isLiveChannelNoticeHidden({ stageId: null == o ? void 0 : o.id }),
                isEventNoticeHidden: j.Z.isLiveChannelNoticeHidden({ eventId: null == l ? void 0 : l.id }),
            }),
            [o, l],
        ),
        d = null,
        g = null != o && null != r && !c;
    if (n) return (0, i.jsx)(f.Z, { guild: t });
    null == l || u
        ? g &&
          (d = (0, i.jsx)(q, {
              stageInstance: o,
              channel: r,
          }))
        : l.entity_type === M.WX.STAGE_INSTANCE && g
          ? (d = (0, i.jsx)(q, {
                stageInstance: o,
                channel: r,
            }))
          : l.entity_type === M.WX.EXTERNAL
            ? (d = (0, i.jsx)(z, { guildEvent: l }))
            : l.entity_type === M.WX.VOICE &&
              null != r &&
              (d = (0, i.jsx)(B, {
                  guildEvent: l,
                  channel: r,
              }));
    let h = t.features.has(k.GuildFeatures.COMMUNITY);
    if (null == d && null != a && !h) {
        let { upcomingEvent: e, noticeType: t } = a;
        d = (0, i.jsx)(F, {
            guildEvent: e,
            noticeType: t,
        });
    }
    return d;
});
