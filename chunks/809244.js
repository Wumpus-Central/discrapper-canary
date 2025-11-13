n.d(t, { Z: () => a });
var i = n(687516),
    r = n(5192),
    l = n(388032);
function a(e, t, n) {
    let a = (0, i.Cf)(n),
        o = r.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? o
        : (null == a ? void 0 : a.name) != null
          ? l.intl.formatToPlainString(l.t["9jpVOZ"], {
                applicationName: null == a ? void 0 : a.name,
                username: o,
            })
          : l.intl.formatToPlainString(l.t["+h0Z59"], { username: o });
}
