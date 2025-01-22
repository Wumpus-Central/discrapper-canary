r.d(n, {
    n: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(187753),
    o = r(596454),
    s = r(73346);
function l(e, n) {
    if (null != n)
        switch (n.type) {
            case a.T.STORE_ASSET:
                let r = (0, s._W)(e, n.store_asset_id);
                return (0, i.jsx)('img', {
                    src: r,
                    alt: '',
                    className: 'emoji'
                });
            case a.T.EMOJI:
                return (0, i.jsx)(o.Z, { emojiName: n.emoji });
        }
}
