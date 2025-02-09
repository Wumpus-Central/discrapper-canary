n.d(t, { Z: () => I });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(287734),
    d = n(358221),
    u = n(540059),
    h = n(305325),
    p = n(281956),
    m = n(27457),
    f = n(546247),
    g = n(823379),
    _ = n(5192),
    C = n(501655),
    x = n(388032),
    v = n(635374);
let E = (e, t) => _.ZP.getName(e.getGuildId(), e.id, t.user),
    I = function (e) {
        let { participants: t, channel: n, hasConnectPermission: a } = e,
            _ = (0, u.Q3)('StageChannelCallEmpty'),
            I = (0, p.J)(n.guild_id),
            b = l.useCallback(() => {
                I ? (0, h.hk)(n.guild_id, () => c.default.selectVoiceChannel(n.id)) : c.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, I]),
            Z = t.filter((e) => e.type === C.Ui.VOICE),
            N = 4 === Z.length ? 2 : 3,
            T = (0, s.Wu)([d.Z], () => Z.map((e) => d.Z.getParticipant(n.id, e.id)).filter(g.lm), [n.id, Z]);
        return (0, i.jsxs)('div', {
            className: v.container,
            children: [
                (0, i.jsx)('div', {
                    className: v.tiles,
                    style: { maxWidth: 168 * N },
                    children: T.slice(0, 5).map((e) =>
                        (0, i.jsx)(
                            m.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: v.tile,
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
                (0, i.jsx)(o.X6q, {
                    className: v.channelName,
                    variant: _ ? 'heading-xxl/normal' : 'heading-xxl/semibold',
                    children: n.name
                }),
                (0, i.jsx)('div', {
                    className: v.participantsRow,
                    children: (0, i.jsx)(o.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: _ ? 'heading-lg/normal' : 'text-sm/normal',
                        children:
                            0 === Z.length
                                ? x.intl.string(x.t.FUVhyM)
                                : 1 === Z.length
                                  ? x.intl.formatToPlainString(x.t.EQwZlJ, { a: E(n, Z[0]) })
                                  : 2 === Z.length
                                    ? x.intl.formatToPlainString(x.t.zBcKoK, {
                                          a: E(n, Z[0]),
                                          b: E(n, Z[1])
                                      })
                                    : Z.length > 2
                                      ? x.intl.formatToPlainString(x.t['3AqFaG'], {
                                            a: E(n, Z[0]),
                                            b: E(n, Z[1]),
                                            n: Z.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, i.jsx)(o.zxk, {
                    disabled: !a,
                    className: r()(v.joinButton, { [v.roundButton]: !_ }),
                    color: a ? (_ ? o.zxk.Colors.WHITE : o.zxk.Colors.GREEN) : o.zxk.Colors.PRIMARY,
                    onClick: b,
                    size: _ ? o.zxk.Sizes.LARGE : o.zxk.Sizes.MEDIUM,
                    children: a ? x.intl.string(x.t['7vb2cX']) : x.intl.string(x.t.TVBCKS)
                }),
                _ && (0, i.jsx)(f.Z, {})
            ]
        });
    };
