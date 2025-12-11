n.d(t, {
    q: () => u,
    z: () => o,
}),
    n(953529);
var r = n(54381);
n(473749);
var l = n(120356),
    s = n.n(l),
    i = n(481060),
    a = n(932599);
function o(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: a.cellGroup,
        children: (0, r.jsx)("div", {
            className: a.content,
            children: t,
        }),
    });
}
function u(e) {
    let {
        icon: t,
        title: n,
        description: l,
        iconClassName: o,
        color: u,
        listType: c = "icon",
        completed: d = !1,
        index: m,
    } = e;
    return (0, r.jsxs)("div", {
        className: a.cell,
        children: [
            (() => {
                if ("numbered" === c && null != m)
                    if (d)
                        return (0, r.jsx)("div", {
                            className: a.number,
                            children: (0, r.jsx)(i.sV5, {
                                color: "green",
                                className: s()(a.icon, o),
                            }),
                        });
                    else
                        return (0, r.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: a.number,
                            children: m + 1,
                        });
                if (null != t)
                    return (0, r.jsx)("div", {
                        className: a.iconContainer,
                        children: (0, r.jsx)(t, {
                            color: null != u ? u : "currentColor",
                            className: s()(a.icon, o),
                        }),
                    });
            })(),
            (0, r.jsxs)("div", {
                className: a.textContainer,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: s()({ [a.completedText]: d }),
                        children: n,
                    }),
                    null != l &&
                        (0, r.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: s()({ [a.completedText]: d }),
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
