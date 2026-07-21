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
    ],
    a = new Map();
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if ("u" < typeof document) return { width: 0, height: 0 };
    let t = a.get(e);
    if (null != t) return t;
    let n = document.createElement("div"),
        s = document.createElement("div");
    for (let [e, t] of i) n.style[e] = t;
    for (let [e, t] of r) s.style[e] = t;
    n.appendChild(s), document.body.appendChild(n), (n.className = e);
    let l = { width: n.offsetWidth - n.clientWidth, height: n.offsetHeight - n.clientHeight };
    return document.body.removeChild(n), a.set(e, l), l;
}
