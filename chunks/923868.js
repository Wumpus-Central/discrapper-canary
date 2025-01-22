r.r(n),
    r.d(n, {
        default: function () {
            return l;
        }
    });
var i = r(528734),
    a = r(217224),
    o = r(951516),
    s = r(633605);
function l(e, n) {
    (0, o.Z)(1, arguments);
    var r,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        _ = (0, s.j)(),
        m = (0, a.Z)(null !== (r = null !== (l = null !== (u = null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c ? c : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== u ? u : _.weekStartsOn) && void 0 !== l ? l : null === (p = _.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.weekStartsOn) && void 0 !== r ? r : 0);
    if (!(m >= 0 && m <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var g = (0, i.default)(e),
        E = g.getDay(),
        v = (E < m ? 7 : 0) + E - m;
    return g.setDate(g.getDate() - v), g.setHours(0, 0, 0, 0), g;
}
