n.d(t, { Ay: () => I, Cp: () => f });
var i = n(499979),
    r = n(73153),
    a = n(587895),
    s = n(91242),
    l = n(927813),
    o = n(998979),
    d = n(276983),
    c = n(477900);
n(582128);
var u = n(192308),
    _ = n(673953),
    E = n(165610);
let A = new Set(),
    h = l.A.Millis.SECOND;
function f(e, t) {
    return (0, d.yG)(t)
        ? { permission: t, state: o.A.getDecision(e, t) ?? "prompt" }
        : { permission: t, state: "unsupported" };
}
async function I(e) {
    let {
        applicationId: t,
        appName: l = a.A.getApplication(t)?.name,
        iframeId: o,
        modalContextKey: d,
        permissions: I,
    } = e;
    function p() {
        return I.map((e) => f(t, e));
    }
    let m = I.filter((e) => "prompt" === f(t, e).state);
    if (
        0 === m.length ||
        null == l ||
        A.has(t) ||
        !(function (e) {
            if (null == e) return !0;
            let t = s.A.getFrameByIframeId(e);
            return null != t && s.A.isFrameVisible(t.id) && t.data.layoutMode !== E.y0.PIP;
        })(o)
    )
        return (async function () {
            return (
                p().some((e) => {
                    let { state: t } = e;
                    return "granted" !== t;
                }) && (await (0, i.yy)(h)),
                p()
            );
        })();
    A.add(t);
    try {
        let e = await ((e) => {
            let { appName: t, iframeId: i, modalContextKey: r, permissions: a } = e,
                s = null != i ? (0, _.C6)(i) : r;
            return null === s
                ? Promise.resolve(null)
                : new Promise((e) => {
                      let i = null;
                      (0, u.mM)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e(159244),
                                  n.e(621624),
                                  n.e(499941),
                                  n.e(625460),
                              ]).then(n.bind(n, 258655));
                              return (n) =>
                                  (0, c.jsx)(e, {
                                      ...n,
                                      appName: t,
                                      permissions: a,
                                      onDecide: (e) => {
                                          i = e;
                                      },
                                  });
                          },
                          { contextKey: s, dismissable: !1, onCloseCallback: () => e(i) },
                      ).catch(() => e(null));
                  });
        })({ appName: l, iframeId: o, modalContextKey: d, permissions: m });
        null != e &&
            r.h.dispatch({ type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId: t, permissions: m, allowed: e });
    } finally {
        A.delete(t);
    }
    return p();
}
