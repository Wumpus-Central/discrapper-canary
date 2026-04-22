"use strict";
n.d(t, { n: () => o });
var r = n(150047),
    i = n(959462),
    s = n(3388),
    a = n(64700);
function o(e, t) {
    let { collection: n, onLoadMore: o, scrollOffset: l = 1 } = e,
        u = (0, a.useRef)(null),
        d = (0, i.J)((e) => {
            for (let t of e) t.isIntersecting && o && o();
        });
    (0, s.N)(
        () => (
            t.current &&
                ((u.current = new IntersectionObserver(d, {
                    root: (0, r.m)(null == t ? void 0 : t.current),
                    rootMargin: `0px ${100 * l}% ${100 * l}% ${100 * l}%`,
                })),
                u.current.observe(t.current)),
            () => {
                u.current && u.current.disconnect();
            }
        ),
        [n, d, t, l],
    );
}
