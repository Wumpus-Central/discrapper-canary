"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var s = n(9578),
    r = n(985018),
    a = n(980988);
function l(e) {
    let { termsOfServiceUrl: t, privacyPolicyUrl: n } = e;
    return null == t && null == n
        ? null
        : (0, i.jsxs)("span", {
              className: a.Q,
              children: [
                  null != t && (0, i.jsx)(s.A, { href: t, children: r.intl.string(r.t["8S0kcM"]) }),
                  null != t && null != n && (0, i.jsx)("span", { "aria-disabled": "true", children: "•" }),
                  null != n && (0, i.jsx)(s.A, { href: n, children: r.intl.string(r.t.ZpyeCm) }),
              ],
          });
}
