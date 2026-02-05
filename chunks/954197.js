"use strict";
n.d(t, { T: () => u, z: () => l });
var r = n(627968),
    i = n(64700),
    a = n(460890),
    s = n(752370),
    o = n(785007);
function l(e) {
    let t = i.useContext(a.VO);
    if (t?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")) return (0, r.jsx)(s.k, { ...e });
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
        u = i.useContext(a.VO);
    return u?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")
        ? (0, r.jsx)(s.g, { disabled: t, isSelected: n })
        : (0, r.jsx)(o.nG, { checked: n, disabled: t, radioItemIconClassName: l });
}
