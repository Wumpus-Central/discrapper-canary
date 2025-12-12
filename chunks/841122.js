n.d(t, {
    gi: () => _,
    yo: () => s,
});
var r = n(886649),
    i = n(431660),
    a = n(464338),
    o = n(82255);
function _(e, t) {
    var n, _, s, c;
    let { fingerprint: E, span: l, breadcrumbs: u, sdkProcessingMetadata: d } = t;
    (function (e, t) {
        let { extra: n, tags: i, user: a, contexts: o, level: _, transactionName: s } = t,
            c = (0, r.Jr)(n);
        c &&
            Object.keys(c).length &&
            (e.extra = {
                ...c,
                ...e.extra,
            });
        let E = (0, r.Jr)(i);
        E &&
            Object.keys(E).length &&
            (e.tags = {
                ...E,
                ...e.tags,
            });
        let l = (0, r.Jr)(a);
        l &&
            Object.keys(l).length &&
            (e.user = {
                ...l,
                ...e.user,
            });
        let u = (0, r.Jr)(o);
        u &&
            Object.keys(u).length &&
            (e.contexts = {
                ...u,
                ...e.contexts,
            }),
            _ && (e.level = _),
            s && "transaction" !== e.type && (e.transaction = s);
    })(e, t),
        l &&
            (function (e, t) {
                (e.contexts = {
                    trace: (0, o.wy)(t),
                    ...e.contexts,
                }),
                    (e.sdkProcessingMetadata = {
                        dynamicSamplingContext: (0, a.jC)(t),
                        ...e.sdkProcessingMetadata,
                    });
                let n = (0, o.Gx)(t),
                    r = (0, o.XU)(n).description;
                r && !e.transaction && "transaction" === e.type && (e.transaction = r);
            })(e, l),
        (n = e),
        (_ = E),
        (n.fingerprint = n.fingerprint ? (0, i.lE)(n.fingerprint) : []),
        _ && (n.fingerprint = n.fingerprint.concat(_)),
        n.fingerprint && !n.fingerprint.length && delete n.fingerprint,
        (function (e, t) {
            let n = [...(e.breadcrumbs || []), ...t];
            e.breadcrumbs = n.length ? n : void 0;
        })(e, u),
        (s = e),
        (c = d),
        (s.sdkProcessingMetadata = {
            ...s.sdkProcessingMetadata,
            ...c,
        });
}
function s(e, t) {
    let {
        extra: n,
        tags: r,
        user: i,
        contexts: a,
        level: o,
        sdkProcessingMetadata: _,
        breadcrumbs: s,
        fingerprint: E,
        eventProcessors: l,
        attachments: u,
        propagationContext: d,
        transactionName: p,
        span: f,
    } = t;
    c(e, "extra", n),
        c(e, "tags", r),
        c(e, "user", i),
        c(e, "contexts", a),
        c(e, "sdkProcessingMetadata", _),
        o && (e.level = o),
        p && (e.transactionName = p),
        f && (e.span = f),
        s.length && (e.breadcrumbs = [...e.breadcrumbs, ...s]),
        E.length && (e.fingerprint = [...e.fingerprint, ...E]),
        l.length && (e.eventProcessors = [...e.eventProcessors, ...l]),
        u.length && (e.attachments = [...e.attachments, ...u]),
        (e.propagationContext = {
            ...e.propagationContext,
            ...d,
        });
}
function c(e, t, n) {
    if (n && Object.keys(n).length)
        for (let r in ((e[t] = { ...e[t] }), n)) Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r]);
}
