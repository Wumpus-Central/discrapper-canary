n.d(t, { b: () => u });
var r = n(836560);
let i = 160,
    o = 500;
var a = (function (e) {
    return (e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e;
})(a || {});
let s = {
    open: !1,
    orientation: null
};
function l() {
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
class u extends r.EventEmitter {
    get orientations() {
        return Object.values(a);
    }
    get state() {
        return s;
    }
    check() {
        let e = l() > i,
            t = c() > i,
            n = e ? 'vertical' : 'horizontal';
        if (!(t && e) && (e || t)) {
            let e = s.open;
            (s = {
                open: !0,
                orientation: n
            }),
                (e && s.orientation === n) || this.emit('changed', s);
        } else s.open && ((s.open = !1), this.emit('changed', s));
    }
    constructor() {
        super(), setInterval(() => this.check(), o);
    }
}
