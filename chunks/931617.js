n.d(t, { Z: () => P });
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    a = n(607070),
    o = n(910693),
    u = n(434404),
    c = n(402235),
    s = n(345162),
    d = n(271383),
    f = n(485386),
    b = n(430824),
    g = n(496675),
    O = n(823379),
    E = n(981631),
    y = n(388032),
    p = n(96541);
function Z(e, t, n) {
    var r, a;
    return (0, l.jsxs)("div", {
        className: p.roleRow,
        children: [
            "dot" === t
                ? (0, l.jsx)(i.FhE, {
                      className: p.roleDot,
                      color: null != (r = e.colorString) ? r : E.Pbq,
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1,
                  })
                : (0, l.jsx)(i.xko, {
                      className: p.roleDot,
                      color: null != (a = e.colorString) ? a : E.Pbq,
                      colors: n ? e.colorStrings : null,
                  }),
            (0, l.jsx)("div", { children: e.name }),
        ],
    });
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        P = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, r.e7)([b.Z], () => b.Z.getGuild(t)),
        m = (0, r.e7)([f.Z], () => f.Z.getSortedRoles(t)),
        v = (0, r.e7)([a.Z], () => a.Z.roleStyle),
        h = (0, o.sE)(t, {
            location: p,
            targetUserId: e,
        }),
        {
            userRoles: _,
            isGuildMember: S,
            canManageRoles: M,
        } = (0, r.cj)([d.ZP, g.Z], () => {
            let n = d.ZP.getMember(t, e);
            return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != j && g.Z.can(E.Plq.MANAGE_ROLES, j),
            };
        }, [e, t, j]),
        N = (0, c.ZP)(t, e);
    if (__OVERLAY__ || null == _ || null == j || !S) return null;
    let C = g.Z.getHighestRole(j),
        I =
            M && !P
                ? m.map((n) => {
                      if ((0, s.fI)(n)) return null;
                      let r = n.managed || !g.Z.isRoleHigher(j, C, n),
                          a = _.includes(n.id);
                      return r && !a
                          ? null
                          : (0, l.jsx)(
                                i.S89,
                                {
                                    id: n.id,
                                    label: () => Z(n, v, N),
                                    disabled: r,
                                    action: () => {
                                        _.includes(n.id)
                                            ? (u.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  _.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id],
                                              ),
                                              h(o.jQ.REMOVE_ROLE))
                                            : (u.Z.updateMemberRoles(t, e, _.concat([n.id]), [n.id], []),
                                              h(o.jQ.ADD_ROLE));
                                    },
                                    checked: a,
                                },
                                n.id,
                            );
                  })
                : m.map((e) =>
                      (0, s.fI)(e) || !_.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                i.sNh,
                                {
                                    id: e.id,
                                    label: () => Z(e, v, N),
                                },
                                e.id,
                            ),
                  );
    return 0 === (I = I.filter(O.lm)).length
        ? null
        : n
          ? I
          : (0, l.jsx)(i.sNh, {
                id: "roles",
                label: y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: I.length }),
                children: I,
            });
}
