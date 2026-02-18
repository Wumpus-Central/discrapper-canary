t.d(a, { s: () => l });
var r = t(723906),
    n = t(290424),
    i = t(805447),
    o = t(64700),
    u = t(925573);
function l(e, a) {
    let { role: t = "dialog" } = e,
        l = (0, r.X1)();
    l = e["aria-label"] ? void 0 : l;
    let s = (0, o.useRef)(!1);
    return (
        (0, o.useEffect)(() => {
            if (a.current && !a.current.contains(document.activeElement)) {
                (0, i.l)(a.current);
                let e = setTimeout(() => {
                    (document.activeElement === a.current || document.activeElement === document.body) &&
                        ((s.current = !0), a.current && (a.current.blur(), (0, i.l)(a.current)), (s.current = !1));
                }, 500);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [a]),
        (0, u.Se)(),
        {
            dialogProps: {
                ...(0, n.$)(e, { labelable: !0 }),
                role: t,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || l,
                onBlur: (e) => {
                    s.current && e.stopPropagation();
                },
            },
            titleProps: { id: l },
        }
    );
}
