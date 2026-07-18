n.d(e, { startComposedHighlight: () => i });
let l = "mana-composed-highlight",
    a = "mana-type-consolidation",
    o = /\.((?:\\.|[\w-])+)/g;
function i() {
    let t = document.getElementById(l);
    if (null != t) return () => t.remove();
    let e = (function () {
        let t = new Set();
        for (let e of document.styleSheets)
            try {
                !(function e(n) {
                    for (let l of n) {
                        let n = l.selectorText;
                        if (null != n && n.includes(a)) for (let e of n.matchAll(o)) t.add(e[1].replace(/\\/g, ""));
                        let i = l.cssRules;
                        null != i && e(i);
                    }
                })(e.cssRules);
            } catch {}
        return t.delete(a), [...t];
    })();
    if (0 === e.length) return () => {};
    let n = e.map((t) => `[class~="${t}"]`).join(","),
        i = `.highlight-mana-text :is(${n}):not([data-text-variant])`,
        s = "box-shadow:inset 0 0 0 1px var(--yellow-300)",
        d = document.createElement("style");
    return (
        (d.id = l),
        (d.textContent = `${i}{${s}}${i} *:not(:has(*)):not(:empty):not([data-text-variant]):not([data-text-variant] *){${s}}`),
        document.head.appendChild(d),
        () => d.remove()
    );
}
