n.d(t, { Z: () => v });
var l = n(255367);
n(73800);
var i = n(866442),
    r = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(605436),
    u = n(910693),
    d = n(434404),
    c = n(402235),
    g = n(271383),
    f = n(430824),
    Z = n(496675),
    b = n(823379),
    O = n(981631),
    m = n(388032),
    h = n(895261);
function j(e, t, n) {
    var r, a;
    return (0, l.jsxs)('div', {
        className: h.roleRow,
        children: [
            'dot' === t
                ? (0, l.jsx)(o.FhE, {
                      className: h.roleDot,
                      color: null != (r = e.colorString) ? r : (0, i.Rf)(O.p6O),
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(o.xko, {
                      className: h.roleDot,
                      color: null != (a = e.colorString) ? a : (0, i.Rf)(O.p6O),
                      colors: n ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        v = (0, r.e7)([f.Z], () => f.Z.getGuild(t)),
        E = (0, r.e7)([f.Z], () => f.Z.getRoles(t)),
        p = (0, r.e7)([a.Z], () => a.Z.roleStyle),
        P = (0, u.sE)(t, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: y,
            isGuildMember: S,
            canManageRoles: M
        } = (0, r.cj)(
            [g.ZP, Z.Z],
            () => {
                let n = g.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != v && Z.Z.can(O.Plq.MANAGE_ROLES, v)
                };
            },
            [e, t, v]
        ),
        C = (0, c.Z)(t, 'useUserRolesItems');
    if (__OVERLAY__ || null == y || null == v || !S) return null;
    let x = Z.Z.getHighestRole(v),
        I = Object.values(E).filter((e) => !(0, s.pM)(v.id, e.id)),
        N =
            M && !h
                ? I.map((n) => {
                      let i = n.managed || !Z.Z.isRoleHigher(v, x, n),
                          r = -1 !== y.indexOf(n.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => j(n, p, C),
                                    disabled: i,
                                    action: () => {
                                        y.includes(n.id)
                                            ? (d.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  y.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              P(u.jQ.REMOVE_ROLE))
                                            : (d.Z.updateMemberRoles(t, e, y.concat([n.id]), [n.id], []), P(u.jQ.ADD_ROLE));
                                    },
                                    checked: r
                                },
                                n.id
                            );
                  })
                : I.filter((e) => -1 !== y.indexOf(e.id)).map((e) =>
                      (0, s.pM)(v.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: e.id,
                                    label: () => j(e, p, C)
                                },
                                e.id
                            )
                  );
    return 0 === N.filter(b.lm).length
        ? null
        : n
          ? N
          : (0, l.jsx)(o.sNh, {
                id: 'roles',
                label: m.intl.formatToPlainString(m.t.PCs0oq, { numRoles: N.length }),
                children: N
            });
}
