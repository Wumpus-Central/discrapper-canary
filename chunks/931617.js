n.d(t, { Z: () => j });
var l = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
    o = n(607070),
    a = n(910693),
    s = n(434404),
    u = n(402235),
    d = n(345162),
    c = n(271383),
    g = n(485386),
    Z = n(430824),
    f = n(496675),
    b = n(823379),
    m = n(981631),
    O = n(388032),
    h = n(895261);
function E(e, t, n) {
    var i, o;
    return (0, l.jsxs)('div', {
        className: h.roleRow,
        children: [
            'dot' === t
                ? (0, l.jsx)(r.FhE, {
                      className: h.roleDot,
                      color: null != (i = e.colorString) ? i : m.Pbq,
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(r.xko, {
                      className: h.roleDot,
                      color: null != (o = e.colorString) ? o : m.Pbq,
                      colors: n ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        j = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        v = (0, i.e7)([Z.Z], () => Z.Z.getGuild(t)),
        P = (0, i.e7)([g.Z], () => g.Z.getSortedRoles(t)),
        p = (0, i.e7)([o.Z], () => o.Z.roleStyle),
        y = (0, a.sE)(t, {
            location: h,
            targetUserId: e
        }),
        {
            userRoles: S,
            isGuildMember: C,
            canManageRoles: M
        } = (0, i.cj)(
            [c.ZP, f.Z],
            () => {
                let n = c.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != v && f.Z.can(m.Plq.MANAGE_ROLES, v)
                };
            },
            [e, t, v]
        ),
        x = (0, u.ZP)(t, e);
    if (__OVERLAY__ || null == S || null == v || !C) return null;
    let I = f.Z.getHighestRole(v),
        N =
            M && !j
                ? P.map((n) => {
                      if ((0, d.fI)(n)) return null;
                      let i = n.managed || !f.Z.isRoleHigher(v, I, n),
                          o = S.includes(n.id);
                      return i && !o
                          ? null
                          : (0, l.jsx)(
                                r.S89,
                                {
                                    id: n.id,
                                    label: () => E(n, p, x),
                                    disabled: i,
                                    action: () => {
                                        S.includes(n.id)
                                            ? (s.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  S.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              y(a.jQ.REMOVE_ROLE))
                                            : (s.Z.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []), y(a.jQ.ADD_ROLE));
                                    },
                                    checked: o
                                },
                                n.id
                            );
                  })
                : P.map((e) =>
                      (0, d.fI)(e) || !S.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                r.sNh,
                                {
                                    id: e.id,
                                    label: () => E(e, p, x)
                                },
                                e.id
                            )
                  );
    return 0 === (N = N.filter(b.lm)).length
        ? null
        : n
          ? N
          : (0, l.jsx)(r.sNh, {
                id: 'roles',
                label: O.intl.formatToPlainString(O.t.PCs0oq, { numRoles: N.length }),
                children: N
            });
}
