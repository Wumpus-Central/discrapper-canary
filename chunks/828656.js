n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(999153),
    r = n(584922);
function l(e, t, n, l) {
    let [{ isDragging: a }, s, o] = (0, i.c)({
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
                let a = e.current.getBoundingClientRect(),
                    s = (a.bottom - a.top) / 2,
                    o = i.getClientOffset().y - a.top;
                if ((!(r < n) || !(o < s)) && (!(r > n) || !(o > s))) l(r, n), (t.index = n);
            }
        });
    return {
        drag: s,
        dragPreview: o,
        drop: c,
        isDragging: a
    };
}
