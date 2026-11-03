(r.d(e, { startComposedHighlight: () => f, startOverrideAudit: () => m }), r(321073));
var n = r(621466),
    l = r(206471);
let o = "data-mana-composed",
    i = "data-mana-overridden",
    a = new Set(l.O),
    u = /\.((?:\\.|[\w-])+)/g,
    s = ["fontSize", "fontWeight", "fontFamily", "lineHeight"];
function d() {
    let t = new Set();
    for (let e of document.styleSheets)
        try {
            !(function e(r) {
                for (let n of r) {
                    let r = n.selectorText;
                    if (null != r)
                        for (let e of r.matchAll(u)) {
                            let r = e[1].replace(/\\/g, ""),
                                n = r.split("__");
                            n.length >= 3 && a.has(n[n.length - 2]) && t.add(r);
                        }
                    let l = n.cssRules;
                    null != l && e(l);
                }
            })(e.cssRules);
        } catch {}
    return t;
}
function c(t, e) {
    let { classList: r } = t;
    for (let t = 0; t < r.length; t++) if (e.has(r[t])) return r[t];
    return null;
}
function f() {
    let t = d();
    if (0 === t.size) return () => {};
    function e(e) {
        return !e.hasAttribute("data-text-variant") && null != c(e, t);
    }
    function r(t) {
        for (let r of t.querySelectorAll("[class]")) e(r) && r.setAttribute(o, "");
    }
    r(document);
    let l = new MutationObserver((t) => {
        for (let i of t) {
            if ("attributes" === i.type) {
                var l;
                (0, n.vq)(i.target, Element) && (e((l = i.target)) ? l.setAttribute(o, "") : l.removeAttribute(o));
                continue;
            }
            for (let t of i.addedNodes) (0, n.vq)(t, Element) && (e(t) && t.setAttribute(o, ""), r(t));
        }
    });
    return (
        l.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "data-text-variant"],
        }),
        () => {
            for (let t of (l.disconnect(), document.querySelectorAll(`[${o}]`))) t.removeAttribute(o);
        }
    );
}
function m() {
    let t = d();
    if (0 === t.size) return () => {};
    function e(t) {
        return s.map((e) => t[e]).join("|");
    }
    let r = new Map();
    function l(t) {
        let n = r.get(t);
        if (void 0 === n) {
            let l = document.createElement("span");
            ((l.className = t),
                l.setAttribute("style", "position:fixed;top:-9999px;visibility:hidden"),
                (l.textContent = "x"),
                document.body.appendChild(l),
                (n = e(getComputedStyle(l))),
                l.remove(),
                r.set(t, n));
        }
        return n;
    }
    let o = null,
        a = 0;
    function u() {
        a = 0;
        let r = o;
        ((o = null),
            null != r &&
                (function (r) {
                    let n = [];
                    for (let e of r) {
                        let r = c(e, t);
                        null != r ? n.push([e, r]) : e.removeAttribute(i);
                    }
                    for (let [, t] of n) l(t);
                    for (let [t, r] of n.map((t) => {
                        let [r, n] = t;
                        return [r, e(getComputedStyle(r)) !== l(n)];
                    }))
                        r ? t.setAttribute(i, "") : t.removeAttribute(i);
                })(r));
    }
    function f(t) {
        for (let e of ((o ??= new Set()), t)) o.add(e);
        0 === a && (a = requestAnimationFrame(u));
    }
    f(document.querySelectorAll("[data-text-variant]"));
    let m = new MutationObserver((t) => {
        for (let e of t) {
            if ("attributes" === e.type) {
                let { target: t } = e;
                (0, n.vq)(t, Element) && (t.hasAttribute("data-text-variant") || t.hasAttribute(i)) && f([t]);
                continue;
            }
            for (let t of e.addedNodes)
                (0, n.vq)(t, Element) &&
                    (t.hasAttribute("data-text-variant") && f([t]), f(t.querySelectorAll("[data-text-variant]")));
        }
    });
    return (
        m.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style", "data-text-variant"],
        }),
        () => {
            for (let t of (0 !== a && cancelAnimationFrame(a), m.disconnect(), document.querySelectorAll(`[${i}]`)))
                t.removeAttribute(i);
        }
    );
}
