r.d(t, { $: () => u });
let n = new Set(["id"]),
    i = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    o = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    a = new Set(["dir", "lang", "hidden", "inert", "translate"]),
    s = new Set([
        "onClick",
        "onAuxClick",
        "onContextMenu",
        "onDoubleClick",
        "onMouseDown",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseOut",
        "onMouseOver",
        "onMouseUp",
        "onTouchCancel",
        "onTouchEnd",
        "onTouchMove",
        "onTouchStart",
        "onPointerDown",
        "onPointerMove",
        "onPointerUp",
        "onPointerCancel",
        "onPointerEnter",
        "onPointerLeave",
        "onPointerOver",
        "onPointerOut",
        "onGotPointerCapture",
        "onLostPointerCapture",
        "onScroll",
        "onWheel",
        "onAnimationStart",
        "onAnimationEnd",
        "onAnimationIteration",
        "onTransitionCancel",
        "onTransitionEnd",
        "onTransitionRun",
        "onTransitionStart",
    ]),
    l = /^(data-.*)$/;
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { labelable: r, isLink: u, global: c, events: f = c, propNames: d } = t,
        p = {};
    for (let t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
            (n.has(t) ||
                (r && i.has(t)) ||
                (u && o.has(t)) ||
                (c && a.has(t)) ||
                (f && (s.has(t) || (t.endsWith("Capture") && s.has(t.slice(0, -7))))) ||
                d?.has(t) ||
                l.test(t)) &&
            (p[t] = e[t]);
    return p;
}
