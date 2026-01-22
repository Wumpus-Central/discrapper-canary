n.d(t, {
    A: () => y,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    u = n(250719),
    d = n(636585),
    f = n(531685),
    p = n(147036),
    h = n(288989),
    b = n(985018),
    g = n(317022);
let m = {
    friction: 30,
    tension: 300,
};

function A(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: i } = e,
        s = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        o = (0, u.A)(n.id),
        f = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), i();
            },
            [i],
        ),
        h = null != (t = null == s ? void 0 : s.getChannelRecords()) ? t : [],
        m = (0, p.fK)({
            channels: h,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: o,
        });
    return (0, r.jsxs)(c.DUT, {
        className: a()(g.M0, g.OF),
        onClick: f,
        children: [
            (0, r.jsx)(c.HKD, {
                size: "custom",
                className: g.Gs,
                width: 14,
                height: 14,
                color: "currentColor",
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-xs/semibold",
                className: g.pM,
                children: b.intl.format(b.t["fDlr+F"], {
                    count: m.length,
                }),
            }),
            (0, r.jsx)(d.A, {
                guildId: n.id,
                className: g.J$,
                users: m.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c._3J.SIZE_16,
            }),
        ],
    });
}

function y(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: u, jumpToChannel: d } = e,
        { bottomBar: p, topBar: y } = (0, o.cf)([h.A], () => h.A.getUnreadStateForGuildId(n.id)),
        O = (0, o.bG)([f.A], () => f.A.isFocused()),
        { mode: j, mentionCount: v, targetChannelId: x } = "bottom" === t ? p : y,
        E = j === h.k.HIDDEN,
        _ = (0, c.zhh)(
            {
                to: {
                    transform: E ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)",
                },
                config: m,
            },
            O ? "respect-motion-settings" : "animate-never",
        ),
        C = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != x && d(x);
            },
            [d, x],
        );
    return (0, r.jsx)("div", {
        className: a()(g.kL, {
            [g.Mn]: "top" === t,
            [g.sQ]: "bottom" === t,
        }),
        children: (0, r.jsx)(s.animated.div, {
            className: g.pK,
            style: _,
            "aria-hidden": E,
            children:
                j === h.k.HIDDEN
                    ? (0, r.jsx)("div", {
                          className: a()(g.M0, g.Te),
                      })
                    : j === h.k.UNREAD
                      ? (0, r.jsxs)(c.DUT, {
                            className: g.M0,
                            onClick: C,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(c.abt, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: g.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(c.tN5, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: g.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: g.pM,
                                    children: b.intl.string(b.t.FCRiT3),
                                }),
                            ],
                        })
                      : j === h.k.MENTIONS
                        ? (0, r.jsx)(c.DUT, {
                              className: a()(g.M0, g.vU),
                              onClick: C,
                              children: (0, r.jsx)(c.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: g.pM,
                                  children: b.intl.format(b.t.EQcLyp, {
                                      count: v,
                                  }),
                              }),
                          })
                        : j === h.k.VOICE_CHANNELS
                          ? (0, r.jsx)(A, {
                                jumpToVoiceChannels: u,
                                guildChannels: n,
                                guildChannelsVersion: i,
                            })
                          : void 0,
        }),
    });
}
