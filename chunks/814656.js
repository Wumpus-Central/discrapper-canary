"use strict";
n.d(t, { i: () => l });
var r = n(627968),
    i = n(158954),
    a = n(292666),
    s = n(397927),
    o = n(94576);
function l(e) {
    let { controls: t, props: n, onPropsChange: l } = e,
        u = (e, t) => {
            l({ ...n, [e]: t });
        },
        c = Object.entries(t);
    return 0 === c.length
        ? null
        : (0, r.jsx)("div", {
              className: o.in,
              children: (0, r.jsx)(i.BJc, {
                  gap: 16,
                  children: c.map((e) => {
                      let [t, i] = e,
                          o = n[t] ?? i.defaultValue;
                      return (0, r.jsxs)(r.Fragment, {
                          children: [
                              "select" === i.type &&
                                  null != i.options &&
                                  (0, r.jsx)(s.l6P, {
                                      label: i.label,
                                      value: o,
                                      onSelectionChange: (e) => u(t, e),
                                      options: i.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === i.type &&
                                  (0, r.jsx)(s.Checkbox, { checked: o, onChange: (e) => u(t, e), label: i.label }),
                              "text" === i.type &&
                                  (0, r.jsx)(a.k, { value: o, onChange: (e) => u(t, e), label: i.label }),
                              "number" === i.type &&
                                  (0, r.jsx)(a.k, {
                                      type: "number",
                                      value: String(o),
                                      min: i.minValue,
                                      onChange: (e) => u(t, Number(e)),
                                      label: i.label,
                                  }),
                          ],
                      });
                  }),
              }),
          });
}
