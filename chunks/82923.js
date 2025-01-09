n(47120);
var i = n(748780);
function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class l {
    start() {
        return new Promise((e) => {
            this.animation.start(() => {
                e();
            });
        });
    }
    stop() {
        this.animation.stop();
    }
    constructor(e) {
        r(this, 'animation', void 0), (this.animation = e);
    }
}
class s {
    _map(e) {
        return this.animations.map(e);
    }
    start() {
        return new Promise((e) => Promise.all(this._map((e) => e.start())).then(() => e()));
    }
    stop() {
        this._map((e) => e.stop());
    }
    constructor(e) {
        r(this, 'animations', void 0), (this.animations = e);
    }
}
class a {
    async start() {
        for (let e of ((this.stopped = !1), this.animations)) {
            if (this.stopped) return;
            await e.start();
        }
    }
    stop() {
        (this.stopped = !0), this.animations.map((e) => e.stop());
    }
    constructor(e) {
        r(this, 'animations', void 0), r(this, 'stopped', !1), (this.animations = e);
    }
}
function o(e, t, n) {
    return new l(n(e, { ...t }));
}
t.Z = {
    ...i.Z,
    timing: function (e, t) {
        return o(e, t, i.Z.timing);
    },
    spring: function (e, t) {
        return o(e, t, i.Z.spring);
    },
    parallel: function (e) {
        return new s(e);
    },
    sequence: function (e) {
        return new a(e);
    }
};
