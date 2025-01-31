let i = n(689118),
    r = n(988324).Buffer,
    a = n(1199);
function s(e) {
    a.call(this, e), (this.enc = 'pem');
}
i(s, a),
    (e.exports = s),
    (s.prototype.decode = function (e, t) {
        let n = e.toString().split(/[\r\n]+/g),
            i = t.label.toUpperCase(),
            s = /^-----(BEGIN|END) ([^-]+)-----$/,
            o = -1,
            l = -1;
        for (let e = 0; e < n.length; e++) {
            let t = n[e].match(s);
            if (null !== t && t[2] === i) {
                if (-1 === o) {
                    if ('BEGIN' !== t[1]) break;
                    o = e;
                } else {
                    if ('END' !== t[1]) break;
                    l = e;
                    break;
                }
            }
        }
        if (-1 === o || -1 === l) throw Error('PEM section not found for: ' + i);
        let u = n.slice(o + 1, l).join('');
        u.replace(/[^a-z0-9+/=]+/gi, '');
        let c = r.from(u, 'base64');
        return a.prototype.decode.call(this, c, t);
    });
