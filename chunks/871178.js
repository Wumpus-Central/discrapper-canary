d.d(t, { t: () => i });
var i = class l {
    static getInstance() {
        return l.instance || (l.instance = new l()), l.instance;
    }
    setTimeout(l, t) {
        return setTimeout(l, t);
    }
    setInterval(l, t) {
        return setInterval(l, t);
    }
    clearTimeout(l) {
        clearTimeout(l);
    }
    clearInterval(l) {
        clearInterval(l);
    }
};
