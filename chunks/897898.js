var l = t(162199),
    a = t(114129),
    i = t(442325),
    r = t(254838);
t.d(
    n,
    {},
    {
        A: function (e, n) {
            return (
                1 === e.button &&
                !!i.A.isEnabled() &&
                (e.preventDefault(),
                e.stopPropagation(),
                !(0, r.H)() || ((0, a.Bd)(n.id, (0, l.j)(n), "middle_click"), !0))
            );
        },
        q: function (e) {
            1 === e.button && i.A.isEnabled() && e.preventDefault();
        },
    },
);
