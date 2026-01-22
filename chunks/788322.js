n.d(t, {
    F: () => s,
    L: () => c,
});
var r = n(417597),
    l = n(320501),
    i = n(930125),
    o = n(282108),
    a = n(33358);
let c = (e, t, n) => {
        var c, s;
        let d = (0, r.bG)([l.A], () => l.A.getMessage(e, t)),
            u = (0, a.P)(d);
        if (null == d) return [];
        let f =
            void 0 !== n
                ? (e) => e.url === n || e.id === n
                : (e) =>
                      (0, o.qo)(
                          {
                              type: i.D.Attachment,
                              media: e,
                          },
                          u,
                      );
        return null != (c = null == d || null == (s = d.attachments) ? void 0 : s.filter(f)) ? c : [];
    },
    s = (e, t, n) => {
        var c, s;
        let d = (0, r.bG)([l.A], () => l.A.getMessage(e, t)),
            u = (0, a.P)(d);
        if (null == d) return [];
        let f =
            void 0 !== n
                ? (e) => e.id === n
                : (e) =>
                      (0, o.qo)(
                          {
                              type: i.D.Embed,
                              media: e,
                          },
                          u,
                      );
        return null != (c = null == d || null == (s = d.embeds) ? void 0 : s.filter(f)) ? c : [];
    };
