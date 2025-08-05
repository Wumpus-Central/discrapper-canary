n.d(t, { Z: () => o });
var r = n(687516),
    i = n(5192),
    a = n(388032);
function o(e, t, n) {
    let o = (0, r.Cf)(n),
        s = i.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? s
        : (null == o ? void 0 : o.name) != null
          ? a.intl.formatToPlainString(a.t['9jpVOT'], {
                applicationName: null == o ? void 0 : o.name,
                username: s
            })
          : a.intl.formatToPlainString(a.t['+h0Z5+'], { username: s });
}
