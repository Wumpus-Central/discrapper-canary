n.d(t, {
    Dz: () => h,
    Nj: () => b,
    RS: () => y,
    by: () => g,
    eI: () => _,
    f6: () => m,
    i0: () => v,
    ib: () => p,
    og: () => O
}),
    n(411104),
    n(47120);
var r = n(544891),
    i = n(570140),
    o = n(618541),
    a = n(751767),
    s = n(358085),
    l = n(355467),
    c = n(981631);
let u = 'https://www.paypal.com',
    d = 'https://sandbox.paypal.com';
function f(e) {
    let t = c.Ai1.BRAINTREE.KEY.startsWith('production_') ? u : d;
    return ''.concat(t, '/agreements/approve?nolegacy=1&ba_token=').concat(e);
}
function _() {
    (0, a.S)().then((e) => {
        e.client
            .create({ authorization: c.Ai1.BRAINTREE.KEY })
            .then((e) => {
                i.Z.dispatch({
                    type: 'BRAINTREE_CREATE_CLIENT_SUCCESS',
                    client: e
                }),
                    h(),
                    p();
            })
            .catch(() => i.Z.dispatch({ type: 'BRAINTREE_CREATE_CLIENT_FAIL' }));
    });
}
function p() {
    let e = o.Z.getClient();
    if (null == e) throw Error('Braintree client must be initialized before creating Venmo client.');
    (0, a.S)().then((t) => {
        t.venmo
            .create({
                client: e,
                allowDesktop: !0,
                paymentMethodUsage: 'multi_use'
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS',
                    venmoClient: e
                });
            })
            .catch(() => {
                i.Z.dispatch({ type: 'BRAINTREE_CREATE_VENMO_CLIENT_FAIL' });
            });
    });
}
function h() {
    let e = o.Z.getClient();
    if (null == e) throw Error('braintree client must be initialized before calling this');
    (0, a.S)().then((t) => {
        t.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth) throw Error('braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?');
                (e._navigateFrameToAuth = function (e) {
                    let t = this._formatPaymentResourceData(e);
                    return r.tn
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
                            this._frameService.redirect(f(t));
                        })
                        .catch((e) => (this._frameService.close(), (this._authorizationInProgress = !1), Promise.reject(Error(e.body && e.body.message))));
                }),
                    i.Z.dispatch({
                        type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS',
                        paypalClient: e
                    });
            })
            .catch(() => i.Z.dispatch({ type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL' }));
    });
}
function m() {
    let e = o.Z.getPayPalClient();
    if (null == e) throw Error('braintree paypal client must be initialized before calling this');
    i.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' });
    let t = Promise.resolve('');
    (0, s.isDesktop)() && (t = (0, l.EH)(c.HeQ.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: 'vault' }))
            .then((e) => {
                let { email: t, firstName: n, lastName: r, billingAddress: o } = e.details;
                i.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_PAYPAL_SUCCESS',
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: ''.concat(n, ' ').concat(r),
                        line1: o.line1,
                        line2: o.line2,
                        city: o.city,
                        state: o.state,
                        country: o.countryCode,
                        postalCode: o.postalCode
                    }
                });
            })
            .catch((e) => {
                let { message: t, code: n } = e;
                n === c.U66.PAYPAL_POPUP_CLOSED || null == n
                    ? i.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED' })
                    : i.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL',
                          message: t,
                          code: n
                      });
            });
}
function g() {
    let e = o.Z.getVenmoClient();
    if (null == e) throw Error('Braintree Venmo client must be initialized before calling tokenize.');
    i.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_START' }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                i.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_VENMO_SUCCESS',
                    nonce: e.nonce,
                    username: t
                });
            })
            .catch((e) => {
                let { message: t, code: n } = e;
                n === c.U66.VENMO_APP_CANCELED || n === c.U66.VENMO_CANCELED
                    ? i.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED' })
                    : i.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_VENMO_FAIL',
                          message: t,
                          code: n
                      });
            });
}
function E(e, t) {
    if (null == e) return Promise.resolve();
    i.Z.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
function b() {
    return E(o.Z.getPayPalClient(), { type: 'BRAINTREE_TEARDOWN_PAYPAL_CLIENT' });
}
function y() {
    return E(o.Z.getVenmoClient(), { type: 'BRAINTREE_TEARDOWN_VENMO_CLIENT' });
}
function v() {
    let e = o.Z.getLastURL();
    null == e ? m() : (i.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' }), window.open(e));
}
function O() {
    g();
}
