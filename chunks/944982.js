t.d(e, { uT: () => g, K1: () => u, Nj: () => p, AG: () => d, certificateIssuanceMachine: () => w });
var a = t(768672),
    r = t(368499),
    o = t(288052),
    i = t(168056);
t(2537);
var n = t(138498);
async function c(s, e) {
    let { baseURL: t, headers: r } = (0, a.n)().defaults,
        i = (0, a.r)();
    return {
        blob: await (
            await (0, n.t)({
                method: "POST",
                url: `${t.endsWith("/") ? t.slice(0, -1) : t}${o.t.certificateIssuanceIssue}`,
                headers: { ...r, Accept: "application/octet-stream", ...(i ? { "X-Incode-Hardware-Id": i } : {}) },
                body: JSON.stringify({ password: s.password }),
                signal: e,
            })
        ).blob(),
    };
}
let d = 8,
    p = ["length", "uppercase", "lowercase", "number"],
    u = {
        length: "certificateIssuance.password.length",
        uppercase: "certificateIssuance.password.uppercase",
        lowercase: "certificateIssuance.password.lowercase",
        number: "certificateIssuance.password.number",
    };
function l(s) {
    return p.every((e) => s[e]);
}
let w = (0, i.t)({
    types: { context: {}, events: {}, input: {} },
    actors: { issueCertificate: (0, i.a)(async ({ input: s, signal: e }) => c({ password: s.password }, e)) },
    actions: {
        setPassword: (0, i.r)(({ event: s }) => {
            var e;
            return {
                password: s.password,
                passwordValidations: {
                    length: (e = s.password).length >= d,
                    uppercase: /[A-Z]/.test(e),
                    lowercase: /[a-z]/.test(e),
                    number: /[0-9]/.test(e),
                },
            };
        }),
        setBlob: (0, i.r)(({ event: s }) => ({ certificateBlob: "output" in s ? s.output.blob : void 0 })),
    },
    guards: { isPasswordValid: ({ context: s }) => l(s.passwordValidations) },
}).createMachine({
    id: "certificateIssuance",
    initial: "idle",
    context: ({ input: s }) => ({
        config: s.config,
        password: "",
        passwordValidations: { length: !1, uppercase: !1, lowercase: !1, number: !1 },
        certificateBlob: void 0,
    }),
    states: {
        idle: { on: { LOAD: { target: "password" } } },
        password: {
            on: {
                PASSWORD_CHANGED: { actions: "setPassword" },
                SUBMIT_PASSWORD: { target: "processing", guard: "isPasswordValid" },
            },
        },
        processing: {
            invoke: {
                id: "issueCertificate",
                src: "issueCertificate",
                input: ({ context: s }) => ({ password: s.password }),
                onDone: { target: "success", actions: "setBlob" },
                onError: { target: "error" },
            },
        },
        success: {
            on: {
                DOWNLOADED: { target: "downloaded" },
                DOWNLOAD_FAILED: { target: "error" },
                FINISH: { target: "finished" },
            },
        },
        downloaded: { on: { FINISH: { target: "finished" } } },
        error: { after: { 3e3: { target: "finished" } } },
        finished: { type: "final" },
    },
});
function f(s) {
    let { context: e } = s;
    return s.matches("password")
        ? {
              status: "password",
              password: e.password,
              passwordValidations: e.passwordValidations,
              canSubmit: l(e.passwordValidations),
          }
        : s.matches("processing")
          ? { status: "processing" }
          : s.matches("error")
            ? { status: "error" }
            : s.matches("success")
              ? { status: "success", blob: e.certificateBlob }
              : s.matches("downloaded")
                ? { status: "downloaded" }
                : s.matches("finished")
                  ? { status: "finished" }
                  : { status: "idle" };
}
function h({ actor: s }) {
    return {
        load() {
            s.send({ type: "LOAD" });
        },
        setPassword(e) {
            s.send({ type: "PASSWORD_CHANGED", password: e });
        },
        submitPassword() {
            s.send({ type: "SUBMIT_PASSWORD" });
        },
        markDownloaded() {
            s.send({ type: "DOWNLOADED" });
        },
        reportDownloadError() {
            s.send({ type: "DOWNLOAD_FAILED" });
        },
        finish() {
            s.send({ type: "FINISH" });
        },
    };
}
function g(s) {
    return (0, i.l)({
        actor: (0, i.s)(w, { input: { config: s.config } }).start(),
        mapState: f,
        createApi: h,
        instrumentation: (0, r.s)(r.n.certificateIssuance),
    });
}
