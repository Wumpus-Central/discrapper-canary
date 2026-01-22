n.d(t, { A: () => r });
var l = n(627968);
n(64700);
var i = n(397927),
    s = n(932104),
    a = n(906471);
function r(e) {
    let { icon: t, message: n, onClick: r, autoFocus: c } = e;
    return (0, l.jsx)(i.vN3, {
        children: (0, l.jsxs)("button", {
            className: s.kL,
            onClick: r,
            autoFocus: c,
            children: [
                (0, l.jsx)("img", {
                    className: s.Kk,
                    alt: "",
                    src: t,
                }),
                (0, l.jsx)(i.Text, {
                    className: s.Qq,
                    variant: "text-md/bold",
                    children: n,
                }),
                (0, l.jsx)("img", {
                    className: s.UE,
                    alt: "",
                    src: a,
                }),
            ],
        }),
    });
}
