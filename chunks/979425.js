n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(28664),
    o = n(481060),
    u = n(871118),
    s = n(388032),
    c = n(7504);
function d(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, {
                className: i()(c.absoluteFill, c.streamPreviewOpacity),
                stream: t,
                noText: !0,
            }),
            !l &&
                (0, r.jsxs)("div", {
                    className: i()(c.content, c.streamUnavailable, { [c.small]: n }),
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: c.streamUnavailableText,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: d ? s.intl.string(s.t.UeEwj4) : s.intl.string(s.t["1i3tSU"]),
                        }),
                        (0, r.jsx)(a.u, {
                            asContainer: !0,
                            text: d ? s.intl.string(s.t["ro/HNz"]) : s.intl.string(s.t.UPf6ZG),
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(o.o8v, {
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
