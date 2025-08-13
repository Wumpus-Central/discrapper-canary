n.d(t, { Z: () => S }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(658722),
    a = n.n(o),
    s = n(149765),
    l = n(442837),
    c = n(481060),
    u = n(601964),
    d = n(345162),
    f = n(271383),
    _ = n(485386),
    p = n(430824),
    h = n(594174),
    m = n(700785),
    g = n(709054),
    E = n(962086),
    b = n(160404),
    y = n(225675),
    O = n(981631),
    v = n(388032),
    I = n(329544);
function T(e) {
    var t;
    return (0, r.jsx)("span", {
        style: { color: null != (t = e.colorString) ? t : "currentColor" },
        children: e.name,
    });
}
function S(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        o = (0, l.e7)([p.Z], () => p.Z.getGuild(t)),
        S = (0, l.e7)([_.Z], () => _.Z.getRolesSnapshot(t)),
        A = (0, l.e7)([_.Z], () => _.Z.getSortedRoles(t)),
        { impersonateType: N, viewingRoles: C } = (0, l.cj)([b.Z], () => ({
            impersonateType: b.Z.getImpersonateType(t),
            viewingRoles: b.Z.getViewingRoles(t),
        })),
        R = N === y.z.SERVER_SHOP,
        P = (0, l.e7)([f.ZP], () => (null != n ? f.ZP.getTrueMember(t, n.id) : null)),
        [w, D] = (0, c.A7R)(null == C ? [] : g.default.keys(C)),
        L = i.useRef(o);
    i.useEffect(() => {
        let e = {},
            t = L.current;
        if (null != t && null != N) {
            for (let t of w) {
                let n = S[t];
                null != n && (e[t] = n);
            }
            (0, E.Zm)(t.id, {
                type: N,
                roles: e,
            });
        }
    }, [w, N, S]);
    let x = null != o && null != n && null != P ? A.find((e) => P.roles.includes(e.id)) : void 0,
        M = i.useMemo(
            () =>
                null != o && null != n
                    ? A.filter((e) => !(0, d.fI)(e))
                          .filter((e) => {
                              var t;
                              return !R || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == x ? void 0 : x.id) === e.id || m.r6(o, n.id, x, e))
                    : [],
            [o, n, R, x, A],
        );
    if (null == n || null == o || null == P) return null;
    let j = {};
    return (P.roles.forEach((e) => {
        let t = S[e];
        null != t && (j[t.id] = t);
    }),
    s.e$(
        m.I0({
            forceRoles: j,
            context: o,
        }),
        s.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES),
    ) || (0, u.eM)(o, n))
        ? (0, r.jsx)("div", {
              className: I.container,
              children: (0, r.jsx)(c.hQY, {
                  placeholder: v.intl.string(v.t.Sojqsr),
                  value: w,
                  onChange: D,
                  autoFocus: !0,
                  children: (e) => {
                      let t = M.reduce(
                              (t, n) => (
                                  a()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              c.lo1,
                                              {
                                                  value: n.id,
                                                  children: [
                                                      (0, r.jsx)(c.lo1.Label, { children: T(n) }),
                                                      (0, r.jsx)(c.lo1.Checkbox, {}),
                                                  ],
                                              },
                                              n.id,
                                          ),
                                      ),
                                  t
                              ),
                              [],
                          ),
                          n = S[(0, u.lV)(o)];
                      return (
                          null != n &&
                              t.push(
                                  (0, r.jsxs)(
                                      c.lo1,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [
                                              (0, r.jsx)(c.lo1.Label, { children: T(n) }),
                                              (0, r.jsx)(c.lo1.Checkbox, { checked: !0 }),
                                          ],
                                      },
                                      n.id,
                                  ),
                              ),
                          t
                      );
                  },
              }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              children: v.intl.string(v.t.MNSTbW),
          });
}
