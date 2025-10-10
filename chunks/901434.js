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
    p = n(546247),
    h = n(823379),
    f = n(5192),
    g = n(501655),
    m = n(504185),
    b = n(388032),
    y = n(427538);
let _ = (e, t) => f.ZP.getName(e.getGuildId(), e.id, t.user),
    j = function (e) {
        let { participants: t, channel: n, hasConnectPermission: f } = e,
            j = (0, d.J)(n.guild_id),
            x = i.useCallback(() => {
                j
                    ? (0, c.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id))
                    : s.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, j]),
            O = t.filter((e) => e.type === g.Ui.VOICE),
            v = 4 === O.length ? 2 : 3,
            C = (0, l.Wu)([o.Z], () => O.map((e) => o.Z.getParticipant(n.id, e.id)).filter(h.lm), [n.id, O]);
        return (0, r.jsxs)("div", {
            className: y.container,
            children: [
                (0, r.jsx)(p.Z, {}),
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
                (0, r.jsx)(a.X6q, {
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
                            0 === O.length
                                ? b.intl.string(b.t.FUVhyM)
                                : 1 === O.length
                                  ? b.intl.formatToPlainString(b.t.EQwZlJ, { a: _(n, O[0]) })
                                  : 2 === O.length
                                    ? b.intl.formatToPlainString(b.t.zBcKoK, {
                                          a: _(n, O[0]),
                                          b: _(n, O[1]),
                                      })
                                    : O.length > 2
                                      ? b.intl.formatToPlainString(b.t["3AqFaG"], {
                                            a: _(n, O[0]),
                                            b: _(n, O[1]),
                                            n: O.length - 2,
                                        })
                                      : void 0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: y.buttonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: y.joinButton,
                            children: (0, r.jsx)(a.zxk, {
                                variant: "overlay-primary",
                                text: f ? b.intl.string(b.t["7vb2cX"]) : b.intl.string(b.t.TVBCKS),
                                onClick: x,
                                disabled: !f,
                            }),
                        }),
                        (0, r.jsx)(m.e, { channel: n }),
                    ],
                }),
            ],
        });
    };
