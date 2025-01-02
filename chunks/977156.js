r.d(n, {
    X7: function () {
        return u;
    },
    Zy: function () {
        return o;
    },
    cB: function () {
        return s;
    }
});
var i = r(818083);
let a = (0, i.B)({
        id: '2023-12_quests',
        kind: 'user',
        label: 'Quests',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Quests enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (e) => {
        let { location: n } = e;
        return a.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
    },
    o = (e) => {
        let { location: n } = e;
        return a.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
    },
    l = (0, i.B)({
        id: '2024-04_quest_preview_tool',
        kind: 'user',
        label: 'Quest Preview Tool',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Preview tool enabled',
                config: { enabled: !0 }
            }
        ]
    });
function u(e) {
    let { location: n } = e;
    return l.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
