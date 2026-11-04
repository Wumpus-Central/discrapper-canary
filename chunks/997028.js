var t = p(144276);
p.d(
    s,
    {},
    {
        K: function (e, s, p) {
            let { labelProps: c, inputProps: i, isSelected: r, ...d } = (0, t.e)(e, s, p);
            return { labelProps: c, inputProps: { ...i, role: "switch", checked: r }, isSelected: r, ...d };
        },
    },
);
