n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(606992),
    s = n(314897),
    l = n(843693),
    c = n(576125),
    u = n(112843),
    d = n(524484),
    f = n(675654);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = 16,
    m = 0.05;
function g(e) {
    var t, n;
    let { editorHeight: r, textValue: c, channelId: d } = e,
        _ = i.useRef(c),
        p = (0, a.Z)({ editorHeight: r }),
        g = (0, u.Z)(),
        E = (0, o.e7)([l.ZP, s.default], () => l.ZP.isComboing(s.default.getId(), d)),
        b = null != (t = null == p ? void 0 : p.left) ? t : 0,
        y = (null != (n = null == p ? void 0 : p.top) ? n : 0) - h,
        v = 0 === c.length,
        O = i.useMemo(() => Math.random() < m, [v]);
    return (
        i.useEffect(() => {
            0 !== c.length && c !== _.current && E && (g.fire(b, y, O ? { sprite: f.vv } : null), (_.current = c));
        }, [c, E, b, y, O, g]),
        null
    );
}
function E(e) {
    return (0, r.jsx)(c.Z, {
        confettiLocation: d.Hn.CHAT_INPUT,
        children: (0, r.jsx)(g, p({}, e))
    });
}
