"use strict";
n.d(t, { H: () => a });
var r = n(627968);
n(64700);
var i = n(140735);
function a(e) {
    let {
        name: t,
        form: n,
        disabled: a,
        autoComplete: s,
        selectionMode: o,
        selectedItems: l,
        onSelectionChange: u,
        listItems: c,
    } = e;
    if (null == t && (null == s || "off" === s)) return null;
    function d(e) {
        let t = Array.from(e.target.selectedOptions).map((e) => e.dataset.id);
        u(c.filter((e) => t.includes(e.id)));
    }
    return (0, r.jsx)(i.A, {
        children: (0, r.jsx)("select", {
            "aria-hidden": !0,
            tabIndex: -1,
            disabled: a,
            name: t,
            form: n,
            multiple: "multiple" === o,
            autoComplete: s,
            onChange: d,
            children: c?.map((e) => {
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
