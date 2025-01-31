l.d(n, { Z: () => b });
var t = l(200651);
l(192379);
var i = l(866442),
    r = l(442837),
    a = l(481060),
    d = l(607070),
    s = l(605436),
    u = l(910693),
    o = l(434404),
    c = l(271383),
    Z = l(430824),
    g = l(496675),
    f = l(823379),
    h = l(981631),
    m = l(388032),
    P = l(849324);
function N(e, n) {
    var l, r;
    return (0, t.jsxs)('div', {
        className: P.roleRow,
        children: [
            'dot' === n
                ? (0, t.jsx)(a.FhE, {
                      className: P.roleDot,
                      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, i.Rf)(h.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, t.jsx)(a.xko, {
                      className: P.roleDot,
                      color: null !== (r = e.colorString) && void 0 !== r ? r : (0, i.Rf)(h.p6O)
                  }),
            (0, t.jsx)('div', { children: e.name })
        ]
    });
}
function b(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        P = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        b = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
        x = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
        v = (0, r.e7)([d.Z], () => d.Z.roleStyle),
        C = (0, u.sE)(n, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: E,
            isGuildMember: p,
            canManageRoles: O
        } = (0, r.cj)(
            [c.ZP, g.Z],
            () => {
                let l = c.ZP.getMember(n, e);
                return {
                    userRoles: null != l ? l.roles : [],
                    isGuildMember: null != l,
                    canManageRoles: null != b && g.Z.can(h.Plq.MANAGE_ROLES, b)
                };
            },
            [e, n, b]
        );
    if (__OVERLAY__ || null == E || null == b || !p) return null;
    let j = g.Z.getHighestRole(b),
        T = Object.values(x).filter((e) => !(0, s.pM)(b.id, e.id)),
        _ =
            O && !P
                ? T.map((l) => {
                      let i = l.managed || !g.Z.isRoleHigher(b, j, l),
                          r = -1 !== E.indexOf(l.id);
                      return i && !r
                          ? null
                          : (0, t.jsx)(
                                a.S89,
                                {
                                    id: l.id,
                                    label: () => N(l, v),
                                    disabled: i,
                                    action: () => {
                                        E.includes(l.id)
                                            ? (o.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  E.filter((e) => e !== l.id),
                                                  [],
                                                  [l.id]
                                              ),
                                              C(u.jQ.REMOVE_ROLE))
                                            : (o.Z.updateMemberRoles(n, e, E.concat([l.id]), [l.id], []), C(u.jQ.ADD_ROLE));
                                    },
                                    checked: r
                                },
                                l.id
                            );
                  })
                : T.filter((e) => -1 !== E.indexOf(e.id)).map((e) =>
                      (0, s.pM)(b.id, e.id)
                          ? null
                          : (0, t.jsx)(
                                a.sNh,
                                {
                                    id: e.id,
                                    label: () => N(e, v)
                                },
                                e.id
                            )
                  );
    return 0 === _.filter(f.lm).length
        ? null
        : l
          ? _
          : (0, t.jsx)(a.sNh, {
                id: 'roles',
                label: m.intl.formatToPlainString(m.t.PCs0oq, { numRoles: _.length }),
                children: _
            });
}
