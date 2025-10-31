n.d(t, { Z: () => a });
var r = n(687516),
    i = n(5192),
    l = n(388032);
function a(e, t, n) {
    let a = (0, r.Cf)(n),
        o = i.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? o
        : (null == a ? void 0 : a.name) != null
          ? l.intl.formatToPlainString(l.t["9jpVOZ"], {
                applicationName: null == a ? void 0 : a.name,
                username: o,
            })
          : l.intl.formatToPlainString(l.t["+h0Z59"], { username: o });
}
