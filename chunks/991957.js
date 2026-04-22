"use strict";
n.d(t, { H: () => s });
var r = n(627968);
n(64700);
var i = n(140735);
function s(e) {
    let {
        name: t,
        form: n,
        disabled: s,
        autoComplete: a,
        selectionMode: o,
        selectedItems: l,
        onSelectionChange: u,
        listItems: d,
    } = e;
    return null == t && (null == a || "off" === a)
        ? null
        : (0, r.jsx)(i.A, {
              children: (0, r.jsx)("select", {
                  "aria-hidden": !0,
                  tabIndex: -1,
                  disabled: s,
                  name: t,
                  form: n,
                  multiple: "multiple" === o,
                  autoComplete: a,
                  onChange: function (e) {
                      let t = Array.from(e.target.selectedOptions).map((e) => e.dataset.id);
                      u(d.filter((e) => t.includes(e.id)));
                  },
                  children: d?.map((e) => {
                      let t = "object" == typeof e.value ? JSON.stringify(e.value) : String(e.value);
                      return (0, r.jsx)(
                          "option",
                          { "data-id": e.id, value: t, selected: l.includes(e), children: e.label },
                          e.id,
                      );
                  }),
              }),
          });
}
