d.d(t, { n: () => o, t: () => h });
var i = d(768672),
    e = d(168056),
    c = d(248051),
    a = d(309370),
    s = d(77254),
    n = d(436434),
    Z = d(235582),
    b = d(659750),
    m = d(616533);
function o(l) {
    switch (l) {
        case "OPTION_3D":
            return { obfuscateWithAvatar: !0, avatarVariant: "avatar-3d" };
        case "OPTION_2D":
            return { obfuscateWithAvatar: !0, avatarVariant: "avatar-2d" };
        case "OPTION_SILHOUETTE":
            return { obfuscateWithAvatar: !0, avatarVariant: "privacy-lens" };
        default:
            return { obfuscateWithAvatar: !1, avatarVariant: void 0 };
    }
}
let u = (l) => l.captureAttempts ?? l.numberOfAttempts ?? 3,
    h = (0, e.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            checkPermission: (0, e.a)(async () => (0, c.t)()),
            requestPermission: (0, e.a)(async ({ input: l }) => (0, c.n)(l)),
            initializeCamera: (0, e.a)(async ({ input: l }) =>
                (0, a.o)({ config: l.config, deepsightService: l.deepsightService }),
            ),
            runDetection: (0, e.i)(({ input: l, sendBack: t }) => {
                if (!l.frameCapturer || !l.provider) return t({ type: "DETECTION_UPDATE", status: "error" }), () => {};
                if (l.manualCaptureTriggered) return t({ type: "DETECTION_UPDATE", status: "manualCapture" }), () => {};
                let { cleanup: d, reset: i } = (0, a.l)({
                    config: l.config,
                    capturer: l.frameCapturer,
                    onUpdate: (l) => t({ type: "DETECTION_UPDATE", status: l }),
                    onFrame: (l) => t({ type: "DETECTION_FRAME", frame: l }),
                    onSuccess: (l, d) => t({ type: "DETECTION_SUCCESS", canvas: l, faceCoordinates: d }),
                    provider: l.provider,
                });
                return t({ type: "DETECTION_RESET_READY", reset: i }), d;
            }),
            runAvatar: (0, e.i)(({ input: l, sendBack: t }) => {
                let { obfuscateWithAvatar: d, avatarVariant: i } = o(l.config.selfieConcealmentOption);
                if (!d || !l.stream) return () => {};
                let e = l.stream,
                    c = i ?? "avatar-3d",
                    a = null,
                    s = !1;
                return (
                    (async () => {
                        try {
                            let d = await (0, n.t)({ variant: c, stream: e, assets: l.config.avatarAssets });
                            if (s) return void d.stop();
                            (a = d), t({ type: "AVATAR_READY", canvas: d.canvas });
                        } catch (l) {
                            console.warn("[face-avatar] failed to start avatar overlay", l);
                        }
                    })(),
                    () => {
                        (s = !0), a?.stop();
                    }
                );
            }),
            initializeDeepsightSession: (0, e.a)(
                async ({ input: l }) => await (0, a.s)({ ds: l.ds, storage: l.storage }),
            ),
            startRecording: (0, e.a)(async ({ input: l }) => {
                if (!l.stream) return l.recordingService;
                let t = await l.dependencies.getWasmUtil(),
                    d = (0, i.r)(),
                    e = l.recordingService ?? (0, m.t)({ config: l.config, wasmUtil: t, sessionToken: d });
                return e && (await e.start(l.stream)), e;
            }),
            checkVirtualCamera: (0, e.a)(async ({ input: l }) => {
                if (!l.deepsightService || !l.stream) return !1;
                let t = l.stream.getVideoTracks()[0];
                return !!t && l.deepsightService.checkVirtualCamera(t);
            }),
            prepareFaceUpload: (0, e.a)(async () => {
                throw Error("prepareFaceUpload must be provided by variant");
            }),
            uploadFace: (0, e.a)(async () => {
                throw Error("uploadFace must be provided by variant");
            }),
            processFace: (0, e.a)(async () => {
                throw Error("processFace must be provided by variant");
            }),
        },
        actions: {
            stopMediaStream: (0, e.r)(
                ({ context: l }) => (
                    l.frameCapturer?.dispose(),
                    l.stream && (0, a.f)(l.stream),
                    l.provider?.dispose(),
                    { stream: void 0, provider: void 0, frameCapturer: void 0, avatarCanvas: void 0 }
                ),
            ),
            setStreamAndCapturer: (0, e.r)({
                stream: ({ event: l }) => {
                    if ("output" in l) return l.output.stream;
                },
                provider: ({ event: l }) => {
                    if ("output" in l) return l.output.provider;
                },
                frameCapturer: ({ event: l }) => {
                    if ("output" in l) return new Z.t(l.output.stream);
                },
            }),
            trackTutorial: () => void 0,
            trackContinue: () => {},
            resetContext: (0, e.r)(({ context: l }) => ({
                stream: void 0,
                provider: void 0,
                frameCapturer: void 0,
                error: void 0,
                detectionStatus: "idle",
                debugFrame: void 0,
                capturedImage: void 0,
                faceCoordinates: void 0,
                uploadResponse: void 0,
                processResponse: void 0,
                recordingService: void 0,
                attemptsRemaining: u(l.config),
                uploadError: void 0,
                permissionResult: void 0,
                resetDetection: void 0,
                deepsightService: void 0,
                manualCaptureTriggered: !1,
                captureOnlyResult: void 0,
                avatarCanvas: void 0,
            })),
            resetDetection: ({ context: l }) => {
                l.resetDetection?.();
            },
            captureImage: (0, e.r)({
                capturedImage: ({ context: l }) =>
                    l.capturedImage ? l.capturedImage : (l.frameCapturer?.getLatestCanvas() ?? void 0),
            }),
            captureLatestFrame: (0, e.r)({
                capturedImage: ({ context: l }) => l.frameCapturer?.getLatestCanvas() ?? void 0,
            }),
            clearUploadFailure: (0, e.r)({
                uploadError: () => void 0,
                detectionStatus: () => "idle",
                capturedImage: () => void 0,
            }),
            clearStreamForRetry: (0, e.r)(
                ({ context: l }) => (
                    l.frameCapturer?.dispose(),
                    l.stream && (0, a.f)(l.stream),
                    l.provider?.dispose(),
                    { stream: void 0, provider: void 0, frameCapturer: void 0, avatarCanvas: void 0 }
                ),
            ),
            decrementAttemptsRemaining: (0, e.r)(({ context: l }) => ({ attemptsRemaining: l.attemptsRemaining - 1 })),
            setUploadErrorFromUploadValidation: (0, e.r)({ uploadError: () => s.t.SERVER }),
            setTerminalError: (0, e.r)({ error: () => "Authentication failed" }),
            clearRecordingService: (0, e.r)({ recordingService: () => void 0 }),
            cleanup: ({ context: l }) => {
                l.deepsightService?.cleanup(), l.recordingService?.cleanup();
            },
            setPermissionResultFromEvent: (0, e.r)({ permissionResult: ({ event: l }) => l.output }),
            setPermissionDenied: (0, e.r)({ permissionResult: () => "denied" }),
            setPermissionRefresh: (0, e.r)({ permissionResult: () => "refresh" }),
            setDeepsightServiceFromEvent: (0, e.r)({ deepsightService: ({ event: l }) => l.output }),
            setErrorFromEvent: (0, e.r)({ error: ({ event: l }) => String(l.error) }),
            setDetectionStatusDetecting: (0, e.r)({
                detectionStatus: ({ context: l }) => (l.manualCaptureTriggered ? "manualCapture" : "detecting"),
            }),
            setRecordingServiceFromEvent: (0, e.r)({
                recordingService: ({ context: l, event: t }) => t.output ?? l.recordingService,
            }),
            setDetectionStatusFromEvent: (0, e.r)({ detectionStatus: ({ event: l }) => l.status }),
            setManualCaptureTriggered: (0, e.r)({
                manualCaptureTriggered: ({ context: l, event: t }) => {
                    let d = t.status;
                    return l.manualCaptureTriggered || "manualCapture" === d;
                },
            }),
            setDebugFrameFromEvent: (0, e.r)({ debugFrame: ({ event: l }) => l.frame }),
            setAvatarCanvas: (0, e.r)({ avatarCanvas: ({ event: l }) => l.canvas }),
            clearAvatarCanvas: (0, e.r)({ avatarCanvas: () => void 0 }),
            setResetDetectionFromEvent: (0, e.r)({ resetDetection: ({ event: l }) => l.reset }),
            setCapturedImageFromEvent: (0, e.r)({
                capturedImage: ({ event: l }) => l.canvas,
                faceCoordinates: ({ event: l }) => l.faceCoordinates,
            }),
            setUploadPreparationFromEvent: (0, e.r)({
                encryptedBase64Image: ({ event: l }) => l.output.encryptedBase64Image,
                uploadRecordingId: ({ event: l }) => l.output.recordingId,
            }),
            setUploadResponseFromEvent: (0, e.r)({ uploadResponse: ({ event: l }) => l.output }),
            setProcessResponseFromEvent: (0, e.r)({ processResponse: ({ event: l }) => l.output }),
            setServerErrorAndDecrement: (0, e.r)(({ context: l }) => ({
                uploadError: s.t.SERVER,
                attemptsRemaining: l.attemptsRemaining - 1,
            })),
            sendLabelInspection: () => {
                (0, a.c)();
            },
            flagFaceManualReview: () => {
                (0, m.r)();
            },
            preloadRecordingProvider: ({ context: l }) => {
                !0 === l.config.enableFaceRecording && "VIDEOLIVENESS" !== l.config.deepsightLiveness && (0, m.n)();
            },
            noOp: () => void 0,
        },
        guards: {
            hasShowTutorial: ({ context: l }) => l.config.showTutorial,
            isPermissionGranted: ({ event: l }) => "output" in l && "granted" === l.output,
            isReadyForCapture: ({ context: l, event: t }) =>
                (0, b.t)((0, b.r)("output" in t ? t.output : void 0, l.permissionResult), l.config.ds),
            needsMotionPrimeOnly: ({ context: l, event: t }) =>
                (0, b.n)((0, b.r)("output" in t ? t.output : void 0, l.permissionResult), l.config.ds),
            isPermissionDeniedError: ({ event: l }) => {
                if ("error" in l) {
                    let t = l.error;
                    return t?.name === "NotAllowedError" || t?.name === "PermissionDeniedError";
                }
                return !1;
            },
            hasStream: ({ context: l }) => void 0 !== l.stream,
            isCameraAndDeepsightReady: ({ context: l }) => void 0 !== l.stream && void 0 !== l.deepsightService,
            hasAttemptsRemaining: ({ context: l }) => l.attemptsRemaining > 0,
            hasCapturedImage: ({ context: l }) => void 0 !== l.capturedImage,
            hasUploadValidationError: () => !1,
            isTerminalUploadError: () => !1,
            isNoAttemptsTerminal: () => !1,
        },
    }).createMachine({
        id: "faceCapture",
        initial: "idle",
        context: ({ input: l }) => ({
            config: l.config,
            dependencies: l.dependencies,
            authHint: l.authHint,
            stream: void 0,
            provider: void 0,
            frameCapturer: void 0,
            error: void 0,
            detectionStatus: "idle",
            debugFrame: void 0,
            capturedImage: void 0,
            faceCoordinates: void 0,
            uploadResponse: void 0,
            processResponse: void 0,
            recordingService: void 0,
            attemptsRemaining: u(l.config),
            uploadError: void 0,
            permissionResult: void 0,
            resetDetection: void 0,
            deepsightService: void 0,
            encryptedBase64Image: void 0,
            uploadRecordingId: void 0,
            manualCaptureTriggered: !1,
            captureOnlyResult: void 0,
            avatarCanvas: void 0,
            faceFeed: void 0,
        }),
        on: { QUIT: { target: "#faceCapture.closed" } },
        states: {
            idle: { on: { LOAD: [{ target: "tutorial", guard: "hasShowTutorial" }, { target: "loading" }] } },
            loading: {
                entry: "preloadRecordingProvider",
                invoke: [
                    {
                        id: "checkPermissionLoading",
                        src: "checkPermission",
                        onDone: [
                            { target: "capture", guard: "isReadyForCapture", actions: "setPermissionResultFromEvent" },
                            { target: "permissions", actions: "setPermissionResultFromEvent" },
                        ],
                    },
                    {
                        id: "loadingInitDeepsight",
                        src: "initializeDeepsightSession",
                        input: ({ context: l }) => ({ ds: l.config.ds, storage: l.dependencies.storage }),
                        onDone: { actions: "setDeepsightServiceFromEvent" },
                        onError: { actions: "noOp" },
                    },
                ],
            },
            tutorial: {
                initial: "checkingPermission",
                entry: ["trackTutorial", "preloadRecordingProvider"],
                states: {
                    checkingPermission: {
                        invoke: {
                            id: "checkPermissionTutorial",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "initializingCamera",
                                    guard: "isReadyForCapture",
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "ready", actions: "setPermissionResultFromEvent" },
                            ],
                        },
                    },
                    initializingCamera: {
                        type: "parallel",
                        states: {
                            cameraInit: {
                                initial: "initializingDeepsight",
                                states: {
                                    initializingDeepsight: {
                                        invoke: {
                                            id: "tutorialInitDeepsight",
                                            src: "initializeDeepsightSession",
                                            input: ({ context: l }) => ({
                                                ds: l.config.ds,
                                                storage: l.dependencies.storage,
                                            }),
                                            onDone: {
                                                target: "initializingStream",
                                                actions: "setDeepsightServiceFromEvent",
                                            },
                                            onError: { target: "#faceCapture.tutorial.ready" },
                                        },
                                    },
                                    initializingStream: {
                                        invoke: {
                                            id: "tutorialInitCamera",
                                            src: "initializeCamera",
                                            input: ({ context: l }) => ({
                                                config: l.config,
                                                dependencies: l.dependencies,
                                                deepsightService: l.deepsightService,
                                            }),
                                            onDone: { target: "ready", actions: "setStreamAndCapturer" },
                                            onError: [
                                                {
                                                    target: "#faceCapture.tutorial.ready",
                                                    guard: "isPermissionDeniedError",
                                                    actions: "setPermissionDenied",
                                                },
                                                { target: "#faceCapture.tutorial.ready", actions: "setErrorFromEvent" },
                                            ],
                                        },
                                    },
                                    ready: { type: "final" },
                                },
                            },
                            userIntent: {
                                initial: "waiting",
                                states: {
                                    waiting: { on: { NEXT_STEP: { target: "clicked", actions: "trackContinue" } } },
                                    clicked: { type: "final" },
                                },
                            },
                        },
                        onDone: { target: "#faceCapture.capture" },
                    },
                    ready: {
                        initial: "idle",
                        states: {
                            idle: {
                                always: [
                                    {
                                        target: "initializingDeepsight",
                                        guard: ({ context: l }) => void 0 === l.deepsightService,
                                    },
                                    { target: "readyForNext" },
                                ],
                            },
                            initializingDeepsight: {
                                invoke: {
                                    id: "initializeDeepsightTutorial",
                                    src: "initializeDeepsightSession",
                                    input: ({ context: l }) => ({ ds: l.config.ds, storage: l.dependencies.storage }),
                                    onDone: { target: "readyForNext", actions: "setDeepsightServiceFromEvent" },
                                    onError: { target: "readyForNext" },
                                },
                            },
                            readyForNext: {
                                on: {
                                    NEXT_STEP: {
                                        target: "#faceCapture.tutorial.waitingForPermission",
                                        actions: "trackContinue",
                                    },
                                },
                            },
                        },
                    },
                    waitingForPermission: {
                        invoke: {
                            id: "checkPermissionWaiting",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isReadyForCapture",
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "#faceCapture.permissions.requesting",
                                    guard: "needsMotionPrimeOnly",
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "#faceCapture.permissions", actions: "setPermissionResultFromEvent" },
                            ],
                        },
                    },
                },
            },
            permissions: {
                entry: "preloadRecordingProvider",
                initial: "checkingDeepsight",
                states: {
                    checkingDeepsight: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: l }) => void 0 === l.deepsightService,
                            },
                            { target: "idle" },
                        ],
                    },
                    initializingDeepsight: {
                        invoke: {
                            id: "initializeDeepsightPerms",
                            src: "initializeDeepsightSession",
                            input: ({ context: l }) => ({ ds: l.config.ds, storage: l.dependencies.storage }),
                            onDone: { target: "idle", actions: "setDeepsightServiceFromEvent" },
                            onError: { target: "idle" },
                        },
                    },
                    idle: {
                        invoke: {
                            id: "checkPermissionIdle",
                            src: "checkPermission",
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isReadyForCapture",
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: l }) => "denied" === l.output,
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "motionOnly",
                                    guard: "needsMotionPrimeOnly",
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "waitingForUser", actions: "setPermissionResultFromEvent" },
                            ],
                            onError: {
                                target: "waitingForUser",
                                actions: (0, e.r)({ permissionResult: () => "prompt" }),
                            },
                        },
                        on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" },
                    },
                    waitingForUser: { on: { REQUEST_PERMISSION: "requesting", GO_TO_LEARN_MORE: "learnMore" } },
                    motionOnly: { on: { REQUEST_PERMISSION: "requesting" } },
                    learnMore: { on: { BACK: "idle", REQUEST_PERMISSION: "requesting" } },
                    requesting: {
                        invoke: {
                            id: "requestPermission",
                            src: "requestPermission",
                            input: ({ context: l }) => ({
                                permissionResult: "refresh" === l.permissionResult ? void 0 : l.permissionResult,
                                requestMotionPermission: !0 === l.config.ds,
                            }),
                            onDone: [
                                {
                                    target: "#faceCapture.capture",
                                    guard: "isReadyForCapture",
                                    actions: "setPermissionResultFromEvent",
                                },
                                {
                                    target: "denied",
                                    guard: ({ event: l }) => "denied" === l.output,
                                    actions: "setPermissionResultFromEvent",
                                },
                                { target: "waitingForUser", actions: "setPermissionResultFromEvent" },
                            ],
                            onError: { target: "denied" },
                        },
                    },
                    denied: { entry: "setPermissionRefresh" },
                },
            },
            capture: {
                entry: "preloadRecordingProvider",
                initial: "checkingDeepsight",
                exit: ["stopMediaStream", "cleanup", "clearRecordingService"],
                states: {
                    checkingDeepsight: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: l }) => void 0 === l.deepsightService,
                            },
                            { target: "checkingStream" },
                        ],
                    },
                    initializingDeepsight: {
                        invoke: {
                            id: "initializeDeepsightCapture",
                            src: "initializeDeepsightSession",
                            input: ({ context: l }) => ({ ds: l.config.ds, storage: l.dependencies.storage }),
                            onDone: { target: "checkingStream", actions: ["setDeepsightServiceFromEvent"] },
                            onError: { target: "#faceCapture.permissions" },
                        },
                    },
                    checkingStream: {
                        always: [
                            {
                                target: "initializingDeepsight",
                                guard: ({ context: l }) => void 0 === l.deepsightService,
                            },
                            { target: "detecting", guard: "hasStream" },
                            { target: "initializing" },
                        ],
                    },
                    initializing: {
                        invoke: {
                            id: "initializeCamera",
                            src: "initializeCamera",
                            input: ({ context: l }) => ({
                                config: l.config,
                                dependencies: l.dependencies,
                                deepsightService: l.deepsightService,
                            }),
                            onDone: { target: "detecting", actions: ["setStreamAndCapturer"] },
                            onError: [
                                {
                                    target: "#faceCapture.permissions",
                                    guard: "isPermissionDeniedError",
                                    actions: "setPermissionDenied",
                                },
                                { target: "#faceCapture.error", actions: "setErrorFromEvent" },
                            ],
                        },
                    },
                    detecting: {
                        entry: ["setDetectionStatusDetecting"],
                        invoke: [
                            {
                                id: "checkVirtualCamera",
                                src: "checkVirtualCamera",
                                input: ({ context: l }) => ({ stream: l.stream, deepsightService: l.deepsightService }),
                                onDone: [
                                    {
                                        target: "#faceCapture.processing",
                                        guard: ({ event: l }) => !0 === l.output,
                                        actions: "sendLabelInspection",
                                    },
                                ],
                                onError: { actions: "noOp" },
                            },
                            {
                                id: "startRecording",
                                src: "startRecording",
                                input: ({ context: l }) => ({
                                    config: l.config,
                                    dependencies: l.dependencies,
                                    recordingService: l.recordingService,
                                    stream: l.stream,
                                }),
                                onDone: { actions: "setRecordingServiceFromEvent" },
                                onError: { actions: "noOp" },
                            },
                            {
                                id: "runDetection",
                                src: "runDetection",
                                input: ({ context: l }) => ({
                                    frameCapturer: l.frameCapturer,
                                    provider: l.provider,
                                    config: l.config,
                                    manualCaptureTriggered: l.manualCaptureTriggered,
                                    faceFeed: l.faceFeed,
                                }),
                            },
                            {
                                id: "runAvatar",
                                src: "runAvatar",
                                input: ({ context: l }) => ({
                                    stream: l.stream,
                                    config: l.config,
                                    faceFeed: l.faceFeed,
                                }),
                            },
                        ],
                        exit: ["clearAvatarCanvas"],
                        on: {
                            DETECTION_UPDATE: { actions: ["setDetectionStatusFromEvent", "setManualCaptureTriggered"] },
                            DETECTION_FRAME: { actions: "setDebugFrameFromEvent" },
                            AVATAR_READY: { actions: "setAvatarCanvas" },
                            DETECTION_RESET_READY: { actions: "setResetDetectionFromEvent" },
                            DETECTION_SUCCESS: { target: "capturing", actions: "setCapturedImageFromEvent" },
                            MANUAL_CAPTURE: { target: "capturingManual" },
                        },
                    },
                    capturing: {
                        entry: ["captureImage"],
                        always: [
                            { target: "preparingUpload", guard: "hasCapturedImage" },
                            { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        ],
                    },
                    capturingManual: {
                        entry: ["captureLatestFrame"],
                        always: [
                            { target: "preparingUpload", guard: "hasCapturedImage" },
                            { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        ],
                    },
                    preparingUpload: {
                        invoke: {
                            id: "prepareFaceUpload",
                            src: "prepareFaceUpload",
                            input: ({ context: l }) => l,
                            onDone: { target: "uploading", actions: "setUploadPreparationFromEvent" },
                            onError: { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        },
                    },
                    uploading: {
                        invoke: {
                            id: "uploadFace",
                            src: "uploadFace",
                            input: ({ context: l }) => l,
                            onDone: { target: "validatingUpload", actions: "setUploadResponseFromEvent" },
                            onError: { target: "uploadError", actions: "setServerErrorAndDecrement" },
                        },
                    },
                    validatingUpload: {
                        always: [
                            {
                                target: "#faceCapture.error",
                                guard: "isTerminalUploadError",
                                actions: "setTerminalError",
                            },
                            {
                                target: "uploadError",
                                guard: "hasUploadValidationError",
                                actions: ["setUploadErrorFromUploadValidation", "decrementAttemptsRemaining"],
                            },
                            { target: "success" },
                        ],
                    },
                    uploadError: {
                        on: {
                            RETRY_CAPTURE: [
                                {
                                    target: "checkingStream",
                                    guard: "hasAttemptsRemaining",
                                    actions: ["resetDetection", "clearUploadFailure", "clearStreamForRetry"],
                                },
                                {
                                    target: "#faceCapture.error",
                                    guard: "isNoAttemptsTerminal",
                                    actions: ["setTerminalError"],
                                },
                                { target: "#faceCapture.terminalProcessing", actions: ["flagFaceManualReview"] },
                            ],
                        },
                    },
                    success: { entry: "cleanup", after: { 3e3: { target: "#faceCapture.processing" } } },
                },
            },
            processing: {
                invoke: {
                    id: "processFace",
                    src: "processFace",
                    input: ({ context: l }) => l,
                    onDone: { target: "finished", actions: "setProcessResponseFromEvent" },
                    onError: { target: "finished" },
                },
            },
            terminalProcessing: {
                entry: "cleanup",
                invoke: {
                    id: "processFace",
                    src: "processFace",
                    input: ({ context: l }) => l,
                    onDone: { target: "finished", actions: "setProcessResponseFromEvent" },
                    onError: { target: "finished" },
                },
            },
            finished: { entry: "stopMediaStream", type: "final" },
            closed: { entry: "stopMediaStream", type: "final" },
            error: { entry: "stopMediaStream", on: { RESET: { target: "idle", actions: "resetContext" } } },
        },
    });
