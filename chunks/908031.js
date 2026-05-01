n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var a = n(953727);
function r(e) {
    let { width: t = 12, height: n = 12, color: r = "currentColor", foreground: s, ...l } = e;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, i.jsx)("polygon", {
            fill: r,
            className: s,
            fillRule: "evenodd",
            points: "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1",
        }),
    });
}
