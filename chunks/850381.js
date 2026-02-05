"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(492917),
    a = n(154672),
    o = n(396681),
    c = n(317940),
    d = n(976860),
    u = n(210714),
    h = n(341371),
    _ = n(714505),
    p = n(652215),
    g = n(985018);
function m(e) {
    let { location: t } = e,
        [n, m] = s.useState(!1),
        { verifySuccess: f, verifyErrors: A, redirectGuildId: E } = (0, r.bG)([h.A], () => h.A.getState());
    s.useEffect(() => {
        let e = (0, o.A)(t);
        a.A.verify(e), (0, u.d)("verify_hub_email");
    }, [t]);
    let x = () => {
        (0, _.A)(E), m(!0);
    };
    return n
        ? (0, i.jsx)(c.A, {
              title: g.intl.string(g.t.csrAMJ),
              subtitle: g.intl.string(g.t["m1+IBn"]),
              buttonText: g.intl.string(g.t.fIv16B),
              onButtonClick: () => (0, d.pX)(p.BVt.CHANNEL(E)),
          })
        : f
          ? (0, i.jsx)(c.A, {
                title: g.intl.string(g.t["dAfGb+"]),
                buttonText: g.intl.string(g.t["uJWIj/"]),
                onButtonClick: x,
                image: (0, i.jsx)(l.bqQ, { alt: g.intl.string(g.t["dAfGb+"]) }),
            })
          : null != A
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
