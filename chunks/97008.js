n.d(t, { Z: () => o }), n(411104);
var l = n(141795),
    i = n(476326),
    r = n(956664),
    a = n(693824);
let o = class {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: o = 'png', quality: s = 1, fileName: u } = t;
        if (n === a.kH.Base64) return this.toDataUrl(e, o, s);
        if (n === a.kH.Blob) {
            let t = this.toDataUrl(e, o, s);
            return (0, r.kD)(t);
        }
        if (n === a.kH.File) {
            let t = this.toDataUrl(e, o, s);
            return await (0, r.Bo)(t, u, 'image/png');
        }
        if (n === a.kH.CloudUpload) {
            let { channelId: n } = t,
                a = this.toDataUrl(e, o, s),
                c = await (0, r.Bo)(a, u, 'image/png');
            return new l.n(
                {
                    file: c,
                    platform: i.ow.WEB,
                    isThumbnail: !1
                },
                n
            );
        }
        throw Error('DiscordCanvas: '.concat(n, ' is not a valid export format.'));
    }
};
