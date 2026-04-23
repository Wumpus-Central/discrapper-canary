s.d(t, { A: () => g }), s(321073);
var n = s(311907),
    a = s(570209),
    l = s(457699),
    r = s(465364),
    i = s(383233),
    o = s(994500),
    c = s(517381),
    u = s(822382),
    d = s(65600);
let h = [];
function g(e) {
    let { searchContext: t } = e,
        s = (0, n.bG)(
            [d.A, c.A, l.A],
            () => {
                let e = (0, u.bS)(t),
                    s = d.A.getSearchResultsQuery(e),
                    n = c.A.getMessages(e);
                if (null == s || null == n || 0 === n.length) return h;
                let o = (0, a.wG)((0, u.dX)(s) ?? ""),
                    g = [];
                return (
                    n.forEach((e) => {
                        let t = new i.Ay(e);
                        (t = (t = (function (e, t) {
                            let [s] = t,
                                n = s.getMessage(e.id, e.channel_id);
                            return null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e;
                        })(t, [l.A])).set(
                            "customRenderedContent",
                            (0, r.Ay)(t, { postProcessor: o, allowHeading: !0, allowList: !0 }),
                        )),
                            g.push(t);
                    }),
                    g
                );
            },
            [t],
            n.My,
        ),
        { blockCount: g, ignoreCount: p } = (0, n.cf)([o.A], () => {
            let e = 0,
                t = 0;
            return (
                s.forEach((s) => {
                    let n = o.A.isBlockedForMessage(s),
                        a = o.A.isIgnoredForMessage(s);
                    n ? e++ : a && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        });
    return { renderedMessages: s, blockCount: g, ignoreCount: p };
}
