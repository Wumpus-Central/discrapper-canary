t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120),
    t(724458),
    t(653041);
var i = t(200651),
    o = t(192379),
    r = t(658722),
    a = t.n(r),
    l = t(392711),
    c = t.n(l),
    s = t(149765),
    d = t(442837),
    u = t(481060),
    b = t(271383),
    m = t(430824),
    g = t(594174),
    _ = t(700785),
    p = t(709054),
    f = t(962086),
    h = t(160404),
    C = t(225675),
    x = t(981631),
    S = t(388032),
    I = t(947454);
function B(e) {
    var n;
    return (0, i.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function T(e) {
    let { guildId: n } = e,
        t = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        r = (0, d.e7)([m.Z], () => m.Z.getGuild(n)),
        l = (0, d.e7)([m.Z], () => m.Z.getRoles(n)),
        { impersonateType: T, viewingRoles: k } = (0, d.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n)
        })),
        v = T === C.z.SERVER_SHOP,
        w = (0, d.e7)([b.ZP], () => (null != t ? b.ZP.getTrueMember(n, t.id) : null)),
        [N, R] = (0, u.useMultiSelect)(null == k ? [] : p.default.keys(k)),
        Z = o.useRef(r);
    o.useEffect(() => {
        let e = {},
            n = Z.current;
        if (null != n && null != T) {
            for (let n of N) {
                let t = l[n];
                null != t && (e[n] = t);
            }
            (0, f.Zm)(n.id, {
                type: T,
                roles: e
            });
        }
    }, [N, T, l]);
    let E =
            null != r && null != t && null != w
                ? c()(l)
                      .filter((e) => -1 !== w.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        O = o.useMemo(
            () =>
                null != r && null != t
                    ? Object.values(l)
                          .filter((e) => e.id !== r.id)
                          .filter((e) => {
                              var n;
                              return !v || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == E ? void 0 : E.id) === e.id || _.r6(r, t.id, E, e))
                    : [],
            [r, t, v, E, l]
        );
    if (null == t || null == r || null == w) return null;
    let P = {};
    return (w.roles.forEach((e) => {
        let n = l[e];
        null != n && (P[n.id] = n);
    }),
    s.e$(
        _.I0({
            forceRoles: P,
            context: r
        }),
        s.$e(x.Plq.MANAGE_GUILD, x.Plq.MANAGE_ROLES)
    ) || r.isOwner(t.id))
        ? (0, i.jsx)('div', {
              className: I.container,
              children: (0, i.jsx)(u.Combobox, {
                  placeholder: S.intl.string(S.t.Sojqsr),
                  value: N,
                  onChange: R,
                  autoFocus: !0,
                  children: (e) => {
                      let n = O.reduce(
                              (n, t) => (
                                  a()(e.toLowerCase(), t.name.toLowerCase()) &&
                                      n.push(
                                          (0, i.jsxs)(
                                              u.ComboboxItem,
                                              {
                                                  value: t.id,
                                                  children: [(0, i.jsx)(u.ComboboxItem.Label, { children: B(t) }), (0, i.jsx)(u.ComboboxItem.Checkbox, {})]
                                              },
                                              t.id
                                          )
                                      ),
                                  n
                              ),
                              []
                          ),
                          t = l[r.getEveryoneRoleId()];
                      return (
                          null != t &&
                              n.push(
                                  (0, i.jsxs)(
                                      u.ComboboxItem,
                                      {
                                          value: t.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(u.ComboboxItem.Label, { children: B(t) }), (0, i.jsx)(u.ComboboxItem.Checkbox, { checked: !0 })]
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
              children: S.intl.string(S.t.MNSTbW)
          });
}
