r.d(n, {
    v: function () {
        return l;
    }
});
var i = r(47120);
var a = r(591759);
let o = new Set(r(821445)),
    s = {
        'github.com': RegExp('/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*'),
        'bitbucket.org': RegExp('/downloads\\S*/[^/]*'),
        'gitlab.com': RegExp('/downloads\\S*/[^/]*')
    };
function l(e) {
    var n, r;
    let { pathname: i, hostname: l } = null !== (r = a.Z.toURLSafe(e)) && void 0 !== r ? r : {};
    if (null == l) return null;
    let u = s[l];
    if ((null != u && null != i && !u.test(i)) || null == i) return null;
    let c = i;
    try {
        c = decodeURIComponent(i);
    } catch (e) {}
    let d = c.split('/'),
        f = null,
        p = 0;
    for (let e = d.length - 1; e >= 0; e--) {
        let n = d[e];
        if ('' !== n && '.' !== n) {
            if ('..' === n) {
                p++;
                continue;
            }
            if (p > e) break;
            f = d[e - p];
            break;
        }
    }
    if (null == f) return null;
    let h = f.split('.');
    if (h.length < 2) return null;
    let _ = null === (n = h.pop()) || void 0 === n ? void 0 : n.toLowerCase();
    return null != _ && o.has(_) ? _ : null;
}
