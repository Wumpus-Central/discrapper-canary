n.d(t, { A: () => _ }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(587895),
    s = n(926466),
    o = n(997509),
    d = n(143582),
    u = n(915043),
    c = n(652215),
    A = n(985018),
    h = n(298525);
function _(e) {
    let t,
        { guild: n } = e,
        _ = (0, u.$s)(n),
        E = () => (0, d.Hc)(n.id),
        p = r.useMemo(() => new Set(_.map((e) => e.applicationId)), [_]),
        m = (0, a.yK)([l.A], () => {
            let e = [];
            for (let t of p) {
                let n = l.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [p]);
    return 0 === m.length
        ? null
        : ((t =
              1 === m.length
                  ? A.intl.formatToPlainString(A.t["Egq+G/"], { a: m[0].name })
                  : 2 === m.length
                    ? A.intl.formatToPlainString(A.t.LxU9R3, { a: m[0].name, b: m[1].name })
                    : 3 === m.length
                      ? A.intl.formatToPlainString(A.t.crKXMC, { a: m[0].name, b: m[1].name, c: m[2].name })
                      : A.intl.string(A.t.MvfowF)),
          (0, i.jsx)(s.A, {
              guild: n,
              onDismissed: E,
              message: t,
              type: c.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: h,
              onClick: () => {
                  E(), o.A.open(n.id, c.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: A.intl.string(A.t.Rr3MAe),
          }));
}
