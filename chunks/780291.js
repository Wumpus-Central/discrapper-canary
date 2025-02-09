n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(606992),
    o = n(314897),
    l = n(843693),
    u = n(576125),
    c = n(112843),
    d = n(524484),
    f = n(675654);
let _ = 16,
    p = 0.05;
function h(e) {
    var t, n;
    let { editorHeight: i, textValue: u, channelId: d } = e,
        h = r.useRef(u),
        m = (0, s.Z)({ editorHeight: i }),
        g = (0, c.Z)(),
        E = (0, a.e7)([l.ZP, o.default], () => l.ZP.isComboing(o.default.getId(), d)),
        v = null !== (t = null == m ? void 0 : m.left) && void 0 !== t ? t : 0,
        y = (null !== (n = null == m ? void 0 : m.top) && void 0 !== n ? n : 0) - _,
        I = 0 === u.length,
        T = r.useMemo(() => Math.random() < p, [I]);
    return (
        r.useEffect(() => {
            0 !== u.length && u !== h.current && E && (g.fire(v, y, T ? { sprite: f.vv } : null), (h.current = u));
        }, [u, E, v, y, T, g]),
        null
    );
}
function m(e) {
    return (0, i.jsx)(u.Z, {
        confettiLocation: d.Hn.CHAT_INPUT,
        children: (0, i.jsx)(h, { ...e })
    });
}
