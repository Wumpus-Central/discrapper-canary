n.d(t, {
    p: () => _,
    t: () => p
});
var i = n(697171),
    r = n(288930),
    a = n(568764),
    s = 0,
    o = function () {
        return !!s;
    },
    l = 250,
    u = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    },
    c = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'],
    d = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    f = !1,
    _ = new ((function () {
        function e() {
            var e = this;
            (this.stopped = !0),
                (this.listener = function () {
                    return e.schedule();
                });
        }
        return (
            (e.prototype.run = function (e) {
                var t = this;
                if ((void 0 === e && (e = l), !f)) {
                    f = !0;
                    var n = d(e);
                    (0, a.p)(function () {
                        var r = !1;
                        try {
                            r = (0, i.N)();
                        } finally {
                            if (((f = !1), (e = n - d()), !o())) return;
                            r ? t.run(1000) : e > 0 ? t.run(e) : t.start();
                        }
                    });
                }
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
                var e = this,
                    t = function () {
                        return e.observer && e.observer.observe(document.body, u);
                    };
                document.body ? t() : r.C.addEventListener('DOMContentLoaded', t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    c.forEach(function (t) {
                        return r.C.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    c.forEach(function (t) {
                        return r.C.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    p = function (e) {
        !s && e > 0 && _.start(), (s += e) || _.stop();
    };
