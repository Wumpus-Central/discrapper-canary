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
    b = t(496675),
    f = t(823379),
    p = t(981631),
    m = t(388032),
    O = t(895261);
function h(e, n, t) {
    var i, a;
    return (0, l.jsxs)('div', {
        className: O.roleRow,
        children: [
            'dot' === n
                ? (0, l.jsx)(r.FhE, {
                      className: O.roleDot,
                      color: null != (i = e.colorString) ? i : p.Pbq,
                      colors: t ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(r.xko, {
                      className: O.roleDot,
                      color: null != (a = e.colorString) ? a : p.Pbq,
                      colors: t ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function j(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        O = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        j = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        P = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
        v = (0, i.e7)([g.Z], () => g.Z.getSortedRoles(n)),
        x = (0, i.e7)([a.Z], () => a.Z.roleStyle),
        _ = (0, o.sE)(n, {
            location: O,
            targetUserId: e
        }),
        {
            userRoles: y,
            isGuildMember: N,
            canManageRoles: E
        } = (0, i.cj)(
            [d.ZP, b.Z],
            () => {
                let t = d.ZP.getMember(n, e);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != P && b.Z.can(p.Plq.MANAGE_ROLES, P)
                };
            },
            [e, n, P]
        ),
        C = (0, s.ZP)(n, e);
    if (__OVERLAY__ || null == y || null == P || !N) return null;
    let I = b.Z.getHighestRole(P),
        S =
            E && !j
                ? v.map((t) => {
                      if ((0, c.fI)(t)) return null;
                      let i = t.managed || !b.Z.isRoleHigher(P, I, t),
                          a = y.includes(t.id);
                      return i && !a
                          ? null
                          : (0, l.jsx)(
                                r.S89,
                                {
                                    id: t.id,
                                    label: () => h(t, x, C),
                                    disabled: i,
                                    action: () => {
                                        y.includes(t.id)
                                            ? (u.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  y.filter((e) => e !== t.id),
                                                  [],
                                                  [t.id]
                                              ),
                                              _(o.jQ.REMOVE_ROLE))
                                            : (u.Z.updateMemberRoles(n, e, y.concat([t.id]), [t.id], []), _(o.jQ.ADD_ROLE));
                                    },
                                    checked: a
                                },
                                t.id
                            );
                  })
                : v.map((e) =>
                      (0, c.fI)(e) || !y.includes(e.id)
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
    return 0 === (S = S.filter(f.lm)).length
        ? null
        : t
          ? S
          : (0, l.jsx)(r.sNh, {
                id: 'roles',
                label: m.intl.formatToPlainString(m.t.PCs0oq, { numRoles: S.length }),
                children: S
            });
}
