"use strict";
n.d(t, { m: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(510875);
let u = (e) => {
    let { text: t } = e;
    return (0, r.jsx)(o.Text, { tag: "span", variant: "eyebrow", color: "always-white", className: l.Fi, children: t });
};
function c(e) {
    let { headingComponent: t, value: n, planRadioOptions: a, ...c } = e,
        d = i.useMemo(
            () =>
                null == a
                    ? []
                    : a.map((e) => ({
                          name: (0, r.jsxs)("div", {
                              className: l.VH,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: l.C2,
                                      children: [
                                          e.primaryText,
                                          null != e.badgeText && (0, r.jsx)(u, { text: e.badgeText }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", { children: e.subText }),
                              ],
                          }),
                          value: e.value,
                          disabled: e.isDisabled,
                          radioBarClassName: s()(l.tG, { [l.uA]: e.value === n }),
                      })),
            [a, n],
        );
    return (0, r.jsxs)("div", { children: [t, (0, r.jsx)(o.$dE, { ...c, options: d, value: n, className: l.ul })] });
}
