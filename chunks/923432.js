n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(382222),
    o = n(311907),
    c = n(397927),
    d = n(250719),
    u = n(636585),
    h = n(531685),
    A = n(147036),
    _ = n(288989),
    m = n(985018),
    g = n(567207);
let p = { friction: 30, tension: 300 };
function f(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        s = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        r = (0, d.A)(t.id),
        o = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        h = s?.getChannelRecords() ?? [],
        _ = (0, A.fK)({ channels: h, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: r });
    return (0, i.jsxs)(c.DUT, {
        className: a()(g.M0, g.OF),
        onClick: o,
        children: [
            (0, i.jsx)(c.HKD, { size: "custom", className: g.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/semibold",
                className: g.pM,
                children: m.intl.format(m.t["fDlr+F"], { count: _.length }),
            }),
            (0, i.jsx)(u.A, {
                guildId: t.id,
                className: g.J$,
                users: _.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c._3J.SIZE_16,
            }),
        ],
    });
}
function x(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: s, jumpToVoiceChannels: d, jumpToChannel: u } = e,
        { bottomBar: A, topBar: x } = (0, o.cf)([_.A], () => _.A.getUnreadStateForGuildId(n.id)),
        E = (0, o.bG)([h.A], () => h.A.isFocused()),
        { mode: I, mentionCount: C, targetChannelId: N } = "bottom" === t ? A : x,
        T = I === _.k.HIDDEN,
        S = (0, c.zhh)(
            {
                to: { transform: T ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: p,
            },
            E ? "respect-motion-settings" : "animate-never",
        ),
        b = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != N && u(N);
            },
            [u, N],
        );
    return (0, i.jsx)("div", {
        className: a()(g.kL, { [g.Mn]: "top" === t, [g.sQ]: "bottom" === t }),
        children: (0, i.jsx)(r.animated.div, {
            className: g.pK,
            style: S,
            "aria-hidden": T,
            children:
                I === _.k.HIDDEN
                    ? (0, i.jsx)("div", { className: a()(g.M0, g.Te) })
                    : I === _.k.UNREAD
                      ? (0, i.jsxs)(c.DUT, {
                            className: g.M0,
                            onClick: b,
                            children: [
                                "bottom" === t
                                    ? (0, i.jsx)(c.abt, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: g.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, i.jsx)(c.tN5, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: g.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: g.pM,
                                    children: m.intl.string(m.t.FCRiT3),
                                }),
                            ],
                        })
                      : I === _.k.MENTIONS
                        ? (0, i.jsx)(c.DUT, {
                              className: a()(g.M0, g.vU),
                              onClick: b,
                              children: (0, i.jsx)(c.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: g.pM,
                                  children: m.intl.format(m.t.EQcLyp, { count: C }),
                              }),
                          })
                        : I === _.k.VOICE_CHANNELS
                          ? (0, i.jsx)(f, { jumpToVoiceChannels: d, guildChannels: n, guildChannelsVersion: s })
                          : void 0,
        }),
    });
}
