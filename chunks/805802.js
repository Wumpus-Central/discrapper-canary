r.d(n, {
    S: function () {
        return p;
    }
});
var i = r(146150),
    a = r(812975),
    o = r(531171),
    s = r(695170),
    l = r(686942),
    u = r(200734),
    c = {
        dtstart: null,
        cache: !1,
        unfold: !1,
        forceset: !1,
        compatible: !1,
        tzid: null
    };
function d(e, n) {
    var r = [],
        i = [],
        a = [],
        o = [],
        s = (0, u.o)(e),
        l = s.dtstart,
        c = s.tzid;
    return (
        E(e, n.unfold).forEach(function (e) {
            if (e) {
                var n,
                    s = g(e),
                    l = s.name,
                    d = s.parms,
                    f = s.value;
                switch (l.toUpperCase()) {
                    case 'RRULE':
                        if (d.length) throw Error('unsupported RRULE parm: '.concat(d.join(',')));
                        r.push((0, u.B)(e));
                        break;
                    case 'RDATE':
                        var p = null !== (n = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) && void 0 !== n ? n : [],
                            h = p[1];
                        h && !c && (c = h), (i = i.concat(y(f, d)));
                        break;
                    case 'EXRULE':
                        if (d.length) throw Error('unsupported EXRULE parm: '.concat(d.join(',')));
                        a.push((0, u.B)(f));
                        break;
                    case 'EXDATE':
                        o = o.concat(y(f, d));
                        break;
                    case 'DTSTART':
                        break;
                    default:
                        throw Error('unsupported property: ' + l);
                }
            }
        }),
        {
            dtstart: l,
            tzid: c,
            rrulevals: r,
            rdatevals: i,
            exrulevals: a,
            exdatevals: o
        }
    );
}
function f(e, n) {
    var r = d(e, n),
        i = r.rrulevals,
        s = r.rdatevals,
        l = r.exrulevals,
        u = r.exdatevals,
        c = r.dtstart,
        f = r.tzid,
        p = !1 === n.cache;
    if ((n.compatible && ((n.forceset = !0), (n.unfold = !0)), n.forceset || i.length > 1 || s.length || l.length || u.length)) {
        var _ = new o.p(p);
        return (
            _.dtstart(c),
            _.tzid(f || void 0),
            i.forEach(function (e) {
                _.rrule(new a.Ci(h(e, c, f), p));
            }),
            s.forEach(function (e) {
                _.rdate(e);
            }),
            l.forEach(function (e) {
                _.exrule(new a.Ci(h(e, c, f), p));
            }),
            u.forEach(function (e) {
                _.exdate(e);
            }),
            n.compatible && n.dtstart && _.rdate(c),
            _
        );
    }
    var m = i[0] || {};
    return new a.Ci(h(m, m.dtstart || n.dtstart || c, m.tzid || n.tzid || f), p);
}
function p(e, n) {
    return void 0 === n && (n = {}), f(e, _(n));
}
function h(e, n, r) {
    return (0, i.pi)((0, i.pi)({}, e), {
        dtstart: n,
        tzid: r
    });
}
function _(e) {
    var n = [],
        r = Object.keys(e),
        a = Object.keys(c);
    if (
        (r.forEach(function (e) {
            !(0, l.q9)(a, e) && n.push(e);
        }),
        n.length)
    )
        throw Error('Invalid options: ' + n.join(', '));
    return (0, i.pi)((0, i.pi)({}, c), e);
}
function m(e) {
    if (-1 === e.indexOf(':'))
        return {
            name: 'RRULE',
            value: e
        };
    var n = (0, l.Vl)(e, ':', 1);
    return {
        name: n[0],
        value: n[1]
    };
}
function g(e) {
    var n = m(e),
        r = n.name,
        i = n.value,
        a = r.split(';');
    if (!a) throw Error('empty property name');
    return {
        name: a[0].toUpperCase(),
        parms: a.slice(1),
        value: i
    };
}
function E(e, n) {
    if ((void 0 === n && (n = !1), !(e = e && e.trim()))) throw Error('Invalid empty string');
    if (!n) return e.split(/\s/);
    for (var r = e.split('\n'), i = 0; i < r.length; ) {
        var a = (r[i] = r[i].replace(/\s+$/g, ''));
        a ? (i > 0 && ' ' === a[0] ? ((r[i - 1] += a.slice(1)), r.splice(i, 1)) : (i += 1)) : r.splice(i, 1);
    }
    return r;
}
function v(e) {
    e.forEach(function (e) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error('unsupported RDATE/EXDATE parm: ' + e);
    });
}
function y(e, n) {
    return (
        v(n),
        e.split(',').map(function (e) {
            return (0, s.gE)(e);
        })
    );
}
