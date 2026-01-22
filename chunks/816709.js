n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(9578),
    a = n(985018),
    s = n(202509);

function o(e) {
    let { termsOfServiceUrl: t, privacyPolicyUrl: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("span", {
              className: s.Q,
              children: [
                  null != t &&
                      (0, r.jsx)(i.A, {
                          href: t,
                          children: a.intl.string(a.t["8S0kcM"]),
                      }),
                  null != t &&
                      null != n &&
                      (0, r.jsx)("span", {
                          "aria-disabled": "true",
                          children: "•",
                      }),
                  null != n &&
                      (0, r.jsx)(i.A, {
                          href: n,
                          children: a.intl.string(a.t.ZpyeCm),
                      }),
              ],
          });
}
