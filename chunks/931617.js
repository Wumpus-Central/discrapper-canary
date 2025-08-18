n.d(t, { Z: () => p });
var l = n(951288);
n(647438);
var r = n(442837),
    o = n(481060),
    i = n(607070),
    u = n(910693),
    c = n(434404),
    a = n(402235),
    d = n(345162),
    s = n(271383),
    _ = n(485386),
    b = n(430824),
    f = n(496675),
    E = n(823379),
    g = n(981631),
    O = n(388032),
    v = n(96541);
function M(e, t, n) {
    var r, i;
    return (0, l.jsxs)("div", {
        className: v.roleRow,
        children: [
            "dot" === t
                ? (0, l.jsx)(o.FhE, {
                      className: v.roleDot,
                      color: null != (r = e.colorString) ? r : g.Pbq,
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1,
                  })
                : (0, l.jsx)(o.xko, {
                      className: v.roleDot,
                      color: null != (i = e.colorString) ? i : g.Pbq,
                      colors: n ? e.colorStrings : null,
                  }),
            (0, l.jsx)("div", { children: e.name }),
        ],
    });
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        p = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, r.e7)([b.Z], () => b.Z.getGuild(t)),
        m = (0, r.e7)([_.Z], () => _.Z.getSortedRoles(t)),
        A = (0, r.e7)([i.Z], () => i.Z.roleStyle),
        y = (0, u.sE)(t, {
            location: v,
            targetUserId: e,
        }),
        {
            userRoles: S,
            isGuildMember: R,
            canManageRoles: h,
        } = (0, r.cj)([s.ZP, f.Z], () => {
            let n = s.ZP.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != j && f.Z.can(g.Plq.MANAGE_ROLES, j),
            };
        }, [e, t, j]),
        Z = (0, a.ZP)(t, e);
    if (__OVERLAY__ || null == S || null == j || !R) return null;
    let D = f.Z.getHighestRole(j),
        T =
            h && !p
                ? m.map((n) => {
                      if ((0, d.fI)(n)) return null;
                      let r = n.managed || !f.Z.isRoleHigher(j, D, n),
                          i = S.includes(n.id);
                      return r && !i
                          ? null
                          : (0, l.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => M(n, A, Z),
                                    disabled: r,
                                    action: () => {
                                        S.includes(n.id)
                                            ? (c.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  S.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              y(u.jQ.REMOVE_ROLE))
                                            : (c.Z.updateMemberRoles(t, e, S.concat([n.id]), [n.id], []),
                                              y(u.jQ.ADD_ROLE));
                                    },
                                    checked: i,
                                },
                                n.id,
                            );
                  })
                : m.map((e) =>
                      (0, d.fI)(e) || !S.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: e.id,
                                    label: () => M(e, A, Z),
                                },
                                e.id,
                            ),
                  );
    return 0 === (T = T.filter(E.lm)).length
        ? null
        : n
          ? T
          : (0, l.jsx)(o.sNh, {
                id: "roles",
                label: O.intl.formatToPlainString(O.t.PCs0oq, { numRoles: T.length }),
                children: T,
            });
}
