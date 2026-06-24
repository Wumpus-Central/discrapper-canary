i.r(t), i.d(t, { default: () => tm });
var n,
    r,
    o,
    s,
    a,
    d,
    c,
    l,
    p,
    u,
    h,
    m,
    v,
    f,
    g,
    b,
    E,
    S,
    x,
    w,
    y,
    O,
    I = i(874389),
    C = i(72290),
    R = (0, I.t)({
        "../../node_modules/.pnpm/jsnlog@2.30.0/node_modules/jsnlog/jsnlog.js": (e) => {
            var t,
                i,
                n =
                    (e && e.__extends) ||
                    ((t = function (e, i) {
                        return (t =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            })(e, i);
                    }),
                    function (e, i) {
                        function n() {
                            this.constructor = e;
                        }
                        t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                    });
            function r(e) {
                if (!e) return r.__;
                Array.prototype.reduce ||
                    (Array.prototype.reduce = function (e, t) {
                        for (var i = t, n = 0; n < this.length; n++) i = e(i, this[n], n, this);
                        return i;
                    });
                var t = "";
                return ("." + e).split(".").reduce(function (e, i, n, o) {
                    t ? (t += "." + i) : (t = i);
                    var s = e["__" + t];
                    return void 0 === s && ((r.Logger.prototype = e), (s = new r.Logger(t)), (e["__" + t] = s)), s;
                }, r.__);
            }
            !(function (e) {
                function t(e, t, i) {
                    if (void 0 !== t[e]) {
                        if (null === t[e]) return void delete i[e];
                        i[e] = t[e];
                    }
                }
                function i(t) {
                    if (null != e.enabled && !e.enabled) return !1;
                    try {
                        if (t.userAgentRegex && !new RegExp(t.userAgentRegex).test(navigator.userAgent)) return !1;
                    } catch (e) {}
                    try {
                        if (t.ipRegex && e.clientIP && !new RegExp(t.ipRegex).test(e.clientIP)) return !1;
                    } catch (e) {}
                    return !0;
                }
                function r(e, t) {
                    try {
                        if (e.disallow && new RegExp(e.disallow).test(t)) return !1;
                    } catch (e) {}
                    return !0;
                }
                function o(e) {
                    if ("function" == typeof e)
                        if (e instanceof RegExp) return e.toString();
                        else return e();
                    return e;
                }
                (e.requestId = ""),
                    (e.entryId = 0),
                    (e._createXMLHttpRequest = function () {
                        return new XMLHttpRequest();
                    }),
                    (e._getTime = function () {
                        return new Date().getTime();
                    }),
                    (e._console = console),
                    (e._appenderNames = []);
                var s,
                    a = function (e, t, i) {
                        (this.msg = e), (this.meta = t), (this.finalString = i);
                    };
                function d(t) {
                    var i,
                        n = o(t);
                    switch (typeof n) {
                        case "string":
                            return new a(n, null, n);
                        case "number":
                        case "boolean":
                            return new a((i = n.toString()), null, i);
                        case "undefined":
                            return new a("undefined", null, "undefined");
                        case "object":
                            if (
                                n instanceof RegExp ||
                                n instanceof String ||
                                n instanceof Number ||
                                n instanceof Boolean
                            )
                                return new a((i = n.toString()), null, i);
                            return (
                                (i = "function" == typeof e.serialize ? e.serialize.call(this, n) : JSON.stringify(n)),
                                new a("", n, i)
                            );
                        default:
                            return new a("unknown", null, "unknown");
                    }
                }
                function c() {
                    return 1e3;
                }
                function l() {
                    return 2e3;
                }
                function p() {
                    return 3e3;
                }
                function u() {
                    return 4e3;
                }
                function h() {
                    return 5e3;
                }
                function m() {
                    return 6e3;
                }
                (e.setOptions = function (e) {
                    return (
                        t("enabled", e, this),
                        t("maxMessages", e, this),
                        t("defaultAjaxUrl", e, this),
                        t("clientIP", e, this),
                        t("requestId", e, this),
                        t("defaultBeforeSend", e, this),
                        t("serialize", e, this),
                        this
                    );
                }),
                    (e.getAllLevel = function () {
                        return -0x80000000;
                    }),
                    (e.getTraceLevel = c),
                    (e.getDebugLevel = l),
                    (e.getInfoLevel = p),
                    (e.getWarnLevel = u),
                    (e.getErrorLevel = h),
                    (e.getFatalLevel = m),
                    (e.getOffLevel = function () {
                        return 0x7fffffff;
                    });
                var v = function (e, t) {
                    (this.inner = t), (this.name = "JL.Exception"), (this.message = d(e).finalString);
                };
                (e.Exception = v), (v.prototype = Error());
                var f = function (e, t, i, n, r) {
                    (this.l = e), (this.m = t), (this.n = i), (this.t = n), (this.u = r);
                };
                function g(t, i, n) {
                    return e.entryId++, new f(t, i, n, e._getTime(), e.entryId);
                }
                function b(e) {
                    e.id && (clearTimeout(e.id), (e.id = null));
                }
                function E(e, t, i) {
                    var n = this;
                    e.id ||
                        (e.id = setTimeout(function () {
                            i.call(n);
                        }, t));
                }
                e.LogItem = f;
                var S = (function () {
                    function n(t, i) {
                        (this.appenderName = t),
                            (this.sendLogItems = i),
                            (this.level = e.getTraceLevel()),
                            (this.sendWithBufferLevel = 0x7fffffff),
                            (this.storeInBufferLevel = -0x80000000),
                            (this.bufferSize = 0),
                            (this.batchSize = 1),
                            (this.maxBatchSize = 20),
                            (this.batchTimeout = 0x7fffffff),
                            (this.sendTimeout = 5e3),
                            (this.buffer = []),
                            (this.batchBuffer = []),
                            (this.batchTimeoutTimer = { id: null }),
                            (this.sendTimeoutTimer = { id: null }),
                            (this.nbrLogItemsSkipped = 0),
                            (this.nbrLogItemsBeingSent = 0);
                        var n = "Trying to create an appender without a name or with an empty name";
                        if (void 0 == t) throw n;
                        if (-1 != e._appenderNames.indexOf(t)) {
                            if (!t) throw n;
                            throw "Multiple appenders use the same name " + t;
                        }
                        e._appenderNames.push(t);
                    }
                    return (
                        (n.prototype.addLogItemsToBuffer = function (t) {
                            if (this.batchBuffer.length >= this.maxBatchSize) {
                                this.nbrLogItemsSkipped += t.length;
                                return;
                            }
                            if (null != e.maxMessages) {
                                if (e.maxMessages < 1) return;
                                e.maxMessages -= t.length;
                            }
                            this.batchBuffer = this.batchBuffer.concat(t);
                            var i = this;
                            E(this.batchTimeoutTimer, this.batchTimeout, function () {
                                i.sendBatch.call(i);
                            });
                        }),
                        (n.prototype.batchBufferHasOverdueMessages = function () {
                            for (var t = 0; t < this.batchBuffer.length; t++)
                                if (e._getTime() - this.batchBuffer[t].t > this.batchTimeout) return !0;
                            return !1;
                        }),
                        (n.prototype.batchBufferHasStrandedMessage = function () {
                            return null != e.maxMessages && e.maxMessages < 1 && this.batchBuffer.length > 0;
                        }),
                        (n.prototype.sendBatchIfComplete = function () {
                            (this.batchBuffer.length >= this.batchSize ||
                                this.batchBufferHasOverdueMessages() ||
                                this.batchBufferHasStrandedMessage()) &&
                                this.sendBatch();
                        }),
                        (n.prototype.onSendingEnded = function () {
                            b(this.sendTimeoutTimer), (this.nbrLogItemsBeingSent = 0), this.sendBatchIfComplete();
                        }),
                        (n.prototype.setOptions = function (i) {
                            if (
                                (t("level", i, this),
                                t("ipRegex", i, this),
                                t("userAgentRegex", i, this),
                                t("disallow", i, this),
                                t("sendWithBufferLevel", i, this),
                                t("storeInBufferLevel", i, this),
                                t("bufferSize", i, this),
                                t("batchSize", i, this),
                                t("maxBatchSize", i, this),
                                t("batchTimeout", i, this),
                                t("sendTimeout", i, this),
                                this.bufferSize < this.buffer.length && (this.buffer.length = this.bufferSize),
                                this.maxBatchSize < this.batchSize)
                            )
                                throw new e.Exception({
                                    message: "maxBatchSize cannot be smaller than batchSize",
                                    maxBatchSize: this.maxBatchSize,
                                    batchSize: this.batchSize,
                                });
                            return this;
                        }),
                        (n.prototype.log = function (e, t, n, o, s, a, d) {
                            var c;
                            if (i(this) && r(this, a) && !(s < this.storeInBufferLevel)) {
                                if (((c = g(s, a, d)), s < this.level)) {
                                    this.bufferSize > 0 &&
                                        (this.buffer.push(c),
                                        this.buffer.length > this.bufferSize && this.buffer.shift());
                                    return;
                                }
                                this.addLogItemsToBuffer([c]),
                                    s >= this.sendWithBufferLevel &&
                                        this.buffer.length &&
                                        (this.addLogItemsToBuffer(this.buffer), (this.buffer.length = 0)),
                                    this.sendBatchIfComplete();
                            }
                        }),
                        (n.prototype.sendBatch = function () {
                            if (
                                !(this.nbrLogItemsBeingSent > 0) &&
                                (b(this.batchTimeoutTimer), 0 != this.batchBuffer.length)
                            ) {
                                this.nbrLogItemsBeingSent = this.batchBuffer.length;
                                var e = this;
                                E(this.sendTimeoutTimer, this.sendTimeout, function () {
                                    e.onSendingEnded.call(e);
                                }),
                                    this.sendLogItems(this.batchBuffer, function () {
                                        e.batchBuffer.splice(0, e.nbrLogItemsBeingSent),
                                            e.nbrLogItemsSkipped > 0 &&
                                                (e.batchBuffer.push(
                                                    g(
                                                        u(),
                                                        "Lost " +
                                                            e.nbrLogItemsSkipped +
                                                            " messages. Either connection with the server was down or logging was disabled via the enabled option. Reduce lost messages by increasing the ajaxAppender option maxBatchSize.",
                                                        e.appenderName,
                                                    ),
                                                ),
                                                (e.nbrLogItemsSkipped = 0)),
                                            e.onSendingEnded.call(e);
                                    });
                            }
                        }),
                        n
                    );
                })();
                e.Appender = S;
                var x = (function (r) {
                    function o(e) {
                        return r.call(this, e, o.prototype.sendLogItemsAjax) || this;
                    }
                    return (
                        n(o, r),
                        (o.prototype.setOptions = function (e) {
                            return (
                                t("url", e, this), t("beforeSend", e, this), r.prototype.setOptions.call(this, e), this
                            );
                        }),
                        (o.prototype.sendLogItemsAjax = function (t, n) {
                            try {
                                if (!i(this)) return;
                                this.xhr && 0 != this.xhr.readyState && 4 != this.xhr.readyState && this.xhr.abort(),
                                    (this.xhr = e._createXMLHttpRequest());
                                var r = "/jsnlog.logger";
                                null != e.defaultAjaxUrl && (r = e.defaultAjaxUrl),
                                    this.url && (r = this.url),
                                    this.xhr.open("POST", r),
                                    this.xhr.setRequestHeader("Content-Type", "application/json"),
                                    this.xhr.setRequestHeader("JSNLog-RequestId", e.requestId);
                                var o = this;
                                this.xhr.onreadystatechange = function () {
                                    4 == o.xhr.readyState && o.xhr.status >= 200 && o.xhr.status < 300 && n();
                                };
                                var s = { r: e.requestId, lg: t };
                                "function" == typeof this.beforeSend
                                    ? this.beforeSend.call(this, this.xhr, s)
                                    : "function" == typeof e.defaultBeforeSend &&
                                      e.defaultBeforeSend.call(this, this.xhr, s);
                                var a = JSON.stringify(s);
                                this.xhr.send(a);
                            } catch (e) {}
                        }),
                        o
                    );
                })(S);
                e.AjaxAppender = x;
                var w = (function (t) {
                    function r(e) {
                        return t.call(this, e, r.prototype.sendLogItemsConsole) || this;
                    }
                    return (
                        n(r, t),
                        (r.prototype.clog = function (t) {
                            e._console.log(t);
                        }),
                        (r.prototype.cerror = function (t) {
                            e._console.error ? e._console.error(t) : this.clog(t);
                        }),
                        (r.prototype.cwarn = function (t) {
                            e._console.warn ? e._console.warn(t) : this.clog(t);
                        }),
                        (r.prototype.cinfo = function (t) {
                            e._console.info ? e._console.info(t) : this.clog(t);
                        }),
                        (r.prototype.cdebug = function (t) {
                            e._console.debug ? e._console.debug(t) : this.cinfo(t);
                        }),
                        (r.prototype.sendLogItemsConsole = function (t, n) {
                            try {
                                if (!i(this) || !e._console) return;
                                for (r = 0; r < t.length; ++r) {
                                    var r,
                                        o = t[r],
                                        s = o.n + ": " + o.m;
                                    "u" < typeof window && (s = new Date(o.t) + " | " + s),
                                        o.l <= e.getDebugLevel()
                                            ? this.cdebug(s)
                                            : o.l <= e.getInfoLevel()
                                              ? this.cinfo(s)
                                              : o.l <= e.getWarnLevel()
                                                ? this.cwarn(s)
                                                : this.cerror(s);
                                }
                            } catch (e) {}
                            n();
                        }),
                        r
                    );
                })(S);
                (e.ConsoleAppender = w),
                    (e.Logger = (function () {
                        function e(e) {
                            (this.loggerName = e), (this.seenRegexes = []);
                        }
                        return (
                            (e.prototype.setOptions = function (e) {
                                return (
                                    t("level", e, this),
                                    t("userAgentRegex", e, this),
                                    t("disallow", e, this),
                                    t("ipRegex", e, this),
                                    t("appenders", e, this),
                                    t("onceOnly", e, this),
                                    (this.seenRegexes = []),
                                    this
                                );
                            }),
                            (e.prototype.buildExceptionObject = function (e) {
                                var t = {};
                                return (
                                    e.stack ? (t.stack = e.stack) : (t.e = e),
                                    e.message && (t.message = e.message),
                                    e.name && (t.name = e.name),
                                    e.data && (t.data = e.data),
                                    e.inner && (t.inner = this.buildExceptionObject(e.inner)),
                                    t
                                );
                            }),
                            (e.prototype.log = function (e, t, n) {
                                var s,
                                    a,
                                    c = 0;
                                if (!this.appenders) return this;
                                if (
                                    e >= this.level &&
                                    i(this) &&
                                    (n ? ((a = this.buildExceptionObject(n)).logData = o(t)) : (a = t),
                                    r(this, (s = d(a)).finalString))
                                ) {
                                    if (this.onceOnly)
                                        for (c = this.onceOnly.length - 1; c >= 0; ) {
                                            if (new RegExp(this.onceOnly[c]).test(s.finalString)) {
                                                if (this.seenRegexes[c]) return this;
                                                this.seenRegexes[c] = !0;
                                            }
                                            c--;
                                        }
                                    for (s.meta = s.meta || {}, c = this.appenders.length - 1; c >= 0; )
                                        this.appenders[c].log(
                                            e <= 1e3
                                                ? "trace"
                                                : e <= 2e3
                                                  ? "debug"
                                                  : e <= 3e3
                                                    ? "info"
                                                    : e <= 4e3
                                                      ? "warn"
                                                      : e <= 5e3
                                                        ? "error"
                                                        : "fatal",
                                            s.msg,
                                            s.meta,
                                            function () {},
                                            e,
                                            s.finalString,
                                            this.loggerName,
                                        ),
                                            c--;
                                }
                                return this;
                            }),
                            (e.prototype.trace = function (e) {
                                return this.log(c(), e);
                            }),
                            (e.prototype.debug = function (e) {
                                return this.log(l(), e);
                            }),
                            (e.prototype.info = function (e) {
                                return this.log(p(), e);
                            }),
                            (e.prototype.warn = function (e) {
                                return this.log(u(), e);
                            }),
                            (e.prototype.error = function (e) {
                                return this.log(h(), e);
                            }),
                            (e.prototype.fatal = function (e) {
                                return this.log(m(), e);
                            }),
                            (e.prototype.fatalException = function (e, t) {
                                return this.log(m(), e, t);
                            }),
                            e
                        );
                    })()),
                    (e.createAjaxAppender = function (e) {
                        return new x(e);
                    }),
                    (e.createConsoleAppender = function (e) {
                        return new w(e);
                    }),
                    (s = "u" > typeof window ? new x("") : new w("")),
                    (e.__ = new e.Logger("")),
                    e.__.setOptions({ level: e.getDebugLevel(), appenders: [s] });
            })(r || (r = {})),
                void 0 !== e && ((e.__esModule = !0), (e.JL = r)),
                "function" == typeof i &&
                    i.amd &&
                    i("jsnlog", [], function () {
                        return r;
                    }),
                "function" == typeof __jsnlog_configure && __jsnlog_configure(r),
                "u" > typeof window &&
                    !window.onerror &&
                    (window.onerror = function (e, t, i, n, o) {
                        return (
                            r("onerrorLogger").fatalException(
                                {
                                    msg: "Uncaught Exception",
                                    errorMsg: e ? e.message || e : "",
                                    url: t,
                                    "line number": i,
                                    column: n,
                                },
                                o,
                            ),
                            !1
                        );
                    }),
                "u" > typeof window &&
                    !window.onunhandledrejection &&
                    (window.onunhandledrejection = function (e) {
                        r("onerrorLogger").fatalException(
                            { msg: "unhandledrejection", errorMsg: e.reason ? e.reason.message : e.message || null },
                            e.reason,
                        );
                    });
        },
    }),
    k = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Enums/LocalRecorderState.js":
            (e) => {
                var t, i;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.LocalRecorderState = void 0),
                    ((i = t || (e.LocalRecorderState = t = {})).READY = "READY"),
                    (i.RECORDING = "RECORDING"),
                    (i.PAUSED = "PAUSED"),
                    (i.FINISHED = "FINISHED");
            },
    }),
    T = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Logger/ConsoleLogger.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ConsoleLogger = void 0),
                    (e.ConsoleLogger = class {
                        constructor(e) {
                            (this.logger = e),
                                (this.log = e.log),
                                (this.info = e.info),
                                (this.debug = e.debug),
                                (this.warn = e.warn),
                                (this.error = e.error);
                        }
                    });
            },
    }),
    P = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Logger/OpenViduLoggerConfiguration.js":
            (e) => {
                var t, i;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.OpenViduLoggerConfiguration = void 0),
                    ((i = t || (e.OpenViduLoggerConfiguration = t = {})).disabled = "disabled"),
                    (i.debug = "debug"),
                    (i.debug_app = "debug_app");
            },
    }),
    N = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Logger/OpenViduLogger.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.OpenViduLogger = void 0);
                let t = R(),
                    i = T(),
                    n = P();
                e.OpenViduLogger = class e {
                    constructor() {
                        (this.JSNLOG_URL = "/openvidu/elk/openvidu-browser-logs"),
                            (this.MAX_JSNLOG_BATCH_LOG_MESSAGES = 100),
                            (this.MAX_MSECONDS_BATCH_MESSAGES = 5e3),
                            (this.MAX_LENGTH_STRING_JSON = 1e3),
                            (this.defaultConsoleLogger = new i.ConsoleLogger(globalThis.console)),
                            (this.isProdMode = !1),
                            (this.isJSNLogSetup = !1);
                    }
                    static configureJSNLog(e, i) {
                        try {
                            if (
                                globalThis.LOG_JSNLOG_RESULTS ||
                                (this.instance &&
                                    e.isAtLeastPro &&
                                    this.instance.isOpenViduBrowserLogsDebugActive(e) &&
                                    this.instance.canConfigureJSNLog(e, this.instance))
                            ) {
                                e.sendBrowserLogs === n.OpenViduLoggerConfiguration.debug_app &&
                                    this.instance.replaceWindowConsole(),
                                    (this.instance.isJSNLogSetup = !1),
                                    this.instance.info("Configuring JSNLogs.");
                                let r = e.finalUserId,
                                    o = e.session.sessionId,
                                    s = (e) => {
                                        let t = e.onreadystatechange;
                                        (e.onreadystatechange = () => {
                                            this.isInvalidResponse(e) &&
                                                (Object.defineProperty(e, "readyState", { value: 4 }),
                                                Object.defineProperty(e, "status", { value: 200 }),
                                                this.instance.disableLogger()),
                                                t();
                                        }),
                                            e.setRequestHeader("Authorization", "Basic " + btoa(`${r}%/%${o}:` + i)),
                                            e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                                            e.setRequestHeader("OV-Final-User-Id", r),
                                            e.setRequestHeader("OV-Session-Id", o),
                                            e.setRequestHeader("OV-Token", i);
                                    };
                                (this.instance.currentAppender = t.JL.createAjaxAppender(`appender-${r}-${o}`)),
                                    this.instance.currentAppender.setOptions({
                                        beforeSend: s,
                                        maxBatchSize: 1e3,
                                        batchSize: this.instance.MAX_JSNLOG_BATCH_LOG_MESSAGES,
                                        batchTimeout: this.instance.MAX_MSECONDS_BATCH_MESSAGES,
                                    });
                                let a = (e) => {
                                    let t,
                                        i = JSON.stringify(
                                            e,
                                            ((t = new WeakSet()),
                                            (e, i) => {
                                                if ("object" == typeof i && null != i) {
                                                    if (
                                                        t.has(i) ||
                                                        (globalThis.HTMLElement && i instanceof HTMLElement)
                                                    )
                                                        return;
                                                    t.add(i);
                                                }
                                                return i;
                                            }),
                                        );
                                    return (
                                        i.length > this.instance.MAX_LENGTH_STRING_JSON &&
                                            (i = `${i.substring(0, this.instance.MAX_LENGTH_STRING_JSON)}...`),
                                        globalThis.LOG_JSNLOG_RESULTS && console.log(i),
                                        i
                                    );
                                };
                                t.JL.setOptions({
                                    defaultAjaxUrl: e.httpUri + this.instance.JSNLOG_URL,
                                    serialize: a,
                                    enabled: !0,
                                }),
                                    (0, t.JL)().setOptions({ appenders: [this.instance.currentAppender] }),
                                    (this.instance.isJSNLogSetup = !0),
                                    (this.instance.loggingSessionId = o),
                                    this.instance.info("JSNLog configured.");
                            }
                        } catch (e) {
                            console.error("Error configuring JSNLog: "),
                                console.error(e),
                                this.instance.disableLogger();
                        }
                    }
                    static getInstance() {
                        return e.instance || (e.instance = new e()), e.instance;
                    }
                    static isInvalidResponse(e) {
                        return 401 == e.status || 403 == e.status || 404 == e.status || 0 == e.status;
                    }
                    canConfigureJSNLog(e, t) {
                        return e.session.sessionId != t.loggingSessionId;
                    }
                    isOpenViduBrowserLogsDebugActive(e) {
                        return (
                            e.sendBrowserLogs === n.OpenViduLoggerConfiguration.debug ||
                            e.sendBrowserLogs === n.OpenViduLoggerConfiguration.debug_app
                        );
                    }
                    getConsoleWithJSNLog() {
                        var e;
                        return (
                            (e = this),
                            {
                                log: function () {
                                    e.defaultConsoleLogger.log.apply(e.defaultConsoleLogger.logger, arguments),
                                        e.isJSNLogSetup && (0, t.JL)().info(arguments);
                                },
                                info: function () {
                                    e.defaultConsoleLogger.info.apply(e.defaultConsoleLogger.logger, arguments),
                                        e.isJSNLogSetup && (0, t.JL)().info(arguments);
                                },
                                debug: function () {
                                    e.defaultConsoleLogger.debug.apply(e.defaultConsoleLogger.logger, arguments);
                                },
                                warn: function () {
                                    e.defaultConsoleLogger.warn.apply(e.defaultConsoleLogger.logger, arguments),
                                        e.isJSNLogSetup && (0, t.JL)().warn(arguments);
                                },
                                error: function () {
                                    e.defaultConsoleLogger.error.apply(e.defaultConsoleLogger.logger, arguments),
                                        e.isJSNLogSetup && (0, t.JL)().error(arguments);
                                },
                            }
                        );
                    }
                    replaceWindowConsole() {
                        (globalThis.console = this.defaultConsoleLogger.logger),
                            (globalThis.console.log = this.getConsoleWithJSNLog().log),
                            (globalThis.console.info = this.getConsoleWithJSNLog().info),
                            (globalThis.console.debug = this.getConsoleWithJSNLog().debug),
                            (globalThis.console.warn = this.getConsoleWithJSNLog().warn),
                            (globalThis.console.error = this.getConsoleWithJSNLog().error);
                    }
                    disableLogger() {
                        t.JL.setOptions({ enabled: !1 }),
                            (this.isJSNLogSetup = !1),
                            (this.loggingSessionId = void 0),
                            (this.currentAppender = void 0),
                            (globalThis.console = this.defaultConsoleLogger.logger),
                            (globalThis.console.log = this.defaultConsoleLogger.log),
                            (globalThis.console.info = this.defaultConsoleLogger.info),
                            (globalThis.console.debug = this.defaultConsoleLogger.debug),
                            (globalThis.console.warn = this.defaultConsoleLogger.warn),
                            (globalThis.console.error = this.defaultConsoleLogger.error);
                    }
                    log() {
                        this.isProdMode ||
                            this.defaultConsoleLogger.log.apply(this.defaultConsoleLogger.logger, arguments),
                            this.isJSNLogSetup && (0, t.JL)().info(arguments);
                    }
                    debug() {
                        this.isProdMode ||
                            this.defaultConsoleLogger.debug.apply(this.defaultConsoleLogger.logger, arguments);
                    }
                    info() {
                        this.isProdMode ||
                            this.defaultConsoleLogger.info.apply(this.defaultConsoleLogger.logger, arguments),
                            this.isJSNLogSetup && (0, t.JL)().info(arguments);
                    }
                    warn() {
                        this.defaultConsoleLogger.warn.apply(this.defaultConsoleLogger.logger, arguments),
                            this.isJSNLogSetup && (0, t.JL)().warn(arguments);
                    }
                    error() {
                        this.defaultConsoleLogger.error.apply(this.defaultConsoleLogger.logger, arguments),
                            this.isJSNLogSetup && (0, t.JL)().error(arguments);
                    }
                    flush() {
                        this.isJSNLogSetup && null != this.currentAppender && this.currentAppender.sendBatch();
                    }
                    enableProdMode() {
                        this.isProdMode = !0;
                    }
                };
            },
    }),
    _ = (0, I.t)({
        "../../node_modules/.pnpm/platform@1.3.6/node_modules/platform/platform.js": (e, t) => {
            (function () {
                var i = { function: !0, object: !0 },
                    n = (i[typeof window] && window) || this,
                    r = i[typeof e] && e,
                    o = i[typeof t] && t && !t.nodeType && t,
                    s = r && o && "object" == typeof global && global;
                s && (s.global === s || s.window === s || s.self === s) && (n = s);
                var a = /\bOpera/,
                    d = Object.prototype,
                    c = d.hasOwnProperty,
                    l = d.toString;
                function p(e) {
                    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
                }
                function u(e) {
                    return (e = g(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e);
                }
                function h(e, t) {
                    for (var i in e) c.call(e, i) && t(e[i], i, e);
                }
                function m(e) {
                    return null == e ? p(e) : l.call(e).slice(8, -1);
                }
                function v(e) {
                    return String(e).replace(/([ -])(?!$)/g, "$1?");
                }
                function f(e, t) {
                    var i = null,
                        n = function (n, r) {
                            i = t(i, n, r, e);
                        },
                        r = -1,
                        o = e ? e.length : 0;
                    if ("number" == typeof o && o > -1 && o <= 0x1fffffffffffff) for (; ++r < o; ) n(e[r], r, e);
                    else h(e, n);
                    return i;
                }
                function g(e) {
                    return String(e).replace(/^ +| +$/g, "");
                }
                function b(e) {
                    var t,
                        i,
                        r,
                        o,
                        s,
                        d = n,
                        c = e && "object" == typeof e && "String" != m(e);
                    c && ((d = e), (e = null));
                    var p = d.navigator || {},
                        E = p.userAgent || "";
                    e || (e = E);
                    var S = c ? !!p.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(l.toString()),
                        x = "Object",
                        w = c && d.java ? "JavaPackage" : m(d.java),
                        y = /\bJava/.test(w) && d.java,
                        O = y && m(d.environment) == (c ? x : "Environment"),
                        I = y ? "a" : "\u03B1",
                        C = y ? "b" : "\u03B2",
                        R = d.document || {},
                        k = d.operamini || d.opera,
                        T = a.test((T = c && k ? k["[[Class]]"] : m(k))) ? T : (k = null),
                        P = e,
                        N = [],
                        _ = null,
                        L = e == E,
                        V = L && k && "function" == typeof k.version && k.version(),
                        M = f(
                            [
                                { label: "EdgeHTML", pattern: "Edge" },
                                "Trident",
                                { label: "WebKit", pattern: "AppleWebKit" },
                                "iCab",
                                "Presto",
                                "NetFront",
                                "Tasman",
                                "KHTML",
                                "Gecko",
                            ],
                            function (t, i) {
                                return (
                                    t || (RegExp("\\b" + (i.pattern || v(i)) + "\\b", "i").exec(e) && (i.label || i))
                                );
                            },
                        ),
                        A = f(
                            [
                                "Adobe AIR",
                                "Arora",
                                "Avant Browser",
                                "Breach",
                                "Camino",
                                "Electron",
                                "Epiphany",
                                "Fennec",
                                "Flock",
                                "Galeon",
                                "GreenBrowser",
                                "iCab",
                                "Iceweasel",
                                "K-Meleon",
                                "Konqueror",
                                "Lunascape",
                                "Maxthon",
                                { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" },
                                "Midori",
                                "Nook Browser",
                                "PaleMoon",
                                "PhantomJS",
                                "Raven",
                                "Rekonq",
                                "RockMelt",
                                { label: "Samsung Internet", pattern: "SamsungBrowser" },
                                "SeaMonkey",
                                { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                                "Sleipnir",
                                "SlimBrowser",
                                { label: "SRWare Iron", pattern: "Iron" },
                                "Sunrise",
                                "Swiftfox",
                                "Vivaldi",
                                "Waterfox",
                                "WebPositive",
                                { label: "Yandex Browser", pattern: "YaBrowser" },
                                { label: "UC Browser", pattern: "UCBrowser" },
                                "Opera Mini",
                                { label: "Opera Mini", pattern: "OPiOS" },
                                "Opera",
                                { label: "Opera", pattern: "OPR" },
                                "Chromium",
                                "Chrome",
                                { label: "Chrome", pattern: "(?:HeadlessChrome)" },
                                { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                                { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                                { label: "Firefox for iOS", pattern: "FxiOS" },
                                { label: "IE", pattern: "IEMobile" },
                                { label: "IE", pattern: "MSIE" },
                                "Safari",
                            ],
                            function (t, i) {
                                return (
                                    t || (RegExp("\\b" + (i.pattern || v(i)) + "\\b", "i").exec(e) && (i.label || i))
                                );
                            },
                        ),
                        D = U([
                            { label: "BlackBerry", pattern: "BB10" },
                            "BlackBerry",
                            { label: "Galaxy S", pattern: "GT-I9000" },
                            { label: "Galaxy S2", pattern: "GT-I9100" },
                            { label: "Galaxy S3", pattern: "GT-I9300" },
                            { label: "Galaxy S4", pattern: "GT-I9500" },
                            { label: "Galaxy S5", pattern: "SM-G900" },
                            { label: "Galaxy S6", pattern: "SM-G920" },
                            { label: "Galaxy S6 Edge", pattern: "SM-G925" },
                            { label: "Galaxy S7", pattern: "SM-G930" },
                            { label: "Galaxy S7 Edge", pattern: "SM-G935" },
                            "Google TV",
                            "Lumia",
                            "iPad",
                            "iPod",
                            "iPhone",
                            "Kindle",
                            { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
                            "Nexus",
                            "Nook",
                            "PlayBook",
                            "PlayStation Vita",
                            "PlayStation",
                            "TouchPad",
                            "Transformer",
                            { label: "Wii U", pattern: "WiiU" },
                            "Wii",
                            "Xbox One",
                            { label: "Xbox 360", pattern: "Xbox" },
                            "Xoom",
                        ]),
                        j = f(
                            {
                                Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                                Alcatel: {},
                                Archos: {},
                                Amazon: { Kindle: 1, "Kindle Fire": 1 },
                                Asus: { Transformer: 1 },
                                "Barnes & Noble": { Nook: 1 },
                                BlackBerry: { PlayBook: 1 },
                                Google: { "Google TV": 1, Nexus: 1 },
                                HP: { TouchPad: 1 },
                                HTC: {},
                                Huawei: {},
                                Lenovo: {},
                                LG: {},
                                Microsoft: { Xbox: 1, "Xbox One": 1 },
                                Motorola: { Xoom: 1 },
                                Nintendo: { "Wii U": 1, Wii: 1 },
                                Nokia: { Lumia: 1 },
                                Oppo: {},
                                Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
                                Sony: { PlayStation: 1, "PlayStation Vita": 1 },
                                Xiaomi: { Mi: 1, Redmi: 1 },
                            },
                            function (t, i, n) {
                                return (
                                    t ||
                                    ((i[D] ||
                                        i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(D)] ||
                                        RegExp("\\b" + v(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) &&
                                        n)
                                );
                            },
                        ),
                        B = f(
                            [
                                "Windows Phone",
                                "KaiOS",
                                "Android",
                                "CentOS",
                                { label: "Chrome OS", pattern: "CrOS" },
                                "Debian",
                                { label: "DragonFly BSD", pattern: "DragonFly" },
                                "Fedora",
                                "FreeBSD",
                                "Gentoo",
                                "Haiku",
                                "Kubuntu",
                                "Linux Mint",
                                "OpenBSD",
                                "Red Hat",
                                "SuSE",
                                "Ubuntu",
                                "Xubuntu",
                                "Cygwin",
                                "Symbian OS",
                                "hpwOS",
                                "webOS ",
                                "webOS",
                                "Tablet OS",
                                "Tizen",
                                "Linux",
                                "Mac OS X",
                                "Macintosh",
                                "Mac",
                                "Windows 98;",
                                "Windows ",
                            ],
                            function (t, i) {
                                var n,
                                    r,
                                    o,
                                    s = i.pattern || v(i);
                                return (
                                    !t &&
                                        (t = RegExp("\\b" + s + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) &&
                                        ((n = t),
                                        (r = i.label || i),
                                        (o = {
                                            "10.0": "10",
                                            6.4: "10 Technical Preview",
                                            6.3: "8.1",
                                            6.2: "8",
                                            6.1: "Server 2008 R2 / 7",
                                            "6.0": "Server 2008 / Vista",
                                            5.2: "Server 2003 / XP 64-bit",
                                            5.1: "XP",
                                            5.01: "2000 SP1",
                                            "5.0": "2000",
                                            "4.0": "NT",
                                            "4.90": "ME",
                                        }),
                                        s &&
                                            r &&
                                            /^Win/i.test(n) &&
                                            !/^Windows Phone /i.test(n) &&
                                            (o = o[/[\d.]+$/.exec(n)]) &&
                                            (n = "Windows " + o),
                                        (n = String(n)),
                                        s && r && (n = n.replace(RegExp(s, "i"), r)),
                                        (t = n =
                                            u(
                                                n
                                                    .replace(/ ce$/i, " CE")
                                                    .replace(/\bhpw/i, "web")
                                                    .replace(/\bMacintosh\b/, "Mac OS")
                                                    .replace(/_PowerPC\b/i, " OS")
                                                    .replace(/\b(OS X) [^ \d]+/i, "$1")
                                                    .replace(/\bMac (OS X)\b/, "$1")
                                                    .replace(/\/(\d)/, " $1")
                                                    .replace(/_/g, ".")
                                                    .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                                                    .replace(/\bx86\.64\b/gi, "x86_64")
                                                    .replace(/\b(Windows Phone) OS\b/, "$1")
                                                    .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                                                    .split(" on ")[0],
                                            ))),
                                    t
                                );
                            },
                        );
                    function U(t) {
                        return f(t, function (t, i) {
                            var n = i.pattern || v(i);
                            return (
                                !t &&
                                    (t =
                                        RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(e) ||
                                        RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(e) ||
                                        RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(
                                            e,
                                        )) &&
                                    ((t = String(i.label && !RegExp(n, "i").test(i.label) ? i.label : t).split(
                                        "/",
                                    ))[1] &&
                                        !/[\d.]+/.test(t[0]) &&
                                        (t[0] += " " + t[1]),
                                    (i = i.label || i),
                                    (t = u(
                                        t[0]
                                            .replace(RegExp(n, "i"), i)
                                            .replace(RegExp("; *(?:" + i + "[_-])?", "i"), " ")
                                            .replace(RegExp("(" + i + ")[-_.]?(\\w)", "i"), "$1 $2"),
                                    ))),
                                t
                            );
                        });
                    }
                    function F(t) {
                        return f(t, function (t, i) {
                            return (
                                t ||
                                (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) ||
                                    0)[1] ||
                                null
                            );
                        });
                    }
                    if (
                        (M && (M = [M]),
                        /\bAndroid\b/.test(B) &&
                            !D &&
                            (o = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) &&
                            (D = g(o[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                        j && !D
                            ? (D = U([j]))
                            : j &&
                              D &&
                              (D = D.replace(RegExp("^(" + v(j) + ")[-_.\\s]", "i"), j + " ").replace(
                                  RegExp("^(" + v(j) + ")[-_.]?(\\w)", "i"),
                                  j + " $2",
                              )),
                        (o = /\bGoogle TV\b/.exec(D)) && (D = o[0]),
                        /\bSimulator\b/i.test(e) && (D = (D ? D + " " : "") + "Simulator"),
                        "Opera Mini" == A && /\bOPiOS\b/.test(e) && N.push("running in Turbo/Uncompressed mode"),
                        "IE" == A && /\blike iPhone OS\b/.test(e)
                            ? ((j = (o = b(e.replace(/like iPhone OS/, ""))).manufacturer), (D = o.product))
                            : /^iP/.test(D)
                              ? (A || (A = "Safari"),
                                (B = "iOS" + ((o = / OS ([\d_]+)/i.exec(e)) ? " " + o[1].replace(/_/g, ".") : "")))
                              : "Konqueror" == A && /^Linux\b/i.test(B)
                                ? (B = "Kubuntu")
                                : (j &&
                                        "Google" != j &&
                                        ((/Chrome/.test(A) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(D))) ||
                                    (/\bAndroid\b/.test(B) && /^Chrome/.test(A) && /\bVersion\//i.test(e))
                                  ? ((A = "Android Browser"), (B = /\bAndroid\b/.test(B) ? B : "Android"))
                                  : "Silk" == A
                                    ? (/\bMobi/i.test(e) || ((B = "Android"), N.unshift("desktop mode")),
                                      /Accelerated *= *true/i.test(e) && N.unshift("accelerated"))
                                    : "UC Browser" == A && /\bUCWEB\b/.test(e)
                                      ? N.push("speed mode")
                                      : "PaleMoon" == A && (o = /\bFirefox\/([\d.]+)\b/.exec(e))
                                        ? N.push("identifying as Firefox " + o[1])
                                        : "Firefox" == A && (o = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                                          ? (B || (B = "Firefox OS"), D || (D = o[1]))
                                          : !A || (o = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(A))
                                            ? (A &&
                                                  !D &&
                                                  /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(o + "/") + 8)) &&
                                                  (A = null),
                                              (o = D || j || B) &&
                                                  (D || j || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) &&
                                                  (A =
                                                      /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : o) +
                                                      " Browser"))
                                            : "Electron" == A &&
                                              (o = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                                              N.push("Chromium " + o),
                        V ||
                            (V = F([
                                "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                                "Version",
                                v(A),
                                "(?:Firefox|Minefield|NetFront)",
                            ])),
                        (o =
                            ("iCab" == M && parseFloat(V) > 3 && "WebKit") ||
                            (/\bOpera\b/.test(A) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) ||
                            (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(M) && "WebKit") ||
                            (!M && /\bMSIE\b/i.test(e) && ("Mac OS" == B ? "Tasman" : "Trident")) ||
                            ("WebKit" == M && /\bPlayStation\b(?! Vita\b)/i.test(A) && "NetFront")) && (M = [o]),
                        "IE" == A && (o = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                            ? ((A += " Mobile"),
                              (B = "Windows Phone " + (/\+$/.test(o) ? o : o + ".x")),
                              N.unshift("desktop mode"))
                            : /\bWPDesktop\b/i.test(e)
                              ? ((A = "IE Mobile"),
                                (B = "Windows Phone 8.x"),
                                N.unshift("desktop mode"),
                                V || (V = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                              : "IE" != A &&
                                "Trident" == M &&
                                (o = /\brv:([\d.]+)/.exec(e)) &&
                                (A && N.push("identifying as " + A + (V ? " " + V : "")), (A = "IE"), (V = o[1])),
                        L)
                    ) {
                        if (
                            ((i = "global"),
                            (r = null != (t = d) ? typeof t[i] : "number"),
                            /^(?:boolean|number|string|undefined)$/.test(r) || ("object" == r && !t[i]))
                        )
                            m((o = d.runtime)) == (c ? x : "ScriptBridgingProxyObject")
                                ? ((A = "Adobe AIR"), (B = o.flash.system.Capabilities.os))
                                : m((o = d.phantom)) == (c ? x : "RuntimeObject")
                                  ? ((A = "PhantomJS"),
                                    (V = (o = o.version || null) && o.major + "." + o.minor + "." + o.patch))
                                  : "number" == typeof R.documentMode && (o = /\bTrident\/(\d+)/i.exec(e))
                                    ? ((V = [V, R.documentMode]),
                                      (o = +o[1] + 4) != V[1] &&
                                          (N.push("IE " + V[1] + " mode"), M && (M[1] = ""), (V[1] = o)),
                                      (V = "IE" == A ? String(V[1].toFixed(1)) : V[0]))
                                    : "number" == typeof R.documentMode &&
                                      /^(?:Chrome|Firefox)\b/.test(A) &&
                                      (N.push("masking as " + A + " " + V),
                                      (A = "IE"),
                                      (V = "11.0"),
                                      (M = ["Trident"]),
                                      (B = "Windows"));
                        else if (
                            (y &&
                                ((P = (o = y.lang.System).getProperty("os.arch")),
                                (B = B || o.getProperty("os.name") + " " + o.getProperty("os.version"))),
                            O)
                        ) {
                            try {
                                (V = d.require("ringo/engine").version.join(".")), (A = "RingoJS");
                            } catch (e) {
                                (o = d.system) &&
                                    o.global.system == d.system &&
                                    ((A = "Narwhal"), B || (B = o[0].os || null));
                            }
                            A || (A = "Rhino");
                        } else
                            "object" == typeof d.process &&
                                !d.process.browser &&
                                (o = d.process) &&
                                ("object" == typeof o.versions &&
                                    ("string" == typeof o.versions.electron
                                        ? (N.push("Node " + o.versions.node),
                                          (A = "Electron"),
                                          (V = o.versions.electron))
                                        : "string" == typeof o.versions.nw &&
                                          (N.push("Chromium " + V, "Node " + o.versions.node),
                                          (A = "NW.js"),
                                          (V = o.versions.nw))),
                                A ||
                                    ((A = "Node.js"),
                                    (P = o.arch),
                                    (B = o.platform),
                                    (V = (V = /[\d.]+/.exec(o.version)) ? V[0] : null)));
                        B = B && u(B);
                    }
                    if (
                        (V &&
                            (o =
                                /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(V) ||
                                /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (L && p.appMinorVersion)) ||
                                (/\bMinefield\b/i.test(e) && "a")) &&
                            ((_ = /b/i.test(o) ? "beta" : "alpha"),
                            (V =
                                V.replace(RegExp(o + "\\+?$"), "") + ("beta" == _ ? C : I) + (/\d+\+?/.exec(o) || ""))),
                        "Fennec" == A || ("Firefox" == A && /\b(?:Android|Firefox OS|KaiOS)\b/.test(B)))
                    )
                        A = "Firefox Mobile";
                    else if ("Maxthon" == A && V) V = V.replace(/\.[\d.]+/, ".x");
                    else if (/\bXbox\b/i.test(D))
                        "Xbox 360" == D && (B = null),
                            "Xbox 360" == D && /\bIEMobile\b/.test(e) && N.unshift("mobile mode");
                    else if (
                        (/^(?:Chrome|IE|Opera)$/.test(A) || (A && !D && !/Browser|Mobi/.test(A))) &&
                        ("Windows CE" == B || /Mobi/i.test(e))
                    )
                        A += " Mobile";
                    else if ("IE" == A && L)
                        try {
                            null === d.external && N.unshift("platform preview");
                        } catch (e) {
                            N.unshift("embedded");
                        }
                    else
                        (/\bBlackBerry\b/.test(D) || /\bBB10\b/.test(e)) &&
                        (o = (RegExp(D.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || V)
                            ? ((B =
                                  ((o = [o, /BB10/.test(e)])[1]
                                      ? ((D = null), (j = "BlackBerry"))
                                      : "Device Software") +
                                  " " +
                                  o[0]),
                              (V = null))
                            : this != h &&
                              "Wii" != D &&
                              ((L && k) ||
                                  (/Opera/.test(A) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                                  ("Firefox" == A && /\bOS X (?:\d+\.){2,}/.test(B)) ||
                                  ("IE" == A &&
                                      ((B && !/^Win/.test(B) && V > 5.5) ||
                                          (/\bWindows XP\b/.test(B) && V > 8) ||
                                          (8 == V && !/\bTrident\b/.test(e))))) &&
                              !a.test((o = b.call(h, e.replace(a, "") + ";"))) &&
                              o.name &&
                              ((o = "ing as " + o.name + ((o = o.version) ? " " + o : "")),
                              a.test(A)
                                  ? (/\bIE\b/.test(o) && "Mac OS" == B && (B = null), (o = "identify" + o))
                                  : ((o = "mask" + o),
                                    (A = T ? u(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                                    /\bIE\b/.test(o) && (B = null),
                                    L || (V = null)),
                              (M = ["Presto"]),
                              N.push(o));
                    (o = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                        ((o = [parseFloat(o.replace(/\.(\d)$/, ".0$1")), o]),
                        "Safari" == A && "+" == o[1].slice(-1)
                            ? ((A = "WebKit Nightly"), (_ = "alpha"), (V = o[1].slice(0, -1)))
                            : (V == o[1] || V == (o[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (V = null),
                        (o[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]),
                        537.36 == o[0] && 537.36 == o[2] && parseFloat(o[1]) >= 28 && "WebKit" == M && (M = ["Blink"]),
                        L && (S || o[1])
                            ? (M && (M[1] = "like Chrome"),
                              (o =
                                  o[1] ||
                                  ((o = o[0]) < 530
                                      ? 1
                                      : o < 532
                                        ? 2
                                        : o < 532.05
                                          ? 3
                                          : o < 533
                                            ? 4
                                            : o < 534.03
                                              ? 5
                                              : o < 534.07
                                                ? 6
                                                : o < 534.1
                                                  ? 7
                                                  : o < 534.13
                                                    ? 8
                                                    : o < 534.16
                                                      ? 9
                                                      : o < 534.24
                                                        ? 10
                                                        : o < 534.3
                                                          ? 11
                                                          : o < 535.01
                                                            ? 12
                                                            : o < 535.02
                                                              ? "13+"
                                                              : o < 535.07
                                                                ? 15
                                                                : o < 535.11
                                                                  ? 16
                                                                  : o < 535.19
                                                                    ? 17
                                                                    : o < 536.05
                                                                      ? 18
                                                                      : o < 536.1
                                                                        ? 19
                                                                        : o < 537.01
                                                                          ? 20
                                                                          : o < 537.11
                                                                            ? "21+"
                                                                            : o < 537.13
                                                                              ? 23
                                                                              : o < 537.18
                                                                                ? 24
                                                                                : o < 537.24
                                                                                  ? 25
                                                                                  : o < 537.36
                                                                                    ? 26
                                                                                    : "Blink" != M
                                                                                      ? "27"
                                                                                      : "28")))
                            : (M && (M[1] = "like Safari"),
                              (o =
                                  (o = o[0]) < 400
                                      ? 1
                                      : o < 500
                                        ? 2
                                        : o < 526
                                          ? 3
                                          : o < 533
                                            ? 4
                                            : o < 534
                                              ? "4+"
                                              : o < 535
                                                ? 5
                                                : o < 537
                                                  ? 6
                                                  : o < 538
                                                    ? 7
                                                    : o < 601
                                                      ? 8
                                                      : o < 602
                                                        ? 9
                                                        : o < 604
                                                          ? 10
                                                          : o < 606
                                                            ? 11
                                                            : o < 608
                                                              ? 12
                                                              : "12")),
                        M && (M[1] += " " + (o += "number" == typeof o ? ".x" : /[.+]/.test(o) ? "" : "+")),
                        "Safari" == A && (!V || parseInt(V) > 45)
                            ? (V = o)
                            : "Chrome" == A && /\bHeadlessChrome/i.test(e) && N.unshift("headless")),
                        "Opera" == A && (o = /\bzbov|zvav$/.exec(B))
                            ? ((A += " "),
                              N.unshift("desktop mode"),
                              "zvav" == o ? ((A += "Mini"), (V = null)) : (A += "Mobile"),
                              (B = B.replace(RegExp(" *" + o + "$"), "")))
                            : "Safari" == A && /\bChrome\b/.exec(M && M[1])
                              ? (N.unshift("desktop mode"),
                                (A = "Chrome Mobile"),
                                (V = null),
                                /\bOS X\b/.test(B) ? ((j = "Apple"), (B = "iOS 4.3+")) : (B = null))
                              : /\bSRWare Iron\b/.test(A) && !V && (V = F("Chrome")),
                        V &&
                            0 == V.indexOf((o = /[\d.]+$/.exec(B))) &&
                            e.indexOf("/" + o + "-") > -1 &&
                            (B = g(B.replace(o, ""))),
                        B &&
                            -1 != B.indexOf(A) &&
                            !RegExp(A + " OS").test(B) &&
                            (B = B.replace(RegExp(" *" + v(A) + " *"), "")),
                        M &&
                            !/\b(?:Avant|Nook)\b/.test(A) &&
                            (/Browser|Lunascape|Maxthon/.test(A) ||
                                ("Safari" != A && /^iOS/.test(B) && /\bSafari\b/.test(M[1])) ||
                                (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                                    A,
                                ) &&
                                    M[1])) &&
                            (o = M[M.length - 1]) &&
                            N.push(o),
                        N.length && (N = ["(" + N.join("; ") + ")"]),
                        j && D && 0 > D.indexOf(j) && N.push("on " + j),
                        D && N.push((/^on /.test(N[N.length - 1]) ? "" : "on ") + D),
                        B &&
                            ((s = (o = / ([\d.+]+)$/.exec(B)) && "/" == B.charAt(B.length - o[0].length - 1)),
                            (B = {
                                architecture: 32,
                                family: o && !s ? B.replace(o[0], "") : B,
                                version: o ? o[1] : null,
                                toString: function () {
                                    var e = this.version;
                                    return (
                                        this.family +
                                        (e && !s ? " " + e : "") +
                                        (64 == this.architecture ? " 64-bit" : "")
                                    );
                                },
                            })),
                        (o = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(P)) && !/\bi686\b/i.test(P)
                            ? (B && ((B.architecture = 64), (B.family = B.family.replace(RegExp(" *" + o), ""))),
                              A &&
                                  (/\bWOW64\b/i.test(e) ||
                                      (L &&
                                          /\w(?:86|32)$/.test(p.cpuClass || p.platform) &&
                                          !/\bWin64; x64\b/i.test(e))) &&
                                  N.unshift("32-bit"))
                            : B &&
                              /^OS X/.test(B.family) &&
                              "Chrome" == A &&
                              parseFloat(V) >= 39 &&
                              (B.architecture = 64),
                        e || (e = null);
                    var $ = {};
                    return (
                        ($.description = e),
                        ($.layout = M && M[0]),
                        ($.manufacturer = j),
                        ($.name = A),
                        ($.prerelease = _),
                        ($.product = D),
                        ($.ua = e),
                        ($.version = A && V),
                        ($.os = B || {
                            architecture: null,
                            family: null,
                            version: null,
                            toString: function () {
                                return "null";
                            },
                        }),
                        ($.parse = b),
                        ($.toString = function () {
                            return this.description || "";
                        }),
                        $.version && N.unshift(V),
                        $.name && N.unshift(A),
                        B &&
                            A &&
                            !(B == String(B).split(" ")[0] && (B == A.split(" ")[0] || D)) &&
                            N.push(D ? "(" + B + ")" : "on " + B),
                        N.length && ($.description = N.join(" ")),
                        $
                    );
                }
                var E = b();
                "function" == typeof define && "object" == typeof define.amd && define.amd
                    ? ((n.platform = E),
                      define(function () {
                          return E;
                      }))
                    : r && o
                      ? h(E, function (e, t) {
                            r[t] = e;
                        })
                      : (n.platform = E);
            }).call(e);
        },
    }),
    L = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Utils/Platform.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.PlatformUtils = void 0);
                let t = _();
                e.PlatformUtils = class e {
                    static getInstance() {
                        return this.instance || (this.instance = new e()), e.instance;
                    }
                    isChromeBrowser() {
                        return "Chrome" === t.name;
                    }
                    isSafariBrowser() {
                        return "Safari" === t.name;
                    }
                    isChromeMobileBrowser() {
                        return "Chrome Mobile" === t.name;
                    }
                    isFirefoxBrowser() {
                        return "Firefox" === t.name;
                    }
                    isFirefoxMobileBrowser() {
                        return "Firefox Mobile" === t.name || "Firefox for iOS" === t.name;
                    }
                    isOperaBrowser() {
                        return "Opera" === t.name;
                    }
                    isOperaMobileBrowser() {
                        return "Opera Mobile" === t.name;
                    }
                    isEdgeBrowser() {
                        let e = (null == t ? void 0 : t.version) ? parseFloat(t.version) : -1;
                        return "Microsoft Edge" === t.name && e >= 80;
                    }
                    isEdgeMobileBrowser() {
                        var e, i;
                        let n = (null == t ? void 0 : t.version) ? parseFloat(t.version) : -1;
                        return (
                            "Microsoft Edge" === t.name &&
                            ((null == (e = t.os) ? void 0 : e.family) === "Android" ||
                                (null == (i = t.os) ? void 0 : i.family) === "iOS") &&
                            n > 45
                        );
                    }
                    isAndroidBrowser() {
                        return "Android Browser" === t.name;
                    }
                    isElectron() {
                        return "Electron" === t.name;
                    }
                    isNodeJs() {
                        return "Node.js" === t.name;
                    }
                    isSamsungBrowser() {
                        return "Samsung Internet Mobile" === t.name || "Samsung Internet" === t.name;
                    }
                    isMotorolaEdgeDevice() {
                        var e;
                        return (null == (e = t.product) ? void 0 : e.toLowerCase().includes("motorola edge")) || !1;
                    }
                    isIPhoneOrIPad() {
                        let e = t.ua ? t.ua : navigator.userAgent,
                            i = "ontouchend" in document,
                            n = /\b(\w*Macintosh\w*)\b/.test(e) && i,
                            r = /\b(\w*iPhone\w*)\b/.test(e) && /\b(\w*Mobile\w*)\b/.test(e) && i;
                        return n || r;
                    }
                    isIOSWithSafari() {
                        let e = t.ua ? t.ua : navigator.userAgent;
                        return (
                            this.isIPhoneOrIPad() &&
                            /\b(\w*Apple\w*)\b/.test(navigator.vendor) &&
                            /\b(\w*Safari\w*)\b/.test(e) &&
                            !/\b(\w*CriOS\w*)\b/.test(e) &&
                            !/\b(\w*FxiOS\w*)\b/.test(e)
                        );
                    }
                    isIonicIos() {
                        return this.isIPhoneOrIPad() && -1 === t.ua.indexOf("Safari");
                    }
                    isIonicAndroid() {
                        return "Android" === t.os.family && "Android Browser" == t.name;
                    }
                    isMobileDevice() {
                        return "iOS" === t.os.family || "Android" === t.os.family;
                    }
                    isReactNative() {
                        return !1;
                    }
                    isChromium() {
                        return (
                            this.isChromeBrowser() ||
                            this.isChromeMobileBrowser() ||
                            this.isOperaBrowser() ||
                            this.isOperaMobileBrowser() ||
                            this.isEdgeBrowser() ||
                            this.isEdgeMobileBrowser() ||
                            this.isSamsungBrowser() ||
                            this.isIonicAndroid() ||
                            this.isIonicIos() ||
                            this.isElectron() ||
                            this.isMotorolaEdgeDevice()
                        );
                    }
                    canScreenShare() {
                        let e = (null == t ? void 0 : t.version) ? parseFloat(t.version) : -1;
                        return (
                            !this.isMobileDevice() &&
                            (this.isChromeBrowser() ||
                                this.isFirefoxBrowser() ||
                                this.isOperaBrowser() ||
                                this.isElectron() ||
                                this.isEdgeBrowser() ||
                                (this.isSafariBrowser() && e >= 13))
                        );
                    }
                    getName() {
                        return t.name || "";
                    }
                    getVersion() {
                        return t.version || "";
                    }
                    getFamily() {
                        return t.os.family || "";
                    }
                    getDescription() {
                        return t.description || "";
                    }
                };
            },
    }),
    V = (0, I.t)({
        "../../node_modules/.pnpm/mime@2.6.0/node_modules/mime/Mime.js": (e, t) => {
            function i() {
                (this._types = Object.create(null)), (this._extensions = Object.create(null));
                for (let e = 0; e < arguments.length; e++) this.define(arguments[e]);
                (this.define = this.define.bind(this)),
                    (this.getType = this.getType.bind(this)),
                    (this.getExtension = this.getExtension.bind(this));
            }
            (i.prototype.define = function (e, t) {
                for (let i in e) {
                    let n = e[i].map(function (e) {
                        return e.toLowerCase();
                    });
                    i = i.toLowerCase();
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e];
                        if ("*" !== r[0]) {
                            if (!t && r in this._types)
                                throw Error(
                                    'Attempt to change mapping for "' +
                                        r +
                                        '" extension from "' +
                                        this._types[r] +
                                        '" to "' +
                                        i +
                                        '". Pass `force=true` to allow this, otherwise remove "' +
                                        r +
                                        '" from the list of extensions for "' +
                                        i +
                                        '".',
                                );
                            this._types[r] = i;
                        }
                    }
                    if (t || !this._extensions[i]) {
                        let e = n[0];
                        this._extensions[i] = "*" !== e[0] ? e : e.substr(1);
                    }
                }
            }),
                (i.prototype.getType = function (e) {
                    let t = (e = String(e)).replace(/^.*[/\\]/, "").toLowerCase(),
                        i = t.replace(/^.*\./, "").toLowerCase(),
                        n = t.length < e.length;
                    return ((i.length < t.length - 1 || !n) && this._types[i]) || null;
                }),
                (i.prototype.getExtension = function (e) {
                    return ((e = /^\s*([^;\s]*)/.test(e) && RegExp.$1) && this._extensions[e.toLowerCase()]) || null;
                }),
                (t.exports = i);
        },
    }),
    M = (0, I.t)({
        "../../node_modules/.pnpm/mime@2.6.0/node_modules/mime/types/standard.js": (e, t) => {
            t.exports = {
                "application/andrew-inset": ["ez"],
                "application/applixware": ["aw"],
                "application/atom+xml": ["atom"],
                "application/atomcat+xml": ["atomcat"],
                "application/atomdeleted+xml": ["atomdeleted"],
                "application/atomsvc+xml": ["atomsvc"],
                "application/atsc-dwd+xml": ["dwd"],
                "application/atsc-held+xml": ["held"],
                "application/atsc-rsat+xml": ["rsat"],
                "application/bdoc": ["bdoc"],
                "application/calendar+xml": ["xcs"],
                "application/ccxml+xml": ["ccxml"],
                "application/cdfx+xml": ["cdfx"],
                "application/cdmi-capability": ["cdmia"],
                "application/cdmi-container": ["cdmic"],
                "application/cdmi-domain": ["cdmid"],
                "application/cdmi-object": ["cdmio"],
                "application/cdmi-queue": ["cdmiq"],
                "application/cu-seeme": ["cu"],
                "application/dash+xml": ["mpd"],
                "application/davmount+xml": ["davmount"],
                "application/docbook+xml": ["dbk"],
                "application/dssc+der": ["dssc"],
                "application/dssc+xml": ["xdssc"],
                "application/ecmascript": ["es", "ecma"],
                "application/emma+xml": ["emma"],
                "application/emotionml+xml": ["emotionml"],
                "application/epub+zip": ["epub"],
                "application/exi": ["exi"],
                "application/express": ["exp"],
                "application/fdt+xml": ["fdt"],
                "application/font-tdpfr": ["pfr"],
                "application/geo+json": ["geojson"],
                "application/gml+xml": ["gml"],
                "application/gpx+xml": ["gpx"],
                "application/gxf": ["gxf"],
                "application/gzip": ["gz"],
                "application/hjson": ["hjson"],
                "application/hyperstudio": ["stk"],
                "application/inkml+xml": ["ink", "inkml"],
                "application/ipfix": ["ipfix"],
                "application/its+xml": ["its"],
                "application/java-archive": ["jar", "war", "ear"],
                "application/java-serialized-object": ["ser"],
                "application/java-vm": ["class"],
                "application/javascript": ["js", "mjs"],
                "application/json": ["json", "map"],
                "application/json5": ["json5"],
                "application/jsonml+json": ["jsonml"],
                "application/ld+json": ["jsonld"],
                "application/lgr+xml": ["lgr"],
                "application/lost+xml": ["lostxml"],
                "application/mac-binhex40": ["hqx"],
                "application/mac-compactpro": ["cpt"],
                "application/mads+xml": ["mads"],
                "application/manifest+json": ["webmanifest"],
                "application/marc": ["mrc"],
                "application/marcxml+xml": ["mrcx"],
                "application/mathematica": ["ma", "nb", "mb"],
                "application/mathml+xml": ["mathml"],
                "application/mbox": ["mbox"],
                "application/mediaservercontrol+xml": ["mscml"],
                "application/metalink+xml": ["metalink"],
                "application/metalink4+xml": ["meta4"],
                "application/mets+xml": ["mets"],
                "application/mmt-aei+xml": ["maei"],
                "application/mmt-usd+xml": ["musd"],
                "application/mods+xml": ["mods"],
                "application/mp21": ["m21", "mp21"],
                "application/mp4": ["mp4s", "m4p"],
                "application/msword": ["doc", "dot"],
                "application/mxf": ["mxf"],
                "application/n-quads": ["nq"],
                "application/n-triples": ["nt"],
                "application/node": ["cjs"],
                "application/octet-stream": [
                    "bin",
                    "dms",
                    "lrf",
                    "mar",
                    "so",
                    "dist",
                    "distz",
                    "pkg",
                    "bpk",
                    "dump",
                    "elc",
                    "deploy",
                    "exe",
                    "dll",
                    "deb",
                    "dmg",
                    "iso",
                    "img",
                    "msi",
                    "msp",
                    "msm",
                    "buffer",
                ],
                "application/oda": ["oda"],
                "application/oebps-package+xml": ["opf"],
                "application/ogg": ["ogx"],
                "application/omdoc+xml": ["omdoc"],
                "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
                "application/oxps": ["oxps"],
                "application/p2p-overlay+xml": ["relo"],
                "application/patch-ops-error+xml": ["xer"],
                "application/pdf": ["pdf"],
                "application/pgp-encrypted": ["pgp"],
                "application/pgp-signature": ["asc", "sig"],
                "application/pics-rules": ["prf"],
                "application/pkcs10": ["p10"],
                "application/pkcs7-mime": ["p7m", "p7c"],
                "application/pkcs7-signature": ["p7s"],
                "application/pkcs8": ["p8"],
                "application/pkix-attr-cert": ["ac"],
                "application/pkix-cert": ["cer"],
                "application/pkix-crl": ["crl"],
                "application/pkix-pkipath": ["pkipath"],
                "application/pkixcmp": ["pki"],
                "application/pls+xml": ["pls"],
                "application/postscript": ["ai", "eps", "ps"],
                "application/provenance+xml": ["provx"],
                "application/pskc+xml": ["pskcxml"],
                "application/raml+yaml": ["raml"],
                "application/rdf+xml": ["rdf", "owl"],
                "application/reginfo+xml": ["rif"],
                "application/relax-ng-compact-syntax": ["rnc"],
                "application/resource-lists+xml": ["rl"],
                "application/resource-lists-diff+xml": ["rld"],
                "application/rls-services+xml": ["rs"],
                "application/route-apd+xml": ["rapd"],
                "application/route-s-tsid+xml": ["sls"],
                "application/route-usd+xml": ["rusd"],
                "application/rpki-ghostbusters": ["gbr"],
                "application/rpki-manifest": ["mft"],
                "application/rpki-roa": ["roa"],
                "application/rsd+xml": ["rsd"],
                "application/rss+xml": ["rss"],
                "application/rtf": ["rtf"],
                "application/sbml+xml": ["sbml"],
                "application/scvp-cv-request": ["scq"],
                "application/scvp-cv-response": ["scs"],
                "application/scvp-vp-request": ["spq"],
                "application/scvp-vp-response": ["spp"],
                "application/sdp": ["sdp"],
                "application/senml+xml": ["senmlx"],
                "application/sensml+xml": ["sensmlx"],
                "application/set-payment-initiation": ["setpay"],
                "application/set-registration-initiation": ["setreg"],
                "application/shf+xml": ["shf"],
                "application/sieve": ["siv", "sieve"],
                "application/smil+xml": ["smi", "smil"],
                "application/sparql-query": ["rq"],
                "application/sparql-results+xml": ["srx"],
                "application/srgs": ["gram"],
                "application/srgs+xml": ["grxml"],
                "application/sru+xml": ["sru"],
                "application/ssdl+xml": ["ssdl"],
                "application/ssml+xml": ["ssml"],
                "application/swid+xml": ["swidtag"],
                "application/tei+xml": ["tei", "teicorpus"],
                "application/thraud+xml": ["tfi"],
                "application/timestamped-data": ["tsd"],
                "application/toml": ["toml"],
                "application/trig": ["trig"],
                "application/ttml+xml": ["ttml"],
                "application/ubjson": ["ubj"],
                "application/urc-ressheet+xml": ["rsheet"],
                "application/urc-targetdesc+xml": ["td"],
                "application/voicexml+xml": ["vxml"],
                "application/wasm": ["wasm"],
                "application/widget": ["wgt"],
                "application/winhlp": ["hlp"],
                "application/wsdl+xml": ["wsdl"],
                "application/wspolicy+xml": ["wspolicy"],
                "application/xaml+xml": ["xaml"],
                "application/xcap-att+xml": ["xav"],
                "application/xcap-caps+xml": ["xca"],
                "application/xcap-diff+xml": ["xdf"],
                "application/xcap-el+xml": ["xel"],
                "application/xcap-ns+xml": ["xns"],
                "application/xenc+xml": ["xenc"],
                "application/xhtml+xml": ["xhtml", "xht"],
                "application/xliff+xml": ["xlf"],
                "application/xml": ["xml", "xsl", "xsd", "rng"],
                "application/xml-dtd": ["dtd"],
                "application/xop+xml": ["xop"],
                "application/xproc+xml": ["xpl"],
                "application/xslt+xml": ["*xsl", "xslt"],
                "application/xspf+xml": ["xspf"],
                "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
                "application/yang": ["yang"],
                "application/yin+xml": ["yin"],
                "application/zip": ["zip"],
                "audio/3gpp": ["*3gpp"],
                "audio/adpcm": ["adp"],
                "audio/amr": ["amr"],
                "audio/basic": ["au", "snd"],
                "audio/midi": ["mid", "midi", "kar", "rmi"],
                "audio/mobile-xmf": ["mxmf"],
                "audio/mp3": ["*mp3"],
                "audio/mp4": ["m4a", "mp4a"],
                "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
                "audio/ogg": ["oga", "ogg", "spx", "opus"],
                "audio/s3m": ["s3m"],
                "audio/silk": ["sil"],
                "audio/wav": ["wav"],
                "audio/wave": ["*wav"],
                "audio/webm": ["weba"],
                "audio/xm": ["xm"],
                "font/collection": ["ttc"],
                "font/otf": ["otf"],
                "font/ttf": ["ttf"],
                "font/woff": ["woff"],
                "font/woff2": ["woff2"],
                "image/aces": ["exr"],
                "image/apng": ["apng"],
                "image/avif": ["avif"],
                "image/bmp": ["bmp"],
                "image/cgm": ["cgm"],
                "image/dicom-rle": ["drle"],
                "image/emf": ["emf"],
                "image/fits": ["fits"],
                "image/g3fax": ["g3"],
                "image/gif": ["gif"],
                "image/heic": ["heic"],
                "image/heic-sequence": ["heics"],
                "image/heif": ["heif"],
                "image/heif-sequence": ["heifs"],
                "image/hej2k": ["hej2"],
                "image/hsj2": ["hsj2"],
                "image/ief": ["ief"],
                "image/jls": ["jls"],
                "image/jp2": ["jp2", "jpg2"],
                "image/jpeg": ["jpeg", "jpg", "jpe"],
                "image/jph": ["jph"],
                "image/jphc": ["jhc"],
                "image/jpm": ["jpm"],
                "image/jpx": ["jpx", "jpf"],
                "image/jxr": ["jxr"],
                "image/jxra": ["jxra"],
                "image/jxrs": ["jxrs"],
                "image/jxs": ["jxs"],
                "image/jxsc": ["jxsc"],
                "image/jxsi": ["jxsi"],
                "image/jxss": ["jxss"],
                "image/ktx": ["ktx"],
                "image/ktx2": ["ktx2"],
                "image/png": ["png"],
                "image/sgi": ["sgi"],
                "image/svg+xml": ["svg", "svgz"],
                "image/t38": ["t38"],
                "image/tiff": ["tif", "tiff"],
                "image/tiff-fx": ["tfx"],
                "image/webp": ["webp"],
                "image/wmf": ["wmf"],
                "message/disposition-notification": ["disposition-notification"],
                "message/global": ["u8msg"],
                "message/global-delivery-status": ["u8dsn"],
                "message/global-disposition-notification": ["u8mdn"],
                "message/global-headers": ["u8hdr"],
                "message/rfc822": ["eml", "mime"],
                "model/3mf": ["3mf"],
                "model/gltf+json": ["gltf"],
                "model/gltf-binary": ["glb"],
                "model/iges": ["igs", "iges"],
                "model/mesh": ["msh", "mesh", "silo"],
                "model/mtl": ["mtl"],
                "model/obj": ["obj"],
                "model/step+xml": ["stpx"],
                "model/step+zip": ["stpz"],
                "model/step-xml+zip": ["stpxz"],
                "model/stl": ["stl"],
                "model/vrml": ["wrl", "vrml"],
                "model/x3d+binary": ["*x3db", "x3dbz"],
                "model/x3d+fastinfoset": ["x3db"],
                "model/x3d+vrml": ["*x3dv", "x3dvz"],
                "model/x3d+xml": ["x3d", "x3dz"],
                "model/x3d-vrml": ["x3dv"],
                "text/cache-manifest": ["appcache", "manifest"],
                "text/calendar": ["ics", "ifb"],
                "text/coffeescript": ["coffee", "litcoffee"],
                "text/css": ["css"],
                "text/csv": ["csv"],
                "text/html": ["html", "htm", "shtml"],
                "text/jade": ["jade"],
                "text/jsx": ["jsx"],
                "text/less": ["less"],
                "text/markdown": ["markdown", "md"],
                "text/mathml": ["mml"],
                "text/mdx": ["mdx"],
                "text/n3": ["n3"],
                "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
                "text/richtext": ["rtx"],
                "text/rtf": ["*rtf"],
                "text/sgml": ["sgml", "sgm"],
                "text/shex": ["shex"],
                "text/slim": ["slim", "slm"],
                "text/spdx": ["spdx"],
                "text/stylus": ["stylus", "styl"],
                "text/tab-separated-values": ["tsv"],
                "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
                "text/turtle": ["ttl"],
                "text/uri-list": ["uri", "uris", "urls"],
                "text/vcard": ["vcard"],
                "text/vtt": ["vtt"],
                "text/xml": ["*xml"],
                "text/yaml": ["yaml", "yml"],
                "video/3gpp": ["3gp", "3gpp"],
                "video/3gpp2": ["3g2"],
                "video/h261": ["h261"],
                "video/h263": ["h263"],
                "video/h264": ["h264"],
                "video/iso.segment": ["m4s"],
                "video/jpeg": ["jpgv"],
                "video/jpm": ["*jpm", "jpgm"],
                "video/mj2": ["mj2", "mjp2"],
                "video/mp2t": ["ts"],
                "video/mp4": ["mp4", "mp4v", "mpg4"],
                "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
                "video/ogg": ["ogv"],
                "video/quicktime": ["qt", "mov"],
                "video/webm": ["webm"],
            };
        },
    }),
    A = (0, I.t)({
        "../../node_modules/.pnpm/mime@2.6.0/node_modules/mime/types/other.js": (e, t) => {
            t.exports = {
                "application/prs.cww": ["cww"],
                "application/vnd.1000minds.decision-model+xml": ["1km"],
                "application/vnd.3gpp.pic-bw-large": ["plb"],
                "application/vnd.3gpp.pic-bw-small": ["psb"],
                "application/vnd.3gpp.pic-bw-var": ["pvb"],
                "application/vnd.3gpp2.tcap": ["tcap"],
                "application/vnd.3m.post-it-notes": ["pwn"],
                "application/vnd.accpac.simply.aso": ["aso"],
                "application/vnd.accpac.simply.imp": ["imp"],
                "application/vnd.acucobol": ["acu"],
                "application/vnd.acucorp": ["atc", "acutc"],
                "application/vnd.adobe.air-application-installer-package+zip": ["air"],
                "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
                "application/vnd.adobe.fxp": ["fxp", "fxpl"],
                "application/vnd.adobe.xdp+xml": ["xdp"],
                "application/vnd.adobe.xfdf": ["xfdf"],
                "application/vnd.ahead.space": ["ahead"],
                "application/vnd.airzip.filesecure.azf": ["azf"],
                "application/vnd.airzip.filesecure.azs": ["azs"],
                "application/vnd.amazon.ebook": ["azw"],
                "application/vnd.americandynamics.acc": ["acc"],
                "application/vnd.amiga.ami": ["ami"],
                "application/vnd.android.package-archive": ["apk"],
                "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
                "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
                "application/vnd.antix.game-component": ["atx"],
                "application/vnd.apple.installer+xml": ["mpkg"],
                "application/vnd.apple.keynote": ["key"],
                "application/vnd.apple.mpegurl": ["m3u8"],
                "application/vnd.apple.numbers": ["numbers"],
                "application/vnd.apple.pages": ["pages"],
                "application/vnd.apple.pkpass": ["pkpass"],
                "application/vnd.aristanetworks.swi": ["swi"],
                "application/vnd.astraea-software.iota": ["iota"],
                "application/vnd.audiograph": ["aep"],
                "application/vnd.balsamiq.bmml+xml": ["bmml"],
                "application/vnd.blueice.multipass": ["mpm"],
                "application/vnd.bmi": ["bmi"],
                "application/vnd.businessobjects": ["rep"],
                "application/vnd.chemdraw+xml": ["cdxml"],
                "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
                "application/vnd.cinderella": ["cdy"],
                "application/vnd.citationstyles.style+xml": ["csl"],
                "application/vnd.claymore": ["cla"],
                "application/vnd.cloanto.rp9": ["rp9"],
                "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
                "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
                "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
                "application/vnd.commonspace": ["csp"],
                "application/vnd.contact.cmsg": ["cdbcmsg"],
                "application/vnd.cosmocaller": ["cmc"],
                "application/vnd.crick.clicker": ["clkx"],
                "application/vnd.crick.clicker.keyboard": ["clkk"],
                "application/vnd.crick.clicker.palette": ["clkp"],
                "application/vnd.crick.clicker.template": ["clkt"],
                "application/vnd.crick.clicker.wordbank": ["clkw"],
                "application/vnd.criticaltools.wbs+xml": ["wbs"],
                "application/vnd.ctc-posml": ["pml"],
                "application/vnd.cups-ppd": ["ppd"],
                "application/vnd.curl.car": ["car"],
                "application/vnd.curl.pcurl": ["pcurl"],
                "application/vnd.dart": ["dart"],
                "application/vnd.data-vision.rdz": ["rdz"],
                "application/vnd.dbf": ["dbf"],
                "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
                "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
                "application/vnd.dece.unspecified": ["uvx", "uvvx"],
                "application/vnd.dece.zip": ["uvz", "uvvz"],
                "application/vnd.denovo.fcselayout-link": ["fe_launch"],
                "application/vnd.dna": ["dna"],
                "application/vnd.dolby.mlp": ["mlp"],
                "application/vnd.dpgraph": ["dpg"],
                "application/vnd.dreamfactory": ["dfac"],
                "application/vnd.ds-keypoint": ["kpxx"],
                "application/vnd.dvb.ait": ["ait"],
                "application/vnd.dvb.service": ["svc"],
                "application/vnd.dynageo": ["geo"],
                "application/vnd.ecowin.chart": ["mag"],
                "application/vnd.enliven": ["nml"],
                "application/vnd.epson.esf": ["esf"],
                "application/vnd.epson.msf": ["msf"],
                "application/vnd.epson.quickanime": ["qam"],
                "application/vnd.epson.salt": ["slt"],
                "application/vnd.epson.ssf": ["ssf"],
                "application/vnd.eszigno3+xml": ["es3", "et3"],
                "application/vnd.ezpix-album": ["ez2"],
                "application/vnd.ezpix-package": ["ez3"],
                "application/vnd.fdf": ["fdf"],
                "application/vnd.fdsn.mseed": ["mseed"],
                "application/vnd.fdsn.seed": ["seed", "dataless"],
                "application/vnd.flographit": ["gph"],
                "application/vnd.fluxtime.clip": ["ftc"],
                "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
                "application/vnd.frogans.fnc": ["fnc"],
                "application/vnd.frogans.ltf": ["ltf"],
                "application/vnd.fsc.weblaunch": ["fsc"],
                "application/vnd.fujitsu.oasys": ["oas"],
                "application/vnd.fujitsu.oasys2": ["oa2"],
                "application/vnd.fujitsu.oasys3": ["oa3"],
                "application/vnd.fujitsu.oasysgp": ["fg5"],
                "application/vnd.fujitsu.oasysprs": ["bh2"],
                "application/vnd.fujixerox.ddd": ["ddd"],
                "application/vnd.fujixerox.docuworks": ["xdw"],
                "application/vnd.fujixerox.docuworks.binder": ["xbd"],
                "application/vnd.fuzzysheet": ["fzs"],
                "application/vnd.genomatix.tuxedo": ["txd"],
                "application/vnd.geogebra.file": ["ggb"],
                "application/vnd.geogebra.tool": ["ggt"],
                "application/vnd.geometry-explorer": ["gex", "gre"],
                "application/vnd.geonext": ["gxt"],
                "application/vnd.geoplan": ["g2w"],
                "application/vnd.geospace": ["g3w"],
                "application/vnd.gmx": ["gmx"],
                "application/vnd.google-apps.document": ["gdoc"],
                "application/vnd.google-apps.presentation": ["gslides"],
                "application/vnd.google-apps.spreadsheet": ["gsheet"],
                "application/vnd.google-earth.kml+xml": ["kml"],
                "application/vnd.google-earth.kmz": ["kmz"],
                "application/vnd.grafeq": ["gqf", "gqs"],
                "application/vnd.groove-account": ["gac"],
                "application/vnd.groove-help": ["ghf"],
                "application/vnd.groove-identity-message": ["gim"],
                "application/vnd.groove-injector": ["grv"],
                "application/vnd.groove-tool-message": ["gtm"],
                "application/vnd.groove-tool-template": ["tpl"],
                "application/vnd.groove-vcard": ["vcg"],
                "application/vnd.hal+xml": ["hal"],
                "application/vnd.handheld-entertainment+xml": ["zmm"],
                "application/vnd.hbci": ["hbci"],
                "application/vnd.hhe.lesson-player": ["les"],
                "application/vnd.hp-hpgl": ["hpgl"],
                "application/vnd.hp-hpid": ["hpid"],
                "application/vnd.hp-hps": ["hps"],
                "application/vnd.hp-jlyt": ["jlt"],
                "application/vnd.hp-pcl": ["pcl"],
                "application/vnd.hp-pclxl": ["pclxl"],
                "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
                "application/vnd.ibm.minipay": ["mpy"],
                "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
                "application/vnd.ibm.rights-management": ["irm"],
                "application/vnd.ibm.secure-container": ["sc"],
                "application/vnd.iccprofile": ["icc", "icm"],
                "application/vnd.igloader": ["igl"],
                "application/vnd.immervision-ivp": ["ivp"],
                "application/vnd.immervision-ivu": ["ivu"],
                "application/vnd.insors.igm": ["igm"],
                "application/vnd.intercon.formnet": ["xpw", "xpx"],
                "application/vnd.intergeo": ["i2g"],
                "application/vnd.intu.qbo": ["qbo"],
                "application/vnd.intu.qfx": ["qfx"],
                "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
                "application/vnd.irepository.package+xml": ["irp"],
                "application/vnd.is-xpr": ["xpr"],
                "application/vnd.isac.fcs": ["fcs"],
                "application/vnd.jam": ["jam"],
                "application/vnd.jcp.javame.midlet-rms": ["rms"],
                "application/vnd.jisp": ["jisp"],
                "application/vnd.joost.joda-archive": ["joda"],
                "application/vnd.kahootz": ["ktz", "ktr"],
                "application/vnd.kde.karbon": ["karbon"],
                "application/vnd.kde.kchart": ["chrt"],
                "application/vnd.kde.kformula": ["kfo"],
                "application/vnd.kde.kivio": ["flw"],
                "application/vnd.kde.kontour": ["kon"],
                "application/vnd.kde.kpresenter": ["kpr", "kpt"],
                "application/vnd.kde.kspread": ["ksp"],
                "application/vnd.kde.kword": ["kwd", "kwt"],
                "application/vnd.kenameaapp": ["htke"],
                "application/vnd.kidspiration": ["kia"],
                "application/vnd.kinar": ["kne", "knp"],
                "application/vnd.koan": ["skp", "skd", "skt", "skm"],
                "application/vnd.kodak-descriptor": ["sse"],
                "application/vnd.las.las+xml": ["lasxml"],
                "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
                "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
                "application/vnd.lotus-1-2-3": ["123"],
                "application/vnd.lotus-approach": ["apr"],
                "application/vnd.lotus-freelance": ["pre"],
                "application/vnd.lotus-notes": ["nsf"],
                "application/vnd.lotus-organizer": ["org"],
                "application/vnd.lotus-screencam": ["scm"],
                "application/vnd.lotus-wordpro": ["lwp"],
                "application/vnd.macports.portpkg": ["portpkg"],
                "application/vnd.mapbox-vector-tile": ["mvt"],
                "application/vnd.mcd": ["mcd"],
                "application/vnd.medcalcdata": ["mc1"],
                "application/vnd.mediastation.cdkey": ["cdkey"],
                "application/vnd.mfer": ["mwf"],
                "application/vnd.mfmp": ["mfm"],
                "application/vnd.micrografx.flo": ["flo"],
                "application/vnd.micrografx.igx": ["igx"],
                "application/vnd.mif": ["mif"],
                "application/vnd.mobius.daf": ["daf"],
                "application/vnd.mobius.dis": ["dis"],
                "application/vnd.mobius.mbk": ["mbk"],
                "application/vnd.mobius.mqy": ["mqy"],
                "application/vnd.mobius.msl": ["msl"],
                "application/vnd.mobius.plc": ["plc"],
                "application/vnd.mobius.txf": ["txf"],
                "application/vnd.mophun.application": ["mpn"],
                "application/vnd.mophun.certificate": ["mpc"],
                "application/vnd.mozilla.xul+xml": ["xul"],
                "application/vnd.ms-artgalry": ["cil"],
                "application/vnd.ms-cab-compressed": ["cab"],
                "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
                "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
                "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
                "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
                "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
                "application/vnd.ms-fontobject": ["eot"],
                "application/vnd.ms-htmlhelp": ["chm"],
                "application/vnd.ms-ims": ["ims"],
                "application/vnd.ms-lrm": ["lrm"],
                "application/vnd.ms-officetheme": ["thmx"],
                "application/vnd.ms-outlook": ["msg"],
                "application/vnd.ms-pki.seccat": ["cat"],
                "application/vnd.ms-pki.stl": ["*stl"],
                "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
                "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
                "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
                "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
                "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
                "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
                "application/vnd.ms-project": ["mpp", "mpt"],
                "application/vnd.ms-word.document.macroenabled.12": ["docm"],
                "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
                "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
                "application/vnd.ms-wpl": ["wpl"],
                "application/vnd.ms-xpsdocument": ["xps"],
                "application/vnd.mseq": ["mseq"],
                "application/vnd.musician": ["mus"],
                "application/vnd.muvee.style": ["msty"],
                "application/vnd.mynfc": ["taglet"],
                "application/vnd.neurolanguage.nlu": ["nlu"],
                "application/vnd.nitf": ["ntf", "nitf"],
                "application/vnd.noblenet-directory": ["nnd"],
                "application/vnd.noblenet-sealer": ["nns"],
                "application/vnd.noblenet-web": ["nnw"],
                "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
                "application/vnd.nokia.n-gage.data": ["ngdat"],
                "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
                "application/vnd.nokia.radio-preset": ["rpst"],
                "application/vnd.nokia.radio-presets": ["rpss"],
                "application/vnd.novadigm.edm": ["edm"],
                "application/vnd.novadigm.edx": ["edx"],
                "application/vnd.novadigm.ext": ["ext"],
                "application/vnd.oasis.opendocument.chart": ["odc"],
                "application/vnd.oasis.opendocument.chart-template": ["otc"],
                "application/vnd.oasis.opendocument.database": ["odb"],
                "application/vnd.oasis.opendocument.formula": ["odf"],
                "application/vnd.oasis.opendocument.formula-template": ["odft"],
                "application/vnd.oasis.opendocument.graphics": ["odg"],
                "application/vnd.oasis.opendocument.graphics-template": ["otg"],
                "application/vnd.oasis.opendocument.image": ["odi"],
                "application/vnd.oasis.opendocument.image-template": ["oti"],
                "application/vnd.oasis.opendocument.presentation": ["odp"],
                "application/vnd.oasis.opendocument.presentation-template": ["otp"],
                "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
                "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
                "application/vnd.oasis.opendocument.text": ["odt"],
                "application/vnd.oasis.opendocument.text-master": ["odm"],
                "application/vnd.oasis.opendocument.text-template": ["ott"],
                "application/vnd.oasis.opendocument.text-web": ["oth"],
                "application/vnd.olpc-sugar": ["xo"],
                "application/vnd.oma.dd2+xml": ["dd2"],
                "application/vnd.openblox.game+xml": ["obgx"],
                "application/vnd.openofficeorg.extension": ["oxt"],
                "application/vnd.openstreetmap.data+xml": ["osm"],
                "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"],
                "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"],
                "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"],
                "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"],
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
                "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"],
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"],
                "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"],
                "application/vnd.osgeo.mapguide.package": ["mgp"],
                "application/vnd.osgi.dp": ["dp"],
                "application/vnd.osgi.subsystem": ["esa"],
                "application/vnd.palm": ["pdb", "pqa", "oprc"],
                "application/vnd.pawaafile": ["paw"],
                "application/vnd.pg.format": ["str"],
                "application/vnd.pg.osasli": ["ei6"],
                "application/vnd.picsel": ["efif"],
                "application/vnd.pmi.widget": ["wg"],
                "application/vnd.pocketlearn": ["plf"],
                "application/vnd.powerbuilder6": ["pbd"],
                "application/vnd.previewsystems.box": ["box"],
                "application/vnd.proteus.magazine": ["mgz"],
                "application/vnd.publishare-delta-tree": ["qps"],
                "application/vnd.pvi.ptid1": ["ptid"],
                "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
                "application/vnd.rar": ["rar"],
                "application/vnd.realvnc.bed": ["bed"],
                "application/vnd.recordare.musicxml": ["mxl"],
                "application/vnd.recordare.musicxml+xml": ["musicxml"],
                "application/vnd.rig.cryptonote": ["cryptonote"],
                "application/vnd.rim.cod": ["cod"],
                "application/vnd.rn-realmedia": ["rm"],
                "application/vnd.rn-realmedia-vbr": ["rmvb"],
                "application/vnd.route66.link66+xml": ["link66"],
                "application/vnd.sailingtracker.track": ["st"],
                "application/vnd.seemail": ["see"],
                "application/vnd.sema": ["sema"],
                "application/vnd.semd": ["semd"],
                "application/vnd.semf": ["semf"],
                "application/vnd.shana.informed.formdata": ["ifm"],
                "application/vnd.shana.informed.formtemplate": ["itp"],
                "application/vnd.shana.informed.interchange": ["iif"],
                "application/vnd.shana.informed.package": ["ipk"],
                "application/vnd.simtech-mindmapper": ["twd", "twds"],
                "application/vnd.smaf": ["mmf"],
                "application/vnd.smart.teacher": ["teacher"],
                "application/vnd.software602.filler.form+xml": ["fo"],
                "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
                "application/vnd.spotfire.dxp": ["dxp"],
                "application/vnd.spotfire.sfs": ["sfs"],
                "application/vnd.stardivision.calc": ["sdc"],
                "application/vnd.stardivision.draw": ["sda"],
                "application/vnd.stardivision.impress": ["sdd"],
                "application/vnd.stardivision.math": ["smf"],
                "application/vnd.stardivision.writer": ["sdw", "vor"],
                "application/vnd.stardivision.writer-global": ["sgl"],
                "application/vnd.stepmania.package": ["smzip"],
                "application/vnd.stepmania.stepchart": ["sm"],
                "application/vnd.sun.wadl+xml": ["wadl"],
                "application/vnd.sun.xml.calc": ["sxc"],
                "application/vnd.sun.xml.calc.template": ["stc"],
                "application/vnd.sun.xml.draw": ["sxd"],
                "application/vnd.sun.xml.draw.template": ["std"],
                "application/vnd.sun.xml.impress": ["sxi"],
                "application/vnd.sun.xml.impress.template": ["sti"],
                "application/vnd.sun.xml.math": ["sxm"],
                "application/vnd.sun.xml.writer": ["sxw"],
                "application/vnd.sun.xml.writer.global": ["sxg"],
                "application/vnd.sun.xml.writer.template": ["stw"],
                "application/vnd.sus-calendar": ["sus", "susp"],
                "application/vnd.svd": ["svd"],
                "application/vnd.symbian.install": ["sis", "sisx"],
                "application/vnd.syncml+xml": ["xsm"],
                "application/vnd.syncml.dm+wbxml": ["bdm"],
                "application/vnd.syncml.dm+xml": ["xdm"],
                "application/vnd.syncml.dmddf+xml": ["ddf"],
                "application/vnd.tao.intent-module-archive": ["tao"],
                "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
                "application/vnd.tmobile-livetv": ["tmo"],
                "application/vnd.trid.tpt": ["tpt"],
                "application/vnd.triscape.mxs": ["mxs"],
                "application/vnd.trueapp": ["tra"],
                "application/vnd.ufdl": ["ufd", "ufdl"],
                "application/vnd.uiq.theme": ["utz"],
                "application/vnd.umajin": ["umj"],
                "application/vnd.unity": ["unityweb"],
                "application/vnd.uoml+xml": ["uoml"],
                "application/vnd.vcx": ["vcx"],
                "application/vnd.visio": ["vsd", "vst", "vss", "vsw"],
                "application/vnd.visionary": ["vis"],
                "application/vnd.vsf": ["vsf"],
                "application/vnd.wap.wbxml": ["wbxml"],
                "application/vnd.wap.wmlc": ["wmlc"],
                "application/vnd.wap.wmlscriptc": ["wmlsc"],
                "application/vnd.webturbo": ["wtb"],
                "application/vnd.wolfram.player": ["nbp"],
                "application/vnd.wordperfect": ["wpd"],
                "application/vnd.wqd": ["wqd"],
                "application/vnd.wt.stf": ["stf"],
                "application/vnd.xara": ["xar"],
                "application/vnd.xfdl": ["xfdl"],
                "application/vnd.yamaha.hv-dic": ["hvd"],
                "application/vnd.yamaha.hv-script": ["hvs"],
                "application/vnd.yamaha.hv-voice": ["hvp"],
                "application/vnd.yamaha.openscoreformat": ["osf"],
                "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
                "application/vnd.yamaha.smaf-audio": ["saf"],
                "application/vnd.yamaha.smaf-phrase": ["spf"],
                "application/vnd.yellowriver-custom-menu": ["cmp"],
                "application/vnd.zul": ["zir", "zirz"],
                "application/vnd.zzazz.deck+xml": ["zaz"],
                "application/x-7z-compressed": ["7z"],
                "application/x-abiword": ["abw"],
                "application/x-ace-compressed": ["ace"],
                "application/x-apple-diskimage": ["*dmg"],
                "application/x-arj": ["arj"],
                "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
                "application/x-authorware-map": ["aam"],
                "application/x-authorware-seg": ["aas"],
                "application/x-bcpio": ["bcpio"],
                "application/x-bdoc": ["*bdoc"],
                "application/x-bittorrent": ["torrent"],
                "application/x-blorb": ["blb", "blorb"],
                "application/x-bzip": ["bz"],
                "application/x-bzip2": ["bz2", "boz"],
                "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
                "application/x-cdlink": ["vcd"],
                "application/x-cfs-compressed": ["cfs"],
                "application/x-chat": ["chat"],
                "application/x-chess-pgn": ["pgn"],
                "application/x-chrome-extension": ["crx"],
                "application/x-cocoa": ["cco"],
                "application/x-conference": ["nsc"],
                "application/x-cpio": ["cpio"],
                "application/x-csh": ["csh"],
                "application/x-debian-package": ["*deb", "udeb"],
                "application/x-dgc-compressed": ["dgc"],
                "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
                "application/x-doom": ["wad"],
                "application/x-dtbncx+xml": ["ncx"],
                "application/x-dtbook+xml": ["dtb"],
                "application/x-dtbresource+xml": ["res"],
                "application/x-dvi": ["dvi"],
                "application/x-envoy": ["evy"],
                "application/x-eva": ["eva"],
                "application/x-font-bdf": ["bdf"],
                "application/x-font-ghostscript": ["gsf"],
                "application/x-font-linux-psf": ["psf"],
                "application/x-font-pcf": ["pcf"],
                "application/x-font-snf": ["snf"],
                "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
                "application/x-freearc": ["arc"],
                "application/x-futuresplash": ["spl"],
                "application/x-gca-compressed": ["gca"],
                "application/x-glulx": ["ulx"],
                "application/x-gnumeric": ["gnumeric"],
                "application/x-gramps-xml": ["gramps"],
                "application/x-gtar": ["gtar"],
                "application/x-hdf": ["hdf"],
                "application/x-httpd-php": ["php"],
                "application/x-install-instructions": ["install"],
                "application/x-iso9660-image": ["*iso"],
                "application/x-iwork-keynote-sffkey": ["*key"],
                "application/x-iwork-numbers-sffnumbers": ["*numbers"],
                "application/x-iwork-pages-sffpages": ["*pages"],
                "application/x-java-archive-diff": ["jardiff"],
                "application/x-java-jnlp-file": ["jnlp"],
                "application/x-keepass2": ["kdbx"],
                "application/x-latex": ["latex"],
                "application/x-lua-bytecode": ["luac"],
                "application/x-lzh-compressed": ["lzh", "lha"],
                "application/x-makeself": ["run"],
                "application/x-mie": ["mie"],
                "application/x-mobipocket-ebook": ["prc", "mobi"],
                "application/x-ms-application": ["application"],
                "application/x-ms-shortcut": ["lnk"],
                "application/x-ms-wmd": ["wmd"],
                "application/x-ms-wmz": ["wmz"],
                "application/x-ms-xbap": ["xbap"],
                "application/x-msaccess": ["mdb"],
                "application/x-msbinder": ["obd"],
                "application/x-mscardfile": ["crd"],
                "application/x-msclip": ["clp"],
                "application/x-msdos-program": ["*exe"],
                "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
                "application/x-msmediaview": ["mvb", "m13", "m14"],
                "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
                "application/x-msmoney": ["mny"],
                "application/x-mspublisher": ["pub"],
                "application/x-msschedule": ["scd"],
                "application/x-msterminal": ["trm"],
                "application/x-mswrite": ["wri"],
                "application/x-netcdf": ["nc", "cdf"],
                "application/x-ns-proxy-autoconfig": ["pac"],
                "application/x-nzb": ["nzb"],
                "application/x-perl": ["pl", "pm"],
                "application/x-pilot": ["*prc", "*pdb"],
                "application/x-pkcs12": ["p12", "pfx"],
                "application/x-pkcs7-certificates": ["p7b", "spc"],
                "application/x-pkcs7-certreqresp": ["p7r"],
                "application/x-rar-compressed": ["*rar"],
                "application/x-redhat-package-manager": ["rpm"],
                "application/x-research-info-systems": ["ris"],
                "application/x-sea": ["sea"],
                "application/x-sh": ["sh"],
                "application/x-shar": ["shar"],
                "application/x-shockwave-flash": ["swf"],
                "application/x-silverlight-app": ["xap"],
                "application/x-sql": ["sql"],
                "application/x-stuffit": ["sit"],
                "application/x-stuffitx": ["sitx"],
                "application/x-subrip": ["srt"],
                "application/x-sv4cpio": ["sv4cpio"],
                "application/x-sv4crc": ["sv4crc"],
                "application/x-t3vm-image": ["t3"],
                "application/x-tads": ["gam"],
                "application/x-tar": ["tar"],
                "application/x-tcl": ["tcl", "tk"],
                "application/x-tex": ["tex"],
                "application/x-tex-tfm": ["tfm"],
                "application/x-texinfo": ["texinfo", "texi"],
                "application/x-tgif": ["*obj"],
                "application/x-ustar": ["ustar"],
                "application/x-virtualbox-hdd": ["hdd"],
                "application/x-virtualbox-ova": ["ova"],
                "application/x-virtualbox-ovf": ["ovf"],
                "application/x-virtualbox-vbox": ["vbox"],
                "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
                "application/x-virtualbox-vdi": ["vdi"],
                "application/x-virtualbox-vhd": ["vhd"],
                "application/x-virtualbox-vmdk": ["vmdk"],
                "application/x-wais-source": ["src"],
                "application/x-web-app-manifest+json": ["webapp"],
                "application/x-x509-ca-cert": ["der", "crt", "pem"],
                "application/x-xfig": ["fig"],
                "application/x-xliff+xml": ["*xlf"],
                "application/x-xpinstall": ["xpi"],
                "application/x-xz": ["xz"],
                "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
                "audio/vnd.dece.audio": ["uva", "uvva"],
                "audio/vnd.digital-winds": ["eol"],
                "audio/vnd.dra": ["dra"],
                "audio/vnd.dts": ["dts"],
                "audio/vnd.dts.hd": ["dtshd"],
                "audio/vnd.lucent.voice": ["lvp"],
                "audio/vnd.ms-playready.media.pya": ["pya"],
                "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
                "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
                "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
                "audio/vnd.rip": ["rip"],
                "audio/x-aac": ["aac"],
                "audio/x-aiff": ["aif", "aiff", "aifc"],
                "audio/x-caf": ["caf"],
                "audio/x-flac": ["flac"],
                "audio/x-m4a": ["*m4a"],
                "audio/x-matroska": ["mka"],
                "audio/x-mpegurl": ["m3u"],
                "audio/x-ms-wax": ["wax"],
                "audio/x-ms-wma": ["wma"],
                "audio/x-pn-realaudio": ["ram", "ra"],
                "audio/x-pn-realaudio-plugin": ["rmp"],
                "audio/x-realaudio": ["*ra"],
                "audio/x-wav": ["*wav"],
                "chemical/x-cdx": ["cdx"],
                "chemical/x-cif": ["cif"],
                "chemical/x-cmdf": ["cmdf"],
                "chemical/x-cml": ["cml"],
                "chemical/x-csml": ["csml"],
                "chemical/x-xyz": ["xyz"],
                "image/prs.btif": ["btif"],
                "image/prs.pti": ["pti"],
                "image/vnd.adobe.photoshop": ["psd"],
                "image/vnd.airzip.accelerator.azv": ["azv"],
                "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
                "image/vnd.djvu": ["djvu", "djv"],
                "image/vnd.dvb.subtitle": ["*sub"],
                "image/vnd.dwg": ["dwg"],
                "image/vnd.dxf": ["dxf"],
                "image/vnd.fastbidsheet": ["fbs"],
                "image/vnd.fpx": ["fpx"],
                "image/vnd.fst": ["fst"],
                "image/vnd.fujixerox.edmics-mmr": ["mmr"],
                "image/vnd.fujixerox.edmics-rlc": ["rlc"],
                "image/vnd.microsoft.icon": ["ico"],
                "image/vnd.ms-dds": ["dds"],
                "image/vnd.ms-modi": ["mdi"],
                "image/vnd.ms-photo": ["wdp"],
                "image/vnd.net-fpx": ["npx"],
                "image/vnd.pco.b16": ["b16"],
                "image/vnd.tencent.tap": ["tap"],
                "image/vnd.valve.source.texture": ["vtf"],
                "image/vnd.wap.wbmp": ["wbmp"],
                "image/vnd.xiff": ["xif"],
                "image/vnd.zbrush.pcx": ["pcx"],
                "image/x-3ds": ["3ds"],
                "image/x-cmu-raster": ["ras"],
                "image/x-cmx": ["cmx"],
                "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
                "image/x-icon": ["*ico"],
                "image/x-jng": ["jng"],
                "image/x-mrsid-image": ["sid"],
                "image/x-ms-bmp": ["*bmp"],
                "image/x-pcx": ["*pcx"],
                "image/x-pict": ["pic", "pct"],
                "image/x-portable-anymap": ["pnm"],
                "image/x-portable-bitmap": ["pbm"],
                "image/x-portable-graymap": ["pgm"],
                "image/x-portable-pixmap": ["ppm"],
                "image/x-rgb": ["rgb"],
                "image/x-tga": ["tga"],
                "image/x-xbitmap": ["xbm"],
                "image/x-xpixmap": ["xpm"],
                "image/x-xwindowdump": ["xwd"],
                "message/vnd.wfa.wsc": ["wsc"],
                "model/vnd.collada+xml": ["dae"],
                "model/vnd.dwf": ["dwf"],
                "model/vnd.gdl": ["gdl"],
                "model/vnd.gtw": ["gtw"],
                "model/vnd.mts": ["mts"],
                "model/vnd.opengex": ["ogex"],
                "model/vnd.parasolid.transmit.binary": ["x_b"],
                "model/vnd.parasolid.transmit.text": ["x_t"],
                "model/vnd.sap.vds": ["vds"],
                "model/vnd.usdz+zip": ["usdz"],
                "model/vnd.valve.source.compiled-map": ["bsp"],
                "model/vnd.vtu": ["vtu"],
                "text/prs.lines.tag": ["dsc"],
                "text/vnd.curl": ["curl"],
                "text/vnd.curl.dcurl": ["dcurl"],
                "text/vnd.curl.mcurl": ["mcurl"],
                "text/vnd.curl.scurl": ["scurl"],
                "text/vnd.dvb.subtitle": ["sub"],
                "text/vnd.fly": ["fly"],
                "text/vnd.fmi.flexstor": ["flx"],
                "text/vnd.graphviz": ["gv"],
                "text/vnd.in3d.3dml": ["3dml"],
                "text/vnd.in3d.spot": ["spot"],
                "text/vnd.sun.j2me.app-descriptor": ["jad"],
                "text/vnd.wap.wml": ["wml"],
                "text/vnd.wap.wmlscript": ["wmls"],
                "text/x-asm": ["s", "asm"],
                "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
                "text/x-component": ["htc"],
                "text/x-fortran": ["f", "for", "f77", "f90"],
                "text/x-handlebars-template": ["hbs"],
                "text/x-java-source": ["java"],
                "text/x-lua": ["lua"],
                "text/x-markdown": ["mkd"],
                "text/x-nfo": ["nfo"],
                "text/x-opml": ["opml"],
                "text/x-org": ["*org"],
                "text/x-pascal": ["p", "pas"],
                "text/x-processing": ["pde"],
                "text/x-sass": ["sass"],
                "text/x-scss": ["scss"],
                "text/x-setext": ["etx"],
                "text/x-sfv": ["sfv"],
                "text/x-suse-ymp": ["ymp"],
                "text/x-uuencode": ["uu"],
                "text/x-vcalendar": ["vcs"],
                "text/x-vcard": ["vcf"],
                "video/vnd.dece.hd": ["uvh", "uvvh"],
                "video/vnd.dece.mobile": ["uvm", "uvvm"],
                "video/vnd.dece.pd": ["uvp", "uvvp"],
                "video/vnd.dece.sd": ["uvs", "uvvs"],
                "video/vnd.dece.video": ["uvv", "uvvv"],
                "video/vnd.dvb.file": ["dvb"],
                "video/vnd.fvt": ["fvt"],
                "video/vnd.mpegurl": ["mxu", "m4u"],
                "video/vnd.ms-playready.media.pyv": ["pyv"],
                "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
                "video/vnd.vivo": ["viv"],
                "video/x-f4v": ["f4v"],
                "video/x-fli": ["fli"],
                "video/x-flv": ["flv"],
                "video/x-m4v": ["m4v"],
                "video/x-matroska": ["mkv", "mk3d", "mks"],
                "video/x-mng": ["mng"],
                "video/x-ms-asf": ["asf", "asx"],
                "video/x-ms-vob": ["vob"],
                "video/x-ms-wm": ["wm"],
                "video/x-ms-wmv": ["wmv"],
                "video/x-ms-wmx": ["wmx"],
                "video/x-ms-wvx": ["wvx"],
                "video/x-msvideo": ["avi"],
                "video/x-sgi-movie": ["movie"],
                "video/x-smv": ["smv"],
                "x-conference/x-cooltalk": ["ice"],
            };
        },
    }),
    D = (0, I.t)({
        "../../node_modules/.pnpm/mime@2.6.0/node_modules/mime/index.js": (e, t) => {
            t.exports = new (V())(M(), A());
        },
    }),
    j = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/LocalRecorder.js":
            (e) => {
                let t;
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.LocalRecorder = void 0);
                let i = k(),
                    n = N(),
                    r = L(),
                    o = D(),
                    s = n.OpenViduLogger.getInstance();
                e.LocalRecorder = class {
                    constructor(e) {
                        (this.stream = e),
                            (this.chunks = []),
                            (t = r.PlatformUtils.getInstance()),
                            (this.connectionId = this.stream.connection
                                ? this.stream.connection.connectionId
                                : "default-connection"),
                            (this.id = this.stream.streamId + "_" + this.connectionId + "_localrecord"),
                            (this.state = i.LocalRecorderState.READY);
                    }
                    record(e) {
                        return new Promise((t, n) => {
                            try {
                                if ("string" == typeof e || e instanceof String)
                                    return n(
                                        `When calling LocalRecorder.record(options) parameter 'options' cannot be a string. Must be an object like { mimeType: "${e}" }`,
                                    );
                                if ("u" < typeof MediaRecorder)
                                    throw (
                                        (s.error(
                                            "MediaRecorder not supported on your device. See compatibility in https://caniuse.com/#search=MediaRecorder",
                                        ),
                                        Error(
                                            "MediaRecorder not supported on your device. See compatibility in https://caniuse.com/#search=MediaRecorder",
                                        ))
                                    );
                                if (this.state !== i.LocalRecorderState.READY)
                                    throw Error(
                                        "'LocalRecord.record()' needs 'LocalRecord.state' to be 'READY' (current value: '" +
                                            this.state +
                                            "'). Call 'LocalRecorder.clean()' or init a new LocalRecorder before",
                                    );
                                s.log(
                                    "Starting local recording of stream '" +
                                        this.stream.streamId +
                                        "' of connection '" +
                                        this.connectionId +
                                        "'",
                                ),
                                    e ? e.mimeType || (e.mimeType = "video/webm") : (e = { mimeType: "video/webm" }),
                                    (this.mediaRecorder = new MediaRecorder(this.stream.getMediaStream(), e)),
                                    this.mediaRecorder.start();
                            } catch (e) {
                                return n(e);
                            }
                            return (
                                (this.mediaRecorder.ondataavailable = (e) => {
                                    e.data.size > 0 && this.chunks.push(e.data);
                                }),
                                (this.mediaRecorder.onerror = (e) => {
                                    s.error("MediaRecorder error: ", e);
                                }),
                                (this.mediaRecorder.onstart = () => {
                                    s.log("MediaRecorder started (state=" + this.mediaRecorder.state + ")");
                                }),
                                (this.mediaRecorder.onstop = () => {
                                    this.onStopDefault();
                                }),
                                (this.mediaRecorder.onpause = () => {
                                    s.log("MediaRecorder paused (state=" + this.mediaRecorder.state + ")");
                                }),
                                (this.mediaRecorder.onresume = () => {
                                    s.log("MediaRecorder resumed (state=" + this.mediaRecorder.state + ")");
                                }),
                                (this.state = i.LocalRecorderState.RECORDING),
                                t()
                            );
                        });
                    }
                    stop() {
                        return new Promise((e, t) => {
                            try {
                                if (
                                    this.state === i.LocalRecorderState.READY ||
                                    this.state === i.LocalRecorderState.FINISHED
                                )
                                    throw Error(
                                        "'LocalRecord.stop()' needs 'LocalRecord.state' to be 'RECORDING' or 'PAUSED' (current value: '" +
                                            this.state +
                                            "'). Call 'LocalRecorder.start()' before",
                                    );
                                (this.mediaRecorder.onstop = () => (this.onStopDefault(), e())),
                                    this.mediaRecorder.stop();
                            } catch (e) {
                                return t(e);
                            }
                        });
                    }
                    pause() {
                        return new Promise((e, t) => {
                            try {
                                if (this.state !== i.LocalRecorderState.RECORDING)
                                    return t(
                                        Error(
                                            "'LocalRecord.pause()' needs 'LocalRecord.state' to be 'RECORDING' (current value: '" +
                                                this.state +
                                                "'). Call 'LocalRecorder.start()' or 'LocalRecorder.resume()' before",
                                        ),
                                    );
                                return this.mediaRecorder.pause(), (this.state = i.LocalRecorderState.PAUSED), e();
                            } catch (e) {
                                return t(e);
                            }
                        });
                    }
                    resume() {
                        return new Promise((e, t) => {
                            try {
                                if (this.state !== i.LocalRecorderState.PAUSED)
                                    throw Error(
                                        "'LocalRecord.resume()' needs 'LocalRecord.state' to be 'PAUSED' (current value: '" +
                                            this.state +
                                            "'). Call 'LocalRecorder.pause()' before",
                                    );
                                return this.mediaRecorder.resume(), (this.state = i.LocalRecorderState.RECORDING), e();
                            } catch (e) {
                                return t(e);
                            }
                        });
                    }
                    preview(e) {
                        if (this.state !== i.LocalRecorderState.FINISHED)
                            throw Error(
                                "'LocalRecord.preview()' needs 'LocalRecord.state' to be 'FINISHED' (current value: '" +
                                    this.state +
                                    "'). Call 'LocalRecorder.stop()' before",
                            );
                        if (
                            ((this.videoPreview = document.createElement("video")),
                            (this.videoPreview.id = this.id),
                            (this.videoPreview.autoplay = !0),
                            t.isSafariBrowser() && (this.videoPreview.playsInline = !0),
                            "string" == typeof e)
                        ) {
                            let t = document.getElementById(e);
                            t && (this.videoPreview = t.appendChild(this.videoPreview));
                        } else this.videoPreview = e.appendChild(this.videoPreview);
                        return (this.videoPreview.src = this.videoPreviewSrc), this.videoPreview;
                    }
                    clean() {
                        let e = () => {
                            delete this.blob, (this.chunks = []), (this.state = i.LocalRecorderState.READY);
                        };
                        this.state === i.LocalRecorderState.RECORDING || this.state === i.LocalRecorderState.PAUSED
                            ? this.stop()
                                  .then(() => e())
                                  .catch(() => e())
                            : e();
                    }
                    download() {
                        if (this.state !== i.LocalRecorderState.FINISHED)
                            throw Error(
                                "'LocalRecord.download()' needs 'LocalRecord.state' to be 'FINISHED' (current value: '" +
                                    this.state +
                                    "'). Call 'LocalRecorder.stop()' before",
                            );
                        {
                            let e = document.createElement("a");
                            (e.style.display = "none"), document.body.appendChild(e);
                            let t = globalThis.URL.createObjectURL(this.blob);
                            (e.href = t),
                                (e.download = this.id + "." + o.default.getExtension(this.blob.type)),
                                e.click(),
                                globalThis.URL.revokeObjectURL(t),
                                document.body.removeChild(e);
                        }
                    }
                    getBlob() {
                        if (this.state === i.LocalRecorderState.FINISHED) return this.blob;
                        throw Error("Call 'LocalRecord.stop()' before getting Blob file");
                    }
                    uploadAsBinary(e, t) {
                        return new Promise((n, r) => {
                            if (this.state !== i.LocalRecorderState.FINISHED)
                                return r(
                                    Error(
                                        "'LocalRecord.uploadAsBinary()' needs 'LocalRecord.state' to be 'FINISHED' (current value: '" +
                                            this.state +
                                            "'). Call 'LocalRecorder.stop()' before",
                                    ),
                                );
                            {
                                let i = new XMLHttpRequest();
                                if ((i.open("POST", e, !0), "object" == typeof t))
                                    for (let e of Object.keys(t)) i.setRequestHeader(e, t[e]);
                                (i.onreadystatechange = () => {
                                    if (4 === i.readyState)
                                        if ("2" === i.status.toString().charAt(0)) return n(i.responseText);
                                        else return r(i.status);
                                }),
                                    i.send(this.blob);
                            }
                        });
                    }
                    uploadAsMultipartfile(e, t) {
                        return new Promise((n, r) => {
                            if (this.state !== i.LocalRecorderState.FINISHED)
                                return r(
                                    Error(
                                        "'LocalRecord.uploadAsMultipartfile()' needs 'LocalRecord.state' to be 'FINISHED' (current value: '" +
                                            this.state +
                                            "'). Call 'LocalRecorder.stop()' before",
                                    ),
                                );
                            {
                                let i = new XMLHttpRequest();
                                if ((i.open("POST", e, !0), "object" == typeof t))
                                    for (let e of Object.keys(t)) i.setRequestHeader(e, t[e]);
                                let s = new FormData();
                                s.append("file", this.blob, this.id + "." + o.default.getExtension(this.blob.type)),
                                    (i.onreadystatechange = () => {
                                        if (4 === i.readyState)
                                            if ("2" === i.status.toString().charAt(0)) return n(i.responseText);
                                            else return r(i.status);
                                    }),
                                    i.send(s);
                            }
                        });
                    }
                    onStopDefault() {
                        s.log("MediaRecorder stopped  (state=" + this.mediaRecorder.state + ")"),
                            (this.blob = new Blob(this.chunks, { type: this.mediaRecorder.mimeType })),
                            (this.chunks = []),
                            (this.videoPreviewSrc = globalThis.URL.createObjectURL(this.blob)),
                            (this.state = i.LocalRecorderState.FINISHED);
                    }
                };
            },
    }),
    B = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/Event.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.Event = void 0),
                    (e.Event = class {
                        constructor(e, t, i) {
                            (this.hasBeenPrevented = !1), (this.cancelable = e), (this.target = t), (this.type = i);
                        }
                        isDefaultPrevented() {
                            return this.hasBeenPrevented;
                        }
                        preventDefault() {
                            (this.callDefaultBehavior = () => {}), (this.hasBeenPrevented = !0);
                        }
                    });
            },
    }),
    U = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/StreamPropertyChangedEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.StreamPropertyChangedEvent = void 0);
                let t = B();
                e.StreamPropertyChangedEvent = class extends t.Event {
                    constructor(e, t, i, n, r, o) {
                        super(!1, e, "streamPropertyChanged"),
                            (this.stream = t),
                            (this.changedProperty = i),
                            (this.newValue = n),
                            (this.oldValue = r),
                            (this.reason = o);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    F = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Enums/OpenViduError.js":
            (e) => {
                var t, i;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.OpenViduError = e.OpenViduErrorName = void 0),
                    ((t = i || (e.OpenViduErrorName = i = {})).BROWSER_NOT_SUPPORTED = "BROWSER_NOT_SUPPORTED"),
                    (t.DEVICE_ACCESS_DENIED = "DEVICE_ACCESS_DENIED"),
                    (t.DEVICE_ALREADY_IN_USE = "DEVICE_ALREADY_IN_USE"),
                    (t.SCREEN_CAPTURE_DENIED = "SCREEN_CAPTURE_DENIED"),
                    (t.SCREEN_SHARING_NOT_SUPPORTED = "SCREEN_SHARING_NOT_SUPPORTED"),
                    (t.SCREEN_EXTENSION_NOT_INSTALLED = "SCREEN_EXTENSION_NOT_INSTALLED"),
                    (t.SCREEN_EXTENSION_DISABLED = "SCREEN_EXTENSION_DISABLED"),
                    (t.INPUT_VIDEO_DEVICE_NOT_FOUND = "INPUT_VIDEO_DEVICE_NOT_FOUND"),
                    (t.INPUT_AUDIO_DEVICE_NOT_FOUND = "INPUT_AUDIO_DEVICE_NOT_FOUND"),
                    (t.INPUT_AUDIO_DEVICE_GENERIC_ERROR = "INPUT_AUDIO_DEVICE_GENERIC_ERROR"),
                    (t.NO_INPUT_SOURCE_SET = "NO_INPUT_SOURCE_SET"),
                    (t.PUBLISHER_PROPERTIES_ERROR = "PUBLISHER_PROPERTIES_ERROR"),
                    (t.OPENVIDU_PERMISSION_DENIED = "OPENVIDU_PERMISSION_DENIED"),
                    (t.OPENVIDU_NOT_CONNECTED = "OPENVIDU_NOT_CONNECTED"),
                    (t.VIRTUAL_BACKGROUND_ERROR = "VIRTUAL_BACKGROUND_ERROR"),
                    (t.GENERIC_ERROR = "GENERIC_ERROR"),
                    (e.OpenViduError = class {
                        constructor(e, t) {
                            (this.name = e), (this.message = t);
                        }
                    });
            },
    }),
    $ = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/Filter.js": (
            e,
        ) => {
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.Filter = void 0);
            let t = U(),
                i = F(),
                n = N().OpenViduLogger.getInstance();
            e.Filter = class {
                constructor(e, t) {
                    (this.handlers = new Map()), (this.type = e), (this.options = t);
                }
                execMethod(e, r) {
                    return new Promise((o, s) => {
                        var a;
                        let d;
                        n.info("Executing filter method to stream " + this.stream.streamId);
                        let c = (i) => {
                            n.info("Filter method successfully executed on Stream " + this.stream.streamId);
                            let r = Object.assign({}, this.stream.filter);
                            return (
                                (this.stream.filter.lastExecMethod = { method: e, params: d }),
                                i &&
                                    (this.stream.session.emitEvent("streamPropertyChanged", [
                                        new t.StreamPropertyChangedEvent(
                                            this.stream.session,
                                            this.stream,
                                            "filter",
                                            this.stream.filter,
                                            r,
                                            "execFilterMethod",
                                        ),
                                    ]),
                                    this.stream.streamManager.emitEvent("streamPropertyChanged", [
                                        new t.StreamPropertyChangedEvent(
                                            this.stream.streamManager,
                                            this.stream,
                                            "filter",
                                            this.stream.filter,
                                            r,
                                            "execFilterMethod",
                                        ),
                                    ])),
                                o()
                            );
                        };
                        if (this.type.startsWith("VB:")) {
                            if ("string" == typeof r)
                                try {
                                    r = JSON.parse(r);
                                } catch (e) {
                                    return s(
                                        new i.OpenViduError(
                                            i.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                            "Wrong params syntax: " + e,
                                        ),
                                    );
                                }
                            if (((d = r), "update" !== e))
                                return s(
                                    new i.OpenViduError(
                                        i.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                        `Unknown Virtual Background method "${e}"`,
                                    ),
                                );
                            if (!(null == (a = this.stream.virtualBackgroundSinkElements) ? void 0 : a.VB))
                                return s(
                                    new i.OpenViduError(
                                        i.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                        "There is no Virtual Background filter applied",
                                    ),
                                );
                            this.stream.virtualBackgroundSinkElements.VB.updateValues(r)
                                .then(() => c(!1))
                                .catch((e) =>
                                    e.name === i.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR
                                        ? s(new i.OpenViduError(e.name, e.message))
                                        : s(
                                              new i.OpenViduError(
                                                  i.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                                  "Error updating values on Virtual Background filter: " + e,
                                              ),
                                          ),
                                );
                        } else {
                            let t;
                            if ("string" != typeof r)
                                try {
                                    t = JSON.stringify(r);
                                } catch (t) {
                                    let e = "'params' property must be a JSON formatted object";
                                    return n.error(e), s(e);
                                }
                            else t = r;
                            (d = t),
                                this.stream.session.openvidu.sendRequest(
                                    "execFilterMethod",
                                    { streamId: this.stream.streamId, method: e, params: t },
                                    (e, t) =>
                                        e
                                            ? (n.error(
                                                  "Error executing filter method for Stream " + this.stream.streamId,
                                                  e,
                                              ),
                                              401 === e.code)
                                                ? s(
                                                      new i.OpenViduError(
                                                          i.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                          "You don't have permissions to execute a filter method",
                                                      ),
                                                  )
                                                : s(e)
                                            : c(!0),
                                );
                        }
                    });
                }
                addEventListener(e, t) {
                    return new Promise((r, o) => {
                        n.info("Adding filter event listener to event " + e + " to stream " + this.stream.streamId),
                            this.stream.session.openvidu.sendRequest(
                                "addFilterEventListener",
                                { streamId: this.stream.streamId, eventType: e },
                                (s, a) =>
                                    s
                                        ? (n.error(
                                              "Error adding filter event listener to event " +
                                                  e +
                                                  "for Stream " +
                                                  this.stream.streamId,
                                              s,
                                          ),
                                          401 === s.code)
                                            ? o(
                                                  new i.OpenViduError(
                                                      i.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                      "You don't have permissions to add a filter event listener",
                                                  ),
                                              )
                                            : o(s)
                                        : (this.handlers.set(e, t),
                                          n.info(
                                              "Filter event listener to event " +
                                                  e +
                                                  " successfully applied on Stream " +
                                                  this.stream.streamId,
                                          ),
                                          r()),
                            );
                    });
                }
                removeEventListener(e) {
                    return new Promise((t, r) => {
                        n.info("Removing filter event listener to event " + e + " to stream " + this.stream.streamId),
                            this.stream.session.openvidu.sendRequest(
                                "removeFilterEventListener",
                                { streamId: this.stream.streamId, eventType: e },
                                (o, s) =>
                                    o
                                        ? (n.error(
                                              "Error removing filter event listener to event " +
                                                  e +
                                                  "for Stream " +
                                                  this.stream.streamId,
                                              o,
                                          ),
                                          401 === o.code)
                                            ? r(
                                                  new i.OpenViduError(
                                                      i.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                      "You don't have permissions to add a filter event listener",
                                                  ),
                                              )
                                            : r(o)
                                        : (this.handlers.delete(e),
                                          n.info(
                                              "Filter event listener to event " +
                                                  e +
                                                  " successfully removed on Stream " +
                                                  this.stream.streamId,
                                          ),
                                          t()),
                            );
                    });
                }
            };
        },
    }),
    W = (0, I.t)({
        "../../node_modules/.pnpm/wolfy87-eventemitter@5.2.9/node_modules/wolfy87-eventemitter/EventEmitter.js": (
            e,
            t,
        ) => {
            !(function (e) {
                function i() {}
                var n = i.prototype,
                    r = e.EventEmitter;
                function o(e, t) {
                    for (var i = e.length; i--; ) if (e[i].listener === t) return i;
                    return -1;
                }
                function s(e) {
                    return function () {
                        return this[e].apply(this, arguments);
                    };
                }
                (n.getListeners = function (e) {
                    var t,
                        i,
                        n = this._getEvents();
                    if (e instanceof RegExp) for (i in ((t = {}), n)) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i]);
                    else t = n[e] || (n[e] = []);
                    return t;
                }),
                    (n.flattenListeners = function (e) {
                        var t,
                            i = [];
                        for (t = 0; t < e.length; t += 1) i.push(e[t].listener);
                        return i;
                    }),
                    (n.getListenersAsObject = function (e) {
                        var t,
                            i = this.getListeners(e);
                        return i instanceof Array && ((t = {})[e] = i), t || i;
                    }),
                    (n.addListener = function (e, t) {
                        if (
                            !(function e(t) {
                                return (
                                    "function" == typeof t ||
                                    t instanceof RegExp ||
                                    (!!t && "object" == typeof t && e(t.listener))
                                );
                            })(t)
                        )
                            throw TypeError("listener must be a function");
                        var i,
                            n = this.getListenersAsObject(e),
                            r = "object" == typeof t;
                        for (i in n)
                            n.hasOwnProperty(i) && -1 === o(n[i], t) && n[i].push(r ? t : { listener: t, once: !1 });
                        return this;
                    }),
                    (n.on = s("addListener")),
                    (n.addOnceListener = function (e, t) {
                        return this.addListener(e, { listener: t, once: !0 });
                    }),
                    (n.once = s("addOnceListener")),
                    (n.defineEvent = function (e) {
                        return this.getListeners(e), this;
                    }),
                    (n.defineEvents = function (e) {
                        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                        return this;
                    }),
                    (n.removeListener = function (e, t) {
                        var i,
                            n,
                            r = this.getListenersAsObject(e);
                        for (n in r) r.hasOwnProperty(n) && -1 !== (i = o(r[n], t)) && r[n].splice(i, 1);
                        return this;
                    }),
                    (n.off = s("removeListener")),
                    (n.addListeners = function (e, t) {
                        return this.manipulateListeners(!1, e, t);
                    }),
                    (n.removeListeners = function (e, t) {
                        return this.manipulateListeners(!0, e, t);
                    }),
                    (n.manipulateListeners = function (e, t, i) {
                        var n,
                            r,
                            o = e ? this.removeListener : this.addListener,
                            s = e ? this.removeListeners : this.addListeners;
                        if ("object" != typeof t || t instanceof RegExp)
                            for (n = i.length; n--; ) o.call(this, t, i[n]);
                        else
                            for (n in t)
                                t.hasOwnProperty(n) &&
                                    (r = t[n]) &&
                                    ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
                        return this;
                    }),
                    (n.removeEvent = function (e) {
                        var t,
                            i = typeof e,
                            n = this._getEvents();
                        if ("string" === i) delete n[e];
                        else if (e instanceof RegExp) for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
                        else delete this._events;
                        return this;
                    }),
                    (n.removeAllListeners = s("removeEvent")),
                    (n.emitEvent = function (e, t) {
                        var i,
                            n,
                            r,
                            o,
                            s = this.getListenersAsObject(e);
                        for (o in s)
                            if (s.hasOwnProperty(o))
                                for (r = 0, i = s[o].slice(0); r < i.length; r++)
                                    !0 === (n = i[r]).once && this.removeListener(e, n.listener),
                                        n.listener.apply(this, t || []) === this._getOnceReturnValue() &&
                                            this.removeListener(e, n.listener);
                        return this;
                    }),
                    (n.trigger = s("emitEvent")),
                    (n.emit = function (e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return this.emitEvent(e, t);
                    }),
                    (n.setOnceReturnValue = function (e) {
                        return (this._onceReturnValue = e), this;
                    }),
                    (n._getOnceReturnValue = function () {
                        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
                    }),
                    (n._getEvents = function () {
                        return this._events || (this._events = {});
                    }),
                    (i.noConflict = function () {
                        return (e.EventEmitter = r), i;
                    }),
                    "function" == typeof define && define.amd
                        ? define(function () {
                              return i;
                          })
                        : "object" == typeof t && t.exports
                          ? (t.exports = i)
                          : (e.EventEmitter = i);
            })("u" > typeof window ? window : e || {});
        },
    }),
    H = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/EventDispatcher.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.EventDispatcher = void 0);
                let t = N(),
                    i = W(),
                    n = t.OpenViduLogger.getInstance();
                e.EventDispatcher = class {
                    constructor() {
                        (this.userHandlerArrowHandler = new WeakMap()), (this.ee = new i());
                    }
                    onAux(e, t, i) {
                        let r = (e) => {
                            e ? n.debug(t, e) : n.debug(t), i(e);
                        };
                        return this.userHandlerArrowHandler.set(i, r), this.ee.on(e, r), this;
                    }
                    onceAux(e, t, i) {
                        let r = (e) => {
                            e ? n.debug(t, e) : n.debug(t), i(e), this.userHandlerArrowHandler.delete(i);
                        };
                        return this.userHandlerArrowHandler.set(i, r), this.ee.once(e, r), this;
                    }
                    offAux(e, t) {
                        if (t) {
                            let i = this.userHandlerArrowHandler.get(t);
                            i && this.ee.off(e, i), this.userHandlerArrowHandler.delete(t);
                        } else this.ee.removeAllListeners(e);
                        return this;
                    }
                };
            },
    }),
    z = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/StreamManagerEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.StreamManagerEvent = void 0);
                let t = B();
                e.StreamManagerEvent = class extends t.Event {
                    constructor(e, t, i) {
                        super(!1, e, t), (this.value = i);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    q = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/VideoElementEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.VideoElementEvent = void 0);
                let t = B();
                e.VideoElementEvent = class extends t.Event {
                    constructor(e, t, i) {
                        super(!1, t, i), (this.element = e);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    G = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/ExceptionEvent.js":
            (e) => {
                var t, i;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ExceptionEvent = e.ExceptionEventName = void 0);
                let n = B();
                ((t = i || (e.ExceptionEventName = i = {})).ICE_CANDIDATE_ERROR = "ICE_CANDIDATE_ERROR"),
                    (t.ICE_CONNECTION_FAILED = "ICE_CONNECTION_FAILED"),
                    (t.ICE_CONNECTION_DISCONNECTED = "ICE_CONNECTION_DISCONNECTED"),
                    (t.NO_STREAM_PLAYING_EVENT = "NO_STREAM_PLAYING_EVENT"),
                    (t.SPEECH_TO_TEXT_DISCONNECTED = "SPEECH_TO_TEXT_DISCONNECTED"),
                    (e.ExceptionEvent = class extends n.Event {
                        constructor(e, t, i, n, r) {
                            super(!1, e, "exception"),
                                (this.name = t),
                                (this.origin = i),
                                (this.message = n),
                                (this.data = r);
                        }
                        callDefaultBehavior() {}
                    });
            },
    }),
    J = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Enums/VideoInsertMode.js":
            (e) => {
                var t, i;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.VideoInsertMode = void 0),
                    ((i = t || (e.VideoInsertMode = t = {})).AFTER = "AFTER"),
                    (i.APPEND = "APPEND"),
                    (i.BEFORE = "BEFORE"),
                    (i.PREPEND = "PREPEND"),
                    (i.REPLACE = "REPLACE");
            },
    }),
    X = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/StreamManager.js":
            (e) => {
                let t;
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.StreamManager = void 0);
                let i = H(),
                    n = z(),
                    r = q(),
                    o = G(),
                    s = J(),
                    a = N(),
                    d = L(),
                    c = a.OpenViduLogger.getInstance();
                e.StreamManager = class extends i.EventDispatcher {
                    constructor(e, i) {
                        if (
                            (super(),
                            (this.videos = []),
                            (this.lazyLaunchVideoElementCreatedEvent = !1),
                            (t = d.PlatformUtils.getInstance()),
                            (this.stream = e),
                            (this.stream.streamManager = this),
                            (this.remote = !this.stream.isLocal()),
                            i)
                        ) {
                            let e;
                            "string" == typeof i
                                ? (e = document.getElementById(i))
                                : i instanceof HTMLElement && (e = i),
                                e &&
                                    ((this.firstVideoElement = {
                                        targetElement: e,
                                        video: document.createElement("video"),
                                        id: "",
                                        canplayListenerAdded: !1,
                                    }),
                                    (t.isSafariBrowser() ||
                                        (t.isIPhoneOrIPad() &&
                                            (t.isChromeMobileBrowser() ||
                                                t.isEdgeMobileBrowser() ||
                                                t.isOperaMobileBrowser() ||
                                                t.isFirefoxMobileBrowser()))) &&
                                        (this.firstVideoElement.video.playsInline = !0),
                                    (this.targetElement = e),
                                    (this.element = e));
                        }
                        this.canPlayListener = () => {
                            this.deactivateStreamPlayingEventExceptionTimeout(),
                                this.ee.emitEvent("streamPlaying", [
                                    new n.StreamManagerEvent(this, "streamPlaying", void 0),
                                ]);
                        };
                    }
                    on(e, t) {
                        return (
                            super.onAux(
                                e,
                                "Event '" + e + "' triggered by '" + (this.remote ? "Subscriber" : "Publisher") + "'",
                                t,
                            ),
                            "videoElementCreated" === e &&
                                this.stream &&
                                this.lazyLaunchVideoElementCreatedEvent &&
                                (this.ee.emitEvent("videoElementCreated", [
                                    new r.VideoElementEvent(this.videos[0].video, this, "videoElementCreated"),
                                ]),
                                (this.lazyLaunchVideoElementCreatedEvent = !1)),
                            "streamPlaying" === e &&
                                this.videos[0] &&
                                this.videos[0].video &&
                                this.videos[0].video.currentTime > 0 &&
                                !1 === this.videos[0].video.paused &&
                                !1 === this.videos[0].video.ended &&
                                4 === this.videos[0].video.readyState &&
                                this.ee.emitEvent("streamPlaying", [
                                    new n.StreamManagerEvent(this, "streamPlaying", void 0),
                                ]),
                            this.stream.hasAudio &&
                                ("publisherStartSpeaking" === e && this.stream.enableHarkSpeakingEvent(),
                                "publisherStopSpeaking" === e && this.stream.enableHarkStoppedSpeakingEvent(),
                                "streamAudioVolumeChange" === e && this.stream.enableHarkVolumeChangeEvent(!1)),
                            this
                        );
                    }
                    once(e, t) {
                        return (
                            super.onceAux(
                                e,
                                "Event '" +
                                    e +
                                    "' triggered once by '" +
                                    (this.remote ? "Subscriber" : "Publisher") +
                                    "'",
                                t,
                            ),
                            "videoElementCreated" === e &&
                                this.stream &&
                                this.lazyLaunchVideoElementCreatedEvent &&
                                this.ee.emitEvent("videoElementCreated", [
                                    new r.VideoElementEvent(this.videos[0].video, this, "videoElementCreated"),
                                ]),
                            "streamPlaying" === e &&
                                this.videos[0] &&
                                this.videos[0].video &&
                                this.videos[0].video.currentTime > 0 &&
                                !1 === this.videos[0].video.paused &&
                                !1 === this.videos[0].video.ended &&
                                4 === this.videos[0].video.readyState &&
                                this.ee.emitEvent("streamPlaying", [
                                    new n.StreamManagerEvent(this, "streamPlaying", void 0),
                                ]),
                            this.stream.hasAudio &&
                                ("publisherStartSpeaking" === e && this.stream.enableOnceHarkSpeakingEvent(),
                                "publisherStopSpeaking" === e && this.stream.enableOnceHarkStoppedSpeakingEvent(),
                                "streamAudioVolumeChange" === e && this.stream.enableOnceHarkVolumeChangeEvent(!1)),
                            this
                        );
                    }
                    off(e, t) {
                        return (
                            super.offAux(e, t),
                            "publisherStartSpeaking" === e &&
                                this.ee.getListeners(e).length + this.stream.session.ee.getListeners(e).length === 0 &&
                                this.stream.disableHarkSpeakingEvent(!1),
                            "publisherStopSpeaking" === e &&
                                this.ee.getListeners(e).length + this.stream.session.ee.getListeners(e).length === 0 &&
                                this.stream.disableHarkStoppedSpeakingEvent(!1),
                            "streamAudioVolumeChange" === e &&
                                0 === this.ee.getListeners(e).length &&
                                this.stream.disableHarkVolumeChangeEvent(!1),
                            this
                        );
                    }
                    addVideoElement(e) {
                        for (let t of (this.initializeVideoProperties(e),
                        !this.remote &&
                            this.stream.displayMyRemote() &&
                            e.srcObject !== this.stream.getMediaStream() &&
                            (e.srcObject = this.stream.getMediaStream()),
                        this.videos))
                            if (t.video === e) return 0;
                        let t = 1;
                        for (let i of this.stream.session.streamManagers)
                            if (i.disassociateVideo(e)) {
                                t = -1;
                                break;
                            }
                        return (
                            this.stream.session.streamManagers.forEach((t) => {
                                t.disassociateVideo(e);
                            }),
                            this.pushNewStreamManagerVideo({ video: e, id: e.id, canplayListenerAdded: !1 }),
                            c.info("New video element associated to ", this),
                            t
                        );
                    }
                    createVideoElement(e, t) {
                        let i;
                        if ("string" == typeof e) {
                            if (!(i = document.getElementById(e)))
                                throw Error(
                                    "The provided 'targetElement' couldn't be resolved to any HTML element: " + e,
                                );
                        } else if (e instanceof HTMLElement) i = e;
                        else throw Error("The provided 'targetElement' couldn't be resolved to any HTML element: " + e);
                        let n = this.createVideo();
                        this.initializeVideoProperties(n);
                        let o = t || s.VideoInsertMode.APPEND;
                        switch (o) {
                            case s.VideoInsertMode.AFTER:
                                i.parentNode.insertBefore(n, i.nextSibling);
                                break;
                            case s.VideoInsertMode.APPEND:
                                i.appendChild(n);
                                break;
                            case s.VideoInsertMode.BEFORE:
                                i.parentNode.insertBefore(n, i);
                                break;
                            case s.VideoInsertMode.PREPEND:
                                i.insertBefore(n, i.childNodes[0]);
                                break;
                            case s.VideoInsertMode.REPLACE:
                                i.parentNode.replaceChild(n, i);
                                break;
                            default:
                                (o = s.VideoInsertMode.APPEND), i.appendChild(n);
                        }
                        let a = { targetElement: i, video: n, insertMode: o, id: n.id, canplayListenerAdded: !1 };
                        return (
                            this.pushNewStreamManagerVideo(a),
                            this.ee.emitEvent("videoElementCreated", [
                                new r.VideoElementEvent(a.video, this, "videoElementCreated"),
                            ]),
                            (this.lazyLaunchVideoElementCreatedEvent = !!this.firstVideoElement),
                            n
                        );
                    }
                    updatePublisherSpeakingEventsOptions(e) {
                        let t = this.stream.harkOptions
                                ? this.stream.harkOptions
                                : this.stream.session.openvidu.advancedConfiguration.publisherSpeakingEventsOptions ||
                                  {},
                            i =
                                "number" == typeof e.interval
                                    ? e.interval
                                    : "number" == typeof t.interval
                                      ? t.interval
                                      : 100,
                            n =
                                "number" == typeof e.threshold
                                    ? e.threshold
                                    : "number" == typeof t.threshold
                                      ? t.threshold
                                      : -50;
                        (this.stream.harkOptions = { interval: i, threshold: n }),
                            this.stream.speechEvent &&
                                (this.stream.speechEvent.setInterval(i), this.stream.speechEvent.setThreshold(n));
                    }
                    initializeVideoProperties(e) {
                        (!this.remote && this.stream.displayMyRemote()) ||
                            e.srcObject === this.stream.getMediaStream() ||
                            (e.srcObject = this.stream.getMediaStream()),
                            (e.autoplay = !0),
                            (e.controls = !1),
                            (t.isSafariBrowser() ||
                                (t.isIPhoneOrIPad() &&
                                    (t.isChromeMobileBrowser() ||
                                        t.isEdgeMobileBrowser() ||
                                        t.isOperaMobileBrowser() ||
                                        t.isFirefoxMobileBrowser()))) &&
                                (e.playsInline = !0),
                            e.id ||
                                ((e.id = (this.remote ? "remote-" : "local-") + "video-" + this.stream.streamId),
                                !this.id && this.targetElement && (this.id = e.id)),
                            this.remote && this.isMirroredVideo(e)
                                ? this.removeMirrorVideo(e)
                                : this.remote ||
                                  this.stream.displayMyRemote() ||
                                  ((e.muted = !0),
                                  this.isMirroredVideo(e) && !this.stream.outboundStreamOpts.publisherProperties.mirror
                                      ? this.removeMirrorVideo(e)
                                      : this.stream.outboundStreamOpts.publisherProperties.mirror &&
                                        !this.stream.isSendScreen() &&
                                        this.mirrorVideo(e));
                    }
                    removeAllVideos() {
                        for (let e = this.stream.session.streamManagers.length - 1; e >= 0; --e)
                            this.stream.session.streamManagers[e] === this &&
                                this.stream.session.streamManagers.splice(e, 1);
                        this.videos.forEach((e) => {
                            e.video &&
                                e.video.removeEventListener &&
                                e.video.removeEventListener("canplay", this.canPlayListener),
                                (e.canplayListenerAdded = !1),
                                e.targetElement &&
                                    (e.video.parentNode.removeChild(e.video),
                                    this.ee.emitEvent("videoElementDestroyed", [
                                        new r.VideoElementEvent(e.video, this, "videoElementDestroyed"),
                                    ])),
                                this.removeSrcObject(e),
                                (this.videos = this.videos.filter((e) => !e.targetElement));
                        });
                    }
                    disassociateVideo(e) {
                        let t = !1;
                        for (let i = 0; i < this.videos.length; i++)
                            if (this.videos[i].video === e) {
                                this.videos[i].video.removeEventListener("canplay", this.canPlayListener),
                                    this.videos.splice(i, 1),
                                    (t = !0),
                                    c.info("Video element disassociated from ", this);
                                break;
                            }
                        return t;
                    }
                    addPlayEventToFirstVideo() {
                        this.videos[0] &&
                            this.videos[0].video &&
                            !this.videos[0].canplayListenerAdded &&
                            (this.activateStreamPlayingEventExceptionTimeout(),
                            this.videos[0].video.addEventListener("canplay", this.canPlayListener),
                            (this.videos[0].canplayListenerAdded = !0));
                    }
                    updateMediaStream(e) {
                        this.videos.forEach((i) => {
                            if (((i.video.srcObject = e), t.isIonicIos())) {
                                let e = i.video.parentElement,
                                    t = i.video;
                                e.replaceChild(t, i.video), (i.video = t);
                            }
                        });
                    }
                    emitEvent(e, t) {
                        this.ee.emitEvent(e, t);
                    }
                    createVideo() {
                        return document.createElement("video");
                    }
                    removeSrcObject(e) {
                        (e.video.srcObject = null), this.deactivateStreamPlayingEventExceptionTimeout();
                    }
                    pushNewStreamManagerVideo(e) {
                        this.videos.push(e),
                            this.addPlayEventToFirstVideo(),
                            -1 === this.stream.session.streamManagers.indexOf(this) &&
                                this.stream.session.streamManagers.push(this);
                    }
                    mirrorVideo(e) {
                        t.isIonicIos() ||
                            ((e.style.transform = "rotateY(180deg)"), (e.style.webkitTransform = "rotateY(180deg)"));
                    }
                    removeMirrorVideo(e) {
                        (e.style.transform = "unset"), (e.style.webkitTransform = "unset");
                    }
                    isMirroredVideo(e) {
                        return "rotateY(180deg)" === e.style.transform || "rotateY(180deg)" === e.style.webkitTransform;
                    }
                    activateStreamPlayingEventExceptionTimeout() {
                        if (!this.remote || null != this.streamPlayingEventExceptionTimeout) return;
                        let e =
                            this.stream.session.openvidu.advancedConfiguration.noStreamPlayingEventExceptionTimeout ||
                            4e3;
                        this.streamPlayingEventExceptionTimeout = setTimeout(() => {
                            let t =
                                "StreamManager of Stream " +
                                this.stream.streamId +
                                " (" +
                                (this.remote ? "Subscriber" : "Publisher") +
                                ') did not trigger "streamPlaying" event in ' +
                                e +
                                " ms";
                            c.warn(t),
                                this.stream.session.emitEvent("exception", [
                                    new o.ExceptionEvent(
                                        this.stream.session,
                                        o.ExceptionEventName.NO_STREAM_PLAYING_EVENT,
                                        this,
                                        t,
                                    ),
                                ]),
                                delete this.streamPlayingEventExceptionTimeout;
                        }, e);
                    }
                    deactivateStreamPlayingEventExceptionTimeout() {
                        clearTimeout(this.streamPlayingEventExceptionTimeout),
                            delete this.streamPlayingEventExceptionTimeout;
                    }
                };
            },
    }),
    K = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/Subscriber.js": (
            e,
        ) => {
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.Subscriber = void 0);
            let t = X(),
                i = N().OpenViduLogger.getInstance();
            e.Subscriber = class extends t.StreamManager {
                constructor(e, t, i) {
                    super(e, t), (this.element = this.targetElement), (this.stream = e), (this.properties = i);
                }
                subscribeToAudio(e) {
                    return (
                        this.stream
                            .getMediaStream()
                            .getAudioTracks()
                            .forEach((t) => {
                                t.enabled = e;
                            }),
                        (this.stream.audioActive = e),
                        i.info("'Subscriber' has " + (e ? "subscribed to" : "unsubscribed from") + " its audio stream"),
                        this
                    );
                }
                subscribeToVideo(e) {
                    return (
                        this.stream
                            .getMediaStream()
                            .getVideoTracks()
                            .forEach((t) => {
                                t.enabled = e;
                            }),
                        (this.stream.videoActive = e),
                        i.info("'Subscriber' has " + (e ? "subscribed to" : "unsubscribed from") + " its video stream"),
                        this
                    );
                }
                replaceTrackInMediaStream(e, t) {
                    let i,
                        n = this.stream.getMediaStream();
                    "video" === e.kind
                        ? ((i = n.getVideoTracks()[0]),
                          t && (this.stream.lastVideoTrackConstraints = e.getConstraints()))
                        : (i = n.getAudioTracks()[0]),
                        n.removeTrack(i),
                        i.stop(),
                        n.addTrack(e);
                }
            };
        },
    }),
    Y = (0, I.t)({
        "../../node_modules/.pnpm/normalice@1.0.1/node_modules/normalice/index.js": (e, t) => {
            var i = ["stun:", "turn:"];
            t.exports = function (e) {
                var t,
                    n,
                    r = (e || {}).url || e,
                    o = {};
                return ("string" == typeof r || r instanceof String) &&
                    ((r = r.trim()), (t = i[i.indexOf(r.slice(0, 5))]))
                    ? ((n = (r = r.slice(5)).split("@")),
                      (o.username = e.username),
                      (o.credential = e.credential),
                      n.length > 1 &&
                          ((r = n[1]),
                          (o.username = (n = n[0].split(":"))[0]),
                          (o.credential = (e || {}).credential || n[1] || "")),
                      (o.url = t + r),
                      (o.urls = [o.url]),
                      o)
                    : e;
            };
        },
    }),
    Q = (0, I.t)({
        "../../node_modules/.pnpm/freeice@2.2.2/node_modules/freeice/stun.json": (e, t) => {
            t.exports = [
                "stun.l.google.com:19302",
                "stun1.l.google.com:19302",
                "stun2.l.google.com:19302",
                "stun3.l.google.com:19302",
                "stun4.l.google.com:19302",
                "stun.ekiga.net",
                "stun.ideasip.com",
                "stun.schlund.de",
                "stun.stunprotocol.org:3478",
                "stun.voiparound.com",
                "stun.voipbuster.com",
                "stun.voipstunt.com",
                "stun.voxgratia.org",
            ];
        },
    }),
    Z = (0, I.t)({
        "../../node_modules/.pnpm/freeice@2.2.2/node_modules/freeice/turn.json": (e, t) => {
            t.exports = [];
        },
    }),
    ee = (0, I.t)({
        "../../node_modules/.pnpm/freeice@2.2.2/node_modules/freeice/index.js": (e, t) => {
            var i = Y();
            t.exports = function (e) {
                var t,
                    n = { stun: (e || {}).stun || Q(), turn: (e || {}).turn || Z() },
                    r = (e || {}).stunCount || 2,
                    o = (e || {}).turnCount || 0;
                function s(e, t) {
                    for (var r, o = [], s = [].concat(n[e]); s.length && o.length < t; )
                        (r = (Math.random() * s.length) | 0), (o = o.concat(s.splice(r, 1)));
                    return o.map(function (t) {
                        return "string" == typeof t || t instanceof String ? i(e + ":" + t) : t;
                    });
                }
                return (t = [].concat(s("stun", r))), o && (t = t.concat(s("turn", o))), t;
            };
        },
    });
function et() {
    if (
        !n &&
        !(n =
            ("u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("u" > typeof msCrypto &&
                "function" == typeof msCrypto.getRandomValues &&
                msCrypto.getRandomValues.bind(msCrypto)))
    )
        throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
        );
    return n(r);
}
var ei = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/rng.js": () => {
            r = new Uint8Array(16);
        },
    }),
    en = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/regex.js": () => {
            o =
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        },
    });
function er(e) {
    return "string" == typeof e && o.test(e);
}
var eo = (0, I.n)({
    "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/validate.js": () => {
        en(), (s = er);
    },
});
function es(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = (
            a[e[t + 0]] +
            a[e[t + 1]] +
            a[e[t + 2]] +
            a[e[t + 3]] +
            "-" +
            a[e[t + 4]] +
            a[e[t + 5]] +
            "-" +
            a[e[t + 6]] +
            a[e[t + 7]] +
            "-" +
            a[e[t + 8]] +
            a[e[t + 9]] +
            "-" +
            a[e[t + 10]] +
            a[e[t + 11]] +
            a[e[t + 12]] +
            a[e[t + 13]] +
            a[e[t + 14]] +
            a[e[t + 15]]
        ).toLowerCase();
    if (!s(i)) throw TypeError("Stringified UUID is invalid");
    return i;
}
var ea = (0, I.n)({
    "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/stringify.js": () => {
        for (eo(), a = [], d = 0; d < 256; ++d) a.push((d + 256).toString(16).substr(1));
        c = es;
    },
});
function ed(e, t, i) {
    var n = (t && i) || 0,
        r = t || Array(16),
        o = (e = e || {}).node || l,
        s = void 0 !== e.clockseq ? e.clockseq : p;
    if (null == o || null == s) {
        var a = e.random || (e.rng || et)();
        null == o && (o = l = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]),
            null == s && (s = p = ((a[6] << 8) | a[7]) & 16383);
    }
    var d = void 0 !== e.msecs ? e.msecs : Date.now(),
        m = void 0 !== e.nsecs ? e.nsecs : h + 1,
        v = d - u + (m - h) / 1e4;
    if (
        (v < 0 && void 0 === e.clockseq && (s = (s + 1) & 16383),
        (v < 0 || d > u) && void 0 === e.nsecs && (m = 0),
        m >= 1e4)
    )
        throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    (u = d), (h = m), (p = s);
    var f = ((0xfffffff & (d += 122192928e5)) * 1e4 + m) % 0x100000000;
    (r[n++] = (f >>> 24) & 255), (r[n++] = (f >>> 16) & 255), (r[n++] = (f >>> 8) & 255), (r[n++] = 255 & f);
    var g = ((d / 0x100000000) * 1e4) & 0xfffffff;
    (r[n++] = (g >>> 8) & 255),
        (r[n++] = 255 & g),
        (r[n++] = ((g >>> 24) & 15) | 16),
        (r[n++] = (g >>> 16) & 255),
        (r[n++] = (s >>> 8) | 128),
        (r[n++] = 255 & s);
    for (var b = 0; b < 6; ++b) r[n + b] = o[b];
    return t || c(r);
}
var ec = (0, I.n)({
    "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v1.js": () => {
        ei(), ea(), (u = 0), (h = 0), (m = ed);
    },
});
function el(e) {
    if (!s(e)) throw TypeError("Invalid UUID");
    var t,
        i = new Uint8Array(16);
    return (
        (i[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
        (i[1] = (t >>> 16) & 255),
        (i[2] = (t >>> 8) & 255),
        (i[3] = 255 & t),
        (i[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
        (i[5] = 255 & t),
        (i[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
        (i[7] = 255 & t),
        (i[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
        (i[9] = 255 & t),
        (i[10] = ((t = parseInt(e.slice(24, 36), 16)) / 0x10000000000) & 255),
        (i[11] = (t / 0x100000000) & 255),
        (i[12] = (t >>> 24) & 255),
        (i[13] = (t >>> 16) & 255),
        (i[14] = (t >>> 8) & 255),
        (i[15] = 255 & t),
        i
    );
}
var ep = (0, I.n)({
    "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/parse.js": () => {
        eo(), (v = el);
    },
});
function eu(e, t, i) {
    function n(e, n, r, o) {
        if (
            ("string" == typeof e &&
                (e = (function (e) {
                    e = unescape(encodeURIComponent(e));
                    for (var t = [], i = 0; i < e.length; ++i) t.push(e.charCodeAt(i));
                    return t;
                })(e)),
            "string" == typeof n && (n = v(n)),
            16 !== n.length)
        )
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var s = new Uint8Array(16 + e.length);
        if ((s.set(n), s.set(e, n.length), ((s = i(s))[6] = (15 & s[6]) | t), (s[8] = (63 & s[8]) | 128), r)) {
            o = o || 0;
            for (var a = 0; a < 16; ++a) r[o + a] = s[a];
            return r;
        }
        return c(s);
    }
    try {
        n.name = e;
    } catch (e) {}
    return (n.DNS = f), (n.URL = g), n;
}
var eh = (0, I.n)({
    "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v35.js": () => {
        ea(), ep(), (f = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"), (g = "6ba7b811-9dad-11d1-80b4-00c04fd430c8");
    },
});
function em(e) {
    if ("string" == typeof e) {
        var t = unescape(encodeURIComponent(e));
        e = new Uint8Array(t.length);
        for (var i = 0; i < t.length; ++i) e[i] = t.charCodeAt(i);
    }
    return (function (e) {
        for (var t = [], i = 32 * e.length, n = "0123456789abcdef", r = 0; r < i; r += 8) {
            var o = (e[r >> 5] >>> (r % 32)) & 255,
                s = parseInt(n.charAt((o >>> 4) & 15) + n.charAt(15 & o), 16);
            t.push(s);
        }
        return t;
    })(
        (function (e, t) {
            (e[t >> 5] |= 128 << (t % 32)), (e[ev(t) - 1] = t);
            for (var i = 0x67452301, n = -0x10325477, r = -0x67452302, o = 0x10325476, s = 0; s < e.length; s += 16) {
                var a = i,
                    d = n,
                    c = r,
                    l = o;
                (i = eb(i, n, r, o, e[s], 7, -0x28955b88)),
                    (o = eb(o, i, n, r, e[s + 1], 12, -0x173848aa)),
                    (r = eb(r, o, i, n, e[s + 2], 17, 0x242070db)),
                    (n = eb(n, r, o, i, e[s + 3], 22, -0x3e423112)),
                    (i = eb(i, n, r, o, e[s + 4], 7, -0xa83f051)),
                    (o = eb(o, i, n, r, e[s + 5], 12, 0x4787c62a)),
                    (r = eb(r, o, i, n, e[s + 6], 17, -0x57cfb9ed)),
                    (n = eb(n, r, o, i, e[s + 7], 22, -0x2b96aff)),
                    (i = eb(i, n, r, o, e[s + 8], 7, 0x698098d8)),
                    (o = eb(o, i, n, r, e[s + 9], 12, -0x74bb0851)),
                    (r = eb(r, o, i, n, e[s + 10], 17, -42063)),
                    (n = eb(n, r, o, i, e[s + 11], 22, -0x76a32842)),
                    (i = eb(i, n, r, o, e[s + 12], 7, 0x6b901122)),
                    (o = eb(o, i, n, r, e[s + 13], 12, -0x2678e6d)),
                    (r = eb(r, o, i, n, e[s + 14], 17, -0x5986bc72)),
                    (n = eb(n, r, o, i, e[s + 15], 22, 0x49b40821)),
                    (i = eE(i, n, r, o, e[s + 1], 5, -0x9e1da9e)),
                    (o = eE(o, i, n, r, e[s + 6], 9, -0x3fbf4cc0)),
                    (r = eE(r, o, i, n, e[s + 11], 14, 0x265e5a51)),
                    (n = eE(n, r, o, i, e[s], 20, -0x16493856)),
                    (i = eE(i, n, r, o, e[s + 5], 5, -0x29d0efa3)),
                    (o = eE(o, i, n, r, e[s + 10], 9, 0x2441453)),
                    (r = eE(r, o, i, n, e[s + 15], 14, -0x275e197f)),
                    (n = eE(n, r, o, i, e[s + 4], 20, -0x182c0438)),
                    (i = eE(i, n, r, o, e[s + 9], 5, 0x21e1cde6)),
                    (o = eE(o, i, n, r, e[s + 14], 9, -0x3cc8f82a)),
                    (r = eE(r, o, i, n, e[s + 3], 14, -0xb2af279)),
                    (n = eE(n, r, o, i, e[s + 8], 20, 0x455a14ed)),
                    (i = eE(i, n, r, o, e[s + 13], 5, -0x561c16fb)),
                    (o = eE(o, i, n, r, e[s + 2], 9, -0x3105c08)),
                    (r = eE(r, o, i, n, e[s + 7], 14, 0x676f02d9)),
                    (n = eE(n, r, o, i, e[s + 12], 20, -0x72d5b376)),
                    (i = eS(i, n, r, o, e[s + 5], 4, -378558)),
                    (o = eS(o, i, n, r, e[s + 8], 11, -0x788e097f)),
                    (r = eS(r, o, i, n, e[s + 11], 16, 0x6d9d6122)),
                    (n = eS(n, r, o, i, e[s + 14], 23, -0x21ac7f4)),
                    (i = eS(i, n, r, o, e[s + 1], 4, -0x5b4115bc)),
                    (o = eS(o, i, n, r, e[s + 4], 11, 0x4bdecfa9)),
                    (r = eS(r, o, i, n, e[s + 7], 16, -0x944b4a0)),
                    (n = eS(n, r, o, i, e[s + 10], 23, -0x41404390)),
                    (i = eS(i, n, r, o, e[s + 13], 4, 0x289b7ec6)),
                    (o = eS(o, i, n, r, e[s], 11, -0x155ed806)),
                    (r = eS(r, o, i, n, e[s + 3], 16, -0x2b10cf7b)),
                    (n = eS(n, r, o, i, e[s + 6], 23, 0x4881d05)),
                    (i = eS(i, n, r, o, e[s + 9], 4, -0x262b2fc7)),
                    (o = eS(o, i, n, r, e[s + 12], 11, -0x1924661b)),
                    (r = eS(r, o, i, n, e[s + 15], 16, 0x1fa27cf8)),
                    (n = eS(n, r, o, i, e[s + 2], 23, -0x3b53a99b)),
                    (i = ex(i, n, r, o, e[s], 6, -0xbd6ddbc)),
                    (o = ex(o, i, n, r, e[s + 7], 10, 0x432aff97)),
                    (r = ex(r, o, i, n, e[s + 14], 15, -0x546bdc59)),
                    (n = ex(n, r, o, i, e[s + 5], 21, -0x36c5fc7)),
                    (i = ex(i, n, r, o, e[s + 12], 6, 0x655b59c3)),
                    (o = ex(o, i, n, r, e[s + 3], 10, -0x70f3336e)),
                    (r = ex(r, o, i, n, e[s + 10], 15, -1051523)),
                    (n = ex(n, r, o, i, e[s + 1], 21, -0x7a7ba22f)),
                    (i = ex(i, n, r, o, e[s + 8], 6, 0x6fa87e4f)),
                    (o = ex(o, i, n, r, e[s + 15], 10, -0x1d31920)),
                    (r = ex(r, o, i, n, e[s + 6], 15, -0x5cfebcec)),
                    (n = ex(n, r, o, i, e[s + 13], 21, 0x4e0811a1)),
                    (i = ex(i, n, r, o, e[s + 4], 6, -0x8ac817e)),
                    (o = ex(o, i, n, r, e[s + 11], 10, -0x42c50dcb)),
                    (r = ex(r, o, i, n, e[s + 2], 15, 0x2ad7d2bb)),
                    (n = ex(n, r, o, i, e[s + 9], 21, -0x14792c6f)),
                    (i = ef(i, a)),
                    (n = ef(n, d)),
                    (r = ef(r, c)),
                    (o = ef(o, l));
            }
            return [i, n, r, o];
        })(
            (function (e) {
                if (0 === e.length) return [];
                for (var t = 8 * e.length, i = new Uint32Array(ev(t)), n = 0; n < t; n += 8)
                    i[n >> 5] |= (255 & e[n / 8]) << (n % 32);
                return i;
            })(e),
            8 * e.length,
        ),
    );
}
function ev(e) {
    return (((e + 64) >>> 9) << 4) + 14 + 1;
}
function ef(e, t) {
    var i = (65535 & e) + (65535 & t);
    return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
}
function eg(e, t, i, n, r, o) {
    var s;
    return ef(((s = ef(ef(t, e), ef(n, o))) << r) | (s >>> (32 - r)), i);
}
function eb(e, t, i, n, r, o, s) {
    return eg((t & i) | (~t & n), e, t, r, o, s);
}
function eE(e, t, i, n, r, o, s) {
    return eg((t & n) | (i & ~n), e, t, r, o, s);
}
function eS(e, t, i, n, r, o, s) {
    return eg(t ^ i ^ n, e, t, r, o, s);
}
function ex(e, t, i, n, r, o, s) {
    return eg(i ^ (t | ~n), e, t, r, o, s);
}
var ew = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/md5.js": () => {
            b = em;
        },
    }),
    ey = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v3.js": () => {
            eh(), ew(), (E = eu("v3", 48, b));
        },
    });
function eO(e, t, i) {
    var n = (e = e || {}).random || (e.rng || et)();
    if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
        i = i || 0;
        for (var r = 0; r < 16; ++r) t[i + r] = n[r];
        return t;
    }
    return c(n);
}
var eI = (0, I.n)({
    "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js": () => {
        ei(), ea(), (S = eO);
    },
});
function eC(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function eR(e) {
    var t = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6],
        i = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    if ("string" == typeof e) {
        var n = unescape(encodeURIComponent(e));
        e = [];
        for (var r = 0; r < n.length; ++r) e.push(n.charCodeAt(r));
    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128);
    for (var o = Math.ceil((e.length / 4 + 2) / 16), s = Array(o), a = 0; a < o; ++a) {
        for (var d = new Uint32Array(16), c = 0; c < 16; ++c)
            d[c] =
                (e[64 * a + 4 * c] << 24) |
                (e[64 * a + 4 * c + 1] << 16) |
                (e[64 * a + 4 * c + 2] << 8) |
                e[64 * a + 4 * c + 3];
        s[a] = d;
    }
    (s[o - 1][14] = ((e.length - 1) * 8) / 0x100000000),
        (s[o - 1][14] = Math.floor(s[o - 1][14])),
        (s[o - 1][15] = ((e.length - 1) * 8) | 0);
    for (var l = 0; l < o; ++l) {
        for (var p = new Uint32Array(80), u = 0; u < 16; ++u) p[u] = s[l][u];
        for (var h = 16; h < 80; ++h) p[h] = eC(p[h - 3] ^ p[h - 8] ^ p[h - 14] ^ p[h - 16], 1);
        for (var m = i[0], v = i[1], f = i[2], g = i[3], b = i[4], E = 0; E < 80; ++E) {
            var S = Math.floor(E / 20),
                x =
                    (eC(m, 5) +
                        (function (e, t, i, n) {
                            switch (e) {
                                case 0:
                                    return (t & i) ^ (~t & n);
                                case 1:
                                case 3:
                                    return t ^ i ^ n;
                                case 2:
                                    return (t & i) ^ (t & n) ^ (i & n);
                            }
                        })(S, v, f, g) +
                        b +
                        t[S] +
                        p[E]) >>>
                    0;
            (b = g), (g = f), (f = eC(v, 30) >>> 0), (v = m), (m = x);
        }
        (i[0] = (i[0] + m) >>> 0),
            (i[1] = (i[1] + v) >>> 0),
            (i[2] = (i[2] + f) >>> 0),
            (i[3] = (i[3] + g) >>> 0),
            (i[4] = (i[4] + b) >>> 0);
    }
    return [
        (i[0] >> 24) & 255,
        (i[0] >> 16) & 255,
        (i[0] >> 8) & 255,
        255 & i[0],
        (i[1] >> 24) & 255,
        (i[1] >> 16) & 255,
        (i[1] >> 8) & 255,
        255 & i[1],
        (i[2] >> 24) & 255,
        (i[2] >> 16) & 255,
        (i[2] >> 8) & 255,
        255 & i[2],
        (i[3] >> 24) & 255,
        (i[3] >> 16) & 255,
        (i[3] >> 8) & 255,
        255 & i[3],
        (i[4] >> 24) & 255,
        (i[4] >> 16) & 255,
        (i[4] >> 8) & 255,
        255 & i[4],
    ];
}
var ek = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/sha1.js": () => {
            x = eR;
        },
    }),
    eT = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v5.js": () => {
            eh(), ek(), (w = eu("v5", 80, x));
        },
    }),
    eP = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/nil.js": () => {
            y = "00000000-0000-0000-0000-000000000000";
        },
    });
function eN(e) {
    if (!s(e)) throw TypeError("Invalid UUID");
    return parseInt(e.substr(14, 1), 16);
}
var e_ = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/version.js": () => {
            eo(), (O = eN);
        },
    }),
    eL = (0, I.r)({
        NIL: () => y,
        parse: () => v,
        stringify: () => c,
        v1: () => m,
        v3: () => E,
        v4: () => S,
        v5: () => w,
        validate: () => s,
        version: () => O,
    }),
    eV = (0, I.n)({
        "../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/index.js": () => {
            ec(), ey(), eI(), eT(), eP(), e_(), eo(), ea(), ep();
        },
    }),
    eM = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/WebRtcPeer/WebRtcPeer.js":
            (e) => {
                var t =
                    (e && e.__awaiter) ||
                    function (e, t, i, n) {
                        return new (i || (i = Promise))(function (r, o) {
                            function s(e) {
                                try {
                                    d(n.next(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function a(e) {
                                try {
                                    d(n.throw(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function d(e) {
                                var t;
                                e.done
                                    ? r(e.value)
                                    : ((t = e.value) instanceof i
                                          ? t
                                          : new i(function (e) {
                                                e(t);
                                            })
                                      ).then(s, a);
                            }
                            d((n = n.apply(e, t || [])).next());
                        });
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.WebRtcPeerSendrecv = e.WebRtcPeerSendonly = e.WebRtcPeerRecvonly = e.WebRtcPeer = void 0);
                let i = ee(),
                    n = (eV(), (0, I.i)(eL)),
                    r = G(),
                    o = N(),
                    s = L(),
                    a = o.OpenViduLogger.getInstance();
                var d = class {
                    constructor(e) {
                        (this.remoteCandidatesQueue = []),
                            (this.localCandidatesQueue = []),
                            (this.iceCandidateList = []),
                            s.PlatformUtils.getInstance(),
                            (this.configuration = Object.assign(Object.assign({}, e), {
                                iceServers: e.iceServers && e.iceServers.length > 0 ? e.iceServers : i(),
                                rtcConfiguration: void 0 !== e.rtcConfiguration ? e.rtcConfiguration : {},
                                mediaStream: void 0 !== e.mediaStream ? e.mediaStream : null,
                                mode: e.mode ? e.mode : "sendrecv",
                                id: e.id ? e.id : this.generateUniqueId(),
                            })),
                            a.debug(`[WebRtcPeer] configuration:
${JSON.stringify(this.configuration, null, 2)}`);
                        let n = this.configuration.rtcConfiguration
                            ? this.configuration.rtcConfiguration
                            : { iceServers: this.configuration.iceServers };
                        !n.iceServers &&
                            this.configuration.iceServers &&
                            (n.iceServers = this.configuration.iceServers),
                            (this.pc = new RTCPeerConnection(n)),
                            this.pc.addEventListener("icecandidate", (e) => {
                                if (null !== e.candidate) {
                                    let t = new RTCIceCandidate(e.candidate);
                                    this.configuration.onIceCandidate(t),
                                        "" !== t.candidate && this.localCandidatesQueue.push(t);
                                }
                            }),
                            this.pc.addEventListener("signalingstatechange", () =>
                                t(this, void 0, void 0, function* () {
                                    if ("stable" === this.pc.signalingState)
                                        for (; this.iceCandidateList.length > 0; ) {
                                            let e = this.iceCandidateList.shift();
                                            try {
                                                yield this.pc.addIceCandidate(e);
                                            } catch (e) {
                                                a.error(
                                                    "Error when calling RTCPeerConnection#addIceCandidate for RTCPeerConnection " +
                                                        this.getId(),
                                                    e,
                                                );
                                            }
                                        }
                                }),
                            );
                    }
                    getId() {
                        return this.configuration.id;
                    }
                    dispose() {
                        a.debug("Disposing WebRtcPeer"),
                            this.pc &&
                                "closed" !== this.pc.signalingState &&
                                (this.pc.close(), (this.remoteCandidatesQueue = []), (this.localCandidatesQueue = []));
                    }
                    createOfferLegacy() {
                        this.configuration.mediaStream && this.deprecatedPeerConnectionTrackApi();
                        let e = this.configuration.mediaConstraints.audio,
                            t = this.configuration.mediaConstraints.video,
                            i = {
                                offerToReceiveAudio: "sendonly" !== this.configuration.mode && e,
                                offerToReceiveVideo: "sendonly" !== this.configuration.mode && t,
                            };
                        return (
                            a.debug("[createOfferLegacy] RTCPeerConnection.createOffer() options:", JSON.stringify(i)),
                            this.pc.createOffer(i)
                        );
                    }
                    createOffer() {
                        return t(this, void 0, void 0, function* () {
                            var e, t, i, n, r, o, s, d;
                            let c;
                            if (!("addTransceiver" in this.pc))
                                return (
                                    a.warn(
                                        "[createOffer] Method RTCPeerConnection.addTransceiver() is NOT available; using LEGACY offerToReceive{Audio,Video}",
                                    ),
                                    this.createOfferLegacy()
                                );
                            if (
                                (a.debug(
                                    "[createOffer] Method RTCPeerConnection.addTransceiver() is available; using it",
                                ),
                                "recvonly" !== this.configuration.mode)
                            ) {
                                if (!this.configuration.mediaStream)
                                    throw Error(
                                        `[WebRtcPeer.createOffer] Direction is '${this.configuration.mode}', but no stream was configured to be sent`,
                                    );
                                for (let c of this.configuration.mediaStream.getTracks()) {
                                    let l = {
                                        direction: this.configuration.mode,
                                        streams: [this.configuration.mediaStream],
                                    };
                                    if ("video" === c.kind && this.configuration.simulcast) {
                                        let s = c.getSettings(),
                                            d = c.getConstraints(),
                                            p =
                                                null !=
                                                (i =
                                                    null != (t = null != (e = s.width) ? e : d.width.ideal)
                                                        ? t
                                                        : d.width)
                                                    ? i
                                                    : 0,
                                            u =
                                                null !=
                                                (o =
                                                    null != (r = null != (n = s.height) ? n : d.height.ideal)
                                                        ? r
                                                        : d.height)
                                                    ? o
                                                    : 0;
                                        a.info(`[createOffer] Video track dimensions: ${p}x${u}`);
                                        let h = p * u,
                                            m = 0;
                                        (m = h >= 518400 ? 3 : h >= 129600 ? 2 : 1), (l.sendEncodings = []);
                                        for (let e = 0; e < m; e++) {
                                            let t = Math.pow(2, m - e - 1),
                                                i = { rid: "rdiv" + t.toString(), scalabilityMode: "L1T1" };
                                            ["detail", "text"].includes(c.contentHint)
                                                ? ((i.scaleResolutionDownBy = 1), (i.maxFramerate = Math.floor(30 / t)))
                                                : (i.scaleResolutionDownBy = t),
                                                l.sendEncodings.push(i);
                                        }
                                    }
                                    let p = this.pc.addTransceiver(c, l);
                                    if ("video" === c.kind) {
                                        let e = p.sender.getParameters(),
                                            t = !1;
                                        if (
                                            ((null == (s = e.degradationPreference) ? void 0 : s.length) ||
                                                (["detail", "text"].includes(c.contentHint)
                                                    ? (e.degradationPreference = "maintain-resolution")
                                                    : (e.degradationPreference = "balanced"),
                                                a.info(
                                                    `[createOffer] Video sender Degradation Preference set: ${e.degradationPreference}`,
                                                ),
                                                (t = !0)),
                                            this.configuration.simulcast &&
                                                (null == (d = e.encodings) ? void 0 : d.length) !==
                                                    l.sendEncodings.length &&
                                                ((e.encodings = l.sendEncodings), (t = !0)),
                                            t)
                                        ) {
                                            a.debug("[createOffer] Setting new RTCRtpSendParameters to video sender");
                                            try {
                                                yield p.sender.setParameters(e);
                                            } catch (t) {
                                                let e =
                                                    "[WebRtcPeer.createOffer] Cannot set RTCRtpSendParameters to video sender";
                                                throw (t instanceof Error && (e += `: ${t.message}`), Error(e));
                                            }
                                        }
                                    }
                                }
                            } else
                                for (let e of ["audio", "video"])
                                    this.configuration.mediaConstraints[e] &&
                                        ((this.configuration.mediaStream = new MediaStream()),
                                        this.pc.addTransceiver(e, {
                                            direction: this.configuration.mode,
                                            streams: [this.configuration.mediaStream],
                                        }));
                            try {
                                c = yield this.pc.createOffer();
                            } catch (t) {
                                let e = "[WebRtcPeer.createOffer] Browser failed creating an SDP Offer";
                                throw (t instanceof Error && (e += `: ${t.message}`), Error(e));
                            }
                            return c;
                        });
                    }
                    deprecatedPeerConnectionTrackApi() {
                        for (let e of this.configuration.mediaStream.getTracks())
                            this.pc.addTrack(e, this.configuration.mediaStream);
                    }
                    createAnswer() {
                        return new Promise((e, t) => {
                            if ("getTransceivers" in this.pc) {
                                for (let e of (a.debug(
                                    "[createAnswer] Method RTCPeerConnection.getTransceivers() is available; using it",
                                ),
                                ["audio", "video"])) {
                                    if (!this.configuration.mediaConstraints[e]) continue;
                                    let i = this.pc.getTransceivers().find((t) => t.receiver.track.kind === e);
                                    if (!i)
                                        return t(
                                            Error(
                                                `${e} requested, but no transceiver was created from remote description`,
                                            ),
                                        );
                                    i.direction = this.configuration.mode;
                                }
                                this.pc
                                    .createAnswer()
                                    .then((t) => e(t))
                                    .catch((e) => t(e));
                            } else if (this.configuration.mediaConstraints) {
                                let i = {
                                    offerToReceiveAudio:
                                        "boolean" != typeof this.configuration.mediaConstraints.audio ||
                                        this.configuration.mediaConstraints.audio,
                                    offerToReceiveVideo:
                                        "boolean" != typeof this.configuration.mediaConstraints.video ||
                                        this.configuration.mediaConstraints.video,
                                };
                                this.pc
                                    .createAnswer(i)
                                    .then((t) => e(t))
                                    .catch((e) => t(e));
                            }
                        });
                    }
                    processLocalOffer(e) {
                        return new Promise((t, i) => {
                            this.pc
                                .setLocalDescription(e)
                                .then(() => {
                                    let e = this.pc.localDescription;
                                    return e
                                        ? (a.debug("Local description set", e.sdp), t())
                                        : i("Local description is not defined");
                                })
                                .catch((e) => i(e));
                        });
                    }
                    processRemoteOffer(e) {
                        return new Promise((t, i) => {
                            let n = { type: "offer", sdp: e };
                            if (
                                (a.debug("SDP offer received, setting remote description", n),
                                "closed" === this.pc.signalingState)
                            )
                                return i("RTCPeerConnection is closed when trying to set remote description");
                            this.setRemoteDescription(n)
                                .then(() => t())
                                .catch((e) => i(e));
                        });
                    }
                    processLocalAnswer(e) {
                        return new Promise((t, i) => {
                            if (
                                (a.debug("SDP answer created, setting local description"),
                                "closed" === this.pc.signalingState)
                            )
                                return i("RTCPeerConnection is closed when trying to set local description");
                            this.pc
                                .setLocalDescription(e)
                                .then(() => t())
                                .catch((e) => i(e));
                        });
                    }
                    processRemoteAnswer(e) {
                        return new Promise((t, i) => {
                            if (
                                (a.debug("SDP answer received, setting remote description"),
                                "closed" === this.pc.signalingState)
                            )
                                return i("RTCPeerConnection is closed when trying to set remote description");
                            this.setRemoteDescription({ type: "answer", sdp: e })
                                .then(() => {
                                    t();
                                })
                                .catch((e) => i(e));
                        });
                    }
                    setRemoteDescription(e) {
                        return t(this, void 0, void 0, function* () {
                            return this.pc.setRemoteDescription(e);
                        });
                    }
                    addIceCandidate(e) {
                        return new Promise((t, i) => {
                            switch (
                                (a.debug("Remote ICE candidate received", e),
                                this.remoteCandidatesQueue.push(e),
                                this.pc.signalingState)
                            ) {
                                case "closed":
                                    i(Error("PeerConnection object is closed"));
                                    break;
                                case "stable":
                                    this.pc.remoteDescription
                                        ? this.pc
                                              .addIceCandidate(e)
                                              .then(() => t())
                                              .catch((e) => i(e))
                                        : (this.iceCandidateList.push(e), t());
                                    break;
                                default:
                                    this.iceCandidateList.push(e), t();
                            }
                        });
                    }
                    addIceConnectionStateChangeListener(e) {
                        this.pc.addEventListener("iceconnectionstatechange", () => {
                            switch (this.pc.iceConnectionState) {
                                case "disconnected":
                                    let t =
                                        "IceConnectionState of RTCPeerConnection " +
                                        this.configuration.id +
                                        " (" +
                                        e +
                                        ') change to "disconnected". Possible network disconnection';
                                    a.warn(t),
                                        this.configuration.onIceConnectionStateException(
                                            r.ExceptionEventName.ICE_CONNECTION_DISCONNECTED,
                                            t,
                                        );
                                    break;
                                case "failed":
                                    let i =
                                        "IceConnectionState of RTCPeerConnection " +
                                        this.configuration.id +
                                        " (" +
                                        e +
                                        ') to "failed"';
                                    a.error(i),
                                        this.configuration.onIceConnectionStateException(
                                            r.ExceptionEventName.ICE_CONNECTION_FAILED,
                                            i,
                                        );
                                    break;
                                case "closed":
                                    a.log(
                                        "IceConnectionState of RTCPeerConnection " +
                                            this.configuration.id +
                                            " (" +
                                            e +
                                            ') change to "closed"',
                                    );
                                    break;
                                case "new":
                                    a.log(
                                        "IceConnectionState of RTCPeerConnection " +
                                            this.configuration.id +
                                            " (" +
                                            e +
                                            ') change to "new"',
                                    );
                                    break;
                                case "checking":
                                    a.log(
                                        "IceConnectionState of RTCPeerConnection " +
                                            this.configuration.id +
                                            " (" +
                                            e +
                                            ') change to "checking"',
                                    );
                                    break;
                                case "connected":
                                    a.log(
                                        "IceConnectionState of RTCPeerConnection " +
                                            this.configuration.id +
                                            " (" +
                                            e +
                                            ') change to "connected"',
                                    );
                                    break;
                                case "completed":
                                    a.log(
                                        "IceConnectionState of RTCPeerConnection " +
                                            this.configuration.id +
                                            " (" +
                                            e +
                                            ') change to "completed"',
                                    );
                            }
                        });
                    }
                    generateUniqueId() {
                        return (0, n.v4)();
                    }
                };
                (e.WebRtcPeer = d),
                    (e.WebRtcPeerRecvonly = class extends d {
                        constructor(e) {
                            (e.mode = "recvonly"), super(e);
                        }
                    }),
                    (e.WebRtcPeerSendonly = class extends d {
                        constructor(e) {
                            (e.mode = "sendonly"), super(e);
                        }
                    }),
                    (e.WebRtcPeerSendrecv = class extends d {
                        constructor(e) {
                            (e.mode = "sendrecv"), super(e);
                        }
                    });
            },
    }),
    eA = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/WebRtcStats/WebRtcStats.js":
            (e) => {
                let t;
                var i =
                    (e && e.__awaiter) ||
                    function (e, t, i, n) {
                        return new (i || (i = Promise))(function (r, o) {
                            function s(e) {
                                try {
                                    d(n.next(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function a(e) {
                                try {
                                    d(n.throw(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function d(e) {
                                var t;
                                e.done
                                    ? r(e.value)
                                    : ((t = e.value) instanceof i
                                          ? t
                                          : new i(function (e) {
                                                e(t);
                                            })
                                      ).then(s, a);
                            }
                            d((n = n.apply(e, t || [])).next());
                        });
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.WebRtcStats = void 0);
                let n = N(),
                    r = L(),
                    o = n.OpenViduLogger.getInstance();
                e.WebRtcStats = class {
                    constructor(e) {
                        (this.stream = e),
                            (this.STATS_ITEM_NAME = "webrtc-stats-config"),
                            (this.webRtcStatsEnabled = !1),
                            (this.statsInterval = 1),
                            (t = r.PlatformUtils.getInstance());
                    }
                    isEnabled() {
                        return this.webRtcStatsEnabled;
                    }
                    initWebRtcStats() {
                        let e;
                        try {
                            e = localStorage.getItem(this.STATS_ITEM_NAME);
                        } catch (e) {}
                        if (e) {
                            this.webRtcStatsEnabled = !0;
                            let t = JSON.parse(e);
                            o.warn(
                                "WebRtc stats enabled for stream " +
                                    this.stream.streamId +
                                    " of connection " +
                                    this.stream.connection.connectionId,
                            ),
                                o.warn("localStorage item: " + JSON.stringify(t)),
                                (this.POST_URL = t.httpEndpoint),
                                (this.statsInterval = t.interval),
                                (this.webRtcStatsIntervalId = setInterval(
                                    () =>
                                        i(this, void 0, void 0, function* () {
                                            yield this.sendStatsToHttpEndpoint();
                                        }),
                                    1e3 * this.statsInterval,
                                ));
                        } else o.debug("WebRtc stats not enabled");
                    }
                    getSelectedIceCandidateInfo() {
                        return new Promise((e, n) =>
                            i(this, void 0, void 0, function* () {
                                let i,
                                    n,
                                    r = yield this.stream.getRTCPeerConnection().getStats(),
                                    o = new Map(),
                                    s = new Map(),
                                    a = new Map();
                                if (
                                    (r.forEach((e) => {
                                        switch (
                                            ("transport" === e.type &&
                                                (t.isChromium() || t.isSafariBrowser() || t.isReactNative()) &&
                                                (i = e),
                                            e.type)
                                        ) {
                                            case "candidate-pair":
                                                o.set(e.id, e);
                                                break;
                                            case "local-candidate":
                                                s.set(e.id, e);
                                                break;
                                            case "remote-candidate":
                                                a.set(e.id, e);
                                        }
                                    }),
                                    null != i)
                                ) {
                                    let e = i.selectedCandidatePairId;
                                    n = o.get(e);
                                } else {
                                    let e = o.size,
                                        t = o.values();
                                    for (let i = 0; i < e; i++) {
                                        let e = t.next().value;
                                        if (e.selected) {
                                            n = e;
                                            break;
                                        }
                                    }
                                }
                                let d = n.localCandidateId,
                                    c = n.remoteCandidateId,
                                    l = s.get(d);
                                if (l) {
                                    let e = this.stream
                                        .getLocalIceCandidateList()
                                        .filter(
                                            (e) =>
                                                !!e.candidate &&
                                                (e.candidate.indexOf(l.ip) >= 0 ||
                                                    e.candidate.indexOf(l.address) >= 0) &&
                                                e.candidate.indexOf(l.port) >= 0,
                                        );
                                    for (let t of ((l.raw = []), e)) l.raw.push(t.candidate);
                                } else l = "ERROR: No active local ICE candidate. Probably ICE-TCP is being used";
                                let p = a.get(c);
                                if (p) {
                                    let e = this.stream
                                        .getRemoteIceCandidateList()
                                        .filter(
                                            (e) =>
                                                !!e.candidate &&
                                                (e.candidate.indexOf(p.ip) >= 0 ||
                                                    e.candidate.indexOf(p.address) >= 0) &&
                                                e.candidate.indexOf(p.port) >= 0,
                                        );
                                    for (let t of ((p.raw = []), e)) p.raw.push(t.candidate);
                                } else p = "ERROR: No active remote ICE candidate. Probably ICE-TCP is being used";
                                return e({ localCandidate: l, remoteCandidate: p });
                            }),
                        );
                    }
                    stopWebRtcStats() {
                        this.webRtcStatsEnabled &&
                            (clearInterval(this.webRtcStatsIntervalId),
                            o.warn(
                                "WebRtc stats stopped for disposed stream " +
                                    this.stream.streamId +
                                    " of connection " +
                                    this.stream.connection.connectionId,
                            ));
                    }
                    sendStats(e, t) {
                        return i(this, void 0, void 0, function* () {
                            try {
                                let i = {
                                    headers: { "Content-type": "application/json" },
                                    body: JSON.stringify(t),
                                    method: "POST",
                                };
                                yield fetch(e, i);
                            } catch (e) {
                                o.error(`sendStats error: ${JSON.stringify(e)}`);
                            }
                        });
                    }
                    sendStatsToHttpEndpoint() {
                        return i(this, void 0, void 0, function* () {
                            try {
                                let e = yield this.getCommonStats(),
                                    t = this.generateJSONStatsResponse(e);
                                yield this.sendStats(this.POST_URL, t);
                            } catch (e) {
                                o.log(e);
                            }
                        });
                    }
                    getCommonStats() {
                        return i(this, void 0, void 0, function* () {
                            return new Promise((e, t) =>
                                i(this, void 0, void 0, function* () {
                                    try {
                                        let t = yield this.stream.getRTCPeerConnection().getStats(),
                                            i = this.getWebRtcStatsResponseOutline(),
                                            n = [
                                                "framesReceived",
                                                "framesDropped",
                                                "framesSent",
                                                "frameHeight",
                                                "frameWidth",
                                            ],
                                            r = ["availableOutgoingBitrate", "currentRoundTripTime"];
                                        return (
                                            t.forEach((e) => {
                                                let t = null != e.mediaType ? e.mediaType : e.kind,
                                                    o = (o, s) => {
                                                        null != e[s] &&
                                                            null != i[o] &&
                                                            (!t && n.indexOf(s) > -1 && (t = "video"),
                                                            null != o && null != t && null != s && null != i[o][t]
                                                                ? (i[o][t][s] = Number(e[s]))
                                                                : null != o &&
                                                                  null != s &&
                                                                  r.includes(s) &&
                                                                  (i[o][s] = Number(e[s])));
                                                    };
                                                switch (e.type) {
                                                    case "outbound-rtp":
                                                        o("outbound", "bytesSent"),
                                                            o("outbound", "packetsSent"),
                                                            o("outbound", "framesEncoded"),
                                                            o("outbound", "nackCount"),
                                                            o("outbound", "firCount"),
                                                            o("outbound", "pliCount"),
                                                            o("outbound", "qpSum");
                                                        break;
                                                    case "inbound-rtp":
                                                        o("inbound", "bytesReceived"),
                                                            o("inbound", "packetsReceived"),
                                                            o("inbound", "packetsLost"),
                                                            o("inbound", "jitter"),
                                                            o("inbound", "framesDecoded"),
                                                            o("inbound", "nackCount"),
                                                            o("inbound", "firCount"),
                                                            o("inbound", "pliCount");
                                                        break;
                                                    case "track":
                                                        o("inbound", "jitterBufferDelay"),
                                                            o("inbound", "framesReceived"),
                                                            o("outbound", "framesDropped"),
                                                            o("outbound", "framesSent"),
                                                            o(
                                                                this.stream.isLocal() ? "outbound" : "inbound",
                                                                "frameHeight",
                                                            ),
                                                            o(
                                                                this.stream.isLocal() ? "outbound" : "inbound",
                                                                "frameWidth",
                                                            );
                                                        break;
                                                    case "candidate-pair":
                                                        o("candidatepair", "currentRoundTripTime"),
                                                            o("candidatepair", "availableOutgoingBitrate");
                                                }
                                            }),
                                            ((null == i ? void 0 : i.candidatepair) &&
                                                0 !== Object.keys(i.candidatepair).length) ||
                                                delete i.candidatepair,
                                            e(i)
                                        );
                                    } catch (e) {
                                        return o.error("Error getting common stats: ", e), t(e);
                                    }
                                }),
                            );
                        });
                    }
                    generateJSONStatsResponse(e) {
                        return {
                            "@timestamp": new Date().toISOString(),
                            participant_id: this.stream.connection.data,
                            session_id: this.stream.session.sessionId,
                            platform: t.getName(),
                            platform_description: t.getDescription(),
                            stream: "webRTC",
                            webrtc_stats: e,
                        };
                    }
                    getWebRtcStatsResponseOutline() {
                        return this.stream.isLocal()
                            ? { outbound: { audio: {}, video: {} }, candidatepair: {} }
                            : { inbound: { audio: {}, video: {} } };
                    }
                };
            },
    }),
    eD = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/PublisherSpeakingEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.PublisherSpeakingEvent = void 0);
                let t = B();
                e.PublisherSpeakingEvent = class extends t.Event {
                    constructor(e, t, i, n) {
                        super(!1, e, t), (this.type = t), (this.connection = i), (this.streamId = n);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    ej = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Enums/TypeOfVideo.js":
            (e) => {
                var t, i;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.TypeOfVideo = void 0),
                    ((i = t || (e.TypeOfVideo = t = {})).CAMERA = "CAMERA"),
                    (i.SCREEN = "SCREEN"),
                    (i.CUSTOM = "CUSTOM"),
                    (i.IPCAM = "IPCAM");
            },
    }),
    eB = (0, I.t)({
        "../../node_modules/.pnpm/wildemitter@1.2.1/node_modules/wildemitter/wildemitter.js": (e, t) => {
            function i() {}
            (t.exports = i),
                (i.mixin = function (e) {
                    var t = e.prototype || e;
                    (t.isWildEmitter = !0),
                        (t.on = function (e, t, i) {
                            this.callbacks = this.callbacks || {};
                            var n = 3 == arguments.length,
                                r = n ? arguments[1] : void 0,
                                o = n ? arguments[2] : arguments[1];
                            return (o._groupName = r), (this.callbacks[e] = this.callbacks[e] || []).push(o), this;
                        }),
                        (t.once = function (e, t, i) {
                            var n = this,
                                r = 3 == arguments.length,
                                o = r ? arguments[1] : void 0,
                                s = r ? arguments[2] : arguments[1];
                            return (
                                this.on(e, o, function t() {
                                    n.off(e, t), s.apply(this, arguments);
                                }),
                                this
                            );
                        }),
                        (t.releaseGroup = function (e) {
                            var t, i, n, r;
                            for (t in ((this.callbacks = this.callbacks || {}), this.callbacks))
                                for (i = 0, n = (r = this.callbacks[t]).length; i < n; i++)
                                    r[i]._groupName === e && (r.splice(i, 1), i--, n--);
                            return this;
                        }),
                        (t.off = function (e, t) {
                            this.callbacks = this.callbacks || {};
                            var i,
                                n = this.callbacks[e];
                            return (
                                n &&
                                    (1 == arguments.length
                                        ? delete this.callbacks[e]
                                        : -1 !== (i = n.indexOf(t)) &&
                                          (n.splice(i, 1), 0 === n.length && delete this.callbacks[e])),
                                this
                            );
                        }),
                        (t.emit = function (e) {
                            this.callbacks = this.callbacks || {};
                            var t,
                                i,
                                n,
                                r = [].slice.call(arguments, 1),
                                o = this.callbacks[e],
                                s = this.getWildcardCallbacks(e);
                            if (o) for (t = 0, i = (n = o.slice()).length; t < i && n[t]; ++t) n[t].apply(this, r);
                            if (s)
                                for (t = 0, i = s.length, i = (n = s.slice()).length; t < i && n[t]; ++t)
                                    n[t].apply(this, [e].concat(r));
                            return this;
                        }),
                        (t.getWildcardCallbacks = function (e) {
                            this.callbacks = this.callbacks || {};
                            var t,
                                i,
                                n = [];
                            for (t in this.callbacks)
                                (i = t.split("*")),
                                    ("*" === t || (2 === i.length && e.slice(0, i[0].length) === i[0])) &&
                                        (n = n.concat(this.callbacks[t]));
                            return n;
                        });
                }),
                i.mixin(i);
        },
    }),
    eU = (0, I.t)({
        "../../node_modules/.pnpm/hark@1.2.3/node_modules/hark/hark.js": (e, t) => {
            var i,
                n = eB();
            "u" > typeof window && (i = window.AudioContext || window.webkitAudioContext);
            var r = null;
            t.exports = function (e, t) {
                var o = new n();
                if (!i) return o;
                var s,
                    a,
                    t = t || {},
                    d = t.smoothing || 0.1,
                    c = t.interval || 50,
                    l = t.threshold,
                    p = t.play,
                    u = t.history || 10,
                    h = !0,
                    m = (r = t.audioContext || r || new i()).createAnalyser();
                (m.fftSize = 512),
                    (m.smoothingTimeConstant = d),
                    (a = new Float32Array(m.frequencyBinCount)),
                    e.jquery && (e = e[0]),
                    e instanceof HTMLAudioElement || e instanceof HTMLVideoElement
                        ? ((s = r.createMediaElementSource(e)), void 0 === p && (p = !0))
                        : (s = r.createMediaStreamSource(e)),
                    (l = l || -50),
                    s.connect(m),
                    p && m.connect(r.destination),
                    (o.speaking = !1),
                    (o.suspend = function () {
                        return r.suspend();
                    }),
                    (o.resume = function () {
                        return r.resume();
                    }),
                    Object.defineProperty(o, "state", {
                        get: function () {
                            return r.state;
                        },
                    }),
                    (r.onstatechange = function () {
                        o.emit("state_change", r.state);
                    }),
                    (o.setThreshold = function (e) {
                        l = e;
                    }),
                    (o.setInterval = function (e) {
                        c = e;
                    }),
                    (o.stop = function () {
                        (h = !1),
                            o.emit("volume_change", -100, l),
                            o.speaking && ((o.speaking = !1), o.emit("stopped_speaking")),
                            m.disconnect(),
                            s.disconnect();
                    }),
                    (o.speakingHistory = []);
                for (var v = 0; v < u; v++) o.speakingHistory.push(0);
                var f = function () {
                    setTimeout(function () {
                        if (h) {
                            var e = (function (e, t) {
                                var i = -1 / 0;
                                e.getFloatFrequencyData(t);
                                for (var n = 4, r = t.length; n < r; n++) t[n] > i && t[n] < 0 && (i = t[n]);
                                return i;
                            })(m, a);
                            o.emit("volume_change", e, l);
                            var t = 0;
                            if (e > l && !o.speaking) {
                                for (var i = o.speakingHistory.length - 3; i < o.speakingHistory.length; i++)
                                    t += o.speakingHistory[i];
                                t >= 2 && ((o.speaking = !0), o.emit("speaking"));
                            } else if (e < l && o.speaking) {
                                for (var i = 0; i < o.speakingHistory.length; i++) t += o.speakingHistory[i];
                                0 == t && ((o.speaking = !1), o.emit("stopped_speaking"));
                            }
                            o.speakingHistory.shift(), o.speakingHistory.push(0 + (e > l)), f();
                        }
                    }, c);
                };
                return f(), o;
            };
        },
    }),
    eF = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/Stream.js": (
            e,
        ) => {
            let t;
            var i =
                (e && e.__awaiter) ||
                function (e, t, i, n) {
                    return new (i || (i = Promise))(function (r, o) {
                        function s(e) {
                            try {
                                d(n.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                d(n.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function d(e) {
                            var t;
                            e.done
                                ? r(e.value)
                                : ((t = e.value) instanceof i
                                      ? t
                                      : new i(function (e) {
                                            e(t);
                                        })
                                  ).then(s, a);
                        }
                        d((n = n.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.Stream = void 0);
            let n = $(),
                r = K(),
                o = eM(),
                s = eA(),
                a = G(),
                d = eD(),
                c = z(),
                l = U(),
                p = F(),
                u = ej(),
                h = N(),
                m = L(),
                v = (eV(), (0, I.i)(eL)),
                f = eU(),
                g = W(),
                b = h.OpenViduLogger.getInstance();
            e.Stream = class {
                constructor(e, i) {
                    (this.isSubscribeToRemote = !1),
                        (this.isLocalStreamReadyToPublish = !1),
                        (this.isLocalStreamPublished = !1),
                        (this.publishedOnce = !1),
                        (this.harkSpeakingEnabled = !1),
                        (this.harkSpeakingEnabledOnce = !1),
                        (this.harkStoppedSpeakingEnabled = !1),
                        (this.harkStoppedSpeakingEnabledOnce = !1),
                        (this.harkVolumeChangeEnabled = !1),
                        (this.harkVolumeChangeEnabledOnce = !1),
                        (this.ee = new g()),
                        (t = m.PlatformUtils.getInstance()),
                        (this.session = e),
                        i.hasOwnProperty("id")
                            ? ((this.inboundStreamOpts = i),
                              (this.streamId = this.inboundStreamOpts.id),
                              (this.creationTime = this.inboundStreamOpts.createdAt),
                              (this.hasAudio = this.inboundStreamOpts.hasAudio),
                              (this.hasVideo = this.inboundStreamOpts.hasVideo),
                              this.hasAudio && (this.audioActive = this.inboundStreamOpts.audioActive),
                              this.hasVideo &&
                                  ((this.videoActive = this.inboundStreamOpts.videoActive),
                                  (this.typeOfVideo = this.inboundStreamOpts.typeOfVideo
                                      ? this.inboundStreamOpts.typeOfVideo
                                      : void 0),
                                  (this.frameRate =
                                      -1 === this.inboundStreamOpts.frameRate
                                          ? void 0
                                          : this.inboundStreamOpts.frameRate),
                                  (this.videoDimensions = this.inboundStreamOpts.videoDimensions)),
                              this.inboundStreamOpts.filter &&
                                  Object.keys(this.inboundStreamOpts.filter).length > 0 &&
                                  (this.inboundStreamOpts.filter.lastExecMethod &&
                                      0 === Object.keys(this.inboundStreamOpts.filter.lastExecMethod).length &&
                                      delete this.inboundStreamOpts.filter.lastExecMethod,
                                  (this.filter = this.inboundStreamOpts.filter)))
                            : ((this.outboundStreamOpts = i),
                              (this.hasAudio = this.isSendAudio()),
                              (this.hasVideo = this.isSendVideo()),
                              this.hasAudio &&
                                  (this.audioActive = !!this.outboundStreamOpts.publisherProperties.publishAudio),
                              this.hasVideo &&
                                  ((this.videoActive = !!this.outboundStreamOpts.publisherProperties.publishVideo),
                                  (this.frameRate = this.outboundStreamOpts.publisherProperties.frameRate),
                                  "u" > typeof MediaStreamTrack &&
                                  this.outboundStreamOpts.publisherProperties.videoSource instanceof MediaStreamTrack
                                      ? (this.typeOfVideo = u.TypeOfVideo.CUSTOM)
                                      : (this.typeOfVideo = this.isSendScreen()
                                            ? u.TypeOfVideo.SCREEN
                                            : u.TypeOfVideo.CAMERA)),
                              this.outboundStreamOpts.publisherProperties.filter &&
                                  (this.filter = this.outboundStreamOpts.publisherProperties.filter)),
                        this.ee.on("mediastream-updated", () => {
                            var e;
                            this.streamManager.updateMediaStream(this.mediaStream),
                                b.debug(
                                    "Video srcObject [" +
                                        (null == (e = this.mediaStream) ? void 0 : e.id) +
                                        "] updated in stream [" +
                                        this.streamId +
                                        "]",
                                );
                        });
                }
                reconnect() {
                    return this.reconnectStream("API");
                }
                applyFilter(e, t) {
                    return new Promise((r, o) =>
                        i(this, void 0, void 0, function* () {
                            if (this.filter)
                                return o(
                                    new p.OpenViduError(
                                        p.OpenViduErrorName.GENERIC_ERROR,
                                        "There is already a filter applied to Stream " + this.streamId,
                                    ),
                                );
                            let s = (i, s) => {
                                if (i)
                                    return (b.error("Error applying filter for Stream " + this.streamId, i),
                                    401 === i.code)
                                        ? o(
                                              new p.OpenViduError(
                                                  p.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                  "You don't have permissions to apply a filter",
                                              ),
                                          )
                                        : o(i);
                                {
                                    b.info("Filter successfully applied on Stream " + this.streamId);
                                    let i = this.filter;
                                    return (
                                        (this.filter = new n.Filter(e, t)),
                                        (this.filter.stream = this),
                                        s &&
                                            (this.session.emitEvent("streamPropertyChanged", [
                                                new l.StreamPropertyChangedEvent(
                                                    this.session,
                                                    this,
                                                    "filter",
                                                    this.filter,
                                                    i,
                                                    "applyFilter",
                                                ),
                                            ]),
                                            this.streamManager.emitEvent("streamPropertyChanged", [
                                                new l.StreamPropertyChangedEvent(
                                                    this.streamManager,
                                                    this,
                                                    "filter",
                                                    this.filter,
                                                    i,
                                                    "applyFilter",
                                                ),
                                            ])),
                                        r(this.filter)
                                    );
                                }
                            };
                            if (e.startsWith("VB:")) {
                                let a;
                                if (!this.hasVideo)
                                    return o(
                                        new p.OpenViduError(
                                            p.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                            "The Virtual Background filter requires a video track to be applied",
                                        ),
                                    );
                                if (!this.mediaStream || 0 === this.streamManager.videos.length)
                                    return o(
                                        new p.OpenViduError(
                                            p.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                            "The StreamManager requires some video element to be attached to it in order to apply a Virtual Background filter",
                                        ),
                                    );
                                if (!(a = this.session.token ? this.session.token : t.token))
                                    return o(
                                        new p.OpenViduError(
                                            p.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                            'Virtual Background requires the client to be connected to a Session or to have a "token" property available in "options" parameter with a valid OpenVidu token',
                                        ),
                                    );
                                let d = this.session.getTokenParams(a);
                                if ("pro" !== d.edition && "enterprise" !== d.edition)
                                    return o(
                                        new p.OpenViduError(
                                            p.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                            "OpenVidu Virtual Background API is available from OpenVidu Pro edition onwards",
                                        ),
                                    );
                                (a = encodeURIComponent(btoa(a))),
                                    b.info("Applying Virtual Background to stream " + this.streamId);
                                let c = () =>
                                    i(this, void 0, void 0, function* () {
                                        try {
                                            let i,
                                                n = this.streamId + "_" + (0, v.v4)(),
                                                r = this.mediaStream.clone(),
                                                o = this.streamManager.videos[0].video.cloneNode(!1);
                                            (o.id = VirtualBackground.VirtualBackground.SOURCE_VIDEO_PREFIX + n),
                                                (o.srcObject = r),
                                                (o.muted = !0),
                                                (this.virtualBackgroundSourceElements = {
                                                    videoClone: o,
                                                    mediaStreamClone: r,
                                                }),
                                                VirtualBackground.VirtualBackground.hideHtmlElement(o, !1),
                                                VirtualBackground.VirtualBackground.appendHtmlElementToHiddenContainer(
                                                    o,
                                                    n,
                                                ),
                                                yield o.play();
                                            let c = new VirtualBackground.VirtualBackground({
                                                id: n,
                                                openviduServerUrl: new URL(d.httpUri),
                                                openviduToken: a,
                                                inputVideo: o,
                                                inputResolution: "160x96",
                                                outputFramerate: 24,
                                            });
                                            switch (e) {
                                                case "VB:blur":
                                                    i = yield c.backgroundBlur(t);
                                                    break;
                                                case "VB:image":
                                                    i = yield c.backgroundImage(t);
                                                    break;
                                                default:
                                                    throw Error("Unknown Virtual Background filter: " + e);
                                            }
                                            (this.virtualBackgroundSinkElements = { VB: c, video: i }),
                                                (o.style.display = "none"),
                                                this.streamManager.remote
                                                    ? this.streamManager.replaceTrackInMediaStream(
                                                          this.virtualBackgroundSinkElements.video.srcObject.getVideoTracks()[0],
                                                          !1,
                                                      )
                                                    : this.streamManager.replaceTrackAux(
                                                          this.virtualBackgroundSinkElements.video.srcObject.getVideoTracks()[0],
                                                          !1,
                                                      ),
                                                s(void 0, !1);
                                        } catch (e) {
                                            e.name === p.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR
                                                ? s(
                                                      new p.OpenViduError(
                                                          p.OpenViduErrorName.VIRTUAL_BACKGROUND_ERROR,
                                                          e.message,
                                                      ),
                                                      !1,
                                                  )
                                                : s(e, !1);
                                        }
                                    });
                                if ("u" < typeof VirtualBackground) {
                                    let s = document.createElement("script");
                                    (s.type = "text/javascript"),
                                        (s.src =
                                            d.httpUri +
                                            "/openvidu/virtual-background/openvidu-virtual-background.js?token=" +
                                            a),
                                        (s.onload = () =>
                                            i(this, void 0, void 0, function* () {
                                                try {
                                                    yield c(), r(new n.Filter(e, t));
                                                } catch (e) {
                                                    o(e);
                                                }
                                            })),
                                        document.body.appendChild(s);
                                } else
                                    c()
                                        .then(() => r(new n.Filter(e, t)))
                                        .catch((e) => o(e));
                            } else {
                                if (!this.session.sessionConnected()) return o(this.session.notConnectedError());
                                b.info("Applying server filter to stream " + this.streamId);
                                let i = (t = null != t ? t : {});
                                "string" != typeof i && (i = JSON.stringify(i)),
                                    this.session.openvidu.sendRequest(
                                        "applyFilter",
                                        { streamId: this.streamId, type: e, options: i },
                                        (e, t) => {
                                            s(e, !0);
                                        },
                                    );
                            }
                        }),
                    );
                }
                removeFilter() {
                    return i(this, void 0, void 0, function* () {
                        return yield this.removeFilterAux(!1);
                    });
                }
                getRTCPeerConnection() {
                    return this.webRtcPeer.pc;
                }
                getMediaStream() {
                    return this.mediaStream;
                }
                removeFilterAux(e) {
                    return new Promise((t, n) =>
                        i(this, void 0, void 0, function* () {
                            var i;
                            let r = (e, i) => {
                                if (e)
                                    return (delete this.filter,
                                    b.error("Error removing filter for Stream " + this.streamId, e),
                                    401 === e.code)
                                        ? n(
                                              new p.OpenViduError(
                                                  p.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                  "You don't have permissions to remove a filter",
                                              ),
                                          )
                                        : n(e);
                                {
                                    b.info("Filter successfully removed from Stream " + this.streamId);
                                    let e = this.filter;
                                    return (
                                        delete this.filter,
                                        i &&
                                            (this.session.emitEvent("streamPropertyChanged", [
                                                new l.StreamPropertyChangedEvent(
                                                    this.session,
                                                    this,
                                                    "filter",
                                                    this.filter,
                                                    e,
                                                    "applyFilter",
                                                ),
                                            ]),
                                            this.streamManager.emitEvent("streamPropertyChanged", [
                                                new l.StreamPropertyChangedEvent(
                                                    this.streamManager,
                                                    this,
                                                    "filter",
                                                    this.filter,
                                                    e,
                                                    "applyFilter",
                                                ),
                                            ])),
                                        t()
                                    );
                                }
                            };
                            if (!this.filter)
                                return n(
                                    new p.OpenViduError(
                                        p.OpenViduErrorName.GENERIC_ERROR,
                                        "Stream " + this.streamId + " has no filter applied",
                                    ),
                                );
                            if (null == (i = this.filter) ? void 0 : i.type.startsWith("VB:"))
                                try {
                                    let t = this.virtualBackgroundSourceElements.mediaStreamClone;
                                    return (
                                        e
                                            ? t.getTracks().forEach((e) => e.stop())
                                            : this.streamManager.remote
                                              ? this.streamManager.replaceTrackInMediaStream(t.getVideoTracks()[0], !1)
                                              : yield this.streamManager.replaceTrackAux(t.getVideoTracks()[0], !1),
                                        this.virtualBackgroundSinkElements.VB.cleanUp(),
                                        delete this.virtualBackgroundSinkElements,
                                        delete this.virtualBackgroundSourceElements,
                                        r(void 0, !1)
                                    );
                                } catch (e) {
                                    return r(e, !1);
                                }
                            if (!this.session.sessionConnected()) return n(this.session.notConnectedError());
                            b.info("Removing filter of stream " + this.streamId),
                                this.session.openvidu.sendRequest("removeFilter", { streamId: this.streamId }, (e, t) =>
                                    r(e, !0),
                                );
                        }),
                    );
                }
                setMediaStream(e) {
                    this.mediaStream = e;
                }
                updateMediaStreamInVideos() {
                    this.ee.emitEvent("mediastream-updated", []);
                }
                getWebRtcPeer() {
                    return this.webRtcPeer;
                }
                subscribeToMyRemote(e) {
                    this.isSubscribeToRemote = e;
                }
                setOutboundStreamOptions(e) {
                    this.outboundStreamOpts = e;
                }
                subscribe() {
                    return new Promise((e, t) => {
                        this.initWebRtcPeerReceive(!1)
                            .then(() => e())
                            .catch((e) => t(e));
                    });
                }
                publish() {
                    return new Promise((e, t) => {
                        this.isLocalStreamReadyToPublish
                            ? this.initWebRtcPeerSend(!1)
                                  .then(() => e())
                                  .catch((e) => t(e))
                            : this.ee.once("stream-ready-to-publish", () => {
                                  this.publish()
                                      .then(() => e())
                                      .catch((e) => t(e));
                              });
                    });
                }
                disposeWebRtcPeer() {
                    let e;
                    this.webRtcPeer && (this.webRtcPeer.dispose(), (e = this.webRtcPeer.getId())),
                        this.stopWebRtcStats(),
                        b.info(
                            (this.outboundStreamOpts ? "Outbound " : "Inbound ") +
                                "RTCPeerConnection with id [" +
                                e +
                                "] from 'Stream' with id [" +
                                this.streamId +
                                "] is now closed",
                        );
                }
                disposeMediaStream() {
                    return i(this, void 0, void 0, function* () {
                        if (this.filter && this.filter.type.startsWith("VB:"))
                            try {
                                yield this.removeFilterAux(!0),
                                    console.debug(
                                        `Success removing Virtual Background filter for stream ${this.streamId}`,
                                    );
                            } catch (e) {
                                console.error(
                                    `Error removing Virtual Background filter for stream ${this.streamId}`,
                                    e,
                                );
                            }
                        this.mediaStream &&
                            (this.mediaStream.getAudioTracks().forEach((e) => {
                                e.stop();
                            }),
                            this.mediaStream.getVideoTracks().forEach((e) => {
                                e.stop();
                            }),
                            delete this.mediaStream),
                            this.localMediaStreamWhenSubscribedToRemote &&
                                (this.localMediaStreamWhenSubscribedToRemote.getAudioTracks().forEach((e) => {
                                    e.stop();
                                }),
                                this.localMediaStreamWhenSubscribedToRemote.getVideoTracks().forEach((e) => {
                                    e.stop();
                                }),
                                delete this.localMediaStreamWhenSubscribedToRemote),
                            this.speechEvent &&
                                (this.speechEvent.stop && this.speechEvent.stop(), delete this.speechEvent),
                            b.info(
                                (this.outboundStreamOpts ? "Local " : "Remote ") +
                                    "MediaStream from 'Stream' with id [" +
                                    this.streamId +
                                    "] is now disposed",
                            );
                    });
                }
                displayMyRemote() {
                    return this.isSubscribeToRemote;
                }
                isSendAudio() {
                    return (
                        !!this.outboundStreamOpts &&
                        null !== this.outboundStreamOpts.publisherProperties.audioSource &&
                        !1 !== this.outboundStreamOpts.publisherProperties.audioSource
                    );
                }
                isSendVideo() {
                    return (
                        !!this.outboundStreamOpts &&
                        null !== this.outboundStreamOpts.publisherProperties.videoSource &&
                        !1 !== this.outboundStreamOpts.publisherProperties.videoSource
                    );
                }
                isSendScreen() {
                    let e = !1;
                    if (
                        "u" > typeof MediaStreamTrack &&
                        this.outboundStreamOpts.publisherProperties.videoSource instanceof MediaStreamTrack
                    ) {
                        let t = this.outboundStreamOpts.publisherProperties.videoSource.getSettings();
                        t.displaySurface && (e = ["monitor", "window", "browser"].includes(t.displaySurface));
                    }
                    return (
                        !e &&
                            t.isElectron() &&
                            (e =
                                "string" == typeof this.outboundStreamOpts.publisherProperties.videoSource &&
                                this.outboundStreamOpts.publisherProperties.videoSource.startsWith("screen:")),
                        e || (e = "screen" === this.outboundStreamOpts.publisherProperties.videoSource),
                        !!this.outboundStreamOpts && e
                    );
                }
                enableHarkSpeakingEvent() {
                    this.setHarkListenerIfNotExists(),
                        !this.harkSpeakingEnabled &&
                            this.speechEvent &&
                            ((this.harkSpeakingEnabled = !0),
                            this.speechEvent.on("speaking", () => {
                                this.session.emitEvent("publisherStartSpeaking", [
                                    new d.PublisherSpeakingEvent(
                                        this.session,
                                        "publisherStartSpeaking",
                                        this.connection,
                                        this.streamId,
                                    ),
                                ]),
                                    this.streamManager.emitEvent("publisherStartSpeaking", [
                                        new d.PublisherSpeakingEvent(
                                            this.streamManager,
                                            "publisherStartSpeaking",
                                            this.connection,
                                            this.streamId,
                                        ),
                                    ]),
                                    (this.harkSpeakingEnabledOnce = !1);
                            }));
                }
                enableOnceHarkSpeakingEvent() {
                    this.setHarkListenerIfNotExists(),
                        !this.harkSpeakingEnabledOnce &&
                            this.speechEvent &&
                            ((this.harkSpeakingEnabledOnce = !0),
                            this.speechEvent.once("speaking", () => {
                                this.harkSpeakingEnabledOnce &&
                                    (this.session.emitEvent("publisherStartSpeaking", [
                                        new d.PublisherSpeakingEvent(
                                            this.session,
                                            "publisherStartSpeaking",
                                            this.connection,
                                            this.streamId,
                                        ),
                                    ]),
                                    this.streamManager.emitEvent("publisherStartSpeaking", [
                                        new d.PublisherSpeakingEvent(
                                            this.streamManager,
                                            "publisherStartSpeaking",
                                            this.connection,
                                            this.streamId,
                                        ),
                                    ])),
                                    this.disableHarkSpeakingEvent(!0);
                            }));
                }
                disableHarkSpeakingEvent(e) {
                    if (this.speechEvent) {
                        if (((this.harkSpeakingEnabledOnce = !1), e)) {
                            if (this.harkSpeakingEnabled) return;
                        } else this.harkSpeakingEnabled = !1;
                        this.harkVolumeChangeEnabled ||
                        this.harkVolumeChangeEnabledOnce ||
                        this.harkStoppedSpeakingEnabled ||
                        this.harkStoppedSpeakingEnabledOnce
                            ? this.speechEvent.off("speaking")
                            : (this.speechEvent.stop(), delete this.speechEvent);
                    }
                }
                enableHarkStoppedSpeakingEvent() {
                    this.setHarkListenerIfNotExists(),
                        !this.harkStoppedSpeakingEnabled &&
                            this.speechEvent &&
                            ((this.harkStoppedSpeakingEnabled = !0),
                            this.speechEvent.on("stopped_speaking", () => {
                                this.session.emitEvent("publisherStopSpeaking", [
                                    new d.PublisherSpeakingEvent(
                                        this.session,
                                        "publisherStopSpeaking",
                                        this.connection,
                                        this.streamId,
                                    ),
                                ]),
                                    this.streamManager.emitEvent("publisherStopSpeaking", [
                                        new d.PublisherSpeakingEvent(
                                            this.streamManager,
                                            "publisherStopSpeaking",
                                            this.connection,
                                            this.streamId,
                                        ),
                                    ]),
                                    (this.harkStoppedSpeakingEnabledOnce = !1);
                            }));
                }
                enableOnceHarkStoppedSpeakingEvent() {
                    this.setHarkListenerIfNotExists(),
                        !this.harkStoppedSpeakingEnabledOnce &&
                            this.speechEvent &&
                            ((this.harkStoppedSpeakingEnabledOnce = !0),
                            this.speechEvent.once("stopped_speaking", () => {
                                this.harkStoppedSpeakingEnabledOnce &&
                                    (this.session.emitEvent("publisherStopSpeaking", [
                                        new d.PublisherSpeakingEvent(
                                            this.session,
                                            "publisherStopSpeaking",
                                            this.connection,
                                            this.streamId,
                                        ),
                                    ]),
                                    this.streamManager.emitEvent("publisherStopSpeaking", [
                                        new d.PublisherSpeakingEvent(
                                            this.streamManager,
                                            "publisherStopSpeaking",
                                            this.connection,
                                            this.streamId,
                                        ),
                                    ])),
                                    this.disableHarkStoppedSpeakingEvent(!0);
                            }));
                }
                disableHarkStoppedSpeakingEvent(e) {
                    if (this.speechEvent) {
                        if (((this.harkStoppedSpeakingEnabledOnce = !1), e)) {
                            if (this.harkStoppedSpeakingEnabled) return;
                        } else this.harkStoppedSpeakingEnabled = !1;
                        this.harkVolumeChangeEnabled ||
                        this.harkVolumeChangeEnabledOnce ||
                        this.harkSpeakingEnabled ||
                        this.harkSpeakingEnabledOnce
                            ? this.speechEvent.off("stopped_speaking")
                            : (this.speechEvent.stop(), delete this.speechEvent);
                    }
                }
                enableHarkVolumeChangeEvent(e) {
                    this.setHarkListenerIfNotExists()
                        ? (!this.harkVolumeChangeEnabled || e) &&
                          ((this.harkVolumeChangeEnabled = !0),
                          this.speechEvent.on("volume_change", (e) => {
                              let t = { newValue: e, oldValue: this.speechEvent.oldVolumeValue };
                              (this.speechEvent.oldVolumeValue = e),
                                  this.streamManager.emitEvent("streamAudioVolumeChange", [
                                      new c.StreamManagerEvent(this.streamManager, "streamAudioVolumeChange", t),
                                  ]);
                          }))
                        : (this.harkVolumeChangeEnabled = !0);
                }
                enableOnceHarkVolumeChangeEvent(e) {
                    this.setHarkListenerIfNotExists()
                        ? (!this.harkVolumeChangeEnabledOnce || e) &&
                          ((this.harkVolumeChangeEnabledOnce = !0),
                          this.speechEvent.once("volume_change", (e) => {
                              let t = { newValue: e, oldValue: this.speechEvent.oldVolumeValue };
                              (this.speechEvent.oldVolumeValue = e),
                                  this.disableHarkVolumeChangeEvent(!0),
                                  this.streamManager.emitEvent("streamAudioVolumeChange", [
                                      new c.StreamManagerEvent(this.streamManager, "streamAudioVolumeChange", t),
                                  ]);
                          }))
                        : (this.harkVolumeChangeEnabledOnce = !0);
                }
                disableHarkVolumeChangeEvent(e) {
                    if (this.speechEvent) {
                        if (((this.harkVolumeChangeEnabledOnce = !1), e)) {
                            if (this.harkVolumeChangeEnabled) return;
                        } else this.harkVolumeChangeEnabled = !1;
                        this.harkSpeakingEnabled ||
                        this.harkSpeakingEnabledOnce ||
                        this.harkStoppedSpeakingEnabled ||
                        this.harkStoppedSpeakingEnabledOnce
                            ? this.speechEvent.off("volume_change")
                            : (this.speechEvent.stop(), delete this.speechEvent);
                    }
                }
                isLocal() {
                    return !this.inboundStreamOpts && !!this.outboundStreamOpts;
                }
                getSelectedIceCandidate() {
                    return new Promise((e, t) => {
                        this.webRtcStats
                            .getSelectedIceCandidateInfo()
                            .then((t) => e(t))
                            .catch((e) => t(e));
                    });
                }
                getRemoteIceCandidateList() {
                    return this.webRtcPeer.remoteCandidatesQueue;
                }
                getLocalIceCandidateList() {
                    return this.webRtcPeer.localCandidatesQueue;
                }
                streamIceConnectionStateBroken() {
                    if (!this.getWebRtcPeer() || !this.getRTCPeerConnection()) return !1;
                    if (this.session.openvidu.advancedConfiguration.forceMediaReconnectionAfterNetworkDrop)
                        return (
                            b.warn(
                                `OpenVidu Browser advanced configuration option "forceMediaReconnectionAfterNetworkDrop" is enabled. Stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) will force a reconnection`,
                            ),
                            !0
                        );
                    {
                        let e = this.getRTCPeerConnection().iceConnectionState;
                        return "connected" !== e && "completed" !== e;
                    }
                }
                setHarkListenerIfNotExists() {
                    if (this.mediaStream) {
                        if (!this.speechEvent) {
                            let e = this.harkOptions
                                ? this.harkOptions
                                : this.session.openvidu.advancedConfiguration.publisherSpeakingEventsOptions || {};
                            (e.interval = "number" == typeof e.interval ? e.interval : 100),
                                (e.threshold = "number" == typeof e.threshold ? e.threshold : -50),
                                (this.speechEvent = f(this.mediaStream, e));
                        }
                        return !0;
                    }
                    return !1;
                }
                setupReconnectionEventEmitter(e, t) {
                    return void 0 == this.reconnectionEventEmitter
                        ? ((this.reconnectionEventEmitter = new g()), !1)
                        : (console.warn(
                              `Trying to reconnect stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) but an ongoing reconnection process is active. Waiting for response...`,
                          ),
                          this.reconnectionEventEmitter.once("success", () => e()),
                          this.reconnectionEventEmitter.once("error", (e) => t(e)),
                          !0);
                }
                initWebRtcPeerSend(e) {
                    return new Promise((t, i) => {
                        var n;
                        if (e) {
                            if (this.setupReconnectionEventEmitter(t, i)) return;
                        } else this.initHarkEvents();
                        let r = () => {
                                var i;
                                return (
                                    e &&
                                        (null == (i = this.reconnectionEventEmitter) || i.emitEvent("success"),
                                        delete this.reconnectionEventEmitter),
                                    t()
                                );
                            },
                            s = (t) => {
                                var n;
                                return (
                                    e &&
                                        (null == (n = this.reconnectionEventEmitter) || n.emitEvent("error", [t]),
                                        delete this.reconnectionEventEmitter),
                                    i(t)
                                );
                            },
                            a = (t) => {
                                let i;
                                if ((b.debug("Sending SDP offer to publish as " + this.streamId, t), e))
                                    i = { stream: this.streamId, sdpString: t };
                                else {
                                    let e;
                                    this.isSendVideo() &&
                                        (e =
                                            "u" > typeof MediaStreamTrack &&
                                            this.outboundStreamOpts.publisherProperties.videoSource instanceof
                                                MediaStreamTrack
                                                ? u.TypeOfVideo.CUSTOM
                                                : this.isSendScreen()
                                                  ? u.TypeOfVideo.SCREEN
                                                  : u.TypeOfVideo.CAMERA),
                                        (i = {
                                            doLoopback: this.displayMyRemote() || !1,
                                            hasAudio: this.isSendAudio(),
                                            hasVideo: this.isSendVideo(),
                                            audioActive: this.audioActive,
                                            videoActive: this.videoActive,
                                            typeOfVideo: e,
                                            frameRate: this.frameRate ? this.frameRate : -1,
                                            videoDimensions: JSON.stringify(this.videoDimensions),
                                            filter: this.outboundStreamOpts.publisherProperties.filter,
                                            sdpOffer: t,
                                        });
                                }
                                this.session.openvidu.sendRequest(e ? "reconnectStream" : "publishVideo", i, (t, i) => {
                                    t
                                        ? 401 === t.code
                                            ? s(
                                                  new p.OpenViduError(
                                                      p.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                      "You don't have permissions to publish",
                                                  ),
                                              )
                                            : s("Error on publishVideo: " + JSON.stringify(t))
                                        : this.webRtcPeer
                                              .processRemoteAnswer(i.sdpAnswer)
                                              .then(() => {
                                                  (this.streamId = i.id),
                                                      (this.creationTime = i.createdAt),
                                                      (this.isLocalStreamPublished = !0),
                                                      (this.publishedOnce = !0),
                                                      this.displayMyRemote() &&
                                                          ((this.localMediaStreamWhenSubscribedToRemote =
                                                              this.mediaStream),
                                                          this.remotePeerSuccessfullyEstablished(e)),
                                                      e
                                                          ? this.ee.emitEvent("stream-reconnected-by-publisher", [])
                                                          : this.ee.emitEvent("stream-created-by-publisher", []),
                                                      this.initWebRtcStats(),
                                                      b.info(
                                                          "'Publisher' (" +
                                                              this.streamId +
                                                              ") successfully " +
                                                              (e ? "reconnected" : "published") +
                                                              " to session",
                                                      ),
                                                      r();
                                              })
                                              .catch((e) => {
                                                  s(e);
                                              });
                                });
                            },
                            d = {
                                mediaConstraints: { audio: this.hasAudio, video: this.hasVideo },
                                simulcast:
                                    null != (n = this.outboundStreamOpts.publisherProperties.videoSimulcast)
                                        ? n
                                        : this.session.openvidu.videoSimulcast,
                                onIceCandidate: this.connection.sendIceCandidate.bind(this.connection),
                                onIceConnectionStateException: this.onIceConnectionStateExceptionHandler.bind(this),
                                iceServers: this.getIceServersConf(),
                                rtcConfiguration: this.session.openvidu.advancedConfiguration.rtcConfiguration,
                                mediaStream: this.mediaStream,
                                mediaServer: this.session.openvidu.mediaServer,
                                typeOfVideo: this.typeOfVideo ? u.TypeOfVideo[this.typeOfVideo] : void 0,
                            };
                        "mediasoup" !== this.session.openvidu.mediaServer && (d.simulcast = !1),
                            e && this.disposeWebRtcPeer(),
                            this.displayMyRemote()
                                ? (this.webRtcPeer = new o.WebRtcPeerSendrecv(d))
                                : (this.webRtcPeer = new o.WebRtcPeerSendonly(d)),
                            this.webRtcPeer.addIceConnectionStateChangeListener(
                                "publisher of " + this.connection.connectionId,
                            ),
                            this.webRtcPeer
                                .createOffer()
                                .then((e) => {
                                    this.webRtcPeer
                                        .processLocalOffer(e)
                                        .then(() => {
                                            a(e.sdp);
                                        })
                                        .catch((e) => {
                                            s(Error("(publish) SDP process local offer error: " + JSON.stringify(e)));
                                        });
                                })
                                .catch((e) => {
                                    s(Error("(publish) SDP create offer error: " + JSON.stringify(e)));
                                });
                    });
                }
                finalResolveForSubscription(e, t) {
                    var i;
                    return (
                        b.info(
                            "'Subscriber' (" + this.streamId + ") successfully " + (e ? "reconnected" : "subscribed"),
                        ),
                        this.remotePeerSuccessfullyEstablished(e),
                        this.initWebRtcStats(),
                        e &&
                            (null == (i = this.reconnectionEventEmitter) || i.emitEvent("success"),
                            delete this.reconnectionEventEmitter),
                        t()
                    );
                }
                finalRejectForSubscription(e, t, i) {
                    var n;
                    return (
                        b.error(
                            "Error for 'Subscriber' (" +
                                this.streamId +
                                ") while trying to " +
                                (e ? "reconnect" : "subscribe") +
                                ": " +
                                t.toString(),
                        ),
                        e &&
                            (null == (n = this.reconnectionEventEmitter) || n.emitEvent("error", [t]),
                            delete this.reconnectionEventEmitter),
                        i(t)
                    );
                }
                initWebRtcPeerReceive(e) {
                    return new Promise((t, i) => {
                        (e && this.setupReconnectionEventEmitter(t, i)) ||
                            ("mediasoup" === this.session.openvidu.mediaServer
                                ? this.initWebRtcPeerReceiveFromServer(e)
                                      .then(() => this.finalResolveForSubscription(e, t))
                                      .catch((t) => this.finalRejectForSubscription(e, t, i))
                                : this.initWebRtcPeerReceiveFromClient(e)
                                      .then(() => this.finalResolveForSubscription(e, t))
                                      .catch((t) => this.finalRejectForSubscription(e, t, i)));
                    });
                }
                initWebRtcPeerReceiveFromClient(e) {
                    return new Promise((t, i) => {
                        this.completeWebRtcPeerReceive(e, !1)
                            .then((e) => {
                                this.webRtcPeer
                                    .processRemoteAnswer(e.sdpAnswer)
                                    .then(() => t())
                                    .catch((e) => i(e));
                            })
                            .catch((e) => i(e));
                    });
                }
                initWebRtcPeerReceiveFromServer(e) {
                    return new Promise((t, i) => {
                        this.session.openvidu.sendRequest(
                            "prepareReceiveVideoFrom",
                            { sender: this.streamId, reconnect: e },
                            (n, r) => {
                                if (n) return i(Error("Error on prepareReceiveVideoFrom: " + JSON.stringify(n)));
                                this.completeWebRtcPeerReceive(e, !1, r.sdpOffer)
                                    .then(() => t())
                                    .catch((e) => i(e));
                            },
                        );
                    });
                }
                completeWebRtcPeerReceive(e, t, i) {
                    return new Promise((n, r) => {
                        b.debug("'Session.subscribe(Stream)' called");
                        let s = (o) => {
                                b.debug(
                                    `Sending local SDP ${i ? "answer" : "offer"} to subscribe to ${this.streamId}`,
                                    o,
                                );
                                let s = e ? "reconnectStream" : "receiveVideoFrom",
                                    a = {};
                                (a[e ? "stream" : "sender"] = this.streamId),
                                    i ? (a[e ? "sdpString" : "sdpAnswer"] = o) : (a.sdpOffer = o),
                                    e && (a.forciblyReconnect = t),
                                    this.session.openvidu.sendRequest(s, a, (e, t) =>
                                        e ? r(Error("Error on " + s + " : " + JSON.stringify(e))) : n(t),
                                    );
                            },
                            a = {
                                mediaConstraints: { audio: this.hasAudio, video: this.hasVideo },
                                simulcast: !1,
                                onIceCandidate: this.connection.sendIceCandidate.bind(this.connection),
                                onIceConnectionStateException: this.onIceConnectionStateExceptionHandler.bind(this),
                                iceServers: this.getIceServersConf(),
                                rtcConfiguration: this.session.openvidu.advancedConfiguration.rtcConfiguration,
                                mediaServer: this.session.openvidu.mediaServer,
                                typeOfVideo: this.typeOfVideo ? u.TypeOfVideo[this.typeOfVideo] : void 0,
                            };
                        e && this.disposeWebRtcPeer(),
                            (this.webRtcPeer = new o.WebRtcPeerRecvonly(a)),
                            this.webRtcPeer.addIceConnectionStateChangeListener(this.streamId),
                            i
                                ? this.webRtcPeer
                                      .processRemoteOffer(i)
                                      .then(() => {
                                          this.webRtcPeer
                                              .createAnswer()
                                              .then((e) => {
                                                  this.webRtcPeer
                                                      .processLocalAnswer(e)
                                                      .then(() => {
                                                          s(e.sdp);
                                                      })
                                                      .catch((e) =>
                                                          r(
                                                              Error(
                                                                  "(subscribe) SDP process local answer error: " +
                                                                      JSON.stringify(e),
                                                              ),
                                                          ),
                                                      );
                                              })
                                              .catch((e) =>
                                                  r(Error("(subscribe) SDP create answer error: " + JSON.stringify(e))),
                                              );
                                      })
                                      .catch((e) =>
                                          r(Error("(subscribe) SDP process remote offer error: " + JSON.stringify(e))),
                                      )
                                : this.webRtcPeer
                                      .createOffer()
                                      .then((e) => {
                                          this.webRtcPeer
                                              .processLocalOffer(e)
                                              .then(() => {
                                                  s(e.sdp);
                                              })
                                              .catch((e) =>
                                                  r(
                                                      Error(
                                                          "(subscribe) SDP process local offer error: " +
                                                              JSON.stringify(e),
                                                      ),
                                                  ),
                                              );
                                      })
                                      .catch((e) =>
                                          r(Error("(subscribe) SDP create offer error: " + JSON.stringify(e))),
                                      );
                    });
                }
                remotePeerSuccessfullyEstablished(e) {
                    let t;
                    for (t of (e && null != this.mediaStream && this.disposeMediaStream(),
                    (this.mediaStream = new MediaStream()),
                    this.webRtcPeer.pc.getReceivers()))
                        t.track && this.mediaStream.addTrack(t.track);
                    if ((b.debug("Peer remote stream", this.mediaStream), this.mediaStream)) {
                        if (this.streamManager instanceof r.Subscriber) {
                            if (this.mediaStream.getAudioTracks()[0]) {
                                let t = e ? this.audioActive : !!this.streamManager.properties.subscribeToAudio;
                                this.mediaStream.getAudioTracks()[0].enabled = t;
                            }
                            if (this.mediaStream.getVideoTracks()[0]) {
                                let t = e
                                    ? this.videoActive
                                    : !!this.videoActive && !!this.streamManager.properties.subscribeToVideo;
                                this.mediaStream.getVideoTracks()[0].enabled = t;
                            }
                        }
                        this.updateMediaStreamInVideos(), this.initHarkEvents();
                    }
                }
                initHarkEvents() {
                    this.mediaStream.getAudioTracks()[0] &&
                        (this.session.anySpeechEventListenerEnabled("publisherStartSpeaking", !0, this.streamManager) &&
                            this.enableOnceHarkSpeakingEvent(),
                        this.session.anySpeechEventListenerEnabled("publisherStartSpeaking", !1, this.streamManager) &&
                            this.enableHarkSpeakingEvent(),
                        this.session.anySpeechEventListenerEnabled("publisherStopSpeaking", !0, this.streamManager) &&
                            this.enableOnceHarkStoppedSpeakingEvent(),
                        this.session.anySpeechEventListenerEnabled("publisherStopSpeaking", !1, this.streamManager) &&
                            this.enableHarkStoppedSpeakingEvent(),
                        this.harkVolumeChangeEnabledOnce && this.enableOnceHarkVolumeChangeEvent(!0),
                        this.harkVolumeChangeEnabled && this.enableHarkVolumeChangeEvent(!0));
                }
                onIceConnectionStateExceptionHandler(e, t, i) {
                    switch (e) {
                        case a.ExceptionEventName.ICE_CONNECTION_FAILED:
                            this.onIceConnectionFailed();
                            break;
                        case a.ExceptionEventName.ICE_CONNECTION_DISCONNECTED:
                            this.onIceConnectionDisconnected();
                    }
                    this.session.emitEvent("exception", [new a.ExceptionEvent(this.session, e, this, t, i)]);
                }
                onIceConnectionFailed() {
                    b.log(
                        `[ICE_CONNECTION_FAILED] Handling ICE_CONNECTION_FAILED event. Reconnecting stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"})`,
                    ),
                        this.reconnectStreamAndLogResultingIceConnectionState(
                            a.ExceptionEventName.ICE_CONNECTION_FAILED,
                        );
                }
                onIceConnectionDisconnected() {
                    b.log(
                        `[ICE_CONNECTION_DISCONNECTED] Handling ICE_CONNECTION_DISCONNECTED event. Waiting for ICE to be restored and reconnect stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) if not possible`,
                    );
                    let e =
                        this.session.openvidu.advancedConfiguration.iceConnectionDisconnectedExceptionTimeout || 4e3;
                    this.awaitWebRtcPeerConnectionState(e).then((t) => {
                        switch (t) {
                            case "failed":
                                b.warn(
                                    `[ICE_CONNECTION_DISCONNECTED] ICE connection of stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) is now failed after ICE_CONNECTION_DISCONNECTED`,
                                );
                                break;
                            case "connected":
                            case "completed":
                                b.log(
                                    `[ICE_CONNECTION_DISCONNECTED] ICE connection of stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) automatically restored after ICE_CONNECTION_DISCONNECTED. Current ICE connection state: ${t}`,
                                );
                                break;
                            case "closed":
                            case "checking":
                            case "new":
                            case "disconnected":
                                b.warn(
                                    `[ICE_CONNECTION_DISCONNECTED] ICE connection of stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) couldn't be restored after ICE_CONNECTION_DISCONNECTED event. Current ICE connection state after ${e} ms: ${t}`,
                                ),
                                    this.reconnectStreamAndLogResultingIceConnectionState(
                                        a.ExceptionEventName.ICE_CONNECTION_DISCONNECTED,
                                    );
                        }
                    });
                }
                reconnectStreamAndLogResultingIceConnectionState(e) {
                    return i(this, void 0, void 0, function* () {
                        try {
                            let t = yield this.reconnectStreamAndReturnIceConnectionState(e);
                            switch (t) {
                                case "connected":
                                case "completed":
                                    b.log(
                                        `[${e}] Stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) successfully reconnected after ${e}. Current ICE connection state: ${t}`,
                                    );
                                    break;
                                default:
                                    b.error(
                                        `[${e}] Stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) failed to reconnect after ${e}. Current ICE connection state: ${t}`,
                                    );
                            }
                        } catch (t) {
                            b.error(
                                `[${e}] Error reconnecting stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) after ${e}: ${t}`,
                            );
                        }
                    });
                }
                reconnectStreamAndReturnIceConnectionState(e) {
                    return i(this, void 0, void 0, function* () {
                        b.log(
                            `[${e}] Reconnecting stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) after event ${e}`,
                        );
                        try {
                            yield this.reconnectStream(e);
                            let t =
                                this.session.openvidu.advancedConfiguration.iceConnectionDisconnectedExceptionTimeout ||
                                4e3;
                            return this.awaitWebRtcPeerConnectionState(t);
                        } catch (t) {
                            return (
                                b.warn(
                                    `[${e}] Error reconnecting stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}). Reason: ${t}`,
                                ),
                                this.awaitWebRtcPeerConnectionState(1)
                            );
                        }
                    });
                }
                awaitWebRtcPeerConnectionState(e) {
                    return i(this, void 0, void 0, function* () {
                        let t = this.getRTCPeerConnection().iceConnectionState,
                            i = Math.ceil(e / 150);
                        for (
                            let e = 0;
                            e < i &&
                            "connected" !== (t = this.getRTCPeerConnection().iceConnectionState) &&
                            "completed" !== t;
                            e++
                        )
                            yield new Promise((e) => setTimeout(e, 150));
                        return t;
                    });
                }
                reconnectStream(e) {
                    return i(this, void 0, void 0, function* () {
                        if (yield this.isWebsocketConnected(e, 3e3))
                            return (b.log(
                                `[${e}] Trying to reconnect stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) and the websocket is opened`,
                            ),
                            this.isLocal())
                                ? this.initWebRtcPeerSend(!0)
                                : this.initWebRtcPeerReceive(!0);
                        {
                            let t = `[${e}] Trying to reconnect stream ${this.streamId} (${this.isLocal() ? "Publisher" : "Subscriber"}) but the websocket wasn't opened`;
                            throw (b.error(t), Error(t));
                        }
                    });
                }
                isWebsocketConnected(e, t) {
                    return new Promise((i, n) => {
                        let r = this.session.openvidu.getWsReadyState();
                        if (1 !== r) return console.warn(`[${e}] Websocket readyState is ${r}`), i(!1);
                        {
                            let n = setTimeout(() => (console.warn(`[${e}] Websocket timeout of ${t}ms`), i(!1)), t);
                            this.session.openvidu.sendRequest("echo", {}, (t, r) =>
                                (clearTimeout(n), t)
                                    ? (console.warn(`[${e}] Websocket 'echo' returned error: ${t}`), i(!1))
                                    : i(!0),
                            );
                        }
                    });
                }
                initWebRtcStats() {
                    (this.webRtcStats = new s.WebRtcStats(this)), this.webRtcStats.initWebRtcStats();
                }
                stopWebRtcStats() {
                    this.webRtcStats && this.webRtcStats.isEnabled() && this.webRtcStats.stopWebRtcStats();
                }
                getIceServersConf() {
                    var e;
                    return this.session.openvidu.advancedConfiguration.iceServers
                        ? "freeice" === this.session.openvidu.advancedConfiguration.iceServers
                            ? void 0
                            : this.session.openvidu.advancedConfiguration.iceServers
                        : (
                                null == (e = this.session.openvidu.advancedConfiguration.rtcConfiguration)
                                    ? void 0
                                    : e.iceServers
                            )
                          ? this.session.openvidu.advancedConfiguration.rtcConfiguration.iceServers
                          : this.session.openvidu.iceServers
                            ? this.session.openvidu.iceServers
                            : void 0;
                }
                gatherStatsForPeer() {
                    return new Promise((e, t) => {
                        this.isLocal()
                            ? this.getRTCPeerConnection()
                                  .getSenders()
                                  .forEach((e) =>
                                      e.getStats().then((e) => {
                                          e.forEach((e) => {
                                              if (this.isReportWanted(e)) {
                                                  let t = {};
                                                  (t.type = e.type),
                                                      (t.timestamp = e.timestamp),
                                                      (t.id = e.id),
                                                      "outbound-rtp" === e.type &&
                                                          ((t.ssrc = e.ssrc),
                                                          (t.firCount = e.firCount),
                                                          (t.pliCount = e.pliCount),
                                                          (t.nackCount = e.nackCount),
                                                          (t.qpSum = e.qpSum),
                                                          e.kind
                                                              ? (t.mediaType = e.kind)
                                                              : e.mediaType
                                                                ? (t.mediaType = e.mediaType)
                                                                : (t.mediaType =
                                                                      -1 !== e.id.indexOf("VideoStream")
                                                                          ? "video"
                                                                          : "audio"),
                                                          "video" === t.mediaType &&
                                                              (t.framesEncoded = e.framesEncoded),
                                                          (t.packetsSent = e.packetsSent),
                                                          (t.bytesSent = e.bytesSent)),
                                                      "candidate-pair" === e.type &&
                                                          void 0 !== e.totalRoundTripTime &&
                                                          ((t.availableOutgoingBitrate = e.availableOutgoingBitrate),
                                                          (t.rtt = e.currentRoundTripTime),
                                                          (t.averageRtt = e.totalRoundTripTime / e.responsesReceived)),
                                                      "remote-inbound-rtp" === e.type || e.type,
                                                      b.log(t);
                                              }
                                          });
                                      }),
                                  )
                            : this.getRTCPeerConnection()
                                  .getReceivers()
                                  .forEach((e) =>
                                      e.getStats().then((e) => {
                                          e.forEach((e) => {
                                              if (this.isReportWanted(e)) {
                                                  let t = {};
                                                  (t.type = e.type),
                                                      (t.timestamp = e.timestamp),
                                                      (t.id = e.id),
                                                      "inbound-rtp" === e.type &&
                                                          ((t.ssrc = e.ssrc),
                                                          (t.firCount = e.firCount),
                                                          (t.pliCount = e.pliCount),
                                                          (t.nackCount = e.nackCount),
                                                          (t.qpSum = e.qpSum),
                                                          e.kind
                                                              ? (t.mediaType = e.kind)
                                                              : e.mediaType
                                                                ? (t.mediaType = e.mediaType)
                                                                : (t.mediaType =
                                                                      -1 !== e.id.indexOf("VideoStream")
                                                                          ? "video"
                                                                          : "audio"),
                                                          "video" === t.mediaType &&
                                                              (t.framesDecoded = e.framesDecoded),
                                                          (t.packetsReceived = e.packetsReceived),
                                                          (t.packetsLost = e.packetsLost),
                                                          (t.jitter = e.jitter),
                                                          (t.bytesReceived = e.bytesReceived)),
                                                      "candidate-pair" === e.type &&
                                                          void 0 !== e.totalRoundTripTime &&
                                                          ((t.availableIncomingBitrate = e.availableIncomingBitrate),
                                                          (t.rtt = e.currentRoundTripTime),
                                                          (t.averageRtt = e.totalRoundTripTime / e.responsesReceived)),
                                                      "remote-inbound-rtp" === e.type || e.type,
                                                      b.log(t);
                                              }
                                          });
                                      }),
                                  );
                    });
                }
                isReportWanted(e) {
                    return (
                        ("inbound-rtp" === e.type && !this.isLocal()) ||
                        ("outbound-rtp" === e.type && this.isLocal()) ||
                        ("candidate-pair" === e.type && e.nominated && e.bytesSent > 0)
                    );
                }
            };
        },
    }),
    e$ = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/Connection.js": (
            e,
        ) => {
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.Connection = void 0);
            let t = eF(),
                i = N(),
                n = G(),
                r = i.OpenViduLogger.getInstance();
            e.Connection = class {
                constructor(e, t) {
                    (this.session = e), (this.disposed = !1);
                    let i = "'Connection' created ";
                    t.role
                        ? ((this.localOptions = t),
                          (this.connectionId = this.localOptions.id),
                          (this.creationTime = this.localOptions.createdAt),
                          (this.data = this.localOptions.metadata),
                          (this.rpcSessionId = this.localOptions.sessionId),
                          (this.role = this.localOptions.role),
                          (this.record = this.localOptions.record),
                          (i += "(local)"))
                        : ((this.remoteOptions = t),
                          (this.connectionId = this.remoteOptions.id),
                          (this.creationTime = this.remoteOptions.createdAt),
                          this.remoteOptions.metadata && (this.data = this.remoteOptions.metadata),
                          this.remoteOptions.streams && this.initRemoteStreams(this.remoteOptions.streams),
                          (i += "(remote) with 'connectionId' [" + this.remoteOptions.id + "]")),
                        r.info(i);
                }
                sendIceCandidate(e) {
                    this.disposed
                        ? r.warn(
                              `Connection ${this.connectionId} disposed when trying to send an ICE candidate. ICE candidate not sent`,
                          )
                        : (r.debug(
                              (this.stream.outboundStreamOpts ? "Local" : "Remote") +
                                  "candidate for" +
                                  this.connectionId,
                              e,
                          ),
                          this.session.openvidu.sendRequest(
                              "onIceCandidate",
                              {
                                  endpointName: this.connectionId,
                                  candidate: e.candidate,
                                  sdpMid: e.sdpMid,
                                  sdpMLineIndex: e.sdpMLineIndex,
                              },
                              (e, t) => {
                                  e &&
                                      (r.error("Error sending ICE candidate: " + JSON.stringify(e)),
                                      this.session.emitEvent("exception", [
                                          new n.ExceptionEvent(
                                              this.session,
                                              n.ExceptionEventName.ICE_CANDIDATE_ERROR,
                                              this.session,
                                              "There was an unexpected error on the server-side processing an ICE candidate generated and sent by the client-side",
                                              e,
                                          ),
                                      ]));
                              },
                          ));
                }
                initRemoteStreams(e) {
                    e.forEach((e) => {
                        let i = {
                                id: e.id,
                                createdAt: e.createdAt,
                                connection: this,
                                hasAudio: e.hasAudio,
                                hasVideo: e.hasVideo,
                                audioActive: e.audioActive,
                                videoActive: e.videoActive,
                                typeOfVideo: e.typeOfVideo,
                                frameRate: e.frameRate,
                                videoDimensions: e.videoDimensions ? JSON.parse(e.videoDimensions) : void 0,
                                filter: e.filter ? e.filter : void 0,
                            },
                            n = new t.Stream(this.session, i);
                        this.addStream(n);
                    }),
                        r.info(
                            "Remote 'Connection' with 'connectionId' [" +
                                this.connectionId +
                                "] is now configured for receiving Streams with options: ",
                            this.stream.inboundStreamOpts,
                        );
                }
                addStream(e) {
                    (e.connection = this), (this.stream = e);
                }
                removeStream() {
                    delete this.stream;
                }
                dispose() {
                    (this.disposed = !0), this.removeStream();
                }
            };
        },
    }),
    eW = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/ConnectionEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.ConnectionEvent = void 0);
                let t = B();
                e.ConnectionEvent = class extends t.Event {
                    constructor(e, t, i, n, r) {
                        super(e, t, i), (this.connection = n), (this.reason = r);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    eH = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/FilterEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.FilterEvent = void 0);
                let t = B();
                e.FilterEvent = class extends t.Event {
                    constructor(e, t, i) {
                        super(!1, e, t), (this.data = i);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    ez = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/RecordingEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.RecordingEvent = void 0);
                let t = B();
                e.RecordingEvent = class extends t.Event {
                    constructor(e, t, i, n, r) {
                        super(!1, e, t), (this.id = i), n !== i && (this.name = n), (this.reason = r);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    eq = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/SessionDisconnectedEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.SessionDisconnectedEvent = void 0);
                let t = B(),
                    i = N().OpenViduLogger.getInstance();
                e.SessionDisconnectedEvent = class extends t.Event {
                    constructor(e, t) {
                        super(!0, e, "sessionDisconnected"), (this.reason = t);
                    }
                    callDefaultBehavior() {
                        i.info("Calling default behavior upon '" + this.type + "' event dispatched by 'Session'");
                        let e = this.target;
                        e.remoteConnections.forEach((t) => {
                            var i, n, r, o, s, a, d, c;
                            let l = t.connectionId;
                            if (null == (i = e.remoteConnections.get(l)) ? void 0 : i.stream) {
                                null == (n = e.remoteConnections.get(l)) || n.stream.disposeWebRtcPeer(),
                                    null == (r = e.remoteConnections.get(l)) || r.stream.disposeMediaStream(),
                                    (null == (o = e.remoteConnections.get(l)) ? void 0 : o.stream.streamManager) &&
                                        (null == (s = e.remoteConnections.get(l)) ||
                                            s.stream.streamManager.removeAllVideos());
                                let t =
                                    null == (d = null == (a = e.remoteConnections.get(l)) ? void 0 : a.stream)
                                        ? void 0
                                        : d.streamId;
                                t && e.remoteStreamsCreated.delete(t),
                                    null == (c = e.remoteConnections.get(l)) || c.dispose();
                            }
                            e.remoteConnections.delete(l);
                        });
                    }
                };
            },
    }),
    eG = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/SignalEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.SignalEvent = void 0);
                let t = B();
                e.SignalEvent = class extends t.Event {
                    constructor(e, t, i, n) {
                        super(!1, e, "signal"), t && (this.type = "signal:" + t), (this.data = i), (this.from = n);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    eJ = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/SpeechToTextEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.SpeechToTextEvent = void 0);
                let t = B();
                e.SpeechToTextEvent = class extends t.Event {
                    constructor(e, t, i, n, r, o) {
                        super(!1, e, "speechToTextMessage"),
                            (this.connection = t),
                            (this.text = i),
                            (this.reason = n),
                            (this.raw = r),
                            (this.lang = o);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    eX = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/StreamEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.StreamEvent = void 0);
                let t = B(),
                    i = e8(),
                    n = e6(),
                    r = N().OpenViduLogger.getInstance();
                e.StreamEvent = class extends t.Event {
                    constructor(e, t, i, n, r) {
                        super(e, t, i), (this.stream = n), (this.reason = r);
                    }
                    callDefaultBehavior() {
                        if ("streamDestroyed" === this.type) {
                            if (this.target instanceof n.Session)
                                r.info(
                                    "Calling default behavior upon '" + this.type + "' event dispatched by 'Session'",
                                ),
                                    this.stream.disposeWebRtcPeer();
                            else if (this.target instanceof i.Publisher) {
                                r.info(
                                    "Calling default behavior upon '" + this.type + "' event dispatched by 'Publisher'",
                                ),
                                    clearInterval(this.target.screenShareResizeInterval),
                                    (this.stream.isLocalStreamReadyToPublish = !1);
                                let e = this.target.openvidu.publishers;
                                for (let t = 0; t < e.length; t++)
                                    if (e[t] === this.target) {
                                        e.splice(t, 1);
                                        break;
                                    }
                            }
                            this.stream.disposeMediaStream(),
                                this.stream.streamManager && this.stream.streamManager.removeAllVideos(),
                                this.stream.session.remoteStreamsCreated.delete(this.stream.streamId);
                            let e = this.stream.session.remoteConnections.get(this.stream.connection.connectionId);
                            if (e && e.remoteOptions) {
                                let t = e.remoteOptions.streams;
                                for (let e = t.length - 1; e >= 0; --e)
                                    t[e].id === this.stream.streamId && t.splice(e, 1);
                            }
                        }
                    }
                };
            },
    }),
    eK = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/ConnectionPropertyChangedEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.ConnectionPropertyChangedEvent = void 0);
                let t = B();
                e.ConnectionPropertyChangedEvent = class extends t.Event {
                    constructor(e, t, i, n, r) {
                        super(!1, e, "connectionPropertyChanged"),
                            (this.connection = t),
                            (this.changedProperty = i),
                            (this.newValue = n),
                            (this.oldValue = r);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    eY = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/NetworkQualityLevelChangedEvent.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.NetworkQualityLevelChangedEvent = void 0);
                let t = B();
                e.NetworkQualityLevelChangedEvent = class extends t.Event {
                    constructor(e, t, i, n) {
                        super(!1, e, "networkQualityLevelChanged"),
                            (this.newValue = t),
                            (this.oldValue = i),
                            (this.connection = n);
                    }
                    callDefaultBehavior() {}
                };
            },
    }),
    eQ = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/debug.js": (e, t) => {
            t.exports =
                "object" == typeof C && C.env && C.env.NODE_DEBUG && /\bsemver\b/i.test(C.env.NODE_DEBUG)
                    ? (...e) => console.error("SEMVER", ...e)
                    : () => {};
        },
    }),
    eZ = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/constants.js": (e, t) => {
            t.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
                RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2,
            };
        },
    }),
    e0 = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/re.js": (e, t) => {
            let { MAX_SAFE_COMPONENT_LENGTH: i, MAX_SAFE_BUILD_LENGTH: n, MAX_LENGTH: r } = eZ(),
                o = eQ(),
                s = ((e = t.exports = {}).re = []),
                a = (e.safeRe = []),
                d = (e.src = []),
                c = (e.safeSrc = []),
                l = (e.t = {}),
                p = 0,
                u = "[a-zA-Z0-9-]",
                h = [
                    ["\\s", 1],
                    ["\\d", r],
                    [u, n],
                ],
                m = (e, t, i) => {
                    let n = ((e) => {
                            for (let [t, i] of h)
                                e = e.split(`${t}*`).join(`${t}{0,${i}}`).split(`${t}+`).join(`${t}{1,${i}}`);
                            return e;
                        })(t),
                        r = p++;
                    o(e, r, t),
                        (l[e] = r),
                        (d[r] = t),
                        (c[r] = n),
                        (s[r] = new RegExp(t, i ? "g" : void 0)),
                        (a[r] = new RegExp(n, i ? "g" : void 0));
                };
            m("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
                m("NUMERICIDENTIFIERLOOSE", "\\d+"),
                m("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${u}*`),
                m(
                    "MAINVERSION",
                    `(${d[l.NUMERICIDENTIFIER]})\\.(${d[l.NUMERICIDENTIFIER]})\\.(${d[l.NUMERICIDENTIFIER]})`,
                ),
                m(
                    "MAINVERSIONLOOSE",
                    `(${d[l.NUMERICIDENTIFIERLOOSE]})\\.(${d[l.NUMERICIDENTIFIERLOOSE]})\\.(${d[l.NUMERICIDENTIFIERLOOSE]})`,
                ),
                m("PRERELEASEIDENTIFIER", `(?:${d[l.NONNUMERICIDENTIFIER]}|${d[l.NUMERICIDENTIFIER]})`),
                m("PRERELEASEIDENTIFIERLOOSE", `(?:${d[l.NONNUMERICIDENTIFIER]}|${d[l.NUMERICIDENTIFIERLOOSE]})`),
                m("PRERELEASE", `(?:-(${d[l.PRERELEASEIDENTIFIER]}(?:\\.${d[l.PRERELEASEIDENTIFIER]})*))`),
                m(
                    "PRERELEASELOOSE",
                    `(?:-?(${d[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[l.PRERELEASEIDENTIFIERLOOSE]})*))`,
                ),
                m("BUILDIDENTIFIER", `${u}+`),
                m("BUILD", `(?:\\+(${d[l.BUILDIDENTIFIER]}(?:\\.${d[l.BUILDIDENTIFIER]})*))`),
                m("FULLPLAIN", `v?${d[l.MAINVERSION]}${d[l.PRERELEASE]}?${d[l.BUILD]}?`),
                m("FULL", `^${d[l.FULLPLAIN]}$`),
                m("LOOSEPLAIN", `[v=\\s]*${d[l.MAINVERSIONLOOSE]}${d[l.PRERELEASELOOSE]}?${d[l.BUILD]}?`),
                m("LOOSE", `^${d[l.LOOSEPLAIN]}$`),
                m("GTLT", "((?:<|>)?=?)"),
                m("XRANGEIDENTIFIERLOOSE", `${d[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
                m("XRANGEIDENTIFIER", `${d[l.NUMERICIDENTIFIER]}|x|X|\\*`),
                m(
                    "XRANGEPLAIN",
                    `[v=\\s]*(${d[l.XRANGEIDENTIFIER]})(?:\\.(${d[l.XRANGEIDENTIFIER]})(?:\\.(${d[l.XRANGEIDENTIFIER]})(?:${d[l.PRERELEASE]})?${d[l.BUILD]}?)?)?`,
                ),
                m(
                    "XRANGEPLAINLOOSE",
                    `[v=\\s]*(${d[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[l.XRANGEIDENTIFIERLOOSE]})(?:${d[l.PRERELEASELOOSE]})?${d[l.BUILD]}?)?)?`,
                ),
                m("XRANGE", `^${d[l.GTLT]}\\s*${d[l.XRANGEPLAIN]}$`),
                m("XRANGELOOSE", `^${d[l.GTLT]}\\s*${d[l.XRANGEPLAINLOOSE]}$`),
                m("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`),
                m("COERCE", `${d[l.COERCEPLAIN]}(?:$|[^\\d])`),
                m("COERCEFULL", d[l.COERCEPLAIN] + `(?:${d[l.PRERELEASE]})?(?:${d[l.BUILD]})?(?:$|[^\\d])`),
                m("COERCERTL", d[l.COERCE], !0),
                m("COERCERTLFULL", d[l.COERCEFULL], !0),
                m("LONETILDE", "(?:~>?)"),
                m("TILDETRIM", `(\\s*)${d[l.LONETILDE]}\\s+`, !0),
                (e.tildeTrimReplace = "$1~"),
                m("TILDE", `^${d[l.LONETILDE]}${d[l.XRANGEPLAIN]}$`),
                m("TILDELOOSE", `^${d[l.LONETILDE]}${d[l.XRANGEPLAINLOOSE]}$`),
                m("LONECARET", "(?:\\^)"),
                m("CARETTRIM", `(\\s*)${d[l.LONECARET]}\\s+`, !0),
                (e.caretTrimReplace = "$1^"),
                m("CARET", `^${d[l.LONECARET]}${d[l.XRANGEPLAIN]}$`),
                m("CARETLOOSE", `^${d[l.LONECARET]}${d[l.XRANGEPLAINLOOSE]}$`),
                m("COMPARATORLOOSE", `^${d[l.GTLT]}\\s*(${d[l.LOOSEPLAIN]})$|^$`),
                m("COMPARATOR", `^${d[l.GTLT]}\\s*(${d[l.FULLPLAIN]})$|^$`),
                m("COMPARATORTRIM", `(\\s*)${d[l.GTLT]}\\s*(${d[l.LOOSEPLAIN]}|${d[l.XRANGEPLAIN]})`, !0),
                (e.comparatorTrimReplace = "$1$2$3"),
                m("HYPHENRANGE", `^\\s*(${d[l.XRANGEPLAIN]})\\s+-\\s+(${d[l.XRANGEPLAIN]})\\s*$`),
                m("HYPHENRANGELOOSE", `^\\s*(${d[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[l.XRANGEPLAINLOOSE]})\\s*$`),
                m("STAR", "(<|>)?=?\\s*\\*"),
                m("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
                m("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
        },
    }),
    e1 = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/parse-options.js": (e, t) => {
            let i = Object.freeze({ loose: !0 }),
                n = Object.freeze({});
            t.exports = (e) => (e ? ("object" != typeof e ? i : e) : n);
        },
    }),
    e2 = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/identifiers.js": (e, t) => {
            let i = /^[0-9]+$/,
                n = (e, t) => {
                    if ("number" == typeof e && "number" == typeof t) return e === t ? 0 : e < t ? -1 : 1;
                    let n = i.test(e),
                        r = i.test(t);
                    return n && r && ((e *= 1), (t *= 1)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
                };
            t.exports = { compareIdentifiers: n, rcompareIdentifiers: (e, t) => n(t, e) };
        },
    }),
    e3 = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js": (e, t) => {
            let i = eQ(),
                { MAX_LENGTH: n, MAX_SAFE_INTEGER: r } = eZ(),
                { safeRe: o, t: s } = e0(),
                a = e1(),
                { compareIdentifiers: d } = e2();
            t.exports = class e {
                constructor(t, d) {
                    if (((d = a(d)), t instanceof e))
                        if (!!d.loose === t.loose && !!d.includePrerelease === t.includePrerelease) return t;
                        else t = t.version;
                    else if ("string" != typeof t)
                        throw TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
                    if (t.length > n) throw TypeError(`version is longer than ${n} characters`);
                    i("SemVer", t, d),
                        (this.options = d),
                        (this.loose = !!d.loose),
                        (this.includePrerelease = !!d.includePrerelease);
                    const c = t.trim().match(d.loose ? o[s.LOOSE] : o[s.FULL]);
                    if (!c) throw TypeError(`Invalid Version: ${t}`);
                    if (
                        ((this.raw = t),
                        (this.major = +c[1]),
                        (this.minor = +c[2]),
                        (this.patch = +c[3]),
                        this.major > r || this.major < 0)
                    )
                        throw TypeError("Invalid major version");
                    if (this.minor > r || this.minor < 0) throw TypeError("Invalid minor version");
                    if (this.patch > r || this.patch < 0) throw TypeError("Invalid patch version");
                    c[4]
                        ? (this.prerelease = c[4].split(".").map((e) => {
                              if (/^[0-9]+$/.test(e)) {
                                  let t = +e;
                                  if (t >= 0 && t < r) return t;
                              }
                              return e;
                          }))
                        : (this.prerelease = []),
                        (this.build = c[5] ? c[5].split(".") : []),
                        this.format();
                }
                format() {
                    return (
                        (this.version = `${this.major}.${this.minor}.${this.patch}`),
                        this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                        this.version
                    );
                }
                toString() {
                    return this.version;
                }
                compare(t) {
                    if ((i("SemVer.compare", this.version, this.options, t), !(t instanceof e))) {
                        if ("string" == typeof t && t === this.version) return 0;
                        t = new e(t, this.options);
                    }
                    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
                }
                compareMain(t) {
                    return (t instanceof e || (t = new e(t, this.options)), this.major < t.major)
                        ? -1
                        : this.major > t.major
                          ? 1
                          : this.minor < t.minor
                            ? -1
                            : this.minor > t.minor
                              ? 1
                              : this.patch < t.patch
                                ? -1
                                : +(this.patch > t.patch);
                }
                comparePre(t) {
                    if (
                        (t instanceof e || (t = new e(t, this.options)), this.prerelease.length && !t.prerelease.length)
                    )
                        return -1;
                    if (!this.prerelease.length && t.prerelease.length) return 1;
                    if (!this.prerelease.length && !t.prerelease.length) return 0;
                    let n = 0;
                    do {
                        let e = this.prerelease[n],
                            r = t.prerelease[n];
                        if ((i("prerelease compare", n, e, r), void 0 === e && void 0 === r)) return 0;
                        if (void 0 === r) return 1;
                        if (void 0 === e) return -1;
                        else if (e === r) continue;
                        else return d(e, r);
                    } while (++n);
                }
                compareBuild(t) {
                    t instanceof e || (t = new e(t, this.options));
                    let n = 0;
                    do {
                        let e = this.build[n],
                            r = t.build[n];
                        if ((i("build compare", n, e, r), void 0 === e && void 0 === r)) return 0;
                        if (void 0 === r) return 1;
                        if (void 0 === e) return -1;
                        else if (e === r) continue;
                        else return d(e, r);
                    } while (++n);
                }
                inc(e, t, i) {
                    if (e.startsWith("pre")) {
                        if (!t && !1 === i) throw Error("invalid increment argument: identifier is empty");
                        if (t) {
                            let e = `-${t}`.match(this.options.loose ? o[s.PRERELEASELOOSE] : o[s.PRERELEASE]);
                            if (!e || e[1] !== t) throw Error(`invalid identifier: ${t}`);
                        }
                    }
                    switch (e) {
                        case "premajor":
                            (this.prerelease.length = 0),
                                (this.patch = 0),
                                (this.minor = 0),
                                this.major++,
                                this.inc("pre", t, i);
                            break;
                        case "preminor":
                            (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", t, i);
                            break;
                        case "prepatch":
                            (this.prerelease.length = 0), this.inc("patch", t, i), this.inc("pre", t, i);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", t, i), this.inc("pre", t, i);
                            break;
                        case "release":
                            if (0 === this.prerelease.length) throw Error(`version ${this.raw} is not a prerelease`);
                            this.prerelease.length = 0;
                            break;
                        case "major":
                            (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                                (this.minor = 0),
                                (this.patch = 0),
                                (this.prerelease = []);
                            break;
                        case "minor":
                            (0 !== this.patch || 0 === this.prerelease.length) && this.minor++,
                                (this.patch = 0),
                                (this.prerelease = []);
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                            break;
                        case "pre": {
                            let e = +!!Number(i);
                            if (0 === this.prerelease.length) this.prerelease = [e];
                            else {
                                let n = this.prerelease.length;
                                for (; --n >= 0; )
                                    "number" == typeof this.prerelease[n] && (this.prerelease[n]++, (n = -2));
                                if (-1 === n) {
                                    if (t === this.prerelease.join(".") && !1 === i)
                                        throw Error("invalid increment argument: identifier already exists");
                                    this.prerelease.push(e);
                                }
                            }
                            if (t) {
                                let n = [t, e];
                                !1 === i && (n = [t]),
                                    0 === d(this.prerelease[0], t)
                                        ? isNaN(this.prerelease[1]) && (this.prerelease = n)
                                        : (this.prerelease = n);
                            }
                            break;
                        }
                        default:
                            throw Error(`invalid increment argument: ${e}`);
                    }
                    return (
                        (this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join(".")}`), this
                    );
                }
            };
        },
    }),
    e5 = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/major.js": (e, t) => {
            let i = e3();
            t.exports = (e, t) => new i(e, t).major;
        },
    }),
    e4 = (0, I.t)({
        "../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/minor.js": (e, t) => {
            let i = e3();
            t.exports = (e, t) => new i(e, t).minor;
        },
    }),
    e6 = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/Session.js": (
            e,
        ) => {
            let t;
            var i =
                (e && e.__awaiter) ||
                function (e, t, i, n) {
                    return new (i || (i = Promise))(function (r, o) {
                        function s(e) {
                            try {
                                d(n.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                d(n.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function d(e) {
                            var t;
                            e.done
                                ? r(e.value)
                                : ((t = e.value) instanceof i
                                      ? t
                                      : new i(function (e) {
                                            e(t);
                                        })
                                  ).then(s, a);
                        }
                        d((n = n.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.Session = void 0);
            let n = e$(),
                r = $(),
                o = K(),
                s = H(),
                a = eW(),
                d = eH(),
                c = ez(),
                l = eq(),
                p = eG(),
                u = eJ(),
                h = eX(),
                m = U(),
                v = eK(),
                f = eY(),
                g = F(),
                b = J(),
                E = N(),
                S = L(),
                x = e5(),
                w = e4(),
                y = G(),
                O = E.OpenViduLogger.getInstance();
            e.Session = class extends s.EventDispatcher {
                constructor(e) {
                    super(),
                        (this.streamManagers = []),
                        (this.remoteStreamsCreated = new Map()),
                        (this.remoteConnections = new Map()),
                        (t = S.PlatformUtils.getInstance()),
                        (this.openvidu = e);
                }
                connect(e, i) {
                    return new Promise((n, r) => {
                        if ((this.processToken(e), !this.openvidu.checkSystemRequirements()))
                            return r(
                                new g.OpenViduError(
                                    g.OpenViduErrorName.BROWSER_NOT_SUPPORTED,
                                    "Browser " +
                                        t.getName() +
                                        " (version " +
                                        t.getVersion() +
                                        ") for " +
                                        t.getFamily() +
                                        " is not supported in OpenVidu",
                                ),
                            );
                        (this.options = {
                            sessionId: this.sessionId,
                            participantId: e,
                            metadata: i ? this.stringClientMetadata(i) : "",
                        }),
                            this.connectAux(e)
                                .then(() => n())
                                .catch((e) => r(e));
                    });
                }
                disconnect() {
                    this.leave(!1, "disconnect");
                }
                subscribe(e, t, i, n) {
                    let r,
                        s = {};
                    if (
                        ((s =
                            i && "function" != typeof i
                                ? {
                                      insertMode:
                                          void 0 !== i.insertMode
                                              ? "string" == typeof i.insertMode
                                                  ? b.VideoInsertMode[i.insertMode]
                                                  : s.insertMode
                                              : b.VideoInsertMode.APPEND,
                                      subscribeToAudio: void 0 === i.subscribeToAudio || i.subscribeToAudio,
                                      subscribeToVideo: void 0 === i.subscribeToVideo || i.subscribeToVideo,
                                  }
                                : { insertMode: b.VideoInsertMode.APPEND, subscribeToAudio: !0, subscribeToVideo: !0 }),
                        i && "function" == typeof i ? (r = i) : n && (r = n),
                        !this.sessionConnected())
                    )
                        throw (void 0 !== r && r(this.notConnectedError()), this.notConnectedError());
                    O.info("Subscribing to " + e.connection.connectionId),
                        e
                            .subscribe()
                            .then(() => {
                                O.info("Subscribed correctly to " + e.connection.connectionId),
                                    void 0 !== r && r(void 0);
                            })
                            .catch((e) => {
                                void 0 !== r && r(e);
                            });
                    let a = new o.Subscriber(e, t, s);
                    return a.targetElement && e.streamManager.createVideoElement(a.targetElement, s.insertMode), a;
                }
                subscribeAsync(e, t, i) {
                    return new Promise((n, r) => {
                        let o;
                        if (!this.sessionConnected()) return r(this.notConnectedError());
                        let s = (e) => (e ? r(e) : n(o));
                        o = i ? this.subscribe(e, t, i, s) : this.subscribe(e, t, s);
                    });
                }
                unsubscribe(e) {
                    return new Promise((t, i) => {
                        if (!this.sessionConnected()) return i(this.notConnectedError());
                        {
                            let n = e.stream.connection.connectionId;
                            O.info("Unsubscribing from " + n),
                                this.openvidu.sendRequest(
                                    "unsubscribeFromVideo",
                                    { sender: e.stream.connection.connectionId },
                                    (r, o) =>
                                        r
                                            ? (O.error("Error unsubscribing from " + n), i(r))
                                            : (O.info("Unsubscribed correctly from " + n),
                                              e.stream.streamManager.removeAllVideos(),
                                              e.stream.disposeWebRtcPeer(),
                                              e.stream.disposeMediaStream(),
                                              t()),
                                );
                        }
                    });
                }
                publish(e) {
                    return new Promise((t, i) => {
                        if (!this.sessionConnected()) return i(this.notConnectedError());
                        (e.session = this),
                            (e.stream.session = this),
                            e.stream.publishedOnce
                                ? e
                                      .initialize()
                                      .then(() => {
                                          this.connection.addStream(e.stream),
                                              e.reestablishStreamPlayingEvent(),
                                              e.stream
                                                  .publish()
                                                  .then(() => (this.sendVideoData(e, 8, !0, 5), t()))
                                                  .catch((e) => i(e));
                                      })
                                      .catch((e) => i(e))
                                : (this.connection.addStream(e.stream),
                                  e.stream
                                      .publish()
                                      .then(() => (this.sendVideoData(e, 8, !0, 5), t()))
                                      .catch((e) => i(e)));
                    });
                }
                unpublish(e) {
                    return new Promise((t, i) => {
                        if (!this.sessionConnected()) throw this.notConnectedError();
                        let n = e.stream;
                        return n.connection
                            ? n.connection !== this.connection
                                ? i(
                                      Error(
                                          "The associated Connection object of this Publisher is not your local Connection.  Only moderators can force unpublish on remote Streams via 'forceUnpublish' method",
                                      ),
                                  )
                                : void (O.info("Unpublishing local media (" + n.connection.connectionId + ")"),
                                  this.openvidu.sendRequest("unpublishVideo", (r, o) => {
                                      if (r) return i(r);
                                      {
                                          O.info("Media unpublished correctly"),
                                              n.disposeWebRtcPeer(),
                                              n.connection.stream == n && delete n.connection.stream;
                                          let i = new h.StreamEvent(!0, e, "streamDestroyed", e.stream, "unpublish");
                                          return e.emitEvent("streamDestroyed", [i]), i.callDefaultBehavior(), t();
                                      }
                                  }))
                            : i(Error("The associated Connection object of this Publisher is null"));
                    });
                }
                forceDisconnect(e) {
                    return new Promise((t, i) => {
                        if (!this.sessionConnected()) return i(this.notConnectedError());
                        O.info("Forcing disconnect for connection " + e.connectionId),
                            this.openvidu.sendRequest("forceDisconnect", { connectionId: e.connectionId }, (n, r) =>
                                n
                                    ? (O.error("Error forcing disconnect for Connection " + e.connectionId, n),
                                      401 === n.code)
                                        ? i(
                                              new g.OpenViduError(
                                                  g.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                  "You don't have permissions to force a disconnection",
                                              ),
                                          )
                                        : i(n)
                                    : (O.info("Forcing disconnect correctly for Connection " + e.connectionId), t()),
                            );
                    });
                }
                forceUnpublish(e) {
                    return new Promise((t, i) => {
                        if (!this.sessionConnected()) return i(this.notConnectedError());
                        O.info("Forcing unpublish for stream " + e.streamId),
                            this.openvidu.sendRequest("forceUnpublish", { streamId: e.streamId }, (n, r) =>
                                n
                                    ? (O.error("Error forcing unpublish for Stream " + e.streamId, n), 401 === n.code)
                                        ? i(
                                              new g.OpenViduError(
                                                  g.OpenViduErrorName.OPENVIDU_PERMISSION_DENIED,
                                                  "You don't have permissions to force an unpublishing",
                                              ),
                                          )
                                        : i(n)
                                    : (O.info("Forcing unpublish correctly for Stream " + e.streamId), t()),
                            );
                    });
                }
                signal(e) {
                    return new Promise((t, i) => {
                        if (!this.sessionConnected()) return i(this.notConnectedError());
                        let n = {};
                        if (e.to && e.to.length > 0) {
                            let t = [];
                            e.to.forEach((e) => {
                                e.connectionId && t.push(e.connectionId);
                            }),
                                (n.to = t);
                        } else n.to = [];
                        n.data = e.data ? e.data : "";
                        let r = e.type ? e.type : "signal";
                        r && "signal:" !== r.substring(0, 7) && (r = "signal:" + r),
                            (n.type = r),
                            this.openvidu.sendRequest("sendMessage", { message: JSON.stringify(n) }, (e, n) =>
                                e ? i(e) : t(),
                            );
                    });
                }
                subscribeToSpeechToText(e, t) {
                    return new Promise((i, n) => {
                        this.openvidu.sendRequest(
                            "subscribeToSpeechToText",
                            { connectionId: e.connection.connectionId, lang: t },
                            (e, t) => (e ? n(e) : i()),
                        );
                    });
                }
                unsubscribeFromSpeechToText(e) {
                    return new Promise((t, i) => {
                        this.openvidu.sendRequest(
                            "unsubscribeFromSpeechToText",
                            { connectionId: e.connection.connectionId },
                            (e, n) => (e ? i(e) : t()),
                        );
                    });
                }
                on(e, t) {
                    var i, n, r, o;
                    return (
                        super.onAux(e, "Event '" + e + "' triggered by 'Session'", t),
                        "publisherStartSpeaking" === e &&
                            (this.remoteConnections.forEach((e) => {
                                var t;
                                (null == (t = e.stream) ? void 0 : t.hasAudio) && e.stream.enableHarkSpeakingEvent();
                            }),
                            (null == (n = null == (i = this.connection) ? void 0 : i.stream) ? void 0 : n.hasAudio) &&
                                this.connection.stream.enableHarkSpeakingEvent()),
                        "publisherStopSpeaking" === e &&
                            (this.remoteConnections.forEach((e) => {
                                var t;
                                (null == (t = e.stream) ? void 0 : t.hasAudio) &&
                                    e.stream.enableHarkStoppedSpeakingEvent();
                            }),
                            (null == (o = null == (r = this.connection) ? void 0 : r.stream) ? void 0 : o.hasAudio) &&
                                this.connection.stream.enableHarkStoppedSpeakingEvent()),
                        this
                    );
                }
                once(e, t) {
                    var i, n, r, o;
                    return (
                        super.onceAux(e, "Event '" + e + "' triggered once by 'Session'", t),
                        "publisherStartSpeaking" === e &&
                            (this.remoteConnections.forEach((e) => {
                                var t;
                                (null == (t = e.stream) ? void 0 : t.hasAudio) &&
                                    e.stream.enableOnceHarkSpeakingEvent();
                            }),
                            (null == (n = null == (i = this.connection) ? void 0 : i.stream) ? void 0 : n.hasAudio) &&
                                this.connection.stream.enableOnceHarkSpeakingEvent()),
                        "publisherStopSpeaking" === e &&
                            (this.remoteConnections.forEach((e) => {
                                var t;
                                (null == (t = e.stream) ? void 0 : t.hasAudio) &&
                                    e.stream.enableOnceHarkStoppedSpeakingEvent();
                            }),
                            (null == (o = null == (r = this.connection) ? void 0 : r.stream) ? void 0 : o.hasAudio) &&
                                this.connection.stream.enableOnceHarkStoppedSpeakingEvent()),
                        this
                    );
                }
                off(e, t) {
                    var i, n, r, o;
                    return (
                        super.offAux(e, t),
                        "publisherStartSpeaking" === e &&
                            !this.anySpeechEventListenerEnabled("publisherStartSpeaking", !1) &&
                            (this.remoteConnections.forEach((e) => {
                                var t;
                                (null == (t = e.stream) ? void 0 : t.streamManager) &&
                                    !this.anySpeechEventListenerEnabled(
                                        "publisherStartSpeaking",
                                        !1,
                                        e.stream.streamManager,
                                    ) &&
                                    e.stream.disableHarkSpeakingEvent(!1);
                            }),
                            (null == (n = null == (i = this.connection) ? void 0 : i.stream)
                                ? void 0
                                : n.streamManager) &&
                                !this.anySpeechEventListenerEnabled(
                                    "publisherStartSpeaking",
                                    !1,
                                    this.connection.stream.streamManager,
                                ) &&
                                this.connection.stream.disableHarkSpeakingEvent(!1)),
                        "publisherStopSpeaking" === e &&
                            !this.anySpeechEventListenerEnabled("publisherStopSpeaking", !1) &&
                            (this.remoteConnections.forEach((e) => {
                                var t;
                                (null == (t = e.stream) ? void 0 : t.streamManager) &&
                                    !this.anySpeechEventListenerEnabled(
                                        "publisherStopSpeaking",
                                        !1,
                                        e.stream.streamManager,
                                    ) &&
                                    e.stream.disableHarkStoppedSpeakingEvent(!1);
                            }),
                            (null == (o = null == (r = this.connection) ? void 0 : r.stream)
                                ? void 0
                                : o.streamManager) &&
                                !this.anySpeechEventListenerEnabled(
                                    "publisherStopSpeaking",
                                    !1,
                                    this.connection.stream.streamManager,
                                ) &&
                                this.connection.stream.disableHarkStoppedSpeakingEvent(!1)),
                        this
                    );
                }
                onParticipantJoined(e) {
                    this.getConnection(e.id, "")
                        .then((e) => {
                            O.warn("Connection " + e.connectionId + " already exists in connections list");
                        })
                        .catch((t) => {
                            let i = new n.Connection(this, e);
                            this.remoteConnections.set(e.id, i),
                                this.ee.emitEvent("connectionCreated", [
                                    new a.ConnectionEvent(!1, this, "connectionCreated", i, ""),
                                ]);
                        });
                }
                onParticipantLeft(e) {
                    this.getRemoteConnection(e.connectionId, "onParticipantLeft")
                        .then((t) => {
                            if (t.stream) {
                                let i = t.stream,
                                    n = new h.StreamEvent(!0, this, "streamDestroyed", i, e.reason);
                                this.ee.emitEvent("streamDestroyed", [n]),
                                    n.callDefaultBehavior(),
                                    this.remoteStreamsCreated.delete(i.streamId);
                            }
                            t.dispose(),
                                this.remoteConnections.delete(t.connectionId),
                                this.ee.emitEvent("connectionDestroyed", [
                                    new a.ConnectionEvent(!1, this, "connectionDestroyed", t, e.reason),
                                ]);
                        })
                        .catch((e) => {
                            O.error(e);
                        });
                }
                onParticipantPublished(e) {
                    let t,
                        i = (e) => {
                            this.remoteConnections.set(e.connectionId, e),
                                this.remoteStreamsCreated.get(e.stream.streamId) ||
                                    this.ee.emitEvent("streamCreated", [
                                        new h.StreamEvent(!1, this, "streamCreated", e.stream, ""),
                                    ]),
                                this.remoteStreamsCreated.set(e.stream.streamId, !0);
                        };
                    this.getRemoteConnection(e.id, "onParticipantPublished")
                        .then((n) => {
                            (t = n), (e.metadata = n.data), (t.remoteOptions = e), t.initRemoteStreams(e.streams), i(t);
                        })
                        .catch((r) => {
                            i((t = new n.Connection(this, e)));
                        });
                }
                onParticipantUnpublished(e) {
                    e.connectionId === this.connection.connectionId
                        ? this.stopPublisherStream(e.reason)
                        : this.getRemoteConnection(e.connectionId, "onParticipantUnpublished")
                              .then((t) => {
                                  let i = new h.StreamEvent(!0, this, "streamDestroyed", t.stream, e.reason);
                                  if (
                                      (this.ee.emitEvent("streamDestroyed", [i]),
                                      i.callDefaultBehavior(),
                                      null != t.stream)
                                  ) {
                                      let e = t.stream.streamId;
                                      this.remoteStreamsCreated.delete(e), t.removeStream();
                                  }
                              })
                              .catch((e) => {
                                  O.error(e);
                              });
                }
                onParticipantEvicted(e) {
                    e.connectionId === this.connection.connectionId &&
                        this.sessionId &&
                        !this.connection.disposed &&
                        this.leave(!0, e.reason);
                }
                onNewMessage(e) {
                    O.info("New signal: " + JSON.stringify(e));
                    let t = e.type ? e.type.replace(/^(signal:)/, "") : void 0;
                    e.from
                        ? this.getConnection(
                              e.from,
                              "Connection '" +
                                  e.from +
                                  "' unknown when 'onNewMessage'. Existing remote connections: " +
                                  JSON.stringify(this.remoteConnections.keys()) +
                                  ". Existing local connection: " +
                                  this.connection.connectionId,
                          )
                              .then((i) => {
                                  this.ee.emitEvent("signal", [new p.SignalEvent(this, t, e.data, i)]),
                                      e.type &&
                                          "signal" !== e.type &&
                                          this.ee.emitEvent(e.type, [new p.SignalEvent(this, t, e.data, i)]);
                              })
                              .catch((e) => {
                                  O.error(e);
                              })
                        : (this.ee.emitEvent("signal", [new p.SignalEvent(this, t, e.data, void 0)]),
                          e.type &&
                              "signal" !== e.type &&
                              this.ee.emitEvent(e.type, [new p.SignalEvent(this, t, e.data, void 0)]));
                }
                onStreamPropertyChanged(e) {
                    let t = (t) => {
                        var i, n;
                        if (t.stream && t.stream.streamId === e.streamId) {
                            let o,
                                s = t.stream;
                            switch (e.property) {
                                case "audioActive":
                                    (o = s.audioActive),
                                        (e.newValue = "true" === e.newValue),
                                        (s.audioActive = e.newValue);
                                    break;
                                case "videoActive":
                                    (o = s.videoActive),
                                        (e.newValue = "true" === e.newValue),
                                        (s.videoActive = e.newValue);
                                    let a =
                                        null ==
                                        (n =
                                            null == (i = null == s ? void 0 : s.getMediaStream())
                                                ? void 0
                                                : i.getVideoTracks())
                                            ? void 0
                                            : n[0];
                                    a && !a.enabled && s.videoActive && (a.enabled = !0);
                                    break;
                                case "videoTrack":
                                case "audioTrack":
                                    e.newValue = JSON.parse(e.newValue);
                                    break;
                                case "videoDimensions":
                                    (o = s.videoDimensions),
                                        (e.newValue = JSON.parse(JSON.parse(e.newValue))),
                                        (s.videoDimensions = e.newValue);
                                    break;
                                case "filter":
                                    (o = s.filter),
                                        (e.newValue = Object.keys(e.newValue).length > 0 ? e.newValue : void 0),
                                        void 0 !== e.newValue
                                            ? ((s.filter = new r.Filter(e.newValue.type, e.newValue.options)),
                                              (s.filter.stream = s),
                                              e.newValue.lastExecMethod &&
                                                  (s.filter.lastExecMethod = e.newValue.lastExecMethod))
                                            : delete s.filter,
                                        (e.newValue = s.filter);
                            }
                            this.ee.emitEvent("streamPropertyChanged", [
                                new m.StreamPropertyChangedEvent(this, s, e.property, e.newValue, o, e.reason),
                            ]),
                                s.streamManager &&
                                    s.streamManager.emitEvent("streamPropertyChanged", [
                                        new m.StreamPropertyChangedEvent(
                                            s.streamManager,
                                            s,
                                            e.property,
                                            e.newValue,
                                            o,
                                            e.reason,
                                        ),
                                    ]);
                        } else
                            O.error(
                                "No stream with streamId '" +
                                    e.streamId +
                                    "' found for connection '" +
                                    e.connectionId +
                                    "' on 'streamPropertyChanged' event",
                            );
                    };
                    e.connectionId === this.connection.connectionId
                        ? t(this.connection)
                        : this.getRemoteConnection(e.connectionId, "onStreamPropertyChanged")
                              .then((e) => {
                                  t(e);
                              })
                              .catch((e) => {
                                  O.error(e);
                              });
                }
                onConnectionPropertyChanged(e) {
                    let t;
                    switch (e.property) {
                        case "role":
                            (t = this.connection.role.slice()),
                                (this.connection.role = e.newValue),
                                (this.connection.localOptions.role = e.newValue);
                            break;
                        case "record":
                            (t = this.connection.record),
                                (e.newValue = "true" === e.newValue),
                                (this.connection.record = e.newValue),
                                (this.connection.localOptions.record = e.newValue);
                    }
                    this.ee.emitEvent("connectionPropertyChanged", [
                        new v.ConnectionPropertyChangedEvent(this, this.connection, e.property, e.newValue, t),
                    ]);
                }
                onNetworkQualityLevelChangedChanged(e) {
                    e.connectionId === this.connection.connectionId
                        ? this.ee.emitEvent("networkQualityLevelChanged", [
                              new f.NetworkQualityLevelChangedEvent(this, e.newValue, e.oldValue, this.connection),
                          ])
                        : this.getConnection(e.connectionId, "Connection not found for connectionId " + e.connectionId)
                              .then((t) => {
                                  this.ee.emitEvent("networkQualityLevelChanged", [
                                      new f.NetworkQualityLevelChangedEvent(this, e.newValue, e.oldValue, t),
                                  ]);
                              })
                              .catch((e) => {
                                  O.error(e);
                              });
                }
                recvIceCandidate(e) {
                    let t = new RTCIceCandidate({
                        candidate: e.candidate,
                        sdpMLineIndex: e.sdpMLineIndex,
                        sdpMid: e.sdpMid,
                    });
                    this.getConnection(
                        e.senderConnectionId,
                        "Connection not found for connectionId " +
                            e.senderConnectionId +
                            " owning endpoint " +
                            e.endpointName +
                            ". Ice candidate will be ignored: " +
                            t,
                    )
                        .then((i) => {
                            let n = i.stream;
                            n.getWebRtcPeer()
                                .addIceCandidate(t)
                                .catch((t) => {
                                    O.error(
                                        "Error adding candidate for " +
                                            n.streamId +
                                            " stream of endpoint " +
                                            e.endpointName +
                                            ": " +
                                            t,
                                    );
                                });
                        })
                        .catch((e) => {
                            O.error(e);
                        });
                }
                onSessionClosed(e) {
                    O.info("Session closed: " + JSON.stringify(e));
                    let t = e.sessionId;
                    void 0 !== t
                        ? this.ee.emitEvent("session-closed", [{ session: t }])
                        : O.warn("Session undefined on session closed", e);
                }
                onLostConnection(e) {
                    O.warn("Lost connection in Session " + this.sessionId),
                        this.sessionId && this.connection && !this.connection.disposed && this.leave(!0, e);
                }
                onRecoveredConnection() {
                    O.info("Recovered connection in Session " + this.sessionId),
                        this.reconnectBrokenStreams(),
                        this.ee.emitEvent("reconnected", []);
                }
                onMediaError(e) {
                    O.error("Media error: " + JSON.stringify(e));
                    let t = e.error;
                    t ? this.ee.emitEvent("error-media", [{ error: t }]) : O.warn("Received undefined media error:", e);
                }
                onRecordingStarted(e) {
                    this.ee.emitEvent("recordingStarted", [
                        new c.RecordingEvent(this, "recordingStarted", e.id, e.name),
                    ]);
                }
                onRecordingStopped(e) {
                    this.ee.emitEvent("recordingStopped", [
                        new c.RecordingEvent(this, "recordingStopped", e.id, e.name, e.reason),
                    ]);
                }
                onBroadcastStarted() {
                    this.ee.emitEvent("broadcastStarted", []);
                }
                onBroadcastStopped() {
                    this.ee.emitEvent("broadcastStopped", []);
                }
                onFilterEventDispatched(e) {
                    let t = e.connectionId;
                    this.getConnection(t, "No connection found for connectionId " + t).then((t) => {
                        O.info(`Filter event of type "${e.eventType}" dispatched`);
                        let i = t.stream;
                        if (!i || !i.filter)
                            return O.error(
                                `Filter event of type "${e.eventType}" dispatched for stream ${i.streamId} but there is no ${!i ? "stream" : "filter"} defined`,
                            );
                        let n = i.filter.handlers.get(e.eventType);
                        if (n && "function" == typeof n) n.call(this, new d.FilterEvent(i.filter, e.eventType, e.data));
                        else {
                            let t = Array.from(i.filter.handlers.keys());
                            return O.error(
                                `Filter event of type "${e.eventType}" not handled or not a function! Active filter events: ${t.join(",")}`,
                            );
                        }
                    });
                }
                onForciblyReconnectSubscriber(e) {
                    return new Promise((t, i) => {
                        this.getRemoteConnection(e.connectionId, "onForciblyReconnectSubscriber")
                            .then((n) => {
                                if (n.stream && n.stream.streamId === e.streamId) {
                                    let r = n.stream;
                                    if (r.setupReconnectionEventEmitter(t, i)) {
                                        if (null != r.reconnectionEventEmitter.onForciblyReconnectSubscriberLastEvent)
                                            return (
                                                (r.reconnectionEventEmitter.onForciblyReconnectSubscriberLastEvent = e),
                                                i("Ongoing forced subscriber reconnection")
                                            );
                                        {
                                            r.reconnectionEventEmitter.onForciblyReconnectSubscriberLastEvent = e;
                                            let t = () => {
                                                let e =
                                                    r.reconnectionEventEmitter.onForciblyReconnectSubscriberLastEvent;
                                                delete r.reconnectionEventEmitter
                                                    .onForciblyReconnectSubscriberLastEvent,
                                                    this.onForciblyReconnectSubscriber(e);
                                            };
                                            r.reconnectionEventEmitter.once("success", () => {
                                                t();
                                            }),
                                                r.reconnectionEventEmitter.once("error", () => {
                                                    t();
                                                });
                                        }
                                        return;
                                    }
                                    r.completeWebRtcPeerReceive(!0, !0, e.sdpOffer)
                                        .then(() => r.finalResolveForSubscription(!0, t))
                                        .catch((t) =>
                                            r.finalRejectForSubscription(
                                                !0,
                                                `Error while forcibly reconnecting remote stream ${e.streamId}: ${t.toString()}`,
                                                i,
                                            ),
                                        );
                                } else {
                                    let t =
                                        "No stream with streamId '" +
                                        e.streamId +
                                        "' found for connection '" +
                                        e.connectionId +
                                        "' on 'streamPropertyChanged' event";
                                    return O.error(t), i(t);
                                }
                            })
                            .catch((e) => (O.error(e), i(e)));
                    });
                }
                reconnectBrokenStreams() {
                    O.info("Re-establishing media connections...");
                    let e = !1;
                    this.connection.stream &&
                        this.connection.stream.streamIceConnectionStateBroken() &&
                        (O.warn("Re-establishing Publisher " + this.connection.stream.streamId),
                        this.connection.stream.initWebRtcPeerSend(!0),
                        (e = !0)),
                        this.remoteConnections.forEach((t) => {
                            t.stream &&
                                t.stream.streamIceConnectionStateBroken() &&
                                (O.warn("Re-establishing Subscriber " + t.stream.streamId),
                                t.stream.initWebRtcPeerReceive(!0),
                                (e = !0));
                        }),
                        e || O.info("There were no media streams in need of a reconnection");
                }
                onSpeechToTextMessage(e) {
                    return i(this, void 0, void 0, function* () {
                        let t = yield this.getConnection(
                                e.connectionId,
                                "No connection found for connectionId " + e.connectionId,
                            ),
                            i = new u.SpeechToTextEvent(this, t, e.text, e.reason.toLowerCase(), e.raw, e.lang);
                        this.ee.emitEvent("speechToTextMessage", [i]);
                    });
                }
                onSpeechToTextDisconnected(e) {
                    return i(this, void 0, void 0, function* () {
                        this.emitEvent("exception", [
                            new y.ExceptionEvent(
                                this,
                                y.ExceptionEventName.SPEECH_TO_TEXT_DISCONNECTED,
                                this,
                                e.message,
                            ),
                        ]);
                    });
                }
                emitEvent(e, t) {
                    this.ee.emitEvent(e, t);
                }
                leave(e, t) {
                    if (
                        ((e = !!e),
                        O.info("Leaving Session (forced=" + e + ")"),
                        this.stopVideoDataIntervals(),
                        this.connection)
                    ) {
                        if (
                            (this.connection.disposed || e
                                ? this.openvidu.closeWs()
                                : this.openvidu.sendRequest("leaveRoom", (e, t) => {
                                      e && O.error(`leaveRoom error: ${JSON.stringify(e)}`), this.openvidu.closeWs();
                                  }),
                            this.stopPublisherStream(t),
                            !this.connection.disposed)
                        ) {
                            let e = new l.SessionDisconnectedEvent(this, t);
                            this.ee.emitEvent("sessionDisconnected", [e]), e.callDefaultBehavior();
                        }
                    } else O.warn("You were not connected to the session " + this.sessionId);
                    O.flush();
                }
                initializeParams(e) {
                    return {
                        token: e || "",
                        session: this.sessionId,
                        platform: t.getDescription() ? t.getDescription() : "unknown",
                        sdkVersion: this.openvidu.libraryVersion,
                        metadata: this.options.metadata ? this.options.metadata : "",
                        secret: this.openvidu.getSecret(),
                        recorder: this.openvidu.getRecorder(),
                        stt: this.openvidu.getStt(),
                    };
                }
                sendVideoData(e, n = 1, r = !1, o = 1) {
                    var s, a;
                    if (
                        t.isChromeBrowser() ||
                        t.isChromeMobileBrowser() ||
                        t.isOperaBrowser() ||
                        t.isOperaMobileBrowser() ||
                        t.isEdgeBrowser() ||
                        t.isEdgeMobileBrowser() ||
                        t.isElectron() ||
                        (t.isSafariBrowser() && !t.isIonicIos()) ||
                        t.isAndroidBrowser() ||
                        t.isSamsungBrowser() ||
                        t.isIonicAndroid() ||
                        t.isIOSWithSafari()
                    ) {
                        let t = () =>
                            i(this, void 0, void 0, function* () {
                                let t = e.stream.getRTCPeerConnection();
                                if ("connected" === t.connectionState) {
                                    let i = yield t.getStats(),
                                        n = [];
                                    i.forEach((e) => {
                                        "frameWidth" in e && "frameHeight" in e && 0 === n.length && n.push(e);
                                    }),
                                        n.length > 0 &&
                                            this.openvidu.sendRequest(
                                                "videoData",
                                                {
                                                    height: n[0].frameHeight,
                                                    width: n[0].frameWidth,
                                                    videoActive: null != e.stream.videoActive && e.stream.videoActive,
                                                    audioActive: null != e.stream.audioActive && e.stream.audioActive,
                                                },
                                                (e, t) => {
                                                    e && O.error("Error sending 'videoData' event", e);
                                                },
                                            );
                                }
                            });
                        if (r) {
                            let e = 1;
                            this.videoDataInterval = setInterval(() => {
                                e < o ? (e++, t()) : clearInterval(this.videoDataInterval);
                            }, 1e3 * n);
                        } else this.videoDataTimeout = setTimeout(t, 1e3 * n);
                    } else
                        t.isFirefoxBrowser() || t.isFirefoxMobileBrowser() || t.isIonicIos() || t.isReactNative()
                            ? this.openvidu.sendRequest(
                                  "videoData",
                                  {
                                      height: (null == (s = e.stream.videoDimensions) ? void 0 : s.height) || 0,
                                      width: (null == (a = e.stream.videoDimensions) ? void 0 : a.width) || 0,
                                      videoActive: null != e.stream.videoActive && e.stream.videoActive,
                                      audioActive: null != e.stream.audioActive && e.stream.audioActive,
                                  },
                                  (e, t) => {
                                      e && O.error("Error sending 'videoData' event", e);
                                  },
                              )
                            : O.error(
                                  "Browser " +
                                      t.getName() +
                                      " (version " +
                                      t.getVersion() +
                                      ") for " +
                                      t.getFamily() +
                                      " is not supported in OpenVidu for Network Quality",
                              );
                }
                sessionConnected() {
                    return null != this.connection;
                }
                notConnectedError() {
                    return new g.OpenViduError(
                        g.OpenViduErrorName.OPENVIDU_NOT_CONNECTED,
                        "There is no connection to the session. Method 'Session.connect' must be successfully completed first",
                    );
                }
                anySpeechEventListenerEnabled(e, t, i) {
                    let n = this.ee.getListeners(e);
                    if ((t && (n = n.filter((e) => e.once)), n.length > 0)) return !0;
                    let r = 0;
                    if (i) {
                        let n = i.ee.getListeners(e);
                        t && (n = n.filter((e) => e.once)), (r = n.length);
                    }
                    return r > 0;
                }
                getTokenParams(e) {
                    let t = e.match(/^(wss?)\:\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
                    if (t) {
                        let i = {
                                protocol: t[1],
                                host: t[2],
                                hostname: t[3],
                                port: t[4],
                                pathname: t[5],
                                search: t[6],
                                hash: t[7],
                            },
                            n = decodeURI(e.split("?")[1])
                                .split("&")
                                .map((e) => e.split("="))
                                .reduce((e, [t, i]) => ((e[t] = i), e), {});
                        return {
                            sessionId: n.sessionId,
                            secret: n.secret,
                            recorder: n.recorder,
                            stt: n.stt,
                            webrtcStatsInterval: n.webrtcStatsInterval,
                            sendBrowserLogs: n.sendBrowserLogs,
                            edition: n.edition,
                            wsUri: i.protocol + "://" + i.host + "/openvidu",
                            httpUri: "https://" + i.host,
                        };
                    }
                    throw Error(`Token not valid: "${e}"`);
                }
                connectAux(e) {
                    return new Promise((t, i) => {
                        this.openvidu.startWs((r) => {
                            if (r) return i(r);
                            {
                                let r = this.initializeParams(e);
                                this.openvidu.sendRequest("joinRoom", r, (r, o) => {
                                    if (r) return i(r);
                                    {
                                        this.processJoinRoomResponse(o, e),
                                            (this.connection = new n.Connection(this, o));
                                        let i = [],
                                            r = [];
                                        return (
                                            o.value.forEach((e) => {
                                                let t = new n.Connection(this, e);
                                                this.remoteConnections.set(t.connectionId, t),
                                                    i.push(t),
                                                    t.stream &&
                                                        (this.remoteStreamsCreated.set(t.stream.streamId, !0),
                                                        r.push(t.stream));
                                            }),
                                            this.ee.emitEvent("connectionCreated", [
                                                new a.ConnectionEvent(
                                                    !1,
                                                    this,
                                                    "connectionCreated",
                                                    this.connection,
                                                    "",
                                                ),
                                            ]),
                                            i.forEach((e) => {
                                                this.ee.emitEvent("connectionCreated", [
                                                    new a.ConnectionEvent(!1, this, "connectionCreated", e, ""),
                                                ]);
                                            }),
                                            r.forEach((e) => {
                                                this.ee.emitEvent("streamCreated", [
                                                    new h.StreamEvent(!1, this, "streamCreated", e, ""),
                                                ]);
                                            }),
                                            o.recordingId &&
                                                o.recordingName &&
                                                this.ee.emitEvent("recordingStarted", [
                                                    new c.RecordingEvent(
                                                        this,
                                                        "recordingStarted",
                                                        o.recordingId,
                                                        o.recordingName,
                                                    ),
                                                ]),
                                            t()
                                        );
                                    }
                                });
                            }
                        });
                    });
                }
                stopPublisherStream(e) {
                    this.connection.stream &&
                        (this.connection.stream.disposeWebRtcPeer(),
                        this.connection.stream.isLocalStreamPublished &&
                            this.connection.stream.ee.emitEvent("local-stream-destroyed", [e]));
                }
                stopVideoDataIntervals() {
                    clearInterval(this.videoDataInterval), clearTimeout(this.videoDataTimeout);
                }
                stringClientMetadata(e) {
                    return "string" != typeof e ? JSON.stringify(e) : e;
                }
                getConnection(e, t) {
                    return new Promise((i, n) => {
                        let r = this.remoteConnections.get(e);
                        return r
                            ? i(r)
                            : this.connection.connectionId === e
                              ? i(this.connection)
                              : n(new g.OpenViduError(g.OpenViduErrorName.GENERIC_ERROR, t));
                    });
                }
                getRemoteConnection(e, t) {
                    return new Promise((i, n) => {
                        let r = this.remoteConnections.get(e);
                        if (r) return i(r);
                        {
                            let i =
                                "Remote connection " +
                                e +
                                " unknown when '" +
                                t +
                                "'. Existing remote connections: " +
                                JSON.stringify(this.remoteConnections.keys());
                            return n(new g.OpenViduError(g.OpenViduErrorName.GENERIC_ERROR, i));
                        }
                    });
                }
                processToken(e) {
                    let t = this.getTokenParams(e);
                    (this.sessionId = t.sessionId),
                        t.secret && (this.openvidu.secret = t.secret),
                        t.recorder && (this.openvidu.recorder = !0),
                        t.stt && (this.openvidu.stt = !0),
                        t.webrtcStatsInterval && (this.openvidu.webrtcStatsInterval = t.webrtcStatsInterval),
                        t.sendBrowserLogs && (this.openvidu.sendBrowserLogs = t.sendBrowserLogs),
                        (this.openvidu.isAtLeastPro = "pro" === t.edition || "enterprise" === t.edition),
                        (this.openvidu.isEnterprise = "enterprise" === t.edition),
                        (this.openvidu.wsUri = t.wsUri),
                        (this.openvidu.httpUri = t.httpUri);
                }
                processJoinRoomResponse(e, t) {
                    if (((this.sessionId = e.session), null != e.customIceServers && e.customIceServers.length > 0))
                        for (let t of ((this.openvidu.iceServers = []), e.customIceServers)) {
                            let e = { urls: [t.url] };
                            O.log("STUN/TURN server IP: " + t.url),
                                null != t.username &&
                                    null != t.credential &&
                                    ((e.username = t.username),
                                    (e.credential = t.credential),
                                    O.log("TURN credentials [" + t.username + ":" + t.credential + "]")),
                                this.openvidu.iceServers.push(e);
                        }
                    (this.openvidu.role = e.role),
                        (this.openvidu.finalUserId = e.finalUserId),
                        (this.openvidu.mediaServer = e.mediaServer),
                        (this.openvidu.videoSimulcast = e.videoSimulcast),
                        (this.capabilities = {
                            subscribe: !0,
                            publish: "SUBSCRIBER" !== this.openvidu.role,
                            forceUnpublish: "MODERATOR" === this.openvidu.role,
                            forceDisconnect: "MODERATOR" === this.openvidu.role,
                        }),
                        O.info("openvidu-server version: " + e.version),
                        null != e.life && (this.openvidu.life = e.life);
                    let i = w(e.version) - w(this.openvidu.libraryVersion);
                    x(e.version) !== x(this.openvidu.libraryVersion) || (0 != i && 1 != i)
                        ? O.error(
                              `openvidu-browser (${this.openvidu.libraryVersion}) and openvidu-server (${e.version}) versions are incompatible. Errors are likely to occur. openvidu-browser SDK is only compatible with the same version or the immediately following minor version of an OpenVidu deployment`,
                          )
                        : 1 == i &&
                          O.warn(
                              `openvidu-browser version ${this.openvidu.libraryVersion} does not match openvidu-server version ${e.version}. These versions are still compatible with each other, but openvidu-browser version must be updated as soon as possible to ${x(e.version)}.${w(e.version)}.x. This client using openvidu-browser ${this.openvidu.libraryVersion} will become incompatible with the next release of openvidu-server`,
                          ),
                        E.OpenViduLogger.configureJSNLog(this.openvidu, t),
                        (this.token = t);
                }
            };
        },
    }),
    e8 = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/Publisher.js": (
            e,
        ) => {
            let t;
            var i =
                (e && e.__awaiter) ||
                function (e, t, i, n) {
                    return new (i || (i = Promise))(function (r, o) {
                        function s(e) {
                            try {
                                d(n.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                d(n.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function d(e) {
                            var t;
                            e.done
                                ? r(e.value)
                                : ((t = e.value) instanceof i
                                      ? t
                                      : new i(function (e) {
                                            e(t);
                                        })
                                  ).then(s, a);
                        }
                        d((n = n.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.Publisher = void 0);
            let n = e6(),
                r = eF(),
                o = X(),
                s = eX(),
                a = U(),
                d = F(),
                c = N(),
                l = L(),
                p = ej(),
                u = c.OpenViduLogger.getInstance();
            e.Publisher = class extends o.StreamManager {
                constructor(e, i, o) {
                    super(
                        new r.Stream(o.session ? o.session : new n.Session(o), {
                            publisherProperties: i,
                            mediaConstraints: {},
                        }),
                        e,
                    ),
                        (this.accessAllowed = !1),
                        (this.isSubscribedToRemote = !1),
                        (this.accessDenied = !1),
                        (t = l.PlatformUtils.getInstance()),
                        (this.properties = i),
                        (this.openvidu = o),
                        this.stream.ee.on("local-stream-destroyed", (e) => {
                            this.stream.isLocalStreamPublished = !1;
                            let t = new s.StreamEvent(!0, this, "streamDestroyed", this.stream, e);
                            this.emitEvent("streamDestroyed", [t]), t.callDefaultBehavior();
                        });
                }
                publishAudio(e) {
                    this.stream.audioActive !== e &&
                        ((this.stream.displayMyRemote()
                            ? this.stream.localMediaStreamWhenSubscribedToRemote
                            : this.stream.getMediaStream()
                        )
                            .getAudioTracks()
                            .forEach((t) => {
                                t.enabled = e;
                            }),
                        this.session &&
                            this.stream.streamId &&
                            this.session.openvidu.sendRequest(
                                "streamPropertyChanged",
                                {
                                    streamId: this.stream.streamId,
                                    property: "audioActive",
                                    newValue: e,
                                    reason: "publishAudio",
                                },
                                (t, i) => {
                                    t
                                        ? u.error("Error sending 'streamPropertyChanged' event", t)
                                        : (this.session.emitEvent("streamPropertyChanged", [
                                              new a.StreamPropertyChangedEvent(
                                                  this.session,
                                                  this.stream,
                                                  "audioActive",
                                                  e,
                                                  !e,
                                                  "publishAudio",
                                              ),
                                          ]),
                                          this.emitEvent("streamPropertyChanged", [
                                              new a.StreamPropertyChangedEvent(
                                                  this,
                                                  this.stream,
                                                  "audioActive",
                                                  e,
                                                  !e,
                                                  "publishAudio",
                                              ),
                                          ]),
                                          this.session.sendVideoData(this.stream.streamManager));
                                },
                            ),
                        (this.stream.audioActive = e),
                        u.info("'Publisher' has " + (e ? "published" : "unpublished") + " its audio stream"));
                }
                publishVideo(e, t) {
                    return new Promise((n, r) =>
                        i(this, void 0, void 0, function* () {
                            if (this.stream.videoActive !== e) {
                                let o = this.stream.displayMyRemote()
                                        ? this.stream.localMediaStreamWhenSubscribedToRemote
                                        : this.stream.getMediaStream(),
                                    s = !1;
                                if (
                                    (o.getVideoTracks().forEach((i) => {
                                        (i.enabled = e),
                                            e || !0 !== t ? e && "ended" === i.readyState && (s = !0) : i.stop();
                                    }),
                                    !e &&
                                        !0 === t &&
                                        this.stream.filter &&
                                        this.stream.filter.type.startsWith("VB:") &&
                                        ((this.stream.lastVBFilter = this.stream.filter),
                                        yield this.stream.removeFilterAux(!0)),
                                    s)
                                ) {
                                    let e = o.getVideoTracks()[0];
                                    o.removeTrack(e);
                                    let n = (e) =>
                                        i(this, void 0, void 0, function* () {
                                            o.addTrack(e),
                                                this.stream.isLocalStreamPublished &&
                                                    (yield this.replaceTrackInRtcRtpSender(e)),
                                                this.stream.lastVBFilter &&
                                                    setTimeout(
                                                        () =>
                                                            i(this, void 0, void 0, function* () {
                                                                let e = this.stream.lastVBFilter.options,
                                                                    t = this.stream.lastVBFilter.lastExecMethod;
                                                                t &&
                                                                    "update" === t.method &&
                                                                    (e = Object.assign({}, e, t.params)),
                                                                    yield this.stream.applyFilter(
                                                                        this.stream.lastVBFilter.type,
                                                                        e,
                                                                    ),
                                                                    delete this.stream.lastVBFilter;
                                                            }),
                                                        1,
                                                    );
                                        });
                                    if (t && t instanceof MediaStreamTrack) yield n(t);
                                    else
                                        try {
                                            yield n(
                                                (yield navigator.mediaDevices.getUserMedia({
                                                    audio: !1,
                                                    video: this.stream.lastVideoTrackConstraints,
                                                })).getVideoTracks()[0],
                                            );
                                        } catch (e) {
                                            return r(e);
                                        }
                                }
                                return (
                                    this.session &&
                                        this.stream.streamId &&
                                        this.session.openvidu.sendRequest(
                                            "streamPropertyChanged",
                                            {
                                                streamId: this.stream.streamId,
                                                property: "videoActive",
                                                newValue: e,
                                                reason: "publishVideo",
                                            },
                                            (t, i) => {
                                                t
                                                    ? u.error("Error sending 'streamPropertyChanged' event", t)
                                                    : (this.session.emitEvent("streamPropertyChanged", [
                                                          new a.StreamPropertyChangedEvent(
                                                              this.session,
                                                              this.stream,
                                                              "videoActive",
                                                              e,
                                                              !e,
                                                              "publishVideo",
                                                          ),
                                                      ]),
                                                      this.emitEvent("streamPropertyChanged", [
                                                          new a.StreamPropertyChangedEvent(
                                                              this,
                                                              this.stream,
                                                              "videoActive",
                                                              e,
                                                              !e,
                                                              "publishVideo",
                                                          ),
                                                      ]),
                                                      this.session.sendVideoData(this.stream.streamManager));
                                            },
                                        ),
                                    (this.stream.videoActive = e),
                                    u.info(
                                        "'Publisher' has " + (e ? "published" : "unpublished") + " its video stream",
                                    ),
                                    n()
                                );
                            }
                        }),
                    );
                }
                subscribeToRemote(e) {
                    (e = void 0 === e || e), (this.isSubscribedToRemote = e), this.stream.subscribeToMyRemote(e);
                }
                on(e, t) {
                    return (
                        super.on(e, t),
                        "streamCreated" === e &&
                            (this.stream && this.stream.isLocalStreamPublished
                                ? this.emitEvent("streamCreated", [
                                      new s.StreamEvent(!1, this, "streamCreated", this.stream, ""),
                                  ])
                                : this.stream.ee.on("stream-created-by-publisher", () => {
                                      this.emitEvent("streamCreated", [
                                          new s.StreamEvent(!1, this, "streamCreated", this.stream, ""),
                                      ]);
                                  })),
                        "accessAllowed" === e && this.accessAllowed && this.emitEvent("accessAllowed", []),
                        "accessDenied" === e && this.accessDenied && this.emitEvent("accessDenied", []),
                        this
                    );
                }
                once(e, t) {
                    return (
                        super.once(e, t),
                        "streamCreated" === e &&
                            (this.stream && this.stream.isLocalStreamPublished
                                ? this.emitEvent("streamCreated", [
                                      new s.StreamEvent(!1, this, "streamCreated", this.stream, ""),
                                  ])
                                : this.stream.ee.once("stream-created-by-publisher", () => {
                                      this.emitEvent("streamCreated", [
                                          new s.StreamEvent(!1, this, "streamCreated", this.stream, ""),
                                      ]);
                                  })),
                        "accessAllowed" === e && this.accessAllowed && this.emitEvent("accessAllowed", []),
                        "accessDenied" === e && this.accessDenied && this.emitEvent("accessDenied", []),
                        this
                    );
                }
                off(e, t) {
                    return super.off(e, t), this;
                }
                replaceTrack(e) {
                    return i(this, void 0, void 0, function* () {
                        return this.replaceTrackAux(e, !0);
                    });
                }
                initialize() {
                    return new Promise((e, n) =>
                        i(this, void 0, void 0, function* () {
                            var r, o;
                            let s,
                                a = {},
                                c = {},
                                l = (e) => (
                                    (this.accessDenied = !0),
                                    (this.accessAllowed = !1),
                                    u.error(`Publisher initialization failed. ${e.name}: ${e.message}`),
                                    n(e)
                                ),
                                h = (t) => {
                                    var i, n;
                                    if (
                                        ((this.accessAllowed = !0),
                                        (this.accessDenied = !1),
                                        "u" > typeof MediaStreamTrack &&
                                            this.properties.audioSource instanceof MediaStreamTrack &&
                                            (t.removeTrack(t.getAudioTracks()[0]),
                                            t.addTrack(this.properties.audioSource)),
                                        "u" > typeof MediaStreamTrack &&
                                            this.properties.videoSource instanceof MediaStreamTrack &&
                                            (t.removeTrack(t.getVideoTracks()[0]),
                                            t.addTrack(this.properties.videoSource)),
                                        t.getAudioTracks()[0])
                                    ) {
                                        let e =
                                            void 0 !== this.stream.audioActive && null !== this.stream.audioActive
                                                ? this.stream.audioActive
                                                : !!this.stream.outboundStreamOpts.publisherProperties.publishAudio;
                                        t.getAudioTracks()[0].enabled = e;
                                    }
                                    if (t.getVideoTracks()[0]) {
                                        let e =
                                            void 0 !== this.stream.videoActive && null !== this.stream.videoActive
                                                ? this.stream.videoActive
                                                : !!this.stream.outboundStreamOpts.publisherProperties.publishVideo;
                                        t.getVideoTracks()[0].enabled = e;
                                    }
                                    for (let e of t.getAudioTracks())
                                        (null == (i = e.contentHint) ? void 0 : i.length) ||
                                            ((e.contentHint = ""),
                                            u.info(`Audio track Content Hint set: '${e.contentHint}'`));
                                    for (let e of t.getVideoTracks())
                                        if (!(null == (n = e.contentHint) ? void 0 : n.length)) {
                                            switch (this.stream.typeOfVideo) {
                                                case p.TypeOfVideo.SCREEN:
                                                    e.contentHint = "detail";
                                                    break;
                                                case p.TypeOfVideo.CUSTOM:
                                                    u.warn(
                                                        "CUSTOM type video track was provided without Content Hint!",
                                                    ),
                                                        (e.contentHint = "motion");
                                                    break;
                                                case p.TypeOfVideo.CAMERA:
                                                case p.TypeOfVideo.IPCAM:
                                                default:
                                                    e.contentHint = "motion";
                                            }
                                            u.info(`Video track Content Hint set: '${e.contentHint}'`);
                                        }
                                    return (
                                        this.initializeVideoReference(t),
                                        this.stream.displayMyRemote() || this.stream.updateMediaStreamInVideos(),
                                        delete this.firstVideoElement,
                                        this.stream.isSendVideo()
                                            ? this.getVideoDimensions().then((e) => {
                                                  (this.stream.videoDimensions = { width: e.width, height: e.height }),
                                                      this.stream.isSendScreen() &&
                                                          (this.stream.isSendAudio() &&
                                                              0 === t.getAudioTracks().length &&
                                                              ((this.stream.audioActive = !1),
                                                              (this.stream.hasAudio = !1),
                                                              (this.stream.outboundStreamOpts.publisherProperties.publishAudio =
                                                                  !1),
                                                              (this.stream.outboundStreamOpts.publisherProperties.audioSource =
                                                                  !1)),
                                                          (this.screenShareResizeInterval = setInterval(() => {
                                                              let e = t.getVideoTracks()[0].getSettings(),
                                                                  i = e.width,
                                                                  n = e.height,
                                                                  r =
                                                                      null != i &&
                                                                      i !== this.stream.videoDimensions.width,
                                                                  o =
                                                                      null != n &&
                                                                      n !== this.stream.videoDimensions.height;
                                                              this.stream.isLocalStreamPublished &&
                                                                  (r || o) &&
                                                                  this.openvidu.sendVideoDimensionsChangedEvent(
                                                                      this,
                                                                      "screenResized",
                                                                      this.stream.videoDimensions.width,
                                                                      this.stream.videoDimensions.height,
                                                                      i || 0,
                                                                      n || 0,
                                                                  );
                                                          }, 650))),
                                                      (this.stream.isLocalStreamReadyToPublish = !0),
                                                      this.stream.ee.emitEvent("stream-ready-to-publish", []);
                                              })
                                            : ((this.stream.isLocalStreamReadyToPublish = !0),
                                              this.stream.ee.emitEvent("stream-ready-to-publish", [])),
                                        e()
                                    );
                                },
                                m = (e, t) =>
                                    i(this, void 0, void 0, function* () {
                                        if (
                                            (this.clearPermissionDialogTimer(s, 2e3),
                                            this.stream.isSendScreen() &&
                                                "screen" !== this.properties.audioSource &&
                                                this.stream.isSendAudio())
                                        ) {
                                            (c.audio = t),
                                                (c.video = !1),
                                                (s = Date.now()),
                                                this.setPermissionDialogTimer(2e3);
                                            try {
                                                let t = yield navigator.mediaDevices.getUserMedia(c);
                                                this.clearPermissionDialogTimer(s, 2e3),
                                                    e.addTrack(t.getAudioTracks()[0]),
                                                    h(e);
                                            } catch (t) {
                                                this.clearPermissionDialogTimer(s, 2e3),
                                                    e.getAudioTracks().forEach((e) => {
                                                        e.stop();
                                                    }),
                                                    e.getVideoTracks().forEach((e) => {
                                                        e.stop();
                                                    }),
                                                    l(this.openvidu.generateAudioDeviceError(t, a));
                                                return;
                                            }
                                        } else h(e);
                                    }),
                                v = (e) =>
                                    i(this, void 0, void 0, function* () {
                                        let t, i;
                                        switch (
                                            (u.error(`getMediaError: ${e.toString()}`),
                                            this.clearPermissionDialogTimer(s, 2e3),
                                            "Error" === e.name && (e.name = e.constructor.name),
                                            e.name.toLowerCase())
                                        ) {
                                            case "notfounderror":
                                                try {
                                                    (yield navigator.mediaDevices.getUserMedia({
                                                        audio: !1,
                                                        video: a.video,
                                                    }))
                                                        .getVideoTracks()
                                                        .forEach((e) => {
                                                            e.stop();
                                                        }),
                                                        (t = d.OpenViduErrorName.INPUT_AUDIO_DEVICE_NOT_FOUND),
                                                        (i = e.toString()),
                                                        l(new d.OpenViduError(t, i));
                                                } catch (e) {
                                                    (t = d.OpenViduErrorName.INPUT_VIDEO_DEVICE_NOT_FOUND),
                                                        (i = e.toString()),
                                                        l(new d.OpenViduError(t, i));
                                                }
                                                break;
                                            case "notallowederror":
                                                (t = this.stream.isSendScreen()
                                                    ? d.OpenViduErrorName.SCREEN_CAPTURE_DENIED
                                                    : d.OpenViduErrorName.DEVICE_ACCESS_DENIED),
                                                    (i = e.toString()),
                                                    l(new d.OpenViduError(t, i));
                                                break;
                                            case "overconstrainederror":
                                                try {
                                                    (yield navigator.mediaDevices.getUserMedia({
                                                        audio: !1,
                                                        video: a.video,
                                                    }))
                                                        .getVideoTracks()
                                                        .forEach((e) => {
                                                            e.stop();
                                                        }),
                                                        "deviceid" === e.constraint.toLowerCase()
                                                            ? ((t = d.OpenViduErrorName.INPUT_AUDIO_DEVICE_NOT_FOUND),
                                                              (i =
                                                                  "Audio input device with deviceId '" +
                                                                  a.audio.deviceId.exact +
                                                                  "' not found"))
                                                            : ((t = d.OpenViduErrorName.PUBLISHER_PROPERTIES_ERROR),
                                                              (i =
                                                                  "Audio input device doesn't support the value passed for constraint '" +
                                                                  e.constraint +
                                                                  "'")),
                                                        l(new d.OpenViduError(t, i));
                                                } catch (e) {
                                                    "deviceid" === e.constraint.toLowerCase()
                                                        ? ((t = d.OpenViduErrorName.INPUT_VIDEO_DEVICE_NOT_FOUND),
                                                          (i =
                                                              "Video input device with deviceId '" +
                                                              a.video.deviceId.exact +
                                                              "' not found"))
                                                        : ((t = d.OpenViduErrorName.PUBLISHER_PROPERTIES_ERROR),
                                                          (i =
                                                              "Video input device doesn't support the value passed for constraint '" +
                                                              e.constraint +
                                                              "'")),
                                                        l(new d.OpenViduError(t, i));
                                                }
                                                break;
                                            case "aborterror":
                                            case "notreadableerror":
                                                (t = d.OpenViduErrorName.DEVICE_ALREADY_IN_USE),
                                                    (i = e.toString()),
                                                    l(new d.OpenViduError(t, i));
                                                break;
                                            default:
                                                (t = d.OpenViduErrorName.GENERIC_ERROR),
                                                    (i = e.toString()),
                                                    l(new d.OpenViduError(t, i));
                                        }
                                    });
                            try {
                                let e = yield this.openvidu.generateMediaConstraints(this.properties);
                                if (
                                    (e.videoTrack && e.audioTrack) ||
                                    (e.audioTrack && (null == (r = e.constraints) ? void 0 : r.video) === !1) ||
                                    (e.videoTrack && (null == (o = e.constraints) ? void 0 : o.audio) === !1)
                                )
                                    h(this.openvidu.addAlreadyProvidedTracks(e, new MediaStream(), this.stream));
                                else {
                                    let i = {
                                        mediaConstraints: (a = e.constraints),
                                        publisherProperties: this.properties,
                                    };
                                    this.stream.setOutboundStreamOptions(i);
                                    let n = void 0 === a.audio || a.audio;
                                    (c.audio = !this.stream.isSendScreen() && n),
                                        (c.video = a.video),
                                        (s = Date.now()),
                                        this.setPermissionDialogTimer(2e3);
                                    try {
                                        if (
                                            this.stream.isSendScreen() &&
                                            navigator.mediaDevices.getDisplayMedia &&
                                            !t.isElectron()
                                        ) {
                                            let t = yield navigator.mediaDevices.getDisplayMedia({
                                                video: !0,
                                                audio: "screen" === this.properties.audioSource,
                                            });
                                            this.openvidu.addAlreadyProvidedTracks(e, t), yield m(t, n);
                                        } else {
                                            this.stream.lastVideoTrackConstraints = c.video;
                                            let t = yield navigator.mediaDevices.getUserMedia(c);
                                            this.openvidu.addAlreadyProvidedTracks(e, t, this.stream), yield m(t, n);
                                        }
                                    } catch (e) {
                                        yield v(e);
                                    }
                                }
                            } catch (e) {
                                l(e);
                            }
                        }),
                    );
                }
                replaceTrackAux(e, t) {
                    return i(this, void 0, void 0, function* () {
                        let i = e.enabled;
                        "video" === e.kind
                            ? (e.enabled = this.stream.videoActive)
                            : "audio" === e.kind && (e.enabled = this.stream.audioActive);
                        try {
                            if (this.stream.isLocalStreamPublished)
                                return this.replaceTrackInMediaStream(e, t), yield this.replaceTrackInRtcRtpSender(e);
                            return this.replaceTrackInMediaStream(e, t);
                        } catch (t) {
                            throw ((e.enabled = i), t);
                        }
                    });
                }
                getVideoDimensions() {
                    return new Promise((e, i) => {
                        let n,
                            r = (t.isIonicIos() || t.isIOSWithSafari()) && this.videoReference.readyState < 1,
                            o = () => {
                                let i, o;
                                if ("function" == typeof this.stream.getMediaStream().getVideoTracks()[0].getSettings) {
                                    let e = this.stream.getMediaStream().getVideoTracks()[0].getSettings();
                                    (i = e.width || this.videoReference.videoWidth),
                                        (o = e.height || this.videoReference.videoHeight);
                                } else
                                    u.warn(
                                        "MediaStreamTrack does not have getSettings method on " + t.getDescription(),
                                    ),
                                        (i = this.videoReference.videoWidth),
                                        (o = this.videoReference.videoHeight);
                                return (
                                    null != n && this.videoReference.removeEventListener("loadedmetadata", n),
                                    r && document.body.removeChild(this.videoReference),
                                    e({ width: i, height: o })
                                );
                            };
                        this.videoReference.readyState >= 1
                            ? o()
                            : ((n = () => {
                                  if (this.videoReference.videoWidth) o();
                                  else {
                                      let e = setInterval(() => {
                                          this.videoReference.videoWidth && (clearInterval(e), o());
                                      }, 40);
                                  }
                              }),
                              this.videoReference.addEventListener("loadedmetadata", n),
                              r && document.body.appendChild(this.videoReference));
                    });
                }
                reestablishStreamPlayingEvent() {
                    this.ee.getListeners("streamPlaying").length > 0 && this.addPlayEventToFirstVideo();
                }
                initializeVideoReference(e) {
                    (this.videoReference = document.createElement("video")),
                        (this.videoReference.style.display = "none"),
                        (this.videoReference.muted = !0),
                        (this.videoReference.autoplay = !0),
                        (this.videoReference.controls = !1),
                        (t.isSafariBrowser() ||
                            (t.isIPhoneOrIPad() &&
                                (t.isChromeMobileBrowser() ||
                                    t.isEdgeMobileBrowser() ||
                                    t.isOperaMobileBrowser() ||
                                    t.isFirefoxMobileBrowser()))) &&
                            (this.videoReference.playsInline = !0),
                        this.stream.setMediaStream(e),
                        this.firstVideoElement &&
                            this.createVideoElement(this.firstVideoElement.targetElement, this.properties.insertMode),
                        (this.videoReference.srcObject = this.stream.getMediaStream());
                }
                replaceTrackInMediaStream(e, t) {
                    let i,
                        n = this.stream.displayMyRemote()
                            ? this.stream.localMediaStreamWhenSubscribedToRemote
                            : this.stream.getMediaStream();
                    "video" === e.kind
                        ? ((i = n.getVideoTracks()[0]),
                          t && (this.stream.lastVideoTrackConstraints = e.getConstraints()))
                        : (i = n.getAudioTracks()[0]),
                        (i.enabled = !1),
                        i.stop(),
                        n.removeTrack(i),
                        n.addTrack(e);
                    let r = {
                        oldLabel: (null == i ? void 0 : i.label) || "",
                        newLabel: (null == e ? void 0 : e.label) || "",
                    };
                    "video" === e.kind && t
                        ? (this.openvidu.sendNewVideoDimensionsIfRequired(this, "trackReplaced", 50, 30),
                          this.openvidu.sendTrackChangedEvent(this, r.oldLabel, r.newLabel, "videoTrack"),
                          this.stream.isLocalStreamPublished &&
                              this.session.sendVideoData(this.stream.streamManager, 5, !0, 5))
                        : "audio" === e.kind &&
                          t &&
                          this.openvidu.sendTrackChangedEvent(this, r.oldLabel, r.newLabel, "audioTrack"),
                        "audio" === e.kind &&
                            (this.stream.disableHarkSpeakingEvent(!1),
                            this.stream.disableHarkStoppedSpeakingEvent(!1),
                            this.stream.disableHarkVolumeChangeEvent(!1),
                            this.stream.initHarkEvents());
                }
                setPermissionDialogTimer(e) {
                    this.permissionDialogTimeout = setTimeout(() => {
                        this.emitEvent("accessDialogOpened", []);
                    }, e);
                }
                clearPermissionDialogTimer(e, t) {
                    clearTimeout(this.permissionDialogTimeout),
                        Date.now() - e > t && this.emitEvent("accessDialogClosed", []);
                }
                replaceTrackInRtcRtpSender(e) {
                    return i(this, void 0, void 0, function* () {
                        let t,
                            i = this.stream.getRTCPeerConnection().getSenders();
                        if ("video" === e.kind) {
                            if (!(t = i.find((e) => !!e.track && "video" === e.track.kind)))
                                throw Error(
                                    "There's no replaceable track for that kind of MediaStreamTrack in this Publisher object",
                                );
                        } else if ("audio" === e.kind) {
                            if (!(t = i.find((e) => !!e.track && "audio" === e.track.kind)))
                                throw Error(
                                    "There's no replaceable track for that kind of MediaStreamTrack in this Publisher object",
                                );
                        } else throw Error("Unknown track kind " + e.kind);
                        yield t.replaceTrack(e);
                    });
                }
            };
        },
    }),
    e7 = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/ScreenSharing/Screen-Capturing-Auto.js":
            (e) => {
                var t;
                function i(e, t, i) {
                    var n = {
                        audio: !1,
                        video: {
                            mandatory: {
                                chromeMediaSource: e ? "screen" : "desktop",
                                maxWidth: globalThis.screen.width > 1920 ? globalThis.screen.width : 1920,
                                maxHeight: globalThis.screen.height > 1080 ? globalThis.screen.height : 1080,
                            },
                            optional: [],
                        },
                    };
                    return (
                        i && (n.audio = { mandatory: { chromeMediaSource: e ? "screen" : "desktop" }, optional: [] }),
                        t &&
                            ((n.video.mandatory.chromeMediaSourceId = t),
                            n.audio && n.audio.mandatory && (n.audio.mandatory.chromeMediaSourceId = t)),
                        n
                    );
                }
                function n(e) {
                    t
                        ? t.isLoaded
                            ? e
                                ? e.forEach
                                    ? t.contentWindow.postMessage({ captureCustomSourceId: e }, "*")
                                    : t.contentWindow.postMessage({ captureSourceIdWithAudio: !0 }, "*")
                                : t.contentWindow.postMessage({ captureSourceId: !0 }, "*")
                            : setTimeout(function () {
                                  n(e);
                              }, 100)
                        : r(function () {
                              n(e);
                          });
                }
                function r(e) {
                    t
                        ? e()
                        : (((t = document.createElement("iframe")).onload = function () {
                              (t.isLoaded = !0), e();
                          }),
                          (t.src = "https://openvidu.github.io/openvidu-screen-sharing-chrome-extension/"),
                          (t.style.display = "none"),
                          (document.body || document.documentElement).appendChild(t));
                }
                function o() {
                    t
                        ? t.isLoaded
                            ? t.contentWindow.postMessage({ getChromeExtensionStatus: !0 }, "*")
                            : setTimeout(o, 100)
                        : r(o);
                }
                (globalThis.getScreenId = function (e, t, r) {
                    -1 !== navigator.userAgent.indexOf("Edge") && (navigator.msSaveOrOpenBlob || navigator.msSaveBlob)
                        ? t({ video: !0 })
                        : navigator.mozGetUserMedia
                          ? t(null, "firefox", { video: { mozMediaSource: e, mediaSource: e } })
                          : (globalThis.addEventListener("message", function e(n) {
                                n.data &&
                                    (n.data.chromeMediaSourceId &&
                                        ("PermissionDeniedError" === n.data.chromeMediaSourceId
                                            ? t("permission-denied")
                                            : t(
                                                  null,
                                                  n.data.chromeMediaSourceId,
                                                  i(null, n.data.chromeMediaSourceId, n.data.canRequestAudioTrack),
                                              ),
                                        globalThis.removeEventListener("message", e)),
                                    n.data.chromeExtensionStatus &&
                                        (t(n.data.chromeExtensionStatus, null, i(n.data.chromeExtensionStatus)),
                                        globalThis.removeEventListener("message", e)));
                            }),
                            r
                                ? setTimeout(function () {
                                      n(r);
                                  }, 100)
                                : setTimeout(n, 100));
                }),
                    (globalThis.getScreenConstraints = function (e) {
                        r(function () {
                            getScreenId(function (t, i, n) {
                                n || (n = { video: !0 }), e(t, n.video);
                            });
                        });
                    }),
                    (globalThis.getChromeExtensionStatus = function (e) {
                        navigator.mozGetUserMedia
                            ? e("installed-enabled")
                            : (globalThis.addEventListener("message", function t(i) {
                                  i.data &&
                                      i.data.chromeExtensionStatus &&
                                      (e(i.data.chromeExtensionStatus), globalThis.removeEventListener("message", t));
                              }),
                              setTimeout(o, 100));
                    }),
                    (e.getScreenId = globalThis.getScreenId);
            },
    }),
    e9 = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/ScreenSharing/Screen-Capturing.js":
            (e) => {
                var t,
                    i,
                    n = "screen";
                if ("u" > typeof window && "u" > typeof navigator && void 0 !== navigator.userAgent) {
                    var r = void 0 !== window.InstallTrigger;
                    window.opera || navigator.userAgent.indexOf(" OPR/"),
                        window.chrome,
                        window.addEventListener("message", function (e) {
                            e.origin == window.location.origin &&
                                (function (e) {
                                    if ("PermissionDeniedError" == e)
                                        if (i) return i("PermissionDeniedError");
                                        else throw Error("PermissionDeniedError");
                                    "rtcmulticonnection-extension-loaded" == e && (n = "desktop"),
                                        e.sourceId && i && i((t = e.sourceId), !0 === e.canRequestAudioTrack);
                                })(e.data);
                        });
                }
                function o(e) {
                    if (!e) throw '"callback" parameter is mandatory.';
                    if (t) return e(t);
                    (i = e), window.postMessage("get-sourceId", "*");
                }
                function s(e, s) {
                    if (((t = ""), r)) return e(null, { mozMediaSource: "window", mediaSource: "window" });
                    var a = {
                        mandatory: {
                            chromeMediaSource: n,
                            maxWidth: screen.width > 1920 ? screen.width : 1920,
                            maxHeight: screen.height > 1080 ? screen.height : 1080,
                        },
                        optional: [],
                    };
                    "desktop" != n || t
                        ? ("desktop" == n && (a.mandatory.chromeMediaSourceId = t), e(null, a))
                        : s
                          ? (function (e) {
                                if (!e) throw '"callback" parameter is mandatory.';
                                if (t) return e(t);
                                (i = e), window.postMessage("audio-plus-tab", "*");
                            })(function (t, i) {
                                (a.mandatory.chromeMediaSourceId = t),
                                    i && (a.canRequestAudioTrack = !0),
                                    e("PermissionDeniedError" == t ? t : null, a);
                            })
                          : o(function (t) {
                                (a.mandatory.chromeMediaSourceId = t), e("PermissionDeniedError" == t ? t : null, a);
                            });
                }
                (e.getScreenConstraints = s),
                    (e.getScreenConstraintsWithAudio = function (e) {
                        s(e, !0);
                    }),
                    (e.isChromeExtensionAvailable = function (e) {
                        if (e) {
                            if ("desktop" == n) return e(!0);
                            window.postMessage("are-you-there", "*"),
                                setTimeout(function () {
                                    "screen" == n ? e(!1) : e(!0);
                                }, 2e3);
                        }
                    }),
                    (e.getChromeExtensionStatus = function (e, t) {
                        if (r) return t("not-chrome");
                        2 != arguments.length && ((t = e), (e = "lfcgfepafnobdloecchnfaclibenjold"));
                        var i = document.createElement("img");
                        (i.src = "chrome-extension://" + e + "/icon.png"),
                            (i.onload = function () {
                                (n = "screen"),
                                    window.postMessage("are-you-there", "*"),
                                    setTimeout(function () {
                                        "screen" == n ? t("installed-disabled") : t("installed-enabled");
                                    }, 2e3);
                            }),
                            (i.onerror = function () {
                                t("not-installed");
                            });
                    }),
                    (e.getSourceId = o);
            },
    }),
    te = (0, I.t)({
        "../../node_modules/.pnpm/events@3.3.0/node_modules/events/events.js": (e, t) => {
            var i,
                n = "object" == typeof Reflect ? Reflect : null,
                r =
                    n && "function" == typeof n.apply
                        ? n.apply
                        : function (e, t, i) {
                              return Function.prototype.apply.call(e, t, i);
                          };
            i =
                n && "function" == typeof n.ownKeys
                    ? n.ownKeys
                    : Object.getOwnPropertySymbols
                      ? function (e) {
                            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                        }
                      : function (e) {
                            return Object.getOwnPropertyNames(e);
                        };
            var o =
                Number.isNaN ||
                function (e) {
                    return e != e;
                };
            function s() {
                s.init.call(this);
            }
            (t.exports = s),
                (t.exports.once = function (e, t) {
                    return new Promise(function (i, n) {
                        var r, o, s;
                        function a(i) {
                            e.removeListener(t, d), n(i);
                        }
                        function d() {
                            "function" == typeof e.removeListener && e.removeListener("error", a),
                                i([].slice.call(arguments));
                        }
                        f(e, t, d, { once: !0 }),
                            "error" !== t &&
                                ((r = e),
                                (o = a),
                                (s = { once: !0 }),
                                "function" == typeof r.on && f(r, "error", o, s));
                    });
                }),
                (s.EventEmitter = s),
                (s.prototype._events = void 0),
                (s.prototype._eventsCount = 0),
                (s.prototype._maxListeners = void 0);
            var a = 10;
            function d(e) {
                if ("function" != typeof e)
                    throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
            }
            function c(e) {
                return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
            }
            function l(e, t, i, n) {
                if (
                    (d(i),
                    void 0 === (o = e._events)
                        ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
                        : (void 0 !== o.newListener &&
                              (e.emit("newListener", t, i.listener ? i.listener : i), (o = e._events)),
                          (s = o[t])),
                    void 0 === s)
                )
                    (s = o[t] = i), ++e._eventsCount;
                else if (
                    ("function" == typeof s ? (s = o[t] = n ? [i, s] : [s, i]) : n ? s.unshift(i) : s.push(i),
                    (r = c(e)) > 0 && s.length > r && !s.warned)
                ) {
                    s.warned = !0;
                    var r,
                        o,
                        s,
                        a = Error(
                            "Possible EventEmitter memory leak detected. " +
                                s.length +
                                " " +
                                String(t) +
                                " listeners added. Use emitter.setMaxListeners() to increase limit",
                        );
                    (a.name = "MaxListenersExceededWarning"),
                        (a.emitter = e),
                        (a.type = t),
                        (a.count = s.length),
                        console && console.warn && console.warn(a);
                }
                return e;
            }
            function p() {
                if (!this.fired)
                    return (this.target.removeListener(this.type, this.wrapFn),
                    (this.fired = !0),
                    0 == arguments.length)
                        ? this.listener.call(this.target)
                        : this.listener.apply(this.target, arguments);
            }
            function u(e, t, i) {
                var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i },
                    r = p.bind(n);
                return (r.listener = i), (n.wrapFn = r), r;
            }
            function h(e, t, i) {
                var n = e._events;
                if (void 0 === n) return [];
                var r = n[t];
                return void 0 === r
                    ? []
                    : "function" == typeof r
                      ? i
                          ? [r.listener || r]
                          : [r]
                      : i
                        ? (function (e) {
                              for (var t = Array(e.length), i = 0; i < t.length; ++i) t[i] = e[i].listener || e[i];
                              return t;
                          })(r)
                        : v(r, r.length);
            }
            function m(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var i = t[e];
                    if ("function" == typeof i) return 1;
                    if (void 0 !== i) return i.length;
                }
                return 0;
            }
            function v(e, t) {
                for (var i = Array(t), n = 0; n < t; ++n) i[n] = e[n];
                return i;
            }
            function f(e, t, i, n) {
                if ("function" == typeof e.on) n.once ? e.once(t, i) : e.on(t, i);
                else if ("function" == typeof e.addEventListener)
                    e.addEventListener(t, function r(o) {
                        n.once && e.removeEventListener(t, r), i(o);
                    });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                    return a;
                },
                set: function (e) {
                    if ("number" != typeof e || e < 0 || o(e))
                        throw RangeError(
                            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                                e +
                                ".",
                        );
                    a = e;
                },
            }),
                (s.init = function () {
                    (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) &&
                        ((this._events = Object.create(null)), (this._eventsCount = 0)),
                        (this._maxListeners = this._maxListeners || void 0);
                }),
                (s.prototype.setMaxListeners = function (e) {
                    if ("number" != typeof e || e < 0 || o(e))
                        throw RangeError(
                            'The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".",
                        );
                    return (this._maxListeners = e), this;
                }),
                (s.prototype.getMaxListeners = function () {
                    return c(this);
                }),
                (s.prototype.emit = function (e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t.push(arguments[i]);
                    var n = "error" === e,
                        o = this._events;
                    if (void 0 !== o) n = n && void 0 === o.error;
                    else if (!n) return !1;
                    if (n) {
                        if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
                        var s,
                            a = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                        throw ((a.context = s), a);
                    }
                    var d = o[e];
                    if (void 0 === d) return !1;
                    if ("function" == typeof d) r(d, this, t);
                    else for (var c = d.length, l = v(d, c), i = 0; i < c; ++i) r(l[i], this, t);
                    return !0;
                }),
                (s.prototype.addListener = function (e, t) {
                    return l(this, e, t, !1);
                }),
                (s.prototype.on = s.prototype.addListener),
                (s.prototype.prependListener = function (e, t) {
                    return l(this, e, t, !0);
                }),
                (s.prototype.once = function (e, t) {
                    return d(t), this.on(e, u(this, e, t)), this;
                }),
                (s.prototype.prependOnceListener = function (e, t) {
                    return d(t), this.prependListener(e, u(this, e, t)), this;
                }),
                (s.prototype.removeListener = function (e, t) {
                    var i, n, r, o, s;
                    if ((d(t), void 0 === (n = this._events) || void 0 === (i = n[e]))) return this;
                    if (i === t || i.listener === t)
                        0 == --this._eventsCount
                            ? (this._events = Object.create(null))
                            : (delete n[e], n.removeListener && this.emit("removeListener", e, i.listener || t));
                    else if ("function" != typeof i) {
                        for (r = -1, o = i.length - 1; o >= 0; o--)
                            if (i[o] === t || i[o].listener === t) {
                                (s = i[o].listener), (r = o);
                                break;
                            }
                        if (r < 0) return this;
                        0 === r
                            ? i.shift()
                            : (function (e, t) {
                                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                  e.pop();
                              })(i, r),
                            1 === i.length && (n[e] = i[0]),
                            void 0 !== n.removeListener && this.emit("removeListener", e, s || t);
                    }
                    return this;
                }),
                (s.prototype.off = s.prototype.removeListener),
                (s.prototype.removeAllListeners = function (e) {
                    var t,
                        i,
                        n = this._events;
                    if (void 0 === n) return this;
                    if (void 0 === n.removeListener)
                        return (
                            0 == arguments.length
                                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                                : void 0 !== n[e] &&
                                  (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]),
                            this
                        );
                    if (0 == arguments.length) {
                        var r,
                            o = Object.keys(n);
                        for (i = 0; i < o.length; ++i) "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
                        return (
                            this.removeAllListeners("removeListener"),
                            (this._events = Object.create(null)),
                            (this._eventsCount = 0),
                            this
                        );
                    }
                    if ("function" == typeof (t = n[e])) this.removeListener(e, t);
                    else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                    return this;
                }),
                (s.prototype.listeners = function (e) {
                    return h(this, e, !0);
                }),
                (s.prototype.rawListeners = function (e) {
                    return h(this, e, !1);
                }),
                (s.listenerCount = function (e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t);
                }),
                (s.prototype.listenerCount = m),
                (s.prototype.eventNames = function () {
                    return this._eventsCount > 0 ? i(this._events) : [];
                });
        },
    }),
    tt = (0, I.t)({
        "../../node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js": (e, t) => {
            "function" == typeof Object.create
                ? (t.exports = function (e, t) {
                      t &&
                          ((e.super_ = t),
                          (e.prototype = Object.create(t.prototype, {
                              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                          })));
                  })
                : (t.exports = function (e, t) {
                      if (t) {
                          e.super_ = t;
                          var i = function () {};
                          (i.prototype = t.prototype), (e.prototype = new i()), (e.prototype.constructor = e);
                      }
                  });
        },
    }),
    ti = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/packers/JsonRPC.js":
            (e) => {
                (e.pack = function (e, t) {
                    var i = { jsonrpc: "2.0" };
                    if (e.method) (i.method = e.method), e.params && (i.params = e.params), void 0 != t && (i.id = t);
                    else if (void 0 != t) {
                        if (e.error) {
                            if (void 0 !== e.result) throw TypeError("Both result and error are defined");
                            i.error = e.error;
                        } else if (void 0 !== e.result) i.result = e.result;
                        else throw TypeError("No result or error is defined");
                        i.id = t;
                    }
                    return JSON.stringify(i);
                }),
                    (e.unpack = function (e) {
                        var t = e;
                        ("string" == typeof e || e instanceof String) && (t = JSON.parse(e));
                        var i = t.jsonrpc;
                        if ("2.0" !== i) throw TypeError("Invalid JsonRPC version '" + i + "': " + e);
                        if (void 0 == t.method) {
                            if (void 0 == t.id) throw TypeError("Invalid message: " + e);
                            var n = void 0 !== t.result,
                                r = void 0 !== t.error;
                            if (n && r) throw TypeError("Both result and error are defined: " + e);
                            if (!n && !r) throw TypeError("No result or error is defined: " + e);
                            (t.ack = t.id), delete t.id;
                        }
                        return t;
                    });
            },
    }),
    tn = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/packers/XmlRPC.js":
            (e) => {
                (e.pack = function (e) {
                    throw TypeError("Not yet implemented");
                }),
                    (e.unpack = function (e) {
                        throw TypeError("Not yet implemented");
                    });
            },
    }),
    tr = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/packers/index.js":
            (e) => {
                var t = ti(),
                    i = tn();
                (e.JsonRPC = t), (e.XmlRPC = i);
            },
    }),
    to = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/Mapper.js":
            (e, t) => {
                function i() {
                    var e = {};
                    (this.forEach = function (t) {
                        for (var i in e) {
                            var n = e[i];
                            for (var r in n) t(n[r]);
                        }
                    }),
                        (this.get = function (t, i) {
                            var n = e[i];
                            if (void 0 != n) return n[t];
                        }),
                        (this.remove = function (t, i) {
                            var n = e[i];
                            if (void 0 != n) {
                                for (var r in (delete n[t], n)) return !1;
                                delete e[i];
                            }
                        }),
                        (this.set = function (t, i, n) {
                            if (void 0 == t) return this.remove(i, n);
                            var r = e[n];
                            void 0 == r && (e[n] = r = {}), (r[i] = t);
                        });
                }
                (i.prototype.pop = function (e, t) {
                    var i = this.get(e, t);
                    if (void 0 != i) return this.remove(e, t), i;
                }),
                    (t.exports = i);
            },
    }),
    ts = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/clients/transports/webSocketWithReconnection.js":
            (e, t) => {
                var i = N().OpenViduLogger.getInstance();
                t.exports = function (e) {
                    var t,
                        n = !1,
                        r = e.uri,
                        o = !1,
                        s = new WebSocket(r);
                    (s.onopen = () => {
                        i.debug("WebSocket connected to " + r), e.onconnected && e.onconnected();
                    }),
                        (s.onerror = (t) => {
                            i.error("Could not connect to " + r + " (invoking onerror if defined)", t),
                                e.onerror && e.onerror(t);
                        });
                    var a = () => {
                        3 === s.readyState
                            ? n
                                ? i.debug("Connection closed by user")
                                : e.ismasternodecrashed()
                                  ? i.error("Master Node has crashed. Stopping reconnection process")
                                  : (i.debug("Connection closed unexpectedly. Reconnecting..."), d(2e3, 1))
                            : i.debug("Close callback from previous websocket. Ignoring it");
                    };
                    function d(n, c) {
                        var l, p, u, h;
                        if ((i.debug("reconnect (attempt #" + c + ", max=" + n + ")"), 1 === c)) {
                            if (o)
                                return void i.warn(
                                    "Trying to reconnect when already reconnecting... Ignoring this reconnection.",
                                );
                            (o = !0), e.onreconnecting && e.onreconnecting();
                        }
                        (l = n),
                            (p = c),
                            i.debug("Reconnection attempt #" + p),
                            s.close(4104, "Connection closed for reconnection"),
                            (h = new URLSearchParams(new URL((u = r)).search)).has("reconnect") ||
                                (u = Array.from(h).length > 0 ? u + "&reconnect=true" : u + "?reconnect=true"),
                            ((s = new WebSocket((r = u))).onopen = () => {
                                i.debug("Reconnected to " + r + " after " + p + " attempts..."),
                                    (o = !1),
                                    t(),
                                    e.onreconnected && e.onreconnected(),
                                    (s.onclose = a);
                            }),
                            (s.onerror = (t) => {
                                i.warn("Reconnection error: ", t),
                                    p === l
                                        ? e.ondisconnect && e.ondisconnect()
                                        : setTimeout(() => {
                                              d(l, p + 1);
                                          }, 3e3);
                            });
                    }
                    (s.onclose = a),
                        (this.close = (e, t) => {
                            (n = !0), s.close(e, t);
                        }),
                        (this.reconnectWs = () => {
                            i.debug("reconnectWs"), d(2e3, 1);
                        }),
                        (this.send = (e) => {
                            s.send(e);
                        }),
                        (this.addEventListener = (e, i) => {
                            (t = () => {
                                s.addEventListener(e, i);
                            })();
                        }),
                        (this.getReadyState = () => s.readyState);
                };
            },
    }),
    ta = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/clients/jsonrpcclient.js":
            (e, t) => {
                var i = tl(),
                    n = ts(),
                    r = N().OpenViduLogger;
                Date.now =
                    Date.now ||
                    function () {
                        return +new Date();
                    };
                var o = "RECONNECTING",
                    s = "CONNECTED",
                    a = "DISCONNECTED",
                    d = r.getInstance();
                t.exports = function (e) {
                    var t,
                        r = this,
                        c = e.ws,
                        l = -1,
                        p = 0,
                        u = !0,
                        h = !1,
                        m = a,
                        v = c.onreconnecting,
                        f = c.onreconnected,
                        g = c.onconnected,
                        b = c.onerror;
                    (e.rpc.pull = function (e, t) {
                        t.reply(null, "push");
                    }),
                        (c.onreconnecting = function () {
                            (d.debug("--------- ONRECONNECTING -----------"), m === o)
                                ? d.error(
                                      "Websocket already in RECONNECTING state when receiving a new ONRECONNECTING message. Ignoring it",
                                  )
                                : (I(), (m = o), v && v());
                        }),
                        (c.onreconnected = function () {
                            (d.debug("--------- ONRECONNECTED -----------"), m === s)
                                ? d.error(
                                      "Websocket already in CONNECTED state when receiving a new ONRECONNECTED message. Ignoring it",
                                  )
                                : ((m = s), w(), f && f());
                        }),
                        (c.onconnected = function () {
                            (d.debug("--------- ONCONNECTED -----------"), m === s)
                                ? d.error(
                                      "Websocket already in CONNECTED state when receiving a new ONCONNECTED message. Ignoring it",
                                  )
                                : ((m = s), (u = !0), O(), g && g());
                        }),
                        (c.onerror = function (e) {
                            d.debug("--------- ONERROR -----------"), (m = a), I(), b && b(e);
                        });
                    var E = new n(c);
                    d.debug("Connecting websocket to URI: " + c.uri);
                    var S = {
                            request_timeout: e.rpc.requestTimeout,
                            ping_request_timeout: e.rpc.heartbeatRequestTimeout,
                        },
                        x = new i(i.packers.JsonRPC, S, E, function (t) {
                            d.debug("Received request: " + JSON.stringify(t));
                            try {
                                var i = e.rpc[t.method];
                                void 0 === i
                                    ? d.error("Method " + t.method + " not registered in client")
                                    : i(t.params, t);
                            } catch (e) {
                                d.error("Exception processing request: " + JSON.stringify(t)), d.error(e);
                            }
                        });
                    function w() {
                        d.debug("notReconnectIfNumLessThan = " + p + " (old=" + l + ")"), (l = p);
                    }
                    function y() {
                        if (u) {
                            var t,
                                i = null;
                            (0 == p || p == l) && (i = { interval: e.heartbeat || 5e3 }),
                                p++,
                                r.send(
                                    "ping",
                                    i,
                                    ((t = p),
                                    function (e, i) {
                                        e &&
                                            (d.debug("Error in ping request #" + t + " (" + e.message + ")"),
                                            t > l &&
                                                ((u = !1),
                                                w(),
                                                d.debug(
                                                    "Server did not respond to ping message #" +
                                                        t +
                                                        ". Reconnecting... ",
                                                ),
                                                E.reconnectWs()));
                                    }),
                                );
                        } else d.debug("Trying to send ping, but ping is not enabled");
                    }
                    function O() {
                        h ||
                            (d.debug("Starting ping (if configured)"),
                            (h = !0),
                            void 0 != e.heartbeat && ((t = setInterval(y, e.heartbeat)), y()));
                    }
                    function I() {
                        clearInterval(t), (h = !1), (u = !1), (p = -1), x.cancel();
                    }
                    (this.send = function (e, t, i) {
                        var n = Date.now();
                        x.encode(e, t, function (r, o) {
                            if (r) {
                                try {
                                    d.error(
                                        "ERROR:" +
                                            r.message +
                                            " in Request: method:" +
                                            e +
                                            " params:" +
                                            JSON.stringify(t) +
                                            " request:" +
                                            r.request,
                                    ),
                                        r.data && d.error("ERROR DATA:" + JSON.stringify(r.data));
                                } catch (e) {}
                                r.requestTime = n;
                            }
                            i &&
                                (void 0 != o && "pong" !== o.value && d.debug("Response: " + JSON.stringify(o)),
                                i(r, o));
                        });
                    }),
                        (this.close = function (e, i) {
                            d.debug("Closing  with code: " + e + " because: " + i),
                                void 0 != t && (d.debug("Clearing ping interval"), clearInterval(t)),
                                (h = !1),
                                (u = !1),
                                E.close(e, i);
                        }),
                        (this.reconnect = function () {
                            E.reconnectWs();
                        }),
                        (this.resetPing = function () {
                            (u = !0), (p = 0), O();
                        }),
                        (this.getReadyState = function () {
                            return E.getReadyState();
                        });
                };
            },
    }),
    td = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/clients/index.js":
            (e) => {
                e.JsonRpcClient = ta();
            },
    }),
    tc = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/clients/transports/index.js":
            (e) => {
                e.WebSocketWithReconnection = ts();
            },
    }),
    tl = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/KurentoUtils/kurento-jsonrpc/index.js":
            (e, t) => {
                var i = !1;
                if (Object.defineProperty)
                    try {
                        Object.defineProperty({}, "x", {});
                    } catch (e) {
                        i = !0;
                    }
                Function.prototype.bind ||
                    (Function.prototype.bind = function (e) {
                        if ("function" != typeof this)
                            throw TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                        var t = Array.prototype.slice.call(arguments, 1),
                            i = this,
                            n = function () {},
                            r = function () {
                                return i.apply(
                                    this instanceof n && e ? this : e,
                                    t.concat(Array.prototype.slice.call(arguments)),
                                );
                            };
                        return (n.prototype = this.prototype), (r.prototype = new n()), r;
                    });
                var n = te().EventEmitter,
                    r = tt(),
                    o = tr(),
                    s = to();
                function a(e) {
                    if (e) {
                        if (e instanceof Function) return { send: e };
                        if (e.send instanceof Function) return e;
                        if (e.postMessage instanceof Function) return (e.send = e.postMessage), e;
                        if (e.write instanceof Function) return (e.send = e.write), e;
                        if (void 0 === e.onmessage && !(e.pause instanceof Function))
                            throw SyntaxError("Transport is not a function nor a valid object");
                    }
                }
                function d(e, t) {
                    i
                        ? ((this.method = e), (this.params = t))
                        : (Object.defineProperty(this, "method", { value: e, enumerable: !0 }),
                          Object.defineProperty(this, "params", { value: t, enumerable: !0 }));
                }
                function c(e, t, o, c) {
                    var l = this;
                    if (!e) throw SyntaxError("Packer is not defined");
                    if (!e.pack || !e.unpack) throw SyntaxError("Packer is invalid");
                    var p = (function (e) {
                        if (!e) return {};
                        for (var t in e) {
                            var i = e[t];
                            "string" == typeof i && (e[t] = { response: i });
                        }
                        return e;
                    })(e.responseMethods);
                    if (t instanceof Function) {
                        if (void 0 != o) throw SyntaxError("There can't be parameters after onRequest");
                        (c = t), (o = void 0), (t = void 0);
                    }
                    if (t && t.send instanceof Function) {
                        if (o && !(o instanceof Function)) throw SyntaxError("Only a function can be after transport");
                        (c = o), (o = t), (t = void 0);
                    }
                    if (o instanceof Function) {
                        if (void 0 != c) throw SyntaxError("There can't be parameters after onRequest");
                        (c = o), (o = void 0);
                    }
                    if (o && o.send instanceof Function && c && !(c instanceof Function))
                        throw SyntaxError("Only a function can be after transport");
                    (t = t || {}),
                        n.call(this),
                        c && this.on("request", c),
                        i ? (this.peerID = t.peerID) : Object.defineProperty(this, "peerID", { value: t.peerID });
                    var u = t.max_retries || 0;
                    function h(e) {
                        l.decode(e.data || e);
                    }
                    (this.getTransport = function () {
                        return o;
                    }),
                        (this.setTransport = function (e) {
                            o &&
                                (o.removeEventListener
                                    ? o.removeEventListener("message", h)
                                    : o.removeListener && o.removeListener("data", h)),
                                e &&
                                    (e.addEventListener
                                        ? e.addEventListener("message", h)
                                        : e.addListener && e.addListener("data", h)),
                                (o = a(e));
                        }),
                        i ||
                            Object.defineProperty(this, "transport", {
                                get: this.getTransport.bind(this),
                                set: this.setTransport.bind(this),
                            }),
                        this.setTransport(o);
                    var m = t.request_timeout || 5e3,
                        v = t.ping_request_timeout || m,
                        f = t.response_timeout || 5e3,
                        g = t.duplicates_timeout || 5e3,
                        b = 0,
                        E = new s(),
                        S = new s(),
                        x = new s(),
                        w = {};
                    function y(e, t) {
                        var i = setTimeout(function () {
                            x.remove(e, t);
                        }, g);
                        x.set(i, e, t);
                    }
                    function O(t, n, r, o, s) {
                        d.call(this, t, n),
                            (this.getTransport = function () {
                                return s;
                            }),
                            (this.setTransport = function (e) {
                                s = a(e);
                            }),
                            i ||
                                Object.defineProperty(this, "transport", {
                                    get: this.getTransport.bind(this),
                                    set: this.setTransport.bind(this),
                                });
                        var c = S.get(r, o);
                        s ||
                            l.getTransport() ||
                            (i ? (this.duplicated = !!c) : Object.defineProperty(this, "duplicated", { value: !!c }));
                        var u = p[t];
                        (this.pack = e.pack.bind(e, this, r)),
                            (this.reply = function (t, i, n) {
                                var s, d;
                                if (t instanceof Function || (t && t.send instanceof Function)) {
                                    if (void 0 != i) throw SyntaxError("There can't be parameters after callback");
                                    (n = t), (i = null), (t = void 0);
                                } else if (i instanceof Function || (i && i.send instanceof Function)) {
                                    if (void 0 != n) throw SyntaxError("There can't be parameters after callback");
                                    (n = i), (i = null);
                                }
                                return ((n = a(n)),
                                c && clearTimeout(c.timeout),
                                void 0 != o && (t && (t.dest = o), i && (i.dest = o)),
                                t || void 0 != i
                                    ? (void 0 != l.peerID && (t ? (t.from = l.peerID) : (i.from = l.peerID)),
                                      (s = u
                                          ? void 0 == u.error && t
                                              ? { error: t }
                                              : { method: t ? u.error : u.response, params: t || i }
                                          : { error: t, result: i }),
                                      (s = e.pack(s, r)))
                                    : (s = c ? c.message : e.pack({ result: null }, r)),
                                (d = {
                                    message: s,
                                    timeout: setTimeout(function () {
                                        S.remove(r, o);
                                    }, f),
                                }),
                                S.set(d, r, o),
                                (n = n || this.getTransport() || l.getTransport()))
                                    ? n.send(s)
                                    : s;
                            });
                    }
                    function I(e) {
                        var t = w[e];
                        if (t) {
                            delete w[e];
                            var i = E.pop(t.id, t.dest);
                            i && (clearTimeout(i.timeout), y(t.id, t.dest));
                        }
                    }
                    r(O, d),
                        (this.cancel = function (e) {
                            if (e) return I(e);
                            for (var e in w) I(e);
                        }),
                        (this.close = function () {
                            var e = this.getTransport();
                            e && e.close && e.close(4003, "Cancel request"),
                                this.cancel(),
                                x.forEach(clearTimeout),
                                S.forEach(function (e) {
                                    clearTimeout(e.timeout);
                                });
                        }),
                        (this.encode = function (t, i, n, r, o) {
                            if (i instanceof Function) {
                                if (void 0 != n) throw SyntaxError("There can't be parameters after callback");
                                (o = i), (r = void 0), (n = void 0), (i = void 0);
                            } else if (n instanceof Function) {
                                if (void 0 != r) throw SyntaxError("There can't be parameters after callback");
                                (o = n), (r = void 0), (n = void 0);
                            } else if (r instanceof Function) {
                                if (void 0 != o) throw SyntaxError("There can't be parameters after callback");
                                (o = r), (r = void 0);
                            }
                            void 0 != l.peerID && ((i = i || {}).from = l.peerID),
                                void 0 != n && ((i = i || {}).dest = n);
                            var s = { method: t, params: i };
                            if (o) {
                                var d = b++,
                                    c = 0;
                                function h(e, t) {
                                    l.cancel(s), o(e, t);
                                }
                                var f = { message: (s = e.pack(s, d)), callback: h, responseMethods: p[t] || {} },
                                    g = a(r);
                                function S(e) {
                                    return ((f.timeout = setTimeout(O, ("ping" === t ? v : m) * Math.pow(2, c++))),
                                    (w[s] = { id: d, dest: n }),
                                    E.set(f, d, n),
                                    (e = e || g || l.getTransport()))
                                        ? e.send(s)
                                        : s;
                                }
                                function y(e) {
                                    return (
                                        (e = a(e)),
                                        console.warn(c + " retry for request message:", s),
                                        clearTimeout(x.pop(d, n)),
                                        S(e)
                                    );
                                }
                                function O() {
                                    if (c < u) return y(r);
                                    var e = Error("Request has timed out");
                                    (e.request = s), (e.retry = y), h(e);
                                }
                                return S(r);
                            }
                            return ((s = e.pack(s)), (r = r || this.getTransport())) ? r.send(s) : s;
                        }),
                        (this.decode = function (t, i) {
                            if (!t) throw TypeError("Message is not defined");
                            try {
                                t = e.unpack(t);
                            } catch (e) {
                                return console.debug(e, t);
                            }
                            var n = t.id,
                                r = t.ack,
                                o = t.method,
                                s = t.params || {},
                                c = s.from,
                                p = s.dest;
                            if (void 0 == l.peerID || c != l.peerID) {
                                if (void 0 == n && void 0 == r) {
                                    var u = new d(o, s);
                                    if (l.emit("request", u)) return;
                                    return u;
                                }
                                if (o) {
                                    if (void 0 == p || p == l.peerID) {
                                        var h = E.get(r, c);
                                        if (h) {
                                            var m = h.responseMethods;
                                            return o == m.error ? w(h, s) : o == m.response ? w(h, null, s) : b();
                                        }
                                        var v = x.get(r, c);
                                        if (v) return I(v);
                                    }
                                    return b();
                                }
                                var f = t.error,
                                    g = t.result;
                                if ((!f || !f.dest || f.dest == l.peerID) && (!g || !g.dest || g.dest == l.peerID)) {
                                    var h = E.get(r, c);
                                    if (!h) {
                                        var v = x.get(r, c);
                                        return v ? I(v) : console.warn("No callback was defined for this message", t);
                                    }
                                    w(h, f, g);
                                }
                            }
                            function b() {
                                if ((i = a(i) || l.getTransport())) {
                                    var e = S.get(n, c);
                                    if (e) return i.send(e.message);
                                }
                                var t = new O(o, s, void 0 != n ? n : r, c, i);
                                if (!l.emit("request", t)) return t;
                            }
                            function w(e, t, i) {
                                e.callback(t, i);
                            }
                            function I(e) {
                                console.warn("Response already processed", t), clearTimeout(e), y(r, c);
                            }
                        });
                }
                r(c, n), (c.RpcNotification = d), (t.exports = c);
                var l = td(),
                    p = tc();
                (c.clients = l), (c.clients.transports = p), (c.packers = o);
            },
    }),
    tp = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/package.json": (e, t) => {
            t.exports = {
                author: "OpenVidu",
                dependencies: {
                    events: "3.3.0",
                    freeice: "2.2.2",
                    hark: "1.2.3",
                    inherits: "2.0.4",
                    jsnlog: "2.30.0",
                    mime: "2.6.0",
                    platform: "1.3.6",
                    semver: "7.7.3",
                    uuid: "^8.3.2",
                    "wolfy87-eventemitter": "5.2.9",
                },
                description: "OpenVidu Browser",
                devDependencies: {
                    "@types/node": "24.10.1",
                    "@types/platform": "1.3.6",
                    "@typescript-eslint/eslint-plugin": "8.47.0",
                    "@typescript-eslint/parser": "8.47.0",
                    browserify: "17.0.1",
                    eslint: "9.39.1",
                    "eslint-import-resolver-typescript": "4.4.4",
                    "eslint-plugin-import": "2.32.0",
                    "patch-package": "^8.0.1",
                    prettier: "3.6.2",
                    terser: "5.44.1",
                    tsify: "5.0.4",
                    typedoc: "0.28.14",
                    typescript: "5.9.3",
                    "undici-types": "7.16.0",
                },
                license: "Apache-2.0",
                main: "lib/index.js",
                name: "openvidu-browser",
                repository: { type: "git", url: "git://github.com/OpenVidu/openvidu" },
                scripts: {
                    browserify:
                        "VERSION=${VERSION:-dev}; mkdir -p static/js/ && cd src && ../node_modules/browserify/bin/cmd.js Main.ts -p [ tsify ] --exclude kurento-browser-extensions --debug -o ../static/js/openvidu-browser-$VERSION.js -v",
                    "browserify-prod":
                        "VERSION=${VERSION:-dev}; mkdir -p static/js/ && cd src && ../node_modules/browserify/bin/cmd.js --debug Main.ts -p [ tsify ] --exclude kurento-browser-extensions | ../node_modules/terser/bin/terser --source-map content=inline --output ../static/js/openvidu-browser-$VERSION.min.js",
                    build: "npm run lint && npm run beautify && cd src/OpenVidu && ./../../node_modules/typescript/bin/tsc && cd ../.. && ./node_modules/typescript/bin/tsc --declaration src/index.ts --outDir ./lib --sourceMap --target es2015 --module commonjs --moduleResolution node --lib dom,es2015,scripthost && rm -rf ./ts4.4 && mkdir -p ./ts4.4/lib && cp -r ./lib ./ts4.4 && find ./ts4.4/lib -type f ! -iname '*.d.ts' -delete && ./config/replace_for_ts44.sh",
                    docs: "./generate-docs.sh",
                    lint: "eslint . --ext .ts",
                    beautify: "prettier --write .",
                },
                types: "lib/index.d.ts",
                typesVersions: { "<4.4": { "*": ["ts4.4/*"] } },
                version: "2.32.1",
            };
        },
    }),
    tu = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenVidu/OpenVidu.js": (
            e,
        ) => {
            let t;
            var i =
                (e && e.__awaiter) ||
                function (e, t, i, n) {
                    return new (i || (i = Promise))(function (r, o) {
                        function s(e) {
                            try {
                                d(n.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                d(n.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function d(e) {
                            var t;
                            e.done
                                ? r(e.value)
                                : ((t = e.value) instanceof i
                                      ? t
                                      : new i(function (e) {
                                            e(t);
                                        })
                                  ).then(s, a);
                        }
                        d((n = n.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.OpenVidu = void 0);
            let n = j(),
                r = e8(),
                o = e6(),
                s = eq(),
                a = U(),
                d = F(),
                c = J(),
                l = N(),
                p = L(),
                u = e7(),
                h = e9(),
                m = W(),
                v = tl(),
                f = tp(),
                g = l.OpenViduLogger.getInstance();
            e.OpenVidu = class {
                constructor() {
                    (this.masterNodeHasCrashed = !1),
                        (this.publishers = []),
                        (this.secret = ""),
                        (this.recorder = !1),
                        (this.stt = !1),
                        (this.life = -1),
                        (this.advancedConfiguration = {}),
                        (this.webrtcStatsInterval = -1),
                        (this.sendBrowserLogs = "disabled"),
                        (this.isAtLeastPro = !1),
                        (this.isEnterprise = !1),
                        (this.ee = new m()),
                        (t = p.PlatformUtils.getInstance()),
                        (this.libraryVersion = f.version),
                        g.info("OpenVidu initialized"),
                        g.info("Platform detected: " + t.getDescription()),
                        g.info("openvidu-browser version: " + this.libraryVersion),
                        (t.isMobileDevice() || t.isReactNative()) &&
                            this.onOrientationChanged(() => {
                                this.publishers.forEach((e) => {
                                    e.stream.isLocalStreamPublished &&
                                        e.stream &&
                                        e.stream.hasVideo &&
                                        this.sendNewVideoDimensionsIfRequired(e, "deviceRotated", 75, 10);
                                });
                            });
                }
                initSession() {
                    return (this.session = new o.Session(this)), this.session;
                }
                initPublisher(e, t, i) {
                    let n, o;
                    n =
                        t && "function" != typeof t
                            ? {
                                  audioSource: void 0 !== (n = t).audioSource ? n.audioSource : void 0,
                                  frameRate:
                                      "u" > typeof MediaStreamTrack && n.videoSource instanceof MediaStreamTrack
                                          ? void 0
                                          : void 0 !== n.frameRate
                                            ? n.frameRate
                                            : void 0,
                                  insertMode:
                                      void 0 !== n.insertMode
                                          ? "string" == typeof n.insertMode
                                              ? c.VideoInsertMode[n.insertMode]
                                              : n.insertMode
                                          : c.VideoInsertMode.APPEND,
                                  mirror: void 0 === n.mirror || n.mirror,
                                  publishAudio: void 0 === n.publishAudio || n.publishAudio,
                                  publishVideo: void 0 === n.publishVideo || n.publishVideo,
                                  resolution:
                                      "u" > typeof MediaStreamTrack && n.videoSource instanceof MediaStreamTrack
                                          ? void 0
                                          : void 0 !== n.resolution
                                            ? n.resolution
                                            : "640x480",
                                  videoSource: void 0 !== n.videoSource ? n.videoSource : void 0,
                                  videoSimulcast: n.videoSimulcast,
                                  filter: n.filter,
                              }
                            : {
                                  insertMode: c.VideoInsertMode.APPEND,
                                  mirror: !0,
                                  publishAudio: !0,
                                  publishVideo: !0,
                                  resolution: "640x480",
                              };
                    let s = new r.Publisher(e, n, this);
                    return (
                        t && "function" == typeof t ? (o = t) : i && (o = i),
                        s
                            .initialize()
                            .then(() => {
                                void 0 !== o && o(void 0), s.emitEvent("accessAllowed", []);
                            })
                            .catch((e) => {
                                void 0 !== o && o(e), s.emitEvent("accessDenied", [e]);
                            }),
                        this.publishers.push(s),
                        s
                    );
                }
                initPublisherAsync(e, t) {
                    return new Promise((i, n) => {
                        let r,
                            o = (e) => (e ? n(e) : i(r));
                        r = t ? this.initPublisher(e, t, o) : this.initPublisher(e, o);
                    });
                }
                initLocalRecorder(e) {
                    return new n.LocalRecorder(e);
                }
                checkSystemRequirements() {
                    return t.isIPhoneOrIPad()
                        ? t.isIOSWithSafari() ||
                              t.isChromeMobileBrowser() ||
                              t.isFirefoxMobileBrowser() ||
                              t.isOperaMobileBrowser() ||
                              t.isEdgeMobileBrowser() ||
                              t.isIonicIos()
                        : t.isChromeBrowser() ||
                              t.isChromeMobileBrowser() ||
                              t.isFirefoxBrowser() ||
                              t.isFirefoxMobileBrowser() ||
                              t.isOperaBrowser() ||
                              t.isOperaMobileBrowser() ||
                              t.isEdgeBrowser() ||
                              t.isEdgeMobileBrowser() ||
                              t.isSamsungBrowser() ||
                              t.isSafariBrowser() ||
                              t.isAndroidBrowser() ||
                              t.isElectron() ||
                              t.isNodeJs() ||
                              t.isMotorolaEdgeDevice();
                }
                checkScreenSharingCapabilities() {
                    return t.canScreenShare();
                }
                getDevices() {
                    return new Promise((e, i) => {
                        navigator.mediaDevices
                            .enumerateDevices()
                            .then((i) => {
                                var n;
                                let r = [];
                                if (
                                    !(t.isIonicAndroid() && "u" > typeof cordova) ||
                                    null == (n = null == cordova ? void 0 : cordova.plugins) ||
                                    !n.EnumerateDevicesPlugin
                                )
                                    return (
                                        i.forEach((e) => {
                                            ("audioinput" === e.kind || "videoinput" === e.kind) &&
                                                r.push({ kind: e.kind, deviceId: e.deviceId, label: e.label });
                                        }),
                                        e(r)
                                    );
                                cordova.plugins.EnumerateDevicesPlugin.getEnumerateDevices().then((t) => {
                                    let n = [],
                                        o = [],
                                        s = [];
                                    return (
                                        (n = t.filter((e) => "audioinput" === e.kind)),
                                        (o = i.filter((e) => "videoinput" === e.kind)),
                                        (s = i.filter((e) => "audioinput" === e.kind)),
                                        o.forEach((e, t) => {
                                            if (e.label) r.push({ kind: e.kind, deviceId: e.deviceId, label: e.label });
                                            else {
                                                let i = "";
                                                (i =
                                                    0 === t
                                                        ? "Front Camera"
                                                        : 1 === t
                                                          ? "Back Camera"
                                                          : "Unknown Camera"),
                                                    r.push({ kind: e.kind, deviceId: e.deviceId, label: i });
                                            }
                                        }),
                                        s.forEach((e, t) => {
                                            if (e.label) r.push({ kind: e.kind, deviceId: e.deviceId, label: e.label });
                                            else {
                                                let i = "";
                                                switch (t) {
                                                    case 0:
                                                        i = "Default";
                                                        break;
                                                    case 1:
                                                        let o = n.filter((e) => e.label.includes("Built"))[0];
                                                        i = o ? o.label : "Built-in Microphone";
                                                        break;
                                                    case 2:
                                                        let s = n.filter((e) => e.label.includes("Wired"))[0];
                                                        i = s ? s.label : "Headset earpiece";
                                                        break;
                                                    case 3:
                                                        let a = n.filter((e) => e.label.includes("Bluetooth"))[0];
                                                        i = a ? a.label : "Wireless";
                                                        break;
                                                    default:
                                                        i = "Unknown Microphone";
                                                }
                                                r.push({ kind: e.kind, deviceId: e.deviceId, label: i });
                                            }
                                        }),
                                        e(r)
                                    );
                                });
                            })
                            .catch((e) => (g.error("Error getting devices", e), i(e)));
                    });
                }
                getUserMedia(e) {
                    return i(this, void 0, void 0, function* () {
                        var n, r;
                        let o = (e, t) =>
                            i(this, void 0, void 0, function* () {
                                let i = { audio: void 0 === t.audio || t.audio, video: !1 };
                                try {
                                    let t = yield navigator.mediaDevices.getUserMedia(i);
                                    return e.addTrack(t.getAudioTracks()[0]), e;
                                } catch (t) {
                                    throw (
                                        (e.getAudioTracks().forEach((e) => {
                                            e.stop();
                                        }),
                                        e.getVideoTracks().forEach((e) => {
                                            e.stop();
                                        }),
                                        this.generateAudioDeviceError(t, i))
                                    );
                                }
                            });
                        try {
                            let i = yield this.generateMediaConstraints(e);
                            if (
                                (i.videoTrack && i.audioTrack) ||
                                (i.audioTrack && (null == (n = i.constraints) ? void 0 : n.video) === !1) ||
                                (i.videoTrack && (null == (r = i.constraints) ? void 0 : r.audio) === !1)
                            )
                                return this.addAlreadyProvidedTracks(i, new MediaStream());
                            {
                                i.videoTrack && delete i.constraints.video, i.audioTrack && delete i.constraints.audio;
                                let n = !1;
                                if (
                                    "string" == typeof e.videoSource &&
                                    ("screen" === e.videoSource ||
                                        "window" === e.videoSource ||
                                        (t.isElectron() && e.videoSource.startsWith("screen:"))) &&
                                    ((n = !i.audioTrack && null !== e.audioSource && !1 !== e.audioSource),
                                    navigator.mediaDevices.getDisplayMedia && !t.isElectron())
                                )
                                    try {
                                        let t = yield navigator.mediaDevices.getDisplayMedia({
                                            video: !0,
                                            audio: "screen" === e.audioSource,
                                        });
                                        if ((this.addAlreadyProvidedTracks(i, t), n)) return yield o(t, i.constraints);
                                        return t;
                                    } catch (i) {
                                        let e = d.OpenViduErrorName.SCREEN_CAPTURE_DENIED,
                                            t = i.toString();
                                        throw new d.OpenViduError(e, t);
                                    }
                                let r = n ? { video: i.constraints.video } : i.constraints;
                                try {
                                    let e = yield navigator.mediaDevices.getUserMedia(r);
                                    if ((this.addAlreadyProvidedTracks(i, e), n)) return yield o(e, i.constraints);
                                    return e;
                                } catch (n) {
                                    let t,
                                        i = n.toString();
                                    throw (
                                        ((t =
                                            "screen" !== e.videoSource
                                                ? d.OpenViduErrorName.DEVICE_ACCESS_DENIED
                                                : d.OpenViduErrorName.SCREEN_CAPTURE_DENIED),
                                        new d.OpenViduError(t, i))
                                    );
                                }
                            }
                        } catch (e) {
                            throw e;
                        }
                    });
                }
                enableProdMode() {
                    g.enableProdMode();
                }
                setAdvancedConfiguration(e) {
                    this.advancedConfiguration = e;
                }
                onOrientationChanged(e) {
                    globalThis.addEventListener("orientationchange", e);
                }
                sendNewVideoDimensionsIfRequired(e, t, i, n) {
                    var r, o, s, a;
                    let d = 0,
                        c =
                            (null == (o = null == (r = null == e ? void 0 : e.stream) ? void 0 : r.videoDimensions)
                                ? void 0
                                : o.width) || 0,
                        l =
                            (null == (a = null == (s = null == e ? void 0 : e.stream) ? void 0 : s.videoDimensions)
                                ? void 0
                                : a.height) || 0,
                        p = setInterval(() => {
                            ++d > n && clearTimeout(p),
                                e.getVideoDimensions().then((i) => {
                                    (i.width !== c || i.height !== l) &&
                                        (clearTimeout(p),
                                        this.sendVideoDimensionsChangedEvent(e, t, c, l, i.width, i.height));
                                });
                        }, i);
                }
                sendVideoDimensionsChangedEvent(e, t, i, n, r, o) {
                    (e.stream.videoDimensions = { width: r || 0, height: o || 0 }),
                        this.sendRequest(
                            "streamPropertyChanged",
                            {
                                streamId: e.stream.streamId,
                                property: "videoDimensions",
                                newValue: JSON.stringify(e.stream.videoDimensions),
                                reason: t,
                            },
                            (r, o) => {
                                r
                                    ? g.error("Error sending 'streamPropertyChanged' event", r)
                                    : (this.session.emitEvent("streamPropertyChanged", [
                                          new a.StreamPropertyChangedEvent(
                                              this.session,
                                              e.stream,
                                              "videoDimensions",
                                              e.stream.videoDimensions,
                                              { width: i, height: n },
                                              t,
                                          ),
                                      ]),
                                      e.emitEvent("streamPropertyChanged", [
                                          new a.StreamPropertyChangedEvent(
                                              e,
                                              e.stream,
                                              "videoDimensions",
                                              e.stream.videoDimensions,
                                              { width: i, height: n },
                                              t,
                                          ),
                                      ]),
                                      this.session.sendVideoData(e));
                            },
                        );
                }
                sendTrackChangedEvent(e, t, i, n) {
                    let r = { label: t },
                        o = { label: i },
                        s = "trackReplaced";
                    e.stream.isLocalStreamPublished
                        ? this.sendRequest(
                              "streamPropertyChanged",
                              { streamId: e.stream.streamId, property: n, newValue: o, reason: s },
                              (t, i) => {
                                  t
                                      ? g.error("Error sending 'streamPropertyChanged' event", t)
                                      : (this.session.emitEvent("streamPropertyChanged", [
                                            new a.StreamPropertyChangedEvent(this.session, e.stream, n, o, r, s),
                                        ]),
                                        e.emitEvent("streamPropertyChanged", [
                                            new a.StreamPropertyChangedEvent(e, e.stream, n, o, r, s),
                                        ]));
                              },
                          )
                        : (this.session.emitEvent("streamPropertyChanged", [
                              new a.StreamPropertyChangedEvent(this.session, e.stream, n, o, r, s),
                          ]),
                          e.emitEvent("streamPropertyChanged", [
                              new a.StreamPropertyChangedEvent(e, e.stream, n, o, r, s),
                          ]));
                }
                generateMediaConstraints(e) {
                    return new Promise((t, i) => {
                        let n = {
                                audioTrack: void 0,
                                videoTrack: void 0,
                                constraints: { audio: void 0, video: void 0 },
                            },
                            r = e.audioSource,
                            o = e.videoSource;
                        if (
                            ((null === r || !1 === r) && (n.constraints.audio = !1),
                            (null === o || !1 === o) && (n.constraints.video = !1),
                            !1 === n.constraints.audio && !1 === n.constraints.video)
                        )
                            return i(
                                new d.OpenViduError(
                                    d.OpenViduErrorName.NO_INPUT_SOURCE_SET,
                                    "Properties 'audioSource' and 'videoSource' cannot be set to false or null at the same time",
                                ),
                            );
                        if (
                            ("u" > typeof MediaStreamTrack && r instanceof MediaStreamTrack && (n.audioTrack = r),
                            "u" > typeof MediaStreamTrack && o instanceof MediaStreamTrack && (n.videoTrack = o),
                            void 0 === r && (n.constraints.audio = !0),
                            void 0 === o && (n.constraints.video = { width: { ideal: 640 }, height: { ideal: 480 } }),
                            null !== o && !1 !== o)
                        ) {
                            if (e.resolution) {
                                let t = e.resolution.toLowerCase().split("x"),
                                    i = Number(t[0]),
                                    r = Number(t[1]);
                                n.constraints.video = { width: { ideal: i }, height: { ideal: r } };
                            }
                            e.frameRate && (n.constraints.video.frameRate = { ideal: e.frameRate });
                        }
                        return this.configureDeviceIdOrScreensharing(n, e, t, i), t(n);
                    });
                }
                startWs(e) {
                    let t = {
                        heartbeat: 5e3,
                        ws: {
                            uri: this.wsUri + "?sessionId=" + this.session.sessionId,
                            onconnected: e,
                            ondisconnect: this.disconnectCallback.bind(this),
                            onreconnecting: this.reconnectingCallback.bind(this),
                            onreconnected: this.reconnectedCallback.bind(this),
                            ismasternodecrashed: this.isMasterNodeCrashed.bind(this),
                        },
                        rpc: {
                            requestTimeout: 1e4,
                            heartbeatRequestTimeout: 5e3,
                            participantJoined: this.session.onParticipantJoined.bind(this.session),
                            participantPublished: this.session.onParticipantPublished.bind(this.session),
                            participantUnpublished: this.session.onParticipantUnpublished.bind(this.session),
                            participantLeft: this.session.onParticipantLeft.bind(this.session),
                            participantEvicted: this.session.onParticipantEvicted.bind(this.session),
                            recordingStarted: this.session.onRecordingStarted.bind(this.session),
                            recordingStopped: this.session.onRecordingStopped.bind(this.session),
                            broadcastStarted: this.session.onBroadcastStarted.bind(this.session),
                            broadcastStopped: this.session.onBroadcastStopped.bind(this.session),
                            sendMessage: this.session.onNewMessage.bind(this.session),
                            streamPropertyChanged: this.session.onStreamPropertyChanged.bind(this.session),
                            connectionPropertyChanged: this.session.onConnectionPropertyChanged.bind(this.session),
                            networkQualityLevelChanged: this.session.onNetworkQualityLevelChangedChanged.bind(
                                this.session,
                            ),
                            filterEventDispatched: this.session.onFilterEventDispatched.bind(this.session),
                            iceCandidate: this.session.recvIceCandidate.bind(this.session),
                            mediaError: this.session.onMediaError.bind(this.session),
                            masterNodeCrashedNotification: this.onMasterNodeCrashedNotification.bind(this),
                            forciblyReconnectSubscriber: this.session.onForciblyReconnectSubscriber.bind(this.session),
                            speechToTextMessage: this.session.onSpeechToTextMessage.bind(this.session),
                            speechToTextDisconnected: this.session.onSpeechToTextDisconnected.bind(this.session),
                        },
                    };
                    this.jsonRpcClient = new v.clients.JsonRpcClient(t);
                }
                onMasterNodeCrashedNotification(e) {
                    console.error("Master Node has crashed"),
                        (this.masterNodeHasCrashed = !0),
                        this.session.onLostConnection("nodeCrashed"),
                        this.jsonRpcClient.close(4103, "Master Node has crashed");
                }
                getWsReadyState() {
                    return this.jsonRpcClient.getReadyState();
                }
                closeWs() {
                    this.jsonRpcClient.close(4102, "Connection closed by client");
                }
                sendRequest(e, t, i) {
                    var n;
                    t && t instanceof Function && ((i = t), (t = {})),
                        g.debug('Sending request: {method:"' + e + '", params: ' + JSON.stringify(t) + "}"),
                        null == (n = this.jsonRpcClient) || n.send(e, t, i);
                }
                getWsUri() {
                    return this.wsUri;
                }
                getSecret() {
                    return this.secret;
                }
                getRecorder() {
                    return this.recorder;
                }
                getStt() {
                    return this.stt;
                }
                generateAudioDeviceError(e, t) {
                    let i, n;
                    switch (("Error" === e.name && (e.name = e.constructor.name), e.name.toLowerCase())) {
                        case "notfounderror":
                            return (
                                (i = d.OpenViduErrorName.INPUT_AUDIO_DEVICE_NOT_FOUND),
                                (n = e.toString()),
                                new d.OpenViduError(i, n)
                            );
                        case "notallowederror":
                            return (
                                (i = d.OpenViduErrorName.DEVICE_ACCESS_DENIED),
                                (n = e.toString()),
                                new d.OpenViduError(i, n)
                            );
                        case "overconstrainederror":
                            return (
                                "deviceid" === e.constraint.toLowerCase()
                                    ? ((i = d.OpenViduErrorName.INPUT_AUDIO_DEVICE_NOT_FOUND),
                                      (n =
                                          "Audio input device with deviceId '" +
                                          t.audio.deviceId.exact +
                                          "' not found"))
                                    : ((i = d.OpenViduErrorName.PUBLISHER_PROPERTIES_ERROR),
                                      (n =
                                          "Audio input device doesn't support the value passed for constraint '" +
                                          e.constraint +
                                          "'")),
                                new d.OpenViduError(i, n)
                            );
                        case "notreadableerror":
                            return (
                                (i = d.OpenViduErrorName.DEVICE_ALREADY_IN_USE),
                                (n = e.toString()),
                                new d.OpenViduError(i, n)
                            );
                        default:
                            return new d.OpenViduError(
                                d.OpenViduErrorName.INPUT_AUDIO_DEVICE_GENERIC_ERROR,
                                e.toString(),
                            );
                    }
                }
                addAlreadyProvidedTracks(e, t, i) {
                    return (
                        e.videoTrack &&
                            (t.addTrack(e.videoTrack),
                            i &&
                                (e.constraints.video
                                    ? (i.lastVideoTrackConstraints = e.constraints.video)
                                    : (i.lastVideoTrackConstraints = e.videoTrack.getConstraints()))),
                        e.audioTrack && t.addTrack(e.audioTrack),
                        t
                    );
                }
                configureDeviceIdOrScreensharing(e, i, n, r) {
                    let o = i.audioSource,
                        s = i.videoSource;
                    if (
                        ("string" == typeof o && "screen" !== o && (e.constraints.audio = { deviceId: { exact: o } }),
                        "string" == typeof s)
                    )
                        if (this.isScreenShare(s))
                            if (this.checkScreenSharingCapabilities())
                                if (t.isElectron()) {
                                    let t = s.substr(s.indexOf("screen:") + 7);
                                    return (
                                        (e.constraints.video = {
                                            mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: t },
                                        }),
                                        n(e)
                                    );
                                } else {
                                    if (
                                        this.advancedConfiguration.screenShareChromeExtension &&
                                        !(t.isFirefoxBrowser() || t.isFirefoxMobileBrowser()) &&
                                        !navigator.mediaDevices.getDisplayMedia
                                    )
                                        return void h.getScreenConstraints((t, i) => {
                                            if (!t && (!i.mandatory || "screen" !== i.mandatory.chromeMediaSource))
                                                return (e.constraints.video = i), n(e);
                                            if ("permission-denied" === t || "PermissionDeniedError" === t) {
                                                let e = new d.OpenViduError(
                                                    d.OpenViduErrorName.SCREEN_CAPTURE_DENIED,
                                                    "You must allow access to one window of your desktop",
                                                );
                                                return g.error(e), r(e);
                                            }
                                            {
                                                let e = this.advancedConfiguration.screenShareChromeExtension
                                                    .split("/")
                                                    .pop()
                                                    .trim();
                                                h.getChromeExtensionStatus(e, (e) => {
                                                    if ("installed-disabled" === e) {
                                                        let e = new d.OpenViduError(
                                                            d.OpenViduErrorName.SCREEN_EXTENSION_DISABLED,
                                                            "You must enable the screen extension",
                                                        );
                                                        return g.error(e), r(e);
                                                    }
                                                    if ("not-installed" === e) {
                                                        let e = new d.OpenViduError(
                                                            d.OpenViduErrorName.SCREEN_EXTENSION_NOT_INSTALLED,
                                                            this.advancedConfiguration.screenShareChromeExtension,
                                                        );
                                                        return g.error(e), r(e);
                                                    }
                                                });
                                                return;
                                            }
                                        });
                                    if (navigator.mediaDevices.getDisplayMedia) return n(e);
                                    let o = t.isFirefoxBrowser() || t.isFirefoxMobileBrowser() ? i.videoSource : void 0;
                                    return void u.getScreenId(o, (t, i, o) => {
                                        if (!t) return (e.constraints.video = o.video), n(e);
                                        if ("not-installed" === t) {
                                            let e = this.advancedConfiguration.screenShareChromeExtension
                                                    ? this.advancedConfiguration.screenShareChromeExtension
                                                    : "https://chrome.google.com/webstore/detail/openvidu-screensharing/lfcgfepafnobdloecchnfaclibenjold",
                                                t = new d.OpenViduError(
                                                    d.OpenViduErrorName.SCREEN_EXTENSION_NOT_INSTALLED,
                                                    e,
                                                );
                                            return g.error(t), r(t);
                                        }
                                        if ("installed-disabled" === t) {
                                            let e = new d.OpenViduError(
                                                d.OpenViduErrorName.SCREEN_EXTENSION_DISABLED,
                                                "You must enable the screen extension",
                                            );
                                            return g.error(e), r(e);
                                        }
                                        if ("permission-denied" === t) {
                                            let e = new d.OpenViduError(
                                                d.OpenViduErrorName.SCREEN_CAPTURE_DENIED,
                                                "You must allow access to one window of your desktop",
                                            );
                                            return g.error(e), r(e);
                                        }
                                        {
                                            let e = new d.OpenViduError(
                                                d.OpenViduErrorName.GENERIC_ERROR,
                                                "Unknown error when accessing screen share",
                                            );
                                            return g.error(e), g.error(t), r(e);
                                        }
                                    });
                                }
                            else {
                                let e = new d.OpenViduError(
                                    d.OpenViduErrorName.SCREEN_SHARING_NOT_SUPPORTED,
                                    "You can only screen share in desktop Chrome, Firefox, Opera, Safari (>=13.0), Edge (>= 80) or Electron. Detected client: " +
                                        t.getName() +
                                        " " +
                                        t.getVersion(),
                                );
                                return g.error(e), r(e);
                            }
                        else
                            this.setVideoSource(e, s),
                                "screen" === o &&
                                    (g.warn(
                                        'Parameter "audioSource" is set to "screen", which means rquesting audio from screen sharing source. But "videoSource" is not set to "screen". No audio source will be requested',
                                    ),
                                    (e.constraints.audio = !1));
                }
                setVideoSource(e, t) {
                    e.constraints.video || (e.constraints.video = {}), (e.constraints.video.deviceId = { exact: t });
                }
                disconnectCallback() {
                    g.warn("Websocket connection lost"),
                        this.isRoomAvailable()
                            ? this.session.onLostConnection("networkDisconnect")
                            : alert("Connection error. Please reload page.");
                }
                reconnectingCallback() {
                    g.warn("Websocket connection lost (reconnecting)"),
                        this.isRoomAvailable()
                            ? this.session.emitEvent("reconnecting", [])
                            : alert("Connection error. Please reload page.");
                }
                reconnectWebsocketThroughRpcConnectMethod(e) {
                    this.sendRequest("connect", { sessionId: e, reconnect: !0 }, (e, t) => {
                        if (e)
                            if (this.isMasterNodeCrashed()) g.warn("Master Node has crashed!");
                            else {
                                g.error(e);
                                let t = (e, t) => {
                                        g.warn(t),
                                            this.session.onLostConnection(e),
                                            this.jsonRpcClient.close(4101, "Reconnection fault: " + t);
                                    },
                                    i = () => {
                                        -1 === this.life
                                            ? t(
                                                  "networkDisconnect",
                                                  "WS successfully reconnected but the user was already evicted due to timeout",
                                              )
                                            : this.sendRequest(
                                                  "sessionStatus",
                                                  { sessionId: this.session.sessionId },
                                                  (e, i) => {
                                                      null != e
                                                          ? console.error("Error checking session status", e)
                                                          : this.life === i.life
                                                            ? t(
                                                                  "networkDisconnect",
                                                                  "WS successfully reconnected but the user was already evicted due to timeout",
                                                              )
                                                            : t(
                                                                  "nodeCrashed",
                                                                  "WS successfully reconnected to OpenVidu Server but your Master Node crashed",
                                                              );
                                                  },
                                              );
                                    };
                                40007 === e.code &&
                                    "reconnection error" === e.message &&
                                    console.error(
                                        "Invalid RPC sessionId. Client network disconnection or Master Node crash",
                                    ),
                                    i();
                            }
                        else this.jsonRpcClient.resetPing(), this.session.onRecoveredConnection();
                    });
                }
                reconnectedCallback() {
                    if ((g.warn("Websocket reconnected"), this.isRoomAvailable()))
                        if (this.session.connection)
                            this.reconnectWebsocketThroughRpcConnectMethod(this.session.connection.rpcSessionId);
                        else {
                            g.warn("There was no previous connection when running reconnection callback");
                            let e = new s.SessionDisconnectedEvent(this.session, "networkDisconnect");
                            this.session.ee.emitEvent("sessionDisconnected", [e]), e.callDefaultBehavior();
                        }
                    else alert("Connection error. Please reload page.");
                }
                isMasterNodeCrashed() {
                    return this.masterNodeHasCrashed;
                }
                isRoomAvailable() {
                    return (
                        (void 0 !== this.session && this.session instanceof o.Session) ||
                        (g.warn("Session instance not found"), !1)
                    );
                }
                isScreenShare(e) {
                    return "screen" === e || "window" === e || (t.isElectron() && e.startsWith("screen:"));
                }
            };
        },
    }),
    th = (0, I.t)({
        "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/OpenViduInternal/Events/Types/Types.js":
            (e) => {
                Object.defineProperty(e, "__esModule", { value: !0 });
            },
    });
let tm = (0, I.t)({
    "../../node_modules/.pnpm/openvidu-browser@2.32.1/node_modules/openvidu-browser/lib/index.js": (e) => {
        var t =
                (e && e.__createBinding) ||
                (Object.create
                    ? function (e, t, i, n) {
                          void 0 === n && (n = i);
                          var r = Object.getOwnPropertyDescriptor(t, i);
                          (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) &&
                              (r = {
                                  enumerable: !0,
                                  get: function () {
                                      return t[i];
                                  },
                              }),
                              Object.defineProperty(e, n, r);
                      }
                    : function (e, t, i, n) {
                          void 0 === n && (n = i), (e[n] = t[i]);
                      }),
            i =
                (e && e.__exportStar) ||
                function (e, i) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(i, n) || t(i, e, n);
                };
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.EventDispatcher =
                e.ExceptionEventName =
                e.ExceptionEvent =
                e.SpeechToTextEvent =
                e.NetworkQualityLevelChangedEvent =
                e.FilterEvent =
                e.ConnectionPropertyChangedEvent =
                e.StreamPropertyChangedEvent =
                e.VideoElementEvent =
                e.StreamManagerEvent =
                e.StreamEvent =
                e.SignalEvent =
                e.SessionDisconnectedEvent =
                e.RecordingEvent =
                e.PublisherSpeakingEvent =
                e.ConnectionEvent =
                e.Event =
                e.VideoInsertMode =
                e.TypeOfVideo =
                e.OpenViduErrorName =
                e.OpenViduError =
                e.LocalRecorderState =
                e.Filter =
                e.LocalRecorder =
                e.Connection =
                e.Stream =
                e.StreamManager =
                e.Subscriber =
                e.Publisher =
                e.Session =
                e.OpenVidu =
                    void 0);
        let n = R();
        var r = tu();
        Object.defineProperty(e, "OpenVidu", {
            enumerable: !0,
            get: function () {
                return r.OpenVidu;
            },
        });
        var o = e6();
        Object.defineProperty(e, "Session", {
            enumerable: !0,
            get: function () {
                return o.Session;
            },
        });
        var s = e8();
        Object.defineProperty(e, "Publisher", {
            enumerable: !0,
            get: function () {
                return s.Publisher;
            },
        });
        var a = K();
        Object.defineProperty(e, "Subscriber", {
            enumerable: !0,
            get: function () {
                return a.Subscriber;
            },
        });
        var d = X();
        Object.defineProperty(e, "StreamManager", {
            enumerable: !0,
            get: function () {
                return d.StreamManager;
            },
        });
        var c = eF();
        Object.defineProperty(e, "Stream", {
            enumerable: !0,
            get: function () {
                return c.Stream;
            },
        });
        var l = e$();
        Object.defineProperty(e, "Connection", {
            enumerable: !0,
            get: function () {
                return l.Connection;
            },
        });
        var p = j();
        Object.defineProperty(e, "LocalRecorder", {
            enumerable: !0,
            get: function () {
                return p.LocalRecorder;
            },
        });
        var u = $();
        Object.defineProperty(e, "Filter", {
            enumerable: !0,
            get: function () {
                return u.Filter;
            },
        });
        var h = k();
        Object.defineProperty(e, "LocalRecorderState", {
            enumerable: !0,
            get: function () {
                return h.LocalRecorderState;
            },
        });
        var m = F();
        Object.defineProperty(e, "OpenViduError", {
            enumerable: !0,
            get: function () {
                return m.OpenViduError;
            },
        }),
            Object.defineProperty(e, "OpenViduErrorName", {
                enumerable: !0,
                get: function () {
                    return m.OpenViduErrorName;
                },
            });
        var v = ej();
        Object.defineProperty(e, "TypeOfVideo", {
            enumerable: !0,
            get: function () {
                return v.TypeOfVideo;
            },
        });
        var f = J();
        Object.defineProperty(e, "VideoInsertMode", {
            enumerable: !0,
            get: function () {
                return f.VideoInsertMode;
            },
        });
        var g = B();
        Object.defineProperty(e, "Event", {
            enumerable: !0,
            get: function () {
                return g.Event;
            },
        });
        var b = eW();
        Object.defineProperty(e, "ConnectionEvent", {
            enumerable: !0,
            get: function () {
                return b.ConnectionEvent;
            },
        });
        var E = eD();
        Object.defineProperty(e, "PublisherSpeakingEvent", {
            enumerable: !0,
            get: function () {
                return E.PublisherSpeakingEvent;
            },
        });
        var S = ez();
        Object.defineProperty(e, "RecordingEvent", {
            enumerable: !0,
            get: function () {
                return S.RecordingEvent;
            },
        });
        var x = eq();
        Object.defineProperty(e, "SessionDisconnectedEvent", {
            enumerable: !0,
            get: function () {
                return x.SessionDisconnectedEvent;
            },
        });
        var w = eG();
        Object.defineProperty(e, "SignalEvent", {
            enumerable: !0,
            get: function () {
                return w.SignalEvent;
            },
        });
        var y = eX();
        Object.defineProperty(e, "StreamEvent", {
            enumerable: !0,
            get: function () {
                return y.StreamEvent;
            },
        });
        var O = z();
        Object.defineProperty(e, "StreamManagerEvent", {
            enumerable: !0,
            get: function () {
                return O.StreamManagerEvent;
            },
        });
        var I = q();
        Object.defineProperty(e, "VideoElementEvent", {
            enumerable: !0,
            get: function () {
                return I.VideoElementEvent;
            },
        });
        var C = U();
        Object.defineProperty(e, "StreamPropertyChangedEvent", {
            enumerable: !0,
            get: function () {
                return C.StreamPropertyChangedEvent;
            },
        });
        var T = eK();
        Object.defineProperty(e, "ConnectionPropertyChangedEvent", {
            enumerable: !0,
            get: function () {
                return T.ConnectionPropertyChangedEvent;
            },
        });
        var P = eH();
        Object.defineProperty(e, "FilterEvent", {
            enumerable: !0,
            get: function () {
                return P.FilterEvent;
            },
        });
        var N = eY();
        Object.defineProperty(e, "NetworkQualityLevelChangedEvent", {
            enumerable: !0,
            get: function () {
                return N.NetworkQualityLevelChangedEvent;
            },
        });
        var _ = eJ();
        Object.defineProperty(e, "SpeechToTextEvent", {
            enumerable: !0,
            get: function () {
                return _.SpeechToTextEvent;
            },
        });
        var L = G();
        Object.defineProperty(e, "ExceptionEvent", {
            enumerable: !0,
            get: function () {
                return L.ExceptionEvent;
            },
        }),
            Object.defineProperty(e, "ExceptionEventName", {
                enumerable: !0,
                get: function () {
                    return L.ExceptionEventName;
                },
            });
        var V = H();
        Object.defineProperty(e, "EventDispatcher", {
            enumerable: !0,
            get: function () {
                return V.EventDispatcher;
            },
        }),
            i(th(), e),
            n.JL.setOptions({ enabled: !1 });
    },
})();
