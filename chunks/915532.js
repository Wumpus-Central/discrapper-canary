a.r(d),
    Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData
        ? Intl.ListFormat.__addLocaleData({
              data: {
                  conjunction: {
                      long: { end: "{0} \uBC0F {1}", middle: "{0}, {1}", pair: "{0} \uBC0F {1}", start: "{0}, {1}" },
                      narrow: { end: "{0} \uBC0F {1}", middle: "{0}, {1}", pair: "{0} \uBC0F {1}", start: "{0}, {1}" },
                      short: { end: "{0} \uBC0F {1}", middle: "{0}, {1}", pair: "{0} \uBC0F {1}", start: "{0}, {1}" },
                  },
                  disjunction: {
                      long: {
                          end: "{0} \uB610\uB294 {1}",
                          middle: "{0}, {1}",
                          pair: "{0} \uB610\uB294 {1}",
                          start: "{0}, {1}",
                      },
                      narrow: {
                          end: "{0} \uB610\uB294 {1}",
                          middle: "{0}, {1}",
                          pair: "{0} \uB610\uB294 {1}",
                          start: "{0}, {1}",
                      },
                      short: {
                          end: "{0} \uB610\uB294 {1}",
                          middle: "{0}, {1}",
                          pair: "{0} \uB610\uB294 {1}",
                          start: "{0}, {1}",
                      },
                  },
                  unit: {
                      long: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                  },
              },
              locale: "ko",
          })
        : (globalThis.__FORMATJS_LISTFORMAT_DATA__ = globalThis.__FORMATJS_LISTFORMAT_DATA__ || []).push({
              data: {
                  conjunction: {
                      long: { end: "{0} \uBC0F {1}", middle: "{0}, {1}", pair: "{0} \uBC0F {1}", start: "{0}, {1}" },
                      narrow: { end: "{0} \uBC0F {1}", middle: "{0}, {1}", pair: "{0} \uBC0F {1}", start: "{0}, {1}" },
                      short: { end: "{0} \uBC0F {1}", middle: "{0}, {1}", pair: "{0} \uBC0F {1}", start: "{0}, {1}" },
                  },
                  disjunction: {
                      long: {
                          end: "{0} \uB610\uB294 {1}",
                          middle: "{0}, {1}",
                          pair: "{0} \uB610\uB294 {1}",
                          start: "{0}, {1}",
                      },
                      narrow: {
                          end: "{0} \uB610\uB294 {1}",
                          middle: "{0}, {1}",
                          pair: "{0} \uB610\uB294 {1}",
                          start: "{0}, {1}",
                      },
                      short: {
                          end: "{0} \uB610\uB294 {1}",
                          middle: "{0}, {1}",
                          pair: "{0} \uB610\uB294 {1}",
                          start: "{0}, {1}",
                      },
                  },
                  unit: {
                      long: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      narrow: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                      short: { end: "{0} {1}", middle: "{0} {1}", pair: "{0} {1}", start: "{0} {1}" },
                  },
              },
              locale: "ko",
          });
