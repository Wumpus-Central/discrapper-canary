t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120),
    t(724458),
    t(653041);
var i = t(200651),
    r = t(192379),
    l = t(658722),
    o = t.n(l),
    a = t(392711),
    s = t.n(a),
    c = t(149765),
    d = t(442837),
    u = t(481060),
    b = t(271383),
    m = t(430824),
    g = t(594174),
    p = t(700785),
    f = t(709054),
    _ = t(962086),
    h = t(160404),
    x = t(225675),
    C = t(981631),
    I = t(388032),
    v = t(22314);
function T(e) {
    var n;
    return (0, i.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function N(e) {
    let { guildId: n } = e,
        t = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        l = (0, d.e7)([m.Z], () => m.Z.getGuild(n)),
        a = (0, d.e7)([m.Z], () => m.Z.getRoles(n)),
        { impersonateType: N, viewingRoles: w } = (0, d.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n)
        })),
        Z = N === x.z.SERVER_SHOP,
        S = (0, d.e7)([b.ZP], () => (null != t ? b.ZP.getTrueMember(n, t.id) : null)),
        [E, R] = (0, u.useMultiSelect)(null == w ? [] : f.default.keys(w)),
        k = r.useRef(l);
    r.useEffect(() => {
        let e = {},
            n = k.current;
        if (null != n && null != N) {
            for (let n of E) {
                let t = a[n];
                null != t && (e[n] = t);
            }
            (0, _.Zm)(n.id, {
                type: N,
                roles: e
            });
        }
    }, [E, N, a]);
    let B =
            null != l && null != t && null != S
                ? s()(a)
                      .filter((e) => -1 !== S.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        O = r.useMemo(
            () =>
                null != l && null != t
                    ? Object.values(a)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var n;
                              return !Z || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == B ? void 0 : B.id) === e.id || p.r6(l, t.id, B, e))
                    : [],
            [l, t, Z, B, a]
        );
    if (null == t || null == l || null == S) return null;
    let j = {};
    return (S.roles.forEach((e) => {
        let n = a[e];
        null != n && (j[n.id] = n);
    }),
    c.e$(
        p.I0({
            forceRoles: j,
            context: l
        }),
        c.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)
    ) || l.isOwner(t.id))
        ? (0, i.jsx)('div', {
              className: v.container,
              children: (0, i.jsx)(u.Combobox, {
                  placeholder: I.intl.string(I.t.Sojqsr),
                  value: E,
                  onChange: R,
                  autoFocus: !0,
                  children: (e) => {
                      let n = O.reduce(
                              (n, t) => (
                                  o()(e.toLowerCase(), t.name.toLowerCase()) &&
                                      n.push(
                                          (0, i.jsxs)(
                                              u.ComboboxItem,
                                              {
                                                  value: t.id,
                                                  children: [(0, i.jsx)(u.ComboboxItem.Label, { children: T(t) }), (0, i.jsx)(u.ComboboxItem.Checkbox, {})]
                                              },
                                              t.id
                                          )
                                      ),
                                  n
                              ),
                              []
                          ),
                          t = a[l.getEveryoneRoleId()];
                      return (
                          null != t &&
                              n.push(
                                  (0, i.jsxs)(
                                      u.ComboboxItem,
                                      {
                                          value: t.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(u.ComboboxItem.Label, { children: T(t) }), (0, i.jsx)(u.ComboboxItem.Checkbox, { checked: !0 })]
                                      },
                                      t.id
                                  )
                              ),
                          n
                      );
                  }
              })
          })
        : (0, i.jsx)(u.Text, {
              variant: 'text-md/medium',
              children: I.intl.string(I.t.MNSTbW)
          });
}
