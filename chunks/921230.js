n.d(t, { Z: () => h });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(905423),
    a = n(430824),
    s = n(451478),
    c = n(727258),
    d = n(61634),
    u = n(325257);
function h(e) {
    let { guildId: t } = e,
        n = l.useMemo(() => (0, c.Mg)(t), [t]),
        h = (0, r.e7)([a.Z], () => a.Z.getGuild(t)),
        p = (0, r.e7)([s.Z], () => s.Z.isFocused()),
        m =
            t ===
            (0, o.Z)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        g = (0, d.Z)(t);
    return null == h
        ? null
        : (0, i.jsx)(u.Z, {
              guildNode: n,
              guild: h,
              animatable: p,
              selected: m,
              draggable: !1,
              mediaState: g
          });
}
