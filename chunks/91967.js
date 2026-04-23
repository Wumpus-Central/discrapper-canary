let r, a;
n.d(t, { default: () => $ });
var i = n(627968),
    c = n(64700),
    o = n(503698),
    s = n.n(o),
    d = n(772707),
    l = n(231723),
    p = n(289873),
    h = n(954571),
    u = n(625494),
    f = n(964486),
    m = n(888548),
    v = n(652215);
n(321073);
var y = n(527758),
    E = n(47312);
function C(e) {
    var t = (e && e.ownerDocument) || document,
        n = t.defaultView || t.parentWindow || window;
    return { document: t, window: n };
}
function b(e) {
    return e || document.head;
}
var w = "hcaptcha-api-script-id",
    A = "hcaptchaOnLoad",
    g = [],
    R = function (e) {
        void 0 === e && (e = {});
        var t = b(e.scriptLocation);
        delete e.scriptLocation;
        var n = C(t),
            r = g.find(function (e) {
                return e.scope === n.window;
            });
        if (n.document.getElementById(w) && r) return r.promise;
        var a = new Promise(function (r, a) {
            n.window[A] = r;
            var i = e.apihost || "https://js.hcaptcha.com";
            delete e.apihost;
            var c = n.document.createElement("script");
            (c.id = w),
                (c.src = i + "/1/api.js?render=explicit&onload=" + A),
                (c.async = void 0 === e.loadAsync || e.loadAsync),
                delete e.loadAsync,
                (c.onerror = function (e) {
                    return a("script-error");
                });
            var o = Object.entries(e)
                .filter(function (e) {
                    e[0];
                    var t = e[1];
                    return t || !1 === t;
                })
                .map(function (e) {
                    var t = e[0],
                        n = e[1];
                    return encodeURIComponent(t) + "=" + encodeURIComponent(n);
                })
                .join("&");
            (c.src += "" !== o ? "&" + o : ""), t.appendChild(c);
        });
        return g.push({ promise: a, scope: n.window }), a;
    },
    _ = (function (e) {
        function t(t) {
            var n;
            return (
                ((n = e.call(this, t) || this)._hcaptcha = void 0),
                (n.renderCaptcha = n.renderCaptcha.bind((0, y.A)(n))),
                (n.resetCaptcha = n.resetCaptcha.bind((0, y.A)(n))),
                (n.removeCaptcha = n.removeCaptcha.bind((0, y.A)(n))),
                (n.isReady = n.isReady.bind((0, y.A)(n))),
                (n.loadCaptcha = n.loadCaptcha.bind((0, y.A)(n))),
                (n.handleOnLoad = n.handleOnLoad.bind((0, y.A)(n))),
                (n.handleSubmit = n.handleSubmit.bind((0, y.A)(n))),
                (n.handleExpire = n.handleExpire.bind((0, y.A)(n))),
                (n.handleError = n.handleError.bind((0, y.A)(n))),
                (n.handleOpen = n.handleOpen.bind((0, y.A)(n))),
                (n.handleClose = n.handleClose.bind((0, y.A)(n))),
                (n.handleChallengeExpired = n.handleChallengeExpired.bind((0, y.A)(n))),
                (n.ref = c.createRef()),
                (n.apiScriptRequested = !1),
                (n.state = { isApiReady: !1, isRemoved: !1, elementId: t.id, captchaId: "" }),
                n
            );
        }
        (0, E.A)(t, e);
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                var e = this,
                    t = C(b(this.props.scriptLocation));
                ((this._hcaptcha = t.window.hcaptcha || void 0), void 0 !== this._hcaptcha)
                    ? this.setState({ isApiReady: !0 }, function () {
                          e.renderCaptcha();
                      })
                    : this.loadCaptcha();
            }),
            (n.componentWillUnmount = function () {
                var e = this.state.captchaId,
                    t = this._hcaptcha;
                this.isReady() && (t.reset(e), t.remove(e));
            }),
            (n.shouldComponentUpdate = function (e, t) {
                return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved;
            }),
            (n.componentDidUpdate = function (e) {
                var t = this;
                ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function (n) {
                    return e[n] === t.props[n];
                }) ||
                    this.removeCaptcha(function () {
                        t.renderCaptcha();
                    });
            }),
            (n.loadCaptcha = function () {
                if (!this.apiScriptRequested) {
                    var e = this.props,
                        t = e.apihost,
                        n = e.assethost,
                        r = e.endpoint,
                        a = e.host,
                        i = e.imghost;
                    R({
                        apihost: t,
                        assethost: n,
                        endpoint: r,
                        hl: e.languageOverride,
                        host: a,
                        imghost: i,
                        recaptchacompat: !1 === e.reCaptchaCompat ? "off" : null,
                        reportapi: e.reportapi,
                        sentry: e.sentry,
                        custom: e.custom,
                        loadAsync: e.loadAsync,
                        scriptLocation: e.scriptLocation,
                    })
                        .then(this.handleOnLoad)
                        .catch(this.handleError),
                        (this.apiScriptRequested = !0);
                }
            }),
            (n.renderCaptcha = function (e) {
                if (this.state.isApiReady) {
                    var t = Object.assign(
                            {
                                "open-callback": this.handleOpen,
                                "close-callback": this.handleClose,
                                "error-callback": this.handleError,
                                "chalexpired-callback": this.handleChallengeExpired,
                                "expired-callback": this.handleExpire,
                                callback: this.handleSubmit,
                            },
                            this.props,
                            { hl: this.props.hl || this.props.languageOverride, languageOverride: void 0 },
                        ),
                        n = this._hcaptcha.render(this.ref.current, t);
                    this.setState({ isRemoved: !1, captchaId: n }, function () {
                        e && e();
                    });
                }
            }),
            (n.resetCaptcha = function () {
                var e = this.state.captchaId,
                    t = this._hcaptcha;
                this.isReady() && t.reset(e);
            }),
            (n.removeCaptcha = function (e) {
                var t = this.state.captchaId,
                    n = this._hcaptcha;
                this.isReady() &&
                    this.setState({ isRemoved: !0 }, function () {
                        n.remove(t), e && e();
                    });
            }),
            (n.handleOnLoad = function () {
                var e = this;
                this.setState({ isApiReady: !0 }, function () {
                    var t = C(b(e.props.scriptLocation));
                    (e._hcaptcha = t.window.hcaptcha),
                        e.renderCaptcha(function () {
                            var t = e.props.onLoad;
                            t && t();
                        });
                });
            }),
            (n.handleSubmit = function (e) {
                var t = this.props.onVerify,
                    n = this.state,
                    r = n.isRemoved,
                    a = n.captchaId,
                    i = this._hcaptcha;
                if (void 0 !== i && !r) {
                    var c = i.getResponse(a),
                        o = i.getRespKey(a);
                    t && t(c, o);
                }
            }),
            (n.handleExpire = function () {
                var e = this.props.onExpire,
                    t = this.state.captchaId,
                    n = this._hcaptcha;
                this.isReady() && (n.reset(t), e && e());
            }),
            (n.handleError = function (e) {
                var t = this.props.onError,
                    n = this.state.captchaId,
                    r = this._hcaptcha;
                this.isReady() && r.reset(n), t && t(e);
            }),
            (n.isReady = function () {
                var e = this.state,
                    t = e.isApiReady,
                    n = e.isRemoved;
                return t && !n;
            }),
            (n.handleOpen = function () {
                this.isReady() && this.props.onOpen && this.props.onOpen();
            }),
            (n.handleClose = function () {
                this.isReady() && this.props.onClose && this.props.onClose();
            }),
            (n.handleChallengeExpired = function () {
                this.isReady() && this.props.onChalExpired && this.props.onChalExpired();
            }),
            (n.execute = function (e) {
                void 0 === e && (e = null);
                var t = this.state.captchaId,
                    n = this._hcaptcha;
                if (this.isReady()) return e && "object" != typeof e && (e = null), n.execute(t, e);
            }),
            (n.setData = function (e) {
                var t = this.state.captchaId,
                    n = this._hcaptcha;
                this.isReady() && (e && "object" != typeof e && (e = null), n.setData(t, e));
            }),
            (n.getResponse = function () {
                return this._hcaptcha.getResponse(this.state.captchaId);
            }),
            (n.getRespKey = function () {
                return this._hcaptcha.getRespKey(this.state.captchaId);
            }),
            (n.render = function () {
                var e = this.state.elementId;
                return c.createElement("div", { ref: this.ref, id: e });
            }),
            t
        );
    })(c.Component),
    x = n(3745),
    k = n(132500);
