r.d(t, {
    Mf: () => c,
    Y6: () => a,
    pF: () => l
});
var i = r(15729),
    n = r(731965);
let s = Object.freeze({
        inspectedStickerPosition: {
            rowIndex: -1,
            columnIndex: -1
        }
    }),
    o = (0, i.U)((e) => s),
    a = o,
    c = (e, t, r) => {
        (0, n.j)(() =>
            o.setState({
                inspectedStickerPosition: {
                    rowIndex: t,
                    columnIndex: e,
                    source: r
                }
            })
        );
    },
    l = () => {
        c(-1, -1);
    };
