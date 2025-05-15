var r = n(98405),
    i = n(527160),
    a = n(914331),
    o = n(77826),
    s = n(967333);
r(
    {
        target: 'Array',
        proto: !0
    },
    {
        at: function (e) {
            var t = i(this),
                n = a(t),
                r = o(e),
                s = r >= 0 ? r : n + r;
            return s < 0 || s >= n ? void 0 : t[s];
        }
    }
),
    s('at');
