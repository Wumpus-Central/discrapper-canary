n.d(e, { default: () => O }),
    n(853839),
    n(570086),
    n(479048),
    n(704826),
    n(35282),
    n(644351),
    n(146733),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(54381),
    o = n(473749),
    i = n(793030),
    a = n(544891),
    l = n(481060),
    c = n(464179),
    u = n(479531),
    s = n(117938),
    p = n(981631),
    y = n(388032);
function d(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function f(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
async function b(t, e, n) {
    let r = p.ANM.BILLING_INVOICE_PDF,
        o = e
            ? {
                  name: n.name,
                  line_1: n.line1,
                  line_2: n.line2,
                  city: n.city,
                  state: n.state,
                  postal_code: n.postalCode,
                  country: n.country,
              }
            : null,
        i = await a.tn.post({
            url: r,
            body: {
                payment_id: t,
                billing_address_override: e ? o : null,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    return (
        !(function (t, e) {
            let n = atob(e.replace(/\s/g, "")),
                r = new Uint8Array(new ArrayBuffer(n.length));
            for (let t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
            let o = new Blob([r], { type: "application/pdf" }),
                i = URL.createObjectURL(o),
                a = document.createElement("a");
            (a.href = i),
                (a.download = "receipt_".concat(t, ".pdf")),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a),
                URL.revokeObjectURL(i);
        })(t, i.text),
        !0
    );
}
function O(t) {
    var { payment: e, paymentSource: n } = t,
        a = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ["payment", "paymentSource"]);
    let p = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            postalCode: "",
            state: "",
            country: n.country,
        },
        [O, g] = o.useState(p),
        [m, j] = o.useState(!1),
        [h, S] = o.useState(!1),
        [w, P] = o.useState(!1),
        [v, C] = o.useState("");
    async function k() {
        P(!0);
        try {
            await b(x, m, O);
        } catch (n) {
            var t;
            let e = JSON.parse(await n.body.text());
            C(
                null != (t = new u.Z(f(d({}, n), { body: e })).getAnyErrorMessage())
                    ? t
                    : y.intl.formatToPlainString(y.t["4eT6rr"], {}),
            );
        } finally {
            P(!1);
        }
    }
    let _ = s.C,
        x = e.id,
        E = (0, r.jsx)(l.rsf, {
            label: y.intl.formatToPlainString(y.t["aJg+oS"], {}),
            description: y.intl.formatToPlainString(y.t["2p1XJW"], {}),
            checked: m,
            onChange: j,
        }),
        A = m
            ? (0, r.jsx)(
                  c.ZP,
                  f(d({}, O), {
                      mode: c.ZP.Modes.CREATE,
                      layout: _,
                      onBillingAddressChange: function (t, e) {
                          g(t), S(e);
                      },
                      error: null,
                  }),
              )
            : null;
    return (0, r.jsxs)(i.Modal, {
        transitionState: a.transitionState,
        onClose: a.onClose,
        title: y.intl.formatToPlainString(y.t.onRIxS, {}),
        actions: [
            {
                variant: "primary",
                text: y.intl.formatToPlainString(y.t.uqZjLi, {}),
                onClick: k,
                disabled: m && !h,
                loading: w,
                autoFocus: !0,
            },
        ],
        children: [
            E,
            A,
            null != v &&
                "" !== v &&
                (0, r.jsx)(l.M14, {
                    type: "critical",
                    children: v,
                }),
        ],
    });
}
