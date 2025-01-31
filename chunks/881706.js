n.d(t, { v: () => s }), n(47120);
var i = n(591759);
let r = new Set(n(821445)),
    a = {
        'github.com': RegExp('/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*'),
        'bitbucket.org': RegExp('/downloads\\S*/[^/]*'),
        'gitlab.com': RegExp('/downloads\\S*/[^/]*')
    };
function s(e) {
    var t, n;
    let { pathname: s, hostname: o } = null !== (n = i.Z.toURLSafe(e)) && void 0 !== n ? n : {};
    if (null == o) return null;
    let l = a[o];
    if ((null != l && null != s && !l.test(s)) || null == s) return null;
    let u = s;
    try {
        u = decodeURIComponent(s);
    } catch (e) {}
    let c = u.split('/'),
        d = null,
        f = 0;
    for (let e = c.length - 1; e >= 0; e--) {
        let t = c[e];
        if ('' !== t && '.' !== t) {
            if ('..' === t) {
                f++;
                continue;
            }
            if (f > e) break;
            d = c[e - f];
            break;
        }
    }
    if (null == d) return null;
    let _ = d.split('.');
    if (_.length < 2) return null;
    let p = null === (t = _.pop()) || void 0 === t ? void 0 : t.toLowerCase();
    return null != p && r.has(p) ? p : null;
}
