n.d(t, { Z: () => j });
var l = n(200651);
n(192379);
var i = n(866442),
    r = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(605436),
    u = n(910693),
    d = n(434404),
    c = n(181918),
    f = n(271383),
    g = n(430824),
    Z = n(496675),
    b = n(823379),
    O = n(981631),
    m = n(388032),
    N = n(895261);
function h(e, t, n) {
    var r, a;
    return (0, l.jsxs)('div', {
        className: N.roleRow,
        children: [
            'dot' === t
                ? (0, l.jsx)(o.FhE, {
                      className: N.roleDot,
                      color: null != (r = e.colorString) ? r : (0, i.Rf)(O.p6O),
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(o.xko, {
                      className: N.roleDot,
                      color: null != (a = e.colorString) ? a : (0, i.Rf)(O.p6O),
                      colors: n ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        N = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, r.e7)([g.Z], () => g.Z.getGuild(t)),
        E = (0, r.e7)([g.Z], () => g.Z.getRoles(t)),
        v = (0, r.e7)([a.Z], () => a.Z.roleStyle),
        p = (0, u.sE)(t, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: P,
            isGuildMember: y,
            canManageRoles: S
        } = (0, r.cj)(
            [f.ZP, Z.Z],
            () => {
                let n = f.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != j && Z.Z.can(O.Plq.MANAGE_ROLES, j)
                };
            },
            [e, t, j]
        ),
        C = (0, c.$V)(t, 'useUserRolesItems');
    if (__OVERLAY__ || null == P || null == j || !y) return null;
    let M = Z.Z.getHighestRole(j),
        x = Object.values(E).filter((e) => !(0, s.pM)(j.id, e.id)),
        I =
            S && !N
                ? x.map((n) => {
                      let i = n.managed || !Z.Z.isRoleHigher(j, M, n),
                          r = -1 !== P.indexOf(n.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => h(n, v, C),
                                    disabled: i,
                                    action: () => {
                                        P.includes(n.id)
                                            ? (d.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  P.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              p(u.jQ.REMOVE_ROLE))
                                            : (d.Z.updateMemberRoles(t, e, P.concat([n.id]), [n.id], []), p(u.jQ.ADD_ROLE));
                                    },
                                    checked: r
                                },
                                n.id
                            );
                  })
                : x
                      .filter((e) => -1 !== P.indexOf(e.id))
                      .map((e) =>
                          (0, s.pM)(j.id, e.id)
                              ? null
                              : (0, l.jsx)(
                                    o.sNh,
                                    {
                                        id: e.id,
                                        label: () => h(e, v, C)
                                    },
                                    e.id
                                )
                      );
    return 0 === I.filter(b.lm).length
        ? null
        : n
          ? I
          : (0, l.jsx)(o.sNh, {
                id: 'roles',
                label: m.NW.formatToPlainString(m.t.PCs0oq, { numRoles: I.length }),
                children: I
            });
}
