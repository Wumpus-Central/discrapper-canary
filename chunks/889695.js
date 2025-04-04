n.d(t, { Z: () => P }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    i = n(658722),
    a = n.n(i),
    c = n(392711),
    l = n.n(c),
    s = n(149765),
    u = n(442837),
    d = n(481060),
    _ = n(271383),
    b = n(430824),
    g = n(594174),
    f = n(700785),
    p = n(709054),
    m = n(962086),
    h = n(160404),
    O = n(225675),
    C = n(981631),
    S = n(388032),
    v = n(318135);
function y(e) {
    var t;
    return (0, r.jsx)('span', {
        style: { color: null != (t = e.colorString) ? t : 'currentColor' },
        children: e.name
    });
}
function P(e) {
    let { guildId: t } = e,
        n = (0, u.e7)([g.default], () => g.default.getCurrentUser()),
        i = (0, u.e7)([b.Z], () => b.Z.getGuild(t)),
        c = (0, u.e7)([b.Z], () => b.Z.getRoles(t)),
        { impersonateType: P, viewingRoles: x } = (0, u.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(t),
            viewingRoles: h.Z.getViewingRoles(t)
        })),
        T = P === O.z.SERVER_SHOP,
        w = (0, u.e7)([_.ZP], () => (null != n ? _.ZP.getTrueMember(t, n.id) : null)),
        [N, I] = (0, d.A7R)(null == x ? [] : p.default.keys(x)),
        j = o.useRef(i);
    o.useEffect(() => {
        let e = {},
            t = j.current;
        if (null != t && null != P) {
            for (let t of N) {
                let n = c[t];
                null != n && (e[t] = n);
            }
            (0, m.Zm)(t.id, {
                type: P,
                roles: e
            });
        }
    }, [N, P, c]);
    let k =
            null != i && null != n && null != w
                ? l()(c)
                      .filter((e) => -1 !== w.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        E = o.useMemo(
            () =>
                null != i && null != n
                    ? Object.values(c)
                          .filter((e) => e.id !== i.id)
                          .filter((e) => {
                              var t;
                              return !T || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == k ? void 0 : k.id) === e.id || f.r6(i, n.id, k, e))
                    : [],
            [i, n, T, k, c]
        );
    if (null == n || null == i || null == w) return null;
    let R = {};
    return (w.roles.forEach((e) => {
        let t = c[e];
        null != t && (R[t.id] = t);
    }),
    s.e$(
        f.I0({
            forceRoles: R,
            context: i
        }),
        s.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)
    ) || i.isOwner(n.id))
        ? (0, r.jsx)('div', {
              className: v.container,
              children: (0, r.jsx)(d.hQY, {
                  placeholder: S.NW.string(S.t.Sojqsr),
                  value: N,
                  onChange: I,
                  autoFocus: !0,
                  children: (e) => {
                      let t = E.reduce(
                              (t, n) => (
                                  a()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, r.jsxs)(
                                              d.lo1,
                                              {
                                                  value: n.id,
                                                  children: [(0, r.jsx)(d.lo1.Label, { children: y(n) }), (0, r.jsx)(d.lo1.Checkbox, {})]
                                              },
                                              n.id
                                          )
                                      ),
                                  t
                              ),
                              []
                          ),
                          n = c[i.getEveryoneRoleId()];
                      return (
                          null != n &&
                              t.push(
                                  (0, r.jsxs)(
                                      d.lo1,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, r.jsx)(d.lo1.Label, { children: y(n) }), (0, r.jsx)(d.lo1.Checkbox, { checked: !0 })]
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
              children: S.NW.string(S.t.MNSTbW)
          });
}
