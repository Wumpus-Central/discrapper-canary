"use strict";
n.d(t, { m: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(510875);
let u = (e) => {
    let { text: t } = e;
    return (0, r.jsx)(o.Text, { tag: "span", variant: "eyebrow", color: "always-white", className: l.Fi, children: t });
};
function c(e) {
    let { headingComponent: t, value: n, planRadioOptions: s, ...c } = e,
        d = i.useMemo(
            () =>
                null == s
                    ? []
                    : s.map((e) => {
                          let t = e.value === n,
                              i = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, r.jsxs)("div", {
                                  className: l.VH,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: l.C2,
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-md/medium",
                                                  color: i,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, r.jsx)(u, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: l.Cq,
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-md/medium",
                                                  color: i,
                                                  children: e.subText,
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, r.jsx)(o.Text, {
                                                      variant: "text-md/medium",
                                                      color: "text-subtle",
                                                      children: e.secondarySubText,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              value: e.value,
                              disabled: e.isDisabled,
                              radioBarClassName: a()(l.tG, { [l.uA]: t }),
                          };
                      }),
            [s, n],
        );
    return (0, r.jsxs)("div", { children: [t, (0, r.jsx)(o.$dE, { ...c, options: d, value: n, className: l.ul })] });
}
