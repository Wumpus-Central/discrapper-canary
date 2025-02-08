n.d(t, { Z: () => S }), n(47120), n(724458), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(658722),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(149765),
    d = n(442837),
    u = n(481060),
    m = n(271383),
    _ = n(430824),
    h = n(594174),
    p = n(700785),
    g = n(709054),
    f = n(962086),
    x = n(160404),
    C = n(225675),
    v = n(981631),
    E = n(388032),
    I = n(22314);
function N(e) {
    var t;
    return (0, i.jsx)('span', {
        style: { color: null !== (t = e.colorString) && void 0 !== t ? t : 'currentColor' },
        children: e.name
    });
}
function S(e) {
    let { guildId: t } = e,
        n = (0, d.e7)([h.default], () => h.default.getCurrentUser()),
        a = (0, d.e7)([_.Z], () => _.Z.getGuild(t)),
        s = (0, d.e7)([_.Z], () => _.Z.getRoles(t)),
        { impersonateType: S, viewingRoles: T } = (0, d.cj)([x.Z], () => ({
            impersonateType: x.Z.getImpersonateType(t),
            viewingRoles: x.Z.getViewingRoles(t)
        })),
        b = S === C.z.SERVER_SHOP,
        A = (0, d.e7)([m.ZP], () => (null != n ? m.ZP.getTrueMember(t, n.id) : null)),
        [j, y] = (0, u.A7R)(null == T ? [] : g.default.keys(T)),
        Z = l.useRef(a);
    l.useEffect(() => {
        let e = {},
            t = Z.current;
        if (null != t && null != S) {
            for (let t of j) {
                let n = s[t];
                null != n && (e[t] = n);
            }
            (0, f.Zm)(t.id, {
                type: S,
                roles: e
            });
        }
    }, [j, S, s]);
    let R =
            null != a && null != n && null != A
                ? o()(s)
                      .filter((e) => -1 !== A.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        L = l.useMemo(
            () =>
                null != a && null != n
                    ? Object.values(s)
                          .filter((e) => e.id !== a.id)
                          .filter((e) => {
                              var t;
                              return !b || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == R ? void 0 : R.id) === e.id || p.r6(a, n.id, R, e))
                    : [],
            [a, n, b, R, s]
        );
    if (null == n || null == a || null == A) return null;
    let P = {};
    return (A.roles.forEach((e) => {
        let t = s[e];
        null != t && (P[t.id] = t);
    }),
    c.e$(
        p.I0({
            forceRoles: P,
            context: a
        }),
        c.$e(v.Plq.MANAGE_GUILD, v.Plq.MANAGE_ROLES)
    ) || a.isOwner(n.id))
        ? (0, i.jsx)('div', {
              className: I.container,
              children: (0, i.jsx)(u.hQY, {
                  placeholder: E.intl.string(E.t.Sojqsr),
                  value: j,
                  onChange: y,
                  autoFocus: !0,
                  children: (e) => {
                      let t = L.reduce(
                              (t, n) => (
                                  r()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, i.jsxs)(
                                              u.lo1,
                                              {
                                                  value: n.id,
                                                  children: [(0, i.jsx)(u.lo1.Label, { children: N(n) }), (0, i.jsx)(u.lo1.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = s[a.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, i.jsxs)(
                                      u.lo1,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(u.lo1.Label, { children: N(n) }), (0, i.jsx)(u.lo1.Checkbox, { checked: !0 })]
                                      },
                                      n.id
                                  )
                              ),
                          t
                      );
                  }
              })
          })
        : (0, i.jsx)(u.Text, {
              variant: 'text-md/medium',
              children: E.intl.string(E.t.MNSTbW)
          });
}
