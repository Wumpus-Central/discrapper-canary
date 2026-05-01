i.d(n, { _z: () => c, x0: () => P, dI: () => g, k3: () => p });
var r,
    l = (((r = {}).DESKTOP = "desktop"), (r.XBOX = "xbox"), (r.PLAYSTATION = "playstation"), r),
    o = i(375708),
    a = i(832163);
let e = (0, i(945810).mj)({
    name: "2026-04-slayer-storefront-platform-support-copy",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function f(t) {
    let { location: n } = t;
    return e.getConfig({ location: n }).enabled;
}
var u = i(430825);
let d = { [l.DESKTOP]: "PC", [l.XBOX]: "Xbox", [l.PLAYSTATION]: "PlayStation" },
    s = [l.PLAYSTATION];
function m(t) {
    var n;
    let i,
        r = (function (t) {
            if (null == t) return s;
            let n = a.A.getConfigForApplicationId(t);
            return null == n ? s : n.excludedPlatforms;
        })(t);
    return 0 === r.length
        ? ""
        : o.intl.formatToPlainString(u.default["5h8p5P"], {
              platforms:
                  ((n = r.map((t) => d[t])),
                  0 === (i = void 0 ?? n.length)
                      ? ""
                      : 1 === i
                        ? o.intl.formatToPlainString(o.t["8s9z8P"], { first: n[0] })
                        : 2 === i
                          ? o.intl.formatToPlainString(o.t["i0K/dw"], { first: n[0], second: n[1] })
                          : 3 === i
                            ? o.intl.formatToPlainString(o.t["/KSOKY"], { first: n[0], second: n[1], third: n[2] })
                            : o.intl.formatToPlainString(o.t.xpU76u, {
                                  first: n[0],
                                  second: n[1],
                                  third: n[2],
                                  count: i - 3,
                              })),
              count: r.length,
          });
}
function p(t, n) {
    return f(n) ? o.intl.format(u.default.Q0dHYO, { platforms_info: m(t?.id) }) : o.intl.string(o.t["3pLGHL"]);
}
function c(t, n, i) {
    let { shouldAppendDisclaimer: r } = n,
        l = t?.name ?? "game's";
    if (!f(i)) {
        let t = r ? o.t.f6Ngwm : o.t.CVITgq;
        return o.intl.format(t, { applicationName: l });
    }
    return r
        ? o.intl.format(u.default["3ah/a2"], { applicationName: l, platforms_info: p(t, i) })
        : o.intl.format(o.t.CVITgq, { applicationName: l });
}
function g(t, n) {
    let i = t.name;
    return f(n)
        ? o.intl.format(u.default.fO4b1C, { applicationName: i, platforms_info: m(t.id) })
        : o.intl.format(o.t.URLMAM, { applicationName: i });
}
function P(t, n, i) {
    let { hasAlreadyLinked: r } = n,
        l = t.name;
    if (!f(i)) {
        let t = r ? o.t["v+0ifS"] : o.t.csmSk4;
        return o.intl.format(t, { applicationName: l });
    }
    let a = r ? u.default.yqAKVO : u.default.vyAtfo;
    return o.intl.format(a, { applicationName: l, platforms_info: m(t.id) });
}
