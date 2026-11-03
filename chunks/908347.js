t.d(n, { B: () => u, c: () => i });
var l = t(477900);
t(582128);
var r = t(78377),
    a = t(165648);
function u(e) {
    let { type: n, children: t, value: u, items: i } = e,
        s = (0, r.p)()?.formatInline === !0 ? a.tZ : void 0;
    switch (n) {
        case "ordered":
            let c = (u + i.length - 1).toString().length;
            return (0, l.jsx)("ol", {
                start: u,
                className: s,
                style: { "--totalCharacters": c, "--olCounterStart": u - 1 },
                children: t,
            });
        case "unordered":
            return (0, l.jsx)("ul", { className: s, children: t });
    }
}
function i(e) {
    let { children: n } = e;
    return (0, l.jsx)("li", { children: n });
}
