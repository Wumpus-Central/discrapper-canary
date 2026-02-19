"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(475539),
    o = n(311907),
    c = n(397927),
    d = n(250719),
    u = n(636585),
    h = n(531685),
    A = n(147036),
    p = n(288989),
    g = n(985018),
    m = n(317022);
let _ = { friction: 30, tension: 300 };
function f(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        a = (0, d.A)(t.id),
        o = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        h = l?.getChannelRecords() ?? [],
        p = (0, A.fK)({ channels: h, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: a });
    return (0, i.jsxs)(c.DUT, {
        className: r()(m.M0, m.OF),
        onClick: o,
        children: [
            (0, i.jsx)(c.HKD, { size: "custom", className: m.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/semibold",
                className: m.pM,
                children: g.intl.format(g.t["fDlr+F"], { count: p.length }),
            }),
            (0, i.jsx)(u.A, {
                guildId: t.id,
                className: m.J$,
                users: p.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c._3J.SIZE_16,
            }),
        ],
    });
}
function x(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: d, jumpToChannel: u } = e,
        { bottomBar: A, topBar: x } = (0, o.cf)([p.A], () => p.A.getUnreadStateForGuildId(n.id)),
        C = (0, o.bG)([h.A], () => h.A.isFocused()),
        { mode: E, mentionCount: I, targetChannelId: b } = "bottom" === t ? A : x,
        N = E === p.k.HIDDEN,
        S = (0, c.zhh)(
            {
                to: { transform: N ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: _,
            },
            C ? "respect-motion-settings" : "animate-never",
        ),
        T = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != b && u(b);
            },
            [u, b],
        );
    return (0, i.jsx)("div", {
        className: r()(m.kL, { [m.Mn]: "top" === t, [m.sQ]: "bottom" === t }),
        children: (0, i.jsx)(a.animated.div, {
            className: m.pK,
            style: S,
            "aria-hidden": N,
            children:
                E === p.k.HIDDEN
                    ? (0, i.jsx)("div", { className: r()(m.M0, m.Te) })
                    : E === p.k.UNREAD
                      ? (0, i.jsxs)(c.DUT, {
                            className: m.M0,
                            onClick: T,
                            children: [
                                "bottom" === t
                                    ? (0, i.jsx)(c.abt, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: m.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, i.jsx)(c.tN5, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: m.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: m.pM,
                                    children: g.intl.string(g.t.FCRiT3),
                                }),
                            ],
                        })
                      : E === p.k.MENTIONS
                        ? (0, i.jsx)(c.DUT, {
                              className: r()(m.M0, m.vU),
                              onClick: T,
                              children: (0, i.jsx)(c.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: m.pM,
                                  children: g.intl.format(g.t.EQcLyp, { count: I }),
                              }),
                          })
                        : E === p.k.VOICE_CHANNELS
                          ? (0, i.jsx)(f, { jumpToVoiceChannels: d, guildChannels: n, guildChannelsVersion: l })
                          : void 0,
        }),
    });
}
