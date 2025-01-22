r.d(n, {
    Gq: function () {
        return p;
    },
    SN: function () {
        return E;
    },
    Zu: function () {
        return _;
    },
    gA: function () {
        return h;
    },
    qc: function () {
        return m;
    },
    x8: function () {
        return v;
    },
    zI: function () {
        return g;
    }
});
var i = r(411104);
var a = r(544891),
    o = r(343817),
    s = r(570140),
    l = r(959546),
    u = r(317951),
    c = r(287941),
    d = r(981631);
let f = {
        [u.D1]: d.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
        [u.FX]: d.ANM.FETCH_HD_STREAMING_ENTITLEMENT
    },
    p = async (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let n = await a.tn.get({
                url: d.ANM.CONSUMABLE_FETCH_PRICE(e),
                rejectWithError: !1
            });
            if (null == n.body.price)
                throw (
                    (s.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let r = n.body.price;
            return (
                s.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_SUCCEEDED',
                    skuId: e,
                    price: r
                }),
                {
                    amount: r.amount,
                    currency: r.currency,
                    exponent: r.currency_exponent
                }
            );
        } catch (n) {
            throw (
                (s.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new o.Hx(n))
            );
        }
    },
    h = async (e) => {
        if (
            (s.Z.dispatch({
                type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
                skuId: e
            }),
            null == f[e])
        )
            throw (
                (s.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                Error('Invalid consumable skuId: '.concat(e)))
            );
        try {
            let n = await a.tn.get({
                    url: f[e],
                    rejectWithError: !1
                }),
                r = null != n.body.entitlement ? l.Z.createFromServer(n.body.entitlement) : null,
                i = n.body.num_potions;
            return (
                s.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: r,
                    numPotions: i
                }),
                n.body.entitlement
            );
        } catch (n) {
            throw (
                (s.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new o.Hx(n))
            );
        }
    },
    _ = async (e) => {
        try {
            await a.tn.post({
                url: d.ANM.CONSUME_HD_STREAMING_POTION,
                body: { channel_id: e },
                rejectWithError: !1
            }),
                s.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: u.FX
                });
        } catch (e) {
            throw new o.Hx(e);
        }
    },
    m = async (e, n, r) => {
        try {
            await a.tn.post({
                url: d.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
                body: {
                    channel_id: e,
                    message_id: n,
                    emoji_name: g(r)
                },
                rejectWithError: !1
            }),
                s.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: u.D1
                });
        } catch (e) {
            throw new o.Hx(e);
        }
        (0, c.I)(
            {
                name: r.name,
                id: r.id
            },
            void 0,
            !0
        );
    },
    g = (e) => (null != e.id ? ''.concat(e.name, ':').concat(e.id) : e.optionallyDiverseSequence),
    E = (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    v = (e) => {
        s.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
