(n.d(t, { Z: () => m }), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(544891),
    a = n(481060),
    o = n(466721),
    s = n(633302),
    c = n(375954),
    u = n(981631),
    d = n(489887),
    p = n(388032),
    h = n(377912);
function f(e) {
    var t, n, r;
    let i = null != (r = null == (t = e.author) ? void 0 : t.username) ? r : 'Unknown',
        l = ''.concat(i, ': ').concat(e.content);
    if ((null == (n = e.embeds) ? void 0 : n.length) > 0) {
        let t = e.embeds
            .map((e) => {
                let t = [];
                if ((null != e.rawTitle && '' !== e.rawTitle && t.push(e.rawTitle), null != e.rawDescription && '' !== e.rawDescription && t.push(e.rawDescription), null != e.fields && e.fields.length > 0)) {
                    let n = e.fields
                        .map((e) => {
                            let t = [];
                            return ('' !== e.rawName && t.push(e.rawName), '' !== e.rawValue && t.push(e.rawValue), t.join(': '));
                        })
                        .filter((e) => e.length > 0)
                        .join(', ');
                    '' !== n && t.push(n);
                }
                return t.join('\n');
            })
            .filter((e) => e.length > 0)
            .join('\n');
        '' !== t && (l += ''.concat(' ').concat(t));
    }
    return l;
}
function m() {
    var e;
    let [t, m] = i.useState([]),
        [g, b] = i.useState(!1),
        [_, y] = i.useState(!1),
        [C, x] = i.useState(null),
        v = o.C.useExperiment({ location: 'ChannelAttachMenu' }),
        O = null != (e = null == v ? void 0 : v.enableAIFeatures) && e;
    i.useEffect(
        () => () => {
            (m([]), b(!1), y(!1), x(null));
        },
        []
    );
    let j = i.useCallback(async (e, t) => {
        (b(!0), m([]));
        let n = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = c.Z.getMessages(e.id).toArray().slice(-n).map(f).join('\n');
            return r + ('' !== r ? '\n\n' : '') + t;
        })(e, t);
        try {
            let e = await l.tn.post({
                    url: u.ANM.AI_POLL_SUGGESTIONS,
                    body: { content: n },
                    rejectWithError: !1
                }),
                t = e.body;
            e.ok && null != t.suggestions && m(t.suggestions);
        } finally {
            b(!1);
        }
    }, []);
    return (
        i.useEffect(() => {
            _ && null != C && O && j(C.channel, C.editorTextContent);
        }, [_, C, O, j]),
        i.useCallback(
            (e, i) =>
                O
                    ? (_ ||
                          (x({
                              channel: e,
                              editorTextContent: i
                          }),
                          y(!0)),
                      g)
                        ? (0, r.jsx)(
                              a.sNh,
                              {
                                  id: 'poll-suggestions-fetching',
                                  disabled: !0,
                                  'aria-label': p.intl.string(p.t.GlVijo),
                                  label: (0, r.jsxs)('div', {
                                      className: h.loadingContainer,
                                      children: [(0, r.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS }), (0, r.jsx)('span', { children: p.intl.string(p.t.GlVijo) })]
                                  })
                              },
                              'poll-suggestions-fetching'
                          )
                        : 0 === t.length
                          ? (0, r.jsx)(
                                a.sNh,
                                {
                                    id: 'no-poll-suggestions',
                                    label: p.intl.string(p.t.evkygI),
                                    disabled: !0,
                                    'aria-label': p.intl.string(p.t.evkygI)
                                },
                                'no-poll-suggestions'
                            )
                          : t.map((t, i) =>
                                (0, r.jsx)(
                                    a.sNh,
                                    {
                                        id: 'poll-suggestions-'.concat(i),
                                        label: t.title,
                                        subtext: t.question,
                                        'aria-label': t.question,
                                        action: () => {
                                            (0, a.ZDy)(
                                                async () => {
                                                    let { default: i } = await n.e('68784').then(n.bind(n, 611611)),
                                                        l = t.answers.map((e) => {
                                                            var t;
                                                            return {
                                                                text: e.text,
                                                                image: {
                                                                    emoji: null != (t = s.ZP.convertSurrogateToBase(e.image.emoji)) ? t : void 0,
                                                                    stickerId: void 0,
                                                                    mediaAttachmentState: void 0
                                                                }
                                                            };
                                                        });
                                                    return (n) => {
                                                        var a, o;
                                                        return (0, r.jsx)(
                                                            i,
                                                            ((a = (function (e) {
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
                                                            })({}, n)),
                                                            (o = o =
                                                                {
                                                                    channel: e,
                                                                    initialQuestion: t.question,
                                                                    initialAnswers: l
                                                                }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                                                : (function (e, t) {
                                                                      var n = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var r = Object.getOwnPropertySymbols(e);
                                                                          n.push.apply(n, r);
                                                                      }
                                                                      return n;
                                                                  })(Object(o)).forEach(function (e) {
                                                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                                                  }),
                                                            a)
                                                        );
                                                    };
                                                },
                                                { modalKey: d.$z }
                                            );
                                        }
                                    },
                                    'poll-suggestions-'.concat(i)
                                )
                            )
                    : null,
            [O, _, g, t]
        )
    );
}
