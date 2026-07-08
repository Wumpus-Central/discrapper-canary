e.d(s, { g: () => f, antifraudMachine: () => o });
var n = e(209688),
    i = e(588233),
    a = e(171251),
    r = e(64755);
async function c(t) {
    let s = await n.t.get(a.t.processAntifraud, { signal: t });
    if (!s.ok) throw Error(`GET ${a.t.processAntifraud} failed: ${s.status} ${s.statusText}`);
    return s.data;
}
let o = (0, r.t)({
    types: { context: {}, events: {} },
    actors: { processAntifraud: (0, r.a)(async ({ signal: t }) => c(t)) },
}).createMachine({
    id: "antifraud",
    initial: "idle",
    context: {},
    states: {
        idle: { on: { LOAD: { target: "processing" } } },
        processing: {
            invoke: {
                id: "processAntifraud",
                src: "processAntifraud",
                onDone: { target: "finished" },
                onError: { target: "finished" },
            },
        },
        finished: { type: "final" },
    },
});
function d(t) {
    return t.matches("processing")
        ? { status: "processing" }
        : t.matches("finished")
          ? { status: "finished" }
          : { status: "idle" };
}
function u({ actor: t }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
    };
}
function f() {
    return (0, r.c)({
        actor: (0, r.s)(o).start(),
        mapState: d,
        createApi: u,
        instrumentation: (0, i.o)(i.n.antifraud),
    });
}
