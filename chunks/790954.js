r.d(t, {
    Mf: () => a,
    Y6: () => s,
    pF: () => l
});
var n = r(97519),
    i = r(731965);
let o = Object.freeze({
        inspectedStickerPosition: {
            rowIndex: -1,
            columnIndex: -1
        }
    }),
    c = (0, n.U)((e) => o),
    s = c,
    a = (e, t, r) => {
        (0, i.j)(() =>
            c.setState({
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
