n.d(t, { $: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(168179),
    a = n(147282);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
        n = t / 2 - 12;
    return Math.max(-n, Math.min(n, e));
};
function c(e) {
    let { caretConfig: t, className: n } = e,
        { position: r, align: c, customOffset: d } = t,
        u =
            'custom' === c && void 0 !== d
                ? {
                      '--custom-caret-offset-x': ['top', 'bottom'].includes(r) ? ''.concat(o(d), 'px') : '0px',
                      '--custom-caret-offset-y': ['left', 'right'].includes(r) ? ''.concat(o(d), 'px') : '0px'
                  }
                : void 0,
        m = s()(a.caret, a['caret--'.concat(r)], a['caret--'.concat(c)], n);
    return (0, i.jsx)('div', {
        className: m,
        style: u,
        children: (0, i.jsx)(l.v, {})
    });
}
