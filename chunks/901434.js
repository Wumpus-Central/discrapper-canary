n.d(t, { Z: () => x });
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
    g = n(501655),
    m = n(192079),
    b = n(504185),
    y = n(388032),
    O = n(951840);
let x = function (e) {
    let { participants: t, channel: n, hasConnectPermission: x } = e,
        j = (0, u.J)(n.guild_id),
        v = i.useCallback(() => {
            j ? (0, d.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, j]),
        C = t.filter((e) => e.type === g.Ui.VOICE),
        I = 4 === C.length ? 2 : 3,
        _ = (0, l.Wu)([o.Z], () => C.map((e) => o.Z.getParticipant(n.id, e.id)).filter(f.lm), [n.id, C]);
    return (0, r.jsxs)("div", {
        className: O.container,
        children: [
            (0, r.jsx)(h.Z, {}),
            (0, r.jsx)("div", {
                className: O.tiles,
                style: { maxWidth: 168 * I },
                children: _.slice(0, 5).map((e) =>
                    (0, r.jsx)(
                        p.ZP,
                        {
                            participant: e,
                            channel: n,
                            className: O.tile,
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
                className: O.channelName,
                variant: "heading-xxl/normal",
                children: n.name,
            }),
            (0, r.jsx)("div", {
                className: O.participantsRow,
                children: (0, r.jsx)(a.Text, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, m.wQ)(n, C),
                }),
            }),
            (0, r.jsxs)("div", {
                className: O.buttonContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: O.joinButton,
                        children: (0, r.jsx)(a.Button, {
                            variant: "overlay-primary",
                            text: x ? y.intl.string(y.t["7vb2cc"]) : y.intl.string(y.t.TVBCKZ),
                            onClick: v,
                            disabled: !x,
                        }),
                    }),
                    (0, r.jsx)(b.e, { channel: n }),
                ],
            }),
        ],
    });
};
