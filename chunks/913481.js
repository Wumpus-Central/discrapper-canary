n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(580929),
    s = n(17928),
    r = n(717421),
    o = n(734057),
    c = n(446243),
    d = n(558076),
    u = n(967388),
    h = n(996752),
    p = n(662731),
    m = n(375708),
    A = n(958250),
    x = n(739549);
function g(e) {
    let { channelId: t, pendingNote: n, roomWidth: s, containerRef: d } = e,
        u = (0, h.F)(s).numericAvatarSize / 2,
        [g, f] = (0, r.z)(() => ({ x: -1 * u, y: -1 * u, config: { clamp: !0, tension: 300 } })),
        C = (0, l.useRef)(!1);
    return (
        (0, l.useEffect)(() => {
            let e = d.current,
                i = (e) => {
                    f({ x: e.offsetX, y: e.offsetY });
                },
                l = (i) => {
                    if (C.current || null == n) return;
                    i.stopPropagation();
                    let l = i.offsetX,
                        a = i.offsetY,
                        s = o.A.getChannel(t)?.guild_id;
                    null != s &&
                        ((0, c.zK)(s, t, n, {
                            x: (100 * l) / (e?.clientWidth ?? 1),
                            y: (100 * a) / (e?.clientHeight ?? 1),
                        }),
                        (C.current = !0));
                },
                a = (e) => {
                    "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (0, c.HW)(t));
                };
            return (
                e?.addEventListener("mousemove", i),
                e?.addEventListener("click", l),
                document.addEventListener("keydown", a),
                () => {
                    e?.removeEventListener("mousemove", i),
                        e?.removeEventListener("click", l),
                        document.removeEventListener("keydown", a);
                }
            );
        }, [d, n, t, C, f]),
        (0, i.jsx)(a.animated.div, {
            className: A.D,
            style: { left: g.x.to((e) => e - u / 2), top: g.y.to((e) => e - u / 2) },
            children: (0, i.jsx)("img", { src: x.A, alt: m.intl.string(p.default["Vj+S0/"]), style: { width: u } }),
        })
    );
}
function f(e) {
    let { channelId: t, roomWidth: n } = e,
        a = (0, l.useRef)(null),
        r = (0, s.bG)([d.A], () => d.A.getPendingNote(t)),
        o = (0, s.bG)([d.A], () => d.A.getNotes(t));
    return o.length > 0 || null != r
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != r &&
                      (0, i.jsx)("div", {
                          ref: a,
                          className: A.k,
                          children: (0, i.jsx)(g, { channelId: t, pendingNote: r, roomWidth: n, containerRef: a }),
                      }),
                  o.map((e) => (0, i.jsx)(u.A, { channelId: t, note: e, roomWidth: n }, e.objectId)),
              ],
          })
        : null;
}
