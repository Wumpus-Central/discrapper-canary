n.d(t, { m: () => m });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(785007),
    o = n(85463),
    c = n(834730),
    d = n(517837);
function u(e) {
    let { text: t } = e,
        n = (0, o.N)();
    return (0, l.jsx)(c.E, { tag: "span", variant: n, color: "text-overlay-light", className: d.Fi, children: t });
}
function m(e) {
    let { headingComponent: t, headingSubText: n, value: s, planRadioOptions: o, ...m } = e,
        x = r.useMemo(
            () =>
                null == o
                    ? []
                    : o.map((e) => {
                          let t = e.value === s,
                              n = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, l.jsxs)("div", {
                                  className: d.VH,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: d.C2,
                                          children: [
                                              (0, l.jsx)(c.E, {
                                                  variant: "text-md/medium",
                                                  color: n,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, l.jsx)(u, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, l.jsxs)("div", {
                                          className: d.Cq,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: d.SS,
                                                  children: [
                                                      null != e.subTextStrikethrough &&
                                                          (0, l.jsx)(c.E, {
                                                              tag: "span",
                                                              variant: "text-md/medium",
                                                              color: "text-subtle",
                                                              className: d.fF,
                                                              children: e.subTextStrikethrough,
                                                          }),
                                                      (0, l.jsx)(c.E, {
                                                          tag: "span",
                                                          variant: "text-md/medium",
                                                          color: n,
                                                          children: e.subText,
                                                      }),
                                                  ],
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, l.jsx)(c.E, {
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
                              radioBarClassName: a()(d.tG, { [d.uA]: t }),
                          };
                      }),
            [o, s],
        );
    return (0, l.jsxs)("div", {
        children: [
            t,
            null != n &&
                (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", className: d.cm, children: n }),
            (0, l.jsx)(i.$d, { ...m, options: x, value: s, className: d.ul }),
        ],
    });
}
