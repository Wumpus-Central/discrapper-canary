"use strict";
n.d(t, { PP: () => a, mz: () => s, z0: () => o });
var r = n(311907),
    i = n(617617);
n(980504);
var a = (function (e) {
    return (e[(e.GLOBAL = 0)] = "GLOBAL"), (e[(e.GUILD = 1)] = "GUILD"), e;
})({});
function s(e) {
    return (0, r.bG)([i.A], () => l(e, i.A.settings.guilds?.guilds ?? {}));
}
function o(e) {
    return l(e, i.A.settings.guilds?.guilds ?? {});
}
function l(e, t) {
    let n = t[e]?.joinSound,
        r = t["0"]?.joinSound,
        i = n ?? r;
    return null != i ? { ...i, type: +(null != n) } : void 0;
}
