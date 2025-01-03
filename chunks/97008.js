t(411104);
var l = t(141795),
    i = t(476326),
    r = t(956664),
    o = t(693824);
n.Z = class e {
    toDataUrl(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(n, t);
    }
    async exportCanvas(e, n) {
        let { format: t, fileType: a = 'png', quality: u = 1, fileName: s } = n;
        if (t === o.kH.Base64) return this.toDataUrl(e, a, u);
        if (t === o.kH.Blob) {
            let n = this.toDataUrl(e, a, u);
            return (0, r.kD)(n);
        }
        if (t === o.kH.File) {
            let n = this.toDataUrl(e, a, u);
            return await (0, r.Bo)(n, s, 'image/png');
        }
        if (t === o.kH.CloudUpload) {
            let { channelId: t } = n,
                o = this.toDataUrl(e, a, u),
                d = await (0, r.Bo)(o, s, 'image/png');
            return new l.n(
                {
                    file: d,
                    platform: i.ow.WEB,
                    isThumbnail: !1
                },
                t
            );
        }
        throw Error('DiscordCanvas: '.concat(t, ' is not a valid export format.'));
    }
};
