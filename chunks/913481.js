n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(580929),
    s = n(17928),
    r = n(717421),
    o = n(734057),
    c = n(408822),
    d = n(558076),
    u = n(996752),
    p = n(662731),
    h = n(375708),
    m = n(958250),
    A = n(739549);
function x(e) {
    let { channelId: t, pendingNote: n, roomWidth: s, containerRef: d } = e,
        x = (0, u.F)(s).numericAvatarSize / 2,
        [g, f] = (0, r.z)(() => ({ x: -1 * x, y: -1 * x })),
        [C, y] = (0, l.useState)(!1);
    if (
        ((0, l.useEffect)(() => {
            let e = d.current,
                i = (e) => {
                    f({ x: e.offsetX, y: e.offsetY });
                },
                l = (i) => {
                    if (null != n) {
                        i.stopPropagation();
                        let l = i.offsetX,
                            a = i.offsetY,
                            s = o.A.getChannel(t)?.guild_id;
                        null != s &&
                            ((0, c.zK)(s, t, n, {
                                x: (100 * l) / (e?.clientWidth ?? 1),
                                y: (100 * a) / (e?.clientHeight ?? 1),
                            }),
                            y(!0));
                    }
                };
            return (
                e?.addEventListener("mousemove", i),
                e?.addEventListener("click", l),
                () => {
                    e?.removeEventListener("mousemove", i), e?.removeEventListener("click", l);
                }
            );
        }, [d, n, t, f]),
        !C)
    )
        return (0, i.jsx)(a.animated.div, {
            className: m.D,
            style: { left: g.x.to((e) => e - x / 2), top: g.y.to((e) => e - x / 2) },
            children: (0, i.jsx)("img", { src: A.A, alt: h.intl.string(p.default["Vj+S0/"]), style: { width: x } }),
        });
}
function g(e) {
    let { channelId: t, roomWidth: n, aspectRatio: a } = e,
        r = (0, l.useRef)(null),
        o = (0, s.bG)([d.A], () => d.A.getPendingNote(t));
    return (0, i.jsx)("div", {
        ref: r,
        className: m.k,
        style: { width: n, aspectRatio: a, pointerEvents: null != o ? "auto" : "none" },
        children: null != o && (0, i.jsx)(x, { channelId: t, pendingNote: o, roomWidth: n, containerRef: r }),
    });
}
