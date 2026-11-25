var l = t(162199),
    a = t(723702),
    i = t(114129),
    r = t(442325),
    s = t(254838);
t.d(
    n,
    {},
    {
        A: function (e, n, t) {
            let o = 0 === e.button && ((0, a.cX)() ? e.metaKey : e.ctrlKey);
            return (
                (1 === e.button || !!o) &&
                !!r.A.isEnabled() &&
                (e.preventDefault(),
                e.stopPropagation(),
                !(0, s.H)() || ((0, i.Bd)(n.id, t ?? (0, l.j)(n), o ? "modifier_click" : "middle_click"), !0))
            );
        },
        q: function (e) {
            1 === e.button && r.A.isEnabled() && e.preventDefault();
        },
    },
);
