var i = r(544891),
    a = r(904245),
    o = r(981631),
    s = r(388032);
n.Z = {
    changeNickname: (e, n, r, l) =>
        i.tn
            .patch({
                url: o.ANM.GUILD_MEMBER_NICK(e, r),
                body: { nick: l },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => {
                    (l = e.body.nick), a.Z.sendBotMessage(n, null != l && '' !== l ? s.intl.formatToMarkdownString(s.t['gz+HRk'], { nick: l }) : s.intl.string(s.t.Vhpd9P));
                },
                (e) => {
                    403 === e.status ? a.Z.sendBotMessage(n, s.intl.formatToMarkdownString(s.t.Izf9jI, {})) : a.Z.sendBotMessage(n, s.intl.string(s.t['5LO/Sk']));
                }
            )
};
