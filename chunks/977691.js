n.d(e, { startComposedHighlight: () => d, startOverrideAudit: () => m }), n(321073);
var o = n(621466);
let r = "data-mana-composed",
    l = "data-mana-overridden",
    i = "mana-type-consolidation",
    a = /\.((?:\\.|[\w-])+)/g,
    u = ["fontSize", "fontWeight", "fontFamily", "lineHeight"];
function s() {
    let t = new Set();
    for (let e of document.styleSheets)
        try {
            !(function e(n) {
                for (let o of n) {
                    let n = o.selectorText;
                    if (null != n && n.includes(i)) for (let e of n.matchAll(a)) t.add(e[1].replace(/\\/g, ""));
                    let r = o.cssRules;
                    null != r && e(r);
                }
            })(e.cssRules);
        } catch {}
    return t.delete(i), t;
}
function c(t, e) {
    let { classList: n } = t;
    for (let t = 0; t < n.length; t++) if (e.has(n[t])) return n[t];
    return null;
}
function d() {
    let t = s();
    if (0 === t.size) return () => {};
    function e(e) {
        return !e.hasAttribute("data-text-variant") && null != c(e, t);
    }
    function n(t) {
        for (let n of t.querySelectorAll("[class]")) e(n) && n.setAttribute(r, "");
    }
    n(document);
    let l = new MutationObserver((t) => {
        for (let i of t) {
            if ("attributes" === i.type) {
                var l;
                (0, o.vq)(i.target, Element) && (e((l = i.target)) ? l.setAttribute(r, "") : l.removeAttribute(r));
                continue;
            }
            for (let t of i.addedNodes) (0, o.vq)(t, Element) && (e(t) && t.setAttribute(r, ""), n(t));
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
            for (let t of (l.disconnect(), document.querySelectorAll(`[${r}]`))) t.removeAttribute(r);
        }
    );
}
function m() {
    let t = s();
    if (0 === t.size) return () => {};
    function e(t) {
        return u.map((e) => t[e]).join("|");
    }
    let n = new Map();
    function r(t) {
        let o = n.get(t);
        if (void 0 === o) {
            let r = document.createElement("span");
            (r.className = t),
                r.setAttribute("style", "position:fixed;top:-9999px;visibility:hidden"),
                (r.textContent = "x"),
                document.body.appendChild(r),
                (o = e(getComputedStyle(r))),
                r.remove(),
                n.set(t, o);
        }
        return o;
    }
    let a = null,
        d = 0;
    function m() {
        d = 0;
        let n = a;
        (a = null),
            null != n &&
                (function (n) {
                    let o = document.documentElement.classList.contains(i),
                        a = [];
                    for (let e of n) {
                        let n = o ? c(e, t) : null;
                        null != n ? a.push([e, n]) : e.removeAttribute(l);
                    }
                    for (let [, t] of a) r(t);
                    for (let [t, n] of a.map((t) => {
                        let [n, o] = t;
                        return [n, e(getComputedStyle(n)) !== r(o)];
                    }))
                        n ? t.setAttribute(l, "") : t.removeAttribute(l);
                })(n);
    }
    function f(t) {
        for (let e of ((a ??= new Set()), t)) a.add(e);
        0 === d && (d = requestAnimationFrame(m));
    }
    document.documentElement.classList.contains(i) ||
        console.warn(
            "[mana override audit] Enable the mana-type-consolidation experiment \u2014 without it, overrides pinned to the control font are indistinguishable and stay unflagged.",
        ),
        f(document.querySelectorAll("[data-text-variant]"));
    let b = new MutationObserver((t) => {
        for (let e of t) {
            if ("attributes" === e.type) {
                let { target: t } = e;
                (0, o.vq)(t, Element) && (t.hasAttribute("data-text-variant") || t.hasAttribute(l)) && f([t]);
                continue;
            }
            for (let t of e.addedNodes)
                (0, o.vq)(t, Element) &&
                    (t.hasAttribute("data-text-variant") && f([t]), f(t.querySelectorAll("[data-text-variant]")));
        }
    });
    b.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "style", "data-text-variant"],
    });
    let v = document.documentElement.classList.contains(i),
        p = new MutationObserver(() => {
            let t = document.documentElement.classList.contains(i);
            t !== v && ((v = t), n.clear(), f(document.querySelectorAll("[data-text-variant]")));
        });
    return (
        p.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }),
        () => {
            for (let t of (0 !== d && cancelAnimationFrame(d),
            b.disconnect(),
            p.disconnect(),
            document.querySelectorAll(`[${l}]`)))
                t.removeAttribute(l);
        }
    );
}
