n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(492917),
    a = n(154672),
    o = n(396681),
    c = n(317940),
    u = n(976860),
    d = n(210714),
    h = n(341371),
    f = n(714505),
    p = n(652215),
    g = n(985018);

function m(e) {
    let { location: t } = e,
        [n, m] = i.useState(!1),
        { verifySuccess: A, verifyErrors: x, redirectGuildId: _ } = (0, s.bG)([h.A], () => h.A.getState());
    i.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, d.d)("verify_hub_email");
    }, [t]);
    let E = () => {
        (0, f.A)(_), m(!0);
    };
    return n
        ? (0, r.jsx)(c.A, {
              title: g.intl.string(g.t.csrAMJ),
              subtitle: g.intl.string(g.t["m1+IBn"]),
              buttonText: g.intl.string(g.t.fIv16B),
              onButtonClick: () => (0, u.pX)(p.BVt.CHANNEL(_)),
          })
        : A
          ? (0, r.jsx)(c.A, {
                title: g.intl.string(g.t["dAfGb+"]),
                buttonText: g.intl.string(g.t["uJWIj/"]),
                onButtonClick: E,
                image: (0, r.jsx)(l.bqQ, {
                    alt: g.intl.string(g.t["dAfGb+"]),
                }),
            })
          : null != x
            ? (0, r.jsx)(c.A, {
                  title: g.intl.string(g.t["PCgG3+"]),
                  subtitle: g.intl.string(g.t.tQpeA3),
                  buttonText: g.intl.string(g.t["uJWIj/"]),
                  onButtonClick: E,
              })
            : (0, r.jsx)(c.A, {
                  title: g.intl.string(g.t["0c8+5n"]),
                  subtitle: g.intl.string(g.t.ULTCBE),
                  loading: !0,
              });
}
s.Ay.initialize();
