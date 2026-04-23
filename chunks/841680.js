t.d(a, { s: () => u });
var r = t(723906),
    n = t(290424),
    i = t(805447),
    l = t(64700),
    o = t(925573);
function u(e, a) {
    let { role: t = "dialog" } = e,
        u = (0, r.X1)();
    u = e["aria-label"] ? void 0 : u;
    let s = (0, l.useRef)(!1);
    return (
        (0, l.useEffect)(() => {
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
        (0, o.Se)(),
        {
            dialogProps: {
                ...(0, n.$)(e, { labelable: !0 }),
                role: t,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || u,
                onBlur: (e) => {
                    s.current && e.stopPropagation();
                },
            },
            titleProps: { id: u },
        }
    );
}
