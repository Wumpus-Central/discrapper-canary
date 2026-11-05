var i = n(442331),
    r = n(191827),
    l = n(679737);
let s = { mode: "pending", application_ids: [] },
    a = { mode: "pending", application_ids: [], failed: !0 };
n.d(
    t,
    {},
    {
        s: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
                o = t.getProject(e);
            if (null == o) return s;
            let u = n.getLoadState(o.id);
            return "failed" === u ? a : "loaded" !== u ? s : (0, l.fG)(n.getSettings(o.id));
        },
    },
);
