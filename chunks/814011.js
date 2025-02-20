n.d(t, { Z: () => l }), n(47120);
var r = n(327432),
    i = n(772096),
    o = n(925994),
    a = n(436660),
    s = n(887490);
function l(e) {
    return (
        (e.setFragmentData = (t) => {
            if (null != e.selection) {
                let n = (0, o.sk)(s.bN.richValue(e), {
                    mode: 'plain',
                    range: e.selection,
                    preventEmojiSurrogates: !0
                });
                t.setData('text/plain', n);
            }
        }),
        (e.insertData = (t) => {
            e.insertTextData(t);
        }),
        (e.insertFragmentData = (e) => !1),
        (e.insertTextData = (t) => {
            let n = t.getData('text/plain');
            if (0 === n.length) return !1;
            if (null != e.selection && s.M8.isExpanded(e.selection)) {
                let t = r.ML.string(e, e.selection),
                    o = (0, i.yw)(n),
                    l = (0, i.yw)(t);
                if (null != o && null == l) {
                    let [t, n] = s.M8.edges(e.selection);
                    return (
                        s.bN.withoutNormalizing(e, () => {
                            a.Q.select(e, t), e.insertText('['), a.Q.select(e, n), 0 === s.C0.compare(t.path, n.path) && a.Q.move(e, { distance: 1 }), e.insertText(']('.concat(o.target, ')'));
                        }),
                        !0
                    );
                }
                if (null != o && null != l) return a.Q.delete(e, { at: e.selection }), e.insertText(o.target), !0;
                a.Q.delete(e, { at: e.selection });
            }
            return e.insertText(n), !0;
        }),
        e
    );
}
