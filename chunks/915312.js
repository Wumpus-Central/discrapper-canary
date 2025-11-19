n.d(t, {
    LL: () => h,
    bN: () => f,
}),
    n(388685),
    n(49124),
    n(539854),
    n(953529);
var r = n(473749),
    a = n(663042),
    l = n(731965),
    i = n(692114),
    o = n(626135),
    u = n(532810),
    c = n(981631);
let s = new i.Z("a11y_violations"),
    d = (0, a.U)(() => ({ check: null }));
function f(e) {
    let t = (0, r.useCallback)((e) => {
        var t;
        if (e.hash !== (null == (t = d.getState().check) ? void 0 : t.hash))
            for (let [t, n] of ((0, l.j)(() => d.setState({ check: e })), e.violations.entries()))
                for (let e of n.instances.values())
                    for (let { trace: n, hash: r } of e) {
                        let e = JSON.stringify(r);
                        if (s.has(e));
                        else {
                            s.add(e);
                            let a = {
                                rule_id: t,
                                trace: n.join("\n"),
                                hash: r,
                            };
                            o.default.track(c.rMx.A11Y_RUNTIME_VIOLATION, a);
                        }
                    }
    }, []);
    (0, u.A$)(e, t);
}
function h() {
    var e = d((e) => {
        var t, n;
        return null != (n = null == (t = e.check) ? void 0 : t.violations) ? n : null;
    });
    if (null == e) return [];
    let t = [];
    for (let { instances: n, rule: r } of e.values())
        for (let [e, a] of n.entries()) {
            let n = a.map((e) => e.element),
                l = a[0].message;
            t.push({
                key: e,
                title: r.metadata.description,
                description: r.metadata.help,
                id: r.id,
                tags: r.tags,
                elements: n,
                message: l,
            });
        }
    return t;
}
