n.d(t, { Z: () => O });
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
    g = n(594174),
    b = n(823379),
    _ = n(5192),
    C = n(501655),
    v = n(504185),
    y = n(388032),
    x = n(844579);
let j = (e, t) => _.ZP.getName(e.getGuildId(), e.id, t.user),
    O = function (e) {
        var t, n;
        let { participants: l, channel: _, hasConnectPermission: O } = e,
            N = (0, d.Q3)('StageChannelCallEmpty'),
            E = null !== (n = null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
            P = (0, h.J)(_.guild_id),
            I = i.useCallback(() => {
                P ? (0, p.hk)(_.guild_id, () => c.default.selectVoiceChannel(_.id)) : c.default.selectVoiceChannel(_.id);
            }, [_.id, _.guild_id, P]),
            S = l.filter((e) => e.type === C.Ui.VOICE),
            Z = 4 === S.length ? 2 : 3,
            T = (0, a.Wu)([u.Z], () => S.map((e) => u.Z.getParticipant(_.id, e.id)).filter(b.lm), [_.id, S]);
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                N && (0, r.jsx)(m.Z, {}),
                (0, r.jsx)('div', {
                    className: x.tiles,
                    style: { maxWidth: 168 * Z },
                    children: T.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            f.ZP,
                            {
                                participant: e,
                                channel: _,
                                className: x.tile,
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
                    className: x.channelName,
                    variant: N ? 'heading-xxl/normal' : 'heading-xxl/semibold',
                    children: _.name
                }),
                (0, r.jsx)('div', {
                    className: x.participantsRow,
                    children: (0, r.jsx)(s.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: N ? 'heading-lg/normal' : 'text-sm/normal',
                        children:
                            0 === S.length
                                ? y.NW.string(y.t.FUVhyM)
                                : 1 === S.length
                                  ? y.NW.formatToPlainString(y.t.EQwZlJ, { a: j(_, S[0]) })
                                  : 2 === S.length
                                    ? y.NW.formatToPlainString(y.t.zBcKoK, {
                                          a: j(_, S[0]),
                                          b: j(_, S[1])
                                      })
                                    : S.length > 2
                                      ? y.NW.formatToPlainString(y.t['3AqFaG'], {
                                            a: j(_, S[0]),
                                            b: j(_, S[1]),
                                            n: S.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, r.jsxs)('div', {
                    className: x.buttonContainer,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            disabled: !O,
                            className: o()(x.joinButton, { [x.roundButton]: !N }),
                            color: O ? (N ? s.zxk.Colors.WHITE : s.zxk.Colors.GREEN) : s.zxk.Colors.PRIMARY,
                            onClick: I,
                            size: s.zxk.Sizes.MEDIUM,
                            children: O ? y.NW.string(y.t['7vb2cX']) : y.NW.string(y.t.TVBCKS)
                        }),
                        N && E && (0, r.jsx)(v.e, { channel: _ })
                    ]
                })
            ]
        });
    };
