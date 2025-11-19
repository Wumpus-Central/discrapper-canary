n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(358221),
    c = n(598006),
    d = n(305325),
    u = n(281956),
    p = n(27457),
    h = n(546247),
    f = n(823379),
    g = n(5192),
    m = n(501655),
    b = n(504185),
    _ = n(388032),
    y = n(631755);
let O = (e, t) => g.ZP.getName(e.getGuildId(), e.id, t.user),
    j = function (e) {
        let { participants: t, channel: n, hasConnectPermission: g } = e,
            j = (0, u.J)(n.guild_id),
            x = i.useCallback(() => {
                j
                    ? (0, d.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id))
                    : s.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, j]),
            v = t.filter((e) => e.type === m.Ui.VOICE),
            C = 4 === v.length ? 2 : 3,
            I = (0, l.Wu)([o.Z], () => v.map((e) => o.Z.getParticipant(n.id, e.id)).filter(f.lm), [n.id, v]);
        return (0, r.jsxs)("div", {
            className: y.container,
            children: [
                (0, r.jsx)(h.Z, {}),
                (0, r.jsx)("div", {
                    className: y.tiles,
                    style: { maxWidth: 168 * C },
                    children: I.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            p.ZP,
                            {
                                participant: e,
                                channel: n,
                                className: y.tile,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: c.P.NO_POPOUT,
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
                            0 === v.length
                                ? _.intl.string(_.t.FUVhyC)
                                : 1 === v.length
                                  ? _.intl.formatToPlainString(_.t.EQwZlN, { a: O(n, v[0]) })
                                  : 2 === v.length
                                    ? _.intl.formatToPlainString(_.t.zBcKoA, {
                                          a: O(n, v[0]),
                                          b: O(n, v[1]),
                                      })
                                    : v.length > 2
                                      ? _.intl.formatToPlainString(_.t["3AqFaG"], {
                                            a: O(n, v[0]),
                                            b: O(n, v[1]),
                                            n: v.length - 2,
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
                                text: g ? _.intl.string(_.t["7vb2cc"]) : _.intl.string(_.t.TVBCKZ),
                                onClick: x,
                                disabled: !g,
                            }),
                        }),
                        (0, r.jsx)(b.e, { channel: n }),
                    ],
                }),
            ],
        });
    };
