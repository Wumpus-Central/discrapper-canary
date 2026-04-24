l.d(t, { m: () => d });
var n = l(627968),
    a = l(64700),
    r = l(503698),
    s = l.n(r),
    i = l(834730),
    c = l(785007),
    o = l(318626);
let u = (e) => {
    let { text: t } = e;
    return (0, n.jsx)(i.E, { tag: "span", variant: "eyebrow", color: "always-white", className: o.Fi, children: t });
};
function d(e) {
    let { headingComponent: t, headingSubText: l, value: r, planRadioOptions: d, ...m } = e,
        x = a.useMemo(
            () =>
                null == d
                    ? []
                    : d.map((e) => {
                          let t = e.value === r,
                              l = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, n.jsxs)("div", {
                                  className: o.VH,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: o.C2,
                                          children: [
                                              (0, n.jsx)(i.E, {
                                                  variant: "text-md/medium",
                                                  color: l,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, n.jsx)(u, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: o.Cq,
                                          children: [
                                              (0, n.jsx)(i.E, {
                                                  variant: "text-md/medium",
                                                  color: l,
                                                  children: e.subText,
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, n.jsx)(i.E, {
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
                              radioBarClassName: s()(o.tG, { [o.uA]: t }),
                          };
                      }),
            [d, r],
        );
    return (0, n.jsxs)("div", {
        children: [
            t,
            null != l &&
                (0, n.jsx)(i.E, { variant: "text-sm/medium", color: "text-muted", className: o.cm, children: l }),
            (0, n.jsx)(c.$d, { ...m, options: x, value: r, className: o.ul }),
        ],
    });
}
