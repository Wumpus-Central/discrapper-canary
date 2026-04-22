"use strict";
n.d(t, { e: () => o });
var r = n(627968),
    i = n(64700),
    s = n(331322),
    a = n(977067);
function o(e) {
    let {
            size: t = "md",
            direction: n = "horizontal",
            justify: o,
            align: l,
            padding: u,
            className: d,
            children: c,
            wrap: _ = !0,
            fullWidth: f = !1,
            fullWidthContainer: E = !1,
        } = e,
        h = i.useMemo(() => ({ size: t, fullWidth: f }), [t, f]),
        p = i.useRef(null),
        m = (function (e, t, n) {
            let [r, s] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e.current || !n || t.includes("vertical")) return;
                    function r() {
                        let t = Array.from(
                            e.current?.querySelectorAll('[data-mana-component="button"] [data-text-variant]') ?? [],
                        ).some((e) => e.scrollWidth > e.clientWidth);
                        s((e) => e || t);
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
        })(p, n, _),
        g = n;
    return (
        m && (g = n.replace("horizontal", "vertical")),
        (0, r.jsx)(s.B, {
            direction: g,
            gap: 8,
            justify: o,
            align: l,
            wrap: _,
            padding: u,
            className: d,
            fullWidth: !!E || f,
            ref: p,
            children: (0, r.jsx)(a.Z.Provider, { value: h, children: c }),
        })
    );
}
