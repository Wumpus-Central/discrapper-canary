t.d(r, { Q: () => w });
var n = t(64700),
    o = t(636537),
    a = t(136857),
    l = t(626584);
t(739508);
var i = t(652215);
async function s(e) {
    let { orderId: r, expectedRevision: t, loadId: n } = e;
    try {
        let e = {};
        null != t && (e.expected_revision = t);
        let a = await o.Bo.post({
            url: i.Rsh.ORDER_SIGN(r),
            body: e,
            context: null != n && "" !== n ? { load_id: n } : void 0,
            rejectWithError: !1,
        });
        if (null == a.body) throw Error("Invalid sign order response");
        return a.body;
    } catch (e) {
        throw e;
    }
}
new l.A("OrderActionCreators");
var u = t(786953),
    d = t(310829),
    c = t(211287),
    h = t(26279),
    f = t(375708);
function w(e) {
    let [r, t] = (0, n.useState)(""),
        [l, w] = (0, n.useState)([]),
        [m, g] = (0, n.useState)(null),
        [E, b] = (0, n.useState)(!1),
        { enabled: p } = c.A.useConfig({ location: "orb_checkout_modal" }),
        y = e?.order ?? null,
        I = (0, n.useCallback)(async (e, r) => {
            let t = r ?? (0, d.P)(e);
            try {
                return (
                    (
                        await o.Bo.get({
                            url: i.Rsh.ENTITLEMENTS_FOR_APPLICATION(t),
                            query: { sku_ids: e, exclude_consumed: !0 },
                            rejectWithError: !1,
                        })
                    ).body ?? []
                );
            } catch (e) {
                return [];
            }
        }, []),
        R = (0, n.useCallback)(
            async (e, r, t) => {
                if (null == y) {
                    g(new a.Ay("Order not created yet")), b(!1);
                    return;
                }
                b(!0), g(null);
                try {
                    let n = await s({ orderId: y.id, loadId: r });
                    if (n.status !== h.Re.SIGNED) {
                        if (n.errors && n.errors.length > 0) {
                            let e = n.errors;
                            if (e.includes(2e3)) {
                                let e = new a.Ay("Insufficient balance");
                                throw ((e.code = a.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE), e);
                            }
                            let r = `Order signing failed with errors: ${e.join(", ")}`;
                            throw Error(r);
                        }
                        if (n.status === h.Re.DRAFT) throw Error("Order could not be signed.");
                        throw Error(`Unexpected order status: ${n.status}`);
                    }
                    let o = (0, d.P)(e),
                        l = await I(e, o);
                    if (0 === l.length) {
                        await new Promise((e) => setTimeout(e, 500));
                        let r = await I(e, o);
                        if (0 === r.length) throw Error("No entitlements found after order signing");
                        w(r), b(!1), t?.(r);
                    } else w(l), b(!1), t?.(l);
                } catch (e) {
                    g(e instanceof a.Ay ? e : new a.Ay(e)), b(!1);
                }
            },
            [y, I],
        ),
        _ = (0, n.useCallback)(
            (e, r, t) =>
                (0, u.J$)({
                    skuId: e,
                    loadId: r,
                    onRedeemStart: () => {
                        b(!0), g(null);
                    },
                    onRedeemSucceed: (e) => {
                        w(e), b(!1), t?.(e);
                    },
                    onRedeemFail: (e) => {
                        g(e), b(!1);
                    },
                }),
            [],
        ),
        A = (0, n.useCallback)(
            (e, r, t) => {
                p ? R(e, r, t) : _(e, r, t);
            },
            [p, R, _],
        );
    return (
        (0, n.useEffect)(() => {
            if (null != m) return void t(f.intl.format(f.t["7gHWrd"], { amount: "1 orb", errorMessage: m.message }));
            if (null != l && l.length > 0) {
                let e = l.map((e) => e.sku?.name);
                t(
                    f.intl.format(f.t.JxNFav, {
                        amountDescription: "1 orb",
                        redeemedItemDescription: `${1 === e.length ? "SKU" : "SKUs"}: ${e.join(", ")}. Entitlement ${1 === l.length ? "ID" : "IDs"}: ${l.map((e) => e.id).join(", ")}`,
                    }),
                );
                return;
            }
            t("");
        }, [l, m]),
        { entitlements: l, error: m, isSubmitting: E, responseMessage: r, redeemVirtualCurrency: A }
    );
}
