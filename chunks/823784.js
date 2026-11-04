var i = n(115560);
n(604594);
let r = null;
n.d(
    t,
    {},
    {
        $N: function () {
            let e = Date.now();
            return null == r
                ? {
                      searchSession: (r = {
                          uuid: (0, i.A)(),
                          createdAtTimestamp: e,
                          lastUsedTimestamp: e,
                          version: 1,
                      }),
                      isNew: !0,
                  }
                : ((r.lastUsedTimestamp = e), { searchSession: r, isNew: !1 });
        },
        l6: function () {
            r = null;
        },
        tv: function () {
            return r;
        },
    },
);
