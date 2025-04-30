n.d(t, { Z: () => i }), n(997841);
var r = n(864106);
function i(e) {
    let { id: t, username: n, discriminator: i, globalName: a, avatar: o, avatarDecoration: s, bot: l, flags: c, premiumType: u } = e;
    return {
        id: t,
        username: n,
        discriminator: i,
        global_name: a,
        avatar: o,
        avatar_decoration_data: (0, r.FG)(s),
        bot: l,
        flags: c,
        premium_type: null != u ? u : 0
    };
}
