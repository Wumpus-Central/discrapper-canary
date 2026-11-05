(t.r(r),
    t.d(r, { DaveModuleFactory: () => n }),
    t(323874),
    t(14289),
    t(35956),
    t(393431),
    t(532706),
    t(42231),
    t(232424),
    t(949626),
    t(767709),
    t(65162),
    t(321073),
    t(667532),
    t(938796));
let n = async function () {
    let e,
        r,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var o,
        a,
        s,
        i,
        l,
        u,
        d,
        c,
        h,
        f,
        p,
        m,
        v,
        g,
        w,
        y,
        E,
        b,
        k,
        $,
        _,
        T,
        P,
        C,
        S,
        D = "./this.program",
        F = "";
    try {
        F = new URL(".", "file:///ci/build/discord/discord/discord_common/js/packages/libdave/package/wasm/libdave.js")
            .href;
    } catch {}
    o = async (e) => {
        var r = await fetch(e, { credentials: "same-origin" });
        if (r.ok) return r.arrayBuffer();
        throw Error(r.status + " : " + r.url);
    };
    var A = console.log.bind(console),
        M = console.error.bind(console),
        x = !1;
    function O() {
        if (!l?.buffer?.resizable) {
            var e = P.buffer;
            ((l = new Int8Array(e)),
                (f = new Int16Array(e)),
                (n.HEAPU8 = c = new Uint8Array(e)),
                (p = new Uint16Array(e)),
                (d = new Int32Array(e)),
                (u = new Uint32Array(e)),
                (g = new Float32Array(e)),
                (w = new Float64Array(e)),
                (h = new BigInt64Array(e)),
                (m = new BigUint64Array(e)));
        }
    }
    function j(e) {
        throw (
            n.onAbort?.(e),
            (e = `Aborted(${e})`),
            M(e),
            (x = !0),
            (e += ". Build with -sASSERTIONS for more info."),
            new WebAssembly.RuntimeError(e)
        );
    }
    var N = (e) => {
            for (; e.length > 0;) e.shift()(n);
        },
        R = [],
        W = [],
        z = (e) => $(e),
        B = () => T();
    class U {
        constructor(e) {
            ((this.excPtr = e), (this.ptr = e - 24));
        }
        set_type(e) {
            u[(this.ptr + 4) >> 2] = e;
        }
        get_type() {
            return u[(this.ptr + 4) >> 2];
        }
        set_destructor(e) {
            u[(this.ptr + 8) >> 2] = e;
        }
        get_destructor() {
            return u[(this.ptr + 8) >> 2];
        }
        set_caught(e) {
            ((e = +!!e), (l[this.ptr + 12] = e));
        }
        get_caught() {
            return 0 != l[this.ptr + 12];
        }
        set_rethrown(e) {
            ((e = +!!e), (l[this.ptr + 13] = e));
        }
        get_rethrown() {
            return 0 != l[this.ptr + 13];
        }
        init(e, r) {
            (this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(r));
        }
        set_adjusted_ptr(e) {
            u[(this.ptr + 16) >> 2] = e;
        }
        get_adjusted_ptr() {
            return u[(this.ptr + 16) >> 2];
        }
    }
    var I = 0,
        V = () => {
            var e = d[ep.varargs >> 2];
            return ((ep.varargs += 4), e);
        },
        L = {
            isAbs: (e) => "/" === e.charAt(0),
            splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
            normalizeArray: (e, r) => {
                for (var t = 0, n = e.length - 1; n >= 0; n--) {
                    var o = e[n];
                    "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--);
                }
                if (r) for (; t; t--) e.unshift("..");
                return e;
            },
            normalize: (e) => {
                var r = L.isAbs(e),
                    t = "/" === e.slice(-1);
                return (
                    (e = L.normalizeArray(
                        e.split("/").filter((e) => !!e),
                        !r,
                    ).join("/")) ||
                        r ||
                        (e = "."),
                    e && t && (e += "/"),
                    (r ? "/" : "") + e
                );
            },
            dirname: (e) => {
                var r = L.splitPath(e),
                    t = r[0],
                    n = r[1];
                return t || n ? (n && (n = n.slice(0, -1)), t + n) : ".";
            },
            basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
            join: function () {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                return L.normalize(r.join("/"));
            },
            join2: (e, r) => L.normalize(e + "/" + r),
        },
        H = (e) => (H = (e) => (crypto.getRandomValues(e), 0))(e),
        q = {
            resolve: function () {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                for (var n = "", o = !1, a = r.length - 1; a >= -1 && !o; a--) {
                    var s = a >= 0 ? r[a] : eh.cwd();
                    if ("string" != typeof s) throw TypeError("Arguments to path.resolve must be strings");
                    if (!s) return "";
                    ((n = s + "/" + n), (o = L.isAbs(s)));
                }
                return (
                    (n = L.normalizeArray(
                        n.split("/").filter((e) => !!e),
                        !o,
                    ).join("/")),
                    (o ? "/" : "") + n || "."
                );
            },
            relative: (e, r) => {
                function t(e) {
                    for (var r = 0; r < e.length && "" === e[r]; r++);
                    for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
                    return r > t ? [] : e.slice(r, t - r + 1);
                }
                ((e = q.resolve(e).slice(1)), (r = q.resolve(r).slice(1)));
                for (
                    var n = t(e.split("/")), o = t(r.split("/")), a = Math.min(n.length, o.length), s = a, i = 0;
                    i < a;
                    i++
                )
                    if (n[i] !== o[i]) {
                        s = i;
                        break;
                    }
                for (var l = [], i = s; i < n.length; i++) l.push("..");
                return (l = l.concat(o.slice(s))).join("/");
            },
        },
        G = globalThis.TextDecoder && new TextDecoder(),
        X = (e, r, t, n) => {
            var o = r + t;
            if (n) return o;
            for (; e[r] && !(r >= o);) ++r;
            return r;
        },
        K = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 ? arguments[2] : void 0,
                n = arguments.length > 3 ? arguments[3] : void 0;
            var o = X(e, r, t, n);
            if (o - r > 16 && e.buffer && G) return G.decode(e.subarray(r, o));
            for (var a = ""; r < o;) {
                var s = e[r++];
                if (!(128 & s)) {
                    a += String.fromCharCode(s);
                    continue;
                }
                var i = 63 & e[r++];
                if ((224 & s) == 192) {
                    a += String.fromCharCode(((31 & s) << 6) | i);
                    continue;
                }
                var l = 63 & e[r++];
                if (
                    (s =
                        (240 & s) == 224
                            ? ((15 & s) << 12) | (i << 6) | l
                            : ((7 & s) << 18) | (i << 12) | (l << 6) | (63 & e[r++])) < 65536
                )
                    a += String.fromCharCode(s);
                else {
                    var u = s - 65536;
                    a += String.fromCharCode(55296 | (u >> 10), 56320 | (1023 & u));
                }
            }
            return a;
        },
        Y = [],
        Z = (e) => {
            for (var r = 0, t = 0; t < e.length; ++t) {
                var n = e.charCodeAt(t);
                n <= 127 ? r++ : n <= 2047 ? (r += 2) : n >= 55296 && n <= 57343 ? ((r += 4), ++t) : (r += 3);
            }
            return r;
        },
        J = (e, r, t, n) => {
            if (!(n > 0)) return 0;
            for (var o = t, a = t + n - 1, s = 0; s < e.length; ++s) {
                var i = e.codePointAt(s);
                if (i <= 127) {
                    if (t >= a) break;
                    r[t++] = i;
                } else if (i <= 2047) {
                    if (t + 1 >= a) break;
                    ((r[t++] = 192 | (i >> 6)), (r[t++] = 128 | (63 & i)));
                } else if (i <= 65535) {
                    if (t + 2 >= a) break;
                    ((r[t++] = 224 | (i >> 12)), (r[t++] = 128 | ((i >> 6) & 63)), (r[t++] = 128 | (63 & i)));
                } else {
                    if (t + 3 >= a) break;
                    ((r[t++] = 240 | (i >> 18)),
                        (r[t++] = 128 | ((i >> 12) & 63)),
                        (r[t++] = 128 | ((i >> 6) & 63)),
                        (r[t++] = 128 | (63 & i)),
                        s++);
                }
            }
            return ((r[t] = 0), t - o);
        },
        Q = (e, r, t) => {
            var n = Array(t > 0 ? t : Z(e) + 1),
                o = J(e, n, 0, n.length);
            return (r && (n.length = o), n);
        },
        ee = {
            ttys: [],
            init() {},
            shutdown() {},
            register(e, r) {
                ((ee.ttys[e] = { input: [], output: [], ops: r }), eh.registerDevice(e, ee.stream_ops));
            },
            stream_ops: {
                open(e) {
                    var r = ee.ttys[e.node.rdev];
                    if (!r) throw new eh.ErrnoError(43);
                    ((e.tty = r), (e.seekable = !1));
                },
                close(e) {
                    e.tty.ops.fsync(e.tty);
                },
                fsync(e) {
                    e.tty.ops.fsync(e.tty);
                },
                read(e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.get_char) throw new eh.ErrnoError(60);
                    for (var a, s = 0, i = 0; i < n; i++) {
                        try {
                            a = e.tty.ops.get_char(e.tty);
                        } catch (e) {
                            throw new eh.ErrnoError(29);
                        }
                        if (void 0 === a && !s) throw new eh.ErrnoError(6);
                        if (null == a || (s++, (r[t + i] = a), 10 === a)) break;
                    }
                    return (s && (e.node.atime = Date.now()), s);
                },
                write(e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.put_char) throw new eh.ErrnoError(60);
                    try {
                        for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a]);
                    } catch (e) {
                        throw new eh.ErrnoError(29);
                    }
                    return (n && (e.node.mtime = e.node.ctime = Date.now()), a);
                },
            },
            default_tty_ops: {
                get_char: (e) =>
                    (() => {
                        if (!Y.length) {
                            var e = null;
                            if (
                                (globalThis.window?.prompt && null !== (e = window.prompt("Input: ")) && (e += "\n"),
                                !e)
                            )
                                return null;
                            Y = Q(e, !0);
                        }
                        return Y.shift();
                    })(),
                put_char(e, r) {
                    null === r || 10 === r ? (A(K(e.output)), (e.output = [])) : 0 != r && e.output.push(r);
                },
                fsync(e) {
                    e.output?.length > 0 && (A(K(e.output)), (e.output = []));
                },
                ioctl_tcgets: (e) => ({
                    c_iflag: 25856,
                    c_oflag: 5,
                    c_cflag: 191,
                    c_lflag: 35387,
                    c_cc: [
                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0,
                    ],
                }),
                ioctl_tcsets: (e, r, t) => 0,
                ioctl_tiocgwinsz: (e) => [24, 80],
            },
            default_tty1_ops: {
                put_char(e, r) {
                    null === r || 10 === r ? (M(K(e.output)), (e.output = [])) : 0 != r && e.output.push(r);
                },
                fsync(e) {
                    e.output?.length > 0 && (M(K(e.output)), (e.output = []));
                },
            },
        },
        er = (e, r) => Math.ceil(e / r) * r,
        et = (e) => {
            let r;
            e = er(e, 65536);
            var t = k(65536, e);
            return (t && ((r = e), c.fill(0, t, t + r)), t);
        },
        en = {
            ops_table: null,
            mount: (e) => en.createNode(null, "/", 16895, 0),
            createNode(e, r, t, n) {
                if (eh.isBlkdev(t) || eh.isFIFO(t)) throw new eh.ErrnoError(63);
                en.ops_table ||= {
                    dir: {
                        node: {
                            getattr: en.node_ops.getattr,
                            setattr: en.node_ops.setattr,
                            lookup: en.node_ops.lookup,
                            mknod: en.node_ops.mknod,
                            rename: en.node_ops.rename,
                            unlink: en.node_ops.unlink,
                            rmdir: en.node_ops.rmdir,
                            readdir: en.node_ops.readdir,
                            symlink: en.node_ops.symlink,
                        },
                        stream: { llseek: en.stream_ops.llseek },
                    },
                    file: {
                        node: { getattr: en.node_ops.getattr, setattr: en.node_ops.setattr },
                        stream: {
                            llseek: en.stream_ops.llseek,
                            read: en.stream_ops.read,
                            write: en.stream_ops.write,
                            mmap: en.stream_ops.mmap,
                            msync: en.stream_ops.msync,
                        },
                    },
                    link: {
                        node: {
                            getattr: en.node_ops.getattr,
                            setattr: en.node_ops.setattr,
                            readlink: en.node_ops.readlink,
                        },
                        stream: {},
                    },
                    chrdev: {
                        node: { getattr: en.node_ops.getattr, setattr: en.node_ops.setattr },
                        stream: eh.chrdev_stream_ops,
                    },
                };
                var o = eh.createNode(e, r, t, n);
                return (
                    eh.isDir(o.mode)
                        ? ((o.node_ops = en.ops_table.dir.node),
                          (o.stream_ops = en.ops_table.dir.stream),
                          (o.contents = {}))
                        : eh.isFile(o.mode)
                          ? ((o.node_ops = en.ops_table.file.node),
                            (o.stream_ops = en.ops_table.file.stream),
                            (o.usedBytes = 0),
                            (o.contents = en.emptyFileContents ??= new Uint8Array(0)))
                          : eh.isLink(o.mode)
                            ? ((o.node_ops = en.ops_table.link.node), (o.stream_ops = en.ops_table.link.stream))
                            : eh.isChrdev(o.mode) &&
                              ((o.node_ops = en.ops_table.chrdev.node), (o.stream_ops = en.ops_table.chrdev.stream)),
                    (o.atime = o.mtime = o.ctime = Date.now()),
                    e && ((e.contents[r] = o), (e.atime = e.mtime = e.ctime = o.atime)),
                    o
                );
            },
            getFileDataAsTypedArray: (e) => e.contents.subarray(0, e.usedBytes),
            expandFileStorage(e, r) {
                var t = e.contents.length;
                if (!(t >= r)) {
                    ((r = Math.max(r, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)), t && (r = Math.max(r, 256)));
                    var n = en.getFileDataAsTypedArray(e);
                    ((e.contents = new Uint8Array(r)), e.contents.set(n));
                }
            },
            resizeFileStorage(e, r) {
                if (e.usedBytes != r) {
                    var t = e.contents;
                    ((e.contents = new Uint8Array(r)),
                        e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))),
                        (e.usedBytes = r));
                }
            },
            node_ops: {
                getattr(e) {
                    var r = {};
                    return (
                        (r.dev = eh.isChrdev(e.mode) ? e.id : 1),
                        (r.ino = e.id),
                        (r.mode = e.mode),
                        (r.nlink = 1),
                        (r.uid = 0),
                        (r.gid = 0),
                        (r.rdev = e.rdev),
                        eh.isDir(e.mode)
                            ? (r.size = 4096)
                            : eh.isFile(e.mode)
                              ? (r.size = e.usedBytes)
                              : eh.isLink(e.mode)
                                ? (r.size = e.link.length)
                                : (r.size = 0),
                        (r.atime = new Date(e.atime)),
                        (r.mtime = new Date(e.mtime)),
                        (r.ctime = new Date(e.ctime)),
                        (r.atimeMs = e.atime),
                        (r.mtimeMs = e.mtime),
                        (r.ctimeMs = e.ctime),
                        (r.blksize = 4096),
                        (r.blocks = Math.ceil(r.size / r.blksize)),
                        r
                    );
                },
                setattr(e, r) {
                    for (let t of ["mode", "atime", "mtime", "ctime"]) null != r[t] && (e[t] = r[t]);
                    void 0 !== r.size && en.resizeFileStorage(e, r.size);
                },
                lookup(e, r) {
                    throw (
                        en.doesNotExistError ||
                            ((en.doesNotExistError = new eh.ErrnoError(44)),
                            (en.doesNotExistError.stack = "<generic error, no stack>")),
                        en.doesNotExistError
                    );
                },
                mknod: (e, r, t, n) => en.createNode(e, r, t, n),
                rename(e, r, t) {
                    var n;
                    try {
                        n = eh.lookupNode(r, t);
                    } catch (e) {}
                    if (n && eh.isDir(e.mode)) for (var o in n.contents) throw new eh.ErrnoError(55);
                    (delete e.parent.contents[e.name],
                        (r.contents[t] = e),
                        (e.name = t),
                        (r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now()));
                },
                unlink(e, r) {
                    (delete e.contents[r], (e.ctime = e.mtime = Date.now()));
                },
                rmdir(e, r) {
                    var t = eh.lookupNode(e, r);
                    for (var n in t.contents) throw new eh.ErrnoError(55);
                    (delete e.contents[r], (e.ctime = e.mtime = Date.now()));
                },
                readdir: (e) => [".", "..", ...Object.keys(e.contents)],
                symlink(e, r, t) {
                    var n = en.createNode(e, r, 41471, 0);
                    return ((n.link = t), n);
                },
                readlink(e) {
                    if (!eh.isLink(e.mode)) throw new eh.ErrnoError(28);
                    return e.link;
                },
            },
            stream_ops: {
                read(e, r, t, n, o) {
                    var a = e.node.contents;
                    if (o >= e.node.usedBytes) return 0;
                    var s = Math.min(e.node.usedBytes - o, n);
                    return (r.set(a.subarray(o, o + s), t), s);
                },
                write(e, r, t, n, o, a) {
                    if ((r.buffer === l.buffer && (a = !1), !n)) return 0;
                    var s = e.node;
                    return (
                        (s.mtime = s.ctime = Date.now()),
                        a
                            ? ((s.contents = r.subarray(t, t + n)), (s.usedBytes = n))
                            : s.usedBytes || o
                              ? (en.expandFileStorage(s, o + n),
                                s.contents.set(r.subarray(t, t + n), o),
                                (s.usedBytes = Math.max(s.usedBytes, o + n)))
                              : ((s.contents = r.slice(t, t + n)), (s.usedBytes = n)),
                        n
                    );
                },
                llseek(e, r, t) {
                    var n = r;
                    if (
                        (1 === t ? (n += e.position) : 2 === t && eh.isFile(e.node.mode) && (n += e.node.usedBytes),
                        n < 0)
                    )
                        throw new eh.ErrnoError(28);
                    return n;
                },
                mmap(e, r, t, n, o) {
                    if (!eh.isFile(e.node.mode)) throw new eh.ErrnoError(43);
                    var a,
                        s,
                        i = e.node.contents;
                    if (2 & o || i.buffer !== l.buffer) {
                        if (((s = !0), !(a = et(r)))) throw new eh.ErrnoError(48);
                        i &&
                            ((t > 0 || t + r < i.length) &&
                                (i = i.subarray ? i.subarray(t, t + r) : Array.prototype.slice.call(i, t, t + r)),
                            l.set(i, a));
                    } else ((s = !1), (a = i.byteOffset));
                    return { ptr: a, allocated: s };
                },
                msync: (e, r, t, n, o) => (en.stream_ops.write(e, r, 0, n, t, !1), 0),
            },
        },
        eo = (e) => ("string" == typeof e && (e = Q(e, !0)), e.subarray || (e = new Uint8Array(e)), e),
        ea = (e, r) => {
            var t = 0;
            return (e && (t |= 365), r && (t |= 146), t);
        },
        es = function () {
            for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
            return eh.createDataFile(...r);
        },
        ei = null,
        el = 0,
        eu = null,
        ed = [],
        ec = async (e, r, t, a, s, i, l, u) => {
            var d = r ? q.resolve(L.join2(e, r)) : e;
            (el || (ei = new Promise((e) => (eu = e))), el++, n.monitorRunDependencies?.(el));
            try {
                var c = t;
                ("string" == typeof t && (c = await (async (e) => new Uint8Array(await o(e)))(t)),
                    (c = await (async (e, r) => {
                        for (var t of ("u" > typeof Browser && Browser.init(), ed))
                            if (t.canHandle(r)) return t.handle(e, r);
                        return e;
                    })(c, d)),
                    u?.(),
                    i || es(e, r, c, a, s, l));
            } finally {
                (el--, n.monitorRunDependencies?.(el), el || eu());
            }
        },
        eh = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: [],
            currentPath: "/",
            initialized: !1,
            ignorePermissions: !0,
            filesystems: null,
            syncFSRequests: 0,
            ErrnoError: class {
                name = "ErrnoError";
                constructor(e) {
                    this.errno = e;
                }
            },
            FSStream: class {
                shared = {};
                get object() {
                    return this.node;
                }
                set object(e) {
                    this.node = e;
                }
                get isRead() {
                    return (2097155 & this.flags) != 1;
                }
                get isWrite() {
                    return (2097155 & this.flags) != 0;
                }
                get isAppend() {
                    return 1024 & this.flags;
                }
                get flags() {
                    return this.shared.flags;
                }
                set flags(e) {
                    this.shared.flags = e;
                }
                get position() {
                    return this.shared.position;
                }
                set position(e) {
                    this.shared.position = e;
                }
            },
            FSNode: class {
                node_ops = {};
                stream_ops = {};
                readMode = 365;
                writeMode = 146;
                mounted = null;
                constructor(e, r, t, n) {
                    (e || (e = this),
                        (this.parent = e),
                        (this.mount = e.mount),
                        (this.id = eh.nextInode++),
                        (this.name = r),
                        (this.mode = t),
                        (this.rdev = n),
                        (this.atime = this.mtime = this.ctime = Date.now()));
                }
                get read() {
                    return (this.mode & this.readMode) === this.readMode;
                }
                set read(e) {
                    e ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
                }
                get write() {
                    return (this.mode & this.writeMode) === this.writeMode;
                }
                set write(e) {
                    e ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
                }
                get isFolder() {
                    return eh.isDir(this.mode);
                }
                get isDevice() {
                    return eh.isChrdev(this.mode);
                }
                addListener(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var t = { cb: e, exclusive: r },
                        n = (this.listeners ??= new Set());
                    return (n.add(t), { listeners: n, entry: t });
                }
                notifyListeners(e) {
                    if (this.listeners) {
                        for (var r of this.listeners) r.exclusive ? (t ||= []).push(r) : r.cb(e);
                        if (t) {
                            var t,
                                n = (this.exclTurn || 0) % t.length;
                            ((this.exclTurn = n + 1), t[n].cb(e));
                        }
                    }
                }
            },
            lookupPath(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e) throw new eh.ErrnoError(44);
                ((r.follow_mount ??= !0), L.isAbs(e) || (e = eh.cwd() + "/" + e));
                e: for (var t = 0; t < 40; t++) {
                    for (var n = e.split("/").filter((e) => !!e), o = eh.root, a = "/", s = 0; s < n.length; s++) {
                        var i = s === n.length - 1;
                        if (i && r.parent) break;
                        if ("." !== n[s]) {
                            if (".." === n[s]) {
                                if (((a = L.dirname(a)), eh.isRoot(o))) {
                                    ((e = a + "/" + n.slice(s + 1).join("/")), t--);
                                    continue e;
                                }
                                o = o.parent;
                                continue;
                            }
                            a = L.join2(a, n[s]);
                            try {
                                o = eh.lookupNode(o, n[s]);
                            } catch (e) {
                                if (e?.errno === 44 && i && r.noent_okay) return { path: a };
                                throw e;
                            }
                            if (
                                (eh.isMountpoint(o) && (!i || r.follow_mount) && (o = o.mounted.root),
                                eh.isLink(o.mode) && (!i || r.follow))
                            ) {
                                if (!o.node_ops.readlink) throw new eh.ErrnoError(52);
                                var l = o.node_ops.readlink(o);
                                (L.isAbs(l) || (l = L.dirname(a) + "/" + l), (e = l + "/" + n.slice(s + 1).join("/")));
                                continue e;
                            }
                        }
                    }
                    return { path: a, node: o };
                }
                throw new eh.ErrnoError(32);
            },
            getPath(e) {
                for (var r; ;) {
                    if (eh.isRoot(e)) {
                        var t = e.mount.mountpoint;
                        if (!r) return t;
                        return "/" !== t[t.length - 1] ? `${t}/${r}` : t + r;
                    }
                    ((r = r ? `${e.name}/${r}` : e.name), (e = e.parent));
                }
            },
            hashName(e, r) {
                for (var t = 0, n = 0; n < r.length; n++) t = ((t << 5) - t + r.charCodeAt(n)) | 0;
                return ((e + t) >>> 0) % eh.nameTable.length;
            },
            hashAddNode(e) {
                var r = eh.hashName(e.parent.id, e.name);
                ((e.name_next = eh.nameTable[r]), (eh.nameTable[r] = e));
            },
            hashRemoveNode(e) {
                var r = eh.hashName(e.parent.id, e.name);
                if (eh.nameTable[r] === e) eh.nameTable[r] = e.name_next;
                else
                    for (var t = eh.nameTable[r]; t;) {
                        if (t.name_next === e) {
                            t.name_next = e.name_next;
                            break;
                        }
                        t = t.name_next;
                    }
            },
            lookupNode(e, r) {
                var t = eh.mayLookup(e);
                if (t) throw new eh.ErrnoError(t);
                for (var n = eh.hashName(e.id, r), o = eh.nameTable[n]; o; o = o.name_next) {
                    var a = o.name;
                    if (o.parent.id === e.id && a === r) return o;
                }
                return eh.lookup(e, r);
            },
            createNode(e, r, t, n) {
                var o = new eh.FSNode(e, r, t, n);
                return (eh.hashAddNode(o), o);
            },
            destroyNode(e) {
                eh.hashRemoveNode(e);
            },
            isRoot: (e) => e === e.parent,
            isMountpoint: (e) => !!e.mounted,
            isFile: (e) => (61440 & e) == 32768,
            isDir: (e) => (61440 & e) == 16384,
            isLink: (e) => (61440 & e) == 40960,
            isChrdev: (e) => (61440 & e) == 8192,
            isBlkdev: (e) => (61440 & e) == 24576,
            isFIFO: (e) => (61440 & e) == 4096,
            isSocket: (e) => (49152 & e) == 49152,
            flagsToPermissionString(e) {
                var r = ["r", "w", "rw"][3 & e];
                return (512 & e && (r += "w"), r);
            },
            nodePermissions: (e, r) =>
                eh.ignorePermissions
                    ? 0
                    : (r.includes("r") && !(292 & e.mode)) ||
                        (r.includes("w") && !(146 & e.mode)) ||
                        (r.includes("x") && !(73 & e.mode))
                      ? 2
                      : 0,
            mayLookup(e) {
                if (!eh.isDir(e.mode)) return 54;
                var r = eh.nodePermissions(e, "x");
                return r || 2 * !e.node_ops.lookup;
            },
            mayCreate(e, r) {
                if (!eh.isDir(e.mode)) return 54;
                try {
                    return (eh.lookupNode(e, r), 20);
                } catch (e) {}
                return eh.nodePermissions(e, "wx");
            },
            mayDelete(e, r, t) {
                try {
                    n = eh.lookupNode(e, r);
                } catch (e) {
                    return e.errno;
                }
                var n,
                    o = eh.nodePermissions(e, "wx");
                if (o) return o;
                if (t) {
                    if (!eh.isDir(n.mode)) return 54;
                    if (eh.isRoot(n) || eh.getPath(n) === eh.cwd()) return 10;
                } else if (eh.isDir(n.mode)) return 31;
                return 0;
            },
            mayOpen(e, r) {
                if (!e) return 44;
                if (eh.isLink(e.mode)) return 32;
                var t = eh.flagsToPermissionString(r);
                return eh.isDir(e.mode) && ("r" !== t || 576 & r) ? 31 : eh.nodePermissions(e, t);
            },
            checkOpExists(e, r) {
                if (!e) throw new eh.ErrnoError(r);
                return e;
            },
            MAX_OPEN_FDS: 4096,
            nextfd() {
                for (var e = 0; e <= eh.MAX_OPEN_FDS; e++) if (!eh.streams[e]) return e;
                throw new eh.ErrnoError(33);
            },
            getStreamChecked(e) {
                var r = eh.getStream(e);
                if (!r) throw new eh.ErrnoError(8);
                return r;
            },
            getStream: (e) => eh.streams[e],
            createStream(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                return (
                    (e = Object.assign(new eh.FSStream(), e)),
                    -1 == r && (r = eh.nextfd()),
                    (e.fd = r),
                    (eh.streams[r] = e),
                    e
                );
            },
            closeStream(e) {
                eh.streams[e] = null;
            },
            dupStream(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                var t = eh.createStream(e, r);
                return (t.stream_ops?.dup?.(t), t);
            },
            doSetAttr(e, r, t) {
                var n = e?.stream_ops.setattr,
                    o = n ? e : r;
                ((n ??= r.node_ops.setattr), eh.checkOpExists(n, 63));
                try {
                    n(o, t);
                } catch (e) {
                    if (e instanceof RangeError) throw new eh.ErrnoError(22);
                    throw e;
                }
            },
            chrdev_stream_ops: {
                open(e) {
                    var r = eh.getDevice(e.node.rdev);
                    ((e.stream_ops = r.stream_ops), e.stream_ops.open?.(e));
                },
                llseek() {
                    throw new eh.ErrnoError(70);
                },
            },
            major: (e) => e >> 8,
            minor: (e) => 255 & e,
            makedev: (e, r) => (e << 8) | r,
            registerDevice(e, r) {
                eh.devices[e] = { stream_ops: r };
            },
            getDevice: (e) => eh.devices[e],
            getMounts(e) {
                for (var r = [], t = [e]; t.length;) {
                    var n = t.pop();
                    (r.push(n), t.push(...n.mounts));
                }
                return r;
            },
            syncfs(e, r) {
                ("function" == typeof e && ((r = e), (e = !1)),
                    eh.syncFSRequests++,
                    eh.syncFSRequests > 1 &&
                        M(
                            `warning: ${eh.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
                        ));
                var t = eh.getMounts(eh.root.mount),
                    n = 0;
                function o(e) {
                    return (eh.syncFSRequests--, r(e));
                }
                function a(e) {
                    if (e) return a.errored ? void 0 : ((a.errored = !0), o(e));
                    ++n >= t.length && o(null);
                }
                for (var s of t) s.type.syncfs ? s.type.syncfs(s, e, a) : a(null);
            },
            mount(e, r, t) {
                var n,
                    o = "/" === t,
                    a = !t;
                if (o && eh.root) throw new eh.ErrnoError(10);
                if (!o && !a) {
                    var s = eh.lookupPath(t, { follow_mount: !1 });
                    if (((t = s.path), (n = s.node), eh.isMountpoint(n))) throw new eh.ErrnoError(10);
                    if (!eh.isDir(n.mode)) throw new eh.ErrnoError(54);
                }
                var i = { type: e, opts: r, mountpoint: t, mounts: [] },
                    l = e.mount(i);
                return (
                    (l.mount = i),
                    (i.root = l),
                    o ? (eh.root = l) : n && ((n.mounted = i), n.mount && n.mount.mounts.push(i)),
                    l
                );
            },
            unmount(e) {
                var r = eh.lookupPath(e, { follow_mount: !1 });
                if (!eh.isMountpoint(r.node)) throw new eh.ErrnoError(28);
                var t = r.node,
                    n = t.mounted,
                    o = eh.getMounts(n);
                for (var [a, s] of Object.entries(eh.nameTable))
                    for (; s;) {
                        var i = s.name_next;
                        (o.includes(s.mount) && eh.destroyNode(s), (s = i));
                    }
                t.mounted = null;
                var l = t.mount.mounts.indexOf(n);
                t.mount.mounts.splice(l, 1);
            },
            lookup: (e, r) => e.node_ops.lookup(e, r),
            mknod(e, r, t) {
                var n = eh.lookupPath(e, { parent: !0 }).node,
                    o = L.basename(e);
                if (!o) throw new eh.ErrnoError(28);
                if ("." === o || ".." === o) throw new eh.ErrnoError(20);
                var a = eh.mayCreate(n, o);
                if (a) throw new eh.ErrnoError(a);
                if (!n.node_ops.mknod) throw new eh.ErrnoError(63);
                return n.node_ops.mknod(n, o, r, t);
            },
            statfs: (e) => eh.statfsNode(eh.lookupPath(e, { follow: !0 }).node),
            statfsStream: (e) => eh.statfsNode(e.node),
            statfsNode(e) {
                var r = {
                    bsize: 4096,
                    frsize: 4096,
                    blocks: 1e6,
                    bfree: 5e5,
                    bavail: 5e5,
                    files: eh.nextInode,
                    ffree: eh.nextInode - 1,
                    fsid: 42,
                    flags: 2,
                    namelen: 255,
                };
                return (e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r);
            },
            create(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 438;
                return ((r &= 4095), (r |= 32768), eh.mknod(e, r, 0));
            },
            mkdir(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                return ((r &= 1023), (r |= 16384), eh.mknod(e, r, 0));
            },
            mkdirTree(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                var t = e.split("/"),
                    n = "";
                for (var o of t)
                    if (o) {
                        ((n || L.isAbs(e)) && (n += "/"), (n += o));
                        try {
                            eh.mkdir(n, r);
                        } catch (e) {
                            if (20 != e.errno) throw e;
                        }
                    }
            },
            mkdev: (e, r, t) => (void 0 === t && ((t = r), (r = 438)), (r |= 8192), eh.mknod(e, r, t)),
            symlink(e, r) {
                if (!q.resolve(e)) throw new eh.ErrnoError(44);
                var t = eh.lookupPath(r, { parent: !0 }).node;
                if (!t) throw new eh.ErrnoError(44);
                var n = L.basename(r),
                    o = eh.mayCreate(t, n);
                if (o) throw new eh.ErrnoError(o);
                if (!t.node_ops.symlink) throw new eh.ErrnoError(63);
                return t.node_ops.symlink(t, n, e);
            },
            link(e, r, t) {
                var n = eh.lookupPath(r, { parent: !0 }).node;
                if (!n) throw new eh.ErrnoError(44);
                var o = L.basename(r),
                    a = eh.mayCreate(n, o);
                if (a) throw new eh.ErrnoError(a);
                if (!n.node_ops.link) throw new eh.ErrnoError(34);
                return n.node_ops.link(n, o, e, t);
            },
            rename(e, r) {
                var t,
                    n,
                    o,
                    a = L.dirname(e),
                    s = L.dirname(r),
                    i = L.basename(e),
                    l = L.basename(r);
                if (
                    ((t = eh.lookupPath(e, { parent: !0 }).node), (n = eh.lookupPath(r, { parent: !0 }).node), !t || !n)
                )
                    throw new eh.ErrnoError(44);
                if (t.mount !== n.mount) throw new eh.ErrnoError(75);
                var u = eh.lookupNode(t, i),
                    d = q.relative(e, s);
                if ("." !== d.charAt(0)) throw new eh.ErrnoError(28);
                if ("." !== (d = q.relative(r, a)).charAt(0)) throw new eh.ErrnoError(55);
                try {
                    o = eh.lookupNode(n, l);
                } catch (e) {}
                if (u !== o) {
                    var c = eh.isDir(u.mode),
                        h = eh.mayDelete(t, i, c);
                    if (h || (h = o ? eh.mayDelete(n, l, c) : eh.mayCreate(n, l))) throw new eh.ErrnoError(h);
                    if (!t.node_ops.rename) throw new eh.ErrnoError(63);
                    if (eh.isMountpoint(u) || (o && eh.isMountpoint(o))) throw new eh.ErrnoError(10);
                    if (n !== t && (h = eh.nodePermissions(t, "w"))) throw new eh.ErrnoError(h);
                    eh.hashRemoveNode(u);
                    try {
                        (t.node_ops.rename(u, n, l), o && eh.hashRemoveNode(o), (u.parent = n));
                    } catch (e) {
                        throw e;
                    } finally {
                        eh.hashAddNode(u);
                    }
                }
            },
            rmdir(e) {
                var r = eh.lookupPath(e, { parent: !0 }).node,
                    t = L.basename(e),
                    n = eh.lookupNode(r, t),
                    o = eh.mayDelete(r, t, !0);
                if (o) throw new eh.ErrnoError(o);
                if (!r.node_ops.rmdir) throw new eh.ErrnoError(63);
                if (eh.isMountpoint(n)) throw new eh.ErrnoError(10);
                (r.node_ops.rmdir(r, t), eh.destroyNode(n));
            },
            readdir(e) {
                var r = eh.lookupPath(e, { follow: !0 }).node;
                return eh.checkOpExists(r.node_ops.readdir, 54)(r);
            },
            unlink(e) {
                var r = eh.lookupPath(e, { parent: !0 }).node;
                if (!r) throw new eh.ErrnoError(44);
                var t = L.basename(e),
                    n = eh.lookupNode(r, t),
                    o = eh.mayDelete(r, t, !1);
                if (o) throw new eh.ErrnoError(o);
                if (!r.node_ops.unlink) throw new eh.ErrnoError(63);
                if (eh.isMountpoint(n)) throw new eh.ErrnoError(10);
                (r.node_ops.unlink(r, t), eh.destroyNode(n));
            },
            readlink(e) {
                var r = eh.lookupPath(e).node;
                if (!r) throw new eh.ErrnoError(44);
                if (!r.node_ops.readlink) throw new eh.ErrnoError(28);
                return r.node_ops.readlink(r);
            },
            stat(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var t = eh.lookupPath(e, { follow: !r }).node;
                return eh.checkOpExists(t.node_ops.getattr, 63)(t);
            },
            fstat(e) {
                var r = eh.getStreamChecked(e),
                    t = r.node,
                    n = r.stream_ops.getattr,
                    o = n ? r : t;
                return ((n ??= t.node_ops.getattr), eh.checkOpExists(n, 63), n(o));
            },
            lstat: (e) => eh.stat(e, !0),
            doChmod(e, r, t) {
                let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                eh.doSetAttr(e, r, { mode: (4095 & t) | (-4096 & r.mode), ctime: Date.now(), dontFollow: n });
            },
            chmod(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("string" == typeof e) {
                    var n;
                    n = eh.lookupPath(e, { follow: !t }).node;
                } else n = e;
                eh.doChmod(null, n, r, t);
            },
            lchmod(e, r) {
                eh.chmod(e, r, !0);
            },
            fchmod(e, r) {
                var t = eh.getStreamChecked(e);
                eh.doChmod(t, t.node, r, !1);
            },
            doChown(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                eh.doSetAttr(e, r, { timestamp: Date.now(), dontFollow: t });
            },
            chown(e, r, t) {
                let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if ("string" == typeof e) {
                    var o;
                    o = eh.lookupPath(e, { follow: !n }).node;
                } else o = e;
                eh.doChown(null, o, n);
            },
            lchown(e, r, t) {
                eh.chown(e, r, t, !0);
            },
            fchown(e, r, t) {
                var n = eh.getStreamChecked(e);
                eh.doChown(n, n.node, !1);
            },
            doTruncate(e, r, t) {
                if (eh.isDir(r.mode)) throw new eh.ErrnoError(31);
                if (!eh.isFile(r.mode)) throw new eh.ErrnoError(28);
                var n = eh.nodePermissions(r, "w");
                if (n) throw new eh.ErrnoError(n);
                eh.doSetAttr(e, r, { size: t, timestamp: Date.now() });
            },
            truncate(e, r) {
                if (r < 0) throw new eh.ErrnoError(28);
                if ("string" == typeof e) {
                    var t;
                    t = eh.lookupPath(e, { follow: !0 }).node;
                } else t = e;
                eh.doTruncate(null, t, r);
            },
            ftruncate(e, r) {
                var t = eh.getStreamChecked(e);
                if (r < 0 || (2097155 & t.flags) == 0) throw new eh.ErrnoError(28);
                eh.doTruncate(t, t.node, r);
            },
            utime(e, r, t) {
                let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                var o = eh.lookupPath(e, { follow: !n });
                eh.doSetAttr(null, o.node, { atime: r, mtime: t, dontFollow: n });
            },
            open(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 438;
                if ("" === e) throw new eh.ErrnoError(44);
                if (
                    ((t =
                        64 &
                        (r = ((e) => {
                            if ("string" != typeof e) return e;
                            var r = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[e];
                            if (void 0 === r) throw Error(`Unknown file open mode: ${e}`);
                            return r;
                        })(r))
                            ? (4095 & t) | 32768
                            : 0),
                    "object" == typeof e)
                )
                    n = e;
                else {
                    var n,
                        o = e.endsWith("/"),
                        a = eh.lookupPath(e, { follow: !(131072 & r), noent_okay: !0 });
                    ((n = a.node), (e = a.path));
                }
                var s = !1;
                if (64 & r)
                    if (n) {
                        if (128 & r) throw new eh.ErrnoError(20);
                    } else if (o) throw new eh.ErrnoError(31);
                    else ((n = eh.mknod(e, 511 | t, 0)), (s = !0));
                if (!n) throw new eh.ErrnoError(44);
                if ((eh.isChrdev(n.mode) && (r &= -513), 65536 & r && !eh.isDir(n.mode))) throw new eh.ErrnoError(54);
                if (!s) {
                    var i = eh.mayOpen(n, r);
                    if (i) throw new eh.ErrnoError(i);
                }
                (512 & r && !s && eh.truncate(n, 0), (r &= -131713));
                var l = eh.createStream({
                    node: n,
                    path: eh.getPath(n),
                    flags: r,
                    seekable: !0,
                    position: 0,
                    stream_ops: n.stream_ops,
                    ungotten: [],
                    error: !1,
                });
                return (l.stream_ops.open && l.stream_ops.open(l), s && eh.chmod(n, 511 & t), l);
            },
            close(e) {
                if (eh.isClosed(e)) throw new eh.ErrnoError(8);
                (e.getdents && (e.getdents = null), e.node?.notifyListeners(32));
                try {
                    e.stream_ops.close && e.stream_ops.close(e);
                } catch (e) {
                    throw e;
                } finally {
                    eh.closeStream(e.fd);
                }
                e.fd = null;
            },
            isClosed: (e) => null === e.fd,
            llseek(e, r, t) {
                if (eh.isClosed(e)) throw new eh.ErrnoError(8);
                if (!e.seekable || !e.stream_ops.llseek) throw new eh.ErrnoError(70);
                if (0 != t && 1 != t && 2 != t) throw new eh.ErrnoError(28);
                return ((e.position = e.stream_ops.llseek(e, r, t)), (e.ungotten = []), e.position);
            },
            read(e, r, t, n, o) {
                if (n < 0 || o < 0) throw new eh.ErrnoError(28);
                if (eh.isClosed(e) || (2097155 & e.flags) == 1) throw new eh.ErrnoError(8);
                if (eh.isDir(e.node.mode)) throw new eh.ErrnoError(31);
                if (!e.stream_ops.read) throw new eh.ErrnoError(28);
                var a = void 0 !== o;
                if (a) {
                    if (!e.seekable) throw new eh.ErrnoError(70);
                } else o = e.position;
                var s = e.stream_ops.read(e, r, t, n, o);
                return (a || (e.position += s), s);
            },
            write(e, r, t, n, o, a) {
                if (n < 0 || o < 0) throw new eh.ErrnoError(28);
                if (eh.isClosed(e) || (2097155 & e.flags) == 0) throw new eh.ErrnoError(8);
                if (eh.isDir(e.node.mode)) throw new eh.ErrnoError(31);
                if (!e.stream_ops.write) throw new eh.ErrnoError(28);
                e.seekable && 1024 & e.flags && eh.llseek(e, 0, 2);
                var s = void 0 !== o;
                if (s) {
                    if (!e.seekable) throw new eh.ErrnoError(70);
                } else o = e.position;
                var i = e.stream_ops.write(e, r, t, n, o, a);
                return (s || (e.position += i), i);
            },
            mmap(e, r, t, n, o) {
                if ((2 & n && !(2 & o) && (2097155 & e.flags) != 2) || (2097155 & e.flags) == 1)
                    throw new eh.ErrnoError(2);
                if (!e.stream_ops.mmap) throw new eh.ErrnoError(43);
                if (!r) throw new eh.ErrnoError(28);
                return e.stream_ops.mmap(e, r, t, n, o);
            },
            msync: (e, r, t, n, o) => (e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0),
            ioctl(e, r, t) {
                if (!e.stream_ops.ioctl) throw new eh.ErrnoError(59);
                return e.stream_ops.ioctl(e, r, t);
            },
            readFile(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ((r.flags ??= 0),
                    (r.encoding ??= "binary"),
                    "utf8" !== r.encoding && "binary" !== r.encoding && j(`Invalid encoding type "${r.encoding}"`));
                var t = eh.open(e, r.flags),
                    n = eh.stat(e).size,
                    o = new Uint8Array(n);
                return (eh.read(t, o, 0, n, 0), "utf8" === r.encoding && (o = K(o)), eh.close(t), o);
            },
            writeFile(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                t.flags ??= 577;
                var n = eh.open(e, t.flags, t.mode);
                ((r = eo(r)), eh.write(n, r, 0, r.byteLength, void 0, t.canOwn), eh.close(n));
            },
            cwd: () => eh.currentPath,
            chdir(e) {
                var r = eh.lookupPath(e, { follow: !0 });
                if (null === r.node) throw new eh.ErrnoError(44);
                if (!eh.isDir(r.node.mode)) throw new eh.ErrnoError(54);
                var t = eh.nodePermissions(r.node, "x");
                if (t) throw new eh.ErrnoError(t);
                eh.currentPath = r.path;
            },
            createDefaultDirectories() {
                (eh.mkdir("/tmp"), eh.mkdir("/home"), eh.mkdir("/home/web_user"));
            },
            createDefaultDevices() {
                (eh.mkdir("/dev"),
                    eh.registerDevice(eh.makedev(1, 3), {
                        read: () => 0,
                        write: (e, r, t, n, o) => n,
                        llseek: () => 0,
                    }),
                    eh.mkdev("/dev/null", eh.makedev(1, 3)),
                    ee.register(eh.makedev(5, 0), ee.default_tty_ops),
                    ee.register(eh.makedev(6, 0), ee.default_tty1_ops),
                    eh.mkdev("/dev/tty", eh.makedev(5, 0)),
                    eh.mkdev("/dev/tty1", eh.makedev(6, 0)));
                var e = new Uint8Array(1024),
                    r = 0,
                    t = () => (r || (H(e), (r = e.byteLength)), e[--r]);
                (eh.createDevice("/dev", "random", t),
                    eh.createDevice("/dev", "urandom", t),
                    eh.mkdir("/dev/shm"),
                    eh.mkdir("/dev/shm/tmp"));
            },
            createSpecialDirectories() {
                eh.mkdir("/proc");
                var e = eh.mkdir("/proc/self");
                (eh.mkdir("/proc/self/fd"),
                    eh.mount(
                        {
                            mount() {
                                var r = eh.createNode(e, "fd", 16895, 73);
                                return (
                                    (r.stream_ops = { llseek: en.stream_ops.llseek }),
                                    (r.node_ops = {
                                        lookup(e, r) {
                                            var t = +r,
                                                n = eh.getStreamChecked(t),
                                                o = {
                                                    parent: null,
                                                    mount: { mountpoint: "fake" },
                                                    node_ops: { readlink: () => n.path },
                                                    id: t + 1,
                                                };
                                            return ((o.parent = o), o);
                                        },
                                        readdir: () =>
                                            Array.from(eh.streams.entries())
                                                .filter((e) => {
                                                    let [r, t] = e;
                                                    return t;
                                                })
                                                .map((e) => {
                                                    let [r, t] = e;
                                                    return r.toString();
                                                }),
                                    }),
                                    r
                                );
                            },
                        },
                        {},
                        "/proc/self/fd",
                    ));
            },
            createStandardStreams(e, r, t) {
                (e ? eh.createDevice("/dev", "stdin", e) : eh.symlink("/dev/tty", "/dev/stdin"),
                    r ? eh.createDevice("/dev", "stdout", null, r) : eh.symlink("/dev/tty", "/dev/stdout"),
                    t ? eh.createDevice("/dev", "stderr", null, t) : eh.symlink("/dev/tty1", "/dev/stderr"),
                    eh.open("/dev/stdin", 0),
                    eh.open("/dev/stdout", 1),
                    eh.open("/dev/stderr", 1));
            },
            staticInit() {
                ((eh.nameTable.length = 4096),
                    eh.mount(en, {}, "/"),
                    eh.createDefaultDirectories(),
                    eh.createDefaultDevices(),
                    eh.createSpecialDirectories(),
                    (eh.filesystems = { MEMFS: en }));
            },
            init(e, r, t) {
                ((eh.initialized = !0),
                    (e ??= n.stdin),
                    (r ??= n.stdout),
                    (t ??= n.stderr),
                    eh.createStandardStreams(e, r, t));
            },
            quit() {
                for (var e of ((eh.initialized = !1), eh.streams)) e && eh.close(e);
            },
            analyzePath(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                try {
                    var t = eh.lookupPath(e, { follow: !r });
                    e = t.path;
                } catch (e) {}
                var n = {
                    isRoot: !1,
                    exists: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: !1,
                    parentPath: null,
                    parentObject: null,
                };
                try {
                    var t = eh.lookupPath(e, { parent: !0 });
                    ((n.parentExists = !0),
                        (n.parentPath = t.path),
                        (n.parentObject = t.node),
                        (n.name = L.basename(e)),
                        (t = eh.lookupPath(e, { follow: !r })),
                        (n.exists = !0),
                        (n.path = t.path),
                        (n.object = t.node),
                        (n.name = t.node.name),
                        (n.isRoot = "/" === t.path));
                } catch (e) {
                    n.error = e.errno;
                }
                return n;
            },
            createPath(e, r, t, n) {
                e = "string" == typeof e ? e : eh.getPath(e);
                for (var o = r.split("/").reverse(); o.length;) {
                    var a = o.pop();
                    if (a) {
                        var s = L.join2(e, a);
                        try {
                            eh.mkdir(s);
                        } catch (e) {
                            if (20 != e.errno) throw e;
                        }
                        e = s;
                    }
                }
                return s;
            },
            createFile(e, r, t, n, o) {
                var a = L.join2("string" == typeof e ? e : eh.getPath(e), r),
                    s = ea(n, o);
                return eh.create(a, s);
            },
            createDataFile(e, r, t, n, o, a) {
                var s = r;
                e && ((e = "string" == typeof e ? e : eh.getPath(e)), (s = r ? L.join2(e, r) : e));
                var i = ea(n, o),
                    l = eh.create(s, i);
                if (t) {
                    ((t = eo(t)), eh.chmod(l, 146 | i));
                    var u = eh.open(l, 577);
                    (eh.write(u, t, 0, t.length, 0, a), eh.close(u), eh.chmod(l, i));
                }
            },
            createDevice(e, r, t, n) {
                var o = L.join2("string" == typeof e ? e : eh.getPath(e), r),
                    a = ea(!!t, !!n);
                eh.createDevice.major ??= 64;
                var s = eh.makedev(eh.createDevice.major++, 0);
                return (
                    eh.registerDevice(s, {
                        open(e) {
                            e.seekable = !1;
                        },
                        close(e) {
                            n?.buffer?.length && n(10);
                        },
                        read(e, r, n, o, a) {
                            for (var s, i = 0, l = 0; l < o; l++) {
                                try {
                                    s = t();
                                } catch (e) {
                                    throw new eh.ErrnoError(29);
                                }
                                if (void 0 === s && !i) throw new eh.ErrnoError(6);
                                if (null == s) break;
                                (i++, (r[n + l] = s));
                            }
                            return (i && (e.node.atime = Date.now()), i);
                        },
                        write(e, r, t, o, a) {
                            for (var s = 0; s < o; s++)
                                try {
                                    n(r[t + s]);
                                } catch (e) {
                                    throw new eh.ErrnoError(29);
                                }
                            return (o && (e.node.mtime = e.node.ctime = Date.now()), s);
                        },
                    }),
                    eh.mkdev(o, a, s)
                );
            },
            forceLoadFile(e) {
                if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                if (globalThis.XMLHttpRequest)
                    j(
                        "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                    );
                else
                    try {
                        e.contents = a(e.url);
                    } catch (e) {
                        throw new eh.ErrnoError(29);
                    }
            },
            createLazyFile(e, r, t, n, o) {
                if (globalThis.XMLHttpRequest) {
                    j(
                        "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc",
                    );
                    var a = {
                        isDevice: !1,
                        contents: new (class {
                            lengthKnown = !1;
                            chunks = [];
                            get(e) {
                                if (!(e > this.length - 1) && !(e < 0)) {
                                    var r = e % this.chunkSize,
                                        t = (e / this.chunkSize) | 0;
                                    return this.getter(t)[r];
                                }
                            }
                            setDataGetter(e) {
                                this.getter = e;
                            }
                            cacheLength() {
                                var e,
                                    r = new XMLHttpRequest();
                                (r.open("HEAD", t, !1),
                                    r.send(null),
                                    (r.status >= 200 && r.status < 300) ||
                                        304 === r.status ||
                                        j(`Couldn't load ${t}. Status: ${r.status}`));
                                var n = Number(r.getResponseHeader("Content-length")),
                                    o = (e = r.getResponseHeader("Accept-Ranges")) && "bytes" === e,
                                    a = (e = r.getResponseHeader("Content-Encoding")) && "gzip" === e,
                                    s = 1048576;
                                o || (s = n);
                                var i = this;
                                (i.setDataGetter((e) => {
                                    var r,
                                        o,
                                        a = e * s,
                                        l = (e + 1) * s - 1;
                                    return (
                                        (l = Math.min(l, n - 1)),
                                        void 0 === i.chunks[e] &&
                                            (i.chunks[e] =
                                                (a > (r = l) && j(`invalid range (${a}, ${r}) or no bytes requested!`),
                                                r > n - 1 && j(`only ${n} bytes available! programmer error!`),
                                                ((o = new XMLHttpRequest()).open("GET", t, !1),
                                                n !== s && o.setRequestHeader("Range", `bytes=${a}-${r}`),
                                                (o.responseType = "arraybuffer"),
                                                o.overrideMimeType &&
                                                    o.overrideMimeType("text/plain; charset=x-user-defined"),
                                                o.send(null),
                                                (o.status >= 200 && o.status < 300) ||
                                                    304 === o.status ||
                                                    j(`Couldn't load ${t}. Status: ${o.status}`),
                                                void 0 !== o.response)
                                                    ? new Uint8Array(o.response || [])
                                                    : Q(o.responseText ?? "", !0))),
                                        void 0 === i.chunks[e] && j("doXHR failed!"),
                                        i.chunks[e]
                                    );
                                }),
                                    (a || !n) &&
                                        ((s = n = 1),
                                        (s = n = this.getter(0).length),
                                        A(
                                            "LazyFiles on gzip forces download of the whole file when length is accessed",
                                        )),
                                    (this._length = n),
                                    (this._chunkSize = s),
                                    (this.lengthKnown = !0));
                            }
                            get length() {
                                return (this.lengthKnown || this.cacheLength(), this._length);
                            }
                            get chunkSize() {
                                return (this.lengthKnown || this.cacheLength(), this._chunkSize);
                            }
                        })(),
                    };
                } else var a = { isDevice: !1, url: t };
                var s = eh.createFile(e, r, a, n, o);
                (a.contents ? (s.contents = a.contents) : a.url && ((s.contents = null), (s.url = a.url)),
                    Object.defineProperties(s, {
                        usedBytes: {
                            get: function () {
                                return this.contents.length;
                            },
                        },
                    }));
                var i = {};
                for (let [e, r] of Object.entries(s.stream_ops))
                    i[e] = function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return (eh.forceLoadFile(s), r(...t));
                    };
                function u(e, r, t, n, o) {
                    var a = e.node.contents;
                    if (o >= a.length) return 0;
                    var s = Math.min(a.length - o, n);
                    if (a.slice) for (var i = 0; i < s; i++) r[t + i] = a[o + i];
                    else for (var i = 0; i < s; i++) r[t + i] = a.get(o + i);
                    return s;
                }
                return (
                    (i.read = (e, r, t, n, o) => (eh.forceLoadFile(s), u(e, r, t, n, o))),
                    (i.mmap = (e, r, t, n, o) => {
                        eh.forceLoadFile(s);
                        var a = et(r);
                        if (!a) throw new eh.ErrnoError(48);
                        return (u(e, l, a, r, t), { ptr: a, allocated: !0 });
                    }),
                    (s.stream_ops = i),
                    s
                );
            },
        },
        ef = (e, r, t) => (e ? K(c, e, r, t) : ""),
        ep = {
            currentUmask: 18,
            calculateAt(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (L.isAbs(r)) return r;
                if (-100 === e) n = eh.cwd();
                else {
                    var n;
                    n = ep.getStreamFromFD(e).path;
                }
                if (0 == r.length) {
                    if (!t) throw new eh.ErrnoError(44);
                    return n;
                }
                return n + "/" + r;
            },
            writeStat(e, r) {
                ((u[e >> 2] = r.dev),
                    (u[(e + 4) >> 2] = r.mode),
                    (u[(e + 8) >> 2] = r.nlink),
                    (u[(e + 12) >> 2] = r.uid),
                    (u[(e + 16) >> 2] = r.gid),
                    (u[(e + 20) >> 2] = r.rdev),
                    (h[(e + 24) >> 3] = BigInt(r.size)),
                    (d[(e + 32) >> 2] = 4096),
                    (d[(e + 36) >> 2] = r.blocks));
                var t = r.atimeMs ?? r.atime.getTime(),
                    n = r.mtimeMs ?? r.mtime.getTime(),
                    o = r.ctimeMs ?? r.ctime.getTime();
                return (
                    (h[(e + 40) >> 3] = BigInt(Math.floor(t / 1e3))),
                    (u[(e + 48) >> 2] = Math.floor((t % 1e3) * 1e6)),
                    (h[(e + 56) >> 3] = BigInt(Math.floor(n / 1e3))),
                    (u[(e + 64) >> 2] = Math.floor((n % 1e3) * 1e6)),
                    (h[(e + 72) >> 3] = BigInt(Math.floor(o / 1e3))),
                    (u[(e + 80) >> 2] = Math.floor((o % 1e3) * 1e6)),
                    (h[(e + 88) >> 3] = BigInt(r.ino)),
                    0
                );
            },
            writeStatFs(e, r) {
                ((u[(e + 4) >> 2] = r.bsize),
                    (u[(e + 60) >> 2] = r.bsize),
                    (h[(e + 8) >> 3] = BigInt(r.blocks)),
                    (h[(e + 16) >> 3] = BigInt(r.bfree)),
                    (h[(e + 24) >> 3] = BigInt(r.bavail)),
                    (h[(e + 32) >> 3] = BigInt(r.files)),
                    (h[(e + 40) >> 3] = BigInt(r.ffree)),
                    (u[(e + 48) >> 2] = r.fsid),
                    (u[(e + 64) >> 2] = r.flags),
                    (u[(e + 56) >> 2] = r.namelen));
            },
            doMsync(e, r, t, n, o) {
                if (!eh.isFile(r.node.mode)) throw new eh.ErrnoError(43);
                if (2 & n) return 0;
                var a = c.subarray(e, e + t);
                eh.msync(r, a, o, t, n);
            },
            getStreamFromFD: (e) => eh.getStreamChecked(e),
            varargs: void 0,
            getStr: (e) => ef(e),
        },
        em = (e, r, t) => J(e, c, r, t),
        ev = (e) => {
            for (var r = ""; ;) {
                var t = c[e++];
                if (!t) return r;
                r += String.fromCharCode(t);
            }
        },
        eg = {},
        ew = {},
        ey = {};
    class eE extends Error {
        constructor(e) {
            (super(e), (this.name = "BindingError"));
        }
    }
    var eb = (e) => {
        throw new eE(e);
    };
    function ek(e, r) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (function (e, r) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            var n = r.name;
            if ((e || eb(`type "${n}" must have a positive integer typeid pointer`), ew.hasOwnProperty(e)))
                if (t.ignoreDuplicateRegistrations) return;
                else eb(`Cannot register type '${n}' twice`);
            if (((ew[e] = r), delete ey[e], eg.hasOwnProperty(e))) {
                var o = eg[e];
                (delete eg[e], o.forEach((e) => e()));
            }
        })(e, r, t);
    }
    var e$ = (e, r, t) => {
            switch (r) {
                case 1:
                    return t ? (e) => l[e] : (e) => c[e];
                case 2:
                    return t ? (e) => f[e >> 1] : (e) => p[e >> 1];
                case 4:
                    return t ? (e) => d[e >> 2] : (e) => u[e >> 2];
                case 8:
                    return t ? (e) => h[e >> 3] : (e) => m[e >> 3];
                default:
                    throw TypeError(`invalid integer width (${r}): ${e}`);
            }
        },
        e_ = (e) => {
            eb(e.$$.ptrType.registeredClass.name + " instance already deleted");
        },
        eT = !1,
        eP = (e) => {},
        eC = (e) => {
            ((e.count.value -= 1),
                0 === e.count.value &&
                    (e.smartPtr
                        ? e.smartPtrType.rawDestructor(e.smartPtr)
                        : e.ptrType.registeredClass.rawDestructor(e.ptr)));
        },
        eS = (e) =>
            globalThis.FinalizationRegistry
                ? ((eT = new FinalizationRegistry((e) => {
                      eC(e.$$);
                  })),
                  (eS = (e) => {
                      var r = e.$$;
                      return (r.smartPtr && eT.register(e, { $$: r }, e), e);
                  }),
                  (eP = (e) => eT.unregister(e)),
                  eS(e))
                : ((eS = (e) => e), e),
        eD = [],
        eF = () => {
            for (; eD.length;) {
                var e = eD.pop();
                ((e.$$.deleteScheduled = !1), e.delete());
            }
        };
    function eA() {}
    var eM = (e, r) => Object.defineProperty(r, "name", { value: e }),
        ex = {},
        eO = (e, r, t) => {
            if (void 0 === e[r].overloadTable) {
                var n = e[r];
                ((e[r] = function () {
                    for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return (
                        e[r].overloadTable.hasOwnProperty(o.length) ||
                            eb(
                                `Function '${t}' called with an invalid number of arguments (${o.length}) - expects one of (${e[r].overloadTable})!`,
                            ),
                        e[r].overloadTable[o.length].apply(this, o)
                    );
                }),
                    (e[r].overloadTable = []),
                    (e[r].overloadTable[n.argCount] = n));
            }
        },
        ej = (e, r, t) => {
            n.hasOwnProperty(e)
                ? ((void 0 === t || (void 0 !== n[e].overloadTable && void 0 !== n[e].overloadTable[t])) &&
                      eb(`Cannot register public name '${e}' twice`),
                  eO(n, e, e),
                  n[e].overloadTable.hasOwnProperty(t) &&
                      eb(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),
                  (n[e].overloadTable[t] = r))
                : ((n[e] = r), (n[e].argCount = t));
        };
    function eN(e, r, t, n, o, a, s, i) {
        ((this.name = e),
            (this.constructor = r),
            (this.instancePrototype = t),
            (this.rawDestructor = n),
            (this.baseClass = o),
            (this.getActualType = a),
            (this.upcast = s),
            (this.downcast = i),
            (this.pureVirtualFunctions = []));
    }
    var eR = (e, r, t) => {
            for (; r !== t;)
                (r.upcast || eb(`Expected null or instance of ${t.name}, got an instance of ${r.name}`),
                    (e = r.upcast(e)),
                    (r = r.baseClass));
            return e;
        },
        eW = (e) => {
            if (null === e) return "null";
            var r = typeof e;
            return "object" === r || "array" === r || "function" === r ? e.toString() : "" + e;
        };
    function ez(e, r) {
        if (null === r) return (this.isReference && eb(`null is not a valid ${this.name}`), 0);
        (r.$$ || eb(`Cannot pass "${eW(r)}" as a ${this.name}`),
            r.$$.ptr || eb(`Cannot pass deleted object as a pointer of type ${this.name}`));
        var t = r.$$.ptrType.registeredClass;
        return eR(r.$$.ptr, t, this.registeredClass);
    }
    function eB(e, r) {
        if (null === r)
            return (this.isReference && eb(`null is not a valid ${this.name}`), this.isSmartPointer)
                ? ((t = this.rawConstructor()), null !== e && e.push(this.rawDestructor, t), t)
                : 0;
        ((r && r.$$) || eb(`Cannot pass "${eW(r)}" as a ${this.name}`),
            r.$$.ptr || eb(`Cannot pass deleted object as a pointer of type ${this.name}`),
            !this.isConst &&
                r.$$.ptrType.isConst &&
                eb(
                    `Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`,
                ));
        var t,
            n = r.$$.ptrType.registeredClass;
        if (((t = eR(r.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
            switch (
                (void 0 === r.$$.smartPtr && eb("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy)
            ) {
                case 0:
                    r.$$.smartPtrType === this
                        ? (t = r.$$.smartPtr)
                        : eb(
                              `Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`,
                          );
                    break;
                case 1:
                    t = r.$$.smartPtr;
                    break;
                case 2:
                    if (r.$$.smartPtrType === this) t = r.$$.smartPtr;
                    else {
                        var o = r.clone();
                        ((t = this.rawShare(
                            t,
                            rr.toHandle(() => o.delete()),
                        )),
                            null !== e && e.push(this.rawDestructor, t));
                    }
                    break;
                default:
                    eb("Unsupported sharing policy");
            }
        return t;
    }
    function eU(e, r) {
        if (null === r) return (this.isReference && eb(`null is not a valid ${this.name}`), 0);
        (r.$$ || eb(`Cannot pass "${eW(r)}" as a ${this.name}`),
            r.$$.ptr || eb(`Cannot pass deleted object as a pointer of type ${this.name}`),
            r.$$.ptrType.isConst &&
                eb(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`));
        var t = r.$$.ptrType.registeredClass;
        return eR(r.$$.ptr, t, this.registeredClass);
    }
    function eI(e) {
        return this.fromWireType(u[e >> 2]);
    }
    var eV = (e, r, t) => {
            if (r === t) return e;
            if (void 0 === t.baseClass) return null;
            var n = eV(e, r, t.baseClass);
            return null === n ? null : t.downcast(n);
        },
        eL = {};
    class eH extends Error {
        constructor(e) {
            (super(e), (this.name = "InternalError"));
        }
    }
    var eq = (e) => {
            throw new eH(e);
        },
        eG = (e, r) => (
            (r.ptrType && r.ptr) || eq("makeClassHandle requires ptr and ptrType"),
            !!r.smartPtrType != !!r.smartPtr && eq("Both smartPtrType and smartPtr must be specified"),
            (r.count = { value: 1 }),
            eS(Object.create(e, { $$: { value: r, writable: !0 } }))
        );
    function eX(e, r, t, n, o, a, s, i, l, u, d) {
        ((this.name = e),
            (this.registeredClass = r),
            (this.isReference = t),
            (this.isConst = n),
            (this.isSmartPointer = o),
            (this.pointeeType = a),
            (this.sharingPolicy = s),
            (this.rawGetPointee = i),
            (this.rawConstructor = l),
            (this.rawShare = u),
            (this.rawDestructor = d),
            o || void 0 !== r.baseClass
                ? (this.toWireType = eB)
                : (n ? (this.toWireType = ez) : (this.toWireType = eU), (this.destructorFunction = null)));
    }
    var eK = (e, r, t) => {
            (n.hasOwnProperty(e) || eq("Replacing nonexistent public symbol"),
                void 0 !== n[e].overloadTable && void 0 !== t
                    ? (n[e].overloadTable[t] = r)
                    : ((n[e] = r), (n[e].argCount = t)));
        },
        eY = [],
        eZ = function (e, r) {
            (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], (e = ev(e)));
            var t,
                n = ((t = eY[r]) || (eY[r] = t = C.get(r)), t);
            return ("function" != typeof n && eb(`unknown function pointer with signature ${e}: ${r}`), n);
        };
    class eJ extends Error {}
    var eQ = (e) => {
            var r = y(e),
                t = ev(r);
            return (b(r), t);
        },
        e0 = (e, r) => {
            var t = [],
                n = {};
            throw (
                r.forEach(function e(r) {
                    if (!n[r] && !ew[r]) {
                        if (ey[r]) return void ey[r].forEach(e);
                        (t.push(r), (n[r] = !0));
                    }
                }),
                new eJ(`${e}: ` + t.map(eQ).join([", "]))
            );
        },
        e1 = (e, r, t) => {
            function n(r) {
                var n = t(r);
                n.length !== e.length && eq("Mismatched type converter count");
                for (var o = 0; o < e.length; ++o) ek(e[o], n[o]);
            }
            e.forEach((e) => (ey[e] = r));
            var o = Array(r.length),
                a = [],
                s = 0;
            for (let [e, t] of r.entries())
                ew.hasOwnProperty(t)
                    ? (o[e] = ew[t])
                    : (a.push(t),
                      eg.hasOwnProperty(t) || (eg[t] = []),
                      eg[t].push(() => {
                          ((o[e] = ew[t]), ++s === a.length && n(o));
                      }));
            0 === a.length && n(o);
        },
        e2 = (e, r) => {
            for (var t = [], n = 0; n < e; n++) t.push(u[(r + 4 * n) >> 2]);
            return t;
        },
        e4 = (e) => {
            for (; e.length;) {
                var r = e.pop();
                e.pop()(r);
            }
        };
    function e3(e) {
        for (var r = 1; r < e.length; ++r) if (null !== e[r] && void 0 === e[r].destructorFunction) return !0;
        return !1;
    }
    function e6(e) {
        for (var r = 1; r < e.length; ++r) if (null !== e[r] && e[r].argStackAlloc) return !0;
        return !1;
    }
    function e5(e, r, t, n, o, a) {
        var s = r.length;
        s < 2 && eb("argTypes array size mismatch! Must at least get return value and receiver (this) types!");
        var i = null !== r[1] && null !== t,
            l = e3(r),
            u = e6(r),
            d = u && !a && !l;
        u && !d && (l = !0);
        var c = !r[0].isVoid,
            h = r[0],
            f = r[1],
            p = [e, eb, n, o, e4, h.fromWireType.bind(h), f?.toWireType.bind(f)];
        d && p.push(B, z);
        for (var m = 2; m < s; ++m) {
            var v = r[m];
            p.push(v.toWireType.bind(v));
        }
        if (!l)
            for (var m = i ? 1 : 2; m < r.length; ++m)
                null !== r[m].destructorFunction && p.push(r[m].destructorFunction);
        return eM(
            e,
            (function (e, r, t, n) {
                var o = e3(e),
                    a = e6(e),
                    s = a && !n && !o;
                a && !s && (o = !0);
                var i = e.length - 2,
                    l = [],
                    u = ["fn"];
                r && u.push("thisWired");
                for (var d = 0; d < i; ++d) (l.push(`arg${d}`), u.push(`arg${d}Wired`));
                ((l = l.join()), (u = u.join()));
                var c = `return function (${l}) {
`;
                (o && (c += "var destructors = [];\n"), s && (c += "var sp = stackSave();\ntry {\n"));
                var h = o ? "destructors" : "null",
                    f = [
                        "humanName",
                        "throwBindingError",
                        "invoker",
                        "fn",
                        "runDestructors",
                        "fromRetWire",
                        "toClassParamWire",
                    ];
                (s && f.push("stackSave", "stackRestore"),
                    r &&
                        (c += `var thisWired = toClassParamWire(${h}, this);
`));
                for (var d = 0; d < i; ++d) {
                    var p = `toArg${d}Wire`;
                    ((c += `var arg${d}Wired = ${p}(${h}, arg${d});
`),
                        f.push(p));
                }
                if (
                    ((c +=
                        (t || n ? "var rv = " : "") +
                        `invoker(${u});
`),
                    s && (c += "} finally {\nstackRestore(sp);\n}\n"),
                    o)
                )
                    c += "runDestructors(destructors);\n";
                else
                    for (var d = r ? 1 : 2; d < e.length; ++d) {
                        var m = 1 === d ? "thisWired" : `arg${d - 2}Wired`;
                        null !== e[d].destructorFunction &&
                            ((c += `${m}_dtor(${m});
`),
                            f.push(`${m}_dtor`));
                    }
                return (t && (c += "var ret = fromRetWire(rv);\nreturn ret;\n"), Function(f, (c += "}\n")));
            })(
                r,
                i,
                c,
                a,
            )(...p),
        );
    }
    var e8 = (e) => {
            let r = (e = e.trim()).indexOf("(");
            return -1 === r ? e : e.slice(0, r);
        },
        e9 = [],
        e7 = [0, 1, , 1, null, 1, !0, 1, !1, 1],
        re = (e) => {
            e > 9 && 0 == --e7[e + 1] && (e7[e], (e7[e] = void 0), e9.push(e));
        },
        rr = {
            toValue: (e) => (e || eb(`Cannot use deleted val. handle = ${e}`), e7[e]),
            toHandle: (e) => {
                switch (e) {
                    case void 0:
                        return 2;
                    case null:
                        return 4;
                    case !0:
                        return 6;
                    case !1:
                        return 8;
                    default: {
                        let r = e9.pop() || e7.length;
                        return ((e7[r] = e), (e7[r + 1] = 1), r);
                    }
                }
            },
        },
        rt = {
            name: "emscripten::val",
            fromWireType: (e) => {
                var r = rr.toValue(e);
                return (re(e), r);
            },
            toWireType: (e, r) => rr.toHandle(r),
            readValueFromPointer: eI,
            destructorFunction: null,
        },
        rn = (e) => ek(e, rt),
        ro = (e, r, t) => {
            switch (r) {
                case 1:
                    return t
                        ? function (e) {
                              return this.fromWireType(l[e]);
                          }
                        : function (e) {
                              return this.fromWireType(c[e]);
                          };
                case 2:
                    return t
                        ? function (e) {
                              return this.fromWireType(f[e >> 1]);
                          }
                        : function (e) {
                              return this.fromWireType(p[e >> 1]);
                          };
                case 4:
                    return t
                        ? function (e) {
                              return this.fromWireType(d[e >> 2]);
                          }
                        : function (e) {
                              return this.fromWireType(u[e >> 2]);
                          };
                default:
                    throw TypeError(`invalid integer width (${r}): ${e}`);
            }
        },
        ra = (e, r) => {
            var t = ew[e];
            return (void 0 === t && eb(`${r} has unknown type ${eQ(e)}`), t);
        },
        rs = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0,
        ri = (e, r, t) => {
            var n = e >> 1,
                o = X(p, n, r / 2, t);
            if (o - n > 16 && rs) return rs.decode(p.subarray(n, o));
            for (var a = "", s = n; s < o; ++s) a += String.fromCharCode(p[s]);
            return a;
        },
        rl = function (e, r) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0x7fffffff;
            if (t < 2) return 0;
            for (var n = r, o = (t -= 2) < 2 * e.length ? t / 2 : e.length, a = 0; a < o; ++a) {
                var s = e.charCodeAt(a);
                ((f[r >> 1] = s), (r += 2));
            }
            return ((f[r >> 1] = 0), r - n);
        },
        ru = (e) => 2 * e.length,
        rd = (e, r, t) => {
            for (var n = "", o = e >> 2, a = 0; !(a >= r / 4); a++) {
                var s = u[o + a];
                if (!s && !t) break;
                n += String.fromCodePoint(s);
            }
            return n;
        },
        rc = function (e, r) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0x7fffffff;
            if (t < 4) return 0;
            for (var n = r, o = n + t - 4, a = 0; a < e.length; ++a) {
                var s = e.codePointAt(a);
                if ((s > 65535 && a++, (d[r >> 2] = s), (r += 4) + 4 > o)) break;
            }
            return ((d[r >> 2] = 0), r - n);
        },
        rh = (e) => {
            for (var r = 0, t = 0; t < e.length; ++t) (e.codePointAt(t) > 65535 && t++, (r += 4));
            return r;
        },
        rf = [],
        rp = (e, r, t) => {
            var n = [],
                o = e(n, t);
            return (n.length && (u[r >> 2] = rr.toHandle(n)), o);
        },
        rm = {},
        rv = (e) => {
            var r = rm[e];
            return void 0 === r ? ev(e) : r;
        },
        rg = (e) => (e < -0x20000000000000 || e > 0x20000000000000 ? 0 / 0 : Number(e)),
        rw = () => Date.now(),
        ry = (e) => {
            var r = P.buffer.byteLength;
            try {
                return (P.grow(((e - r + 65535) / 65536) | 0), O(), 1);
            } catch (e) {}
        },
        rE = {},
        rb = () => {
            if (!rb.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
                    _: D,
                };
                for (var r in rE) void 0 === rE[r] ? delete e[r] : (e[r] = rE[r]);
                var t = [];
                for (var r in e) t.push(`${r}=${e[r]}`);
                rb.strings = t;
            }
            return rb.strings;
        };
    ((eh.createPreloadedFile = (e, r, t, n, o, a, s, i, l, u) => {
        ec(e, r, t, n, o, i, l, u).then(a).catch(s);
    }),
        (eh.preloadFile = ec),
        eh.staticInit(),
        Object.assign((e = eA.prototype), {
            isAliasOf(e) {
                if (!(this instanceof eA) || !(e instanceof eA)) return !1;
                var r = this.$$.ptrType.registeredClass,
                    t = this.$$.ptr;
                e.$$ = e.$$;
                for (var n = e.$$.ptrType.registeredClass, o = e.$$.ptr; r.baseClass;)
                    ((t = r.upcast(t)), (r = r.baseClass));
                for (; n.baseClass;) ((o = n.upcast(o)), (n = n.baseClass));
                return r === n && t === o;
            },
            clone() {
                if ((this.$$.ptr || e_(this), this.$$.preservePointerOnDelete))
                    return ((this.$$.count.value += 1), this);
                {
                    let r;
                    var e = eS(
                        Object.create(Object.getPrototypeOf(this), {
                            $$: {
                                value: {
                                    count: (r = this.$$).count,
                                    deleteScheduled: r.deleteScheduled,
                                    preservePointerOnDelete: r.preservePointerOnDelete,
                                    ptr: r.ptr,
                                    ptrType: r.ptrType,
                                    smartPtr: r.smartPtr,
                                    smartPtrType: r.smartPtrType,
                                },
                            },
                        }),
                    );
                    return ((e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e);
                }
            },
            delete() {
                (this.$$.ptr || e_(this),
                    this.$$.deleteScheduled &&
                        !this.$$.preservePointerOnDelete &&
                        eb("Object already scheduled for deletion"),
                    eP(this),
                    eC(this.$$),
                    this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
            },
            isDeleted() {
                return !this.$$.ptr;
            },
            deleteLater() {
                return (
                    this.$$.ptr || e_(this),
                    this.$$.deleteScheduled &&
                        !this.$$.preservePointerOnDelete &&
                        eb("Object already scheduled for deletion"),
                    eD.push(this),
                    1 === eD.length && v && v(eF),
                    (this.$$.deleteScheduled = !0),
                    this
                );
            },
        }),
        (r = Symbol.dispose) && (e[r] = e.delete),
        Object.assign(eX.prototype, {
            getPointee(e) {
                return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
            },
            destructor(e) {
                this.rawDestructor?.(e);
            },
            readValueFromPointer: eI,
            fromWireType: function (e) {
                var r,
                    t = this.getPointee(e);
                if (!t) return (this.destructor(e), null);
                var n =
                    eL[
                        ((e, r) => {
                            for (void 0 === r && eb("ptr should not be undefined"); e.baseClass;)
                                ((r = e.upcast(r)), (e = e.baseClass));
                            return r;
                        })(this.registeredClass, t)
                    ];
                if (void 0 !== n)
                    if (0 === n.$$.count.value) return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
                    else {
                        var o = n.clone();
                        return (this.destructor(e), o);
                    }
                function a() {
                    return this.isSmartPointer
                        ? eG(this.registeredClass.instancePrototype, {
                              ptrType: this.pointeeType,
                              ptr: t,
                              smartPtrType: this,
                              smartPtr: e,
                          })
                        : eG(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
                }
                var s = ex[this.registeredClass.getActualType(t)];
                if (!s) return a.call(this);
                r = this.isConst ? s.constPointerType : s.pointerType;
                var i = eV(t, this.registeredClass, r.registeredClass);
                return null === i
                    ? a.call(this)
                    : this.isSmartPointer
                      ? eG(r.registeredClass.instancePrototype, { ptrType: r, ptr: i, smartPtrType: this, smartPtr: e })
                      : eG(r.registeredClass.instancePrototype, { ptrType: r, ptr: i });
            },
        }),
        n.noExitRuntime && n.noExitRuntime,
        n.print && (A = n.print),
        n.printErr && (M = n.printErr),
        n.arguments && n.arguments,
        n.thisProgram && (D = n.thisProgram));
    var rk = n.preInit;
    if (rk) for ("function" == typeof rk && (n.preInit = rk = [rk]); rk.length > 0;) rk.shift()();
    n.ccall = (e, r, t, o, a) => {
        var s,
            i = {
                string: (e) => {
                    var r,
                        t,
                        n,
                        o = 0;
                    return (null != e && 0 !== e && ((t = Z((r = e)) + 1), em(r, (n = _(t)), t), (o = n)), o);
                },
                array: (e) => {
                    let r;
                    var t = ((r = e.length), _(r));
                    return (l.set(e, t), t);
                },
            },
            u = n["_" + e],
            d = [],
            c = 0;
        if (o)
            for (var h = 0; h < o.length; h++) {
                var f = i[t[h]];
                f ? (c || (c = B()), (d[h] = f(o[h]))) : (d[h] = o[h]);
            }
        var p = u(...d);
        return ((s = p), c && z(c), (p = "string" === r ? ef(s) : "boolean" === r ? !!s : s));
    };
    var r$ = {
        a: (e, r, t) => {
            (new U(e).init(r, t), I++, j());
        },
        z: function (e, r, t) {
            ep.varargs = t;
            try {
                var n = ep.getStreamFromFD(e);
                switch (r) {
                    case 0:
                        var o = V();
                        if (o < 0) break;
                        for (; eh.streams[o];) o++;
                        return eh.dupStream(n, o).fd;
                    case 1:
                    case 2:
                    case 13:
                    case 14:
                        return 0;
                    case 3:
                        return n.flags;
                    case 4:
                        var o = V();
                        return ((n.flags = (-289793 & n.flags) | (289792 & o)), 0);
                    case 12:
                        var o = V();
                        return ((f[(o + 0) >> 1] = 2), 0);
                }
                return -28;
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        V: function (e, r) {
            try {
                return ep.writeStat(r, eh.fstat(e));
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        I: function (e, r, t) {
            try {
                var n = ep.getStreamFromFD(e);
                n.getdents ||= eh.readdir(n.path);
                for (
                    var o = 0,
                        a = eh.llseek(n, 0, 1),
                        s = Math.floor(a / 280),
                        i = Math.min(n.getdents.length, s + Math.floor(t / 280)),
                        u = s;
                    u < i;
                    u++
                ) {
                    var d,
                        c,
                        p,
                        m = n.getdents[u];
                    if ("." === m) ((d = n.node.id), (c = 4));
                    else if (".." === m) ((d = eh.lookupPath(n.path, { parent: !0 }).node.id), (c = 4));
                    else {
                        try {
                            p = eh.lookupNode(n.node, m);
                        } catch (e) {
                            if (e?.errno === 28) continue;
                            throw e;
                        }
                        ((d = p.id), (c = eh.isChrdev(p.mode) ? 2 : eh.isDir(p.mode) ? 4 : eh.isLink(p.mode) ? 10 : 8));
                    }
                    ((h[(r + o) >> 3] = BigInt(d)),
                        (h[(r + o + 8) >> 3] = BigInt((u + 1) * 280)),
                        (f[(r + o + 16) >> 1] = 280),
                        (l[r + o + 18] = c),
                        em(m, r + o + 19, 256),
                        (o += 280));
                }
                return (eh.llseek(n, 280 * u, 0), o);
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        R: () => 0,
        O: () => 0,
        N: () => 0,
        M: () => 0,
        t: function (e, r, t) {
            ep.varargs = t;
            try {
                var n = ep.getStreamFromFD(e);
                switch (r) {
                    case 21509:
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21524:
                    case 21515:
                        if (!n.tty) return -59;
                        return 0;
                    case 21505:
                        if (!n.tty) return -59;
                        if (n.tty.ops.ioctl_tcgets) {
                            var o = n.tty.ops.ioctl_tcgets(n),
                                a = V();
                            ((d[a >> 2] = o.c_iflag || 0),
                                (d[(a + 4) >> 2] = o.c_oflag || 0),
                                (d[(a + 8) >> 2] = o.c_cflag || 0),
                                (d[(a + 12) >> 2] = o.c_lflag || 0));
                            for (var s = 0; s < 32; s++) l[a + s + 17] = o.c_cc[s] || 0;
                        }
                        return 0;
                    case 21506:
                    case 21507:
                    case 21508:
                        if (!n.tty) return -59;
                        if (n.tty.ops.ioctl_tcsets) {
                            for (
                                var a = V(),
                                    i = d[a >> 2],
                                    u = d[(a + 4) >> 2],
                                    c = d[(a + 8) >> 2],
                                    h = d[(a + 12) >> 2],
                                    p = [],
                                    s = 0;
                                s < 32;
                                s++
                            )
                                p.push(l[a + s + 17]);
                            return n.tty.ops.ioctl_tcsets(n.tty, r, {
                                c_iflag: i,
                                c_oflag: u,
                                c_cflag: c,
                                c_lflag: h,
                                c_cc: p,
                            });
                        }
                        return 0;
                    case 21519:
                        if (!n.tty) return -59;
                        var a = V();
                        return ((d[a >> 2] = 0), 0);
                    case 21520:
                        if (!n.tty) return -59;
                        return -28;
                    case 21537:
                    case 21531:
                        var a = V();
                        return eh.ioctl(n, r, a);
                    case 21523:
                        if (!n.tty) return -59;
                        if (n.tty.ops.ioctl_tiocgwinsz) {
                            var m = n.tty.ops.ioctl_tiocgwinsz(n.tty),
                                a = V();
                            ((f[a >> 1] = m[0]), (f[(a + 2) >> 1] = m[1]));
                        }
                        return 0;
                    default:
                        return -28;
                }
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        S: function (e, r) {
            try {
                return ((e = ep.getStr(e)), ep.writeStat(r, eh.lstat(e)));
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        T: function (e, r, t, n) {
            try {
                r = ep.getStr(r);
                var o = 256 & n,
                    a = 4096 & n;
                return ((n &= -6401), (r = ep.calculateAt(e, r, a)), ep.writeStat(t, o ? eh.lstat(r) : eh.stat(r)));
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        A: function (e, r, t, n) {
            ep.varargs = n;
            try {
                ((r = ep.getStr(r)), (r = ep.calculateAt(e, r)));
                var o = n ? V() : 0;
                return (64 & t && (o &= ~ep.currentUmask), eh.open(r, t, o).fd);
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        U: function (e, r) {
            try {
                return ((e = ep.getStr(e)), ep.writeStat(r, eh.stat(e)));
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        X: () => j(""),
        D: (e, r, t, n, o) => {
            r = ev(r);
            let a = 0n === n,
                s = (e) => e;
            if (a) {
                let e = 8 * t;
                o = (s = (r) => BigInt.asUintN(e, r))(o);
            }
            ek(e, {
                name: r,
                fromWireType: s,
                toWireType: (e, r) => ("number" == typeof r && (r = BigInt(r)), r),
                readValueFromPointer: e$(r, t, !a),
                destructorFunction: null,
            });
        },
        $: (e, r, t, n) => {
            ek(e, {
                name: (r = ev(r)),
                fromWireType: function (e) {
                    return !!e;
                },
                toWireType: function (e, r) {
                    return r ? t : n;
                },
                readValueFromPointer: function (e) {
                    return this.fromWireType(c[e]);
                },
                destructorFunction: null,
            });
        },
        o: (e, r, t, n, o, a, s, i, l, u, d, c, h) => {
            ((d = ev(d)), (a = eZ(o, a)), (i &&= eZ(s, i)), (u &&= eZ(l, u)), (h = eZ(c, h)));
            var f,
                p,
                m = (p = (f = (f = d).replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)) >= 48 && p <= 57 ? `_${f}` : f;
            (ej(m, function () {
                e0(`Cannot construct ${d} due to unbound types`, [n]);
            }),
                e1([e, r, t], n ? [n] : [], (r) => {
                    r = r[0];
                    var t,
                        o = n ? (t = r.registeredClass).instancePrototype : eA.prototype,
                        s = eM(d, function () {
                            for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                            if (Object.getPrototypeOf(this) !== l) throw new eE(`Use 'new' to construct ${d}`);
                            if (void 0 === c.constructor_body) throw new eE(`${d} has no accessible constructor`);
                            var n = c.constructor_body[r.length];
                            if (void 0 === n)
                                throw new eE(
                                    `Tried to invoke ctor of ${d} with invalid number of parameters (${r.length}) - expected (${Object.keys(c.constructor_body).toString()}) parameters instead!`,
                                );
                            return n.apply(this, r);
                        }),
                        l = Object.create(o, { constructor: { value: s } });
                    s.prototype = l;
                    var c = new eN(d, s, l, h, t, a, i, u);
                    c.baseClass && ((c.baseClass.__derivedClasses ??= []), c.baseClass.__derivedClasses.push(c));
                    var f = new eX(d, c, !0, !1, !1),
                        p = new eX(d + "*", c, !1, !1, !1),
                        v = new eX(d + " const*", c, !1, !0, !1);
                    return ((ex[e] = { pointerType: p, constPointerType: v }), eK(m, s), [f, p, v]);
                }));
        },
        r: (e, r, t, n, o, a) => {
            var s = e2(r, t);
            ((o = eZ(n, o)),
                e1([], [e], (e) => {
                    e = e[0];
                    var t = `constructor ${e.name}`;
                    if (
                        (void 0 === e.registeredClass.constructor_body && (e.registeredClass.constructor_body = []),
                        void 0 !== e.registeredClass.constructor_body[r - 1])
                    )
                        throw new eE(
                            `Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                        );
                    return (
                        (e.registeredClass.constructor_body[r - 1] = () => {
                            e0(`Cannot construct ${e.name} due to unbound types`, s);
                        }),
                        e1(
                            [],
                            s,
                            (n) => (
                                n.splice(1, 0, null),
                                (e.registeredClass.constructor_body[r - 1] = e5(t, n, null, o, a)),
                                []
                            ),
                        ),
                        []
                    );
                }));
        },
        c: (e, r, t, n, o, a, s, i, l, u) => {
            var d = e2(t, n);
            ((r = e8((r = ev(r)))),
                (a = eZ(o, a, l)),
                e1([], [e], (e) => {
                    e = e[0];
                    var n = `${e.name}.${r}`;
                    function o() {
                        e0(`Cannot call ${n} due to unbound types`, d);
                    }
                    (r.startsWith("@@") && (r = Symbol[r.substring(2)]),
                        i && e.registeredClass.pureVirtualFunctions.push(r));
                    var u = e.registeredClass.instancePrototype,
                        c = u[r];
                    return (
                        void 0 === c || (void 0 === c.overloadTable && c.className !== e.name && c.argCount === t - 2)
                            ? ((o.argCount = t - 2), (o.className = e.name), (u[r] = o))
                            : (eO(u, r, n), (u[r].overloadTable[t - 2] = o)),
                        e1([], d, (o) => {
                            var i = e5(n, o, e, a, s, l);
                            return (
                                void 0 === u[r].overloadTable
                                    ? ((i.argCount = t - 2), (u[r] = i))
                                    : (u[r].overloadTable[t - 2] = i),
                                []
                            );
                        }),
                        []
                    );
                }));
        },
        E: (e, r, t) => {
            ((e = ev(e)), e1([], [r], (r) => ((r = r[0]), (n[e] = r.fromWireType(t)), [])));
        },
        Z: rn,
        w: (e, r, t, o, a) => {
            r = ev(r);
            let s = a ? (1 === a ? "number" : "string") : "object";
            switch (s) {
                case "object":
                    function i() {}
                    ((i.values = {}),
                        ek(e, {
                            name: r,
                            constructor: i,
                            valueType: s,
                            fromWireType: function (e) {
                                return this.constructor.values[e];
                            },
                            toWireType: (e, r) => r.value,
                            readValueFromPointer: ro(r, t, o),
                            destructorFunction: null,
                        }),
                        ej(r, i));
                    break;
                case "number":
                    var l = {};
                    (ek(e, {
                        name: r,
                        keysMap: l,
                        valueType: s,
                        fromWireType: (e) => e,
                        toWireType: (e, r) => r,
                        readValueFromPointer: ro(r, t, o),
                        destructorFunction: null,
                    }),
                        ej(r, l),
                        delete n[r].argCount);
                    break;
                case "string":
                    var l = {};
                    (ek(e, {
                        name: r,
                        valuesMap: {},
                        reverseMap: {},
                        keysMap: l,
                        valueType: s,
                        fromWireType: function (e) {
                            return this.reverseMap[e];
                        },
                        toWireType: function (e, r) {
                            return this.valuesMap[r];
                        },
                        readValueFromPointer: ro(r, t, o),
                        destructorFunction: null,
                    }),
                        ej(r, l),
                        delete n[r].argCount);
            }
        },
        i: (e, r, t) => {
            var n = ra(e, "enum");
            switch (((r = ev(r)), n.valueType)) {
                case "object":
                    var o = n.constructor,
                        a = Object.create(n.constructor.prototype, {
                            value: { value: t },
                            constructor: { value: eM(`${n.name}_${r}`, function () {}) },
                        });
                    ((o.values[t] = a), (o[r] = a));
                    break;
                case "number":
                    n.keysMap[r] = t;
                    break;
                case "string":
                    ((n.valuesMap[r] = t), (n.reverseMap[t] = r), (n.keysMap[r] = r));
            }
        },
        C: (e, r, t) => {
            ek(e, {
                name: (r = ev(r)),
                fromWireType: (e) => e,
                toWireType: (e, r) => r,
                readValueFromPointer: ((e, r) => {
                    switch (r) {
                        case 4:
                            return function (e) {
                                return this.fromWireType(g[e >> 2]);
                            };
                        case 8:
                            return function (e) {
                                return this.fromWireType(w[e >> 3]);
                            };
                        default:
                            throw TypeError(`invalid float width (${r}): ${e}`);
                    }
                })(r, t),
                destructorFunction: null,
            });
        },
        v: (e, r, t, n, o, a, s, i) => {
            var l = e2(r, t);
            ((e = e8((e = ev(e)))),
                (o = eZ(n, o, s)),
                ej(
                    e,
                    function () {
                        e0(`Cannot call ${e} due to unbound types`, l);
                    },
                    r - 1,
                ),
                e1([], l, (t) => {
                    var n = [t[0], null].concat(t.slice(1));
                    return (eK(e, e5(e, n, null, o, a, s), r - 1), []);
                }));
        },
        k: (e, r, t, n, o) => {
            r = ev(r);
            let a = (e) => e;
            if (0 === n) {
                var s = 32 - 8 * t;
                o = (a = (e) => (e << s) >>> s)(o);
            }
            ek(e, {
                name: r,
                fromWireType: a,
                toWireType: (e, r) => r,
                readValueFromPointer: e$(r, t, 0 !== n),
                destructorFunction: null,
            });
        },
        e: (e, r, t) => {
            var n = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
                BigInt64Array,
                BigUint64Array,
            ][r];
            function o(e) {
                var r = u[e >> 2],
                    t = u[(e + 4) >> 2];
                return new n(l.buffer, t, r);
            }
            ek(
                e,
                { name: (t = ev(t)), fromWireType: o, readValueFromPointer: o },
                { ignoreDuplicateRegistrations: !0 },
            );
        },
        ea: (e, r, t, n, o, a, s, i, l, u, d, c) => {
            ((t = ev(t)),
                (a = eZ(o, a)),
                (i = eZ(s, i)),
                (u = eZ(l, u)),
                (c = eZ(d, c)),
                e1([e], [r], (e) => ((e = e[0]), [new eX(t, e.registeredClass, !1, !1, !0, e, n, a, i, u, c)])));
        },
        _: (e, r) => {
            ek(e, {
                name: (r = ev(r)),
                fromWireType(e) {
                    var r,
                        t = u[e >> 2];
                    return ((r = ef(e + 4, t, !0)), b(e), r);
                },
                toWireType(e, r) {
                    r instanceof ArrayBuffer && (r = new Uint8Array(r));
                    var t,
                        n = "string" == typeof r;
                    (n ||
                        (ArrayBuffer.isView(r) && 1 == r.BYTES_PER_ELEMENT) ||
                        eb("Cannot pass non-string to std::string"),
                        (t = n ? Z(r) : r.length));
                    var o = E(4 + t + 1),
                        a = o + 4;
                    if (((u[o >> 2] = t), n))
                        if (0)
                            for (var s = 0; s < t; ++s) {
                                var i = r.charCodeAt(s);
                                (i > 255 && (b(o), eb("String has UTF-16 code units that do not fit in 8 bits")),
                                    (c[a + s] = i));
                            }
                        else em(r, a, t + 1);
                    else c.set(r, a);
                    return (null !== e && e.push(b, o), o);
                },
                readValueFromPointer: eI,
                destructorFunction(e) {
                    b(e);
                },
            });
        },
        u: (e, r, t) => {
            var n, o, a;
            ((t = ev(t)),
                2 === r ? ((n = ri), (o = rl), (a = ru)) : ((n = rd), (o = rc), (a = rh)),
                ek(e, {
                    name: t,
                    fromWireType: (e) => {
                        var t = u[e >> 2],
                            o = n(e + 4, t * r, !0);
                        return (b(e), o);
                    },
                    toWireType: (e, n) => {
                        "string" != typeof n && eb(`Cannot pass non-string to C++ string type ${t}`);
                        var s = a(n),
                            i = E(4 + s + r);
                        return ((u[i >> 2] = s / r), o(n, i + 4, s + r), null !== e && e.push(b, i), i);
                    },
                    readValueFromPointer: eI,
                    destructorFunction(e) {
                        b(e);
                    },
                }));
        },
        m: (e, r) => {
            rn(e);
        },
        aa: (e, r) => {
            ek(e, { isVoid: !0, name: (r = ev(r)), fromWireType: () => void 0, toWireType: (e, r) => void 0 });
        },
        fa: (e, r) => {
            ((e = rr.toValue(e)), (r = rr.toValue(r)), e.set(r));
        },
        h: (e, r, t) => {
            var n,
                o,
                a,
                [s, ...i] = ((e, r) => {
                    for (var t = Array(e), n = 0; n < e; ++n) t[n] = ra(u[(r + 4 * n) >> 2], `parameter ${n}`);
                    return t;
                })(e, r),
                l = s.toWireType.bind(s),
                d = i.map((e) => e.readValueFromPointer.bind(e));
            e--;
            var c = { toValue: rr.toValue },
                h = d.map((e, r) => {
                    var t = `argFromPtr${r}`;
                    return ((c[t] = e), `${t}(args${r ? "+" + 8 * r : ""})`);
                });
            switch (t) {
                case 0:
                    n = "toValue(handle)";
                    break;
                case 2:
                    n = "new (toValue(handle))";
                    break;
                case 3:
                    n = "";
                    break;
                case 1:
                    ((c.getStringOrSymbol = rv), (n = "toValue(handle)[getStringOrSymbol(methodName)]"));
            }
            ((n += `(${h})`),
                s.isVoid ||
                    ((c.toReturnWire = l),
                    (c.emval_returnValue = rp),
                    (n = `return emval_returnValue(toReturnWire, destructorsRef, ${n})`)),
                (n = `return function (handle, methodName, destructorsRef, args) {
${n}
}`));
            var f = Function(Object.keys(c), n)(...Object.values(c));
            return (
                (o = eM(`methodCaller<(${i.map((e) => e.name)}) => ${s.name}>`, f)), (a = rf.length), rf.push(o), a
            );
        },
        b: re,
        n: (e) => (e ? ((e = rv(e)), rr.toHandle(globalThis[e])) : rr.toHandle(globalThis)),
        l: (e, r) => ((e = rr.toValue(e)), (r = rr.toValue(r)), rr.toHandle(e[r])),
        d: (e) => {
            e > 9 && (e7[e + 1] += 1);
        },
        F: (e, r) => (e = rr.toValue(e)) instanceof (r = rr.toValue(r)),
        g: (e, r, t, n, o) => rf[e](r, t, n, o),
        j: (e) => rr.toHandle(rv(e)),
        s: () => rr.toHandle({}),
        f: (e) => {
            (e4(rr.toValue(e)), re(e));
        },
        p: (e, r, t) => {
            ((e = rr.toValue(e)), (r = rr.toValue(r)), (t = rr.toValue(t)), (e[r] = t));
        },
        G: (e) => {
            throw rr.toValue(e);
        },
        K: function (e, r) {
            var t = new Date(1e3 * (e = rg(e)));
            if (isNaN(t.getTime())) return 1;
            ((d[r >> 2] = t.getUTCSeconds()),
                (d[(r + 4) >> 2] = t.getUTCMinutes()),
                (d[(r + 8) >> 2] = t.getUTCHours()),
                (d[(r + 12) >> 2] = t.getUTCDate()),
                (d[(r + 16) >> 2] = t.getUTCMonth()),
                (d[(r + 20) >> 2] = t.getUTCFullYear() - 1900),
                (d[(r + 24) >> 2] = t.getUTCDay()));
            var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                o = ((t.getTime() - n) / 864e5) | 0;
            return ((d[(r + 28) >> 2] = o), 0);
        },
        J: function (e, r, t, n, o, a) {
            a = rg(a);
            try {
                var s = ep.getStreamFromFD(o);
                2 & t && ep.doMsync(e, s, r, n, a);
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        Y: (e, r, t, n) => {
            var o = new Date().getFullYear(),
                a = new Date(o, 0, 1),
                s = new Date(o, 6, 1),
                i = a.getTimezoneOffset(),
                l = s.getTimezoneOffset(),
                c = Math.max(i, l);
            ((u[e >> 2] = 60 * c), (d[r >> 2] = Number(i != l)));
            var h = (e) => {
                    var r = Math.abs(e),
                        t = String(Math.floor(r / 60)).padStart(2, "0"),
                        n = String(r % 60).padStart(2, "0");
                    return `UTC${e >= 0 ? "-" : "+"}${t}${n}`;
                },
                f = h(i),
                p = h(l);
            l < i ? (em(f, t, 17), em(p, n, 17)) : (em(f, n, 17), em(p, t, 17));
        },
        W: function (e, r, t) {
            if (((r = rg(r)), !(e >= 0 && e <= 3))) return 28;
            if (0 === e) n = rw();
            else {
                0;
                n = performance.now();
            }
            var n,
                o = Math.round(1e6 * n);
            return ((h[t >> 3] = BigInt(o)), 0);
        },
        da: (e) => {
            console.error(ef(e));
        },
        ba: (e) => {
            console.log(ef(e));
        },
        ca: (e) => {
            console.warn(ef(e));
        },
        B: rw,
        H: (e) => {
            var r = c.length;
            if ((e >>>= 0) > 0x80000000) return !1;
            for (var t = 1; t <= 4; t *= 2) {
                var n = r * (1 + 0.2 / t);
                if (((n = Math.min(n, e + 0x6000000)), ry(Math.min(0x80000000, er(Math.max(e, n), 65536))))) return !0;
            }
            return !1;
        },
        P: (e, r) => {
            var t = 0,
                n = 0;
            for (var o of rb()) {
                var a = r + t;
                ((u[(e + n) >> 2] = a), (t += em(o, a, 1 / 0) + 1), (n += 4));
            }
            return 0;
        },
        Q: (e, r) => {
            var t = rb();
            u[e >> 2] = t.length;
            var n = 0;
            for (var o of t) n += Z(o) + 1;
            return ((u[r >> 2] = n), 0);
        },
        q: function (e) {
            try {
                var r = ep.getStreamFromFD(e);
                return (eh.close(r), 0);
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
        x: function (e, r, t, n) {
            try {
                var o = ep.getStreamFromFD(e),
                    a = ((e, r, t, n) => {
                        for (var o = 0, a = 0; a < t; a++) {
                            var s = u[r >> 2],
                                i = u[(r + 4) >> 2];
                            r += 8;
                            try {
                                var d = eh.read(e, l, s, i, n);
                            } catch (e) {
                                if (o > 0 && e instanceof eh.ErrnoError && (6 == e.errno || 6 == e.errno)) break;
                                throw e;
                            }
                            if (d < 0) return -1;
                            if (((o += d), d < i)) break;
                            void 0 !== n && (n += d);
                        }
                        return o;
                    })(o, r, t);
                return ((u[n >> 2] = a), 0);
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
        L: function (e, r, t, n) {
            r = rg(r);
            try {
                if (isNaN(r)) return 22;
                var o = ep.getStreamFromFD(e);
                return (
                    eh.llseek(o, r, t),
                    (h[n >> 3] = BigInt(o.position)),
                    o.getdents && !r && 0 === t && (o.getdents = null),
                    0
                );
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
        y: function (e, r, t, n) {
            try {
                var o = ep.getStreamFromFD(e),
                    a = ((e, r, t) => {
                        if (1 == t) return eh.write(e, l, u[r >> 2], u[(r + 4) >> 2], void 0);
                        for (var n = 0, o = 0, a = r; o < t; o++, a += 8) n += u[(a + 4) >> 2];
                        for (var s = new Uint8Array(n), i = 0, o = 0; o < t; o++, r += 8) {
                            var d = u[r >> 2],
                                h = u[(r + 4) >> 2];
                            (s.set(c.subarray(d, d + h), i), (i += h));
                        }
                        return eh.write(e, s, 0, n, void 0);
                    })(o, r, t);
                return ((u[n >> 2] = a), 0);
            } catch (e) {
                if (void 0 === eh || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
    };
    return (
        (S = await (async function () {
            function e(e) {
                var r;
                return (
                    (y = (r = S = e.exports).ia),
                    (E = n._malloc = r.ka),
                    (b = n._free = r.la),
                    (k = r.ma),
                    ($ = r.na),
                    (_ = r.oa),
                    (T = r.pa),
                    (P = r.ga),
                    (C = r.ja),
                    O(),
                    S
                );
            }
            var r = { a: r$ },
                l = n.instantiateWasm;
            return l
                ? new Promise((t) => {
                      l(r, (r) => t(e(r)));
                  })
                : ((i ??= (function () {
                      if (n.locateFile) {
                          var e;
                          return ((e = "libdave.wasm"), n.locateFile ? n.locateFile(e, F) : F + e);
                      }
                      return new URL(t(264219), t.b).href;
                  })()),
                  e(
                      (
                          await (async function (e, r, t) {
                              if (!e)
                                  try {
                                      var n = fetch(r, { credentials: "same-origin" });
                                      return await WebAssembly.instantiateStreaming(n, t);
                                  } catch (e) {
                                      (M(`wasm streaming compile failed: ${e}`),
                                          M("falling back to ArrayBuffer instantiation"));
                                  }
                              return (async function (e, r) {
                                  try {
                                      var t = await (async function (e) {
                                          if (!s)
                                              try {
                                                  var r = await o(e);
                                                  return new Uint8Array(r);
                                              } catch {}
                                          if (a) return a(e);
                                          throw "both async and sync fetching of the wasm failed";
                                      })(e);
                                      return await WebAssembly.instantiate(t, r);
                                  } catch (e) {
                                      (M(`failed to asynchronously prepare wasm: ${e}`), j(e));
                                  }
                              })(r, t);
                          })(s, i, r)
                      ).instance,
                  ));
        })()),
        await (async function () {
            ((e = n.preRun) && ("function" == typeof e && (e = [e]), W.push(...e)),
                N(W),
                el && (await (async () => ei)()));
            var e,
                r,
                t = n.setStatus;
            (t && (t("Running..."), await new Promise((e) => setTimeout(e, 1)), setTimeout(t, 1, "")),
                x ||
                    (n.noFSInit || eh.initialized || eh.init(),
                    ee.init(),
                    S.ha(),
                    (eh.ignorePermissions = !1),
                    n.onRuntimeInitialized?.(),
                    (r = n.postRun) && ("function" == typeof r && (r = [r]), R.push(...r)),
                    N(R)));
        })(),
        n
    );
};
