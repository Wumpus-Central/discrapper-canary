n.d(t, {
    A: () => a,
}),
    n(747238);
var r = n(627968);
n(64700);
var i = n(970672),
    s = n(953680),
    l = n(613057);
let a = function (e) {
    let { match: t, location: n } = e,
        a = async (e, t) => {
            await (0, i.W)(l.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        };
    return (0, r.jsx)(s.A, {
        match: t,
        location: n,
        attemptDeepLink: a,
    });
};