let S = "turnstile-script",
    I = "turnstileOnLoad",
    L = "unloaded",
    O = j();
function j() {
    return new Promise((e, t) => {
        (r = e), (a = t);
    });
}
function P() {
    Reflect.deleteProperty(window, I);
}
function T() {
    "ready" !== L && null != window.turnstile && ((L = "ready"), P(), r?.());
}
let D = {
    normal: { width: 300, height: 65 },
    compact: { width: 150, height: 140 },
    invisible: { width: 0, height: 0, overflow: "hidden" },
};
function N(e) {
    let { sitekey: t, theme: n, size: r, onLoad: o, onVerify: s, onError: d, onExpire: l } = e,
        p = c.useRef(null),
        h = c.useRef(null),
        u = c.useRef({ onLoad: o, onVerify: s, onError: d, onExpire: l });
    (u.current = { onLoad: o, onVerify: s, onError: d, onExpire: l }),
        c.useEffect(() => {
            let e = !1;
            return (
                (function () {
                    if (null != window.turnstile) return T(), O;
                    if (
                        ("unloaded" === L &&
                            ((L = "loading"),
                            Object.assign(window, {
                                [I]() {
                                    T();
                                },
                            })),
                        null == document.getElementById(S))
                    ) {
                        let e = document.createElement("script");
                        (e.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${I}&render=explicit`),
                            (e.id = S),
                            (e.async = !0),
                            (e.defer = !0),
                            (e.onerror = () => {
                                !(function (e) {
                                    if ("ready" === L) return;
                                    (L = "unloaded"), P(), document.getElementById(S)?.remove();
                                    let t = a;
                                    (O = j()), t?.(e ?? Error("Turnstile script failed to load"));
                                })(Error("Turnstile script failed to load"));
                            }),
                            document.body.appendChild(e);
                    }
                    return O;
                })()
                    .then(() => {
                        if (e || null == p.current || null == window.turnstile) return;
                        let a = "invisible" === r ? "normal" : (r ?? "normal");
                        (h.current = window.turnstile.render(p.current, {
                            sitekey: t,
                            theme: n ?? "auto",
                            size: a,
                            callback: (e) => {
                                u.current.onVerify(e);
                            },
                            "error-callback": () => {
                                u.current.onError?.();
                            },
                            "expired-callback": () => {
                                u.current.onExpire?.();
                            },
                        })),
                            u.current.onLoad?.();
                    })
                    .catch(() => {
                        e || u.current.onError?.();
                    }),
                () => {
                    (e = !0),
                        null != h.current &&
                            null != window.turnstile &&
                            (window.turnstile.remove(h.current), (h.current = null));
                }
            );
        }, [t, n, r]);
    let f = D[r ?? "normal"];
    return (0, i.jsx)("div", { ref: p, style: f });
}
var M = n(731738),
    V = n(319400),
    H = n(831062),
    z = n(700525);
let K = new Set([
        "rate-limited",
        "network-error",
        "invalid-data",
        "challenge-error",
        "challenge-closed",
        "challenge-expired",
        "missing-captcha",
        "invalid-captcha-id",
        "internal-error",
        "script-error",
    ]),
    q = (e) => {
        let {
                captchaService: t = V.MS.RECAPTCHA,
                sitekey: n,
                rqdata: r,
                onRender: a,
                onVerify: o,
                onError: s,
                onOpen: d,
                onClose: l,
                onChalExpired: p,
                size: u,
                userflow: f,
                ...y
            } = e,
            E = c.useRef(null),
            C = (0, k.A)(),
            [b, w] = c.useState(!1),
            A = c.useCallback(
                (e) => {
                    h.default.track(v.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: t,
                        sitekey: n,
                        captcha_flow_key: C,
                    });
                },
                [C, t, n],
            ),
            g = c.useCallback(
                (e, n) => {
                    let r = [`event_name:${e}`, `captcha_service:${t}`];
                    null != n && r.push(`error_code:${n}`), H.A.increment({ name: M.K.CAPTCHA_EVENT, tags: r });
                },
                [t],
            ),
            R = c.useCallback(() => {
                t === V.MS.HCAPTCHA &&
                    (null != r && "" !== r && null != E.current && E.current?.setData({ rqdata: r }),
                    "invisible" === u && null != E.current && E.current?.execute());
            }, [r, E, u, t]),
            S = c.useCallback(() => {
                b || (A("initial-load"), g("initial-load"), w(!0)), R();
            }, [g, b, A, R]);
        c.useEffect(() => {
            R();
        }, [R]),
            c.useEffect(() => {
                S();
            }, [S]);
        let I = c.useCallback(
                (e) => {
                    A("error"), g("error", null != e && K.has(e) ? e : "unknown"), R(), s?.();
                },
                [A, g, R, s],
            ),
            L = c.useCallback(
                (e) => {
                    A("verify"), g("verify"), o(e);
                },
                [g, o, A],
            ),
            O = c.useCallback(() => {
                A("render"), (0, m.emitCaptchaDistributionMetric)(f), a?.();
            }, [a, A, f]),
            j = c.useCallback(() => {
                A("open"), g("open"), (0, m.emitCaptchaDistributionMetric)(f), d?.();
            }, [g, d, A, f]),
            P = c.useCallback(() => {
                A("close"), g("cancel"), l?.(), R();
            }, [l, A, g, R]),
            T = c.useCallback(() => {
                A("chal-expire"), g("chal-expire"), p?.();
            }, [p, A, g]);
        return ((null == n || "" === n) && (n = v._Ak), t === V.MS.RECAPTCHA)
            ? (0, i.jsx)(x.A, { ...y, onLoad: S, onRender: O, onVerify: L, onError: I, sitekey: n })
            : t === V.MS.RECAPTCHA_ENTERPRISE
              ? (0, i.jsx)(z.d, { ...y, onLoad: S, onRender: O, onVerify: L, onError: I, sitekey: n, action: f })
              : t === V.MS.HCAPTCHA
                ? (0, i.jsx)(_, {
                      ref: E,
                      ...y,
                      sitekey: n,
                      onLoad: S,
                      onError: I,
                      onVerify: L,
                      onChalExpired: T,
                      onOpen: j,
                      onClose: P,
                      size: u,
                      reCaptchaCompat: !1,
                  })
                : t === V.MS.TURNSTILE
                  ? (0, i.jsx)(N, {
                        sitekey: n,
                        theme: y.theme,
                        size: u,
                        onLoad: S,
                        onVerify: L,
                        onError: I,
                        onExpire: T,
                    })
                  : (0, i.jsx)(x.A, { ...y, sitekey: n, onLoad: S, onRender: O, onVerify: L, onError: I });
    };
var G = n(985018),
    U = n(846762);
let B = new Set([l.ip.ENTERING, l.ip.ENTERED]);
function $(e) {
    let {
            onClose: t,
            onCaptchaVerify: n,
            onReject: r,
            transitionState: a,
            headerText: o,
            bodyText: l,
            rqtoken: y,
            serveInvisible: E,
            ...C
        } = e,
        b = (function (e) {
            let { onReject: t, analyticsType: n = "Guild Join Captcha" } = e,
                r = c.useRef(!0);
            return (
                (0, f.Ay)(() => () => {
                    r.current && t?.(m.CaptchaError.CANCEL);
                }),
                c.useEffect(
                    () => (
                        h.default.track(v.HAw.OPEN_MODAL, { type: n }),
                        () => {
                            r.current && h.default.track(v.HAw.MODAL_DISMISSED, { type: n });
                        }
                    ),
                    [n],
                ),
                () => {
                    r.current = !1;
                }
            );
        })({ onReject: r });
    if (
        (c.useEffect(() => {
            u._.subscribe(v.jej.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        c.useEffect(() => {
            h.default.track(v.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == a || !B.has(a))
    )
        return null;
    let w = (0, i.jsxs)("div", {
        className: s()(U.GC, U.P),
        children: [
            E && (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
            (0, i.jsx)(q, {
                size: E ? "invisible" : void 0,
                onVerify: (e) => {
                    b(), n(e, y), t();
                },
                onClose: E ? t : void 0,
                ...C,
            }),
        ],
    });
    return (0, i.jsx)(d.k, {
        transitionState: a,
        onClose: t,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: "/assets/a1c385fb82c39bab.svg" },
        title: o ?? G.intl.string(G.t.FpoiHe),
        subtitle: l ?? G.intl.string(G.t["/CidxO"]),
        children: w,
    });
}
