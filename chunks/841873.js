let i;
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073), (e = n.hmd(e)));
let r = 0,
    a = null;
function s() {
    return ((null === a || 0 === a.byteLength) && (a = new Uint8Array(i.memory.buffer)), a);
}
let l = new ("u" < typeof TextEncoder ? (0, e.require)("util").TextEncoder : TextEncoder)("utf-8"),
    o =
        "function" == typeof l.encodeInto
            ? function (e, t) {
                  return l.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = l.encode(e);
                  return (t.set(n), { read: e.length, written: n.length });
              };
function d(e, t, n) {
    if (void 0 === n) {
        let n = l.encode(e),
            i = t(n.length, 1) >>> 0;
        return (
            s()
                .subarray(i, i + n.length)
                .set(n),
            (r = n.length),
            i
        );
    }
    let i = e.length,
        a = t(i, 1) >>> 0,
        d = s(),
        c = 0;
    for (; c < i; c++) {
        let t = e.charCodeAt(c);
        if (t > 127) break;
        d[a + c] = t;
    }
    if (c !== i) {
        (0 !== c && (e = e.slice(c)), (a = n(a, i, (i = c + 3 * e.length), 1) >>> 0));
        let t = o(e, s().subarray(a + c, a + i));
        ((c += t.written), (a = n(a, i, c, 1) >>> 0));
    }
    return ((r = c), a);
}
let c = null;
function u() {
    return (
        (null === c || !0 === c.buffer.detached || (void 0 === c.buffer.detached && c.buffer !== i.memory.buffer)) &&
            (c = new DataView(i.memory.buffer)),
        c
    );
}
let _ = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
function E(e, t) {
    return ((e >>>= 0), _.decode(s().subarray(e, e + t)));
}
function A(e) {
    let t = i.__externref_table_alloc();
    return (i.__wbindgen_export_4.set(t, e), t);
}
function h(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = A(t);
        i.__wbindgen_exn_store(e);
    }
}
function f(e) {
    return null == e;
}
_.decode();
let I =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => {
              i.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function p(e, t, n, r) {
    let a = { a: e, b: t, cnt: 1, dtor: n },
        s = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.cnt++;
            let s = a.a;
            a.a = 0;
            try {
                return r(s, a.b, ...t);
            } finally {
                0 == --a.cnt ? (i.__wbindgen_export_5.get(a.dtor)(s, a.b), I.unregister(a)) : (a.a = s);
            }
        };
    return ((s.original = a), I.register(s, a, a), s);
}
function m(e) {
    let t = i.__wbindgen_export_4.get(e);
    return (i.__externref_table_dealloc(e), t);
}
function T(e, t) {
    i._dyn_core_f73ed7932dd6acc___ops__function__FnMut_____Output______as_wasm_bindgen_9353bb4e5bfa4c18___closure__WasmClosure___describe__invoke______(
        e,
        t,
    );
}
function g(e, t) {
    i._dyn_core_f73ed7932dd6acc___ops__function__FnMut_____Output______as_wasm_bindgen_9353bb4e5bfa4c18___closure__WasmClosure___describe__invoke______10(
        e,
        t,
    );
}
function S(e, t, n) {
    i.closure712_externref_shim(e, t, n);
}
let N = ["bytes"],
    C = ["omit", "same-origin", "include"],
    O = ["same-origin", "no-cors", "cors", "navigate"],
    R =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_blockeddomainsstore_free(e >>> 0, 1)),
    L =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_experimentcacher_free(e >>> 0, 1)),
    y =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_fluxapi_free(e >>> 0, 1)),
    D =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_intounderlyingbytesource_free(e >>> 0, 1)),
    b =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_intounderlyingsink_free(e >>> 0, 1)),
    v =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_intounderlyingsource_free(e >>> 0, 1)),
    P =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class M {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(M.prototype);
        return ((t.__wbg_ptr = e), P.register(t, t.__wbg_ptr, t), t);
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return ((this.__wbg_ptr = 0), P.unregister(this), e);
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_wasmcacheableexperimentconfig_free(e, 0);
    }
    get treatmentId() {
        return i.__wbg_get_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr);
    }
    set treatmentId(e) {
        i.__wbg_set_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr, e);
    }
}
n.d(
    t,
    {},
    {
        BF: function (e, t) {
            e.mode = O[t];
        },
        CF: function (e) {
            return e.signal;
        },
        CI: function (e, t) {
            console.warn(E(e, t));
        },
        DS: function (e, t) {
            return setTimeout(e, t);
        },
        Dn: function () {
            return h(function (e) {
                return e.next();
            }, arguments);
        },
        E1: function (e, t, n) {
            return e.put(t, n);
        },
        EH: function () {
            return h(function (e, t) {
                return new Response(e, t);
            }, arguments);
        },
        FH: function (e) {
            return e.buffer;
        },
        FP: function (e, t) {
            return e[t];
        },
        Fs: function (e) {
            let t;
            try {
                t = e instanceof Cache;
            } catch (e) {
                t = !1;
            }
            return t;
        },
        GQ: function (e, t) {
            return e.then(t);
        },
        GZ: class {
            __destroy_into_raw() {
                let e = this.__wbg_ptr;
                return ((this.__wbg_ptr = 0), y.unregister(this), e);
            }
            free() {
                let e = this.__destroy_into_raw();
                i.__wbg_fluxapi_free(e, 0);
            }
            connectStore(e) {
                let t = i.fluxapi_connectStore(this.__wbg_ptr, e);
                if (t[2]) throw m(t[1]);
                return m(t[0]);
            }
            dispatchAction(e, t) {
                let n = d(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                    a = r;
                return i.fluxapi_dispatchAction(this.__wbg_ptr, n, a, t);
            }
            flushReplicationStates() {
                return i.fluxapi_flushReplicationStates(this.__wbg_ptr);
            }
            getRegisteredActionTypes() {
                return i.fluxapi_getRegisteredActionTypes(this.__wbg_ptr);
            }
            findStoresThatCanHandleActionType(e) {
                let t = d(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                    n = r;
                return i.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, t, n);
            }
            constructor() {
                let e = i.fluxapi_new();
                return ((this.__wbg_ptr = e >>> 0), y.register(this, this.__wbg_ptr, this), this);
            }
        },
        Gu: function (e) {
            return "string" == typeof e;
        },
        HB: function (e, t, n) {
            e.set(t, n >>> 0);
        },
        HS: function () {
            return h(function (e, t) {
                return Reflect.has(e, t);
            }, arguments);
        },
        Hz: function (e) {
            let t;
            try {
                t = e instanceof Response;
            } catch (e) {
                t = !1;
            }
            return t;
        },
        Jp: function (e) {
            let t = e.byobRequest;
            return f(t) ? 0 : A(t);
        },
        LC: function (e) {
            let t = e.original;
            return 1 == t.cnt-- && ((t.a = 0), !0);
        },
        LM: function (e) {
            return e.value;
        },
        Lw: function (e, t, n) {
            return p(e, t, 713, S);
        },
        M2: function () {
            return [];
        },
        Mo: function (e) {
            return e.headers;
        },
        N8: function (e) {
            return e;
        },
        ND: function (e) {
            return clearTimeout(e);
        },
        NG: function () {
            return h(function (e, t) {
                return setTimeout(e, t);
            }, arguments);
        },
        NJ: function (e, t, n) {
            e[t] = n;
        },
        Ng: function (e) {
            let t = e.view;
            return f(t) ? 0 : A(t);
        },
        Nh: function (e, t) {
            e.body = t;
        },
        O$: function (e, t) {
            return e.delete(t);
        },
        Oy: function (e, t) {
            let n = d(String(t), i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = r;
            (u().setInt32(e + 4, a, !0), u().setInt32(e + 0, n, !0));
        },
        PJ: function (e, t) {
            e.headers = t;
        },
        PR: function (e) {
            return "function" == typeof e;
        },
        Ph: function () {
            return i.initLibdiscore();
        },
        Py: function () {
            return i.memory;
        },
        QH: function () {
            return h(function (e, t) {
                e.enqueue(t);
            }, arguments);
        },
        QR: function (e) {
            return null === e;
        },
        Qg: function (e) {
            return BigInt.asUintN(64, e);
        },
        Qn: function (e, t) {
            throw Error(E(e, t));
        },
        RG: function () {
            return h(function () {
                return new AbortController();
            }, arguments);
        },
        RK: function (e, t) {
            return e[t >>> 0];
        },
        RR: function () {
            return h(function () {
                return new Headers();
            }, arguments);
        },
        RX: function (e) {
            return fetch(e);
        },
        Rj: function (e, t) {
            return Error(E(e, t));
        },
        Ry: function (e) {
            return e.length;
        },
        SJ: function (e) {
            let t;
            try {
                t = e instanceof Uint8Array;
            } catch (e) {
                t = !1;
            }
            return t;
        },
        Tb: function () {
            return h(function (e, t, n, i, r) {
                e.append(E(t, n), E(i, r));
            }, arguments);
        },
        Tp: function (e, t) {
            let n = d(t.url, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = r;
            (u().setInt32(e + 4, a, !0), u().setInt32(e + 0, n, !0));
        },
        U8: function (e, t) {
            return e == t;
        },
        Ux: function (e) {
            return clearTimeout(e);
        },
        Vr: function (e, t) {
            return Function(E(e, t));
        },
        Xb: function (e) {
            return e.done;
        },
        Xc: function () {
            return h(function (e) {
                return e.caches;
            }, arguments);
        },
        Y6: function () {
            return h(function (e) {
                return JSON.stringify(e);
            }, arguments);
        },
        YN: function (e, t) {
            return e.match(t);
        },
        ZA: class {
            __destroy_into_raw() {
                let e = this.__wbg_ptr;
                return ((this.__wbg_ptr = 0), v.unregister(this), e);
            }
            free() {
                let e = this.__destroy_into_raw();
                i.__wbg_intounderlyingsource_free(e, 0);
            }
            pull(e) {
                return i.intounderlyingsource_pull(this.__wbg_ptr, e);
            }
            cancel() {
                let e = this.__destroy_into_raw();
                i.intounderlyingsource_cancel(e);
            }
        },
        ZJ: class {
            __destroy_into_raw() {
                let e = this.__wbg_ptr;
                return ((this.__wbg_ptr = 0), D.unregister(this), e);
            }
            free() {
                let e = this.__destroy_into_raw();
                i.__wbg_intounderlyingbytesource_free(e, 0);
            }
            get autoAllocateChunkSize() {
                return i.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
            }
            pull(e) {
                return i.intounderlyingbytesource_pull(this.__wbg_ptr, e);
            }
            start(e) {
                i.intounderlyingbytesource_start(this.__wbg_ptr, e);
            }
            get type() {
                return N[i.intounderlyingbytesource_type(this.__wbg_ptr)];
            }
            cancel() {
                let e = this.__destroy_into_raw();
                i.intounderlyingbytesource_cancel(e);
            }
        },
        Zb: function (e, t, n) {
            return p(e, t, 532, T);
        },
        _U: function (e) {
            return e.buffer;
        },
        _h: function (e, t, n) {
            e.method = E(t, n);
        },
        _i: function () {
            return h(function (e) {
                return e.arrayBuffer();
            }, arguments);
        },
        _m: function (e) {
            queueMicrotask(e);
        },
        aI: function () {
            return new Map();
        },
        bL: function () {
            let e = i.__wbindgen_export_4,
                t = e.grow(4);
            (e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1));
        },
        c6: function (e, t) {
            try {
                var n = { a: e, b: t };
                return new Promise((e, t) => {
                    let r = n.a;
                    n.a = 0;
                    try {
                        var a;
                        return ((a = n.b), void i.closure751_externref_shim(r, a, e, t));
                    } finally {
                        n.a = r;
                    }
                });
            } finally {
                n.a = n.b = 0;
            }
        },
        cV: M,
        ce: function (e) {
            return e;
        },
        cy: function (e) {
            return e.byteOffset;
        },
        dS: function () {
            return h(function (e, t) {
                e.respond(t >>> 0);
            }, arguments);
        },
        dz: function () {
            return h(function (e, t) {
                return Reflect.get(e, t);
            }, arguments);
        },
        eF: function (e) {
            return "boolean" == typeof e ? +!!e : 2;
        },
        eI: function (e) {
            return e.length;
        },
        eT: class {
            __destroy_into_raw() {
                let e = this.__wbg_ptr;
                return ((this.__wbg_ptr = 0), L.unregister(this), e);
            }
            free() {
                let e = this.__destroy_into_raw();
                i.__wbg_experimentcacher_free(e, 0);
            }
            static getConfig(e) {
                let t = d(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                    n = r,
                    a = i.experimentcacher_getConfig(t, n);
                if (a[2]) throw m(a[1]);
                return 0 === a[0] ? void 0 : M.__wrap(a[0]);
            }
            static clearCache() {
                let e = i.experimentcacher_clearCache();
                if (e[1]) throw m(e[0]);
            }
            static flushToCache(e) {
                let t = d(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                    n = r,
                    a = i.experimentcacher_flushToCache(t, n);
                if (a[1]) throw m(a[0]);
            }
        },
        eW: function () {
            return Symbol.iterator;
        },
        fb: function () {
            let e = "u" < typeof self ? null : self;
            return f(e) ? 0 : A(e);
        },
        gG: function (e) {
            let t;
            try {
                t = e instanceof ArrayBuffer;
            } catch (e) {
                t = !1;
            }
            return t;
        },
        gM: function (e) {
            e.abort();
        },
        gR: function (e, t) {
            return e.fetch(t);
        },
        hI: function (e, t, n) {
            return new Uint8Array(e, t >>> 0, n >>> 0);
        },
        he: function () {
            return h(function (e, t, n) {
                return new Request(E(e, t), n);
            }, arguments);
        },
        iA: function (e, t, n) {
            return e.set(t, n);
        },
        ii: function () {
            let e = void 0 === n.g ? null : n.g;
            return f(e) ? 0 : A(e);
        },
        j1: function (e, t, n) {
            return e.open(E(t, n));
        },
        jn: function (e) {
            let t = e.performance;
            return f(t) ? 0 : A(t);
        },
        ju: function () {
            return h(function (e, t, n, i, r) {
                e.set(E(t, n), E(i, r));
            }, arguments);
        },
        k2: function (e) {
            return e.queueMicrotask;
        },
        k4: function () {
            return h(function (e) {
                return new Blob(e);
            }, arguments);
        },
        kK: function (e) {
            return e.status;
        },
        l0: function (e, t) {
            e.signal = t;
        },
        lI: function (e) {
            i = e;
        },
        n7: function (e, t, n) {
            return p(e, t, 553, g);
        },
        n8: function (e, t) {
            e.abort(t);
        },
        nx: class {
            __destroy_into_raw() {
                let e = this.__wbg_ptr;
                return ((this.__wbg_ptr = 0), R.unregister(this), e);
            }
            free() {
                let e = this.__destroy_into_raw();
                i.__wbg_blockeddomainsstore_free(e, 0);
            }
            static isBlockedDomain(e) {
                let t,
                    n = d(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                    a = r,
                    s = i.blockeddomainsstore_isBlockedDomain(n, a);
                if (s[3]) throw m(s[2]);
                return (0 !== s[0] && ((t = E(s[0], s[1]).slice()), i.__wbindgen_free(s[0], +s[1], 1)), t);
            }
            static startFetchingBlockedDomains(e) {
                let t = d(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                    n = r,
                    a = i.blockeddomainsstore_startFetchingBlockedDomains(t, n);
                if (a[1]) throw m(a[0]);
            }
        },
        o: function () {
            return h(function (e) {
                e.close();
            }, arguments);
        },
        p8: function (e, t, n) {
            e[t >>> 0] = n;
        },
        pD: function (e) {
            return e.now();
        },
        qN: function (e, t) {
            let n = "string" == typeof t ? t : void 0;
            var a = f(n) ? 0 : d(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                s = r;
            (u().setInt32(e + 4, s, !0), u().setInt32(e + 0, a, !0));
        },
        qv: function (e) {
            return "object" == typeof e && null !== e;
        },
        rf: function (e, t, n, r, a) {
            i.installLogCallback(e, t, n, r, a);
        },
        rk: function (e, t) {
            e.headers = t;
        },
        rl: function (e, t) {
            let n = d(
                    (function e(t) {
                        let n,
                            i = typeof t;
                        if ("number" == i || "boolean" == i || null == t) return `${t}`;
                        if ("string" == i) return `"${t}"`;
                        if ("symbol" == i) {
                            let e = t.description;
                            return null == e ? "Symbol" : `Symbol(${e})`;
                        }
                        if ("function" == i) {
                            let e = t.name;
                            return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                        }
                        if (Array.isArray(t)) {
                            let n = t.length,
                                i = "[";
                            n > 0 && (i += e(t[0]));
                            for (let r = 1; r < n; r++) i += ", " + e(t[r]);
                            return i + "]";
                        }
                        let r = /\[object ([^\]]+)\]/.exec(toString.call(t));
                        if (!r || !(r.length > 1)) return toString.call(t);
                        if ("Object" == (n = r[1]))
                            try {
                                return "Object(" + JSON.stringify(t) + ")";
                            } catch (e) {
                                return "Object";
                            }
                        return t instanceof Error
                            ? `${t.name}: ${t.message}
${t.stack}`
                            : n;
                    })(t),
                    i.__wbindgen_malloc,
                    i.__wbindgen_realloc,
                ),
                a = r;
            (u().setInt32(e + 4, a, !0), u().setInt32(e + 0, n, !0));
        },
        s5: function () {
            return h(function (e, t) {
                var n;
                globalThis.crypto.getRandomValues(((n = e >>> 0), s().subarray(n / 1, n / 1 + t)));
            }, arguments);
        },
        sQ: function () {
            return h(function (e) {
                e.close();
            }, arguments);
        },
        sW: function (e, t) {
            let n = "number" == typeof t ? t : void 0;
            (u().setFloat64(e + 8, f(n) ? 0 : n, !0), u().setInt32(e + 0, !f(n), !0));
        },
        ss: function (e, t) {
            e.status = t;
        },
        t7: function (e, t) {
            return i.rustMultiply(e, t);
        },
        tZ: function (e, t) {
            return e.push(t);
        },
        uo: function (e) {
            return Array.isArray(e);
        },
        uw: function (e, t) {
            e.credentials = C[t];
        },
        v: function () {
            return {};
        },
        v2: class {
            __destroy_into_raw() {
                let e = this.__wbg_ptr;
                return ((this.__wbg_ptr = 0), b.unregister(this), e);
            }
            free() {
                let e = this.__destroy_into_raw();
                i.__wbg_intounderlyingsink_free(e, 0);
            }
            abort(e) {
                let t = this.__destroy_into_raw();
                return i.intounderlyingsink_abort(t, e);
            }
            close() {
                let e = this.__destroy_into_raw();
                return i.intounderlyingsink_close(e);
            }
            write(e) {
                return i.intounderlyingsink_write(this.__wbg_ptr, e);
            }
        },
        vF: function (e) {
            let t;
            try {
                t = e instanceof Window;
            } catch (e) {
                t = !1;
            }
            return t;
        },
        vU: function (e) {
            return void 0 === e;
        },
        vV: function (e) {
            return new Uint8Array(e);
        },
        vb: function () {
            i.crash();
        },
        w2: function () {
            return h(function (e, t, n) {
                return Reflect.set(e, t, n);
            }, arguments);
        },
        w6: function () {
            let e = "u" < typeof globalThis ? null : globalThis;
            return f(e) ? 0 : A(e);
        },
        w9: function () {
            return h(function (e, t, n) {
                return e.call(t, n);
            }, arguments);
        },
        wH: function () {
            return h(function (e, t) {
                return e.call(t);
            }, arguments);
        },
        wJ: function (e) {
            return Promise.resolve(e);
        },
        wd: function (e, t) {
            return Error(E(e, t));
        },
        x0: function () {
            let e = "u" < typeof window ? null : window;
            return f(e) ? 0 : A(e);
        },
        x6: function (e) {
            return e.byteLength;
        },
        xV: function (e, t, n) {
            return e.then(t, n);
        },
        xy: function (e) {
            let t, n;
            try {
                let r = i.generateLaunchSignature(e);
                return ((t = r[0]), (n = r[1]), E(r[0], r[1]));
            } finally {
                i.__wbindgen_free(t, n, 1);
            }
        },
        yc: function (e, t) {
            return E(e, t);
        },
        yq: function (e) {
            return e.next;
        },
        zE: function (e, t) {
            return e in t;
        },
    },
);
