n.d(e, { l: () => p });
var t,
    l =
        588245 != n.j
            ? (((t = {})[(t.INNER_WIDTH = 1200)] = "INNER_WIDTH"),
              (t[(t.OVERFLOW_TOP = 304)] = "OVERFLOW_TOP"),
              (t[(t.OVERFLOW_BOTTOM = 212)] = "OVERFLOW_BOTTOM"),
              (t[(t.OVERFLOW_HORIZONTAL = 56)] = "OVERFLOW_HORIZONTAL"),
              t)
            : null,
    i = n(102607),
    a = n(374380);
function o(r, e) {
    return r.length > 0 ? Math.max(...r) : e;
}
function u(r, e, n) {
    return Math.max(0, r - (e - n));
}
function p(r) {
    let e = l.INNER_WIDTH,
        n = o(
            r.map((r) => {
                let { dims: n } = r;
                return Math.round(Math.max(0, (n.width - e) / 2));
            }),
            0,
        );
    return {
        innerWidth: e,
        overflowTop: o(
            r
                .filter((r) => {
                    let { layer: e } = r;
                    return e.type === a.O.STAPLE && e.anchor === i.T.TOP;
                })
                .map((r) => {
                    let { dims: e } = r;
                    return u(e.height, 716, l.OVERFLOW_TOP);
                }),
            0,
        ),
        overflowBottom: o(
            r
                .filter((r) => {
                    let { layer: e } = r;
                    return e.type === a.O.STAPLE && e.anchor === i.T.BOTTOM;
                })
                .map((r) => {
                    let { dims: e } = r;
                    return u(e.height, 424, l.OVERFLOW_BOTTOM);
                }),
            0,
        ),
        overflowHorizontal: n,
    };
}
