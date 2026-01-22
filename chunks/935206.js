n.d(t, { A: () => l }), n(896048);
var r = n(131346),
    i = n(744818);
function l(e, t, n, l) {
    let [{ isDragging: s }, a, c] = (0, r.i)({
            type: t,
            item: () => ({ index: n }),
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        [, o] = (0, i.H)({
            accept: t,
            hover(t, r) {
                if (null == e.current) return;
                let i = t.index;
                if (i === n) return;
                let s = e.current.getBoundingClientRect(),
                    a = (s.bottom - s.top) / 2,
                    c = r.getClientOffset().y - s.top;
                (i < n && c < a) || (i > n && c > a) || (l(i, n), (t.index = n));
            },
        });
    return {
        drag: a,
        dragPreview: c,
        drop: o,
        isDragging: s,
    };
}
