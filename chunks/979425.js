n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(28664),
    o = n(481060),
    s = n(871118),
    c = n(388032),
    u = n(400872);
function d(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Z, {
                className: l()(u.absoluteFill, u.streamPreviewOpacity),
                stream: t,
                noText: !0,
            }),
            !i &&
                (0, r.jsxs)("div", {
                    className: l()(u.content, u.streamUnavailable, { [u.small]: n }),
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: u.streamUnavailableText,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: d ? c.intl.string(c.t.UeEwjy) : c.intl.string(c.t["1i3tSY"]),
                        }),
                        (0, r.jsx)(a.u, {
                            asContainer: !0,
                            text: d ? c.intl.string(c.t["ro/HN8"]) : c.intl.string(c.t.UPf6ZM),
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(o.o8v, {
                                    size: "md",
                                    color: "currentColor",
                                    className: u.stopStreamIcon,
                                    colorClass: u.stopStreamForeground,
                                }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
