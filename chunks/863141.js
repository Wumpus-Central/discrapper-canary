n.d(t, { Z: () => i }), n(789020);
var r = n(864106);
function i(e) {
    let { id: t, username: n, discriminator: i, globalName: o, avatar: a, avatarDecoration: s, bot: l, flags: c, premiumType: u } = e;
    return {
        id: t,
        username: n,
        discriminator: i,
        global_name: o,
        avatar: a,
        avatar_decoration_data: (0, r.FG)(s),
        bot: l,
        flags: c,
        premium_type: null != u ? u : 0
    };
}
