"use strict";
n.d(t, { e: () => l });
var i = n(477900),
    r = n(582128),
    a = n(331322),
    s = n(977067);
function l(e) {
    let {
            size: t = "md",
            direction: n = "horizontal",
            justify: l,
            align: o,
            padding: d,
            className: c,
            children: u,
            wrap: _ = !0,
            fullWidth: E = !1,
            fullWidthContainer: A = !1,
        } = e,
        h = r.useMemo(() => ({ size: t, fullWidth: E }), [t, E]),
        I = r.useRef(null),
        f = (function (e, t, n) {
            let [i, a] = r.useState(null);
            return (
                r.useLayoutEffect(() => {
                    if (null == e.current || !n || t.includes("vertical")) return;
                    function i() {
                        let t = Array.from(
                            e.current?.querySelectorAll('[data-mana-component="button"] [data-text-variant]') ?? [],
                        ).some((e) => e.scrollWidth > e.clientWidth);
                        a((e) => e || t);
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
        })(I, n, _),
        p = n;
    return (
        f && (p = n.replace("horizontal", "vertical")),
        (0, i.jsx)(a.B, {
            direction: p,
            gap: 8,
            justify: l,
            align: o,
            wrap: _,
            padding: d,
            className: c,
            fullWidth: !!A || E,
            ref: I,
            children: (0, i.jsx)(s.Z.Provider, { value: h, children: u }),
        })
    );
}
