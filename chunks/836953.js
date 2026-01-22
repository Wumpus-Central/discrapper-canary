n.d(t, {
    A: () => h,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(587895),
    s = n(64983),
    o = n(997509),
    c = n(143582),
    u = n(915043),
    d = n(652215),
    p = n(985018),
    f = n(298525);

function h(e) {
    let t,
        { guild: n } = e,
        h = (0, u.$s)(n),
        A = () => (0, c.Hc)(n.id),
        g = i.useMemo(() => new Set(h.map((e) => e.applicationId)), [h]),
        m = (0, l.yK)([a.A], () => {
            let e = [];
            for (let t of g) {
                let n = a.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [g]);
    return 0 === m.length
        ? null
        : ((t =
              1 === m.length
                  ? p.intl.formatToPlainString(p.t["Egq+G/"], {
                        a: m[0].name,
                    })
                  : 2 === m.length
                    ? p.intl.formatToPlainString(p.t.LxU9R3, {
                          a: m[0].name,
                          b: m[1].name,
                      })
                    : 3 === m.length
                      ? p.intl.formatToPlainString(p.t.crKXMC, {
                            a: m[0].name,
                            b: m[1].name,
                            c: m[2].name,
                        })
                      : p.intl.string(p.t.MvfowF)),
          (0, r.jsx)(s.A, {
              guild: n,
              onDismissed: A,
              message: t,
              type: d.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: f,
              onClick: () => {
                  A(), o.A.open(n.id, d.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: p.intl.string(p.t.Rr3MAe),
          }));
}
