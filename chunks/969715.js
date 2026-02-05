n.d(t, { A: () => g }), n(321073);
var i = n(311907),
    l = n(570209),
    s = n(457699),
    a = n(352505),
    r = n(465364),
    o = n(383233),
    d = n(994500),
    c = n(517381),
    u = n(822382),
    h = n(65600);
let A = [];
function g(e) {
    let { searchContext: t } = e,
        n = a.m.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        g = (0, i.bG)(
            [h.A, c.A, s.A],
            () => {
                let e = (0, u.bS)(t),
                    i = h.A.getSearchResultsQuery(e),
                    a = c.A.getMessages(e);
                if (null == i || null == a || 0 === a.length) return A;
                let d = (0, l.wG)((0, u.dX)(i) ?? ""),
                    g = [];
                return (
                    a.forEach((e) => {
                        let t = new o.Ay(e);
                        (t = (t = (function (e, t) {
                            let [n] = t,
                                i = n.getMessage(e.id, e.channel_id);
                            return null != i && (e = e.merge({ attachments: i.attachments, embeds: i.embeds })), e;
                        })(t, [s.A])).set(
                            "customRenderedContent",
                            (0, r.Ay)(t, { postProcessor: d, allowHeading: !0, allowList: !0, allowGameMentions: n }),
                        )),
                            g.push(t);
                    }),
                    g
                );
            },
            [n, t],
            i.My,
        ),
        { blockCount: m, ignoreCount: p } = (0, i.cf)([d.A], () => {
            let e = 0,
                t = 0;
            return (
                g.forEach((n) => {
                    let i = d.A.isBlockedForMessage(n),
                        l = d.A.isIgnoredForMessage(n);
                    i ? e++ : l && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        });
    return { renderedMessages: g, blockCount: m, ignoreCount: p };
}
