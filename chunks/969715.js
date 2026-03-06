"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(311907),
    s = n(570209),
    l = n(457699),
    r = n(465364),
    a = n(383233),
    o = n(994500),
    c = n(517381),
    d = n(822382),
    u = n(65600);
let h = [];
function A(e) {
    let { searchContext: t } = e,
        n = (0, i.bG)(
            [u.A, c.A, l.A],
            () => {
                let e = (0, d.bS)(t),
                    n = u.A.getSearchResultsQuery(e),
                    i = c.A.getMessages(e);
                if (null == n || null == i || 0 === i.length) return h;
                let o = (0, s.wG)((0, d.dX)(n) ?? ""),
                    A = [];
                return (
                    i.forEach((e) => {
                        let t = new a.Ay(e);
                        (t = (t = (function (e, t) {
                            let [n] = t,
                                i = n.getMessage(e.id, e.channel_id);
                            return null != i && (e = e.merge({ attachments: i.attachments, embeds: i.embeds })), e;
                        })(t, [l.A])).set(
                            "customRenderedContent",
                            (0, r.Ay)(t, { postProcessor: o, allowHeading: !0, allowList: !0 }),
                        )),
                            A.push(t);
                    }),
                    A
                );
            },
            [t],
            i.My,
        ),
        { blockCount: A, ignoreCount: m } = (0, i.cf)([o.A], () => {
            let e = 0,
                t = 0;
            return (
                n.forEach((n) => {
                    let i = o.A.isBlockedForMessage(n),
                        s = o.A.isIgnoredForMessage(n);
                    i ? e++ : s && t++;
                }),
                { blockCount: e, ignoreCount: t }
            );
        });
    return { renderedMessages: n, blockCount: A, ignoreCount: m };
}
