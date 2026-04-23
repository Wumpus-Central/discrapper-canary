n.d(t, { A: () => s });
var i = n(131346),
    l = n(744818);
function s(e, t, n, s) {
    let [{ isDragging: r }, a, o] = (0, i.i)({
            type: t,
            item: () => ({ index: n }),
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        [, d] = (0, l.H)({
            accept: t,
            hover(t, i) {
                if (null == e.current) return;
                let l = t.index;
                if (l === n) return;
                let r = e.current.getBoundingClientRect(),
                    a = (r.bottom - r.top) / 2,
                    o = i.getClientOffset().y - r.top;
                (l < n && o < a) || (l > n && o > a) || (s(l, n), (t.index = n));
            },
        });
    return { drag: a, dragPreview: o, drop: d, isDragging: r };
}
