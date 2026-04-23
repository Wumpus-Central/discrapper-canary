n.d(t, { A: () => r });
var i = n(821956);
function r(e) {
    let {
        userId: t,
        nick: n,
        guildId: r,
        avatar: a,
        avatarDecoration: l,
        banner: s,
        bio: o,
        pronouns: d,
        colorString: u,
    } = e;
    return {
        user_id: t,
        nick: n,
        guild_id: r,
        avatar: a,
        avatar_decoration_data: (0, i.Xq)(l),
        banner: s,
        bio: o,
        pronouns: d,
        color_string: u,
    };
}
