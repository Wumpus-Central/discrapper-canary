n.d(t, { Z: () => r }), n(789020);
var i = n(864106);
function r(e) {
    let { id: t, username: n, discriminator: r, globalName: a, avatar: s, avatarDecoration: o, bot: l, flags: u, premiumType: c } = e;
    return {
        id: t,
        username: n,
        discriminator: r,
        global_name: a,
        avatar: s,
        avatar_decoration_data: (0, i.FG)(o),
        bot: l,
        flags: u,
        premium_type: null != c ? c : 0
    };
}
