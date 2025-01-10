n.d(t, {
    Gq: function () {
        return c;
    },
    SN: function () {
        return T;
    },
    Zu: function () {
        return _;
    },
    gA: function () {
        return d;
    },
    qc: function () {
        return f;
    },
    x8: function () {
        return C;
    }
}),
    n(411104);
var r = n(544891),
    i = n(343817),
    u = n(570140),
    l = n(633302),
    o = n(959546),
    s = n(215023),
    a = n(981631);
let E = {
        [s.D1]: a.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
        [s.FX]: a.ANM.FETCH_HD_STREAMING_ENTITLEMENT
    },
    c = async (e) => {
        u.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await r.tn.get({
                url: a.ANM.CONSUMABLE_FETCH_PRICE(e),
                rejectWithError: !1
            });
            if (null == t.body.price)
                throw (
                    (u.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                u.Z.dispatch({
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
                (u.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new i.Hx(t))
            );
        }
    },
    d = async (e) => {
        if (
            (u.Z.dispatch({
                type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
                skuId: e
            }),
            null == E[e])
        )
            throw (
                (u.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                Error('Invalid consumable skuId: '.concat(e)))
            );
        try {
            let t = await r.tn.get({
                    url: E[e],
                    rejectWithError: !1
                }),
                n = null != t.body.entitlement ? o.Z.createFromServer(t.body.entitlement) : null;
            return (
                u.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (u.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new i.Hx(t))
            );
        }
    },
    _ = async (e, t) => {
        try {
            await r.tn.post({
                url: a.ANM.CONSUME_HD_STREAMING_POTION,
                body: { channel_id: e },
                rejectWithError: !1
            }),
                u.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: t
                });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    f = async (e, t, n, l) => {
        try {
            await r.tn.post({
                url: a.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
                body: {
                    channel_id: e,
                    message_id: t,
                    emoji_name: S(n)
                },
                rejectWithError: !1
            }),
                u.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: l
                });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    S = (e) => (null != e.id ? ''.concat(e.name, ':').concat(e.id) : l.ZP.convertNameToSurrogate(e.name)),
    T = (e) => {
        u.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    C = (e) => {
        u.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
