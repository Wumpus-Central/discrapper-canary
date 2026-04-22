n.d(t, { m: () => d });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(785007),
    u = n(318626);
let c = (e) => {
    let { text: t } = e;
    return (0, r.jsx)(s.E, { tag: "span", variant: "eyebrow", color: "always-white", className: u.Fi, children: t });
};
function d(e) {
    let { headingComponent: t, headingSubText: n, value: i, planRadioOptions: d, ..._ } = e,
        p = l.useMemo(
            () =>
                null == d
                    ? []
                    : d.map((e) => {
                          let t = e.value === i,
                              n = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, r.jsxs)("div", {
                                  className: u.VH,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: u.C2,
                                          children: [
                                              (0, r.jsx)(s.E, {
                                                  variant: "text-md/medium",
                                                  color: n,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, r.jsx)(c, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: u.Cq,
                                          children: [
                                              (0, r.jsx)(s.E, {
                                                  variant: "text-md/medium",
                                                  color: n,
                                                  children: e.subText,
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, r.jsx)(s.E, {
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
                              radioBarClassName: a()(u.tG, { [u.uA]: t }),
                          };
                      }),
            [d, i],
        );
    return (0, r.jsxs)("div", {
        children: [
            t,
            null != n &&
                (0, r.jsx)(s.E, { variant: "text-sm/medium", color: "text-muted", className: u.cm, children: n }),
            (0, r.jsx)(o.$d, { ..._, options: p, value: i, className: u.ul }),
        ],
    });
}
