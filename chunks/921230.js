n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(905423),
    o = n(430824),
    s = n(451478),
    c = n(727258),
    u = n(61634),
    d = n(325257);
function f(e) {
    let { guildId: t } = e,
        n = i.useMemo(() => (0, c.Mg)(t), [t]),
        f = (0, l.e7)([o.Z], () => o.Z.getGuild(t)),
        h = (0, l.e7)([s.Z], () => s.Z.isFocused()),
        p =
            t ===
            (0, a.Z)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        g = (0, u.Z)(t);
    return null == f
        ? null
        : (0, r.jsx)(d.Z, {
              guildNode: n,
              guild: f,
              animatable: h,
              selected: p,
              draggable: !1,
              mediaState: g,
          });
}
