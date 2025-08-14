n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    i = n(785997),
    s = n(880837);
function l(e) {
    let { step: t } = e,
        n = t === i.F.AGE_GATE,
        o = t === i.F.CHOOSE_TEMPLATE || t === i.F.CREATION_INTENT,
        l = t === i.F.CUSTOMIZE_GUILD,
        c = t === i.F.CHANNEL_PROMPT || t === i.F.JOIN_GUILD,
        u = l || c,
        d = o || u;
    return (0, r.jsxs)("div", {
        className: s.sidebar,
        children: [
            (0, r.jsx)("div", { className: a()(s.step1, { [s.show]: n }) }),
            (0, r.jsx)("div", { className: a()(s.step24Clouds, { [s.show]: d }) }),
            (0, r.jsx)("div", { className: a()(s.step34Flag, { [s.show]: u }) }),
            (0, r.jsx)("div", { className: a()(s.step24Base, { [s.show]: d }) }),
            (0, r.jsx)("div", { className: a()(s.step24Ground, { [s.show]: d }) }),
            (0, r.jsx)("div", { className: a()(s.step2Base, { [s.show]: o }) }),
            (0, r.jsx)("div", { className: a()(s.step2Character, { [s.show]: o }) }),
            (0, r.jsx)("div", { className: a()(s.step34Base, { [s.show]: u }) }),
            (0, r.jsx)("div", { className: a()(s.step3Character, { [s.show]: l }) }),
            (0, r.jsx)("div", { className: a()(s.step4Character, { [s.show]: c }) }),
            (0, r.jsx)("div", { className: a()(s.step24Foreground, { [s.show]: d }) }),
        ],
    });
}
