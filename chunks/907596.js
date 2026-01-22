n.d(t, {
    E: () => u,
    M: () => c,
});
var r = n(408713),
    i = n(297987),
    a = n(17118);
let s = "default",
    o = "",
    l = new WeakMap();

function c(e) {
    if ((0, r.un)()) {
        if ("default" === s) {
            let t = (0, i.TW)(e);
            (o = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = "none");
        }
        s = "disabled";
    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        l.set(e, e.style[t]), (e.style[t] = "none");
    }
}

function u(e) {
    if ((0, r.un)())
        "disabled" === s &&
            ((s = "restoring"),
            setTimeout(() => {
                (0, a.v)(() => {
                    if ("restoring" === s) {
                        let t = (0, i.TW)(e);
                        "none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = o || ""),
                            (o = ""),
                            (s = "default");
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
        let t = l.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        "none" === e.style[n] && (e.style[n] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            l.delete(e);
    }
}
