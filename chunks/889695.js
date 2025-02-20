n.d(t, { Z: () => I }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    i = n(658722),
    l = n.n(i),
    a = n(392711),
    c = n.n(a),
    s = n(149765),
    u = n(442837),
    d = n(481060),
    _ = n(271383),
    g = n(430824),
    b = n(594174),
    p = n(700785),
    f = n(709054),
    m = n(962086),
    S = n(160404),
    O = n(225675),
    h = n(981631),
    v = n(388032),
    y = n(214174);
function T(e) {
    var t;
    return (0, r.jsx)('span', {
        style: { color: null !== (t = e.colorString) && void 0 !== t ? t : 'currentColor' },
        children: e.name
    });
}
function I(e) {
    let { guildId: t } = e,
        n = (0, u.e7)([b.default], () => b.default.getCurrentUser()),
        i = (0, u.e7)([g.Z], () => g.Z.getGuild(t)),
        a = (0, u.e7)([g.Z], () => g.Z.getRoles(t)),
        { impersonateType: I, viewingRoles: P } = (0, u.cj)([S.Z], () => ({
            impersonateType: S.Z.getImpersonateType(t),
            viewingRoles: S.Z.getViewingRoles(t)
        })),
        C = I === O.z.SERVER_SHOP,
        E = (0, u.e7)([_.ZP], () => (null != n ? _.ZP.getTrueMember(t, n.id) : null)),
        [x, N] = (0, d.A7R)(null == P ? [] : f.default.keys(P)),
        w = o.useRef(i);
    o.useEffect(() => {
        let e = {},
            t = w.current;
        if (null != t && null != I) {
            for (let t of x) {
                let n = a[t];
                null != n && (e[t] = n);
            }
            (0, m.Zm)(t.id, {
                type: I,
                roles: e
            });
        }
    }, [x, I, a]);
    let L =
            null != i && null != n && null != E
                ? c()(a)
                      .filter((e) => -1 !== E.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        R = o.useMemo(
            () =>
                null != i && null != n
                    ? Object.values(a)
                          .filter((e) => e.id !== i.id)
                          .filter((e) => {
                              var t;
                              return !C || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == L ? void 0 : L.id) === e.id || p.r6(i, n.id, L, e))
                    : [],
            [i, n, C, L, a]
        );
    if (null == n || null == i || null == E) return null;
    let A = {};
    return (E.roles.forEach((e) => {
        let t = a[e];
        null != t && (A[t.id] = t);
    }),
    s.e$(
        p.I0({
            forceRoles: A,
            context: i
        }),
        s.$e(h.Plq.MANAGE_GUILD, h.Plq.MANAGE_ROLES)
    ) || i.isOwner(n.id))
        ? (0, r.jsx)('div', {
              className: y.container,
              children: (0, r.jsx)(d.hQY, {
                  placeholder: v.NW.string(v.t.Sojqsr),
                  value: x,
                  onChange: N,
                  autoFocus: !0,
                  children: (e) => {
                      let t = R.reduce(
                              (t, n) => (
                                  l()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              d.lo1,
                                              {
                                                  value: n.id,
                                                  children: [(0, r.jsx)(d.lo1.Label, { children: T(n) }), (0, r.jsx)(d.lo1.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = a[i.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, r.jsxs)(
                                      d.lo1,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(d.lo1.Label, { children: T(n) }), (0, r.jsx)(d.lo1.Checkbox, { checked: !0 })]
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
              children: v.NW.string(v.t.MNSTbW)
          });
}
