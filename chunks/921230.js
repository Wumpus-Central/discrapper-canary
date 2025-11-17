n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(905423),
    a = n(430824),
    s = n(451478),
    c = n(727258),
    u = n(61634),
    d = n(325257);
function p(e) {
    let { guildId: t } = e,
        n = i.useMemo(() => (0, c.Mg)(t), [t]),
        p = (0, l.e7)([a.Z], () => a.Z.getGuild(t)),
        f = (0, l.e7)([s.Z], () => s.Z.isFocused()),
        h =
            t ===
            (0, o.Z)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        g = (0, u.Z)(t);
    return null == p
        ? null
        : (0, r.jsx)(d.Z, {
              guildNode: n,
              guild: p,
              animatable: f,
              selected: h,
              draggable: !1,
              mediaState: g,
          });
}
