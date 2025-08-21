n.d(t, { Z: () => C });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(358221),
    c = n(305325),
    u = n(281956),
    d = n(27457),
    p = n(546247),
    h = n(823379),
    f = n(5192),
    m = n(501655),
    g = n(504185),
    b = n(388032),
    _ = n(427538);
let y = (e, t) => f.ZP.getName(e.getGuildId(), e.id, t.user),
    C = function (e) {
        let { participants: t, channel: n, hasConnectPermission: f } = e,
            C = (0, u.J)(n.guild_id),
            x = i.useCallback(() => {
                C
                    ? (0, c.hk)(n.guild_id, () => o.default.selectVoiceChannel(n.id))
                    : o.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, C]),
            v = t.filter((e) => e.type === m.Ui.VOICE),
            O = 4 === v.length ? 2 : 3,
            j = (0, l.Wu)([s.Z], () => v.map((e) => s.Z.getParticipant(n.id, e.id)).filter(h.lm), [n.id, v]);
        return (0, r.jsxs)("div", {
            className: _.container,
            children: [
                (0, r.jsx)(p.Z, {}),
                (0, r.jsx)("div", {
                    className: _.tiles,
                    style: { maxWidth: 168 * O },
                    children: j.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            d.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: _.tile,
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
                    className: _.channelName,
                    variant: "heading-xxl/normal",
                    children: n.name,
                }),
                (0, r.jsx)("div", {
                    className: _.participantsRow,
                    children: (0, r.jsx)(a.Text, {
                        tag: "div",
                        color: "header-secondary",
                        variant: "heading-lg/normal",
                        children:
                            0 === v.length
                                ? b.intl.string(b.t.FUVhyM)
                                : 1 === v.length
                                  ? b.intl.formatToPlainString(b.t.EQwZlJ, { a: y(n, v[0]) })
                                  : 2 === v.length
                                    ? b.intl.formatToPlainString(b.t.zBcKoK, {
                                          a: y(n, v[0]),
                                          b: y(n, v[1]),
                                      })
                                    : v.length > 2
                                      ? b.intl.formatToPlainString(b.t["3AqFaG"], {
                                            a: y(n, v[0]),
                                            b: y(n, v[1]),
                                            n: v.length - 2,
                                        })
                                      : void 0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: _.buttonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.joinButton,
                            children: (0, r.jsx)(a.zxk, {
                                variant: "overlay-primary",
                                text: f ? b.intl.string(b.t["7vb2cX"]) : b.intl.string(b.t.TVBCKS),
                                onClick: x,
                                disabled: !f,
                            }),
                        }),
                        (0, r.jsx)(g.e, { channel: n }),
                    ],
                }),
            ],
        });
    };
