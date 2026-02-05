n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(563495),
    o = n(311907),
    d = n(397927),
    c = n(250719),
    u = n(636585),
    h = n(531685),
    A = n(147036),
    g = n(288989),
    m = n(985018),
    p = n(317022);
let _ = { friction: 30, tension: 300 };
function x(e) {
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
        g = (0, A.fK)({ channels: h, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: r });
    return (0, i.jsxs)(d.DUT, {
        className: a()(p.M0, p.OF),
        onClick: o,
        children: [
            (0, i.jsx)(d.HKD, { size: "custom", className: p.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, i.jsx)(d.Text, {
                variant: "text-xs/semibold",
                className: p.pM,
                children: m.intl.format(m.t["fDlr+F"], { count: g.length }),
            }),
            (0, i.jsx)(u.A, {
                guildId: t.id,
                className: p.J$,
                users: g.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: d._3J.SIZE_16,
            }),
        ],
    });
}
function f(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: s, jumpToVoiceChannels: c, jumpToChannel: u } = e,
        { bottomBar: A, topBar: f } = (0, o.cf)([g.A], () => g.A.getUnreadStateForGuildId(n.id)),
        E = (0, o.bG)([h.A], () => h.A.isFocused()),
        { mode: C, mentionCount: I, targetChannelId: S } = "bottom" === t ? A : f,
        b = C === g.k.HIDDEN,
        N = (0, d.zhh)(
            {
                to: { transform: b ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: _,
            },
            E ? "respect-motion-settings" : "animate-never",
        ),
        T = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != S && u(S);
            },
            [u, S],
        );
    return (0, i.jsx)("div", {
        className: a()(p.kL, { [p.Mn]: "top" === t, [p.sQ]: "bottom" === t }),
        children: (0, i.jsx)(r.animated.div, {
            className: p.pK,
            style: N,
            "aria-hidden": b,
            children:
                C === g.k.HIDDEN
                    ? (0, i.jsx)("div", { className: a()(p.M0, p.Te) })
                    : C === g.k.UNREAD
                      ? (0, i.jsxs)(d.DUT, {
                            className: p.M0,
                            onClick: T,
                            children: [
                                "bottom" === t
                                    ? (0, i.jsx)(d.abt, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: p.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, i.jsx)(d.tN5, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: p.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: p.pM,
                                    children: m.intl.string(m.t.FCRiT3),
                                }),
                            ],
                        })
                      : C === g.k.MENTIONS
                        ? (0, i.jsx)(d.DUT, {
                              className: a()(p.M0, p.vU),
                              onClick: T,
                              children: (0, i.jsx)(d.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: p.pM,
                                  children: m.intl.format(m.t.EQcLyp, { count: I }),
                              }),
                          })
                        : C === g.k.VOICE_CHANNELS
                          ? (0, i.jsx)(x, { jumpToVoiceChannels: c, guildChannels: n, guildChannelsVersion: s })
                          : void 0,
        }),
    });
}
