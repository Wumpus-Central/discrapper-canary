var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(358221),
    c = n(305325),
    d = n(281956),
    u = n(27457),
    h = n(823379),
    p = n(5192),
    m = n(501655),
    f = n(388032),
    g = n(723902);
let C = (e, t) => p.ZP.getName(e.getGuildId(), e.id, t.user);
t.Z = function (e) {
    var t, n;
    let { participants: p, channel: x, hasConnectPermission: v } = e,
        _ = (0, d.J)(x.guild_id),
        I = l.useCallback(() => {
            _ ? (0, c.hk)(x.guild_id, () => s.default.selectVoiceChannel(x.id)) : s.default.selectVoiceChannel(x.id);
        }, [x.id, x.guild_id, _]),
        E = p.filter((e) => e.type === m.Ui.VOICE),
        b = 4 === E.length ? 2 : 3,
        Z = (0, r.Wu)([o.Z], () => E.map((e) => o.Z.getParticipant(x.id, e.id)).filter(h.lm), [x.id, E]);
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsx)('div', {
                className: g.tiles,
                style: { maxWidth: 168 * b },
                children: Z.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        u.ZP,
                        {
                            participant: e,
                            channel: x,
                            className: g.tile,
                            paused: !0,
                            inCall: !0,
                            noVideoRender: !0,
                            inPopout: !1,
                            width: 48
                        },
                        e.id
                    )
                )
            }),
            (0, i.jsx)(a.Heading, {
                className: g.channelName,
                variant: 'heading-xxl/semibold',
                children: x.name
            }),
            (0, i.jsx)('div', {
                className: g.participantsRow,
                children: (0, i.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        ((t = x),
                        0 === (n = E).length
                            ? f.intl.string(f.t.FUVhyM)
                            : 1 === n.length
                              ? f.intl.formatToPlainString(f.t.EQwZlJ, { a: C(t, n[0]) })
                              : 2 === n.length
                                ? f.intl.formatToPlainString(f.t.zBcKoK, {
                                      a: C(t, n[0]),
                                      b: C(t, n[1])
                                  })
                                : n.length > 2
                                  ? f.intl.formatToPlainString(f.t['3AqFaG'], {
                                        a: C(t, n[0]),
                                        b: C(t, n[1]),
                                        n: n.length - 2
                                    })
                                  : void 0)
                })
            }),
            (0, i.jsx)(a.Button, {
                disabled: !v,
                className: g.joinButton,
                color: v ? a.Button.Colors.GREEN : a.Button.Colors.PRIMARY,
                onClick: I,
                size: a.Button.Sizes.MEDIUM,
                children: v ? f.intl.string(f.t['7vb2cX']) : f.intl.string(f.t.TVBCKS)
            })
        ]
    });
};
