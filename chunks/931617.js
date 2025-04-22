n.d(t, { Z: () => E });
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
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        E = (0, r.e7)([g.Z], () => g.Z.getGuild(t)),
        v = (0, r.e7)([g.Z], () => g.Z.getRoles(t)),
        p = (0, r.e7)([a.Z], () => a.Z.roleStyle),
        P = (0, u.sE)(t, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: y,
            isGuildMember: S,
            canManageRoles: C
        } = (0, r.cj)(
            [f.ZP, Z.Z],
            () => {
                let n = f.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != E && Z.Z.can(O.Plq.MANAGE_ROLES, E)
                };
            },
            [e, t, E]
        ),
        M = (0, c.$V)(t, 'useUserRolesItems');
    if (__OVERLAY__ || null == y || null == E || !S) return null;
    let x = Z.Z.getHighestRole(E),
        N = Object.values(v).filter((e) => !(0, s.pM)(E.id, e.id)),
        I =
            C && !h
                ? N.map((n) => {
                      let i = n.managed || !Z.Z.isRoleHigher(E, x, n),
                          r = -1 !== y.indexOf(n.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => j(n, p, M),
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
                : N.filter((e) => -1 !== y.indexOf(e.id)).map((e) =>
                      (0, s.pM)(E.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: e.id,
                                    label: () => j(e, p, M)
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
                label: m.intl.formatToPlainString(m.t.PCs0oq, { numRoles: I.length }),
                children: I
            });
}
