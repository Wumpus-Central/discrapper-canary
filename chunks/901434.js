n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(287734),
    u = n(358221),
    d = n(305325),
    p = n(281956),
    h = n(27457),
    f = n(546247),
    m = n(823379),
    g = n(5192),
    b = n(501655),
    _ = n(856393),
    y = n(388032),
    C = n(761325);
let x = (e, t) => g.ZP.getName(e.getGuildId(), e.id, t.user),
    v = function (e) {
        let { participants: t, channel: n, hasConnectPermission: l } = e,
            g = (0, p.J)(n.guild_id),
            v = i.useCallback(() => {
                g ? (0, d.hk)(n.guild_id, () => c.default.selectVoiceChannel(n.id)) : c.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, g]),
            j = t.filter((e) => e.type === b.Ui.VOICE),
            O = 4 === j.length ? 2 : 3,
            E = (0, a.Wu)([u.Z], () => j.map((e) => u.Z.getParticipant(n.id, e.id)).filter(m.lm), [n.id, j]);
        return (0, r.jsxs)('div', {
            className: C.container,
            children: [
                (0, r.jsx)(f.Z, {}),
                (0, r.jsx)('div', {
                    className: C.tiles,
                    style: { maxWidth: 168 * O },
                    children: E.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            h.ZP,
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
                    variant: 'heading-xxl/normal',
                    children: n.name
                }),
                (0, r.jsx)('div', {
                    className: C.participantsRow,
                    children: (0, r.jsx)(s.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: 'heading-lg/normal',
                        children:
                            0 === j.length
                                ? y.intl.string(y.t.FUVhyM)
                                : 1 === j.length
                                  ? y.intl.formatToPlainString(y.t.EQwZlJ, { a: x(n, j[0]) })
                                  : 2 === j.length
                                    ? y.intl.formatToPlainString(y.t.zBcKoK, {
                                          a: x(n, j[0]),
                                          b: x(n, j[1])
                                      })
                                    : j.length > 2
                                      ? y.intl.formatToPlainString(y.t['3AqFaG'], {
                                            a: x(n, j[0]),
                                            b: x(n, j[1]),
                                            n: j.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: C.buttonContainer,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            disabled: !l,
                            className: o()(C.joinButton, { [C.roundButton]: !1 }),
                            color: l ? s.zxk.Colors.WHITE : s.zxk.Colors.PRIMARY,
                            onClick: v,
                            size: s.zxk.Sizes.MEDIUM,
                            children: l ? y.intl.string(y.t['7vb2cX']) : y.intl.string(y.t.TVBCKS)
                        }),
                        (0, r.jsx)(_.e, { channel: n })
                    ]
                })
            ]
        });
    };
