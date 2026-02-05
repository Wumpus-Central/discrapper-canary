"use strict";
n.d(t, { r: () => _, w: () => f });
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(922512),
    l = n(189081),
    u = n(144914),
    c = n(652215);
let d = 50;
async function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A.entitledBranchIds;
    if (!(0, u.S)() || 0 === e.length) return [];
    let t = i().chunk(e, d);
    try {
        let e = t.map(async (e) =>
                (
                    await a.Bo.post({
                        url: c.Rsh.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                ).body.map(o.A.createFromServer),
            ),
            n = await Promise.all(e),
            r = i().flatten(n);
        return s.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_SUCCESS", branches: r }), r;
    } catch (t) {
        return s.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_FAIL", branchIds: e }), [];
    }
}
async function f(e) {
    try {
        let t = await a.Bo.get({ url: c.Rsh.OWNED_APPLICATION_BRANCHES(e), oldFormErrors: !0, rejectWithError: !0 }),
            n = Array.isArray(t.body) ? t.body.map(o.A.createFromServer) : [];
        return s.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS", applicationId: e, branches: n }), n;
    } catch (t) {
        return s.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL", applicationId: e }), [];
    }
}
