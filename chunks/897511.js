r.d(t, { default: () => g }), r(853839), r(570086), r(479048), r(704826), r(35282), r(644351), r(146733), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(190126), r(368063), r(65234), r(111804), r(490233), r(97749), r(388685);
var n = r(255367),
    o = r(73800),
    l = r(544891),
    i = r(481060),
    a = r(464179),
    c = r(479531),
    s = r(117938),
    u = r(981631),
    d = r(388032),
    p = r(189717);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
async function f(e, t, r) {
    let n = u.ANM.BILLING_INVOICE_PDF,
        o = t
            ? {
                  name: r.name,
                  line_1: r.line1,
                  line_2: r.line2,
                  city: r.city,
                  state: r.state,
                  postal_code: r.postalCode,
                  country: r.country
              }
            : null,
        i = await l.tn.post({
            url: n,
            body: {
                payment_id: e,
                billing_address_override: t ? o : null
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    return (
        !(function (e, t) {
            let r = atob(t.replace(/\s/g, '')),
                n = new Uint8Array(new ArrayBuffer(r.length));
            for (let e = 0; e < r.length; e++) n[e] = r.charCodeAt(e);
            let o = new Blob([n], { type: 'application/pdf' }),
                l = URL.createObjectURL(o),
                i = document.createElement('a');
            (i.href = l), (i.download = 'receipt_'.concat(e, '.pdf')), document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(l);
        })(e, i.text),
        !0
    );
}
function g(e) {
    var { payment: t, paymentSource: r } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['payment', 'paymentSource']);
    let u = {
            name: '',
            line1: '',
            line2: '',
            city: '',
            postalCode: '',
            state: '',
            country: r.country
        },
        [g, m] = o.useState(u),
        [O, j] = o.useState(!1),
        [h, x] = o.useState(!1),
        [w, v] = o.useState(!1),
        [_, C] = o.useState('');
    async function P() {
        v(!0);
        try {
            await f(k, O, g);
        } catch (r) {
            var e;
            let t = JSON.parse(await r.body.text());
            C(null != (e = new c.Z(b(y({}, r), { body: t })).getAnyErrorMessage()) ? e : d.intl.string(d.t['4eT6rq']));
        } finally {
            v(!1);
        }
    }
    let S = s.C,
        k = t.id,
        E = (0, n.jsx)('div', {
            children: (0, n.jsx)(i.j7V, {
                value: O,
                note: d.intl.string(d.t['2p1XJS']),
                onChange: j,
                children: d.intl.string(d.t['aJg+oa'])
            })
        }),
        N = O
            ? (0, n.jsx)(
                  a.ZP,
                  b(y({}, g), {
                      mode: a.ZP.Modes.CREATE,
                      layout: S,
                      onBillingAddressChange: function (e, t) {
                          m(e), x(t);
                      },
                      error: null
                  })
              )
            : null;
    return (0, n.jsxs)(
        i.Y0X,
        b(
            y(
                {
                    className: p.modal,
                    size: i.CgR.DYNAMIC
                },
                l
            ),
            {
                children: [
                    (0, n.jsx)(i.xBx, {
                        separator: !1,
                        children: (0, n.jsx)(i.X6q, {
                            variant: 'heading-lg/semibold',
                            children: d.intl.string(d.t.onRIxc)
                        })
                    }),
                    (0, n.jsxs)(i.hzk, {
                        className: p.body,
                        children: [E, N]
                    }),
                    (0, n.jsxs)(i.mzw, {
                        children: [
                            (0, n.jsx)(i.zxk, {
                                type: 'submit',
                                color: i.zxk.Colors.GREEN,
                                disabled: O && !h,
                                onClick: P,
                                submitting: w,
                                autoFocus: !0,
                                children: d.intl.string(d.t.uqZjLi)
                            }),
                            (0, n.jsx)(i.Text, {
                                color: 'text-danger',
                                className: p.error,
                                variant: 'text-sm/semibold',
                                children: _
                            })
                        ]
                    })
                ]
            }
        )
    );
}
