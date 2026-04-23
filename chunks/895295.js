"use strict";
n.d(t, { m: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(785007),
    u = n(318626);
let c = (e) => {
    let { text: t } = e;
    return (0, r.jsx)(o.E, { tag: "span", variant: "eyebrow", color: "always-white", className: u.Fi, children: t });
};
function d(e) {
    let { headingComponent: t, headingSubText: n, value: s, planRadioOptions: d, ..._ } = e,
        f = i.useMemo(
            () =>
                null == d
                    ? []
                    : d.map((e) => {
                          let t = e.value === s,
                              n = t ? "text-strong" : "text-subtle";
                          return {
                              name: (0, r.jsxs)("div", {
                                  className: u.VH,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: u.C2,
                                          children: [
                                              (0, r.jsx)(o.E, {
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
                                              (0, r.jsx)(o.E, {
                                                  variant: "text-md/medium",
                                                  color: n,
                                                  children: e.subText,
                                              }),
                                              null != e.secondarySubText &&
                                                  (0, r.jsx)(o.E, {
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
            [d, s],
        );
    return (0, r.jsxs)("div", {
        children: [
            t,
            null != n &&
                (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", className: u.cm, children: n }),
            (0, r.jsx)(l.$d, { ..._, options: f, value: s, className: u.ul }),
        ],
    });
}
