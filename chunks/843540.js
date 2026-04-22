"use strict";
n.d(t, { A: () => s });
var a = n(873298),
    i = n(632119),
    r = n(17372),
    l = n(985018);
let s = {
    getTitle: () => l.intl.string(l.t["Gtck/t"]),
    getDisabledTitle: () => l.intl.string(l.t.E6UmXa),
    getDescription: () => l.intl.string(l.t.jcRSp6),
    eligibleReportSubtypes: [
        r.TS.SUB_CSAM,
        r.TS.SUB_LOLI,
        r.TS.SUB_NCP,
        r.TS.SUB_SEXUALLY_DEGRADING_CONTENT,
        r.TS.SUB_UNSOLICITED_PORN,
    ],
    onApply: () =>
        (0, i.Jz)(
            (function () {
                let {
                        explicitContentGuilds: e,
                        explicitContentFriendDm: t,
                        explicitContentNonFriendDm: n,
                    } = (0, i.C$)(),
                    r = {};
                return (
                    e === a.TO.SHOW && (r.explicitContentGuilds = a.TO.BLUR),
                    t === a.TO.SHOW && (r.explicitContentFriendDm = a.TO.BLUR),
                    n === a.TO.SHOW && (r.explicitContentNonFriendDm = a.TO.BLUR),
                    r
                );
            })(),
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, i.C$)();
        return e === a.TO.SHOW || t === a.TO.SHOW || n === a.TO.SHOW;
    },
};
