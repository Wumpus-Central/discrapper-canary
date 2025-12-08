n.d(t, { Z: () => r });
var a = n(54381);
n(473749);
var o = n(120356),
    s = n.n(o),
    l = n(785997),
    i = n(880837);
function r(e) {
    let { step: t } = e,
        n = t === l.F.AGE_GATE,
        o = t === l.F.CHOOSE_TEMPLATE || t === l.F.CREATION_INTENT,
        r = t === l.F.CUSTOMIZE_GUILD,
        c = t === l.F.CHANNEL_PROMPT || t === l.F.JOIN_GUILD,
        u = r || c,
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
            (0, a.jsx)("div", { className: s()(i.step3Character, { [i.show]: r }) }),
            (0, a.jsx)("div", { className: s()(i.step4Character, { [i.show]: c }) }),
            (0, a.jsx)("div", { className: s()(i.step24Foreground, { [i.show]: d }) }),
        ],
    });
}
