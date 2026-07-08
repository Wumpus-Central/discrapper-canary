r.d(e, { y: () => d, signatureMachine: () => u });
var i = r(209688),
    a = r(588233),
    n = r(171251),
    s = r(64755);
async function o(t, e) {
    let { image: r, type: a, sendBase64: s = !1 } = t,
        o = s ? n.t.addSignatureV2 : n.t.addSignature,
        u = await i.t.post(o, s ? { base64Image: r } : r, {
            signal: e,
            headers: { "Content-Type": s ? "application/json" : "image/jpeg" },
            query: { type: a },
        });
    if (!u.ok) throw Error(`POST ${o} failed: ${u.status} ${u.statusText}`);
    return u.data;
}
let u = (0, s.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        submitSignature: (0, s.a)(async ({ input: t, signal: e }) => {
            let { ...r } = t;
            return o(r, e);
        }),
    },
    actions: {
        setSignatureValidity: (0, s.r)(({ event: t }) => ({ isValid: t.isValid, error: void 0 })),
        assignImageForSubmit: (0, s.r)(({ event: t }) => ({ image: t.image, error: void 0 })),
        setSignatureSubmitResult: (0, s.r)(({ event: t }) => ({ signatureSubmitResult: t.output, error: void 0 })),
        setErrorFromInvoke: (0, s.r)(({ event: t }) => {
            let e = t.error;
            return { error: e instanceof Error ? e.message : "string" == typeof e ? e : "Something went wrong" };
        }),
        clearError: (0, s.r)({ error: () => void 0 }),
        resetContext: (0, s.r)({ isValid: () => !1, image: () => void 0, error: () => void 0 }),
        trackSubmitAttempt: () => {
            (0, a.h)({ code: "continue", module: a.n.signature, screen: a.r.signatureInput });
        },
        trackError: ({ context: t }) => {
            (0, a.h)({
                code: "verificationError",
                module: a.n.signature,
                payload: t.error ? { error: t.error } : void 0,
            });
        },
    },
    guards: { canContinue: ({ context: t, event: e }) => t.isValid && "CONTINUE" === e.type && !!e.image },
}).createMachine({
    id: "signature",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        ...{ image: void 0, isValid: !1, error: void 0, signatureSubmitResult: void 0 },
    }),
    states: {
        idle: { on: { LOAD: "captureSignature" } },
        captureSignature: {
            on: {
                SIGNATURE_CHANGED: { actions: "setSignatureValidity" },
                CONTINUE: { target: "submittingSignature", guard: "canContinue", actions: "assignImageForSubmit" },
            },
        },
        submittingSignature: {
            entry: "trackSubmitAttempt",
            invoke: {
                id: "submitSignature",
                src: "submitSignature",
                input: ({ context: t }) => ({
                    image: t.image,
                    type: t.config.type,
                    sendBase64: t.config.sendBase64 ?? !1,
                }),
                onDone: { target: "success", actions: "setSignatureSubmitResult" },
                onError: { target: "error", actions: "setErrorFromInvoke" },
            },
        },
        success: { after: { 3e3: "finished" } },
        finished: { type: "final" },
        error: { entry: "trackError" },
    },
});
function c(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("captureSignature")
          ? { status: "capture", title: e.config.title, subtitle: e.config.subTitle, canContinue: e.isValid }
          : t.matches("submittingSignature")
            ? { status: "submitting" }
            : t.matches("success")
              ? { status: "success" }
              : t.matches("finished")
                ? { status: "finished", result: e.signatureSubmitResult }
                : t.matches("error")
                  ? { status: "error", error: e.error ?? "Upload failed" }
                  : { status: "idle" };
}
function g({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setSignatureValid(e) {
            t.send({ type: "SIGNATURE_CHANGED", isValid: e });
        },
        submit(r) {
            e?.("continue"), t.send({ type: "CONTINUE", image: r });
        },
    };
}
function d(t) {
    return (0, s.c)({
        actor: (0, s.s)(u, { input: { config: t.config } }).start(),
        mapState: c,
        createApi: g,
        instrumentation: (0, a.o)(a.n.signature),
    });
}
