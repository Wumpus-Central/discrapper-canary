n.d(t, { K: () => T }), n(47120), n(627341);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(867824),
    o = n(642128),
    c = n(278074),
    d = n(748780),
    u = n(481060),
    m = n(313201),
    _ = n(542578),
    h = n(203143),
    p = n(79390),
    g = n(839963),
    f = n(139256),
    x = n(294608),
    C = n(388032),
    v = n(104763);
function E(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: r } = e,
        o = (0, m.Dt)(),
        { channelId: c, messageId: d } = (0, x.pE)(),
        [g, f] = l.useState(''),
        [C, E] = l.useState(!1),
        I = '' !== g && C,
        N = l.useCallback(() => {
            f((0, p.e1)(d, c, r));
        }, [d, c, r]),
        S = l.useCallback(() => {
            N(), E(!0);
        }, [N]),
        T = l.useCallback(() => {
            E(!1);
        }, []),
        b = l.useCallback(() => {
            (0, h.n)({
                channelId: c,
                messageId: d,
                answerId: r
            });
        }, [c, d, r]);
    l.useEffect(() => {
        if (C)
            return (
                _.Z.addReactChangeListener(N),
                () => {
                    _.Z.removeReactChangeListener(N);
                }
            );
    }, [C, N]);
    let A = (0, i.jsx)(u.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: v.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, i.jsxs)('div', {
        className: v.votesData,
        children: [
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.ua7, {
                              text: (0, i.jsx)(u.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: g
                              }),
                              forceOpen: I,
                              'aria-label': !1,
                              children: (e) =>
                                  (0, i.jsx)(u.zxk, {
                                      ...e,
                                      onMouseEnter: S,
                                      onMouseLeave: T,
                                      onFocus: S,
                                      onBlur: T,
                                      onClick: b,
                                      className: v.voteCountButton,
                                      'aria-describedby': I ? o : void 0,
                                      look: u.zxk.Looks.BLANK,
                                      size: u.zxk.Sizes.NONE,
                                      children: A
                                  })
                          }),
                          I &&
                              (0, i.jsx)(s.T, {
                                  id: o,
                                  children: g
                              })
                      ]
                  })
                : (0, i.jsx)(i.Fragment, { children: A }),
            (0, i.jsxs)(u.Text, {
                variant: 'text-md/bold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: [t, '%']
            })
        ]
    });
}
function I(e) {
    let { percentage: t, shouldAnimate: n } = e,
        l = (0, u.q_F)(
            {
                from: { width: n ? '0%' : ''.concat(t, '%') },
                to: { width: ''.concat(t, '%') },
                config: {
                    duration: 1200,
                    easing: d.Z.Easing.inOut(d.Z.Easing.ease)
                }
            },
            'animate-always'
        );
    return (0, i.jsx)(o.animated.span, {
        className: v.votePercentageBar,
        style: l,
        'aria-hidden': !0
    });
}
function N(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: l, isVictor: a, isExpired: r, className: s } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: l
    })
        .with({ answersInteraction: g.Y7.RADIO_BUTTONS }, () =>
            (0, i.jsx)(f.Og, {
                isSelected: n,
                size: 24,
                className: s
            })
        )
        .with({ answersInteraction: g.Y7.CHECKBOXES }, () =>
            (0, i.jsx)(f.zs, {
                isSelected: n,
                size: 20,
                className: s
            })
        )
        .with(
            {
                answersInteraction: g.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, i.jsx)(f.ZY, {
                    isVictor: a,
                    isExpired: r,
                    size: 24,
                    className: s
                })
        )
        .otherwise(() => null);
}
function S(e) {
    let { answer: t, isExpired: n, answersInteraction: l, canShowVoteCounts: a, canShowVoterDetails: o } = e,
        c = !0 === t.isSelected,
        d = !0 === t.didSelfVote,
        m = !0 === t.isVictor,
        _ = t.shouldAnimateTransition;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: r()(v.answerInner, {
                [v.currentlyVoting]: l !== g.Y7.LIST,
                [v.selected]: c
            }),
            children: [
                a
                    ? (0, i.jsx)(I, {
                          percentage: t.votesPercentage,
                          shouldAnimate: _
                      })
                    : null,
                null != t.pollMedia.emoji &&
                    (0, i.jsx)(f.sc, {
                        className: v.emoji,
                        emoji: t.pollMedia.emoji
                    }),
                (0, i.jsx)(u.Text, {
                    className: v.label,
                    variant: 'text-sm/semibold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: t.pollMedia.text
                }),
                t.didSelfVote && (0, i.jsx)(s.T, { children: C.intl.string(C.t['8DAM+/']) }),
                a &&
                    (0, i.jsx)(E, {
                        percentage: t.votesPercentage,
                        label: t.votes,
                        canShowVoterDetails: o,
                        answerId: t.answerId
                    }),
                (0, i.jsx)(N, {
                    answersInteraction: l,
                    isSelected: c,
                    didSelfVote: d,
                    isVictor: m,
                    isExpired: n,
                    className: v.answerSelectionIcon
                })
            ]
        })
    });
}
function T(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: l, canTapAnswers: a, ...r } = e;
    return (0, i.jsx)(f.$e, {
        className: v.answersContainer,
        answerClassName: v.answer,
        answersInteraction: n,
        canTapAnswers: a,
        renderAnswerContent: (e) =>
            (0, i.jsx)(S, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: l,
                canShowVoterDetails: a
            }),
        ...r
    });
}
