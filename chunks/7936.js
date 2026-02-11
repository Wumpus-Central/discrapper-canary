"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    c = n(557722),
    d = n(628387),
    u = n(148864),
    h = n(146571),
    _ = n(854378);
n(53516);
var p = n(985018),
    g = n(641254),
    m = n(522759);
let f = () => {
    let [e, t] = s.useState(""),
        [r, f] = s.useState(""),
        [A, E] = s.useState(!1),
        [x, v] = s.useState(!1),
        [I, N] = s.useState(null),
        [S, j] = s.useState(null),
        C = (0, a.bG)([u.A], () => u.A.getCountryCode()),
        T = C.code.split(" ")[0],
        y = async () => {
            try {
                await c.A.resendCode(e);
            } catch (e) {
                j(e.body.message);
            }
        },
        b = async () => {
            E(!0);
            try {
                let { token: t } = await c.A.verifyPhone(T + e, r);
                N(null), j(null), v(!0), c.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (N(null), j(e.body.message)) : (N(e.body.phone), j(e.body.code));
            } finally {
                E(!1);
            }
        },
        R = (0, i.jsxs)(_.Ay, {
            children: [
                (0, i.jsx)(_._V, { src: n(142041) }),
                (0, i.jsxs)(_.hE, {
                    className: l()(m.QX, g.Uu, g.wq, g.Hu),
                    children: [
                        p.intl.string(p.t.WWzQta),
                        (0, i.jsx)(o.yr3, { size: "md", color: "currentColor", className: m.oY }),
                    ],
                }),
            ],
        });
    return x
        ? R
        : (0, i.jsxs)(_.Ay, {
              children: [
                  (0, i.jsx)(_.hE, { children: p.intl.string(p.t.o4JNrO) }),
                  (0, i.jsx)(_.tK, { className: m.Ot, children: p.intl.string(p.t.y0tVbq) }),
                  (0, i.jsxs)(_.eB, {
                      className: m.QX,
                      children: [
                          (0, i.jsx)(h.A, {
                              label: p.intl.string(p.t["eJnn0+"]),
                              alpha2: C.alpha2,
                              countryCode: T,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: d.Pd.PHONE,
                              error: I,
                          }),
                          (0, i.jsx)(_.pd, {
                              className: m.QX,
                              label: p.intl.string(p.t.OdzNbm),
                              value: r,
                              onChange: f,
                              maxLength: 6,
                              error: S,
                          }),
                          (0, i.jsx)(o.QWc, { text: p.intl.string(p.t["5b60gi"]), onClick: y }),
                          (0, i.jsx)("div", {
                              className: m.QX,
                              children: (0, i.jsx)(o.Button, {
                                  text: p.intl.string(p.t.i4jeWR),
                                  fullWidth: !0,
                                  onClick: b,
                                  loading: A,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
