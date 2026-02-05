"use strict";
n.d(t, { Ih: () => A, Jg: () => m, default: () => g });
var r = n(284009),
    i = n.n(r),
    a = n(397927),
    s = n(686956),
    o = n(976860),
    l = n(669953),
    u = n(817818),
    c = n(713125),
    d = n(263594),
    _ = n(652215),
    f = n(746080);
let p = {};
function h(e) {
    p[e]?.(), (p[e] = null);
}
function m(e) {
    p[e] = null;
}
async function g(e) {
    let { guildId: t, returnChannelId: n, isPreview: r = !1 } = e;
    (0, a.s7G)(), i()(null == p[t], "should not double-join guilds");
    let l = await (0, s.k)(t);
    if (l.features.has(_.GuildFeatures.COMMUNITY)) {
        if (r) (0, u.sy)(t);
        else {
            if (!l.features.has(_.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, u.h9)(t);
        }
        c.Ay.shouldShowOnboarding(t) && (await E(t), null != n && (0, o.pX)(_.BVt.CHANNEL(t, n)));
    }
}
function E(e) {
    return new Promise((t) => {
        (p[e] = t),
            (0, d.Y)(e).then(() => {
                h(e), l.A.finishOnboarding(e);
            }),
            (0, o.pX)(_.BVt.CHANNEL(e, f.VV.GUILD_ONBOARDING));
    });
}
function A(e) {
    return null != p[e];
}
