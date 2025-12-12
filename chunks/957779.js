n.d(t, { s: () => i });
var r = n(98076);
let i = (0, n(688560)._I)((e = {}) => {
    let t = {
        debugger: !1,
        stringify: !1,
        ...e,
    };
    return {
        name: "Debug",
        setup(e) {
            e.on("beforeSendEvent", (e, n) => {
                t.debugger,
                    (0, r.Cf)(() => {
                        t.stringify
                            ? (console.log(JSON.stringify(e, null, 2)),
                              n && Object.keys(n).length && console.log(JSON.stringify(n, null, 2)))
                            : (console.log(e), n && Object.keys(n).length && console.log(n));
                    });
            });
        },
    };
});
