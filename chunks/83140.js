n.d(t, { A: () => s });
var l = n(873298),
    a = n(444802),
    i = n(17372),
    r = n(985018);
let s = {
    getTitle: () => r.intl.string(r.t.RVX1zT),
    getDisabledTitle: () => r.intl.string(r.t.SYkEBi),
    getDescription: () => r.intl.string(r.t.aqlmp8),
    eligibleReportSubtypes: [i.TS.SUB_GORE, i.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, a.qY)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, a.T4)(),
                    i = {};
                return (
                    e === l.TO.SHOW && (i.goreContentGuilds = l.TO.BLUR),
                    t === l.TO.SHOW && (i.goreContentFriendDm = l.TO.BLUR),
                    n === l.TO.SHOW && (i.goreContentNonFriendDm = l.TO.BLUR),
                    i
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, a.T4)();
        return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW;
    },
};
