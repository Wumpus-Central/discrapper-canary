n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(457926),
    l = n(388032),
    c = n(861537);
let u = function (e) {
    let { iconType: t, children: n } = e,
        i = null;
    switch (t) {
        case "voice":
            i = (0, r.jsx)(o.gj8, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.BVZqJl),
            });
            break;
        case "voice-locked":
            i = (0, r.jsx)(o.mBM, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.aa0FYn),
            });
            break;
        case "stage":
            i = (0, r.jsx)(o.ewx, {
                size: "lg",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.EErMzA),
            });
            break;
        case "stage-locked":
            i = (0, r.jsx)(o.mBM, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.pKZ4I8),
            });
            break;
        case "thread":
            i = (0, r.jsx)(o.or_, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t["7Xm5QI"]),
            });
            break;
        case "text":
            i = (0, r.jsx)(o.VL1, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.GK18KJ),
            });
            break;
        case "forum":
            i = (0, r.jsx)(o.Mmi, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.GbryDd),
            });
            break;
        case "post":
            i = (0, r.jsx)(o.kBi, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.Y4REmB),
            });
            break;
        case "home":
        case "guide":
            i = (0, r.jsx)(o.Vy8, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.VbpLyU),
            });
            break;
        case "browse":
        case "customize":
            i = (0, r.jsx)(o.H$4, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.et6wav),
            });
            break;
        case "message":
            i = (0, r.jsx)(o.kBi, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.BAB0yK),
            });
            break;
        case "locked":
            i = (0, r.jsx)(o.mBM, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t["/YzI63"]),
            });
            break;
        case "media":
            i = (0, r.jsx)(o.XBm, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.seKITE),
            });
            break;
        case "linked-roles":
            i = (0, r.jsx)(o.xPt, {
                size: "md",
                color: "currentColor",
                className: c.icon,
                "aria-label": l.intl.string(l.t.ghtnss),
            });
    }
    return (0, r.jsxs)("span", {
        className: a()("channelWithIcon", { [c.iconMentionText]: "text" === t }),
        children: [
            (0, r.jsx)(s.Z, { children: i }),
            null != n && "" !== n
                ? (0, r.jsx)("span", {
                      className: c.name,
                      children: n,
                  })
                : null,
        ],
    });
};
