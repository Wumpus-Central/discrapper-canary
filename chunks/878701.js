n.d(t, { l: () => h, u: () => g });
var i = n(935063),
    l = n(194117),
    s = n(565787),
    r = n(97893),
    a = n(173936),
    o = n(918160),
    d = n(627794),
    c = n(53594),
    u = n(411335),
    m = n(985018);
let g = (e) => {
    switch (e) {
        case u.uh.KEYWORD:
        case u.uh.USER_PROFILE:
            return !0;
        default:
            return !1;
    }
};
function h(e, t) {
    return null != e &&
        ((e) => {
            switch (e) {
                case u.uh.KEYWORD:
                case u.uh.ML_SPAM:
                case u.uh.DEFAULT_KEYWORD_LIST:
                case u.uh.MENTION_SPAM:
                case u.uh.SERVER_POLICY:
                case u.uh.USER_PROFILE:
                    return !0;
                default:
                    return !1;
            }
        })(e)
        ? {
              headerText: t?.name ?? c.i$[e].getDefaultRuleName() ?? "",
              headerSubtext:
                  ((e, t) => {
                      if ((0, d.wC)(t) && (0, d.KU)(t))
                          return t.triggerMetadata.regexPatterns.length > 0
                              ? m.intl.formatToPlainString(m.t.xZUvxR, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                    regexPatternCount: t.triggerMetadata.regexPatterns.length,
                                })
                              : m.intl.formatToPlainString(m.t.dJN7Lk, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                });
                  })(0, t) ?? "",
              descriptionText:
                  ((e) => {
                      switch (e) {
                          case u.uh.KEYWORD:
                              return m.intl.string(m.t.TzvaeK);
                          case u.uh.ML_SPAM:
                              return m.intl.string(m.t.jBZSQl);
                          case u.uh.DEFAULT_KEYWORD_LIST:
                              return m.intl.string(m.t.Drc8ft);
                          case u.uh.MENTION_SPAM:
                              return m.intl.string(m.t.flhXO4);
                          case u.uh.USER_PROFILE:
                              return m.intl.string(m.t.A35LyL);
                          default:
                              return null;
                      }
                  })(e) ?? "",
              descriptionSubtext:
                  ((e) => {
                      if (e === u.uh.KEYWORD) return m.intl.formatToPlainString(m.t.yNec2m, {});
                  })(e) ?? "",
              icon:
                  ((e) => {
                      switch (e) {
                          case u.uh.MENTION_SPAM:
                              return i.X;
                          case u.uh.KEYWORD:
                              return l.f;
                          case u.uh.ML_SPAM:
                          case u.uh.USER_PROFILE:
                              return (0, s.k)(o.A);
                          case u.uh.DEFAULT_KEYWORD_LIST:
                              return r.Z;
                      }
                  })(e) ?? a.q,
          }
        : null;
}
