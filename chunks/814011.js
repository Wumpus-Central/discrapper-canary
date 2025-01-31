n.d(t, { Z: () => l }), n(47120);
var i = n(327432),
    r = n(772096),
    a = n(925994),
    s = n(436660),
    o = n(887490);
function l(e) {
    return (
        (e.setFragmentData = (t) => {
            if (null != e.selection) {
                let n = (0, a.sk)(o.bN.richValue(e), {
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
            if (null != e.selection && o.M8.isExpanded(e.selection)) {
                let t = i.ML.string(e, e.selection),
                    a = (0, r.yw)(n),
                    l = (0, r.yw)(t);
                if (null != a && null == l) {
                    let [t, n] = o.M8.edges(e.selection);
                    return (
                        o.bN.withoutNormalizing(e, () => {
                            s.Q.select(e, t), e.insertText('['), s.Q.select(e, n), 0 === o.C0.compare(t.path, n.path) && s.Q.move(e, { distance: 1 }), e.insertText(']('.concat(a.target, ')'));
                        }),
                        !0
                    );
                }
                if (null != a && null != l) return s.Q.delete(e, { at: e.selection }), e.insertText(a.target), !0;
                s.Q.delete(e, { at: e.selection });
            }
            return e.insertText(n), !0;
        }),
        e
    );
}
