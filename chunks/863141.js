r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(789020);
var a = r(864106);
function o(e) {
    let { id: n, username: r, discriminator: i, globalName: o, avatar: s, avatarDecoration: l, bot: u, flags: c, premiumType: d } = e;
    return {
        id: n,
        username: r,
        discriminator: i,
        global_name: o,
        avatar: s,
        avatar_decoration_data: (0, a.FG)(l),
        bot: u,
        flags: c,
        premium_type: null != d ? d : 0
    };
}
