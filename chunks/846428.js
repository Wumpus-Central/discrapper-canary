i.d(o, {
    Rl: () => t,
    rk: () => r
});
let n = (e) => (null == e ? 'v1' : `v/${e}`),
    t = async (e) =>
        window.Meticulous?.isRunningAsTest
            ? (console.debug('Running as part of a Meticulous test case, so skipping loading the Meticulous recorder.'),
              {
                  stopRecording: async () => {}
              })
            : await s(e).catch(
                  (e) => (
                      console.error(e),
                      {
                          stopRecording: async () => {}
                      }
                  )
              ),
    s = ({ projectId: e, recordingToken: o, uploadIntervalMs: i, snapshotLinkedStylesheets: t, commitHash: s, maxMsToBlockFor: r, snippetsBaseUrl: d, forceRecording: c, middleware: l, responseSanitizers: u, isProduction: a, version: _ }) => {
        let E = !1;
        return new Promise((w, p) => {
            let S = r ?? 2000;
            S > 0 &&
                setTimeout(() => {
                    (E = !0),
                        w({
                            stopRecording: async () => {}
                        });
                }, S);
            let R = document.createElement('script');
            (R.type = 'text/javascript'), (R.src = new URL(`${null != _ ? 'record/' : ''}${n(_ ?? null)}/meticulous-manual-init.js`, d || 'https://snippet.meticulous.ai').href);
            let O = window;
            (O.METICULOUS_RECORDING_TOKEN = o ?? e),
                void 0 !== i && (O.METICULOUS_UPLOAD_INTERVAL_MS = i),
                void 0 !== s && (O.METICULOUS_APP_COMMIT_HASH = s),
                void 0 !== t && (O.METICULOUS_SNAPSHOT_LINKED_STYLESHEETS = t),
                void 0 !== c && (O.METICULOUS_FORCE_RECORDING = c),
                void 0 !== a && (O.METICULOUS_IS_PRODUCTION_ENVIRONMENT = a),
                null != u && u.length > 0 && (O.METICULOUS_NETWORK_RESPONSE_SANITIZERS = u),
                null != l && l.length > 0 && (O.METICULOUS_RECORDER_MIDDLEWARE_V1 = l),
                (R.onload = function () {
                    if (E) return void console.debug('Meticulous snippet abandoned due to max blocking time reached.');
                    let e = window.__meticulous?.initialiseRecorder;
                    if ('function' != typeof e) return void p('Meticulous recorder failed to initialise.');
                    try {
                        e();
                    } catch (e) {
                        p(e);
                    }
                    w({
                        stopRecording: async () => {
                            let e = window.__meticulous?.stopRecording;
                            if (!e) throw Error('Recorder not initialised: window.__meticulous.stopRecording is not defined.');
                            await e();
                        }
                    });
                }),
                (R.onerror = () => {
                    p('Meticulous recorder failed to initialise.');
                }),
                document.head.appendChild(R);
        });
    },
    r = async () => {
        let e = window?.__meticulous?.earlyNetworkRecorder?.dispose;
        e && (await e());
    };
