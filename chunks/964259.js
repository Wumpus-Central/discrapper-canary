r.d(t, { E: () => c, M: () => u });
var n = r(143761),
    i = r(644255),
    o = r(570340);
let a = "default",
    s = "",
    l = new WeakMap();
function u(e) {
    if ((0, i.un)() && (0, i.Tc)()) {
        if ("default" === a) {
            let t = (0, n.TW)(e);
            ((s = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = "none"));
        }
        a = "disabled";
    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        (l.set(e, e.style[t]), (e.style[t] = "none"));
    }
}
function c(e) {
    if ((0, i.un)() && (0, i.Tc)())
        "disabled" === a &&
            ((a = "restoring"),
            setTimeout(() => {
                (0, o.v)(() => {
                    if ("restoring" === a) {
                        let t = (0, n.TW)(e);
                        ("none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = s || ""),
                            (s = ""),
                            (a = "default"));
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
        let t = l.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        ("none" === e.style[r] && (e.style[r] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            l.delete(e));
    }
}
