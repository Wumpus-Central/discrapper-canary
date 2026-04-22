a.d(t, { A: () => b });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(573613),
    r = a(611677),
    o = a(270003),
    d = a(532446),
    c = a(821609),
    u = a(691885),
    m = a(292666),
    h = a(404778),
    p = a(243721),
    x = a(274372),
    g = a(372684),
    v = a(399925);
function b() {
    let { mlPipelinesEnabled: e } = (0, i.cf)([x.A], () => ({
            mlPipelinesEnabled: x.A.getSettings().mlPipelinesEnabled,
        })),
        [t, a] = l.useState(
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
        [b, _] = l.useState(g.rb.KILL),
        [f, j] = l.useState(1),
        [A, y] = l.useState(""),
        [C, E] = l.useState(""),
        S = l.useCallback(
            (e) => {
                let n = !t[e];
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = { emotion: !1, yell: !1, wakeWord: !1, whisper: !1 }),
                    (window.__CLIPS_DEBUG__[e] = n),
                    a((t) => ({ ...t, [e]: n }));
            },
            [t],
        );
    return (0, n.jsx)(s.Ip, {
        children: (0, n.jsxs)(r.l, {
            children: [
                (0, n.jsx)(o.n, {
                    label: "Send Test Signals",
                    children: (0, n.jsxs)(d.M, {
                        children: [
                            (0, n.jsx)(c.$, { text: "Manual", onClick: () => v.Ts({ type: g.Gy.MANUAL }) }),
                            (0, n.jsx)(c.$, {
                                text: "Distributed",
                                onClick: () =>
                                    v.Ts({
                                        type: g.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, n.jsx)(c.$, {
                                text: "Phrase: Clip",
                                onClick: () => v.Ts({ type: g.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, n.jsx)(c.$, {
                                text: "Yelling",
                                onClick: () => v.Ts({ type: g.Gy.YELLING, userId: "123" }),
                            }),
                            (0, n.jsx)(c.$, {
                                text: "Laughter",
                                onClick: () => v.Ts({ type: g.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, n.jsx)(c.$, {
                                text: "Shouting",
                                onClick: () => v.Ts({ type: g.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsxs)(o.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, n.jsxs)(d.M, {
                            children: [
                                (0, n.jsx)(u.l, {
                                    label: "Event Type",
                                    value: b,
                                    onSelectionChange: (e) => _(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: g.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: g.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: g.rb.DEATH },
                                        { id: "assist", label: "Assist", value: g.rb.ASSIST },
                                        { id: "item", label: "Item", value: g.rb.ITEM },
                                        { id: "victory", label: "Victory", value: g.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: g.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: g.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: g.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: g.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, n.jsx)(u.l, {
                                    label: "Importance",
                                    value: f,
                                    onSelectionChange: j,
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
                        (0, n.jsx)(m.k, {
                            label: "Title (optional)",
                            value: A,
                            onChange: y,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, n.jsx)(m.k, {
                            label: "Description (optional)",
                            value: C,
                            onChange: E,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, n.jsx)(c.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                v.Ts({ type: g.Gy.GAME_EVENT, eventType: b, importance: f, title: A, description: C });
                            },
                        }),
                    ],
                }),
                (0, n.jsx)(h.c, {}),
                (0, n.jsxs)(o.n, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, n.jsx)(p.d, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => v.dR({ ...e, emotionClassifier: t }),
                        }),
                        (0, n.jsx)(p.d, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => v.dR({ ...e, wakeWordDetector: t }),
                        }),
                        (0, n.jsx)(p.d, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => v.dR({ ...e, yellDetector: t }),
                        }),
                        (0, n.jsx)(p.d, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => v.dR({ ...e, whisperTranscription: t }),
                        }),
                        (0, n.jsx)(p.d, {
                            label: "Laughter / Shouting Detector (V3)",
                            checked: e.laughterDetector,
                            onChange: (t) => v.dR({ ...e, laughterDetector: t }),
                        }),
                    ],
                }),
                (0, n.jsxs)(o.n, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, n.jsx)(p.d, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => S("wakeWord"),
                        }),
                        (0, n.jsx)(p.d, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => S("emotion"),
                        }),
                        (0, n.jsx)(p.d, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => S("yell"),
                        }),
                        (0, n.jsx)(p.d, {
                            label: "Whisper Debug",
                            description: "Log whisper transcription events to console",
                            checked: t.whisper,
                            onChange: () => S("whisper"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
