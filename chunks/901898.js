n.d(t, { A: () => i });
var r = n(507698);
function i(e) {
    let {
        userId: t,
        nick: n,
        guildId: i,
        avatar: l,
        avatarDecoration: a,
        banner: s,
        bio: o,
        pronouns: c,
        colorString: u,
    } = e;
    return {
        user_id: t,
        nick: n,
        guild_id: i,
        avatar: l,
        avatar_decoration_data: (0, r.Xq)(a),
        banner: s,
        bio: o,
        pronouns: c,
        color_string: u,
    };
}
