"use strict";
n.d(t, { A: () => s });
let i = [
        ["position", "absolute"],
        ["top", "-100px"],
        ["left", "-100px"],
        ["width", "100px"],
        ["height", "100px"],
        ["overflow", "scroll"],
    ],
    r = [
        ["width", "200px"],
        ["height", "200px"],
    ];
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = document.createElement("div"),
        n = document.createElement("div");
    for (let [e, n] of i) t.style[e] = n;
    for (let [e, t] of r) n.style[e] = t;
    t.appendChild(n), document.body.appendChild(t), (t.className = e);
    let s = { width: t.offsetWidth - t.clientWidth, height: t.offsetHeight - t.clientHeight };
    return document.body.removeChild(t), s;
}
