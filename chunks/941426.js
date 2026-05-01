"use strict";
function i(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
}
n.d(t, { Vy: () => c, $o: () => a, gZ: () => u, si: () => l });
let r = `
font-weight: bold;
color: purple;
`,
    s = () => {};
function a(e) {
    s = e;
}
let o = () => {};
function l(e) {
    o = e;
}
function u(e, t, n) {
    for (var i = arguments.length, s = Array(i > 3 ? i - 3 : 0), a = 3; a < i; a++) s[a - 3] = arguments[a];
    "file-only" !== t && console[t](`%c[${e}]`, r, n, ...s);
}
class c {
    name;
    nativeLoggerEnabled;
    constructor(e = "default") {
        (this.name = e), (this.nativeLoggerEnabled = !1);
    }
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    logDangerously = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            s(e.name, "log", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "log", t, ...i);
        };
    })();
    log = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            i(t, ...r), s(e.name, "log", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "log", t, ...r);
        };
    })();
    verboseDangerously = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            s(e.name, "debug", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "debug", t, ...i);
        };
    })();
    verbose = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            i(t, ...r), s(e.name, "debug", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "debug", t, ...r);
        };
    })();
    info = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            i(t, ...r), s(e.name, "info", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "info", t, ...r);
        };
    })();
    warn = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            i(t, ...r), s(e.name, "warn", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "warn", t, ...r);
        };
    })();
    error = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            i(t, ...r), s(e.name, "error", t, ...r), e.nativeLoggerEnabled && o?.(e.name, "error", t, ...r);
        };
    })();
    trace = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            s(e.name, "trace", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "trace", t, ...i);
        };
    })();
    time = (e, t) => {
        let n = Date.now(),
            i = t();
        return this.log(e, Date.now() - n), i;
    };
    timeAsync = async (e, t) => {
        let n = Date.now(),
            i = await t();
        return this.log(e, `${Date.now() - n}ms`), i;
    };
    fileOnly = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            s(e.name, "file-only", t, ...i), e.nativeLoggerEnabled && o?.(e.name, "file-only", t, ...i);
        };
    })();
}
