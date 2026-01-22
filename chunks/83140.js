n.d(t, {
    A: () => s,
});
var l = n(873298),
    r = n(444802),
    a = n(17372),
    i = n(985018);
let s = {
    getTitle: () => i.intl.string(i.t.RVX1zT),
    getDisabledTitle: () => i.intl.string(i.t.SYkEBi),
    getDescription: () => i.intl.string(i.t.aqlmp8),
    eligibleReportSubtypes: [a.TS.SUB_GORE, a.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, r.qY)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, r.T4)(),
                    a = {};
                return (
                    e === l.TO.SHOW && (a.goreContentGuilds = l.TO.BLUR),
                    t === l.TO.SHOW && (a.goreContentFriendDm = l.TO.BLUR),
                    n === l.TO.SHOW && (a.goreContentNonFriendDm = l.TO.BLUR),
                    a
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, r.T4)();
        return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW;
    },
};
