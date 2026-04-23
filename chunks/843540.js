n.d(t, { A: () => s });
var l = n(873298),
    a = n(632119),
    i = n(17372),
    r = n(985018);
let s = {
    getTitle: () => r.intl.string(r.t["Gtck/t"]),
    getDisabledTitle: () => r.intl.string(r.t.E6UmXa),
    getDescription: () => r.intl.string(r.t.jcRSp6),
    eligibleReportSubtypes: [
        i.TS.SUB_CSAM,
        i.TS.SUB_LOLI,
        i.TS.SUB_NCP,
        i.TS.SUB_SEXUALLY_DEGRADING_CONTENT,
        i.TS.SUB_UNSOLICITED_PORN,
    ],
    onApply: () =>
        (0, a.Jz)(
            (function () {
                let {
                        explicitContentGuilds: e,
                        explicitContentFriendDm: t,
                        explicitContentNonFriendDm: n,
                    } = (0, a.C$)(),
                    i = {};
                return (
                    e === l.TO.SHOW && (i.explicitContentGuilds = l.TO.BLUR),
                    t === l.TO.SHOW && (i.explicitContentFriendDm = l.TO.BLUR),
                    n === l.TO.SHOW && (i.explicitContentNonFriendDm = l.TO.BLUR),
                    i
                );
            })(),
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, a.C$)();
        return e === l.TO.SHOW || t === l.TO.SHOW || n === l.TO.SHOW;
    },
};
