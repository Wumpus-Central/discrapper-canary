t.r(n), t.d(n, { default: () => m });
var i = t(627968),
    l = t(64700),
    a = t(873263),
    o = t(718446),
    r = t(899847);
let s = (0, t(945810).mj)({
    name: "2026-06-family-center-connection-prereq",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var u = t(33666),
    d = t(718697),
    c = t(192308),
    C = t(17928),
    E = t(228366);
let N = null;
class f extends C.Ay.PersistedStore {
    static displayName = "FamilyCenterPendingConnectionStore";
    static persistKey = "FamilyCenterPendingConnectionStore";
    initialize(e) {
        N = e ?? null;
    }
    getState() {
        return N;
    }
    getPendingConnection() {
        return N;
    }
}
new f(E.h, {
    FAMILY_CENTER_PENDING_CONNECTION_SET: function (e) {
        let { teenId: n, linkCode: t } = e;
        N = { teenId: n, linkCode: t };
    },
    FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function (e) {
        N = null;
    },
    LOGOUT: function () {
        N = null;
    },
});
var y = t(652215),
    _ = t(355097);
function m() {
    let e = (0, u.A)(),
        { teenId: n, linkCode: C } = (0, a.g)(),
        E = s.useConfig({ location: "FamilyCenterRouter" }).enabled,
        N = "teen" !== e && null != n && null != C;
    return (l.useEffect(() => {
        N &&
            E &&
            null != n &&
            null != C &&
            (r.Ay.setPendingConnection(n, C),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([t.e("29497"), t.e("72416")]).then(t.bind(t, 354902));
                    return (t) => (0, i.jsx)(e, { ...t, userId: n, linkCode: C });
                },
                { modalKey: "family-center-request-modal" },
            ));
    }, [N, E, n, C]),
    N)
        ? (0, i.jsx)(a.rd, { to: y.BVt.FAMILY_CENTER })
        : "teen" === e
          ? (0, i.jsx)(a.rd, { to: (0, o.settingsPathToRoute)(_.od.FAMILY_CENTER) })
          : (0, i.jsx)(d.A, {});
}
