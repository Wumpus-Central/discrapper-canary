n.d(t, {
    Dz: function () {
        return p;
    },
    Nj: function () {
        return E;
    },
    RS: function () {
        return N;
    },
    by: function () {
        return h;
    },
    eI: function () {
        return u;
    },
    f6: function () {
        return m;
    },
    i0: function () {
        return f;
    },
    ib: function () {
        return d;
    },
    og: function () {
        return y;
    }
}),
    n(411104),
    n(47120);
var a = n(544891),
    r = n(570140),
    l = n(618541),
    s = n(751767),
    i = n(358085),
    o = n(355467),
    c = n(981631);
function u() {
    (0, s.S)().then((e) => {
        e.client
            .create({ authorization: c.Ai1.BRAINTREE.KEY })
            .then((e) => {
                r.Z.dispatch({
                    type: 'BRAINTREE_CREATE_CLIENT_SUCCESS',
                    client: e
                }),
                    p(),
                    d();
            })
            .catch(() => r.Z.dispatch({ type: 'BRAINTREE_CREATE_CLIENT_FAIL' }));
    });
}
function d() {
    let e = l.Z.getClient();
    if (null == e) throw Error('Braintree client must be initialized before creating Venmo client.');
    (0, s.S)().then((t) => {
        t.venmo
            .create({
                client: e,
                allowDesktop: !0,
                paymentMethodUsage: 'multi_use'
            })
            .then((e) => {
                r.Z.dispatch({
                    type: 'BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS',
                    venmoClient: e
                });
            })
            .catch(() => {
                r.Z.dispatch({ type: 'BRAINTREE_CREATE_VENMO_CLIENT_FAIL' });
            });
    });
}
function p() {
    let e = l.Z.getClient();
    if (null == e) throw Error('braintree client must be initialized before calling this');
    (0, s.S)().then((t) => {
        t.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth) throw Error('braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?');
                (e._navigateFrameToAuth = function (e) {
                    let t = this._formatPaymentResourceData(e);
                    return a.tn
                        .post({
                            url: c.ANM.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
                            oldFormErrors: !0,
                            body: {
                                return_url: t.returnUrl,
                                cancel_url: t.cancelUrl
                            },
                            rejectWithError: !1
                        })
                        .then((e) => {
                            let {
                                body: { token: t }
                            } = e;
                            this._frameService.redirect(
                                (function (e) {
                                    let t = c.Ai1.BRAINTREE.KEY.startsWith('production_') ? 'https://www.paypal.com' : 'https://sandbox.paypal.com';
                                    return ''.concat(t, '/agreements/approve?nolegacy=1&ba_token=').concat(e);
                                })(t)
                            );
                        })
                        .catch((e) => (this._frameService.close(), (this._authorizationInProgress = !1), Promise.reject(Error(e.body && e.body.message))));
                }),
                    r.Z.dispatch({
                        type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS',
                        paypalClient: e
                    });
            })
            .catch(() => r.Z.dispatch({ type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL' }));
    });
}
function m() {
    let e = l.Z.getPayPalClient();
    if (null == e) throw Error('braintree paypal client must be initialized before calling this');
    r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' });
    let t = Promise.resolve('');
    (0, i.isDesktop)() && (t = (0, o.EH)(c.HeQ.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: 'vault' }))
            .then((e) => {
                let { email: t, firstName: n, lastName: a, billingAddress: l } = e.details;
                r.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_PAYPAL_SUCCESS',
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: ''.concat(n, ' ').concat(a),
                        line1: l.line1,
                        line2: l.line2,
                        city: l.city,
                        state: l.state,
                        country: l.countryCode,
                        postalCode: l.postalCode
                    }
                });
            })
            .catch((e) => {
                let { message: t, code: n } = e;
                n === c.U66.PAYPAL_POPUP_CLOSED || null == n
                    ? r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED' })
                    : r.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL',
                          message: t,
                          code: n
                      });
            });
}
function h() {
    let e = l.Z.getVenmoClient();
    if (null == e) throw Error('Braintree Venmo client must be initialized before calling tokenize.');
    r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_START' }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                r.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_VENMO_SUCCESS',
                    nonce: e.nonce,
                    username: t
                });
            })
            .catch((e) => {
                let { message: t, code: n } = e;
                n === c.U66.VENMO_APP_CANCELED || n === c.U66.VENMO_CANCELED
                    ? r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED' })
                    : r.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_VENMO_FAIL',
                          message: t,
                          code: n
                      });
            });
}
function A(e, t) {
    if (null == e) return Promise.resolve();
    r.Z.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
function E() {
    return A(l.Z.getPayPalClient(), { type: 'BRAINTREE_TEARDOWN_PAYPAL_CLIENT' });
}
function N() {
    return A(l.Z.getVenmoClient(), { type: 'BRAINTREE_TEARDOWN_VENMO_CLIENT' });
}
function f() {
    let e = l.Z.getLastURL();
    null == e ? m() : (r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' }), window.open(e));
}
function y() {
    h();
}
