n.d(t, { Z: () => r });
var i = n(687516),
    l = n(5192),
    a = n(388032);
function r(e, t, n) {
    let r = (0, i.Cf)(n),
        s = l.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? s
        : (null == r ? void 0 : r.name) != null
          ? a.intl.formatToPlainString(a.t['9jpVOT'], {
                applicationName: null == r ? void 0 : r.name,
                username: s
            })
          : a.intl.formatToPlainString(a.t['+h0Z5+'], { username: s });
}
