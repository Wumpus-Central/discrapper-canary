n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    a = n(607070),
    o = n(910693),
    u = n(434404),
    c = n(402235),
    s = n(345162),
    d = n(271383),
    f = n(485386),
    O = n(430824),
    E = n(496675),
    g = n(823379),
    b = n(981631),
    y = n(388032),
    _ = n(895261);
function p(e, t, n) {
    var l, a;
    return (0, r.jsxs)('div', {
        className: _.roleRow,
        children: [
            'dot' === t
                ? (0, r.jsx)(i.FhE, {
                      className: _.roleDot,
                      color: null != (l = e.colorString) ? l : b.Pbq,
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, r.jsx)(i.xko, {
                      className: _.roleDot,
                      color: null != (a = e.colorString) ? a : b.Pbq,
                      colors: n ? e.colorStrings : null
                  }),
            (0, r.jsx)('div', { children: e.name })
        ]
    });
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        m = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, l.e7)([O.Z], () => O.Z.getGuild(t)),
        P = (0, l.e7)([f.Z], () => f.Z.getSortedRoles(t)),
        M = (0, l.e7)([a.Z], () => a.Z.roleStyle),
        S = (0, o.sE)(t, {
            location: _,
            targetUserId: e
        }),
        {
            userRoles: A,
            isGuildMember: Z,
            canManageRoles: I
        } = (0, l.cj)(
            [d.ZP, E.Z],
            () => {
                let n = d.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != j && E.Z.can(b.Plq.MANAGE_ROLES, j)
                };
            },
            [e, t, j]
        ),
        N = (0, c.ZP)(t, e);
    if (__OVERLAY__ || null == A || null == j || !Z) return null;
    let v = E.Z.getHighestRole(j),
        h =
            I && !m
                ? P.map((n) => {
                      if ((0, s.fI)(n)) return null;
                      let l = n.managed || !E.Z.isRoleHigher(j, v, n),
                          a = A.includes(n.id);
                      return l && !a
                          ? null
                          : (0, r.jsx)(
                                i.S89,
                                {
                                    id: n.id,
                                    label: () => p(n, M, N),
                                    disabled: l,
                                    action: () => {
                                        A.includes(n.id)
                                            ? (u.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  A.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              S(o.jQ.REMOVE_ROLE))
                                            : (u.Z.updateMemberRoles(t, e, A.concat([n.id]), [n.id], []), S(o.jQ.ADD_ROLE));
                                    },
                                    checked: a
                                },
                                n.id
                            );
                  })
                : P.map((e) =>
                      (0, s.fI)(e) || !A.includes(e.id)
                          ? null
                          : (0, r.jsx)(
                                i.sNh,
                                {
                                    id: e.id,
                                    label: () => p(e, M, N)
                                },
                                e.id
                            )
                  );
    return 0 === (h = h.filter(g.lm)).length
        ? null
        : n
          ? h
          : (0, r.jsx)(i.sNh, {
                id: 'roles',
                label: y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: h.length }),
                children: h
            });
}
