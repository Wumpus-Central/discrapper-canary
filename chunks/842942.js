r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(423650),
    a = r.n(i),
    o = r(754700),
    s = r(628665),
    l = r(388032);
let u = '1290718710658629658';
function c(e) {
    let { entityName: n } = e,
        r = [
            {
                key: 'NOT_INTERESTED',
                text: l.intl.formatToPlainString(l.t.AZRWVV, { entityName: n })
            },
            {
                key: 'INVALUABLE',
                text: l.intl.string(l.t.ETU4NT)
            },
            {
                key: 'TOO_LONG',
                text: l.intl.string(l.t.uRIIpK)
            },
            {
                key: 'UNSURE_HOW',
                text: l.intl.string(l.t['5dxvxs'])
            },
            {
                key: 'OTHER',
                text: l.intl.string(l.t.RFasgo)
            }
        ];
    return {
        id: u,
        title: l.intl.string(l.t.ugbhDQ),
        subtitle: l.intl.string(l.t.FIYcpK),
        choices: a()(r.slice(0, 4)).concat(r[4]),
        taskType: o.X.WATCH_VIDEO,
        experiment: s.Y
    };
}
