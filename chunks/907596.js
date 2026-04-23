"use strict";
n.d(t, { E: () => c, M: () => u });
var r = n(408713),
    i = n(297987),
    s = n(17118);
let a = "default",
    o = "",
    l = new WeakMap();
function u(e) {
    if ((0, r.un)()) {
        if ("default" === a) {
            let t = (0, i.TW)(e);
            (o = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = "none");
        }
        a = "disabled";
    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        l.set(e, e.style[t]), (e.style[t] = "none");
    }
}
function c(e) {
    if ((0, r.un)())
        "disabled" === a &&
            ((a = "restoring"),
            setTimeout(() => {
                (0, s.v)(() => {
                    if ("restoring" === a) {
                        let t = (0, i.TW)(e);
                        "none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = o || ""),
                            (o = ""),
                            (a = "default");
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
