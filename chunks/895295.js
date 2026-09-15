l.d(t, { m: () => m });
var s = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    i = l(785007),
    c = l(85463),
    d = l(834730),
    u = l(517837);
function o(e) {
    let { text: t } = e,
        l = (0, c.N)();
    return (0, s.jsx)(d.E, { tag: "span", variant: l, color: "text-overlay-light", className: u.Fi, children: t });
}
function m(e) {
    let { headingComponent: t, headingSubText: l, value: a, planRadioOptions: c, ...m } = e,
        x = n.useMemo(
            () =>
                null == c
                    ? []
                    : c.map((e) => {
                          let t = e.value === a,
                              l = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, s.jsxs)("div", {
                                  className: u.VH,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: u.C2,
                                          children: [
                                              (0, s.jsx)(d.E, {
                                                  variant: "text-md/medium",
                                                  color: l,
                                                  children: e.primaryText,
                                              }),
                                              null != e.badgeText && (0, s.jsx)(o, { text: e.badgeText }),
                                          ],
                                      }),
                                      (0, s.jsxs)("div", {
                                          className: u.Cq,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: u.SS,
                                                  children: [
                                                      null != e.subTextStrikethrough &&
                                                          (0, s.jsx)(d.E, {
                                                              tag: "span",
                                                              variant: "text-md/medium",
                                                              color: "text-subtle",
                                                              className: u.fF,
                                                              children: e.subTextStrikethrough,
                                                          }),
                                                      (0, s.jsx)(d.E, {
                                                          tag: "span",
                                                          variant: "text-md/medium",
                                                          color: l,
                                                          children: e.subText,
                                                      }),
                                                  ],
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, s.jsx)(d.E, {
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
                              radioBarClassName: r()(u.tG, { [u.uA]: t }),
                          };
                      }),
            [c, a],
        );
    return (0, s.jsxs)("div", {
        children: [
            t,
            null != l &&
                (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", className: u.cm, children: l }),
            (0, s.jsx)(i.$d, { ...m, options: x, value: a, className: u.ul }),
        ],
    });
}
