"use strict";
n.d(t, { e: () => o });
var r = n(627968),
    i = n(64700),
    a = n(331322),
    s = n(977067);
function o(e) {
    let {
            size: t = "md",
            direction: n = "horizontal",
            justify: o,
            align: u,
            padding: c,
            className: d,
            children: _,
            wrap: f = !0,
            fullWidth: p = !1,
            fullWidthContainer: h = !1,
        } = e,
        m = i.useMemo(() => ({ size: t, fullWidth: p }), [t, p]),
        g = i.useRef(null),
        E = l(g, n, f),
        A = n;
    return (
        E && (A = n.replace("horizontal", "vertical")),
        (0, r.jsx)(a.B, {
            direction: A,
            gap: 8,
            justify: o,
            align: u,
            wrap: f,
            padding: c,
            className: d,
            fullWidth: !!h || p,
            ref: g,
            children: (0, r.jsx)(s.Z.Provider, { value: m, children: _ }),
        })
    );
}
function l(e, t, n) {
    let [r, a] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            if (null == e.current || !n || t.includes("vertical")) return;
            function r() {
                let t = Array.from(
                    e.current?.querySelectorAll('[data-mana-component="button"] [data-text-variant]') ?? [],
                ).some((e) => e.scrollWidth > e.clientWidth);
                a((e) => e || t);
            }
            let i = new MutationObserver(r);
            return (
                r(),
                i.observe(e.current, { childList: !0, subtree: !0, characterData: !0 }),
                () => {
                    i.disconnect();
                }
            );
        }, [e, t, n]),
        r
    );
}
