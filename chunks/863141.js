r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(789020);
var a = r(864106);
function s(e) {
    let { id: n, username: r, discriminator: i, globalName: s, avatar: o, avatarDecoration: l, bot: u, flags: c, premiumType: d } = e;
    return {
        id: n,
        username: r,
        discriminator: i,
        global_name: s,
        avatar: o,
        avatar_decoration_data: (0, a.FG)(l),
        bot: u,
        flags: c,
        premium_type: null != d ? d : 0
    };
}
