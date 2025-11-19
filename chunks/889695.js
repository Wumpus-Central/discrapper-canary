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
    _ = n(485386),
    p = n(430824),
    h = n(594174),
    m = n(700785),
    g = n(709054),
    E = n(962086),
    b = n(160404),
    y = n(225675),
    O = n(981631),
    v = n(388032),
    I = n(124650);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        T = (0, o.e7)([p.Z], () => p.Z.getGuild(t)),
        A = (0, o.e7)([_.Z], () => _.Z.getRolesSnapshot(t)),
        N = (0, o.e7)([_.Z], () => _.Z.getSortedRoles(t)),
        { impersonateType: R, viewingRoles: P } = (0, o.cj)([b.Z], () => ({
            impersonateType: b.Z.getImpersonateType(t),
            viewingRoles: b.Z.getViewingRoles(t),
        })),
        D = R === y.z.SERVER_SHOP,
        w = (0, o.e7)([f.ZP], () => (null != n ? f.ZP.getTrueMember(t, n.id) : null)),
        L = null != T ? A[(0, u.lV)(T)] : null,
        [x, M] = i.useState(() => {
            let e = null == P ? [] : g.default.keys(P);
            return null != L && e.push(L.id), e;
        }),
        k = i.useRef(T);
    i.useEffect(() => {
        let e = {},
            t = k.current;
        if (null != t && null != R) {
            for (let t of x) {
                let n = A[t];
                null != n && (e[t] = n);
            }
            (0, E.Zm)(t.id, {
                type: R,
                roles: e,
            });
        }
    }, [x, R, A]);
    let j = null != T && null != n && null != w ? N.find((e) => w.roles.includes(e.id)) : void 0,
        U = i.useMemo(
            () =>
                null != T && null != n
                    ? N.filter((e) => !(0, d.fI)(e))
                          .filter((e) => {
                              var t;
                              return !D || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null;
                          })
                          .filter((e) => (null == j ? void 0 : j.id) === e.id || m.r6(T, n.id, j, e))
                    : [],
            [T, n, D, j, N],
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
                null != T &&
                    null != L &&
                    e.push({
                        leading: C(L),
                        value: L.id,
                        label: L.name,
                        id: L.id.toString(),
                        disabled: !0,
                    }),
                e
            );
        }, [U, T, L]);
    if (null == n || null == T || null == w) return null;
    let B = {};
    return (w.roles.forEach((e) => {
        let t = A[e];
        null != t && (B[t.id] = t);
    }),
    a.e$(
        m.I0({
            forceRoles: B,
            context: T,
        }),
        a.$e(O.Plq.MANAGE_GUILD, O.Plq.MANAGE_ROLES),
    ) || (0, u.eM)(T, n))
        ? (0, r.jsx)("div", {
              className: I.container,
              children: (0, r.jsxs)(s.uz, {
                  selectionMode: "multiple",
                  options: G,
                  value: x,
                  onSelectionChange: (e) => {
                      M(e);
                  },
                  children: [
                      (0, r.jsx)(s.Ct, {
                          hideTags: !0,
                          autoFocus: !0,
                          placeholder: v.intl.string(v.t.Sojqsr),
                      }),
                      (0, r.jsx)(s.px, { renderListItem: (e) => (0, r.jsx)(l.W, S({}, e)) }),
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
