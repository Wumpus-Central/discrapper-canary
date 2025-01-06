n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(658722),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(149765),
    u = n(442837),
    d = n(481060),
    m = n(271383),
    h = n(430824),
    f = n(594174),
    p = n(700785),
    _ = n(709054),
    g = n(962086),
    E = n(160404),
    C = n(225675),
    I = n(981631),
    x = n(388032),
    N = n(22314);
function v(e) {
    var t;
    return (0, i.jsx)('span', {
        style: { color: null !== (t = e.colorString) && void 0 !== t ? t : 'currentColor' },
        children: e.name
    });
}
function T(e) {
    let { guildId: t } = e,
        n = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        l = (0, u.e7)([h.Z], () => h.Z.getGuild(t)),
        o = (0, u.e7)([h.Z], () => h.Z.getRoles(t)),
        { impersonateType: T, viewingRoles: S } = (0, u.cj)([E.Z], () => ({
            impersonateType: E.Z.getImpersonateType(t),
            viewingRoles: E.Z.getViewingRoles(t)
        })),
        A = T === C.z.SERVER_SHOP,
        b = (0, u.e7)([m.ZP], () => (null != n ? m.ZP.getTrueMember(t, n.id) : null)),
        [j, R] = (0, d.useMultiSelect)(null == S ? [] : _.default.keys(S)),
        Z = r.useRef(l);
    r.useEffect(() => {
        let e = {},
            t = Z.current;
        if (null != t && null != T) {
            for (let t of j) {
                let n = o[t];
                null != n && (e[t] = n);
            }
            (0, g.Zm)(t.id, {
                type: T,
                roles: e
            });
        }
    }, [j, T, o]);
    let P =
            null != l && null != n && null != b
                ? s()(o)
                      .filter((e) => -1 !== b.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        L = r.useMemo(
            () =>
                null != l && null != n
                    ? Object.values(o)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var t;
                              return !A || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == P ? void 0 : P.id) === e.id || p.r6(l, n.id, P, e))
                    : [],
            [l, n, A, P, o]
        );
    if (null == n || null == l || null == b) return null;
    let y = {};
    return (b.roles.forEach((e) => {
        let t = o[e];
        null != t && (y[t.id] = t);
    }),
    c.e$(
        p.I0({
            forceRoles: y,
            context: l
        }),
        c.$e(I.Plq.MANAGE_GUILD, I.Plq.MANAGE_ROLES)
    ) || l.isOwner(n.id))
        ? (0, i.jsx)('div', {
              className: N.container,
              children: (0, i.jsx)(d.Combobox, {
                  placeholder: x.intl.string(x.t.Sojqsr),
                  value: j,
                  onChange: R,
                  autoFocus: !0,
                  children: (e) => {
                      let t = L.reduce(
                              (t, n) => (
                                  a()(e.toLowerCase(), n.name.toLowerCase()) &&
                                      t.push(
                                          (0, i.jsxs)(
                                              d.ComboboxItem,
                                              {
                                                  value: n.id,
                                                  children: [(0, i.jsx)(d.ComboboxItem.Label, { children: v(n) }), (0, i.jsx)(d.ComboboxItem.Checkbox, {})]
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
                                  (0, i.jsxs)(
                                      d.ComboboxItem,
                                      {
                                          value: n.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(d.ComboboxItem.Label, { children: v(n) }), (0, i.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      n.id
                                  )
                              ),
                          t
                      );
                  }
              })
          })
        : (0, i.jsx)(d.Text, {
              variant: 'text-md/medium',
              children: x.intl.string(x.t.MNSTbW)
          });
}
