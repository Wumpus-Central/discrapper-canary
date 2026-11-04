(a.r(e),
    a.d(e, {
        authenticationMachine: () => D,
        createAuthenticationActor: () => A,
        createAuthenticationManager: () => p,
    }));
var r = a(522681),
    E = a(41851),
    n = a(269882),
    i = a(528239),
    o = a(829601);
(a(489510), a(886347), a(219877));
var s = a(646613),
    _ = a(215628);
(a(867386), a(444064), a(880008), a(49954), a(154676));
var d = a(985346),
    T = a(377689),
    c = a(327487);
(a(280366), a(693160), a(97669), a(614235), a(888091), a(453080));
var R = a(660125),
    S = a(588936);
(a(689280), a(974916), a(159126), a(934350), a(132680));
let O = {
        SPOOF_ATTEMPT_DETECTED: S.t.SPOOF_ATTEMPT_DETECTED,
        SELFIE_FACE_OCCLUDED: S.t.FACE_OCCLUDED,
        FACE_OCCLUDED: S.t.FACE_OCCLUDED,
        FACE_TOO_DARK: S.t.FACE_TOO_DARK,
        LENSES_DETECTED: S.t.LENSES_DETECTED,
        FACE_MASK_DETECTED: S.t.FACE_MASK_DETECTED,
        CLOSED_EYES_DETECTED: S.t.CLOSED_EYES_DETECTED,
        HEAD_COVER_DETECTED: S.t.HEAD_COVER_DETECTED,
        FACE_NOT_FOUND: S.t.FACE_NOT_FOUND,
        FACE_CROPPING_FAILED: S.t.FACE_CROPPING_FAILED,
        FACE_TOO_SMALL: S.t.FACE_TOO_SMALL,
        FACE_TOO_BLURRY: S.t.FACE_TOO_BLURRY,
        BAD_PHOTO_QUALITY: S.t.BAD_PHOTO_QUALITY,
        PROCESSING_ERROR: S.t.PROCESSING_ERROR,
        BAD_REQUEST: S.t.BAD_REQUEST,
        SERVER: S.t.SERVER,
        USER_IS_NOT_RECOGNIZED: S.t.USER_IS_NOT_RECOGNIZED,
        NONEXISTENT_CUSTOMER: S.t.NONEXISTENT_CUSTOMER,
        HINT_NOT_PROVIDED: S.t.HINT_NOT_PROVIDED,
    },
    C = [S.t.NONEXISTENT_CUSTOMER, S.t.HINT_NOT_PROVIDED],
    u = (t) => (t ? ("PASS" !== t.overallStatus ? (O[t.error?.name] ?? S.t.SERVER) : void 0) : S.t.SERVER),
    D = _.t.provide({
        actors: {
            prepareFaceUpload: (0, s.a)(async ({ input: t }) => ((0, c.n)(t.config) ? (0, c.i)(t) : (0, c.t)(t))),
            uploadFace: (0, s.a)(async ({ input: t, signal: e }) =>
                (0, c.n)(t.config)
                    ? (0, c.r)(t, e)
                    : (async function (t) {
                          try {
                              let e = {
                                      base64Image: t.encryptedBase64Image,
                                      faceCoordinates: t.faceCoordinates ?? void 0,
                                      encrypted: !0,
                                      clientInfo: { deviceClass: (0, R.t)() },
                                      metadata: t.metadata ?? void 0,
                                      ...(void 0 !== t.authHint && { hint: t.authHint }),
                                  },
                                  a = {};
                              t.recordingId && (a.recordingId = t.recordingId);
                              let r = await E.t.post(i.t.authenticate, e, { signal: t.signal, query: a });
                              if (!r.ok) throw Error(`POST ${i.t.authenticate} failed: ${r.status} ${r.statusText}`);
                              return (
                                  t.deepsightService &&
                                      (0, o.t)({
                                          frontIdStatsAnalysisStatus: "",
                                          backIdStatsAnalysisStatus: "",
                                          selfieStatsAnalysisStatus: t.deepsightService.getAnalysisStatus(),
                                          motionStatus: t.deepsightService.getMotionStatus(),
                                      }),
                                  r.data
                              );
                          } catch (e) {
                              let t = ((t) => {
                                  if (!1 !== t.ok || "number" != typeof t.status) return;
                                  if (400 !== t.status) return S.t.SERVER;
                                  let e = t.data?.error?.name;
                                  return e ? (O[e] ?? S.t.BAD_REQUEST) : S.t.BAD_REQUEST;
                              })(e);
                              if (t) throw Error(t);
                              throw Error(S.t.SERVER);
                          }
                      })({
                          encryptedBase64Image: t.encryptedBase64Image,
                          faceCoordinates: t.faceCoordinates,
                          authHint: t.authHint,
                          metadata: t.deepsightService?.getMetadata(),
                          recordingId: t.uploadRecordingId,
                          deepsightService: t.deepsightService ?? void 0,
                          signal: e,
                      }),
            ),
            processFace: (0, s.a)(async () => ({})),
        },
        actions: {
            setUploadErrorFromUploadValidation: (0, s.r)({
                uploadError: ({ context: t }) => {
                    if (!(0, c.n)(t.config)) return u(t.uploadResponse) ?? S.t.SERVER;
                },
            }),
            setTerminalError: (0, s.r)({
                error: ({ context: t }) => {
                    if (t.attemptsRemaining <= 0)
                        return {
                            type: "FACE_AUTH_ERROR",
                            message: "No more attempts remaining",
                            moduleErrorCode: S.t.NO_MORE_ATTEMPTS,
                        };
                    let e = t.uploadResponse;
                    return {
                        type: "FACE_AUTH_ERROR",
                        message: e?.error.message ?? e?.error.name ?? "Face authentication error",
                        moduleErrorCode: e ? O[e.error.name] : void 0,
                    };
                },
            }),
        },
        guards: {
            hasUploadValidationError: ({ context: t }) => !(0, c.n)(t.config) && void 0 !== u(t.uploadResponse),
            isTerminalUploadError: ({ context: t }) =>
                !(0, c.n)(t.config) &&
                ((t, e) => {
                    if (!t) return !1;
                    let a = O[t.error?.name];
                    return !!(a && C.includes(a)) || !!(e <= 0);
                })(t.uploadResponse, t.attemptsRemaining),
            isNoAttemptsTerminal: () => !0,
        },
    });
function A(t) {
    let e = t.dependencies ?? { storage: new T.t(), getWasmUtil: () => r.t.getInstance() };
    return (0, s.s)(D, { input: { config: t.config, dependencies: e, authHint: t.authHint } }).start();
}
function p(t) {
    return (0, d.t)(A(t), n.n.authFace);
}
