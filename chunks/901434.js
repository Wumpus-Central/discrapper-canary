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
    y = n(856393),
    x = n(388032),
    C = n(761325);
let v = (e, t) => b.ZP.getName(e.getGuildId(), e.id, t.user),
    j = function (e) {
        let { participants: t, channel: n, hasConnectPermission: l } = e,
            b = (0, d.Q3)('StageChannelCallEmpty'),
            j = (0, h.J)(n.guild_id),
            O = i.useCallback(() => {
                j ? (0, p.hk)(n.guild_id, () => c.default.selectVoiceChannel(n.id)) : c.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, j]),
            E = t.filter((e) => e.type === _.Ui.VOICE),
            I = 4 === E.length ? 2 : 3,
            P = (0, a.Wu)([u.Z], () => E.map((e) => u.Z.getParticipant(n.id, e.id)).filter(g.lm), [n.id, E]);
        return (0, r.jsxs)('div', {
            className: C.container,
            children: [
                b && (0, r.jsx)(m.Z, {}),
                (0, r.jsx)('div', {
                    className: C.tiles,
                    style: { maxWidth: 168 * I },
                    children: P.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            f.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: C.tile,
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
                    className: C.channelName,
                    variant: b ? 'heading-xxl/normal' : 'heading-xxl/semibold',
                    children: n.name
                }),
                (0, r.jsx)('div', {
                    className: C.participantsRow,
                    children: (0, r.jsx)(s.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: b ? 'heading-lg/normal' : 'text-sm/normal',
                        children:
                            0 === E.length
                                ? x.intl.string(x.t.FUVhyM)
                                : 1 === E.length
                                  ? x.intl.formatToPlainString(x.t.EQwZlJ, { a: v(n, E[0]) })
                                  : 2 === E.length
                                    ? x.intl.formatToPlainString(x.t.zBcKoK, {
                                          a: v(n, E[0]),
                                          b: v(n, E[1])
                                      })
                                    : E.length > 2
                                      ? x.intl.formatToPlainString(x.t['3AqFaG'], {
                                            a: v(n, E[0]),
                                            b: v(n, E[1]),
                                            n: E.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: C.buttonContainer,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            disabled: !l,
                            className: o()(C.joinButton, { [C.roundButton]: !b }),
                            color: l ? (b ? s.zxk.Colors.WHITE : s.zxk.Colors.GREEN) : s.zxk.Colors.PRIMARY,
                            onClick: O,
                            size: s.zxk.Sizes.MEDIUM,
                            children: l ? x.intl.string(x.t['7vb2cX']) : x.intl.string(x.t.TVBCKS)
                        }),
                        b && (0, r.jsx)(y.e, { channel: n })
                    ]
                })
            ]
        });
    };
