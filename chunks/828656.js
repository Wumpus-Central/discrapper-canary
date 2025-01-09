n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(999153),
    r = n(584922);
function l(e, t, n, l) {
    let [{ isDragging: s }, a, o] = (0, i.c)({
            type: t,
            item: () => ({ index: n }),
            collect: (e) => ({ isDragging: e.isDragging() })
        }),
        [, c] = (0, r.L)({
            accept: t,
            hover(t, i) {
                if (null == e.current) return;
                let r = t.index;
                if (r === n) return;
                let s = e.current.getBoundingClientRect(),
                    a = (s.bottom - s.top) / 2,
                    o = i.getClientOffset().y - s.top;
                if ((!(r < n) || !(o < a)) && (!(r > n) || !(o > a))) l(r, n), (t.index = n);
            }
        });
    return {
        drag: a,
        dragPreview: o,
        drop: c,
        isDragging: s
    };
}
