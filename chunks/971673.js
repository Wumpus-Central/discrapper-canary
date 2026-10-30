let r;
function _(e, t, n) {
    try {
        let o = r.__wbindgen_add_to_stack_pointer(-16),
            c = w(e, r.__wbindgen_export, r.__wbindgen_export2),
            a = m;
        r.parse(o, c, a, g(t) ? Number.MAX_SAFE_INTEGER : t >>> 0, g(n) ? Number.MAX_SAFE_INTEGER : n >>> 0);
        var _ = u().getInt32(o + 0, !0),
            i = u().getInt32(o + 4, !0);
        if (u().getInt32(o + 8, !0)) throw p(i);
        return p(_);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
function i(e, t, n) {
    try {
        let o = r.__wbindgen_add_to_stack_pointer(-16),
            c = w(e, r.__wbindgen_export, r.__wbindgen_export2),
            a = m;
        r.parseLossless(o, c, a, g(t) ? Number.MAX_SAFE_INTEGER : t >>> 0, g(n) ? Number.MAX_SAFE_INTEGER : n >>> 0);
        var _ = u().getInt32(o + 0, !0),
            i = u().getInt32(o + 4, !0);
        if (u().getInt32(o + 8, !0)) throw p(i);
        return p(_);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
function o() {
    return {
        __proto__: null,
        "./discord_markdown_wasm_bg.js": {
            __proto__: null,
            __wbg_Error_30c8987f7c2ed4e2: function (e, t) {
                return c(Error(I(e >>> 0, t)));
            },
            __wbg_Number_14af1003b8dd5ead: function (e) {
                return Number(l[e]);
            },
            __wbg_String_8564e559799eccda: function (e, t) {
                let n = w(String(l[t]), r.__wbindgen_export, r.__wbindgen_export2),
                    _ = m;
                (u().setInt32(e + 4, _, !0), u().setInt32(e + 0, n, !0));
            },
            __wbg___wbindgen_bigint_get_as_i64_a2383202b9353e4c: function (e, t) {
                let n = l[t],
                    r = "bigint" == typeof n ? n : void 0;
                (u().setBigInt64(e + 8, g(r) ? BigInt(0) : r, !0), u().setInt32(e + 0, !g(r), !0));
            },
            __wbg___wbindgen_boolean_get_5b446f51afd21013: function (e) {
                let t = l[e],
                    n = "boolean" == typeof t ? t : void 0;
                return g(n) ? 0xffffff : +!!n;
            },
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function (e, t) {
                let n = w(
                        (function e(t) {
                            let n,
                                r = typeof t;
                            if ("number" == r || "boolean" == r || null == t) return `${t}`;
                            if ("string" == r) return `"${t}"`;
                            if ("symbol" == r) {
                                let e = t.description;
                                return null == e ? "Symbol" : `Symbol(${e})`;
                            }
                            if ("function" == r) {
                                let e = t.name;
                                return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                            }
                            if (Array.isArray(t)) {
                                let n = t.length,
                                    r = "[";
                                n > 0 && (r += e(t[0]));
                                for (let _ = 1; _ < n; _++) r += ", " + e(t[_]);
                                return r + "]";
                            }
                            let _ = /\[object ([^\]]+)\]/.exec(toString.call(t));
                            if (!_ || !(_.length > 1)) return toString.call(t);
                            if ("Object" == (n = _[1]))
                                try {
                                    return "Object(" + JSON.stringify(t) + ")";
                                } catch (e) {
                                    return "Object";
                                }
                            return t instanceof Error
                                ? `${t.name}: ${t.message}
${t.stack}`
                                : n;
                        })(l[t]),
                        r.__wbindgen_export,
                        r.__wbindgen_export2,
                    ),
                    _ = m;
                (u().setInt32(e + 4, _, !0), u().setInt32(e + 0, n, !0));
            },
            __wbg___wbindgen_in_92f62ee1427d9e49: function (e, t) {
                return l[e] in l[t];
            },
            __wbg___wbindgen_is_bigint_b123553bed3bb382: function (e) {
                return "bigint" == typeof l[e];
            },
            __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function (e) {
                return "function" == typeof l[e];
            },
            __wbg___wbindgen_is_object_3c45d4f2dde4e749: function (e) {
                let t = l[e];
                return "object" == typeof t && null !== t;
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function (e) {
                return "string" == typeof l[e];
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function (e) {
                return void 0 === l[e];
            },
            __wbg___wbindgen_jsval_eq_02babf21faa37971: function (e, t) {
                return l[e] === l[t];
            },
            __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function (e, t) {
                return l[e] == l[t];
            },
            __wbg___wbindgen_number_get_2e0e7dee9f701a71: function (e, t) {
                let n = l[t],
                    r = "number" == typeof n ? n : void 0;
                (u().setFloat64(e + 8, g(r) ? 0 : r, !0), u().setInt32(e + 0, !g(r), !0));
            },
            __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function (e, t) {
                let n = l[t],
                    _ = "string" == typeof n ? n : void 0;
                var i = g(_) ? 0 : w(_, r.__wbindgen_export, r.__wbindgen_export2),
                    o = m;
                (u().setInt32(e + 4, o, !0), u().setInt32(e + 0, i, !0));
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function (e, t) {
                throw Error(I(e >>> 0, t));
            },
            __wbg_call_6137034ef55c9d0f: function () {
                return b(function (e, t) {
                    return c(l[e].call(l[t]));
                }, arguments);
            },
            __wbg_done_b41a1d26cdb37fb6: function (e) {
                return l[e].done;
            },
            __wbg_entries_fb6397112b1de25f: function (e) {
                return c(Object.entries(l[e]));
            },
            __wbg_get_658f6698067d9515: function () {
                return b(function (e, t) {
                    return c(Reflect.get(l[e], l[t]));
                }, arguments);
            },
            __wbg_get_6c896e0571ddae51: function (e, t) {
                return c(l[e][t >>> 0]);
            },
            __wbg_get_unchecked_288889d017702237: function (e, t) {
                return c(l[e][t >>> 0]);
            },
            __wbg_get_with_ref_key_6412cf3094599694: function (e, t) {
                return c(l[e][l[t]]);
            },
            __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function (e) {
                let t;
                try {
                    t = l[e] instanceof ArrayBuffer;
                } catch (e) {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Map_b2611749102d7ba3: function (e) {
                let t;
                try {
                    t = l[e] instanceof Map;
                } catch (e) {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Uint8Array_828cef2aaacafc31: function (e) {
                let t;
                try {
                    t = l[e] instanceof Uint8Array;
                } catch (e) {
                    t = !1;
                }
                return t;
            },
            __wbg_isArray_e15a2ff68ffdbef2: function (e) {
                return Array.isArray(l[e]);
            },
            __wbg_isSafeInteger_717808ad6a54bd9e: function (e) {
                return Number.isSafeInteger(l[e]);
            },
            __wbg_iterator_e3c31c892080e444: function () {
                return c(Symbol.iterator);
            },
            __wbg_length_7f3c00c40364105e: function (e) {
                return l[e].length;
            },
            __wbg_length_d4bdea10311bd9cf: function (e) {
                return l[e].length;
            },
            __wbg_new_1dbf7428bba60a42: function (e) {
                return c(new Uint8Array(l[e]));
            },
            __wbg_new_28744009d011f847: function () {
                return c(new Map());
            },
            __wbg_new_617a8cdb8bb1130e: function () {
                return c({});
            },
            __wbg_new_ee2291f50781bf1d: function () {
                return c([]);
            },
            __wbg_next_33784799010f1bbe: function (e) {
                return c(l[e].next);
            },
            __wbg_next_f4aac29c42af995c: function () {
                return b(function (e) {
                    return c(l[e].next());
                }, arguments);
            },
            __wbg_prototypesetcall_bc27214492979395: function (e, t, n) {
                var r, _;
                Uint8Array.prototype.set.call(((r = e), (_ = t), (r >>>= 0), s().subarray(r / 1, r / 1 + _)), l[n]);
            },
            __wbg_set_6ae97e73113c4f0b: function (e, t, n) {
                return c(l[e].set(l[t], l[n]));
            },
            __wbg_set_6be42768c690e380: function (e, t, n) {
                l[e][p(t)] = p(n);
            },
            __wbg_set_bea140a88be9b277: function (e, t, n) {
                l[e][t >>> 0] = p(n);
            },
            __wbg_value_f3c585ee8f5ba40c: function (e) {
                return c(l[e].value);
            },
            __wbindgen_generic_0000000000000001: function (e) {
                return c(e);
            },
            __wbindgen_generic_0000000000000002: function (e) {
                return c(e);
            },
            __wbindgen_generic_0000000000000003: function (e, t) {
                return c(I(e >>> 0, t));
            },
            __wbindgen_generic_0000000000000004: function (e) {
                return c(BigInt.asUintN(64, e));
            },
            __wbindgen_object_clone_ref: function (e) {
                return c(l[e]);
            },
            __wbindgen_object_drop_ref: function (e) {
                p(e);
            },
        },
    };
}
function c(e) {
    d === l.length && l.push(l.length + 1);
    let t = d;
    return ((d = l[t]), (l[t] = e), t);
}
n.d(t, { Ay: () => S, IS: () => i, QR: () => N, qg: () => _ });
let a = null;
function u() {
    return (
        (null === a || !0 === a.buffer.detached || (void 0 === a.buffer.detached && a.buffer !== r.memory.buffer)) &&
            (a = new DataView(r.memory.buffer)),
        a
    );
}
let f = null;
function s() {
    return ((null === f || 0 === f.byteLength) && (f = new Uint8Array(r.memory.buffer)), f);
}
function b(e, t) {
    try {
        return e.apply(this, t);
    } catch (e) {
        r.__wbindgen_export3(c(e));
    }
}
let l = Array(1024).fill(void 0);
l.push(void 0, null, !0, !1);
let d = l.length;
function g(e) {
    return null == e;
}
function w(e, t, n) {
    if (void 0 === n) {
        let n = h.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            s()
                .subarray(r, r + n.length)
                .set(n),
            (m = n.length),
            r
        );
    }
    let r = e.length,
        _ = t(r, 1) >>> 0,
        i = s(),
        o = 0;
    for (; o < r; o++) {
        let t = e.charCodeAt(o);
        if (t > 127) break;
        i[_ + o] = t;
    }
    if (o !== r) {
        (0 !== o && (e = e.slice(o)), (_ = n(_, r, (r = o + 3 * e.length), 1) >>> 0));
        let t = s().subarray(_ + o, _ + r);
        ((o += h.encodeInto(e, t).written), (_ = n(_, r, o, 1) >>> 0));
    }
    return ((m = o), _);
}
function p(e) {
    let t = l[e];
    return (e < 1028 || ((l[e] = d), (d = e)), t);
}
let y = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
y.decode();
let E = 0;
function I(e, t) {
    return (
        (E += t) >= 0x7ff00000 && ((y = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (E = t)),
        y.decode(s().subarray(e, e + t))
    );
}
let h = new TextEncoder();
"encodeInto" in h ||
    (h.encodeInto = function (e, t) {
        let n = h.encode(e);
        return (t.set(n), { read: e.length, written: n.length });
    });
let m = 0;
function A(e, t) {
    return ((r = e.exports), (a = null), (f = null), r);
}
async function O(e, t) {
    if ("function" == typeof Response && e instanceof Response) {
        if (!e.ok) throw Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);
        if ("function" == typeof WebAssembly.instantiateStreaming)
            try {
                return await WebAssembly.instantiateStreaming(e, t);
            } catch (t) {
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
                        t,
                    );
                else throw t;
            }
        let n = await e.arrayBuffer();
        return await WebAssembly.instantiate(n, t);
    }
    {
        let n = await WebAssembly.instantiate(e, t);
        return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
    }
}
function N(e) {
    if (void 0 !== r) return r;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module: e } = e)
            : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    let t = o();
    return (e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), A(new WebAssembly.Instance(e, t), e));
}
async function S(e) {
    if (void 0 !== r) return r;
    (void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = new URL(n(136089), n.b)));
    let t = o();
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: _, module: i } = await O(await e, t);
    return A(_, i);
}
