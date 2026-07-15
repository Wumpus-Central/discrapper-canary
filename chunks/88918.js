d.d(t, { w: () => h, consentMachine: () => Z });
var i = d(768672),
    e = d(368499),
    c = d(288052),
    a = d(168056);
async function s(l, t, d) {
    if (!l) throw Error("Combined consent id is required");
    let e = await i.t.get(c.t.getCombinedConsent, { signal: d, query: { id: l, language: t ?? "en" } });
    if (!e.ok) throw Error(`GET ${c.t.getCombinedConsent} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function n(l, t) {
    let d = await i.t.post(c.t.signCombinedConsent, l, { signal: t });
    if (!d.ok) throw Error(`POST ${c.t.signCombinedConsent} failed: ${d.status} ${d.statusText}`);
}
let Z = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchConsent: (0, a.a)(async ({ input: l, signal: t }) => s(l.consentId, l.language, t)),
        submitConsent: (0, a.a)(async ({ input: l, signal: t }) => {
            await n(
                {
                    languageConsentId: l.languageConsentId,
                    checkboxes: l.checkboxes.reduce((l, t) => ((l[t.id] = t.checked), l), {}),
                },
                t,
            );
        }),
    },
    actions: {
        setConsentData: (0, a.r)(({ event: l }) => {
            let t = l.output;
            return {
                title: t.title,
                richText: t.terms,
                languageConsentId: t.languageConsentId,
                checkboxes: t.consents.map((l) => ({
                    id: l.checkboxId,
                    label: l.consentText,
                    required: !l.optional,
                    checked: !1,
                })),
                error: void 0,
            };
        }),
        toggleCheckbox: (0, a.r)(({ context: l, event: t }) => {
            let d = t.checkboxId;
            return { checkboxes: l.checkboxes.map((l) => (l.id === d ? { ...l, checked: !l.checked } : l)) };
        }),
        setError: (0, a.r)(({ event: l }) => ({ error: String(l.error) })),
        clearError: (0, a.r)({ error: () => void 0 }),
        resetContext: (0, a.r)(({ context: l }) => ({
            config: l.config,
            title: "",
            richText: "",
            languageConsentId: "",
            checkboxes: [],
            error: void 0,
        })),
    },
    guards: { canSubmit: ({ context: l }) => l.checkboxes.filter((l) => l.required).every((l) => l.checked) },
}).createMachine({
    id: "consent",
    initial: "idle",
    context: ({ input: l }) => ({
        config: l.config,
        title: "",
        richText: "",
        languageConsentId: "",
        checkboxes: [],
        error: void 0,
    }),
    states: {
        idle: { on: { LOAD: { target: "loading", actions: "clearError" } } },
        loading: {
            invoke: {
                id: "fetchConsent",
                src: "fetchConsent",
                input: ({ context: l }) => ({
                    consentId: String(l.config.combinedConsents ?? l.config.consentId ?? ""),
                    language: l.config.language,
                }),
                onDone: { target: "display", actions: "setConsentData" },
                onError: { target: "error", actions: "setError" },
            },
        },
        display: {
            on: {
                TOGGLE_CHECKBOX: { actions: "toggleCheckbox" },
                SUBMIT: { target: "submitting", guard: "canSubmit" },
                RETRY: { target: "loading", actions: "clearError" },
            },
        },
        submitting: {
            invoke: {
                id: "submitConsent",
                src: "submitConsent",
                input: ({ context: l }) => ({ languageConsentId: l.languageConsentId, checkboxes: l.checkboxes }),
                onDone: { target: "finished" },
                onError: { target: "display", actions: "setError" },
            },
        },
        error: {
            on: {
                RETRY: { target: "loading", actions: "clearError" },
                RESET: { target: "idle", actions: "resetContext" },
            },
        },
        finished: { type: "final" },
    },
});
function b(l) {
    return l.filter((l) => l.required).every((l) => l.checked);
}
function m(l) {
    let t = (0, e.o)(l.value);
    if (void 0 !== t)
        switch (t) {
            case "display":
                return b(l.context.checkboxes)
                    ? "datasharingconsent.content.accepted"
                    : "datasharingconsent.content.default";
            case "submitting":
                return "datasharingconsent.content.accepted";
            default:
                return;
        }
}
function o(l) {
    let { context: t } = l,
        d = b(t.checkboxes);
    return l.matches("idle")
        ? { status: "idle" }
        : l.matches("loading")
          ? { status: "loading" }
          : l.matches("display")
            ? {
                  status: "display",
                  title: t.title,
                  richText: t.richText,
                  checkboxes: t.checkboxes,
                  canSubmit: d,
                  error: t.error,
              }
            : l.matches("submitting")
              ? { status: "submitting", title: t.title, richText: t.richText, checkboxes: t.checkboxes, canSubmit: !1 }
              : l.matches("finished")
                ? { status: "finished" }
                : l.matches("error")
                  ? { status: "error", error: t.error ?? "Unknown error" }
                  : { status: "idle" };
}
function u({ actor: l, trackElementClicked: t }) {
    return {
        load() {
            l.send({ type: "LOAD" });
        },
        toggleCheckbox(t) {
            l.send({ type: "TOGGLE_CHECKBOX", checkboxId: t });
        },
        submit() {
            t?.("submit"), l.send({ type: "SUBMIT" });
        },
        retry() {
            t?.("retry"), l.send({ type: "RETRY" });
        },
        reset() {
            l.send({ type: "RESET" });
        },
    };
}
function h(l) {
    return (0, a.l)({
        actor: (0, a.s)(Z, { input: { config: l.config } }).start(),
        mapState: o,
        createApi: u,
        instrumentation: (0, e.s)(e.n.combinedConsent, { getEventScreenName: m }),
    });
}
