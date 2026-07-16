n.d(e, { startComposedHighlight: () => s });
let l = "mana-composed-highlight",
    a = "mana-type-consolidation",
    o = /\.((?:\\.|[\w-])+)/g;
function s() {
    let t = document.getElementById(l);
    if (null != t) return () => t.remove();
    let e = (function () {
        let t = new Set(),
            e = (n) => {
                for (let l of n) {
                    let n = l.selectorText;
                    if (null != n && n.includes(a)) for (let e of n.matchAll(o)) t.add(e[1].replace(/\\/g, ""));
                    let s = l.cssRules;
                    null != s && e(s);
                }
            };
        for (let t of document.styleSheets)
            try {
                e(t.cssRules);
            } catch {}
        return t.delete(a), [...t];
    })();
    if (0 === e.length) return () => {};
    let n = e.map((t) => `[class~="${t}"]`).join(","),
        s = `.highlight-mana-text :is(${n}):not([data-text-variant])`,
        i = "box-shadow:inset 0 0 0 1px var(--yellow-300)",
        d = document.createElement("style");
    return (
        (d.id = l),
        (d.textContent = `${s}{${i}}${s} *:not(:has(*)):not(:empty):not([data-text-variant]):not([data-text-variant] *){${i}}`),
        document.head.appendChild(d),
        () => d.remove()
    );
}
