let n;
function s() {
    return (void 0 === n && (n = void 0 === Intl?.Segmenter ? null : new Intl.Segmenter()), n);
}
l.d(
    t,
    {},
    {
        W: function (e) {
            let t = s();
            if (null == t) return e.length;
            let l = t.segment(e),
                n = 0;
            for (let e of l) n += 1;
            return n;
        },
        p: function (e) {
            let t = s();
            return null == t ? Array.from(e) : Array.from(t.segment(e), (e) => e.segment);
        },
    },
);
