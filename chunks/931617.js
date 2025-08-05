t.d(n, { Z: () => j });
var l = t(255367);
t(73800);
var i = t(442837),
    r = t(481060),
    a = t(607070),
    o = t(910693),
    u = t(434404),
    s = t(402235),
    c = t(345162),
    d = t(271383),
    g = t(485386),
    Z = t(430824),
    f = t(496675),
    b = t(823379),
    O = t(981631),
    p = t(388032),
    m = t(895261);
function h(e, n, t) {
    var i, a;
    return (0, l.jsxs)('div', {
        className: m.roleRow,
        children: [
            'dot' === n
                ? (0, l.jsx)(r.FhE, {
                      className: m.roleDot,
                      color: null != (i = e.colorString) ? i : O.Pbq,
                      colors: t ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(r.xko, {
                      className: m.roleDot,
                      color: null != (a = e.colorString) ? a : O.Pbq,
                      colors: t ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function j(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        j = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        P = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
        v = (0, i.e7)([g.Z], () => g.Z.getSortedRoles(n)),
        x = (0, i.e7)([a.Z], () => a.Z.roleStyle),
        y = (0, o.sE)(n, {
            location: m,
            targetUserId: e
        }),
        {
            userRoles: N,
            isGuildMember: E,
            canManageRoles: _
        } = (0, i.cj)(
            [d.ZP, f.Z],
            () => {
                let t = d.ZP.getMember(n, e);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != P && f.Z.can(O.Plq.MANAGE_ROLES, P)
                };
            },
            [e, n, P]
        ),
        C = (0, s.ZP)(n, e);
    if (__OVERLAY__ || null == N || null == P || !E) return null;
    let I = f.Z.getHighestRole(P),
        S =
            _ && !j
                ? v.map((t) => {
                      if ((0, c.fI)(t)) return null;
                      let i = t.managed || !f.Z.isRoleHigher(P, I, t),
                          a = N.includes(t.id);
                      return i && !a
                          ? null
                          : (0, l.jsx)(
                                r.S89,
                                {
                                    id: t.id,
                                    label: () => h(t, x, C),
                                    disabled: i,
                                    action: () => {
                                        N.includes(t.id)
                                            ? (u.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  N.filter((e) => e !== t.id),
                                                  [],
                                                  [t.id]
                                              ),
                                              y(o.jQ.REMOVE_ROLE))
                                            : (u.Z.updateMemberRoles(n, e, N.concat([t.id]), [t.id], []), y(o.jQ.ADD_ROLE));
                                    },
                                    checked: a
                                },
                                t.id
                            );
                  })
                : v.map((e) =>
                      (0, c.fI)(e) || !N.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                r.sNh,
                                {
                                    id: e.id,
                                    label: () => h(e, x, C)
                                },
                                e.id
                            )
                  );
    return 0 === (S = S.filter(b.lm)).length
        ? null
        : t
          ? S
          : (0, l.jsx)(r.sNh, {
                id: 'roles',
                label: p.intl.formatToPlainString(p.t.PCs0oq, { numRoles: S.length }),
                children: S
            });
}
