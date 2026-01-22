n.d(t, { A: () => m }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(274372),
    o = n(372684),
    c = n(399925);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m() {
    let { mlPipelinesEnabled: e } = (0, i.cf)([s.A], () => ({
            mlPipelinesEnabled: s.A.getSettings().mlPipelinesEnabled,
        })),
        [t, n] = l.useState(
            () => (
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = {
                        emotion: !1,
                        yell: !1,
                        wakeWord: !1,
                        whisper: !1,
                    }),
                {
                    wakeWord: window.__CLIPS_DEBUG__.wakeWord,
                    emotion: window.__CLIPS_DEBUG__.emotion,
                    yell: window.__CLIPS_DEBUG__.yell,
                    whisper: window.__CLIPS_DEBUG__.whisper,
                }
            ),
        ),
        [m, p] = l.useState(o.rb.KILL),
        [h, f] = l.useState(1),
        [x, b] = l.useState(""),
        [g, v] = l.useState(""),
        j = l.useCallback(
            (e) => {
                let a = !t[e];
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = {
                        emotion: !1,
                        yell: !1,
                        wakeWord: !1,
                        whisper: !1,
                    }),
                    (window.__CLIPS_DEBUG__[e] = a),
                    n((t) => u(d({}, t), { [e]: a }));
            },
            [t],
        );
    return (0, a.jsx)(r.HOs, {
        children: (0, a.jsxs)(r.lVW, {
            children: [
                (0, a.jsx)(r.nVY, {
                    label: "Send Test Signals",
                    children: (0, a.jsxs)(r.M_l, {
                        children: [
                            (0, a.jsx)(r.Button, {
                                text: "Manual",
                                onClick: () => c.Ts({ type: o.Gy.MANUAL }),
                            }),
                            (0, a.jsx)(r.Button, {
                                text: "Distributed",
                                onClick: () =>
                                    c.Ts({
                                        type: o.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, a.jsx)(r.Button, {
                                text: "Phrase: Clip",
                                onClick: () =>
                                    c.Ts({
                                        type: o.Gy.PHRASE,
                                        text: "clip",
                                    }),
                            }),
                            (0, a.jsx)(r.Button, {
                                text: "Yelling",
                                onClick: () =>
                                    c.Ts({
                                        type: o.Gy.YELLING,
                                        userId: "123",
                                    }),
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)(r.nVY, {
                    label: "Game Event Creator",
                    children: [
                        (0, a.jsxs)(r.M_l, {
                            children: [
                                (0, a.jsx)(r.l6P, {
                                    label: "Event Type",
                                    value: m,
                                    onSelectionChange: (e) => p(e),
                                    options: [
                                        {
                                            id: "kill",
                                            label: "Kill",
                                            value: o.rb.KILL,
                                        },
                                        {
                                            id: "multikill",
                                            label: "Multikill",
                                            value: o.rb.MULTIKILL,
                                        },
                                        {
                                            id: "death",
                                            label: "Death",
                                            value: o.rb.DEATH,
                                        },
                                        {
                                            id: "assist",
                                            label: "Assist",
                                            value: o.rb.ASSIST,
                                        },
                                        {
                                            id: "item",
                                            label: "Item",
                                            value: o.rb.ITEM,
                                        },
                                        {
                                            id: "victory",
                                            label: "Victory",
                                            value: o.rb.VICTORY,
                                        },
                                        {
                                            id: "defeat",
                                            label: "Defeat",
                                            value: o.rb.DEFEAT,
                                        },
                                        {
                                            id: "level_up",
                                            label: "Level Up",
                                            value: o.rb.LEVEL_UP,
                                        },
                                        {
                                            id: "treasure",
                                            label: "Treasure",
                                            value: o.rb.TREASURE,
                                        },
                                        {
                                            id: "objective_kill",
                                            label: "Objective Kill",
                                            value: o.rb.OBJECTIVE_KILL,
                                        },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(r.l6P, {
                                    label: "Importance",
                                    value: h,
                                    onSelectionChange: f,
                                    options: [
                                        {
                                            id: "low",
                                            label: "Low",
                                            value: 0,
                                        },
                                        {
                                            id: "medium",
                                            label: "Medium",
                                            value: 0.5,
                                        },
                                        {
                                            id: "high",
                                            label: "High",
                                            value: 1,
                                        },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                        (0, a.jsx)(r.ksK, {
                            label: "Title (optional)",
                            value: x,
                            onChange: b,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, a.jsx)(r.ksK, {
                            label: "Description (optional)",
                            value: g,
                            onChange: v,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, a.jsx)(r.Button, {
                            text: "Create Game Event",
                            onClick: () => {
                                c.Ts({
                                    type: o.Gy.GAME_EVENT,
                                    eventType: m,
                                    importance: h,
                                    title: x,
                                    description: g,
                                });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(r.cGx, {}),
                (0, a.jsxs)(r.nVY, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, a.jsx)(r.dOG, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => c.dR(u(d({}, e), { emotionClassifier: t })),
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => c.dR(u(d({}, e), { wakeWordDetector: t })),
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => c.dR(u(d({}, e), { yellDetector: t })),
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => c.dR(u(d({}, e), { whisperTranscription: t })),
                        }),
                    ],
                }),
                (0, a.jsxs)(r.nVY, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, a.jsx)(r.dOG, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => j("wakeWord"),
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => j("emotion"),
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => j("yell"),
                        }),
                        (0, a.jsx)(r.dOG, {
                            label: "Whisper Debug",
                            description: "Log whisper transcription events to console",
                            checked: t.whisper,
                            onChange: () => j("whisper"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
