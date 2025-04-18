n.d(t, { Z: () => l }), n(388685);
var r = n(327432),
    i = n(772096),
    a = n(925994),
    o = n(436660),
    s = n(887490);
function l(e) {
    return (
        (e.setFragmentData = (t) => {
            if (null != e.selection) {
                let n = (0, a.sk)(s.bN.richValue(e), {
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
                    a = (0, i.yw)(n),
                    l = (0, i.yw)(t);
                if (null != a && null == l) {
                    let [t, n] = s.M8.edges(e.selection);
                    return (
                        s.bN.withoutNormalizing(e, () => {
                            o.Q.select(e, t), e.insertText('['), o.Q.select(e, n), 0 === s.C0.compare(t.path, n.path) && o.Q.move(e, { distance: 1 }), e.insertText(']('.concat(a.target, ')'));
                        }),
                        !0
                    );
                }
                if (null != a && null != l) return o.Q.delete(e, { at: e.selection }), e.insertText(a.target), !0;
                o.Q.delete(e, { at: e.selection });
            }
            return e.insertText(n), !0;
        }),
        e
    );
}
