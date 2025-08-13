n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(287734),
    d = n(358221),
    h = n(305325),
    p = n(281956),
    f = n(27457),
    g = n(546247),
    m = n(823379),
    b = n(5192),
    y = n(501655),
    x = n(504185),
    j = n(388032),
    _ = n(203435);
let O = (e, t) => b.ZP.getName(e.getGuildId(), e.id, t.user),
    v = function (e) {
        let { participants: t, channel: n, hasConnectPermission: l } = e,
            b = (0, p.J)(n.guild_id),
            v = i.useCallback(() => {
                b
                    ? (0, h.hk)(n.guild_id, () => u.default.selectVoiceChannel(n.id))
                    : u.default.selectVoiceChannel(n.id);
            }, [n.id, n.guild_id, b]),
            C = t.filter((e) => e.type === y.Ui.VOICE),
            E = 4 === C.length ? 2 : 3,
            S = (0, s.Wu)([d.Z], () => C.map((e) => d.Z.getParticipant(n.id, e.id)).filter(m.lm), [n.id, C]);
        return (0, r.jsxs)("div", {
            className: _.container,
            children: [
                (0, r.jsx)(g.Z, {}),
                (0, r.jsx)("div", {
                    className: _.tiles,
                    style: { maxWidth: 168 * E },
                    children: S.slice(0, 5).map((e) =>
                        (0, r.jsx)(
                            f.ZP,
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
                (0, r.jsx)(c.X6q, {
                    className: _.channelName,
                    variant: "heading-xxl/normal",
                    children: n.name,
                }),
                (0, r.jsx)("div", {
                    className: _.participantsRow,
                    children: (0, r.jsx)(c.Text, {
                        tag: "div",
                        color: "header-secondary",
                        variant: "heading-lg/normal",
                        children:
                            0 === C.length
                                ? j.intl.string(j.t.FUVhyM)
                                : 1 === C.length
                                  ? j.intl.formatToPlainString(j.t.EQwZlJ, { a: O(n, C[0]) })
                                  : 2 === C.length
                                    ? j.intl.formatToPlainString(j.t.zBcKoK, {
                                          a: O(n, C[0]),
                                          b: O(n, C[1]),
                                      })
                                    : C.length > 2
                                      ? j.intl.formatToPlainString(j.t["3AqFaG"], {
                                            a: O(n, C[0]),
                                            b: O(n, C[1]),
                                            n: C.length - 2,
                                        })
                                      : void 0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: _.buttonContainer,
                    children: [
                        (0, r.jsx)(o.zx, {
                            disabled: !l,
                            className: a()(_.joinButton, { [_.roundButton]: !1 }),
                            color: l ? o.zx.Colors.WHITE : o.zx.Colors.PRIMARY,
                            onClick: v,
                            size: o.zx.Sizes.MEDIUM,
                            children: l ? j.intl.string(j.t["7vb2cX"]) : j.intl.string(j.t.TVBCKS),
                        }),
                        (0, r.jsx)(x.e, { channel: n }),
                    ],
                }),
            ],
        });
    };
