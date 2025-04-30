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
                    (s = e.body.nick), i.Z.sendBotMessage(t, null != s && '' !== s ? o.intl.formatToMarkdownString(o.t['gz+HRk'], { nick: s }) : o.intl.string(o.t.Vhpd9P));
                },
                (e) => {
                    403 === e.status ? i.Z.sendBotMessage(t, o.intl.formatToMarkdownString(o.t.Izf9jI, {})) : i.Z.sendBotMessage(t, o.intl.string(o.t['5LO/Sk']));
                }
            )
};
