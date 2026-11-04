let n;
function l() {
    return (void 0 === n && (n = void 0 === Intl?.Segmenter ? null : new Intl.Segmenter()), n);
}
s.d(
    t,
    {},
    {
        W: function (e) {
            let t = l();
            if (null == t) return e.length;
            let s = t.segment(e),
                n = 0;
            for (let e of s) n += 1;
            return n;
        },
        p: function (e) {
            let t = l();
            return null == t ? Array.from(e) : Array.from(t.segment(e), (e) => e.segment);
        },
    },
);
