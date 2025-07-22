n.d(t, { Z: () => j });
var r = n(255367);
n(73800);
var l = n(866442),
    i = n(442837),
    a = n(481060),
    o = n(607070),
    u = n(605436),
    c = n(910693),
    s = n(434404),
    d = n(402235),
    f = n(271383),
    O = n(485386),
    E = n(430824),
    g = n(496675),
    b = n(823379),
    y = n(981631),
    _ = n(388032),
    p = n(895261);
function m(e, t, n) {
    var i, o;
    return (0, r.jsxs)('div', {
        className: p.roleRow,
        children: [
            'dot' === t
                ? (0, r.jsx)(a.FhE, {
                      className: p.roleDot,
                      color: null != (i = e.colorString) ? i : (0, l.Rf)(y.p6O),
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, r.jsx)(a.xko, {
                      className: p.roleDot,
                      color: null != (o = e.colorString) ? o : (0, l.Rf)(y.p6O),
                      colors: n ? e.colorStrings : null
                  }),
            (0, r.jsx)('div', { children: e.name })
        ]
    });
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        p = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, i.e7)([E.Z], () => E.Z.getGuild(t)),
        M = (0, i.e7)([O.Z], () => O.Z.getRoles(t)),
        P = (0, i.e7)([o.Z], () => o.Z.roleStyle),
        S = (0, c.sE)(t, {
            location: l,
            targetUserId: e
        }),
        {
            userRoles: A,
            isGuildMember: Z,
            canManageRoles: v
        } = (0, i.cj)(
            [f.ZP, g.Z],
            () => {
                let n = f.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != j && g.Z.can(y.Plq.MANAGE_ROLES, j)
                };
            },
            [e, t, j]
        ),
        N = (0, d.ZP)(t, e);
    if (__OVERLAY__ || null == A || null == j || !Z) return null;
    let I = g.Z.getHighestRole(j),
        h = Object.values(M).filter((e) => !(0, u.pM)(j.id, e.id)),
        T =
            v && !p
                ? h.map((n) => {
                      let l = n.managed || !g.Z.isRoleHigher(j, I, n),
                          i = -1 !== A.indexOf(n.id);
                      return l && !i
                          ? null
                          : (0, r.jsx)(
                                a.S89,
                                {
                                    id: n.id,
                                    label: () => m(n, P, N),
                                    disabled: l,
                                    action: () => {
                                        A.includes(n.id)
                                            ? (s.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  A.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              S(c.jQ.REMOVE_ROLE))
                                            : (s.Z.updateMemberRoles(t, e, A.concat([n.id]), [n.id], []), S(c.jQ.ADD_ROLE));
                                    },
                                    checked: i
                                },
                                n.id
                            );
                  })
                : h
                      .filter((e) => -1 !== A.indexOf(e.id))
                      .map((e) =>
                          (0, u.pM)(j.id, e.id)
                              ? null
                              : (0, r.jsx)(
                                    a.sNh,
                                    {
                                        id: e.id,
                                        label: () => m(e, P, N)
                                    },
                                    e.id
                                )
                      );
    return 0 === T.filter(b.lm).length
        ? null
        : n
          ? T
          : (0, r.jsx)(a.sNh, {
                id: 'roles',
                label: _.intl.formatToPlainString(_.t.PCs0oq, { numRoles: T.length }),
                children: T
            });
}
