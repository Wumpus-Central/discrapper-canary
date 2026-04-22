l.d(t, { A: () => c });
var i = l(627968);
l(64700);
var s = l(187322),
    a = l(834730),
    n = l(415469),
    r = l(906471);
function c(e) {
    let { icon: t, message: l, onClick: c, autoFocus: d } = e;
    return (0, i.jsx)(s.vN, {
        children: (0, i.jsxs)("button", {
            className: n.kL,
            onClick: c,
            autoFocus: d,
            children: [
                (0, i.jsx)("img", { className: n.Kk, alt: "", src: t }),
                (0, i.jsx)(a.E, { className: n.Qq, variant: "text-md/bold", children: l }),
                (0, i.jsx)("img", { className: n.UE, alt: "", src: r }),
            ],
        }),
    });
}
