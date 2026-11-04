var t = r(41851),
    s = r(269882),
    i = r(528239),
    a = r(646613),
    o = r(184054),
    c = r(761969);
let l = (0, a.a)(async ({ signal: e }) =>
        (async function (e) {
            let n = await t.t.get(i.t.aesUnsignedDocuments, { signal: e });
            if (!n.ok) throw Error(`GET ${i.t.aesUnsignedDocuments} failed: ${n.status} ${n.statusText}`);
            return n.data;
        })(e),
    ),
    u = (0, a.a)(async ({ input: e, signal: n }) =>
        (
            await Promise.all(
                e.documents.map((r) =>
                    (async function (e, n, r) {
                        let s = "qe" === n ? i.t.qesSignDocument : i.t.aesSignDocument;
                        try {
                            return (await t.t.post(s, { documentRef: e, userConsented: !0 }, { signal: r })).data;
                        } catch (e) {
                            (0, c.n)(s, e);
                        }
                    })(r.documentRef, e.variant, n),
                ),
            )
        ).map((e) => ({ signed: !0 === e.success || !!e.signedDocumentUrl, signedDocumentUrl: e.signedDocumentUrl })),
    ),
    g = (0, a.a)(async ({ signal: e }) =>
        (async function (e) {
            let n = await t.t.post(i.t.aesGenerateUploadUrl, {}, { signal: e });
            if (!n.ok) throw Error(`POST ${i.t.aesGenerateUploadUrl} failed: ${n.status} ${n.statusText}`);
            return n.data;
        })(e),
    ),
    d = (0, a.a)(async ({ input: e, signal: n }) => {
        let r = e.getFileData();
        if (!r) throw Error("No file data available for upload");
        await (async function (e, n, r) {
            await (0, o.t)({
                method: "PUT",
                url: e,
                headers: { "Content-Type": "application/pdf" },
                body: n,
                signal: r,
            });
        })(e.preSignedUrl, r, n);
    }),
    p = ["terms", "signElectronically", "signDisplayed"],
    f = ["issuance", "qesAcknowledgement", "qscdConfirmation", "termsAgreement", "documentsReviewed"];
