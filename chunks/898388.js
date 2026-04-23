"use strict";
n.d(t, { z: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(310784),
    l = n.n(o),
    d = n(331322),
    _ = n(834730),
    u = n(292666),
    c = n(691885),
    E = n(150934),
    h = n(106236),
    m = n(895925);
function f(e) {
    let { controls: t, props: n, onPropsChange: r } = e,
        s = (e, t) => {
            r({ ...n, [e]: t });
        },
        a = Object.entries(t);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: m.in,
              children: (0, i.jsx)(d.B, {
                  gap: 16,
                  children: a.map((e) => {
                      let [t, r] = e,
                          a = n[t] ?? r.defaultValue;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              "select" === r.type &&
                                  null != r.options &&
                                  (0, i.jsx)(c.l, {
                                      label: r.label,
                                      value: a,
                                      onSelectionChange: (e) => s(t, e),
                                      options: r.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === r.type &&
                                  (0, i.jsx)(E.S, { checked: a, onChange: (e) => s(t, e), label: r.label }),
                              "text" === r.type &&
                                  (0, i.jsx)(u.k, { value: a, onChange: (e) => s(t, e), label: r.label }),
                              "number" === r.type &&
                                  (0, i.jsx)(u.k, {
                                      type: "number",
                                      value: String(a),
                                      min: r.minValue,
                                      onChange: (e) => s(t, Number(e)),
                                      label: r.label,
                                  }),
                              "slider" === r.type &&
                                  (0, i.jsx)(h.A, {
                                      initialValue: null != a ? Number(a) : 0,
                                      value: null != a ? Number(a) : void 0,
                                      minValue: r.minValue,
                                      maxValue: r.maxValue,
                                      keyboardStep: (r.maxValue - r.minValue) * 0.05,
                                      asValueChanges: (e) => s(t, e),
                                      handleSize: 10,
                                      disabled: !1,
                                      stickToMarkers: !1,
                                      fillStyles: {},
                                      label: r.label,
                                      onValueRender: (e) => String(Math.round(1e3 * e) / 1e3),
                                  }),
                              "color" === r.type &&
                                  (0, i.jsxs)("div", {
                                      className: m.fJ,
                                      children: [
                                          (0, i.jsx)(_.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: r.label,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: m.nY,
                                              children: [
                                                  (0, i.jsx)("input", {
                                                      type: "color",
                                                      className: m.oP,
                                                      value: (function (e) {
                                                          if (null == e || "" === e) return g;
                                                          try {
                                                              return l()(e).hex();
                                                          } catch {
                                                              return g;
                                                          }
                                                      })(a),
                                                      onChange: (e) => s(t, e.target.value),
                                                  }),
                                                  (0, i.jsx)(u.k, { value: a ?? "", onChange: (e) => s(t, e) }),
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
let g = "#000000";
function p(e) {
    let t = e.controls,
        n = {};
    return (
        null != t &&
            Object.entries(t).forEach((e) => {
                let [t, i] = e;
                n[t] = i.defaultValue;
            }),
        n
    );
}
function A(e) {
    let t,
        { story: n, controlsLayout: s } = e,
        [o, l] = r.useState(n.id),
        [d, _] = r.useState(() => p(n));
    o !== n.id && (l(n.id), _(p(n)));
    let u = "hidden" !== s && null != n.controls;
    return (0, i.jsxs)("div", {
        className: a()(m.iW, { [m.vT]: "bottom" === s, [m.Ix]: "right" === s }),
        children: [
            (0, i.jsx)("div", {
                className: m.Ji,
                children: (0, i.jsx)("div", {
                    className: m.Dw,
                    children: ((t = n.component), (0, i.jsx)(t, { ...d }, n.id)),
                }),
            }),
            u &&
                null != n.controls &&
                (0, i.jsx)("div", {
                    className: a()(m.ne, { [m.WK]: "bottom" === s, [m.BT]: "right" === s }),
                    children: (0, i.jsx)(f, { controls: n.controls, props: d, onPropsChange: _ }),
                }),
        ],
    });
}
