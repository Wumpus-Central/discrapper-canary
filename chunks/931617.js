n.d(t, { Z: () => j });
var l = n(200651);
n(192379);
var r = n(866442),
    i = n(442837),
    o = n(481060),
    a = n(607070),
    u = n(605436),
    s = n(910693),
    c = n(434404),
    d = n(181918),
    b = n(271383),
    g = n(430824),
    Z = n(496675),
    f = n(823379),
    p = n(981631),
    O = n(388032),
    h = n(895261);
function m(e, t, n) {
    var i, a;
    return (0, l.jsxs)('div', {
        className: h.roleRow,
        children: [
            'dot' === t
                ? (0, l.jsx)(o.FhE, {
                      className: h.roleDot,
                      color: null != (i = e.colorString) ? i : (0, r.Rf)(p.p6O),
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(o.xko, {
                      className: h.roleDot,
                      color: null != (a = e.colorString) ? a : (0, r.Rf)(p.p6O),
                      colors: n ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, i.e7)([g.Z], () => g.Z.getGuild(t)),
        P = (0, i.e7)([g.Z], () => g.Z.getRoles(t)),
        y = (0, i.e7)([a.Z], () => a.Z.roleStyle),
        E = (0, s.sE)(t, {
            location: r,
            targetUserId: e
        }),
        {
            userRoles: x,
            isGuildMember: N,
            canManageRoles: v
        } = (0, i.cj)(
            [b.ZP, Z.Z],
            () => {
                let n = b.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != j && Z.Z.can(p.Plq.MANAGE_ROLES, j)
                };
            },
            [e, t, j]
        ),
        _ = (0, d.$V)(t, 'useUserRolesItems');
    if (__OVERLAY__ || null == x || null == j || !N) return null;
    let C = Z.Z.getHighestRole(j),
        S = Object.values(P).filter((e) => !(0, u.pM)(j.id, e.id)),
        M =
            v && !h
                ? S.map((n) => {
                      let r = n.managed || !Z.Z.isRoleHigher(j, C, n),
                          i = -1 !== x.indexOf(n.id);
                      return r && !i
                          ? null
                          : (0, l.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => m(n, y, _),
                                    disabled: r,
                                    action: () => {
                                        x.includes(n.id)
                                            ? (c.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  x.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              E(s.jQ.REMOVE_ROLE))
                                            : (c.Z.updateMemberRoles(t, e, x.concat([n.id]), [n.id], []), E(s.jQ.ADD_ROLE));
                                    },
                                    checked: i
                                },
                                n.id
                            );
                  })
                : S.filter((e) => -1 !== x.indexOf(e.id)).map((e) =>
                      (0, u.pM)(j.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: e.id,
                                    label: () => m(e, y, _)
                                },
                                e.id
                            )
                  );
    return 0 === M.filter(f.lm).length
        ? null
        : n
          ? M
          : (0, l.jsx)(o.sNh, {
                id: 'roles',
                label: O.intl.formatToPlainString(O.t.PCs0oq, { numRoles: M.length }),
                children: M
            });
}
