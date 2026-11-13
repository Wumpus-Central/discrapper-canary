var p = d(162199),
    a = d(114129),
    e = d(931519),
    n = d(254838);
d.d(
    i,
    {},
    {
        A: function (t, i) {
            return (
                1 === t.button &&
                !!e.A.isEnabled() &&
                (t.preventDefault(),
                t.stopPropagation(),
                !(0, n.H)() || ((0, a.Bd)(i.id, (0, p.j)(i), "middle_click"), !0))
            );
        },
    },
);
