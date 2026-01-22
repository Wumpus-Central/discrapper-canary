n.d(t, { A: () => A }), n(896048), n(747238);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(557722),
    u = n(628387),
    d = n(148864),
    h = n(146571),
    f = n(854378);
n(53516);
var p = n(985018),
    g = n(20976),
    m = n(473169);
let A = () => {
    let [e, t] = i.useState(""),
        [s, A] = i.useState(""),
        [x, _] = i.useState(!1),
        [E, b] = i.useState(!1),
        [v, j] = i.useState(null),
        [y, S] = i.useState(null),
        N = (0, a.bG)([d.A], () => d.A.getCountryCode()),
        O = N.code.split(" ")[0],
        I = async () => {
            try {
                await c.A.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        T = async () => {
            _(!0);
            try {
                let { token: t } = await c.A.verifyPhone(O + e, s);
                j(null), S(null), b(!0), c.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (j(null), S(e.body.message)) : (j(e.body.phone), S(e.body.code));
            } finally {
                _(!1);
            }
        },
        C = (0, r.jsxs)(f.Ay, {
            children: [
                (0, r.jsx)(f._V, { src: n(142041) }),
                (0, r.jsxs)(f.hE, {
                    className: l()(m.QX, g.Uu, g.wq, g.Hu),
                    children: [
                        p.intl.string(p.t.WWzQta),
                        (0, r.jsx)(o.yr3, {
                            size: "md",
                            color: "currentColor",
                            className: m.oY,
                        }),
                    ],
                }),
            ],
        });
    return E
        ? C
        : (0, r.jsxs)(f.Ay, {
              children: [
                  (0, r.jsx)(f.hE, { children: p.intl.string(p.t.o4JNrO) }),
                  (0, r.jsx)(f.tK, {
                      className: m.Ot,
                      children: p.intl.string(p.t.y0tVbq),
                  }),
                  (0, r.jsxs)(f.eB, {
                      className: m.QX,
                      children: [
                          (0, r.jsx)(h.A, {
                              label: p.intl.string(p.t["eJnn0+"]),
                              alpha2: N.alpha2,
                              countryCode: O,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: u.Pd.PHONE,
                              error: v,
                          }),
                          (0, r.jsx)(f.pd, {
                              className: m.QX,
                              label: p.intl.string(p.t.OdzNbm),
                              value: s,
                              onChange: A,
                              maxLength: 6,
                              error: y,
                          }),
                          (0, r.jsx)(o.QWc, {
                              text: p.intl.string(p.t["5b60gi"]),
                              onClick: I,
                          }),
                          (0, r.jsx)("div", {
                              className: m.QX,
                              children: (0, r.jsx)(o.Button, {
                                  text: p.intl.string(p.t.i4jeWR),
                                  fullWidth: !0,
                                  onClick: T,
                                  loading: x,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
