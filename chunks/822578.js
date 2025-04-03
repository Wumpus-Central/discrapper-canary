a.d(e, {
    R: () => I,
    U0: () => d
});
var r = a(394798),
    n = a(101284),
    _ = a(886115),
    o = a(899517),
    i = a(202811),
    c = a(559508),
    s = a(263449),
    E = a(574054),
    l = a(307854),
    u = a(396234);
function I(t, e, a, I, d, A) {
    var f, p;
    let { normalizeDepth: N = 3, normalizeMaxBreadth: T = 1000 } = t,
        L = {
            ...e,
            event_id: e.event_id || a.event_id || (0, r.DM)(),
            timestamp: e.timestamp || (0, n.yW)()
        },
        h = a.integrations || t.integrations.map((t) => t.name);
    (function (t, e) {
        let { environment: a, release: r, dist: n, maxValueLength: o = 250 } = e;
        'environment' in t || (t.environment = 'environment' in e ? a : c.J), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== n && (t.dist = n), t.message && (t.message = (0, _.$G)(t.message, o));
        let i = t.exception && t.exception.values && t.exception.values[0];
        i && i.value && (i.value = (0, _.$G)(i.value, o));
        let s = t.request;
        s && s.url && (s.url = (0, _.$G)(s.url, o));
    })(L, t),
        (f = L),
        (p = h).length > 0 && ((f.sdk = f.sdk || {}), (f.sdk.integrations = [...(f.sdk.integrations || []), ...p])),
        d && d.emit('applyFrameMetadata', e),
        void 0 === e.type &&
            (function (t, e) {
                let a,
                    r = o.n._sentryDebugIds;
                if (!r) return;
                let n = R.get(e);
                n ? (a = n) : ((a = new Map()), R.set(e, a));
                let _ = Object.entries(r).reduce((t, [r, n]) => {
                    let _,
                        o = a.get(r);
                    o ? (_ = o) : ((_ = e(r)), a.set(r, _));
                    for (let e = _.length - 1; e >= 0; e--) {
                        let a = _[e];
                        if (a.filename) {
                            t[a.filename] = n;
                            break;
                        }
                    }
                    return t;
                }, {});
                try {
                    t.exception.values.forEach((t) => {
                        t.stacktrace.frames.forEach((t) => {
                            t.filename && (t.debug_id = _[t.filename]);
                        });
                    });
                } catch (t) {}
            })(L, t.stackParser);
    let O = (function (t, e) {
        if (!e) return t;
        let a = t ? t.clone() : new l.s();
        return a.update(e), a;
    })(I, a.captureContext);
    a.mechanism && (0, r.EG)(L, a.mechanism);
    let D = d ? d.getEventProcessors() : [],
        g = (0, s.lW)().getScopeData();
    if (A) {
        let t = A.getScopeData();
        (0, u.yo)(g, t);
    }
    if (O) {
        let t = O.getScopeData();
        (0, u.yo)(g, t);
    }
    let P = [...(a.attachments || []), ...g.attachments];
    P.length && (a.attachments = P), (0, u.gi)(L, g);
    let m = [...D, ...g.eventProcessors];
    return (0, E.R)(m, L, a).then((t) =>
        (t &&
            (function (t) {
                let e = {};
                try {
                    t.exception.values.forEach((t) => {
                        t.stacktrace.frames.forEach((t) => {
                            t.debug_id && (t.abs_path ? (e[t.abs_path] = t.debug_id) : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id);
                        });
                    });
                } catch (t) {}
                if (0 === Object.keys(e).length) return;
                (t.debug_meta = t.debug_meta || {}), (t.debug_meta.images = t.debug_meta.images || []);
                let a = t.debug_meta.images;
                Object.entries(e).forEach(([t, e]) => {
                    a.push({
                        type: 'sourcemap',
                        code_file: t,
                        debug_id: e
                    });
                });
            })(t),
        'number' == typeof N && N > 0)
            ? (function (t, e, a) {
                  if (!t) return null;
                  let r = {
                      ...t,
                      ...(t.breadcrumbs && {
                          breadcrumbs: t.breadcrumbs.map((t) => ({
                              ...t,
                              ...(t.data && { data: (0, i.Fv)(t.data, e, a) })
                          }))
                      }),
                      ...(t.user && { user: (0, i.Fv)(t.user, e, a) }),
                      ...(t.contexts && { contexts: (0, i.Fv)(t.contexts, e, a) }),
                      ...(t.extra && { extra: (0, i.Fv)(t.extra, e, a) })
                  };
                  return (
                      t.contexts && t.contexts.trace && r.contexts && ((r.contexts.trace = t.contexts.trace), t.contexts.trace.data && (r.contexts.trace.data = (0, i.Fv)(t.contexts.trace.data, e, a))),
                      t.spans &&
                          (r.spans = t.spans.map((t) => ({
                              ...t,
                              ...(t.data && { data: (0, i.Fv)(t.data, e, a) })
                          }))),
                      r
                  );
              })(t, N, T)
            : t
    );
}
let R = new WeakMap();
function d(t) {
    if (t) {
        var e;
        return (e = t) instanceof l.s || 'function' == typeof e || Object.keys(t).some((t) => A.includes(t)) ? { captureContext: t } : t;
    }
}
let A = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'requestSession', 'propagationContext'];
