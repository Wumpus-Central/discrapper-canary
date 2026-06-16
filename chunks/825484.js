"use strict";
n.d(t, { e: () => o });
var i = n(627968),
    r = n(64700),
    s = n(331322),
    a = n(977067);
function o(e) {
    let {
            size: t = "md",
            direction: n = "horizontal",
            justify: o,
            align: l,
            padding: u,
            className: c,
            children: d,
            wrap: _ = !0,
            fullWidth: h = !1,
            fullWidthContainer: f = !1,
        } = e,
        p = r.useMemo(() => ({ size: t, fullWidth: h }), [t, h]),
        E = r.useRef(null),
        m = (function (e, t, n) {
            let [i, s] = r.useState(null);
            return (
                r.useLayoutEffect(() => {
                    if (null == e.current || !n || t.includes("vertical")) return;
                    function i() {
                        let t = Array.from(
                            e.current?.querySelectorAll('[data-mana-component="button"] [data-text-variant]') ?? [],
                        ).some((e) => e.scrollWidth > e.clientWidth);
                        s((e) => e || t);
                    }
                    let r = new MutationObserver(i);
                    return (
                        i(),
                        r.observe(e.current, { childList: !0, subtree: !0, characterData: !0 }),
                        () => {
                            r.disconnect();
                        }
                    );
                }, [e, t, n]),
                i
            );
        })(E, n, _),
        g = n;
    return (
        m && (g = n.replace("horizontal", "vertical")),
        (0, i.jsx)(s.B, {
            direction: g,
            gap: 8,
            justify: o,
            align: l,
            wrap: _,
            padding: u,
            className: c,
            fullWidth: !!f || h,
            ref: E,
            children: (0, i.jsx)(a.Z.Provider, { value: p, children: d }),
        })
    );
}
