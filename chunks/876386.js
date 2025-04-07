var a,
    o = t(705723);
t(864733)(r, '__esModule', { value: !0 }), (r.default = void 0);
var n = o(t(131619)),
    l = o(t(271772)),
    i = o(t(744096)),
    s = o(t(78198)),
    u = o(t(737965)),
    d = o(t(698275)),
    c = o(t(972380)),
    p = o(t(823003)),
    m = o(t(139726)),
    f = o(t(485749)),
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
