s.d(t, { A: () => m });
var n = s(627968),
    l = s(64700),
    a = s(167417),
    r = s(821609),
    i = s(783977),
    o = s(890687),
    c = s(651892),
    u = s(264580),
    d = s(985018),
    _ = s(612539);
let m = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        m = (0, o.Nb)(),
        h = l.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, n.jsx)(u.A, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, n.jsxs)("div", {
                children: [
                    m.map((e, t) => {
                        let r = e.options.map((e) => ({ label: (0, c.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, n.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    t > 0 && (0, n.jsx)("hr", { className: _.B }),
                                    (0, n.jsx)(u.q, { id: i, children: e.heading }),
                                    (0, n.jsx)(a.$, {
                                        "aria-labelledby": i,
                                        options: r,
                                        selectedValues: o,
                                        onChange: h(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, n.jsx)("hr", { className: _.B }),
                    (0, n.jsx)("div", {
                        className: _.W,
                        children: (0, n.jsx)(r.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
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
            (0, n.jsx)(r.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: d.intl.formatToPlainString(d.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: i.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
