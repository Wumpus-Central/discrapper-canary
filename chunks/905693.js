n.d(t, {
    lW: () => a,
    tK: () => s,
});
var i,
    c = n(367907),
    l = n(626135),
    r = n(63063),
    o = n(981631),
    s =
        (((i = {}).DESCRIPTION = "description"),
        (i.CATEGORIES = "categories"),
        (i.TAGS = "tags"),
        (i.AGREE_TO_RULES = "agree_to_rules"),
        i);
let a = (e) => {
    let { articleId: t, guildId: n, modalStep: i = null, pageView: s = null } = e;
    open(r.Z.getArticleURL(t)),
        l.default.track(
            o.rMx.DISCOVERY_SETUP_CTA_CLICKED,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })(
                {
                    cta_name: o.b8q,
                    discovery_settings_view: s,
                    help_center_article_id: t,
                    modal_step: i,
                },
                (0, c.hH)(n),
            ),
        );
};
