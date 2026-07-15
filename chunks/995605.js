s.d(e, { g: () => p, antifraudMachine: () => o });
var n = s(768672),
    i = s(368499),
    r = s(288052),
    a = s(168056);
async function c(t) {
    let e = await n.t.get(r.t.processAntifraud, { signal: t });
    if (!e.ok) throw Error(`GET ${r.t.processAntifraud} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
let o = (0, a.t)({
    types: { context: {}, events: {} },
    actors: { processAntifraud: (0, a.a)(async ({ signal: t }) => c(t)) },
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
function u(t) {
    let e = (0, i.o)(t.value);
    if (void 0 !== e)
        switch (e) {
            case "processing":
                return "Antifraud.processing";
            case "finished":
                return "antifraud.success";
            default:
                return;
        }
}
function d(t) {
    return t.matches("processing")
        ? { status: "processing" }
        : t.matches("finished")
          ? { status: "finished" }
          : { status: "idle" };
}
function f({ actor: t }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
    };
}
function p() {
    return (0, a.l)({
        actor: (0, a.s)(o).start(),
        mapState: d,
        createApi: f,
        instrumentation: (0, i.s)(i.n.antifraud, { getEventScreenName: u }),
    });
}
