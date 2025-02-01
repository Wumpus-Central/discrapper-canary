var a,
    o = t(381811);
t(306872)(r, '__esModule', { value: !0 }), (r.default = void 0);
var n = o(t(405774)),
    l = o(t(206668)),
    i = o(t(997859)),
    s = o(t(718653)),
    u = o(t(217765)),
    d = o(t(299049)),
    c = o(t(536838)),
    p = o(t(868795)),
    m = o(t(341450)),
    f = o(t(477546)),
    b = o(t(690416)),
    v = new f.default([]);
(0, m.default)((a = (0, p.default)((0, c.default)(b.default).call(b.default)))).call(a, function (e) {
    var r,
        t,
        a = b.default.get(e);
    a &&
        (0, m.default)((r = (0, d.default)((t = [])).call(t, (0, p.default)(a.baseConcepts), (0, p.default)(a.relatedConcepts)))).call(r, function (r) {
            if ('HTML' === r.module) {
                var t = r.concept;
                if (t) {
                    var a,
                        o = (0, u.default)(t),
                        d = ((0, s.default)((a = (0, p.default)((0, i.default)(v).call(v)))).call(a, function (e) {
                            var r = (0, l.default)(e, 2),
                                t = r[0];
                            return r[1], (0, u.default)(t) === o;
                        }) || [])[1];
                    d || (d = new n.default([])), d.add(e), v.set(t, d);
                }
            }
        });
}),
    (r.default = v);
