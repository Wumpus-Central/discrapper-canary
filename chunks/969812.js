n.d(t, { Z: () => o });
var i = n(544891),
    r = n(904245),
    a = n(981631),
    s = n(388032);
let o = {
    changeNickname: (e, t, n, o) =>
        i.tn
            .patch({
                url: a.ANM.GUILD_MEMBER_NICK(e, n),
                body: { nick: o },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    (o = e.body.nick), r.Z.sendBotMessage(t, null != o && '' !== o ? s.intl.formatToMarkdownString(s.t['gz+HRk'], { nick: o }) : s.intl.string(s.t.Vhpd9P));
                },
                (e) => {
                    403 === e.status ? r.Z.sendBotMessage(t, s.intl.formatToMarkdownString(s.t.Izf9jI, {})) : r.Z.sendBotMessage(t, s.intl.string(s.t['5LO/Sk']));
                }
            )
};
