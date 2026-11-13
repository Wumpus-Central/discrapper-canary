var i = n(855986),
    r = n(73153),
    a = n(83880),
    s = n(260498),
    l = n(190488),
    o = n(652215),
    d = n(644434);
let c = [],
    u = c,
    _ = c,
    E = c,
    A = !1,
    f = 0,
    h = 0;
function I() {
    let e = new Set(E.map((e) => e.application_id));
    return s.Ay.getOwnedProjects().filter((t) => (0, l.j)(t) && !e.has(t.application_id));
}
function p(e, t) {
    return e.length === t.length && e.every((e, n) => e === t[n]);
}
function m() {
    let e = s.Ay.getOwnedProjects().filter(l.o);
    p(e, _) || (_ = 0 === e.length ? c : e);
    let t = new Set(_.map((e) => e.application_id)),
        n = (function () {
            let e = new Set();
            for (let t of a.A.getWidgetsByTypeAndLayout(o.uss.CONJURE, d.GJ)) {
                let n = t.meta.applicationId;
                "string" == typeof n && e.add(n);
            }
            return e;
        })(),
        i = [..._, ...[...E, ...I()].filter((e) => !t.has(e.application_id) && n.has(e.application_id))];
    p(i, u) || (u = 0 === i.length ? c : i);
}
function g() {
    let e = u;
    return (m(), u !== e);
}
function T(e) {
    let { guildId: t } = e;
    if (![...E, ...I()].some((e) => e.guild_id === t)) return !1;
    h++;
}
class S extends i.Ay.Store {
    static displayName = "ConjureOverlayWidgetsStore";
    initialize() {
        (this.waitFor(s.Ay, a.A),
            a.A.initializeIfNeeded(),
            m(),
            this.syncWith([s.Ay], () => (m(), !0)),
            this.syncWith([a.A], g));
    }
    getProjects() {
        return u;
    }
    getOwnedProjects() {
        return _;
    }
    getServerProjects() {
        return E;
    }
    getProject(e) {
        if (null != e) return u.find((t) => t.application_id === e) ?? E.find((t) => t.application_id === e);
    }
    isServerProjectEnabled(e) {
        return u.some((t) => t.application_id === e);
    }
    getServerStaleVersion() {
        return h;
    }
    hasOwnedFetchSucceeded() {
        return s.Ay.hasFetchedOwnedProjects();
    }
    hasServerFetchSucceeded() {
        return A;
    }
    getServerFetchFailures() {
        return f;
    }
}
let N = new S(r.h, {
    CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = t.filter(l.j);
        ((E = 0 === n.length ? c : n), (A = !0), (f = 0), m());
    },
    CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_FAIL: function () {
        f++;
    },
    INTEGRATION_DELETE: T,
    GUILD_INTEGRATIONS_UPDATE: T,
    CONJURE_SERVER_OVERLAY_WIDGETS_GUILD_REMOVE: function (e) {
        let { guildId: t } = e,
            n = E.filter((e) => e.guild_id !== t);
        if (n.length === E.length) return !1;
        ((E = 0 === n.length ? c : n), m());
    },
    CONNECTION_OPEN: function () {
        ((A = !1), (f = 0), h++, m());
    },
    LOGOUT: function () {
        ((u = c), (_ = c), (E = c), (A = !1), (f = 0), h++);
    },
});
n.d(t, {}, { A: N });
