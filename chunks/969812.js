n.d(t, { Z: () => s });
var r = n(544891),
    i = n(904245),
    o = n(981631),
    a = n(388032);
let s = {
    changeNickname: (e, t, n, s) =>
        r.tn
            .patch({
                url: o.ANM.GUILD_MEMBER_NICK(e, n),
                body: { nick: s },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    (s = e.body.nick), i.Z.sendBotMessage(t, null != s && '' !== s ? a.NW.formatToMarkdownString(a.t['gz+HRk'], { nick: s }) : a.NW.string(a.t.Vhpd9P));
                },
                (e) => {
                    403 === e.status ? i.Z.sendBotMessage(t, a.NW.formatToMarkdownString(a.t.Izf9jI, {})) : i.Z.sendBotMessage(t, a.NW.string(a.t['5LO/Sk']));
                }
            )
};
