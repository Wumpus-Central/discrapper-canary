n.d(t, { Z: () => l });
var i = n(399606),
    r = n(592125),
    a = n(271383),
    s = n(430824),
    o = n(275759);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, i.e7)([a.ZP], () => (null != e ? a.ZP.getMember(e.id, t) : null), [e, t]),
        c = (0, i.e7)([r.Z], () => r.Z.getChannel(n), [n]),
        d = (0, i.e7)([r.Z], () => r.Z.getChannel(null == c ? void 0 : c.parent_id), [c]),
        f = (0, i.e7)([s.Z], () => (null != e ? s.Z.getRoles(e.id) : void 0));
    return null == e || null == f || null == u
        ? null
        : (0, o.Ur)({
              guild: e,
              guildRoles: f,
              guildMember: u,
              channel: null != c && c.isThread() && null != d ? d : c,
              onlyChannelConnectionRoles: l
          });
}
