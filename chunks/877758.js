s.d(t, {
    Z: function () {
        return l;
    }
});
var n = s(200651);
s(192379);
var o = s(120356),
    a = s.n(o),
    i = s(785997),
    r = s(363826);
function l(e) {
    let { step: t } = e,
        s = t === i.F.AGE_GATE,
        o = t === i.F.CHOOSE_TEMPLATE || t === i.F.CREATION_INTENT,
        l = t === i.F.CUSTOMIZE_GUILD,
        c = t === i.F.CHANNEL_PROMPT || t === i.F.JOIN_GUILD,
        d = l || c,
        u = o || d;
    return (0, n.jsxs)('div', {
        className: r.sidebar,
        children: [(0, n.jsx)('div', { className: a()(r.step1, { [r.show]: s }) }), (0, n.jsx)('div', { className: a()(r.step24Clouds, { [r.show]: u }) }), (0, n.jsx)('div', { className: a()(r.step34Flag, { [r.show]: d }) }), (0, n.jsx)('div', { className: a()(r.step24Base, { [r.show]: u }) }), (0, n.jsx)('div', { className: a()(r.step24Ground, { [r.show]: u }) }), (0, n.jsx)('div', { className: a()(r.step2Base, { [r.show]: o }) }), (0, n.jsx)('div', { className: a()(r.step2Character, { [r.show]: o }) }), (0, n.jsx)('div', { className: a()(r.step34Base, { [r.show]: d }) }), (0, n.jsx)('div', { className: a()(r.step3Character, { [r.show]: l }) }), (0, n.jsx)('div', { className: a()(r.step4Character, { [r.show]: c }) }), (0, n.jsx)('div', { className: a()(r.step24Foreground, { [r.show]: u }) })]
    });
}
