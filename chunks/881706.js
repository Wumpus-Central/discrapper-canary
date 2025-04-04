n.d(t, { v: () => a }), n(47120), n(474991), n(398202), n(301563);
var r = n(591759);
let i = new Set(n(821445)),
    o = {
        'github.com': RegExp('/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*'),
        'bitbucket.org': RegExp('/downloads\\S*/[^/]*'),
        'gitlab.com': RegExp('/downloads\\S*/[^/]*')
    };
function a(e) {
    var t, n;
    let { pathname: a, hostname: s } = null != (n = r.Z.toURLSafe(e)) ? n : {};
    if (null == s) return null;
    let l = o[s];
    if ((null != l && null != a && !l.test(a)) || null == a) return null;
    let c = a;
    try {
        c = decodeURIComponent(a);
    } catch (e) {}
    let u = c.split('/'),
        d = null,
        f = 0;
    for (let e = u.length - 1; e >= 0; e--) {
        let t = u[e];
        if ('' !== t && '.' !== t) {
            if ('..' === t) {
                f++;
                continue;
            }
            if (f > e) break;
            d = u[e - f];
            break;
        }
    }
    if (null == d) return null;
    let _ = d.split('.');
    if (_.length < 2) return null;
    let p = null == (t = _.pop()) ? void 0 : t.toLowerCase();
    return null != p && i.has(p) ? p : null;
}
