"use strict";
n.d(t, { i: () => c });
var r = n(627968),
    i = n(310784),
    s = n.n(i),
    a = n(158954),
    o = n(292666),
    l = n(397927),
    u = n(94576);
function c(e) {
    let { controls: t, props: n, onPropsChange: i } = e,
        s = (e, t) => {
            i({ ...n, [e]: t });
        },
        c = Object.entries(t);
    return 0 === c.length
        ? null
        : (0, r.jsx)("div", {
              className: u.in,
              children: (0, r.jsx)(a.BJc, {
                  gap: 16,
                  children: c.map((e) => {
                      let [t, i] = e,
                          c = n[t] ?? i.defaultValue;
                      return (0, r.jsxs)(r.Fragment, {
                          children: [
                              "select" === i.type &&
                                  null != i.options &&
                                  (0, r.jsx)(l.l6P, {
                                      label: i.label,
                                      value: c,
                                      onSelectionChange: (e) => s(t, e),
                                      options: i.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === i.type &&
                                  (0, r.jsx)(l.Checkbox, { checked: c, onChange: (e) => s(t, e), label: i.label }),
                              "text" === i.type &&
                                  (0, r.jsx)(o.k, { value: c, onChange: (e) => s(t, e), label: i.label }),
                              "number" === i.type &&
                                  (0, r.jsx)(o.k, {
                                      type: "number",
                                      value: String(c),
                                      min: i.minValue,
                                      onChange: (e) => s(t, Number(e)),
                                      label: i.label,
                                  }),
                              "slider" === i.type &&
                                  (0, r.jsx)(l.Apm, {
                                      initialValue: null != c ? Number(c) : 0,
                                      value: null != c ? Number(c) : void 0,
                                      minValue: i.minValue,
                                      maxValue: i.maxValue,
                                      keyboardStep: (i.maxValue - i.minValue) * 0.05,
                                      asValueChanges: (e) => s(t, e),
                                      handleSize: 10,
                                      disabled: !1,
                                      stickToMarkers: !1,
                                      fillStyles: {},
                                      label: i.label,
                                      onValueRender: (e) => String(Math.round(1e3 * e) / 1e3),
                                  }),
                              "color" === i.type &&
                                  (0, r.jsxs)("div", {
                                      className: u.fJ,
                                      children: [
                                          (0, r.jsx)(a.EYj, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: i.label,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: u.nY,
                                              children: [
                                                  (0, r.jsx)("input", {
                                                      type: "color",
                                                      className: u.oP,
                                                      value: _(c),
                                                      onChange: (e) => s(t, e.target.value),
                                                  }),
                                                  (0, r.jsx)(o.k, { value: c ?? "", onChange: (e) => s(t, e) }),
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
let d = "#000000";
function _(e) {
    if (null == e || "" === e) return d;
    try {
        return s()(e).hex();
    } catch {
        return d;
    }
}
