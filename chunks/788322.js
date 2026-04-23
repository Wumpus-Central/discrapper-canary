n.d(t, { F: () => d, L: () => o });
var i = n(417597),
    l = n(320501),
    a = n(930125),
    r = n(282108),
    s = n(33358);
let o = (e, t, n) => {
        let o = (0, i.bG)([l.A], () => l.A.getMessage(e, t)),
            d = (0, s.P)(o);
        if (null == o) return [];
        let c =
            void 0 !== n ? (e) => e.url === n || e.id === n : (e) => (0, r.qo)({ type: a.D.Attachment, media: e }, d);
        return o?.attachments?.filter(c) ?? [];
    },
    d = (e, t, n) => {
        let o = (0, i.bG)([l.A], () => l.A.getMessage(e, t)),
            d = (0, s.P)(o);
        if (null == o) return [];
        let c = void 0 !== n ? (e) => e.id === n : (e) => (0, r.qo)({ type: a.D.Embed, media: e }, d);
        return o?.embeds?.filter(c) ?? [];
    };
