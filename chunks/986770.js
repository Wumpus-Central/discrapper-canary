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
n.d(t, {
    Y: () => l,
    y: () => c
}),
    n(653041),
    n(411104),
    n(26686),
    n(47120);
let i = 5000,
    o = [];
function a(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    if (o.length > i) return;
    let a = s(n);
    o.push({
        time: Date.now(),
        category: e,
        message: a
    });
}
function s(e) {
    let t = '';
    for (let n of e) {
        let e = typeof n;
        'string' === e || 'number' === e || 'boolean' === e ? (t += n + ' ') : n instanceof Error ? (t += n.message + '\n' + n.stack + ' ') : (t += JSON.stringify(n) + ' ');
    }
    return t;
}
class l {
    enableNativeLogger(e) {}
    constructor(e = 'default') {
        var t = this;
        r(this, 'name', void 0),
            r(this, 'nativeLoggerEnabled', void 0),
            r(this, 'verbose', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                console.info(t.name, e, ...r);
            }),
            r(this, 'info', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                a(t.name, e, ...r), console.info(t.name, e, ...r);
            }),
            r(this, 'warn', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                a(t.name, e, ...r), console.warn(t.name, 'warn', e, ...r);
            }),
            r(this, 'error', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                a(t.name, e, ...r), console.error(t.name, 'error', e, ...r);
            }),
            r(this, 'logDangerously', function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            }),
            r(this, 'log', function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            }),
            r(this, 'verboseDangerously', function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            }),
            r(this, 'trace', function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            }),
            r(this, 'time', (e, t) => t()),
            r(this, 'fileOnly', function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            }),
            (this.name = e),
            (this.nativeLoggerEnabled = !1),
            (o.length = 0);
    }
}
function c() {
    return o;
}
