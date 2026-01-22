n.d(t, {
    Ih: () => b,
    Jg: () => m,
    default: () => g,
});
var r = n(284009),
    i = n.n(r),
    a = n(397927),
    s = n(686956),
    o = n(976860),
    l = n(669953),
    c = n(817818),
    u = n(713125),
    d = n(263594),
    f = n(652215),
    p = n(746080);
let _ = {};
function h(e) {
    var t;
    null == (t = _[e]) || t.call(_), (_[e] = null);
}
function m(e) {
    _[e] = null;
}
async function g(e) {
    let { guildId: t, returnChannelId: n, isPreview: r = !1 } = e;
    (0, a.s7G)(), i()(null == _[t], "should not double-join guilds");
    let l = await (0, s.k)(t);
    if (l.features.has(f.GuildFeatures.COMMUNITY)) {
        if (r) (0, c.sy)(t);
        else {
            if (!l.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, c.h9)(t);
        }
        u.Ay.shouldShowOnboarding(t) && (await E(t), null != n && (0, o.pX)(f.BVt.CHANNEL(t, n)));
    }
}
function E(e) {
    return new Promise((t) => {
        (_[e] = t),
            (0, d.Y)(e).then(() => {
                h(e), l.A.finishOnboarding(e);
            }),
            (0, o.pX)(f.BVt.CHANNEL(e, p.VV.GUILD_ONBOARDING));
    });
}
function b(e) {
    return null != _[e];
}
