r.d(n, {
    b: function () {
        return d;
    }
});
var i,
    a = r(836560);
let o = 160,
    s = 500;
!(function (e) {
    (e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal');
})(i || (i = {}));
let l = {
    open: !1,
    orientation: null
};
function u() {
    try {
        return window.outerWidth - window.innerWidth;
    } catch (e) {
        return 0;
    }
}
function c() {
    try {
        return window.outerHeight - window.innerHeight;
    } catch (e) {
        return 0;
    }
}
class d extends a.EventEmitter {
    get orientations() {
        return Object.values(i);
    }
    get state() {
        return l;
    }
    check() {
        let e = u() > o,
            n = c() > o,
            r = e ? 'vertical' : 'horizontal';
        if (!(n && e) && (e || n)) {
            let e = l.open;
            (l = {
                open: !0,
                orientation: r
            }),
                (!e || l.orientation !== r) && this.emit('changed', l);
        } else l.open && ((l.open = !1), this.emit('changed', l));
    }
    constructor() {
        super(), setInterval(() => this.check(), s);
    }
}
