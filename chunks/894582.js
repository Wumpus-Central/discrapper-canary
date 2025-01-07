var r = n(987609),
    i = n(190031),
    a = n(192379),
    c = n(616295),
    o = 'hcaptcha-api-script-id',
    s = 'hcaptchaOnLoad',
    p = [],
    d = function (e) {
        void 0 === e && (e = {});
        var t = (0, c.as)(e.scriptLocation);
        delete e.scriptLocation;
        var n = (0, c.$h)(t),
            r = p.find(function (e) {
                return e.scope === n.window;
            });
        if (n.document.getElementById(o) && r) return r.promise;
        var i = new Promise(function (r, i) {
            n.window[s] = r;
            var a = e.apihost || 'https://js.hcaptcha.com';
            delete e.apihost;
            var p = n.document.createElement('script');
            (p.id = o),
                (p.src = a + '/1/api.js?render=explicit&onload=' + s),
                (p.async = void 0 === e.loadAsync || e.loadAsync),
                delete e.loadAsync,
                (p.onerror = function (e) {
                    return i('script-error');
                });
            var d = (0, c.Ku)(e);
            (p.src += '' !== d ? '&' + d : ''), t.appendChild(p);
        });
        return (
            p.push({
                promise: i,
                scope: n.window
            }),
            i
        );
    },
    l = (function (e) {
        function t(t) {
            var n;
            return (
                ((n = e.call(this, t) || this)._hcaptcha = void 0),
                (n.renderCaptcha = n.renderCaptcha.bind((0, r.Z)(n))),
                (n.resetCaptcha = n.resetCaptcha.bind((0, r.Z)(n))),
                (n.removeCaptcha = n.removeCaptcha.bind((0, r.Z)(n))),
                (n.isReady = n.isReady.bind((0, r.Z)(n))),
                (n.loadCaptcha = n.loadCaptcha.bind((0, r.Z)(n))),
                (n.handleOnLoad = n.handleOnLoad.bind((0, r.Z)(n))),
                (n.handleSubmit = n.handleSubmit.bind((0, r.Z)(n))),
                (n.handleExpire = n.handleExpire.bind((0, r.Z)(n))),
                (n.handleError = n.handleError.bind((0, r.Z)(n))),
                (n.handleOpen = n.handleOpen.bind((0, r.Z)(n))),
                (n.handleClose = n.handleClose.bind((0, r.Z)(n))),
                (n.handleChallengeExpired = n.handleChallengeExpired.bind((0, r.Z)(n))),
                (n.ref = a.createRef()),
                (n.apiScriptRequested = !1),
                (n.state = {
                    isApiReady: !1,
                    isRemoved: !1,
                    elementId: t.id,
                    captchaId: ''
                }),
                n
            );
        }
        (0, i.Z)(t, e);
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                var e = this,
                    t = (0, c.as)(this.props.scriptLocation),
                    n = (0, c.$h)(t);
                if (((this._hcaptcha = n.window.hcaptcha || void 0), void 0 !== this._hcaptcha)) {
                    this.setState({ isApiReady: !0 }, function () {
                        e.renderCaptcha();
                    });
                    return;
                }
                this.loadCaptcha();
            }),
            (n.componentWillUnmount = function () {
                var e = this.state.captchaId,
                    t = this._hcaptcha;
                if (!!this.isReady()) t.reset(e), t.remove(e);
            }),
            (n.shouldComponentUpdate = function (e, t) {
                return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved && !0;
            }),
            (n.componentDidUpdate = function (e) {
                var t = this;
                !['sitekey', 'size', 'theme', 'tabindex', 'languageOverride', 'endpoint'].every(function (n) {
                    return e[n] === t.props[n];
                }) &&
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
                        i = e.host,
                        a = e.imghost,
                        c = e.languageOverride,
                        o = e.reCaptchaCompat,
                        s = e.reportapi,
                        p = e.sentry,
                        l = e.custom,
                        u = e.loadAsync,
                        h = e.scriptLocation;
                    d({
                        apihost: t,
                        assethost: n,
                        endpoint: r,
                        hl: c,
                        host: i,
                        imghost: a,
                        recaptchacompat: !1 === o ? 'off' : null,
                        reportapi: s,
                        sentry: p,
                        custom: l,
                        loadAsync: u,
                        scriptLocation: h
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
                                'open-callback': this.handleOpen,
                                'close-callback': this.handleClose,
                                'error-callback': this.handleError,
                                'chalexpired-callback': this.handleChallengeExpired,
                                'expired-callback': this.handleExpire,
                                callback: this.handleSubmit
                            },
                            this.props,
                            {
                                hl: this.props.hl || this.props.languageOverride,
                                languageOverride: void 0
                            }
                        ),
                        n = this._hcaptcha.render(this.ref.current, t);
                    this.setState(
                        {
                            isRemoved: !1,
                            captchaId: n
                        },
                        function () {
                            e && e();
                        }
                    );
                }
            }),
            (n.resetCaptcha = function () {
                var e = this.state.captchaId,
                    t = this._hcaptcha;
                if (!!this.isReady()) t.reset(e);
            }),
            (n.removeCaptcha = function (e) {
                var t = this.state.captchaId,
                    n = this._hcaptcha;
                if (!!this.isReady())
                    this.setState({ isRemoved: !0 }, function () {
                        n.remove(t), e && e();
                    });
            }),
            (n.handleOnLoad = function () {
                var e = this;
                this.setState({ isApiReady: !0 }, function () {
                    var t = (0, c.as)(e.props.scriptLocation),
                        n = (0, c.$h)(t);
                    (e._hcaptcha = n.window.hcaptcha),
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
                    i = n.captchaId,
                    a = this._hcaptcha;
                if (void 0 !== a && !r) {
                    var c = a.getResponse(i),
                        o = a.getRespKey(i);
                    t && t(c, o);
                }
            }),
            (n.handleExpire = function () {
                var e = this.props.onExpire,
                    t = this.state.captchaId,
                    n = this._hcaptcha;
                if (!!this.isReady()) n.reset(t), e && e();
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
                if (!!this.isReady() && !!this.props.onOpen) this.props.onOpen();
            }),
            (n.handleClose = function () {
                if (!!this.isReady() && !!this.props.onClose) this.props.onClose();
            }),
            (n.handleChallengeExpired = function () {
                if (!!this.isReady() && !!this.props.onChalExpired) this.props.onChalExpired();
            }),
            (n.execute = function (e) {
                void 0 === e && (e = null);
                var t = this.state.captchaId,
                    n = this._hcaptcha;
                if (!!this.isReady()) return e && 'object' != typeof e && (e = null), n.execute(t, e);
            }),
            (n.setData = function (e) {
                var t = this.state.captchaId,
                    n = this._hcaptcha;
                if (!!this.isReady()) e && 'object' != typeof e && (e = null), n.setData(t, e);
            }),
            (n.getResponse = function () {
                return this._hcaptcha.getResponse(this.state.captchaId);
            }),
            (n.getRespKey = function () {
                return this._hcaptcha.getRespKey(this.state.captchaId);
            }),
            (n.render = function () {
                var e = this.state.elementId;
                return a.createElement('div', {
                    ref: this.ref,
                    id: e
                });
            }),
            t
        );
    })(a.Component);
t.Z = l;
