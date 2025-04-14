n.d(t, { Z: () => s }), n(388685);
var r = n(999153),
    i = n(584922);
function s(e, t, n, s) {
    let [{ isDragging: l }, a, o] = (0, r.c)({
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
                let l = e.current.getBoundingClientRect(),
                    a = (l.bottom - l.top) / 2,
                    o = r.getClientOffset().y - l.top;
                (!(i < n) || !(o < a)) && ((i > n && o > a) || (s(i, n), (t.index = n)));
            }
        });
    return {
        drag: a,
        dragPreview: o,
        drop: c,
        isDragging: l
    };
}
