(n.d(t, { K: () => x }), n(388685), n(314940));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(528708),
    l = n(66546),
    c = n(278074),
    u = n(748780),
    d = n(481060),
    f = n(313201),
    _ = n(542578),
    p = n(203143),
    h = n(79390),
    m = n(839963),
    g = n(139256),
    E = n(294608),
    b = n(388032),
    y = n(709893);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let N = 24,
    C = 24,
    w = 20;
function R(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: o } = e,
        l = (0, f.Dt)(),
        { channelId: c, messageId: u } = (0, E.pE)(),
        [m, g] = i.useState(''),
        [b, O] = i.useState(!1),
        I = '' !== m && b,
        S = i.useCallback(() => {
            g((0, h.e1)(u, c, o));
        }, [u, c, o]),
        A = i.useCallback(() => {
            (S(), O(!0));
        }, [S]),
        N = i.useCallback(() => {
            O(!1);
        }, []),
        C = i.useCallback(() => {
            (0, p.n)({
                channelId: c,
                messageId: u,
                answerId: o
            });
        }, [c, u, o]);
    return (
        i.useEffect(() => {
            if (b)
                return (
                    _.Z.addReactChangeListener(S),
                    () => {
                        _.Z.removeReactChangeListener(S);
                    }
                );
        }, [b, S]),
        (0, r.jsxs)('div', {
            className: y.votesData,
            children: [
                a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.ua7, {
                                  text: (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      scaleFontToUserSetting: !0,
                                      children: m
                                  }),
                                  forceOpen: I,
                                  'aria-label': !1,
                                  children: (e) =>
                                      (0, r.jsx)(
                                          d.Avr,
                                          T(v({}, e), {
                                              onMouseEnter: A,
                                              onMouseLeave: N,
                                              onFocus: A,
                                              onBlur: N,
                                              onClick: C,
                                              'aria-describedby': I ? l : void 0,
                                              text: n,
                                              variant: 'secondary',
                                              textVariant: 'text-xs/semibold'
                                          })
                                      )
                              }),
                              I &&
                                  (0, r.jsx)(s.T, {
                                      id: l,
                                      children: m
                                  })
                          ]
                      })
                    : (0, r.jsx)(d.Text, {
                          variant: 'text-xs/semibold',
                          color: 'none',
                          scaleFontToUserSetting: !0,
                          children: n
                      }),
                (0, r.jsxs)(d.Text, {
                    variant: 'text-md/bold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: [t, '%']
                })
            ]
        })
    );
}
function P(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, d.q_F)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: u.Z.Easing.inOut(u.Z.Easing.ease)
                }
            },
            'animate-always'
        );
    return (0, r.jsx)(l.animated.span, {
        className: y.votePercentageBar,
        style: i,
        'aria-hidden': !0
    });
}
function D(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: a, isExpired: o, className: s } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: i
    })
        .with({ answersInteraction: m.Y7.RADIO_BUTTONS }, () =>
            (0, r.jsx)(g.Og, {
                isSelected: n,
                size: C,
                className: s
            })
        )
        .with({ answersInteraction: m.Y7.CHECKBOXES }, () =>
            (0, r.jsx)(g.zs, {
                isSelected: n,
                size: w,
                className: s
            })
        )
        .with(
            {
                answersInteraction: m.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, r.jsx)(g.ZY, {
                    isVictor: a,
                    isExpired: o,
                    size: N,
                    className: s
                })
        )
        .otherwise(() => null);
}
function L(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: a, canShowVoterDetails: l } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        f = !0 === t.isVictor,
        _ = t.shouldAnimateTransition;
    return (0, r.jsxs)('div', {
        className: o()(y.answerInner, {
            [y.currentlyVoting]: i !== m.Y7.LIST,
            [y.selected]: c
        }),
        children: [
            a
                ? (0, r.jsx)(P, {
                      percentage: t.votesPercentage,
                      shouldAnimate: _
                  })
                : null,
            null != t.pollMedia.emoji &&
                (0, r.jsx)(g.sc, {
                    className: y.emoji,
                    emoji: t.pollMedia.emoji
                }),
            (0, r.jsx)(d.Text, {
                className: y.label,
                variant: 'text-sm/semibold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text
            }),
            t.didSelfVote && (0, r.jsx)(s.T, { children: b.intl.string(b.t['8DAM+/']) }),
            a &&
                (0, r.jsx)(R, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: l,
                    answerId: t.answerId
                }),
            (0, r.jsx)(D, {
                answersInteraction: i,
                isSelected: c,
                didSelfVote: u,
                isVictor: f,
                isExpired: n,
                className: y.answerSelectionIcon
            })
        ]
    });
}
function x(e) {
    var { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: a } = e,
        o = S(e, ['isExpired', 'answersInteraction', 'canShowVoteCounts', 'canTapAnswers']);
    return (0, r.jsx)(
        g.$e,
        v(
            {
                className: y.answersContainer,
                answerClassName: y.answer,
                answersInteraction: n,
                canTapAnswers: a,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(L, {
                        answer: e,
                        isExpired: t,
                        answersInteraction: n,
                        canShowVoteCounts: i,
                        canShowVoterDetails: a
                    })
            },
            o
        )
    );
}
