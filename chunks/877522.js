d.d(t, { i: () => c, n: () => n, r: () => a, t: () => s });
var i = d(987800),
    e = d(117589),
    c = class extends i.n {
        constructor() {
            super(i.d.IdBlurGlarePipeline),
                (this.lastProcessResult = null),
                (this.capturedCanvas = null),
                (this.originalCapturedCanvas = null);
        }
        async initialize(l) {
            !0 === l.videoSelfie
                ? ((this.pipelineType = i.d.IdVideoSelfiePipeline), await this.initializeBase(l, "videoSelfieId"))
                : await this.initializeBase(l, "idCapture");
        }
        setCallbacks(l) {
            this.ensureInitialized(),
                i.a.setIdCaptureCallbacks(
                    this.getPipelineType(),
                    l.onFarAway ?? (() => {}),
                    l.onDetectionStarted ?? (() => {}),
                    l.onMaskChange ? (t, d, i, e) => l.onMaskChange?.(t, d, i, e) : () => {},
                    l.onBlur ?? (() => {}),
                    l.onGlare ?? (() => {}),
                    l.onCapturing ?? (() => {}),
                    l.onCapture
                        ? () => {
                              l.onCapture?.();
                          }
                        : () => {},
                    l.onBestFrame ? (t, d, i) => l.onBestFrame?.(t, d, i) : () => {},
                    l.onIdNotDetected ?? (() => {}),
                    l.onSwitchToManualCapture ?? (() => {}),
                    l.onIdTypeChange ? (t) => l.onIdTypeChange?.(t) : () => {},
                    l.onIdSideChange ? (t) => l.onIdSideChange?.(t) : () => {},
                    l.onCapturingCounterValueChange ? (t) => l.onCapturingCounterValueChange?.(t) : () => {},
                );
        }
        setThresholds(l) {
            this.ensureInitialized(),
                i.a.setIdCaptureThresholds(
                    this.getPipelineType(),
                    l.blurThreshold,
                    l.blurChangeThreshold,
                    l.glareThreshold,
                    l.clsThreshold,
                    l.sideThreshold,
                    l.iouThreshold,
                    l.idDetectedTimeout,
                    l.autocaptureTimeout,
                    l.framesAggregationInterval,
                );
        }
        setGeometry(l) {
            this.ensureInitialized(),
                i.a.setIdCaptureGeometryParams(
                    this.getPipelineType(),
                    l.areaDown,
                    l.areaUp,
                    l.areaIOSPassportUp,
                    l.areaIOSPassportDown,
                    l.widthIOSUp,
                    l.widthIOSDown,
                    l.widthDown,
                    l.widthUp,
                    l.windowOuterWidth,
                    l.windowOuterHeight,
                    l.windowInnerWidth,
                    l.windowInnerHeight,
                );
        }
        setSettings(l) {
            this.ensureInitialized(),
                i.a.setIdCaptureConfigParams(
                    this.getPipelineType(),
                    l.isFixedMask,
                    l.isIPhone14OrHigher,
                    l.idType,
                    l.blurCheckEnabled,
                    l.glareCheckEnabled,
                    l.faceQualityCheckEnabled,
                    l.iouCheckEnabled,
                    l.fpsLimitEnabled,
                );
        }
        setModelType(l) {
            let t;
            switch ((this.ensureInitialized(), l)) {
                case "v1":
                    t = i.f.IdCaptureV1x;
                    break;
                case "v2":
                    t = i.f.IdCaptureV2x;
                    break;
                case "v3":
                    t = i.f.IdCaptureV3x;
                    break;
                default:
                    throw Error(`Unknown model type: ${l}`);
            }
            i.a.setIdCaptureModelType(this.getPipelineType(), t);
        }
        async processFrame(l) {
            let t = await this.processFrameWasm(l),
                d = this.getPipelineType();
            t && (d === i.d.IdBlurGlarePipeline || d === i.d.IdVideoSelfiePipeline)
                ? (this.lastProcessResult = t)
                : (this.lastProcessResult = null);
        }
        getLastProcessResult() {
            return this.lastProcessResult;
        }
        transformPerspective(l, t) {
            this.ensureInitialized();
            let d = l.width(),
                c = l.height();
            try {
                let a = l.getImageData();
                if (!a) return l;
                let s = i.a.IdPerspectiveTransform(a, t);
                if (s) {
                    let l = new e.t(s),
                        i = l.width(),
                        a = l.height();
                    if (i === d && a === c) {
                        let d = this.cropCanvasToRect(l, {
                            x: Math.round(t.x),
                            y: Math.round(t.y),
                            w: Math.round(t.w),
                            h: Math.round(t.h),
                        });
                        if (d) return d;
                    }
                    return l;
                }
                return l;
            } catch (t) {
                return l;
            }
        }
        cropCanvasToRect(l, t) {
            let d = l.width(),
                i = l.height();
            if (!d || !i) return null;
            let c = Math.max(0, Math.min(t.x, d)),
                a = Math.max(0, Math.min(t.y, i)),
                s = Math.max(1, Math.min(t.w, d - c)),
                n = Math.max(1, Math.min(t.h, i - a)),
                Z = document.createElement("canvas");
            (Z.width = s), (Z.height = n);
            let b = Z.getContext("2d");
            return b ? (b.drawImage(l.canvas, c, a, s, n, 0, 0, s, n), new e.t(Z)) : null;
        }
        getCapturedCanvas() {
            return this.capturedCanvas;
        }
        getOriginalCapturedCanvas() {
            return this.originalCapturedCanvas;
        }
        setCapturedCanvases(l, t) {
            (this.originalCapturedCanvas = l), (this.capturedCanvas = t);
        }
        reset() {
            super.reset(),
                (this.lastProcessResult = null),
                (this.capturedCanvas = null),
                (this.originalCapturedCanvas = null);
        }
    };
let a = {
        blurThreshold: 0.2,
        blurChangeThreshold: 0.2,
        glareThreshold: 0.3,
        clsThreshold: 0.98,
        sideThreshold: 0.8,
        iouThreshold: 0.8,
        idDetectedTimeout: 1e4,
        autocaptureTimeout: 5e3,
        framesAggregationInterval: 3e3,
    },
    s = {
        areaDown: 25e3,
        areaUp: 55e3,
        areaIOSPassportUp: 3e4,
        areaIOSPassportDown: 2e4,
        widthIOSUp: 160,
        widthIOSDown: 85,
        widthDown: 110,
        widthUp: 205,
    },
    n = "v2";
