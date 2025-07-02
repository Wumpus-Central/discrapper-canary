(n.d(t, { Z: () => j }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(658722),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(149765),
    u = n(442837),
    d = n(481060),
    p = n(271383),
    m = n(485386),
    f = n(430824),
    _ = n(594174),
    g = n(700785),
    h = n(709054),
    b = n(962086),
    E = n(160404),
    y = n(225675),
    C = n(981631),
    x = n(388032),
    v = n(318135);
function O(e) {
    var t;
    return (0, r.jsx)('span', {
        style: { color: null != (t = e.colorString) ? t : 'currentColor' },
        children: e.name
    });
}
function j(e) {
    let { guildId: t } = e,
        n = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        l = (0, u.e7)([f.Z], () => f.Z.getGuild(t)),
        o = (0, u.e7)([m.Z], () => m.Z.getRoles(t)),
        { impersonateType: j, viewingRoles: I } = (0, u.cj)([E.Z], () => ({
            impersonateType: E.Z.getImpersonateType(t),
            viewingRoles: E.Z.getViewingRoles(t)
        })),
        S = j === y.z.SERVER_SHOP,
        T = (0, u.e7)([p.ZP], () => (null != n ? p.ZP.getTrueMember(t, n.id) : null)),
        [N, P] = (0, d.A7R)(null == I ? [] : h.default.keys(I)),
        A = i.useRef(l);
    i.useEffect(() => {
        let e = {},
            t = A.current;
        if (null != t && null != j) {
            for (let t of N) {
                let n = o[t];
                null != n && (e[t] = n);
            }
            (0, b.Zm)(t.id, {
                type: j,
                roles: e
            });
        }
    }, [N, j, o]);
    let w =
            null != l && null != n && null != T
                ? s()(o)
                      .filter((e) => -1 !== T.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        Z = i.useMemo(
            () =>
                null != l && null != n
                    ? Object.values(o)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var t;
                              return !S || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == w ? void 0 : w.id) === e.id || g.r6(l, n.id, w, e))
                    : [],
            [l, n, S, w, o]
        );
    if (null == n || null == l || null == T) return null;
    let R = {};
    return (T.roles.forEach((e) => {
        let t = o[e];
        null != t && (R[t.id] = t);
    }),
    c.e$(
        g.I0({
            forceRoles: R,
            context: l
        }),
        c.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)
    ) || l.isOwner(n.id))
        ? (0, r.jsx)('div', {
              className: v.container,
              children: (0, r.jsx)(d.hQY, {
                  placeholder: x.intl.string(x.t.Sojqsr),
                  value: N,
                  onChange: P,
                  autoFocus: !0,
                  children: (e) => {
                      let t = Z.reduce(
                              (t, n) => (
                                  a()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              d.lo1,
                                              {
                                                  value: n.id,
                                                  children: [(0, r.jsx)(d.lo1.Label, { children: O(n) }), (0, r.jsx)(d.lo1.Checkbox, {})]
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
                                          children: [(0, r.jsx)(d.lo1.Label, { children: O(n) }), (0, r.jsx)(d.lo1.Checkbox, { checked: !0 })]
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
              children: x.intl.string(x.t.MNSTbW)
          });
}
