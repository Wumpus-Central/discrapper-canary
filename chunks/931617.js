n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var l = n(866442),
    i = n(442837),
    a = n(481060),
    o = n(607070),
    u = n(605436),
    c = n(910693),
    s = n(434404),
    d = n(181918),
    f = n(271383),
    O = n(430824),
    E = n(496675),
    g = n(823379),
    b = n(981631),
    y = n(388032),
    _ = n(895261);
function p(e, t, n) {
    var i, o;
    return (0, r.jsxs)('div', {
        className: _.roleRow,
        children: [
            'dot' === t
                ? (0, r.jsx)(a.FhE, {
                      className: _.roleDot,
                      color: null != (i = e.colorString) ? i : (0, l.Rf)(b.p6O),
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, r.jsx)(a.xko, {
                      className: _.roleDot,
                      color: null != (o = e.colorString) ? o : (0, l.Rf)(b.p6O),
                      colors: n ? e.colorStrings : null
                  }),
            (0, r.jsx)('div', { children: e.name })
        ]
    });
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        _ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        m = (0, i.e7)([O.Z], () => O.Z.getGuild(t)),
        j = (0, i.e7)([O.Z], () => O.Z.getRoles(t)),
        M = (0, i.e7)([o.Z], () => o.Z.roleStyle),
        P = (0, c.sE)(t, {
            location: l,
            targetUserId: e
        }),
        {
            userRoles: S,
            isGuildMember: A,
            canManageRoles: v
        } = (0, i.cj)(
            [f.ZP, E.Z],
            () => {
                let n = f.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != m && E.Z.can(b.Plq.MANAGE_ROLES, m)
                };
            },
            [e, t, m]
        ),
        Z = (0, d.$V)(t, 'useUserRolesItems');
    if (__OVERLAY__ || null == S || null == m || !A) return null;
    let N = E.Z.getHighestRole(m),
        I = Object.values(j).filter((e) => !(0, u.pM)(m.id, e.id)),
        h =
            v && !_
                ? I.map((n) => {
                      let l = n.managed || !E.Z.isRoleHigher(m, N, n),
                          i = -1 !== S.indexOf(n.id);
                      return l && !i
                          ? null
                          : (0, r.jsx)(
                                a.S89,
                                {
                                    id: n.id,
                                    label: () => p(n, M, Z),
                                    disabled: l,
                                    action: () => {
                                        S.includes(n.id)
                                            ? (s.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  S.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              P(c.jQ.REMOVE_ROLE))
                                            : (s.Z.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []), P(c.jQ.ADD_ROLE));
                                    },
                                    checked: i
                                },
                                n.id
                            );
                  })
                : I.filter((e) => -1 !== S.indexOf(e.id)).map((e) =>
                      (0, u.pM)(m.id, e.id)
                          ? null
                          : (0, r.jsx)(
                                a.sNh,
                                {
                                    id: e.id,
                                    label: () => p(e, M, Z)
                                },
                                e.id
                            )
                  );
    return 0 === h.filter(g.lm).length
        ? null
        : n
          ? h
          : (0, r.jsx)(a.sNh, {
                id: 'roles',
                label: y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: h.length }),
                children: h
            });
}
