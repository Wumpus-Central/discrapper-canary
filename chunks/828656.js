(n.d(t, { Z: () => l }), n(388685));
var r = n(562075),
    i = n(539202);
function l(e, t, n, l) {
    let [{ isDragging: a }, s, o] = (0, r.c)({
            type: t,
            item: () => ({ index: n }),
            collect: (e) => ({ isDragging: e.isDragging() })
        }),
        [, c] = (0, i.L)({
            accept: t,
            hover(t, r) {
                if (null == e.current) return;
                let i = t.index;
                if (i === n) return;
                let a = e.current.getBoundingClientRect(),
                    s = (a.bottom - a.top) / 2,
                    o = r.getClientOffset().y - a.top;
                (!(i < n) || !(o < s)) && ((i > n && o > s) || (l(i, n), (t.index = n)));
            }
        });
    return {
        drag: s,
        dragPreview: o,
        drop: c,
        isDragging: a
    };
}
