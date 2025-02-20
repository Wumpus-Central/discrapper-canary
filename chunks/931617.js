n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var l = n(866442),
    i = n(442837),
    o = n(481060),
    a = n(607070),
    u = n(605436),
    s = n(910693),
    c = n(434404),
    d = n(271383),
    f = n(430824),
    Z = n(496675),
    b = n(823379),
    g = n(981631),
    O = n(388032),
    p = n(919721);
function P(e, t) {
    var n, i;
    return (0, r.jsxs)('div', {
        className: p.roleRow,
        children: [
            'dot' === t
                ? (0, r.jsx)(o.FhE, {
                      className: p.roleDot,
                      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, l.Rf)(g.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, r.jsx)(o.xko, {
                      className: p.roleDot,
                      color: null !== (i = e.colorString) && void 0 !== i ? i : (0, l.Rf)(g.p6O)
                  }),
            (0, r.jsx)('div', { children: e.name })
        ]
    });
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        p = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        h = (0, i.e7)([f.Z], () => f.Z.getGuild(t)),
        N = (0, i.e7)([f.Z], () => f.Z.getRoles(t)),
        j = (0, i.e7)([a.Z], () => a.Z.roleStyle),
        m = (0, s.sE)(t, {
            location: l,
            targetUserId: e
        }),
        {
            userRoles: y,
            isGuildMember: v,
            canManageRoles: E
        } = (0, i.cj)(
            [d.ZP, Z.Z],
            () => {
                let n = d.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != h && Z.Z.can(g.Plq.MANAGE_ROLES, h)
                };
            },
            [e, t, h]
        );
    if (__OVERLAY__ || null == y || null == h || !v) return null;
    let x = Z.Z.getHighestRole(h),
        C = Object.values(N).filter((e) => !(0, u.pM)(h.id, e.id)),
        S =
            E && !p
                ? C.map((n) => {
                      let l = n.managed || !Z.Z.isRoleHigher(h, x, n),
                          i = -1 !== y.indexOf(n.id);
                      return l && !i
                          ? null
                          : (0, r.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => P(n, j),
                                    disabled: l,
                                    action: () => {
                                        y.includes(n.id)
                                            ? (c.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  y.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              m(s.jQ.REMOVE_ROLE))
                                            : (c.Z.updateMemberRoles(t, e, y.concat([n.id]), [n.id], []), m(s.jQ.ADD_ROLE));
                                    },
                                    checked: i
                                },
                                n.id
                            );
                  })
                : C.filter((e) => -1 !== y.indexOf(e.id)).map((e) =>
                      (0, u.pM)(h.id, e.id)
                          ? null
                          : (0, r.jsx)(
                                o.sNh,
                                {
                                    id: e.id,
                                    label: () => P(e, j)
                                },
                                e.id
                            )
                  );
    return 0 === S.filter(b.lm).length
        ? null
        : n
          ? S
          : (0, r.jsx)(o.sNh, {
                id: 'roles',
                label: O.NW.formatToPlainString(O.t.PCs0oq, { numRoles: S.length }),
                children: S
            });
}
