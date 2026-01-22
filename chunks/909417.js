n.d(t, { A: () => d });
var l = n(64700),
    r = n(417597),
    i = n(533117),
    a = n(134753),
    s = n(666717),
    o = n(245704),
    c = n(254970),
    u = n(975501);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: p, canvas: b } = e,
        g = l.useRef(!1),
        m = (0, r.bG)([i.A], () => i.A.getDrawMode()),
        h = (0, o.A)((0, c.A)(t.id, n, d), f),
        A = (0, o.A)((0, u.A)(t.id, n, d), f),
        y = l.useCallback(
            (e, t, n) => {
                if (null == b) return;
                let { x: l, y: r } = (0, s.av)(b, n);
                switch (t.type) {
                    case a.Z.LINE:
                        return h[e](t, l, r);
                    case a.Z.EMOJI_HOSE:
                        return A[e](t, l, r);
                }
            },
            [b, h, A],
        ),
        _ = l.useCallback(
            (e) => {
                p && null != m && (e.stopPropagation(), (g.current = !0), y("handleMouseDown", m, e));
            },
            [y, m, p],
        ),
        E = l.useCallback(
            (e) => {
                p && null != m && (e.stopPropagation(), g.current && y("handleMouseMove", m, e));
            },
            [y, m, p],
        ),
        v = l.useCallback(
            (e) => {
                p && null != m && (e.stopPropagation(), (g.current = !1), y("handleMouseUp", m, e));
            },
            [y, m, p],
        ),
        O = l.useCallback(
            (e) => {
                g.current && null != m && y("handleMouseEnter", m, e);
            },
            [y, m],
        );
    return (
        l.useEffect(() => {
            let e = (e) => {
                null != m && ((g.current = !1), y("handleMouseUp", m, e));
            };
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, [y, m]),
        {
            handleClick: l.useCallback(
                (e) => {
                    p && null != m && e.stopPropagation();
                },
                [m, p],
            ),
            handleMouseDown: _,
            handleMouseEnter: O,
            handleMouseMove: E,
            handleMouseUp: v,
        }
    );
}
