r.d(n, {
    Pv: function () {
        return s;
    },
    dI: function () {
        return o;
    },
    gs: function () {
        return l;
    }
});
var i = r(570140);
let a = new (r(710845).Z)('TryLoad');
async function o(e) {
    try {
        return await e();
    } catch (e) {
        return a.log('database load failed.', e), null;
    }
}
function s(e, n, r) {
    try {
        return n();
    } catch (n) {
        return (
            a.log(''.concat(e, ': exception thrown, resetting socket.'), n, n.stack),
            i.Z.dispatch({
                type: 'RESET_SOCKET',
                args: {
                    error: n,
                    action: 'tryLoadOrResetCacheGateway ('.concat(e, ')'),
                    metricAction: 'tryLoadOrResetCacheGateway ('.concat(null != r ? r : e, ')'),
                    clearCache: !0
                }
            }),
            null
        );
    }
}
async function l(e, n, r) {
    try {
        return await n();
    } catch (n) {
        return (
            a.log(''.concat(e, ': exception thrown, resetting socket.'), n, n.stack),
            i.Z.dispatch({
                type: 'RESET_SOCKET',
                args: {
                    error: n,
                    action: 'tryLoadOrResetCacheGatewayAsync ('.concat(e, ')'),
                    metricAction: 'tryLoadOrResetCacheGatewayAsync ('.concat(null != r ? r : e, ')'),
                    clearCache: !0
                }
            }),
            null
        );
    }
}
