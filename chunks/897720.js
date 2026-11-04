var i,
    r,
    a,
    s = n(652215),
    l =
        (((i = {})[(i.GENERIC = 0)] = "GENERIC"),
        (i[(i.TEXT = 1)] = "TEXT"),
        (i[(i.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (i[(i.NUDGE = 3)] = "NUDGE"),
        i),
    o = (((r = {})[(r.NORMAL = 0)] = "NORMAL"), (r[(r.HIGH = 1)] = "HIGH"), (r[(r.URGENT = 2)] = "URGENT"), r),
    d = (((a = {}).HORIZONTAL = "horizontal"), (a.VERTICAL = "vertical"), a);
n.d(
    t,
    {},
    {
        Du: function (e) {
            return e?.type === s.uss.CONJURE && "string" == typeof e.meta.applicationId;
        },
        IV: d,
        In: o,
        ZO: function (e) {
            return e.type === s.uss.VOICE_V3;
        },
        cv: function (e) {
            return e.type === s.uss.VIDEO;
        },
        dO: function (e) {
            return e?.type === s.uss.GO_LIVE;
        },
        zb: l,
    },
);
