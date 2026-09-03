n.d(t, { A: () => a });
var i = n(477900);
n(582128);
var r = n(953727);
function a(e) {
    let { width: t = 12, height: n = 12, color: a = "currentColor", foreground: s, ...l } = e;
    return (0, i.jsx)("svg", {
        ...(0, r.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, i.jsx)("polygon", {
            fill: a,
            className: s,
            fillRule: "evenodd",
            points: "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1",
        }),
    });
}