function m(e) {
    return Object.fromEntries(("qe" === e ? f : p).map((e) => [e, !1]));
}
function D(e) {
    return Object.values(e).every(Boolean);
}
let S = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: { fetchUnsignedDocs: l, signDocuments: u, generateUploadUrl: g, uploadFile: d },
    actions: {
        setDocuments: (0, a.r)(({ event: e }) => {
            let { output: n } = e;
            return { documents: n.documents ?? [] };
        }),
        setSignedDocuments: (0, a.r)(({ event: e }) => {
            let { output: n } = e;
            return { signedDocuments: n };
        }),
        setFile: (0, a.r)(({ event: e }) => {
            let { fileName: n, fileSize: r, fileUrl: t } = e;
            return { fileName: n, fileSize: r, fileUrl: t };
        }),
        setUploadUrl: (0, a.r)(({ event: e }) => {
            let { output: n } = e;
            return { preSignedUrl: n.preSignedUrl };
        }),
        updateConsent: (0, a.r)(({ context: e, event: n }) => {
            let { name: r, checked: t } = n;
            return { consentChecks: { ...e.consentChecks, [r]: t } };
        }),
        setViewingDocument: (0, a.r)(({ event: e }) => ({ viewingDocumentUrl: e.url })),
        clearViewingDocument: (0, a.r)({ viewingDocumentUrl: () => null }),
    },
    guards: {
        errorFromUpload: ({ context: e }) => "upload" === e.errorSource,
        shouldUpload: ({ context: e }) => !0 === e.config.uploadDocument,
        hasUploadUrl: ({ context: e }) => null !== e.preSignedUrl,
        allConsented: ({ context: e }) => D(e.consentChecks),
        hasDocuments: ({ event: e }) => {
            let { output: n } = e;
            return (n.documents?.length ?? 0) > 0;
        },
        allSigned: ({ event: e }) => {
            let { output: n } = e;
            return n.every((e) => e.signed);
        },
        allSignedAndDownload: ({ context: e, event: n }) => {
            let { output: r } = n;
            return r.every((e) => e.signed && !!e.signedDocumentUrl) && !0 === e.config.downloadDocument;
        },
    },
}).createMachine({
    id: "electronicSignature",
    initial: "idle",
    context: ({ input: e }) => ({
        config: e.config,
        getFileData: e.getFileData,
        documents: [],
        signedDocuments: [],
        fileName: null,
        fileSize: null,
        fileUrl: null,
        preSignedUrl: null,
        consentChecks: m(e.config.variant ?? "ae"),
        viewingDocumentUrl: null,
        errorMessage: "",
        errorSource: null,
    }),
    states: {
        idle: { on: { LOAD: [{ target: "uploading", guard: "shouldUpload" }, { target: "fetchingDocs" }] } },
        uploading: { on: { SELECT_FILE: { target: "reviewing", actions: "setFile" }, CLOSE: { target: "closed" } } },
        reviewing: {
            on: {
                REPLACE_FILE: {
                    target: "uploading",
                    actions: (0, a.r)({ fileName: () => null, fileSize: () => null, fileUrl: () => null }),
                },
                CONFIRM_FILE: [{ target: "uploadingFile", guard: "hasUploadUrl" }, { target: "generatingUploadUrl" }],
                CLOSE: { target: "closed" },
            },
        },
        generatingUploadUrl: {
            invoke: {
                id: "generateUploadUrl",
                src: "generateUploadUrl",
                onDone: { target: "uploadingFile", actions: "setUploadUrl" },
                onError: {
                    target: "error",
                    actions: (0, a.r)(({ event: e }) => ({
                        errorMessage: String(e.error ?? "aes.error"),
                        errorSource: "upload",
                    })),
                },
            },
        },
        uploadingFile: {
            invoke: {
                id: "uploadFile",
                src: "uploadFile",
                input: ({ context: e }) => ({ preSignedUrl: e.preSignedUrl, getFileData: e.getFileData }),
                onDone: { target: "fetchingDocs" },
                onError: {
                    target: "error",
                    actions: (0, a.r)(({ event: e }) => ({
                        errorMessage: String(e.error ?? "aes.error"),
                        errorSource: "upload",
                    })),
                },
            },
        },
        fetchingDocs: {
            invoke: {
                id: "fetchUnsignedDocs",
                src: "fetchUnsignedDocs",
                onDone: [
                    { target: "signing", guard: "hasDocuments", actions: "setDocuments" },
                    {
                        target: "error",
                        actions: (0, a.r)({ errorMessage: () => "aes.noDocuments", errorSource: () => "fetchDocs" }),
                    },
                ],
                onError: {
                    target: "error",
                    actions: (0, a.r)(({ event: e }) => ({
                        errorMessage: String(e.error ?? "aes.error"),
                        errorSource: "fetchDocs",
                    })),
                },
            },
        },
        signing: {
            on: {
                SET_CONSENT: { actions: "updateConsent" },
                VIEW_DOCUMENT: { actions: "setViewingDocument" },
                CLOSE_DOCUMENT_VIEW: { actions: "clearViewingDocument" },
                SIGN: { target: "processing", guard: "allConsented" },
                CLOSE: { target: "closed" },
            },
        },
        processing: {
            invoke: {
                id: "signDocuments",
                src: "signDocuments",
                input: ({ context: e }) => ({ documents: e.documents, variant: e.config.variant ?? "ae" }),
                onDone: [
                    { target: "successDownload", guard: "allSignedAndDownload", actions: "setSignedDocuments" },
                    { target: "success", guard: "allSigned", actions: "setSignedDocuments" },
                    {
                        target: "signError",
                        actions: (0, a.r)({ errorMessage: () => "aes.signingFailed", errorSource: () => "signing" }),
                    },
                ],
                onError: {
                    target: "signError",
                    actions: (0, a.r)(({ event: e }) => ({
                        errorMessage: String(e.error ?? "aes.error"),
                        errorSource: "signing",
                    })),
                },
            },
        },
        success: { after: { 3e3: "finished" } },
        successDownload: { on: { FINISH: { target: "finished" }, CLOSE: { target: "closed" } } },
        signError: { after: { 3e3: "finished" } },
        error: {
            on: {
                RETRY: [
                    {
                        target: "uploading",
                        guard: "errorFromUpload",
                        actions: (0, a.r)({
                            errorMessage: () => "",
                            errorSource: () => null,
                            fileName: () => null,
                            fileSize: () => null,
                            fileUrl: () => null,
                        }),
                    },
                    { target: "fetchingDocs", actions: (0, a.r)({ errorMessage: () => "", errorSource: () => null }) },
                ],
                CLOSE: { target: "closed" },
            },
        },
        finished: { type: "final" },
        closed: { type: "final" },
    },
});
function h(e) {
    let n = (0, s.o)(e.value);
    if (void 0 !== n)
        switch (n) {
            case "idle":
            case "uploading":
                return "AdSign.uploadDocument.default";
            case "reviewing":
            case "generatingUploadUrl":
            case "uploadingFile":
                return "AdSign.reviewDoc.default";
            case "fetchingDocs":
            case "signing":
                return "AdSign.AcceptSign.default";
            case "processing":
                return "AdSign.AcceptSign.processing";
            case "success":
            case "successDownload":
            case "finished":
                return "AdSign.success";
            case "error":
            case "signError":
                return "AdSign.AcceptSign.error";
            default:
                return;
        }
}
function U(e) {
    let n = (0, s.o)(e.value);
    if (void 0 !== n)
        switch (n) {
            case "idle":
            case "uploading":
                return "QSign.uploadDocument.default";
            case "reviewing":
            case "generatingUploadUrl":
            case "uploadingFile":
                return "QSign.review.default";
            case "fetchingDocs":
            case "signing":
                return "QSign.AcceptSign.default";
            case "processing":
                return "QSign.AcceptSign.processing";
            case "success":
            case "successDownload":
            case "finished":
                return "QSign.success";
            case "error":
            case "signError":
                return "QSign.AcceptSign.error";
            default:
                return;
        }
}
function E(e) {
    let { context: n } = e;
    if (
        e.matches("idle") ||
        e.matches("fetchingDocs") ||
        e.matches("generatingUploadUrl") ||
        e.matches("uploadingFile")
    )
        return { status: "loading" };
    if (e.matches("uploading")) return { status: "uploading", fileName: n.fileName };
    if (e.matches("reviewing")) return { status: "reviewing", fileName: n.fileName, fileUrl: n.fileUrl };
    if (e.matches("signing"))
        return {
            status: "signing",
            variant: n.config.variant ?? "ae",
            documents: n.documents,
            consentChecks: n.consentChecks,
            allConsented: D(n.consentChecks),
            viewingDocumentUrl: n.viewingDocumentUrl,
        };
    if (e.matches("processing")) return { status: "processing" };
    if (e.matches("success") || e.matches("successDownload"))
        return {
            status: "success",
            signedDocuments: n.signedDocuments,
            downloadDocument: !0 === n.config.downloadDocument,
        };
    if (e.matches("error")) return { status: "error", errorMessage: n.errorMessage };
    if (e.matches("signError")) return { status: "signError", errorMessage: n.errorMessage };
    if (e.matches("finished")) return { status: "finished" };
    if (e.matches("closed")) return { status: "closed" };
    throw Error(`Unhandled electronic-signature state: ${JSON.stringify(e.value)}`);
}
r.d(
    n,
    {},
    {
        a: D,
        i: f,
        n: S,
        r: p,
        s: m,
        t: function (e) {
            var n;
            let r = { current: null },
                t =
                    ((n = { config: e.config, getFileData: () => r.current }),
                    (0, a.s)(S, { input: { config: n.config, getFileData: n.getFileData } }).start()),
                i = "qe" === e.config.variant;
            return (0, a.l)({
                actor: t,
                mapState: E,
                createApi: (e) =>
                    (function ({ actor: e, trackElementClicked: n, fileDataRef: r }) {
                        return {
                            load() {
                                e.send({ type: "LOAD" });
                            },
                            setConsent(n, r) {
                                e.send({ type: "SET_CONSENT", name: n, checked: r });
                            },
                            selectFile(n, t, s) {
                                ((r.current = t),
                                    e.send({ type: "SELECT_FILE", fileName: n, fileSize: t.byteLength, fileUrl: s }));
                            },
                            replaceFile() {
                                ((r.current = null), e.send({ type: "REPLACE_FILE" }));
                            },
                            confirmFile() {
                                (n?.("confirmFile"), e.send({ type: "CONFIRM_FILE" }));
                            },
                            viewDocument(n) {
                                e.send({ type: "VIEW_DOCUMENT", url: n });
                            },
                            closeDocumentView() {
                                e.send({ type: "CLOSE_DOCUMENT_VIEW" });
                            },
                            sign() {
                                (n?.("sign"), e.send({ type: "SIGN" }));
                            },
                            finish() {
                                (n?.("finish"), e.send({ type: "FINISH" }));
                            },
                            retry() {
                                (n?.("retry"), (r.current = null), e.send({ type: "RETRY" }));
                            },
                            close() {
                                (n?.("close"), e.send({ type: "CLOSE" }));
                            },
                        };
                    })({ ...e, fileDataRef: r }),
                instrumentation: (0, s.s)(i ? s.n.qeSignature : s.n.aeSignature, { getEventScreenName: i ? U : h }),
            });
        },
    },
);
