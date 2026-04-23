"use strict";
n.d(t, { i: () => f });
var r = n(627968),
    i = n(310784),
    s = n.n(i),
    a = n(331322),
    o = n(834730),
    l = n(292666),
    u = n(691885),
    c = n(150934),
    d = n(106236),
    _ = n(895925);
function f(e) {
    let { controls: t, props: n, onPropsChange: i } = e,
        f = (e, t) => {
            i({ ...n, [e]: t });
        },
        h = Object.entries(t);
    return 0 === h.length
        ? null
        : (0, r.jsx)("div", {
              className: _.in,
              children: (0, r.jsx)(a.B, {
                  gap: 16,
                  children: h.map((e) => {
                      let [t, i] = e,
                          a = n[t] ?? i.defaultValue;
                      return (0, r.jsxs)(r.Fragment, {
                          children: [
                              "select" === i.type &&
                                  null != i.options &&
                                  (0, r.jsx)(u.l, {
                                      label: i.label,
                                      value: a,
                                      onSelectionChange: (e) => f(t, e),
                                      options: i.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === i.type &&
                                  (0, r.jsx)(c.S, { checked: a, onChange: (e) => f(t, e), label: i.label }),
                              "text" === i.type &&
                                  (0, r.jsx)(l.k, { value: a, onChange: (e) => f(t, e), label: i.label }),
                              "number" === i.type &&
                                  (0, r.jsx)(l.k, {
                                      type: "number",
                                      value: String(a),
                                      min: i.minValue,
                                      onChange: (e) => f(t, Number(e)),
                                      label: i.label,
                                  }),
                              "slider" === i.type &&
                                  (0, r.jsx)(d.A, {
                                      initialValue: null != a ? Number(a) : 0,
                                      value: null != a ? Number(a) : void 0,
                                      minValue: i.minValue,
                                      maxValue: i.maxValue,
                                      keyboardStep: (i.maxValue - i.minValue) * 0.05,
                                      asValueChanges: (e) => f(t, e),
                                      handleSize: 10,
                                      disabled: !1,
                                      stickToMarkers: !1,
                                      fillStyles: {},
                                      label: i.label,
                                      onValueRender: (e) => String(Math.round(1e3 * e) / 1e3),
                                  }),
                              "color" === i.type &&
                                  (0, r.jsxs)("div", {
                                      className: _.fJ,
                                      children: [
                                          (0, r.jsx)(o.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: i.label,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: _.nY,
                                              children: [
                                                  (0, r.jsx)("input", {
                                                      type: "color",
                                                      className: _.oP,
                                                      value: (function (e) {
                                                          if (null == e || "" === e) return p;
                                                          try {
                                                              return s()(e).hex();
                                                          } catch {
                                                              return p;
                                                          }
                                                      })(a),
                                                      onChange: (e) => f(t, e.target.value),
                                                  }),
                                                  (0, r.jsx)(l.k, { value: a ?? "", onChange: (e) => f(t, e) }),
                                              ],
                                          }),
                                      ],
                                  }),
                          ],
                      });
                  }),
              }),
          });
}
let p = "#000000";
