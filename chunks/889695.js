(n.d(t, { Z: () => I }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(658722),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(149765),
    u = n(442837),
    d = n(481060),
    p = n(601964),
    m = n(271383),
    f = n(485386),
    h = n(430824),
    g = n(594174),
    _ = n(700785),
    b = n(709054),
    E = n(962086),
    y = n(160404),
    x = n(225675),
    v = n(981631),
    C = n(388032),
    O = n(318135);
function j(e) {
    var t;
    return (0, r.jsx)('span', {
        style: { color: null != (t = e.colorString) ? t : 'currentColor' },
        children: e.name
    });
}
function I(e) {
    let { guildId: t } = e,
        n = (0, u.e7)([g.default], () => g.default.getCurrentUser()),
        l = (0, u.e7)([h.Z], () => h.Z.getGuild(t)),
        o = (0, u.e7)([f.Z], () => f.Z.getRoles(t)),
        { impersonateType: I, viewingRoles: S } = (0, u.cj)([y.Z], () => ({
            impersonateType: y.Z.getImpersonateType(t),
            viewingRoles: y.Z.getViewingRoles(t)
        })),
        T = I === x.z.SERVER_SHOP,
        N = (0, u.e7)([m.ZP], () => (null != n ? m.ZP.getTrueMember(t, n.id) : null)),
        [P, A] = (0, d.A7R)(null == S ? [] : b.default.keys(S)),
        w = i.useRef(l);
    i.useEffect(() => {
        let e = {},
            t = w.current;
        if (null != t && null != I) {
            for (let t of P) {
                let n = o[t];
                null != n && (e[t] = n);
            }
            (0, E.Zm)(t.id, {
                type: I,
                roles: e
            });
        }
    }, [P, I, o]);
    let Z =
            null != l && null != n && null != N
                ? s()(o)
                      .filter((e) => -1 !== N.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        R = i.useMemo(
            () =>
                null != l && null != n
                    ? Object.values(o)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var t;
                              return !T || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == Z ? void 0 : Z.id) === e.id || _.r6(l, n.id, Z, e))
                    : [],
            [l, n, T, Z, o]
        );
    if (null == n || null == l || null == N) return null;
    let L = {};
    return (N.roles.forEach((e) => {
        let t = o[e];
        null != t && (L[t.id] = t);
    }),
    c.e$(
        _.I0({
            forceRoles: L,
            context: l
        }),
        c.$e(v.Plq.MANAGE_GUILD, v.Plq.MANAGE_ROLES)
    ) || (0, p.eM)(l, n))
        ? (0, r.jsx)('div', {
              className: O.container,
              children: (0, r.jsx)(d.hQY, {
                  placeholder: C.intl.string(C.t.Sojqsr),
                  value: P,
                  onChange: A,
                  autoFocus: !0,
                  children: (e) => {
                      let t = R.reduce(
                              (t, n) => (
                                  a()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              d.lo1,
                                              {
                                                  value: n.id,
                                                  children: [(0, r.jsx)(d.lo1.Label, { children: j(n) }), (0, r.jsx)(d.lo1.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = o[(0, p.lV)(l)];
                      return (
                          null != n &&
                              t.push(
                                  (0, r.jsxs)(
                                      d.lo1,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(d.lo1.Label, { children: j(n) }), (0, r.jsx)(d.lo1.Checkbox, { checked: !0 })]
                                      },
                                      n.id
                                  )
                              ),
                          t
                      );
                  }
              })
          })
        : (0, r.jsx)(d.Text, {
              variant: 'text-md/medium',
              children: C.intl.string(C.t.MNSTbW)
          });
}
