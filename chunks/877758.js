n.d(t, { Z: () => l });
var s = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    r = n(785997),
    i = n(594777);
function l(e) {
    let { step: t } = e,
        n = t === r.F.AGE_GATE,
        o = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT,
        l = t === r.F.CUSTOMIZE_GUILD,
        c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD,
        d = l || c,
        _ = o || d;
    return (0, s.jsxs)('div', {
        className: i.sidebar,
        children: [(0, s.jsx)('div', { className: a()(i.step1, { [i.show]: n }) }), (0, s.jsx)('div', { className: a()(i.step24Clouds, { [i.show]: _ }) }), (0, s.jsx)('div', { className: a()(i.step34Flag, { [i.show]: d }) }), (0, s.jsx)('div', { className: a()(i.step24Base, { [i.show]: _ }) }), (0, s.jsx)('div', { className: a()(i.step24Ground, { [i.show]: _ }) }), (0, s.jsx)('div', { className: a()(i.step2Base, { [i.show]: o }) }), (0, s.jsx)('div', { className: a()(i.step2Character, { [i.show]: o }) }), (0, s.jsx)('div', { className: a()(i.step34Base, { [i.show]: d }) }), (0, s.jsx)('div', { className: a()(i.step3Character, { [i.show]: l }) }), (0, s.jsx)('div', { className: a()(i.step4Character, { [i.show]: c }) }), (0, s.jsx)('div', { className: a()(i.step24Foreground, { [i.show]: _ }) })]
    });
}
