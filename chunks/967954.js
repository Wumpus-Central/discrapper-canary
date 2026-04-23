a.d(t, { A: () => x }), a(321073);
var n = a(835245),
    l = a(80703),
    i = a(311907),
    s = a(73153),
    r = a(961350),
    o = a(540999);
let d = 0,
    c = [],
    u = 0,
    m = [],
    h = !1;
class p extends i.Ay.Store {
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
let x = new p(s.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        o.A.isDeveloper &&
            (c.push({
                key: (d++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, l.d)(n) : r.default.getId(),
                timestamp: new Date(),
            }),
            u++,
            c.length > 500 && (c = c.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: l, excluded: i, location: s, previouslyTracked: r } = e;
        !o.A.isDeveloper ||
            (h &&
                (m = [
                    ...m,
                    {
                        key: (0, n.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: l,
                        excluded: i,
                        location: s,
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
