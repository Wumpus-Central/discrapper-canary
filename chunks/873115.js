r.d(n, {
    Dz: function () {
        return E;
    },
    Nj: function () {
        return I;
    },
    RS: function () {
        return T;
    },
    by: function () {
        return y;
    },
    eI: function () {
        return m;
    },
    f6: function () {
        return v;
    },
    i0: function () {
        return S;
    },
    ib: function () {
        return g;
    },
    og: function () {
        return A;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(544891),
    s = r(570140),
    l = r(618541),
    u = r(751767),
    c = r(358085),
    d = r(355467),
    f = r(981631);
let p = 'https://www.paypal.com',
    h = 'https://sandbox.paypal.com';
function _(e) {
    let n = f.Ai1.BRAINTREE.KEY.startsWith('production_') ? p : h;
    return ''.concat(n, '/agreements/approve?nolegacy=1&ba_token=').concat(e);
}
function m() {
    (0, u.S)().then((e) => {
        e.client
            .create({ authorization: f.Ai1.BRAINTREE.KEY })
            .then((e) => {
                s.Z.dispatch({
                    type: 'BRAINTREE_CREATE_CLIENT_SUCCESS',
                    client: e
                }),
                    E(),
                    g();
            })
            .catch(() => s.Z.dispatch({ type: 'BRAINTREE_CREATE_CLIENT_FAIL' }));
    });
}
function g() {
    let e = l.Z.getClient();
    if (null == e) throw Error('Braintree client must be initialized before creating Venmo client.');
    (0, u.S)().then((n) => {
        n.venmo
            .create({
                client: e,
                allowDesktop: !0,
                paymentMethodUsage: 'multi_use'
            })
            .then((e) => {
                s.Z.dispatch({
                    type: 'BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS',
                    venmoClient: e
                });
            })
            .catch(() => {
                s.Z.dispatch({ type: 'BRAINTREE_CREATE_VENMO_CLIENT_FAIL' });
            });
    });
}
function E() {
    let e = l.Z.getClient();
    if (null == e) throw Error('braintree client must be initialized before calling this');
    (0, u.S)().then((n) => {
        n.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth) throw Error('braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?');
                (e._navigateFrameToAuth = function (e) {
                    let n = this._formatPaymentResourceData(e);
                    return o.tn
                        .post({
                            url: f.ANM.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
                            oldFormErrors: !0,
                            body: {
                                return_url: n.returnUrl,
                                cancel_url: n.cancelUrl
                            },
                            rejectWithError: !1
                        })
                        .then((e) => {
                            let {
                                body: { token: n }
                            } = e;
                            this._frameService.redirect(_(n));
                        })
                        .catch((e) => (this._frameService.close(), (this._authorizationInProgress = !1), Promise.reject(Error(e.body && e.body.message))));
                }),
                    s.Z.dispatch({
                        type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS',
                        paypalClient: e
                    });
            })
            .catch(() => s.Z.dispatch({ type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL' }));
    });
}
function v() {
    let e = l.Z.getPayPalClient();
    if (null == e) throw Error('braintree paypal client must be initialized before calling this');
    s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' });
    let n = Promise.resolve('');
    (0, c.isDesktop)() && (n = (0, d.EH)(f.HeQ.PAYPAL)),
        n
            .then(() => e.tokenize({ flow: 'vault' }))
            .then((e) => {
                let { email: n, firstName: r, lastName: i, billingAddress: a } = e.details;
                s.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_PAYPAL_SUCCESS',
                    nonce: e.nonce,
                    email: n,
                    billingAddress: {
                        name: ''.concat(r, ' ').concat(i),
                        line1: a.line1,
                        line2: a.line2,
                        city: a.city,
                        state: a.state,
                        country: a.countryCode,
                        postalCode: a.postalCode
                    }
                });
            })
            .catch((e) => {
                let { message: n, code: r } = e;
                r === f.U66.PAYPAL_POPUP_CLOSED || null == r
                    ? s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED' })
                    : s.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL',
                          message: n,
                          code: r
                      });
            });
}
function y() {
    let e = l.Z.getVenmoClient();
    if (null == e) throw Error('Braintree Venmo client must be initialized before calling tokenize.');
    s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_START' }),
        e
            .tokenize()
            .then((e) => {
                let { username: n } = e.details;
                s.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_VENMO_SUCCESS',
                    nonce: e.nonce,
                    username: n
                });
            })
            .catch((e) => {
                let { message: n, code: r } = e;
                r === f.U66.VENMO_APP_CANCELED || r === f.U66.VENMO_CANCELED
                    ? s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED' })
                    : s.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_VENMO_FAIL',
                          message: n,
                          code: r
                      });
            });
}
function b(e, n) {
    if (null == e) return Promise.resolve();
    s.Z.dispatch(n);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
function I() {
    return b(l.Z.getPayPalClient(), { type: 'BRAINTREE_TEARDOWN_PAYPAL_CLIENT' });
}
function T() {
    return b(l.Z.getVenmoClient(), { type: 'BRAINTREE_TEARDOWN_VENMO_CLIENT' });
}
function S() {
    let e = l.Z.getLastURL();
    null == e ? v() : (s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' }), window.open(e));
}
function A() {
    y();
}
