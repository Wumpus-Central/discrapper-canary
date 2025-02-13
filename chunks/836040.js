n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(451478),
    a = n(727258),
    s = n(325257),
    c = n(981631);
function d(e) {
    let { guild: t, invite: n } = e,
        d = l.useMemo(() => (0, a.Mg)(t.id), [t.id]),
        u = (0, r.e7)([o.Z], () => o.Z.isFocused());
    return null == t
        ? null
        : (0, i.jsx)(s.Z, {
              guildNode: d,
              guild: t,
              animatable: u,
              draggable: !1,
              contextMenu: () => {},
              selected: !0,
              route: c.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
          });
}
