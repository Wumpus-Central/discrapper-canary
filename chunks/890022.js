n.d(t, {
    W7: () => s,
    _x: () => c,
    uw: () => r
});
var e = n(818083),
    o = n(752048),
    a = n(699516);
let l = (0, e.B)({
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
function s(i) {
    switch (l.getCurrentConfig({ location: 'filterPresences' }).fromUserType) {
        case 2:
            return [];
        case 0:
            return i.filter((i) => {
                let { user: t } = i;
                return a.Z.isFriend(t.id);
            });
        case 1:
            return i.filter((i) => {
                let { user: t } = i;
                return a.Z.isFriend(t.id) || o.Z.isHighlyAffinedVCUser(t.id);
            });
        default:
            return i;
    }
}
function r(i) {
    return 2 !== l.getCurrentConfig({ location: i }).fromUserType;
}
function c(i) {
    return 2 !== l.useExperiment({ location: i }).fromUserType;
}
