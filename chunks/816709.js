s.d(n, { A: () => t });
var e = s(627968);
s(64700);
var i = s(9578),
    a = s(375708),
    r = s(980988);
function t(l) {
    let { termsOfServiceUrl: n, privacyPolicyUrl: s } = l;
    return null == n && null == s
        ? null
        : (0, e.jsxs)("span", {
              className: r.Q,
              children: [
                  null != n && (0, e.jsx)(i.A, { href: n, children: a.intl.string(a.t["8S0kcM"]) }),
                  null != n && null != s && (0, e.jsx)("span", { "aria-disabled": "true", children: "\u2022" }),
                  null != s && (0, e.jsx)(i.A, { href: s, children: a.intl.string(a.t.ZpyeCm) }),
              ],
          });
}
