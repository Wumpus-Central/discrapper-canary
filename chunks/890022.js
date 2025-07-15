a.d(t, {
    _x: () => c,
    dm: () => s,
    uw: () => o
});
var n = a(818083),
    r = a(752048),
    l = a(699516);
let i = (0, n.B)({
    kind: 'user',
    id: '2025-04_game_activity_notification',
    label: 'Game Activity Notifications',
    defaultConfig: { fromUserType: 2 },
    treatments: [
        {
            id: 1,
            label: 'Show Notifications from Friends Only',
            config: { fromUserType: 0 }
        },
        {
            id: 2,
            label: 'Show Notifications from Friends and High Affinity Users',
            config: { fromUserType: 1 }
        }
    ]
});
function s(e) {
    switch (i.getCurrentConfig({ location: 'filterPresences' }).fromUserType) {
        case 2:
            return [];
        case 0:
            return e.filter((e) => {
                let { user: t } = e;
                return l.Z.isFriend(t.id);
            });
        case 1:
            return e.filter((e) => {
                let { user: t } = e;
                return l.Z.isFriend(t.id) || r.Z.isHighlyAffinedVCUser(t.id);
            });
        default:
            return e;
    }
}
function o(e) {
    return 2 !== i.getCurrentConfig({ location: e }).fromUserType;
}
function c(e) {
    return 2 !== i.useExperiment({ location: e }).fromUserType;
}
