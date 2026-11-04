let l = RegExp("^dev://playground/([-\\w._0-9]+)(/([-\\w._0-9]+))?(\\?[^\\s]*)?$", "i");
t.d(
    n,
    {},
    {
        S: l,
        i: function (e) {
            return l.test(e);
        },
    },
);
