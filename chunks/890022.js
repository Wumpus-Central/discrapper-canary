n.d(t, {
    _x: () => c,
    dm: () => a,
    uw: () => o
});
var r = n(818083),
    i = n(752048),
    l = n(699516);
let s = (0, r.B)({
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
function a(e) {
    switch (s.getCurrentConfig({ location: 'filterPresences' }).fromUserType) {
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
                return l.Z.isFriend(t.id) || i.Z.isHighlyAffinedVCUser(t.id);
            });
        default:
            return e;
    }
}
function o(e) {
    return 2 !== s.getCurrentConfig({ location: e }).fromUserType;
}
function c(e) {
    return 2 !== s.useExperiment({ location: e }).fromUserType;
}
