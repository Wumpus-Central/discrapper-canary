n.d(t, { Z: () => d });
var r = n(455412),
    a = n(282253),
    i = n(73800),
    o = n(304274),
    c = 'hcaptcha-api-script-id',
    s = 'hcaptchaOnLoad',
    l = [],
    p = function (e) {
        void 0 === e && (e = {});
        var t = (0, o.as)(e.scriptLocation);
        delete e.scriptLocation;
        var n = (0, o.$h)(t),
            r = l.find(function (e) {
                return e.scope === n.window;
            });
        if (n.document.getElementById(c) && r) return r.promise;
        var a = new Promise(function (r, a) {
            n.window[s] = r;
            var i = e.apihost || 'https://js.hcaptcha.com';
            delete e.apihost;
            var l = n.document.createElement('script');
            ((l.id = c),
                (l.src = i + '/1/api.js?render=explicit&onload=' + s),
                (l.async = void 0 === e.loadAsync || e.loadAsync),
                delete e.loadAsync,
                (l.onerror = function (e) {
                    return a('script-error');
                }));
            var p = (0, o.Ku)(e);
            ((l.src += '' !== p ? '&' + p : ''), t.appendChild(l));
        });
        return (
            l.push({
                promise: a,
                scope: n.window
            }),
            a
        );
    };
let d = (function (e) {
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
            (n.ref = i.createRef()),
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
    (0, a.Z)(t, e);
    var n = t.prototype;
    return (
        (n.componentDidMount = function () {
            var e = this,
                t = (0, o.as)(this.props.scriptLocation),
                n = (0, o.$h)(t);
            if (((this._hcaptcha = n.window.hcaptcha || void 0), void 0 !== this._hcaptcha))
                return void this.setState({ isApiReady: !0 }, function () {
                    e.renderCaptcha();
                });
            this.loadCaptcha();
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
            ['sitekey', 'size', 'theme', 'tabindex', 'languageOverride', 'endpoint'].every(function (n) {
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
                (p({
                    apihost: t,
                    assethost: n,
                    endpoint: r,
                    hl: e.languageOverride,
                    host: a,
                    imghost: i,
                    recaptchacompat: !1 === e.reCaptchaCompat ? 'off' : null,
                    reportapi: e.reportapi,
                    sentry: e.sentry,
                    custom: e.custom,
                    loadAsync: e.loadAsync,
                    scriptLocation: e.scriptLocation
                })
                    .then(this.handleOnLoad)
                    .catch(this.handleError),
                    (this.apiScriptRequested = !0));
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
            this.isReady() && t.reset(e);
        }),
        (n.removeCaptcha = function (e) {
            var t = this.state.captchaId,
                n = this._hcaptcha;
            this.isReady() &&
                this.setState({ isRemoved: !0 }, function () {
                    (n.remove(t), e && e());
                });
        }),
        (n.handleOnLoad = function () {
            var e = this;
            this.setState({ isApiReady: !0 }, function () {
                var t = (0, o.as)(e.props.scriptLocation);
                ((e._hcaptcha = (0, o.$h)(t).window.hcaptcha),
                    e.renderCaptcha(function () {
                        var t = e.props.onLoad;
                        t && t();
                    }));
            });
        }),
        (n.handleSubmit = function (e) {
            var t = this.props.onVerify,
                n = this.state,
                r = n.isRemoved,
                a = n.captchaId,
                i = this._hcaptcha;
            if (void 0 !== i && !r) {
                var o = i.getResponse(a),
                    c = i.getRespKey(a);
                t && t(o, c);
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
            (this.isReady() && r.reset(n), t && t(e));
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
            if (this.isReady()) return (e && 'object' != typeof e && (e = null), n.execute(t, e));
        }),
        (n.setData = function (e) {
            var t = this.state.captchaId,
                n = this._hcaptcha;
            this.isReady() && (e && 'object' != typeof e && (e = null), n.setData(t, e));
        }),
        (n.getResponse = function () {
            return this._hcaptcha.getResponse(this.state.captchaId);
        }),
        (n.getRespKey = function () {
            return this._hcaptcha.getRespKey(this.state.captchaId);
        }),
        (n.render = function () {
            var e = this.state.elementId;
            return i.createElement('div', {
                ref: this.ref,
                id: e
            });
        }),
        t
    );
})(i.Component);
