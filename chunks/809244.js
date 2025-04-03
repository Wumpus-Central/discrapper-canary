n.d(t, { Z: () => o });
var r = n(687516),
    i = n(5192),
    l = n(388032);
function o(e, t, n) {
    let o = (0, r.Cf)(n),
        a = i.ZP.getName(e.getGuildId(), e.id, t);
    return null == n
        ? a
        : (null == o ? void 0 : o.name) != null
          ? l.NW.formatToPlainString(l.t['9jpVOT'], {
                applicationName: null == o ? void 0 : o.name,
                username: a
            })
          : l.NW.formatToPlainString(l.t['+h0Z5+'], { username: a });
}
