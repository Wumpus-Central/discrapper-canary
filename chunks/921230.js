n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(905423),
    s = n(430824),
    a = n(451478),
    c = n(727258),
    u = n(61634),
    d = n(325257);
function h(e) {
    let { guildId: t } = e,
        n = i.useMemo(() => (0, c.Mg)(t), [t]),
        h = (0, l.e7)([s.Z], () => s.Z.getGuild(t)),
        p = (0, l.e7)([a.Z], () => a.Z.isFocused()),
        f =
            t ===
            (0, o.Z)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        g = (0, u.Z)(t);
    return null == h
        ? null
        : (0, r.jsx)(d.Z, {
              guildNode: n,
              guild: h,
              animatable: p,
              selected: f,
              draggable: !1,
              mediaState: g
          });
}
