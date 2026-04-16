"use strict";
n.d(t, { m: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(318626);
let u = (e) => {
    let { text: t } = e;
    return (0, r.jsx)(o.Text, { tag: "span", variant: "eyebrow", color: "always-white", className: l.Fi, children: t });
};
function c(e) {
    let { headingComponent: t, headingSubText: n, value: s, planRadioOptions: c, ...d } = e,
        _ = i.useMemo(
            () =>
                null == c
                    ? []
                    : c.map((e) => {
                          let t = e.value === s,
                              n = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, r.jsxs)("div", {
                                  className: l.VH,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: l.C2,
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-md/medium",
                                                  color: n,
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
                                                  color: n,
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
            [c, s],
        );
    return (0, r.jsxs)("div", {
        children: [
            t,
            null != n &&
                (0, r.jsx)(o.Text, { variant: "text-sm/medium", color: "text-muted", className: l.cm, children: n }),
            (0, r.jsx)(o.$dE, { ...d, options: _, value: s, className: l.ul }),
        ],
    });
}
