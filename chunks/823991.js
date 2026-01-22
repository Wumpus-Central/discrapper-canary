n.d(t, {
    A: () => d,
});
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    c = n(397927),
    r = n(985018),
    s = n(928103);

function d(e) {
    let { guild: t, speakers: n, speakerCount: a, className: d } = e,
        u = n.slice(0, 5),
        o = u.map((e) => {
            var n, a;
            return (0, l.jsxs)(
                "div",
                {
                    className: s.dq,
                    children: [
                        (0, l.jsx)(c.euF, {
                            src: null == e || null == (n = e.user) ? void 0 : n.getAvatarURL(t.id, 20),
                            size: c._3J.SIZE_20,
                            className: s.my,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, l.jsx)("div", {
                            className: s.CU,
                            children: (0, l.jsx)(c.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                className: s.br,
                                children: null == e ? void 0 : e.userNick,
                            }),
                        }),
                    ],
                },
                null == e || null == (a = e.user) ? void 0 : a.id,
            );
        }),
        f = a - u.length;
    return (0, l.jsxs)("div", {
        className: i()(s.Vg, d),
        children: [
            o,
            f > 0 &&
                (0, l.jsxs)("div", {
                    className: s.dq,
                    children: [
                        (0, l.jsx)("div", {
                            className: s.Ko,
                            children: (0, l.jsx)(c.cNw, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, l.jsx)(c.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            className: s.br,
                            children: r.intl.format(r.t["185ggO"], {
                                count: f,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
