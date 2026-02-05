"use strict";
n.d(t, { l: () => c, u: () => d });
var i = n(397927),
    s = n(918160),
    l = n(627794),
    r = n(53594),
    a = n(411335),
    o = n(985018);
let d = (e) => {
    switch (e) {
        case a.uh.KEYWORD:
        case a.uh.USER_PROFILE:
            return !0;
        default:
            return !1;
    }
};
function c(e, t) {
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
              headerText: t?.name ?? r.i$[e].getDefaultRuleName() ?? "",
              headerSubtext:
                  ((e, t) => {
                      if ((0, l.wC)(t) && (0, l.KU)(t))
                          return t.triggerMetadata.regexPatterns.length > 0
                              ? o.intl.formatToPlainString(o.t.xZUvxR, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                    regexPatternCount: t.triggerMetadata.regexPatterns.length,
                                })
                              : o.intl.formatToPlainString(o.t.dJN7Lk, {
                                    keywordCount: t.triggerMetadata.keywordFilter.length,
                                });
                  })(0, t) ?? "",
              descriptionText:
                  ((e) => {
                      switch (e) {
                          case a.uh.KEYWORD:
                              return o.intl.string(o.t.TzvaeK);
                          case a.uh.ML_SPAM:
                              return o.intl.string(o.t.jBZSQl);
                          case a.uh.DEFAULT_KEYWORD_LIST:
                              return o.intl.string(o.t.Drc8ft);
                          case a.uh.MENTION_SPAM:
                              return o.intl.string(o.t.flhXO4);
                          case a.uh.USER_PROFILE:
                              return o.intl.string(o.t.A35LyL);
                          default:
                              return null;
                      }
                  })(e) ?? "",
              descriptionSubtext:
                  ((e) => {
                      if (e === a.uh.KEYWORD) return o.intl.formatToPlainString(o.t.yNec2m, {});
                  })(e) ?? "",
              icon:
                  ((e) => {
                      switch (e) {
                          case a.uh.MENTION_SPAM:
                              return i.XxR;
                          case a.uh.KEYWORD:
                              return i.fdC;
                          case a.uh.ML_SPAM:
                          case a.uh.USER_PROFILE:
                              return (0, i.kHD)(s.A);
                          case a.uh.DEFAULT_KEYWORD_LIST:
                              return i.ZB$;
                      }
                  })(e) ?? i.qYV,
          }
        : null;
}
