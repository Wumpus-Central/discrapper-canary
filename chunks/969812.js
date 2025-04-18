n.d(t, { Z: () => s });
var r = n(544891),
    i = n(904245),
    a = n(981631),
    o = n(388032);
let s = {
    changeNickname: (e, t, n, s) =>
        r.tn
            .patch({
                url: a.ANM.GUILD_MEMBER_NICK(e, n),
                body: { nick: s },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    (s = e.body.nick), i.Z.sendBotMessage(t, null != s && '' !== s ? o.NW.formatToMarkdownString(o.t['gz+HRk'], { nick: s }) : o.NW.string(o.t.Vhpd9P));
                },
                (e) => {
                    403 === e.status ? i.Z.sendBotMessage(t, o.NW.formatToMarkdownString(o.t.Izf9jI, {})) : i.Z.sendBotMessage(t, o.NW.string(o.t['5LO/Sk']));
                }
            )
};
