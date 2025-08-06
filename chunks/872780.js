n.d(t, { e: () => a });
var r = n(544891),
    i = n(570140),
    o = n(981631);
async function a(e) {
    try {
        let t = (
            await r.tn.get({
                url: o.ANM.APEX_EXPERIMENTS_METADATA,
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
        i.Z.dispatch({
            type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
            experiments: t,
        });
    } catch (e) {
        i.Z.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e);
    }
}
