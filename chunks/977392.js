n.d(t, { Z: () => l });
var a = n(399606),
    o = n(592125),
    i = n(271383),
    r = n(430824),
    s = n(275759);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, a.e7)([i.ZP], () => (null != e ? i.ZP.getMember(e.id, t) : null), [e, t]),
        u = (0, a.e7)([o.Z], () => o.Z.getChannel(n), [n]),
        d = (0, a.e7)([o.Z], () => o.Z.getChannel(null == u ? void 0 : u.parent_id), [u]),
        p = (0, a.e7)([r.Z], () => (null != e ? r.Z.getRoles(e.id) : void 0));
    return null == e || null == p || null == c
        ? null
        : (0, s.Ur)({
              guild: e,
              guildRoles: p,
              guildMember: c,
              channel: null != u && u.isThread() && null != d ? d : u,
              onlyChannelConnectionRoles: l
          });
}
