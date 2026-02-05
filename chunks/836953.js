n.d(t, { A: () => _ }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(587895),
    s = n(64983),
    o = n(997509),
    d = n(143582),
    c = n(915043),
    u = n(652215),
    A = n(985018),
    h = n(298525);
function _(e) {
    let t,
        { guild: n } = e,
        _ = (0, c.$s)(n),
        m = () => (0, d.Hc)(n.id),
        p = r.useMemo(() => new Set(_.map((e) => e.applicationId)), [_]),
        g = (0, a.yK)([l.A], () => {
            let e = [];
            for (let t of p) {
                let n = l.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [p]);
    return 0 === g.length
        ? null
        : ((t =
              1 === g.length
                  ? A.intl.formatToPlainString(A.t["Egq+G/"], { a: g[0].name })
                  : 2 === g.length
                    ? A.intl.formatToPlainString(A.t.LxU9R3, { a: g[0].name, b: g[1].name })
                    : 3 === g.length
                      ? A.intl.formatToPlainString(A.t.crKXMC, { a: g[0].name, b: g[1].name, c: g[2].name })
                      : A.intl.string(A.t.MvfowF)),
          (0, i.jsx)(s.A, {
              guild: n,
              onDismissed: m,
              message: t,
              type: u.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: h,
              onClick: () => {
                  m(), o.A.open(n.id, u.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: A.intl.string(A.t.Rr3MAe),
          }));
}
