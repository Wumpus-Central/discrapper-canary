(i.r(e),
    i.d(e, {
        createFieldComparisonManager: () => l,
        createFieldComparisonManagerFromActor: () => m,
        fieldComparisonMachine: () => o,
    }));
var s = i(41851),
    n = i(269882),
    r = i(528239),
    a = i(646613);
function u(t) {
    return "" !== t.firstName.trim() && "" !== t.lastName.trim();
}
let o = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        submitFields: (0, a.a)(async ({ input: t, signal: e }) =>
            (async function (t, e) {
                let i = await s.t.post(r.t.addCustomFields, t, { signal: e });
                if (!i.ok) throw Error(`POST ${r.t.addCustomFields} failed: ${i.status} ${i.statusText}`);
                return i.data;
            })({ customFields: t }, e),
        ),
    },
    actions: { setField: (0, a.r)(({ context: t, event: e }) => ({ fields: { ...t.fields, [e.field]: e.value } })) },
    guards: { canSubmit: ({ context: t }) => u(t.fields), apiSucceeded: ({ event: t }) => t.output.success },
}).createMachine({
    id: "fieldComparison",
    initial: "idle",
    context: ({ input: t }) => ({ config: t.config, fields: { firstName: "", lastName: "" } }),
    states: {
        idle: { on: { LOAD: "inputting" } },
        inputting: {
            on: { FIELD_CHANGED: { actions: "setField" }, SUBMIT: { target: "submitting", guard: "canSubmit" } },
        },
        submitting: {
            invoke: {
                id: "submitFields",
                src: "submitFields",
                input: ({ context: t }) => t.fields,
                onDone: [{ target: "success", guard: "apiSucceeded" }, { target: "error" }],
                onError: { target: "error" },
            },
        },
        success: { after: { 3e3: { target: "finished" } } },
        error: { on: { RETRY: { target: "inputting" }, SKIP: { target: "finished" } } },
        finished: { type: "final" },
    },
});
function d(t) {
    let { fields: e } = t.context;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("inputting")
          ? { status: "inputting", canSubmit: u(e), fields: e }
          : t.matches("submitting")
            ? { status: "submitting", fields: e }
            : t.matches("finished")
              ? { status: "finished" }
              : t.matches("success")
                ? { status: "success" }
                : t.matches("error")
                  ? { status: "error" }
                  : { status: "idle" };
}
function c({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setField(e, i) {
            t.send({ type: "FIELD_CHANGED", field: e, value: i });
        },
        submit() {
            (e?.("submit"), t.send({ type: "SUBMIT" }));
        },
        retry() {
            (e?.("retry"), t.send({ type: "RETRY" }));
        },
        skip() {
            (e?.("skip"), t.send({ type: "SKIP" }));
        },
    };
}
function l(t = {}) {
    return (0, a.l)({
        actor: (function (t = {}) {
            return (0, a.s)(o, { input: { config: t.config ?? {} } }).start();
        })(t),
        mapState: d,
        createApi: c,
        instrumentation: (0, n.s)(n.n.fieldComparison),
    });
}
function m(t) {
    return (0, a.l)({ actor: t, mapState: d, createApi: c, instrumentation: (0, n.s)(n.n.fieldComparison) });
}
