"use strict";
n.d(t, { l: () => a });
var r = n(64700),
    i = n(55960),
    s = n(434194);
let a = (e) => {
    let t,
        n = (0, i.g)();
    if (!n.display) return null;
    let { display: a, ...o } = n;
    return (
        (t = "children" in e ? ("function" == typeof e.children ? e.children(o) : e.children) : e.generator(o)),
        r.createElement(s.o.Provider, { value: o }, t)
    );
};
