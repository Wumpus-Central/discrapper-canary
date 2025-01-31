n.d(t, { default: () => y }), n(642549), n(757143), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(544891),
    a = n(481060),
    i = n(464179),
    s = n(479531),
    d = n(117938),
    c = n(981631),
    u = n(388032),
    h = n(620389);
async function p(e, t, n) {
    let r = c.ANM.BILLING_INVOICE_PDF,
        l = t
            ? {
                  name: n.name,
                  line_1: n.line1,
                  line_2: n.line2,
                  city: n.city,
                  state: n.state,
                  postal_code: n.postalCode,
                  country: n.country
              }
            : null,
        a = await o.tn.post({
            url: r,
            body: {
                payment_id: e,
                billing_address_override: t ? l : null
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    return (
        !(function (e, t) {
            let n = atob(t.replace(/\s/g, '')),
                r = new Uint8Array(new ArrayBuffer(n.length));
            for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
            let l = new Blob([r], { type: 'application/pdf' }),
                o = URL.createObjectURL(l),
                a = document.createElement('a');
            (a.href = o), (a.download = 'receipt_'.concat(e, '.pdf')), document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(o);
        })(e, a.text),
        !0
    );
}
function y(e) {
    let { payment: t, paymentSource: n, ...o } = e,
        c = {
            name: '',
            line1: '',
            line2: '',
            city: '',
            postalCode: '',
            state: '',
            country: n.country
        },
        [y, m] = l.useState(c),
        [x, g] = l.useState(!1),
        [b, _] = l.useState(!1),
        [C, f] = l.useState(!1),
        [j, w] = l.useState('');
    async function k() {
        f(!0);
        try {
            await p(E, x, y);
        } catch (n) {
            var e;
            let t = JSON.parse(await n.body.text());
            w(
                null !==
                    (e = new s.Z({
                        ...n,
                        body: t
                    }).getAnyErrorMessage()) && void 0 !== e
                    ? e
                    : u.intl.string(u.t['4eT6rq'])
            );
        } finally {
            f(!1);
        }
    }
    let v = d.C,
        E = t.id,
        N = (0, r.jsx)('div', {
            children: (0, r.jsx)(a.j7V, {
                value: x,
                note: u.intl.string(u.t['2p1XJS']),
                onChange: g,
                children: u.intl.string(u.t['aJg+oa'])
            })
        }),
        A = x
            ? (0, r.jsx)(i.ZP, {
                  ...y,
                  mode: i.ZP.Modes.CREATE,
                  layout: v,
                  onBillingAddressChange: function (e, t) {
                      m(e), _(t);
                  },
                  error: null
              })
            : null;
    return (0, r.jsxs)(a.Y0X, {
        className: h.modal,
        size: a.CgR.DYNAMIC,
        ...o,
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !1,
                children: (0, r.jsx)(a.X6q, {
                    variant: 'heading-lg/semibold',
                    children: u.intl.string(u.t.onRIxc)
                })
            }),
            (0, r.jsxs)(a.hzk, {
                className: h.body,
                children: [N, A]
            }),
            (0, r.jsxs)(a.mzw, {
                children: [
                    (0, r.jsx)(a.zxk, {
                        type: 'submit',
                        color: a.zxk.Colors.GREEN,
                        disabled: x && !b,
                        onClick: k,
                        submitting: C,
                        autoFocus: !0,
                        children: u.intl.string(u.t.uqZjLi)
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'text-danger',
                        className: h.error,
                        variant: 'text-sm/semibold',
                        children: j
                    })
                ]
            })
        ]
    });
}
