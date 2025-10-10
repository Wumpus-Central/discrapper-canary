n.d(t, { Z: () => i });
var a = n(951288);
n(647438);
var o = n(120356),
    s = n.n(o),
    r = n(785997),
    l = n(880837);
function i(e) {
    let { step: t } = e,
        n = t === r.F.AGE_GATE,
        o = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT,
        i = t === r.F.CUSTOMIZE_GUILD,
        c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD,
        u = i || c,
        d = o || u;
    return (0, a.jsxs)("div", {
        className: l.sidebar,
        children: [
            (0, a.jsx)("div", { className: s()(l.step1, { [l.show]: n }) }),
            (0, a.jsx)("div", { className: s()(l.step24Clouds, { [l.show]: d }) }),
            (0, a.jsx)("div", { className: s()(l.step34Flag, { [l.show]: u }) }),
            (0, a.jsx)("div", { className: s()(l.step24Base, { [l.show]: d }) }),
            (0, a.jsx)("div", { className: s()(l.step24Ground, { [l.show]: d }) }),
            (0, a.jsx)("div", { className: s()(l.step2Base, { [l.show]: o }) }),
            (0, a.jsx)("div", { className: s()(l.step2Character, { [l.show]: o }) }),
            (0, a.jsx)("div", { className: s()(l.step34Base, { [l.show]: u }) }),
            (0, a.jsx)("div", { className: s()(l.step3Character, { [l.show]: i }) }),
            (0, a.jsx)("div", { className: s()(l.step4Character, { [l.show]: c }) }),
            (0, a.jsx)("div", { className: s()(l.step24Foreground, { [l.show]: d }) }),
        ],
    });
}
