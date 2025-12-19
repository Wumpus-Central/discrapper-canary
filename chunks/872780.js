n.d(t, {
    e$: () => f,
    kI: () => p,
});
var r = n(442837),
    i = n(544891),
    a = n(588486),
    o = n(570140),
    s = n(633289),
    l = n(508825),
    c = n(981631);
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
async function f(e) {
    try {
        let t = (
            await i.tn.get({
                url: c.ANM.APEX_EXPERIMENTS_METADATA,
                query: { surface: e },
                rejectWithError: !0,
            })
        ).body.experiments.map((e) => ({
            id: e.id,
            name: e.name,
            title: e.title,
            revision: e.revision,
            unitType: e.unit_type,
            variants: e.variants.map((e) => ({
                id: e.id,
                label: e.label,
                type: e.type,
            })),
        }));
        o.Z.dispatch({
            type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
            experiments: t,
        });
    } catch (e) {
        o.Z.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e);
    }
}
async function p(e) {
    if (!(null != e && s.Z.hasLoaded(e)) && !(s.Z.isFetching(l.ZX) || s.Z.hasLoaded(l.ZX))) {
        o.Z.dispatch({
            type: "APEX_EXPERIMENTS_FETCH_START",
            unitId: l.ZX,
        });
        try {
            let e = await i.tn.get({
                url: c.ANM.APEX_EXPERIMENTS,
                query: { surface: a.dR.APP },
                rejectWithError: !1,
            });
            if ((null == e ? void 0 : e.body) != null) {
                let t = e.body,
                    { installation: n } = t,
                    i = u(t, ["installation"]);
                r.ZP.Emitter.batched(() => {
                    n &&
                        o.Z.dispatch({
                            type: "INSTALLATION_ID",
                            installation: n,
                        }),
                        o.Z.dispatch({
                            type: "APEX_EXPERIMENTS_FETCH_SUCCESS",
                            unitId: l.ZX,
                            experiments: i,
                        });
                });
            } else
                o.Z.dispatch({
                    type: "APEX_EXPERIMENTS_FETCH_FAILURE",
                    unitId: l.ZX,
                });
        } catch (e) {
            o.Z.dispatch({
                type: "APEX_EXPERIMENTS_FETCH_FAILURE",
                unitId: l.ZX,
            });
        }
    }
}
