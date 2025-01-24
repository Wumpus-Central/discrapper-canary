t.d(n, {
    Z: function () {
        return v;
    }
});
var l = t(200651);
t(192379);
var i = t(866442),
    r = t(442837),
    a = t(481060),
    u = t(607070),
    o = t(605436),
    d = t(910693),
    s = t(434404),
    c = t(271383),
    Z = t(430824),
    f = t(496675),
    m = t(823379),
    g = t(981631),
    M = t(388032),
    x = t(849324);
function h(e, n) {
    var t, r;
    return (0, l.jsxs)('div', {
        className: x.roleRow,
        children: [
            'dot' === n
                ? (0, l.jsx)(a.RoleDot, {
                      className: x.roleDot,
                      color: null !== (t = e.colorString) && void 0 !== t ? t : (0, i.Rf)(g.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(a.RoleCircle, {
                      className: x.roleDot,
                      color: null !== (r = e.colorString) && void 0 !== r ? r : (0, i.Rf)(g.p6O)
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function v(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        x = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        v = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
        p = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
        b = (0, r.e7)([u.Z], () => u.Z.roleStyle),
        I = (0, d.sE)(n, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: C,
            isGuildMember: P,
            canManageRoles: E
        } = (0, r.cj)(
            [c.ZP, f.Z],
            () => {
                let t = c.ZP.getMember(n, e);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != v && f.Z.can(g.Plq.MANAGE_ROLES, v)
                };
            },
            [e, n, v]
        );
    if (__OVERLAY__ || null == C || null == v || !P) return null;
    let j = f.Z.getHighestRole(v),
        T = Object.values(p).filter((e) => !(0, o.pM)(v.id, e.id)),
        N =
            E && !x
                ? T.map((t) => {
                      let i = t.managed || !f.Z.isRoleHigher(v, j, t),
                          r = -1 !== C.indexOf(t.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                a.MenuCheckboxItem,
                                {
                                    id: t.id,
                                    label: () => h(t, b),
                                    disabled: i,
                                    action: () => {
                                        var l;
                                        return (
                                            (l = t),
                                            void (C.includes(l.id)
                                                ? (s.Z.updateMemberRoles(
                                                      n,
                                                      e,
                                                      C.filter((e) => e !== l.id),
                                                      [],
                                                      [l.id]
                                                  ),
                                                  I(d.jQ.REMOVE_ROLE))
                                                : (s.Z.updateMemberRoles(n, e, C.concat([l.id]), [l.id], []), I(d.jQ.ADD_ROLE)))
                                        );
                                    },
                                    checked: r
                                },
                                t.id
                            );
                  })
                : T.filter((e) => -1 !== C.indexOf(e.id)).map((e) =>
                      (0, o.pM)(v.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                a.MenuItem,
                                {
                                    id: e.id,
                                    label: () => h(e, b)
                                },
                                e.id
                            )
                  );
    return 0 === N.filter(m.lm).length
        ? null
        : t
          ? N
          : (0, l.jsx)(a.MenuItem, {
                id: 'roles',
                label: M.intl.formatToPlainString(M.t.PCs0oq, { numRoles: N.length }),
                children: N
            });
}
