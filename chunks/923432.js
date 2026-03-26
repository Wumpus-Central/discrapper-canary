"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(4208),
    o = n(311907),
    c = n(397927),
    d = n(250719),
    u = n(636585),
    h = n(531685),
    A = n(147036),
    m = n(288989),
    p = n(985018),
    g = n(567207);
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
        m = (0, A.fK)({ channels: h, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: a });
    return (0, i.jsxs)(c.DUT, {
        className: r()(g.M0, g.OF),
        onClick: o,
        children: [
            (0, i.jsx)(c.HKD, { size: "custom", className: g.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/semibold",
                className: g.pM,
                children: p.intl.format(p.t["fDlr+F"], { count: m.length }),
            }),
            (0, i.jsx)(u.A, {
                guildId: t.id,
                className: g.J$,
                users: m.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c._3J.SIZE_16,
            }),
        ],
    });
}
function x(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: d, jumpToChannel: u } = e,
        { bottomBar: A, topBar: x } = (0, o.cf)([m.A], () => m.A.getUnreadStateForGuildId(n.id)),
        C = (0, o.bG)([h.A], () => h.A.isFocused()),
        { mode: E, mentionCount: I, targetChannelId: N } = "bottom" === t ? A : x,
        b = E === m.k.HIDDEN,
        S = (0, c.zhh)(
            {
                to: { transform: b ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: _,
            },
            C ? "respect-motion-settings" : "animate-never",
        ),
        T = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != N && u(N);
            },
            [u, N],
        );
    return (0, i.jsx)("div", {
        className: r()(g.kL, { [g.Mn]: "top" === t, [g.sQ]: "bottom" === t }),
        children: (0, i.jsx)(a.animated.div, {
            className: g.pK,
            style: S,
            "aria-hidden": b,
            children:
                E === m.k.HIDDEN
                    ? (0, i.jsx)("div", { className: r()(g.M0, g.Te) })
                    : E === m.k.UNREAD
                      ? (0, i.jsxs)(c.DUT, {
                            className: g.M0,
                            onClick: T,
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
                                    children: p.intl.string(p.t.FCRiT3),
                                }),
                            ],
                        })
                      : E === m.k.MENTIONS
                        ? (0, i.jsx)(c.DUT, {
                              className: r()(g.M0, g.vU),
                              onClick: T,
                              children: (0, i.jsx)(c.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: g.pM,
                                  children: p.intl.format(p.t.EQcLyp, { count: I }),
                              }),
                          })
                        : E === m.k.VOICE_CHANNELS
                          ? (0, i.jsx)(f, { jumpToVoiceChannels: d, guildChannels: n, guildChannelsVersion: l })
                          : void 0,
        }),
    });
}
