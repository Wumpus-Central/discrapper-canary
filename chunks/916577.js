n.d(e, { n: () => l, mandatoryConsentMachine: () => d });
var s = n(209688),
    i = n(588233),
    r = n(171251),
    o = n(64755);
async function a(t, e) {
    let n = await s.t.get(r.t.getConsents, {
        signal: e,
        query: { type: "MANDATORY", language: "en", regulationType: t },
    });
    if (!n.ok) throw Error(`GET ${r.t.getConsents} failed: ${n.status} ${n.statusText}`);
    return n.data;
}
async function c(t, e) {
    let n = await s.t.post(r.t.submitMlConsent, t, { signal: e });
    if (!n.ok) throw Error(`POST ${r.t.submitMlConsent} failed: ${n.status} ${n.statusText}`);
}
let d = (0, o.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchConsent: (0, o.a)(async ({ input: t, signal: e }) => a(t.config.consentType, e)),
        submitConsent: (0, o.a)(async ({ input: t, signal: e }) =>
            c({ consents: [{ id: t.consentId, isSigned: t.isSigned }] }, e),
        ),
    },
    actions: {
        setConsent: (0, o.r)(({ event: t }) => ({ consent: t.output.consents[0], isSigned: !1, error: void 0 })),
        toggleSigned: (0, o.r)(({ context: t }) => ({ isSigned: !t.isSigned })),
        setError: (0, o.r)(({ event: t }) => ({ error: String(t.error) })),
        clearError: (0, o.r)({ error: () => void 0 }),
        resetContext: (0, o.r)(({ context: t }) => ({
            config: t.config,
            consent: void 0,
            isSigned: !1,
            error: void 0,
        })),
    },
    guards: { canSubmit: ({ context: t }) => !!t.consent?.id && t.isSigned },
}).createMachine({
    id: "mandatoryConsent",
    initial: "idle",
    context: ({ input: t }) => ({ config: t.config, consent: void 0, isSigned: !1, error: void 0 }),
    states: {
        idle: { on: { LOAD: { target: "loading", actions: "clearError" } } },
        loading: {
            invoke: {
                id: "fetchConsent",
                src: "fetchConsent",
                input: ({ context: t }) => ({ config: t.config }),
                onDone: { target: "display", actions: "setConsent" },
                onError: { target: "error", actions: "setError" },
            },
        },
        display: {
            on: {
                TOGGLE: { actions: "toggleSigned" },
                SUBMIT: { target: "submitting", guard: "canSubmit" },
                CANCEL: { target: "closed" },
                RETRY: { target: "loading", actions: "clearError" },
            },
        },
        submitting: {
            invoke: {
                id: "submitConsent",
                src: "submitConsent",
                input: ({ context: t }) => ({ consentId: t.consent?.id ?? "", isSigned: t.isSigned }),
                onDone: { target: "finished" },
                onError: { target: "display", actions: "setError" },
            },
        },
        error: {
            on: {
                RETRY: { target: "loading", actions: "clearError" },
                CANCEL: { target: "closed" },
                RESET: { target: "idle", actions: "resetContext" },
            },
        },
        finished: { type: "final" },
        closed: { type: "final" },
    },
});
function g(t) {
    let { context: e } = t,
        n = !!(e.isSigned && e.consent?.id);
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loading")
          ? { status: "loading" }
          : t.matches("display")
            ? {
                  status: "display",
                  title: e.consent?.title ?? "",
                  text: e.consent?.text ?? "",
                  isSigned: e.isSigned,
                  canSubmit: n,
                  error: e.error,
              }
            : t.matches("submitting")
              ? {
                    status: "submitting",
                    title: e.consent?.title ?? "",
                    text: e.consent?.text ?? "",
                    isSigned: e.isSigned,
                    canSubmit: !1,
                }
              : t.matches("finished")
                ? { status: "finished" }
                : t.matches("closed")
                  ? { status: "closed" }
                  : t.matches("error")
                    ? { status: "error", error: e.error ?? "Unknown error" }
                    : { status: "idle" };
}
function u({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        toggle() {
            t.send({ type: "TOGGLE" });
        },
        submit() {
            e?.("submit"), t.send({ type: "SUBMIT" });
        },
        cancel() {
            e?.("cancel"), t.send({ type: "CANCEL" });
        },
        retry() {
            e?.("retry"), t.send({ type: "RETRY" });
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function l(t) {
    return (0, o.c)({
        actor: (0, o.s)(d, { input: { config: t.config } }).start(),
        mapState: g,
        createApi: u,
        instrumentation: (0, i.o)(i.n.mlConsent),
    });
}
