n.d(t, { A: () => u });
var i = n(64700),
    l = n(417597),
    a = n(533117),
    s = n(134753),
    r = n(666717),
    o = n(245704),
    c = n(254970),
    d = n(975501);
function u(e) {
    let { user: t, channelId: n, streamerId: u, stream: h, focused: m, canvas: A } = e,
        p = i.useRef(!1),
        g = (0, l.bG)([a.A], () => a.A.getDrawMode()),
        f = (0, o.A)((0, c.A)(t.id, n, u), h),
        _ = (0, o.A)((0, d.A)(t.id, n, u), h),
        E = i.useCallback(
            (e, t, n) => {
                if (null == A) return;
                let { x: i, y: l } = (0, r.av)(A, n);
                switch (t.type) {
                    case s.Z.LINE:
                        return f[e](t, i, l);
                    case s.Z.EMOJI_HOSE:
                        return _[e](t, i, l);
                }
            },
            [A, f, _],
        ),
        C = i.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), (p.current = !0), E("handleMouseDown", g, e));
            },
            [E, g, m],
        ),
        x = i.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), p.current && E("handleMouseMove", g, e));
            },
            [E, g, m],
        ),
        S = i.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), (p.current = !1), E("handleMouseUp", g, e));
            },
            [E, g, m],
        ),
        T = i.useCallback(
            (e) => {
                p.current && null != g && E("handleMouseEnter", g, e);
            },
            [E, g],
        );
    return (
        i.useEffect(() => {
            let e = (e) => {
                null != g && ((p.current = !1), E("handleMouseUp", g, e));
            };
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, [E, g]),
        {
            handleClick: i.useCallback(
                (e) => {
                    m && null != g && e.stopPropagation();
                },
                [g, m],
            ),
            handleMouseDown: C,
            handleMouseEnter: T,
            handleMouseMove: x,
            handleMouseUp: S,
        }
    );
}
