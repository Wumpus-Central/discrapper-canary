r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(606992),
    l = r(314897),
    u = r(843693),
    c = r(576125),
    d = r(112843),
    f = r(524484),
    p = r(675654);
let h = 16,
    _ = 0.05;
function m(e) {
    var n, r;
    let { editorHeight: i, textValue: c, channelId: f } = e,
        m = a.useRef(c),
        g = (0, s.Z)({ editorHeight: i }),
        E = (0, d.Z)(),
        v = (0, o.e7)([u.ZP, l.default], () => u.ZP.isComboing(l.default.getId(), f)),
        y = null !== (n = null == g ? void 0 : g.left) && void 0 !== n ? n : 0,
        b = (null !== (r = null == g ? void 0 : g.top) && void 0 !== r ? r : 0) - h,
        I = 0 === c.length,
        T = a.useMemo(() => Math.random() < _, [I]);
    return (
        a.useEffect(() => {
            0 !== c.length && c !== m.current && v && (E.fire(y, b, T ? { sprite: p.vv } : null), (m.current = c));
        }, [c, v, y, b, T, E]),
        null
    );
}
function g(e) {
    return (0, i.jsx)(c.Z, {
        confettiLocation: f.Hn.CHAT_INPUT,
        children: (0, i.jsx)(m, { ...e })
    });
}
