n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(890687),
    s = n(651892),
    o = n(264580),
    d = n(985018),
    c = n(819446);
let u = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        u = (0, l.Nb)(),
        A = r.useCallback(
            (e) => (i) => {
                let r = e.filter((e) => i.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...r]);
            },
            [n, t],
        );
    return (0, i.jsx)(o.A, {
        renderPopout: (e, l) => {
            let { closePopout: h } = e;
            return (0, i.jsxs)("div", {
                children: [
                    u.map((e, t) => {
                        let d = e.options.map((e) => ({ label: (0, s.up)(e.filter), value: e.filter })),
                            u = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, i.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, i.jsx)("hr", { className: c.B }),
                                    (0, i.jsx)(o.q, { id: l, children: e.heading }),
                                    (0, i.jsx)(a.$QX, {
                                        "aria-labelledby": l,
                                        options: d,
                                        selectedValues: u,
                                        onChange: A(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, i.jsx)("hr", { className: c.B }),
                    (0, i.jsx)("div", {
                        className: c.W,
                        children: (0, i.jsx)(a.Button, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), h();
                            },
                            size: "sm",
                            text: d.intl.string(d.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, i.jsx)(a.Button, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: d.intl.formatToPlainString(d.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: a.RgP,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
