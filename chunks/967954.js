n.d(t, { A: () => b }), n(321073), n(896048);
var a,
    l,
    i = n(835245),
    r = n(80703),
    s = n(311907),
    o = n(73153),
    c = n(961350),
    d = n(540999);
let u = 0,
    m = [],
    p = 0,
    h = [],
    f = !1;
class x extends (a = s.Ay.Store) {
    initialize() {
        this.waitFor(c.default, d.A);
    }
    get loggedEvents() {
        return m;
    }
    get loggedEventsVersion() {
        return p;
    }
    get loggedTriggers() {
        return h;
    }
    get trackTriggers() {
        return f;
    }
}
(l = "displayName") in x
    ? Object.defineProperty(x, l, {
          value: "AnalyticsLogStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (x[l] = "AnalyticsLogStore");
let b = new x(o.h, {
    TRACK: function (e) {
        let { event: t, properties: n, fingerprint: a } = e;
        d.A.isDeveloper &&
            (m.push({
                key: (u++).toString(),
                event: t,
                properties: n,
                fingerprint: null != a ? (0, r.d)(a) : c.default.getId(),
                timestamp: new Date(),
            }),
            p++,
            m.length > 500 && (m = m.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: n, exposureType: a, excluded: l, location: r, previouslyTracked: s } = e;
        !d.A.isDeveloper ||
            (f &&
                (h = [
                    ...h,
                    {
                        key: (0, i.A)(),
                        experimentId: t,
                        descriptor: n,
                        exposureType: a,
                        excluded: l,
                        location: r,
                        previouslyTracked: s,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                h.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        f = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (m = []), p++, (h = []);
    },
});
