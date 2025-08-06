n.d(t, { Z: () => l });
var r = n(399606),
    i = n(592125),
    o = n(271383),
    a = n(485386),
    s = n(275759);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, r.e7)([o.ZP], () => (null != e ? o.ZP.getMember(e.id, t) : null), [e, t]),
        u = (0, r.e7)([i.Z], () => i.Z.getChannel(n), [n]),
        d = (0, r.e7)([i.Z], () => i.Z.getChannel(null == u ? void 0 : u.parent_id), [u]),
        f = (0, r.e7)([a.Z], () => (null != e ? a.Z.getSortedRoles(e.id) : void 0));
    return null == e || null == f || null == c
        ? null
        : (0, s.Ur)({
              guild: e,
              sortedGuildRoles: f,
              guildMember: c,
              channel: null != u && u.isThread() && null != d ? d : u,
              onlyChannelConnectionRoles: l
          });
}
