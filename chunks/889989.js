n.d(t, { n: () => o });
var i = n(200651);
n(192379);
var r = n(187753),
    a = n(596454),
    s = n(73346);
function o(e, t) {
    if (null != t)
        switch (t.type) {
            case r.T.STORE_ASSET:
                let n = (0, s._W)(e, t.store_asset_id);
                return (0, i.jsx)('img', {
                    src: n,
                    alt: '',
                    className: 'emoji'
                });
            case r.T.EMOJI:
                return (0, i.jsx)(a.Z, { emojiName: t.emoji });
        }
}
