n.d(t, { v: () => o }), n(388685), n(413496), n(433524), n(35282);
var r = n(591759);
let i = new Set(n(821445)),
    a = {
        'github.com': RegExp('/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*'),
        'bitbucket.org': RegExp('/downloads\\S*/[^/]*'),
        'gitlab.com': RegExp('/downloads\\S*/[^/]*')
    };
function o(e) {
    var t, n;
    let { pathname: o, hostname: s } = null != (n = r.Z.toURLSafe(e)) ? n : {};
    if (null == s) return null;
    let l = a[s];
    if ((null != l && null != o && !l.test(o)) || null == o) return null;
    let c = o;
    try {
        c = decodeURIComponent(o);
    } catch (e) {}
    let u = c.split('/'),
        d = null,
        _ = 0;
    for (let e = u.length - 1; e >= 0; e--) {
        let t = u[e];
        if ('' !== t && '.' !== t) {
            if ('..' === t) {
                _++;
                continue;
            }
            if (_ > e) break;
            d = u[e - _];
            break;
        }
    }
    if (null == d) return null;
    let f = d.split('.');
    if (f.length < 2) return null;
    let p = null == (t = f.pop()) ? void 0 : t.toLowerCase();
    return null != p && i.has(p) ? p : null;
}
