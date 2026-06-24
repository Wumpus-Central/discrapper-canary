i.d(t, { a: () => _, c: () => w, i: () => m, l: () => p, n: () => D, o: () => y, r: () => S, s: () => L, t: () => F });
var r,
    n,
    o = class {
        constructor(e = 1, t = 3e4) {
            (this.pending = []),
                (this.available = []),
                (this.processing = new Set()),
                (this.maxId = e - 1),
                (this.acquireTimeoutMs = t);
            for (let t = 0; t < e; t++) this.available.push(t);
        }
        async acquire() {
            if (this.available.length > 0) {
                let e = this.available.shift();
                return this.processing.add(e), e;
            }
            return new Promise((e, t) => {
                let i = {
                    resolve: (t) => {
                        clearTimeout(i.timer), this.processing.add(t), e(t);
                    },
                    reject: (e) => {
                        clearTimeout(i.timer), t(e);
                    },
                    timer: setTimeout(() => {
                        console.error(
                            `SemaphoreProvider: all slots occupied for ${this.acquireTimeoutMs}ms, ${this.pending.length} request(s) waiting`,
                        );
                    }, this.acquireTimeoutMs),
                };
                this.pending.push(i);
            });
        }
        release(e) {
            e < 0 || e > this.maxId
                ? console.error(`SemaphoreProvider: invalid threadId ${e}`)
                : this.processing.has(e)
                  ? (this.processing.delete(e),
                    this.pending.length > 0 ? this.pending.shift().resolve(e) : this.available.unshift(e))
                  : console.error(`SemaphoreProvider: double-release of threadId ${e}`);
        }
        reset() {
            let e = this.pending;
            (this.pending = []), (this.available = []), (this.processing = new Set());
            for (let e = 0; e <= this.maxId; e++) this.available.push(e);
            for (let t of e) t.reject(Error("SemaphoreProvider reset: pending acquire cancelled"));
        }
        async withLock(e, ...t) {
            let i = await this.acquire();
            try {
                return await e(i, ...t);
            } finally {
                this.release(i);
            }
        }
    };
"u" > typeof window && void 0 === window.wasmArrayBuffer && (window.wasmArrayBuffer = null);
let s = null,
    a = null;
async function l(e) {
    let t = await import(e);
    if ("function" != typeof t.Module) throw Error(`WASM glue at ${e} did not export a Module factory`);
    return t.Module;
}
async function c(e) {
    let t = await fetch(e);
    if (!t.ok) throw Error(`Failed to fetch WASM binary at ${e}: ${t.status} ${t.statusText}`);
    return new Uint8Array(await t.arrayBuffer());
}
async function d(e, t) {
    return (window.wasmArrayBuffer = await c(t)), await e();
}
async function u(e) {
    return (
        a ||
        s ||
        (s = (async () => {
            try {
                let t = !1 !== e.useSimd,
                    i = e.wasmSimdPath ?? e.wasmPath;
                if (t && i !== e.wasmPath)
                    try {
                        let t = await l(e.glueCodeSimdPath ?? i.replace(/\.wasm($|\?)/, ".js$1"));
                        window.Module = t;
                        let r = { wasmModule: await d(t, i), simdUsed: !0 };
                        return (a = r), r;
                    } catch (e) {
                        console.warn("[Incode SDK] SIMD WASM load failed, falling back to non-SIMD", e);
                    }
                let r = await l(e.glueCodePath);
                window.Module = r;
                let n = { wasmModule: await d(r, e.wasmPath), simdUsed: !1 };
                return (a = n), n;
            } catch (e) {
                throw ((s = null), e);
            }
        })())
    );
}
let h =
        (((r = {})[(r.IdCaptureV1x = 0)] = "IdCaptureV1x"),
        (r[(r.IdCaptureV2x = 1)] = "IdCaptureV2x"),
        (r[(r.IdCaptureV3x = 2)] = "IdCaptureV3x"),
        r),
    p =
        (((n = {})[(n.IdBlurGlarePipeline = 0)] = "IdBlurGlarePipeline"),
        (n[(n.IdBarcodeAndTextQualityPipeline = 1)] = "IdBarcodeAndTextQualityPipeline"),
        (n[(n.IdVideoSelfiePipeline = 2)] = "IdVideoSelfiePipeline"),
        (n[(n.SelfieWithAggregationMetrics = 3)] = "SelfieWithAggregationMetrics"),
        (n[(n.SelfieWithQualityMetrics = 4)] = "SelfieWithQualityMetrics"),
        (n[(n.OnDeviceSelfieWorkflow = 5)] = "OnDeviceSelfieWorkflow"),
        n);
