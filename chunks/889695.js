n.d(t, { Z: () => O }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(658722),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(149765),
    u = n(442837),
    d = n(481060),
    p = n(271383),
    m = n(430824),
    f = n(594174),
    h = n(700785),
    g = n(709054),
    _ = n(962086),
    b = n(160404),
    x = n(225675),
    y = n(981631),
    E = n(388032),
    v = n(318135);
function N(e) {
    var t;
    return (0, r.jsx)('span', {
        style: { color: null != (t = e.colorString) ? t : 'currentColor' },
        children: e.name
    });
}
function O(e) {
    let { guildId: t } = e,
        n = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        l = (0, u.e7)([m.Z], () => m.Z.getGuild(t)),
        o = (0, u.e7)([m.Z], () => m.Z.getRoles(t)),
        { impersonateType: O, viewingRoles: j } = (0, u.cj)([b.Z], () => ({
            impersonateType: b.Z.getImpersonateType(t),
            viewingRoles: b.Z.getViewingRoles(t)
        })),
        C = O === x.z.SERVER_SHOP,
        S = (0, u.e7)([p.ZP], () => (null != n ? p.ZP.getTrueMember(t, n.id) : null)),
        [I, T] = (0, d.A7R)(null == j ? [] : g.default.keys(j)),
        P = i.useRef(l);
    i.useEffect(() => {
        let e = {},
            t = P.current;
        if (null != t && null != O) {
            for (let t of I) {
                let n = o[t];
                null != n && (e[t] = n);
            }
            (0, _.Zm)(t.id, {
                type: O,
                roles: e
            });
        }
    }, [I, O, o]);
    let A =
            null != l && null != n && null != S
                ? s()(o)
                      .filter((e) => -1 !== S.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        w = i.useMemo(
            () =>
                null != l && null != n
                    ? Object.values(o)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var t;
                              return !C || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == A ? void 0 : A.id) === e.id || h.r6(l, n.id, A, e))
                    : [],
            [l, n, C, A, o]
        );
    if (null == n || null == l || null == S) return null;
    let Z = {};
    return (S.roles.forEach((e) => {
        let t = o[e];
        null != t && (Z[t.id] = t);
    }),
    c.e$(
        h.I0({
            forceRoles: Z,
            context: l
        }),
        c.$e(y.Plq.MANAGE_GUILD, y.Plq.MANAGE_ROLES)
    ) || l.isOwner(n.id))
        ? (0, r.jsx)('div', {
              className: v.container,
              children: (0, r.jsx)(d.hQY, {
                  placeholder: E.NW.string(E.t.Sojqsr),
                  value: I,
                  onChange: T,
                  autoFocus: !0,
                  children: (e) => {
                      let t = w.reduce(
                              (t, n) => (
                                  a()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              d.lo1,
                                              {
                                                  value: n.id,
                                                  children: [(0, r.jsx)(d.lo1.Label, { children: N(n) }), (0, r.jsx)(d.lo1.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = o[l.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, r.jsxs)(
                                      d.lo1,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(d.lo1.Label, { children: N(n) }), (0, r.jsx)(d.lo1.Checkbox, { checked: !0 })]
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
              children: E.NW.string(E.t.MNSTbW)
          });
}
