"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(713186),
    a = n(154672),
    o = n(396681),
    c = n(317940),
    d = n(976860),
    u = n(210714),
    _ = n(341371),
    h = n(714505),
    m = n(652215),
    p = n(985018);
function g(e) {
    let { location: t } = e,
        [n, g] = s.useState(!1),
        { verifySuccess: A, verifyErrors: f, redirectGuildId: x } = (0, r.bG)([_.A], () => _.A.getState());
    s.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, u.d)("verify_hub_email");
    }, [t]);
    let E = () => {
        (0, h.A)(x), g(!0);
    };
    return n
        ? (0, i.jsx)(c.A, {
              title: p.intl.string(p.t.csrAMJ),
              subtitle: p.intl.string(p.t["m1+IBn"]),
              buttonText: p.intl.string(p.t.fIv16B),
              onButtonClick: () => (0, d.pX)(m.BVt.CHANNEL(x)),
          })
        : A
          ? (0, i.jsx)(c.A, {
                title: p.intl.string(p.t["dAfGb+"]),
                buttonText: p.intl.string(p.t["uJWIj/"]),
                onButtonClick: E,
                image: (0, i.jsx)(l.b, { alt: p.intl.string(p.t["dAfGb+"]) }),
            })
          : null != f
            ? (0, i.jsx)(c.A, {
                  title: p.intl.string(p.t["PCgG3+"]),
                  subtitle: p.intl.string(p.t.tQpeA3),
                  buttonText: p.intl.string(p.t["uJWIj/"]),
                  onButtonClick: E,
              })
            : (0, i.jsx)(c.A, {
                  title: p.intl.string(p.t["0c8+5n"]),
                  subtitle: p.intl.string(p.t.ULTCBE),
                  loading: !0,
              });
}
r.Ay.initialize();
