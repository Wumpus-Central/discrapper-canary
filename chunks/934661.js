r.r(n),
    r.d(n, {
        default: function () {
            return l;
        }
    });
var i = r(633605),
    a = r(528734),
    o = r(217224),
    s = r(951516);
function l(e, n) {
    (0, s.Z)(1, arguments);
    var r,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        _ = (0, i.j)(),
        m = (0, o.Z)(null !== (r = null !== (l = null !== (u = null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c ? c : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== u ? u : _.weekStartsOn) && void 0 !== l ? l : null === (p = _.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.weekStartsOn) && void 0 !== r ? r : 0);
    if (!(m >= 0 && m <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var g = (0, a.default)(e),
        E = g.getDay(),
        v = (E < m ? -7 : 0) + 6 - (E - m);
    return g.setDate(g.getDate() + v), g.setHours(23, 59, 59, 999), g;
}
