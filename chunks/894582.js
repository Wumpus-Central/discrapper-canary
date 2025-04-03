r.d(t, { Z: () => u });
var n = r(987609),
    a = r(190031),
    i = r(192379),
    c = r(616295),
    o = 'hcaptcha-api-script-id',
    s = 'hcaptchaOnLoad',
    p = [],
    l = function (e) {
        void 0 === e && (e = {});
        var t = (0, c.as)(e.scriptLocation);
        delete e.scriptLocation;
        var r = (0, c.$h)(t),
            n = p.find(function (e) {
                return e.scope === r.window;
            });
        if (r.document.getElementById(o) && n) return n.promise;
        var a = new Promise(function (n, a) {
            r.window[s] = n;
            var i = e.apihost || 'https://js.hcaptcha.com';
            delete e.apihost;
            var p = r.document.createElement('script');
            (p.id = o),
                (p.src = i + '/1/api.js?render=explicit&onload=' + s),
                (p.async = void 0 === e.loadAsync || e.loadAsync),
                delete e.loadAsync,
                (p.onerror = function (e) {
                    return a('script-error');
                });
            var l = (0, c.Ku)(e);
            (p.src += '' !== l ? '&' + l : ''), t.appendChild(p);
        });
        return (
            p.push({
                promise: a,
                scope: r.window
            }),
            a
        );
    };
let u = (function (e) {
    function t(t) {
        var r;
        return (
            ((r = e.call(this, t) || this)._hcaptcha = void 0),
            (r.renderCaptcha = r.renderCaptcha.bind((0, n.Z)(r))),
            (r.resetCaptcha = r.resetCaptcha.bind((0, n.Z)(r))),
            (r.removeCaptcha = r.removeCaptcha.bind((0, n.Z)(r))),
            (r.isReady = r.isReady.bind((0, n.Z)(r))),
            (r.loadCaptcha = r.loadCaptcha.bind((0, n.Z)(r))),
            (r.handleOnLoad = r.handleOnLoad.bind((0, n.Z)(r))),
            (r.handleSubmit = r.handleSubmit.bind((0, n.Z)(r))),
            (r.handleExpire = r.handleExpire.bind((0, n.Z)(r))),
            (r.handleError = r.handleError.bind((0, n.Z)(r))),
            (r.handleOpen = r.handleOpen.bind((0, n.Z)(r))),
            (r.handleClose = r.handleClose.bind((0, n.Z)(r))),
            (r.handleChallengeExpired = r.handleChallengeExpired.bind((0, n.Z)(r))),
            (r.ref = i.createRef()),
            (r.apiScriptRequested = !1),
            (r.state = {
                isApiReady: !1,
                isRemoved: !1,
                elementId: t.id,
                captchaId: ''
            }),
            r
        );
    }
    (0, a.Z)(t, e);
    var r = t.prototype;
    return (
        (r.componentDidMount = function () {
            var e = this,
                t = (0, c.as)(this.props.scriptLocation),
                r = (0, c.$h)(t);
            if (((this._hcaptcha = r.window.hcaptcha || void 0), void 0 !== this._hcaptcha))
                return void this.setState({ isApiReady: !0 }, function () {
                    e.renderCaptcha();
                });
            this.loadCaptcha();
        }),
        (r.componentWillUnmount = function () {
            var e = this.state.captchaId,
                t = this._hcaptcha;
            this.isReady() && (t.reset(e), t.remove(e));
        }),
        (r.shouldComponentUpdate = function (e, t) {
            return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved;
        }),
        (r.componentDidUpdate = function (e) {
            var t = this;
            ['sitekey', 'size', 'theme', 'tabindex', 'languageOverride', 'endpoint'].every(function (r) {
                return e[r] === t.props[r];
            }) ||
                this.removeCaptcha(function () {
                    t.renderCaptcha();
                });
        }),
        (r.loadCaptcha = function () {
            if (!this.apiScriptRequested) {
                var e = this.props,
                    t = e.apihost,
                    r = e.assethost,
                    n = e.endpoint,
                    a = e.host,
                    i = e.imghost;
                l({
                    apihost: t,
                    assethost: r,
                    endpoint: n,
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
                    (this.apiScriptRequested = !0);
            }
        }),
        (r.renderCaptcha = function (e) {
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
                    r = this._hcaptcha.render(this.ref.current, t);
                this.setState(
                    {
                        isRemoved: !1,
                        captchaId: r
                    },
                    function () {
                        e && e();
                    }
                );
            }
        }),
        (r.resetCaptcha = function () {
            var e = this.state.captchaId,
                t = this._hcaptcha;
            this.isReady() && t.reset(e);
        }),
        (r.removeCaptcha = function (e) {
            var t = this.state.captchaId,
                r = this._hcaptcha;
            this.isReady() &&
                this.setState({ isRemoved: !0 }, function () {
                    r.remove(t), e && e();
                });
        }),
        (r.handleOnLoad = function () {
            var e = this;
            this.setState({ isApiReady: !0 }, function () {
                var t = (0, c.as)(e.props.scriptLocation);
                (e._hcaptcha = (0, c.$h)(t).window.hcaptcha),
                    e.renderCaptcha(function () {
                        var t = e.props.onLoad;
                        t && t();
                    });
            });
        }),
        (r.handleSubmit = function (e) {
            var t = this.props.onVerify,
                r = this.state,
                n = r.isRemoved,
                a = r.captchaId,
                i = this._hcaptcha;
            if (void 0 !== i && !n) {
                var c = i.getResponse(a),
                    o = i.getRespKey(a);
                t && t(c, o);
            }
        }),
        (r.handleExpire = function () {
            var e = this.props.onExpire,
                t = this.state.captchaId,
                r = this._hcaptcha;
            this.isReady() && (r.reset(t), e && e());
        }),
        (r.handleError = function (e) {
            var t = this.props.onError,
                r = this.state.captchaId,
                n = this._hcaptcha;
            this.isReady() && n.reset(r), t && t(e);
        }),
        (r.isReady = function () {
            var e = this.state,
                t = e.isApiReady,
                r = e.isRemoved;
            return t && !r;
        }),
        (r.handleOpen = function () {
            this.isReady() && this.props.onOpen && this.props.onOpen();
        }),
        (r.handleClose = function () {
            this.isReady() && this.props.onClose && this.props.onClose();
        }),
        (r.handleChallengeExpired = function () {
            this.isReady() && this.props.onChalExpired && this.props.onChalExpired();
        }),
        (r.execute = function (e) {
            void 0 === e && (e = null);
            var t = this.state.captchaId,
                r = this._hcaptcha;
            if (this.isReady()) return e && 'object' != typeof e && (e = null), r.execute(t, e);
        }),
        (r.setData = function (e) {
            var t = this.state.captchaId,
                r = this._hcaptcha;
            this.isReady() && (e && 'object' != typeof e && (e = null), r.setData(t, e));
        }),
        (r.getResponse = function () {
            return this._hcaptcha.getResponse(this.state.captchaId);
        }),
        (r.getRespKey = function () {
            return this._hcaptcha.getRespKey(this.state.captchaId);
        }),
        (r.render = function () {
            var e = this.state.elementId;
            return i.createElement('div', {
                ref: this.ref,
                id: e
            });
        }),
        t
    );
})(i.Component);
