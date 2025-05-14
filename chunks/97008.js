n.d(t, { Z: () => l }), n(415506);
var r = n(141795),
    i = n(476326),
    o = n(956664),
    a = n(693824);
class s {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: s = 'png', quality: l = 1, fileName: c } = t;
        if (n === a.kH.Base64) return this.toDataUrl(e, s, l);
        if (n === a.kH.Blob) {
            let t = this.toDataUrl(e, s, l);
            return (0, o.kD)(t);
        }
        if (n === a.kH.File) {
            let t = this.toDataUrl(e, s, l);
            return await (0, o.Bo)(t, c, 'image/png');
        }
        if (n === a.kH.CloudUpload) {
            let { channelId: n } = t,
                a = this.toDataUrl(e, s, l),
                u = await (0, o.Bo)(a, c, 'image/png');
            return new r.n(
                {
                    file: u,
                    platform: i.ow.WEB,
                    isThumbnail: !1
                },
                n
            );
        }
        throw Error('DiscordCanvas: '.concat(n, ' is not a valid export format.'));
    }
}
let l = s;
