"use strict";
n.d(t, { A: () => s });
var a = n(873298),
    i = n(444802),
    r = n(17372),
    l = n(985018);
let s = {
    getTitle: () => l.intl.string(l.t.RVX1zT),
    getDisabledTitle: () => l.intl.string(l.t.SYkEBi),
    getDescription: () => l.intl.string(l.t.aqlmp8),
    eligibleReportSubtypes: [r.TS.SUB_GORE, r.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, i.qY)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, i.T4)(),
                    r = {};
                return (
                    e === a.TO.SHOW && (r.goreContentGuilds = a.TO.BLUR),
                    t === a.TO.SHOW && (r.goreContentFriendDm = a.TO.BLUR),
                    n === a.TO.SHOW && (r.goreContentNonFriendDm = a.TO.BLUR),
                    r
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, i.T4)();
        return e === a.TO.SHOW || t === a.TO.SHOW || n === a.TO.SHOW;
    },
};
