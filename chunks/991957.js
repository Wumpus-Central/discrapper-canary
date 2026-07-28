"use strict";
n.d(t, { H: () => a });
var i = n(477900);
n(582128);
var r = n(140735);
function a(e) {
    let {
        name: t,
        form: n,
        disabled: a,
        autoComplete: s,
        selectionMode: l,
        selectedItems: o,
        onSelectionChange: d,
        listItems: c,
    } = e;
    return null == t && (null == s || "off" === s)
        ? null
        : (0, i.jsx)(r.A, {
              children: (0, i.jsx)("select", {
                  "aria-hidden": !0,
                  tabIndex: -1,
                  disabled: a,
                  name: t,
                  form: n,
                  multiple: "multiple" === l,
                  autoComplete: s,
                  onChange: function (e) {
                      let t = Array.from(e.target.selectedOptions).map((e) => e.dataset.id);
                      d(c.filter((e) => t.includes(e.id)));
                  },
                  children: c?.map((e) => {
                      let t = "object" == typeof e.value ? JSON.stringify(e.value) : String(e.value);
                      return (0, i.jsx)(
                          "option",
                          { "data-id": e.id, value: t, selected: o.includes(e), children: e.label },
                          e.id,
                      );
                  }),
              }),
          });
}
