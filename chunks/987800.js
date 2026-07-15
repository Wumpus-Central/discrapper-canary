function i(l) {
    let t = l.lastIndexOf(".wasm");
    if (-1 === t) return l;
    let d = l.slice(t + 5);
    return "" === d || d.startsWith("?") ? `${l.slice(0, t)}.js${d}` : l;
}
d.d(t, {
    a: () => L,
    c: () => X,
    d: () => h,
    f: () => u,
    i: () => U,
    l: () => T,
    n: () => O,
    o: () => G,
    p: () => i,
    r: () => F,
    s: () => y,
    t: () => J,
    u: () => r,
});
var e,
    c,
    a = class {
        constructor(l = 1, t = 3e4) {
            (this.pending = []),
                (this.available = []),
                (this.processing = new Set()),
                (this.maxId = l - 1),
                (this.acquireTimeoutMs = t);
            for (let t = 0; t < l; t++) this.available.push(t);
        }
        async acquire() {
            if (this.available.length > 0) {
                let l = this.available.shift();
                return this.processing.add(l), l;
            }
            return new Promise((l, t) => {
                let d = {
                    resolve: (t) => {
                        clearTimeout(d.timer), this.processing.add(t), l(t);
                    },
                    reject: (l) => {
                        clearTimeout(d.timer), t(l);
                    },
                    timer: setTimeout(() => {
                        console.error(
                            `SemaphoreProvider: all slots occupied for ${this.acquireTimeoutMs}ms, ${this.pending.length} request(s) waiting`,
                        );
                    }, this.acquireTimeoutMs),
                };
                this.pending.push(d);
            });
        }
        release(l) {
            l < 0 || l > this.maxId
                ? console.error(`SemaphoreProvider: invalid threadId ${l}`)
                : this.processing.has(l)
                  ? (this.processing.delete(l),
                    this.pending.length > 0 ? this.pending.shift().resolve(l) : this.available.unshift(l))
                  : console.error(`SemaphoreProvider: double-release of threadId ${l}`);
        }
        reset() {
            let l = this.pending;
            (this.pending = []), (this.available = []), (this.processing = new Set());
            for (let l = 0; l <= this.maxId; l++) this.available.push(l);
            for (let t of l) t.reject(Error("SemaphoreProvider reset: pending acquire cancelled"));
        }
        async withLock(l, ...t) {
            let d = await this.acquire();
            try {
                return await l(d, ...t);
            } finally {
                this.release(d);
            }
        }
    };
"u" > typeof window && void 0 === window.wasmArrayBuffer && (window.wasmArrayBuffer = null);
let s = null,
    n = null;
async function Z(l) {
    let t = await import(l);
    if ("function" != typeof t.Module) throw Error(`WASM glue at ${l} did not export a Module factory`);
    return t.Module;
}
async function b(l) {
    let t = await fetch(l);
    if (!t.ok) throw Error(`Failed to fetch WASM binary at ${l}: ${t.status} ${t.statusText}`);
    return new Uint8Array(await t.arrayBuffer());
}
async function m(l, t) {
    return (window.wasmArrayBuffer = await b(t)), await l();
}
async function o(l) {
    return (
        n ||
        s ||
        (s = (async () => {
            try {
                let t = !1 !== l.useSimd,
                    d = l.wasmSimdPath ?? l.wasmPath;
                if (t && d !== l.wasmPath)
                    try {
                        let t = await Z(l.glueCodeSimdPath ?? i(d));
                        window.Module = t;
                        let e = { wasmModule: await m(t, d), simdUsed: !0 };
                        return (n = e), e;
                    } catch (l) {
                        console.warn("[Incode SDK] SIMD WASM load failed, falling back to non-SIMD", l);
                    }
                let e = await Z(l.glueCodePath);
                window.Module = e;
                let c = { wasmModule: await m(e, l.wasmPath), simdUsed: !1 };
                return (n = c), c;
            } catch (l) {
                throw ((s = null), l);
            }
        })())
    );
}
let u =
        (((e = {})[(e.IdCaptureV1x = 0)] = "IdCaptureV1x"),
        (e[(e.IdCaptureV2x = 1)] = "IdCaptureV2x"),
        (e[(e.IdCaptureV3x = 2)] = "IdCaptureV3x"),
        e),
    h =
        (((c = {})[(c.IdBlurGlarePipeline = 0)] = "IdBlurGlarePipeline"),
        (c[(c.IdBarcodeAndTextQualityPipeline = 1)] = "IdBarcodeAndTextQualityPipeline"),
        (c[(c.IdVideoSelfiePipeline = 2)] = "IdVideoSelfiePipeline"),
        (c[(c.SelfieWithAggregationMetrics = 3)] = "SelfieWithAggregationMetrics"),
        (c[(c.SelfieWithQualityMetrics = 4)] = "SelfieWithQualityMetrics"),
        (c[(c.OnDeviceSelfieWorkflow = 5)] = "OnDeviceSelfieWorkflow"),
        c);
