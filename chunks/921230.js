n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(905423),
    o = n(430824),
    s = n(451478),
    c = n(727258),
    u = n(61634),
    d = n(325257);
function h(e) {
    let { guildId: t } = e,
        n = l.useMemo(() => (0, c.Mg)(t), [t]),
        h = (0, r.e7)([o.Z], () => o.Z.getGuild(t)),
        p = (0, r.e7)([s.Z], () => s.Z.isFocused()),
        m =
            t ===
            (0, a.Z)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        f = (0, u.Z)(t);
    return null == h
        ? null
        : (0, i.jsx)(d.Z, {
              guildNode: n,
              guild: h,
              animatable: p,
              selected: m,
              draggable: !1,
              mediaState: f
          });
}
