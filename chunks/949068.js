i.r(a), i.d(a, { playgroundConfig: () => r });
var s = i(627968);
i(64700);
var t = i(927813),
    n = i(6764);
let r = {
    collections: [
        {
            id: "core",
            name: "Core",
            groups: [
                {
                    title: "Components",
                    stories: [
                        {
                            name: "Countdown Ring",
                            id: "countdown-ring",
                            component: function (e) {
                                return (0, s.jsx)(n.O, { ...e }, e.durationMs);
                            },
                            controls: {
                                durationMs: {
                                    label: "Duration (ms)",
                                    type: "slider",
                                    defaultValue: 10 * t.A.Millis.SECOND,
                                    minValue: t.A.Millis.SECOND,
                                    maxValue: t.A.Millis.MINUTE,
                                },
                                isPaused: { label: "Paused", type: "boolean", defaultValue: !1 },
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
