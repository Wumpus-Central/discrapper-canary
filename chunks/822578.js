a.d(e, {
    R: () => u,
    U0: () => A
});
var r = a(394798),
    _ = a(101284),
    n = a(886115),
    o = a(899517),
    i = a(202811),
    c = a(559508),
    E = a(263449),
    s = a(574054),
    l = a(307854),
    I = a(396234);
function u(t, e, a, u, A, T) {
    var N, d;
    let { normalizeDepth: L = 3, normalizeMaxBreadth: p = 1000 } = t,
        f = {
            ...e,
            event_id: e.event_id || a.event_id || (0, r.DM)(),
            timestamp: e.timestamp || (0, _.yW)()
        },
        O = a.integrations || t.integrations.map((t) => t.name);
    (function (t, e) {
        let { environment: a, release: r, dist: _, maxValueLength: o = 250 } = e;
        'environment' in t || (t.environment = 'environment' in e ? a : c.J), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== _ && (t.dist = _), t.message && (t.message = (0, n.$G)(t.message, o));
        let i = t.exception && t.exception.values && t.exception.values[0];
        i && i.value && (i.value = (0, n.$G)(i.value, o));
        let E = t.request;
        E && E.url && (E.url = (0, n.$G)(E.url, o));
    })(f, t),
        (N = f),
        (d = O).length > 0 && ((N.sdk = N.sdk || {}), (N.sdk.integrations = [...(N.sdk.integrations || []), ...d])),
        A && A.emit('applyFrameMetadata', e),
        void 0 === e.type &&
            (function (t, e) {
                let a,
                    r = o.n._sentryDebugIds;
                if (!r) return;
                let _ = R.get(e);
                _ ? (a = _) : ((a = new Map()), R.set(e, a));
                let n = Object.entries(r).reduce((t, [r, _]) => {
                    let n,
                        o = a.get(r);
                    o ? (n = o) : ((n = e(r)), a.set(r, n));
                    for (let e = n.length - 1; e >= 0; e--) {
                        let a = n[e];
                        if (a.filename) {
                            t[a.filename] = _;
                            break;
                        }
                    }
                    return t;
                }, {});
                try {
                    t.exception.values.forEach((t) => {
                        t.stacktrace.frames.forEach((t) => {
                            t.filename && (t.debug_id = n[t.filename]);
                        });
                    });
                } catch (t) {}
            })(f, t.stackParser);
    let h = (function (t, e) {
        if (!e) return t;
        let a = t ? t.clone() : new l.s();
        return a.update(e), a;
    })(u, a.captureContext);
    a.mechanism && (0, r.EG)(f, a.mechanism);
    let D = A ? A.getEventProcessors() : [],
        P = (0, E.lW)().getScopeData();
    if (T) {
        let t = T.getScopeData();
        (0, I.yo)(P, t);
    }
    if (h) {
        let t = h.getScopeData();
        (0, I.yo)(P, t);
    }
    let g = [...(a.attachments || []), ...P.attachments];
    g.length && (a.attachments = g), (0, I.gi)(f, P);
    let C = [...D, ...P.eventProcessors];
    return (0, s.R)(C, f, a).then((t) =>
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
        'number' == typeof L && L > 0)
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
              })(t, L, p)
            : t
    );
}
let R = new WeakMap();
function A(t) {
    if (t) {
        var e;
        return (e = t) instanceof l.s || 'function' == typeof e || Object.keys(t).some((t) => T.includes(t)) ? { captureContext: t } : t;
    }
}
let T = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'requestSession', 'propagationContext'];
