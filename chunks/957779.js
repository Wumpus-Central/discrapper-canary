r.d(t, { s: () => a });
var n = r(98076);
let a = (0, r(688560)._I)((e = {}) => {
    let t = {
        debugger: !1,
        stringify: !1,
        ...e,
    };
    return {
        name: "Debug",
        setup(e) {
            e.on("beforeSendEvent", (e, r) => {
                t.debugger,
                    (0, n.Cf)(() => {
                        t.stringify
                            ? (console.log(JSON.stringify(e, null, 2)),
                              r && Object.keys(r).length && console.log(JSON.stringify(r, null, 2)))
                            : (console.log(e), r && Object.keys(r).length && console.log(r));
                    });
            });
        },
    };
});
