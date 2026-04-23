n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(419354),
    o = n(311907),
    d = n(939249),
    c = n(983851),
    u = n(834730),
    h = n(778712),
    A = n(717421),
    _ = n(847374),
    m = n(900797),
    g = n(250719),
    p = n(636585),
    f = n(531685),
    E = n(147036),
    x = n(288989),
    I = n(985018),
    C = n(335543);
let b = { friction: 30, tension: 300 };
function N(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        s = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        r = (0, g.A)(t.id),
        o = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        A = s?.getChannelRecords() ?? [],
        _ = (0, E.fK)({ channels: A, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: r });
    return (0, i.jsxs)(d.D, {
        className: a()(C.M0, C.OF),
        onClick: o,
        children: [
            (0, i.jsx)(c.H, { size: "custom", className: C.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/semibold",
                className: C.pM,
                children: I.intl.format(I.t["fDlr+F"], { count: _.length }),
            }),
            (0, i.jsx)(p.A, {
                guildId: t.id,
                className: C.J$,
                users: _.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: h._3.SIZE_16,
            }),
        ],
    });
}
function S(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: s, jumpToVoiceChannels: c, jumpToChannel: h } = e,
        { bottomBar: g, topBar: p } = (0, o.cf)([x.A], () => x.A.getUnreadStateForGuildId(n.id)),
        E = (0, o.bG)([f.A], () => f.A.isFocused()),
        { mode: S, mentionCount: v, targetChannelId: T } = "bottom" === t ? g : p,
        y = S === x.k.HIDDEN,
        j = (0, A.z)(
            {
                to: { transform: y ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: b,
            },
            E ? "respect-motion-settings" : "animate-never",
        ),
        R = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != T && h(T);
            },
            [h, T],
        );
    return (0, i.jsx)("div", {
        className: a()(C.kL, { [C.Mn]: "top" === t, [C.sQ]: "bottom" === t }),
        children: (0, i.jsx)(r.animated.div, {
            className: C.pK,
            style: j,
            "aria-hidden": y,
            children:
                S === x.k.HIDDEN
                    ? (0, i.jsx)("div", { className: a()(C.M0, C.Te) })
                    : S === x.k.UNREAD
                      ? (0, i.jsxs)(d.D, {
                            className: C.M0,
                            onClick: R,
                            children: [
                                "bottom" === t
                                    ? (0, i.jsx)(_.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: C.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, i.jsx)(m.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: C.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: C.pM,
                                    children: I.intl.string(I.t.FCRiT3),
                                }),
                            ],
                        })
                      : S === x.k.MENTIONS
                        ? (0, i.jsx)(d.D, {
                              className: a()(C.M0, C.vU),
                              onClick: R,
                              children: (0, i.jsx)(u.E, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: C.pM,
                                  children: I.intl.format(I.t.EQcLyp, { count: v }),
                              }),
                          })
                        : S === x.k.VOICE_CHANNELS
                          ? (0, i.jsx)(N, { jumpToVoiceChannels: c, guildChannels: n, guildChannelsVersion: s })
                          : void 0,
        }),
    });
}
