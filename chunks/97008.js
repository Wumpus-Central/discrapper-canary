n.d(t, { Z: () => a }), n(411104);
var r = n(141795),
    l = n(476326),
    o = n(956664),
    i = n(693824);
let a = class {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: a = 'png', quality: s = 1, fileName: c } = t;
        if (n === i.kH.Base64) return this.toDataUrl(e, a, s);
        if (n === i.kH.Blob) {
            let t = this.toDataUrl(e, a, s);
            return (0, o.kD)(t);
        }
        if (n === i.kH.File) {
            let t = this.toDataUrl(e, a, s);
            return await (0, o.Bo)(t, c, 'image/png');
        }
        if (n === i.kH.CloudUpload) {
            let { channelId: n } = t,
                i = this.toDataUrl(e, a, s),
                u = await (0, o.Bo)(i, c, 'image/png');
            return new r.n(
                {
                    file: u,
                    platform: l.ow.WEB,
                    isThumbnail: !1
                },
                n
            );
        }
        throw Error('DiscordCanvas: '.concat(n, ' is not a valid export format.'));
    }
};
