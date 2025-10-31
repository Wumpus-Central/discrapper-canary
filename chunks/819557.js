n.d(t, {
    q: () => c,
    z: () => s,
}),
    n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    o = n.n(i),
    l = n(481060),
    a = n(262441);
function s(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: a.cellGroup,
        children: (0, r.jsx)("div", {
            className: a.content,
            children: t,
        }),
    });
}
function c(e) {
    let {
        icon: t,
        title: n,
        description: i,
        iconClassName: s,
        color: c,
        listType: u = "icon",
        completed: d = !1,
        index: p,
    } = e;
    return (0, r.jsxs)("div", {
        className: a.cell,
        children: [
            (() => {
                if ("numbered" === u && null != p)
                    if (d)
                        return (0, r.jsx)("div", {
                            className: a.number,
                            children: (0, r.jsx)(l.sV5, {
                                color: "green",
                                className: o()(a.icon, s),
                            }),
                        });
                    else
                        return (0, r.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: a.number,
                            children: p + 1,
                        });
                if (null != t)
                    return (0, r.jsx)("div", {
                        className: a.iconContainer,
                        children: (0, r.jsx)(t, {
                            color: null != c ? c : "currentColor",
                            className: o()(a.icon, s),
                        }),
                    });
            })(),
            (0, r.jsxs)("div", {
                className: a.textContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: o()({ [a.completedText]: d }),
                        children: n,
                    }),
                    null != i &&
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "text-secondary",
                            className: o()({ [a.completedText]: d }),
                            children: i,
                        }),
                ],
            }),
        ],
    });
}
