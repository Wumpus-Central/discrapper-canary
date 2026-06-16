t.d(n, { B: () => r, c: () => a });
var l = t(627968);
function r(e) {
    let { type: n, children: t, value: r, items: a } = e;
    switch (n) {
        case "ordered":
            let s = (r + a.length - 1).toString().length;
            return (0, l.jsx)("ol", { start: r, style: { "--totalCharacters": s }, children: t });
        case "unordered":
            return (0, l.jsx)("ul", { children: t });
    }
}
function a(e) {
    let { children: n } = e;
    return (0, l.jsx)("li", { children: n });
}
t(64700);
