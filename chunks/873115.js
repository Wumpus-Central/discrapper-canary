n.d(t, {
    Dz: () => h,
    Nj: () => v,
    RS: () => y,
    by: () => g,
    eI: () => _,
    f6: () => m,
    i0: () => I,
    ib: () => p,
    og: () => b
}),
    n(411104),
    n(47120);
var i = n(544891),
    r = n(570140),
    a = n(618541),
    s = n(751767),
    o = n(358085),
    l = n(355467),
    u = n(981631);
let c = 'https://www.paypal.com',
    d = 'https://sandbox.paypal.com';
function f(e) {
    let t = u.Ai1.BRAINTREE.KEY.startsWith('production_') ? c : d;
    return ''.concat(t, '/agreements/approve?nolegacy=1&ba_token=').concat(e);
}
function _() {
    (0, s.S)().then((e) => {
        e.client
            .create({ authorization: u.Ai1.BRAINTREE.KEY })
            .then((e) => {
                r.Z.dispatch({
                    type: 'BRAINTREE_CREATE_CLIENT_SUCCESS',
                    client: e
                }),
                    h(),
                    p();
            })
            .catch(() => r.Z.dispatch({ type: 'BRAINTREE_CREATE_CLIENT_FAIL' }));
    });
}
function p() {
    let e = a.Z.getClient();
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
function h() {
    let e = a.Z.getClient();
    if (null == e) throw Error('braintree client must be initialized before calling this');
    (0, s.S)().then((t) => {
        t.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth) throw Error('braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?');
                (e._navigateFrameToAuth = function (e) {
                    let t = this._formatPaymentResourceData(e);
                    return i.tn
                        .post({
                            url: u.ANM.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                    r.Z.dispatch({
                        type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS',
                        paypalClient: e
                    });
            })
            .catch(() => r.Z.dispatch({ type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL' }));
    });
}
function m() {
    let e = a.Z.getPayPalClient();
    if (null == e) throw Error('braintree paypal client must be initialized before calling this');
    r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' });
    let t = Promise.resolve('');
    (0, o.isDesktop)() && (t = (0, l.EH)(u.HeQ.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: 'vault' }))
            .then((e) => {
                let { email: t, firstName: n, lastName: i, billingAddress: a } = e.details;
                r.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_PAYPAL_SUCCESS',
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: ''.concat(n, ' ').concat(i),
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
                let { message: t, code: n } = e;
                n === u.U66.PAYPAL_POPUP_CLOSED || null == n
                    ? r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED' })
                    : r.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL',
                          message: t,
                          code: n
                      });
            });
}
function g() {
    let e = a.Z.getVenmoClient();
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
                n === u.U66.VENMO_APP_CANCELED || n === u.U66.VENMO_CANCELED
                    ? r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED' })
                    : r.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_VENMO_FAIL',
                          message: t,
                          code: n
                      });
            });
}
function E(e, t) {
    if (null == e) return Promise.resolve();
    r.Z.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
function v() {
    return E(a.Z.getPayPalClient(), { type: 'BRAINTREE_TEARDOWN_PAYPAL_CLIENT' });
}
function y() {
    return E(a.Z.getVenmoClient(), { type: 'BRAINTREE_TEARDOWN_VENMO_CLIENT' });
}
function I() {
    let e = a.Z.getLastURL();
    null == e ? m() : (r.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' }), window.open(e));
}
function b() {
    g();
}
