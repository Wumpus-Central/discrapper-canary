n.d(e, { A: () => u });
var s = n(477900);
n(582128);
var r = n(9578),
    a = n(375708),
    t = n(968996);
function u(l) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: n } = l;
    return null == e && null == n
        ? null
        : (0, s.jsxs)("span", {
              className: t.Q,
              children: [
                  null != e && (0, s.jsx)(r.A, { href: e, children: a.intl.string(a.t["8S0kcM"]) }),
                  null != e && null != n && (0, s.jsx)("span", { "aria-disabled": "true", children: "\u2022" }),
                  null != n && (0, s.jsx)(r.A, { href: n, children: a.intl.string(a.t.ZpyeCm) }),
              ],
          });
}
