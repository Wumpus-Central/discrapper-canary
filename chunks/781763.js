"use strict";
n.d(t, { r: () => d, w: () => _ });
var r = n(735438),
    i = n.n(r),
    s = n(562465),
    a = n(73153),
    o = n(922512),
    l = n(189081),
    u = n(144914),
    c = n(652215);
async function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A.entitledBranchIds;
    if (!(0, u.S)() || 0 === e.length) return [];
    let t = i().chunk(e, 50);
    try {
        let e = t.map(async (e) =>
                (
                    await s.Bo.post({
                        url: c.Rsh.APPLICATION_BRANCHES,
                        body: { branch_ids: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                ).body.map(o.A.createFromServer),
            ),
            n = await Promise.all(e),
            r = i().flatten(n);
        return a.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_SUCCESS", branches: r }), r;
    } catch (t) {
        return a.h.dispatch({ type: "APPLICATION_BRANCHES_FETCH_FAIL", branchIds: e }), [];
    }
}
async function _(e) {
    try {
        let t = await s.Bo.get({ url: c.Rsh.OWNED_APPLICATION_BRANCHES(e), oldFormErrors: !0, rejectWithError: !0 }),
            n = Array.isArray(t.body) ? t.body.map(o.A.createFromServer) : [];
        return a.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS", applicationId: e, branches: n }), n;
    } catch (t) {
        return a.h.dispatch({ type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL", applicationId: e }), [];
    }
}
