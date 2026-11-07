var i = n(499979),
    r = n(73153),
    a = n(587895),
    s = n(91242),
    l = n(927813),
    o = n(998979),
    d = n(276983),
    c = n(947980),
    u = n(165610);
let _ = new Set(),
    E = l.A.Millis.SECOND;
function A(e, t) {
    return (0, d.yG)(t)
        ? { permission: t, state: o.A.getDecision(e, t) ?? "prompt" }
        : { permission: t, state: "unsupported" };
}
n.d(
    t,
    {},
    {
        Ay: async function (e) {
            let {
                applicationId: t,
                appName: n = a.A.getApplication(t)?.name,
                iframeId: l,
                modalContextKey: o,
                permissions: d,
            } = e;
            function f() {
                return d.map((e) => A(t, e));
            }
            let h = d.filter((e) => "prompt" === A(t, e).state);
            if (
                0 === h.length ||
                null == n ||
                _.has(t) ||
                !(function (e) {
                    if (null == e) return !0;
                    let t = s.A.getFrameByIframeId(e);
                    return null != t && s.A.isFrameVisible(t.id) && t.data.layoutMode !== u.y0.PIP;
                })(l)
            )
                return (async function () {
                    return (
                        f().some((e) => {
                            let { state: t } = e;
                            return "granted" !== t;
                        }) && (await (0, i.yy)(E)),
                        f()
                    );
                })();
            _.add(t);
            try {
                let e = await (0, c.A)({ appName: n, iframeId: l, modalContextKey: o, permissions: h });
                null != e &&
                    r.h.dispatch({
                        type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
                        applicationId: t,
                        permissions: h,
                        allowed: e,
                    });
            } finally {
                _.delete(t);
            }
            return f();
        },
        Cp: A,
    },
);
