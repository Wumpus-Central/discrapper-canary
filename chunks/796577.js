n.d(t, { j: () => c });
var i = n(64700),
    r = n(311907),
    a = n(554146),
    l = n(379848),
    s = n(661191),
    o = n(859703),
    d = n(49999);
function c() {
    let e = (0, r.bG)([o.A], () => o.A.getQuestHomeTakeoverConfig()),
        t = i.useMemo(
            () => (e?.startsAt != null ? s.default.fromTimestamp(new Date(e?.startsAt).valueOf()) : null),
            [e?.startsAt],
        ),
        [n, c] = (0, l.Cc)(
            null != t ? a.M.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE : null,
            t ?? "",
            d.m.PRIVATE_CHANNELS_LIST,
            !0,
        ),
        u = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.i.TAKE_ACTION;
                c(e);
            },
            [c],
        );
    return {
        shouldShowTakeoverContent: n === a.M.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE,
        dismissTakeoverContent: u,
        takeoverConfig: e,
    };
}
