r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(399606),
    a = r(592125),
    o = r(271383),
    s = r(430824),
    l = r(275759);
function u(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, i.e7)([o.ZP], () => (null != e ? o.ZP.getMember(e.id, n) : null), [e, n]),
        d = (0, i.e7)([a.Z], () => a.Z.getChannel(r), [r]),
        f = (0, i.e7)([a.Z], () => a.Z.getChannel(null == d ? void 0 : d.parent_id), [d]),
        p = (0, i.e7)([s.Z], () => (null != e ? s.Z.getRoles(e.id) : void 0));
    return null == e || null == p || null == c
        ? null
        : (0, l.Ur)({
              guild: e,
              guildRoles: p,
              guildMember: c,
              channel: null != d && d.isThread() && null != f ? f : d,
              onlyChannelConnectionRoles: u
          });
}
