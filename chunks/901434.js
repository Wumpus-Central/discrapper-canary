n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(358221),
    c = n(305325),
    d = n(281956),
    u = n(27457),
    h = n(546247),
    p = n(823379),
    f = n(5192),
    g = n(501655),
    m = n(504185),
    b = n(388032),
    y = n(427538);
let _ = (e, t) => f.ZP.getName(e.getGuildId(), e.id, t.user),
    j = function (e) {
        let { participants: t, channel: n, hasConnectPermission: f } = e,
            j = (0, d.J)(n.guild_id),
            O = i.useCallback(() => {
                j
                    ? (0, c.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id))
                    : s.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, j]),
            x = t.filter((e) => e.type === g.Ui.VOICE),
            v = 4 === x.length ? 2 : 3,
            C = (0, l.Wu)([o.Z], () => x.map((e) => o.Z.getParticipant(n.id, e.id)).filter(p.lm), [n.id, x]);
        return (0, r.jsxs)("div", {
            className: y.container,
            children: [
                (0, r.jsx)(h.Z, {}),
                (0, r.jsx)("div", {
                    className: y.tiles,
                    style: { maxWidth: 168 * v },
                    children: C.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            u.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: y.tile,
                                inCall: !0,
                                noVideoRender: !0,
                                inPopout: !1,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, r.jsx)(a.Heading, {
                    className: y.channelName,
                    variant: "heading-xxl/normal",
                    children: n.name,
                }),
                (0, r.jsx)("div", {
                    className: y.participantsRow,
                    children: (0, r.jsx)(a.Text, {
                        tag: "div",
                        color: "header-secondary",
                        variant: "heading-lg/normal",
                        children:
                            0 === x.length
                                ? b.intl.string(b.t.FUVhyM)
                                : 1 === x.length
                                  ? b.intl.formatToPlainString(b.t.EQwZlJ, { a: _(n, x[0]) })
                                  : 2 === x.length
                                    ? b.intl.formatToPlainString(b.t.zBcKoK, {
                                          a: _(n, x[0]),
                                          b: _(n, x[1]),
                                      })
                                    : x.length > 2
                                      ? b.intl.formatToPlainString(b.t["3AqFaG"], {
                                            a: _(n, x[0]),
                                            b: _(n, x[1]),
                                            n: x.length - 2,
                                        })
                                      : void 0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: y.buttonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: y.joinButton,
                            children: (0, r.jsx)(a.Button, {
                                variant: "overlay-primary",
                                text: f ? b.intl.string(b.t["7vb2cX"]) : b.intl.string(b.t.TVBCKS),
                                onClick: O,
                                disabled: !f,
                            }),
                        }),
                        (0, r.jsx)(m.e, { channel: n }),
                    ],
                }),
            ],
        });
    };
