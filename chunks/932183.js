var i = n(442331),
    r = n(934058),
    l = n(190488),
    s = n(679737);
let a = { mode: "pending", application_ids: [] },
    o = { mode: "pending", application_ids: [], failed: !0 };
n.d(
    t,
    {},
    {
        s: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
                u = t.getProject(e);
            if (null == u) return a;
            if ((0, l.j)(u)) {
                let e = u.overlay_widget?.game_application_ids ?? [];
                return e.length > 0 ? { mode: "specific", application_ids: e } : null;
            }
            let d = n.getLoadState(u.id);
            return "failed" === d ? o : "loaded" !== d ? a : (0, s.fG)(n.getSettings(u.id));
        },
    },
);
