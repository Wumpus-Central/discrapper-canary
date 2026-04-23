"use strict";
n.d(t, { PP: () => a, mz: () => o, z0: () => l });
var r,
    i = n(311907),
    s = n(617617);
n(980504);
var a = (((r = {})[(r.GLOBAL = 0)] = "GLOBAL"), (r[(r.GUILD = 1)] = "GUILD"), r);
function o(e) {
    return (0, i.bG)([s.A], () => u(e, s.A.settings.guilds?.guilds ?? {}));
}
function l(e) {
    return u(e, s.A.settings.guilds?.guilds ?? {});
}
function u(e, t) {
    let n = t[e]?.joinSound,
        r = t["0"]?.joinSound,
        i = n ?? r;
    return null != i ? { ...i, type: +(null != n) } : void 0;
}
