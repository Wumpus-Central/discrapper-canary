n.d(t, { A: () => c });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(274372),
    o = n(372684),
    d = n(399925);
function c() {
    let { mlPipelinesEnabled: e } = (0, s.cf)([r.A], () => ({
            mlPipelinesEnabled: r.A.getSettings().mlPipelinesEnabled,
        })),
        [t, n] = i.useState(
            () => (
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = { emotion: !1, yell: !1, wakeWord: !1, whisper: !1 }),
                {
                    wakeWord: window.__CLIPS_DEBUG__.wakeWord,
                    emotion: window.__CLIPS_DEBUG__.emotion,
                    yell: window.__CLIPS_DEBUG__.yell,
                    whisper: window.__CLIPS_DEBUG__.whisper,
                }
            ),
        ),
        [c, u] = i.useState(o.rb.KILL),
        [m, h] = i.useState(1),
        [x, p] = i.useState(""),
        [g, _] = i.useState(""),
        f = i.useCallback(
            (e) => {
                let a = !t[e];
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = { emotion: !1, yell: !1, wakeWord: !1, whisper: !1 }),
                    (window.__CLIPS_DEBUG__[e] = a),
                    n((t) => ({ ...t, [e]: a }));
            },
            [t],
        );
    return (0, a.jsx)(l.HOs, {
        children: (0, a.jsxs)(l.lVW, {
            children: [
                (0, a.jsx)(l.nVY, {
                    label: "Send Test Signals",
                    children: (0, a.jsxs)(l.M_l, {
                        children: [
                            (0, a.jsx)(l.Button, { text: "Manual", onClick: () => d.Ts({ type: o.Gy.MANUAL }) }),
                            (0, a.jsx)(l.Button, {
                                text: "Distributed",
                                onClick: () =>
                                    d.Ts({
                                        type: o.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, a.jsx)(l.Button, {
                                text: "Phrase: Clip",
                                onClick: () => d.Ts({ type: o.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, a.jsx)(l.Button, {
                                text: "Yelling",
                                onClick: () => d.Ts({ type: o.Gy.YELLING, userId: "123" }),
                            }),
                            (0, a.jsx)(l.Button, {
                                text: "Laughter",
                                onClick: () => d.Ts({ type: o.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, a.jsx)(l.Button, {
                                text: "Shouting",
                                onClick: () => d.Ts({ type: o.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)(l.nVY, {
                    label: "Game Event Creator",
                    children: [
                        (0, a.jsxs)(l.M_l, {
                            children: [
                                (0, a.jsx)(l.l6P, {
                                    label: "Event Type",
                                    value: c,
                                    onSelectionChange: (e) => u(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: o.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: o.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: o.rb.DEATH },
                                        { id: "assist", label: "Assist", value: o.rb.ASSIST },
                                        { id: "item", label: "Item", value: o.rb.ITEM },
                                        { id: "victory", label: "Victory", value: o.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: o.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: o.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: o.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: o.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, a.jsx)(l.l6P, {
                                    label: "Importance",
                                    value: m,
                                    onSelectionChange: h,
                                    options: [
                                        { id: "low", label: "Low", value: 0 },
                                        { id: "medium", label: "Medium", value: 0.5 },
                                        { id: "high", label: "High", value: 1 },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                        (0, a.jsx)(l.ksK, {
                            label: "Title (optional)",
                            value: x,
                            onChange: p,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, a.jsx)(l.ksK, {
                            label: "Description (optional)",
                            value: g,
                            onChange: _,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, a.jsx)(l.Button, {
                            text: "Create Game Event",
                            onClick: () => {
                                d.Ts({ type: o.Gy.GAME_EVENT, eventType: c, importance: m, title: x, description: g });
                            },
                        }),
                    ],
                }),
                (0, a.jsx)(l.cGx, {}),
                (0, a.jsxs)(l.nVY, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, a.jsx)(l.dOG, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => d.dR({ ...e, emotionClassifier: t }),
                        }),
                        (0, a.jsx)(l.dOG, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => d.dR({ ...e, wakeWordDetector: t }),
                        }),
                        (0, a.jsx)(l.dOG, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => d.dR({ ...e, yellDetector: t }),
                        }),
                        (0, a.jsx)(l.dOG, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => d.dR({ ...e, whisperTranscription: t }),
                        }),
                        (0, a.jsx)(l.dOG, {
                            label: "Laughter / Shouting Detector (V3)",
                            checked: e.laughterDetector,
                            onChange: (t) => d.dR({ ...e, laughterDetector: t }),
                        }),
                    ],
                }),
                (0, a.jsxs)(l.nVY, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, a.jsx)(l.dOG, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => f("wakeWord"),
                        }),
                        (0, a.jsx)(l.dOG, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => f("emotion"),
                        }),
                        (0, a.jsx)(l.dOG, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => f("yell"),
                        }),
                        (0, a.jsx)(l.dOG, {
                            label: "Whisper Debug",
                            description: "Log whisper transcription events to console",
                            checked: t.whisper,
                            onChange: () => f("whisper"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
