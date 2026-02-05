n.d(e, { A: () => u });
var i = n(627968);
n(64700);
var l = n(9578),
    r = n(985018),
    s = n(202509);
function u(t) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: n } = t;
    return null == e && null == n
        ? null
        : (0, i.jsxs)("span", {
              className: s.Q,
              children: [
                  null != e && (0, i.jsx)(l.A, { href: e, children: r.intl.string(r.t["8S0kcM"]) }),
                  null != e && null != n && (0, i.jsx)("span", { "aria-disabled": "true", children: "•" }),
                  null != n && (0, i.jsx)(l.A, { href: n, children: r.intl.string(r.t.ZpyeCm) }),
              ],
          });
}
