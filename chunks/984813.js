var i,
    r = n(855986),
    a = n(617617);
n(980504);
var s = (((i = {})[(i.GLOBAL = 0)] = "GLOBAL"), (i[(i.GUILD = 1)] = "GUILD"), i);
function l(e, t) {
    let n = t[e]?.joinSound,
        i = t["0"]?.joinSound,
        r = n ?? i;
    return null != r ? { ...r, type: +(null != n) } : void 0;
}
n.d(
    t,
    {},
    {
        PP: s,
        mz: function (e) {
            return (0, r.bG)([a.A], () => l(e, a.A.settings.guilds?.guilds ?? {}));
        },
        z0: function (e) {
            return l(e, a.A.settings.guilds?.guilds ?? {});
        },
    },
);
