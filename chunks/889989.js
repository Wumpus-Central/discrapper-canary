n.d(t, { n: () => s });
var r = n(200651);
n(192379);
var i = n(187753),
    o = n(596454),
    a = n(73346);
function s(e, t) {
    if (null != t)
        switch (t.type) {
            case i.T.STORE_ASSET:
                let n = (0, a._W)(e, t.store_asset_id);
                return (0, r.jsx)('img', {
                    src: n,
                    alt: '',
                    className: 'emoji'
                });
            case i.T.EMOJI:
                return (0, r.jsx)(o.Z, { emojiName: t.emoji });
        }
}
