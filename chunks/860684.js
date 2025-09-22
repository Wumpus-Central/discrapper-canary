n.d(t, { D: () => a });
var r = n(951288),
    i = n(266585);
function a(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: a } = t;
                return (0, r.jsx)("div", {
                    className: i.roleDot,
                    style: { backgroundColor: a },
                });
            case "avatar":
                let { src: o } = t;
                return (0, r.jsx)("img", {
                    className: i.avatar,
                    src: o,
                    alt: "",
                });
            default:
                return null;
        }
    let s = "inline" === n ? "xs" : "sm",
        l = t;
    return (0, r.jsx)(l, { size: s });
}
