t.d(n, { Z: () => x }), t(47120), t(724458), t(653041);
var i = t(200651),
    o = t(192379),
    l = t(658722),
    r = t.n(l),
    a = t(392711),
    c = t.n(a),
    s = t(149765),
    d = t(442837),
    u = t(481060),
    _ = t(271383),
    g = t(430824),
    p = t(594174),
    m = t(700785),
    b = t(709054),
    f = t(962086),
    S = t(160404),
    h = t(225675),
    I = t(981631),
    C = t(388032),
    v = t(22314);
function T(e) {
    var n;
    return (0, i.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function x(e) {
    let { guildId: n } = e,
        t = (0, d.e7)([p.default], () => p.default.getCurrentUser()),
        l = (0, d.e7)([g.Z], () => g.Z.getGuild(n)),
        a = (0, d.e7)([g.Z], () => g.Z.getRoles(n)),
        { impersonateType: x, viewingRoles: R } = (0, d.cj)([S.Z], () => ({
            impersonateType: S.Z.getImpersonateType(n),
            viewingRoles: S.Z.getViewingRoles(n)
        })),
        O = x === h.z.SERVER_SHOP,
        E = (0, d.e7)([_.ZP], () => (null != t ? _.ZP.getTrueMember(n, t.id) : null)),
        [B, P] = (0, u.A7R)(null == R ? [] : b.default.keys(R)),
        y = o.useRef(l);
    o.useEffect(() => {
        let e = {},
            n = y.current;
        if (null != n && null != x) {
            for (let n of B) {
                let t = a[n];
                null != t && (e[n] = t);
            }
            (0, f.Zm)(n.id, {
                type: x,
                roles: e
            });
        }
    }, [B, x, a]);
    let L =
            null != l && null != t && null != E
                ? c()(a)
                      .filter((e) => -1 !== E.roles.indexOf(e.id))
                      .sortBy((e) => -e.position)
                      .first()
                : void 0,
        k = o.useMemo(
            () =>
                null != l && null != t
                    ? Object.values(a)
                          .filter((e) => e.id !== l.id)
                          .filter((e) => {
                              var n;
                              return !O || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == L ? void 0 : L.id) === e.id || m.r6(l, t.id, L, e))
                    : [],
            [l, t, O, L, a]
        );
    if (null == t || null == l || null == E) return null;
    let w = {};
    return (E.roles.forEach((e) => {
        let n = a[e];
        null != n && (w[n.id] = n);
    }),
    s.e$(
        m.I0({
            forceRoles: w,
            context: l
        }),
        s.$e(I.Plq.MANAGE_GUILD, I.Plq.MANAGE_ROLES)
    ) || l.isOwner(t.id))
        ? (0, i.jsx)('div', {
              className: v.container,
              children: (0, i.jsx)(u.hQY, {
                  placeholder: C.intl.string(C.t.Sojqsr),
                  value: B,
                  onChange: P,
                  autoFocus: !0,
                  children: (e) => {
                      let n = k.reduce(
                              (n, t) => (
                                  r()(e.toLowerCase(), t.name.toLowerCase()) &&
                                      n.push(
                                          (0, i.jsxs)(
                                              u.lo1,
                                              {
                                                  value: t.id,
                                                  children: [(0, i.jsx)(u.lo1.Label, { children: T(t) }), (0, i.jsx)(u.lo1.Checkbox, {})]
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
                                      u.lo1,
                                      {
                                          value: t.id,
                                          disabled: !0,
                                          children: [(0, i.jsx)(u.lo1.Label, { children: T(t) }), (0, i.jsx)(u.lo1.Checkbox, { checked: !0 })]
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
              children: C.intl.string(C.t.MNSTbW)
          });
}
