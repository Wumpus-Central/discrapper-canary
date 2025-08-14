n.d(t, { Z: () => y });
var l = n(255367);
n(73800);
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
    Z = n(388032),
    P = n(96541);
function p(e, t, n) {
    var r, a;
    return (0, l.jsxs)("div", {
        className: P.roleRow,
        children: [
            "dot" === t
                ? (0, l.jsx)(i.FhE, {
                      className: P.roleDot,
                      color: null != (r = e.colorString) ? r : E.Pbq,
                      colors: n ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1,
                  })
                : (0, l.jsx)(i.xko, {
                      className: P.roleDot,
                      color: null != (a = e.colorString) ? a : E.Pbq,
                      colors: n ? e.colorStrings : null,
                  }),
            (0, l.jsx)("div", { children: e.name }),
        ],
    });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        P = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        y = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, r.e7)([b.Z], () => b.Z.getGuild(t)),
        m = (0, r.e7)([f.Z], () => f.Z.getSortedRoles(t)),
        h = (0, r.e7)([a.Z], () => a.Z.roleStyle),
        v = (0, o.sE)(t, {
            location: P,
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
        A =
            M && !y
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
                                    label: () => p(n, h, N),
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
                                              v(o.jQ.REMOVE_ROLE))
                                            : (u.Z.updateMemberRoles(t, e, _.concat([n.id]), [n.id], []),
                                              v(o.jQ.ADD_ROLE));
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
                                    label: () => p(e, h, N),
                                },
                                e.id,
                            ),
                  );
    return 0 === (A = A.filter(O.lm)).length
        ? null
        : n
          ? A
          : (0, l.jsx)(i.sNh, {
                id: "roles",
                label: Z.intl.formatToPlainString(Z.t.PCs0oq, { numRoles: A.length }),
                children: A,
            });
}
