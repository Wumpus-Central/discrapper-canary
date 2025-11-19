n.d(t, { Z: () => l });
var a = n(54381);
n(473749);
var o = n(120356),
    s = n.n(o),
    r = n(785997),
    i = n(880837);
function l(e) {
    let { step: t } = e,
        n = t === r.F.AGE_GATE,
        o = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT,
        l = t === r.F.CUSTOMIZE_GUILD,
        c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD,
        u = l || c,
        d = o || u;
    return (0, a.jsxs)("div", {
        className: i.sidebar,
        children: [
            (0, a.jsx)("div", { className: s()(i.step1, { [i.show]: n }) }),
            (0, a.jsx)("div", { className: s()(i.step24Clouds, { [i.show]: d }) }),
            (0, a.jsx)("div", { className: s()(i.step34Flag, { [i.show]: u }) }),
            (0, a.jsx)("div", { className: s()(i.step24Base, { [i.show]: d }) }),
            (0, a.jsx)("div", { className: s()(i.step24Ground, { [i.show]: d }) }),
            (0, a.jsx)("div", { className: s()(i.step2Base, { [i.show]: o }) }),
            (0, a.jsx)("div", { className: s()(i.step2Character, { [i.show]: o }) }),
            (0, a.jsx)("div", { className: s()(i.step34Base, { [i.show]: u }) }),
            (0, a.jsx)("div", { className: s()(i.step3Character, { [i.show]: l }) }),
            (0, a.jsx)("div", { className: s()(i.step4Character, { [i.show]: c }) }),
            (0, a.jsx)("div", { className: s()(i.step24Foreground, { [i.show]: d }) }),
        ],
    });
}
