n.d(t, { A: () => s });
var l = n(873298),
    r = n(632119),
    a = n(17372),
    i = n(985018);
let s = {
    getTitle: () => i.intl.string(i.t["Gtck/t"]),
    getDisabledTitle: () => i.intl.string(i.t.E6UmXa),
    getDescription: () => i.intl.string(i.t.jcRSp6),
    eligibleReportSubtypes: [
        a.TS.SUB_CSAM,
        a.TS.SUB_LOLI,
        a.TS.SUB_NCP,
        a.TS.SUB_SEXUALLY_DEGRADING_CONTENT,
        a.TS.SUB_UNSOLICITED_PORN,
    ],
    onApply: () =>
        (0, r.Jz)(
            (function () {
                let {
                        explicitContentGuilds: e,
                        explicitContentFriendDm: t,
                        explicitContentNonFriendDm: n,
                    } = (0, r.C$)(),
                    a = {};
                return (
                    e === l.TO.SHOW && (a.explicitContentGuilds = l.TO.BLUR),
                    t === l.TO.SHOW && (a.explicitContentFriendDm = l.TO.BLUR),
                    n === l.TO.SHOW && (a.explicitContentNonFriendDm = l.TO.BLUR),
                    a
                );
            })(),
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, r.C$)();
        return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW;
    },
};
