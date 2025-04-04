var r = n(220159),
    o = n(602168);
r(
    {
        target: 'Promise',
        stat: !0
    },
    {
        withResolvers: function () {
            var e = o.f(this);
            return {
                promise: e.promise,
                resolve: e.resolve,
                reject: e.reject
            };
        }
    }
);
