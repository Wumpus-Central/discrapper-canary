n.d(t, {
    q: () => c,
    z: () => s,
}),
    n(953529);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(262441);
function s(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: o.cellGroup,
        children: (0, i.jsx)("div", {
            className: o.content,
            children: t,
        }),
    });
}
function c(e) {
    let {
        icon: t,
        title: n,
        description: r,
        iconClassName: s,
        color: c,
        listType: u = "icon",
        completed: d = !1,
        index: p,
    } = e;
    return (0, i.jsxs)("div", {
        className: o.cell,
        children: [
            (() => {
                if ("numbered" === u && null != p)
                    if (d)
                        return (0, i.jsx)("div", {
                            className: o.number,
                            children: (0, i.jsx)(a.sV5, {
                                color: "green",
                                className: l()(o.icon, s),
                            }),
                        });
                    else
                        return (0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            className: o.number,
                            children: p + 1,
                        });
                if (null != t)
                    return (0, i.jsx)("div", {
                        className: o.iconContainer,
                        children: (0, i.jsx)(t, {
                            color: null != c ? c : "currentColor",
                            className: l()(o.icon, s),
                        }),
                    });
            })(),
            (0, i.jsxs)("div", {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: l()({ [o.completedText]: d }),
                        children: n,
                    }),
                    null != r &&
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            color: "text-secondary",
                            className: l()({ [o.completedText]: d }),
                            children: r,
                        }),
                ],
            }),
        ],
    });
}
