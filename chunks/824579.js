let i = { resolve: (e) => {} },
    s = new Promise((e, t) => {
        i.resolve = e;
    });
n.d(
    t,
    {},
    {
        K: function () {
            i.resolve(null);
        },
        t: function (e) {
            s.then(() => {
                e();
            });
        },
    },
);