async function f(e, t, i = !0, ...r) {
    let n = async () => {
        for (;;) {
            if (t(...r)) return;
            await new Promise((e) => setTimeout(e, 0));
        }
    };
    i ? await e.withLock(n) : await n();
}
var m = class extends Error {
    constructor(e, t, i) {
        super(e),
            (this.name = "WasmWebClientError"),
            (this.status = t),
            (this.statusCode = t),
            (t > 0 || void 0 !== i) && (this.response = { status: t, data: i });
    }
};
let g = null,
    C = null,
    v = new o(4);
async function y(e, t, i, r, n) {
    if (!g)
        return (
            C ||
            (C = (async () => {
                try {
                    let { wasmModule: o } = await u({
                        wasmPath: e,
                        wasmSimdPath: t,
                        glueCodePath: i,
                        glueCodeSimdPath: r || void 0,
                        useSimd: n,
                    });
                    if ("function" != typeof o.WebClient)
                        throw Error(
                            "WASM module does not expose a WebClient class. Update webLib.wasm to a build that includes WebClient.",
                        );
                    g = new o.WebClient();
                } catch (e) {
                    throw ((C = null), e);
                }
            })())
        );
}
async function w(e, t, i, r, n) {
    let o = E();
    o.resetSessionState?.(), o.setDefaultHeaders?.(r), await f(v, () => o.createApi(e, t, n, i), !1);
    let s = o.getRequestResult(-1);
    if (s.hasError) throw new m(s.errorMessage || "WebClient handshake failed", s.statusCode, s.result);
}
async function _(e, t, i, r, n, o, s, a = !1) {
    let l = E(),
        c = ((e) => {
            if (!e) return;
            let t = {};
            for (let i of Object.keys(e)) {
                let r = e[i];
                null != r && (t[i] = String(r));
            }
            return t;
        })(n);
    return v.withLock(async (n) => {
        s &&
            l.setOnUploadProgress &&
            l.setOnUploadProgress((e) => {
                try {
                    s(e);
                } catch (e) {
                    console.error("WasmWebClient: error in onUploadProgress callback", e);
                }
            });
        try {
            return (
                await f(
                    v,
                    () =>
                        (function (e, t, i, r, n, o, s, a, l) {
                            switch (t) {
                                case "GET":
                                    return e.get(i, r, s, o, a);
                                case "POST":
                                    return e.post(i, r, n ?? {}, o, s, a, l);
                                case "PUT":
                                    return e.put(i, r, n ?? {}, o, s, a, l);
                                case "PATCH":
                                    return e.patch(i, r, n ?? {}, o, s, a, l);
                                case "DELETE":
                                    return e.del(i, r, n ?? {}, o, s, a, l);
                                default:
                                    throw Error(`Unsupported WASM HTTP method: ${t}`);
                            }
                        })(l, e, n, t, i, r, c, o, a),
                    !1,
                ),
                (function (e, t) {
                    let i = e.getRequestResult(t);
                    if (i.hasError)
                        throw new m(i.errorMessage || "WasmWebClient request failed", i.statusCode, i.result);
                    return { data: i.result, status: i.statusCode };
                })(l, n)
            );
        } finally {
            l.clearOnUploadProgress?.(n), l.clearOnDownloadProgress?.(n);
        }
    });
}
let b = null;
function L(e) {
    b = e;
}
function E() {
    if (!g) throw Error("WasmWebClient not initialized. Call initializeWasmWebClient() first.");
    return g;
}
var S = class e {
    constructor() {
        (this.versionsFile = null),
            (this.modelsBuffers = null),
            (this.inputImageBuffer = null),
            (this.wasmModule = null),
            (this.workflowApiUtilities = null),
            (this.utilityApi = null),
            (this.idCaptureWasmApi = null),
            (this.faceProcessingWasmApi = null),
            (this.webApi = null),
            (this.imageWidth_ = null),
            (this.imageHeight_ = null),
            (this.pipelines_ = null),
            (this.isInitialized_ = !1),
            (this.inspectorOpened_ = !1),
            (this.wasmCallSemaphore = new o()),
            (this.Module = null);
    }
    async initialize(e, t, i, r, n, o, s) {
        await this.freeResources(), (this.pipelines_ = s), (this.versionsFile = o);
        let { wasmModule: a, simdUsed: l } = await u({
            glueCodePath: i,
            glueCodeSimdPath: r || void 0,
            wasmPath: e,
            wasmSimdPath: t,
            useSimd: n,
        });
        return (
            (this.wasmModule = a),
            (this.Module = window.Module),
            (this.workflowApiUtilities = new this.wasmModule.WorkflowApiUtilities()),
            (this.utilityApi = new this.wasmModule.UtilityApi()),
            (this.idCaptureWasmApi = new this.wasmModule.IdCaptureApi()),
            (this.faceProcessingWasmApi = new this.wasmModule.FaceProcessingApi()),
            (this.webApi = new this.wasmModule.WebApi({
                post(e, t, i) {
                    let r = i ?? {},
                        n = b;
                    return n
                        ? n(e, t, r)
                        : _("POST", e, t, r.headers ?? {}, r.params, r.timeout ?? 3e4, void 0, !0 === r.ie);
                },
            })),
            (this.isInitialized_ = !0),
            l
        );
    }
    static getInstance() {
        return e.instance || (e.instance = new e()), e.instance;
    }
    isInitialized() {
        return (
            null != this.workflowApiUtilities &&
            null != this.utilityApi &&
            null != this.idCaptureWasmApi &&
            null != this.faceProcessingWasmApi &&
            this.isInitialized_
        );
    }
    async allocateImageBuffers(e, t) {
        this.checkWasmInitialization("Unable to allocate image buffers, cpp API hasn't been initialized"),
            (e &&
                t &&
                e == this.imageWidth_ &&
                t == this.imageHeight_ &&
                this.inputImageBuffer &&
                e * t * 4 === this.inputImageBuffer.length) ||
                ((this.imageWidth_ = e),
                (this.imageHeight_ = t),
                (this.inputImageBuffer = this.workflowApiUtilities.allocateInputImageBuffer(e, t, 4)));
    }
    async handleDetectionCallAndUpdateState(e) {
        this.checkWasmInitialization("Unable to update pipeline state, cpp API hasn't been initialized"),
            this.workflowApiUtilities.handleDetectionCallAndUpdateState(this.pipelineTypeToWasmEnum(e));
    }
    ens(e) {
        return (
            this.checkWasmInitialization("Unable to encrypt the image, cpp API hasn't been initialized"),
            this.utilityApi.ens(e)
        );
    }
    isVirtualCamera(e) {
        return (
            this.checkWasmInitialization("Unable to check if the camera is virtual, cpp API hasn't been initialized"),
            !!e && this.utilityApi.isVirtualCamera(e)
        );
    }
    estimatePerformance() {
        return (
            this.checkWasmInitialization("Unable to estimate performance, cpp API hasn't been initialized"),
            this.utilityApi.estimatePerformance()
        );
    }
    async analyzeFrame(e) {
        this.checkWasmInitialization("Unable to analyze the frame, cpp API hasn't been initialized"),
            await this.allocateImageBuffers(e.width, e.height),
            this.inputImageBuffer.set(e.data),
            this.utilityApi.analyzeFrame();
    }
    async freeResources() {
        (this.versionsFile = null),
            (this.modelsBuffers = null),
            (this.inputImageBuffer = null),
            (this.imageWidth_ = null),
            (this.imageHeight_ = null),
            (this.pipelines_ = null),
            (window.wasmArrayBuffer = null),
            this.workflowApiUtilities &&
                "function" == typeof this.workflowApiUtilities.delete &&
                (this.workflowApiUtilities.delete(), (this.workflowApiUtilities = null)),
            this.utilityApi &&
                "function" == typeof this.utilityApi.delete &&
                (this.utilityApi.delete(), (this.utilityApi = null)),
            this.idCaptureWasmApi &&
                "function" == typeof this.idCaptureWasmApi.delete &&
                (this.idCaptureWasmApi.delete(), (this.idCaptureWasmApi = null)),
            this.faceProcessingWasmApi &&
                "function" == typeof this.faceProcessingWasmApi.delete &&
                (this.faceProcessingWasmApi.delete(), (this.faceProcessingWasmApi = null)),
            this.webApi && "function" == typeof this.webApi.delete && this.webApi.delete(),
            (this.webApi = null),
            (this.wasmModule = null),
            (this.isInitialized_ = !1);
    }
    resetPipeline(e) {
        this.checkWasmInitialization("Unable to reset pipeline, cpp API hasn't been initialized"),
            this.workflowApiUtilities.resetWorkflow(this.pipelineTypeToWasmEnum(e));
    }
    resetAllPipelines() {
        for (let [e, t] of (this.checkWasmInitialization("Unable to reset pipelines, cpp API hasn't been initialized"),
        this.pipelines_))
            this.resetPipeline(e);
    }
    resetOther() {
        this.checkWasmInitialization("Unable to reset other states, cpp API hasn't been initialized"),
            this.utilityApi.resetOther();
    }
    reset() {
        this.resetAllPipelines(), this.resetOther();
    }
    async process(e, t) {
        if (
            (this.checkWasmInitialization("Unable to process the image, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        switch ((this.inputImageBuffer.set(e.data), t)) {
            case p.IdBlurGlarePipeline:
            case p.IdBarcodeAndTextQualityPipeline:
                return this.idCaptureWasmApi.runIdCaptureWorkflow(this.pipelineTypeToWasmEnum(t));
            case p.IdVideoSelfiePipeline:
                return this.idCaptureWasmApi.runIdVideoSelfieWorkflow();
            case p.SelfieWithAggregationMetrics:
            case p.SelfieWithQualityMetrics:
            case p.OnDeviceSelfieWorkflow:
                return this.faceProcessingWasmApi.runSelfieWorkflow(this.pipelineTypeToWasmEnum(t));
            default:
                throw Error("Unknown pipeline type");
        }
    }
    async runIdCapture(e) {
        if (
            (this.checkWasmInitialization("Unable to run Id Capture, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        return this.inputImageBuffer.set(e.data), this.idCaptureWasmApi.runIdCapture();
    }
    async runSelfieCapture(e) {
        if (
            (this.checkWasmInitialization("Unable to run Selfie Capture, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        return this.inputImageBuffer.set(e.data), this.faceProcessingWasmApi.runSelfieCapture();
    }
    async setFacePositionConstraints(e, t, i, r, n) {
        this.checkWasmInitialization("Unable to set face position constraints, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFacePositionConstraints(this.pipelineTypeToWasmEnum(e), t, i, r, n);
    }
    async setFaceDetectionThresholds(e, t, i, r, n, o, s, a, l, c, d) {
        this.checkWasmInitialization("Unable to set face detection thresholds, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingThresholds(
                this.pipelineTypeToWasmEnum(e),
                t,
                i,
                r,
                n,
                o,
                s,
                a,
                l,
                c,
                d,
            );
    }
    async setFaceAttributesThresholds(e, t, i, r, n) {
        this.checkWasmInitialization("Unable to set face attributes thresholds, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceAttributesThresholds(this.pipelineTypeToWasmEnum(e), t, i, r, n);
    }
    async setFaceChecksEnabled(e, t, i, r, n, o) {
        this.checkWasmInitialization("Unable to set face checks enabled flags, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceChecksEnabled(this.pipelineTypeToWasmEnum(e), t, i, r, n, o);
    }
    async setFaceDetectionMode(e, t) {
        this.checkWasmInitialization("Unable to set face detection mode, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingMode(this.pipelineTypeToWasmEnum(e), t);
    }
    async setFaceDetectionCallbacks(e, t, i, r, n, o, s, a, l, c, d, u, h, p, f, m, g, C) {
        this.checkWasmInitialization("Unable to set face detection callbacks, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingCallbacks(
                this.pipelineTypeToWasmEnum(e),
                t,
                i,
                r,
                n,
                o,
                s,
                a,
                l,
                c,
                d,
                u,
                h,
                p,
                f,
                m,
                g,
                C,
            );
    }
    async setIdCaptureThresholds(e, t, i, r, n, o, s, a, l, c) {
        this.checkWasmInitialization("Unable to set thresholds, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureThresholds(this.pipelineTypeToWasmEnum(e), t, i, r, n, o, s, a, l, c);
    }
    async setIdCaptureCallbacks(e, t, i, r, n, o, s, a, l, c, d, u, h, p) {
        this.checkWasmInitialization("Unable to set callbacks, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureCallbacks(
                this.pipelineTypeToWasmEnum(e),
                t,
                i,
                r,
                n,
                o,
                s,
                a,
                l,
                c,
                d,
                u,
                h,
                p,
            );
    }
    async setIdCaptureGeometryParams(e, t, i, r, n, o, s, a, l, c, d, u, h) {
        this.checkWasmInitialization("Unable to set geometry params, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureGeometryParams(
                this.pipelineTypeToWasmEnum(e),
                t,
                i,
                r,
                n,
                o,
                s,
                a,
                l,
                c,
                d,
                u,
                h,
            );
    }
    async setIdCaptureConfigParams(e, t, i, r, n, o, s, a, l) {
        this.checkWasmInitialization("Unable to set config params, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureConfigParams(this.pipelineTypeToWasmEnum(e), t, i, r, n, o, a, l);
    }
    setIdCaptureModelType(e, t) {
        this.checkWasmInitialization("Unable to set model type, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureModelType(
                this.pipelineTypeToWasmEnum(e),
                this.IdCaptureModelTypeToWasmEnum(t),
            );
    }
    IdPerspectiveTransform(e, t) {
        return (
            this.checkWasmInitialization("Unable to perform perspective transform, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.IdPerspectiveTransform(e, t)
        );
    }
    async getVersions() {
        return JSON.parse(await (await fetch(this.versionsFile)).text());
    }
    async loadModels() {
        this.checkWasmInitialization("Unable load the models, cpp API hasn't been initialized");
        let e = new this.wasmModule.WorkflowTypeToIntMap(),
            t = new Map(),
            i = new Map();
        for (let [r, n] of this.pipelines_) {
            let o = this.pipelineTypeToWasmEnum(r),
                s = [],
                a = new this.wasmModule.VectorInt();
            for (let e of n) {
                if (!i.has(e)) {
                    let t = await fetch(e)
                        .then((e) => e.arrayBuffer())
                        .then((e) => new Uint8Array(e));
                    i.set(e, t);
                }
                let t = i.get(e);
                a.push_back(t.byteLength), s.push(t);
            }
            e.set(o, a), t.set(o, s);
        }
        for (let [i, r] of ((this.modelsBuffers = this.workflowApiUtilities.allocateModelsBuffers(e)), t)) {
            let e = this.modelsBuffers?.get(i);
            for (let t = 0; t < e.size(); t++) {
                let i = e?.get(t);
                if (i) i.set(r[t]);
                else throw Error("Unable to get model buffer from shared memory!");
            }
        }
    }
    async initializePipelines() {
        this.checkWasmInitialization("Unable to initialize pipelines, cpp API hasn't been initialized"),
            this.modelsBuffers || (await this.loadModels()),
            this.workflowApiUtilities.initializeWorkflows();
    }
    async setProductionMode(e) {
        this.checkWasmInitialization("Unable to set production mode, cpp API hasn't been initialized"),
            this.utilityApi.setProductionMode(e);
    }
    getPipelineState() {
        return (
            this.checkWasmInitialization("Unable to get pipeline state, cpp API hasn't been initialized"),
            this.workflowApiUtilities.getWorkflowState()
        );
    }
    getCurrentPipeline() {
        return (
            this.checkWasmInitialization("Unable to get current pipeline, cpp API hasn't been initialized"),
            this.pipelineTypeFromWasmEnum(this.workflowApiUtilities.getCurrentWorkflow())
        );
    }
    setSdkVersion(e) {
        this.checkWasmInitialization("Unable to set sdk version, cpp API hasn't been initialized"),
            this.utilityApi.setSdkVersion(e);
    }
    setSdkPlatform(e) {
        this.checkWasmInitialization("Unable to set device type, cpp API hasn't been initialized"),
            this.utilityApi.setSdkPlatform(e);
    }
    setDeviceInfo(e, t = !0) {
        this.checkWasmInitialization("Unable to set device info, cpp API hasn't been initialized"),
            this.utilityApi.setDeviceInfo(e, t);
    }
    setBrowserInfo(e, t = !0) {
        this.checkWasmInitialization("Unable to set browser info, cpp API hasn't been initialized"),
            this.utilityApi.setBrowserInfo(e, t);
    }
    setCameraInfo(e, t = !0) {
        this.checkWasmInitialization("Unable to set camera info, cpp API hasn't been initialized"),
            this.utilityApi.setCameraInfo(e, t);
    }
    setZc(e) {
        this.checkWasmInitialization("Unable to set zc, cpp API hasn't been initialized"), this.utilityApi.setZc(e);
    }
    setMotionStatus(e) {
        this.checkWasmInitialization("Unable to set motion status, cpp API hasn't been initialized"),
            this.utilityApi.setMotionStatus(e);
    }
    setMetadataField(e, t) {
        this.checkWasmInitialization("Unable to set metadata field, cpp API hasn't been initialized"),
            this.utilityApi.setMetadataField(e, t);
    }
    setInspectorOpened(e) {
        this.inspectorOpened_ = e;
    }
    setBackgroundMode(e) {
        this.checkWasmInitialization("Unable to set background mode, cpp API hasn't been initialized"),
            this.utilityApi.setBackgroundMode(e);
    }
    getCheck() {
        return (
            this.checkWasmInitialization("Unable to get check, cpp API hasn't been initialized"),
            this.utilityApi.getCheck()
        );
    }
    getMetadata() {
        return (
            this.checkWasmInitialization("Unable to get metadata, cpp API hasn't been initialized"),
            this.utilityApi.setInspectorOpened(this.inspectorOpened_),
            this.utilityApi.getMetadata()
        );
    }
    async prc() {
        this.checkWasmInitialization("Unable to prc, cpp API hasn't been initialized"),
            await f(this.wasmCallSemaphore, () => this.utilityApi.prc(), !0);
    }
    async poc(e) {
        this.checkWasmInitialization("Unable to poc, cpp API hasn't been initialized"),
            await f(this.wasmCallSemaphore, () => this.utilityApi.poc(e), !0);
    }
    ckvcks(e) {
        this.checkWasmInitialization("Unable to ckvcks, cpp API hasn't been initialized"), this.utilityApi.ckvcks(e);
    }
    processPhoto(e) {
        this.checkWasmInitialization("Unable to process photo, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.processPhoto(e);
    }
    postFaceResults(e) {
        return (
            this.checkWasmInitialization("Unable to post face results, cpp API hasn't been initialized"),
            this.webApi.postFaceResults(e ?? {})
        );
    }
    pipelineTypeToWasmEnum(e) {
        switch (e) {
            case p.IdBlurGlarePipeline:
                return this.wasmModule.WorkflowType.IdBlurGlareWorkflow;
            case p.IdBarcodeAndTextQualityPipeline:
                return this.wasmModule.WorkflowType.IdBarcodeAndTextQualityWorkflow;
            case p.IdVideoSelfiePipeline:
                return this.wasmModule.WorkflowType.IdVideoSelfieWorkflow;
            case p.SelfieWithAggregationMetrics:
                return this.wasmModule.WorkflowType.SelfieWithAggregationMetrics;
            case p.SelfieWithQualityMetrics:
                return this.wasmModule.WorkflowType.SelfieWithQualityMetrics;
            case p.OnDeviceSelfieWorkflow:
                return this.wasmModule.WorkflowType.OnDeviceSelfieWorkflow;
            default:
                throw Error("Unknown pipeline type");
        }
    }
    pipelineTypeFromWasmEnum(e) {
        switch (e) {
            case this.wasmModule.WorkflowType.IdBlurGlareWorkflow:
                return p.IdBlurGlarePipeline;
            case this.wasmModule.WorkflowType.IdBarcodeAndTextQualityWorkflow:
                return p.IdBarcodeAndTextQualityPipeline;
            case this.wasmModule.WorkflowType.IdVideoSelfieWorkflow:
                return p.IdVideoSelfiePipeline;
            case this.wasmModule.WorkflowType.SelfieWithAggregationMetrics:
                return p.SelfieWithAggregationMetrics;
            case this.wasmModule.WorkflowType.SelfieWithQualityMetrics:
                return p.SelfieWithQualityMetrics;
            case this.wasmModule.WorkflowType.OnDeviceSelfieWorkflow:
                return p.OnDeviceSelfieWorkflow;
            default:
                throw Error("Unknown pipeline type");
        }
    }
    IdCaptureModelTypeToWasmEnum(e) {
        switch (e) {
            case h.IdCaptureV1x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV1x;
            case h.IdCaptureV2x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV2x;
            case h.IdCaptureV3x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV3x;
            default:
                throw Error("Unknown Id Capture model type");
        }
    }
    IdCaptureModelTypeFromWasmEnum(e) {
        switch (e) {
            case this.wasmModule.IdCaptureModelType.IdCaptureV1x:
                return h.IdCaptureV1x;
            case this.wasmModule.IdCaptureModelType.IdCaptureV2x:
                return h.IdCaptureV2x;
            case this.wasmModule.IdCaptureModelType.IdCaptureV3x:
                return h.IdCaptureV3x;
            default:
                throw Error("Unknown Id Capture model type");
        }
    }
    checkWasmInitialization(e) {
        if (!this.isInitialized()) throw Error(e);
    }
}.getInstance();
let I = ["selfie", "idCapture"],
    T = {
        selfie: [
            "selfie_bf_angles_192x192_opset9_fp16.ortmodelv2",
            "face_attributes_v1_3_fp16.ortmodelv2",
            "mls_regressor_4773007c657b4f05a460321456740d0f_fp16.ortmodelv2",
            "face_occlusion_v0_2_fp16.ortmodelv2",
        ],
        onDeviceSelfie: [
            "selfie_bf_angles_192x192_opset9_fp16.ortmodelv2",
            "face_attributes_v1_3_fp16.ortmodelv2",
            "mls_regressor_4773007c657b4f05a460321456740d0f_fp16.ortmodelv2",
            "face_occlusion_v0_2_fp16.ortmodelv2",
            "ondevice_physical_liveness_v2_1_fp16.ortmodelv2",
            "age_estimation_v2_2_2_fp16.ortmodelv2",
        ],
        idCapture: ["id_capture_2_01_fp16.ortmodelv2", "id_fiqa_19a81a0b9bf6492eb03b4667f6db4c85_fp16.ortmodelv2"],
    },
    k = "idle",
    x = null,
    P = null,
    M = [],
    O = null;
function A(e) {
    let t = e.lastIndexOf("/");
    return -1 === t ? "models" : `${e.substring(0, t)}/models`;
}
function R(e, t, i) {
    let r = new Map();
    for (let n of e) {
        let e = (function (e) {
            switch (e) {
                case "selfie":
                    return p.SelfieWithQualityMetrics;
                case "onDeviceSelfie":
                    return p.OnDeviceSelfieWorkflow;
                case "idCapture":
                    return p.IdBlurGlarePipeline;
                default:
                    throw Error(`Unknown pipeline: ${e}`);
            }
        })(n);
        if (!r.has(e)) {
            let o = (i?.[n] ?? T[n]).map((e) => `${t}/${e}`);
            r.set(e, o);
        }
    }
    return r;
}
async function D(e) {
    let t = e.pipelines ?? [...I],
        i = e.modelsBasePath ?? A(e.wasmPath);
    if ("loading" === k && x) return x;
    if ("ready" === k) {
        if (0 === t.filter((e) => !M.includes(e)).length) return;
        if (!O) throw Error("Cannot add pipelines: original warmup config not available");
        if (
            O.wasmPath !== e.wasmPath ||
            O.glueCodePath !== e.glueCodePath ||
            (O.wasmSimdPath ?? O.wasmPath) !== (e.wasmSimdPath ?? e.wasmPath) ||
            (O.glueCodeSimdPath ?? "") !== (e.glueCodeSimdPath ?? "") ||
            (O.useSimd ?? !0) !== (e.useSimd ?? !0)
        )
            throw Error(
                "Cannot add pipelines: WASM config mismatch. Use same wasmPath, glueCodePath, and useSimd settings.",
            );
        let i = [...new Set([...M, ...t])];
        return (
            (k = "loading"),
            (P = null),
            (x = (async () => {
                try {
                    let e = R(i, O.modelsBasePath ?? A(O.wasmPath), O.pipelineModels);
                    await S.initialize(
                        O.wasmPath,
                        O.wasmSimdPath ?? O.wasmPath,
                        O.glueCodePath,
                        O.glueCodeSimdPath ?? "",
                        O.useSimd ?? !0,
                        "",
                        e,
                    ),
                        await S.loadModels(),
                        await S.initializePipelines(),
                        (k = "ready"),
                        (M = i),
                        (O = { ...O, pipelines: i }),
                        (x = null);
                } catch (e) {
                    throw ((k = "error"), (P = e instanceof Error ? e : Error(String(e))), (x = null), P);
                }
            })())
        );
    }
    return (
        (k = "loading"),
        (P = null),
        (x = (async () => {
            try {
                let r = R(t, i, e.pipelineModels);
                await S.initialize(
                    e.wasmPath,
                    e.wasmSimdPath ?? e.wasmPath,
                    e.glueCodePath,
                    e.glueCodeSimdPath ?? "",
                    e.useSimd ?? !0,
                    "",
                    r,
                ),
                    await S.loadModels(),
                    await S.initializePipelines(),
                    (k = "ready"),
                    (M = [...t]),
                    (O = { ...e, pipelines: t }),
                    (x = null);
            } catch (e) {
                throw ((k = "error"), (P = e instanceof Error ? e : Error(String(e))), (x = null), P);
            }
        })())
    );
}
var F = class {
    constructor(e) {
        (this._isInitialized = !1), (this.pipelineType = e);
    }
    get initialized() {
        return this._isInitialized;
    }
    getPipelineType() {
        if (void 0 === this.pipelineType) throw Error(`${this.constructor.name} has no pipeline type configured.`);
        return this.pipelineType;
    }
    async initializeBase(e, t) {
        if (this._isInitialized) return;
        let i = { isReady: "ready" === k, isLoading: "loading" === k, error: P ?? void 0, loadedPipelines: [...M] };
        if (i.isLoading || "ready" === k || i.error)
            await ("ready" === k
                ? Promise.resolve()
                : "loading" === k && x
                  ? x
                  : "error" === k
                    ? Promise.reject(P ?? Error("WASM initialization failed"))
                    : Promise.reject(Error("WASM warmup was not started. Call warmupWasm() first.")));
        else {
            if (!e.wasmPath || !e.glueCodePath)
                throw Error("WASM path and glue code path are required. Call warmupWasm() first.");
            await D({
                wasmPath: e.wasmPath,
                wasmSimdPath: e.wasmSimdPath,
                glueCodePath: e.glueCodePath,
                glueCodeSimdPath: e.glueCodeSimdPath,
                useSimd: e.useSimd,
                modelsBasePath: e.modelsBasePath,
                pipelines: [t],
            });
        }
        this._isInitialized = !0;
    }
    ensureInitialized() {
        if (!this._isInitialized) throw Error(`${this.constructor.name} not initialized. Call initialize() first.`);
    }
    async processFrameWasm(e) {
        this.ensureInitialized();
        let t = this.getPipelineType();
        return (
            await S.allocateImageBuffers(e.width, e.height),
            await S.handleDetectionCallAndUpdateState(t),
            await S.process(e, t)
        );
    }
    reset() {
        this._isInitialized && void 0 !== this.pipelineType && S.resetPipeline(this.pipelineType);
    }
    async dispose() {
        this.reset(), (this._isInitialized = !1);
    }
};
