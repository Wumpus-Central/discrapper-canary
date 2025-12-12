n.d(t, { D: () => o });
var r = n(54381),
    i = n(266585);
function o(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: o } = t;
                return (0, r.jsx)("div", {
                    className: i.roleDot,
                    style: { backgroundColor: o },
                });
            case "avatar":
                let { src: a } = t;
                return (0, r.jsx)("img", {
                    className: i.avatar,
                    src: a,
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
