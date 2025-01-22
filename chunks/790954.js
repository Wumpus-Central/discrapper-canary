n.d(t, {
    Mf: function () {
        return c;
    },
    Y6: function () {
        return a;
    },
    pF: function () {
        return l;
    }
});
var r = n(15729),
    i = n(731965);
let o = Object.freeze({
        inspectedStickerPosition: {
            rowIndex: -1,
            columnIndex: -1
        }
    }),
    s = (0, r.U)((e) => o),
    a = s,
    c = (e, t, n) => {
        (0, i.j)(() =>
            s.setState({
                inspectedStickerPosition: {
                    rowIndex: t,
                    columnIndex: e,
                    source: n
                }
            })
        );
    },
    l = () => {
        c(-1, -1);
    };
