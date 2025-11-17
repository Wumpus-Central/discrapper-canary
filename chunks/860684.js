n.d(t, { D: () => a });
var r = n(54381),
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
            case "image":
                let { src: s } = t;
                return (0, r.jsx)("img", {
                    className: i.image,
                    src: s,
                    alt: "",
                });
            default:
                return null;
        }
    let l = "inline" === n ? "xs" : "sm",
        c = t;
    return (0, r.jsx)(c, { size: l });
}
