t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120),
    t(724458),
    t(653041);
var i = t(200651),
    l = t(192379),
    r = t(658722),
    o = t.n(r),
    a = t(392711),
    s = t.n(a),
    c = t(149765),
    d = t(442837),
    u = t(481060),
    b = t(271383),
    g = t(430824),
    m = t(594174),
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
        t = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
        r = (0, d.e7)([g.Z], () => g.Z.getGuild(n)),
        a = (0, d.e7)([g.Z], () => g.Z.getRoles(n)),
        { impersonateType: N, viewingRoles: S } = (0, d.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n)
        })),
        w = N === x.z.SERVER_SHOP,
        Z = (0, d.e7)([b.ZP], () => (null != t ? b.ZP.getTrueMember(n, t.id) : null)),
        [E, R] = (0, u.useMultiSelect)(null == S ? [] : f.default.keys(S)),
        k = l.useRef(r);
    l.useEffect(() => {
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
            null != r && null != t && null != Z
                ? s()(a)
                      .filter((e) => -1 !== Z.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        j = l.useMemo(
            () =>
                null != r && null != t
                    ? Object.values(a)
                          .filter((e) => e.id !== r.id)
                          .filter((e) => {
                              var n;
                              return !w || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == B ? void 0 : B.id) === e.id || p.r6(r, t.id, B, e))
                    : [],
            [r, t, w, B, a]
        );
    if (null == t || null == r || null == Z) return null;
    let O = {};
    return (Z.roles.forEach((e) => {
        let n = a[e];
        null != n && (O[n.id] = n);
    }),
    c.e$(
        p.I0({
            forceRoles: O,
            context: r
        }),
        c.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)
    ) || r.isOwner(t.id))
        ? (0, i.jsx)('div', {
              className: v.container,
              children: (0, i.jsx)(u.Combobox, {
                  placeholder: I.intl.string(I.t.Sojqsr),
                  value: E,
                  onChange: R,
                  autoFocus: !0,
                  children: (e) => {
                      let n = j.reduce(
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
                          t = a[r.getEveryoneRoleId()];
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
