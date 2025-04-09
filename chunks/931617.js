n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var l = n(866442),
    i = n(442837),
    a = n(481060),
    o = n(607070),
    u = n(605436),
    c = n(910693),
    s = n(434404),
    d = n(271383),
    f = n(430824),
    O = n(496675),
    E = n(823379),
    g = n(981631),
    b = n(388032),
    y = n(895261);
function _(e, t) {
    var n, i;
    return (0, r.jsxs)('div', {
        className: y.roleRow,
        children: [
            'dot' === t
                ? (0, r.jsx)(a.FhE, {
                      className: y.roleDot,
                      color: null != (n = e.colorString) ? n : (0, l.Rf)(g.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, r.jsx)(a.xko, {
                      className: y.roleDot,
                      color: null != (i = e.colorString) ? i : (0, l.Rf)(g.p6O)
                  }),
            (0, r.jsx)('div', { children: e.name })
        ]
    });
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        y = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        p = (0, i.e7)([f.Z], () => f.Z.getGuild(t)),
        m = (0, i.e7)([f.Z], () => f.Z.getRoles(t)),
        N = (0, i.e7)([o.Z], () => o.Z.roleStyle),
        j = (0, c.sE)(t, {
            location: l,
            targetUserId: e
        }),
        {
            userRoles: M,
            isGuildMember: P,
            canManageRoles: S
        } = (0, i.cj)(
            [d.ZP, O.Z],
            () => {
                let n = d.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != p && O.Z.can(g.Plq.MANAGE_ROLES, p)
                };
            },
            [e, t, p]
        );
    if (__OVERLAY__ || null == M || null == p || !P) return null;
    let A = O.Z.getHighestRole(p),
        v = Object.values(m).filter((e) => !(0, u.pM)(p.id, e.id)),
        Z =
            S && !y
                ? v.map((n) => {
                      let l = n.managed || !O.Z.isRoleHigher(p, A, n),
                          i = -1 !== M.indexOf(n.id);
                      return l && !i
                          ? null
                          : (0, r.jsx)(
                                a.S89,
                                {
                                    id: n.id,
                                    label: () => _(n, N),
                                    disabled: l,
                                    action: () => {
                                        M.includes(n.id)
                                            ? (s.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  M.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              j(c.jQ.REMOVE_ROLE))
                                            : (s.Z.updateMemberRoles(t, e, M.concat([n.id]), [n.id], []), j(c.jQ.ADD_ROLE));
                                    },
                                    checked: i
                                },
                                n.id
                            );
                  })
                : v
                      .filter((e) => -1 !== M.indexOf(e.id))
                      .map((e) =>
                          (0, u.pM)(p.id, e.id)
                              ? null
                              : (0, r.jsx)(
                                    a.sNh,
                                    {
                                        id: e.id,
                                        label: () => _(e, N)
                                    },
                                    e.id
                                )
                      );
    return 0 === Z.filter(E.lm).length
        ? null
        : n
          ? Z
          : (0, r.jsx)(a.sNh, {
                id: 'roles',
                label: b.NW.formatToPlainString(b.t.PCs0oq, { numRoles: Z.length }),
                children: Z
            });
}
