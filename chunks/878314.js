s.d(t, { A: () => c });
var a = s(627968);
s(64700);
var n = s(187322),
    i = s(834730),
    r = s(415469),
    l = s(906471);
function c(e) {
    let { icon: t, message: s, onClick: c, autoFocus: d } = e;
    return (0, a.jsx)(n.vN, {
        children: (0, a.jsxs)("button", {
            className: r.kL,
            onClick: c,
            autoFocus: d,
            children: [
                (0, a.jsx)("img", { className: r.Kk, alt: "", src: t }),
                (0, a.jsx)(i.E, { className: r.Qq, variant: "text-md/bold", children: s }),
                (0, a.jsx)("img", { className: r.UE, alt: "", src: l }),
            ],
        }),
    });
}
