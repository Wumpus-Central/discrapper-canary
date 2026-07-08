i.d(t, { selfieMachine: () => u, y6: () => h }), i(976886);
var r = i(133237);
i(209688);
var n = i(588233);
i(171251), i(401959);
var o = i(64755),
    a = i(233627),
    s = i(257202),
    l = i(489131);
i(389777), i(351618), i(581763);
var c = i(161370);
i(958027), i(948455), i(781322), i(196283), i(410903), i(682781), i(840237), Object.values(c.m);
let d = ({ config: e, response: t }) =>
        t
            ? 0 !== t.confidence
                ? c.m.LIVENESS
                : e.validateBrightness && !t.isBright
                  ? c.m.BRIGHTNESS
                  : e.validateLenses && t.hasLenses
                    ? c.m.LENSES
                    : e.validateFaceMask && t.hasFaceMask
                      ? c.m.MASK
                      : e.validateClosedEyes && t.hasClosedEyes
                        ? c.m.CLOSED_EYES
                        : e.validateHeadCover && t.hasHeadCover
                          ? c.m.HEAD_COVER
                          : void 0
            : c.m.SERVER,
    u = l.t.provide({
        actors: {
            prepareFaceUpload: (0, o.a)(async ({ input: e }) => ((0, l.r)(e.config) ? (0, l.a)(e) : (0, l.n)(e))),
            uploadFace: (0, o.a)(async ({ input: e, signal: t }) =>
                (0, l.r)(e.config)
                    ? (0, l.i)(e, t)
                    : (0, c.p)({
                          encryptedBase64Image: e.encryptedBase64Image,
                          faceCoordinates: e.faceCoordinates,
                          metadata: e.deepsightService?.getMetadata(),
                          recordingId: e.uploadRecordingId,
                          signal: t,
                      }),
            ),
            processFace: (0, o.a)(async ({ input: e, signal: t }) => ((0, l.r)(e.config) ? {} : (0, c.f)("selfie", t))),
        },
        actions: {
            setUploadErrorFromUploadValidation: (0, o.r)({
                uploadError: ({ context: e }) => {
                    if (!(0, l.r)(e.config)) return d({ config: e.config, response: e.uploadResponse }) ?? c.m.SERVER;
                },
            }),
        },
        guards: {
            hasUploadValidationError: ({ context: e }) =>
                !(0, l.r)(e.config) && void 0 !== d({ config: e.config, response: e.uploadResponse }),
            isTerminalUploadError: () => !1,
        },
    });
function h(e) {
    let t;
    return (0, a.t)(
        ((t = e.dependencies ?? { storage: new s.t(), getWasmUtil: () => r.t.getInstance() }),
        (0, o.s)(u, { input: { config: e.config, dependencies: t, authHint: e.authHint } }).start()),
        n.n.faceCapture,
    );
}
async function p(e, t) {
    let i,
        r = e.capturedImage;
    if (!r) throw Error("selfieCaptureOnly: no captured image");
    try {
        i = (await e.recordingService?.stopAndGetVideo())?.videoBase64;
    } catch {
        i = void 0;
    }
    if (t.aborted) throw new DOMException("Aborted", "AbortError");
    let n = "";
    try {
        if (e.deepsightService) {
            let i = r.getImageData();
            if ((i && (await e.deepsightService.analyzeFrame(i)), t.aborted))
                throw new DOMException("Aborted", "AbortError");
            n = e.deepsightService.getMetadata();
        }
    } catch (e) {
        if (e?.name === "AbortError") throw e;
        n = "";
    }
    let o = r.getBase64Image() ?? "",
        a = r.getBlobData();
    if (!a) throw Error("selfieCaptureOnly: failed to build image blob");
    return { imageBase64: o, blob: a.blob, url: a.url, metadata: n, videoBase64: i };
}
i(850696),
    l.t.provide({
        actors: {
            prepareFaceUpload: (0, o.a)(async () => ({ encryptedBase64Image: "", recordingId: null })),
            uploadFace: (0, o.a)(async ({ input: e, signal: t }) => await p(e, t)),
            processFace: (0, o.a)(async () => ({})),
        },
        actions: { setUploadResponseFromEvent: (0, o.r)({ captureOnlyResult: ({ event: e }) => e.output }) },
        guards: { hasUploadValidationError: () => !1, isTerminalUploadError: () => !1 },
    });
