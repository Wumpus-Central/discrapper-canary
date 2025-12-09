n.d(e, {
    q: () => a,
    z: () => o,
}),
    n(953529);
var i = n(54381);
n(473749);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    c = n(262441);
function o(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", {
        className: c.cellGroup,
        children: (0, i.jsx)("div", {
            className: c.content,
            children: e,
        }),
    });
}
function a(t) {
    let {
        icon: e,
        title: n,
        description: l,
        iconClassName: o,
        color: a,
        listType: d = "icon",
        completed: u = !1,
        index: x,
    } = t;
    return (0, i.jsxs)("div", {
        className: c.cell,
        children: [
            (() => {
                if ("numbered" === d && null != x)
                    if (u)
                        return (0, i.jsx)("div", {
                            className: c.number,
                            children: (0, i.jsx)(s.sV5, {
                                color: "green",
                                className: r()(c.icon, o),
                            }),
                        });
                    else
                        return (0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: c.number,
                            children: x + 1,
                        });
                if (null != e)
                    return (0, i.jsx)("div", {
                        className: c.iconContainer,
                        children: (0, i.jsx)(e, {
                            color: null != a ? a : "currentColor",
                            className: r()(c.icon, o),
                        }),
                    });
            })(),
            (0, i.jsxs)("div", {
                className: c.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: r()({ [c.completedText]: u }),
                        children: n,
                    }),
                    null != l &&
                        (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: r()({ [c.completedText]: u }),
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
