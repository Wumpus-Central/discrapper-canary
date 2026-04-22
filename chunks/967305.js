"use strict";
n.d(t, { Ih: () => m, Jg: () => h, default: () => p });
var r = n(284009),
    i = n.n(r),
    s = n(192308),
    a = n(686956),
    o = n(976860),
    l = n(669953),
    u = n(817818),
    d = n(713125),
    c = n(263594),
    _ = n(652215),
    f = n(746080);
let E = {};
function h(e) {
    E[e] = null;
}
async function p(e) {
    let { guildId: t, returnChannelId: n, isPreview: r = !1 } = e;
    (0, s.closeAllModals)(), i()(null == E[t], "should not double-join guilds");
    let h = await (0, a.k)(t);
    if (h.features.has(_.GuildFeatures.COMMUNITY)) {
        var p;
        if (r) (0, u.sy)(t);
        else {
            if (!h.features.has(_.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, u.h9)(t);
        }
        d.Ay.shouldShowOnboarding(t) &&
            (await ((p = t),
            new Promise((e) => {
                (E[p] = e),
                    (0, c.Y)(p).then(() => {
                        E[p]?.(), (E[p] = null), l.A.finishOnboarding(p);
                    }),
                    (0, o.pX)(_.BVt.CHANNEL(p, f.VV.GUILD_ONBOARDING));
            })),
            null != n && (0, o.pX)(_.BVt.CHANNEL(t, n)));
    }
}
function m(e) {
    return null != E[e];
}
