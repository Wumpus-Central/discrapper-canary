n.d(t, {
    l: () => d,
    u: () => o,
});
var r = n(397927),
    i = n(918160),
    l = n(627794),
    s = n(53594),
    a = n(411335),
    c = n(985018);
let o = (e) => {
    switch (e) {
        case a.uh.KEYWORD:
        case a.uh.USER_PROFILE:
            return !0;
        default:
            return !1;
    }
};

function d(e, t) {
    var n, o, d, u, f, g;
    return null != e &&
        ((e) => {
            switch (e) {
                case a.uh.KEYWORD:
                case a.uh.ML_SPAM:
                case a.uh.DEFAULT_KEYWORD_LIST:
                case a.uh.MENTION_SPAM:
                case a.uh.SERVER_POLICY:
                case a.uh.USER_PROFILE:
                    return !0;
                default:
                    return !1;
            }
        })(e)
        ? {
              headerText:
                  null !== (n = null != (g = null == t ? void 0 : t.name) ? g : s.i$[e].getDefaultRuleName()) &&
                  void 0 !== n
                      ? n
                      : "",
              headerSubtext:
                  null !=
                  (o = ((e, t) => {
                      if ((0, l.wC)(t) && (0, l.KU)(t))
                          return t.triggerMetadata.regexPatterns.length > 0
                              ? c.intl.formatToPlainString(c.t.xZUvxR, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                    regexPatternCount: t.triggerMetadata.regexPatterns.length,
                                })
                              : c.intl.formatToPlainString(c.t.dJN7Lk, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                });
                  })(0, t))
                      ? o
                      : "",
              descriptionText:
                  null !=
                  (d = ((e) => {
                      switch (e) {
                          case a.uh.KEYWORD:
                              return c.intl.string(c.t.TzvaeK);
                          case a.uh.ML_SPAM:
                              return c.intl.string(c.t.jBZSQl);
                          case a.uh.DEFAULT_KEYWORD_LIST:
                              return c.intl.string(c.t.Drc8ft);
                          case a.uh.MENTION_SPAM:
                              return c.intl.string(c.t.flhXO4);
                          case a.uh.USER_PROFILE:
                              return c.intl.string(c.t.A35LyL);
                          default:
                              return null;
                      }
                  })(e))
                      ? d
                      : "",
              descriptionSubtext:
                  null !=
                  (u = ((e) => {
                      if (e === a.uh.KEYWORD) return c.intl.formatToPlainString(c.t.yNec2m, {});
                  })(e))
                      ? u
                      : "",
              icon:
                  null !=
                  (f = ((e) => {
                      switch (e) {
                          case a.uh.MENTION_SPAM:
                              return r.XxR;
                          case a.uh.KEYWORD:
                              return r.fdC;
                          case a.uh.ML_SPAM:
                          case a.uh.USER_PROFILE:
                              return (0, r.kHD)(i.A);
                          case a.uh.DEFAULT_KEYWORD_LIST:
                              return r.ZB$;
                      }
                  })(e))
                      ? f
                      : r.qYV,
          }
        : null;
}
