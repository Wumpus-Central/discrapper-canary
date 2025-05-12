e.d(i, {
    W7: () => r,
    _x: () => c,
    uw: () => s
});
var n = e(818083),
    o = e(752048),
    a = e(699516);
let l = (0, n.B)({
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
function r(t) {
    switch (l.getCurrentConfig({ location: 'filterPresences' }).fromUserType) {
        case 2:
            return [];
        case 0:
            return t.filter((t) => {
                let { user: i } = t;
                return a.Z.isFriend(i.id);
            });
        case 1:
            return t.filter((t) => {
                let { user: i } = t;
                return a.Z.isFriend(i.id) || o.Z.isHighlyAffinedVCUser(i.id);
            });
        default:
            return t;
    }
}
function s(t) {
    return 2 !== l.getCurrentConfig({ location: t }).fromUserType;
}
function c(t) {
    return 2 !== l.useExperiment({ location: t }).fromUserType;
}
