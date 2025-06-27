n.d(t, { Z: () => a });
var r = n(399606),
    l = n(592125),
    o = n(271383),
    i = n(485386),
    s = n(275759);
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, r.e7)([o.ZP], () => (null != e ? o.ZP.getMember(e.id, t) : null), [e, t]),
        u = (0, r.e7)([l.Z], () => l.Z.getChannel(n), [n]),
        d = (0, r.e7)([l.Z], () => l.Z.getChannel(null == u ? void 0 : u.parent_id), [u]),
        p = (0, r.e7)([i.Z], () => (null != e ? i.Z.getRoles(e.id) : void 0));
    return null == e || null == p || null == c
        ? null
        : (0, s.Ur)({
              guild: e,
              guildRoles: p,
              guildMember: c,
              channel: null != u && u.isThread() && null != d ? d : u,
              onlyChannelConnectionRoles: a
          });
}
