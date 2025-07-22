n.d(t, { Z: () => E });
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
    f = n(485386),
    Z = n(430824),
    b = n(496675),
    O = n(823379),
    m = n(981631),
    h = n(388032),
    j = n(895261);
function v(e, t, n) {
    var r, a;
    return (0, l.jsxs)('div', {
        className: j.roleRow,
        children: [
            'dot' === t
                ? (0, l.jsx)(o.FhE, {
                      className: j.roleDot,
                      color: null != (r = e.colorString) ? r : (0, i.Rf)(m.p6O),
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(o.xko, {
                      className: j.roleDot,
                      color: null != (a = e.colorString) ? a : (0, i.Rf)(m.p6O),
                      colors: n ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        j = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        E = (0, r.e7)([Z.Z], () => Z.Z.getGuild(t)),
        p = (0, r.e7)([f.Z], () => f.Z.getRoles(t)),
        P = (0, r.e7)([a.Z], () => a.Z.roleStyle),
        y = (0, u.sE)(t, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: S,
            isGuildMember: M,
            canManageRoles: C
        } = (0, r.cj)(
            [g.ZP, b.Z],
            () => {
                let n = g.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != E && b.Z.can(m.Plq.MANAGE_ROLES, E)
                };
            },
            [e, t, E]
        ),
        x = (0, c.ZP)(t, e);
    if (__OVERLAY__ || null == S || null == E || !M) return null;
    let N = b.Z.getHighestRole(E),
        I = Object.values(p).filter((e) => !(0, s.pM)(E.id, e.id)),
        T =
            C && !j
                ? I.map((n) => {
                      let i = n.managed || !b.Z.isRoleHigher(E, N, n),
                          r = -1 !== S.indexOf(n.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => v(n, P, x),
                                    disabled: i,
                                    action: () => {
                                        S.includes(n.id)
                                            ? (d.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  S.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              y(u.jQ.REMOVE_ROLE))
                                            : (d.Z.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []), y(u.jQ.ADD_ROLE));
                                    },
                                    checked: r
                                },
                                n.id
                            );
                  })
                : I.filter((e) => -1 !== S.indexOf(e.id)).map((e) =>
                      (0, s.pM)(E.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: e.id,
                                    label: () => v(e, P, x)
                                },
                                e.id
                            )
                  );
    return 0 === T.filter(O.lm).length
        ? null
        : n
          ? T
          : (0, l.jsx)(o.sNh, {
                id: 'roles',
                label: h.intl.formatToPlainString(h.t.PCs0oq, { numRoles: T.length }),
                children: T
            });
}
