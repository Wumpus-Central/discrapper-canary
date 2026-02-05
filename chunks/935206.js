"use strict";
n.d(t, { A: () => l });
var i = n(131346),
    s = n(522437);
function l(e, t, n, l) {
    let [{ isDragging: r }, a, o] = (0, i.i)({
            type: t,
            item: () => ({ index: n }),
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        [, d] = (0, s.H)({
            accept: t,
            hover(t, i) {
                if (null == e.current) return;
                let s = t.index;
                if (s === n) return;
                let r = e.current.getBoundingClientRect(),
                    a = (r.bottom - r.top) / 2,
                    o = i.getClientOffset().y - r.top;
                (s < n && o < a) || (s > n && o > a) || (l(s, n), (t.index = n));
            },
        });
    return { drag: a, dragPreview: o, drop: d, isDragging: r };
}
