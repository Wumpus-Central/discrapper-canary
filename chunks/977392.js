n.d(t, { Z: () => c });
var r = n(399606),
    o = n(592125),
    a = n(271383),
    i = n(430824),
    s = n(275759);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, r.e7)([a.ZP], () => (null != e ? a.ZP.getMember(e.id, t) : null), [e, t]),
        u = (0, r.e7)([o.Z], () => o.Z.getChannel(n), [n]),
        d = (0, r.e7)([o.Z], () => o.Z.getChannel(null == u ? void 0 : u.parent_id), [u]),
        p = (0, r.e7)([i.Z], () => (null != e ? i.Z.getRoles(e.id) : void 0));
    return null == e || null == p || null == l
        ? null
        : (0, s.Ur)({
              guild: e,
              guildRoles: p,
              guildMember: l,
              channel: null != u && u.isThread() && null != d ? d : u,
              onlyChannelConnectionRoles: c
          });
}
