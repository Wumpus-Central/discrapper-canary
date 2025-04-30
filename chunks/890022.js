n.d(t, {
    W7: () => o,
    uw: () => u
});
var i = n(818083),
    l = n(752048),
    a = n(699516);
let r = (0, i.B)({
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
function o(e) {
    switch (r.getCurrentConfig({ location: 'filterPresences' }).fromUserType) {
        case 2:
            return [];
        case 0:
            return e.filter((e) => {
                let { user: t } = e;
                return a.Z.isFriend(t.id);
            });
        case 1:
            return e.filter((e) => {
                let { user: t } = e;
                return a.Z.isFriend(t.id) || l.Z.isHighlyAffinedVCUser(t.id);
            });
        default:
            return e;
    }
}
function u(e) {
    return 2 !== r.getCurrentConfig({ location: e }).fromUserType;
}
