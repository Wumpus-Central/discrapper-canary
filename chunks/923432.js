n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(40153),
    o = n(311907),
    d = n(397927),
    c = n(250719),
    u = n(636585),
    h = n(531685),
    A = n(147036),
    m = n(288989),
    p = n(985018),
    g = n(317022);
let _ = { friction: 30, tension: 300 };
function f(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        s = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        r = (0, c.A)(t.id),
        o = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        h = s?.getChannelRecords() ?? [],
        m = (0, A.fK)({ channels: h, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: r });
    return (0, i.jsxs)(d.DUT, {
        className: a()(g.M0, g.OF),
        onClick: o,
        children: [
            (0, i.jsx)(d.HKD, { size: "custom", className: g.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, i.jsx)(d.Text, {
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
                size: d._3J.SIZE_16,
            }),
        ],
    });
}
function x(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: s, jumpToVoiceChannels: c, jumpToChannel: u } = e,
        { bottomBar: A, topBar: x } = (0, o.cf)([m.A], () => m.A.getUnreadStateForGuildId(n.id)),
        C = (0, o.bG)([h.A], () => h.A.isFocused()),
        { mode: E, mentionCount: I, targetChannelId: b } = "bottom" === t ? A : x,
        N = E === m.k.HIDDEN,
        S = (0, d.zhh)(
            {
                to: { transform: N ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: _,
            },
            C ? "respect-motion-settings" : "animate-never",
        ),
        T = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != b && u(b);
            },
            [u, b],
        );
    return (0, i.jsx)("div", {
        className: a()(g.kL, { [g.Mn]: "top" === t, [g.sQ]: "bottom" === t }),
        children: (0, i.jsx)(r.animated.div, {
            className: g.pK,
            style: S,
            "aria-hidden": N,
            children:
                E === m.k.HIDDEN
                    ? (0, i.jsx)("div", { className: a()(g.M0, g.Te) })
                    : E === m.k.UNREAD
                      ? (0, i.jsxs)(d.DUT, {
                            className: g.M0,
                            onClick: T,
                            children: [
                                "bottom" === t
                                    ? (0, i.jsx)(d.abt, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: g.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, i.jsx)(d.tN5, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: g.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: g.pM,
                                    children: p.intl.string(p.t.FCRiT3),
                                }),
                            ],
                        })
                      : E === m.k.MENTIONS
                        ? (0, i.jsx)(d.DUT, {
                              className: a()(g.M0, g.vU),
                              onClick: T,
                              children: (0, i.jsx)(d.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: g.pM,
                                  children: p.intl.format(p.t.EQcLyp, { count: I }),
                              }),
                          })
                        : E === m.k.VOICE_CHANNELS
                          ? (0, i.jsx)(f, { jumpToVoiceChannels: c, guildChannels: n, guildChannelsVersion: s })
                          : void 0,
        }),
    });
}
