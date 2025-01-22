r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(327432),
    o = r(772096),
    s = r(925994),
    l = r(436660),
    u = r(887490);
function c(e) {
    return (
        (e.setFragmentData = (n) => {
            if (null != e.selection) {
                let r = (0, s.sk)(u.bN.richValue(e), {
                    mode: 'plain',
                    range: e.selection,
                    preventEmojiSurrogates: !0
                });
                n.setData('text/plain', r);
            }
        }),
        (e.insertData = (n) => {
            e.insertTextData(n);
        }),
        (e.insertFragmentData = (e) => !1),
        (e.insertTextData = (n) => {
            let r = n.getData('text/plain');
            if (0 === r.length) return !1;
            if (null != e.selection && u.M8.isExpanded(e.selection)) {
                let n = a.ML.string(e, e.selection),
                    i = (0, o.yw)(r),
                    s = (0, o.yw)(n);
                if (null != i && null == s) {
                    let [n, r] = u.M8.edges(e.selection);
                    return (
                        u.bN.withoutNormalizing(e, () => {
                            l.Q.select(e, n), e.insertText('['), l.Q.select(e, r), 0 === u.C0.compare(n.path, r.path) && l.Q.move(e, { distance: 1 }), e.insertText(']('.concat(i.target, ')'));
                        }),
                        !0
                    );
                }
                if (null != i && null != s) return l.Q.delete(e, { at: e.selection }), e.insertText(i.target), !0;
                l.Q.delete(e, { at: e.selection });
            }
            return e.insertText(r), !0;
        }),
        e
    );
}
