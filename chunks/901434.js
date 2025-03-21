n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(287734),
    u = n(358221),
    d = n(540059),
    p = n(305325),
    h = n(281956),
    f = n(27457),
    m = n(546247),
    g = n(823379),
    b = n(5192),
    _ = n(501655),
    C = n(504185),
    v = n(388032),
    y = n(603779);
let x = (e, t) => b.ZP.getName(e.getGuildId(), e.id, t.user),
    j = function (e) {
        let { participants: t, channel: n, hasConnectPermission: l } = e,
            b = (0, d.Q3)('StageChannelCallEmpty'),
            j = (0, h.J)(n.guild_id),
            O = i.useCallback(() => {
                j ? (0, p.hk)(n.guild_id, () => c.default.selectVoiceChannel(n.id)) : c.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, j]),
            E = t.filter((e) => e.type === _.Ui.VOICE),
            N = 4 === E.length ? 2 : 3,
            I = (0, a.Wu)([u.Z], () => E.map((e) => u.Z.getParticipant(n.id, e.id)).filter(g.lm), [n.id, E]);
        return (0, r.jsxs)('div', {
            className: y.container,
            children: [
                b && (0, r.jsx)(m.Z, {}),
                (0, r.jsx)('div', {
                    className: y.tiles,
                    style: { maxWidth: 168 * N },
                    children: I.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            f.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: y.tile,
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
                (0, r.jsx)(s.X6q, {
                    className: y.channelName,
                    variant: b ? 'heading-xxl/normal' : 'heading-xxl/semibold',
                    children: n.name
                }),
                (0, r.jsx)('div', {
                    className: y.participantsRow,
                    children: (0, r.jsx)(s.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: b ? 'heading-lg/normal' : 'text-sm/normal',
                        children:
                            0 === E.length
                                ? v.NW.string(v.t.FUVhyM)
                                : 1 === E.length
                                  ? v.NW.formatToPlainString(v.t.EQwZlJ, { a: x(n, E[0]) })
                                  : 2 === E.length
                                    ? v.NW.formatToPlainString(v.t.zBcKoK, {
                                          a: x(n, E[0]),
                                          b: x(n, E[1])
                                      })
                                    : E.length > 2
                                      ? v.NW.formatToPlainString(v.t['3AqFaG'], {
                                            a: x(n, E[0]),
                                            b: x(n, E[1]),
                                            n: E.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: y.buttonContainer,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            disabled: !l,
                            className: o()(y.joinButton, { [y.roundButton]: !b }),
                            color: l ? (b ? s.zxk.Colors.WHITE : s.zxk.Colors.GREEN) : s.zxk.Colors.PRIMARY,
                            onClick: O,
                            size: s.zxk.Sizes.MEDIUM,
                            children: l ? v.NW.string(v.t['7vb2cX']) : v.NW.string(v.t.TVBCKS)
                        }),
                        b && (0, r.jsx)(C.e, { channel: n })
                    ]
                })
            ]
        });
    };
