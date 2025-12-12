n.d(t, { x: () => a });
var r = n(43696),
    i = n(959036);
function a(e) {
    let t = [];
    function n(e) {
        return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
    }
    return {
        $: t,
        add: function (a) {
            if (!(void 0 === e || t.length < e))
                return (0, i.$2)(new r.b("Not adding Promise because buffer limit was reached."));
            let o = a();
            return -1 === t.indexOf(o) && t.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {})), o;
        },
        drain: function (e) {
            return new i.cW((n, r) => {
                let a = t.length;
                if (!a) return n(!0);
                let o = setTimeout(() => {
                    e && e > 0 && n(!1);
                }, e);
                t.forEach((e) => {
                    (0, i.WD)(e).then(() => {
                        --a || (clearTimeout(o), n(!0));
                    }, r);
                });
            });
        },
    };
}
