r.d(e, { startComposedHighlight: () => i });
var o = r(621466);
let l = "data-mana-composed",
    n = "mana-type-consolidation",
    s = /\.((?:\\.|[\w-])+)/g;
function i() {
    let t = (function () {
        let t = new Set();
        for (let e of document.styleSheets)
            try {
                !(function e(r) {
                    for (let o of r) {
                        let r = o.selectorText;
                        if (null != r && r.includes(n)) for (let e of r.matchAll(s)) t.add(e[1].replace(/\\/g, ""));
                        let l = o.cssRules;
                        null != l && e(l);
                    }
                })(e.cssRules);
            } catch {}
        return t.delete(n), t;
    })();
    if (0 === t.size) return () => {};
    function e(e) {
        if (e.hasAttribute("data-text-variant")) return !1;
        let { classList: r } = e;
        for (let e = 0; e < r.length; e++) if (t.has(r[e])) return !0;
        return !1;
    }
    function r(t) {
        for (let r of t.querySelectorAll("[class]")) e(r) && r.setAttribute(l, "");
    }
    r(document);
    let i = new MutationObserver((t) => {
        for (let s of t) {
            if ("attributes" === s.type) {
                var n;
                (0, o.vq)(s.target, Element) && (e((n = s.target)) ? n.setAttribute(l, "") : n.removeAttribute(l));
                continue;
            }
            for (let t of s.addedNodes) (0, o.vq)(t, Element) && (e(t) && t.setAttribute(l, ""), r(t));
        }
    });
    return (
        i.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "data-text-variant"],
        }),
        () => {
            for (let t of (i.disconnect(), document.querySelectorAll(`[${l}]`))) t.removeAttribute(l);
        }
    );
}
