n.d(t, {
    Gq: () => _,
    SN: () => E,
    Zu: () => h,
    gA: () => p,
    qc: () => m,
    x8: () => v,
    zI: () => g
}),
    n(411104);
var i = n(544891),
    r = n(343817),
    a = n(570140),
    s = n(959546),
    o = n(992970),
    l = n(317951),
    u = n(287941),
    c = n(235894),
    d = n(981631);
let f = {
        [l.D1]: d.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
        [l.FX]: d.ANM.FETCH_HD_STREAMING_ENTITLEMENT
    },
    _ = async (e) => {
        a.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await i.tn.get({
                url: d.ANM.CONSUMABLE_FETCH_PRICE(e),
                rejectWithError: !1
            });
            if (null == t.body.price)
                throw (
                    (a.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                a.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_SUCCEEDED',
                    skuId: e,
                    price: n
                }),
                {
                    amount: n.amount,
                    currency: n.currency,
                    exponent: n.currency_exponent
                }
            );
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new r.Hx(t))
            );
        }
    },
    p = async (e) => {
        if (
            (a.Z.dispatch({
                type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
                skuId: e
            }),
            null == f[e])
        )
            throw (
                (a.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                Error('Invalid consumable skuId: '.concat(e)))
            );
        try {
            let t = await i.tn.get({
                    url: f[e],
                    rejectWithError: !1
                }),
                n = null != t.body.entitlement ? s.Z.createFromServer(t.body.entitlement) : null,
                r = t.body.num_potions;
            return (
                a.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n,
                    numPotions: r
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new r.Hx(t))
            );
        }
    },
    h = async (e) => {
        try {
            await i.tn.post({
                url: d.ANM.CONSUME_HD_STREAMING_POTION,
                body: { channel_id: e },
                rejectWithError: !1
            }),
                a.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: l.FX
                });
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    m = async (e, t, n) => {
        try {
            await i.tn.post({
                url: d.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
                body: {
                    channel_id: e,
                    message_id: t,
                    emoji_name: g(n)
                },
                rejectWithError: !1
            }),
                a.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: l.D1
                });
        } catch (e) {
            throw new r.Hx(e);
        }
        let s = (0, c.NV)(n);
        (0, u.I)(s, void 0, !0, o.LL.MessageSent);
    },
    g = (e) => (null != e.id ? ''.concat(e.name, ':').concat(e.id) : e.optionallyDiverseSequence),
    E = (e) => {
        a.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    v = (e) => {
        a.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
