"use strict";
function i(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
}
n.d(t, { Vy: () => c, $o: () => s, gZ: () => d, si: () => o });
let r = `
font-weight: bold;
color: purple;
`,
    a = () => {};
function s(e) {
    a = e;
}
let l = () => {};
function o(e) {
    l = e;
}
function d(e, t, n) {
    for (var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
    "file-only" !== t && console[t](`%c[${e}]`, r, n, ...a);
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
            a(e.name, "log", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "log", t, ...i);
        };
    })();
    log = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            i(t, ...r), a(e.name, "log", t, ...r), e.nativeLoggerEnabled && l?.(e.name, "log", t, ...r);
        };
    })();
    verboseDangerously = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            a(e.name, "debug", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "debug", t, ...i);
        };
    })();
    verbose = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            i(t, ...r), a(e.name, "debug", t, ...r), e.nativeLoggerEnabled && l?.(e.name, "debug", t, ...r);
        };
    })();
    info = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            i(t, ...r), a(e.name, "info", t, ...r), e.nativeLoggerEnabled && l?.(e.name, "info", t, ...r);
        };
    })();
    warn = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            i(t, ...r), a(e.name, "warn", t, ...r), e.nativeLoggerEnabled && l?.(e.name, "warn", t, ...r);
        };
    })();
    error = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
            i(t, ...r), a(e.name, "error", t, ...r), e.nativeLoggerEnabled && l?.(e.name, "error", t, ...r);
        };
    })();
    trace = (() => {
        var e = this;
        return function (t) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            a(e.name, "trace", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "trace", t, ...i);
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
            a(e.name, "file-only", t, ...i), e.nativeLoggerEnabled && l?.(e.name, "file-only", t, ...i);
        };
    })();
}
