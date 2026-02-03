n.d(t, {
    A: () => y,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(92674),
    o = n(311907),
    c = n(397927),
    u = n(250719),
    d = n(636585),
    p = n(531685),
    h = n(147036),
    g = n(288989),
    f = n(985018),
    m = n(317022);
let b = {
    friction: 30,
    tension: 300,
};

function A(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: i } = e,
        a = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        o = (0, u.A)(n.id),
        p = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), i();
            },
            [i],
        ),
        g = null != (t = null == a ? void 0 : a.getChannelRecords()) ? t : [],
        b = (0, h.fK)({
            channels: g,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: o,
        });
    return (0, r.jsxs)(c.DUT, {
        className: s()(m.M0, m.OF),
        onClick: p,
        children: [
            (0, r.jsx)(c.HKD, {
                size: "custom",
                className: m.Gs,
                width: 14,
                height: 14,
                color: "currentColor",
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-xs/semibold",
                className: m.pM,
                children: f.intl.format(f.t["fDlr+F"], {
                    count: b.length,
                }),
            }),
            (0, r.jsx)(d.A, {
                guildId: n.id,
                className: m.J$,
                users: b.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: c._3J.SIZE_16,
            }),
        ],
    });
}

function y(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: u, jumpToChannel: d } = e,
        { bottomBar: h, topBar: y } = (0, o.cf)([g.A], () => g.A.getUnreadStateForGuildId(n.id)),
        O = (0, o.bG)([p.A], () => p.A.isFocused()),
        { mode: j, mentionCount: x, targetChannelId: _ } = "bottom" === t ? h : y,
        v = j === g.k.HIDDEN,
        E = (0, c.zhh)(
            {
                to: {
                    transform: v ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)",
                },
                config: b,
            },
            O ? "respect-motion-settings" : "animate-never",
        ),
        C = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != _ && d(_);
            },
            [d, _],
        );
    return (0, r.jsx)("div", {
        className: s()(m.kL, {
            [m.Mn]: "top" === t,
            [m.sQ]: "bottom" === t,
        }),
        children: (0, r.jsx)(a.animated.div, {
            className: m.pK,
            style: E,
            "aria-hidden": v,
            children:
                j === g.k.HIDDEN
                    ? (0, r.jsx)("div", {
                          className: s()(m.M0, m.Te),
                      })
                    : j === g.k.UNREAD
                      ? (0, r.jsxs)(c.DUT, {
                            className: m.M0,
                            onClick: C,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(c.abt, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: m.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(c.tN5, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: m.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: m.pM,
                                    children: f.intl.string(f.t.FCRiT3),
                                }),
                            ],
                        })
                      : j === g.k.MENTIONS
                        ? (0, r.jsx)(c.DUT, {
                              className: s()(m.M0, m.vU),
                              onClick: C,
                              children: (0, r.jsx)(c.Text, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: m.pM,
                                  children: f.intl.format(f.t.EQcLyp, {
                                      count: x,
                                  }),
                              }),
                          })
                        : j === g.k.VOICE_CHANNELS
                          ? (0, r.jsx)(A, {
                                jumpToVoiceChannels: u,
                                guildChannels: n,
                                guildChannelsVersion: i,
                            })
                          : void 0,
        }),
    });
}
