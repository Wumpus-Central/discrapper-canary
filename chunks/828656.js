n.d(t, { Z: () => s }), n(47120);
var r = n(999153),
    i = n(584922);
function s(e, t, n, s) {
    let [{ isDragging: a }, l, o] = (0, r.c)({
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
                    l = (a.bottom - a.top) / 2,
                    o = r.getClientOffset().y - a.top;
                (!(i < n) || !(o < l)) && ((i > n && o > l) || (s(i, n), (t.index = n)));
            }
        });
    return {
        drag: l,
        dragPreview: o,
        drop: c,
        isDragging: a
    };
}
