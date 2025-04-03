t.d(n, { Z: () => N });
var l = t(200651);
t(192379);
var r = t(866442),
    i = t(442837),
    a = t(481060),
    o = t(607070),
    u = t(605436),
    s = t(910693),
    c = t(434404),
    d = t(271383),
    g = t(430824),
    Z = t(496675),
    b = t(823379),
    f = t(981631),
    p = t(388032),
    O = t(895261);
function m(e, n) {
    var t, i;
    return (0, l.jsxs)('div', {
        className: O.roleRow,
        children: [
            'dot' === n
                ? (0, l.jsx)(a.FhE, {
                      className: O.roleDot,
                      color: null != (t = e.colorString) ? t : (0, r.Rf)(f.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(a.xko, {
                      className: O.roleDot,
                      color: null != (i = e.colorString) ? i : (0, r.Rf)(f.p6O)
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function N(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        O = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        N = (0, i.e7)([g.Z], () => g.Z.getGuild(n)),
        h = (0, i.e7)([g.Z], () => g.Z.getRoles(n)),
        j = (0, i.e7)([o.Z], () => o.Z.roleStyle),
        P = (0, s.sE)(n, {
            location: r,
            targetUserId: e
        }),
        {
            userRoles: x,
            isGuildMember: v,
            canManageRoles: y
        } = (0, i.cj)(
            [d.ZP, Z.Z],
            () => {
                let t = d.ZP.getMember(n, e);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != N && Z.Z.can(f.Plq.MANAGE_ROLES, N)
                };
            },
            [e, n, N]
        );
    if (__OVERLAY__ || null == x || null == N || !v) return null;
    let _ = Z.Z.getHighestRole(N),
        E = Object.values(h).filter((e) => !(0, u.pM)(N.id, e.id)),
        C =
            y && !O
                ? E.map((t) => {
                      let r = t.managed || !Z.Z.isRoleHigher(N, _, t),
                          i = -1 !== x.indexOf(t.id);
                      return r && !i
                          ? null
                          : (0, l.jsx)(
                                a.S89,
                                {
                                    id: t.id,
                                    label: () => m(t, j),
                                    disabled: r,
                                    action: () => {
                                        x.includes(t.id)
                                            ? (c.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  x.filter((e) => e !== t.id),
                                                  [],
                                                  [t.id]
                                              ),
                                              P(s.jQ.REMOVE_ROLE))
                                            : (c.Z.updateMemberRoles(n, e, x.concat([t.id]), [t.id], []), P(s.jQ.ADD_ROLE));
                                    },
                                    checked: i
                                },
                                t.id
                            );
                  })
                : E.filter((e) => -1 !== x.indexOf(e.id)).map((e) =>
                      (0, u.pM)(N.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                a.sNh,
                                {
                                    id: e.id,
                                    label: () => m(e, j)
                                },
                                e.id
                            )
                  );
    return 0 === C.filter(b.lm).length
        ? null
        : t
          ? C
          : (0, l.jsx)(a.sNh, {
                id: 'roles',
                label: p.NW.formatToPlainString(p.t.PCs0oq, { numRoles: C.length }),
                children: C
            });
}
