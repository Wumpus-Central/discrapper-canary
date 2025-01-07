n.d(t, {
    K: function () {
        return S;
    }
}),
    n(47120),
    n(627341);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(867824),
    s = n(666912),
    c = n(278074),
    u = n(748780),
    d = n(481060),
    m = n(313201),
    h = n(542578),
    f = n(203143),
    p = n(79390),
    _ = n(839963),
    g = n(139256),
    E = n(294608),
    C = n(388032),
    I = n(67358);
function x(e) {
    let { percentage: t, label: n, canShowVoterDetails: l, answerId: a } = e,
        s = (0, m.Dt)(),
        { channelId: c, messageId: u } = (0, E.pE)(),
        [_, g] = r.useState(''),
        [C, x] = r.useState(!1),
        N = '' !== _ && C,
        v = r.useCallback(() => {
            g((0, p.e1)(u, c, a));
        }, [u, c, a]),
        T = r.useCallback(() => {
            v(), x(!0);
        }, [v]),
        S = r.useCallback(() => {
            x(!1);
        }, []),
        A = r.useCallback(() => {
            (0, f.n)({
                channelId: c,
                messageId: u,
                answerId: a
            });
        }, [c, u, a]);
    r.useEffect(() => {
        if (!!C)
            return (
                h.Z.addReactChangeListener(v),
                () => {
                    h.Z.removeReactChangeListener(v);
                }
            );
    }, [C, v]);
    let b = (0, i.jsx)(d.Text, {
        variant: 'text-xs/semibold',
        color: 'none',
        className: I.voteCount,
        scaleFontToUserSetting: !0,
        children: n
    });
    return (0, i.jsxs)('div', {
        className: I.votesData,
        children: [
            l
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.Tooltip, {
                              text: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  scaleFontToUserSetting: !0,
                                  children: _
                              }),
                              forceOpen: N,
                              'aria-label': !1,
                              children: (e) =>
                                  (0, i.jsx)(d.Button, {
                                      ...e,
                                      onMouseEnter: T,
                                      onMouseLeave: S,
                                      onFocus: T,
                                      onBlur: S,
                                      onClick: A,
                                      className: I.voteCountButton,
                                      'aria-describedby': N ? s : void 0,
                                      look: d.Button.Looks.BLANK,
                                      size: d.Button.Sizes.NONE,
                                      children: b
                                  })
                          }),
                          N &&
                              (0, i.jsx)(o.T, {
                                  id: s,
                                  children: _
                              })
                      ]
                  })
                : (0, i.jsx)(i.Fragment, { children: b }),
            (0, i.jsxs)(d.Text, {
                variant: 'text-md/bold',
                color: 'none',
                scaleFontToUserSetting: !0,
                children: [t, '%']
            })
        ]
    });
}
function N(e) {
    let { percentage: t, shouldAnimate: n } = e,
        r = (0, d.useSpring)(
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
    return (0, i.jsx)(s.animated.span, {
        className: I.votePercentageBar,
        style: r,
        'aria-hidden': !0
    });
}
function v(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: r, isVictor: l, isExpired: a, className: o } = e;
    return (0, c.EQ)({
        answersInteraction: t,
        didSelfVote: r
    })
        .with({ answersInteraction: _.Y7.RADIO_BUTTONS }, () =>
            (0, i.jsx)(g.Og, {
                isSelected: n,
                size: 24,
                className: o
            })
        )
        .with({ answersInteraction: _.Y7.CHECKBOXES }, () =>
            (0, i.jsx)(g.zs, {
                isSelected: n,
                size: 20,
                className: o
            })
        )
        .with(
            {
                answersInteraction: _.Y7.LIST,
                didSelfVote: !0
            },
            () =>
                (0, i.jsx)(g.ZY, {
                    isVictor: l,
                    isExpired: a,
                    size: 24,
                    className: o
                })
        )
        .otherwise(() => null);
}
function T(e) {
    let { answer: t, isExpired: n, answersInteraction: r, canShowVoteCounts: l, canShowVoterDetails: s } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        m = !0 === t.isVictor,
        h = t.shouldAnimateTransition;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: a()(I.answerInner, {
                [I.currentlyVoting]: r !== _.Y7.LIST,
                [I.selected]: c
            }),
            children: [
                l
                    ? (0, i.jsx)(N, {
                          percentage: t.votesPercentage,
                          shouldAnimate: h
                      })
                    : null,
                null != t.pollMedia.emoji &&
                    (0, i.jsx)(g.sc, {
                        className: I.emoji,
                        emoji: t.pollMedia.emoji
                    }),
                (0, i.jsx)(d.Text, {
                    className: I.label,
                    variant: 'text-sm/semibold',
                    color: 'none',
                    scaleFontToUserSetting: !0,
                    children: t.pollMedia.text
                }),
                t.didSelfVote && (0, i.jsx)(o.T, { children: C.intl.string(C.t['8DAM+/']) }),
                l &&
                    (0, i.jsx)(x, {
                        percentage: t.votesPercentage,
                        label: t.votes,
                        canShowVoterDetails: s,
                        answerId: t.answerId
                    }),
                (0, i.jsx)(v, {
                    answersInteraction: r,
                    isSelected: c,
                    didSelfVote: u,
                    isVictor: m,
                    isExpired: n,
                    className: I.answerSelectionIcon
                })
            ]
        })
    });
}
function S(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: r, canTapAnswers: l, ...a } = e;
    return (0, i.jsx)(g.$e, {
        className: I.answersContainer,
        answerClassName: I.answer,
        answersInteraction: n,
        canTapAnswers: l,
        renderAnswerContent: (e) =>
            (0, i.jsx)(T, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: r,
                canShowVoterDetails: l
            }),
        ...a
    });
}
