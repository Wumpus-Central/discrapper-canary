t.d(n, { Z: () => P });
var l = t(255367);
t(73800);
var i = t(866442),
    r = t(442837),
    a = t(481060),
    o = t(607070),
    u = t(605436),
    s = t(910693),
    c = t(434404),
    d = t(402235),
    g = t(271383),
    Z = t(485386),
    b = t(430824),
    f = t(496675),
    p = t(823379),
    O = t(981631),
    m = t(388032),
    h = t(895261);
function j(e, n, t) {
    var r, o;
    return (0, l.jsxs)('div', {
        className: h.roleRow,
        children: [
            'dot' === n
                ? (0, l.jsx)(a.FhE, {
                      className: h.roleDot,
                      color: null != (r = e.colorString) ? r : (0, i.Rf)(O.p6O),
                      colors: t ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(a.xko, {
                      className: h.roleDot,
                      color: null != (o = e.colorString) ? o : (0, i.Rf)(O.p6O),
                      colors: t ? e.colorStrings : null
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function P(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        h = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        P = (0, r.e7)([b.Z], () => b.Z.getGuild(n)),
        v = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
        x = (0, r.e7)([o.Z], () => o.Z.roleStyle),
        _ = (0, s.sE)(n, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: y,
            isGuildMember: N,
            canManageRoles: E
        } = (0, r.cj)(
            [g.ZP, f.Z],
            () => {
                let t = g.ZP.getMember(n, e);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != P && f.Z.can(O.Plq.MANAGE_ROLES, P)
                };
            },
            [e, n, P]
        ),
        C = (0, d.ZP)(n, e);
    if (__OVERLAY__ || null == y || null == P || !N) return null;
    let I = f.Z.getHighestRole(P),
        S = Object.values(v).filter((e) => !(0, u.pM)(P.id, e.id)),
        T =
            E && !h
                ? S.map((t) => {
                      let i = t.managed || !f.Z.isRoleHigher(P, I, t),
                          r = -1 !== y.indexOf(t.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                a.S89,
                                {
                                    id: t.id,
                                    label: () => j(t, x, C),
                                    disabled: i,
                                    action: () => {
                                        y.includes(t.id)
                                            ? (c.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  y.filter((e) => e !== t.id),
                                                  [],
                                                  [t.id]
                                              ),
                                              _(s.jQ.REMOVE_ROLE))
                                            : (c.Z.updateMemberRoles(n, e, y.concat([t.id]), [t.id], []), _(s.jQ.ADD_ROLE));
                                    },
                                    checked: r
                                },
                                t.id
                            );
                  })
                : S.filter((e) => -1 !== y.indexOf(e.id)).map((e) =>
                      (0, u.pM)(P.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                a.sNh,
                                {
                                    id: e.id,
                                    label: () => j(e, x, C)
                                },
                                e.id
                            )
                  );
    return 0 === T.filter(p.lm).length
        ? null
        : t
          ? T
          : (0, l.jsx)(a.sNh, {
                id: 'roles',
                label: m.intl.formatToPlainString(m.t.PCs0oq, { numRoles: T.length }),
                children: T
            });
}
