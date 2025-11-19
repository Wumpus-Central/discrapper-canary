_.d(e, {
    R: () => R,
    U0: () => A,
});
var a = _(394798),
    r = _(101284),
    n = _(886115),
    o = _(899517),
    E = _(202811),
    i = _(559508),
    c = _(263449),
    s = _(574054),
    l = _(307854),
    I = _(396234);
function R(t, e, _, R, A, u) {
    var T, d;
    let { normalizeDepth: f = 3, normalizeMaxBreadth: O = 1000 } = t,
        L = {
            ...e,
            event_id: e.event_id || _.event_id || (0, a.DM)(),
            timestamp: e.timestamp || (0, r.yW)(),
        },
        p = _.integrations || t.integrations.map((t) => t.name);
    (function (t, e) {
        let { environment: _, release: a, dist: r, maxValueLength: o = 250 } = e;
        "environment" in t || (t.environment = "environment" in e ? _ : i.J),
            void 0 === t.release && void 0 !== a && (t.release = a),
            void 0 === t.dist && void 0 !== r && (t.dist = r),
            t.message && (t.message = (0, n.$G)(t.message, o));
        let E = t.exception && t.exception.values && t.exception.values[0];
        E && E.value && (E.value = (0, n.$G)(E.value, o));
        let c = t.request;
        c && c.url && (c.url = (0, n.$G)(c.url, o));
    })(L, t),
        (T = L),
        (d = p).length > 0 && ((T.sdk = T.sdk || {}), (T.sdk.integrations = [...(T.sdk.integrations || []), ...d])),
        A && A.emit("applyFrameMetadata", e),
        void 0 === e.type &&
            (function (t, e) {
                let _,
                    a = o.n._sentryDebugIds;
                if (!a) return;
                let r = N.get(e);
                r ? (_ = r) : ((_ = new Map()), N.set(e, _));
                let n = Object.entries(a).reduce((t, [a, r]) => {
                    let n,
                        o = _.get(a);
                    o ? (n = o) : ((n = e(a)), _.set(a, n));
                    for (let e = n.length - 1; e >= 0; e--) {
                        let _ = n[e];
                        if (_.filename) {
                            t[_.filename] = r;
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
            })(L, t.stackParser);
    let C = (function (t, e) {
        if (!e) return t;
        let _ = t ? t.clone() : new l.s();
        return _.update(e), _;
    })(R, _.captureContext);
    _.mechanism && (0, a.EG)(L, _.mechanism);
    let P = A ? A.getEventProcessors() : [],
        h = (0, c.lW)().getScopeData();
    if (u) {
        let t = u.getScopeData();
        (0, I.yo)(h, t);
    }
    if (C) {
        let t = C.getScopeData();
        (0, I.yo)(h, t);
    }
    let D = [...(_.attachments || []), ...h.attachments];
    D.length && (_.attachments = D), (0, I.gi)(L, h);
    let S = [...P, ...h.eventProcessors];
    return (0, s.R)(S, L, _).then((t) =>
        (t &&
            (function (t) {
                let e = {};
                try {
                    t.exception.values.forEach((t) => {
                        t.stacktrace.frames.forEach((t) => {
                            t.debug_id &&
                                (t.abs_path ? (e[t.abs_path] = t.debug_id) : t.filename && (e[t.filename] = t.debug_id),
                                delete t.debug_id);
                        });
                    });
                } catch (t) {}
                if (0 === Object.keys(e).length) return;
                (t.debug_meta = t.debug_meta || {}), (t.debug_meta.images = t.debug_meta.images || []);
                let _ = t.debug_meta.images;
                Object.entries(e).forEach(([t, e]) => {
                    _.push({
                        type: "sourcemap",
                        code_file: t,
                        debug_id: e,
                    });
                });
            })(t),
        "number" == typeof f && f > 0)
            ? (function (t, e, _) {
                  if (!t) return null;
                  let a = {
                      ...t,
                      ...(t.breadcrumbs && {
                          breadcrumbs: t.breadcrumbs.map((t) => ({
                              ...t,
                              ...(t.data && { data: (0, E.Fv)(t.data, e, _) }),
                          })),
                      }),
                      ...(t.user && { user: (0, E.Fv)(t.user, e, _) }),
                      ...(t.contexts && { contexts: (0, E.Fv)(t.contexts, e, _) }),
                      ...(t.extra && { extra: (0, E.Fv)(t.extra, e, _) }),
                  };
                  return (
                      t.contexts &&
                          t.contexts.trace &&
                          a.contexts &&
                          ((a.contexts.trace = t.contexts.trace),
                          t.contexts.trace.data && (a.contexts.trace.data = (0, E.Fv)(t.contexts.trace.data, e, _))),
                      t.spans &&
                          (a.spans = t.spans.map((t) => ({
                              ...t,
                              ...(t.data && { data: (0, E.Fv)(t.data, e, _) }),
                          }))),
                      a
                  );
              })(t, f, O)
            : t,
    );
}
let N = new WeakMap();
function A(t) {
    if (t) {
        var e;
        return (e = t) instanceof l.s || "function" == typeof e || Object.keys(t).some((t) => u.includes(t))
            ? { captureContext: t }
            : t;
    }
}
let u = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
