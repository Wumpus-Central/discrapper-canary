let r;
function _() {
    return {
        __proto__: null,
        "./discord_markdown_wasm_bg.js": {
            __proto__: null,
            __wbg_Error_30c8987f7c2ed4e2: function (e, n) {
                return i(Error(p(e >>> 0, n)));
            },
            __wbg_Number_14af1003b8dd5ead: function (e) {
                return Number(b[e]);
            },
            __wbg_String_8564e559799eccda: function (e, n) {
                let t = d(String(b[n]), r.__wbindgen_export, r.__wbindgen_export2),
                    _ = E;
                (a().setInt32(e + 4, _, !0), a().setInt32(e + 0, t, !0));
            },
            __wbg___wbindgen_bigint_get_as_i64_a2383202b9353e4c: function (e, n) {
                let t = b[n],
                    r = "bigint" == typeof t ? t : void 0;
                (a().setBigInt64(e + 8, l(r) ? BigInt(0) : r, !0), a().setInt32(e + 0, !l(r), !0));
            },
            __wbg___wbindgen_boolean_get_5b446f51afd21013: function (e) {
                let n = b[e],
                    t = "boolean" == typeof n ? n : void 0;
                return l(t) ? 0xffffff : +!!t;
            },
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function (e, n) {
                let t = d(
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
                        })(b[n]),
                        r.__wbindgen_export,
                        r.__wbindgen_export2,
                    ),
                    _ = E;
                (a().setInt32(e + 4, _, !0), a().setInt32(e + 0, t, !0));
            },
            __wbg___wbindgen_in_92f62ee1427d9e49: function (e, n) {
                return b[e] in b[n];
            },
            __wbg___wbindgen_is_bigint_b123553bed3bb382: function (e) {
                return "bigint" == typeof b[e];
            },
            __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function (e) {
                return "function" == typeof b[e];
            },
            __wbg___wbindgen_is_object_3c45d4f2dde4e749: function (e) {
                let n = b[e];
                return "object" == typeof n && null !== n;
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function (e) {
                return "string" == typeof b[e];
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function (e) {
                return void 0 === b[e];
            },
            __wbg___wbindgen_jsval_eq_02babf21faa37971: function (e, n) {
                return b[e] === b[n];
            },
            __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function (e, n) {
                return b[e] == b[n];
            },
            __wbg___wbindgen_number_get_2e0e7dee9f701a71: function (e, n) {
                let t = b[n],
                    r = "number" == typeof t ? t : void 0;
                (a().setFloat64(e + 8, l(r) ? 0 : r, !0), a().setInt32(e + 0, !l(r), !0));
            },
            __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function (e, n) {
                let t = b[n],
                    _ = "string" == typeof t ? t : void 0;
                var i = l(_) ? 0 : d(_, r.__wbindgen_export, r.__wbindgen_export2),
                    o = E;
                (a().setInt32(e + 4, o, !0), a().setInt32(e + 0, i, !0));
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function (e, n) {
                throw Error(p(e >>> 0, n));
            },
            __wbg_call_6137034ef55c9d0f: function () {
                return u(function (e, n) {
                    return i(b[e].call(b[n]));
                }, arguments);
            },
            __wbg_done_b41a1d26cdb37fb6: function (e) {
                return b[e].done;
            },
            __wbg_entries_fb6397112b1de25f: function (e) {
                return i(Object.entries(b[e]));
            },
            __wbg_get_658f6698067d9515: function () {
                return u(function (e, n) {
                    return i(Reflect.get(b[e], b[n]));
                }, arguments);
            },
            __wbg_get_6c896e0571ddae51: function (e, n) {
                return i(b[e][n >>> 0]);
            },
            __wbg_get_unchecked_288889d017702237: function (e, n) {
                return i(b[e][n >>> 0]);
            },
            __wbg_get_with_ref_key_6412cf3094599694: function (e, n) {
                return i(b[e][b[n]]);
            },
            __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function (e) {
                let n;
                try {
                    n = b[e] instanceof ArrayBuffer;
                } catch (e) {
                    n = !1;
                }
                return n;
            },
            __wbg_instanceof_Map_b2611749102d7ba3: function (e) {
                let n;
                try {
                    n = b[e] instanceof Map;
                } catch (e) {
                    n = !1;
                }
                return n;
            },
            __wbg_instanceof_Uint8Array_828cef2aaacafc31: function (e) {
                let n;
                try {
                    n = b[e] instanceof Uint8Array;
                } catch (e) {
                    n = !1;
                }
                return n;
            },
            __wbg_isArray_e15a2ff68ffdbef2: function (e) {
                return Array.isArray(b[e]);
            },
            __wbg_isSafeInteger_717808ad6a54bd9e: function (e) {
                return Number.isSafeInteger(b[e]);
            },
            __wbg_iterator_e3c31c892080e444: function () {
                return i(Symbol.iterator);
            },
            __wbg_length_7f3c00c40364105e: function (e) {
                return b[e].length;
            },
            __wbg_length_d4bdea10311bd9cf: function (e) {
                return b[e].length;
            },
            __wbg_new_1dbf7428bba60a42: function (e) {
                return i(new Uint8Array(b[e]));
            },
            __wbg_new_28744009d011f847: function () {
                return i(new Map());
            },
            __wbg_new_617a8cdb8bb1130e: function () {
                return i({});
            },
            __wbg_new_ee2291f50781bf1d: function () {
                return i([]);
            },
            __wbg_next_33784799010f1bbe: function (e) {
                return i(b[e].next);
            },
            __wbg_next_f4aac29c42af995c: function () {
                return u(function (e) {
                    return i(b[e].next());
                }, arguments);
            },
            __wbg_prototypesetcall_bc27214492979395: function (e, n, t) {
                var r, _;
                Uint8Array.prototype.set.call(((r = e), (_ = n), (r >>>= 0), f().subarray(r / 1, r / 1 + _)), b[t]);
            },
            __wbg_set_6ae97e73113c4f0b: function (e, n, t) {
                return i(b[e].set(b[n], b[t]));
            },
            __wbg_set_6be42768c690e380: function (e, n, t) {
                b[e][g(n)] = g(t);
            },
            __wbg_set_bea140a88be9b277: function (e, n, t) {
                b[e][n >>> 0] = g(t);
            },
            __wbg_value_f3c585ee8f5ba40c: function (e) {
                return i(b[e].value);
            },
            __wbindgen_generic_0000000000000001: function (e) {
                return i(e);
            },
            __wbindgen_generic_0000000000000002: function (e) {
                return i(e);
            },
            __wbindgen_generic_0000000000000003: function (e, n) {
                return i(p(e >>> 0, n));
            },
            __wbindgen_generic_0000000000000004: function (e) {
                return i(BigInt.asUintN(64, e));
            },
            __wbindgen_object_clone_ref: function (e) {
                return i(b[e]);
            },
            __wbindgen_object_drop_ref: function (e) {
                g(e);
            },
        },
    };
}
function i(e) {
    s === b.length && b.push(b.length + 1);
    let n = s;
    return ((s = b[n]), (b[n] = e), n);
}
let o = null;
function a() {
    return (
        (null === o || !0 === o.buffer.detached || (void 0 === o.buffer.detached && o.buffer !== r.memory.buffer)) &&
            (o = new DataView(r.memory.buffer)),
        o
    );
}
let c = null;
function f() {
    return ((null === c || 0 === c.byteLength) && (c = new Uint8Array(r.memory.buffer)), c);
}
function u(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export3(i(e));
    }
}
let b = Array(1024).fill(void 0);
b.push(void 0, null, !0, !1);
let s = b.length;
function l(e) {
    return null == e;
}
function d(e, n, t) {
    if (void 0 === t) {
        let t = I.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            f()
                .subarray(r, r + t.length)
                .set(t),
            (E = t.length),
            r
        );
    }
    let r = e.length,
        _ = n(r, 1) >>> 0,
        i = f(),
        o = 0;
    for (; o < r; o++) {
        let n = e.charCodeAt(o);
        if (n > 127) break;
        i[_ + o] = n;
    }
    if (o !== r) {
        (0 !== o && (e = e.slice(o)), (_ = t(_, r, (r = o + 3 * e.length), 1) >>> 0));
        let n = f().subarray(_ + o, _ + r);
        ((o += I.encodeInto(e, n).written), (_ = t(_, r, o, 1) >>> 0));
    }
    return ((E = o), _);
}
function g(e) {
    let n = b[e];
    return (e < 1028 || ((b[e] = s), (s = e)), n);
}
let w = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
w.decode();
let y = 0;
function p(e, n) {
    return (
        (y += n) >= 0x7ff00000 && ((w = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (y = n)),
        w.decode(f().subarray(e, e + n))
    );
}
let I = new TextEncoder();
"encodeInto" in I ||
    (I.encodeInto = function (e, n) {
        let t = I.encode(e);
        return (n.set(t), { read: e.length, written: t.length });
    });
let E = 0;
function h(e, n) {
    return ((r = e.exports), (o = null), (c = null), r);
}
t.d(
    n,
    {},
    {
        Ay: async function (e) {
            if (void 0 !== r) return r;
            (void 0 !== e &&
                (Object.getPrototypeOf(e) === Object.prototype
                    ? ({ module_or_path: e } = e)
                    : console.warn(
                          "using deprecated parameters for the initialization function; pass a single object instead",
                      )),
                void 0 === e && (e = new URL(t(986432), t.b)));
            let n = _();
            ("string" == typeof e ||
                ("function" == typeof Request && e instanceof Request) ||
                ("function" == typeof URL && e instanceof URL)) &&
                (e = fetch(e));
            let { instance: i, module: o } = await (async function (e, n) {
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
            })(await e, n);
            return h(i, o);
        },
        IS: function (e, n, t) {
            try {
                let o = r.__wbindgen_add_to_stack_pointer(-16),
                    c = d(e, r.__wbindgen_export, r.__wbindgen_export2),
                    f = E;
                r.parseLossless(
                    o,
                    c,
                    f,
                    l(n) ? Number.MAX_SAFE_INTEGER : n >>> 0,
                    l(t) ? Number.MAX_SAFE_INTEGER : t >>> 0,
                );
                var _ = a().getInt32(o + 0, !0),
                    i = a().getInt32(o + 4, !0);
                if (a().getInt32(o + 8, !0)) throw g(i);
                return g(_);
            } finally {
                r.__wbindgen_add_to_stack_pointer(16);
            }
        },
        QR: function (e) {
            if (void 0 !== r) return r;
            void 0 !== e &&
                (Object.getPrototypeOf(e) === Object.prototype
                    ? ({ module: e } = e)
                    : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
            let n = _();
            return (
                e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), h(new WebAssembly.Instance(e, n), e)
            );
        },
        qg: function (e, n, t) {
            try {
                let o = r.__wbindgen_add_to_stack_pointer(-16),
                    c = d(e, r.__wbindgen_export, r.__wbindgen_export2),
                    f = E;
                r.parse(o, c, f, l(n) ? Number.MAX_SAFE_INTEGER : n >>> 0, l(t) ? Number.MAX_SAFE_INTEGER : t >>> 0);
                var _ = a().getInt32(o + 0, !0),
                    i = a().getInt32(o + 4, !0);
                if (a().getInt32(o + 8, !0)) throw g(i);
                return g(_);
            } finally {
                r.__wbindgen_add_to_stack_pointer(16);
            }
        },
    },
);
