let l = { resolve: (e) => {} },
    r = new Promise((e, t) => {
        l.resolve = e;
    });
n.d(
    t,
    {},
    {
        K: function () {
            l.resolve(null);
        },
        t: function (e) {
            r.then(() => {
                e();
            });
        },
    },
);
