n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    r = n(996682),
    a = n(158954),
    s = n(554146),
    o = n(189252),
    d = n(915089),
    c = n(932001),
    u = n(829203),
    A = n(260982),
    h = n(49999),
    _ = n(75772),
    m = n(985018);
function g(e) {
    let { size: t = "md", width: n, height: l, ...s } = e,
        o = (0, a.JtX)(t),
        c = o?.width ?? n,
        u = o?.height ?? l,
        A = (0, d.GV)();
    return (0, i.jsxs)("svg", {
        ...(0, r.A)(s),
        xmlns: "http://www.w3.org/2000/svg",
        width: c,
        height: u,
        viewBox: "0 0 12 14",
        fill: "none",
        children: [
            (0, i.jsx)("path", {
                fill: `url(#${A})`,
                d: "M4.534 8.646c-.303.199-.606.38-.91.562l-.019.01c-.253.151-.504.301-.764.466-.565.357-1.123.763-1.598 1.327a5 5 0 0 0-.47.662c-.259.435-.47.94-.626 1.537-.09.34.127.686.485.77.357.086.719-.121.808-.462q.121-.457.283-.813c1.317.05 6.03-.023 8.485-3.392 2.327-3.194 1.925-6.46 1.34-8.828-.127-.518-.84-.642-1.232-.27C9.118 1.36 7.853 1.688 6.534 2.031c-1.559.405-3.196.831-4.902 2.641C-.173 6.586-.192 8.647.216 10.2c.597-.704 1.279-1.19 1.888-1.575q.414-.26.79-.482l.004-.002c.888-.53 1.61-.965 2.36-1.799a.69.69 0 0 1 .94-.068c.28.228.312.63.073.896l-.175.189a8.8 8.8 0 0 1-1.562 1.287",
            }),
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                    id: A,
                    x1: "6",
                    x2: "6",
                    y1: "0",
                    y2: "14",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, i.jsx)("stop", { stopColor: "#68db7d" }),
                        (0, i.jsx)("stop", { offset: "1", stopColor: "#52985f" }),
                    ],
                }),
            }),
        ],
    });
}
function p() {
    let [e, t] = (0, c.kn)([s.M.APRIL_FOOLS_2026_COACHMARK]),
        n = l.useRef(null),
        r = e === s.M.APRIL_FOOLS_2026_COACHMARK;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(o.A, {
                ref: n,
                onClick: () => {
                    (0, u.A)({ source: "app_title_bar" }), r && t(h.i.INDIRECT_ACTION);
                },
                icon: g,
                tooltip: m.intl.string(_.default.UnXoXM),
            }),
            r && (0, i.jsx)(A.A, { markAsDismissed: t }),
        ],
    });
}
