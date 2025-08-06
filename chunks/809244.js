n.d(t, { Z: () => a });
var r = n(687516),
    i = n(5192),
    o = n(388032);
function a(e, t, n) {
    let a = (0, r.Cf)(n),
        s = i.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? s
        : (null == a ? void 0 : a.name) != null
          ? o.intl.formatToPlainString(o.t['9jpVOT'], {
                applicationName: null == a ? void 0 : a.name,
                username: s
            })
          : o.intl.formatToPlainString(o.t['+h0Z5+'], { username: s });
}
