n.d(t, { A: () => p }), n(321073);
var a = n(835245),
    s = n(80703),
    i = n(311907),
    l = n(73153),
    r = n(961350),
    o = n(540999);
let d = 0,
    c = [],
    u = 0,
    m = [],
    h = !1;
class x extends i.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(r.default, o.A);
    }
    get loggedEvents() {
        return c;
    }
    get loggedEventsVersion() {
        return u;
    }
    get loggedTriggers() {
        return m;
    }
    get trackTriggers() {
        return h;
    }
}
let p = new x(l.h, {
    TRACK: function (e) {
        let { event: t, properties: n, fingerprint: a } = e;
        o.A.isDeveloper &&
            (c.push({
                key: (d++).toString(),
                event: t,
                properties: n,
                fingerprint: null != a ? (0, s.d)(a) : r.default.getId(),
                timestamp: new Date(),
            }),
            u++,
            c.length > 500 && (c = c.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: n, exposureType: s, excluded: i, location: l, previouslyTracked: r } = e;
        !o.A.isDeveloper ||
            (h &&
                (m = [
                    ...m,
                    {
                        key: (0, a.A)(),
                        experimentId: t,
                        descriptor: n,
                        exposureType: s,
                        excluded: i,
                        location: l,
                        previouslyTracked: r,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                m.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        h = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (c = []), u++, (m = []);
    },
});
