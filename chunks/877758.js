n.d(t, { Z: () => l });
var a = n(54381);
n(473749);
var o = n(120356),
    i = n.n(o),
    s = n(785997),
    r = n(745873);
function l(e) {
    let { step: t } = e,
        n = t === s.F.AGE_GATE,
        o = t === s.F.CHOOSE_TEMPLATE || t === s.F.CREATION_INTENT,
        l = t === s.F.CUSTOMIZE_GUILD,
        c = t === s.F.CHANNEL_PROMPT || t === s.F.JOIN_GUILD,
        d = l || c,
        u = o || d;
    return (0, a.jsxs)("div", {
        className: r.sidebar,
        children: [
            (0, a.jsx)("div", { className: i()(r.step1, { [r.show]: n }) }),
            (0, a.jsx)("div", { className: i()(r.step24Clouds, { [r.show]: u }) }),
            (0, a.jsx)("div", { className: i()(r.step34Flag, { [r.show]: d }) }),
            (0, a.jsx)("div", { className: i()(r.step24Base, { [r.show]: u }) }),
            (0, a.jsx)("div", { className: i()(r.step24Ground, { [r.show]: u }) }),
            (0, a.jsx)("div", { className: i()(r.step2Base, { [r.show]: o }) }),
            (0, a.jsx)("div", { className: i()(r.step2Character, { [r.show]: o }) }),
            (0, a.jsx)("div", { className: i()(r.step34Base, { [r.show]: d }) }),
            (0, a.jsx)("div", { className: i()(r.step3Character, { [r.show]: l }) }),
            (0, a.jsx)("div", { className: i()(r.step4Character, { [r.show]: c }) }),
            (0, a.jsx)("div", { className: i()(r.step24Foreground, { [r.show]: u }) }),
        ],
    });
}
