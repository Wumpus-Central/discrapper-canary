"use strict";
n.d(t, { C: () => a });
var r = n(600975);
let i = { enableStats: !1 },
    a = (0, r.C)({
        kind: "user",
        id: "2025-06_krisp_stats_collection",
        label: "Krisp Stats Collection Experiment",
        defaultConfig: i,
        treatments: [{ id: 1, label: "Enable Krisp Stats Collection", config: { ...i, enableStats: !0 } }],
    });
