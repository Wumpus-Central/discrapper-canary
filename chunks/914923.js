n.d(t, { Z: () => r }), n(757143);
var i = n(388032);
let l = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function r(e) {
    let t = i.intl.string(i.t.FeUKeH);
    return (
        null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
        {
            sanitizedTitle: t.replace(l, ''),
            title: t
        }
    );
}
