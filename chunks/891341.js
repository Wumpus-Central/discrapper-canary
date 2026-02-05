"use strict";
n.d(t, { l: () => s });
var r = n(64700),
    i = n(55960),
    a = n(434194);
let s = (e) => {
    let t,
        n = (0, i.g)();
    if (!n.display) return null;
    let { display: s, ...o } = n;
    return (
        (t = "children" in e ? ("function" == typeof e.children ? e.children(o) : e.children) : e.generator(o)),
        r.createElement(a.o.Provider, { value: o }, t)
    );
};
