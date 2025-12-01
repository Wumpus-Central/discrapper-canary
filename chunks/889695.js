n.d(t, { Z: () => A }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(149765),
    o = n(442837),
    s = n(496600),
    l = n(713072),
    c = n(481060),
    u = n(601964),
    d = n(345162),
    f = n(271383),
    p = n(485386),
    _ = n(430824),
    m = n(594174),
    h = n(700785),
    g = n(709054),
    E = n(962086),
    b = n(160404),
    y = n(225675),
    O = n(981631),
    v = n(388032),
    S = n(124650);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function A(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        I = (0, o.e7)([_.Z], () => _.Z.getGuild(t)),
        A = (0, o.e7)([p.Z], () => p.Z.getRolesSnapshot(t)),
        N = (0, o.e7)([p.Z], () => p.Z.getSortedRoles(t)),
        { impersonateType: P, viewingRoles: R } = (0, o.cj)([b.Z], () => ({
            impersonateType: b.Z.getImpersonateType(t),
            viewingRoles: b.Z.getViewingRoles(t),
        })),
        w = P === y.z.SERVER_SHOP,
        D = (0, o.e7)([f.ZP], () => (null != n ? f.ZP.getTrueMember(t, n.id) : null)),
        x = null != I ? A[(0, u.lV)(I)] : null,
        [L, j] = i.useState(() => {
            let e = null == R ? [] : g.default.keys(R);
            return null != x && e.push(x.id), e;
        }),
        M = i.useRef(I);
    i.useEffect(() => {
        let e = {},
            t = M.current;
        if (null != t && null != P) {
            for (let t of L) {
                let n = A[t];
                null != n && (e[t] = n);
            }
            (0, E.Zm)(t.id, {
                type: P,
                roles: e,
            });
        }
    }, [L, P, A]);
    let k = null != I && null != n && null != D ? N.find((e) => D.roles.includes(e.id)) : void 0,
        U = i.useMemo(
            () =>
                null != I && null != n
                    ? N.filter((e) => !(0, d.fI)(e))
                          .filter((e) => {
                              var t;
                              return !w || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == k ? void 0 : k.id) === e.id || h.r6(I, n.id, k, e))
                    : [],
            [I, n, w, k, N],
        ),
        G = i.useMemo(() => {
            let e = Array.from(U).map((e) => ({
                leading: C(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != I &&
                    null != x &&
                    e.push({
                        leading: C(x),
                        value: x.id,
                        label: x.name,
                        id: x.id.toString(),
                        disabled: !0,
                    }),
                e
            );
        }, [U, I, x]);
    if (null == n || null == I || null == D) return null;
    let Z = {};
    return (D.roles.forEach((e) => {
        let t = A[e];
        null != t && (Z[t.id] = t);
    }),
    a.e$(
        h.I0({
            forceRoles: Z,
            context: I,
        }),
        a.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES),
    ) || (0, u.eM)(I, n))
        ? (0, r.jsx)("div", {
              className: S.container,
              children: (0, r.jsxs)(s.uz, {
                  selectionMode: "multiple",
                  options: G,
                  value: L,
                  onSelectionChange: (e) => {
                      j(e);
                  },
                  children: [
                      (0, r.jsx)(s.Ct, {
                          hideTags: !0,
                          autoFocus: !0,
                          placeholder: v.intl.string(v.t.Sojqsr),
                      }),
                      (0, r.jsx)(s.px, { renderListItem: (e) => (0, r.jsx)(l.W, T({}, e)) }),
                  ],
              }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              children: v.intl.string(v.t.MNSTbY),
          });
}
function C(e) {
    return () => {
        var t;
        return (0, r.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("circle", {
                cx: "6",
                cy: "6",
                r: "6",
                fill: null != (t = e.colorString) ? t : "currentColor",
            }),
        });
    };
}
