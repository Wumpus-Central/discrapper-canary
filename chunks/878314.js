s.d(t, { A: () => d });
var n = s(477900),
    a = s(582128),
    i = s(559106),
    l = s(834730),
    r = s(999470),
    c = s(906471);
function d(e) {
    let { icon: t, message: s, onClick: d, autoFocus: o, isSlideReady: u } = e,
        m = a.useRef(null);
    return (
        a.useEffect(() => {
            !0 === o && !0 === u && m.current?.focus({ preventScroll: !0 });
        }, [o, u]),
        (0, n.jsx)(i.vN, {
            children: (0, n.jsxs)("button", {
                ref: m,
                className: r.kL,
                onClick: d,
                autoFocus: null == u && o,
                children: [
                    (0, n.jsx)("img", { className: r.Kk, alt: "", src: t }),
                    (0, n.jsx)(l.E, { className: r.Qq, variant: "text-md/bold", children: s }),
                    (0, n.jsx)("img", { className: r.UE, alt: "", src: c }),
                ],
            }),
        })
    );
}
