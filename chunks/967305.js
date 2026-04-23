"use strict";
n.d(t, { Ih: () => m, Jg: () => h, default: () => E });
var r = n(284009),
    i = n.n(r),
    s = n(192308),
    a = n(686956),
    o = n(976860),
    l = n(669953),
    u = n(817818),
    c = n(713125),
    d = n(263594),
    _ = n(652215),
    f = n(746080);
let p = {};
function h(e) {
    p[e] = null;
}
async function E(e) {
    let { guildId: t, returnChannelId: n, isPreview: r = !1 } = e;
    (0, s.closeAllModals)(), i()(null == p[t], "should not double-join guilds");
    let h = await (0, a.k)(t);
    if (h.features.has(_.GuildFeatures.COMMUNITY)) {
        var E;
        if (r) (0, u.sy)(t);
        else {
            if (!h.features.has(_.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, u.h9)(t);
        }
        c.Ay.shouldShowOnboarding(t) &&
            (await ((E = t),
            new Promise((e) => {
                (p[E] = e),
                    (0, d.Y)(E).then(() => {
                        p[E]?.(), (p[E] = null), l.A.finishOnboarding(E);
                    }),
                    (0, o.pX)(_.BVt.CHANNEL(E, f.VV.GUILD_ONBOARDING));
            })),
            null != n && (0, o.pX)(_.BVt.CHANNEL(t, n)));
    }
}
function m(e) {
    return null != p[e];
}
