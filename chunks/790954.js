r.d(t, {
    Mf: () => a,
    Y6: () => c,
    pF: () => l
});
var n = r(230383),
    o = r(731965);
let i = Object.freeze({
        inspectedStickerPosition: {
            rowIndex: -1,
            columnIndex: -1
        }
    }),
    s = (0, n.U)((e) => i),
    c = s,
    a = (e, t, r) => {
        (0, o.j)(() =>
            s.setState({
                inspectedStickerPosition: {
                    rowIndex: t,
                    columnIndex: e,
                    source: r
                }
            })
        );
    },
    l = () => {
        a(-1, -1);
    };
