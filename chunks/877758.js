n.d(t, { Z: () => l });
var s = n(255367);
n(73800);
var a = n(120356),
    o = n.n(a),
    r = n(785997),
    i = n(594777);
function l(e) {
    let { step: t } = e,
        n = t === r.F.AGE_GATE,
        a = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT,
        l = t === r.F.CUSTOMIZE_GUILD,
        c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD,
        d = l || c,
        u = a || d;
    return (0, s.jsxs)('div', {
        className: i.sidebar,
        children: [(0, s.jsx)('div', { className: o()(i.step1, { [i.show]: n }) }), (0, s.jsx)('div', { className: o()(i.step24Clouds, { [i.show]: u }) }), (0, s.jsx)('div', { className: o()(i.step34Flag, { [i.show]: d }) }), (0, s.jsx)('div', { className: o()(i.step24Base, { [i.show]: u }) }), (0, s.jsx)('div', { className: o()(i.step24Ground, { [i.show]: u }) }), (0, s.jsx)('div', { className: o()(i.step2Base, { [i.show]: a }) }), (0, s.jsx)('div', { className: o()(i.step2Character, { [i.show]: a }) }), (0, s.jsx)('div', { className: o()(i.step34Base, { [i.show]: d }) }), (0, s.jsx)('div', { className: o()(i.step3Character, { [i.show]: l }) }), (0, s.jsx)('div', { className: o()(i.step4Character, { [i.show]: c }) }), (0, s.jsx)('div', { className: o()(i.step24Foreground, { [i.show]: u }) })]
    });
}
