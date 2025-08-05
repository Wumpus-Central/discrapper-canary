(n.d(t, { U: () => h }), n(388685), n(781311));
var r = n(255367),
    i = n(73800),
    l = n(544891),
    a = n(481060),
    s = n(466721),
    o = n(375954),
    c = n(981631),
    d = n(388032);
async function u(e) {
    try {
        var t, n;
        let r = await l.tn.post({
            url: c.ANM.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return r.ok && null != (n = null == (t = r.body) ? void 0 : t.title) ? n : null;
    } catch (e) {
        return null;
    }
}
function h(e) {
    let { parentChannel: t, parentMessageId: n, updateThreadSettings: l, threadSettings: c, textAreaState: h } = e,
        [p, f] = i.useState(!1),
        [g, m] = i.useState(!1),
        { enableAIFeatures: b } = s.C.useExperiment({ location: 'CreateThreadSidebar' }),
        _ = i.useCallback(async () => {
            if (b) {
                f(!0);
                try {
                    let r = null;
                    if (null != n) {
                        var e;
                        let i = o.Z.getMessage(t.id, n);
                        r = null != (e = null == i ? void 0 : i.content) ? e : null;
                    } else h.textValue.trim().length >= 10 && (r = h.textValue);
                    if (null != r) {
                        let e = await u(r);
                        null != e && '' !== e.trim() && l({ name: e });
                    }
                } finally {
                    f(!1);
                }
            }
        }, [t.id, n, l, b, h.textValue]);
    (i.useEffect(() => {
        (m(!1), f(!1), l({ name: '' }));
    }, [n, l]),
        i.useEffect(() => {
            (null == c.name || '' === c.name.trim()) && !g && b && null != n && (m(!0), _());
        }, [t.id, n, l, c.name, g, b, _]));
    let y = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return b
                ? (0, r.jsx)(a.ua7, {
                      text: d.intl.string(d.t.ZF2oBg),
                      children: (t) => {
                          var i, l;
                          return (0, r.jsx)(
                              a.hU,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, t)),
                              (l = l =
                                  {
                                      icon: a.$2U,
                                      variant: 'secondary',
                                      size: 'sm',
                                      'aria-label': d.intl.string(d.t.ZF2oBg),
                                      onClick: _,
                                      disabled: e || p || (null == n && h.textValue.trim().length < 10),
                                      loading: p,
                                      type: 'button'
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      }
                  })
                : null;
        },
        [b, p, n, h.textValue, _]
    );
    return {
        isGeneratingAI: p,
        generateAIName: _,
        enableAIFeatures: b,
        renderAiGenerateButton: y
    };
}
