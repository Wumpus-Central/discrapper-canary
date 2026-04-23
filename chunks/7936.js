"use strict";
n.d(t, { A: () => E });
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
    g = n(854378);
n(53516);
var p = n(985018),
    A = n(653307),
    f = n(818050);
let E = () => {
    let [e, t] = s.useState(""),
        [r, E] = s.useState(""),
        [x, I] = s.useState(!1),
        [v, N] = s.useState(!1),
        [j, C] = s.useState(null),
        [T, y] = s.useState(null),
        b = (0, a.bG)([h.A], () => h.A.getCountryCode()),
        S = b.code.split(" ")[0],
        R = async () => {
            try {
                await u.A.resendCode(e);
            } catch (e) {
                y(e.body.message);
            }
        },
        O = async () => {
            I(!0);
            try {
                let { token: t } = await u.A.verifyPhone(S + e, r);
                C(null), y(null), N(!0), u.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), y(e.body.message)) : (C(e.body.phone), y(e.body.code));
            } finally {
                I(!1);
            }
        },
        L = (0, i.jsxs)(g.Ay, {
            children: [
                (0, i.jsx)(g._V, { src: n(142041) }),
                (0, i.jsxs)(g.hE, {
                    className: l()(f.QX, A.Uu, A.wq, A.Hu),
                    children: [
                        p.intl.string(p.t.WWzQta),
                        (0, i.jsx)(o.y, { size: "md", color: "currentColor", className: f.oY }),
                    ],
                }),
            ],
        });
    return v
        ? L
        : (0, i.jsxs)(g.Ay, {
              children: [
                  (0, i.jsx)(g.hE, { children: p.intl.string(p.t.o4JNrO) }),
                  (0, i.jsx)(g.tK, { className: f.Ot, children: p.intl.string(p.t.y0tVbq) }),
                  (0, i.jsxs)(g.eB, {
                      className: f.QX,
                      children: [
                          (0, i.jsx)(m.A, {
                              label: p.intl.string(p.t["eJnn0+"]),
                              alpha2: b.alpha2,
                              countryCode: S,
                              value: e,
                              autoComplete: "off",
                              spellCheck: "false",
                              onChange: t,
                              forceMode: _.Pd.PHONE,
                              error: j,
                          }),
                          (0, i.jsx)(g.pd, {
                              className: f.QX,
                              label: p.intl.string(p.t.OdzNbm),
                              value: r,
                              onChange: E,
                              maxLength: 6,
                              error: T,
                          }),
                          (0, i.jsx)(c.Q, { text: p.intl.string(p.t["5b60gi"]), onClick: R }),
                          (0, i.jsx)("div", {
                              className: f.QX,
                              children: (0, i.jsx)(d.$, {
                                  text: p.intl.string(p.t.i4jeWR),
                                  fullWidth: !0,
                                  onClick: O,
                                  loading: x,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
