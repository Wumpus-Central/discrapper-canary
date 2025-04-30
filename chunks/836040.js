n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(451478),
    s = n(727258),
    a = n(325257),
    c = n(981631);
function u(e) {
    let { guild: t, invite: n } = e,
        u = i.useMemo(() => (0, s.Mg)(t.id), [t.id]),
        d = (0, l.e7)([o.Z], () => o.Z.isFocused());
    return null == t
        ? null
        : (0, r.jsx)(a.Z, {
              guildNode: u,
              guild: t,
              animatable: d,
              draggable: !1,
              contextMenu: () => {},
              selected: !0,
              route: c.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
          });
}
