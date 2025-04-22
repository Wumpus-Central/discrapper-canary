t.d(n, { Z: () => j });
var l = t(200651);
t(192379);
var i = t(866442),
    r = t(442837),
    a = t(481060),
    o = t(607070),
    u = t(605436),
    s = t(910693),
    c = t(434404),
    d = t(181918),
    g = t(271383),
    Z = t(430824),
    b = t(496675),
    f = t(823379),
    p = t(981631),
    m = t(388032),
    O = t(895261);
function h(e, n, t) {
    var r, o;
    return (0, l.jsxs)('div', {
        className: O.roleRow,
        children: [
            'dot' === n
                ? (0, l.jsx)(a.FhE, {
                      className: O.roleDot,
                      color: null != (r = e.colorString) ? r : (0, i.Rf)(p.p6O),
                      colors: t ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(a.xko, {
                      className: O.roleDot,
                      color: null != (o = e.colorString) ? o : (0, i.Rf)(p.p6O),
                      colors: t ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function j(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        O = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
        P = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
        v = (0, r.e7)([o.Z], () => o.Z.roleStyle),
        x = (0, s.sE)(n, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: y,
            isGuildMember: N,
            canManageRoles: _
        } = (0, r.cj)(
            [g.ZP, b.Z],
            () => {
                let t = g.ZP.getMember(n, e);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != j && b.Z.can(p.Plq.MANAGE_ROLES, j)
                };
            },
            [e, n, j]
        ),
        E = (0, d.$V)(n, 'useUserRolesItems');
    if (__OVERLAY__ || null == y || null == j || !N) return null;
    let C = b.Z.getHighestRole(j),
        I = Object.values(P).filter((e) => !(0, u.pM)(j.id, e.id)),
        S =
            _ && !O
                ? I.map((t) => {
                      let i = t.managed || !b.Z.isRoleHigher(j, C, t),
                          r = -1 !== y.indexOf(t.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                a.S89,
                                {
                                    id: t.id,
                                    label: () => h(t, v, E),
                                    disabled: i,
                                    action: () => {
                                        y.includes(t.id)
                                            ? (c.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  y.filter((e) => e !== t.id),
                                                  [],
                                                  [t.id]
                                              ),
                                              x(s.jQ.REMOVE_ROLE))
                                            : (c.Z.updateMemberRoles(n, e, y.concat([t.id]), [t.id], []), x(s.jQ.ADD_ROLE));
                                    },
                                    checked: r
                                },
                                t.id
                            );
                  })
                : I.filter((e) => -1 !== y.indexOf(e.id)).map((e) =>
                      (0, u.pM)(j.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                a.sNh,
                                {
                                    id: e.id,
                                    label: () => h(e, v, E)
                                },
                                e.id
                            )
                  );
    return 0 === S.filter(f.lm).length
        ? null
        : t
          ? S
          : (0, l.jsx)(a.sNh, {
                id: 'roles',
                label: m.intl.formatToPlainString(m.t.PCs0oq, { numRoles: S.length }),
                children: S
            });
}
