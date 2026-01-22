n.d(t, {
    A: () => h,
}),
    n(896048),
    n(321073);
var r = n(311907),
    l = n(570209),
    i = n(457699),
    a = n(352505),
    s = n(465364),
    o = n(383233),
    c = n(994500),
    u = n(517381),
    d = n(822382),
    f = n(65600);
let p = [];

function h(e) {
    let { searchContext: t } = e,
        n = a.m.useExperiment({
            location: "useMessageRenderedContent",
        }).enabled,
        h = (0, r.bG)(
            [f.A, u.A, i.A],
            () => {
                var e;
                let r = (0, d.bS)(t),
                    a = f.A.getSearchResultsQuery(r),
                    c = u.A.getMessages(r);
                if (null == a || null == c || 0 === c.length) return p;
                let h = (0, l.wG)(null != (e = (0, d.dX)(a)) ? e : ""),
                    b = [];
                return (
                    c.forEach((e) => {
                        let t = new o.Ay(e);
                        (t = (t = (function (e, t) {
                            let [n] = t,
                                r = n.getMessage(e.id, e.channel_id);
                            return (
                                null != r &&
                                    (e = e.merge({
                                        attachments: r.attachments,
                                        embeds: r.embeds,
                                    })),
                                e
                            );
                        })(t, [i.A])).set(
                            "customRenderedContent",
                            (0, s.Ay)(t, {
                                postProcessor: h,
                                allowHeading: !0,
                                allowList: !0,
                                allowGameMentions: n,
                            }),
                        )),
                            b.push(t);
                    }),
                    b
                );
            },
            [n, t],
            r.My,
        ),
        { blockCount: b, ignoreCount: g } = (0, r.cf)([c.A], () => {
            let e = 0,
                t = 0;
            return (
                h.forEach((n) => {
                    let r = c.A.isBlockedForMessage(n),
                        l = c.A.isIgnoredForMessage(n);
                    r ? e++ : l && t++;
                }),
                {
                    blockCount: e,
                    ignoreCount: t,
                }
            );
        });
    return {
        renderedMessages: h,
        blockCount: b,
        ignoreCount: g,
    };
}
