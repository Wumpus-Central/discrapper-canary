t.d(n, { Z: () => P });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    a = t(607070),
    u = t(910693),
    o = t(434404),
    s = t(402235),
    d = t(345162),
    c = t(271383),
    g = t(485386),
    Z = t(430824),
    f = t(496675),
    b = t(823379),
    O = t(981631),
    m = t(388032),
    h = t(390099);
function p(e, n, t) {
    var i, a;
    return (0, l.jsxs)("div", {
        className: h.roleRow,
        children: [
            "dot" === n
                ? (0, l.jsx)(r.FhE, {
                      className: h.roleDot,
                      color: null != (i = e.colorString) ? i : O.Pbq,
                      colors: t ? e.colorStrings : null,
                      background: !1,
                      tooltip: !1,
                  })
                : (0, l.jsx)(r.xko, {
                      className: h.roleDot,
                      color: null != (a = e.colorString) ? a : O.Pbq,
                      colors: t ? e.colorStrings : null,
                  }),
            (0, l.jsx)("div", { children: e.name }),
        ],
    });
}
function P(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        P = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
        v = (0, i.e7)([g.Z], () => g.Z.getSortedRoles(n)),
        y = (0, i.e7)([a.Z], () => a.Z.roleStyle),
        N = (0, u.sE)(n, {
            location: h,
            targetUserId: e,
        }),
        {
            userRoles: x,
            isGuildMember: E,
            canManageRoles: _,
        } = (0, i.cj)([c.ZP, f.Z], () => {
            let t = c.ZP.getMember(n, e);
            return {
                userRoles: null != t ? t.roles : [],
                isGuildMember: null != t,
                canManageRoles: null != j && f.Z.can(O.Plq.MANAGE_ROLES, j),
            };
        }, [e, n, j]),
        C = (0, s.ZP)(n, e);
    if (__OVERLAY__ || null == x || null == j || !E) return null;
    let I = f.Z.getHighestRole(j),
        S =
            _ && !P
                ? v.map((t) => {
                      if ((0, d.fI)(t)) return null;
                      let i = t.managed || !f.Z.isRoleHigher(j, I, t),
                          a = x.includes(t.id);
                      return i && !a
                          ? null
                          : (0, l.jsx)(
                                r.S89,
                                {
                                    id: t.id,
                                    label: () => p(t, y, C),
                                    disabled: i,
                                    action: () => {
                                        x.includes(t.id)
                                            ? (o.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  x.filter((e) => e !== t.id),
                                                  [],
                                                  [t.id],
                                              ),
                                              N(u.jQ.REMOVE_ROLE))
                                            : (o.Z.updateMemberRoles(n, e, x.concat([t.id]), [t.id], []),
                                              N(u.jQ.ADD_ROLE));
                                    },
                                    checked: a,
                                },
                                t.id,
                            );
                  })
                : v.map((e) =>
                      (0, d.fI)(e) || !x.includes(e.id)
                          ? null
                          : (0, l.jsx)(
                                r.sNh,
                                {
                                    id: e.id,
                                    label: () => p(e, y, C),
                                },
                                e.id,
                            ),
                  );
    return 0 === (S = S.filter(b.lm)).length
        ? null
        : t
          ? S
          : (0, l.jsx)(r.sNh, {
                id: "roles",
                label: m.intl.formatToPlainString(m.t.PCs0oo, { numRoles: S.length }),
                children: S,
            });
}
