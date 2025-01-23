r.d(n, {
    Y: function () {
        return p;
    }
});
var i = r(558030),
    a = r(246733),
    o = r(165352),
    s = r(152450),
    l = r(516558),
    u = r(281257),
    c = r(742442),
    d = r(554385),
    f = r(546914);
function p(e) {
    switch (e) {
        case 'buddhist':
            return new i.M();
        case 'ethiopic':
            return new a.Wt();
        case 'ethioaa':
            return new a.zY();
        case 'coptic':
            return new a.Y0();
        case 'hebrew':
            return new s.H();
        case 'indian':
            return new l.t();
        case 'islamic-civil':
            return new u.$0();
        case 'islamic-tbla':
            return new u.CF();
        case 'islamic-umalqura':
            return new u.lw();
        case 'japanese':
            return new c.o();
        case 'persian':
            return new d.r();
        case 'roc':
            return new f.t();
        default:
            return new o.IQ();
    }
}
