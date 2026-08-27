s.d(t, { q: () => o });
var i = s(362684),
    l = s(241453),
    r = s(184093);
function o(e, t, s) {
    let { isSelected: o } = t,
        { isPressed: a, buttonProps: d } = (0, i.s)({ ...e, onPress: (0, l.c)(t.toggle, e.onPress) }, s);
    return {
        isPressed: a,
        isSelected: o,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, r.v)(d, { "aria-pressed": o }),
    };
}
