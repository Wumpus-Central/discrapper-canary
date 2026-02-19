"use strict";
n.d(t, { A: () => p }), n(321073);
var i = n(311907),
    s = n(570209),
    l = n(457699),
    r = n(352505),
    a = n(465364),
    o = n(383233),
    c = n(994500),
    d = n(517381),
    u = n(822382),
    h = n(65600);
let A = [];
function p(e) {
    let { searchContext: t } = e,
        n = r.m.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        p = (0, i.bG)(
            [h.A, d.A, l.A],
            () => {
                let e = (0, u.bS)(t),
                    i = h.A.getSearchResultsQuery(e),
                    r = d.A.getMessages(e);
                if (null == i || null == r || 0 === r.length) return A;
                let c = (0, s.wG)((0, u.dX)(i) ?? ""),
                    p = [];
                return (
                    r.forEach((e) => {
                        let t = new o.Ay(e);
                        (t = (t = (function (e, t) {
                            let [n] = t,
                                i = n.getMessage(e.id, e.channel_id);
                            return null != i && (e = e.merge({ attachments: i.attachments, embeds: i.embeds })), e;
                        })(t, [l.A])).set(
                            "customRenderedContent",
                            (0, a.Ay)(t, { postProcessor: c, allowHeading: !0, allowList: !0, allowGameMentions: n }),
                        )),
                            p.push(t);
                    }),
                    p
                );
            },
            [n, t],
            i.My,
        ),
        { blockCount: g, ignoreCount: m } = (0, i.cf)([c.A], () => {
            let e = 0,
                t = 0;
            return (
                p.forEach((n) => {
                    let i = c.A.isBlockedForMessage(n),
                        s = c.A.isIgnoredForMessage(n);
                    i ? e++ : s && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        });
    return { renderedMessages: p, blockCount: g, ignoreCount: m };
}
