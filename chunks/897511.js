r.d(t, { default: () => g }), r(866573), r(642549), r(787622), r(757143), r(301563), r(610885), r(126298), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(315314), r(309749), r(610138), r(216116), r(78328), r(815648), r(47120);
var n = r(200651),
    o = r(192379),
    l = r(544891),
    a = r(481060),
    c = r(464179),
    i = r(479531),
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
        a = await l.tn.post({
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
                a = document.createElement('a');
            (a.href = l), (a.download = 'receipt_'.concat(e, '.pdf')), document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(l);
        })(e, a.text),
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
            await f(S, O, g);
        } catch (r) {
            var e;
            let t = JSON.parse(await r.body.text());
            C(null != (e = new i.Z(b(y({}, r), { body: t })).getAnyErrorMessage()) ? e : d.NW.string(d.t['4eT6rq']));
        } finally {
            v(!1);
        }
    }
    let N = s.C,
        S = t.id,
        k = (0, n.jsx)('div', {
            children: (0, n.jsx)(a.j7V, {
                value: O,
                note: d.NW.string(d.t['2p1XJS']),
                onChange: j,
                children: d.NW.string(d.t['aJg+oa'])
            })
        }),
        E = O
            ? (0, n.jsx)(
                  c.ZP,
                  b(y({}, g), {
                      mode: c.ZP.Modes.CREATE,
                      layout: N,
                      onBillingAddressChange: function (e, t) {
                          m(e), x(t);
                      },
                      error: null
                  })
              )
            : null;
    return (0, n.jsxs)(
        a.Y0X,
        b(
            y(
                {
                    className: p.modal,
                    size: a.CgR.DYNAMIC
                },
                l
            ),
            {
                children: [
                    (0, n.jsx)(a.xBx, {
                        separator: !1,
                        children: (0, n.jsx)(a.X6q, {
                            variant: 'heading-lg/semibold',
                            children: d.NW.string(d.t.onRIxc)
                        })
                    }),
                    (0, n.jsxs)(a.hzk, {
                        className: p.body,
                        children: [k, E]
                    }),
                    (0, n.jsxs)(a.mzw, {
                        children: [
                            (0, n.jsx)(a.zxk, {
                                type: 'submit',
                                color: a.zxk.Colors.GREEN,
                                disabled: O && !h,
                                onClick: P,
                                submitting: w,
                                autoFocus: !0,
                                children: d.NW.string(d.t.uqZjLi)
                            }),
                            (0, n.jsx)(a.Text, {
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
