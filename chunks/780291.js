n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(606992),
    s = n(314897),
    l = n(843693),
    c = n(576125),
    u = n(112843),
    d = n(524484),
    f = n(675654);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = 16,
    h = 0.05;
function g(e) {
    var t, n;
    let { editorHeight: r, textValue: c, channelId: d } = e,
        p = i.useRef(c),
        _ = (0, o.Z)({ editorHeight: r }),
        g = (0, u.Z)(),
        E = (0, a.e7)([l.ZP, s.default], () => l.ZP.isComboing(s.default.getId(), d)),
        b = null != (t = null == _ ? void 0 : _.left) ? t : 0,
        y = (null != (n = null == _ ? void 0 : _.top) ? n : 0) - m,
        O = 0 === c.length,
        v = i.useMemo(() => Math.random() < h, [O]);
    return (
        i.useEffect(() => {
            0 !== c.length && c !== p.current && E && (g.fire(b, y, v ? { sprite: f.vv } : null), (p.current = c));
        }, [c, E, b, y, v, g]),
        null
    );
}
function E(e) {
    return (0, r.jsx)(c.Z, {
        confettiLocation: d.Hn.CHAT_INPUT,
        children: (0, r.jsx)(g, _({}, e)),
    });
}
