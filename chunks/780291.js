r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(606992),
    l = r(314897),
    u = r(843693),
    c = r(576125),
    d = r(112843),
    f = r(524484),
    _ = r(675654);
let h = 16,
    p = 0.05;
function m(e) {
    var n, r;
    let { editorHeight: i, textValue: c, channelId: f } = e,
        m = a.useRef(c),
        g = (0, o.Z)({ editorHeight: i }),
        E = (0, d.Z)(),
        v = (0, s.e7)([u.ZP, l.default], () => u.ZP.isComboing(l.default.getId(), f)),
        I = null !== (n = null == g ? void 0 : g.left) && void 0 !== n ? n : 0,
        T = (null !== (r = null == g ? void 0 : g.top) && void 0 !== r ? r : 0) - h,
        b = 0 === c.length,
        y = a.useMemo(() => Math.random() < p, [b]);
    return (
        a.useEffect(() => {
            0 !== c.length && c !== m.current && v && (E.fire(I, T, y ? { sprite: _.vv } : null), (m.current = c));
        }, [c, v, I, T, y, E]),
        null
    );
}
function g(e) {
    return (0, i.jsx)(c.Z, {
        confettiLocation: f.Hn.CHAT_INPUT,
        children: (0, i.jsx)(m, { ...e })
    });
}
