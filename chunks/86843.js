a.d(s, { crossDocumentDataMatchMachine: () => u, w: () => d });
var e = a(768672),
    n = a(368499),
    c = a(288052),
    o = a(168056),
    r = a(550155);
async function i(t) {
    let [s] = await Promise.all([e.t.post(c.t.processCrossDocumentDataMatch, {}, { signal: t }), (0, r.t)(3e3)]);
    if (!s.ok) throw Error(`POST ${c.t.processCrossDocumentDataMatch} failed: ${s.status} ${s.statusText}`);
    return s.data;
}
let u = (0, o.t)({
    types: { context: {}, events: {} },
    actors: { processCrossDocumentDataMatch: (0, o.a)(async ({ signal: t }) => i(t)) },
}).createMachine({
    id: "crossDocumentDataMatch",
    initial: "idle",
    context: {},
    states: {
        idle: { on: { LOAD: { target: "processing" } } },
        processing: {
            invoke: {
                id: "processCrossDocumentDataMatch",
                src: "processCrossDocumentDataMatch",
                onDone: { target: "finished" },
                onError: { target: "finished" },
            },
        },
        finished: { type: "final" },
    },
});
function h(t) {
    return t.matches("processing")
        ? { status: "processing" }
        : t.matches("finished")
          ? { status: "finished" }
          : { status: "idle" };
}
function p({ actor: t }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
    };
}
function d() {
    return (0, o.l)({
        actor: (0, o.s)(u).start(),
        mapState: h,
        createApi: p,
        instrumentation: (0, n.s)(n.n.crossDocumentDataMatch),
    });
}
