n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(287734),
    d = n(358221),
    p = n(305325),
    h = n(281956),
    f = n(27457),
    m = n(546247),
    g = n(823379),
    b = n(5192),
    _ = n(501655),
    y = n(856393),
    C = n(388032),
    x = n(761325);
let v = (e, t) => b.ZP.getName(e.getGuildId(), e.id, t.user),
    O = function (e) {
        let { participants: t, channel: n, hasConnectPermission: l } = e,
            b = (0, h.J)(n.guild_id),
            O = i.useCallback(() => {
                b ? (0, p.hk)(n.guild_id, () => u.default.selectVoiceChannel(n.id)) : u.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, b]),
            j = t.filter((e) => e.type === _.Ui.VOICE),
            E = 4 === j.length ? 2 : 3,
            S = (0, o.Wu)([d.Z], () => j.map((e) => d.Z.getParticipant(n.id, e.id)).filter(g.lm), [n.id, j]);
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsx)(m.Z, {}),
                (0, r.jsx)('div', {
                    className: x.tiles,
                    style: { maxWidth: 168 * E },
                    children: S.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            f.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: x.tile,
                                inCall: !0,
                                noVideoRender: !0,
                                inPopout: !1,
                                width: 48
                            },
                            e.id
                        )
                    )
                }),
                (0, r.jsx)(c.X6q, {
                    className: x.channelName,
                    variant: 'heading-xxl/normal',
                    children: n.name
                }),
                (0, r.jsx)('div', {
                    className: x.participantsRow,
                    children: (0, r.jsx)(c.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: 'heading-lg/normal',
                        children:
                            0 === j.length
                                ? C.intl.string(C.t.FUVhyM)
                                : 1 === j.length
                                  ? C.intl.formatToPlainString(C.t.EQwZlJ, { a: v(n, j[0]) })
                                  : 2 === j.length
                                    ? C.intl.formatToPlainString(C.t.zBcKoK, {
                                          a: v(n, j[0]),
                                          b: v(n, j[1])
                                      })
                                    : j.length > 2
                                      ? C.intl.formatToPlainString(C.t['3AqFaG'], {
                                            a: v(n, j[0]),
                                            b: v(n, j[1]),
                                            n: j.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: x.buttonContainer,
                    children: [
                        (0, r.jsx)(s.zx, {
                            disabled: !l,
                            className: a()(x.joinButton, { [x.roundButton]: !1 }),
                            color: l ? s.zx.Colors.WHITE : s.zx.Colors.PRIMARY,
                            onClick: O,
                            size: s.zx.Sizes.MEDIUM,
                            children: l ? C.intl.string(C.t['7vb2cX']) : C.intl.string(C.t.TVBCKS)
                        }),
                        (0, r.jsx)(y.e, { channel: n })
                    ]
                })
            ]
        });
    };
