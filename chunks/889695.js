(n.d(t, { Z: () => I }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(658722),
    a = n.n(l),
    o = n(149765),
    s = n(442837),
    c = n(481060),
    u = n(601964),
    d = n(345162),
    p = n(271383),
    m = n(485386),
    f = n(430824),
    _ = n(594174),
    g = n(700785),
    h = n(709054),
    b = n(962086),
    E = n(160404),
    C = n(225675),
    O = n(981631),
    v = n(388032),
    y = n(318135);
function x(e) {
    var t;
    return (0, r.jsx)('span', {
        style: { color: null != (t = e.colorString) ? t : 'currentColor' },
        children: e.name
    });
}
function I(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        l = (0, s.e7)([f.Z], () => f.Z.getGuild(t)),
        I = (0, s.e7)([m.Z], () => m.Z.getRolesSnapshot(t)),
        j = (0, s.e7)([m.Z], () => m.Z.getSortedRoles(t)),
        { impersonateType: S, viewingRoles: T } = (0, s.cj)([E.Z], () => ({
            impersonateType: E.Z.getImpersonateType(t),
            viewingRoles: E.Z.getViewingRoles(t)
        })),
        N = S === C.z.SERVER_SHOP,
        P = (0, s.e7)([p.ZP], () => (null != n ? p.ZP.getTrueMember(t, n.id) : null)),
        [A, w] = (0, c.A7R)(null == T ? [] : h.default.keys(T)),
        Z = i.useRef(l);
    i.useEffect(() => {
        let e = {},
            t = Z.current;
        if (null != t && null != S) {
            for (let t of A) {
                let n = I[t];
                null != n && (e[t] = n);
            }
            (0, b.Zm)(t.id, {
                type: S,
                roles: e
            });
        }
    }, [A, S, I]);
    let R = null != l && null != n && null != P ? j.find((e) => P.roles.includes(e.id)) : void 0,
        D = i.useMemo(
            () =>
                null != l && null != n
                    ? j
                          .filter((e) => !(0, d.fI)(e))
                          .filter((e) => {
                              var t;
                              return !N || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == R ? void 0 : R.id) === e.id || g.r6(l, n.id, R, e))
                    : [],
            [l, n, N, R, j]
        );
    if (null == n || null == l || null == P) return null;
    let L = {};
    return (P.roles.forEach((e) => {
        let t = I[e];
        null != t && (L[t.id] = t);
    }),
    o.e$(
        g.I0({
            forceRoles: L,
            context: l
        }),
        o.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES)
    ) || (0, u.eM)(l, n))
        ? (0, r.jsx)('div', {
              className: y.container,
              children: (0, r.jsx)(c.hQY, {
                  placeholder: v.intl.string(v.t.Sojqsr),
                  value: A,
                  onChange: w,
                  autoFocus: !0,
                  children: (e) => {
                      let t = D.reduce(
                              (t, n) => (
                                  a()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              c.lo1,
                                              {
                                                  value: n.id,
                                                  children: [(0, r.jsx)(c.lo1.Label, { children: x(n) }), (0, r.jsx)(c.lo1.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = I[(0, u.lV)(l)];
                      return (
                          null != n &&
                              t.push(
                                  (0, r.jsxs)(
                                      c.lo1,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(c.lo1.Label, { children: x(n) }), (0, r.jsx)(c.lo1.Checkbox, { checked: !0 })]
                                      },
                                      n.id
                                  )
                              ),
                          t
                      );
                  }
              })
          })
        : (0, r.jsx)(c.Text, {
              variant: 'text-md/medium',
              children: v.intl.string(v.t.MNSTbW)
          });
}
