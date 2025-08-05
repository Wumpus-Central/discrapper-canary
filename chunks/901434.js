n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(287734),
    u = n(358221),
    h = n(305325),
    p = n(281956),
    f = n(27457),
    g = n(546247),
    m = n(823379),
    b = n(5192),
    _ = n(501655),
    y = n(856393),
    j = n(388032),
    O = n(761325);
let x = (e, t) => b.ZP.getName(e.getGuildId(), e.id, t.user),
    v = function (e) {
        let { participants: t, channel: n, hasConnectPermission: l } = e,
            b = (0, p.J)(n.guild_id),
            v = i.useCallback(() => {
                b ? (0, h.hk)(n.guild_id, () => d.default.selectVoiceChannel(n.id)) : d.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, b]),
            C = t.filter((e) => e.type === _.Ui.VOICE),
            E = 4 === C.length ? 2 : 3,
            Z = (0, s.Wu)([u.Z], () => C.map((e) => u.Z.getParticipant(n.id, e.id)).filter(m.lm), [n.id, C]);
        return (0, r.jsxs)('div', {
            className: O.container,
            children: [
                (0, r.jsx)(g.Z, {}),
                (0, r.jsx)('div', {
                    className: O.tiles,
                    style: { maxWidth: 168 * E },
                    children: Z.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            f.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: O.tile,
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
                    className: O.channelName,
                    variant: 'heading-xxl/normal',
                    children: n.name
                }),
                (0, r.jsx)('div', {
                    className: O.participantsRow,
                    children: (0, r.jsx)(c.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: 'heading-lg/normal',
                        children:
                            0 === C.length
                                ? j.intl.string(j.t.FUVhyM)
                                : 1 === C.length
                                  ? j.intl.formatToPlainString(j.t.EQwZlJ, { a: x(n, C[0]) })
                                  : 2 === C.length
                                    ? j.intl.formatToPlainString(j.t.zBcKoK, {
                                          a: x(n, C[0]),
                                          b: x(n, C[1])
                                      })
                                    : C.length > 2
                                      ? j.intl.formatToPlainString(j.t['3AqFaG'], {
                                            a: x(n, C[0]),
                                            b: x(n, C[1]),
                                            n: C.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: O.buttonContainer,
                    children: [
                        (0, r.jsx)(o.zx, {
                            disabled: !l,
                            className: a()(O.joinButton, { [O.roundButton]: !1 }),
                            color: l ? o.zx.Colors.WHITE : o.zx.Colors.PRIMARY,
                            onClick: v,
                            size: o.zx.Sizes.MEDIUM,
                            children: l ? j.intl.string(j.t['7vb2cX']) : j.intl.string(j.t.TVBCKS)
                        }),
                        (0, r.jsx)(y.e, { channel: n })
                    ]
                })
            ]
        });
    };
