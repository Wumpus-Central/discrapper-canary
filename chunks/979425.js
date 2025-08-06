n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(871118),
    l = n(388032),
    c = n(519417);
function u(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Z, {
                className: o()(c.absoluteFill, c.streamPreviewOpacity),
                stream: t,
                noText: !0,
            }),
            !i &&
                (0, r.jsxs)("div", {
                    className: o()(c.content, c.streamUnavailable, { [c.small]: n }),
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: c.streamUnavailableText,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: u ? l.intl.string(l.t.UeEwj4) : l.intl.string(l.t["1i3tSU"]),
                        }),
                        (0, r.jsx)(a.DY3, {
                            text: u ? l.intl.string(l.t["ro/HNz"]) : l.intl.string(l.t.UPf6ZG),
                            className: c.darkCircle,
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(a.o8v, {
                                    size: "md",
                                    color: "currentColor",
                                    className: c.stopStreamIcon,
                                    colorClass: c.stopStreamForeground,
                                }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
