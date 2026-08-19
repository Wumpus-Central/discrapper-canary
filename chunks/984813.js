"use strict";
n.d(t, { PP: () => s, mz: () => l, z0: () => o });
var i,
    r = n(17928),
    a = n(617617);
n(980504);
var s = (((i = {})[(i.GLOBAL = 0)] = "GLOBAL"), (i[(i.GUILD = 1)] = "GUILD"), i);
function l(e) {
    return (0, r.bG)([a.A], () => d(e, a.A.settings.guilds?.guilds ?? {}));
}
function o(e) {
    return d(e, a.A.settings.guilds?.guilds ?? {});
}
function d(e, t) {
    let n = t[e]?.joinSound,
        i = t["0"]?.joinSound,
        r = n ?? i;
    return null != r ? { ...r, type: +(null != n) } : void 0;
}
