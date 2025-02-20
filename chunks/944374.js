let r = n(689118),
    i = n(988324).Buffer,
    o = n(1199);
function a(e) {
    o.call(this, e), (this.enc = 'pem');
}
r(a, o),
    (e.exports = a),
    (a.prototype.decode = function (e, t) {
        let n = e.toString().split(/[\r\n]+/g),
            r = t.label.toUpperCase(),
            a = /^-----(BEGIN|END) ([^-]+)-----$/,
            s = -1,
            l = -1;
        for (let e = 0; e < n.length; e++) {
            let t = n[e].match(a);
            if (null !== t && t[2] === r) {
                if (-1 === s) {
                    if ('BEGIN' !== t[1]) break;
                    s = e;
                } else {
                    if ('END' !== t[1]) break;
                    l = e;
                    break;
                }
            }
        }
        if (-1 === s || -1 === l) throw Error('PEM section not found for: ' + r);
        let c = n.slice(s + 1, l).join('');
        c.replace(/[^a-z0-9+/=]+/gi, '');
        let u = i.from(c, 'base64');
        return o.prototype.decode.call(this, u, t);
    });
