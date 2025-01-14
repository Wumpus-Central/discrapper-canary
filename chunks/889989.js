i.d(e, {
    n: function () {
        return s;
    }
});
var t = i(200651);
i(192379);
var r = i(187753),
    l = i(596454),
    a = i(73346);
function s(n, e) {
    if (null != e)
        switch (e.type) {
            case r.T.STORE_ASSET:
                let i = (0, a._W)(n, e.store_asset_id);
                return (0, t.jsx)('img', {
                    src: i,
                    alt: '',
                    className: 'emoji'
                });
            case r.T.EMOJI:
                return (0, t.jsx)(l.Z, { emojiName: e.emoji });
        }
}
