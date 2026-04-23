"use strict";
n.d(t, { PP: () => a, mz: () => o, z0: () => l });
var i,
    r = n(17928),
    s = n(617617);
n(980504);
var a = (((i = {})[(i.GLOBAL = 0)] = "GLOBAL"), (i[(i.GUILD = 1)] = "GUILD"), i);
function o(e) {
    return (0, r.bG)([s.A], () => d(e, s.A.settings.guilds?.guilds ?? {}));
}
function l(e) {
    return d(e, s.A.settings.guilds?.guilds ?? {});
}
function d(e, t) {
    let n = t[e]?.joinSound,
        i = t["0"]?.joinSound,
        r = n ?? i;
    return null != r ? { ...r, type: +(null != n) } : void 0;
}
