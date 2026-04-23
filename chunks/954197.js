"use strict";
n.d(t, { T: () => u, z: () => l });
var r = n(627968),
    i = n(64700),
    s = n(460890),
    a = n(752370),
    o = n(785007);
function l(e) {
    let t = i.useContext(s.VO);
    if (t?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")) return (0, r.jsx)(a.k, { ...e });
    let { ...n } = e,
        l = e.options.map((e) => ({ ...e, icon: e.leadingIcon, desc: e.desc })),
        u = {
            ...n,
            options: l,
            errorMessage: e.errorMessage,
            onChange: null != e.onChange ? (t) => e.onChange(t.value) : void 0,
        };
    return (0, r.jsx)(o.$d, { ...u });
}
function u(e) {
    let { disabled: t, checked: n, radioItemIconClassName: l } = e,
        u = i.useContext(s.VO);
    return u?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")
        ? (0, r.jsx)(a.g, { disabled: t, isSelected: n })
        : (0, r.jsx)(o.nG, { checked: n, disabled: t, radioItemIconClassName: l });
}
