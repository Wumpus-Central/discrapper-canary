n.d(t, { Z: () => Z });
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
    g = n(594174),
    _ = n(823379),
    C = n(5192),
    x = n(501655),
    v = n(504185),
    E = n(388032),
    I = n(931481);
let b = (e, t) => C.ZP.getName(e.getGuildId(), e.id, t.user),
    Z = function (e) {
        var t, n;
        let { participants: a, channel: C, hasConnectPermission: Z } = e,
            N = (0, u.Q3)('StageChannelCallEmpty'),
            T = null !== (n = null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
            S = (0, p.J)(C.guild_id),
            j = l.useCallback(() => {
                S ? (0, h.hk)(C.guild_id, () => c.default.selectVoiceChannel(C.id)) : c.default.selectVoiceChannel(C.id);
            }, [C.id, C.guild_id, S]),
            y = a.filter((e) => e.type === x.Ui.VOICE),
            A = 4 === y.length ? 2 : 3,
            P = (0, s.Wu)([d.Z], () => y.map((e) => d.Z.getParticipant(C.id, e.id)).filter(_.lm), [C.id, y]);
        return (0, i.jsxs)('div', {
            className: I.container,
            children: [
                N && (0, i.jsx)(f.Z, {}),
                (0, i.jsx)('div', {
                    className: I.tiles,
                    style: { maxWidth: 168 * A },
                    children: P.slice(0, 5).map((e) =>
                        (0, i.jsx)(
                            m.ZP,
                            {
                                participant: e,
                                channel: C,
                                className: I.tile,
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
                    className: I.channelName,
                    variant: N ? 'heading-xxl/normal' : 'heading-xxl/semibold',
                    children: C.name
                }),
                (0, i.jsx)('div', {
                    className: I.participantsRow,
                    children: (0, i.jsx)(o.Text, {
                        tag: 'div',
                        color: 'header-secondary',
                        variant: N ? 'heading-lg/normal' : 'text-sm/normal',
                        children:
                            0 === y.length
                                ? E.intl.string(E.t.FUVhyM)
                                : 1 === y.length
                                  ? E.intl.formatToPlainString(E.t.EQwZlJ, { a: b(C, y[0]) })
                                  : 2 === y.length
                                    ? E.intl.formatToPlainString(E.t.zBcKoK, {
                                          a: b(C, y[0]),
                                          b: b(C, y[1])
                                      })
                                    : y.length > 2
                                      ? E.intl.formatToPlainString(E.t['3AqFaG'], {
                                            a: b(C, y[0]),
                                            b: b(C, y[1]),
                                            n: y.length - 2
                                        })
                                      : void 0
                    })
                }),
                (0, i.jsxs)('div', {
                    className: I.buttonContainer,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            disabled: !Z,
                            className: r()(I.joinButton, { [I.roundButton]: !N }),
                            color: Z ? (N ? o.zxk.Colors.WHITE : o.zxk.Colors.GREEN) : o.zxk.Colors.PRIMARY,
                            onClick: j,
                            size: o.zxk.Sizes.MEDIUM,
                            children: Z ? E.intl.string(E.t['7vb2cX']) : E.intl.string(E.t.TVBCKS)
                        }),
                        N && T && (0, i.jsx)(v.e, { channel: C })
                    ]
                })
            ]
        });
    };
