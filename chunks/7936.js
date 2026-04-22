"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(628284),
    c = n(123292),
    d = n(821609),
    u = n(557722),
    _ = n(628387),
    h = n(148864),
    m = n(146571),
    p = n(854378);
n(53516);
var g = n(985018),
    A = n(653307),
    f = n(818050);
let x = () => {
    let [e, t] = s.useState(""),
        [r, x] = s.useState(""),
        [E, I] = s.useState(!1),
        [v, N] = s.useState(!1),
        [j, C] = s.useState(null),
        [T, b] = s.useState(null),
        S = (0, a.bG)([h.A], () => h.A.getCountryCode()),
        y = S.code.split(" ")[0],
        R = async () => {
            try {
                await u.A.resendCode(e);
            } catch (e) {
                b(e.body.message);
            }
        },
        w = async () => {
            I(!0);
            try {
                let { token: t } = await u.A.verifyPhone(y + e, r);
                C(null), b(null), N(!0), u.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), b(e.body.message)) : (C(e.body.phone), b(e.body.code));
            } finally {
                I(!1);
            }
        },
        O = (0, i.jsxs)(p.Ay, {
            children: [
                (0, i.jsx)(p._V, { src: n(142041) }),
                (0, i.jsxs)(p.hE, {
                    className: l()(f.QX, A.Uu, A.wq, A.Hu),
                    children: [
                        g.intl.string(g.t.WWzQta),
                        (0, i.jsx)(o.y, { size: "md", color: "currentColor", className: f.oY }),
                    ],
                }),
            ],
        });
    return v
        ? O
        : (0, i.jsxs)(p.Ay, {
              children: [
                  (0, i.jsx)(p.hE, { children: g.intl.string(g.t.o4JNrO) }),
                  (0, i.jsx)(p.tK, { className: f.Ot, children: g.intl.string(g.t.y0tVbq) }),
                  (0, i.jsxs)(p.eB, {
                      className: f.QX,
                      children: [
                          (0, i.jsx)(m.A, {
                              label: g.intl.string(g.t["eJnn0+"]),
                              alpha2: S.alpha2,
                              countryCode: y,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: _.Pd.PHONE,
                              error: j,
                          }),
                          (0, i.jsx)(p.pd, {
                              className: f.QX,
                              label: g.intl.string(g.t.OdzNbm),
                              value: r,
                              onChange: x,
                              maxLength: 6,
                              error: T,
                          }),
                          (0, i.jsx)(c.Q, { text: g.intl.string(g.t["5b60gi"]), onClick: R }),
                          (0, i.jsx)("div", {
                              className: f.QX,
                              children: (0, i.jsx)(d.$, {
                                  text: g.intl.string(g.t.i4jeWR),
                                  fullWidth: !0,
                                  onClick: w,
                                  loading: E,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
