"use strict";
n.d(t, { A: () => p });
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
    g = n(985018);
function p(e) {
    let { location: t } = e,
        [n, p] = s.useState(!1),
        { verifySuccess: A, verifyErrors: f, redirectGuildId: E } = (0, r.bG)([_.A], () => _.A.getState());
    s.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, u.d)("verify_hub_email");
    }, [t]);
    let x = () => {
        (0, h.A)(E), p(!0);
    };
    return n
        ? (0, i.jsx)(c.A, {
              title: g.intl.string(g.t.csrAMJ),
              subtitle: g.intl.string(g.t["m1+IBn"]),
              buttonText: g.intl.string(g.t.fIv16B),
              onButtonClick: () => (0, d.pX)(m.BVt.CHANNEL(E)),
          })
        : A
          ? (0, i.jsx)(c.A, {
                title: g.intl.string(g.t["dAfGb+"]),
                buttonText: g.intl.string(g.t["uJWIj/"]),
                onButtonClick: x,
                image: (0, i.jsx)(l.b, { alt: g.intl.string(g.t["dAfGb+"]) }),
            })
          : null != f
            ? (0, i.jsx)(c.A, {
                  title: g.intl.string(g.t["PCgG3+"]),
                  subtitle: g.intl.string(g.t.tQpeA3),
                  buttonText: g.intl.string(g.t["uJWIj/"]),
                  onButtonClick: x,
              })
            : (0, i.jsx)(c.A, {
                  title: g.intl.string(g.t["0c8+5n"]),
                  subtitle: g.intl.string(g.t.ULTCBE),
                  loading: !0,
              });
}
r.Ay.initialize();
