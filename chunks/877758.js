s.d(t, { Z: () => l });
var n = s(200651);
s(192379);
var a = s(120356),
    o = s.n(a),
    i = s(785997),
    r = s(578362);
function l(e) {
    let { step: t } = e,
        s = t === i.F.AGE_GATE,
        a = t === i.F.CHOOSE_TEMPLATE || t === i.F.CREATION_INTENT,
        l = t === i.F.CUSTOMIZE_GUILD,
        c = t === i.F.CHANNEL_PROMPT || t === i.F.JOIN_GUILD,
        d = l || c,
        _ = a || d;
    return (0, n.jsxs)('div', {
        className: r.sidebar,
        children: [(0, n.jsx)('div', { className: o()(r.step1, { [r.show]: s }) }), (0, n.jsx)('div', { className: o()(r.step24Clouds, { [r.show]: _ }) }), (0, n.jsx)('div', { className: o()(r.step34Flag, { [r.show]: d }) }), (0, n.jsx)('div', { className: o()(r.step24Base, { [r.show]: _ }) }), (0, n.jsx)('div', { className: o()(r.step24Ground, { [r.show]: _ }) }), (0, n.jsx)('div', { className: o()(r.step2Base, { [r.show]: a }) }), (0, n.jsx)('div', { className: o()(r.step2Character, { [r.show]: a }) }), (0, n.jsx)('div', { className: o()(r.step34Base, { [r.show]: d }) }), (0, n.jsx)('div', { className: o()(r.step3Character, { [r.show]: l }) }), (0, n.jsx)('div', { className: o()(r.step4Character, { [r.show]: c }) }), (0, n.jsx)('div', { className: o()(r.step24Foreground, { [r.show]: _ }) })]
    });
}