async function W(l, t, d = !0, ...i) {
    let e = async () => {
        for (;;) {
            if (t(...i)) return;
            await new Promise((l) => setTimeout(l, 0));
        }
    };
    d ? await l.withLock(e) : await e();
}
var G = class extends Error {
    constructor(l, t, d) {
        super(l),
            (this.name = "WasmWebClientError"),
            (this.status = t),
            (this.statusCode = t),
            (t > 0 || void 0 !== d) && (this.response = { status: t, data: d });
    }
};
let p = null,
    N = null,
    M = new a(4);
async function X(l, t, d, i, e) {
    if (!p)
        return (
            N ||
            (N = (async () => {
                try {
                    let { wasmModule: c } = await o({
                        wasmPath: l,
                        wasmSimdPath: t,
                        glueCodePath: d,
                        glueCodeSimdPath: i || void 0,
                        useSimd: e,
                    });
                    if ("function" != typeof c.WebClient)
                        throw Error(
                            "WASM module does not expose a WebClient class. Update webLib.wasm to a build that includes WebClient.",
                        );
                    p = new c.WebClient();
                } catch (l) {
                    throw ((N = null), l);
                }
            })())
        );
}
async function r(l, t, d, i, e) {
    let c = V();
    c.resetSessionState?.(), c.setDefaultHeaders?.(i), await W(M, () => c.createApi(l, t, e, d), !1);
    let a = c.getRequestResult(-1);
    if (a.hasError) throw new G(a.errorMessage || "WebClient handshake failed", a.statusCode, a.result);
}
async function y(l, t, d, i, e, c, a, s = !1) {
    let n = V(),
        Z = ((l) => {
            if (!l) return;
            let t = {};
            for (let d of Object.keys(l)) {
                let i = l[d];
                null != i && (t[d] = String(i));
            }
            return t;
        })(e);
    return M.withLock(async (e) => {
        a &&
            n.setOnUploadProgress &&
            n.setOnUploadProgress((l) => {
                try {
                    a(l);
                } catch (l) {
                    console.error("WasmWebClient: error in onUploadProgress callback", l);
                }
            });
        try {
            return (
                await W(
                    M,
                    () =>
                        (function (l, t, d, i, e, c, a, s, n) {
                            switch (t) {
                                case "GET":
                                    return l.get(d, i, a, c, s);
                                case "POST":
                                    return l.post(d, i, e ?? {}, c, a, s, n);
                                case "PUT":
                                    return l.put(d, i, e ?? {}, c, a, s, n);
                                case "PATCH":
                                    return l.patch(d, i, e ?? {}, c, a, s, n);
                                case "DELETE":
                                    return l.del(d, i, e ?? {}, c, a, s, n);
                                default:
                                    throw Error(`Unsupported WASM HTTP method: ${t}`);
                            }
                        })(n, l, e, t, d, i, Z, c, s),
                    !1,
                ),
                (function (l, t) {
                    let d = l.getRequestResult(t);
                    if (d.hasError)
                        throw new G(d.errorMessage || "WasmWebClient request failed", d.statusCode, d.result);
                    return { data: d.result, status: d.statusCode };
                })(n, e)
            );
        } finally {
            n.clearOnUploadProgress?.(e), n.clearOnDownloadProgress?.(e);
        }
    });
}
let Y = null;
function T(l) {
    Y = l;
}
function V() {
    if (!p) throw Error("WasmWebClient not initialized. Call initializeWasmWebClient() first.");
    return p;
}
var L = class l {
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
            (this.onDeviceMode_ = !1),
            (this.wasmCallSemaphore = new a()),
            (this.Module = null);
    }
    async initialize(l, t, d, i, e, c, a) {
        await this.freeResources(), (this.pipelines_ = a), (this.versionsFile = c);
        let { wasmModule: s, simdUsed: n } = await o({
            glueCodePath: d,
            glueCodeSimdPath: i || void 0,
            wasmPath: l,
            wasmSimdPath: t,
            useSimd: e,
        });
        return (
            (this.wasmModule = s),
            (this.Module = window.Module),
            (this.workflowApiUtilities = new this.wasmModule.WorkflowApiUtilities()),
            (this.utilityApi = new this.wasmModule.UtilityApi()),
            this.utilityApi.setOnDeviceMode(this.onDeviceMode_),
            (this.idCaptureWasmApi = new this.wasmModule.IdCaptureApi()),
            (this.faceProcessingWasmApi = new this.wasmModule.FaceProcessingApi()),
            (this.webApi = new this.wasmModule.WebApi({
                post(l, t, d) {
                    let i = d ?? {},
                        e = Y;
                    return e
                        ? e(l, t, i)
                        : y("POST", l, t, i.headers ?? {}, i.params, i.timeout ?? 3e4, void 0, !0 === i.ie);
                },
            })),
            (this.isInitialized_ = !0),
            n
        );
    }
    static getInstance() {
        return l.instance || (l.instance = new l()), l.instance;
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
    async allocateImageBuffers(l, t) {
        this.checkWasmInitialization("Unable to allocate image buffers, cpp API hasn't been initialized"),
            (l &&
                t &&
                l == this.imageWidth_ &&
                t == this.imageHeight_ &&
                this.inputImageBuffer &&
                l * t * 4 === this.inputImageBuffer.length) ||
                ((this.imageWidth_ = l),
                (this.imageHeight_ = t),
                (this.inputImageBuffer = this.workflowApiUtilities.allocateInputImageBuffer(l, t, 4)));
    }
    async handleDetectionCallAndUpdateState(l) {
        this.checkWasmInitialization("Unable to update pipeline state, cpp API hasn't been initialized"),
            this.workflowApiUtilities.handleDetectionCallAndUpdateState(this.pipelineTypeToWasmEnum(l));
    }
    ens(l) {
        return (
            this.checkWasmInitialization("Unable to encrypt the image, cpp API hasn't been initialized"),
            this.utilityApi.ens(l)
        );
    }
    isVirtualCamera(l) {
        return (
            this.checkWasmInitialization("Unable to check if the camera is virtual, cpp API hasn't been initialized"),
            !!l && this.utilityApi.isVirtualCamera(l)
        );
    }
    estimatePerformance() {
        return (
            this.checkWasmInitialization("Unable to estimate performance, cpp API hasn't been initialized"),
            this.utilityApi.estimatePerformance()
        );
    }
    async analyzeFrame(l) {
        this.checkWasmInitialization("Unable to analyze the frame, cpp API hasn't been initialized"),
            await this.allocateImageBuffers(l.width, l.height),
            this.inputImageBuffer.set(l.data),
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
    resetPipeline(l) {
        this.checkWasmInitialization("Unable to reset pipeline, cpp API hasn't been initialized"),
            this.workflowApiUtilities.resetWorkflow(this.pipelineTypeToWasmEnum(l));
    }
    resetAllPipelines() {
        for (let [l, t] of (this.checkWasmInitialization("Unable to reset pipelines, cpp API hasn't been initialized"),
        this.pipelines_))
            this.resetPipeline(l);
    }
    resetOther() {
        this.checkWasmInitialization("Unable to reset other states, cpp API hasn't been initialized"),
            this.utilityApi.resetOther();
    }
    reset() {
        this.resetAllPipelines(), this.resetOther();
    }
    async process(l, t) {
        if (
            (this.checkWasmInitialization("Unable to process the image, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        switch ((this.inputImageBuffer.set(l.data), t)) {
            case h.IdBlurGlarePipeline:
            case h.IdBarcodeAndTextQualityPipeline:
                return this.idCaptureWasmApi.runIdCaptureWorkflow(this.pipelineTypeToWasmEnum(t));
            case h.IdVideoSelfiePipeline:
                return this.idCaptureWasmApi.runIdVideoSelfieWorkflow();
            case h.SelfieWithAggregationMetrics:
            case h.SelfieWithQualityMetrics:
            case h.OnDeviceSelfieWorkflow:
                return this.faceProcessingWasmApi.runSelfieWorkflow(this.pipelineTypeToWasmEnum(t));
            default:
                throw Error("Unknown pipeline type");
        }
    }
    async runIdCapture(l) {
        if (
            (this.checkWasmInitialization("Unable to run Id Capture, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        return this.inputImageBuffer.set(l.data), this.idCaptureWasmApi.runIdCapture();
    }
    async runSelfieCapture(l) {
        if (
            (this.checkWasmInitialization("Unable to run Selfie Capture, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        return this.inputImageBuffer.set(l.data), this.faceProcessingWasmApi.runSelfieCapture();
    }
    async setFacePositionConstraints(l, t, d, i, e) {
        this.checkWasmInitialization("Unable to set face position constraints, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFacePositionConstraints(this.pipelineTypeToWasmEnum(l), t, d, i, e);
    }
    async setFaceDetectionThresholds(l, t, d, i, e, c, a, s, n, Z, b) {
        this.checkWasmInitialization("Unable to set face detection thresholds, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingThresholds(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
            );
    }
    async setFaceAttributesThresholds(l, t, d, i, e) {
        this.checkWasmInitialization("Unable to set face attributes thresholds, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceAttributesThresholds(this.pipelineTypeToWasmEnum(l), t, d, i, e);
    }
    async setFaceChecksEnabled(l, t, d, i, e, c) {
        this.checkWasmInitialization("Unable to set face checks enabled flags, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceChecksEnabled(this.pipelineTypeToWasmEnum(l), t, d, i, e, c);
    }
    async setFaceDetectionMode(l, t) {
        this.checkWasmInitialization("Unable to set face detection mode, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingMode(this.pipelineTypeToWasmEnum(l), t);
    }
    async setFaceDetectionCallbacks(l, t, d, i, e, c, a, s, n, Z, b, m, o, u, h, W, G, p) {
        this.checkWasmInitialization("Unable to set face detection callbacks, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingCallbacks(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
                m,
                o,
                u,
                h,
                W,
                G,
                p,
            );
    }
    async setIdCaptureThresholds(l, t, d, i, e, c, a, s, n, Z) {
        this.checkWasmInitialization("Unable to set thresholds, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureThresholds(this.pipelineTypeToWasmEnum(l), t, d, i, e, c, a, s, n, Z);
    }
    async setIdCaptureCallbacks(l, t, d, i, e, c, a, s, n, Z, b, m, o, u) {
        this.checkWasmInitialization("Unable to set callbacks, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureCallbacks(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
                m,
                o,
                u,
            );
    }
    async setIdCaptureGeometryParams(l, t, d, i, e, c, a, s, n, Z, b, m, o) {
        this.checkWasmInitialization("Unable to set geometry params, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureGeometryParams(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
                m,
                o,
            );
    }
    async setIdCaptureConfigParams(l, t, d, i, e, c, a, s, n) {
        this.checkWasmInitialization("Unable to set config params, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureConfigParams(this.pipelineTypeToWasmEnum(l), t, d, i, e, c, s, n);
    }
    setIdCaptureModelType(l, t) {
        this.checkWasmInitialization("Unable to set model type, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureModelType(
                this.pipelineTypeToWasmEnum(l),
                this.IdCaptureModelTypeToWasmEnum(t),
            );
    }
    IdPerspectiveTransform(l, t) {
        return (
            this.checkWasmInitialization("Unable to perform perspective transform, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.IdPerspectiveTransform(l, t)
        );
    }
    async getVersions() {
        return JSON.parse(await (await fetch(this.versionsFile)).text());
    }
    async loadModels() {
        this.checkWasmInitialization("Unable load the models, cpp API hasn't been initialized");
        let l = new this.wasmModule.WorkflowTypeToIntMap(),
            t = new Map(),
            d = new Map();
        for (let [i, e] of this.pipelines_) {
            let c = this.pipelineTypeToWasmEnum(i),
                a = [],
                s = new this.wasmModule.VectorInt();
            for (let l of e) {
                if (!d.has(l)) {
                    let t = await fetch(l)
                        .then((l) => l.arrayBuffer())
                        .then((l) => new Uint8Array(l));
                    d.set(l, t);
                }
                let t = d.get(l);
                s.push_back(t.byteLength), a.push(t);
            }
            l.set(c, s), t.set(c, a);
        }
        for (let [d, i] of ((this.modelsBuffers = this.workflowApiUtilities.allocateModelsBuffers(l)), t)) {
            let l = this.modelsBuffers?.get(d);
            for (let t = 0; t < l.size(); t++) {
                let d = l?.get(t);
                if (d) d.set(i[t]);
                else throw Error("Unable to get model buffer from shared memory!");
            }
        }
    }
    async initializePipelines() {
        this.checkWasmInitialization("Unable to initialize pipelines, cpp API hasn't been initialized"),
            this.modelsBuffers || (await this.loadModels()),
            this.workflowApiUtilities.initializeWorkflows();
    }
    async setProductionMode(l) {
        this.checkWasmInitialization("Unable to set production mode, cpp API hasn't been initialized"),
            this.utilityApi.setProductionMode(l);
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
    setSdkVersion(l) {
        this.checkWasmInitialization("Unable to set sdk version, cpp API hasn't been initialized"),
            this.utilityApi.setSdkVersion(l);
    }
    setSdkPlatform(l) {
        this.checkWasmInitialization("Unable to set device type, cpp API hasn't been initialized"),
            this.utilityApi.setSdkPlatform(l);
    }
    setDeviceInfo(l, t = !0) {
        this.checkWasmInitialization("Unable to set device info, cpp API hasn't been initialized"),
            this.utilityApi.setDeviceInfo(l, t);
    }
    setBrowserInfo(l, t = !0) {
        this.checkWasmInitialization("Unable to set browser info, cpp API hasn't been initialized"),
            this.utilityApi.setBrowserInfo(l, t);
    }
    setCameraInfo(l, t = !0) {
        this.checkWasmInitialization("Unable to set camera info, cpp API hasn't been initialized"),
            this.utilityApi.setCameraInfo(l, t);
    }
    setZc(l) {
        this.checkWasmInitialization("Unable to set zc, cpp API hasn't been initialized"), this.utilityApi.setZc(l);
    }
    setMotionStatus(l) {
        this.checkWasmInitialization("Unable to set motion status, cpp API hasn't been initialized"),
            this.utilityApi.setMotionStatus(l);
    }
    setMetadataField(l, t) {
        this.checkWasmInitialization("Unable to set metadata field, cpp API hasn't been initialized"),
            this.utilityApi.setMetadataField(l, t);
    }
    setInspectorOpened(l) {
        this.inspectorOpened_ = l;
    }
    getInspectorOpened() {
        return this.inspectorOpened_;
    }
    setBackgroundMode(l) {
        this.checkWasmInitialization("Unable to set background mode, cpp API hasn't been initialized"),
            this.utilityApi.setBackgroundMode(l);
    }
    setOnDeviceMode(l) {
        (this.onDeviceMode_ = l), null != this.utilityApi && this.utilityApi.setOnDeviceMode(l);
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
            await W(this.wasmCallSemaphore, () => this.utilityApi.prc(!1), !0);
    }
    async poc(l) {
        this.checkWasmInitialization("Unable to poc, cpp API hasn't been initialized"),
            await W(this.wasmCallSemaphore, () => this.utilityApi.poc(l), !0);
    }
    async rsp() {
        this.checkWasmInitialization("Unable to rsp, cpp API hasn't been initialized"),
            await W(this.wasmCallSemaphore, () => this.utilityApi.rsp(), !0);
    }
    ssl() {
        this.checkWasmInitialization("Unable to ssl, cpp API hasn't been initialized"), this.utilityApi.ssl();
    }
    stl() {
        this.checkWasmInitialization("Unable to stl, cpp API hasn't been initialized"), this.utilityApi.stl();
    }
    osv() {
        this.checkWasmInitialization("Unable to set sensor beginning timestamp, cpp API hasn't been initialized"),
            this.utilityApi.osv();
    }
    oev() {
        this.checkWasmInitialization("Unable to set sensor ending timestamp, cpp API hasn't been initialized"),
            this.utilityApi.oev();
    }
    ckvcks(l) {
        this.checkWasmInitialization("Unable to ckvcks, cpp API hasn't been initialized"), this.utilityApi.ckvcks(l);
    }
    processPhoto(l) {
        this.checkWasmInitialization("Unable to process photo, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.processPhoto(l);
    }
    postFaceResults(l) {
        return (
            this.checkWasmInitialization("Unable to post face results, cpp API hasn't been initialized"),
            this.webApi.postFaceResults(l ?? {})
        );
    }
    pipelineTypeToWasmEnum(l) {
        switch (l) {
            case h.IdBlurGlarePipeline:
                return this.wasmModule.WorkflowType.IdBlurGlareWorkflow;
            case h.IdBarcodeAndTextQualityPipeline:
                return this.wasmModule.WorkflowType.IdBarcodeAndTextQualityWorkflow;
            case h.IdVideoSelfiePipeline:
                return this.wasmModule.WorkflowType.IdVideoSelfieWorkflow;
            case h.SelfieWithAggregationMetrics:
                return this.wasmModule.WorkflowType.SelfieWithAggregationMetrics;
            case h.SelfieWithQualityMetrics:
                return this.wasmModule.WorkflowType.SelfieWithQualityMetrics;
            case h.OnDeviceSelfieWorkflow:
                return this.wasmModule.WorkflowType.OnDeviceSelfieWorkflow;
            default:
                throw Error("Unknown pipeline type");
        }
    }
    pipelineTypeFromWasmEnum(l) {
        switch (l) {
            case this.wasmModule.WorkflowType.IdBlurGlareWorkflow:
                return h.IdBlurGlarePipeline;
            case this.wasmModule.WorkflowType.IdBarcodeAndTextQualityWorkflow:
                return h.IdBarcodeAndTextQualityPipeline;
            case this.wasmModule.WorkflowType.IdVideoSelfieWorkflow:
                return h.IdVideoSelfiePipeline;
            case this.wasmModule.WorkflowType.SelfieWithAggregationMetrics:
                return h.SelfieWithAggregationMetrics;
            case this.wasmModule.WorkflowType.SelfieWithQualityMetrics:
                return h.SelfieWithQualityMetrics;
            case this.wasmModule.WorkflowType.OnDeviceSelfieWorkflow:
                return h.OnDeviceSelfieWorkflow;
            default:
                throw Error("Unknown pipeline type");
        }
    }
    IdCaptureModelTypeToWasmEnum(l) {
        switch (l) {
            case u.IdCaptureV1x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV1x;
            case u.IdCaptureV2x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV2x;
            case u.IdCaptureV3x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV3x;
            default:
                throw Error("Unknown Id Capture model type");
        }
    }
    IdCaptureModelTypeFromWasmEnum(l) {
        switch (l) {
            case this.wasmModule.IdCaptureModelType.IdCaptureV1x:
                return u.IdCaptureV1x;
            case this.wasmModule.IdCaptureModelType.IdCaptureV2x:
                return u.IdCaptureV2x;
            case this.wasmModule.IdCaptureModelType.IdCaptureV3x:
                return u.IdCaptureV3x;
            default:
                throw Error("Unknown Id Capture model type");
        }
    }
    checkWasmInitialization(l) {
        if (!this.isInitialized()) throw Error(l);
    }
}.getInstance();
let I = ["selfie", "idCapture"],
    z = {
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
        videoSelfie: [
            "selfie_bf_angles_192x192_opset9_fp16.ortmodelv2",
            "face_attributes_v1_3_fp16.ortmodelv2",
            "mls_regressor_4773007c657b4f05a460321456740d0f_fp16.ortmodelv2",
            "face_occlusion_v0_2_fp16.ortmodelv2",
        ],
        videoSelfieId: ["id_capture_2_01_fp16.ortmodelv2"],
    },
    w = "idle",
    R = null,
    S = null,
    C = [],
    x = null,
    g = [];
function D(l) {
    let t = l.lastIndexOf("/");
    return -1 === t ? "models" : `${l.substring(0, t)}/models`;
}
function j(l, t, d) {
    let i = new Map();
    for (let e of l) {
        let l = (function (l) {
            switch (l) {
                case "selfie":
                    return h.SelfieWithQualityMetrics;
                case "onDeviceSelfie":
                    return h.OnDeviceSelfieWorkflow;
                case "idCapture":
                    return h.IdBlurGlarePipeline;
                case "videoSelfie":
                    return h.SelfieWithAggregationMetrics;
                case "videoSelfieId":
                    return h.IdVideoSelfiePipeline;
                default:
                    throw Error(`Unknown pipeline: ${l}`);
            }
        })(e);
        if (!i.has(l)) {
            let c = (d?.[e] ?? z[e]).map((l) => `${t}/${l}`);
            i.set(l, c);
        }
    }
    return i;
}
async function U(l) {
    let t = l.pipelines ?? [...I],
        d = l.modelsBasePath ?? D(l.wasmPath);
    if ("loading" === w && R) {
        let d = R;
        return 0 === t.filter((l) => !g.includes(l)).length ? d : d.then(() => U(l));
    }
    if ("ready" === w) {
        if (0 === t.filter((l) => !C.includes(l)).length) return;
        if (!x) throw Error("Cannot add pipelines: original warmup config not available");
        if (
            x.wasmPath !== l.wasmPath ||
            x.glueCodePath !== l.glueCodePath ||
            (x.wasmSimdPath ?? x.wasmPath) !== (l.wasmSimdPath ?? l.wasmPath) ||
            (x.glueCodeSimdPath ?? "") !== (l.glueCodeSimdPath ?? "") ||
            (x.useSimd ?? !0) !== (l.useSimd ?? !0)
        )
            throw Error(
                "Cannot add pipelines: WASM config mismatch. Use same wasmPath, glueCodePath, and useSimd settings.",
            );
        let d = [...new Set([...C, ...t])];
        return (
            (w = "loading"),
            (g = d),
            (S = null),
            (R = (async () => {
                try {
                    let l = j(d, x.modelsBasePath ?? D(x.wasmPath), x.pipelineModels);
                    await L.initialize(
                        x.wasmPath,
                        x.wasmSimdPath ?? x.wasmPath,
                        x.glueCodePath,
                        x.glueCodeSimdPath ?? "",
                        x.useSimd ?? !0,
                        "",
                        l,
                    ),
                        await L.loadModels(),
                        await L.initializePipelines(),
                        (w = "ready"),
                        (C = d),
                        (x = { ...x, pipelines: d }),
                        (R = null);
                } catch (l) {
                    throw ((w = "error"), (S = l instanceof Error ? l : Error(String(l))), (R = null), (g = []), S);
                }
            })())
        );
    }
    return (
        (w = "loading"),
        (g = [...t]),
        (S = null),
        (R = (async () => {
            try {
                let i = j(t, d, l.pipelineModels);
                void 0 !== l.onDeviceMode && L.setOnDeviceMode(l.onDeviceMode),
                    await L.initialize(
                        l.wasmPath,
                        l.wasmSimdPath ?? l.wasmPath,
                        l.glueCodePath,
                        l.glueCodeSimdPath ?? "",
                        l.useSimd ?? !0,
                        "",
                        i,
                    ),
                    await L.loadModels(),
                    await L.initializePipelines(),
                    (w = "ready"),
                    (C = [...t]),
                    (x = { ...l, pipelines: t }),
                    (R = null);
            } catch (l) {
                throw ((w = "error"), (S = l instanceof Error ? l : Error(String(l))), (R = null), (g = []), S);
            }
        })())
    );
}
function F(l) {
    L.setOnDeviceMode(l);
}
var O = class {
        constructor(l) {
            (this._isInitialized = !1), (this.pipelineType = l);
        }
        get initialized() {
            return this._isInitialized;
        }
        getPipelineType() {
            if (void 0 === this.pipelineType) throw Error(`${this.constructor.name} has no pipeline type configured.`);
            return this.pipelineType;
        }
        async initializeBase(l, t) {
            if (this._isInitialized) return;
            let d = { isReady: "ready" === w, isLoading: "loading" === w, error: S ?? void 0, loadedPipelines: [...C] };
            if (d.isLoading || "ready" === w || d.error)
                await ("ready" === w
                    ? Promise.resolve()
                    : "loading" === w && R
                      ? R
                      : "error" === w
                        ? Promise.reject(S ?? Error("WASM initialization failed"))
                        : Promise.reject(Error("WASM warmup was not started. Call warmupWasm() first.")));
            else {
                if (!l.wasmPath || !l.glueCodePath)
                    throw Error("WASM path and glue code path are required. Call warmupWasm() first.");
                await U({
                    wasmPath: l.wasmPath,
                    wasmSimdPath: l.wasmSimdPath,
                    glueCodePath: l.glueCodePath,
                    glueCodeSimdPath: l.glueCodeSimdPath,
                    useSimd: l.useSimd,
                    modelsBasePath: l.modelsBasePath,
                    pipelines: [t],
                });
            }
            this._isInitialized = !0;
        }
        ensureInitialized() {
            if (!this._isInitialized) throw Error(`${this.constructor.name} not initialized. Call initialize() first.`);
        }
        async processFrameWasm(l) {
            this.ensureInitialized();
            let t = this.getPipelineType();
            return (
                await L.allocateImageBuffers(l.width, l.height),
                await L.handleDetectionCallAndUpdateState(t),
                await L.process(l, t)
            );
        }
        reset() {
            this._isInitialized && void 0 !== this.pipelineType && L.resetPipeline(this.pipelineType);
        }
        async dispose() {
            this.reset(), (this._isInitialized = !1);
        }
    },
    J = class l extends O {
        static async getInstance() {
            return l.instance
                ? l.instance
                : (l.initPromise ||
                      (l.initPromise = (async () => {
                          let t = new l();
                          return await t.initializeBase({}, "selfie"), (l.instance = t), t;
                      })()),
                  l.initPromise);
        }
        static resetInstance() {
            (l.instance = void 0), (l.initPromise = void 0);
        }
        constructor() {
            super(void 0);
        }
        async initialize(l) {
            if (this.initialized) return;
            let t = l.pipelines?.[0] ?? "selfie";
            await this.initializeBase(l, t);
        }
        async processFrame(l) {
            throw Error("WasmUtilProvider does not support frame processing. Use encryptImage() instead.");
        }
        encryptImage(l) {
            return this.ensureInitialized(), L.ens(l);
        }
        setSdkVersion(l) {
            this.ensureInitialized(), L.setSdkVersion(l);
        }
        setSdkPlatform(l) {
            this.ensureInitialized(), L.setSdkPlatform(l);
        }
        setDeviceInfo(l, t = !0) {
            this.ensureInitialized(), L.setDeviceInfo(l, t);
        }
        setBrowserInfo(l, t = !0) {
            this.ensureInitialized(), L.setBrowserInfo(l, t);
        }
        setCameraInfo(l, t = !0) {
            this.ensureInitialized(), L.setCameraInfo(l, t);
        }
        setMotionStatus(l) {
            this.ensureInitialized(), L.setMotionStatus(l);
        }
        setBackgroundMode(l) {
            this.ensureInitialized(), L.setBackgroundMode(l);
        }
        setOnDeviceMode(l) {
            this.ensureInitialized(), L.setOnDeviceMode(l);
        }
        setZc(l) {
            this.ensureInitialized(), L.setZc(l);
        }
        setInspectorOpened(l) {
            this.ensureInitialized(), L.setInspectorOpened(l);
        }
        getInspectorOpened() {
            return L.getInspectorOpened();
        }
        async setProductionMode(l) {
            this.ensureInitialized(), await L.setProductionMode(l);
        }
        getMetadata() {
            return this.ensureInitialized(), L.getMetadata();
        }
        async analyzeFrame(l) {
            this.ensureInitialized(), await L.analyzeFrame(l);
        }
        getCheck() {
            return this.ensureInitialized(), L.getCheck();
        }
        getPipelineState() {
            return this.ensureInitialized(), L.getPipelineState();
        }
        estimatePerformance() {
            return this.ensureInitialized(), L.estimatePerformance();
        }
        isVirtualCamera(l) {
            return this.ensureInitialized(), L.isVirtualCamera(l);
        }
        async prc() {
            this.ensureInitialized(), await L.prc();
        }
        async poc(l) {
            this.ensureInitialized(), await L.poc(l);
        }
        async rsp() {
            this.ensureInitialized(), await L.rsp();
        }
        ssl() {
            this.ensureInitialized(), L.ssl();
        }
        stl() {
            this.ensureInitialized(), L.stl();
        }
        osv() {
            this.ensureInitialized(), L.osv();
        }
        oev() {
            this.ensureInitialized(), L.oev();
        }
        ckvcks(l) {
            this.ensureInitialized(), L.ckvcks(l);
        }
        async getVersions() {
            return this.ensureInitialized(), L.getVersions();
        }
    };
