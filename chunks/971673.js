let r;
function _(e, n, t) {
    try {
        let o = r.__wbindgen_add_to_stack_pointer(-16),
            a = w(e, r.__wbindgen_export, r.__wbindgen_export2),
            c = m;
        r.parse(o, a, c, g(n) ? Number.MAX_SAFE_INTEGER : n >>> 0, g(t) ? Number.MAX_SAFE_INTEGER : t >>> 0);
        var _ = f().getInt32(o + 0, !0),
            i = f().getInt32(o + 4, !0);
        if (f().getInt32(o + 8, !0)) throw y(i);
        return y(_);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
function i(e, n, t) {
    try {
        let o = r.__wbindgen_add_to_stack_pointer(-16),
            a = w(e, r.__wbindgen_export, r.__wbindgen_export2),
            c = m;
        r.parseLossless(o, a, c, g(n) ? Number.MAX_SAFE_INTEGER : n >>> 0, g(t) ? Number.MAX_SAFE_INTEGER : t >>> 0);
        var _ = f().getInt32(o + 0, !0),
            i = f().getInt32(o + 4, !0);
        if (f().getInt32(o + 8, !0)) throw y(i);
        return y(_);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
function o() {
    return {
        __proto__: null,
        "./discord_markdown_wasm_bg.js": {
            __proto__: null,
            __wbg_Error_30c8987f7c2ed4e2: function (e, n) {
                return a(Error(E(e >>> 0, n)));
            },
            __wbg_Number_14af1003b8dd5ead: function (e) {
                return Number(l[e]);
            },
            __wbg_String_8564e559799eccda: function (e, n) {
                let t = w(String(l[n]), r.__wbindgen_export, r.__wbindgen_export2),
                    _ = m;
                (f().setInt32(e + 4, _, !0), f().setInt32(e + 0, t, !0));
            },
            __wbg___wbindgen_bigint_get_as_i64_a2383202b9353e4c: function (e, n) {
                let t = l[n],
                    r = "bigint" == typeof t ? t : void 0;
                (f().setBigInt64(e + 8, g(r) ? BigInt(0) : r, !0), f().setInt32(e + 0, !g(r), !0));
            },
            __wbg___wbindgen_boolean_get_5b446f51afd21013: function (e) {
                let n = l[e],
                    t = "boolean" == typeof n ? n : void 0;
                return g(t) ? 0xffffff : +!!t;
            },
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function (e, n) {
                let t = w(
                        (function e(n) {
                            let t,
                                r = typeof n;
                            if ("number" == r || "boolean" == r || null == n) return `${n}`;
                            if ("string" == r) return `"${n}"`;
                            if ("symbol" == r) {
                                let e = n.description;
                                return null == e ? "Symbol" : `Symbol(${e})`;
                            }
                            if ("function" == r) {
                                let e = n.name;
                                return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                            }
                            if (Array.isArray(n)) {
                                let t = n.length,
                                    r = "[";
                                t > 0 && (r += e(n[0]));
                                for (let _ = 1; _ < t; _++) r += ", " + e(n[_]);
                                return r + "]";
                            }
                            let _ = /\[object ([^\]]+)\]/.exec(toString.call(n));
                            if (!_ || !(_.length > 1)) return toString.call(n);
                            if ("Object" == (t = _[1]))
                                try {
                                    return "Object(" + JSON.stringify(n) + ")";
                                } catch (e) {
                                    return "Object";
                                }
                            return n instanceof Error
                                ? `${n.name}: ${n.message}
${n.stack}`
                                : t;
                        })(l[n]),
                        r.__wbindgen_export,
                        r.__wbindgen_export2,
                    ),
                    _ = m;
                (f().setInt32(e + 4, _, !0), f().setInt32(e + 0, t, !0));
            },
            __wbg___wbindgen_in_92f62ee1427d9e49: function (e, n) {
                return l[e] in l[n];
            },
            __wbg___wbindgen_is_bigint_b123553bed3bb382: function (e) {
                return "bigint" == typeof l[e];
            },
            __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function (e) {
                return "function" == typeof l[e];
            },
            __wbg___wbindgen_is_object_3c45d4f2dde4e749: function (e) {
                let n = l[e];
                return "object" == typeof n && null !== n;
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function (e) {
                return "string" == typeof l[e];
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function (e) {
                return void 0 === l[e];
            },
            __wbg___wbindgen_jsval_eq_02babf21faa37971: function (e, n) {
                return l[e] === l[n];
            },
            __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function (e, n) {
                return l[e] == l[n];
            },
            __wbg___wbindgen_number_get_2e0e7dee9f701a71: function (e, n) {
                let t = l[n],
                    r = "number" == typeof t ? t : void 0;
                (f().setFloat64(e + 8, g(r) ? 0 : r, !0), f().setInt32(e + 0, !g(r), !0));
            },
            __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function (e, n) {
                let t = l[n],
                    _ = "string" == typeof t ? t : void 0;
                var i = g(_) ? 0 : w(_, r.__wbindgen_export, r.__wbindgen_export2),
                    o = m;
                (f().setInt32(e + 4, o, !0), f().setInt32(e + 0, i, !0));
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function (e, n) {
                throw Error(E(e >>> 0, n));
            },
            __wbg_call_6137034ef55c9d0f: function () {
                return s(function (e, n) {
                    return a(l[e].call(l[n]));
                }, arguments);
            },
            __wbg_done_b41a1d26cdb37fb6: function (e) {
                return l[e].done;
            },
            __wbg_entries_fb6397112b1de25f: function (e) {
                return a(Object.entries(l[e]));
            },
            __wbg_get_658f6698067d9515: function () {
                return s(function (e, n) {
                    return a(Reflect.get(l[e], l[n]));
                }, arguments);
            },
            __wbg_get_6c896e0571ddae51: function (e, n) {
                return a(l[e][n >>> 0]);
            },
            __wbg_get_unchecked_288889d017702237: function (e, n) {
                return a(l[e][n >>> 0]);
            },
            __wbg_get_with_ref_key_6412cf3094599694: function (e, n) {
                return a(l[e][l[n]]);
            },
            __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function (e) {
                let n;
                try {
                    n = l[e] instanceof ArrayBuffer;
                } catch (e) {
                    n = !1;
                }
                return n;
            },
            __wbg_instanceof_Map_b2611749102d7ba3: function (e) {
                let n;
                try {
                    n = l[e] instanceof Map;
                } catch (e) {
                    n = !1;
                }
                return n;
            },
            __wbg_instanceof_Uint8Array_828cef2aaacafc31: function (e) {
                let n;
                try {
                    n = l[e] instanceof Uint8Array;
                } catch (e) {
                    n = !1;
                }
                return n;
            },
            __wbg_isArray_e15a2ff68ffdbef2: function (e) {
                return Array.isArray(l[e]);
            },
            __wbg_isSafeInteger_717808ad6a54bd9e: function (e) {
                return Number.isSafeInteger(l[e]);
            },
            __wbg_iterator_e3c31c892080e444: function () {
                return a(Symbol.iterator);
            },
            __wbg_length_7f3c00c40364105e: function (e) {
                return l[e].length;
            },
            __wbg_length_d4bdea10311bd9cf: function (e) {
                return l[e].length;
            },
            __wbg_new_1dbf7428bba60a42: function (e) {
                return a(new Uint8Array(l[e]));
            },
            __wbg_new_28744009d011f847: function () {
                return a(new Map());
            },
            __wbg_new_617a8cdb8bb1130e: function () {
                return a({});
            },
            __wbg_new_ee2291f50781bf1d: function () {
                return a([]);
            },
            __wbg_next_33784799010f1bbe: function (e) {
                return a(l[e].next);
            },
            __wbg_next_f4aac29c42af995c: function () {
                return s(function (e) {
                    return a(l[e].next());
                }, arguments);
            },
            __wbg_prototypesetcall_bc27214492979395: function (e, n, t) {
                var r, _;
                Uint8Array.prototype.set.call(((r = e), (_ = n), (r >>>= 0), b().subarray(r / 1, r / 1 + _)), l[t]);
            },
            __wbg_set_6ae97e73113c4f0b: function (e, n, t) {
                return a(l[e].set(l[n], l[t]));
            },
            __wbg_set_6be42768c690e380: function (e, n, t) {
                l[e][y(n)] = y(t);
            },
            __wbg_set_bea140a88be9b277: function (e, n, t) {
                l[e][n >>> 0] = y(t);
            },
            __wbg_value_f3c585ee8f5ba40c: function (e) {
                return a(l[e].value);
            },
            __wbindgen_generic_0000000000000001: function (e) {
                return a(e);
            },
            __wbindgen_generic_0000000000000002: function (e) {
                return a(e);
            },
            __wbindgen_generic_0000000000000003: function (e, n) {
                return a(E(e >>> 0, n));
            },
            __wbindgen_generic_0000000000000004: function (e) {
                return a(BigInt.asUintN(64, e));
            },
            __wbindgen_object_clone_ref: function (e) {
                return a(l[e]);
            },
            __wbindgen_object_drop_ref: function (e) {
                y(e);
            },
        },
    };
}
function a(e) {
    d === l.length && l.push(l.length + 1);
    let n = d;
    return ((d = l[n]), (l[n] = e), n);
}
t.d(n, { Ay: () => S, IS: () => i, QR: () => O, qg: () => _ });
let c = null;
function f() {
    return (
        (null === c || !0 === c.buffer.detached || (void 0 === c.buffer.detached && c.buffer !== r.memory.buffer)) &&
            (c = new DataView(r.memory.buffer)),
        c
    );
}
let u = null;
function b() {
    return ((null === u || 0 === u.byteLength) && (u = new Uint8Array(r.memory.buffer)), u);
}
function s(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export3(a(e));
    }
}
let l = Array(1024).fill(void 0);
l.push(void 0, null, !0, !1);
let d = l.length;
function g(e) {
    return null == e;
}
function w(e, n, t) {
    if (void 0 === t) {
        let t = h.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            b()
                .subarray(r, r + t.length)
                .set(t),
            (m = t.length),
            r
        );
    }
    let r = e.length,
        _ = n(r, 1) >>> 0,
        i = b(),
        o = 0;
    for (; o < r; o++) {
        let n = e.charCodeAt(o);
        if (n > 127) break;
        i[_ + o] = n;
    }
    if (o !== r) {
        (0 !== o && (e = e.slice(o)), (_ = t(_, r, (r = o + 3 * e.length), 1) >>> 0));
        let n = b().subarray(_ + o, _ + r);
        ((o += h.encodeInto(e, n).written), (_ = t(_, r, o, 1) >>> 0));
    }
    return ((m = o), _);
}
function y(e) {
    let n = l[e];
    return (e < 1028 || ((l[e] = d), (d = e)), n);
}
let p = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
p.decode();
let I = 0;
function E(e, n) {
    return (
        (I += n) >= 0x7ff00000 && ((p = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (I = n)),
        p.decode(b().subarray(e, e + n))
    );
}
let h = new TextEncoder();
"encodeInto" in h ||
    (h.encodeInto = function (e, n) {
        let t = h.encode(e);
        return (n.set(t), { read: e.length, written: t.length });
    });
let m = 0;
function A(e, n) {
    return ((r = e.exports), (c = null), (u = null), r);
}
async function N(e, n) {
    if ("function" == typeof Response && e instanceof Response) {
        if (!e.ok) throw Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);
        if ("function" == typeof WebAssembly.instantiateStreaming)
            try {
                return await WebAssembly.instantiateStreaming(e, n);
            } catch (n) {
                if (
                    (function (e) {
                        switch (e) {
                            case "basic":
                            case "cors":
                            case "default":
                                return !0;
                        }
                        return !1;
                    })(e.type) &&
                    "application/wasm" !== e.headers.get("Content-Type")
                )
                    console.warn(
                        "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                        n,
                    );
                else throw n;
            }
        let t = await e.arrayBuffer();
        return await WebAssembly.instantiate(t, n);
    }
    {
        let t = await WebAssembly.instantiate(e, n);
        return t instanceof WebAssembly.Instance ? { instance: t, module: e } : t;
    }
}
function O(e) {
    if (void 0 !== r) return r;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module: e } = e)
            : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    let n = o();
    return (e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), A(new WebAssembly.Instance(e, n), e));
}
async function S(e) {
    if (void 0 !== r) return r;
    (void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = new URL(t(986432), t.b)));
    let n = o();
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: _, module: i } = await N(await e, n);
    return A(_, i);
}
